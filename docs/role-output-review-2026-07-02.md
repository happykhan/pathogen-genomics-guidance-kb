# Role Output Review, 2026-07-02

## Summary

The guide should keep one stable whitepaper order, but the opening orientation and visible detail need to change by reader. The previous output relied too heavily on section scoring and did not explain the reader's job clearly enough.

## Findings

### Director

Appropriate focus: value case, service model, recurrent cost, governance, workforce, sustainability.

Needed change: make clear that the decision is not "buy sequencing" or "move to cloud"; it is funding a recurring public-health data and bioinformatics service.

### Policy Or Governance

Appropriate focus: public-health objectives, data sharing, governance, ethics, privacy, interpretation limits.

Needed change: avoid technical-first framing and make clear where genomics cannot substitute for sampling design, epidemiology, metadata quality, or legal review.

### Laboratory Lead

Appropriate focus: sample route, QC, validation boundary, reporting product, failure handling, turnaround, user feedback.

Needed change: show the transition from pilot sequencing to routine service operation, including failed samples and exception routes.

### Bioinformatician

Appropriate focus: reproducibility, workflow ownership, validation, provenance, versions, reference data, compute and storage.

Needed change: stress that working scripts are not enough for routine service; workflows must be rerunnable, supportable, auditable, and change-controlled.

### IT Or Security

Appropriate focus: what the genomics service is trying to achieve, what infrastructure support is being requested, data volumes, identity/access, storage, backup, monitoring, network/cloud controls, data residency, and incident response.

Needed change: explain the domain first. This reader may not know pathogen genomics; the guide should translate the ask into storage, access, recovery, and risk requirements.

### Data Manager

Appropriate focus: sample-to-report lineage, metadata, systems of record, accession records, correction routes, sharing state, retention/deletion decisions.

Needed change: frame metadata as operational infrastructure, not a form-filling exercise.

### Funder Or Partner

Appropriate focus: recurrent service costs, assumptions, implementation dependencies, staffing, sustainability, and transferability of economic evidence.

Needed change: warn against equipment-only budgets and generic ROI claims.

### Mixed Team

Appropriate focus: shared vocabulary and alignment across use case, sample flow, analysis, storage, reporting, sharing, governance, and support.

Needed change: keep the whitepaper readable as a whole and avoid reorganising the document by profile.

## Implemented In This Pass

- Added role-specific orientation text to the whitepaper cover.
- Kept the authored document order stable for every profile.
- Rewrote the storage section around ongoing storage footprint, replication, backup, archive, ownership, and restore testing.
- Replaced the old fragment-compilation workflow with a full-text extraction and authored-section workflow.

## Still Needs Review

- Walk through the rendered guide manually for each role on desktop and mobile.
- Check whether non-technical readers still see too much technical detail before they understand the service model.
- Add worked examples for storage-footprint estimation once we have source-backed examples or clearly marked local assumptions.
