# Pathogen Genomics Data and Infrastructure Guidance Knowledge Base

This repository is a Markdown-first knowledge base for pathogen-agnostic best practices in pathogen genomics data management, bioinformatics infrastructure, workflow execution, storage, backup, standards, access control, and sustainable surveillance operations.

The immediate aim is to consolidate existing community work into reusable guidance blocks that can feed WHO guidance, AMR-specific guidance, country implementation plans, training material, grant proposals, checklists, and technical working group outputs.

## Working Principle

This is not one monolithic document. It is a source-of-truth library:

- `docs/` contains synthesized guidance modules.
- `resources/` contains reusable technical notes, vignettes, and implementation material.
- `source-material/` records provenance for source packs and external materials.
- `templates/` contains practical checklists and working group templates.
- `outputs/` contains draft products assembled from the knowledge base.

Keep source material and synthesized guidance separate. Source material preserves provenance; guidance modules should be practical, pathogen-agnostic, and reusable.

## Current Source Pack

The local folder `Best Practices and Vision/` contains an extracted PHA4GE infrastructure source pack. It is intentionally ignored by git because it includes large DOCX/PDF/spreadsheet/figure files.

Local readout:

`Best Practices and Vision/CONTENT_READOUT.md`

The cleanest current manuscript source in that pack appears to be:

`Best Practices and Vision/MANUSCRIPT Framework for Compute Infrastructure for Pathogen Genomics Labs/VerixivSubmitted/PHA4GE_InfrastructureRecommendations.docx`

## Suggested Use

1. Add or index source material under `source-material/`.
2. Distill each source into one or more short guidance modules in `docs/` or `resources/`.
3. Preserve provenance in each module using a `Source basis` section.
4. Assemble audience-specific products in `outputs/`.
5. Use pull requests for substantive changes once the repo is published.

## Initial Scope

This knowledge base covers the whole data lifecycle:

- planning and governance
- sample/data ingestion
- quality control
- metadata and standards
- storage, backup, archiving, and retention
- compute infrastructure
- workflow management and reproducibility
- access control and security
- analysis principles
- skills, staffing, sustainability, and procurement

