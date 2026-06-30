# Storage, Backup, Archiving, and Retention

## Purpose

Describe the storage and recovery concepts currently supported by the source material, and identify what still needs stronger policy sources.

## Guidance Draft

Pathogen genomics programmes generate data that grow quickly and have different uses over time. Raw reads, intermediate files, workflow logs, reports, reference databases, QC records, and shared outputs do not all need the same storage, recovery, or retention rules. Treating them all as ordinary project files is a common way to create future cost, access, and recovery problems.

The disaster-recovery draft in the PHA4GE source pack makes a useful distinction between active data storage, long-term storage, disaster recovery, and backup strategy. It defines backup as a point-in-time copy used for recovery after failure, corruption, misconfiguration, accidental deletion, or compromise. It also warns against confusing backup with replication. Replication can protect service continuity, but it can also replicate corruption, deletion, or ransomware damage if it is not designed carefully.

The same source identifies the right questions for backup planning: what data cannot be replaced, how long backups are kept, how versions are managed, where backups are stored, how backups are created, whether backups are automated, what schedule is used, and how restoration is tested. These questions are more reliable than a single rule such as "keep three copies", because programmes differ in legal requirements, data volume, connectivity, and public-health use.

The PHE case study provides an implementation example. Its informatics infrastructure included high-performance compute storage, distributed archive storage, data-lifecycle management software, and storage sized for a high-throughput service. Those numbers are specific to PHE and should not be generalised, but the architecture is useful: active analysis storage, archive storage, data-lifecycle management, and compute need to be planned together.

The power and cooling note adds the physical-infrastructure side for on-premises systems. Servers need secure access-controlled rooms, environmental monitoring, cooling, dust control, UPS capacity, maintenance, and potentially generator support. These are not secondary details for laboratories running local infrastructure. Power loss, overheating, or poor facilities planning can become data availability and service-continuity problems.

This chapter still needs stronger source material for retention and archiving policy. The KB can currently support the distinctions between storage, backup, archive, and disaster recovery, but it cannot yet define how long to keep raw reads, intermediate files, reports, logs, or repository accessions. That will require public-health, legal, institutional, or WHO-aligned sources.

## Source Basis

- `knowledge-base/extracted-notes/storage-backup-power-cooling.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `Best Practices and Vision/extracted_text/docx/Disaster_Recovery_best_practices.txt`
- `Best Practices and Vision/extracted_text/docx/Power_and_Cooling.txt`
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/storage-backup-archive.md`

## Gaps

- Retention schedules for raw reads, intermediate files, final results, reports, and logs are not source-backed yet.
- A generic archive and cold-storage decision framework is still needed.
- Recovery objective and restoration-test frequency source material is still needed.

## Status

`source-backed rough draft`
