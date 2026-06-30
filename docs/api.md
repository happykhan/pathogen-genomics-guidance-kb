# Programmatic API

The web app exposes structured JSON so other tools, scripts, and AI agents can fetch the guidance text and resource catalogue directly.

## Endpoints

### `GET /api/guidance`

Returns the dynamic whitepaper content.

Includes:

- `guidanceBlocks`: section titles, summaries, body text, subsections, technical detail, audiences, organisms, topics, source IDs, and unresolved evidence notes.
- `sources`: source registry used by the citation markers in the whitepaper.

Example:

```bash
curl http://127.0.0.1:4321/api/guidance
```

### `GET /api/resources`

Returns the resource finder catalogue.

Includes:

- document title
- agency and year
- source URL
- PDF URL where a direct PDF link has been identified
- executive summary
- why the document is useful
- audience, organism, implementation-stage, and topic tags

Example:

```bash
curl http://127.0.0.1:4321/api/resources
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
- Do not assume every source has a direct PDF. Some publishers provide HTML pages only, and some PDFs are behind publisher controls.
- The API is read-only and currently unversioned beyond the `version` field in each response.
