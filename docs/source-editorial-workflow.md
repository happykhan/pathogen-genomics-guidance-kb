# Source-Backed Editorial Workflow

## Rule

Do not add substantive guidance unless the source basis is recorded. If the source basis is weak, add a gap instead of filling the section with generic advice.

## Source-To-Guidance Trace

The beta authoring path is moving from direct chapter editing toward a compiled model:

```text
source document
  -> source card
  -> source evidence note / short excerpt
  -> extracted claim card
  -> section synthesis brief
  -> draft fragments
  -> reviewed fragments
  -> dynamic whitepaper
```

The current public guide still uses `src/data/guidanceBlocks.ts`, but new content should be prepared in the editorial layer first so the source basis and review status are visible.

Example: validation before replacing established methods.

| Step | Repo artifact | What it records |
| --- | --- | --- |
| Source card | `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md` | Provenance, relevance, extracted validation facts, and remaining limits. |
| Source evidence note / short excerpt | `editorial/claim-cards/*.json` / `extractedText` | The relevant evidence pointer from the original source: page, section, table, figure, short allowed excerpt, or concise passage note. Avoid long copied passages. |
| Claim cards | `editorial/claim-cards/*.json` / `claim` | Small extracted interpretations of what a source supports, with source IDs, source locator, tags, candidate sections, limitations, and review state. Claim cards are not verbatim source text. |
| Section synthesis brief | `editorial/section-briefs/*.json` | Editorial instructions for a whitepaper section: purpose, must-cover points, do-not-claim rules, preferred claims, conditionals, figures, and gaps. |
| Draft fragments | `editorial/fragments/*.json` | Paragraphs, boxes, tables, figures, or gap fragments generated from approved claim cards and section briefs. |
| Reviewed fragments | `editorial/fragments/*.json` with `reviewStatus: "reviewed"` | Content approved for later public compilation into the dynamic whitepaper. |
| Current structured guidance block | `src/data/guidanceBlocks.ts` / `quality-validation-before-switch` | Existing public-facing prose, source IDs, paragraph-level `bodySourceIds`, technical detail, audiences, topics, and gaps. |
| Source registry | `src/data/sources.ts` | Stable source ID and source-card path used by citations and API output. |
| Rendered guide | `src/components/GuidanceRenderer.tsx` | Inline citations, numbered references, source status, technical details, and gap notes. |
| Backstage debug | `/backstage` and `/api/editorial` | Public-safe read-only view of outline, claim cards, briefs, fragments, statuses, source IDs, and conditions. |
| Local review server | `npm run editorial:review` | Local-only browser tool that can approve, deprecate, or mark fragments as gaps by writing JSON in `editorial/fragments/`. |
| QA | `npm run content:check` | Confirms source IDs resolve, cited sources have source cards, editorial references resolve, and public records do not expose local paths. |

## Status Labels

Public guidance block statuses:

- `reviewed`: source-backed beta prose with no known unresolved source-ID problems.
- `partial`: source-backed but incomplete; the block must include gaps or limits.
- `gap`: placeholder or missing evidence area; do not present as guidance.

Editorial object statuses:

- `draft`: prepared for review but not approved for public whitepaper compilation.
- `reviewed`: approved for use in the public whitepaper.
- `gap`: evidence or synthesis need that should appear in Needs more work, not as guidance.
- `deprecated`: retained for provenance but not rendered.

## Adding A New Source

1. Add a source card under `knowledge-base/source-cards/`.
2. Add or update extracted notes under `knowledge-base/extracted-notes/` where useful.
3. Register the source in `src/data/sources.ts`.
4. Add a resource record in `src/data/resources.ts` with public URL, DOI, PDF URL where available, source-card path, topics, audiences, organisms, and extraction state.
5. Create claim cards under `editorial/claim-cards/` for specific useful claims. Keep each card small enough that it can be mapped to a paragraph, figure, table, checklist item, or example box.
6. Update relevant section briefs under `editorial/section-briefs/`.
7. Create or regenerate draft fragments under `editorial/fragments/`.
8. Review fragments locally with `npm run editorial:review`.
9. Use source IDs in public guidance only where the prose is directly supported.
10. Run `npm run content:check`.

## Claim Cards Versus Source Text

A claim card is not the original text from a paper, report, or guidance document. It is the editor's concise extraction of what the source supports.

Use this distinction:

```text
original source text or page/table/figure pointer
  -> source evidence note / short excerpt
  -> extracted claim card
  -> draft whitepaper fragment
  -> reviewed public whitepaper prose
```

For copyright and clarity, public debug views should show source locators, page or section pointers, short passage notes, short allowed excerpts, and extracted claims. They should not expose full-text passages from copyrighted PDFs.

## Adding Guidance Prose

1. Start from claim cards, not from an empty prompt.
2. Use the section synthesis brief to define focus, scope, do-not-claim rules, and conditional variants.
3. Generate or draft structured fragments: `paragraph`, `exampleBox`, `checklist`, `table`, `figure`, or `gap`.
4. Attach citations at the smallest meaningful unit through `claimIds` and `sourceIds`.
5. Keep claims cautious when evidence is setting-specific.
6. Add a gap when a runbook, model, figure, field list, or numeric estimate is not yet source-backed.
7. Approve fragments locally before they are compiled into the public whitepaper.
8. Check the web guide and print output if the change affects document structure.

## Local Fragment Review

Run:

```bash
npm run editorial:review
```

Then open:

```text
http://127.0.0.1:5177
```

The local review tool writes only to `editorial/fragments/*.json`. It is intended for laptop review and should not be deployed. The public `/backstage` page is read-only and safe to share as a debug view.

## Content QA Checklist

- Every `sourceId`, `summarySourceId`, and `bodySourceId` exists in `src/data/sources.ts`.
- Every cited source has a source-card path.
- Every resource marked `extracted` has a source card.
- Every claim-card source ID exists.
- Every fragment claim ID exists.
- Every fragment source ID exists.
- Every brief and fragment points to a valid whitepaper outline section.
- Inline citation numbers match the numbered reference list.
- No public API exposes local `/Users/...` PDF paths.
- No PDF/DOCX/XLSX/TIFF/EPS source files are committed.
