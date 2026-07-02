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

## Notes For AI/Agent Use

- Treat `sourceStatus: "extracted"` as already reviewed for the knowledge base.
- Treat `sourceStatus: "candidate"` as useful but still requiring careful extraction before making strong claims.
- In `/api/guidance`, treat guidance block `sourceStatus: "reviewed"` as reviewed public prose, `partial` as source-backed but incomplete, and `gap` as a placeholder or evidence work item.
- Do not treat PubMed abstracts as substitutes for source PDFs or extracted full text.
- For new guidance prose, use the workflow in `docs/source-workflow.md`: source PDF or official source, extracted full text, section reading notes, authored whitepaper section, inline citations, and needs-more-work notes for weak evidence.
- Do not assume every source has a direct PDF. Some publishers provide HTML pages only, and some PDFs are behind publisher controls.
- The API is read-only and currently unversioned beyond the `version` field in each response.
- Public API records must not expose local user-home file paths; local full-text inventory remains repository documentation only.
