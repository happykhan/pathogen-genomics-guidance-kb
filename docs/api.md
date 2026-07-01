# Programmatic API

The web app exposes structured JSON so other tools, scripts, and AI agents can fetch the guidance text and resource catalogue directly.

## Endpoints

### `GET /api/guidance`

Returns the dynamic whitepaper content.

Includes:

- `guidanceBlocks`: section titles, summaries, body text, subsections, technical detail, audiences, organisms, topics, source IDs, and unresolved evidence notes.
- `sourceStatus`: per-section evidence state: `reviewed`, `partial`, or `gap`.
- `sources`: source registry used by the citation markers in the whitepaper.

Example:

```bash
curl http://127.0.0.1:4321/api/guidance
```

Fetch section titles, evidence status, and source IDs:

```bash
curl -s http://127.0.0.1:4321/api/guidance \
  | jq '.guidanceBlocks[] | {id, title, sourceStatus, sourceIds, gaps}'
```

Build a citation lookup for a guidance block:

```bash
curl -s http://127.0.0.1:4321/api/guidance \
  | jq '.sources as $sources | .guidanceBlocks[] | select(.id == "sharing-is-not-unconditional") | .sourceIds[] as $id | {id: $id, source: $sources[$id]}'
```

### `GET /api/resources`

Returns the resource finder catalogue.

Includes:

- document title
- agency and year
- source URL
- PDF URL where a direct PDF link has been identified
- DOI where known
- source-card path where a source card exists in the repository
- executive summary
- why the document is useful
- audience, organism, implementation-stage, and topic tags

Example:

```bash
curl http://127.0.0.1:4321/api/resources
```

Fetch downloadable PDFs and source-card paths:

```bash
curl -s http://127.0.0.1:4321/api/resources \
  | jq '.resources[] | select(.pdfUrl != null) | {title, agency, year, doi, pdfUrl, sourceCardPath}'
```

### `GET /api/sources`

Returns the compact source registry referenced by guidance content.

Example:

```bash
curl http://127.0.0.1:4321/api/sources
```

### `GET /api/editorial`

Returns the public-safe editorial debug model used to develop the dynamic whitepaper.

Includes:

- versioned default Gnomey profile
- versioned whitepaper outline
- source evidence notes or short excerpts, exposed through `extractedText` on claim cards
- extracted claim cards, which are concise source-backed interpretations rather than verbatim source text
- section synthesis briefs
- draft/reviewed/gap/deprecated fragments
- coverage counts and missing-reference checks

Example:

```bash
curl http://127.0.0.1:4321/api/editorial
```

Inspect draft fragments and their source basis:

```bash
curl -s http://127.0.0.1:4321/api/editorial \
  | jq '.whitepaperFragments[] | select(.reviewStatus == "draft") | {id, sectionId, title, claimIds, sourceIds, reviewerNotes}'
```

Inspect the stable whitepaper outline:

```bash
curl -s http://127.0.0.1:4321/api/editorial \
  | jq '.whitepaperOutline[] | {order, id, title, purpose, expectedFragments}'
```

The deployed `/api/editorial` endpoint is read-only. Local fragment approval uses `npm run editorial:review`, which starts a localhost-only server that writes review decisions into `editorial/fragments/*.json`.

## Notes For AI/Agent Use

- Treat `sourceStatus: "extracted"` as already reviewed for the knowledge base.
- Treat `sourceStatus: "candidate"` as useful but still requiring careful extraction before making strong claims.
- In `/api/guidance`, treat guidance block `sourceStatus: "reviewed"` as usable beta prose, `partial` as source-backed but incomplete, and `gap` as a placeholder or editorial work item.
- In `/api/editorial`, treat `reviewStatus: "reviewed"` fragments as approved for future whitepaper compilation. Treat `draft` fragments as review candidates, not public guidance.
- Do not treat claim cards as original quotations. Use `sourceLocator` and source cards to trace the claim back to the underlying source.
- Treat `extractedText` as a source evidence note or short excerpt. It should help trace the claim, but it is not a substitute for reading the source card or source document.
- Do not synthesize new public guidance directly from documents. Use the pipeline: source card, extracted claim cards, section brief, draft fragment, reviewed fragment.
- Do not assume every source has a direct PDF. Some publishers provide HTML pages only, and some PDFs are behind publisher controls.
- The API is read-only and currently unversioned beyond the `version` field in each response.
- Public API records must not expose local file paths under `/Users/...`; local full-text inventory remains repository documentation only.
