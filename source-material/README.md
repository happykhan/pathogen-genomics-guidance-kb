# Source Material

Use this directory to index source packs and preserve provenance. Do not dump large unpublished files here unless the project has agreed how they should be licensed and stored.

Recommended pattern:

```text
source-material/
  pha4ge-infrastructure/
    README.md
    source-index.md
  local/
    ignored-source-pack/
```

For large local-only archives, place the files under `source-material/local/` or another git-ignored folder and commit only a source index or readout.

