import seedEvidenceItems from "../../editorial/evidence-items/seed-evidence.json";
import seedClaims from "../../editorial/claim-cards/seed-claims.json";
import seedBriefs from "../../editorial/section-briefs/seed-briefs.json";
import seedFragments from "../../editorial/fragments/seed-fragments.json";
import type {
  EvidenceItem,
  EvidenceClaimCard,
  SectionSynthesisBrief,
  WhitepaperFragment,
} from "../types/editorial";
import { whitepaperOutline } from "./whitepaperOutline";

export const evidenceItems = seedEvidenceItems as EvidenceItem[];
export const evidenceClaimCards = seedClaims as EvidenceClaimCard[];
export const sectionSynthesisBriefs = seedBriefs as SectionSynthesisBrief[];
export const whitepaperFragments = seedFragments as WhitepaperFragment[];

export function getEditorialCoverage() {
  const evidenceItemIds = new Set(evidenceItems.map((item) => item.id));
  const claimIds = new Set(evidenceClaimCards.map((claim) => claim.id));
  const claimEvidenceItemIds = new Set(evidenceClaimCards.flatMap((claim) => claim.evidenceItemIds ?? []));
  const fragmentClaimIds = new Set(whitepaperFragments.flatMap((fragment) => fragment.claimIds));
  const orphanEvidenceItemIds = evidenceItems
    .filter((item) => !evidenceClaimCards.some((claim) => claim.evidenceItemIds?.includes(item.id)))
    .map((item) => item.id);
  const missingEvidenceItemIds = [...claimEvidenceItemIds].filter((itemId) => !evidenceItemIds.has(itemId));
  const orphanClaimIds = evidenceClaimCards
    .filter((claim) => !whitepaperFragments.some((fragment) => fragment.claimIds.includes(claim.id)))
    .map((claim) => claim.id);
  const missingClaimIds = [...fragmentClaimIds].filter((claimId) => !claimIds.has(claimId));

  return {
    outlineSections: whitepaperOutline.length,
    evidenceItems: evidenceItems.length,
    claimCards: evidenceClaimCards.length,
    sectionBriefs: sectionSynthesisBriefs.length,
    fragments: whitepaperFragments.length,
    reviewedFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "reviewed").length,
    draftFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "draft").length,
    gapFragments: whitepaperFragments.filter((fragment) => fragment.reviewStatus === "gap").length,
    orphanEvidenceItemIds,
    missingEvidenceItemIds,
    orphanClaimIds,
    missingClaimIds,
  };
}
