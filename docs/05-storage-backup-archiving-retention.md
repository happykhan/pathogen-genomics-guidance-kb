# Storage, Backup, Archiving, and Retention

## Purpose

Hold source-backed material on storage, backup, disaster recovery, facilities, and retention.

## Source Basis

- `knowledge-base/extracted-notes/storage-backup-power-cooling.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `Best Practices and Vision/extracted_text/docx/Disaster_Recovery_best_practices.txt`
- `Best Practices and Vision/extracted_text/docx/Power_and_Cooling.txt`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Extracted/Adapted Text

The disaster-recovery source distinguishes active data storage from long-term storage and separates a data-management plan, a disaster-recovery plan, and a backup strategy. It defines backup as a point-in-time copy for recovery and distinguishes backup from replication.

The same source identifies backup-strategy questions around what to back up, retention duration, version management, backup destination, backup method, automation, schedule, backup type, and restoration testing.

The power/cooling source supports facilities notes on server form factors, secure access-controlled rooms, environmental monitoring, dust and temperature control, cooling layout, UPS sizing and maintenance, and generators for longer outages.

The PHE case study provides an implementation example with high-performance compute storage, distributed archive storage, and data-lifecycle management software for managing the flow and lifecycle of data. These details are context-specific and should not be generalised into universal capacity requirements.

## Implementation Notes

The disaster recovery source is rough and should be reviewed before being converted into authoritative guidance.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/storage-backup-archive.md`

## Gaps

- Source-backed retention schedules for raw reads, intermediate files, final results, reports, and logs needed.
- Source-backed generic archive/cold-storage decision framework needed.
- Recovery objective and restoration-test frequency source material needed.

## Status

`source-backed rough skeleton`
