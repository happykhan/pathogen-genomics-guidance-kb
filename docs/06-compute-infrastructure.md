# Compute Infrastructure

## Purpose

Hold source-backed material on compute infrastructure models for pathogen sequence analysis.

## Source Basis

- `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- PHA4GE VeriXiv manuscript five-factor framing, SaaS/PaaS/IaaS section, exemplar systems, and discussion.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The PHA4GE source frames compute infrastructure around five questions: responsibility scope, workflow execution, physical or cloud location, data flow, and access. It treats SaaS, PaaS, and IaaS as responsibility tiers and states that abstraction level is independent of where compute resources are physically located.

The source also states that compute infrastructure for pathogen genomics is not achieved by CPU cores and storage alone. Workflow execution engines, data management systems, system configuration, and human resources are part of the infrastructure needed to let laboratory users manage and analyse genomic data.

The PHE case study adds a source-backed implementation example: WGS service planning included sequencing equipment, robotics, IT infrastructure, compute clusters, storage, archive capacity, LIMS, data-lifecycle management software, and enough processing speed and storage to avoid service-delivery impact while remaining scalable.

## Implementation Notes

This chapter has the strongest current source coverage. It can be expanded next by extracting the five-factor sections into structured guidance blocks with provenance retained.

## Figures

- Responsibility model: `knowledge-base/figures/briefs/responsibility-model.md`
- Feature-impact matrix: `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- Source-backed generic operating model checklist needed.
- Source-backed service-level and support model needed.
- WHO-specific procurement and country-readiness framing needed.

## Status

`source-backed draft skeleton`
