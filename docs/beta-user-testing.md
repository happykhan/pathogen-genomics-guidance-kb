# Public Beta User-Testing Script

## Purpose

Test whether the public beta helps different public-health users understand what to do next, where the risks are, and which source-backed documents they should read.

## Participants

Recruit at least one reviewer from each group:

- senior director or policy user;
- laboratory lead;
- bioinformatician;
- IT or security lead;
- data manager;
- funder or programme manager.

## Test Setup

- Use the current deployed beta site.
- Ask the participant to think aloud while using the site.
- Do not explain the intended answer unless the participant is blocked.
- Capture notes in `templates/beta-feedback-capture.md`.
- Convert actionable findings into GitHub issues linked to roadmap issue `#18`.

## Tasks

1. Tailor the guide for a new pilot pathogen genomics programme.
2. Identify the sections most relevant to the participant's role.
3. Find WHO, ECDC, APHL, UKHSA, Australian, or related source documents relevant to that profile.
4. Use the quiz to identify the current bioinformatics tier or maturity position.
5. Export or print a tailored guidance summary.
6. Share a profile-specific link with a colleague in another role.
7. Identify at least three red flags in the tailored guide, such as weak storage planning, unclear ownership, no validation route, poor metadata linkage, or unresolved data-sharing governance.

## Success Metrics

- The participant can complete profile tailoring without help.
- The participant can explain why at least two sections were relevant to them.
- The participant can find at least one primary source document and one PDF download where available.
- The participant can identify when a section is source-backed and when it points to unresolved evidence needs.
- The participant can export or print a readable whitepaper-style document.
- The participant can describe one infrastructure trade-off rather than repeating a one-size-fits-all recommendation.

## Failure Signals

- The participant treats Gnomey as a chatbot instead of a tailoring wizard.
- The participant cannot tell which citations support a claim.
- The participant cannot find documents in the resource finder.
- The participant expects the guide to prescribe one universal cloud, HPC, laptop, or managed-platform answer.
- The printed/exported guide contains controls, navigation, or broken reference numbering.
- Missing evidence is hidden from the relevant section context or reads like public guidance rather than an unresolved evidence need.

## Triage Rule

Create a GitHub issue for every finding that changes comprehension, trust, task completion, accessibility, print/PDF output, or source traceability. Minor wording notes can be grouped into a single content issue.
