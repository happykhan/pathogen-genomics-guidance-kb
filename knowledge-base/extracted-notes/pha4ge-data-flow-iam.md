# Extracted Note: Data Flow, Provenance, and Identity/Access Management

## Source Basis

- `knowledge-base/source-cards/pha4ge-infrastructure.md`
- VeriXiv manuscript sections on "How data flows" and "Who has access".

## Status

`source-backed draft`

## Extracted/Adapted Text

The source material describes data flow as movement from raw sequence data and metadata through analysis workflows to final analysis results, reports, visualisations, and archives. It distinguishes outputs that support interpretation, such as BAM files, from final outputs that constitute conclusions generated from the data, such as consensus genomes, variant summaries, charts, and phylogenies.

The source states that data management practices should cover storage, access control, versioning, archiving, sharing, provenance recording, and data-management planning at ingestion. It also links data classification to risk category, domain, and downstream use.

The IAM material frames identity and access management as a continuous responsibility: provisioning, role assignment, access review, offboarding, monitoring, and auditability. It notes that pathogen genomics infrastructure often requires coordination with central IT, external providers, cybersecurity, and information governance.

## Implementation Notes

- Use this note for `docs/02-data-lifecycle.md`, `docs/09-governance-access-security-ethics.md`, and provenance sections.
- Keep governance claims limited: the source supports IAM and information-governance coordination, but it is not a complete ethics, privacy, or benefit-sharing source.

## Figures

- `knowledge-base/figures/briefs/metadata-identifier-lineage.md` is a gap placeholder.
- `knowledge-base/figures/briefs/governance-access-model.md` is a gap placeholder.

## Gaps

- A source-backed metadata and identifier model is missing.
- A data-sharing/repository decision framework is missing.
- Governance beyond IAM, including privacy, ethics, and benefit sharing, needs additional sources.
