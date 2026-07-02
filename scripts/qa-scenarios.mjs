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
  const collectionSource = read("src/data/microbialGenomicsCollection.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n?/, "")
    .replace(/export const microbialGenomicsCollectionResources: ResourceRecord\[] =/, "const microbialGenomicsCollectionResources =")
    .replace(/;\s*$/, ";\nreturn microbialGenomicsCollectionResources;");
  const microbialGenomicsCollectionResources = Function(collectionSource)();
  const source = read("src/data/resources.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n?/, "")
    .replace(/import \{ microbialGenomicsCollectionResources \} from "\.\/microbialGenomicsCollection";\n/, "")
    .replace(/export const resources: ResourceRecord\[] =/, "const resources =")
    .replace(/;\s*$/, ";\nreturn resources;");
  return Function("microbialGenomicsCollectionResources", source)(microbialGenomicsCollectionResources);
}

function loadRecommendationFunctions() {
  const source = read("src/lib/recommendations.ts")
    .replace(/import type [^\n]+\n/g, "")
    .replace(/export function /g, "function ")
    .replace(/function hasAny\(topics: string\[], candidates: string\[]\)/, "function hasAny(topics, candidates)")
    .replace(/function scoreRoleNeeds\(profile: Profile, topics: string\[\]\): number/, "function scoreRoleNeeds(profile, topics)")
    .replace(/function scoreGuidanceBlock\(block: GuidanceBlock, profile: Profile\): number/, "function scoreGuidanceBlock(block, profile)")
    .replace(/function scoreResource\(resource: ResourceRecord, profile: Profile\): number/, "function scoreResource(resource, profile)")
    .concat("\nreturn { scoreGuidanceBlock, scoreResource };\n");
  return Function(source)();
}

const defaultProfile = {
  role: "programme-lead",
  stage: "exploring",
  organisms: ["general"],
  infrastructure: "unknown",
};

function withProfile(overrides) {
  return {
    ...defaultProfile,
    ...overrides,
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

function expectVisibleGuidance(label, profile, expectedIds, minimumScore = 7) {
  expectedIds.forEach((id) => {
    const score = scoreBlock(id, profile);
    if (score < minimumScore) {
      errors.push(`${label}: expected ${id} to score at least ${minimumScore}; got ${score}`);
    }
  });
}

const representativeProfiles = [
  {
    label: "director making the investment case",
    profile: withProfile({
      role: "director",
      stage: "exploring",
    }),
    expectedVisibleGuidance: ["why-pathogen-genomics", "investment-case-assumptions"],
  },
  {
    label: "laboratory lead piloting a service",
    profile: withProfile({
      role: "lab-lead",
      stage: "pilot",
    }),
    expectedVisibleGuidance: ["quality-validation-before-switch"],
  },
  {
    label: "bioinformatician validating workflows",
    profile: withProfile({
      role: "bioinformatician",
      stage: "routine-service",
      infrastructure: "hpc",
    }),
    expectedVisibleGuidance: ["workflow-reproducibility"],
  },
  {
    label: "IT/security reviewing data sharing and residency",
    profile: withProfile({
      role: "it-security",
      stage: "national-scale",
      infrastructure: "cloud",
    }),
    expectedVisibleGuidance: ["sharing-is-not-unconditional", "iam-is-continuous"],
  },
  {
    label: "programme lead exploring infrastructure options",
    profile: defaultProfile,
    expectedVisibleGuidance: [
      "data-lifecycle-sample-to-report",
      "metadata-and-epidemiology-integration",
      "storage-backup-archive-distinction",
      "workflow-reproducibility",
      "infrastructure-operating-model",
      "implementation-model-dependencies",
    ],
  },
];

const organismProfiles = [
  {
    label: "enteric bacteria service profile",
    profile: withProfile({
      role: "lab-lead",
      stage: "pilot",
      organisms: ["enteric-bacteria"],
    }),
    expectedVisibleGuidance: [
      "use-case-service-model",
      "reporting-decision-use",
      "reporting-enteric-bacteria",
      "metadata-and-epidemiology-integration",
      "sharing-is-not-unconditional",
    ],
  },
  {
    label: "respiratory virus sharing profile",
    profile: withProfile({
      role: "data-manager",
      stage: "routine-service",
      organisms: ["respiratory-viruses"],
    }),
    expectedVisibleGuidance: [
      "use-case-service-model",
      "reporting-decision-use",
      "reporting-respiratory-viruses",
      "metadata-and-epidemiology-integration",
      "sharing-is-not-unconditional",
    ],
  },
  {
    label: "TB validation profile",
    profile: withProfile({
      role: "bioinformatician",
      stage: "routine-service",
      organisms: ["tb"],
    }),
    expectedVisibleGuidance: [
      "use-case-service-model",
      "quality-validation-before-switch",
      "workflow-reproducibility",
      "reporting-tb",
      "reporting-decision-use",
    ],
  },
  {
    label: "AMR validation profile",
    profile: withProfile({
      role: "bioinformatician",
      stage: "routine-service",
      organisms: ["amr"],
    }),
    expectedVisibleGuidance: [
      "use-case-service-model",
      "quality-validation-before-switch",
      "workflow-reproducibility",
      "reporting-amr",
      "reporting-decision-use",
    ],
  },
  {
    label: "healthcare-associated infection profile",
    profile: withProfile({
      role: "lab-lead",
      stage: "routine-service",
      organisms: ["nosocomial", "amr"],
    }),
    expectedVisibleGuidance: [
      "use-case-service-model",
      "quality-validation-before-switch",
      "reporting-healthcare-associated-infection",
      "reporting-amr",
      "reporting-decision-use",
    ],
  },
];

representativeProfiles.forEach((scenario) => {
  if (scenario.expectedVisibleGuidance) {
    expectVisibleGuidance(scenario.label, scenario.profile, scenario.expectedVisibleGuidance);
  }
});
organismProfiles.forEach((scenario) =>
  expectVisibleGuidance(scenario.label, scenario.profile, scenario.expectedVisibleGuidance),
);

if (errors.length) {
  console.error("Scenario QA failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Scenario QA passed: ${representativeProfiles.length} representative profiles and ${organismProfiles.length} organism profiles.`,
);
