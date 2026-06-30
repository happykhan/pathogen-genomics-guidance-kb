export const sources = {
  "pha4ge-infrastructure": {
    label: "PHA4GE infrastructure source pack",
    path: "knowledge-base/source-cards/pha4ge-infrastructure.md",
  },
  "phe-case-study": {
    label: "Grant et al. 2018, Implementing pathogen genomics: a case study",
    path: "knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md",
  },
  "cdc-nejm-2019": {
    label: "Armstrong et al. 2019, Pathogen Genomics in Public Health",
    path: "knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md",
  },
} as const;

export type SourceId = keyof typeof sources;
