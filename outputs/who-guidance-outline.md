# WHO Guidance Outline: Pathogen Genomics Data and Infrastructure

## Working Title

Best Practices and Guiding Principles for Pathogen Genomics Data Management and Bioinformatics Infrastructure

## Editorial Status

This is an assembly outline, not final guidance. Each chapter must draw from source cards and extracted notes. Missing topics are listed as source needs.

## Chapter Source Map

| Chapter | Current source material | Figure candidates | Missing source needs | Status |
| --- | --- | --- | --- | --- |
| 00 Framing and scope | PHA4GE abstract/background and local source-card readout | None | WHO mandate, intended audience, disease-programme source | Source-backed skeleton |
| 01 Guiding principles | PHA4GE five factors, workflow, data-flow, IAM, discussion | Responsibility model, feature-impact matrix | WHO principle set, ethics/privacy/repository principles | Source-backed skeleton |
| 02 Data lifecycle | PHA4GE data-flow section | End-to-end lifecycle gap | Full sample-to-report-to-archive lifecycle source | Needs source |
| 03 Quality management | PHA4GE workflow reproducibility/provenance framing | None | QC across sample/run/analysis/reporting; validation/change control | Skeleton |
| 04 Metadata, standards, interoperability | PHA4GE mentions metadata and data classification | Metadata/identifier lineage gap | Metadata model, identifier model, standards/interoperability profile | Skeleton |
| 05 Storage, backup, archiving, retention | Disaster recovery draft; power/cooling note; PHA4GE data-flow storage/archive references | Storage/backup/archive gap | Retention schedule, archive/cold-storage policy, RTO/RPO source | Rough source-backed skeleton |
| 06 Compute infrastructure | PHA4GE five factors, SaaS/PaaS/IaaS, vignettes | Responsibility model, feature-impact matrix | Operating model and service-level checklist | Source-backed draft skeleton |
| 07 Workflows, reproducibility, provenance | PHA4GE workflow section and discussion | Workflow portability matrix, provenance-chain gap | Pipeline validation, minimum provenance fields, change-control runbook | Source-backed draft skeleton |
| 08 Data sharing, repositories, platforms | PHA4GE data-flow sharing references and platform examples | Data-sharing decision pathway gap | Repository decision framework and data-sharing governance | Skeleton |
| 09 Governance, access, security, ethics | PHA4GE IAM and incident-responsibility text | Governance/access model gap | Privacy, ethics, legal basis, benefit sharing, security baseline | Partial source-backed skeleton |
| 10 Analysis, reporting, decision use | PHA4GE background and data-flow final-output distinction | None | Reporting principles, uncertainty, interpretation, decision-use sources | Skeleton |
| 11 Workforce, sustainability, costing | PHA4GE discussion; vignettes; survey dimensions | Implementation comparison | Workforce roles, recurrent cost model, procurement support | Partial source-backed skeleton |
| 12 Implementation maturity model | PHA4GE survey dimensions; public repo `tiers_table.md` | Capability maturity model gap, feature-impact matrix | Reviewed maturity levels, rubric, scoring evidence | Draft/gap |

## First Extraction Priorities

1. Expand `docs/06-compute-infrastructure.md` from `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`.
2. Expand `docs/07-workflows-reproducibility-provenance.md` from the workflow extracted note.
3. Convert storage/backup/power/cooling rough notes into a reviewed question set before writing guidance.
4. Create source cards for metadata, governance, repository/data-sharing, reporting, workforce, and costing sources before expanding those chapters.

## Figure Priorities

1. Redraw responsibility model.
2. Redraw workflow portability matrix.
3. Redraw feature-impact matrix.
4. Replace implementation radar plot with small multiples or a table.
5. Keep lifecycle, metadata lineage, storage/archive, provenance chain, data-sharing pathway, and governance model as gaps until source-backed.
