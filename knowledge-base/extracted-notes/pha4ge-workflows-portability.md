# Extracted Note: Workflows, Portability, and Reproducibility

## Source Basis

- `knowledge-base/source-cards/pha4ge-infrastructure.md`
- VeriXiv manuscript sections on "How the analysis is run" and discussion.
- Public repository `docs/recommendations.md` workflow section.

## Status

`source-backed draft`

## Extracted/Adapted Text

The source material links public-health requirements for transparency and portability to the use of containerised bioinformatics pipelines expressed in workflow languages or workflow systems. Named workflow technologies in the source include WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift.

The source distinguishes workflow execution software from pipeline-sharing ecosystems. Pipeline-sharing ecosystems such as Dockstore, WorkflowHub, nf-core, and the Intergalactic Workflow Commission help users find, version, and share workflows. Workflow runners and platforms can then import or execute these workflows, while some SaaS systems expose only a curated subset of pipelines to users.

The source argues that workflow and platform choices affect usability, reusability, portability, reproducibility, administrator burden, and the ecosystem of pipelines available to end users.

## Implementation Notes

- Use this note as the basis for `docs/07-workflows-reproducibility-provenance.md`.
- Preserve the distinction between workflow language, workflow runner, workflow platform, and sharing ecosystem.
- Do not turn the named technologies into endorsements without adding a decision framework.

## Figures

- `knowledge-base/figures/briefs/workflow-portability-matrix.md`
- `knowledge-base/figures/briefs/workflow-provenance-chain.md` is a gap placeholder until a source-backed provenance model is extracted.

## Gaps

- Pipeline validation, version promotion, rollback, and change-control practices need source material.
- Provenance fields for a routine run need a source-backed minimum model.
