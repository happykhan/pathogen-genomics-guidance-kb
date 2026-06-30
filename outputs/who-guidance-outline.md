# WHO Guidance Outline: Pathogen Genomics Data and Infrastructure

## Working Title

Best Practices and Guiding Principles for Pathogen Genomics Data Management and Bioinformatics Infrastructure

## Editorial Status

This is an assembly outline for readable guidance. Each chapter should contain actual prose where source material exists, then list provenance and remaining gaps. Missing topics are listed as source needs rather than hidden inside generic text.

## Chapter Source Map

| Chapter | Current source material | Figure candidates | Missing source needs | Status |
| --- | --- | --- | --- | --- |
| 00 Framing and scope | PHA4GE abstract/background; Armstrong et al. public-health review; PHE implementation case study | None | WHO mandate, intended audience, disease-programme source | Source-backed draft |
| 01 Guiding principles | PHA4GE five factors; Armstrong et al.; PHE service-implementation lessons | Responsibility model, feature-impact matrix | WHO principle set, ethics/privacy/legal principles | Source-backed draft |
| 02 Data lifecycle | PHA4GE data-flow section; PHE sample-to-report workflow | End-to-end lifecycle gap | General lifecycle model beyond PHE example; retention/deletion | Partial source-backed draft |
| 03 Quality management | PHA4GE reproducibility framing; PHE validation and ISO 15189 accreditation example | None | Generic QC, nonconformance, change-control source | Source-backed draft |
| 04 Metadata, standards, interoperability | PHA4GE metadata/data-classification mentions; Armstrong et al. data integration; PHE LIMS/report integration | Metadata/identifier lineage gap | Metadata model, identifier model, standards/interoperability profile | Partial source-backed draft |
| 05 Storage, backup, archiving, retention | DR draft; power/cooling note; PHE compute/storage/archive implementation example | Storage/backup/archive gap | Retention schedule, archive/cold-storage policy, RTO/RPO source | Rough source-backed draft |
| 06 Compute infrastructure | PHA4GE five factors; PHE infrastructure/capital-planning example | Responsibility model, feature-impact matrix | Generic operating model and service-level checklist; WHO procurement framing | Source-backed draft |
| 07 Workflows, reproducibility, provenance | PHA4GE workflow section; Armstrong et al. workflow/data-integration framing; PHE end-to-end pipelines and validation | Workflow portability matrix, provenance-chain gap | Minimum provenance fields, release promotion, rollback runbook | Source-backed draft |
| 08 Data sharing, repositories, platforms | PHA4GE platform examples; Armstrong et al. data openness; PHE SRA upload example | Data-sharing decision pathway gap | Repository decision framework, controlled-sharing pathway, access agreements | Partial source-backed draft |
| 09 Governance, access, security, ethics | PHA4GE IAM; Armstrong et al. confidentiality/risk caveat; PHE oversight/access questions | Governance/access model gap | Privacy, ethics, legal basis, benefit sharing, security baseline | Partial source-backed draft |
| 10 Analysis, reporting, decision use | PHA4GE final-output distinction; Armstrong et al. public-health use examples; PHE reporting and outbreak examples | None | Generic reporting principles, uncertainty/interpretation guidance | Partial source-backed draft |
| 11 Workforce, sustainability, costing | PHA4GE discussion; vignettes; Armstrong et al. workforce; PHE business/capital planning and training | Implementation comparison | Generic workforce roles, recurrent cost model, procurement support | Partial source-backed draft |
| 12 Implementation maturity model | PHA4GE survey dimensions; public repo `tiers_table.md`; PHE implementation timeline | Capability maturity model gap, feature-impact matrix | Reviewed maturity levels, rubric, scoring evidence | Draft/gap |

## First Extraction Priorities

1. Continue expanding the prose-first chapters with newly extracted agency sources.
2. Extract APHL/CDC quality resources to turn the PHE validation example into a reusable QC/change-control chapter.
3. Extract WHO/ECDC strategy documents for formal framing, surveillance objectives, repository sharing, governance, and country implementation.
4. Convert storage/backup/power/cooling rough notes into a reviewed prose section.
5. Add a proper lifecycle and metadata/identifier model once sources are extracted.

## Figure Priorities

1. Redraw responsibility model.
2. Redraw workflow portability matrix.
3. Redraw feature-impact matrix.
4. Replace implementation radar plot with small multiples or a table.
5. Keep lifecycle, metadata lineage, storage/archive, provenance chain, data-sharing pathway, and governance model as gaps until source-backed.
