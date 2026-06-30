# Infrastructure Planning Questions

## Source Basis

- PHA4GE five-factor framing in the VeriXiv manuscript.
- `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`

## Status

`source-backed prompt list`

These questions adapt the PHA4GE five-factor framing into prompts for source extraction and later guidance drafting. They are not a complete procurement checklist.

## Scope and Responsibility

- Which parts of the bioinformatics analysis system remain the laboratory's responsibility?
- Which parts are deferred to a platform, external provider, central IT team, or shared service?
- What responsibilities remain with the laboratory even when a SaaS or PaaS model is used?

## Analysis Execution

- Which analyses are run as command-line scripts, containerised workflows, managed platform workflows, or curated SaaS pipelines?
- Which workflow languages, workflow runners, platforms, or sharing ecosystems are in scope?
- How are workflow versions, containers, inputs, outputs, and run records captured?

## Physical or Cloud Location

- Does analysis run on laptops, local servers, HPC, cloud resources, or a hybrid arrangement?
- What network, power, regulatory, data-residency, or sustainability constraints affect that location?
- Is physical location being confused with responsibility model?

## Data Flow

- Where do raw data and metadata originate?
- Where are data stored during active analysis?
- Which outputs support interpretation, and which outputs constitute final conclusions?
- Where are reports, visualisations, shared data, and archives delivered?

## Access

- How are users provisioned, assigned roles, reviewed, and offboarded?
- Which identity systems are used?
- Which activities require logging or auditability?
- Who is responsible for detecting and responding to cyber incidents or data misuse?

## Gaps

- Procurement, costing, service levels, and country-readiness questions need additional source material.
