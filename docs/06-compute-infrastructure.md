# Compute Infrastructure

## Purpose

Describe the infrastructure decisions a public-health pathogen genomics programme needs to make before it can run routine analysis at service scale.

## Guidance Draft

Pathogen genomics infrastructure is an operating model, not a purchase list. Sequencing programmes need compute and storage, but they also need workflow execution, data movement, software environments, user management, monitoring, backup, support, and people who know who is responsible when something fails.

The PHA4GE infrastructure work frames this as five practical questions: what the infrastructure tries to solve, how analysis is run, where analysis is run, how data flows, and who has access. These questions are useful because they separate responsibility from technology. A laboratory can run analysis on local servers, institutional HPC, cloud platforms, laptops, or a managed service, but the important implementation question is who operates each layer and who carries the risk.

The responsibility model is often described as SaaS, PaaS, and IaaS. In a SaaS-like system, users bring data and use a controlled set of pipelines while the provider manages most of the platform and infrastructure. In a PaaS-like system, users bring data and workflows, while the platform manages the underlying resources. In an IaaS-like system, the laboratory or institution manages data, pipelines, operating systems, execution tools, and surrounding services. These are not simply cloud categories. A cloud system can leave substantial responsibility with the laboratory, while an on-premises service can hide much of the complexity from end users.

The PHE WGS service shows what this looks like in practice. PHE did not only buy sequencers. It planned sequencing equipment, robotics, laboratory space, IT infrastructure, high-performance compute, data storage, archive storage, LIMS integration, data-lifecycle management software, project management, validation, training, and user reporting. The case study also shows why throughput and service level matter: the service was designed around routine weekly volumes, surge capacity, sample tracking, analysis speed, and a five-day sample-submission-to-report workflow.

Infrastructure planning should therefore start from service use cases. A programme should know which pathogens will be sequenced, how many samples are expected now and later, who needs results, how quickly reports are needed, which analyses are routine, which data must be retained, and which users or agencies need access. Those answers determine whether the programme needs a laptop workflow, a local service, institutional HPC, a managed cloud platform, a central national service, or a hybrid model.

Central IT needs to be involved early. Pathogen genomics systems handle large datasets, controlled access, software environments, identity systems, storage growth, and incident response. The PHA4GE source notes that ordinary central IT teams may not understand pathogen genomics requirements unless data flows and analysis activities are made explicit. The PHE case study similarly treats IT infrastructure, data management, and project management as core implementation costs.

The main procurement risk is buying capacity without an operating model. Hardware, cloud credits, or a workflow platform will not by themselves produce a usable public-health service. The source material points to a more complete specification: sample flow, LIMS integration, workflow execution, storage and archive tiers, backup and recovery, access control, reporting, user support, validation, maintenance, and recurrent staffing.

The dynamic guide now includes beta operating-model, dependency, constraint-response, responsibility, and workforce-capacity worksheets. These compare local, cloud, managed-platform, centralised, hybrid, collaborative, and externally supported models by responsibility, owner, dependency and failure mode rather than ranking one model as universally best.

## Source Basis

- `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/who-genomics-costing-tool-manual-2024.md`
- `knowledge-base/source-cards/clinical-microbiology-implementation-2026.md`
- `knowledge-base/source-cards/auspathogen-implementation-2025.md`
- `knowledge-base/source-cards/east-africa-genomics-landscape-2024.md`
- PHA4GE VeriXiv manuscript five-factor framing, SaaS/PaaS/IaaS section, exemplar systems, and discussion.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Responsibility model: `knowledge-base/figures/briefs/responsibility-model.md`
- Feature-impact matrix: `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- The beta operating-model and dependency matrices need review against real programme examples and procurement constraints.
- Service-level, support, and escalation expectations still need local owner assignment and user testing.
- Country-readiness and procurement framing remain partial where local legal, finance, hosting, and support arrangements differ.

## Status

`source-backed beta operating-model worksheets`
