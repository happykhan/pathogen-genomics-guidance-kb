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

- 17 guidance blocks validated.
- 30 resource records validated.
- 24 source registry entries validated.
- 5 profile-constraint scenarios and 5 representative reader profiles passed.
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
- No local user-home path leakage.

## Visual Artifacts

Generated local QA artifacts under ignored `tmp/qa/`:

- `guidance-desktop.png`
- `guidance-mobile.png`
- `resources-desktop.png`
- `gaps-desktop.png`
- `wizard-desktop.png`
- `guidance-print.pdf`

The mobile guidance screenshot was checked for hero/card overflow after the previous mobile fix. The wizard screenshot confirms that Gnomey opens the modal and exposes the profile, organism, compute, goal, and constraint controls over the document.

## Print / PDF Export

Generated with headless Chrome:

- `tmp/qa/guidance-print.pdf`
- A4 page size.
- 11 pages.
- Browser controls hidden by print CSS.

## Scenario QA

Automated scenario checks passed for:

- unreliable internet;
- no bioinformatics staff;
- no central IT;
- absent LIMS;
- cloud restricted / data residency concern.

These checks verify that the constraints change guidance and resource ranking in the intended direction.

Representative profile checks also passed for:

- director making the investment case;
- laboratory lead piloting a service;
- bioinformatician validating workflows;
- IT/security reviewing data sharing and residency;
- mixed team exploring infrastructure options.

These checks verify that the expected source-backed guidance blocks appear in the top-ranked material for each representative profile.

## Outcome

The automated and static beta gate passed. Remaining review work is content and user review of the guidance prose, not build, data integrity, or interaction gating.
