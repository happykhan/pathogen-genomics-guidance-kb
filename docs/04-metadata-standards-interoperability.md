# Metadata, Standards, and Interoperability

## Purpose

Hold source-backed material on metadata, identifiers, standards, and interoperability.

## Source Basis

- PHA4GE data-flow section mentions raw data, metadata, provenance, data classification, and downstream uses.
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The PHA4GE source states that raw data and metadata flow through analysis workflows to final outputs and reports. It also notes that data attributes can be tagged and classified by risk category, domain, and downstream analysis use.

Armstrong et al. state that genomic data need integration with epidemiological data to realise the full value of both. The PHE case study gives an implementation example in which LIMS sample data and sequence-analysis data are integrated to produce the final report.

## Implementation Notes

The current source supports the need for data integration and LIMS linkage but does not define a metadata standard, identifier model, minimum fields, controlled vocabularies, or interoperability profile.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/metadata-identifier-lineage.md`

## Gaps

- Source-backed sample/run/readset/workflow/result/report identifier model needed.
- Source-backed metadata requirements and interoperability standards needed.
- Repository accession and cross-system linkage material remain only partially sourced.

## Status

`skeleton`
