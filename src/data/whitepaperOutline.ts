import type { WhitepaperOutlineSection, WhitepaperTarget } from "../types/editorial";

export const whitepaperOutlineVersion = "2026-07-01-beta-0.2";

export const whitepaperTarget: WhitepaperTarget = {
  title: "Practical guidance for building and improving pathogen genomics data and bioinformatics services",
  primaryAudience:
    "Mixed public-health teams that include laboratory leads, bioinformaticians, data managers, IT or security staff, programme managers, policy staff, funders, and directors.",
  practicalUse:
    "Help teams move from project-based or retrospective genomics toward a routine, prospective genomic surveillance service with reliable data flow, quality control, workflow provenance, reporting, sharing, storage, support, and continuous improvement.",
  coreQuestion:
    "Given our public-health use case, organisms, staffing, infrastructure, connectivity, governance constraints, and maturity, what service model and data/infrastructure practices should we put in place next?",
  successCriteria: [
    "Readers can explain why genomics is useful for their public-health decision, and where it cannot substitute for epidemiology, sampling, laboratory quality, metadata, governance, or judgement.",
    "Readers can define the service model they are building: research support, outbreak response, routine surveillance, AMR monitoring, repository submission, clinical support, or a hybrid model.",
    "Readers can map a sample-to-decision data service, including sample receipt, metadata, QC, sequencing, workflow execution, interpretation, reporting, sharing, storage, retention, failures, and feedback loops.",
    "Readers can identify which responsibilities must be owned locally, delegated to partners, or handled through a managed service.",
    "Readers can use the tailored profile to hide irrelevant detail while preserving source-backed recommendations, citations, and visible evidence gaps.",
  ],
  outOfScope: [
    "A wet-lab sequencing protocol manual.",
    "A pathogen-specific QC threshold catalogue unless source-backed conditional material has been extracted.",
    "A universal cloud-first or platform-first recommendation.",
    "A formal accreditation standard or legal compliance manual.",
    "A generic literature review without practical implementation decisions.",
  ],
};

export const whitepaperOutline: WhitepaperOutlineSection[] = [
  {
    id: "why-pathogen-genomics",
    order: 10,
    title: "Why pathogen genomics?",
    purpose:
      "Make the practical public-health value case, while being explicit about what genomics can and cannot do.",
    expectedFragments: ["core-value-case", "economic-case", "limits-and-dependencies"],
    publicByDefault: true,
  },
  {
    id: "framing-public-health-use",
    order: 20,
    title: "Move from research projects to routine service",
    purpose:
      "Explain the difference between retrospective project analysis and a prospective public-health service that must run continuously, handle failure, and support decisions on time.",
    expectedFragments: ["research-to-service-framing", "decision-first-framing", "decision-latency"],
    publicByDefault: true,
  },
  {
    id: "use-case-service-model",
    order: 30,
    title: "Define the use case and service model",
    purpose:
      "Help teams specify whether they are building routine surveillance, outbreak response, AMR monitoring, repository submission, research support, clinical support, or a hybrid service, because each model changes turnaround time, QC, reporting, sharing, and support requirements.",
    expectedFragments: ["use-case-selection", "service-products", "decision-latency", "validated-versus-research-use"],
    publicByDefault: true,
  },
  {
    id: "sampling-programme-design",
    order: 40,
    title: "Plan sampling strategy and programme design",
    purpose:
      "Explain how sample selection, representativeness, priority pathogens, outbreak-triggered sampling, routine sampling, and missing samples affect interpretation and public-health value.",
    expectedFragments: ["sampling-core", "representativeness", "sampling-bias", "organism-specific-sampling"],
    publicByDefault: true,
  },
  {
    id: "data-lifecycle-sample-to-report",
    order: 50,
    title: "Build a sample-to-decision data service",
    purpose:
      "Describe the operational data asset created by a genomic surveillance service: sample records, metadata, sequence data, QC, workflow runs, reports, sharing events, stored records, and feedback loops.",
    expectedFragments: ["core-data-service-lifecycle", "identifier-lineage", "failure-and-feedback-routes", "organism-variants"],
    publicByDefault: true,
  },
  {
    id: "metadata-identifier-lineage",
    order: 60,
    title: "Protect metadata and identifier lineage",
    purpose:
      "Explain why broken identifiers and weak metadata make genomic outputs difficult to interpret or act on.",
    expectedFragments: ["minimum-lineage", "lims-absent-variant", "repository-fields"],
    publicByDefault: true,
  },
  {
    id: "quality-validation-before-switch",
    order: 70,
    title: "Build quality management, validation, and change control",
    purpose:
      "Separate exploratory analysis from validated public-health service use, and describe the quality system needed around QC, SOPs, version control, change control, revalidation, audit trails, training records, and incident review.",
    expectedFragments: ["validation-core", "organism-qc-variants", "change-control", "quality-system-core", "accreditation-pathway"],
    publicByDefault: true,
  },
  {
    id: "failure-handling-continuous-improvement",
    order: 80,
    title: "Handle failures and improve the service",
    purpose:
      "Make operational failure handling explicit: failed samples, failed runs, low-quality data, missing metadata, ambiguous outputs, delayed reports, corrected reports, pipeline failures, repository errors, and periodic service review.",
    expectedFragments: ["failure-routes", "service-metrics", "incident-review", "continuous-improvement"],
    publicByDefault: true,
  },
  {
    id: "infrastructure-operating-model",
    order: 120,
    title: "Define the service operating model",
    purpose:
      "Show that infrastructure choices define responsibilities: who operates compute, workflows, storage, access, validation, monitoring, support, and recovery when the service fails.",
    expectedFragments: ["responsibility-model", "cloud-local-hybrid", "support-model"],
    publicByDefault: true,
  },
  {
    id: "workflow-reproducibility",
    order: 90,
    title: "Run reproducible workflows with provenance",
    purpose:
      "Describe practical reproducibility controls: versioned workflows, containers, reference data, parameters, audit trails, and portable execution.",
    expectedFragments: ["workflow-core", "technical-detail", "managed-platform-variant"],
    publicByDefault: true,
  },
  {
    id: "storage-backup-archive-retention",
    order: 100,
    title: "Plan storage, backup, archive, and retention",
    purpose:
      "Distinguish active analysis storage, intermediate workflow storage, long-term archive, report storage, backups, disaster recovery, retention, deletion, and cost growth.",
    expectedFragments: ["storage-categories", "backup-versus-replication", "retention-gap", "low-connectivity-variant"],
    publicByDefault: true,
  },
  {
    id: "repository-data-sharing",
    order: 130,
    title: "Choose data-sharing and repository routes deliberately",
    purpose:
      "Help teams decide what should be shared publicly, operationally, internally, or under controlled access.",
    expectedFragments: ["sharing-core", "repository-decision-pathway", "governance-variant"],
    publicByDefault: true,
  },
  {
    id: "reporting-decision-use",
    order: 140,
    title: "Interpret, report, and communicate uncertainty",
    purpose:
      "Describe reporting products, interpretation boundaries, uncertainty, and the handoff from bioinformatics to public-health action.",
    expectedFragments: ["reporting-core", "audience-specific-products", "interpretation-boundaries", "uncertainty-language"],
    publicByDefault: true,
  },
  {
    id: "workforce-sustainability-costing",
    order: 150,
    title: "Plan workforce, procurement, support, and recurrent cost",
    purpose:
      "Make staffing, training, succession, procurement, vendor or partner due diligence, support, renewal, and recurrent costs visible as service requirements.",
    expectedFragments: ["workforce-core", "procurement-due-diligence", "costing-scenarios", "limited-staff-variant"],
    publicByDefault: true,
  },
  {
    id: "implementation-patterns-case-studies",
    order: 160,
    title: "Compare implementation patterns and case studies",
    purpose:
      "Give readers source-backed implementation patterns they can adapt: central reference laboratory, local laboratory with central bioinformatics, managed platform, national collaborative network, low-connectivity local-first model, and academic-to-service transition.",
    expectedFragments: ["central-reference-model", "local-plus-central-bioinformatics", "managed-platform-model", "collaborative-network-model", "low-connectivity-model"],
    publicByDefault: true,
  },
  {
    id: "maturity-next-steps",
    order: 170,
    title: "Assess maturity and choose next steps",
    purpose:
      "Translate the profile and constraints into practical next actions without implying a false universal ladder.",
    expectedFragments: ["maturity-core", "profile-next-actions", "known-gaps"],
    publicByDefault: true,
  },
  {
    id: "needs-more-work",
    order: 180,
    title: "Needs more work",
    purpose:
      "Collect the evidence gaps, unresolved implementation questions, and source needs that should not be hidden inside confident guidance prose.",
    expectedFragments: ["evidence-gaps", "source-needs", "figure-gaps", "organism-specific-gaps"],
    publicByDefault: true,
  },
];
