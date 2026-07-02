# Programmatic API

The web app exposes structured JSON so other tools, scripts, and AI agents can fetch the guidance text and resource catalogue directly.

## Endpoints

### `GET /api/guidance`

Returns the dynamic whitepaper content.

Includes:

- `guidanceBlocks`: section titles, summaries, body text, subsections, technical detail, figures, tables, audiences, organisms, topics, source IDs, and unresolved evidence notes.
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

Fetch figure assets and their citation source IDs:

```bash
curl -s http://127.0.0.1:4321/api/guidance \
  | jq '.guidanceBlocks[] | select(.figures != null) | {id, title, figures: .figures}'
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

### `GET /api/editorial` Legacy Debug Endpoint

Returns the public-safe legacy editorial debug model. This endpoint is retained for audit/debugging of earlier extraction work, but it is no longer the recommended authoring workflow.

Includes:

- versioned default Gnomey profile
- explicit whitepaper target: primary audience, practical use, core question, success criteria, and out-of-scope boundaries
- versioned whitepaper outline
- evidence items, which provide source locators, evidence type, passage summaries, and short excerpts where appropriate
- extracted claim cards, which are concise source-backed interpretations rather than verbatim source text
- section synthesis briefs
- draft/reviewed/gap/deprecated fragments
- coverage counts and missing-reference checks

Example:

```bash
curl http://127.0.0.1:4321/api/editorial
```

Inspect the stable whitepaper outline:

```bash
curl -s http://127.0.0.1:4321/api/editorial \
  | jq '.whitepaperOutline[] | {order, id, title, purpose, expectedFragments}'
```

Inspect the editorial target:

```bash
curl -s http://127.0.0.1:4321/api/editorial \
  | jq '.whitepaperTarget'
```

The deployed `/api/editorial` endpoint is read-only. Do not treat the legacy fragment/card model as the source of truth for new public prose; read the source PDF or extracted full text instead.

## Notes For AI/Agent Use

- Treat `sourceStatus: "extracted"` as already reviewed for the knowledge base.
- Treat `sourceStatus: "candidate"` as useful but still requiring careful extraction before making strong claims.
- In `/api/guidance`, treat guidance block `sourceStatus: "reviewed"` as reviewed public prose, `partial` as source-backed but incomplete, and `gap` as a placeholder or editorial work item.
- Treat `/api/editorial` as legacy audit data only. It is not a public prose-generation API.
- Do not treat claim cards, evidence summaries, or PubMed abstracts as substitutes for source PDFs or extracted full text.
- For new guidance prose, use the workflow in `docs/source-editorial-workflow.md`: source PDF or official source, extracted full text, section reading notes, authored whitepaper section, inline citations, and needs-more-work notes for weak evidence.
- Do not assume every source has a direct PDF. Some publishers provide HTML pages only, and some PDFs are behind publisher controls.
- The API is read-only and currently unversioned beyond the `version` field in each response.
- Public API records must not expose local user-home file paths; local full-text inventory remains repository documentation only.
