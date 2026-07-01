import type {
  Audience,
  ImplementationStage,
  InfrastructureContext,
  OrganismFocus,
} from "./profile";

export type EditorialReviewStatus = "draft" | "reviewed" | "gap" | "deprecated";

export type GapSeverity = "blocking" | "partial-evidence" | "needs-extraction" | "future-enhancement";

export type ProfileCondition = {
  audiences?: Audience[];
  implementationStages?: ImplementationStage[];
  organisms?: OrganismFocus[];
  infrastructure?: InfrastructureContext[];
  topics?: string[];
  constraints?: Partial<
    Record<
      | "internetReliable"
      | "bioinformaticsStaff"
      | "centralIT"
      | "lims"
      | "cloudAllowed"
      | "dataResidencyConcern",
      boolean | null
    >
  >;
};

export type WhitepaperOutlineSection = {
  id: string;
  order: number;
  title: string;
  purpose: string;
  expectedFragments: string[];
  publicByDefault: boolean;
};

export type EvidenceItem = {
  id: string;
  sourceId: string;
  sourceLocator: string;
  evidenceType: "short-excerpt" | "passage-note" | "figure" | "table" | "source-card-summary";
  excerpt?: string;
  passageSummary: string;
  tags: string[];
  limitations?: string;
  reviewStatus: EditorialReviewStatus;
};

export type EvidenceClaimCard = {
  id: string;
  sourceId: string;
  sourceLocator: string;
  evidenceItemIds: string[];
  claim: string;
  extractedText?: string;
  notes?: string;
  tags: string[];
  candidateSectionIds: string[];
  organism?: OrganismFocus | "multiple";
  audience?: Audience | "multiple";
  implementationStage?: ImplementationStage | "multiple";
  confidence: "high" | "medium" | "low";
  limitations?: string;
  reviewStatus: EditorialReviewStatus;
};

export type SectionSynthesisBrief = {
  id: string;
  sectionId: string;
  purpose: string;
  readerActionAfterReading: string;
  mustCover: string[];
  doNotClaim: string[];
  preferredClaimIds: string[];
  conditionalVariantsNeeded: string[];
  figuresTablesWanted: string[];
  knownGaps: string[];
  reviewNotes: string;
  reviewStatus: EditorialReviewStatus;
};

export type WhitepaperFragment = {
  id: string;
  sectionId: string;
  title?: string;
  kind: "paragraph" | "exampleBox" | "checklist" | "table" | "figure" | "gap";
  text: string;
  claimIds: string[];
  sourceIds: string[];
  conditions?: ProfileCondition;
  mutuallyExclusiveGroup?: string;
  order: number;
  reviewStatus: EditorialReviewStatus;
  reviewerNotes?: string;
  updatedAt?: string;
};

export type StructuredGap = {
  id: string;
  sectionId: string;
  fragmentId?: string;
  severity: GapSeverity;
  title: string;
  detail: string;
  sourceNeed: string;
  reviewStatus: EditorialReviewStatus;
};
