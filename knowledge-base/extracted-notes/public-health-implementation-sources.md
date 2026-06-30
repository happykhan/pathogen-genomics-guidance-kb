# Extracted Note: Public-Health Implementation Sources

## Source Basis

- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`

## Status

`source-backed draft`

## Extracted/Adapted Text

The CDC/NEJM review and PHE case study complement the PHA4GE infrastructure source pack. PHA4GE gives the infrastructure-responsibility model; the PHE case study gives an operational implementation example; the CDC/NEJM review gives broader public-health rationale, data integration, data openness, and workforce framing.

Useful source-backed implementation elements from PHE include:

- selecting pathogens for WGS based on expected public-health and operational benefit;
- centralising sequencing while returning reports to reference-laboratory and health-protection users;
- combining LIMS data with sequence analysis to produce final sample reports;
- planning capital expenditure for sequencing equipment, robotics, IT, data management, and project management;
- reviewing laboratory space, health and safety, workforce, training, sample requirements, turnaround times, and result formats;
- designing end-to-end bioinformatics processes for demultiplexed sequence data, quality reporting, storage configuration, data access, analysis pipelines, epidemiological context, and user reports;
- validating WGS before switching off conventional methods through parallel running, dataset comparison, gap analysis, quality parameters, and troubleshooting;
- training laboratory staff, bioinformaticians, epidemiologists, clinical scientists, and service users;
- treating accreditation of bioinformatics pipelines as a distinct challenge.

Useful source-backed public-health framing from Armstrong et al. includes:

- pathogen genomics can support outbreak detection/investigation, drug-resistance surveillance, vaccine strain selection, and molecular surveillance;
- genomic data need integration with epidemiological data to realise their public-health value;
- sequencing workflows include raw-data analysis, processed-data storage, epidemiological integration, and secure information sharing;
- data sharing through NCBI, ReSeqTB, GISAID, and similar platforms can support collaboration and secondary use, but confidentiality and risk assessment remain necessary;
- workforce development should include microbial genomics, bioinformatics vocabulary, data science, and epidemiological interpretation skills.

## Docs To Update

- `docs/02-data-lifecycle.md`
- `docs/03-quality-management.md`
- `docs/04-metadata-standards-interoperability.md`
- `docs/05-storage-backup-archiving-retention.md`
- `docs/06-compute-infrastructure.md`
- `docs/07-workflows-reproducibility-provenance.md`
- `docs/08-data-sharing-repositories-platforms.md`
- `docs/09-governance-access-security-ethics.md`
- `docs/10-analysis-reporting-decision-use.md`
- `docs/11-workforce-sustainability-costing.md`

## Gaps

- Still need a formal metadata/identifier standard.
- Still need generic governance, legal, ethics, and benefit-sharing sources.
- Still need a formal maturity/rubric source.
- Still need general costing and procurement sources beyond the PHE case study.
