# Extracted Note: Storage, Backup, Disaster Recovery, Power, and Cooling

## Source Basis

- `Best Practices and Vision/extracted_text/docx/Disaster_Recovery_best_practices.txt`
- `Best Practices and Vision/extracted_text/docx/Power_and_Cooling.txt`
- VeriXiv manuscript discussion noting that power management, disaster management, backup, cyber incident management, threat assessments, data management, and retention are outside its scope.

## Status

`source-backed rough note`

## Extracted/Adapted Text

The disaster recovery draft distinguishes data storage for active analysis from long-term data storage and asks whether an organisation could recover if its main data store was destroyed. It also separates a data-management plan, a disaster-recovery plan, and a backup strategy.

The backup section defines backup as a point-in-time copy used for recovery after failure, corruption, misconfiguration, accidental deletion, or compromise. It states that backup should not be confused with replication. It identifies source questions for a backup strategy: what must be backed up, how long backups are retained, how versions are managed, where backups are stored, how backups are created, whether backups are automated, what schedule is used, and how restoration is tested.

The power and cooling note covers physical form factors, secure access-controlled server rooms, environmental monitoring, dust and temperature control, hot-aisle/cold-aisle layouts, UPS sizing and maintenance, and generator support for outages longer than UPS runtime.

## Implementation Notes

- Use this note for `docs/05-storage-backup-archiving-retention.md`.
- The disaster recovery source is rough and contains drafting notes, so this content should remain `source-backed rough note` until reviewed.
- The source supports questions and distinctions more strongly than formal policy recommendations.

## Figures

- `knowledge-base/figures/briefs/storage-backup-archive.md` is a gap placeholder until a source-backed distinction figure is reviewed.

## Gaps

- Retention schedules by data type are not source-backed yet.
- Archive/cold-storage design needs additional source material.
- Recovery time objective, recovery point objective, and test frequency need reviewed source material.
