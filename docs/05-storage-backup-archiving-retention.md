# Storage, Backup, Archiving, and Retention

## Purpose

Describe the storage and recovery concepts currently supported by the source material, and identify what still needs stronger policy sources.

## Guidance Draft

Pathogen genomics programmes generate data that grow quickly and have different uses over time. Raw reads, intermediate files, workflow logs, reports, reference databases, QC records, and shared outputs do not all need the same storage, recovery, or retention rules. Treating them all as ordinary project files is a common way to create future cost, access, and recovery problems.

The disaster-recovery draft in the PHA4GE source pack makes a useful distinction between active data storage, long-term storage, disaster recovery, and backup strategy. It defines backup as a point-in-time copy used for recovery after failure, corruption, misconfiguration, accidental deletion, or compromise. It also warns against confusing backup with replication. Replication can protect service continuity, but it can also replicate corruption, deletion, or ransomware damage if it is not designed carefully.

The same source identifies the right questions for backup planning: what data cannot be replaced, how long backups are kept, how versions are managed, where backups are stored, how backups are created, whether backups are automated, what schedule is used, and how restoration is tested. These questions are more reliable than a single rule such as "keep three copies", because programmes differ in legal requirements, data volume, connectivity, and public-health use.

The PHE case study provides an implementation example. Its informatics infrastructure included high-performance compute storage, distributed archive storage, data-lifecycle management software, and storage sized for a high-throughput service. Those numbers are specific to PHE and should not be generalised, but the architecture is useful: active analysis storage, archive storage, data-lifecycle management, and compute need to be planned together.

The power and cooling note adds the physical-infrastructure side for on-premises systems. Servers need secure access-controlled rooms, environmental monitoring, cooling, dust control, UPS capacity, maintenance, and potentially generator support. These are not secondary details for laboratories running local infrastructure. Power loss, overheating, or poor facilities planning can become data availability and service-continuity problems.

The dynamic guide now has beta worksheets for classifying data by purpose, separating active analysis storage, raw-read archives, processed outputs, reports, workflow logs, repository records and backups, and setting local retention and recovery targets. It also includes a beta local infrastructure resilience checklist for services that depend on local servers, local storage rooms, UPS support, cooling, environmental monitoring, backup ownership and restore testing. These worksheets support the decision structure, not universal retention periods, restore objectives, facilities standards or UPS/generator specifications.

This chapter still needs stronger policy material for numeric retention periods, deletion rules, restore-time targets, restore-point targets, legal holds, and formal business-continuity practice. Those values require public-health, legal, institutional, repository, or WHO-aligned sources and local review.

## Source Basis

- `knowledge-base/extracted-notes/storage-backup-power-cooling.md`
- `knowledge-base/source-cards/phe-implementing-pathogen-genomics-case-study.md`
- `knowledge-base/source-cards/who-national-genomic-surveillance-strategy-2023.md`
- `knowledge-base/source-cards/who-genomic-data-sharing-platforms-2025.md`
- `knowledge-base/source-cards/aphl-ngs-implementation-2016.md`
- PHA4GE source-pack rough disaster-recovery and power/cooling notes.
- Grant et al. 2018, `Implementing pathogen genomics: a case study`, Public Health England.

## Figures

- Gap placeholder: `knowledge-base/figures/briefs/storage-backup-archive.md`

## Gaps

- Numeric retention schedules for raw reads, intermediate files, final results, reports, logs, and accession records are not source-backed yet.
- Restore-time, restore-point, deletion, legal-hold, and restoration-test requirements still need local or agency source material.
- Local facilities standards, UPS sizing, generator support, server-room environmental thresholds and incident-escalation procedures still need local IT/facilities or business-continuity review.
- The beta worksheets need review against local business-continuity and disaster-recovery practice.

## Status

`source-backed beta worksheets; numeric policy values still partial`
