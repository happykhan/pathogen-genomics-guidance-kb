# Guiding Principles

## Purpose

Collect source-backed principles that can guide later WHO-style guidance drafting.

## Source Basis

- PHA4GE VeriXiv manuscript background, five-factor framing, workflow section, data-flow section, IAM section, and discussion.
- `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`
- `knowledge-base/extracted-notes/pha4ge-workflows-portability.md`
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/extracted-notes/public-health-implementation-sources.md`
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

Source-backed principles currently available from PHA4GE:

- Infrastructure planning should address responsibility model, workflow execution, physical or cloud location, data flow, and access management.
- Physical location and abstraction/responsibility model are separate decisions.
- Public-health genomics analysis needs transparency, portability, reproducibility, and provenance.
- Data flow should be planned across ingestion, storage, processing, delivery, archiving, reporting, and sharing.
- Identity and access management is a continuous operational responsibility, not a one-time setup.
- Infrastructure decisions should include human maintenance and operating responsibilities, not only compute and storage capacity.
- Routine implementation should be planned as a service change, including business case, laboratory workflow, informatics workflow, validation, user reporting, workforce, training, and service-user engagement.
- Genomic data need integration with epidemiological and laboratory context to produce public-health value.

## Implementation Notes

These principles are adapted from the PHA4GE infrastructure source pack. They should not be expanded into broader ethical, legal, clinical, or country-level principles until additional sources are indexed.

## Figures

- Responsibility model: `knowledge-base/figures/briefs/responsibility-model.md`
- Feature-impact matrix: `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- No WHO-endorsed principle set has been extracted yet.
- No source-backed principles for benefit sharing or legal/privacy governance have been added.
- Repository choice and analysis-to-decision use are now partially supported by Armstrong et al. and the PHE case study, but still need formal source extraction.

## Status

`source-backed skeleton`
