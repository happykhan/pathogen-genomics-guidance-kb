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
  "who-pathogen-genome-data-sharing-2022": {
    label: "WHO 2022, Guiding principles for pathogen genome data sharing",
    path: "knowledge-base/source-cards/who-pathogen-genome-data-sharing-2022.md",
  },
  "wgs-economic-review": {
    label: "Price et al. 2023, Systematic review of economic evaluations of WGS surveillance",
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
  "who-national-genomic-surveillance-strategy-2023": {
    label: "WHO 2023, Developing a national genomic surveillance strategy or action plan",
    path: "knowledge-base/source-cards/who-national-genomic-surveillance-strategy-2023.md",
  },
  "who-genomic-data-sharing-platforms-2025": {
    label: "WHO 2025, Genomic data-sharing platform attributes and principles",
    path: "knowledge-base/source-cards/who-genomic-data-sharing-platforms-2025.md",
  },
  "who-genomics-costing-tool-manual-2024": {
    label: "WHO 2024, Genomics costing tool user manual",
    path: "knowledge-base/source-cards/who-genomics-costing-tool-user-manual-2024.md",
  },
  "who-science-council-genomics-access-2022": {
    label: "WHO Science Council 2022, Accelerating access to genomics for global health",
    path: "knowledge-base/source-cards/who-science-council-genomics-access-2022.md",
  },
  "who-genomic-surveillance-progress-2023": {
    label: "WHO 2023, Global genomic surveillance strategy progress report",
    path: "knowledge-base/source-cards/who-genomic-surveillance-progress-report-2023.md",
  },
  "ipsn-source-pack": {
    label: "IPSN source pack",
    path: "knowledge-base/source-cards/ipsn-source-pack.md",
  },
  "aphl-ngs-implementation-2016": {
    label: "APHL 2016, Next Generation Sequencing Implementation Guide",
    path: "knowledge-base/source-cards/aphl-ngs-implementation-guide-2016.md",
  },
  "ecdc-wgs-surveillance-2016": {
    label: "ECDC 2016, Expert opinion on whole genome sequencing for public health surveillance",
    path: "knowledge-base/source-cards/ecdc-wgs-public-health-surveillance-2016.md",
  },
  "ukhsa-pathogen-genomics-strategy-2024": {
    label: "UKHSA 2024, Pathogen Genomics Strategy",
    path: "knowledge-base/source-cards/ukhsa-pathogen-genomics-strategy-2024.md",
  },
  "australia-microbial-genomics-framework-2025": {
    label: "Australian Centre for Disease Control 2025, National Microbial Genomics Framework",
    path: "knowledge-base/source-cards/australia-national-microbial-genomics-framework-2025.md",
  },
  "auspathogen-implementation-2025": {
    label: "Webb et al. 2025, Implementing a national programme of pathogen genomics for public health",
    path: "knowledge-base/source-cards/auspathogen-national-implementation-2025.md",
  },
  "east-africa-genomics-landscape-2024": {
    label: "Nguinkal et al. 2024, Pathogen genomics landscape in the East African Community",
    path: "knowledge-base/source-cards/east-africa-pathogen-genomics-landscape-2024.md",
  },
} as const;

export type SourceId = keyof typeof sources;
