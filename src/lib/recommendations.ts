import type { ResourceRecord } from "../types/content";
import type { Profile } from "../types/profile";

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
