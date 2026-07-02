import { guidanceBlocks } from "../data/guidanceBlocks";
import { resolveGuidanceBlockForProfile } from "./guidanceVariants";
import { scoreGuidanceBlock } from "./recommendations";
import type { GuidanceBlock } from "../types/content";
import type { Profile } from "../types/profile";

export const relevanceThreshold = 7;

export type ScoredGuidanceBlock = {
  block: GuidanceBlock;
  sourceBlock: GuidanceBlock;
  index: number;
  score: number;
  included: boolean;
};

export function getScoredGuidanceBlocks(profile: Profile): ScoredGuidanceBlock[] {
  return guidanceBlocks.map((sourceBlock, index) => {
    const score = scoreGuidanceBlock(sourceBlock, profile);

    return {
      block: resolveGuidanceBlockForProfile(sourceBlock, profile),
      sourceBlock,
      index,
      score,
      included: score >= relevanceThreshold,
    };
  });
}

export function getVisibleGuidanceBlocks(profile: Profile, showAllSections: boolean): ScoredGuidanceBlock[] {
  return getScoredGuidanceBlocks(profile).filter((item) => showAllSections || item.included);
}
