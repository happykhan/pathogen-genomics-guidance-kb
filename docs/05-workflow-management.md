# Workflow Management

## Core Principle

Routine pathogen genomics analysis should use reproducible, versioned, and portable workflow systems wherever feasible. Ad hoc scripts can be useful during development, but routine surveillance requires stronger provenance and repeatability.

## Practical Expectations

- Use workflow systems such as Nextflow, Snakemake, WDL/Cromwell, CWL, or Galaxy where appropriate.
- Package software dependencies in containers or equivalent reproducible environments.
- Record workflow version, container version, reference/database version, parameters, input data, and output locations.
- Separate workflow development from routine validated operation.
- Prefer community workflow ecosystems where they meet programme needs.

## Questions For Implementation

- Who can create or approve workflows?
- Who can run workflows?
- Where are results stored?
- How are failures detected and retried?
- How are pipeline updates tested before routine use?
- How are validated versions preserved?

## Source Basis

Initial content based on PHA4GE infrastructure manuscript sections on workflow execution and pipeline-sharing ecosystems.

