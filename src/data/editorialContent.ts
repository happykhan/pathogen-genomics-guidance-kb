import seedClaims from "../../editorial/claim-cards/seed-claims.json";
import seedBriefs from "../../editorial/section-briefs/seed-briefs.json";
import seedFragments from "../../editorial/fragments/seed-fragments.json";
import type {
  EvidenceClaimCard,
  SectionSynthesisBrief,
  WhitepaperFragment,
} from "../types/editorial";
import { whitepaperOutline } from "./whitepaperOutline";

export const evidenceClaimCards = seedClaims as EvidenceClaimCard[];
export const sectionSynthesisBriefs = seedBriefs as SectionSynthesisBrief[];
export const whitepaperFragments = seedFragments as WhitepaperFragment[];

export function getEditorialCoverage() {
  const claimIds = new Set(evidenceClaimCards.map((claim) => claim.id));
  const fragmentClaimIds = new Set(whitepaperFragments.flatMap((fragment) => fragment.claimIds));
  const orphanClaimIds = evidenceClaimCards
    .filter((claim) => !whitepaperFragments.some((fragment) => fragment.claimIds.includes(claim.id)))
    .map((claim) => claim.id);
  const missingClaimIds = [...fragmentClaimIds].filter((claimId) => !claimIds.has(claimId));

  return {
    outlineSections: whitepaperOutline.length,
    claimCards: evidenceClaimCards.length,
    sectionBriefs: sectionSynthesisBriefs.length,
    fragments: whitepaperFragments.length,
    reviewedFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "reviewed").length,
    draftFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "draft").length,
    gapFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "gap").length,
    orphanClaimIds,
    missingClaimIds,
  };
}
