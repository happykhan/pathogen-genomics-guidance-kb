# Pathogen Genomics Data and Infrastructure Knowledge Base

This repository is a Markdown-first, source-backed knowledge base for WHO-oriented pathogen genomics data and bioinformatics infrastructure guidance.

The aim is not to keep a filing system of sources. The aim is to build readable guidance chapters from extracted source material, with provenance visible enough that each substantive point can be checked.

The current product direction is an interactive web guide: profile-aware guidance, a short tailoring wizard, a resource finder, and practical assessment tools built from the same source-backed knowledge base.

## Editorial Rule

Do not draft new substantive guidance from scratch. Do write clear prose when the source basis exists.

- Extract or adapt from source material first.
- Preserve provenance in source cards and extracted notes.
- Improve rough source text for clarity only when the source basis is recorded.
- If a topic lacks source material, mark the missing part as a gap instead of filling it with generic advice.
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

## Web App

The first implementation slice is a static-exportable Next.js app using the same broad framework pattern as QualiBact: Next App Router, React client components for interactive tools, Tailwind/PostCSS, and GenomicX-style `gx-*` design tokens.

```bash
npm install
npm run dev
npm run build
```

Local development runs at <http://127.0.0.1:4321/> by default. The app currently includes:

- Tailored guidance document with role, stage, organism, infrastructure, and goal profile controls.
- Gnomey wizard for quickly setting a profile.
- Shareable profile URLs and browser print/PDF export.
- Resource finder backed by a structured catalogue of extracted and candidate sources.
- Bioinformatics infrastructure tier quiz.
- Read-only API endpoints for guidance, sources, resources, and the editorial model.
- Backstage editorial view showing source cards, evidence items, claim cards, briefs, fragments, statuses, and gaps.
- Automated scenario QA for constraint profiles, representative readers, and key organism profiles.

## Current Source Base

The initial source pack was PHA4GE infrastructure material:

- Local ignored archive/extracts: `Best Practices and Vision/`
- Local readout: `Best Practices and Vision/CONTENT_READOUT.md`
- Public repository clone, ignored by git: `source-material/local/pha4ge-infrastructure-resources/`
- Public repository: <https://github.com/pha4ge/infrastructure-resources>
- Committed source card: `knowledge-base/source-cards/pha4ge-infrastructure.md`

The PHA4GE source remains strongest for compute infrastructure, responsibility models, workflow systems, portability, data flow, IAM, backup/power/cooling notes, vignettes, and survey dimensions.

Additional source cards now cover:

- `knowledge-base/source-cards/cdc-pathogen-genomics-public-health-2019.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- WHO global genomic surveillance strategy, national strategy support, SARS-CoV-2 implementation, pathogen genome data-sharing principles, genomic data-sharing platform attributes, and genomics costing tool material.
- ECDC WGS public-health surveillance guidance.
- APHL NGS implementation guidance.
- UKHSA, Australian national framework, and AusPathoGen implementation sources.
- Economic evaluation and costing papers.
- Microbial Genomics implementation collection papers covering validation, AMR, enteric bacteria, respiratory viruses, infection control, proficiency testing, and public-health implementation examples.

These strengthen public-health framing, data integration, workflow implementation, validation/change control, reporting and decision use, data sharing, governance review, workforce, costing scenarios, and implementation planning.

The main remaining gaps are now narrower:

- organism-specific report templates, cluster interpretation rules, nomenclature rules, repository fields, and QC thresholds;
- jurisdiction-specific legal, ethical, privacy, data-residency, procurement, cross-border transfer, benefit-sharing, accreditation, and incident-management review;
- source-backed staffing ratios or FTE examples by throughput, organism focus, and implementation model;
- quantitative local costing examples and return-on-investment assumptions by setting;
- disease-programme and implementation-team user testing of the beta wizard/profile matrices;
- a validated formal maturity scoring instrument.

## Working Flow

1. Add or clone source material under ignored local paths.
2. Commit only source cards, indexes, extracted notes, CSV extracts when appropriate, and lightweight editable figures.
3. Prepare public guidance through the editorial layer: source card, evidence item, claim card, section brief, reviewed fragment, then structured dynamic whitepaper content.
4. Use figure briefs before redrawing figures.
5. Keep missing topics visible as gaps instead of filling them with generic prose.
