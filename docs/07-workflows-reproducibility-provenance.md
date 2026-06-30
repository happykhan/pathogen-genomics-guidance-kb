# Workflows, Reproducibility, and Provenance

## Purpose

Hold source-backed material on workflow systems, containers, pipeline sharing, reproducibility, portability, and provenance.

## Source Basis

- `knowledge-base/extracted-notes/pha4ge-workflows-portability.md`
- PHA4GE VeriXiv manuscript workflow section and discussion.

## Extracted/Adapted Text

The PHA4GE source connects public-health requirements for transparency and portability to containerised bioinformatics pipelines expressed in workflow languages or workflow systems. It identifies WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift as examples in the workflow ecosystem.

The source distinguishes workflow technologies from pipeline-sharing ecosystems such as Dockstore, WorkflowHub, nf-core, and the Intergalactic Workflow Commission. It states that workflow and platform choices affect usability, reusability, portability, reproducibility, administrator burden, and the ecosystem of available pipelines.

## Implementation Notes

Do not convert the named tools into a tool-selection recommendation until a decision framework is sourced.

## Figures

- Workflow portability matrix: `knowledge-base/figures/briefs/workflow-portability-matrix.md`
- Provenance chain gap: `knowledge-base/figures/briefs/workflow-provenance-chain.md`

## Gaps

- Source-backed minimum provenance fields needed.
- Pipeline validation, change control, release promotion, and rollback runbook needed.
- Source-backed decision criteria for choosing workflow systems needed.

## Status

`source-backed draft skeleton`
