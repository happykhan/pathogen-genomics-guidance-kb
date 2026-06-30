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
  "genometrakr-economic-2021": {
    label: "Brown et al. 2021, Economic evaluation of the U.S. GenomeTrakr WGS source tracking program",
    path: "knowledge-base/source-cards/genometrakr-economic-evaluation-2021.md",
  },
  "national-investment-case-2025": {
    label: "Khoo et al. 2025, National investment case development for pathogen genomics",
    path: "knowledge-base/source-cards/national-investment-case-pathogen-genomics-2025.md",
  },
  "wgs-costing-tool-2024": {
    label: "Akande et al. 2024, Genomics costing tool for next-generation sequencing",
    path: "knowledge-base/source-cards/genomics-costing-tool-2024.md",
  },
  "foodborne-genomics-allard-2018": {
    label: "Allard et al. 2018, Genomics of foodborne pathogens for microbial food safety",
    path: "knowledge-base/source-cards/foodborne-genomics-microbial-food-safety-2018.md",
  },
  "lancet-wgs-economic-strategies-2026": {
    label:
      "Egli and Howden 2026, Economic perspective on continuous WGS surveillance versus outbreak-triggered investigations",
    path: "knowledge-base/source-cards/lancet-microbe-wgs-economic-strategies-2026.md",
  },
  "clinical-microbiology-implementation-2026": {
    label: "Gador-Whyte et al. 2026, Implementation of pathogen genomics in clinical microbiology laboratories",
    path: "knowledge-base/source-cards/clinical-microbiology-implementation-gador-whyte-2026.md",
  },
} as const;

export type SourceId = keyof typeof sources;
