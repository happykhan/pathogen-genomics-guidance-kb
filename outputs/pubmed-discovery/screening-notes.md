# PubMed Discovery Screening Notes

Generated from `npm run pubmed:discover -- --max-per-query 20 --since-year 2018`.

## Strong Candidates For Extraction

These look directly useful for the knowledge base after abstract-level screening.

| PMID | Title | Why it looks useful |
| --- | --- | --- |
| 40020687 | National investment case development for pathogen genomics | Directly supports the leadership/funder-facing investment case and should be extracted for the `Why genomics?` and costing sections. |
| 38116115 | Advancing pathogen genomics in resource-limited settings | Strong fit for value proposition, LMIC implementation, cost efficiency, surveillance planning, and public-health decision-making. |
| 33587898 | Genomic-informed pathogen surveillance in Africa: opportunities and challenges | Useful for capacity, equity, workforce, data sharing, and multi-pathogen surveillance arguments. |
| 37977162 | Genomics for public health and international surveillance of antimicrobial resistance | Strong AMR use-case source; supports benefits, barriers, standards, governance, and data sharing. |
| 40227048 | Genomics for antimicrobial resistance-progress and future directions | Useful for AMR-specific workflow, reporting, ISO/quality, public-health/clinical interface, and limits. |
| 40910632 | Integrating whole-genome sequencing into antimicrobial resistance surveillance | Useful for AMR surveillance methods, limitations, quality assurance, standardisation, and governance. |
| 29169072 | Genomics of foodborne pathogens for microbial food safety | Directly supports foodborne-pathogen value case, source tracking, outbreak detection, AMR monitoring, and food-safety applications. |
| 31316960 | Whole Genome Sequencing: Bridging One-Health Surveillance of Foodborne Diseases | Likely useful for foodborne/One Health data sharing and cross-sector surveillance. |
| 40302215 | Real-Time Genomic Surveillance for Enhanced Healthcare Outbreak Detection and Control: Clinical and Economic Impact | Useful economic-impact example outside food safety; extract carefully because it is a hospital implementation context. |
| 37778362 | Boosting pathogen genomics and bioinformatics workforce in Africa | Useful for workforce and bioinformatics capacity section. |
| 36385137 | Global disparities in SARS-CoV-2 genomic surveillance | Useful for equity and distributed capacity rationale. |
| 36423141 | Challenges and Opportunities for Global Genomic Surveillance Strategies in the COVID-19 Era | Useful for pipeline limitations, sampling, metadata, reporting, and implementation barriers. |

## Background Or Use-Case Specific

These may be useful for examples, but probably should not drive general guidance without more review.

| PMID | Title | Note |
| --- | --- | --- |
| 40982124 | Global Genomic Surveillance: On-The-Ground Responses | Dengue/arbovirus-focused chapter; useful for regional comparison and constraints, but not a core general source. |
| 36921604 | Toward a global virus genomic surveillance network | Good for viral surveillance and modular sequencing arguments; less central to data/infrastructure guidance. |
| 33783282 | Foodborne pathogens in the omics era | Broad foodomics review; useful background, but less directly public-health-service focused than Allard/GenomeTrakr sources. |
| 39499629 / 38903069 | Genomic perspectives on foodborne illness | Good foodborne examples; check duplication/version and full text before using. |
| 34706052 | Metagenomics Approaches for Improving Food Safety | Useful if the guide later covers metagenomics; not core for current WGS/data-infrastructure scope. |
| 31209399 / 30631597 / 29718745 | TB WGS standards/opportunities | Useful for TB-specific resource finder entries and organism-specific guidance later. |

## Likely Skip For Current Scope

- Generic precision public health or human/population genomics papers unless they explicitly address pathogen genomics implementation.
- Diagnostic technique reviews that are organism-specific but not about public-health genomic surveillance systems.
- Clinical diagnostic NGS papers unless they include service infrastructure, data flow, cost, or public-health action.

## Script Tuning Notes

- The initial run pulled off-target oncology/economic WGS papers. The investment query was tightened to require public-health/pathogen/infectious/surveillance context when using generic `whole genome sequencing`.
- The heuristic score is a triage aid only. Papers should move into `knowledge-base/source-cards/` as `extracted` only after full-text review or careful abstract/source extraction.
