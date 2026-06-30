# Beta 0.2 QA Results: 2026-07-01 Local Runtime

## Summary

This QA pass covers automated content checks, static build, route smoke tests, API hygiene, browser screenshot capture, and browser print output for the public beta guide.

## Automated Checks

Passed:

- `npm run content:check`
- `npm run qa:scenarios`
- `npm run build`
- `git ls-files | rg -i '\\.(pdf|docx|xlsx|tiff?|eps)$' || true`

Results:

- 16 guidance blocks validated.
- 30 resource records validated.
- 24 source registry entries validated.
- 5 profile-constraint scenarios passed.
- No tracked PDF/DOCX/XLSX/TIFF/EPS files were found.

## Static Route Smoke Checks

Served `out/` locally on `http://127.0.0.1:4322`.

Passed:

- `/` returned 200.
- `/resources/` returned 200.
- `/gaps/` returned 200.
- `/api/guidance` returned 200.
- `/api/resources` returned 200.
- `/api/sources` returned 200.
- `/api-docs/` returned 200.

## API Hygiene

`/api/resources` result:

- 30 resources.
- 14 public PDF links.
- 24 source-card paths.
- 14 resources marked `extracted`.
- No `/Users/...` local path leakage.

## Visual Artifacts

Generated local QA artifacts under ignored `tmp/qa/`:

- `guidance-desktop.png`
- `guidance-mobile.png`
- `resources-desktop.png`
- `gaps-desktop.png`
- `guidance-print.pdf`

The mobile guidance screenshot was checked for hero/card overflow after the previous mobile fix.

## Print / PDF Export

Generated with headless Chrome:

- `tmp/qa/guidance-print.pdf`
- A4 page size.
- 9 pages.
- Browser controls hidden by print CSS.

## Scenario QA

Automated scenario checks passed for:

- unreliable internet;
- no bioinformatics staff;
- no central IT;
- absent LIMS;
- cloud restricted / data residency concern.

These checks verify that the constraints change guidance and resource ranking in the intended direction.

## Pending Manual QA

- Wizard modal screenshot and click-through review.
- Full representative human review for director, laboratory lead, bioinformatician, IT/security, and mixed-team profiles.

Reason: headless Chrome screenshot capture worked for static pages and print, but the local runtime did not have a WebSocket client available for DevTools modal interaction. Computer-use was also blocked by macOS Accessibility/Screen Recording permissions during this run.

## Outcome

The automated and static beta gate passed. The remaining QA work is manual interaction review, not build or data integrity work.
