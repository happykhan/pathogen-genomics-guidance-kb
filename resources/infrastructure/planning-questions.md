# Infrastructure Planning Questions

Use these questions when planning or reviewing pathogen genomics infrastructure.

## Scope

- What parts of the bioinformatics system should the lab operate itself?
- What parts can or should be delegated to a platform or service?
- What responsibilities remain with the lab even when using an external service?

## Analysis

- Which workflows must run routinely?
- Are workflows containerised and versioned?
- Who can install, validate, update, and retire workflows?
- How are workflow runs logged?

## Location

- Will analysis run on laptops, local servers, HPC, cloud, or a hybrid model?
- What network constraints affect data upload/download?
- What data residency or legal constraints apply?

## Data Flow

- Where does raw data originate?
- Where is it stored during active analysis?
- Where do results go?
- Which data are archived?
- Which data can be deleted?

## Access

- Who can access raw data, intermediate outputs, final results, and reports?
- How are users authenticated?
- How are roles reviewed and revoked?
- What audit trail is required?

