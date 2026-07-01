# Source-Backed Editorial Workflow

## Rule

Do not add substantive guidance unless the source basis is recorded. If the source basis is weak, add a gap instead of filling the section with generic advice.

## Source-To-Guidance Trace

The authoring path is moving from direct chapter editing toward a compiled model:

```text
source document
  -> source card
  -> evidence item
  -> extracted claim card
  -> whitepaper target check
  -> section synthesis brief
  -> draft fragments
  -> reviewed fragments
  -> compiled guidance section
  -> dynamic whitepaper
```

The current public guide still uses `src/data/guidanceBlocks.ts`, but new content should be prepared in the editorial layer first so the source basis and review status are visible.

The whitepaper target in `src/data/whitepaperOutline.ts` is the editorial control point. Before adding a section, claim card, figure, table, or fragment, check whether it helps a mixed public-health team build or improve a routine pathogen genomics data and bioinformatics service. Material that is useful but outside that target should go to the resource finder, source cards, or Needs more work, not into the main guidance body.

Example: validation before replacing established methods.

| Step | Repo artifact | What it records |
| --- | --- | --- |
| Source card | `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md` | Provenance, relevance, extracted validation facts, and remaining limits. |
| Evidence item | `editorial/evidence-items/*.json` | The relevant evidence pointer from the original source: page, section, table, figure, short direct quote, and concise passage note. Avoid long copied passages. |
| Claim cards | `editorial/claim-cards/*.json` / `claim` | Small extracted interpretations of what one or more evidence items support, with source IDs, tags, candidate sections, limitations, and review state. Claim cards are not verbatim source text. |
| Whitepaper target | `src/data/whitepaperOutline.ts` / `whitepaperTarget` | The primary audience, practical use, core question, success criteria, and out-of-scope boundaries for the dynamic whitepaper. |
| Section synthesis brief | `editorial/section-briefs/*.json` | Editorial instructions for a whitepaper section: purpose, must-cover points, do-not-claim rules, preferred claims, conditionals, figures, and gaps. |
| Draft fragments | `editorial/fragments/*.json` | Paragraphs, boxes, tables, figures, or gap fragments generated from approved claim cards and section briefs. |
| Reviewed fragments | `editorial/fragments/*.json` with `reviewStatus: "reviewed"` | Content approved for later public compilation into the dynamic whitepaper. |
| Compiled guidance section | `outputs/compiled-guidance-blocks/*.json` | Static compiled section assembled from reviewed fragments, structured tables and figures, linked claims, evidence items, source IDs, profile conditions, and gaps. |
| Current structured guidance block | `src/data/guidanceBlocks.ts` / `quality-validation-before-switch` | Existing public-facing prose, source IDs, paragraph-level `bodySourceIds`, technical detail, audiences, topics, and gaps. |
| Source registry | `src/data/sources.ts` | Stable source ID and source-card path used by citations and API output. |
| Rendered guide | `src/components/GuidanceRenderer.tsx` | Inline citations, numbered references, source status, technical details, and gap notes. |
| Backstage debug | `/backstage` and `/api/editorial` | Public-safe read-only view of outline, claim cards, briefs, fragments, statuses, source IDs, and conditions. |
| Local review server | `npm run editorial:review` | Local-only browser tool that can approve, deprecate, or mark fragments as gaps by writing JSON in `editorial/fragments/`. |
| QA | `npm run content:check` | Confirms source IDs resolve, cited sources have source cards, editorial references resolve, and public records do not expose local paths. |

## Status Labels

Public guidance block statuses:

- `reviewed`: source-backed public prose with no known unresolved source-ID problems.
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
5. Create evidence items under `editorial/evidence-items/` for specific useful passages, figures, tables, or source-card summaries.
6. Create claim cards under `editorial/claim-cards/` for specific useful claims, each linked to one or more evidence items. Keep each card small enough that it can be mapped to a paragraph, figure, table, checklist item, or example box.
7. Update relevant section briefs under `editorial/section-briefs/`.
8. Create or regenerate draft fragments under `editorial/fragments/`.
9. Review fragments locally with `npm run editorial:review`.
10. Compile reviewed fragments with `npm run guidance:compile`.
11. Use source IDs in public guidance only where the prose is directly supported.
12. Run `npm run content:check`.

## Evidence Items, Direct Quotes, And Claim Cards

An evidence item is the only layer that should contain verbatim source wording. Use `directQuote` for a short quote from the source and `passageSummary` for the editor's paraphrased note about what the passage supports. A quote should be short enough to verify the extraction, not long enough to reproduce the source.

A claim card is not the original text from a paper, report, or guidance document. It is the editor's concise extraction of what the evidence supports.

Use this distinction:

```text
original source text or page/table/figure pointer
  -> evidence item with source locator, short direct quote, passage summary, limitation
  -> extracted claim card
  -> draft whitepaper fragment
  -> reviewed public whitepaper prose
```

For copyright and clarity, debug views may show source locators, page or section pointers, short direct quotes, short passage notes, and extracted claims. They should not expose full-text passages from copyrighted PDFs. Public whitepaper text should not reproduce direct quotes unless there is a specific editorial reason and the quote is short.

## Three-Layer Review Model

Use the same review model in `/backstage`, `npm run editorial:review`, and manual review:

| Layer | Object | Review question |
| --- | --- | --- |
| 1 | Evidence item | Does the source locator, direct quote if present, passage note, limitation, and source ID point to a real, relevant source passage, figure, table, or source-card record? |
| 2 | Claim card | Does the extracted claim follow from the evidence item without overstating the source, and are its candidate sections, confidence, limitations, audience, organism, and stage tags correct? |
| 3 | Whitepaper fragment | Does the synthesized paragraph, table, checklist, box, figure brief, or gap note use the claim cards faithfully, cite the right sources, and fit the section synthesis brief and profile conditions? |

Approve a fragment only when layer 1 supports layer 2, and layer 2 supports layer 3. If layer 1 is only a source-card summary, keep the evidence, claim, and fragment in draft until the original source passage has been checked. If the source supports the topic but not the proposed action, mark the fragment as `gap` or rewrite it as a caution rather than approving it as guidance.

## Adding Guidance Prose

1. Start from claim cards, not from an empty prompt.
2. Use the section synthesis brief to define focus, scope, do-not-claim rules, and conditional variants.
3. Generate or draft structured fragments: `paragraph`, `exampleBox`, `checklist`, `table`, `figure`, or `gap`.
4. Attach citations at the smallest meaningful unit through `claimIds` and `sourceIds`.
5. Keep claims cautious when evidence is setting-specific.
6. Add a gap when a runbook, model, figure, field list, or numeric estimate is not yet source-backed.
7. Approve fragments locally before they are compiled into the public whitepaper.
8. Check the web guide and print output if the change affects document structure.

## Compiling Reviewed Fragments

Run:

```bash
npm run guidance:compile
```

By default this compiles the storage, backup, archive and retention section into:

```text
outputs/compiled-guidance-blocks/storage-backup-archive-retention.json
```

The compiled file is an editorial handoff artifact, not a replacement for public rendering yet. It contains the reviewed fragments in section order, table and figure payloads, profile conditions, claim IDs, evidence item IDs, source IDs, direct quotes in the evidence chain, and known gaps. This makes one complete vertical slice inspectable before wiring the compiler into the public guide.

To compile a specific section:

```bash
node scripts/compile-guidance-fragments.mjs storage-backup-archive-retention
```

The storage slice is the first worked example. It starts from reviewed evidence items for WHO 2023 storage policy, the PHE implementation case study, and PHA4GE infrastructure material; maps them to storage and local-resilience claim cards; applies the reviewed section synthesis brief; and emits reviewed paragraph, table, and figure fragments.

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

## Fresh Evidence Extraction

Run:

```bash
npm run evidence:extract
```

The extraction script reads `editorial/evidence-searches.json`, searches local extracted text files, and writes candidate evidence records under `outputs/evidence-candidates/`. That output is git-ignored because it is a local review aid and may contain source snippets.

Candidate evidence is not approved evidence. A candidate must be reviewed, shortened if needed, and converted into an `editorial/evidence-items/*.json` record before a claim or fragment can depend on it.

Evidence status rules:

- `reviewed` evidence should come from a source-text excerpt, figure, table, or precise passage note.
- `source-card-summary` evidence can be useful during triage, but it must remain `draft`.
- `short-excerpt` evidence should include a `directQuote`.
- Direct quotes should normally stay below 35 words unless `quoteWordLimit` is set for a specific reviewed reason.
- A `reviewed` claim cannot depend on draft evidence.
- A `reviewed` fragment cannot depend on draft claims.

## Content QA Checklist

- Every `sourceId`, `summarySourceId`, and `bodySourceId` exists in `src/data/sources.ts`.
- Every cited source has a source-card path.
- Every resource marked `extracted` has a source card.
- Every claim-card source ID exists.
- Every evidence-item source ID exists.
- Every claim-card evidence item ID exists.
- Every fragment claim ID exists.
- Every fragment source ID exists.
- Every brief and fragment points to a valid whitepaper outline section.
- Inline citation numbers match the numbered reference list.
- No public API exposes local user-home PDF paths.
- No PDF/DOCX/XLSX/TIFF/EPS source files are committed.
