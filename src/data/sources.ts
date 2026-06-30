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
  "who-genomic-surveillance-2022": {
    label: "WHO 2022, Global genomic surveillance strategy for pathogens with pandemic and epidemic potential",
    path: "knowledge-base/source-cards/who-global-genomic-surveillance-strategy-2022.md",
  },
  "wgs-economic-review": {
    label: "Systematic review of economic evaluations of whole-genome sequencing for pathogen identification and surveillance",
    path: "knowledge-base/source-cards/wgs-economic-evaluation-review.md",
  },
} as const;

export type SourceId = keyof typeof sources;
