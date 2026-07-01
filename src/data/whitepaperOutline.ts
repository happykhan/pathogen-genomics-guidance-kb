import type { WhitepaperOutlineSection } from "../types/editorial";

export const whitepaperOutlineVersion = "2026-07-01-beta-0.2";

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
    id: "data-lifecycle-sample-to-report",
    order: 30,
    title: "Build a sample-to-decision data service",
    purpose:
      "Describe the operational data asset created by a genomic surveillance service: sample records, metadata, sequence data, QC, workflow runs, reports, sharing events, stored records, and feedback loops.",
    expectedFragments: ["core-data-service-lifecycle", "identifier-lineage", "failure-and-feedback-routes", "organism-variants"],
    publicByDefault: true,
  },
  {
    id: "metadata-identifier-lineage",
    order: 40,
    title: "Protect metadata and identifier lineage",
    purpose:
      "Explain why broken identifiers and weak metadata make genomic outputs difficult to interpret or act on.",
    expectedFragments: ["minimum-lineage", "lims-absent-variant", "repository-fields"],
    publicByDefault: true,
  },
  {
    id: "quality-validation-before-switch",
    order: 50,
    title: "Validate workflows before switching service decisions",
    purpose:
      "Separate exploratory analysis from validated public-health service use, including change control and revalidation.",
    expectedFragments: ["validation-core", "organism-qc-variants", "change-control"],
    publicByDefault: true,
  },
  {
    id: "infrastructure-operating-model",
    order: 60,
    title: "Define the service operating model",
    purpose:
      "Show that infrastructure choices define responsibilities: who operates compute, workflows, storage, access, validation, monitoring, support, and recovery when the service fails.",
    expectedFragments: ["responsibility-model", "cloud-local-hybrid", "support-model"],
    publicByDefault: true,
  },
  {
    id: "workflow-reproducibility",
    order: 70,
    title: "Make workflows reproducible and portable",
    purpose:
      "Describe practical reproducibility controls: versioned workflows, containers, reference data, parameters, audit trails, and portable execution.",
    expectedFragments: ["workflow-core", "technical-detail", "managed-platform-variant"],
    publicByDefault: true,
  },
  {
    id: "repository-data-sharing",
    order: 80,
    title: "Choose data-sharing and repository routes deliberately",
    purpose:
      "Help teams decide what should be shared publicly, operationally, internally, or under controlled access.",
    expectedFragments: ["sharing-core", "repository-decision-pathway", "governance-variant"],
    publicByDefault: true,
  },
  {
    id: "reporting-decision-use",
    order: 90,
    title: "Turn analysis into decisions",
    purpose:
      "Describe reporting products, interpretation boundaries, and the handoff from bioinformatics to public-health action.",
    expectedFragments: ["reporting-core", "audience-specific-products", "limits"],
    publicByDefault: true,
  },
  {
    id: "workforce-sustainability-costing",
    order: 100,
    title: "Plan for people, support, and recurrent cost",
    purpose:
      "Make staffing, training, succession, support, procurement, and recurrent costs visible as service requirements.",
    expectedFragments: ["workforce-core", "costing-scenarios", "limited-staff-variant"],
    publicByDefault: true,
  },
  {
    id: "maturity-next-steps",
    order: 110,
    title: "Assess maturity and choose next steps",
    purpose:
      "Translate the profile and constraints into practical next actions without implying a false universal ladder.",
    expectedFragments: ["maturity-core", "profile-next-actions", "known-gaps"],
    publicByDefault: true,
  },
];
