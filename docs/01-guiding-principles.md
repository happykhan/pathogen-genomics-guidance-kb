# Guiding Principles

## Purpose

State the working principles that currently have source support and can guide later WHO-style guidance.

## Guidance Draft

Pathogen genomics services should be designed around public-health use, not around sequencing output alone. The relevant question is not only whether genomes can be generated, but whether the system can produce reliable information for outbreak investigation, surveillance, resistance monitoring, reporting, and decision-making.

The first principle is that infrastructure is an operating model. PHA4GE frames this through five questions: what the infrastructure solves, how analysis is run, where analysis is run, how data flow, and who has access. These questions force programmes to define responsibility instead of assuming that hardware, cloud access, or a software platform will solve the whole problem.

The second principle is that genomic data need context. Armstrong et al. state that genomic data and epidemiological data need to be integrated to realise their full value. The PHE case study shows this operationally, with sequence-analysis outputs combined with LIMS data to produce reports. A sequence result without time, place, sample source, case information, or exposure context is often not enough for public-health action.

The third principle is that routine analysis needs reproducibility and provenance. The PHA4GE source supports containerised workflows, workflow systems, pipeline-sharing ecosystems, and traceable analysis. Programmes need to know which workflow, software, reference data, parameters, input data, and output records produced a report.

The fourth principle is that quality must be built before routine use. PHE did not switch off conventional Salmonella methods until it had run WGS in parallel, compared results, performed gap analysis, adjusted protocols, and established quality parameters. This gives a source-backed implementation pattern for validation.

The fifth principle is that sharing is valuable but not unconditional. Armstrong et al. describe public-health data sharing through NCBI, ReSeqTB, and GISAID, but also stress confidentiality and risk. A guidance product needs to support sharing while making governance, access, and risk decisions explicit.

The sixth principle is that workforce is part of the system. Armstrong et al. identify workforce development across microbiology, epidemiology, bioinformatics, and data science. The PHE case study shows the same need through training, specialist bioinformatics roles, software and computing expertise, and service-user engagement.

## Source Basis

- PHA4GE VeriXiv manuscript background, five-factor framing, workflow section, data-flow section, IAM section, and discussion.
- `knowledge-base/extracted-notes/pha4ge-compute-infrastructure.md`
- `knowledge-base/extracted-notes/pha4ge-workflows-portability.md`
- `knowledge-base/extracted-notes/pha4ge-data-flow-iam.md`
- `knowledge-base/extracted-notes/public-health-implementation-sources.md`
- Armstrong et al. 2019, `Pathogen Genomics in Public Health`, doi:10.1056/NEJMsr1813907.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Responsibility model: `knowledge-base/figures/briefs/responsibility-model.md`
- Feature-impact matrix: `knowledge-base/figures/briefs/feature-impact-matrix.md`

## Gaps

- No WHO-endorsed principle set has been extracted yet.
- Benefit sharing, legal basis, privacy governance, and equitable repository choice need formal source extraction.

## Status

`source-backed draft`
