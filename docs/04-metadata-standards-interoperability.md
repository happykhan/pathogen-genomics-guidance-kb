# Metadata, Standards, and Interoperability

## Purpose

Explain why metadata, identifiers, and data integration are central to pathogen genomics services, while marking the standards work that still needs source extraction.

## Guidance Draft

Pathogen genomics data become useful for public health when sequence data can be connected to the right context. A genome sequence may show relatedness, resistance markers, or lineage, but public-health interpretation also depends on sample identity, collection date, geography, source, host or case information, sequencing run, analysis workflow, and report context.

The current sources support this principle strongly, but do not yet define a full metadata standard. PHA4GE describes raw sequence data and metadata moving through workflows to results, reports, visualisations, and archives. It also notes that data attributes can be classified by risk category, domain, and downstream use.

Armstrong et al. make the public-health argument more directly. They state that laboratory and epidemiological data are often managed separately, but pathogen genomic data need to be integrated with epidemiological data to realise the full value of both. This is a key point for the KB: interoperability is not a technical luxury, it is what lets genomic outputs support surveillance and outbreak response.

The PHE case study shows a service example. Sample information was collected in LIMS, sequence data were stored and analysed on IT and bioinformatics infrastructure, and sequence-analysis outputs were combined with LIMS data to produce the final report. That establishes a basic source-backed model: identifiers and metadata need to connect the sample, sequencing process, analysis output, and report.

A future metadata chapter should turn this into a concrete model. At minimum, a programme needs to track sample or isolate identifier, sequencing run, raw data, workflow run, QC outputs, analysis result, report, and any repository accession or sharing event. The source material supports the need for that model, but not yet the exact fields, vocabularies, or standards.

The main missing source area is standards and interoperability. The KB still needs material on minimum metadata fields, controlled vocabularies, identifier conventions, repository accession linkage, LIMS integration, epidemiological data integration, and cross-system exchange. WHO, ECDC, APHL, UKHSA, Australian CDGN, and repository/platform sources are likely needed here.

## Source Basis

- PHA4GE data-flow section.
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/metadata-identifier-lineage.md`

## Gaps

- Source-backed sample/run/readset/workflow/result/report identifier model needed.
- Metadata requirements, vocabularies, and interoperability standards need source extraction.
- Repository accession and cross-system linkage material remain only partially sourced.

## Status

`source-backed partial draft`
