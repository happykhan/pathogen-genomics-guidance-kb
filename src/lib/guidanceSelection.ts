import { guidanceBlocks } from "../data/guidanceBlocks";
import { resolveGuidanceBlockForProfile } from "./guidanceVariants";
import type { GuidanceBlock } from "../types/content";
import type { Profile } from "../types/profile";

function hasProfileOrganism(block: GuidanceBlock, profile: Profile) {
  return profile.organisms.some((organism) => block.organisms.includes(organism));
}

function matchesAudience(block: GuidanceBlock, profile: Profile) {
  if (profile.role === "programme-lead") return true;
  return block.audiences.includes("all") || block.audiences.includes(profile.role);
}

function matchesStage(block: GuidanceBlock, profile: Profile) {
  return block.implementationStages.includes(profile.stage);
}

function matchesInfrastructure(block: GuidanceBlock, profile: Profile) {
  return !block.infrastructure || block.infrastructure.includes(profile.infrastructure);
}

export function includeGuidanceBlock(block: GuidanceBlock, profile: Profile): boolean {
  const organismSpecific = !block.organisms.includes("general");
  if (organismSpecific && !hasProfileOrganism(block, profile)) return false;

  const audienceMatch = matchesAudience(block, profile);
  const stageMatch = matchesStage(block, profile);
  const infrastructureMatch = matchesInfrastructure(block, profile);

  return audienceMatch && stageMatch && infrastructureMatch;
}

export function guidanceInclusionReason(block: GuidanceBlock, profile: Profile): string {
  const missing = [];
  if (!matchesAudience(block, profile)) missing.push("reader role");
  if (!matchesStage(block, profile)) missing.push("programme stage");
  if (!matchesInfrastructure(block, profile)) missing.push("compute context");
  if (!block.organisms.includes("general") && !hasProfileOrganism(block, profile)) missing.push("organism or programme");
  return missing.length ? `Not matched to ${missing.join(", ")}` : "Matched to profile";
}

export type SelectedGuidanceBlock = {
  block: GuidanceBlock;
  sourceBlock: GuidanceBlock;
  index: number;
  reason: string;
  included: boolean;
};

export function getGuidanceSelection(profile: Profile): SelectedGuidanceBlock[] {
  return guidanceBlocks.map((sourceBlock, index) => {
    const included = includeGuidanceBlock(sourceBlock, profile);

    return {
      block: resolveGuidanceBlockForProfile(sourceBlock, profile),
      sourceBlock,
      index,
      reason: guidanceInclusionReason(sourceBlock, profile),
      included,
    };
  });
}

export function getVisibleGuidanceBlocks(profile: Profile, showAllSections: boolean): SelectedGuidanceBlock[] {
  return getGuidanceSelection(profile).filter((item) => showAllSections || item.included);
}
