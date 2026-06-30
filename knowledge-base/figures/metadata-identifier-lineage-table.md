# Metadata And Identifier Lineage Table

## Status

`editable Markdown table; draft figure/table source`

## Source Basis

- WHO 2025 genomic data-sharing platform attributes and principles.
- WHO 2023 national genomic surveillance strategy support tool.
- ECDC 2016 WGS surveillance expert opinion.
- PHE pathogen genomics implementation case study.
- APHL NGS implementation guide.

## Message

The guide needs a concrete sample-to-report lineage model so that metadata, QC, workflow provenance, reporting, and repository accessions stay connected.

## Minimum Lineage Table

| Stage | Identifier or record to preserve | Why it matters | Source basis |
| --- | --- | --- | --- |
| Sample or isolate receipt | Sample/isolate ID, submitter, date received, source context | Connects sequence result to laboratory and epidemiological context. | WHO national strategy; ECDC |
| Metadata capture | Sampling strategy, sample information, attribution, organism/use-case fields | Supports interpretation, platform submission, and controlled sharing. | WHO platform principles |
| Sequencing run | Run ID, instrument, library preparation, run metrics | Connects raw data and quality checks to the laboratory process. | APHL; PHE |
| Raw data | FASTQ or equivalent file ID, storage location, checksum if available | Supports reanalysis, audit, and recovery. | APHL; PHA4GE |
| QC outputs | Run/read/assembly QC records and pass/fail decisions | Prevents release or sharing of results without quality evidence. | APHL; ECDC |
| Workflow run | Workflow ID/version, software/container versions, reference data, parameters | Supports reproducibility, review, and change-control decisions. | PHA4GE; ECDC |
| Interpreted result | Cluster, lineage, AMR, typing, or other interpreted output | Connects analysis to the public-health question. | CDC/NEJM; PHE |
| Report | Report ID, recipient, date released, caveats, uncertainty | Supports decision-use and audit of communicated findings. | PHE; clinical implementation review |
| Sharing event | Repository/platform, accession, access model, metadata shared, date | Supports public, controlled, operational, or internal sharing decisions. | WHO platform principles; APHL; ECDC |
| Archive/retention | Retention category, archive location, deletion/review date | Supports cost control, recovery, legal review, and governance. | WHO national strategy; PHA4GE |

## Redraw Instructions

- Use as the source for a simple horizontal lifecycle/lineage diagram.
- Keep labels short and avoid a dense process map.
- Distinguish identifiers/records from decisions.

## Gaps

- Needs organism- and repository-specific field models before becoming a prescriptive metadata standard.
