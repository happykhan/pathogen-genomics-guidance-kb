# Beta 0.2 QA Checklist

Use this checklist before calling the guide beta-ready.

Latest recorded run:

- `docs/beta-qa-results-2026-07-01.md`

## Automated Checks

- `npm run content:check`
- `npm run qa:scenarios`
- `npm run build`
- Confirm no large source binaries are tracked:

```bash
git ls-files | rg -i '\\.(pdf|docx|xlsx|tiff?|eps)$' || true
```

## Static Route Smoke Checks

After `npm run build`, serve `out/` locally and check:

- `/`
- `/resources`
- `/api/guidance`
- `/api/resources`
- `/api/sources`

The API checks should confirm:

- guidance blocks expose `sourceStatus`;
- cited `sourceIds` resolve through `/api/sources`;
- resource records include `pdfUrl`, `doi`, and `sourceCardPath` where available;
- extracted resource records include source cards;
- no public API exposes local user-home paths.

## Visual Checks

Check desktop and mobile widths for:

- guidance page and whitepaper body;
- Gnomey wizard;
- resource finder cards and pagination;
- WHO IRIS resource explorer.

The whitepaper should read as one continuous document, not a stack of unrelated cards.

## Print / PDF Export

Use the `Print-friendly version` control, then print or save as PDF from the print route and verify:

- web controls, navigation, Gnomey, and buttons are hidden;
- title, profile summary, contents, sections, inline citations, and numbered references print cleanly;
- section text does not overlap or clip;
- references remain numbered and match inline citations.

## Scenario Checks

Run the wizard for these profiles and verify that section ranking and resources are plausible:

- Director, exploring.
- Laboratory lead, pilot.
- Bioinformatician, routine service, HPC.
- IT/security, national scale, cloud.
- Programme lead, exploring, compute not decided.
- Enteric-bacteria service profile.
- Respiratory-virus sharing profile.
- TB validation profile.
- AMR validation profile.
- Healthcare-associated infection profile.

`npm run qa:scenarios` covers the profile checks that can be automated:

- representative reader profiles include the expected leadership, laboratory, bioinformatics, IT/security, and programme-lead sections under the deterministic profile rules;
- organism-specific profiles include the expected enteric, respiratory-virus, tuberculosis, AMR, and healthcare-associated infection sections under the deterministic profile rules.

## Editorial Checks

- Blocks marked `reviewed` should not have unresolved gaps.
- Blocks marked `partial` should explain what source work remains.
- Missing-evidence notes should remain internal to the relevant guidance blocks and source workflow, not appear as a standalone public page.
