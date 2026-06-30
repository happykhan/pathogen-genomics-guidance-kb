# Source Card: PHA4GE Infrastructure Source Pack

## Source Basis

- Local source pack: `Best Practices and Vision/` (ignored by git because it contains DOCX, PDF, XLSX, TIFF, EPS, and image files).
- Local extracted text: `Best Practices and Vision/extracted_text/`.
- Public repository clone: `source-material/local/pha4ge-infrastructure-resources/` (ignored by git).
- Public repository: <https://github.com/pha4ge/infrastructure-resources>.
- Public repository commit checked locally: `c64814b Uploaded survey data and notebook`.
- Likely authoritative manuscript text in local pack: `Best Practices and Vision/extracted_text/docx/MANUSCRIPT_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs_VerixivSubmitted_PHA4GE_InfrastructureRecommendations.txt`.
- Public repository draft: `source-material/local/pha4ge-infrastructure-resources/docs/recommendations.md`.
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

## Indexed Local Files

| Material | Local path | Use |
| --- | --- | --- |
| Local readout | `Best Practices and Vision/CONTENT_READOUT.md` | Existing assessment of source-pack contents and manuscript status |
| VeriXiv manuscript extract | `Best Practices and Vision/extracted_text/docx/MANUSCRIPT_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs_VerixivSubmitted_PHA4GE_InfrastructureRecommendations.txt` | Primary source for compute, workflow, data flow, IAM, vignettes, figure captions |
| Supplement extract | `Best Practices and Vision/extracted_text/docx/MANUSCRIPT_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs_01_Supplementary_materials_for_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs.txt` | Vignette details |
| Disaster recovery extract | `Best Practices and Vision/extracted_text/docx/Disaster_Recovery_best_practices.txt` | Backup and DR source notes, rough draft |
| Power and cooling extract | `Best Practices and Vision/extracted_text/docx/Power_and_Cooling.txt` | Physical server, room, cooling, UPS, generator source notes |
| Survey scoring CSV | `Best Practices and Vision/extracted_text/xlsx/MANUSCRIPT_Framework_for_Compute_Infrastructure_for_Pathogen_Genomics_Labs_Table_S1_-_Vignette_assesment_scores__Sheet1.csv` | Figure 3 / implementation comparison source data |
| Metric definitions CSV | `Best Practices and Vision/extracted_text/xlsx/Metrics__Sheet1.csv` | Survey dimension definitions |
| Public repo recommendations | `source-material/local/pha4ge-infrastructure-resources/docs/recommendations.md` | Draft Markdown comparison and linked figure/table structure |
| Public repo survey data | `source-material/local/pha4ge-infrastructure-resources/docs/survey_data_anon.tsv` | Survey data provenance |
| Public repo tier table | `source-material/local/pha4ge-infrastructure-resources/docs/tiers_table.md` | Draft maturity/capability material; not yet validated as formal guidance |

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
