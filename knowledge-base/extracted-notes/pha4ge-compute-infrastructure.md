# Extracted Note: PHA4GE Compute Infrastructure Framing

## Source Basis

- `knowledge-base/source-cards/pha4ge-infrastructure.md`
- `Best Practices and Vision/extracted_text/docx/MANUSCRIPT_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs_VerixivSubmitted_PHA4GE_InfrastructureRecommendations.txt`
- `source-material/local/pha4ge-infrastructure-resources/docs/recommendations.md`

## Status

`source-backed draft`

## Extracted/Adapted Text

The PHA4GE infrastructure manuscript frames compute infrastructure for pathogen sequence analysis around five planning questions:

1. Which parts of the analysis solution are handled by the infrastructure and which remain the laboratory's responsibility?
2. How are analyses run, from scripts through to containerised workflow systems?
3. Where are analyses run, including laptops, servers, HPC clusters, cloud resources, or hybrid arrangements?
4. How do raw data, metadata, intermediate outputs, reports, archives, and shared outputs move through the system?
5. Who has access, and how are authentication, authorisation, user lifecycle, roles, auditability, and incident responsibilities managed?

The manuscript treats SaaS, PaaS, and IaaS as responsibility tiers rather than simple cloud labels. A SaaS-like model offers a controlled set of pipelines and shifts hardware and data-management responsibility away from the user. A PaaS-like model lets users bring data and workflows while the platform manages underlying resources. An IaaS-like model leaves the user responsible for data, pipelines, operating-system configuration, execution tools, and surrounding services.

The source also states that the abstraction tier is independent of physical location. Cloud, on-premises, HPC, and local systems can each expose different responsibility models.

## Implementation Notes

- Use this note as the basis for `docs/06-compute-infrastructure.md`.
- The responsibility model figure should not imply that SaaS/PaaS/IaaS are vendor categories only; the source uses them to describe responsibility and abstraction.
- The source repeatedly connects infrastructure decisions to central IT, procurement, regulation, future scale, governance, provenance, and maintenance.

## Figures

- `knowledge-base/figures/briefs/responsibility-model.md`
- `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- No WHO-specific procurement decision framework has been extracted yet.
- No formal service-level or operating-model checklist has been reviewed.
