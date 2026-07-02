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
const blockById = new Map(guidanceBlocks.map((block) => [block.id, block]));
const errors = [];

function includesGuidanceBlock(block, profile) {
  const organismSpecific = !block.organisms.includes("general");
  const organismMatch = profile.organisms.some((organism) => block.organisms.includes(organism));
  if (organismSpecific && !organismMatch) return false;

  const audienceMatch =
    profile.role === "programme-lead" || block.audiences.includes("all") || block.audiences.includes(profile.role);
  const stageMatch = block.implementationStages.includes(profile.stage);
  const infrastructureMatch = !block.infrastructure || block.infrastructure.includes(profile.infrastructure);

  return audienceMatch && stageMatch && infrastructureMatch;
}

function expectIncludedBlock(id, profile) {
  const block = blockById.get(id);
  if (!block) throw new Error(`Missing guidance block ${id}`);
  return includesGuidanceBlock(block, profile);
}

function expectVisibleGuidance(label, profile, expectedIds) {
  expectedIds.forEach((id) => {
    if (!expectIncludedBlock(id, profile)) {
      errors.push(`${label}: expected ${id} to be included by profile rules`);
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
