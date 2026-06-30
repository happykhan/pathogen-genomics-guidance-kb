import type { GuidanceBlock } from "../types/content";

export const guidanceBlocks: GuidanceBlock[] = [
  {
    id: "why-pathogen-genomics",
    title: "Why pathogen genomics?",
    summary:
      "Pathogen genomics can improve public-health action when it is connected to decisions, surveillance systems, and response capacity.",
    summarySourceIds: ["who-genomic-surveillance-2022", "cdc-nejm-2019", "phe-case-study"],
    body: [
      "The value of pathogen genomics is not that it produces more detailed laboratory data. Its value is that the added resolution can change public-health action: detecting linked cases, identifying transmission patterns, monitoring pathogen evolution, supporting antimicrobial-resistance surveillance, improving vaccine or variant monitoring, and helping teams decide where to investigate or intervene.",
      "The strongest argument for investment is therefore a service argument, not a technology argument. Genomics is useful when the result reaches the people who make decisions, arrives in time to affect those decisions, and is interpreted with enough epidemiological and laboratory context to avoid overclaiming.",
    ],
    bodySourceIds: {
      0: ["who-genomic-surveillance-2022", "cdc-nejm-2019", "foodborne-genomics-allard-2018"],
      1: ["cdc-nejm-2019", "phe-case-study"],
    },
    subsections: [
      {
        title: "What genomics can add",
        body: [
          "Compared with many conventional typing approaches, whole-genome sequencing can provide higher-resolution information about relatedness, resistance determinants, virulence markers, strain replacement, and pathogen evolution. In public-health practice this can help rule cases in or out of clusters, identify geographically dispersed outbreaks, monitor lineages, and support more targeted investigations.",
          "WHO's genomic surveillance strategy frames genomic capability as part of preparedness and response for pathogens with epidemic and pandemic potential. Armstrong et al. describe uses across outbreak investigation, tuberculosis control, influenza surveillance, antimicrobial-resistance surveillance, parasitic disease investigation, and molecular surveillance.",
        ],
        bodySourceIds: {
          0: ["cdc-nejm-2019", "foodborne-genomics-allard-2018"],
          1: ["who-genomic-surveillance-2022", "cdc-nejm-2019"],
        },
      },
      {
        title: "Where the value comes from",
        body: [
          "The public-health benefit comes from combining sequence data with sample context, epidemiology, reporting pathways, and response capacity. A genome sequence on its own rarely answers the operational question. The useful product is an interpreted result that tells a team whether cases are likely to be linked, whether a pathogen is changing, whether resistance may affect control, or whether more investigation is needed.",
          "The PHE case study is useful because it describes genomics as a service transition rather than a research project. WGS implementation changed laboratory workflows, reporting timelines, staffing, accreditation, user engagement, and outbreak investigation practice. That is the level at which the value case should be made.",
        ],
        bodySourceIds: {
          0: ["cdc-nejm-2019", "phe-case-study"],
          1: ["phe-case-study"],
        },
      },
      {
        title: "What genomics cannot do by itself",
        body: [
          "Genomics does not remove the need for epidemiology, sampling strategy, laboratory quality, metadata quality, governance, or public-health judgement. A highly resolved tree can still mislead if sampling is biased, identifiers are broken, metadata are missing, or the result is interpreted without exposure information and local context.",
          "It also does not automatically make a programme cheaper or easier to run. Genomics can replace or consolidate some older processes in specific settings, but it creates recurring needs for storage, compute, workflow maintenance, validation, specialist staff, and user support.",
        ],
        bodySourceIds: {
          0: ["cdc-nejm-2019", "who-genomic-surveillance-2022"],
          1: ["phe-case-study", "wgs-costing-tool-2024"],
        },
      },
      {
        title: "The economic case needs care",
        body: [
          "The financial argument should be made with setting-specific evidence. Some programmes may save staff time, reduce duplicated testing, shorten reporting, or focus outbreak investigations more efficiently. Others may face higher near-term costs because they need new infrastructure, training, validation, quality systems, and data-management capacity.",
          "The current knowledge base has a strong service case from PHE and a broad public-health case from WHO and Armstrong et al. It still needs a fuller review of economic evaluations before making general claims about cost-effectiveness or return on investment.",
        ],
        bodySourceIds: {
          0: ["genometrakr-economic-2021", "national-investment-case-2025", "wgs-costing-tool-2024", "wgs-economic-review"],
        },
        bodyCitationAnchors: {
          1: [
            {
              text: "The current knowledge base has a strong service case from PHE and a broad public-health case from WHO and Armstrong et al.",
              sourceIds: ["phe-case-study", "who-genomic-surveillance-2022", "cdc-nejm-2019"],
            },
          ],
        },
      },
    ],
    audiences: ["director", "policy", "funder", "lab-lead", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["framing", "decision-use", "public-health", "costing", "value"],
    detailLevel: "summary",
    sourceIds: [
      "who-genomic-surveillance-2022",
      "cdc-nejm-2019",
      "phe-case-study",
      "foodborne-genomics-allard-2018",
      "genometrakr-economic-2021",
      "national-investment-case-2025",
      "wgs-costing-tool-2024",
      "wgs-economic-review",
    ],
    gaps: ["A formal review of economic value, cost-effectiveness, and setting-specific benefit evidence is still needed."],
  },
  {
    id: "framing-public-health-use",
    title: "Start from the public-health decision",
    summary:
      "Pathogen genomics infrastructure should be planned around the decisions it supports, not around sequencing output alone.",
    body: [
      "A sequencing programme is useful when it helps public-health teams detect outbreaks, rule cases in or out of clusters, monitor resistance, track pathogen evolution, or report results faster. The analysis pipeline is part of a larger decision system.",
      "Before selecting infrastructure, define the services the programme must support: routine surveillance, outbreak response, AMR monitoring, national reporting, international sharing, or research support. Each use case implies different needs for speed, quality, data integration, governance, and sustainability.",
      "The first design question is therefore not which sequencing platform, cloud provider, or workflow engine to buy. The first question is what decision will change because genomic information is available, who will act on that decision, and how quickly they need a result they can trust.",
      "For an early programme, a narrow and well-defined use case is often more useful than a broad infrastructure ambition. A service designed for weekly surveillance has different failure modes from one designed for urgent outbreak investigation, and both differ from a research-facing platform that prioritises flexibility.",
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
      "The PHE case study shows why this matters in practice. Implementing WGS required capital planning, laboratory-space changes, sequencing and robotics capacity, IT infrastructure, LIMS integration, bioinformatics pipelines, validation, accreditation, training, and service-user engagement. None of those requirements is captured by a server specification alone.",
      "A useful operating model names the service owner, laboratory owner, bioinformatics owner, IT owner, data-governance owner, and user-support route. It should also make clear which responsibilities are delegated to institutional IT, external providers, national platforms, or managed services.",
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
      "PHA4GE's implementation examples show that different models can be defensible in different settings. A laptop workflow may be useful where external connectivity is limited. An on-premises HPC or institutional server model may fit organisations with strong local IT. A managed platform may suit teams that need curated workflows and shared workspaces more than low-level infrastructure control.",
      "The trade-off should be stated explicitly. A model that is easy for users may increase administrator responsibility elsewhere. A model that gives bioinformaticians maximum flexibility may be harder to validate for routine reporting. A model that scales technically may still fail if procurement, identity management, or support cover is not in place.",
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
      "That lifecycle is partly technical and partly organisational. The programme needs a route for sample receipt, metadata capture, sequencing, raw-data storage, workflow execution, interpretation, reporting, data sharing, and long-term record keeping. It also needs named routes for failed samples, failed sequencing runs, low-quality data, unexpected organisms, and ambiguous outputs.",
      "The current source base supports lifecycle planning as a principle and gives one centralised service example. It does not yet provide a general WHO-ready lifecycle model that applies across different pathogens, countries, and service models.",
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
      "For routine service, a workflow should be more than a folder of scripts. The programme should know which version is approved, which reference data are used, which parameters are routine defaults, which outputs are reviewed, and which result is released to users.",
      "Workflow-sharing ecosystems can reduce local development effort, but they do not remove local responsibility. A programme still needs to decide who can introduce a workflow, who validates changes, who approves use for reporting, and how older results can be interpreted if software or reference data change.",
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
      "This is not only a laboratory question. Bioinformatics pipelines, reference databases, result interpretation, report generation, and user-facing outputs can all change service behaviour. Where results are used for public-health action, the programme needs evidence that the new process performs as expected before older methods are retired.",
      "The source base supports parallel running, comparison against existing methods, investigation of discordant results, quality-parameter setting, and accreditation review. It does not yet provide a full generic change-control runbook for pipeline updates, rollback, emergency fixes, or revalidation after major reference-data changes.",
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
      "The minimum design issue is linkage. A programme needs stable ways to connect the sample or isolate, submitted metadata, sequencing run, raw data, QC outputs, workflow run, interpreted result, report, and any repository or sharing event.",
      "Poor linkage reduces the value of the analysis even when sequencing and bioinformatics are technically sound. It can make reports harder to interpret, weaken outbreak investigation, complicate reanalysis, and make it harder to audit who saw or changed data.",
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
      "Operational sharing and public or controlled repository release should be treated as different decisions. Operational sharing may involve laboratories, epidemiologists, collaborators, national services, or platform workspaces. Repository release may support international comparison, outbreak detection, research, and method development.",
      "PHA4GE's examples show that sharing can be implemented through local files, HPC-mediated access, cloud object storage, platform workspaces, Galaxy histories, IRIDA-like projects, or public repositories. The appropriate route depends on purpose, sensitivity, identity management, connectivity, and governance.",
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
      "Access design should follow the service model. A national service, a local analysis team, a research collaboration, and a managed platform do not need the same user roles or the same access-review process. The common requirement is that access can be granted, reviewed, changed, and removed deliberately.",
      "This is especially important where users move between projects, external collaborators are added, or data are shared across organisations. Offboarding, audit logs, and incident responsibilities should be planned before the service depends on them.",
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
      "Active analysis storage, intermediate workflow storage, long-term archive, report storage, and backup copies have different purposes. Treating them as one storage bucket makes it harder to control cost, recover from failure, or explain what must be retained.",
      "A backup strategy should be tested as an operational process, not only documented. The current source asks whether the organisation could recover if its main data store were destroyed; that question should be answered before routine service depends on the system.",
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
      "A sustainable service should not depend on one person who knows where the scripts are, how the server is configured, or how reports are interpreted. Documentation, role cover, onboarding, and routine support are part of the infrastructure.",
      "Training also has to include users of the results. If epidemiologists, health-protection teams, or laboratory users do not understand what the report can and cannot support, the technical pipeline may still fail as a public-health service.",
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
      "Initial purchase cost is only one part of sustainability. Routine service creates recurring needs for data storage, compute renewal, workflow maintenance, quality review, user support, security review, training, and staff retention.",
      "The current source base gives a strong case-study example but not a general costing model. Until that source is added, the guidance should treat costing as a planning requirement and avoid pretending that one generic budget formula fits all programmes.",
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
