# Extracted Notes: Microbial Genomics Implementation Collection

## Source Basis

- Microbiology Society / *Microbial Genomics* collection: *Implementation of Genomics in Clinical and Public Health Microbiology*.
- Collection source card: `knowledge-base/source-cards/microbial-genomics-implementation-collection.md`.
- Metadata and abstracts were collected from Crossref and OpenAlex where the publisher pages were blocked by Cloudflare. This note is therefore an abstract-level extraction, not a full-text extraction.

## Status

`abstract-level source-backed extraction; suitable for cautious guide prose`

## Cross-Cutting Points

- Public-health genomics implementation repeatedly depends on validation, quality systems, accreditation, proficiency testing, harmonised workflows, and reproducible bioinformatics rather than sequencing technology alone.
- Several papers show that implementation is a network problem: reference laboratories, national laboratories, public-health authorities, software/workflow teams, and data users need shared expectations and support routes.
- Bioinformatics implementation papers emphasize standardized, reproducible, validated, auditable, scalable, portable, and secure analysis in operational laboratory constraints.
- Decision-use papers show that genomics becomes useful when results are connected to health-protection practice, infection-control action, outbreak management, or surveillance programmes.
- Organism-specific papers are useful as implementation examples, but they should not be generalized into universal guidance without organism, setting, comparator, and validation context.

## Paper-Level Extracted Points

### Capacity, Workforce, And Networks

- `mgen-kenya-amr-genomics-capacity-2023`: Kenyan public-health scientists were trained to use laboratory and bioinformatics methods on isolates from the national AMR surveillance repository, with harmonized reporting. The abstract identifies lack of trained public-health scientists and diverse sequencing/bioinformatics tools as barriers to reproducible AMR genomic surveillance.
- `mgen-eurl-wgs-rollout-europe-2023`: European Union Reference Laboratories supported national food, feed, and veterinary reference laboratories in NGS/WGS rollout by developing guidance across NGS steps and promoting harmonisation.
- `mgen-california-covidnet-2023`: California COVIDNet combined more than 40 sequencing laboratories with cloud-based bioinformatics, open-source workflows, ongoing training, and automated data transfer to visualization tools. The abstract frames this as a scalable public-health genomic surveillance model that expanded beyond SARS-CoV-2.
- `mgen-making-microbial-genomics-work-2022`: Editorial/framing article for the collection. Useful as context, but not a strong source for operational claims without full-text review.

### Quality, Validation, Accreditation, And Harmonisation

- `mgen-accreditation-iso-pathogen-genomics-2023`: Pathogen genomics results can have public-health, treatment, and legal impacts; laboratories should approach implementation with quality/accreditation frameworks and validation aligned with international regulatory standards.
- `mgen-eurl-amr-proficiency-test-2023`: WGS proficiency testing is needed as AMR surveillance shifts from traditional biology to bioinformatics. The abstract highlights standardization, QC, and data sharing challenges and reports a European genomic proficiency test across 21 laboratories.
- `mgen-iseq-multilab-enteric-2022`: Smaller, more affordable sequencing platforms and defined bioinformatics protocols can support real-time surveillance, but multi-laboratory evaluation is relevant before adoption for Salmonella, E. coli, and Listeria.
- `mgen-time-critical-illumina-wgs-2021`: WGS is a reference standard for bacterial outbreak investigation and typing, but standard Illumina workflows can lose time in emergencies because analysis starts after sequencing completion; time-critical workflows need performance evaluation.
- `mgen-harmonization-enterobacteriaceae-enterococci-2021`: WGS is becoming a standard for bacterial typing and outbreak surveillance, but interoperability and harmonisation remain implementation problems.
- `mgen-stec-bioinformatics-validation-2021`: A STEC bioinformatics workflow validation strategy used a conventionally characterized reference collection and evaluated repeatability, reproducibility, and performance across workflow approaches.
- `mgen-discordant-amr-predictions-2020`: An inter-laboratory AMR prediction study used identical WGS datasets to assess reproducibility across bioinformatics pipelines and identify factors leading to discordant results.

### Bioinformatics And Workflow Implementation

- `mgen-accelerating-bioinformatics-implementation-2023`: Public-health bioinformatics requires standardized analyses and reproducible, validated, auditable outputs. The abstract emphasizes scalable, portable, secure storage/analysis and workflows that fit operational laboratory constraints.
- `mgen-rapid-nanopore-amr-outbreak-2021`: A rapid nanopore protocol for antibiotic-resistant bacteria was developed and validated for surveillance and outbreak investigation, including sequence typing, assembly, polishing, and phylogenetic analysis.
- `mgen-canine-metagenomic-amr-2023`: Candidate One Health/metagenomics example. The abstract describes a rapid diagnostics pipeline for canine samples using nanopore metagenomics and AMR prediction; final publisher metadata still needs verification.
- `mgen-enteric-adenovirus-f41-minion-2023`: Candidate viral/nanopore example for enteric adenovirus F41 genomic diversity. Useful as an organism-specific sequencing example, not a general infrastructure source.

### Reporting, Decision-Use, And Public-Health Action

- `mgen-uk-delphi-health-protection-2023`: UK Delphi study developed expert consensus statements on how pathogen genomic information should be used in health-protection policy, planning, and practice.
- `mgen-centre-specific-typing-ipc-2021`: Centre-specific bacterial pathogen typing can affect infection-control decision-making; this supports the guide's caution that local context and interpretive practice matter.
- `mgen-local-sarscov2-large-scale-2020`: Candidate SARS-CoV-2 regional sequencing example. The abstract links regional sequencing and clinical metadata to local outbreak analyses and national pandemic management; final publisher DOI needs verification.
- `mgen-polymicrobial-mdr-critical-care-2021`: Integrated WGS response to a persistent polymicrobial MDR outbreak in critical care, with clinical reporting turnaround and environmental metagenomic sequencing. Useful for healthcare-associated infection decision-use examples.

### Organism-Specific Surveillance Examples

- `mgen-belgian-influenza-phylogenomics-2021`: Whole-genome influenza phylogenomics can support improved surveillance and vaccine-composition context.
- `mgen-salmonella-typhi-paratyphi-england-2021`: Prospective genomic surveillance of typhoidal salmonellae in England monitored incidence, AMR, travel, and clustering.
- `mgen-shotgun-metagenomics-salmonella-food-2021`: Shotgun metagenomics was applied to food samples to support source resolution in a Salmonella foodborne outbreak where isolation from food is difficult.
- `mgen-gonorrhoea-wgs-amr-genogroups-2021`: European N. gonorrhoeae WGS clustering was used to define genogroups and relate them to AMR, supporting AMR surveillance examples.

## Current Guide Use

- Supports `quality-validation-before-switch`.
- Supports `workflow-reproducibility`.
- Supports `implementation-model-dependencies`.
- Supports `workforce-is-part-of-system`.
- Supports `reporting-decision-use`.
- Supports `maturity-next-steps`.

## Remaining Gaps

- Full-text extraction is still needed before adding detailed protocol, metric, or numeric performance claims.
- Two records currently use preprint DOI metadata and need publisher DOI verification.
- The collection is rich in organism-specific examples; the guide should use them as examples, not as universal recommendations.
