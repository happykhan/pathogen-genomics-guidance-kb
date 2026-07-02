import type { GuidanceBlock, ResourceRecord } from "../types/content";
import type { Profile } from "../types/profile";

function hasAny(topics: string[], candidates: string[]) {
  return topics.some((topic) => candidates.includes(topic));
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
  if (profile.role === "programme-lead") {
    return hasAny(topics, ["use-case", "service-model", "data-lifecycle", "metadata", "workflow", "storage", "backup", "infrastructure", "operating-model", "quality", "workforce", "costing"]) ? 3 : 0;
  }
  return 0;
}

export function scoreGuidanceBlock(block: GuidanceBlock, profile: Profile): number {
  let score = 0;
  const organismMatch = profile.organisms.some((organism) => block.organisms.includes(organism));
  const organismSpecific = !block.organisms.includes("general");

  if (block.audiences.includes("all") || block.audiences.includes(profile.role)) score += 5;
  else if (profile.role === "programme-lead") score += 2;
  if (block.implementationStages.includes(profile.stage)) score += 3;
  if (block.organisms.includes("general")) score += 1;
  if (organismMatch) score += 2;
  if (organismSpecific && !organismMatch) score -= 5;
  if (!block.infrastructure || block.infrastructure.includes(profile.infrastructure)) score += 1;
  score += scoreRoleNeeds(profile, block.topics);
  return score;
}

export function scoreResource(resource: ResourceRecord, profile: Profile): number {
  let score = 0;
  if (resource.audiences.includes(profile.role)) score += 5;
  if (
    profile.role === "programme-lead" &&
    resource.audiences.some((audience) => ["director", "policy", "lab-lead", "data-manager"].includes(audience))
  ) {
    score += 4;
  }
  if (resource.implementationStages.includes(profile.stage)) score += 3;
  if (resource.organisms.includes("general")) score += 1;
  if (profile.organisms.some((organism) => resource.organisms.includes(organism))) score += 3;
  if (resource.sourceStatus === "extracted") score += 2;
  return score;
}
