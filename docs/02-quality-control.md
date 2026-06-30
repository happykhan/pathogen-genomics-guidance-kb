# Quality Control

## Core Principle

Quality control should be built into every stage of pathogen genomics data handling. QC is not a single final gate; it is a chain of checks from sample metadata through sequencing, processing, analysis, and reporting.

## QC Domains

- sample and metadata completeness
- run-level sequencing quality
- sample-level read quality and coverage
- contamination and mixed-sample checks
- assembly, mapping, or consensus quality
- pipeline execution status
- reference/database version tracking
- result plausibility and interpretation review
- report readiness

## Implementation Notes

- Define minimum QC criteria before routine use.
- Record QC outputs in structured form, not only in ad hoc spreadsheets.
- Keep failed and excluded samples traceable.
- Separate technical QC from biological or epidemiological interpretation.
- Version QC thresholds when they change.

## Open Work

Add pathogen-agnostic minimum QC domains from existing WHO, PHA4GE, CGPS, CPG, Fiocruz, and AMR guidance sources.

