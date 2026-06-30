import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function loadGuidanceBlocks() {
  const source = read("src/data/guidanceBlocks.ts")
    .replace(/import type \{ GuidanceBlock \} from "\.\.\/types\/content";\n\n/, "")
    .replace(/export const guidanceBlocks: GuidanceBlock\[] =/, "const guidanceBlocks =")
    .replace(/;\s*$/, ";\nreturn guidanceBlocks;");
  return Function(source)();
}

function loadResources() {
  const source = read("src/data/resources.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n/, "")
    .replace(/export const resources: ResourceRecord\[] =/, "const resources =")
    .replace(/;\s*$/, ";\nreturn resources;");
  return Function(source)();
}

function loadRecommendationFunctions() {
  const source = read("src/lib/recommendations.ts")
    .replace(/import type [^\n]+\n/g, "")
    .replace(/export function /g, "function ")
    .replace(/function hasAny\(topics: string\[], candidates: string\[]\)/, "function hasAny(topics, candidates)")
    .replace(/function scoreTopics\(profile: Profile, topics: string\[\]\): number/, "function scoreTopics(profile, topics)")
    .replace(/function scoreConstraints\(profile: Profile, topics: string\[\]\): number/, "function scoreConstraints(profile, topics)")
    .replace(/function scoreGuidanceBlock\(block: GuidanceBlock, profile: Profile\): number/, "function scoreGuidanceBlock(block, profile)")
    .replace(/function scoreResource\(resource: ResourceRecord, profile: Profile\): number/, "function scoreResource(resource, profile)")
    .concat("\nreturn { scoreGuidanceBlock, scoreResource };\n");
  return Function(source)();
}

const defaultProfile = {
  role: "mixed",
  stage: "exploring",
  organisms: ["general"],
  infrastructure: "unknown",
  goals: ["design-infrastructure"],
  constraints: {
    internetReliable: null,
    bioinformaticsStaff: null,
    centralIT: null,
    lims: null,
    cloudAllowed: null,
    dataResidencyConcern: null,
  },
};

function withProfile(overrides) {
  return {
    ...defaultProfile,
    ...overrides,
    constraints: {
      ...defaultProfile.constraints,
      ...(overrides.constraints ?? {}),
    },
  };
}

const guidanceBlocks = loadGuidanceBlocks();
const resources = loadResources();
const { scoreGuidanceBlock, scoreResource } = loadRecommendationFunctions();
const blockById = new Map(guidanceBlocks.map((block) => [block.id, block]));
const resourceById = new Map(resources.map((resource) => [resource.id, resource]));
const errors = [];

function scoreBlock(id, profile) {
  const block = blockById.get(id);
  if (!block) throw new Error(`Missing guidance block ${id}`);
  return scoreGuidanceBlock(block, profile);
}

function scoreNamedResource(id, profile) {
  const resource = resourceById.get(id);
  if (!resource) throw new Error(`Missing resource ${id}`);
  return scoreResource(resource, profile);
}

function expectBoost(label, scorer, targetId, profile, minimumDelta = 1) {
  const base = scorer(targetId, defaultProfile);
  const next = scorer(targetId, profile);
  if (next - base < minimumDelta) {
    errors.push(`${label}: expected ${targetId} to gain at least ${minimumDelta}; base=${base}, scenario=${next}`);
  }
}

function expectPenalty(label, scorer, targetId, profile, minimumDelta = 1) {
  const base = scorer(targetId, defaultProfile);
  const next = scorer(targetId, profile);
  if (base - next < minimumDelta) {
    errors.push(`${label}: expected ${targetId} to lose at least ${minimumDelta}; base=${base}, scenario=${next}`);
  }
}

function topGuidanceIds(profile, limit = 5) {
  return guidanceBlocks
    .map((block) => ({ id: block.id, score: scoreGuidanceBlock(block, profile) }))
    .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
    .slice(0, limit)
    .map((entry) => entry.id);
}

function expectTopGuidance(label, profile, expectedIds, limit = 5) {
  const topIds = topGuidanceIds(profile, limit);
  const missingIds = expectedIds.filter((id) => !topIds.includes(id));
  if (missingIds.length) {
    errors.push(`${label}: expected top ${limit} guidance to include ${missingIds.join(", ")}; got ${topIds.join(", ")}`);
  }
}

const constraintScenarios = [
  {
    label: "unreliable internet",
    profile: withProfile({ constraints: { internetReliable: false } }),
    checks: [
      () => expectBoost("unreliable internet", scoreBlock, "storage-backup-archive-distinction", constraintScenarios[0].profile, 3),
      () =>
        expectPenalty(
          "unreliable internet",
          scoreNamedResource,
          "who-genomic-data-sharing-platforms-2025",
          constraintScenarios[0].profile,
          2,
        ),
    ],
  },
  {
    label: "no bioinformatics staff",
    profile: withProfile({ constraints: { bioinformaticsStaff: false } }),
    checks: [
      () => expectBoost("no bioinformatics staff", scoreBlock, "workforce-is-part-of-system", constraintScenarios[1].profile, 3),
      () =>
        expectBoost(
          "no bioinformatics staff",
          scoreNamedResource,
          "clinical-microbiology-implementation-2026",
          constraintScenarios[1].profile,
          1,
        ),
    ],
  },
  {
    label: "no central IT",
    profile: withProfile({ constraints: { centralIT: false } }),
    checks: [
      () => expectBoost("no central IT", scoreBlock, "infrastructure-operating-model", constraintScenarios[2].profile, 2),
      () => expectBoost("no central IT", scoreBlock, "storage-backup-archive-distinction", constraintScenarios[2].profile, 2),
    ],
  },
  {
    label: "no LIMS",
    profile: withProfile({ constraints: { lims: false } }),
    checks: [
      () => expectBoost("no LIMS", scoreBlock, "metadata-and-epidemiology-integration", constraintScenarios[3].profile, 3),
      () => expectBoost("no LIMS", scoreBlock, "data-lifecycle-sample-to-report", constraintScenarios[3].profile, 3),
    ],
  },
  {
    label: "cloud restricted",
    profile: withProfile({ constraints: { cloudAllowed: false, dataResidencyConcern: true } }),
    checks: [
      () => expectBoost("cloud restricted", scoreBlock, "sharing-is-not-unconditional", constraintScenarios[4].profile, 2),
      () => expectPenalty("cloud restricted", scoreBlock, "avoid-one-size-fits-all-cloud", constraintScenarios[4].profile, 1),
    ],
  },
];

const representativeProfiles = [
  {
    label: "director making the investment case",
    profile: withProfile({
      role: "director",
      stage: "exploring",
      goals: ["make-case"],
    }),
    expectedTopGuidance: ["why-pathogen-genomics", "investment-case-assumptions"],
  },
  {
    label: "laboratory lead piloting a service",
    profile: withProfile({
      role: "lab-lead",
      stage: "pilot",
      goals: ["design-infrastructure", "validate-workflows"],
    }),
    expectedTopGuidance: ["quality-validation-before-switch"],
  },
  {
    label: "bioinformatician validating workflows",
    profile: withProfile({
      role: "bioinformatician",
      stage: "routine-service",
      infrastructure: "hpc",
      goals: ["validate-workflows"],
    }),
    expectedTopGuidance: ["workflow-reproducibility"],
  },
  {
    label: "IT/security reviewing data sharing and residency",
    profile: withProfile({
      role: "it-security",
      stage: "national-scale",
      infrastructure: "cloud",
      goals: ["share-data"],
      constraints: { cloudAllowed: false, dataResidencyConcern: true },
    }),
    expectedTopGuidance: ["sharing-is-not-unconditional", "iam-is-continuous"],
  },
  {
    label: "mixed team exploring infrastructure options",
    profile: defaultProfile,
    expectedTopGuidance: ["infrastructure-operating-model", "implementation-model-dependencies"],
  },
];

constraintScenarios.forEach((scenario) => scenario.checks.forEach((check) => check()));
representativeProfiles.forEach((scenario) =>
  expectTopGuidance(scenario.label, scenario.profile, scenario.expectedTopGuidance, 7),
);

if (errors.length) {
  console.error("Scenario QA failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Scenario QA passed: ${constraintScenarios.length} constraint scenarios and ${representativeProfiles.length} representative profiles.`,
);
