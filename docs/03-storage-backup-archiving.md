# Storage, Backup, Archiving, and Retention

## Core Principle

Storage is not backup, and backup is not archiving. Pathogen genomics programmes need separate plans for active analysis storage, recovery from loss, long-term preservation, and eventual retention/deletion decisions.

## Storage Classes

- active analysis storage
- shared project storage
- reference data and container/cache storage
- reporting/output storage
- backup copies
- archive or cold storage

## Minimum Expectations

- Identify which data must be recoverable after accidental deletion, corruption, ransomware, or facility loss.
- Keep at least one backup copy logically separated from primary storage.
- Test restoration, not only backup creation.
- Define retention periods for raw reads, intermediate files, final results, and reports.
- Budget storage growth explicitly.
- Avoid uncontrolled long-term accumulation of intermediate analysis files.

## Source Basis

Initial content based on the extracted `Disaster_Recovery_best_practices.docx`, `Power and Cooling.docx`, and PHA4GE infrastructure manuscript material in the local source pack.

