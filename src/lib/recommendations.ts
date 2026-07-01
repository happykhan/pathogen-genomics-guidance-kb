import type { GuidanceBlock, ResourceRecord } from "../types/content";
import type { Profile } from "../types/profile";

function hasAny(topics: string[], candidates: string[]) {
  return topics.some((topic) => candidates.includes(topic));
}

export function scoreTopics(profile: Profile, topics: string[]): number {
  let score = 0;
  if (profile.goals.includes("design-infrastructure")) {
    score += hasAny(topics, ["infrastructure", "cloud", "local-compute", "operating-model", "storage", "backup", "archive", "retention", "data-lifecycle", "lims"]) ? 6 : 0;
    score += hasAny(topics, ["workflow", "provenance", "metadata", "validation", "quality", "workforce", "costing", "procurement"]) ? 3 : 0;
  }
  if (profile.goals.includes("validate-workflows")) {
    score += hasAny(topics, ["workflow", "validation", "quality", "provenance", "failure-handling", "continuous-improvement"]) ? 4 : 0;
    score += hasAny(topics, ["data-lifecycle", "metadata", "reporting"]) ? 2 : 0;
  }
  if (profile.goals.includes("share-data")) {
    score += hasAny(topics, ["data-sharing", "repositories", "governance", "metadata", "interoperability", "iam", "security"]) ? 4 : 0;
  }
  if (profile.goals.includes("make-case")) {
    score += hasAny(topics, ["strategy", "decision-use", "public-health", "costing", "workforce"]) ? 3 : 0;
  }
  if (profile.goals.includes("assess-tier")) {
    score += hasAny(topics, ["maturity", "implementation", "infrastructure", "sustainability"]) ? 4 : 0;
  }
  return score;
}

function scoreRoleNeeds(profile: Profile, topics: string[]): number {
  if (profile.role === "bioinformatician") {
    return hasAny(topics, ["workflow", "provenance", "validation", "quality", "storage", "backup", "infrastructure", "metadata"]) ? 3 : 0;
  }
  if (profile.role === "it-security") {
    return hasAny(topics, ["iam", "security", "storage", "backup", "cloud", "local-compute", "data-sharing", "governance", "infrastructure"]) ? 3 : 0;
  }
  if (profile.role === "lab-lead") {
    return hasAny(topics, ["quality", "validation", "data-lifecycle", "metadata", "reporting", "workflow", "workforce"]) ? 3 : 0;
  }
  if (profile.role === "data-manager") {
    return hasAny(topics, ["metadata", "data-lifecycle", "data-sharing", "repositories", "interoperability", "storage", "retention"]) ? 3 : 0;
  }
  if (profile.role === "director" || profile.role === "policy" || profile.role === "funder") {
    return hasAny(topics, ["public-health", "decision-use", "costing", "workforce", "sustainability", "implementation", "governance"]) ? 3 : 0;
  }
  if (profile.role === "mixed") {
    return hasAny(topics, ["use-case", "service-model", "data-lifecycle", "metadata", "workflow", "storage", "backup", "infrastructure", "operating-model", "quality"]) ? 2 : 0;
  }
  return 0;
}

function scoreConstraints(profile: Profile, topics: string[]): number {
  let score = 0;
  const constraints = profile.constraints;

  if (constraints.internetReliable === false) {
    if (hasAny(topics, ["local-compute", "storage", "backup", "archive", "retention", "operating-model"])) score += 3;
    if (hasAny(topics, ["cloud", "data-sharing", "repositories"])) score -= 2;
  }

  if (constraints.bioinformaticsStaff === false) {
    if (hasAny(topics, ["workforce", "training", "sustainability", "operating-model", "managed-platform"])) score += 3;
    if (hasAny(topics, ["workflow", "provenance", "validation"])) score += 1;
  }

  if (constraints.centralIT === false) {
    if (hasAny(topics, ["sustainability", "procurement", "security", "iam", "operating-model", "backup"])) score += 2;
    if (hasAny(topics, ["hpc", "local-compute"])) score -= 1;
  }

  if (constraints.lims === false) {
    if (hasAny(topics, ["metadata", "lims", "data-lifecycle", "reporting", "interoperability"])) score += 3;
  }

  if (constraints.cloudAllowed === false || constraints.dataResidencyConcern === true) {
    if (hasAny(topics, ["governance", "security", "storage", "backup", "data-sharing", "repositories", "local-compute"])) score += 2;
    if (hasAny(topics, ["cloud"])) score -= 3;
  }

  return score;
}

export function scoreGuidanceBlock(block: GuidanceBlock, profile: Profile): number {
  let score = 0;
  if (block.audiences.includes("all") || block.audiences.includes(profile.role)) score += 5;
  else if (profile.role === "mixed") score += 2;
  if (block.implementationStages.includes(profile.stage)) score += 3;
  if (block.organisms.includes("general")) score += 1;
  if (profile.organisms.some((organism) => block.organisms.includes(organism))) score += 2;
  if (!block.infrastructure || block.infrastructure.includes(profile.infrastructure)) score += 1;
  score += scoreTopics(profile, block.topics);
  score += scoreConstraints(profile, block.topics);
  score += scoreRoleNeeds(profile, block.topics);
  return score;
}

export function scoreResource(resource: ResourceRecord, profile: Profile): number {
  let score = 0;
  if (resource.audiences.includes(profile.role)) score += 5;
  if (resource.implementationStages.includes(profile.stage)) score += 3;
  if (resource.organisms.includes("general")) score += 1;
  if (profile.organisms.some((organism) => resource.organisms.includes(organism))) score += 3;
  if (resource.sourceStatus === "extracted") score += 2;
  score += scoreTopics(profile, resource.topics);
  score += scoreConstraints(profile, resource.topics);
  return score;
}
