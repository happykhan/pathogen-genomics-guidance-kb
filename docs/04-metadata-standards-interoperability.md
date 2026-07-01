# Metadata, Standards, and Interoperability

## Purpose

Explain why metadata, identifiers, and data integration are central to pathogen genomics services, while marking the standards work that still needs source extraction.

## Guidance Draft

Pathogen genomics data become useful for public health when sequence data can be connected to the right context. A genome sequence may show relatedness, resistance markers, or lineage, but public-health interpretation also depends on sample identity, collection date, geography, source, host or case information, sequencing run, analysis workflow, and report context.

The current sources support this principle strongly, but do not yet define a full metadata standard. PHA4GE describes raw sequence data and metadata moving through workflows to results, reports, visualisations, and archives. It also notes that data attributes can be classified by risk category, domain, and downstream use.

Armstrong et al. make the public-health argument more directly. They state that laboratory and epidemiological data are often managed separately, but pathogen genomic data need to be integrated with epidemiological data to realise the full value of both. This is a key point for the KB: interoperability is not a technical luxury, it is what lets genomic outputs support surveillance and outbreak response.

The PHE case study shows a service example. Sample information was collected in LIMS, sequence data were stored and analysed on IT and bioinformatics infrastructure, and sequence-analysis outputs were combined with LIMS data to produce the final report. That establishes a basic source-backed model: identifiers and metadata need to connect the sample, sequencing process, analysis output, and report.

A future metadata chapter should turn this into a concrete model. At minimum, a programme needs to track sample or isolate identifier, sequencing run, raw data, workflow run, QC outputs, analysis result, report, and any repository accession or sharing event. The dynamic guide now has a beta lineage model and field-priority table that separates public minimum metadata, restricted contextual metadata, technical provenance, repository accessions, and service-management fields.

The dynamic guide also now includes a beta metadata governance register. This is a practical operating tool, not a repository schema. It asks the programme to name the system of record for each field group, the public/restricted/internal status of the fields, the owner, the correction route, the accession or sharing status, the review cadence, and the unresolved schema gap. This keeps metadata quality visible during routine service review while exact repository templates and organism-specific controlled vocabularies are still being extracted.

The main missing source area is now more specific: exact repository and organism schemas, controlled vocabularies, required/optional/public/restricted field status, and cross-system exchange rules. WHO, ECDC, APHL, UKHSA, Australian CDGN, INSDC/NCBI, ENA, GISAID, GA4GH, and national platform sources are likely needed here.

## Source Basis

- PHA4GE data-flow section.
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/who-genomic-data-sharing-platforms-2025.md`
- `knowledge-base/source-cards/who-pathogen-genome-data-sharing-2022.md`
- `knowledge-base/source-cards/who-sars-cov-2-sequencing-implementation-2021.md`
- `knowledge-base/source-cards/ecdc-wgs-public-health-surveillance-2016.md`
- `knowledge-base/source-cards/aphl-ngs-implementation-2016.md`
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/metadata-identifier-lineage.md`

## Gaps

- The beta identifier-lineage model still needs conversion into a formal field dictionary with required, optional, public, restricted, and system-generated fields by organism and use case.
- Current repository templates, controlled vocabularies, API/interoperability rules, and formal metadata-quality KPIs still need direct extraction.
- Sensitive-field handling requires local legal, ethical, public-health, and data-governance review.

## Status

`source-backed beta lineage model; repository-specific details still partial`
