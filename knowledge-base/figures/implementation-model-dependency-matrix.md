# Implementation Model Dependency Matrix

## Status

`editable Markdown table; draft figure/table source`

## Source Basis

- PHA4GE infrastructure source pack.
- Gador-Whyte et al. 2026 clinical microbiology implementation review.
- Webb et al. 2025 AusPathoGen national implementation account.
- Nguinkal et al. 2024 East African Community landscape.

## Message

Infrastructure choice should be evaluated by dependencies and responsibilities, not by a simple local-versus-cloud label.

## Matrix

| Model | Strong when | Main dependencies | Main risks to manage | Source basis |
| --- | --- | --- | --- | --- |
| Central reference service | The programme needs consistent validation, high-throughput sequencing, specialist staff, and standard reporting. | Sample referral, central laboratory capacity, report turnaround, central bioinformatics, service-level governance. | Delayed sample movement, weak local ownership, dependency on central capacity, unclear support routes. | PHE case study; clinical implementation review |
| Local laboratory service | The programme needs local control, faster local response, and can sustain staff and IT support. | Local sequencing, trained staff, local validation, storage, backup, workflow maintenance, LIMS/reporting links. | Single-person dependency, inconsistent validation, underfunded storage, weak backup or access control. | APHL guide; PHA4GE source pack |
| Hybrid model | Local teams need some capability while specialist analysis, platform, or quality functions are shared. | Clear split of responsibilities, network/data transfer, shared standards, shared validation, support escalation. | Responsibility gaps, inconsistent metadata, slow cross-team decisions, unclear ownership of incidents. | PHA4GE source pack; clinical implementation review |
| Managed platform | The programme needs curated workflows, shared workspaces, reduced local administration, or rapid start-up. | Procurement, accounts, internet connectivity, data residency review, platform governance, vendor or provider support. | Lock-in, data transfer limits, unclear data control, recurring subscription/support costs. | PHA4GE source pack; WHO platform principles |
| Collaborative national platform | Multiple jurisdictions need shared analysis, metadata integration, surveillance visibility, and national governance. | Data-sharing agreements, ethics/governance, shared platform, standard bioinformatics, training for data users. | Siloed implementation, uneven participation, unclear data custodianship, governance delays. | AusPathoGen; Australian national framework |
| External support / third-party analysis | Capability is being built or specialist sequencing/analysis is not yet locally available. | Partner capacity, data-sharing arrangements, sample/data transfer, local interpretation route, capacity-building plan. | Delayed decisions, weak local interpretation, dependency on external priorities, limited sustainability. | East African Community landscape |

## Redraw Instructions

- Convert to a clean editorial table or small-multiple matrix.
- Keep one restrained accent colour.
- Avoid radar plots and decorative icons.
- Preserve the dependency framing.

## Gaps

- Needs review by implementers to confirm the dependency categories are understandable outside the project team.
