# Source Card: PHA4GE Infrastructure Source Pack

## Source Basis

- PHA4GE source pack supplied for local editorial review, including manuscript text, supplementary material, figures, survey tables, and notebook-derived material.
- Extracted text and source-pack binaries are kept outside the committed beta site.
- Public repository: <https://github.com/pha4ge/infrastructure-resources>.
- Public repository commit checked locally: `c64814b Uploaded survey data and notebook`.
- Likely authoritative manuscript text: VeriXiv-submitted infrastructure recommendations manuscript from the supplied source pack.
- Public repository draft: `docs/recommendations.md` in `pha4ge/infrastructure-resources`.
- Public repository data/notebooks: `docs/survey_data_anon.tsv`, `docs/infra_recs_analyses.ipynb`, `docs/figures/datainfra_impactoffeaturechoices.ipynb`.

## Status

`source-backed index`

The local VeriXiv-submitted manuscript appears cleaner than the public repository Markdown draft. The public repository remains useful for provenance, source figures, notebooks, survey data, and comparison, but draft markers in `docs/recommendations.md` mean it should not be treated as the final text without reconciliation.

## Extracted/Adapted Text

The source pack frames pathogen genomics compute infrastructure around five questions: what the infrastructure is responsible for, how analysis is run, where analysis is run, how data flows, and who has access. It treats infrastructure as more than CPU cores and storage: workflow execution, data management, user management, provenance, auditability, and long-term maintenance are part of the operating model.

The manuscript groups operating models into SaaS, PaaS, and IaaS responsibility tiers. It also states that this abstraction level is separate from the physical location of the compute resources.

The workflow sections support guidance on containerised workflows, workflow languages or workflow systems, pipeline-sharing ecosystems, portability, reproducibility, and provenance. Named examples include WDL, CWL, Nextflow, Galaxy, Dockstore, WorkflowHub, nf-core, and the Intergalactic Workflow Commission.

The data-flow and IAM sections support notes on ingestion, storage, processing, delivery, archiving, role-based access, institutional identity systems, offboarding, auditability, information governance, and cyber incident responsibility.

The vignettes and survey material support comparative implementation analysis across laptop/field bioinformatics, on-prem HPC, cloud/PaaS workflow systems, Galaxy, Terra, and IRIDA-like SaaS models.

## Indexed Source Materials

| Material | Source material | Use |
| --- | --- | --- |
| Source-pack readout | Local editorial readout | Existing assessment of source-pack contents and manuscript status |
| VeriXiv manuscript extract | Supplied manuscript text | Primary source for compute, workflow, data flow, IAM, vignettes, figure captions |
| Supplement extract | Supplied supplementary text | Vignette details |
| Disaster recovery extract | Supplied rough source note | Backup and DR source notes, rough draft |
| Power and cooling extract | Supplied rough source note | Physical server, room, cooling, UPS, generator source notes |
| Survey scoring CSV | Supplied survey extract | Figure 3 / implementation comparison source data |
| Metric definitions CSV | Supplied metric extract | Survey dimension definitions |
| Public repo recommendations | `pha4ge/infrastructure-resources` `docs/recommendations.md` | Draft Markdown comparison and linked figure/table structure |
| Public repo survey data | `pha4ge/infrastructure-resources` `docs/survey_data_anon.tsv` | Survey data provenance |
| Public repo tier table | `pha4ge/infrastructure-resources` `docs/tiers_table.md` | Draft maturity/capability material; not yet validated as formal guidance |

## Figure Inventory

| Source concept | Source file(s) | KB action |
| --- | --- | --- |
| SaaS/PaaS/IaaS responsibility model | VeriXiv Figure 1 caption; public `recommendations.md`; local `Fig1-service-diagram.png`, source SVGs under `RAW_FIGURES/` | Redraw as minimalist responsibility model |
| Workflow portability and infrastructure capabilities | VeriXiv Figure 2 caption; public `recommendations.md`; local `Fig2_Components.svg` | Redraw as workflow portability matrix |
| Vignette feature comparison | VeriXiv Figure 3 caption; `survey_data_anon.tsv`; local survey CSV extracts | Replace radar with small multiples or table |
| Feature-impact matrix | VeriXiv Figure 4 caption; public `recommendations.md` Table 2; local Fig4 image | Redraw as minimalist heatmap/table |
| Capability maturity model | Public `tiers_table.md`; survey dimensions | Draft only until source basis and assessment intent are reviewed |

## Gaps

- The public repository Markdown and local VeriXiv manuscript need a formal reconciliation note if text is reused directly.
- The maturity tiers in `tiers_table.md` are useful but contain draft/illustrative wording; they should not become an assessment tool without review.
- The PHA4GE pack has limited source material for metadata standards, repository decision-making, governance beyond IAM, analysis-to-decision use, costing, procurement, and formal validation/change control.
