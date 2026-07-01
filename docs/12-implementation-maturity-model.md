# Implementation Maturity Model

## Purpose

Describe how the current source material could support a future maturity model, while avoiding a premature scoring tool.

## Guidance Draft

A maturity model would be useful for this knowledge base, but the current sources do not yet justify a formal assessment rubric. The available material can identify dimensions that matter; it cannot yet define validated levels, scoring rules, or country-readiness thresholds.

The PHA4GE survey and vignettes are the strongest starting point. They compare implementation examples across dimensions such as future proofing, ease of use for administrators, ease of use for users, data provenance and management, access control, external access requirements, flexibility, and scalability. These are useful dimensions because they connect technical choices to service consequences.

The PHE case study adds a service-transition example that could inform maturity staging. PHE moved from planning and capital investment through laboratory-space redesign, hardware installation, validation phases, central WGS service launch, staged transfer of Salmonella identification and typing to WGS, and eventual phase-out of conventional methods. This is useful as an implementation sequence, but it is not a general maturity ladder.

A practical maturity model for pathogen genomics should probably assess several areas separately rather than produce one overall score. Candidate areas include service scope, sample and metadata flow, workflow reproducibility, validation and quality management, compute and storage operations, data sharing, governance and IAM, reporting and decision use, workforce, and sustainability.

The risk is false precision. A laptop-based field workflow may be low maturity for national routine surveillance but appropriate for an offline outbreak setting. A cloud platform may score highly for scalability but poorly for data residency or external connectivity in some countries. A maturity model needs to make context explicit.

The dynamic guide now includes a beta maturity risk-reduction worksheet. It asks what the programme can reliably do today, which dependency is fragile, and what would fail if a key person, supplier, network connection, platform, storage system, workflow, report route, or support route became unavailable. It should be used to choose the next service risk to reduce, not to produce a certified score.

The dynamic guide also now includes a beta national capability-domain checklist. UKHSA, the Australian national framework, and AusPathoGen support treating national implementation as a set of linked capabilities: public-health priorities and users, laboratory network and quality, data and analytics platforms, governance and data sharing, workforce and interpretation, sustainability and evaluation. This is a planning checklist, not a national architecture or maturity score.

For now, this chapter should remain a design note plus beta worksheet. The next step is to extract WHO, ECDC, APHL, UKHSA, and Australian framework sources to see whether they already define capability levels, implementation stages, evidence requirements, or readiness dimensions that can be adapted with provenance.

## Source Basis

- PHA4GE vignettes and survey dimensions.
- Public repository `source-material/local/pha4ge-infrastructure-resources/docs/tiers_table.md`.
- `knowledge-base/extracted-notes/vignettes-and-survey-scoring.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/who-genomic-surveillance-progress-2023.md`
- `knowledge-base/source-cards/ukhsa-pathogen-genomics-strategy-2024.md`
- `knowledge-base/source-cards/australia-national-microbial-genomics-framework-2025.md`
- `knowledge-base/source-cards/east-africa-genomics-landscape-2024.md`
- `knowledge-base/source-cards/auspathogen-implementation-2025.md`
- `knowledge-base/source-cards/clinical-microbiology-implementation-2026.md`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Capability maturity model gap: `knowledge-base/figures/briefs/capability-maturity-model.md`
- Feature-impact matrix: `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- Formal source-backed maturity levels are still needed before any scoring tool is presented.
- Scoring rubric, evidence requirements, interpretation rules, and validation against real programmes are still needed.
- Country/laboratory readiness mapping is still needed.
- National governance templates, operating-model examples, and capability-level definitions still need deeper extraction before being turned into an assessment tool.

## Status

`source-backed beta risk-reduction worksheet; formal score remains a gap`
