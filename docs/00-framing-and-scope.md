# Framing and Scope

## Purpose

Set the scope for a source-backed knowledge base on pathogen genomics data systems, bioinformatics infrastructure, and public-health use.

## Guidance Draft

Pathogen genomics has moved from specialist research into routine public-health work. Armstrong et al. describe its use in foodborne outbreak investigation, tuberculosis control, influenza surveillance, antimicrobial-resistance surveillance, parasitic disease investigation, and molecular surveillance. The PHE case study shows the same transition from the service side: a national reference laboratory moved major gastrointestinal pathogens into a WGS-led workflow with central sequencing, bioinformatics analysis, LIMS integration, reporting, and public-health response.

This knowledge base is intended to support guidance for programmes that need to build or improve that kind of capability. The focus is not wet-lab sequencing protocols alone. It is the whole system around pathogen genomics data: data lifecycle, QC, metadata, storage, compute infrastructure, workflows, provenance, sharing, governance, reporting, workforce, costing, and maturity.

The PHA4GE infrastructure work gives the first organising frame. It treats pathogen genomics infrastructure as a set of decisions about responsibility model, workflow execution, physical or cloud location, data flow, and access. That frame is useful because many implementation failures happen when a programme buys technology without deciding who will operate it, validate it, support users, manage data, and maintain the system.

The PHE case study adds a concrete implementation pattern. It shows that routine WGS implementation required business planning, capital planning, laboratory redesign, robotics, sequencing capacity, IT infrastructure, LIMS, bioinformatics pipelines, validation, accreditation, workforce development, and service-user engagement. This is the kind of operational detail that a WHO-oriented guide will need.

The CDC/NEJM review adds the public-health rationale. It shows that the value of pathogen genomics comes from better outbreak detection, better pathogen characterisation, data integration, data sharing, and faster movement from laboratory result to public-health action. It also makes clear that genomics programmes need bioinformatics, data science, and epidemiological interpretation capacity.

The source base now also supports an equity and distributed-capability argument. WHO strategy sources frame access, workforce, data sharing, connectivity, and readiness as linked surveillance capacities. de Jong et al. add a respiratory-virus modelling example showing why early detection can depend on geographically distributed sequencing and regular reporting, not only total sequencing volume in already high-capacity settings.

The repo should therefore read as a guidance knowledge base, not as a library catalogue. Source cards and extracted notes preserve provenance. The `docs/` chapters should turn source-backed material into readable prose. Gaps should remain visible, but they should not be the main product.

## Source Basis

- `knowledge-base/source-cards/pha4ge-infrastructure.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/global-solidarity-respiratory-genomic-surveillance-2026.md`
- PHA4GE VeriXiv manuscript abstract, background, five-factor framing, and discussion.
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- No framing figure currently planned.

## Gaps

- WHO-specific mandate, audience, and publication pathway source material has not been added.
- AMR-specific and disease-programme implementation sources are not yet indexed beyond examples in Armstrong et al. and the PHE case study.
- Numeric distributed-capacity thresholds from modelling studies need direct extraction and transferability review before use as programme targets.

## Status

`source-backed draft`
