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
- `/gaps`
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
- gaps page.

The whitepaper should read as one continuous document, not a stack of unrelated cards.

## Print / PDF Export

Use the browser `Export PDF` control and verify:

- web controls, navigation, Gnomey, and buttons are hidden;
- title, profile summary, contents, sections, inline citations, and numbered references print cleanly;
- section text does not overlap or clip;
- references remain numbered and match inline citations.

## Scenario Checks

Run the wizard for these profiles and verify that section ranking and resources are plausible:

- Director, exploring, make the case.
- Laboratory lead, pilot, validate workflows.
- Bioinformatician, routine service, validate workflows and share data.
- IT/security, national scale, data residency concern and cloud not allowed.
- Programme lead, exploring, design infrastructure.
- Enteric-bacteria service profile.
- Respiratory-virus sharing profile.
- TB and AMR validation profile.
- Healthcare-associated infection profile.

`npm run qa:scenarios` covers the constraint-specific checks that can be automated:

- unreliable internet raises local storage/backup guidance and lowers data-sharing-platform ranking;
- no bioinformatics staff raises workforce and support-relevant guidance;
- no central IT raises operating-model and backup/sustainability guidance;
- no LIMS raises metadata and data-lifecycle guidance;
- cloud restrictions or data-residency concern raise governance/sharing caution and lower cloud-heavy recommendations.
- organism-specific profiles surface the expected enteric, respiratory-virus, TB/AMR, and healthcare-associated infection sections above the dynamic-guide visibility threshold.

## Editorial Checks

- Blocks marked `reviewed` should not have unresolved gaps.
- Blocks marked `partial` should explain what source work remains.
- Gaps page should reflect current missing work, not stale gaps already filled by WHO/IPSN extraction.
