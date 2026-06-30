# Data Lifecycle

## Purpose

Hold source-backed material for an end-to-end pathogen genomics data lifecycle chapter.

## Source Basis

- PHA4GE data-flow section.
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The PHA4GE source describes data flow from raw sequence data and metadata through analysis workflows to final analysis results, reports, visualisations, and archives. It also separates interpretation-supporting outputs from final outputs that constitute conclusions generated from the data.

The source supports lifecycle concepts for ingestion, storage, processing, delivery, archiving, reporting, data sharing, provenance recording, and data-management planning at ingestion.

The PHE case study provides an operational lifecycle example: sample information captured in LIMS, sequence generation through a central sequencing workflow, storage and analysis on IT/bioinformatics infrastructure, integration of sequence and LIMS data, and final report generation for service users.

## Implementation Notes

The current source is infrastructure-centred. It supports data-flow and provenance framing but does not yet provide a full sample-to-report-to-retention lifecycle chapter.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/end-to-end-lifecycle.md`

## Gaps

- Source-backed general lifecycle model still needed beyond the PHE centralised-WGS example.
- Source-backed lifecycle responsibilities by role needed.
- Retention and deletion lifecycle stages remain weakly sourced.

## Status

`needs source extraction`
