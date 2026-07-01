# Public PDF Bundle

This directory contains PDFs served by the static site for Resource Finder download buttons.

Only add PDFs that are public agency/government/open-access documents suitable for redistribution in this repository. Do not add publisher PDFs from local downloads unless their license clearly permits redistribution.

Run:

```bash
npm run pdfs:sync
```

The script reads `public/pdfs/manifest.json`, copies approved local files into this directory, and verifies that every manifest entry exists.
