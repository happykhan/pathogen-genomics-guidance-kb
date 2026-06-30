# Quality Management

## Purpose

Describe what the current source material supports about quality management for routine pathogen genomics services.

## Guidance Draft

Quality management for pathogen genomics needs to cover more than the final analysis result. A public-health genomics service depends on sample identity, sample quality, sequencing quality, analysis quality, interpretation, reporting, and the ability to detect when a process has changed. Weakness at any stage can affect whether a case is included in an outbreak, whether an organism is classified correctly, or whether a control measure is triggered.

The strongest operational source currently in the knowledge base is the PHE implementation case study. Before PHE switched Salmonella typing from conventional methods to WGS, it ran conventional and WGS workflows in parallel and compared datasets. The first validation phase used 1,538 representative Salmonella samples; the second compared 6,887 isolates against WGS-determined serotype. The case study reports 97% concordance between WGS and conventional methods and describes investigation of discordant results.

That example gives a useful implementation pattern. A programme should not replace an established public-health method with WGS only because the technology is available. It needs to define expected performance, run old and new methods in parallel where feasible, compare outputs, investigate discordance, adjust protocols, and decide what quality parameters will be monitored before routine use.

The PHE case study also makes clear that validation is not limited to the bioinformatics pipeline. It includes input material, DNA extraction, sequencing, laboratory handling, data quality, analysis outputs, and reporting. Issues identified during validation included missing profiles for known serotypes, different serovars sharing a sequence type, processing errors in conventional serotyping, sequence-based phenotype prediction errors, and the need to optimise DNA extraction quality and quantity.

Accreditation is another source-backed point. PHE reported ISO 15189 accreditation for its central sequencing service and WGS reference-laboratory services. The case study notes that applying accreditation standards to bioinformatics pipelines was a new challenge, because traditional microbiology metrics do not map cleanly onto software and workflow components. This is an important gap for the KB: quality guidance needs to cover both laboratory process controls and bioinformatics process controls.

The PHA4GE source adds the computational quality angle. Routine analysis should be transparent, portable, reproducible, and auditable. This supports use of workflow systems, containers, versioned pipelines, and provenance records, but it does not by itself define a full quality-management system.

For now, the KB can safely say that implementation should include validation against existing methods where relevant, quality parameters across the WGS process, documented troubleshooting, controlled workflows, and accreditation or quality-system review where the service is used for public-health action. The next step is to extract APHL or CDC/APHL quality resources so this chapter can move from a case-study pattern to a reusable quality-management framework.

## Source Basis

- PHA4GE workflow and discussion sections support transparency, workflow versioning, portability, and reproducibility.
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- No source-backed QC figure yet.

## Gaps

- Generic sample QC, run QC, analysis QC, reporting QC, nonconformance handling, and change-control source material still needed.
- Pipeline validation is partially supported by the PHE case study; a reusable validation and update runbook still needs source material.
- Accreditation requirements for bioinformatics pipelines need a more general source.

## Status

`source-backed draft`
