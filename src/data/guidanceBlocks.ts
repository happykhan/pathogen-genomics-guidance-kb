import type { GuidanceBlock } from "../types/content";

export const guidanceBlocks: GuidanceBlock[] = [
  {
    id: "framing-public-health-use",
    title: "Start from the public-health decision",
    summary:
      "Pathogen genomics infrastructure should be planned around the decisions it supports, not around sequencing output alone.",
    body: [
      "A sequencing programme is useful when it helps public-health teams detect outbreaks, rule cases in or out of clusters, monitor resistance, track pathogen evolution, or report results faster. The analysis pipeline is part of a larger decision system.",
      "Before selecting infrastructure, define the services the programme must support: routine surveillance, outbreak response, AMR monitoring, national reporting, international sharing, or research support. Each use case implies different needs for speed, quality, data integration, governance, and sustainability.",
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["framing", "decision-use", "public-health"],
    detailLevel: "summary",
    sourceIds: ["cdc-nejm-2019", "phe-case-study"],
  },
  {
    id: "infrastructure-operating-model",
    title: "Treat infrastructure as an operating model",
    summary:
      "Compute infrastructure is not only CPUs and storage. It includes workflows, data movement, access, monitoring, support, and responsibility.",
    body: [
      "The PHA4GE infrastructure framing asks five questions: what the infrastructure solves, how analysis is run, where analysis is run, how data flow, and who has access. These questions separate responsibility from technology.",
      "A programme can use local servers, institutional HPC, cloud platforms, laptops, or a managed service. The central implementation question is who operates each layer, who validates analysis, who supports users, and who carries the risk when service delivery fails.",
    ],
    technicalDetail: [
      "Use the SaaS/PaaS/IaaS framing as a responsibility model, not as a simple cloud label. A cloud system can leave substantial responsibility with the laboratory, while an on-premises service can hide much of the complexity from end users.",
    ],
    audiences: ["director", "lab-lead", "bioinformatician", "it-security", "data-manager", "funder"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["infrastructure", "operating-model", "procurement"],
    detailLevel: "operational",
    sourceIds: ["pha4ge-infrastructure", "phe-case-study"],
  },
  {
    id: "avoid-one-size-fits-all-cloud",
    title: "Avoid one-size-fits-all infrastructure choices",
    summary:
      "Cloud, HPC, managed platforms, and local workflows all solve different problems and create different dependencies.",
    body: [
      "A high-abstraction cloud or managed platform can reduce local administration and improve scalability, but it may require reliable internet, data transfer capacity, external accounts, procurement routes, and clarity on data residency.",
      "A local or laptop workflow can be appropriate for field work, unreliable connectivity, or early capability building, but it creates risks around reproducibility, backup, access control, maintenance, and single-person dependency.",
      "The right question is not 'cloud or not cloud'. The right question is which responsibilities the programme can safely operate, which responsibilities should be delegated, and which constraints make each option risky.",
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "it-security", "funder"],
    implementationStages: ["exploring", "pilot", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["infrastructure", "cloud", "local-compute", "trade-offs"],
    detailLevel: "summary",
    sourceIds: ["pha4ge-infrastructure"],
  },
  {
    id: "data-lifecycle-sample-to-report",
    title: "Design the sample-to-report data lifecycle",
    summary:
      "A genomics service must connect samples, metadata, sequence data, analysis, reports, sharing, and archives.",
    body: [
      "A sequencing programme is not only producing FASTQ files. It receives samples or isolates, links them to metadata, generates sequence data, checks quality, runs analysis, interprets outputs, produces reports, shares selected data, stores records, and decides what should be archived or deleted.",
      "The PHE case study gives a concrete lifecycle: extracted DNA entered a central sequencing service, robotic processes checked quality and prepared libraries, sample information was captured through LIMS, sequence data were stored and analysed on IT and bioinformatics infrastructure, and outputs were combined with LIMS data to produce reports.",
    ],
    technicalDetail: [
      "At minimum, track the sample or isolate identifier, sequencing run, raw data, QC outputs, workflow run, final result, report, and sharing or repository event. A formal field model still needs source extraction.",
    ],
    audiences: ["lab-lead", "bioinformatician", "data-manager", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["data-lifecycle", "lims", "reporting", "metadata"],
    detailLevel: "operational",
    sourceIds: ["pha4ge-infrastructure", "phe-case-study"],
    gaps: ["A general source-backed lifecycle model is still needed beyond the PHE centralised-WGS example."],
  },
  {
    id: "workflow-reproducibility",
    title: "Use managed, traceable workflows for routine analysis",
    summary:
      "Routine public-health analysis should not depend on undocumented scripts run by one person on one machine.",
    body: [
      "Public-health outputs may be used to detect outbreaks, rule cases in or out of clusters, support control measures, monitor antimicrobial resistance, and inform policy. The analysis therefore needs to be repeatable enough for service delivery and transparent enough for review.",
      "The PHA4GE source links public-health requirements for transparency and portability to containerised bioinformatics workflows expressed in workflow languages or workflow systems.",
    ],
    technicalDetail: [
      "For each routine workflow, record workflow version, software or container versions, reference databases, parameters, input data, QC outputs, final outputs, and report linkage.",
      "Candidate technologies named in the sources include WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift. These are examples, not endorsements.",
    ],
    audiences: ["bioinformatician", "lab-lead", "data-manager", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["workflow", "provenance", "reproducibility", "validation"],
    detailLevel: "technical",
    sourceIds: ["pha4ge-infrastructure", "cdc-nejm-2019", "phe-case-study"],
  },
  {
    id: "quality-validation-before-switch",
    title: "Validate before replacing established methods",
    summary:
      "WGS should not replace an established public-health method until expected performance and quality controls are clear.",
    body: [
      "The PHE case study provides a useful implementation pattern. Before switching Salmonella typing from conventional methods to WGS, PHE ran conventional and WGS workflows in parallel, compared datasets, performed gap analysis, adjusted protocols, and established quality parameters.",
      "Validation needs to cover the whole service chain: input material, extraction, sequencing, laboratory handling, data quality, analysis outputs, reporting, and troubleshooting.",
    ],
    technicalDetail: [
      "In the PHE case study, phase I used 1,538 representative Salmonella samples and phase II compared 6,887 isolates against WGS-determined serotype. The case study reports 97% concordance between WGS and conventional methods.",
    ],
    audiences: ["lab-lead", "bioinformatician", "data-manager", "director"],
    implementationStages: ["pilot", "routine-service", "upgrading"],
    organisms: ["general", "enteric-bacteria", "amr", "nosocomial", "tb"],
    topics: ["quality", "validation", "accreditation"],
    detailLevel: "operational",
    sourceIds: ["phe-case-study", "pha4ge-infrastructure"],
    gaps: ["A reusable validation and change-control runbook still needs APHL/CDC quality source extraction."],
  },
  {
    id: "metadata-and-epidemiology-integration",
    title: "Integrate genomic, laboratory, and epidemiological data",
    summary:
      "Genome data have more public-health value when linked to sample context, epidemiology, and reporting systems.",
    body: [
      "Armstrong et al. state that laboratory and epidemiological data are often managed separately, but pathogen genomic data need to be integrated with epidemiological data to realise the value of both.",
      "The PHE case study shows this in practice: LIMS sample data and sequence-analysis outputs were combined to produce final sample reports.",
    ],
    technicalDetail: [
      "The KB still needs a formal identifier model linking sample, sequencing run, raw data, workflow run, result, report, and repository accession.",
    ],
    audiences: ["data-manager", "bioinformatician", "lab-lead", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["metadata", "interoperability", "lims", "epidemiology"],
    detailLevel: "operational",
    sourceIds: ["cdc-nejm-2019", "phe-case-study", "pha4ge-infrastructure"],
  },
  {
    id: "sharing-is-not-unconditional",
    title: "Plan data sharing as a governed decision",
    summary:
      "Data sharing has public-health value, but openness needs to be balanced with confidentiality, risk, and purpose.",
    body: [
      "Armstrong et al. describe public-health agencies sharing pathogen sequence data through NCBI-hosted databases, ReSeqTB, and GISAID. They also state that openness cannot be complete and unconditional because agencies must consider confidentiality and risk.",
      "Programmes need to decide what data should be shared, with whom, at what stage, through which repository or platform, under what access model, and with what metadata.",
    ],
    audiences: ["policy", "director", "data-manager", "it-security", "lab-lead"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["data-sharing", "governance", "repositories"],
    detailLevel: "governance",
    sourceIds: ["cdc-nejm-2019", "phe-case-study", "pha4ge-infrastructure"],
    gaps: ["Repository selection criteria and controlled-sharing pathways need WHO/UKHSA source extraction."],
  },
  {
    id: "iam-is-continuous",
    title: "Treat identity and access as ongoing operations",
    summary:
      "Access control is not a one-time setup. Users, roles, collaborations, and risks change over time.",
    body: [
      "The PHA4GE source frames identity and access management as a continuous responsibility: provisioning, authentication, authorisation, role assignment, access review, offboarding, monitoring, and auditability.",
      "Genomics programmes often need coordination between the laboratory, central IT, external providers, cybersecurity, and information governance.",
    ],
    audiences: ["it-security", "director", "policy", "data-manager", "lab-lead"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["iam", "governance", "security"],
    detailLevel: "governance",
    sourceIds: ["pha4ge-infrastructure", "cdc-nejm-2019", "phe-case-study"],
  },
  {
    id: "storage-backup-archive-distinction",
    title: "Separate active storage, backup, archive, and retention",
    summary:
      "Raw reads, intermediate files, reports, logs, and shared outputs do not all need the same storage or recovery rules.",
    body: [
      "The disaster-recovery source distinguishes active data storage, long-term storage, disaster recovery, and backup strategy. Backup is a point-in-time copy for recovery, not the same thing as replication.",
      "The PHE case study shows an implementation with high-performance compute storage, distributed archive storage, and data-lifecycle management software. These details are context-specific, but the categories are useful.",
    ],
    technicalDetail: [
      "Backup planning should ask what data cannot be replaced, how long backups are kept, how versions are managed, where backups are stored, how backups are created, whether backups are automated, what schedule is used, and how restoration is tested.",
    ],
    audiences: ["it-security", "bioinformatician", "data-manager", "lab-lead"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["storage", "backup", "archive", "retention"],
    detailLevel: "technical",
    sourceIds: ["pha4ge-infrastructure", "phe-case-study"],
  },
  {
    id: "workforce-is-part-of-system",
    title: "Plan workforce and training as core infrastructure",
    summary:
      "A genomics service needs trained laboratory, bioinformatics, data, software, IT, epidemiology, and user-facing capacity.",
    body: [
      "Armstrong et al. describe workforce development as central to public-health genomics. Microbiologists need microbial genomics knowledge, epidemiologists need tools to translate genomic data into action, and both groups need basic bioinformatics vocabulary.",
      "The PHE case study shows implementation needs in practice: laboratory training, specialist bioinformatics staff, computing and software-development expertise, cross-training for epidemiologists and clinical scientists, and user engagement.",
    ],
    audiences: ["director", "policy", "funder", "lab-lead", "bioinformatician"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["workforce", "training", "sustainability"],
    detailLevel: "summary",
    sourceIds: ["cdc-nejm-2019", "phe-case-study", "pha4ge-infrastructure"],
  },
  {
    id: "costing-recurrent",
    title: "Cost the recurrent service, not only the initial purchase",
    summary:
      "Sustainability depends on storage growth, compute renewal, workflow maintenance, validation, support, and staff retention.",
    body: [
      "The PHE case study describes capital planning for sequencing equipment, robotics, IT, data management, and project management. It also considered laboratory-space remodelling, health and safety, workforce, training, sample requirements, turnaround times, and result format.",
      "Programmes should collect evidence on value as well as cost. PHE reported replacement of multiple conventional processes, reduced sample handling, reduced animal use, reduced staff costs in the reference laboratory, and a shift of scientific effort toward data analysis and interpretation.",
    ],
    audiences: ["director", "policy", "funder", "lab-lead"],
    implementationStages: ["exploring", "pilot", "upgrading", "national-scale"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["costing", "sustainability", "procurement"],
    detailLevel: "summary",
    sourceIds: ["phe-case-study", "pha4ge-infrastructure"],
    gaps: ["A generic total-cost model and staffing ratio source are still needed."],
  },
];
