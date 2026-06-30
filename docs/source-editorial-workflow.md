# Source-Backed Editorial Workflow

## Rule

Do not add substantive guidance unless the source basis is recorded. If the source basis is weak, add a gap instead of filling the section with generic advice.

## Source-To-Guidance Trace

Example: validation before replacing established methods.

| Step | Repo artifact | What it records |
| --- | --- | --- |
| Source card | `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md` | Provenance, relevance, extracted validation facts, and remaining limits. |
| Extracted note or chapter | `docs/03-quality-management.md` | Source-backed prose on parallel running, comparison with conventional methods, gap analysis, quality parameters, and accreditation. |
| Structured guidance block | `src/data/guidanceBlocks.ts` / `quality-validation-before-switch` | Public-facing prose, source IDs, paragraph-level `bodySourceIds`, technical detail, audiences, topics, and gaps. |
| Source registry | `src/data/sources.ts` | Stable source ID and source-card path used by citations and API output. |
| Rendered guide | `src/components/GuidanceRenderer.tsx` | Inline citations, numbered references, source status, technical details, and gap notes. |
| QA | `npm run content:check` | Confirms source IDs resolve, cited sources have source cards, and reviewed blocks do not contain unresolved source errors. |

## Status Labels

- `reviewed`: source-backed beta prose with no known unresolved source-ID problems.
- `partial`: source-backed but incomplete; the block must include gaps or limits.
- `gap`: placeholder or missing evidence area; do not present as guidance.

## Adding A New Source

1. Add a source card under `knowledge-base/source-cards/`.
2. Add or update extracted notes under `knowledge-base/extracted-notes/` where useful.
3. Register the source in `src/data/sources.ts`.
4. Add a resource record in `src/data/resources.ts` with public URL, DOI, PDF URL where available, source-card path, topics, audiences, organisms, and extraction state.
5. Use the source ID in guidance only where the prose is directly supported.
6. Run `npm run content:check`.

## Adding Guidance Prose

1. Start from extracted notes or source cards.
2. Add paragraph-level `bodySourceIds` when a block has multiple paragraphs.
3. Keep claims cautious when evidence is setting-specific.
4. Add a gap when a runbook, model, figure, field list, or numeric estimate is not yet source-backed.
5. Check the web guide and print output if the change affects document structure.

## Content QA Checklist

- Every `sourceId`, `summarySourceId`, and `bodySourceId` exists in `src/data/sources.ts`.
- Every cited source has a source-card path.
- Every resource marked `extracted` has a source card.
- Inline citation numbers match the numbered reference list.
- No public API exposes local `/Users/...` PDF paths.
- No PDF/DOCX/XLSX/TIFF/EPS source files are committed.
