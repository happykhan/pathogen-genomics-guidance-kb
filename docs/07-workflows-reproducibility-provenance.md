# Workflows, Reproducibility, and Provenance

## Purpose

Hold source-backed material on workflow systems, containers, pipeline sharing, reproducibility, portability, and provenance.

## Source Basis

- `knowledge-base/extracted-notes/pha4ge-workflows-portability.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- PHA4GE VeriXiv manuscript workflow section and discussion.
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The PHA4GE source connects public-health requirements for transparency and portability to containerised bioinformatics pipelines expressed in workflow languages or workflow systems. It identifies WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift as examples in the workflow ecosystem.

The source distinguishes workflow technologies from pipeline-sharing ecosystems such as Dockstore, WorkflowHub, nf-core, and the Intergalactic Workflow Commission. It states that workflow and platform choices affect usability, reusability, portability, reproducibility, administrator burden, and the ecosystem of available pipelines.

Armstrong et al. support the need to manage workflows from raw sequence analysis through processed-data storage, epidemiological integration, and secure sharing. The PHE case study provides an end-to-end implementation example covering sequence extraction, sample categorisation, quality reporting, storage configuration, data access, analysis pipelines, epidemiological context, and user reports.

## Implementation Notes

Do not convert the named tools into a tool-selection recommendation until a decision framework is sourced.

## Figures

- Workflow portability matrix: `knowledge-base/figures/briefs/workflow-portability-matrix.md`
- Provenance chain gap: `knowledge-base/figures/briefs/workflow-provenance-chain.md`

## Gaps

- Source-backed minimum provenance fields needed.
- Pipeline validation is partially supported by the PHE case study; change control, release promotion, and rollback runbook still need source material.
- Source-backed decision criteria for choosing workflow systems needed.

## Status

`source-backed draft skeleton`
