import type { Audience, ImplementationStage, OrganismFocus } from "./profile";

export type WhoIrisRecord = {
  id: string;
  title: string;
  year: string;
  issued: string;
  handle: string;
  url: string;
  pdfUrl?: string;
  authors: string[];
  language?: string;
  pages?: string;
  abstract?: string;
  topics: string[];
  organisms: OrganismFocus[];
  audiences: Audience[];
  stages: ImplementationStage[];
  searchText: string;
  map: {
    x: number;
    y: number;
  };
  similar: string[];
};

