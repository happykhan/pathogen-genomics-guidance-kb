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

const scenarios = [
  {
    label: "unreliable internet",
    profile: withProfile({ constraints: { internetReliable: false } }),
    checks: [
      () => expectBoost("unreliable internet", scoreBlock, "storage-backup-archive-distinction", scenarios[0].profile, 3),
      () =>
        expectPenalty(
          "unreliable internet",
          scoreNamedResource,
          "who-genomic-data-sharing-platforms-2025",
          scenarios[0].profile,
          2,
        ),
    ],
  },
  {
    label: "no bioinformatics staff",
    profile: withProfile({ constraints: { bioinformaticsStaff: false } }),
    checks: [
      () => expectBoost("no bioinformatics staff", scoreBlock, "workforce-is-part-of-system", scenarios[1].profile, 3),
      () => expectBoost("no bioinformatics staff", scoreNamedResource, "clinical-microbiology-implementation-2026", scenarios[1].profile, 1),
    ],
  },
  {
    label: "no central IT",
    profile: withProfile({ constraints: { centralIT: false } }),
    checks: [
      () => expectBoost("no central IT", scoreBlock, "infrastructure-operating-model", scenarios[2].profile, 2),
      () => expectBoost("no central IT", scoreBlock, "storage-backup-archive-distinction", scenarios[2].profile, 2),
    ],
  },
  {
    label: "no LIMS",
    profile: withProfile({ constraints: { lims: false } }),
    checks: [
      () => expectBoost("no LIMS", scoreBlock, "metadata-and-epidemiology-integration", scenarios[3].profile, 3),
      () => expectBoost("no LIMS", scoreBlock, "data-lifecycle-sample-to-report", scenarios[3].profile, 3),
    ],
  },
  {
    label: "cloud restricted",
    profile: withProfile({ constraints: { cloudAllowed: false, dataResidencyConcern: true } }),
    checks: [
      () => expectBoost("cloud restricted", scoreBlock, "sharing-is-not-unconditional", scenarios[4].profile, 2),
      () => expectPenalty("cloud restricted", scoreBlock, "avoid-one-size-fits-all-cloud", scenarios[4].profile, 1),
    ],
  },
];

scenarios.forEach((scenario) => scenario.checks.forEach((check) => check()));

if (errors.length) {
  console.error("Scenario QA failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Scenario QA passed: ${scenarios.map((scenario) => scenario.label).join(", ")}.`);
