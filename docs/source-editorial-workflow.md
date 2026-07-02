# Source-Backed Editorial Workflow

## Rule

Write the guide from source documents, not from abstracts or disconnected claim cards.

The working source should be a full PDF, official web guidance page, source repository, or extracted full text from one of those documents. Source cards and notes can help with orientation, but they are not the evidence base for new prose.

## Current Workflow

```text
source PDF / official source
  -> extracted full text
  -> section reading notes
  -> authored whitepaper section
  -> inline citations
  -> needs-more-work notes for weak evidence
```

The front-facing guide is authored in `src/data/guidanceBlocks.ts`. Each section should read like a coherent whitepaper section, not a set of small generated fragments. Gnomey can hide, reveal, or expand parts of that document for a reader profile, but the document order and argument should remain stable.

## Full-Text Extraction

Run:

```bash
npm run pdfs:extract-text
```

This extracts text from:

- committed public PDFs in `public/pdfs/`;
- local WHO/IPSN PDFs under `source-material/local/who-ipsn/`;
- local PDFs listed in `source-material/local-full-text-inventory.md`, when those files exist on the laptop.

The extracted text is written to:

```text
source-material/extracted-text/
```

That directory is git-ignored. Do not commit full extracted text from copyrighted PDFs. Use it locally for reading, searching, and drafting.

## Writing A Section

For each whitepaper section:

1. Identify the practical question the reader needs answered.
2. Read the relevant extracted full text and source PDFs.
3. Draft the section as prose first: what problem is being solved, what decisions need to be made, what can go wrong, what a workable implementation looks like, and what remains unresolved.
4. Add inline citations at the sentence or paragraph level using source IDs already registered in `src/data/sources.ts`.
5. Add one or two tables or figures only where they help the reader act.
6. Put weak or missing evidence into `gaps`, not into overconfident guidance.
7. Run `npm run content:check`, `npm run qa:scenarios`, and `npm run build`.

## What Not To Do

- Do not build front-facing prose by compiling tiny fragments.
- Do not treat PubMed abstracts as enough source material for implementation guidance.
- Do not expose local `/Users/...` paths in public APIs.
- Do not prescribe numeric retention periods, RTO/RPO targets, storage-size formulae, staffing ratios, or legal deletion rules unless a suitable source has been read and cited.
- Do not make the reader aware of internal provenance machinery in the whitepaper prose.

## Backstage Material

The existing `editorial/` JSON files are legacy review aids. They can be useful for remembering earlier extraction work, but they are no longer the primary authoring workflow. New work should start from full extracted text and be written directly into coherent guidance sections.

If the backstage data contradicts the source PDF or extracted full text, use the source PDF/full text.

## Content QA Checklist

- Every public `sourceId`, `summarySourceId`, and `bodySourceId` exists in `src/data/sources.ts`.
- Every cited source has a source-card path or public source record.
- Every resource marked `extracted` has enough local source material to justify that status.
- No public API exposes local user-home PDF paths.
- No PDF/DOCX/XLSX/TIFF/EPS source files are committed except approved public PDFs under `public/pdfs/`.
- The guide reads as a whitepaper, not as a database dump.
