# Pathogen Genomics Data and Infrastructure Knowledge Base

This repository is a Markdown-first, source-backed knowledge base for WHO-oriented pathogen genomics data and bioinformatics infrastructure guidance.

## Editorial Rule

Do not draft new substantive guidance from scratch.

- Extract or adapt from source material first.
- Preserve provenance in source cards and extracted notes.
- Improve rough source text for clarity only when the source basis is recorded.
- If a topic lacks source material, create a `Gap` note or skeleton section.
- Keep large DOCX/PDF/XLSX/TIFF/EPS files out of git unless deliberately agreed later.

## Structure

```text
docs/                  Assembled source-status-aware guidance modules
knowledge-base/        Extracted notes, source cards, vignettes, and figure briefs
source-material/       Source-pack indexes and ignored local source clones/packs
templates/             Module and figure templates
outputs/               Draft products assembled from the knowledge base
```

`resources/` has been renamed to `knowledge-base/`.

## Current Source Pack

The first source pack is PHA4GE infrastructure material:

- Local ignored archive/extracts: `Best Practices and Vision/`
- Local readout: `Best Practices and Vision/CONTENT_READOUT.md`
- Public repository clone, ignored by git: `source-material/local/pha4ge-infrastructure-resources/`
- Public repository: <https://github.com/pha4ge/infrastructure-resources>
- Committed source card: `knowledge-base/source-cards/pha4ge-infrastructure.md`

The strongest current coverage is compute infrastructure, responsibility models, workflow systems, portability, data flow, IAM, backup/power/cooling notes, vignettes, and survey dimensions. Metadata, repositories, broader governance, analysis-to-decision use, costing, and formal maturity assessment remain gaps.

Additional local PDF sources have been indexed as source cards:

- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`

These strengthen public-health framing, data integration, workflow implementation, validation, reporting, data sharing, workforce, and implementation planning, but do not replace the need for WHO/ECDC/APHL/UKHSA/Australian framework sources.

## Working Flow

1. Add or clone source material under ignored local paths.
2. Commit only source cards, indexes, extracted notes, CSV extracts when appropriate, and lightweight editable figures.
3. Promote extracted notes into `docs/` only when each module records `Source Basis`, `Status`, and `Gaps`.
4. Use figure briefs before redrawing figures.
5. Keep missing topics visible as gaps instead of filling them with generic prose.
