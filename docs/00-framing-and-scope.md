# Framing and Scope

## Purpose

Define the repository scope as a source-backed knowledge base for WHO-oriented pathogen genomics data and bioinformatics infrastructure guidance.

## Source Basis

- `knowledge-base/source-cards/pha4ge-infrastructure.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- PHA4GE VeriXiv manuscript abstract, background, five-factor framing, and discussion.
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The PHA4GE source material frames pathogen genomics infrastructure as a public-health capability that depends on data management, analysis methods, interpretation tools, workflow execution, user management, provenance, and maintainability. It presents compute infrastructure as a platform for pathogen genomic analyses, not as hardware alone.

The current repository therefore treats the PHA4GE infrastructure source pack as the first source set for infrastructure, workflow, data-flow, access, storage, vignettes, and implementation-comparison material. Topics outside that source coverage remain marked as gaps until additional source material is extracted.

Armstrong et al. broaden the frame from infrastructure to public-health use, including outbreak detection, tuberculosis control, influenza surveillance, antimicrobial-resistance surveillance, data integration, data sharing, and workforce development. The PHE case study adds an operational implementation example for a centralised WGS service and a genomics-led reference laboratory.

## Implementation Notes

- This repository separates source cards, extracted notes, figure briefs, and assembled guidance modules.
- `docs/` modules are not final guidance. They are source-status-aware working chapters.
- `knowledge-base/extracted-notes/` holds cleaned source-derived notes before they are promoted into guidance text.
- Local source packs and cloned source repositories are intentionally excluded from git.

## Figures

- No framing figure currently planned.

## Gaps

- WHO-specific mandate, audience, and publication pathway source material has not been added.
- AMR-specific and disease-programme implementation sources are not yet indexed beyond examples in Armstrong et al. and the PHE case study.

## Status

`source-backed skeleton`
