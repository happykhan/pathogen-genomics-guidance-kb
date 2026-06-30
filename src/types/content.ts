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
  body: string[];
  subsections?: {
    title: string;
    body: string[];
  }[];
  technicalDetail?: string[];
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
