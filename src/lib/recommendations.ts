import type { GuidanceBlock, ResourceRecord } from "../types/content";
import type { Profile } from "../types/profile";

export function scoreTopics(profile: Profile, topics: string[]): number {
  let score = 0;
  if (profile.goals.includes("design-infrastructure")) {
    score += topics.some((topic) => ["infrastructure", "cloud", "local-compute", "operating-model"].includes(topic)) ? 3 : 0;
  }
  if (profile.goals.includes("validate-workflows")) {
    score += topics.some((topic) => ["workflow", "validation", "quality", "provenance"].includes(topic)) ? 3 : 0;
  }
  if (profile.goals.includes("share-data")) {
    score += topics.some((topic) => ["data-sharing", "repositories", "governance", "metadata"].includes(topic)) ? 3 : 0;
  }
  if (profile.goals.includes("make-case")) {
    score += topics.some((topic) => ["strategy", "decision-use", "public-health", "costing", "workforce"].includes(topic)) ? 3 : 0;
  }
  if (profile.goals.includes("assess-tier")) {
    score += topics.some((topic) => ["implementation", "infrastructure", "sustainability"].includes(topic)) ? 2 : 0;
  }
  return score;
}

export function scoreGuidanceBlock(block: GuidanceBlock, profile: Profile): number {
  let score = 0;
  if (block.audiences.includes("all") || block.audiences.includes(profile.role)) score += 5;
  if (block.implementationStages.includes(profile.stage)) score += 3;
  if (block.organisms.includes("general")) score += 1;
  if (profile.organisms.some((organism) => block.organisms.includes(organism))) score += 2;
  if (!block.infrastructure || block.infrastructure.includes(profile.infrastructure)) score += 1;
  score += scoreTopics(profile, block.topics);
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
  return score;
}
