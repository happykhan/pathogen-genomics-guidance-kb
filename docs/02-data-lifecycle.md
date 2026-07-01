# Data Lifecycle

## Purpose

Describe how pathogen genomics data move from sample receipt to public-health use, and identify which parts of that lifecycle are source-backed in the current KB.

## Guidance Draft

Pathogen genomics data should be managed as a connected lifecycle. A sequencing programme is not only producing FASTQ files. It is receiving samples or isolates, linking them to metadata, generating sequence data, checking quality, running analysis, interpreting outputs, producing reports, sharing selected data, storing records, and deciding what should be archived or deleted.

The PHA4GE infrastructure source describes data flow from raw sequence data and metadata through analysis workflows to final analysis results, reports, visualisations, and archives. It also makes a useful distinction between outputs that support interpretation and outputs that constitute conclusions. For example, BAM files or intermediate analysis outputs may help analysts understand a result, while consensus genomes, variant summaries, reports, charts, or phylogenies may become the outputs used for public-health action or archive.

The PHE case study shows a concrete service lifecycle. Extracted DNA was received by the central sequencing service, robotic processes checked quality and prepared libraries, sequence data were generated, sample information was collected through LIMS, sequence data were stored and analysed on IT and bioinformatics infrastructure, and sequence-analysis outputs were combined with LIMS data to produce final sample reports. The service was built around a five-day sample-submission-to-report workflow.

That example matters because it shows that lifecycle design is partly technical and partly organisational. A programme needs to know who submits samples, what sample quality and quantity are required, what metadata travel with the sample, how the sequencing service tracks work, where raw and processed data are stored, which pipeline output becomes the report, and what the end user receives.

Lifecycle planning should also distinguish routine operations from exceptional cases. Routine samples should follow a defined flow from receipt to report. Failed samples, low-quality inputs, ambiguous outputs, unexpected organisms, or unusual results need a route for review and troubleshooting. The PHE validation work identified issues that required protocol adjustment, including extraction optimisation and discordance between WGS and conventional typing. These are lifecycle issues, not only technical QC issues.

Data sharing and archiving are part of the same lifecycle. PHA4GE includes archiving and sharing within data flow. The PHE case study gives one example, with Salmonella sequences uploaded to NCBI SRA. Armstrong et al. broaden this by describing public-health uploads to NCBI-hosted pathogen databases, ReSeqTB, and GISAID. The lifecycle therefore extends beyond the local laboratory when data are released, shared with collaborators, or used for international surveillance.

The dynamic guide now includes a beta sample-to-decision route map and service-review tables. These cover sample entry, metadata linkage, sequencing and QC, workflow execution, interpretation and reporting, sharing, storage, correction, review, and exception routes. The model is still a beta service map, not a complete SOP or organism-specific field dictionary.

The remaining work is more specific: repository and organism field requirements, local responsibility assignment, retention/deletion rules, and user testing with real pilot, routine-service, multi-pathogen, and national-network programmes.

## Source Basis

- PHA4GE data-flow section.
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/who-national-genomic-surveillance-strategy-2023.md`
- `knowledge-base/source-cards/who-genomic-data-sharing-platforms-2025.md`
- `knowledge-base/source-cards/aphl-ngs-implementation-2016.md`
- `knowledge-base/source-cards/ecdc-wgs-public-health-surveillance-2016.md`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/end-to-end-lifecycle.md`

## Gaps

- The beta service map needs review and user testing with real implementation teams.
- Repository- and organism-specific field requirements still need direct extraction.
- Retention, deletion, and local responsibility assignment still require jurisdiction-specific and institutional review.

## Status

`source-backed beta service map; implementation-specific details still partial`
