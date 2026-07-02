import type { GuidanceBlock } from "../types/content";
import type { Profile } from "../types/profile";

export function resolveGuidanceBlockForProfile(block: GuidanceBlock, profile: Profile): GuidanceBlock {
  const variant = block.roleVariants?.[profile.role];

  if (!variant) return block;

  return {
    ...block,
    ...variant,
    id: block.id,
    audiences: block.audiences,
    implementationStages: block.implementationStages,
    organisms: block.organisms,
    infrastructure: block.infrastructure,
    topics: block.topics,
    detailLevel: block.detailLevel,
    sourceIds: variant.sourceIds ?? block.sourceIds,
    roleVariants: block.roleVariants,
  };
}
