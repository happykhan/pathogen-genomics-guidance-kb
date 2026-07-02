# Session Handover: 2026-07-02

## Current State

The site is now a Next/Tailwind static public beta for a profile-tailored pathogen genomics data and bioinformatics guidance document. The core product direction is settled:

- The front page is a whitepaper-style guidance document, not a collection of cards.
- Gnomey is a tailoring wizard, not a chatbot.
- The whitepaper outline stays stable; the user profile controls which sections are shown in the document body.
- The document map must show the full outline, including sections not shown in the current whitepaper.
- Resource finder and WHO IRIS pages can use ranking scores; the whitepaper should use deterministic inclusion rules.
- The guide should feel like a practical implementation guide for public-health teams, with emphasis on data lifecycle, bioinformatics support, workflows, storage, backup, validation, reporting, sharing, workforce, and costing.

Latest pushed commit:

```text
326ea4cd Clarify hidden sections in document map
```

Deployment note: this commit is pushed to GitHub but was not deployed because Vercel returned:

```text
Resource is limited - try again in 24 hours (more than 100, code: "api-deployments-free-per-day")
```

The next session should redeploy once the Vercel quota resets:

```bash
vercel --prod --yes
```

## Major Decisions Made

### Profile Tailoring

Guidance inclusion is deterministic, not score-based. A section is shown based on:

- reader role;
- service stage;
- organism or programme focus;
- bioinformatics support model.

Resource finder and WHO IRIS still use scoring because ranking documents is appropriate there.

### Wizard Questions

The stage question is now treated as context, not the main tailoring signal.

Current service-stage labels:

- Planning
- Piloting
- Running routinely
- Scaling up
- Improving an existing service

The more important tailoring axis is bioinformatics support model:

- No bioinformatics service yet
- One person or ad hoc scripts
- Local pipeline or workstation/server
- Supported institutional service
- Shared national/regional service
- Managed platform or cloud service

This should drive practical guidance about workflow ownership, validation, reproducibility, storage, support, handover risk, and unsuitable recommendations.

### Technical Detail Blocks

Public rendering of `technicalDetail` fields was disabled. Those fields currently contain rough scaffolding such as matrix rows and prompts. They should not appear in the reader-facing whitepaper until rewritten as proper prose, figures, or tables.

### Gnomey

Gnomey is now a floating top-right helper on:

- the whitepaper page;
- Resource finder;
- WHO IRIS.

Applying a profile closes the wizard and dismisses the floating helper. Resource pages use consistent Gnomey wording.

### Public Pages Removed

The public `Needs More Work` page was removed. Missing-evidence notes should remain in internal/editorial context or attached to relevant guidance/source workflow, not exposed as a separate public page.

## Recent UX Fixes

- Removed the separate `Share with` card and moved role-specific sharing into a `Share with` dropdown in the whitepaper action row.
- Renamed document-map copy to make clear it shows the full map, not only selected sections.
- Restored visibility of not-shown sections in the document map.
- Added visible reasons under not-shown map rows.
- Fixed wizard choice label wrapping for long labels such as `Bioinformatician`.
- Standardised Resource finder and WHO IRIS Gnomey cards.
- Removed rough `Technical detail` blocks from public whitepaper rendering.

## Current Known Problems

### 1. Last Commit Not Deployed

`326ea4cd` is pushed but not live due to Vercel quota. Redeploy first in the next session.

### 2. Role-Specific Wording Is Sparse

Only one guidance section currently has `roleVariants`:

```text
storage-backup-archive-distinction
Plan storage growth, replication, and backup before the service starts
```

Roles covered:

```text
programme-lead, it-security, lab-lead, bioinformatician, data-manager, director, funder
```

The document-map legend says `Has role-specific wording`, but currently this applies to only one section. Either add more role-specific variants or make the legend less visually prominent.

### 3. Bioinformatics Support Model Is Mostly Label-Level

The wizard now asks the right question, and the whitepaper cover has a support-model-specific note. However, many guidance blocks are not yet conditionally tailored by bioinformatics support model because the content model still uses the old `infrastructure` enum and most blocks do not have `infrastructure` constraints.

Next step: make support model affect more text and section emphasis, especially:

- workflow ownership;
- validation and change control;
- storage and backup;
- support and handover;
- platform/provider dependency;
- identity/access and data residency;
- what not to recommend.

### 4. The Whitepaper Still Needs More Practical Content

The user is concerned that high-level policy content can dominate. The guide needs stronger practical implementation material, especially:

- storage growth, replication, backup, restore testing;
- bioinformatics service operating models;
- pipeline validation and workflow release/change control;
- sample-to-report data lifecycle;
- metadata/identifier lineage;
- data sharing and repository decisions;
- report outputs and decision use;
- workforce/support/costing.

### 5. Figures Are Still Thin

Only limited figure work exists. The guide needs clean, minimal figures integrated into the whitepaper, not decorative assets. Priority figures:

- sample-to-decision lifecycle;
- storage/backup/archive distinction;
- workflow provenance chain;
- bioinformatics support/tier operating model;
- data-sharing decision pathway.

## Source and Content Workflow

The user does not want fragment/card compilation to be the main authoring workflow. The intended workflow is:

1. Keep full PDFs/source documents available in source material.
2. Extract useful full-text passages from source PDFs.
3. Write section reading notes with provenance.
4. Synthesize coherent whitepaper prose from source-backed material.
5. Add inline citations near the specific claims they support.
6. Put unresolved evidence needs in editorial/source workflow notes, not as public generic guidance.

Important editorial rule: do not invent substantive guidance where source material is missing. Either cite source-backed prose or mark the evidence need internally.

## Suggested Next Session Order

1. Redeploy `main` once Vercel quota resets.
2. Review the live document map after `326ea4cd` deploys:
   - confirm not-shown sections are visible;
   - confirm reasons are readable;
   - decide whether the map is too busy.
3. Revisit the wizard:
   - keep role and organism/programme;
   - keep service stage but reduce its perceived importance;
   - make bioinformatics support model the main practical tailoring signal.
4. Expand role-specific variants beyond storage:
   - start with workflow, validation, reporting, data sharing, and workforce/costing.
5. Convert rough technical-detail content into proper reader-facing tables/figures where useful.
6. Strengthen practical sections using source extraction:
   - PHA4GE infrastructure;
   - PHE case study;
   - APHL NGS implementation;
   - ECDC WGS/molecular typing;
   - WHO national genomic surveillance strategy/support tools;
   - WHO data-sharing platform principles;
   - UKHSA/Australia/AusPathoGen implementation material;
   - economic/costing papers.
7. Run checks:

```bash
npm run content:check
npm run qa:scenarios
npm run build
```

## Useful Commands

```bash
git status --short
git log --oneline -12
npm run content:check
npm run qa:scenarios
npm run build
vercel --prod --yes
```

## Live and Repo

GitHub:

```text
https://github.com/happykhan/pathogen-genomics-guidance-kb
```

Production URL:

```text
https://pathogen-genomics-guidance-kb.vercel.app/
```

