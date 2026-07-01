# Workflows, Reproducibility, and Provenance

## Purpose

Explain why routine pathogen genomics analysis needs managed workflows, traceable software environments, and records that allow results to be reviewed, repeated, and interpreted.

## Guidance Draft

Routine pathogen genomics cannot depend on undocumented scripts run by one person on one machine. Public-health outputs may be used to detect outbreaks, rule cases in or out of clusters, support control measures, monitor antimicrobial resistance, and inform policy. The analysis therefore needs to be repeatable enough for service delivery and transparent enough for review.

The PHA4GE source links public-health requirements for transparency and portability to containerised bioinformatics workflows expressed in workflow languages or workflow systems. It names WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift as examples in the wider ecosystem. The point is not that every programme should use the same tool. The point is that routine analysis should make the workflow, software versions, parameters, reference data, inputs, outputs, and execution environment visible.

Workflow systems also change how programmes share and maintain analysis. Pipeline-sharing ecosystems such as Dockstore, WorkflowHub, nf-core, and the Intergalactic Workflow Commission help users find, version, and distribute workflows. Managed platforms can import workflows from these ecosystems or expose curated workflows as applications. This can reduce local build effort, but it also creates choices about governance: who can add a workflow, who validates it, who can run it, and how users know which version is approved for routine reporting.

Armstrong et al. describe the workflow problem from a public-health perspective. Sequencing programmes need to manage the sequencing process, analyse raw sequence data, store processed data, integrate it with epidemiological data, and share information securely. They note that pipelines exist for core steps such as quality validation, assembly, and phenotype inference, but user-friendly tools for workflow management and data integration may be lacking.

The PHE case study shows the service version of the same problem. PHE needed end-to-end bioinformatics processes for extracting sequence data from instruments, categorising samples, reporting data quality, configuring storage, giving users access to data, running analysis pipelines, integrating sequence data with sample context, and returning reports that users could understand. That is the level of operational detail a knowledge base should eventually support.

For a guidance chapter, provenance should be treated as a chain rather than a single log file. A useful record links the sample or isolate, sequencing run, raw data, QC outputs, workflow version, container or software versions, reference databases, parameters, intermediate outputs, final results, report, and release or sharing action. The dynamic guide now includes beta workflow-provenance, release/change-control, and shared-workflow adoption checklists.

Validation and change control remain partly source-backed but not final. PHE, APHL, WHO platform guidance, and clinical microbiology implementation sources support the beta checklists, but local services still need organism-specific validation boundaries, reportability thresholds, release approval routes, rollback criteria, and revalidation triggers.

## Source Basis

- `knowledge-base/extracted-notes/pha4ge-workflows-portability.md`
- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/aphl-ngs-implementation-2016.md`
- `knowledge-base/source-cards/clinical-microbiology-implementation-2026.md`
- `knowledge-base/source-cards/who-genomic-data-sharing-platforms-2025.md`
- Microbial Genomics workflow-validation and AMR-discordance source cards.
- PHA4GE VeriXiv manuscript workflow section and discussion.
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Workflow portability matrix: `knowledge-base/figures/briefs/workflow-portability-matrix.md`
- Provenance chain gap: `knowledge-base/figures/briefs/workflow-provenance-chain.md`

## Gaps

- The beta provenance and shared-workflow checklists need local operational testing before being treated as SOPs.
- Organism-specific validation, reportability, reanalysis and rollback triggers still need direct extraction.
- Workflow-system choice still needs implementation-team review against staffing, governance, connectivity, security and procurement constraints.

## Status

`source-backed beta checklists; local release rules still partial`
