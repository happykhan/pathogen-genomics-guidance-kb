import type {
  Audience,
  DetailLevel,
  ImplementationStage,
  InfrastructureContext,
  OrganismFocus,
} from "./profile";

export type GuidanceBlock = {
  id: string;
  title: string;
  summary: string;
  sourceStatus: "reviewed" | "partial" | "gap";
  summarySourceIds?: string[];
  body: string[];
  bodySourceIds?: Record<number, string[]>;
  bodyCitationAnchors?: Record<number, { text: string; sourceIds: string[] }[]>;
  subsections?: {
    title: string;
    body: string[];
    bodySourceIds?: Record<number, string[]>;
    bodyCitationAnchors?: Record<number, { text: string; sourceIds: string[] }[]>;
  }[];
  technicalDetail?: string[];
  technicalDetailSourceIds?: Record<number, string[]>;
  technicalDetailCitationAnchors?: Record<number, { text: string; sourceIds: string[] }[]>;
  tables?: {
    title: string;
    summary?: string;
    columns: string[];
    rows: {
      cells: string[];
      sourceIds?: string[];
    }[];
    sourceIds?: string[];
  }[];
  audiences: Audience[];
  implementationStages: ImplementationStage[];
  organisms: OrganismFocus[];
  infrastructure?: InfrastructureContext[];
  topics: string[];
  detailLevel: DetailLevel;
  sourceIds: string[];
  gaps?: string[];
};

export type ResourceRecord = {
  id: string;
  title: string;
  agency: string;
  year: string;
  url: string;
  pdfUrl?: string;
  doi?: string;
  sourceCardPath?: string;
  documentType: "paper" | "guidance" | "strategy" | "toolkit" | "case-study" | "source-pack";
  audiences: Audience[];
  topics: string[];
  organisms: OrganismFocus[];
  implementationStages: ImplementationStage[];
  summary: string;
  whyUseful: string;
  keywords: string[];
  sourceStatus: "extracted" | "candidate";
};
