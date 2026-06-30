# Extracted Notes: APHL NGS Implementation Guide

## Source Basis

- Association of Public Health Laboratories. *Next Generation Sequencing Implementation Guide*. October 2016.
- Local full text: `/Users/nfareed/Downloads/id-ngs-implementation-guide102016.pdf` (not committed).
- Source card: `knowledge-base/source-cards/aphl-ngs-implementation-guide-2016.md`

## Status

`source-backed extracted note; suitable for cautious guide prose`

## Relevant Extracted Points

### Implementation Scope

- The guide is structured around instrument and laboratory preparation, information technology, workforce, validation, data quality assurance, bioinformatics tools, and PulseNet WGS implementation.
- It treats NGS implementation as a laboratory-service change, not only an instrument purchase.

### IT And Storage

- Laboratories are advised to address data storage before procurement because sequencing data can be large and may need to be retained for years.
- Storage options discussed include external drives, institutional servers, commercial/cloud options, and file-transfer approaches.
- The implementation appendix frames IT infrastructure and data storage/access to analysis pipelines as major burdens of WGS implementation.

### Workforce

- Personnel time for training and implementation is a real cost and should be planned explicitly.
- The guide notes that laboratories with limited personnel or limited cross-training may need longer training periods.
- It describes bioinformatics support as a major need for public-health laboratories and cautions against assuming bioinformatics can be learned casually or added with minimal involvement.

### Validation And Quality

- Validation is presented as an important component of quality assurance and control for each NGS application.
- Validation considerations include extraction, enrichment, library preparation, sequencing, and whether starting material is of sufficient quality.
- Challenges include limited bioinformatics capacity, cost, time, and dependency on collaborators for analysis.
- Data quality checks include instrument run metrics, read quality assessment, and downstream metrics such as mapped/unmapped reads, mapping quality, depth of coverage, assembly quality, and contamination.

### Reporting And Data Sharing

- The PulseNet appendix describes upload of raw reads and limited metadata to NCBI after initial quality checks.
- It distinguishes sequence raw-read upload and metadata/BioSample handling, reinforcing the need to connect sequence files, metadata, accessions, and quality review.

## Current Guide Use

- Supports `quality-validation-before-switch`.
- Supports `workflow-reproducibility`.
- Supports `storage-backup-archive-distinction`.
- Supports `workforce-is-part-of-system`.
- Supports future technical detail on IT/storage and validation checklists.

## Remaining Gaps

- Needs a structured table of APHL checklist items mapped to guide modules.
- Needs careful extraction of PulseNet-specific details before using those as general public-health guidance.
