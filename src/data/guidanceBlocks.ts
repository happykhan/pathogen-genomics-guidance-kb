import type { GuidanceBlock } from "../types/content";

export const guidanceBlocks: GuidanceBlock[] = [
  {
    id: "why-pathogen-genomics",
    title: "Why pathogen genomics?",
    summary:
      "Pathogen genomics can improve public-health action when it is connected to decisions, surveillance systems, and response capacity.",
    sourceStatus: "partial",
    summarySourceIds: [
      "who-genomic-surveillance-2022",
      "who-national-genomic-surveillance-strategy-2023",
      "cdc-nejm-2019",
      "phe-case-study",
    ],
    body: [
      "The value of pathogen genomics is not that it produces more detailed laboratory data. Its value is that the added resolution can change public-health action: detecting linked cases, identifying transmission patterns, monitoring pathogen evolution, supporting antimicrobial-resistance surveillance, improving vaccine or variant monitoring, and helping teams decide where to investigate or intervene.",
      "The strongest argument for investment is therefore a service argument, not a technology argument. Genomics is useful when the result reaches the people who make decisions, arrives in time to affect those decisions, and is interpreted with enough epidemiological and laboratory context to avoid overclaiming.",
    ],
    bodySourceIds: {
      0: [
        "who-genomic-surveillance-2022",
        "who-national-genomic-surveillance-strategy-2023",
        "cdc-nejm-2019",
        "foodborne-genomics-allard-2018",
      ],
      1: ["cdc-nejm-2019", "phe-case-study"],
    },
    subsections: [
      {
        title: "What genomics can add",
        body: [
          "Compared with many conventional typing approaches, whole-genome sequencing can provide higher-resolution information about relatedness, resistance determinants, virulence markers, strain replacement, and pathogen evolution. In public-health practice this can help rule cases in or out of clusters, identify geographically dispersed outbreaks, monitor lineages, and support more targeted investigations.",
          "WHO's genomic surveillance strategy and national strategy support tool frame genomic surveillance as part of preparedness and response for pathogens with epidemic and pandemic potential. The WHO support tool links sequencing to rapid detection and characterization, monitoring transmission, developing or adapting countermeasures, and tracking pathogen evolution. Armstrong et al. describe uses across outbreak investigation, tuberculosis control, influenza surveillance, antimicrobial-resistance surveillance, parasitic disease investigation, and molecular surveillance.",
        ],
        bodySourceIds: {
          0: ["cdc-nejm-2019", "foodborne-genomics-allard-2018"],
          1: ["who-genomic-surveillance-2022", "who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019"],
        },
      },
      {
        title: "Where the value comes from",
        body: [
          "The public-health benefit comes from combining sequence data with sample context, epidemiology, reporting pathways, and response capacity. A genome sequence on its own rarely answers the operational question. The useful product is an interpreted result that tells a team whether cases are likely to be linked, whether a pathogen is changing, whether resistance may affect control, or whether more investigation is needed.",
          "The WHO support tool makes the same point at strategy level: genetic sequence data should be integrated with clinical, laboratory, epidemiological, One Health, phenotypic, and other contextual data. The PHE case study is useful because it describes genomics as a service transition rather than a research project. WGS implementation changed laboratory workflows, reporting timelines, staffing, accreditation, user engagement, and outbreak investigation practice. That is the level at which the value case should be made.",
        ],
        bodySourceIds: {
          0: ["cdc-nejm-2019", "phe-case-study"],
          1: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
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
          "The current knowledge base now has a service-transition case from PHE, a broad public-health case from WHO and Armstrong et al., and a systematic review of economic evaluations by Price et al. The review found that included studies supported WGS surveillance on economic grounds, but the evidence was heterogeneous and stronger in high-income hospital and foodborne-surveillance settings than in low- and middle-income country implementation contexts.",
        ],
        bodySourceIds: {
          0: [
            "genometrakr-economic-2021",
            "lancet-wgs-economic-strategies-2026",
            "national-investment-case-2025",
            "wgs-costing-tool-2024",
            "who-genomics-costing-tool-manual-2024",
            "wgs-economic-review",
          ],
          1: ["phe-case-study", "who-genomic-surveillance-2022", "cdc-nejm-2019", "wgs-economic-review"],
        },
        bodyCitationAnchors: {
          1: [
            {
              text: "The current knowledge base now has a service-transition case from PHE, a broad public-health case from WHO and Armstrong et al.",
              sourceIds: ["phe-case-study", "who-genomic-surveillance-2022", "cdc-nejm-2019"],
            },
            {
              text: "a systematic review of economic evaluations by Price et al.",
              sourceIds: ["wgs-economic-review"],
            },
            {
              text: "the evidence was heterogeneous and stronger in high-income hospital and foodborne-surveillance settings than in low- and middle-income country implementation contexts.",
              sourceIds: ["wgs-economic-review"],
            },
          ],
        },
      },
    ],
    tables: [
      {
        title: "Value-case evidence to collect",
        summary:
          "Use this table before making an investment argument. It keeps public-health value, operational change, and recurrent cost evidence connected.",
        columns: ["Value question", "Evidence to collect", "Why it matters", "Caution"],
        rows: [
          {
            cells: [
              "Which public-health decision will change?",
              "Use case, decision user, current decision route, genomic result or report that would change the route, and response action available once the result arrives.",
              "Genomics has value when the result changes surveillance, outbreak response, AMR action, variant assessment, or another defined public-health decision.",
              "Do not argue for genomics as a technology upgrade without naming the decision and response pathway.",
            ],
            sourceIds: [
              "who-genomic-surveillance-2022",
              "who-national-genomic-surveillance-strategy-2023",
              "cdc-nejm-2019",
            ],
          },
          {
            cells: [
              "What improves compared with the current process?",
              "Current method, comparator, turnaround, sample handling, duplicated processes, cluster resolution, report route, user communication, and quality or validation boundary.",
              "The PHE case study supports a service-transition argument where WGS changed workflows, reporting timelines, validation, user engagement, and outbreak resolution.",
              "A service example from one setting should not be turned into a universal performance or cost claim.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018"],
          },
          {
            cells: [
              "What recurring costs and responsibilities are created?",
              "People, training, quality management, storage, compute, software, maintenance, support, validation, data sharing, and user engagement.",
              "A realistic business case counts the service that surrounds sequencing, not only instruments, reagents, or cost per genome.",
              "Near-term costs can rise while infrastructure, validation, staffing and data-management capacity are built.",
            ],
            sourceIds: [
              "who-genomics-costing-tool-manual-2024",
              "wgs-costing-tool-2024",
              "phe-case-study",
              "pha4ge-infrastructure",
            ],
          },
          {
            cells: [
              "What economic evidence is transferable?",
              "Pathogen, setting, comparator, surveillance application, analysis type, included costs, measured benefits, health-system context, and implementation maturity.",
              "Economic evidence is useful only when the assumptions resemble the programme being planned.",
              "The current systematic-review evidence supports careful economic argument, but not a universal return-on-investment estimate.",
            ],
            sourceIds: [
              "wgs-economic-review",
              "genometrakr-economic-2021",
              "national-investment-case-2025",
              "lancet-wgs-economic-strategies-2026",
            ],
          },
        ],
        sourceIds: [
          "who-genomic-surveillance-2022",
          "who-national-genomic-surveillance-strategy-2023",
          "cdc-nejm-2019",
          "phe-case-study",
          "who-genomics-costing-tool-manual-2024",
          "wgs-economic-review",
          "national-investment-case-2025",
        ],
      },
      {
        title: "Choose the economic strategy before costing",
        summary:
          "Different sequencing strategies answer different public-health questions and create different recurrent costs. Use this table before making return-on-investment or procurement claims.",
        columns: ["Strategy", "When it may fit", "Cost and capacity implications", "Evidence caution"],
        rows: [
          {
            cells: [
              "Pilot or proof-of-service sequencing",
              "A programme is testing feasibility, validating a use case, comparing WGS with an existing method, or building a business case.",
              "Short-term sequencing, validation, staff training, data handling, user feedback and limited storage may dominate the budget.",
              "A pilot can support a stop/go decision, but it does not prove routine surveillance value or long-term sustainability.",
            ],
            sourceIds: ["who-genomics-costing-tool-manual-2024", "aphl-ngs-implementation-2016", "phe-case-study"],
          },
          {
            cells: [
              "Outbreak-triggered sequencing",
              "Sequencing begins when an outbreak, cluster, unusual resistance signal or incident is already suspected.",
              "Routine costs may be lower, but response capacity, surge sequencing, rapid analysis, interpretation and sample logistics must be ready when needed.",
              "Egli and Howden caution that triggered sequencing can miss cryptic transmission or detect problems after they have grown.",
            ],
            sourceIds: ["lancet-wgs-economic-strategies-2026", "wgs-economic-review"],
          },
          {
            cells: [
              "Selective routine surveillance",
              "The programme sequences a defined subset of isolates or specimens using explicit criteria, such as priority pathogens, sentinel sites, AMR profiles, severe disease, geography or time windows.",
              "Costs sit between ad hoc outbreak sequencing and broad continuous surveillance, but the sampling rule must be maintained and reviewed.",
              "Selective surveillance is only interpretable if the selection criteria and sampling gaps are visible to analysts and decision-makers.",
            ],
            sourceIds: [
              "lancet-wgs-economic-strategies-2026",
              "who-national-genomic-surveillance-strategy-2023",
              "ecdc-wgs-surveillance-2016",
            ],
          },
          {
            cells: [
              "Continuous or comprehensive surveillance",
              "The service aims to detect clusters earlier, monitor evolution continuously, support national reporting, or maintain a reusable data asset for multiple users.",
              "Recurring sequencing, data management, storage growth, workflow support, quality management, reporting, sharing and workforce cover become core cost lines.",
              "Potential value depends on response capacity: earlier detection only helps if the system can investigate and act.",
            ],
            sourceIds: [
              "lancet-wgs-economic-strategies-2026",
              "who-genomics-costing-tool-manual-2024",
              "wgs-economic-review",
              "national-investment-case-2025",
            ],
          },
          {
            cells: [
              "National investment case",
              "A funder, ministry or national programme is deciding whether to build or sustain genomic surveillance capacity across pathogens, agencies or regions.",
              "The case should state use cases, expected decisions, infrastructure, workforce, quality systems, data sharing, recurrent costs, benefits and excluded claims.",
              "Published economic evaluations are supportive but heterogeneous; transferability to a new country, pathogen or health-system setting should be argued explicitly.",
            ],
            sourceIds: [
              "national-investment-case-2025",
              "wgs-economic-review",
              "who-genomics-costing-tool-manual-2024",
              "genometrakr-economic-2021",
            ],
          },
        ],
        sourceIds: [
          "lancet-wgs-economic-strategies-2026",
          "wgs-economic-review",
          "who-genomics-costing-tool-manual-2024",
          "national-investment-case-2025",
          "genometrakr-economic-2021",
          "who-national-genomic-surveillance-strategy-2023",
          "ecdc-wgs-surveillance-2016",
          "aphl-ngs-implementation-2016",
          "phe-case-study",
        ],
      },
    ],
    audiences: ["director", "policy", "funder", "lab-lead", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["framing", "decision-use", "public-health", "costing", "value"],
    detailLevel: "summary",
    sourceIds: [
      "who-genomic-surveillance-2022",
      "who-national-genomic-surveillance-strategy-2023",
      "who-genomic-surveillance-progress-2023",
      "cdc-nejm-2019",
      "phe-case-study",
      "foodborne-genomics-allard-2018",
      "genometrakr-economic-2021",
      "lancet-wgs-economic-strategies-2026",
      "national-investment-case-2025",
      "wgs-costing-tool-2024",
      "who-genomics-costing-tool-manual-2024",
      "wgs-economic-review",
    ],
    gaps: [
      "A structured extraction of individual economic evaluation methods, settings, pathogens, comparators, and numeric estimates is still needed before the guide makes general return-on-investment claims.",
    ],
  },
  {
    id: "investment-case-assumptions",
    title: "Make the investment case with explicit assumptions",
    summary:
      "The financial case for pathogen genomics should explain the service model, expected public-health benefit, recurrent costs, and limits of the evidence.",
    sourceStatus: "partial",
    body: [
      "The economic case for pathogen genomics should be made as a setting-specific service case. It should state which decisions will change, which pathogen or programme is in scope, how quickly results must arrive, and what response capacity exists once a signal is detected.",
      "The PHE case study supports a service-transition argument: WGS can replace or consolidate older processes and shift work toward analysis and interpretation, but only after capital planning, validation, accreditation, LIMS integration, training, reporting changes, and user engagement. GenomeTrakr supports a stronger quantitative value case for U.S. food-safety source tracking, but that evidence should not be generalized without checking pathogen, sampling, outbreak cost, and response-system assumptions.",
      "A systematic review by Price et al. found that nine included bacterial WGS surveillance studies supported use of WGS on economic grounds, while also warning that evidence was heterogeneous and that more low- and middle-income country analyses and real-world effectiveness data are needed. Egli and Howden frame a related strategic choice: continuous surveillance costs more in routine operation but may detect clusters earlier, while outbreak-triggered sequencing lowers routine expenditure but can miss cryptic transmission or delay control. Selective surveillance can be a middle path, but only if the criteria for which isolates are sequenced are explicit.",
      "WHO's costing manual provides the current best planning categories: throughput, sequencing platform, reagents and consumables, equipment, personnel and training, facilities and transport, bioinformatics, and quality management. For bioinformatics, the costing model should include cloud, in-house server, or hybrid arrangements; software licensing; storage; hardware; and maintenance fees.",
      "A credible investment case should therefore present scenarios rather than a single universal cost-per-sample or return-on-investment claim. Compare a small pilot, a routine single-pathogen service, a multi-pathogen national service, and a managed or shared-platform model. For each scenario, state what is counted, what is excluded, what benefits are expected, and what evidence is still uncertain.",
    ],
    bodySourceIds: {
      0: ["national-investment-case-2025", "who-national-genomic-surveillance-strategy-2023"],
      1: ["phe-case-study", "genometrakr-economic-2021"],
      2: ["wgs-economic-review", "lancet-wgs-economic-strategies-2026"],
      3: ["who-genomics-costing-tool-manual-2024", "wgs-costing-tool-2024"],
      4: [
        "national-investment-case-2025",
        "who-genomics-costing-tool-manual-2024",
        "lancet-wgs-economic-strategies-2026",
      ],
    },
    technicalDetail: [
      "Minimum scenario fields: pathogen or programme, use case, sampling strategy, annual throughput, turnaround target, sequencing model, bioinformatics model, storage/retention model, staff roles, quality-management scope, data-sharing route, expected benefit, excluded costs, and evidence confidence.",
    ],
    audiences: ["director", "policy", "funder", "lab-lead"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["costing", "strategy", "public-health", "decision-use", "sustainability", "value"],
    detailLevel: "summary",
    sourceIds: [
      "phe-case-study",
      "genometrakr-economic-2021",
      "wgs-economic-review",
      "national-investment-case-2025",
      "lancet-wgs-economic-strategies-2026",
      "who-genomics-costing-tool-manual-2024",
      "wgs-costing-tool-2024",
      "who-national-genomic-surveillance-strategy-2023",
    ],
    gaps: [
      "A comparative extraction of economic evaluation methods and quantitative estimates is still needed before the guide makes numeric return-on-investment claims.",
    ],
  },
  {
    id: "framing-public-health-use",
    title: "Move from research projects to routine service",
    summary:
      "Pathogen genomics infrastructure should be planned as a prospective service that supports decisions repeatedly, not as a one-off analysis project.",
    sourceStatus: "reviewed",
    body: [
      "A sequencing programme is useful when it helps public-health teams detect outbreaks, rule cases in or out of clusters, monitor resistance, track pathogen evolution, or report results faster. The analysis pipeline is part of a larger decision system.",
      "Much pathogen genomics capability starts through academic, retrospective, or outbreak-specific project work. That model is valuable for method development and investigation, but it is not the same as a routine public-health service. A service has to receive work continuously, handle failed or delayed samples, release results through agreed routes, preserve records, and support repeated reanalysis over weeks, months, and years.",
      "Before selecting infrastructure, define the services the programme must support: routine surveillance, outbreak response, AMR monitoring, national reporting, international sharing, or research support. Each use case implies different needs for speed, quality, data integration, governance, and sustainability.",
      "The first design question is therefore not which sequencing platform, cloud provider, or workflow engine to buy. The first question is what decision will change because genomic information is available, who will act on that decision, and how quickly they need a result they can trust.",
      "For an early programme, a narrow and well-defined use case is often more useful than a broad infrastructure ambition. WHO recommends describing the role of genomic surveillance for each public-health priority, including objectives, data users, how those users will analyse or act on the data, and the intended outcome. A service designed for weekly surveillance has different failure modes from one designed for urgent outbreak investigation, and both differ from a research-facing platform that prioritises flexibility.",
    ],
    bodySourceIds: {
      0: ["who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019"],
      1: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
      2: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      3: ["who-national-genomic-surveillance-strategy-2023", "pha4ge-infrastructure"],
      4: ["who-national-genomic-surveillance-strategy-2023", "pha4ge-infrastructure"],
    },
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["framing", "decision-use", "public-health"],
    detailLevel: "summary",
    sourceIds: ["who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019", "phe-case-study"],
  },
  {
    id: "use-case-service-model",
    title: "Define the use case and service model",
    summary:
      "The first design decision is the public-health service being built: who needs the result, how quickly, for what decision, and with what response route.",
    sourceStatus: "partial",
    body: [
      "Before choosing a platform, workflow engine, or storage model, the programme should define the service it is trying to operate. The minimum description is the public-health use case, the users of the result, the sampling strategy, the expected output, the turnaround need, and the action that should follow.",
      "WHO places priority genomic surveillance use cases at the start of the national genomic surveillance value chain. For each disease or public-health priority, the role of genomic surveillance should be described through objectives, data users, sampling strategy, analysis, result sharing, and intended outcomes.",
      "This distinction matters because the same sequencing capacity can support different services. Routine surveillance may prioritise representative sampling, repeatable reporting, and trend analysis. Outbreak response may prioritise speed, controlled operational sharing, and incident review. Repository submission may prioritise metadata completeness and accession tracking. Research support may prioritise flexible analysis, but it should not be presented as validated public-health reporting unless that boundary has been defined.",
      "A useful service model names the product as well as the technology. The product might be a sample-level result, an outbreak alert, a weekly surveillance summary, an AMR report, a dashboard, a repository submission, or an annual review. Each product implies different requirements for QC, metadata, interpretation, access, retention, and user support.",
      "WHO also makes the implementation choice explicit: centralised and decentralised approaches can be chosen differently at each step of the value chain, depending on resources, routine sample volume, sequencing and bioinformatics capacity, procurement, distance between sampling sites and sequencing facilities, transport, biobanking, and data-management protocols.",
      "ECDC adds the data-system implication: storage and sharing requirements depend on the surveillance objective and study design, including continuous, real-time or periodic sentinel surveys and centralised or decentralised analysis. A system designed for periodic sentinel reports does not have the same failure modes as one designed for real-time outbreak response.",
      "For hospital or clinical support, the clinical implementation review separates reactive sequencing from prospective surveillance. Reactive sequencing starts from suspicion of an outbreak and can confirm scope and transmission dynamics. Prospective surveillance can detect unrecognised transmission earlier, but it usually needs more finance, staffing and infrastructure. The same distinction is useful for public-health programmes deciding whether genomics is a routine service, a response tool, or both.",
      "For beta, use an organism and use-case matrix before prescribing technical details. Enteric-bacterial surveillance, respiratory-virus variant monitoring, TB transmission investigation, AMR monitoring, healthcare-associated infection control, repository submission and research support can all use sequencing, but they place different pressure on sampling, metadata, QC, validation, reporting, sharing, access, storage and infrastructure.",
    ],
    bodySourceIds: {
      0: ["who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019"],
      1: ["who-national-genomic-surveillance-strategy-2023"],
      2: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study", "cdc-nejm-2019"],
      3: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      4: ["who-national-genomic-surveillance-strategy-2023"],
      5: ["ecdc-wgs-surveillance-2016"],
      6: ["clinical-microbiology-implementation-2026"],
      7: [
        "who-national-genomic-surveillance-strategy-2023",
        "ecdc-wgs-surveillance-2016",
        "phe-case-study",
        "cdc-nejm-2019",
        "who-sars-cov-2-sequencing-implementation-2021",
        "clinical-microbiology-implementation-2026",
        "mgen-uk-delphi-health-protection-2023",
      ],
    },
    technicalDetail: [
      "Minimum service-model fields: pathogen or programme, use case, data users, sampling route, expected output, turnaround target, validation boundary, reporting route, data-sharing route, owner of follow-up action, and fallback when the result is delayed or inconclusive.",
      "Service-model comparison fields: service type; sample trigger; expected output; turnaround pressure; validation boundary; metadata dependency; reporting route; repository or platform route; access-control needs; storage and retention needs; feedback mechanism; minimum staffing and support; failure mode if delayed.",
      "Beta matrix rows: routine surveillance; outbreak response; AMR monitoring; repository submission; clinical or hospital support; research support.",
      "Beta matrix columns: organism or programme, decision user, sampling route, expected output, turnaround pressure, metadata dependency, QC or validation boundary, reporting route, sharing route, infrastructure dependency, and fallback if the result is delayed or inconclusive.",
      "Organism prompts for beta: enteric bacteria need outbreak/source/One Health routes; respiratory viruses need variant or lineage reporting with sampling context and repository choices; TB and AMR need separation of relatedness and resistance inference; healthcare-associated infection support needs a clear clinical or infection-control reporting route; research support needs a boundary between exploratory analysis and validated public-health reporting.",
    ],
    tables: [
      {
        title: "Beta organism and use-case service-model matrix",
        summary:
          "Use this as a structuring table before choosing infrastructure or report detail. It is a beta planning matrix, not a set of organism-specific thresholds.",
        columns: ["Use case", "Primary decision user", "What changes in the service model", "Main source-backed caution"],
        rows: [
          {
            cells: [
              "Routine surveillance",
              "Surveillance programme, laboratory lead, epidemiology team",
              "Prioritises repeatable sampling, trend reporting, metadata consistency, storage, repository or platform routes, and service review over one-off speed.",
              "Sampling frame and data users must be defined before interpreting trends.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Outbreak response",
              "Incident team, health protection, infection control, environmental or food-safety partners",
              "Prioritises turnaround, controlled sharing, investigation identifiers, user communication, and exception routes for ambiguous or delayed results.",
              "A genetic cluster is not enough without epidemiological and sampling context.",
            ],
            sourceIds: ["phe-case-study", "ecdc-wgs-surveillance-2016", "mgen-uk-delphi-health-protection-2023"],
          },
          {
            cells: [
              "AMR monitoring",
              "AMR programme, reference laboratory, clinical or public-health users",
              "Requires separation of relatedness, resistance determinants, database or tool version, validation boundary, and any need for phenotypic confirmation.",
              "Genotype-phenotype inference varies by organism, drug, mechanism, database and workflow.",
            ],
            sourceIds: ["cdc-nejm-2019", "clinical-microbiology-implementation-2026", "mgen-gonorrhoea-wgs-amr-genogroups-2021"],
          },
          {
            cells: [
              "Repository submission",
              "Data manager, reference laboratory, national or international platform users",
              "Prioritises accession tracking, public minimum metadata, restricted metadata handling, QC status, correction routes and persistent identifiers.",
              "Repository submission is a data-management event, not only an upload step.",
            ],
            sourceIds: [
              "who-sars-cov-2-sequencing-implementation-2021",
              "aphl-ngs-implementation-2016",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Clinical or hospital support",
              "Clinician, infection-control team, hospital microbiology, public-health team",
              "Requires explicit diagnostic or infection-control reporting route, uncertainty language, regulatory boundary, and rapid discussion route where patient care may be affected.",
              "Clinical-facing services may have tighter reporting, validation and regulatory expectations than public-health surveillance alone.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "mgen-centre-specific-typing-ipc-2021"],
          },
          {
            cells: [
              "Research support",
              "Research team, methods developer, programme evaluator",
              "Can allow more flexible analysis and richer exploration, but must mark what is not validated for public-health reporting.",
              "Exploratory outputs should not be presented as operational reports unless the validation and reporting boundary has been defined.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "clinical-microbiology-implementation-2026"],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "cdc-nejm-2019",
          "clinical-microbiology-implementation-2026",
        ],
      },
      {
        title: "Beta profile checks for the dynamic guide",
        summary:
          "Use these checks to test whether the wizard brings relevant organism and use-case sections forward. They are QA checks, not disease-programme approval.",
        columns: ["Wizard profile signal", "Sections that should become prominent", "Reason", "Remaining review need"],
        rows: [
          {
            cells: [
              "Enteric bacteria with sharing or infrastructure goals",
              "Use-case service model, reporting decision use, enteric-bacteria reporting, metadata lineage and data-sharing governance.",
              "Enteric services often connect outbreak detection, source investigation, AMR or virulence findings, One Health users and repository or platform routes.",
              "Needs review against Salmonella, STEC, Listeria and local foodborne-reporting practice.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Respiratory viruses with sharing or surveillance goals",
              "Use-case service model, respiratory-virus reporting, reporting limitations, repository/data-sharing and metadata lineage.",
              "Variant or lineage reporting needs sampling context, collection date and place, genome quality, sharing route and correction history.",
              "Needs review against current influenza, RSV and SARS-CoV-2 nomenclature, QC and repository guidance.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "cdc-nejm-2019"],
          },
          {
            cells: [
              "TB or AMR with validation goals",
              "Use-case service model, TB/AMR reporting, quality validation, workflow provenance and reporting limitations.",
              "Transmission inference and resistance inference need separate evidence, validation basis, versioning, and follow-up testing status.",
              "Needs review against current resistance database guidance, thresholds and national TB or AMR reporting policy.",
            ],
            sourceIds: ["cdc-nejm-2019", "ecdc-wgs-surveillance-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Healthcare-associated infection or nosocomial focus",
              "Use-case service model, healthcare-associated infection reporting, TB/AMR reporting where relevant, quality validation and feedback loops.",
              "Hospital-facing reports need recipient route, comparison set, relatedness statement, uncertainty, infection-control action boundary and feedback.",
              "Needs review against local clinical governance, organism-specific cluster interpretation and infection-control workflow examples.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "mgen-centre-specific-typing-ipc-2021"],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "foodborne-genomics-allard-2018",
          "who-sars-cov-2-sequencing-implementation-2021",
          "cdc-nejm-2019",
          "clinical-microbiology-implementation-2026",
          "mgen-centre-specific-typing-ipc-2021",
        ],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "it-security", "funder", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["use-case", "service-model", "decision-use", "sampling", "reporting", "validation"],
    detailLevel: "operational",
    sourceIds: [
      "who-national-genomic-surveillance-strategy-2023",
      "cdc-nejm-2019",
      "phe-case-study",
      "ecdc-wgs-surveillance-2016",
      "clinical-microbiology-implementation-2026",
      "who-sars-cov-2-sequencing-implementation-2021",
      "mgen-uk-delphi-health-protection-2023",
      "mgen-centre-specific-typing-ipc-2021",
      "mgen-local-sarscov2-large-scale-2020",
      "mgen-polymicrobial-mdr-critical-care-2021",
      "mgen-belgian-influenza-phylogenomics-2021",
      "mgen-salmonella-typhi-paratyphi-england-2021",
      "mgen-gonorrhoea-wgs-amr-genogroups-2021",
    ],
    gaps: [
      "The beta organism and use-case matrix now has automated profile checks for key organism profiles, but still needs review by disease-programme users.",
      "Organism-specific thresholds, sampling fractions, report wording and repository field sets still need full source extraction before the guide can prescribe detailed rules.",
    ],
  },
  {
    id: "sampling-programme-design",
    title: "Plan sampling strategy and programme design",
    summary:
      "Genomic interpretation depends on which samples enter the service, which samples are missed, and what public-health question the sampling frame was designed to answer.",
    sourceStatus: "partial",
    body: [
      "A pathogen genomics service should not be designed as if every available sample has the same public-health meaning. Routine surveillance, outbreak investigation, AMR monitoring, sentinel sampling, repository submission, clinical support, and research studies can all generate sequence data, but they support different interpretations.",
      "The sampling frame affects what the service can claim. A cluster detected from routine national surveillance has a different meaning from a cluster detected through targeted outbreak sampling or convenience sampling. A lineage trend is easier to interpret when the programme knows what was sampled, what was not sampled, and whether sampling changed over time.",
      "WHO's national strategy support tool treats sample and metadata collection as part of the genomic surveillance value chain and links strategy design to priority use cases, users, analysis, sharing, and return of results. That supports a practical design rule: define the sampling route at the same time as the reporting route, because the report can only answer questions that the sampling strategy supports.",
      "For beta guidance, this section should make sampling bias visible rather than prescribe universal sampling fractions. Organism-specific programmes will need more precise material: foodborne and enteric surveillance, respiratory virus variant monitoring, tuberculosis, AMR, and healthcare-associated infection all have different sampling constraints and interpretation risks.",
    ],
    bodySourceIds: {
      0: ["who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019"],
      1: ["who-national-genomic-surveillance-strategy-2023", "cdc-nejm-2019"],
      2: ["who-national-genomic-surveillance-strategy-2023"],
      3: ["who-national-genomic-surveillance-strategy-2023", "foodborne-genomics-allard-2018"],
    },
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["sampling", "surveillance", "public-health", "metadata", "interpretation"],
    detailLevel: "operational",
    sourceIds: [
      "who-national-genomic-surveillance-strategy-2023",
      "cdc-nejm-2019",
      "foodborne-genomics-allard-2018",
    ],
    gaps: [
      "Organism-specific sampling strategies and representativeness rules still need extraction before this section can give detailed programme recommendations.",
    ],
  },
  {
    id: "data-lifecycle-sample-to-report",
    title: "Build a sample-to-decision data service",
    summary:
      "A genomics service must maintain a reliable data asset that connects samples, metadata, QC, sequence data, analysis, reports, sharing, storage, and later reuse.",
    sourceStatus: "partial",
    body: [
      "A sequencing programme is not only producing FASTQ files or a final report. It receives samples or isolates, links them to metadata, generates sequence data, checks quality, runs analysis, interprets outputs, produces reports, shares selected data, stores records, and decides what should be archived or deleted.",
      "The WHO national strategy support tool provides a general value-chain frame: establish priority use cases, collect samples and metadata, extract genetic material, sequence, run bioinformatics analysis, interpret with multisource data, publish or share data, and return results for public-health analysis. The PHE case study gives a concrete service example: extracted DNA entered a central sequencing service, robotic processes checked quality and prepared libraries, sample information was captured through LIMS, sequence data were stored and analysed on IT and bioinformatics infrastructure, and outputs were combined with LIMS data to produce reports.",
      "In practice this lifecycle is a service loop, not a straight line. PHE describes routine WGS at a specified schedule, with 600 to 700 bacterial samples per week in its central service, while also planning for sample issues, sequencing failure, unexpected samples, troubleshooting, validation and quality parameters. APHL describes NGS as a multi-step, multi-day process with repeated opportunities for errors, and recommends tracking samples through parallel conventional and NGS workflows in LIMS during implementation.",
      "That means the programme needs a normal route and exception routes. The normal route covers sample receipt, metadata capture, sequencing, raw-data storage, workflow execution, interpretation, reporting, sharing and long-term record keeping. Exception routes cover failed samples, failed runs, low-quality data, unexpected organisms, ambiguous outputs, delayed reports, repository-submission errors, corrected reports and repeat analysis.",
      "The minimum design task is to keep those events connected. WHO's platform guidance treats provenance as an auditable trail through sample collection, metadata collection, laboratory processing, sequencing, bioinformatics, submission, publications, entry route, and identifiers that link the same data across resources. APHL gives the same idea in repository form by linking raw-read submission and limited metadata to BioSample and SRA accession numbers. A local service may not need every field used by a public platform, but it does need enough internal lineage to explain where a result came from and what changed when it is corrected, shared, archived, or reanalysed.",
      "The lifecycle should be designed around use cases, not files. A national surveillance use case may need sampling representativeness, routine reporting, repository submission, and trend analysis over months or years. An outbreak use case may need faster analysis, tighter operational sharing, and incident review. A research support use case may need more flexible workflows but clearer boundaries around what is not yet validated for public-health action.",
      "The practical design target is a data asset that can feed different products: urgent alerts, sample-level reports, weekly service summaries, monthly or quarterly trend reports, annual reviews, public repository submissions, quality dashboards, and reanalysis when methods or public-health questions change.",
      "WHO's strategy support tool also adds a feedback requirement: data-sharing agreements and collaboration should include timely feedback mechanisms linked to public-health action. In a routine service, that feedback should not be informal memory. It should feed service review: which samples failed, which reports were delayed, which metadata fields were missing, which outputs changed a decision, and which parts of the process need correction or investment.",
    ],
    bodySourceIds: {
      0: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      1: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      2: ["phe-case-study", "aphl-ngs-implementation-2016"],
      3: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study", "aphl-ngs-implementation-2016"],
      4: ["who-genomic-data-sharing-platforms-2025", "aphl-ngs-implementation-2016", "phe-case-study"],
      5: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      6: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study", "pha4ge-infrastructure"],
      7: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
    },
    technicalDetail: [
      "Minimum lineage fields for beta: sample or isolate identifier; submitting organisation or service route; collection date, place and source where appropriate; sampling frame or reason for sequencing; sequencing run; raw data; QC status and QC outputs; workflow run, workflow version and reference data; interpreted result; released report; correction or repeat-analysis event; sharing event; repository accession or platform identifier; and retention or archive decision.",
      "Minimum service-review fields: sample volume, failed or repeated samples, failed or repeated runs, missing metadata fields, median turnaround by use case, delayed report reasons, corrected report count, repository-submission status, user-feedback items, and follow-up action owner.",
      "Beta service-review rows: routine volume; failed or repeated samples; failed or repeated runs; missing metadata; delayed reports; corrected reports; repository-submission status; user feedback; corrective actions.",
      "Beta service-review columns: event or measure, use case affected, sample or report count, owner, user impact, decision taken, corrective action, due date, closure status, and whether the issue changes validation, SOPs, training, metadata capture, infrastructure, or reporting.",
    ],
    tables: [
      {
        title: "Sample-to-decision route map",
        summary:
          "Use this as the first service map. It links each lifecycle step to the record that must persist, the decision it supports, and the exception route that should be owned.",
        columns: ["Lifecycle step", "Record that must persist", "Decision or product supported", "Exception route to define"],
        rows: [
          {
            cells: [
              "Sample or isolate enters the service",
              "Local sample or isolate identifier, submitter, collection date and place where appropriate, source or specimen type, sampling reason and service route.",
              "Whether the specimen belongs in routine surveillance, outbreak response, AMR monitoring, repository submission, clinical support or research support.",
              "Unsuitable input, missing submitter information, duplicate record, unexpected organism, wrong service route or insufficient metadata.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study", "aphl-ngs-implementation-2016"],
          },
          {
            cells: [
              "Metadata are captured and linked",
              "Required public metadata, restricted contextual metadata, LIMS or sample-system record, correction history and person or system responsible for updates.",
              "Whether the sequence can be interpreted, reported, shared, searched later and linked to epidemiological or laboratory context.",
              "Missing minimum metadata, sensitive fields needing restricted access, broken identifier linkage or corrected information after a report has been issued.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "who-national-genomic-surveillance-strategy-2023",
              "ecdc-wgs-surveillance-2016",
            ],
          },
          {
            cells: [
              "Sequencing and QC happen",
              "Run identifier, instrument or platform, wet-lab method, raw data location, run QC, sample QC, repeat decision and any quality annotation attached to downstream records.",
              "Whether data are accepted for analysis, held, repeated, released with a quality note or excluded from a specific use.",
              "Failed sample, failed run, low-quality sequence, partial genome, contamination concern, delayed repeat or QC override.",
            ],
            sourceIds: ["phe-case-study", "aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Workflow is executed",
              "Workflow name and version, reference data or database version, parameters, execution environment, inputs, outputs, analyst or system, and provenance record.",
              "Whether the result is reproducible enough for the intended report, dashboard, repository submission or reanalysis.",
              "Pipeline failure, changed workflow version, changed database, missing provenance, manual workaround or result that conflicts with another method.",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-genomic-data-sharing-platforms-2025", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Interpretation and report are produced",
              "Interpreted result, report recipient, report date, limitation or uncertainty note, supporting metadata, decision-use category and correction route.",
              "Alert, case report, cluster report, AMR or phenotype inference, weekly summary, trend review, infection-control discussion or national surveillance product.",
              "Ambiguous result, report delay, corrected report, user challenge, changed interpretation after more data arrive or result outside validation boundary.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "who-sars-cov-2-sequencing-implementation-2021",
              "ecdc-wgs-surveillance-2016",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Data are shared, stored and reviewed",
              "Sharing decision, repository or platform accession, access state, archive location, retention or deletion decision, feedback item and service-review action.",
              "Public or controlled sharing, later discovery, reanalysis, audit, correction, quality review, funding case and continuous improvement.",
              "Upload failure, accession mismatch, data-residency restriction, withdrawal or correction request, restore failure, storage growth or unresolved user feedback.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "who-pathogen-genome-data-sharing-2022",
              "aphl-ngs-implementation-2016",
              "pha4ge-infrastructure",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "pha4ge-infrastructure",
          "clinical-microbiology-implementation-2026",
          "ecdc-wgs-surveillance-2016",
        ],
      },
      {
        title: "Beta service-review table",
        summary:
          "Use this table in routine review meetings to connect sample-to-report events with decisions, owners and corrective action.",
        columns: ["Review row", "Why it matters", "Minimum owner or decision", "Source-backed caution"],
        rows: [
          {
            cells: [
              "Routine volume",
              "Shows whether throughput assumptions, staffing, storage and reporting routes match the actual service.",
              "Programme or service lead reviews volume by use case and period.",
              "Do not generalise one service's throughput to another setting without checking service model and resources.",
            ],
            sourceIds: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
          },
          {
            cells: [
              "Failed or repeated samples",
              "Can affect surveillance inclusion, turnaround, user trust and whether a public-health question can still be answered.",
              "Laboratory and quality owners record reason, repeat decision, user notification and closure.",
              "Sample or sequencing failure is a service event, not only a bench problem.",
            ],
            sourceIds: ["phe-case-study", "aphl-ngs-implementation-2016"],
          },
          {
            cells: [
              "Failed or repeated runs",
              "Can indicate instrument, library, workflow, reagent, staffing or QC threshold problems.",
              "Laboratory, bioinformatics and quality owners decide repeat, release, hold or investigate.",
              "QC and validation need to span wet-lab and bioinformatics steps.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Missing metadata",
              "Can weaken interpretation, repository submission, linkage to epidemiology and later reanalysis.",
              "Data manager or submitting service owner records missing fields, follow-up route and reporting impact.",
              "Metadata should be planned as part of the service, not added after analysis.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Delayed or corrected reports",
              "Can affect outbreak response, clinical or public-health action, and confidence in the service.",
              "Reporting owner records reason, recipients, correction history, user impact and action taken.",
              "Feedback should link to public-health action and service improvement.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Repository submission status",
              "Connects local reports to public or controlled data-sharing routes, accession records and correction pathways.",
              "Data manager records accession, upload date, release state, correction or withdrawal route and support contact.",
              "Repository submission needs accession tracking and platform-specific metadata decisions.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "who-genomic-data-sharing-platforms-2025"],
          },
        ],
        sourceIds: [
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "clinical-microbiology-implementation-2026",
        ],
      },
      {
        title: "Using the service-review table by implementation stage",
        summary:
          "The same review rows have different emphasis in a pilot, routine service or national network.",
        columns: ["Implementation stage", "What the review should test", "Signals to watch", "Source-backed caution"],
        rows: [
          {
            cells: [
              "Pilot or proof of service",
              "Whether the sample-to-report route can be repeated with traceable identifiers, QC, workflow versions, reports and user feedback.",
              "Unexpected sample issues, failed runs, missing metadata, manual handoffs, unclear report ownership and time needed for troubleshooting.",
              "A pilot can demonstrate feasibility without proving routine throughput, cover, validation or sustainability.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Routine single-pathogen service",
              "Whether the service is meeting expected turnaround, quality, reporting, repository and feedback routes at the actual sample volume.",
              "Failed or repeated samples, delayed reports, corrected reports, repository-submission status, storage pressure and recurring support issues.",
              "Do not generalise PHE throughput figures to other services; use local volume and service model.",
            ],
            sourceIds: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
          },
          {
            cells: [
              "Multi-pathogen or upgrading service",
              "Whether shared infrastructure, data management, reporting, validation and support still work when organisms and use cases diverge.",
              "Organism-specific QC failures, separate report routes, incompatible metadata needs, workflow drift and validation boundaries.",
              "Shared infrastructure does not remove organism-specific interpretation and reportability decisions.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "National or collaborative network",
              "Whether laboratories, platforms and users can produce comparable outputs, share data appropriately, receive support and feed back into public-health action.",
              "Site-to-site variation, training gaps, shared-method drift, delayed data flow, unresolved access issues and weak governance of corrections.",
              "Network models require shared standards, training, data-sharing agreements, governance and support routes.",
            ],
            sourceIds: [
              "auspathogen-implementation-2025",
              "mgen-california-covidnet-2023",
              "mgen-eurl-wgs-rollout-europe-2023",
            ],
          },
        ],
        sourceIds: [
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "who-national-genomic-surveillance-strategy-2023",
          "clinical-microbiology-implementation-2026",
          "ecdc-wgs-surveillance-2016",
          "auspathogen-implementation-2025",
          "mgen-california-covidnet-2023",
          "mgen-eurl-wgs-rollout-europe-2023",
        ],
      },
    ],
    audiences: ["lab-lead", "bioinformatician", "data-manager", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["data-lifecycle", "lims", "reporting", "metadata"],
    detailLevel: "operational",
    sourceIds: [
      "who-national-genomic-surveillance-strategy-2023",
      "who-genomic-data-sharing-platforms-2025",
      "pha4ge-infrastructure",
      "phe-case-study",
      "aphl-ngs-implementation-2016",
      "clinical-microbiology-implementation-2026",
      "ecdc-wgs-surveillance-2016",
      "auspathogen-implementation-2025",
      "mgen-california-covidnet-2023",
      "mgen-eurl-wgs-rollout-europe-2023",
    ],
    gaps: [
      "The beta metadata buckets still need conversion into a formal field dictionary with required, optional, public, restricted, and system-generated fields by organism and use case.",
      "The beta service-review tables still need review and user testing with real pilot, routine-service, multi-pathogen and national-network programmes.",
    ],
  },
  {
    id: "metadata-and-epidemiology-integration",
    title: "Integrate genomic, laboratory, and epidemiological data",
    summary:
      "Genome data have more public-health value when linked to sample context, epidemiology, and reporting systems.",
    sourceStatus: "partial",
    body: [
      "Armstrong et al. state that laboratory and epidemiological data are often managed separately, but pathogen genomic data need to be integrated with epidemiological data to realise the value of both.",
      "The PHE case study shows this in practice: LIMS sample data and sequence-analysis outputs were combined to produce final sample reports.",
      "The minimum design issue is linkage. A programme needs stable ways to connect the sample or isolate, submitted metadata, sequencing run, raw data, QC outputs, workflow run, interpreted result, report, and any repository or sharing event. This should be treated as a service requirement, not a spreadsheet tidy-up task after analysis is finished.",
      "WHO's platform principles provide a practical starting point for metadata scope: sample information, sampling strategy, sequencing strategy, bioinformatics methods, attribution data, and optional fields for richer epidemic or One Health analysis. The same guidance links richer metadata to deeper inference, while noting that sensitive or privileged data may require stricter access policies.",
      "For beta, the guide can use five linked metadata buckets. Public minimum metadata are the fields that can normally travel with shared sequence data, such as collection date, location at an appropriate resolution, host or source, sample type, sampling strategy, sequencing strategy, bioinformatics method and attribution. Restricted contextual metadata are fields that improve interpretation but may need tighter access, such as clinical details, exposure information, hospitalisation, outcome, travel history, food-chain details, animal-health links or environmental context.",
      "The remaining three buckets keep the service auditable. Technical provenance records who collected the sample, who generated metadata, which laboratory processed and sequenced it, which bioinformatics unit analysed it, how the data entered a platform, and which identifiers link it to other resources. Repository accession fields record BioSample or equivalent sample accessions, raw-read accessions such as SRA or ENA records, consensus-genome accessions where used, upload dates, correction dates and platform status. Service-management fields record internal workflow dates and identifiers, including extraction date, sequencing run, QC status, analysis submission and retrieval dates, report date, repository-submission status, repeat-analysis events and follow-up owner.",
      "Poor linkage reduces the value of analysis even when sequencing and bioinformatics are technically sound. It can make reports harder to interpret, weaken outbreak investigation, complicate reanalysis, break repository submission, and make it harder to audit who generated, saw, changed, or reused data.",
      "ECDC and AusPathoGen add the implementation point: WGS becomes more useful when genomic analysis is integrated into surveillance and epidemiological interpretation, not held as a separate laboratory artifact. That means the metadata model should be designed with the people who will investigate outbreaks, interpret surveillance signals, or act on AMR and healthcare-associated infection information.",
    ],
    bodySourceIds: {
      0: ["cdc-nejm-2019"],
      1: ["phe-case-study"],
      2: ["who-national-genomic-surveillance-strategy-2023", "who-genomic-data-sharing-platforms-2025"],
      3: ["who-genomic-data-sharing-platforms-2025"],
      4: [
        "who-genomic-data-sharing-platforms-2025",
        "who-sars-cov-2-sequencing-implementation-2021",
        "ecdc-wgs-surveillance-2016",
      ],
      5: [
        "who-genomic-data-sharing-platforms-2025",
        "aphl-ngs-implementation-2016",
        "who-sars-cov-2-sequencing-implementation-2021",
      ],
      6: ["who-genomic-data-sharing-platforms-2025", "cdc-nejm-2019", "phe-case-study"],
      7: ["ecdc-wgs-surveillance-2016", "auspathogen-implementation-2025"],
    },
    bodyCitationAnchors: {
      2: [
        {
          text: "A programme needs stable ways to connect the sample or isolate, submitted metadata, sequencing run, raw data, QC outputs, workflow run, interpreted result, report, and any repository or sharing event.",
          sourceIds: [
            "who-national-genomic-surveillance-strategy-2023",
            "who-genomic-data-sharing-platforms-2025",
            "phe-case-study",
          ],
        },
      ],
      3: [
        {
          text: "sample information, sampling strategy, sequencing strategy, bioinformatics methods, attribution data, and optional fields for richer epidemic or One Health analysis.",
          sourceIds: ["who-genomic-data-sharing-platforms-2025"],
        },
        {
          text: "sensitive or privileged data may require stricter access policies.",
          sourceIds: ["who-genomic-data-sharing-platforms-2025"],
        },
      ],
    },
    technicalDetail: [
      "Minimum internal lineage: sample or isolate identifier, submitter or collection route, collection date/place/source where appropriate, sampling strategy or reason for sequencing, sequencing run, raw data location, QC status, workflow run and version, reference data version, interpreted result, released report, correction history, sharing event, repository accession or platform identifier, and retention/archive decision.",
      "Minimum platform questions: What metadata are required? What fields are optional but pre-set? Are provenance and attribution recorded? Are persistent identifiers or accessions issued? Can the platform exchange data through documented APIs or standards? How are restricted metadata handled?",
      "Beta metadata buckets: public minimum metadata; restricted contextual metadata; technical provenance; repository accession fields; service-management fields. Do not require all buckets to live in one system, but require stable identifiers that join them.",
      "Beta accession fields: local sample or isolate identifier, submitter identifier, repository sample accession, raw-read accession, consensus-genome accession if used, platform project or workspace identifier, upload date, correction or replacement date, and status of public, controlled or internal release.",
    ],
    tables: [
      {
        title: "Beta metadata field priorities by programme focus",
        summary:
          "Use this as a design aid for metadata capture. It shows which fields to prioritise, not a final repository schema.",
        columns: ["Programme focus", "Prioritise these fields", "Restricted or contextual fields", "Beta caution"],
        rows: [
          {
            cells: [
              "All routine services",
              "Sample or isolate ID, collection date, collection place at appropriate resolution, host or source, sample type, sampling strategy, sequencing strategy, bioinformatics method, attribution, QC status, workflow version, report ID and sharing or accession status.",
              "Submitter details, operational incident notes, exact location, patient or facility identifiers, and correction history where these are sensitive.",
              "Keep a stable identifier lineage even if fields live in LIMS, analysis systems, repositories and reporting tools rather than one database.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "ecdc-wgs-surveillance-2016",
              "aphl-ngs-implementation-2016",
            ],
          },
          {
            cells: [
              "Enteric bacteria and foodborne surveillance",
              "Food, animal, environmental or clinical source; exposure or investigation ID; collection route; cluster or outbreak ID; AMR or virulence markers where validated; repository or national-platform accession status.",
              "Food-chain, business, environmental, traceback, patient exposure or multi-agency investigation details that may need restricted sharing.",
              "Do not infer source attribution from sequence relatedness alone; link genomic findings to epidemiology and investigation context.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Respiratory-virus surveillance",
              "Collection date, collection place, sampling frame, specimen type, sequencing method, completeness or coverage, lineage or clade call, variant or risk-assessment status, upload or sharing route and correction status.",
              "Demographic, clinical, travel, vaccination, hospitalization or outbreak-setting data where confidentiality permits and the use case requires them.",
              "Minimum metadata may be enough for broad sharing, but variant interpretation needs sampling context and QC limits.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "cdc-nejm-2019"],
          },
          {
            cells: [
              "Tuberculosis",
              "Case or isolate lineage, relatedness or cluster context, collection time and place, treatment or recurrence context where allowed, drug-resistance inference, method and database version, and report route.",
              "Patient identifiers, treatment history, transmission-network context and clinical data usually require restricted handling.",
              "Transmission and resistance inference depend on organism, drug, mechanism, sampling coverage and local validation.",
            ],
            sourceIds: ["cdc-nejm-2019", "clinical-microbiology-implementation-2026", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "AMR monitoring",
              "Organism, sample source, phenotype if available, genotype or resistance-marker call, database and version, method limits, validation status, surveillance route and reporting route.",
              "Clinical context, treatment information, facility or ward context, and patient-level details where they affect interpretation but cannot be public.",
              "Genotype-to-phenotype inference can vary by organism, drug and pipeline; the metadata should preserve the validation basis.",
            ],
            sourceIds: [
              "cdc-nejm-2019",
              "clinical-microbiology-implementation-2026",
              "mgen-discordant-amr-predictions-2020",
            ],
          },
          {
            cells: [
              "Healthcare-associated infection and infection control",
              "Facility or service context, ward or unit at appropriate resolution, collection date, specimen type, suspected outbreak or incident ID, relatedness result, infection-control action route and report recipient.",
              "Patient location, movement, admission, procedure, device, contact-tracing and staff or ward information usually need tightly controlled access.",
              "The same genomic signal can have different implications depending on ward movement, sampling density and infection-control context.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "mgen-centre-specific-typing-ipc-2021",
              "mgen-polymicrobial-mdr-critical-care-2021",
            ],
          },
        ],
        sourceIds: [
          "who-genomic-data-sharing-platforms-2025",
          "who-sars-cov-2-sequencing-implementation-2021",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "foodborne-genomics-allard-2018",
          "cdc-nejm-2019",
          "clinical-microbiology-implementation-2026",
          "mgen-discordant-amr-predictions-2020",
          "mgen-centre-specific-typing-ipc-2021",
          "mgen-polymicrobial-mdr-critical-care-2021",
        ],
      },
    ],
    audiences: ["data-manager", "bioinformatician", "lab-lead", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["metadata", "interoperability", "lims", "epidemiology"],
    detailLevel: "operational",
    sourceIds: [
      "cdc-nejm-2019",
      "phe-case-study",
      "pha4ge-infrastructure",
      "who-national-genomic-surveillance-strategy-2023",
      "who-genomic-data-sharing-platforms-2025",
      "who-sars-cov-2-sequencing-implementation-2021",
      "ecdc-wgs-surveillance-2016",
      "aphl-ngs-implementation-2016",
      "auspathogen-implementation-2025",
      "foodborne-genomics-allard-2018",
      "clinical-microbiology-implementation-2026",
      "mgen-discordant-amr-predictions-2020",
      "mgen-centre-specific-typing-ipc-2021",
      "mgen-polymicrobial-mdr-critical-care-2021",
    ],
    gaps: [
      "Current INSDC/NCBI, GISAID, pathogen-specific repository templates, controlled vocabularies, and jurisdiction-specific sensitive-field rules still need direct extraction before the guide can prescribe exact field names or required/optional status.",
    ],
  },
  {
    id: "quality-validation-before-switch",
    title: "Build quality management, validation, and change control",
    summary:
      "WGS should not replace an established public-health method until expected performance and quality controls are clear.",
    sourceStatus: "partial",
    body: [
      "The PHE case study provides a useful implementation pattern. Before switching Salmonella typing from conventional methods to WGS, PHE ran conventional and WGS workflows in parallel, compared datasets, performed gap analysis, adjusted protocols, and established quality parameters.",
      "Validation needs to cover the whole service chain: input material, extraction, sequencing, laboratory handling, data quality, analysis outputs, reporting, and troubleshooting. WHO's national strategy support tool also treats data quality, internal consistency, SOPs, and internal and external quality assessment for genomics and analytics as part of data-management design.",
      "The APHL implementation guide and the clinical microbiology implementation review both reinforce that validation is not a final bioinformatics step. Implementation planning has to cover laboratory preparation, information technology, workforce, validation, data quality assurance, analysis tools, reporting, storage, transfer, sharing, interpretation, and external quality assessment or proficiency testing where the setting requires it.",
      "This is not only a laboratory question. Bioinformatics pipelines, reference databases, result interpretation, report generation, and user-facing outputs can all change service behaviour. Where results are used for public-health action, the programme needs evidence that the new process performs as expected before older methods are retired.",
      "For routine use, QC should be recorded as part of the result context. The clinical microbiology review notes that genomic QC applies across the sequencing and analysis workflow, and that validation requires wet-lab and bioinformatics process validation plus strict software and database version control. WHO's platform guidance adds a useful data-management principle: low-quality or incomplete data may sometimes be useful, but it should be annotated with QC methods and results so users can decide whether it is fit for their purpose.",
      "Change control should be part of the same quality system. A routine service should treat workflow updates, reference-database updates, QC-threshold changes, report-template changes and interpretation-rule changes as controlled releases. Each release needs a reason for change, validation evidence, version record, approval route, communication plan, rollback or emergency-fix criteria, and a trigger for revalidation if the change affects reportable outputs or public-health interpretation.",
      "The Microbial Genomics collection strengthens this section. Ballard et al. explicitly connect public-health, treatment, and legal impacts to validation, quality systems, and accreditation. The European AMR proficiency-testing paper highlights standardization, QC, and data-sharing challenges across laboratories. Multi-laboratory and time-critical sequencing evaluations, harmonisation studies, STEC workflow validation, and AMR prediction discordance all point to the same conclusion: routine genomics needs validation evidence across laboratory and bioinformatics components before results are used for action.",
    ],
    bodySourceIds: {
      0: ["phe-case-study"],
      1: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
      2: ["aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
      3: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023", "clinical-microbiology-implementation-2026"],
      4: ["clinical-microbiology-implementation-2026", "who-genomic-data-sharing-platforms-2025"],
      5: [
        "phe-case-study",
        "aphl-ngs-implementation-2016",
        "clinical-microbiology-implementation-2026",
        "who-genomic-data-sharing-platforms-2025",
      ],
      6: [
        "mgen-accreditation-iso-pathogen-genomics-2023",
        "mgen-eurl-amr-proficiency-test-2023",
        "mgen-iseq-multilab-enteric-2022",
        "mgen-time-critical-illumina-wgs-2021",
        "mgen-harmonization-enterobacteriaceae-enterococci-2021",
        "mgen-stec-bioinformatics-validation-2021",
        "mgen-discordant-amr-predictions-2020",
      ],
    },
    technicalDetail: [
      "In the PHE case study, phase I used 1,538 representative Salmonella samples and phase II compared 6,887 isolates against WGS-determined serotype. The case study reports 97% concordance between WGS and conventional methods.",
      "Minimum validation record for beta: use case, intended reportable outputs, comparator or reference material, input-material requirements, sequencing-run acceptance criteria, analysis acceptance criteria, workflow and database versions, repeatability and reproducibility checks, known limitations, sign-off role, and trigger for revalidation.",
      "Minimum release record for beta: changed component, reason for change, affected outputs, test dataset or comparator, validation result, software and database versions, approver, release date, communication route, rollback option, emergency-fix criteria, and revalidation trigger.",
    ],
    tables: [
      {
        title: "Beta release and change-control checklist",
        summary:
          "Use this checklist when a routine workflow, database, QC threshold, interpretation rule or report template changes.",
        columns: ["Checklist item", "Record in the release file", "Why it matters", "Beta caution"],
        rows: [
          {
            cells: [
              "Change description",
              "Component changed, previous version, new version, reason for change, affected organism or use case, and whether reportable outputs can change.",
              "Services need to know when a result might differ because the method changed rather than the organism changed.",
              "Small database or parameter changes can still change public-health interpretation.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Validation or verification evidence",
              "Comparator, reference collection, test dataset, expected outputs, observed differences, repeatability or reproducibility checks, and known limitations.",
              "The PHE case study shows that method transition required parallel testing, dataset comparison, gap analysis and quality parameters before switching off older methods.",
              "Validation evidence must match the intended reportable output; a pipeline smoke test is not enough for public-health reporting.",
            ],
            sourceIds: [
              "phe-case-study",
              "aphl-ngs-implementation-2016",
              "mgen-stec-bioinformatics-validation-2021",
            ],
          },
          {
            cells: [
              "QC and acceptance rules",
              "Run, sample, read, assembly or genome-quality criteria; low-quality annotation rules; threshold changes; and who can approve overrides.",
              "QC status and QC methods need to travel with results so users can decide whether data are fit for purpose.",
              "Organism-specific QC thresholds still need separate extraction before this guide can prescribe cut-offs.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Software, workflow and database versions",
              "Workflow version, container or software versions, reference database version, parameters, report-template version and release date.",
              "Strict software and database version control is part of interpreting and auditing genomic results.",
              "Version capture should include reference data and interpretation rules, not only the pipeline name.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Approval and communication",
              "Approver role, release date, users affected, communication route, report wording affected, training note and support contact.",
              "A change-control process is also a user-support process when reports, dashboards or interpretations change.",
              "Approval routes should be fitted to the local quality system and regulatory context.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Rollback, correction and revalidation trigger",
              "Rollback option, emergency-fix criteria, correction route for released results, reanalysis decision, and trigger for full or partial revalidation.",
              "Routine services need a recorded way to deal with failed releases, corrected reports and method changes that alter previous interpretation.",
              "This beta checklist is not a substitute for an accredited SOP or incident-management procedure.",
            ],
            sourceIds: [
              "phe-case-study",
              "clinical-microbiology-implementation-2026",
              "mgen-accreditation-iso-pathogen-genomics-2023",
            ],
          },
        ],
        sourceIds: [
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "mgen-accreditation-iso-pathogen-genomics-2023",
          "mgen-stec-bioinformatics-validation-2021",
        ],
      },
      {
        title: "Turning the beta checklist into a local SOP package",
        summary:
          "Use this as a handoff into the local quality system. It names the package to assemble; it does not replace local QA, accreditation or regulatory approval.",
        columns: ["SOP package item", "What to include", "Owner to name", "Beta caution"],
        rows: [
          {
            cells: [
              "Scope and intended use",
              "Priority use case, organisms covered, reportable outputs, users, decision pathway, validation boundary and conditions where the workflow must not be used.",
              "Service lead with laboratory, bioinformatics and public-health user input.",
              "Do not turn a beta pathway into a universal SOP; intended use should be narrower than the whole technology.",
            ],
            sourceIds: [
              "phe-case-study",
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Inputs and acceptance criteria",
              "Input material, sample or isolate requirements, required metadata, run-level QC, sample-level QC, analysis QC, acceptance thresholds and override route.",
              "Laboratory quality lead with bioinformatics owner and data manager.",
              "Thresholds and reportability rules remain organism-specific; the beta guide should not prescribe cut-offs where source coverage is incomplete.",
            ],
            sourceIds: [
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Workflow, database and version record",
              "Workflow name, software versions, container or environment, reference database versions, parameters, report-template version, release date and provenance capture.",
              "Bioinformatics owner with quality sign-off.",
              "Version control should include reference data and interpretation rules, not only the pipeline code.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Validation and verification evidence",
              "Comparator or reference material, expected and observed outputs, repeatability or reproducibility checks, discordance review, limitations and revalidation triggers.",
              "Quality lead, laboratory lead and bioinformatics lead.",
              "Evidence should match the reportable output; a workflow smoke test is not enough for public-health reporting.",
            ],
            sourceIds: [
              "phe-case-study",
              "aphl-ngs-implementation-2016",
              "mgen-stec-bioinformatics-validation-2021",
              "mgen-discordant-amr-predictions-2020",
            ],
          },
          {
            cells: [
              "Release and change control",
              "Changed component, reason for change, affected outputs, approval route, release date, user communication, rollback route, correction route and emergency-fix criteria.",
              "Service owner with quality-system owner and affected technical owners.",
              "Emergency fixes and corrected reports need the local incident-management procedure, not only a release note.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "mgen-accreditation-iso-pathogen-genomics-2023",
            ],
          },
          {
            cells: [
              "Reporting and user communication",
              "Report template, limitations text, uncertainty route, recipient route, feedback route, support contact and training or change notice for users.",
              "Reporting scientist or service-user lead with quality and technical owners.",
              "This beta package can define report components, but final wording needs local reporting governance and pathogen-specific templates.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "EQA, proficiency testing and accreditation review",
              "EQA or PT plan where available, audit trail, deviation route, competency or training record, and accreditation or regulatory review requirements.",
              "Quality/accreditation owner with laboratory and bioinformatics leads.",
              "The source base supports the need for quality-system review; it does not prove that this beta checklist satisfies any specific accreditation scheme.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "mgen-accreditation-iso-pathogen-genomics-2023",
            ],
          },
        ],
        sourceIds: [
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "mgen-accreditation-iso-pathogen-genomics-2023",
          "mgen-stec-bioinformatics-validation-2021",
          "mgen-discordant-amr-predictions-2020",
        ],
      },
    ],
    audiences: ["lab-lead", "bioinformatician", "data-manager", "director"],
    implementationStages: ["pilot", "routine-service", "upgrading"],
    organisms: ["general", "enteric-bacteria", "amr", "nosocomial", "tb"],
    topics: ["quality", "validation", "accreditation"],
    detailLevel: "operational",
    sourceIds: [
      "phe-case-study",
      "who-national-genomic-surveillance-strategy-2023",
      "pha4ge-infrastructure",
      "aphl-ngs-implementation-2016",
      "clinical-microbiology-implementation-2026",
      "who-genomic-data-sharing-platforms-2025",
      "mgen-accreditation-iso-pathogen-genomics-2023",
      "mgen-eurl-amr-proficiency-test-2023",
      "mgen-iseq-multilab-enteric-2022",
      "mgen-time-critical-illumina-wgs-2021",
      "mgen-harmonization-enterobacteriaceae-enterococci-2021",
      "mgen-stec-bioinformatics-validation-2021",
      "mgen-discordant-amr-predictions-2020",
    ],
    gaps: [
      "The beta SOP handoff checklist still needs local laboratory-quality, accreditation, regulatory and incident-management review before adoption as an SOP.",
      "Organism-specific QC thresholds and reportability rules still need extraction before the guide can prescribe detailed acceptance criteria.",
    ],
  },
  {
    id: "failure-handling-continuous-improvement",
    title: "Handle failures and improve the service",
    summary:
      "A routine genomics service needs explicit routes for failed samples, failed runs, low-quality data, ambiguous results, delayed reports, and service review.",
    sourceStatus: "partial",
    body: [
      "The ideal sample-to-decision path is not enough for routine service design. Real services have failed samples, failed sequencing runs, insufficient DNA, contaminated or mixed data, missing metadata, delayed analysis, ambiguous clusters, repository submission errors, and reports that need correction or clarification.",
      "Failure handling should connect laboratory process, bioinformatics process, reporting, and quality review. A low-quality sequencing result is not only a technical event; it can affect whether a case is included in surveillance, whether an outbreak signal is investigated, whether a report is delayed, and whether a user needs an explanation.",
      "The PHE case study supports this service view because implementation covered workflow development from sample receipt to reporting, LIMS interaction, validation, quality parameters, accreditation, training, and user engagement. WHO's national strategy support tool also treats data quality, consistency, storage, backup, reporting, and interpretation as part of genomic surveillance data management.",
      "A practical service should review its own performance over time. Candidate measures include turnaround time, sample and run failure rates, metadata completeness, workflow incidents, report corrections, repository submission success, unresolved access problems, and user feedback. These measures should be connected to corrective actions, not only reported as dashboard numbers.",
      "The guide can now state a beta-level principle: low-quality, incomplete, repeated, corrected, or overridden results should not disappear into the workflow. They should be labelled, reviewed, and linked to the decision taken. WHO's platform guidance supports QC annotation for low-quality or incomplete data; the clinical microbiology review supports local acceptance thresholds, wet-lab and dry-lab QC, version control, and EQA/PT where available.",
      "For beta, the service-review table should connect each exception or performance measure to an owner and a decision. A useful row records the event, the use case affected, the number of samples or reports involved, user impact, corrective action, closure status, and whether the issue changes validation, SOPs, training, metadata capture, infrastructure, or reporting.",
    ],
    bodySourceIds: {
      0: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
      1: ["phe-case-study", "clinical-microbiology-implementation-2026"],
      2: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
      3: ["phe-case-study", "aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
      4: ["who-genomic-data-sharing-platforms-2025", "clinical-microbiology-implementation-2026"],
      5: [
        "phe-case-study",
        "aphl-ngs-implementation-2016",
        "who-national-genomic-surveillance-strategy-2023",
        "clinical-microbiology-implementation-2026",
      ],
    },
    technicalDetail: [
      "Minimum exception log fields for beta: sample or isolate identifier, failure point, QC signal, acceptance threshold affected, workflow or database version, decision taken, person or role responsible, user notification, repeat or override decision, report impact, repository or sharing impact, corrective action, and closure status.",
      "Minimum service-review rows for beta: routine volume, failed or repeated samples, failed or repeated runs, missing metadata, delayed reports, corrected reports, repository-submission status, user feedback, and corrective actions.",
      "Minimum review questions: did the issue affect a released result, a public-health decision, a repository record, a user's trust in the service, a validation boundary, or a recurring cost line?",
    ],
    tables: [
      {
        title: "Beta exception and service-review register",
        summary:
          "Use this as a practical review register for routine service operation. It is not an accreditation template or organism-specific QC rule set.",
        columns: ["Event to track", "Minimum record", "Decision or action", "Source-backed caution"],
        rows: [
          {
            cells: [
              "Failed or repeated sample",
              "Sample or isolate ID, input material issue, collection or extraction context, repeat decision, user notification and final inclusion or exclusion status.",
              "Decide whether to repeat, reject, request a new specimen, report as failed, or include with limitations.",
              "PHE's implementation work treated sample quality, quantity, troubleshooting and protocol adjustment as service issues, not only bench-level problems.",
            ],
            sourceIds: ["phe-case-study", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Failed or low-quality run",
              "Run ID, QC signal, affected samples, acceptance threshold, sequencing or library issue, repeat decision, report impact and closure status.",
              "Decide whether to repeat the run, accept partial data, hold reports, or open a corrective action.",
              "WHO platform guidance supports QC annotation; local thresholds and organism-specific reportability rules still need local validation.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Missing or inconsistent metadata",
              "Missing field, conflicting identifier, responsible system, person or team asked to correct it, correction date and impact on interpretation or sharing.",
              "Decide whether analysis can proceed, whether a report needs a limitation statement, and whether repository or platform submission should wait.",
              "WHO national strategy guidance treats data quality, metadata quality and internal consistency as data-management requirements.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Ambiguous or unexpected result",
              "Result type, comparison set, QC status, workflow/database version, reviewer, interpretation uncertainty and follow-up route.",
              "Decide whether expert review, repeat analysis, additional epidemiology, phenotypic testing, or amended reporting is needed.",
              "Clinical and public-health interpretation can require organism-specific review, especially for inferred phenotypes and infection-control decisions.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Delayed report or delayed sharing",
              "Expected date, actual date, delay reason, affected users, public-health impact, repository or platform status and escalation owner.",
              "Decide whether the delay changes outbreak response, routine surveillance, stakeholder communication, or service capacity planning.",
              "WHO links genomic surveillance to timely feedback and public-health action; delay is therefore a service issue, not only a throughput metric.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Corrected, superseded or withdrawn record",
              "Original report or accession, reason for change, replacement record, notification route, owner, date and link to corrected repository/platform status.",
              "Decide who must be notified, whether downstream users need a correction, and whether validation, SOPs or training need updating.",
              "APHL accession tracking and WHO platform provenance support keeping shared records connected to local corrections and later reuse.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Recurring service problem",
              "Frequency, affected use case, affected workflow step, user impact, cost or capacity effect, corrective action, owner and review date.",
              "Decide whether to change SOPs, training, validation boundaries, metadata capture, infrastructure, support arrangements, or user communication.",
              "Service metrics should lead to corrective action; dashboard counts alone do not improve the service.",
            ],
            sourceIds: [
              "phe-case-study",
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
              "who-national-genomic-surveillance-strategy-2023",
            ],
          },
        ],
        sourceIds: [
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "who-sars-cov-2-sequencing-implementation-2021",
          "clinical-microbiology-implementation-2026",
          "ecdc-wgs-surveillance-2016",
        ],
      },
    ],
    audiences: ["lab-lead", "bioinformatician", "data-manager", "it-security", "director"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["quality", "operations", "failure-handling", "reporting", "metadata", "continuous-improvement"],
    detailLevel: "operational",
    sourceIds: [
      "phe-case-study",
      "who-national-genomic-surveillance-strategy-2023",
      "aphl-ngs-implementation-2016",
      "clinical-microbiology-implementation-2026",
      "who-genomic-data-sharing-platforms-2025",
    ],
    gaps: [
      "Detailed failure thresholds, service metrics, and review schedules need extraction from laboratory quality-management and accreditation sources.",
    ],
  },
  {
    id: "workflow-reproducibility",
    title: "Run reproducible workflows with provenance",
    summary:
      "Routine public-health analysis should not depend on undocumented scripts run by one person on one machine.",
    sourceStatus: "partial",
    body: [
      "Public-health outputs may be used to detect outbreaks, rule cases in or out of clusters, support control measures, monitor antimicrobial resistance, and inform policy. The analysis therefore needs to be repeatable enough for service delivery and transparent enough for review.",
      "The PHA4GE source links public-health requirements for transparency and portability to containerised bioinformatics workflows expressed in workflow languages or workflow systems.",
      "For routine service, a workflow should be more than a folder of scripts. The programme should know which version is approved, which reference data are used, which parameters are routine defaults, which outputs are reviewed, and which result is released to users.",
      "Workflow-sharing ecosystems can reduce local development effort, but they do not remove local responsibility. A programme still needs to decide who can introduce a workflow, who validates changes, who approves use for reporting, and how older results can be interpreted if software or reference data change.",
      "The same provenance requirement applies after a workflow is deployed. Routine results should preserve QC status, QC methods, acceptance thresholds, workflow version, software versions, database versions, reference data, and any exception or override. Without that record, reanalysis and change control become guesswork.",
      "The implementation collection gives practical examples of why this matters. Libuit et al. describe public-health bioinformatics as needing standardized analyses and reproducible, validated, auditable outputs, with scalable, portable, secure analysis that fits laboratory constraints. The STEC workflow-validation paper used a conventionally characterized reference collection to validate a bioinformatics WGS workflow, while the AMR discordance study shows that different pipelines can produce discordant resistance predictions from the same WGS data.",
    ],
    bodySourceIds: {
      0: ["cdc-nejm-2019", "pha4ge-infrastructure"],
      1: ["pha4ge-infrastructure"],
      2: ["pha4ge-infrastructure", "phe-case-study"],
      3: ["pha4ge-infrastructure", "mgen-accelerating-bioinformatics-implementation-2023"],
      4: [
        "who-genomic-data-sharing-platforms-2025",
        "clinical-microbiology-implementation-2026",
        "who-national-genomic-surveillance-strategy-2023",
      ],
      5: [
        "mgen-accelerating-bioinformatics-implementation-2023",
        "mgen-stec-bioinformatics-validation-2021",
        "mgen-discordant-amr-predictions-2020",
      ],
    },
    technicalDetail: [
      "For each routine workflow, record workflow version, software or container versions, reference databases, parameters, input data, QC outputs, final outputs, and report linkage.",
      "For each workflow change, record why the change was made, who approved it, what validation or verification evidence was reviewed, which outputs may change, whether old results need reinterpretation, and how the service can roll back if the new release fails.",
      "Candidate technologies named in the sources include WDL, CWL, Nextflow, Galaxy, Snakemake, Airflow, and Swift. These are examples, not endorsements.",
    ],
    tables: [
      {
        title: "Adopting a shared workflow for routine reporting",
        summary:
          "Use this checklist before moving a shared, platform-hosted or externally maintained workflow into public-health reporting.",
        columns: ["Adoption decision", "What to record", "Why it matters", "Beta caution"],
        rows: [
          {
            cells: [
              "Workflow source and maintainer",
              "Workflow name, source repository or platform, maintainer, release channel, licence or terms, support route and whether the workflow is actively maintained.",
              "A shared workflow is also a dependency. The service needs to know who maintains it and what happens when it changes or is abandoned.",
              "Named workflow ecosystems are examples, not endorsements or guarantees of fitness for reporting.",
            ],
            sourceIds: ["pha4ge-infrastructure", "mgen-accelerating-bioinformatics-implementation-2023"],
          },
          {
            cells: [
              "Execution environment",
              "Workflow language or system, container or environment, local server, HPC, cloud, managed platform, Galaxy history or other execution route.",
              "Portability and reproducibility depend on more than code; the execution environment can change results, access, cost and support needs.",
              "A workflow that is portable in principle still needs local operational testing.",
            ],
            sourceIds: ["pha4ge-infrastructure", "mgen-accelerating-bioinformatics-implementation-2023"],
          },
          {
            cells: [
              "Approved version and reference data",
              "Workflow version, software versions, container hashes where available, parameters, reference database versions, report-template version and release date.",
              "Version capture lets the service explain old results, compare reanalysis and decide whether a change affects reportable outputs.",
              "Reference databases and interpretation rules need versioning, not only the workflow code.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Inputs, outputs and report boundary",
              "Accepted inputs, QC outputs, intermediate products retained, final outputs reviewed, outputs released to users, and outputs excluded from reporting.",
              "A workflow can emit many files; the service needs to define which output is the public-health product.",
              "Do not let an exploratory output become a reportable result without validation and sign-off.",
            ],
            sourceIds: ["pha4ge-infrastructure", "phe-case-study", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Validation or verification evidence",
              "Comparator dataset, expected outputs, observed differences, reproducibility checks, discordance review, limits and whether validation matches the intended reportable output.",
              "The STEC workflow-validation example and AMR discordance study show why workflow output needs evidence before reporting.",
              "A successful workflow run is not the same as validation for public-health interpretation.",
            ],
            sourceIds: [
              "mgen-stec-bioinformatics-validation-2021",
              "mgen-discordant-amr-predictions-2020",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Change, rollback and reanalysis plan",
              "Who approves updates, what triggers revalidation, how users are notified, rollback option, emergency-fix route, and whether older results need reinterpretation.",
              "Shared workflows can change outside the local programme; public-health services need a controlled release route.",
              "Do not auto-update a reportable workflow without a release and change-control decision.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "who-genomic-data-sharing-platforms-2025",
              "phe-case-study",
            ],
          },
        ],
        sourceIds: [
          "pha4ge-infrastructure",
          "mgen-accelerating-bioinformatics-implementation-2023",
          "mgen-stec-bioinformatics-validation-2021",
          "mgen-discordant-amr-predictions-2020",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "phe-case-study",
        ],
      },
    ],
    audiences: ["bioinformatician", "lab-lead", "data-manager", "it-security"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["workflow", "provenance", "reproducibility", "validation"],
    detailLevel: "technical",
    sourceIds: [
      "pha4ge-infrastructure",
      "cdc-nejm-2019",
      "phe-case-study",
      "who-genomic-data-sharing-platforms-2025",
      "clinical-microbiology-implementation-2026",
      "mgen-accelerating-bioinformatics-implementation-2023",
      "mgen-stec-bioinformatics-validation-2021",
      "mgen-discordant-amr-predictions-2020",
    ],
  },
  {
    id: "storage-backup-archive-distinction",
    title: "Separate active storage, backup, archive, and retention",
    summary:
      "Raw reads, intermediate files, reports, logs, and shared outputs do not all need the same storage or recovery rules.",
    sourceStatus: "partial",
    body: [
      "A genomics service should separate active analysis storage, long-term archive, backup copies, retention policy, access control, and recovery planning. Raw reads, filtered data, processed data, workflow logs, QC outputs, reports, repository submissions, and dashboards do not all have the same operational purpose.",
      "WHO's national strategy support tool states that storage policy should support short- and long-term analysis and archiving, be defined from available hardware, software, infrastructure and connectivity, and be sized according to the retention strategy for raw, filtered and processed data. It also states that backup locations should be chosen according to data criticality and that data security must apply to local and cloud storage.",
      "The PHE case study shows what this means in a real service: WGS implementation required IT infrastructure to manage and store sequence data, run analysis software, maintain a high-performance computing cluster, provide enough storage and processing speed for service delivery, and use both high-performance and archive storage. Those details are PHE-specific, but the categories are not.",
      "PHA4GE's data-flow framing links ingestion, storage, processing, delivery, archiving, retention policy, role-based access, provenance, and data-management plans. Treating all data as one storage bucket makes it harder to control cost, recover from failure, govern access, or explain which records must be retained.",
      "Backup should be treated as a recovery process. The PHA4GE disaster-recovery note is still rough, but its central question is useful: if the main data store were destroyed, what could the organisation recover, how quickly, and what would be lost? That question should be answered before routine service depends on the system.",
    ],
    bodySourceIds: {
      0: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study", "pha4ge-infrastructure"],
      1: ["who-national-genomic-surveillance-strategy-2023"],
      2: ["phe-case-study"],
      3: ["pha4ge-infrastructure"],
      4: ["pha4ge-infrastructure"],
    },
    technicalDetail: [
      "Minimum storage map: active analysis storage, raw data archive, processed data archive, report storage, workflow-log storage, QC-output storage, repository-submission records, backup copies, and deleted or expired records.",
      "Minimum recovery questions: what data cannot be regenerated, how long each copy is retained, where backups are held, how backup versions are managed, how backup jobs are scheduled, who receives failure alerts, how restoration is tested, and what service work stops during recovery.",
    ],
    tables: [
      {
        title: "Beta storage, backup, archive and recovery map",
        summary:
          "Use this map to classify genomics data by operational purpose before choosing storage classes, backup schedules or archive rules.",
        columns: ["Data or storage category", "Operational purpose", "Minimum decision to record", "Beta caution"],
        rows: [
          {
            cells: [
              "Active analysis storage",
              "Holds data needed for current workflow execution, QC review, re-runs and short-term troubleshooting.",
              "Owner, access rules, expected working capacity, workflow location, cleanup rule, and what happens when storage fills.",
              "Active storage is not a backup or a long-term archive.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "pha4ge-infrastructure", "phe-case-study"],
          },
          {
            cells: [
              "Raw-read archive",
              "Preserves primary sequence data that may support reanalysis, repository submission, correction, validation or future questions.",
              "Retention strategy, archive location, access route, accession linkage, integrity check, and whether data can be regenerated.",
              "The sources support keeping a retention strategy, but not a universal retention period.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "aphl-ngs-implementation-2016",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Processed outputs and intermediate files",
              "Includes assemblies, consensus genomes, alignments, variant calls, trees, tables and other workflow outputs.",
              "Which outputs are reportable, which are reproducible from raw data, which are shared, and which are discarded after review.",
              "Do not keep every intermediate file by default unless there is a defined audit, validation or reanalysis reason.",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Reports, QC records and workflow logs",
              "Supports audit, correction, user communication, quality review, method change review and interpretation of previous results.",
              "Report identifier, workflow and database versions, QC status, correction history, access owner, and retention or archive decision.",
              "Reports and QC records may be more important for audit than large temporary analysis files.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "clinical-microbiology-implementation-2026",
              "pha4ge-infrastructure",
            ],
          },
          {
            cells: [
              "Repository and sharing records",
              "Links local records to public, controlled-access or partner-platform submissions.",
              "Accession or platform ID, upload date, release state, correction or replacement date, withdrawal route, and responsible local owner.",
              "Repository release does not remove the need for local accession tracking and correction history.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Backup copies",
              "Provides recovery after failure, corruption, misconfiguration, accidental deletion or compromise.",
              "What is backed up, where copies are held, version history, schedule, automation, alerts, restore test, and who owns recovery.",
              "Backup is a recovery process, not simply another copy or a substitute for archive policy.",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-national-genomic-surveillance-strategy-2023"],
          },
          {
            cells: [
              "Deletion, expiry or restricted retention",
              "Controls data that should not be kept indefinitely or should be held under special access rules.",
              "Legal or policy basis, data type, owner, deletion approval, deletion log, exception route and effect on reports or accessions.",
              "Deletion rules, retention periods, RTO and RPO need local legal, public-health and institutional review.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "pha4ge-infrastructure",
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "who-genomics-costing-tool-manual-2024",
          "who-genomic-data-sharing-platforms-2025",
          "clinical-microbiology-implementation-2026",
        ],
      },
      {
        title: "Setting local retention and recovery targets",
        summary:
          "Use this worksheet before assigning retention periods, restore-time targets or deletion rules. The beta guide supports the decision structure, not jurisdiction-specific values.",
        columns: ["Decision field", "What to record", "Why it changes the target", "Beta caution"],
        rows: [
          {
            cells: [
              "Data category and service use",
              "Whether the item is raw data, processed output, report, QC record, workflow log, repository record, dashboard extract, backup copy or archive record; and which public-health product depends on it.",
              "A report used for public-health action, an accessioned raw-read record and a temporary intermediate file do not need the same retention or restore rule.",
              "Do not set one retention rule for the whole genomics folder.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "pha4ge-infrastructure",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Regeneration and audit need",
              "Whether the item can be regenerated from retained inputs, whether regeneration would reproduce the same result, and whether it is needed for audit, correction, validation, legal review or later reanalysis.",
              "Files that are cheap to regenerate can have different rules from primary data, released reports, QC records or versioned interpretation outputs.",
              "A reproducible workflow still needs the original inputs, versions, parameters and reference data if old results may be reinterpreted.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "clinical-microbiology-implementation-2026",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Criticality and restore priority",
              "Which service stops if the data are unavailable, the maximum tolerable interruption, the maximum tolerable data loss, and who decides priority during recovery.",
              "Backup policy should follow data criticality; a repository-submission log and an active outbreak workspace may need different recovery priority.",
              "The current source base supports recording recovery questions, but not universal RTO or RPO values.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "pha4ge-infrastructure"],
          },
          {
            cells: [
              "Location, access and security",
              "Where the primary copy, archive and backups are held; who can access them; whether data are local, cloud or platform-hosted; and which sensitive fields are restricted.",
              "Storage, backup and archive choices also determine who can access data, who can restore it, and which data-residency or governance rules apply.",
              "Public repository release does not remove local responsibility for sensitive metadata, accession linkage or correction history.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
              "aphl-ngs-implementation-2016",
            ],
          },
          {
            cells: [
              "Backup schedule and restore test",
              "Backup frequency, version history, automation, alerting, failure review, restore-test schedule, restore-test result and recovery owner.",
              "A backup that is not monitored or tested may not protect the service when storage fails, files are deleted, or data are corrupted.",
              "This is a beta recovery checklist, not a formal disaster-recovery or business-continuity runbook.",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-national-genomic-surveillance-strategy-2023"],
          },
          {
            cells: [
              "Deletion, expiry and exception route",
              "Retention period selected locally, legal or policy basis, deletion authority, deletion log, exception or legal-hold route, and effect on reports, accessions and reanalysis.",
              "Some data may need restricted retention or deletion; other records may need to remain linked to released reports and repository accessions.",
              "Numeric retention periods and deletion rules need local legal, public-health, institutional and repository review.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "pha4ge-infrastructure",
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "who-genomic-data-sharing-platforms-2025",
          "clinical-microbiology-implementation-2026",
        ],
      },
    ],
    audiences: ["it-security", "bioinformatician", "data-manager", "lab-lead"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["storage", "backup", "archive", "retention"],
    detailLevel: "technical",
    sourceIds: [
      "pha4ge-infrastructure",
      "phe-case-study",
      "who-national-genomic-surveillance-strategy-2023",
      "who-genomic-data-sharing-platforms-2025",
      "aphl-ngs-implementation-2016",
      "who-genomics-costing-tool-manual-2024",
      "clinical-microbiology-implementation-2026",
    ],
    gaps: [
      "The beta retention and recovery worksheet still needs local legal, public-health, institutional, repository and business-continuity review before numeric retention periods, restore-time targets, restore-point targets or deletion rules can be prescribed.",
      "The PHA4GE disaster-recovery note and local business-continuity sources still need editorial review before the guide can support a formal recovery runbook.",
    ],
  },
  {
    id: "infrastructure-operating-model",
    title: "Define the service operating model",
    summary:
      "Infrastructure choices define who is responsible for workflows, data movement, access, monitoring, support, and recovery when the service fails.",
    sourceStatus: "reviewed",
    body: [
      "The PHA4GE infrastructure framing asks five questions: what the infrastructure solves, how analysis is run, where analysis is run, how data flow, and who has access. These questions separate responsibility from technology.",
      "A programme can use local servers, institutional HPC, cloud platforms, laptops, or a managed service. The central implementation question is who operates each layer, who validates analysis, who supports users, and who carries the risk when service delivery fails.",
      "The PHE case study shows why this matters in practice. Implementing WGS required capital planning, laboratory-space changes, sequencing and robotics capacity, IT infrastructure, LIMS integration, bioinformatics pipelines, validation, accreditation, training, and service-user engagement. None of those requirements is captured by a server specification alone.",
      "The Microbial Genomics implementation papers reinforce the same point from public-health practice: California COVIDNet paired cloud-based bioinformatics with more than 40 sequencing laboratories, open-source workflows, training, and automated data transfer; the bioinformatics implementation paper argues for standardized, reproducible, validated, auditable, scalable, portable, and secure analysis within laboratory operating constraints.",
      "A useful operating model names the service owner, laboratory owner, bioinformatics owner, IT owner, data-governance owner, and user-support route. It should also make clear which responsibilities are delegated to institutional IT, external providers, national platforms, or managed services, and what happens when a sample, run, workflow, network connection, repository submission, or report fails.",
      "The recurrent responsibilities matter as much as the initial platform choice. The service needs owners for workflow execution, storage growth, data movement, access management, software updates, infrastructure maintenance, recovery testing, user support, and recurrent costs. Without those owners, a sequencing service can appear technically functional while depending on unbudgeted labour or undocumented local knowledge.",
    ],
    bodySourceIds: {
      0: ["pha4ge-infrastructure"],
      1: ["pha4ge-infrastructure"],
      2: ["phe-case-study"],
      3: ["mgen-california-covidnet-2023", "mgen-accelerating-bioinformatics-implementation-2023"],
      4: ["pha4ge-infrastructure", "phe-case-study", "mgen-accelerating-bioinformatics-implementation-2023"],
      5: ["pha4ge-infrastructure", "phe-case-study", "who-genomics-costing-tool-manual-2024"],
    },
    technicalDetail: [
      "Use the SaaS/PaaS/IaaS framing as a responsibility model, not as a simple cloud label. A cloud system can leave substantial responsibility with the laboratory, while an on-premises service can hide much of the complexity from end users.",
      "Minimum responsibility table: workflow owner, storage owner, access owner, validation owner, report owner, user-support owner, backup/recovery owner, cybersecurity owner, procurement owner, and recurrent-budget owner.",
    ],
    audiences: ["director", "lab-lead", "bioinformatician", "it-security", "data-manager", "funder"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["infrastructure", "operating-model", "procurement"],
    detailLevel: "operational",
    sourceIds: [
      "pha4ge-infrastructure",
      "phe-case-study",
      "who-genomics-costing-tool-manual-2024",
      "mgen-california-covidnet-2023",
      "mgen-accelerating-bioinformatics-implementation-2023",
    ],
  },
  {
    id: "avoid-one-size-fits-all-cloud",
    title: "Avoid one-size-fits-all infrastructure choices",
    summary:
      "Cloud, HPC, managed platforms, and local workflows all solve different problems and create different dependencies.",
    sourceStatus: "reviewed",
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
    id: "sharing-is-not-unconditional",
    title: "Plan data sharing as a governed decision",
    summary:
      "Data sharing has public-health value, but openness needs to be balanced with confidentiality, risk, and purpose.",
    sourceStatus: "partial",
    body: [
      "Armstrong et al. describe public-health agencies sharing pathogen sequence data through NCBI-hosted databases, ReSeqTB, and GISAID. They also state that openness cannot be complete and unconditional because agencies must consider confidentiality and risk.",
      "Programmes need to decide what data should be shared, with whom, at what stage, through which repository or platform, under what access model, and with what metadata.",
      "Operational sharing and public or controlled repository release should be treated as different decisions. Operational sharing may involve laboratories, epidemiologists, collaborators, national services, or platform workspaces. Repository release may support international comparison, outbreak detection, research, and method development.",
      "WHO's 2022 data-sharing principles frame pathogen genome data sharing as a public-health activity that should be timely, ethical, equitable, efficient, and effective. WHO's national strategy support tool adds that countries should define a national pathogen genome data-sharing policy and may use a national database to centralise sequencing data and metadata while integrating with public sequence databases.",
      "WHO's 2025 platform guidance gives concrete selection dimensions: governance, transparency, infrastructure and security, data scope, submission options, curation, access, provenance, interoperability, data use and benefit sharing, analytical and reporting capabilities, and sustainability. It also distinguishes access options such as anonymous access, user accounts, vetted users, restricted access, closed access, and restrictions by data type or platform function.",
      "The practical design is a route map. Decide what is shared for operations, what is stored in a national service, what is submitted to a public repository, what needs controlled access, and what is held back because the metadata or legal context is not ready. For each route, define timing, metadata, access, licence or terms of use, attribution, user responsibilities, withdrawal or correction process, and who answers questions from data users.",
      "A useful decision pathway is: purpose, data type, minimum metadata, sensitive metadata, quality status, access model, platform or repository, timing, accession or persistent identifier, correction route, withdrawal route, and local owner. ECDC supports the sensitive-metadata distinction by separating non-confidential minimum datasets for public databases from clinical and epidemiological data restricted to competent authorities.",
      "Repository submission is also a data-management event. WHO's SARS-CoV-2 guide distinguishes consensus genomes, partial genomes and raw reads, and notes that platforms differ in data type, use conditions and metadata-upload mechanisms. APHL gives a concrete NCBI example: raw reads and limited metadata can be submitted after quality checks, and BioSample and SRA accession numbers then need to be tracked in the local database.",
      "PHA4GE's examples show that sharing can be implemented through local files, HPC-mediated access, cloud object storage, platform workspaces, Galaxy histories, IRIDA-like projects, or public repositories. The appropriate route depends on purpose, sensitivity, identity management, connectivity, and governance.",
      "National implementation examples point in the same direction. UKHSA treats data, analytics, transparency, and partnership as part of pathogen genomics strategy. The Australian framework and AusPathoGen source cards both emphasise collaboration, public-health system integration, data integration, and data-sharing or ethics agreements. Those sources support the principle that data sharing should be planned as a service and governance function, not left to individual upload habits.",
    ],
    bodySourceIds: {
      0: ["cdc-nejm-2019"],
      1: ["who-pathogen-genome-data-sharing-2022", "who-genomic-data-sharing-platforms-2025"],
      2: ["cdc-nejm-2019", "who-genomic-data-sharing-platforms-2025", "pha4ge-infrastructure"],
      3: ["who-pathogen-genome-data-sharing-2022", "who-national-genomic-surveillance-strategy-2023"],
      4: ["who-genomic-data-sharing-platforms-2025"],
      5: ["who-genomic-data-sharing-platforms-2025", "who-pathogen-genome-data-sharing-2022"],
      6: ["ecdc-wgs-surveillance-2016", "who-genomic-data-sharing-platforms-2025"],
      7: ["who-sars-cov-2-sequencing-implementation-2021", "aphl-ngs-implementation-2016"],
      8: ["pha4ge-infrastructure"],
      9: [
        "ukhsa-pathogen-genomics-strategy-2024",
        "australia-microbial-genomics-framework-2025",
        "auspathogen-implementation-2025",
      ],
    },
    bodyCitationAnchors: {
      5: [
        {
          text: "For each route, define timing, metadata, access, licence or terms of use, attribution, user responsibilities, withdrawal or correction process, and who answers questions from data users.",
          sourceIds: [
            "who-pathogen-genome-data-sharing-2022",
            "who-genomic-data-sharing-platforms-2025",
            "who-national-genomic-surveillance-strategy-2023",
          ],
        },
      ],
    },
    technicalDetail: [
      "Minimum route map: internal operational sharing, national surveillance database, public repository, controlled-access platform, partner workspace, and retained-but-not-shared data.",
      "For each route, record purpose, data types, minimum metadata, QC requirement, timing, access model, licence or terms of use, attribution, submitter contact, accession or persistent identifier, correction route, withdrawal route, and local owner.",
      "Minimum decision sequence: purpose, data type, public metadata, restricted metadata, quality status, access model, platform, timing, accession or identifier, correction route, withdrawal route, data-use expectations, and support contact.",
    ],
    tables: [
      {
        title: "Beta data-sharing decision table",
        summary:
          "Use this route map before data leave the programme or move into a shared platform, national database or public repository.",
        columns: ["Decision point", "What to record", "Why it matters", "Source-backed caution"],
        rows: [
          {
            cells: [
              "Purpose and route",
              "Operational sharing, national surveillance database, public repository, controlled-access platform, partner workspace, or retained-but-not-shared data.",
              "Different routes support different users, timelines, access rules and public-health purposes.",
              "Do not treat all sharing as a single upload step.",
            ],
            sourceIds: [
              "who-pathogen-genome-data-sharing-2022",
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Data type",
              "Consensus genome, partial genome, raw reads, analysis output, report, metadata record, dashboard, or accession record.",
              "Platforms and repositories differ in accepted data types, upload mechanisms and intended downstream use.",
              "Raw-read sharing can be operationally hard where connectivity, storage or upload capacity is limited.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "pha4ge-infrastructure"],
          },
          {
            cells: [
              "Minimum metadata",
              "Collection date and location where appropriate, sample or isolate source, host or setting, sampling strategy, sequencing strategy, bioinformatics method and attribution.",
              "Metadata make shared sequence data interpretable and reusable.",
              "Repository-specific field templates still need direct extraction before prescribing exact fields.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Sensitive metadata",
              "Clinical, epidemiological, personal, precise geographic, commercial, legal, or privileged data that should not travel with the public record.",
              "Sensitive metadata may still be needed for public-health action, but it may require restricted access.",
              "ECDC separates public non-confidential minimum datasets from sensitive data restricted to competent authorities.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Quality status",
              "QC status, completeness, limitations, annotation method, and whether the result is final, partial, corrected, or superseded.",
              "Users need to know whether a shared record is fit for their purpose.",
              "Low-quality or incomplete data may still have value if QC methods and limitations are visible.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Access model",
              "Anonymous access, registered user, vetted user, restricted access, closed access, project workspace, or restriction by data type or platform function.",
              "Access controls should match purpose, sensitivity, governance and trust requirements.",
              "Openness has public-health value, but it is not unconditional where confidentiality or risk applies.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "cdc-nejm-2019"],
          },
          {
            cells: [
              "Identifiers and accessions",
              "Local sample or isolate ID, project or platform ID, BioSample ID, raw-read accession, consensus accession if used, upload date, replacement date and status.",
              "Accession tracking connects repository records back to local reports, corrections and later reuse.",
              "APHL gives an NCBI tracking example, not a universal accession schema.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Terms, correction and owner",
              "Licence or terms of use, attribution, benefit-sharing expectations, user responsibilities, correction route, withdrawal route and accountable local owner.",
              "Shared data need stewardship after release, especially when records are corrected, superseded, withdrawn or questioned by downstream users.",
              "Local legal, ethical, privacy, data-residency and benefit-sharing review remains required.",
            ],
            sourceIds: ["who-pathogen-genome-data-sharing-2022", "who-genomic-data-sharing-platforms-2025"],
          },
        ],
        sourceIds: [
          "who-pathogen-genome-data-sharing-2022",
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "ecdc-wgs-surveillance-2016",
          "who-sars-cov-2-sequencing-implementation-2021",
          "aphl-ngs-implementation-2016",
          "cdc-nejm-2019",
          "pha4ge-infrastructure",
        ],
      },
      {
        title: "Governance review before sharing",
        summary:
          "Use this checklist to prepare a sharing decision for local governance review. It does not replace legal, ethical, privacy, data-residency or repository-specific approval.",
        columns: ["Review area", "What to record", "Why it matters", "Beta caution"],
        rows: [
          {
            cells: [
              "Public-health purpose and route",
              "Why the data are being shared, who needs them, whether the route is operational, national, public repository, controlled-access platform, partner workspace, or retained locally.",
              "WHO sources frame sharing as a public-health activity; the route should match the purpose and user group.",
              "A useful public-health purpose does not automatically justify every data type or metadata field being released.",
            ],
            sourceIds: [
              "who-pathogen-genome-data-sharing-2022",
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Sensitive data and minimum metadata",
              "Which fields are public minimum metadata, which are restricted contextual metadata, and which should be withheld or shared only with competent authorities or approved users.",
              "Richer metadata can improve interpretation, but may require stricter access policies.",
              "ECDC supports separating non-confidential public metadata from sensitive clinical or epidemiological data; local law still decides the boundary.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Access, accounts and user responsibilities",
              "Access model, user vetting, account requirements, project workspace rules, role restrictions, permitted uses, support contact and audit or review route.",
              "WHO platform guidance treats access, governance, transparency and user responsibilities as platform attributes.",
              "Anonymous, registered, vetted, restricted and closed access are different governance choices, not just technical settings.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "pha4ge-infrastructure"],
          },
          {
            cells: [
              "Terms, attribution and benefit sharing",
              "Licence or terms of use, attribution or acknowledgement, contributor recognition, benefit-sharing expectations, publication expectations and downstream-use limits.",
              "WHO's data-sharing principles link timely sharing to equity, trust, capacity development and equitable access to benefits.",
              "Benefit-sharing and attribution expectations need to be visible before data are reused by others.",
            ],
            sourceIds: ["who-pathogen-genome-data-sharing-2022", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Data residency, platform location and partner agreements",
              "Where data and backups are hosted, whether cloud or external platforms are allowed, partner responsibilities, data-transfer route and agreement owner.",
              "Platform or repository choice can change legal, security, procurement and trust obligations.",
              "The beta guide cannot determine jurisdiction-specific residency, cross-border transfer or procurement rules.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "auspathogen-implementation-2025",
              "australia-microbial-genomics-framework-2025",
            ],
          },
          {
            cells: [
              "Correction, replacement and withdrawal",
              "Who can correct a record, replace a sequence, update metadata, withdraw or restrict data, notify users, and maintain links to reports and accessions.",
              "Shared records remain part of the service after release, especially when QC status, metadata or interpretation changes.",
              "Repository submission is not the end of stewardship; correction and withdrawal routes need named owners.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "aphl-ngs-implementation-2016",
              "who-sars-cov-2-sequencing-implementation-2021",
            ],
          },
        ],
        sourceIds: [
          "who-pathogen-genome-data-sharing-2022",
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "ecdc-wgs-surveillance-2016",
          "who-sars-cov-2-sequencing-implementation-2021",
          "aphl-ngs-implementation-2016",
          "cdc-nejm-2019",
          "pha4ge-infrastructure",
          "auspathogen-implementation-2025",
          "australia-microbial-genomics-framework-2025",
        ],
      },
    ],
    audiences: ["policy", "director", "data-manager", "it-security", "lab-lead"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["data-sharing", "governance", "repositories"],
    detailLevel: "governance",
    sourceIds: [
      "cdc-nejm-2019",
      "who-pathogen-genome-data-sharing-2022",
      "who-genomic-data-sharing-platforms-2025",
      "who-sars-cov-2-sequencing-implementation-2021",
      "ecdc-wgs-surveillance-2016",
      "aphl-ngs-implementation-2016",
      "phe-case-study",
      "pha4ge-infrastructure",
      "ukhsa-pathogen-genomics-strategy-2024",
      "australia-microbial-genomics-framework-2025",
      "auspathogen-implementation-2025",
    ],
    gaps: [
      "Current INSDC/NCBI, GISAID and organism-specific repository templates still need direct extraction before the guide can prescribe repository-specific submission fields.",
      "The beta governance review checklist still needs checking against jurisdiction-specific legal, ethical, privacy, data-residency, procurement, cross-border transfer and benefit-sharing requirements.",
    ],
  },
  {
    id: "iam-is-continuous",
    title: "Treat identity and access as ongoing operations",
    summary:
      "Access control is not a one-time setup. Users, roles, collaborations, and risks change over time.",
    sourceStatus: "reviewed",
    body: [
      "The PHA4GE source frames identity and access management as a continuous responsibility: provisioning, authentication, authorisation, role assignment, access review, offboarding, monitoring, and auditability.",
      "Genomics programmes often need coordination between the laboratory, central IT, external providers, cybersecurity, and information governance.",
      "Access design should follow the service model. A national service, a local analysis team, a research collaboration, and a managed platform do not need the same user roles or the same access-review process. The common requirement is that access can be granted, reviewed, changed, and removed deliberately.",
      "This is especially important where users move between projects, external collaborators are added, or data are shared across organisations. WHO's platform principles also treat governance, access, cybersecurity policy, provenance, resilience, archiving, and sustainability as platform attributes rather than afterthoughts. Offboarding, audit logs, and incident responsibilities should be planned before the service depends on them.",
    ],
    bodySourceIds: {
      0: ["pha4ge-infrastructure"],
      1: ["pha4ge-infrastructure", "who-genomic-data-sharing-platforms-2025"],
      2: ["pha4ge-infrastructure", "who-genomic-data-sharing-platforms-2025"],
      3: ["who-genomic-data-sharing-platforms-2025", "pha4ge-infrastructure"],
    },
    audiences: ["it-security", "director", "policy", "data-manager", "lab-lead"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["iam", "governance", "security"],
    detailLevel: "governance",
    sourceIds: ["pha4ge-infrastructure", "who-genomic-data-sharing-platforms-2025", "cdc-nejm-2019", "phe-case-study"],
  },
  {
    id: "reporting-decision-use",
    title: "Report results for decisions, not only for analysis completion",
    summary:
      "A genomics service should define who receives results, how uncertainty is communicated, and what action the result can support.",
    sourceStatus: "partial",
    body: [
      "The end point of a public-health genomics workflow is not a tree, lineage call, resistance gene table, or FASTQ archive. The end point is an interpreted result that a laboratory, epidemiology team, incident manager, clinician, or policy lead can use appropriately.",
      "The WHO national strategy support tool asks countries to define data users, how those users will analyse or use genomic surveillance data, and the intended outcomes. The PHE case study shows this in service form: sequence-analysis outputs were combined with LIMS data to produce reports, and implementation required engagement with users of the service.",
      "Reporting therefore needs explicit boundaries. A report should make clear what was analysed, which method or workflow version was used, what quality limits apply, what the result can support, and what it cannot prove without epidemiological or clinical context.",
      "The WHO SARS-CoV-2 implementation guide is useful because it treats reporting as part of stakeholder communication. It recommends clear written reports, discussion of analytical limitations in everyday language, opportunities for discussion, and structured feedback about what was useful, missing, or influential. That is the service rhythm this guide should preserve across pathogens.",
      "ECDC makes the same point from a surveillance perspective. It says visualisation and plain-language reporting should be agreed for each disease or pathogen according to surveillance objectives, and it separates two broad output types: inference about transmission linkage and prediction of clinically or epidemiologically relevant phenotypes.",
      "Clinical microbiology implementation adds a further caution: diagnostic or hospital-facing genomics can carry tighter reporting expectations, direct patient-care implications, regulatory obligations, and interpretive uncertainty. A public-health guide should therefore avoid a single universal report template; it should separate outbreak, surveillance, AMR, hospital infection-control, and clinical diagnostic reporting needs.",
      "The UK Delphi study directly supports this decision-use framing by developing expert consensus on how pathogen genomic information should be used in health-protection policy, planning, and practice. Other collection papers show why the receiving context matters: centre-specific typing can affect infection-control decisions, regional SARS-CoV-2 sequencing can support local outbreak management, genomic surveillance can guide intervention in MDR critical-care outbreaks, and organism-specific surveillance can support influenza, typhoidal Salmonella, gonorrhoea AMR, foodborne Salmonella source attribution, and rapid AMR outbreak investigation.",
      "For a beta guidance product, this section can safely set the reporting principle and give source-backed examples. A more detailed reporting template still needs extraction from laboratory-quality, pathogen-specific, or national reporting sources before the guide can prescribe report wording or uncertainty categories.",
    ],
    bodySourceIds: {
      0: ["cdc-nejm-2019", "who-national-genomic-surveillance-strategy-2023"],
      1: ["who-national-genomic-surveillance-strategy-2023", "phe-case-study"],
      2: ["phe-case-study", "who-national-genomic-surveillance-strategy-2023"],
      3: ["who-sars-cov-2-sequencing-implementation-2021"],
      4: ["ecdc-wgs-surveillance-2016"],
      5: ["clinical-microbiology-implementation-2026"],
      6: [
        "mgen-uk-delphi-health-protection-2023",
        "mgen-centre-specific-typing-ipc-2021",
        "mgen-local-sarscov2-large-scale-2020",
        "mgen-polymicrobial-mdr-critical-care-2021",
        "mgen-belgian-influenza-phylogenomics-2021",
        "mgen-salmonella-typhi-paratyphi-england-2021",
        "mgen-gonorrhoea-wgs-amr-genogroups-2021",
        "mgen-shotgun-metagenomics-salmonella-food-2021",
        "mgen-rapid-nanopore-amr-outbreak-2021",
      ],
      7: ["phe-case-study", "clinical-microbiology-implementation-2026", "mgen-uk-delphi-health-protection-2023"],
    },
    tables: [
      {
        title: "Beta reporting decision checklist",
        summary:
          "Use this checklist to make reports usable for public-health decisions. It does not prescribe pathogen-specific wording.",
        columns: ["Report component", "What to state", "Why it matters", "Source-backed caution"],
        rows: [
          {
            cells: [
              "User and decision",
              "Who receives the result, what public-health or clinical question it addresses, and what decision or discussion it can support.",
              "The useful product is an interpreted result for a defined user, not analysis completion alone.",
              "WHO strategy guidance starts from users, intended outcomes and public-health action.",
            ],
            sourceIds: ["who-national-genomic-surveillance-strategy-2023", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Sample and comparison context",
              "Sample or isolate ID, collection timeframe, sampling route, comparison set, missing samples and relevant metadata limits.",
              "A cluster, lineage or resistance result can only answer the question supported by the samples and metadata.",
              "Genomic interpretation still needs epidemiological, laboratory and sampling context.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "cdc-nejm-2019", "phe-case-study"],
          },
          {
            cells: [
              "Method and version",
              "Workflow, database, nomenclature, rule set, report-template version and date of interpretation.",
              "Version records allow later review, correction, reanalysis and interpretation after methods change.",
              "Workflow and database changes can affect reportable outputs.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "who-genomic-data-sharing-platforms-2025"],
          },
          {
            cells: [
              "Quality and uncertainty",
              "QC status, completeness, limitations, uncertainty, whether a result is partial, and whether expert review or repeat testing is needed.",
              "Users need to know whether the result is fit for the intended decision.",
              "Low-quality or incomplete data may still be useful if QC methods and limits are visible.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "who-sars-cov-2-sequencing-implementation-2021",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Output type",
              "Whether the report is about transmission linkage, lineage or variant surveillance, genotype-to-phenotype prediction, source attribution, infection-control support, or another use.",
              "Different output types have different evidence needs and action boundaries.",
              "ECDC separates transmission-linkage outputs from phenotype-prediction outputs.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "cdc-nejm-2019"],
          },
          {
            cells: [
              "Action boundary",
              "What the result can support, what it cannot prove, what follow-up is pending, and who owns the next action.",
              "This prevents a sequence result from being interpreted as an automatic intervention instruction.",
              "Hospital-facing or clinical reports may have tighter regulatory, quality and interpretive obligations.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Sharing and feedback route",
              "Who else should receive the result, whether repository or platform submission is needed, how corrections are handled, and how user feedback is captured.",
              "Reporting should be connected to data sharing, correction history and service improvement.",
              "WHO SARS-CoV-2 guidance explicitly links reporting to stakeholder discussion and feedback.",
            ],
            sourceIds: [
              "who-sars-cov-2-sequencing-implementation-2021",
              "who-national-genomic-surveillance-strategy-2023",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "who-sars-cov-2-sequencing-implementation-2021",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "cdc-nejm-2019",
        ],
      },
      {
        title: "Making limitations and uncertainty visible",
        summary:
          "Use this checklist to make report limitations usable for non-specialist decision makers. It does not prescribe final wording or pathogen-specific uncertainty categories.",
        columns: ["Limitation to surface", "What to state", "Why it matters", "Beta caution"],
        rows: [
          {
            cells: [
              "Sampling and comparison limits",
              "What was sampled, what was not sampled, the timeframe, comparison set, sampling strategy, missing samples and missing metadata.",
              "Relatedness, lineage or source-attribution signals depend on the samples and metadata available for comparison.",
              "Do not imply that unsampled cases, locations, sources or time periods have been ruled out.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "cdc-nejm-2019", "who-national-genomic-surveillance-strategy-2023"],
          },
          {
            cells: [
              "Data quality and completeness",
              "QC status, genome completeness, partial or low-quality result status, contamination or mixture concerns, and whether repeat testing or expert review is pending.",
              "Low-quality or incomplete data can still be useful, but only if users can judge fitness for their decision.",
              "The beta guide does not yet prescribe organism-specific QC cut-offs.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Method, version and evidence basis",
              "Workflow, database, rule set, version, date of interpretation, validation basis, and whether the output is transmission linkage, phenotype prediction, lineage surveillance or another product.",
              "Method and database changes can change reportable outputs; output type determines how the evidence should be interpreted.",
              "A validated linkage workflow does not automatically validate genotype-to-phenotype inference or clinical interpretation.",
            ],
            sourceIds: [
              "ecdc-wgs-surveillance-2016",
              "clinical-microbiology-implementation-2026",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Interpretation boundary",
              "What the result supports, what it cannot prove alone, which epidemiological or clinical context is still needed, and what follow-up is recommended.",
              "Genomic findings should inform public-health judgement rather than substitute for sampling strategy, epidemiology, laboratory quality or local context.",
              "Avoid turning relatedness, lineage or resistance-marker outputs into automatic action instructions.",
            ],
            sourceIds: [
              "who-sars-cov-2-sequencing-implementation-2021",
              "clinical-microbiology-implementation-2026",
              "cdc-nejm-2019",
            ],
          },
          {
            cells: [
              "Communication and feedback",
              "Plain-language limitations, whether verbal discussion is needed, feedback route, correction route, and who can answer questions after release.",
              "WHO SARS-CoV-2 guidance links clear written reports, discussion of analytical limitations and structured feedback to useful public-health reporting.",
              "The current beta checklist supports report components, not final report wording or legal sign-off.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "phe-case-study"],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "who-sars-cov-2-sequencing-implementation-2021",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "cdc-nejm-2019",
        ],
      },
      {
        title: "Organism-specific interpretation guardrails",
        summary:
          "Use this table to keep genomic signals tied to the evidence needed for action. It does not set thresholds or prescribe report wording.",
        columns: ["Use case", "Genomic result may support", "Do not claim from genomics alone", "Extra evidence or review needed"],
        rows: [
          {
            cells: [
              "Enteric bacteria and foodborne investigations",
              "Cluster inclusion or exclusion, geographically dispersed outbreak detection, source-investigation focus, AMR or virulence surveillance where validated.",
              "A common source, exposure route, food-chain attribution, or control action without epidemiological, food, animal, environmental, and sampling context.",
              "Exposure or traceback data, sampling frame, comparison set, investigation identifier, AMR or virulence validation basis, recipient and action route.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Respiratory-virus surveillance",
              "Lineage or variant monitoring, local outbreak support, selection of specimens for phenotyping, vaccine or risk-assessment discussions.",
              "Population prevalence, transmission source, vaccine impact, immune escape, or severity change without representative sampling, metadata, phenotyping, epidemiology, or expert review.",
              "Collection date and place, sampling frame, genome quality, nomenclature/tool version, repository status, phenotyping or risk-assessment route, and correction history.",
            ],
            sourceIds: [
              "who-sars-cov-2-sequencing-implementation-2021",
              "cdc-nejm-2019",
              "mgen-belgian-influenza-phylogenomics-2021",
            ],
          },
          {
            cells: [
              "TB and AMR",
              "Transmission investigation, outbreak refutation or support, resistance-marker surveillance, genotype-to-phenotype inference where the evidence base is adequate.",
              "Direct transmission, clinical treatment choice, or final susceptibility status without sampling context, validation evidence, database quality, and follow-up testing policy.",
              "Comparison set, distance or cluster rule, resistance database and version, validation basis, phenotype confirmation status, and clinical or public-health action boundary.",
            ],
            sourceIds: ["cdc-nejm-2019", "ecdc-wgs-surveillance-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Healthcare-associated infection and infection control",
              "Whether cases are plausibly linked, whether an investigation should continue, where extra sampling may be useful, or whether genomic evidence weakens a suspected link.",
              "Ward transmission, environmental source, or intervention requirement without patient-movement, ward, exposure, environmental, and infection-control context.",
              "Recipient route, comparison set, relatedness statement, uncertainty, verbal discussion route, action boundary, follow-up sampling, and feedback from infection-control users.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "mgen-centre-specific-typing-ipc-2021",
              "mgen-polymicrobial-mdr-critical-care-2021",
            ],
          },
        ],
        sourceIds: [
          "ecdc-wgs-surveillance-2016",
          "cdc-nejm-2019",
          "phe-case-study",
          "foodborne-genomics-allard-2018",
          "who-sars-cov-2-sequencing-implementation-2021",
          "clinical-microbiology-implementation-2026",
        ],
      },
      {
        title: "Before turning beta fields into pathogen-specific report templates",
        summary:
          "Use this review table before prescribing exact report wording, thresholds or uncertainty categories for a specific organism or programme.",
        columns: ["Template area", "What source material is needed", "Why it matters", "Current beta position"],
        rows: [
          {
            cells: [
              "Enteric bacteria",
              "Current Salmonella, STEC, Listeria and other enteric report examples; cluster interpretation rules; source-attribution language; One Health recipient routes; AMR or virulence marker wording.",
              "Enteric reports often support multi-agency outbreak and source investigations, not only sample-level relatedness statements.",
              "The beta guide can require sample, cluster, exposure/source, marker, recipient and action fields, but not final organism-specific wording or thresholds.",
            ],
            sourceIds: [
              "phe-case-study",
              "foodborne-genomics-allard-2018",
              "mgen-salmonella-typhi-paratyphi-england-2021",
              "mgen-shotgun-metagenomics-salmonella-food-2021",
            ],
          },
          {
            cells: [
              "Respiratory viruses",
              "Current lineage or clade nomenclature rules; genome-completeness thresholds; repository or platform field requirements; variant-risk or vaccine-assessment reporting examples.",
              "A lineage or variant call is only useful when connected to sampling frame, collection time, data quality, repository status and any phenotyping or expert review still needed.",
              "The beta guide can require sampling, quality, lineage, sharing and correction fields, but not current influenza, RSV or SARS-CoV-2 nomenclature rules.",
            ],
            sourceIds: [
              "who-sars-cov-2-sequencing-implementation-2021",
              "cdc-nejm-2019",
              "mgen-belgian-influenza-phylogenomics-2021",
              "mgen-local-sarscov2-large-scale-2020",
            ],
          },
          {
            cells: [
              "TB and AMR",
              "Current resistance database guidance, genotype-phenotype validation sources, drug or organism-specific confidence rules, confirmatory-testing policy and report examples.",
              "Transmission inference and resistance inference have different evidence bases, and genotype-to-phenotype confidence varies by organism, drug, mechanism and workflow.",
              "The beta guide can require separate relatedness, resistance, validation, follow-up and action-boundary fields, but not treatment guidance or resistance-calling thresholds.",
            ],
            sourceIds: [
              "cdc-nejm-2019",
              "ecdc-wgs-surveillance-2016",
              "clinical-microbiology-implementation-2026",
              "mgen-discordant-amr-predictions-2020",
            ],
          },
          {
            cells: [
              "Healthcare-associated infection",
              "Local infection-control report examples, organism-specific relatedness interpretation, ward or exposure-context requirements, clinical governance routes and verbal-discussion expectations.",
              "Hospital-facing results may affect infection-control decisions and can carry tighter reporting, regulatory and interpretive obligations.",
              "The beta guide can require recipient, setting, comparison set, relatedness, uncertainty, action boundary and feedback fields, but not local clinical governance wording.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "mgen-centre-specific-typing-ipc-2021",
              "mgen-polymicrobial-mdr-critical-care-2021",
            ],
          },
          {
            cells: [
              "Cross-cutting report governance",
              "Laboratory-quality sign-off, national reporting requirements, correction policy, uncertainty language, data-sharing route, repository requirements and legal or privacy review.",
              "Report wording becomes part of a governed service once results support public-health, clinical, regulatory or cross-agency action.",
              "The beta guide can structure the review, but final wording and approval remain local or programme-specific.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "who-sars-cov-2-sequencing-implementation-2021",
              "clinical-microbiology-implementation-2026",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "who-sars-cov-2-sequencing-implementation-2021",
          "ecdc-wgs-surveillance-2016",
          "phe-case-study",
          "foodborne-genomics-allard-2018",
          "cdc-nejm-2019",
          "clinical-microbiology-implementation-2026",
          "who-genomic-data-sharing-platforms-2025",
          "mgen-salmonella-typhi-paratyphi-england-2021",
          "mgen-shotgun-metagenomics-salmonella-food-2021",
          "mgen-belgian-influenza-phylogenomics-2021",
          "mgen-local-sarscov2-large-scale-2020",
          "mgen-discordant-amr-predictions-2020",
          "mgen-centre-specific-typing-ipc-2021",
          "mgen-polymicrobial-mdr-critical-care-2021",
        ],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "all"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["reporting", "decision-use", "quality", "metadata"],
    detailLevel: "operational",
    sourceIds: [
      "cdc-nejm-2019",
      "who-national-genomic-surveillance-strategy-2023",
      "phe-case-study",
      "who-sars-cov-2-sequencing-implementation-2021",
      "ecdc-wgs-surveillance-2016",
      "clinical-microbiology-implementation-2026",
      "mgen-uk-delphi-health-protection-2023",
      "mgen-centre-specific-typing-ipc-2021",
      "mgen-local-sarscov2-large-scale-2020",
      "mgen-polymicrobial-mdr-critical-care-2021",
      "mgen-belgian-influenza-phylogenomics-2021",
      "mgen-salmonella-typhi-paratyphi-england-2021",
      "mgen-gonorrhoea-wgs-amr-genogroups-2021",
      "mgen-shotgun-metagenomics-salmonella-food-2021",
      "mgen-rapid-nanopore-amr-outbreak-2021",
      "who-genomic-data-sharing-platforms-2025",
    ],
    gaps: [
      "The beta report-template readiness review still needs current laboratory-quality, national reporting and pathogen-specific template sources before any section can prescribe final report wording.",
      "Detailed uncertainty categories and final wording still need full-text extraction and review from pathogen-specific, national reporting and laboratory-quality sources.",
    ],
  },
  {
    id: "reporting-enteric-bacteria",
    title: "For enteric bacteria, report the public-health route as well as the cluster",
    summary:
      "Enteric-bacterial genomics usually serves outbreak detection, source investigation, AMR monitoring, and One Health coordination.",
    sourceStatus: "partial",
    body: [
      "For enteric bacteria, the report often needs to travel beyond the sequencing laboratory. The PHE case study names health-protection teams, local authorities and environmental health officers, hospital and public-health microbiologists, food-safety agencies, animal-health agencies, and international public-health agencies as users of the WGS service.",
      "The practical reporting question is therefore not only whether isolates are genetically close. The service should decide which users need to know about a cluster, what epidemiological or food-chain information is needed to interpret it, whether AMR or virulence markers change the response, and whether an alert, case-level report, weekly summary, or cross-agency discussion is the right output.",
      "The PHE raw-milk STEC example shows why this matters. WGS linked cattle specimens and geographically dispersed human cases, prompted further questioning about exposure, and supported stopping distribution of the implicated product and issuing public-health messages.",
      "For beta, enteric reporting should separate the genomic finding from the investigation route. A cluster, source-attribution signal, AMR or virulence finding, food or environmental link, and public-health action should be recorded as connected but distinct fields, because each one depends on different supporting evidence.",
    ],
    bodySourceIds: {
      0: ["phe-case-study"],
      1: ["phe-case-study", "ecdc-wgs-surveillance-2016", "foodborne-genomics-allard-2018"],
      2: ["phe-case-study"],
      3: [
        "phe-case-study",
        "foodborne-genomics-allard-2018",
        "mgen-salmonella-typhi-paratyphi-england-2021",
        "mgen-shotgun-metagenomics-salmonella-food-2021",
      ],
    },
    technicalDetail: [
      "Minimum implementation check: keep a route from the sample identifier to the investigation identifier, exposure data, food or environmental sample links, cluster identifier, AMR or virulence results, report date, recipient list, and action log.",
      "Avoid presenting a genetic cluster as proof of a common source unless sampling context and epidemiological evidence support that interpretation.",
    ],
    tables: [
      {
        title: "Beta enteric-bacteria reporting fields",
        summary:
          "Use separate fields to connect genomic relatedness to exposure, food-chain, environmental and public-health action routes.",
        columns: ["Report field", "What to record", "Why it matters", "Main caution"],
        rows: [
          {
            cells: [
              "Sample and investigation identifiers",
              "Sample or isolate ID, submitting route, investigation or incident ID, organism, collection date and source.",
              "Connects the genomic result to the investigation, metadata and later corrective action.",
              "Broken identifiers weaken outbreak interpretation and source tracking.",
            ],
            sourceIds: ["phe-case-study", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Cluster or relatedness statement",
              "Method, comparison set, cluster identifier, interpretation date, workflow version and uncertainty.",
              "Supports case inclusion or exclusion, geographically dispersed outbreak detection and investigation focus.",
              "A cluster is not proof of common source without sampling and epidemiological context.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018"],
          },
          {
            cells: [
              "Exposure, food-chain or environmental links",
              "Food, animal, environmental or exposure data linked to the sample or investigation where available.",
              "Turns a genomic signal into an actionable source-investigation question.",
              "Absence of exposure data should be visible rather than hidden behind a genomic result.",
            ],
            sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018", "mgen-shotgun-metagenomics-salmonella-food-2021"],
          },
          {
            cells: [
              "AMR, virulence or threat markers",
              "Marker or rule set, tool/database version, validation basis, and whether confirmatory testing is needed.",
              "May change public-health follow-up, surveillance priority or communication route.",
              "Marker interpretation should not be merged with relatedness or source attribution without its own evidence basis.",
            ],
            sourceIds: ["foodborne-genomics-allard-2018", "mgen-salmonella-typhi-paratyphi-england-2021"],
          },
          {
            cells: [
              "Recipient and action log",
              "Health-protection, laboratory, food-safety, animal-health or international recipients; report date; action or feedback recorded.",
              "Keeps multi-agency reporting tied to the decisions it is meant to support.",
              "If no owner records the action, service value is difficult to evaluate.",
            ],
            sourceIds: ["phe-case-study"],
          },
        ],
        sourceIds: ["phe-case-study", "foodborne-genomics-allard-2018", "ecdc-wgs-surveillance-2016"],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "mixed"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["enteric-bacteria"],
    topics: ["reporting", "decision-use", "enteric-bacteria", "amr", "one-health"],
    detailLevel: "operational",
    sourceIds: [
      "phe-case-study",
      "ecdc-wgs-surveillance-2016",
      "foodborne-genomics-allard-2018",
      "mgen-salmonella-typhi-paratyphi-england-2021",
      "mgen-shotgun-metagenomics-salmonella-food-2021",
    ],
    gaps: [
      "Needs current pathogen-specific reporting templates, cluster interpretation rules and report wording for Salmonella, STEC, Listeria and other enteric organisms.",
    ],
  },
  {
    id: "reporting-respiratory-viruses",
    title: "For respiratory viruses, report variants with sampling context and limits",
    summary:
      "Virus genomic reports should connect lineage or variant findings to sampling, timing, metadata, public-health interpretation, and residual uncertainty.",
    sourceStatus: "partial",
    body: [
      "For SARS-CoV-2 and other respiratory viruses, WHO stresses that the expected outputs and required metadata should be defined before sequencing begins. Date and place of collection are minimum shared metadata, and sample type, travel, demographic, clinical and linkage information can widen what the sequence can support.",
      "A virus report should therefore avoid giving a lineage or variant call without context. It should state the sampling frame, whether the sequence is complete or partial, which quality limits apply, what the result may imply for surveillance or risk assessment, and what cannot be inferred from the available samples.",
      "Armstrong et al. describe influenza as a useful model for a sequence-first service. Sequencing can support selection of specimens for phenotypic characterisation, vaccine-strain decisions, forecasting and risk assessment, but it does not remove the need for selected phenotyping.",
      "The WHO SARS-CoV-2 guide also warns that raw-read sharing may be hard where upload speeds are limited or connections are intermittent. That constraint should affect the reporting and sharing plan: a programme may still share consensus or partial genomes quickly while using a separate plan for raw reads, quality notes and later correction.",
      "For beta, respiratory-virus reporting should keep variant or lineage calls connected to collection time, place, sampling frame, sequence completeness, quality status, sharing route, and whether selected phenotyping or later correction is needed. This prevents a lineage label being interpreted as more precise than the sampling and data quality allow.",
    ],
    bodySourceIds: {
      0: ["who-sars-cov-2-sequencing-implementation-2021"],
      1: ["who-sars-cov-2-sequencing-implementation-2021", "who-national-genomic-surveillance-strategy-2023"],
      2: ["cdc-nejm-2019"],
      3: ["who-sars-cov-2-sequencing-implementation-2021"],
      4: [
        "who-sars-cov-2-sequencing-implementation-2021",
        "cdc-nejm-2019",
        "mgen-belgian-influenza-phylogenomics-2021",
        "mgen-local-sarscov2-large-scale-2020",
      ],
    },
    technicalDetail: [
      "Minimum implementation check: track collection date, location, sample type, sequencing protocol, genome coverage, ambiguous-base proportion, lineage or clade tool and version, report date, repository accession status, and correction history.",
      "When a genome is partial, report whether it is suitable for the intended use rather than applying one universal pass/fail statement.",
    ],
    tables: [
      {
        title: "Beta respiratory-virus reporting fields",
        summary:
          "Use separate fields so lineage or variant labels remain tied to sampling, data quality and sharing constraints.",
        columns: ["Report field", "What to record", "Why it matters", "Main caution"],
        rows: [
          {
            cells: [
              "Sampling and metadata context",
              "Collection date, location at appropriate resolution, sample type, sampling route, travel or clinical context where permitted.",
              "Defines what the sequence can support for surveillance, variant monitoring or local outbreak interpretation.",
              "Date and place are minimum metadata; richer context may require confidentiality controls.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Genome completeness and quality",
              "Complete, partial or raw-read status; coverage or ambiguity measure; QC method; whether partial data are fit for the intended use.",
              "Prevents low-coverage or partial genomes being interpreted as equivalent to complete high-quality genomes.",
              "Partial genomes can still be useful when quality and intended use are made explicit.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Lineage, clade or variant call",
              "Tool or nomenclature version, call date, sequence used, uncertainty or failure to assign.",
              "Supports surveillance, risk assessment, outbreak management and selection of specimens for further work.",
              "Lineage labels should not be reported without sampling and quality context.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "cdc-nejm-2019"],
          },
          {
            cells: [
              "Phenotyping or risk-assessment follow-up",
              "Whether selected phenotyping, antigenic characterisation, vaccine-strain assessment or expert review is pending or needed.",
              "Keeps sequence-first surveillance connected to decisions that still need biological or epidemiological assessment.",
              "Sequencing does not remove the need for selected phenotyping in influenza-like surveillance decisions.",
            ],
            sourceIds: ["cdc-nejm-2019", "mgen-belgian-influenza-phylogenomics-2021"],
          },
          {
            cells: [
              "Sharing route and correction history",
              "Consensus, partial consensus or raw-read sharing route; repository accession; upload constraints; correction or replacement date.",
              "Connects reporting to public or controlled data sharing and later correction.",
              "Raw-read sharing may be difficult with limited internet and may need human-read filtering.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "mgen-local-sarscov2-large-scale-2020"],
          },
        ],
        sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "cdc-nejm-2019"],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "mixed"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["respiratory-viruses"],
    topics: ["reporting", "decision-use", "respiratory-viruses", "metadata", "data-sharing"],
    detailLevel: "operational",
    sourceIds: [
      "who-sars-cov-2-sequencing-implementation-2021",
      "who-national-genomic-surveillance-strategy-2023",
      "cdc-nejm-2019",
      "mgen-belgian-influenza-phylogenomics-2021",
      "mgen-local-sarscov2-large-scale-2020",
    ],
    gaps: [
      "Needs current organism-specific reporting templates, lineage nomenclature rules, QC thresholds and repository field requirements for influenza, RSV and SARS-CoV-2 beyond the beta source set.",
    ],
  },
  {
    id: "reporting-tb-amr",
    title: "For TB and AMR, separate transmission inference from resistance inference",
    summary:
      "TB and AMR reports need clear limits around relatedness, genotype-phenotype prediction, clinical interpretation, and follow-up testing.",
    sourceStatus: "partial",
    body: [
      "TB and AMR use cases often combine two different reporting products: relatedness or transmission inference, and genotype-based prediction of resistance or other phenotypes. ECDC separates these output types, and Armstrong et al. caution that phenotype inference depends on the organism, drug, mechanism and quality of genotype-phenotype evidence.",
      "For TB, WGS can help define or refute suspected outbreaks, infer transmission dynamics, suggest missed cases, distinguish reactivation from reinfection, and support drug-susceptibility inference where the method is feasible. The report should be clear about whether it is supporting public-health investigation, clinical treatment, programme evaluation, or more than one of these.",
      "For AMR, a useful report should name the organism, antimicrobial or drug class, resistance determinant or rule set, database or tool version, validation basis, and whether confirmatory phenotypic testing is required. The clinical microbiology implementation review reinforces this caution because hospital-facing reports can carry direct patient-care implications and regulatory obligations.",
      "For beta, the safe reporting rule is separation. Keep relatedness, genotype-to-phenotype inference, clinical or infection-control action, validation basis, uncertainty and follow-up testing as separate fields. A single combined conclusion can hide which part is well supported and which part depends on local epidemiology, phenotypic confirmation, database quality or clinical judgement.",
    ],
    bodySourceIds: {
      0: ["ecdc-wgs-surveillance-2016", "cdc-nejm-2019"],
      1: ["cdc-nejm-2019"],
      2: ["cdc-nejm-2019", "clinical-microbiology-implementation-2026"],
      3: [
        "cdc-nejm-2019",
        "ecdc-wgs-surveillance-2016",
        "clinical-microbiology-implementation-2026",
        "mgen-discordant-amr-predictions-2020",
      ],
    },
    technicalDetail: [
      "Minimum implementation check: record the distance method or nomenclature scheme, cluster threshold or interpretation rule, resistance database and version, workflow version, specimen or isolate source, report recipient, and whether phenotypic confirmation is pending or complete.",
      "Do not merge relatedness, resistance and clinical-action statements into one unchecked conclusion. Each conclusion needs its own evidence basis and uncertainty statement.",
    ],
    tables: [
      {
        title: "Beta TB and AMR reporting fields",
        summary:
          "Use separate fields so relatedness, resistance prediction, interpretation and action are not collapsed into one unsupported conclusion.",
        columns: ["Report field", "What to record", "Why it matters", "Main caution"],
        rows: [
          {
            cells: [
              "Relatedness or transmission inference",
              "Distance method, nomenclature or cluster rule; comparison set; sampling frame; workflow version; interpretation date.",
              "Supports suspected-outbreak assessment, transmission investigation and programme evaluation.",
              "A relatedness result does not prove direct transmission without sampling and epidemiological context.",
            ],
            sourceIds: ["cdc-nejm-2019", "ecdc-wgs-surveillance-2016"],
          },
          {
            cells: [
              "Resistance or phenotype inference",
              "Organism, antimicrobial or drug class, determinant or rule set, database and version, validation basis and confidence statement.",
              "Helps distinguish surveillance signal, public-health action and possible clinical relevance.",
              "Genotype-to-phenotype reliability varies by organism, drug, resistance mechanism, database and workflow.",
            ],
            sourceIds: ["cdc-nejm-2019", "clinical-microbiology-implementation-2026", "mgen-discordant-amr-predictions-2020"],
          },
          {
            cells: [
              "Follow-up testing status",
              "Whether phenotypic confirmation, repeat sequencing, additional sampling or expert review is pending, complete or not required.",
              "Prevents an inferred result being read as final when confirmation or review is still needed.",
              "The guide cannot prescribe confirmatory testing rules without organism-specific and national sources.",
            ],
            sourceIds: ["cdc-nejm-2019", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Action boundary",
              "Whether the report supports public-health investigation, surveillance monitoring, clinical treatment discussion, infection-control action or research only.",
              "Clarifies who should act and what kind of decision the result can support.",
              "Clinical-facing action may carry regulatory, quality and interpretive obligations beyond public-health surveillance.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026", "ecdc-wgs-surveillance-2016"],
          },
        ],
        sourceIds: ["cdc-nejm-2019", "ecdc-wgs-surveillance-2016", "clinical-microbiology-implementation-2026"],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "mixed"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["tb", "amr", "nosocomial"],
    topics: ["reporting", "decision-use", "tb", "amr", "quality", "validation"],
    detailLevel: "operational",
    sourceIds: [
      "ecdc-wgs-surveillance-2016",
      "cdc-nejm-2019",
      "clinical-microbiology-implementation-2026",
      "mgen-discordant-amr-predictions-2020",
    ],
    gaps: [
      "Needs current TB and AMR report examples, genotype-phenotype validation sources, resistance database guidance, thresholds, and national policy requirements.",
    ],
  },
  {
    id: "reporting-healthcare-associated-infection",
    title: "For healthcare-associated infection, connect genomics to infection-control action",
    summary:
      "Hospital-facing genomic reports need clear links between relatedness, ward or exposure context, intervention decisions, uncertainty, and feedback.",
    sourceStatus: "partial",
    body: [
      "Healthcare-associated infection and hospital outbreak support place genomics close to operational infection-control decisions. The clinical microbiology implementation review distinguishes clinical laboratories from public-health laboratories because hospital-facing results may have direct patient-care responsibilities, tighter reporting expectations, regulatory obligations and interpretive uncertainty.",
      "The reporting route should therefore name the infection-control or clinical user, the setting being investigated, the organism or resistance concern, the comparison set, and the action boundary. A report may support whether cases are plausibly linked, whether more sampling is needed, whether an environmental or ward investigation should continue, or whether genomic evidence is insufficient without epidemiological context.",
      "The Microbial Genomics implementation examples show why context matters. Centre-specific bacterial pathogen typing can affect infection-control decision making, and an integrated WGS response to a persistent polymicrobial multidrug-resistant outbreak in critical care connected sequencing to intervention, reporting turnaround and environmental metagenomic investigation.",
      "For beta, do not turn a hospital-facing genomic result into an automatic action instruction. Report the relatedness evidence, what was sampled, what was not sampled, the workflow or method used, uncertainty, who received the result, what follow-up is pending, and how feedback from the infection-control team will be captured.",
    ],
    bodySourceIds: {
      0: ["clinical-microbiology-implementation-2026"],
      1: ["clinical-microbiology-implementation-2026", "ecdc-wgs-surveillance-2016"],
      2: ["mgen-centre-specific-typing-ipc-2021", "mgen-polymicrobial-mdr-critical-care-2021"],
      3: [
        "clinical-microbiology-implementation-2026",
        "mgen-centre-specific-typing-ipc-2021",
        "mgen-polymicrobial-mdr-critical-care-2021",
      ],
    },
    tables: [
      {
        title: "Beta healthcare-associated infection reporting fields",
        summary:
          "Use this table to keep infection-control interpretation explicit and separate from genomic relatedness alone.",
        columns: ["Report field", "What to record", "Why it matters", "Main caution"],
        rows: [
          {
            cells: [
              "Clinical or infection-control route",
              "Recipient team, ward or unit context, report urgency, verbal discussion route and escalation owner.",
              "Hospital-facing results often need rapid interpretation by people who can act.",
              "Do not assume the sequencing laboratory is the owner of the infection-control decision.",
            ],
            sourceIds: ["clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Sampling and comparison context",
              "Patient, isolate, environmental or metagenomic samples included; samples missing; date range; comparison set.",
              "A relatedness result can only be interpreted against what was sampled and when.",
              "Unsampled patients, environments or time periods can change the interpretation.",
            ],
            sourceIds: ["ecdc-wgs-surveillance-2016", "mgen-polymicrobial-mdr-critical-care-2021"],
          },
          {
            cells: [
              "Relatedness and uncertainty",
              "Method, workflow version, cluster or relatedness statement, uncertainty and whether repeat or expert review is needed.",
              "Supports plausible linkage, exclusion or need for further investigation.",
              "Centre-specific typing and local interpretive practice can affect infection-control decisions.",
            ],
            sourceIds: ["mgen-centre-specific-typing-ipc-2021", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Action and feedback",
              "What action the report can support, who records the action, feedback from users, and whether the case changes SOPs, sampling or validation.",
              "Keeps genomics connected to service improvement and public-health or hospital action.",
              "Genomics should inform, not replace, infection-control judgement and local context.",
            ],
            sourceIds: ["who-sars-cov-2-sequencing-implementation-2021", "clinical-microbiology-implementation-2026"],
          },
        ],
        sourceIds: [
          "clinical-microbiology-implementation-2026",
          "ecdc-wgs-surveillance-2016",
          "mgen-centre-specific-typing-ipc-2021",
          "mgen-polymicrobial-mdr-critical-care-2021",
        ],
      },
    ],
    technicalDetail: [
      "Minimum implementation check: record recipient team, setting, sample set, comparison set, workflow version, relatedness statement, uncertainty, report time, verbal discussion route, action boundary, feedback route and correction history.",
      "Treat infection-control action as a governed interpretation step. The genomic report should support that step, not silently substitute for it.",
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "data-manager", "mixed"],
    implementationStages: ["pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["nosocomial", "amr"],
    topics: ["reporting", "decision-use", "healthcare-associated-infection", "infection-control", "quality", "validation"],
    detailLevel: "operational",
    sourceIds: [
      "clinical-microbiology-implementation-2026",
      "ecdc-wgs-surveillance-2016",
      "mgen-centre-specific-typing-ipc-2021",
      "mgen-polymicrobial-mdr-critical-care-2021",
      "who-sars-cov-2-sequencing-implementation-2021",
    ],
    gaps: [
      "Needs healthcare-associated infection report examples, organism-specific cluster interpretation sources, clinical governance requirements, and local infection-control workflow examples.",
    ],
  },
  {
    id: "workforce-is-part-of-system",
    title: "Plan workforce and training as core infrastructure",
    summary:
      "A genomics service needs trained laboratory, bioinformatics, data, software, IT, epidemiology, and user-facing capacity.",
    sourceStatus: "partial",
    body: [
      "Armstrong et al. describe workforce development as central to public-health genomics. Microbiologists need microbial genomics knowledge, epidemiologists need tools to translate genomic data into action, and both groups need basic bioinformatics vocabulary.",
      "The PHE case study shows implementation needs in practice: laboratory training, specialist bioinformatics staff, computing and software-development expertise, cross-training for epidemiologists and clinical scientists, and user engagement.",
      "WHO's progress report treats workforce as one of the global strategy objectives and describes regional implementation work that included sequencing and bioinformatics training, procurement support, quality-assured data, and national strategy development. A sustainable service should not depend on one person who knows where the scripts are, how the server is configured, or how reports are interpreted. Documentation, role cover, onboarding, and routine support are part of the infrastructure.",
      "Training also has to include users of the results. If epidemiologists, health-protection teams, or laboratory users do not understand what the report can and cannot support, the technical pipeline may still fail as a public-health service.",
      "The clinical microbiology implementation review makes the competency issue more concrete. It describes wet-lab, library-preparation, data-QC, data-analysis, interpretation, validation, accreditation, reporting and communication competencies across the genomic workflow. A public-health surveillance service will add further responsibilities around outbreak context, surveillance interpretation, governance, data sharing and programme management.",
      "The newer implementation sources make this more explicit. UKHSA names workforce, laboratories, data and analytics, and collaboration as implementation requirements. The clinical microbiology review identifies staff competencies, training, bioinformatics implementation, quality systems, reporting, and interpretive uncertainty as implementation concerns. The East African Community assessment adds a useful realism check: limited bioinformatics expertise, compute capacity, local sequencing facilities, and data-sharing mechanisms can make programmes dependent on external sequencing or analysis unless capacity building is planned as part of the service.",
      "The implementation collection gives practical training models. The Kenya AMR paper describes a 2-week laboratory and bioinformatics training programme using isolates from a national AMR repository and harmonized reporting. The European reference-laboratory rollout paper describes guidance and support for national laboratories, and California COVIDNet links operational success to ongoing training across a large sequencing network.",
      "For beta, use a responsibility template rather than a fixed staffing ratio. Every service model should name owners for wet-lab processing, sequencing operation, bioinformatics workflow operation, QC review, validation and change control, data management, storage and backup, access review, reporting, interpretation, user training, incident support, procurement or costing, and programme oversight. The same person may cover more than one function in a small service, but no function should be invisible.",
    ],
    bodySourceIds: {
      0: ["cdc-nejm-2019"],
      1: ["phe-case-study"],
      2: ["who-genomic-surveillance-progress-2023", "pha4ge-infrastructure"],
      3: ["cdc-nejm-2019", "phe-case-study", "who-genomic-surveillance-progress-2023"],
      4: ["clinical-microbiology-implementation-2026"],
      5: [
        "ukhsa-pathogen-genomics-strategy-2024",
        "clinical-microbiology-implementation-2026",
        "east-africa-genomics-landscape-2024",
      ],
      6: [
        "mgen-kenya-amr-genomics-capacity-2023",
        "mgen-eurl-wgs-rollout-europe-2023",
        "mgen-california-covidnet-2023",
      ],
      7: [
        "aphl-ngs-implementation-2016",
        "phe-case-study",
        "who-genomic-surveillance-progress-2023",
        "clinical-microbiology-implementation-2026",
        "east-africa-genomics-landscape-2024",
        "who-genomics-costing-tool-manual-2024",
      ],
    },
    technicalDetail: [
      "Minimum responsibility map: wet-lab processing, sequencing operation, bioinformatics workflow operation, QC review, workflow validation, data management, storage and backup, access review, report interpretation, user training, incident support, and programme oversight.",
      "Minimum succession question: which service functions stop if one named person is unavailable for two weeks?",
      "Beta responsibility-template columns: service function, accountable owner, backup owner, supporting role or partner, documentation location, training requirement, review frequency, cost line, and failure mode if unavailable.",
      "Functions that should not be unnamed: sample receipt, wet-lab processing, sequencing operation, bioinformatics workflow operation, QC review, validation and change control, data management, storage and backup, access review, reporting, interpretation, user training, incident support, procurement or costing, and programme oversight.",
    ],
    tables: [
      {
        title: "Beta workforce responsibility template",
        summary:
          "Use this as a role map. It does not imply that every function needs a separate person in a small service.",
        columns: ["Service function", "What must be owned", "Failure mode if unnamed", "Typical owner to identify"],
        rows: [
          {
            cells: [
              "Sample receipt and wet-lab processing",
              "Sample acceptance, extraction, library preparation, sequencing operation, run records and wet-lab QC.",
              "Failed or unsuitable inputs become invisible until analysis or reporting is delayed.",
              "Laboratory lead, sequencing lead, quality lead or delegated bench owner.",
            ],
            sourceIds: ["aphl-ngs-implementation-2016", "phe-case-study", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Bioinformatics operation",
              "Workflow execution, reference data, pipeline versions, troubleshooting, reruns, provenance and release boundaries.",
              "A service depends on undocumented scripts or one person who knows how results were produced.",
              "Bioinformatics lead, platform owner, managed-service support route or shared national service.",
            ],
            sourceIds: ["pha4ge-infrastructure", "phe-case-study", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Data management and access",
              "Identifier lineage, metadata quality, storage, backup, repository accessions, access review and correction history.",
              "Reports, repository records and reanalysis cannot be traced back to the same sample or isolate.",
              "Data manager, LIMS owner, IT/security owner or platform data steward.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "ecdc-wgs-surveillance-2016", "aphl-ngs-implementation-2016"],
          },
          {
            cells: [
              "Validation and quality review",
              "Validation evidence, QC thresholds, change control, EQA or proficiency testing where available, and service review.",
              "Workflow or reporting changes alter public-health interpretation without review.",
              "Quality lead, laboratory director, bioinformatics lead and relevant reporting owner.",
            ],
            sourceIds: ["phe-case-study", "aphl-ngs-implementation-2016", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Reporting, interpretation and user support",
              "Report route, uncertainty language, stakeholder discussion, feedback, training and incident support.",
              "Technically correct outputs fail because users cannot interpret or act on them.",
              "Reporting scientist, epidemiology lead, clinical or public-health liaison, user-support owner.",
            ],
            sourceIds: ["cdc-nejm-2019", "phe-case-study", "who-sars-cov-2-sequencing-implementation-2021"],
          },
          {
            cells: [
              "Programme oversight and costing",
              "Service model, recurrent costs, procurement, staffing cover, training, renewal, partner agreements and escalation route.",
              "The service works only while hidden labour, temporary funding or informal support persists.",
              "Programme director, funder, laboratory manager, finance/procurement owner or governance board.",
            ],
            sourceIds: [
              "who-genomic-surveillance-progress-2023",
              "who-genomics-costing-tool-manual-2024",
              "east-africa-genomics-landscape-2024",
            ],
          },
        ],
        sourceIds: [
          "aphl-ngs-implementation-2016",
          "phe-case-study",
          "clinical-microbiology-implementation-2026",
          "who-genomic-surveillance-progress-2023",
          "who-genomics-costing-tool-manual-2024",
        ],
      },
      {
        title: "Beta responsibility variants by implementation model",
        summary:
          "Use this table to adapt the responsibility template to the service model. The rows identify likely ownership patterns, not staffing ratios.",
        columns: ["Implementation model", "Responsibilities to make explicit", "Roles or partners commonly involved", "Main risk if unnamed"],
        rows: [
          {
            cells: [
              "Pilot or proof of service",
              "Who runs the workflow, records versions, checks QC, stores data, writes the test report, and decides whether the pilot can move into routine use.",
              "Pilot lead, laboratory scientist, bioinformatician, quality lead, data manager, service user and programme sponsor.",
              "The pilot works because one person knows the details, but the programme cannot repeat, validate or support it as a service.",
            ],
            sourceIds: [
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
              "who-genomics-costing-tool-manual-2024",
            ],
          },
          {
            cells: [
              "Routine single-pathogen service",
              "Sample receipt, sequencing, QC review, validated workflow operation, report release, repository submission, user support, incident handling and recurrent budget.",
              "Laboratory service lead, bioinformatics owner, quality manager, data manager, reporting scientist, IT support and finance or procurement owner.",
              "A routine service becomes dependent on informal cover, unclear report ownership or unbudgeted maintenance.",
            ],
            sourceIds: ["phe-case-study", "clinical-microbiology-implementation-2026", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "National or regional network",
              "Shared methods, training, proficiency testing or EQA, data-sharing agreements, platform governance, user feedback, escalation and evaluation.",
              "National public-health agency, participating laboratories, governance committees, pathogen working groups, data platform owner and training or support teams.",
              "Different sites generate data that cannot be compared, governed, supported or interpreted consistently.",
            ],
            sourceIds: [
              "auspathogen-implementation-2025",
              "australia-microbial-genomics-framework-2025",
              "mgen-california-covidnet-2023",
              "who-genomic-surveillance-progress-2023",
            ],
          },
          {
            cells: [
              "Managed platform or SaaS-style service",
              "Which workflow, storage, access, support and recovery tasks are delegated; which validation, interpretation, governance and user-support tasks remain local.",
              "Platform provider, local service owner, bioinformatics or data lead, IT/security owner, quality lead and reporting or interpretation owner.",
              "The platform runs analysis, but no local owner accepts responsibility for validation boundary, access, reporting, correction or continuity.",
            ],
            sourceIds: ["pha4ge-infrastructure", "clinical-microbiology-implementation-2026", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "Hybrid, collaborative or externally supported model",
              "Which tasks are local, central, academic, regional or external; how data move; who signs off reports; and how local capability will be built.",
              "Local laboratory, central reference service, academic or external partner, regional network, data-governance owner, training lead and programme sponsor.",
              "External support helps delivery but leaves real-time interpretation, turnaround, data access or sustainability fragile.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "auspathogen-implementation-2025",
              "east-africa-genomics-landscape-2024",
              "pha4ge-infrastructure",
            ],
          },
        ],
        sourceIds: [
          "aphl-ngs-implementation-2016",
          "phe-case-study",
          "clinical-microbiology-implementation-2026",
          "pha4ge-infrastructure",
          "auspathogen-implementation-2025",
          "australia-microbial-genomics-framework-2025",
          "east-africa-genomics-landscape-2024",
          "mgen-california-covidnet-2023",
          "who-genomic-surveillance-progress-2023",
          "who-genomics-costing-tool-manual-2024",
        ],
      },
      {
        title: "Estimating workforce capacity without inventing FTE ratios",
        summary:
          "Use this worksheet to turn the responsibility map into a local staffing and cover discussion. It is a planning structure, not a universal staffing calculator.",
        columns: ["Capacity question", "What to estimate locally", "Why it changes workforce need", "Beta caution"],
        rows: [
          {
            cells: [
              "Service volume and turnaround",
              "Expected samples or isolates per week or month, batching pattern, urgent-response route, routine reporting cycle, and seasonal or outbreak surge.",
              "The same role map needs different cover when the service is occasional, batched, daily, urgent, or expected to absorb outbreaks.",
              "Use local throughput and turnaround assumptions; the beta guide does not provide FTE per sample.",
            ],
            sourceIds: [
              "phe-case-study",
              "aphl-ngs-implementation-2016",
              "who-genomics-costing-tool-manual-2024",
            ],
          },
          {
            cells: [
              "Workflow complexity and support model",
              "Number of organisms, workflows, databases, report types, rerun routes, managed-platform dependencies and local troubleshooting responsibilities.",
              "A narrow managed workflow can require less local engineering than multiple local pipelines, but local validation, interpretation and user support still need owners.",
              "Delegating analysis does not remove responsibility for report boundaries, access, correction and service continuity.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "clinical-microbiology-implementation-2026",
              "who-genomics-costing-tool-manual-2024",
            ],
          },
          {
            cells: [
              "Quality and validation workload",
              "Validation runs, QC review, EQA or proficiency testing, change-control reviews, audit preparation, report corrections and SOP updates.",
              "Quality work increases around implementation, workflow changes, accreditation review and service incidents; it is not only routine bench time.",
              "Do not hide quality-management time inside an unspecified laboratory or bioinformatics role.",
            ],
            sourceIds: [
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
              "who-genomics-costing-tool-manual-2024",
            ],
          },
          {
            cells: [
              "Data management and user support",
              "Metadata follow-up, LIMS or sample-system work, accession tracking, access reviews, dashboard or report support, user feedback and training sessions.",
              "Public-health value depends on users receiving interpretable results with enough context to act; this creates recurrent support work.",
              "A technically functional pipeline can still fail if data stewardship and user support are unfunded.",
            ],
            sourceIds: ["cdc-nejm-2019", "phe-case-study", "who-genomic-surveillance-progress-2023"],
          },
          {
            cells: [
              "Cover, succession and partner dependency",
              "Backup owner for each function, leave cover, onboarding time, documentation location, external partner role, escalation route and what stops if a named person is absent.",
              "Single-person dependency is a service risk even when current throughput is low.",
              "External sequencing, analysis or platform support should be budgeted and governed as a dependency, not treated as invisible capacity.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "east-africa-genomics-landscape-2024",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Training and competency evidence",
              "Initial training, refresher training, competency assessment, cross-training, user training, community-of-practice participation and documentation updates.",
              "Workforce capacity includes whether people can perform, explain, review and improve the service, not only whether a role is nominally assigned.",
              "Detailed curricula and competency-assessment templates still need extraction from programme-specific training sources.",
            ],
            sourceIds: [
              "cdc-nejm-2019",
              "phe-case-study",
              "clinical-microbiology-implementation-2026",
              "who-genomic-surveillance-progress-2023",
              "mgen-kenya-amr-genomics-capacity-2023",
            ],
          },
        ],
        sourceIds: [
          "cdc-nejm-2019",
          "phe-case-study",
          "aphl-ngs-implementation-2016",
          "pha4ge-infrastructure",
          "clinical-microbiology-implementation-2026",
          "who-genomic-surveillance-progress-2023",
          "who-genomics-costing-tool-manual-2024",
          "east-africa-genomics-landscape-2024",
          "mgen-kenya-amr-genomics-capacity-2023",
        ],
      },
    ],
    audiences: ["director", "policy", "funder", "lab-lead", "bioinformatician"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["workforce", "training", "sustainability"],
    detailLevel: "summary",
    sourceIds: [
      "cdc-nejm-2019",
      "aphl-ngs-implementation-2016",
      "phe-case-study",
      "pha4ge-infrastructure",
      "who-genomic-surveillance-progress-2023",
      "who-genomics-costing-tool-manual-2024",
      "who-science-council-genomics-access-2022",
      "ukhsa-pathogen-genomics-strategy-2024",
      "clinical-microbiology-implementation-2026",
      "east-africa-genomics-landscape-2024",
      "mgen-kenya-amr-genomics-capacity-2023",
      "mgen-eurl-wgs-rollout-europe-2023",
      "mgen-california-covidnet-2023",
      "auspathogen-implementation-2025",
      "australia-microbial-genomics-framework-2025",
    ],
    gaps: [
      "The beta responsibility variants still need review against real programme examples and local organisational structures.",
      "The beta workforce capacity worksheet still needs source-backed staffing ratios or FTE examples by service scale, throughput, organism focus, and implementation model before it can become a staffing calculator.",
      "Detailed training curricula and competency-assessment templates need extraction from APHL, PulseNet, WHO, ECDC and national programme sources.",
    ],
  },
  {
    id: "costing-recurrent",
    title: "Cost the recurrent service, not only the initial purchase",
    summary:
      "Sustainability depends on storage growth, compute renewal, workflow maintenance, validation, support, and staff retention.",
    sourceStatus: "partial",
    body: [
      "The PHE case study describes capital planning for sequencing equipment, robotics, IT, data management, and project management. It also considered laboratory-space remodelling, health and safety, workforce, training, sample requirements, turnaround times, and result format.",
      "Programmes should collect evidence on value as well as cost. PHE reported replacement of multiple conventional processes, reduced sample handling, reduced animal use, reduced staff costs in the reference laboratory, and a shift of scientific effort toward data analysis and interpretation. Price et al. found that included bacterial WGS surveillance economic studies supported WGS on economic grounds, but the evidence base was heterogeneous.",
      "Initial purchase cost is only one part of sustainability. WHO's costing manual provides a stronger category model for recurrent planning: throughput, platform, reagents and consumables, equipment, personnel and training, facilities and transport, bioinformatics, and quality management. For bioinformatics, it explicitly accommodates cloud, in-house server, and hybrid costs, including software licensing, storage, hardware, and maintenance.",
      "Use costing as a scenario exercise rather than a one-off budget line. Compare throughput assumptions, platform choices, procurement costs, staffing patterns, training needs, quality-management activities, storage and compute options, and whether costs are shared with other pathogen programmes. The current sources support a category model; they still do not justify a universal cost-per-sample or return-on-investment claim across pathogens and countries.",
      "For infrastructure, the costing model should include the recurrent work that keeps the service alive: storage growth, redundancy if used, cloud processing and storage, software licences, in-house hardware renewal, maintenance fees, system administration, systems engineering, quality-management activities, and staff time for support and troubleshooting.",
      "Personnel should be costed as named workflow and support roles, not as an overhead after equipment is chosen. WHO's costing manual includes personnel and training across workflow steps, administrative and management personnel, quality and biosafety managers, laboratory directors, human resources, and quality-management activities such as accreditation, proficiency testing and certification.",
    ],
    bodySourceIds: {
      0: ["phe-case-study"],
      1: ["phe-case-study", "genometrakr-economic-2021", "wgs-economic-review", "lancet-wgs-economic-strategies-2026"],
      2: ["who-genomics-costing-tool-manual-2024", "wgs-costing-tool-2024"],
      3: ["who-genomics-costing-tool-manual-2024", "who-national-genomic-surveillance-strategy-2023"],
      4: ["who-genomics-costing-tool-manual-2024", "pha4ge-infrastructure"],
      5: ["who-genomics-costing-tool-manual-2024"],
    },
    technicalDetail: [
      "Minimum recurrent infrastructure cost lines: cloud compute, cloud storage, data egress if relevant, in-house server hardware, high-performance storage, archive storage, backup storage, redundancy, software licences, maintenance fees, systems administration, systems engineering, user support, validation or revalidation time, and quality-management activities.",
      "Minimum workforce cost lines: wet-lab staff, sequencing operation, bioinformatics operation, data management, quality management, IT or security support, system administration, reporting or interpretation, user training, programme management, and cover for leave or turnover.",
    ],
    tables: [
      {
        title: "Beta costing and implementation scenario templates",
        summary:
          "Use these templates to compare plausible service models before procurement. Replace all placeholders with local throughput, staff, infrastructure and quality-management assumptions.",
        columns: ["Scenario", "Define before costing", "Cost and support lines to test", "Evidence caution"],
        rows: [
          {
            cells: [
              "Pilot or proof of service",
              "Pathogen or programme, use case, small test throughput, comparator method, reportable output, validation boundary and stop/go decision.",
              "Sequencing consumables, limited staff time, training, validation dataset, bioinformatics support, storage, user feedback and quality review.",
              "A pilot can prove feasibility but does not prove recurrent service cost, workforce cover or long-term sustainability.",
            ],
            sourceIds: [
              "who-genomics-costing-tool-manual-2024",
              "aphl-ngs-implementation-2016",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Routine single-pathogen service",
              "Expected annual throughput, sampling route, turnaround target, reporting route, repository route, validation and accreditation scope.",
              "Dedicated wet-lab, bioinformatics, data-management, quality, reporting and user-support time; storage growth; workflow maintenance; revalidation.",
              "The PHE case study shows a centralised enteric-bacterial service, not a universal staffing or cost model.",
            ],
            sourceIds: ["phe-case-study", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "Multi-pathogen service",
              "Which organisms share sequencing, analysis, storage, data-management, reporting and quality systems, and which require separate validation or reporting.",
              "Shared infrastructure, multiple workflows, pathogen-specific validation, training, report templates, repository routes and support cover.",
              "Shared platforms can reduce duplication, but organism-specific QC, reporting and interpretation boundaries remain.",
            ],
            sourceIds: [
              "who-genomics-costing-tool-manual-2024",
              "clinical-microbiology-implementation-2026",
              "pha4ge-infrastructure",
            ],
          },
          {
            cells: [
              "National or collaborative network",
              "Roles of local laboratories, national reference service, academic partners, data platform, governance committees and user groups.",
              "Training, coordination, shared methods, proficiency testing or EQA, data-sharing agreements, platform costs, support desk and evaluation.",
              "Network models need governance and shared standards; they are not just scaled-up local workflows.",
            ],
            sourceIds: [
              "auspathogen-implementation-2025",
              "australia-microbial-genomics-framework-2025",
              "mgen-california-covidnet-2023",
            ],
          },
          {
            cells: [
              "Managed platform, cloud or hybrid model",
              "Which layers are delegated, which responsibilities remain local, data-residency constraints, access model, internet dependency and fallback route.",
              "Platform fees, cloud compute and storage, data egress, account management, provider support, local validation, local interpretation and user training.",
              "Delegating workflow execution does not delegate public-health responsibility for validation, interpretation, access and support.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "who-genomics-costing-tool-manual-2024",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Externally supported capacity building",
              "Which sequencing, analysis or interpretation tasks are external; what local capability is being built; and what must become locally sustainable.",
              "Sample shipment or transfer, external analysis fees, training, local compute or data access, governance, turnaround and transition plan.",
              "External support can be useful, but unmanaged dependence can delay real-time surveillance and limit local interpretation.",
            ],
            sourceIds: ["east-africa-genomics-landscape-2024", "who-genomic-surveillance-progress-2023"],
          },
        ],
        sourceIds: [
          "who-genomics-costing-tool-manual-2024",
          "wgs-costing-tool-2024",
          "pha4ge-infrastructure",
          "phe-case-study",
          "clinical-microbiology-implementation-2026",
          "auspathogen-implementation-2025",
          "australia-microbial-genomics-framework-2025",
          "east-africa-genomics-landscape-2024",
          "who-genomic-surveillance-progress-2023",
        ],
      },
    ],
    audiences: ["director", "policy", "funder", "lab-lead"],
    implementationStages: ["exploring", "pilot", "upgrading", "national-scale"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["costing", "sustainability", "procurement"],
    detailLevel: "summary",
    sourceIds: [
      "phe-case-study",
      "pha4ge-infrastructure",
      "who-genomics-costing-tool-manual-2024",
      "wgs-costing-tool-2024",
      "genometrakr-economic-2021",
      "wgs-economic-review",
      "lancet-wgs-economic-strategies-2026",
      "clinical-microbiology-implementation-2026",
      "auspathogen-implementation-2025",
      "australia-microbial-genomics-framework-2025",
      "east-africa-genomics-landscape-2024",
      "who-genomic-surveillance-progress-2023",
      "aphl-ngs-implementation-2016",
      "mgen-california-covidnet-2023",
    ],
    gaps: [
      "A setting-specific quantitative extraction is still needed before making general return-on-investment claims across pathogens and countries.",
      "The scenario templates still need local quantitative examples with throughput, staffing, procurement and recurrent-cost assumptions by service model.",
    ],
  },
  {
    id: "implementation-model-dependencies",
    title: "Compare implementation patterns and case studies",
    summary:
      "Centralised, local, hybrid, collaborative, and managed models can all be valid, but each depends on different people, infrastructure, governance, and support.",
    sourceStatus: "partial",
    body: [
      "A genomics programme does not have to own every layer of the service to be credible. It does need to know which layers it operates, which layers are delegated, and which dependencies would stop public-health use if they failed.",
      "PHA4GE frames this as a responsibility question: where analysis is run, how data move, and who has access. The clinical microbiology implementation review describes centralised reference laboratory, decentralised in-house sequencing, and hybrid or collaborative models. AusPathoGen shows a national collaborative model built around public-health laboratories, agencies, academic partners, standard bioinformatics, governance committees, and a shared data platform.",
      "The right model depends on constraints. A centralised reference model can concentrate expertise, validation, infrastructure, and quality systems, but it creates sample-transfer, turnaround-time, and service-dependency questions. A local model can improve local control and responsiveness, but it requires staff, validation, storage, IT support, and continuity. A hybrid or collaborative model can spread capability while preserving shared standards, but it needs explicit governance, data-sharing agreements, and support routes.",
      "PHA4GE's implementation comparison gives the practical trade-off. A laptop model can be useful when internet or power is unreliable, but it shifts management to the operator and limits scalability and access-control structures. On-premises systems can meet local needs, but job-processing infrastructure requires expertise. Cloud platforms can reduce local hardware barriers, but they depend on internet connectivity for upload and may shift cost, data-residency and vendor-dependency questions elsewhere.",
      "The East African Community assessment shows why this matters. External sequencing and analysis can be useful during capability building, but long-term reliance on third parties may delay real-time surveillance decisions and limit local interpretation if local sequencing, compute, bioinformatics, and data-sharing capacity are not developed. The guide should therefore treat external support as a dependency to manage, not as a failure or a complete solution.",
      "The implementation collection adds concrete network examples: Kenya's AMR paper describes training public-health scientists to generate genomic data and harmonized reports; the European reference-laboratory rollout paper describes guidance and support for national food, feed, and veterinary laboratories; California COVIDNet shows a large collaborative model linking many sequencing laboratories, cloud-based analysis, training, and visualization workflows.",
      "For beta, compare implementation models in a dependency matrix. The purpose is not to rank laptop, local server, HPC, cloud, managed platform, centralised reference, hybrid, collaborative, or external-support models as universally better or worse. The purpose is to make the dependencies explicit: who owns each layer, which public-health use case is supported, what happens when internet, power, staff, storage, provider access, or partner support fails, and what local capability is being built.",
    ],
    bodySourceIds: {
      0: ["pha4ge-infrastructure", "clinical-microbiology-implementation-2026"],
      1: ["pha4ge-infrastructure", "clinical-microbiology-implementation-2026", "auspathogen-implementation-2025"],
      2: [
        "clinical-microbiology-implementation-2026",
        "auspathogen-implementation-2025",
        "australia-microbial-genomics-framework-2025",
      ],
      3: ["pha4ge-infrastructure"],
      4: ["east-africa-genomics-landscape-2024"],
      5: [
        "mgen-kenya-amr-genomics-capacity-2023",
        "mgen-eurl-wgs-rollout-europe-2023",
        "mgen-california-covidnet-2023",
      ],
      6: [
        "pha4ge-infrastructure",
        "clinical-microbiology-implementation-2026",
        "auspathogen-implementation-2025",
        "east-africa-genomics-landscape-2024",
      ],
    },
    technicalDetail: [
      "For each proposed model, record the service owner, laboratory operator, sequencing location, analysis location, workflow owner, data host, access manager, support route, validation owner, and fallback if the primary provider or network route is unavailable.",
      "Beta matrix rows: laptop or field workflow; local workstation; institutional server or HPC; cloud workflow platform; managed SaaS-style platform; centralised reference service; hybrid local and central model; national collaborative network; externally supported sequencing or analysis.",
      "Beta matrix columns: supported use case, sample route, sequencing location, analysis location, data host, workflow owner, validation owner, access manager, support route, internet or power dependency, data-residency issue, recurring cost line, local capability built, failure mode, and fallback route.",
    ],
    tables: [
      {
        title: "Beta implementation dependency matrix",
        summary:
          "Use this to compare implementation models by dependencies and fallback routes, not as a universal ranking.",
        columns: ["Model", "Works best when", "Key dependencies to manage", "Fallback or maturity question"],
        rows: [
          {
            cells: [
              "Laptop or field workflow",
              "Connectivity, power or institutional infrastructure are unreliable, and a narrow workflow is needed.",
              "Local operator skill, device management, data transfer, version control, backup, access control and limited scalability.",
              "What happens if the operator is absent, the laptop fails, or results need to be shared and audited?",
            ],
            sourceIds: ["pha4ge-infrastructure"],
          },
          {
            cells: [
              "Local server, institutional server or HPC",
              "A programme has local IT support, data-residency needs, predictable throughput and capacity to operate job-processing infrastructure.",
              "Systems administration, storage growth, backup, queue management, workflow deployment, security review and hardware renewal.",
              "Who owns maintenance, recovery testing, user support and workflow validation when demand grows?",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "Cloud workflow platform",
              "Internet connectivity, upload capacity, governance and budget can support remote processing and storage.",
              "Data residency, egress or storage cost, account governance, workflow approval, provider availability and recurrent funding.",
              "What is the plan when upload is slow, data cannot leave jurisdiction, or cloud cost becomes unpredictable?",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "Managed platform or SaaS-style service",
              "Local bioinformatics staffing is limited and the service can use a controlled set of validated workflows.",
              "Provider support, access model, platform roadmap, data portability, validation boundary, cost model and user training.",
              "Which responsibilities remain local even when the platform runs the workflow?",
            ],
            sourceIds: ["pha4ge-infrastructure", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Centralised reference service",
              "Expertise, validation, sequencing, analysis and quality systems are concentrated to support multiple submitting sites.",
              "Sample transfer, turnaround, user communication, LIMS integration, reporting route and dependency on the central service.",
              "How are delays, failed samples, user feedback and local interpretation handled?",
            ],
            sourceIds: ["phe-case-study", "clinical-microbiology-implementation-2026"],
          },
          {
            cells: [
              "Hybrid, collaborative or externally supported model",
              "Capability is being built across laboratories, agencies, academic partners, regional networks or external providers.",
              "Governance, data-sharing agreements, standard methods, training, shared platforms, support routes and local capability development.",
              "Which dependencies are temporary capacity-building support, and which are permanent service risks?",
            ],
            sourceIds: ["auspathogen-implementation-2025", "east-africa-genomics-landscape-2024", "mgen-california-covidnet-2023"],
          },
        ],
        sourceIds: [
          "pha4ge-infrastructure",
          "clinical-microbiology-implementation-2026",
          "auspathogen-implementation-2025",
          "east-africa-genomics-landscape-2024",
        ],
      },
      {
        title: "Beta constraint-response matrix",
        summary:
          "Use this table with the wizard profile. A constraint should raise ownership and fallback questions; it should not automatically select one platform.",
        columns: ["Constraint signal", "Guidance to raise", "Implementation question", "Source-backed caution"],
        rows: [
          {
            cells: [
              "Reliable internet is absent or uncertain",
              "Prioritise local, offline-capable, hybrid, or staged-upload designs and make data-transfer routes explicit.",
              "What can be run, reviewed, stored and reported when external connectivity is unavailable?",
              "Cloud or platform models depend on upload capacity and provider access even when they reduce local hardware burden.",
            ],
            sourceIds: ["pha4ge-infrastructure", "east-africa-genomics-landscape-2024"],
          },
          {
            cells: [
              "Bioinformatics staffing is limited",
              "Raise managed-platform, central service, external support, training, documentation, and narrowed validated-workflow options.",
              "Which responsibilities remain local, and how will local interpretation and troubleshooting capacity be built?",
              "External analysis can help capacity building, but long-term dependence can delay decisions and limit local interpretation.",
            ],
            sourceIds: [
              "clinical-microbiology-implementation-2026",
              "east-africa-genomics-landscape-2024",
              "who-genomic-surveillance-progress-2023",
            ],
          },
          {
            cells: [
              "Central IT support is weak",
              "Raise sustainability, security, backup, access-review, maintenance, and support-route questions before selecting local servers or HPC.",
              "Who maintains systems, reviews access, restores data, patches software, and responds when infrastructure fails?",
              "Infrastructure is an operating model, not only CPU cores and storage.",
            ],
            sourceIds: ["pha4ge-infrastructure", "who-genomics-costing-tool-manual-2024"],
          },
          {
            cells: [
              "LIMS or sample system is absent",
              "Raise metadata lineage, accession tracking, correction history, and manual handoff controls.",
              "How will sample, metadata, sequencing run, QC, workflow, report and repository records stay linked?",
              "Useful genomic data depend on stable linkage to metadata and provenance.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "aphl-ngs-implementation-2016",
              "phe-case-study",
            ],
          },
          {
            cells: [
              "Cloud is not allowed or data residency is a concern",
              "Raise local, institutional, national-platform, controlled-access, or hybrid patterns and require explicit data-hosting decisions.",
              "Which data types may leave the organisation or jurisdiction, and which must remain local or controlled?",
              "Platform choice must account for governance, access, security, data use and benefit-sharing.",
            ],
            sourceIds: ["who-genomic-data-sharing-platforms-2025", "who-pathogen-genome-data-sharing-2022"],
          },
          {
            cells: [
              "External support is central to delivery",
              "Raise transition planning, local capability building, data access, interpretation ownership, turnaround and sustainability.",
              "Which external dependency is temporary support, and which dependency is a permanent service risk?",
              "External support should be managed as a dependency rather than hidden inside the service model.",
            ],
            sourceIds: [
              "east-africa-genomics-landscape-2024",
              "auspathogen-implementation-2025",
              "who-genomic-surveillance-progress-2023",
            ],
          },
        ],
        sourceIds: [
          "pha4ge-infrastructure",
          "clinical-microbiology-implementation-2026",
          "east-africa-genomics-landscape-2024",
          "who-genomics-costing-tool-manual-2024",
          "who-genomic-data-sharing-platforms-2025",
          "who-pathogen-genome-data-sharing-2022",
          "who-genomic-surveillance-progress-2023",
          "aphl-ngs-implementation-2016",
          "phe-case-study",
          "auspathogen-implementation-2025",
        ],
      },
    ],
    audiences: ["director", "policy", "lab-lead", "bioinformatician", "it-security", "funder", "data-manager"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: [
      "implementation",
      "infrastructure",
      "operating-model",
      "managed-platform",
      "local-compute",
      "workforce",
      "governance",
      "sustainability",
    ],
    detailLevel: "operational",
    sourceIds: [
      "pha4ge-infrastructure",
      "clinical-microbiology-implementation-2026",
      "auspathogen-implementation-2025",
      "australia-microbial-genomics-framework-2025",
      "east-africa-genomics-landscape-2024",
      "mgen-kenya-amr-genomics-capacity-2023",
      "mgen-eurl-wgs-rollout-europe-2023",
      "mgen-california-covidnet-2023",
      "who-genomics-costing-tool-manual-2024",
      "who-genomic-data-sharing-platforms-2025",
      "who-pathogen-genome-data-sharing-2022",
      "who-genomic-surveillance-progress-2023",
      "aphl-ngs-implementation-2016",
      "phe-case-study",
    ],
    gaps: ["The beta dependency and constraint matrices still need review against real implementation examples and user testing with programme teams."],
  },
  {
    id: "maturity-next-steps",
    title: "Use maturity as a planning conversation, not a score for its own sake",
    summary:
      "Capability assessment is useful when it identifies the next service risk to reduce, not when it produces false precision.",
    sourceStatus: "partial",
    body: [
      "The PHA4GE infrastructure material and vignettes support capability thinking: different implementation models carry different responsibilities, dependencies, and risks. WHO progress reporting similarly treats access, workforce, data sharing, connectivity, and readiness as linked capabilities that need to be sustained beyond emergency response.",
      "A useful maturity conversation asks what the programme can reliably do today, which responsibility is fragile, and what would fail if a key person, supplier, network connection, platform, or storage system became unavailable.",
      "For an early programme, the next step may be documentation, version control, backup testing, a defined sample-to-report route, or a second person who can run the workflow. For a routine service, the next step may be formal change control, quality review, access review, costed renewal, or clearer reporting and data-sharing policy.",
      "The current KB should not pretend to have a validated maturity scoring instrument. It can use maturity language to structure planning, while keeping a formal assessment rubric as a separate source-backed gap.",
      "The East African Community assessment is a reminder that maturity is not only a local laboratory question. Sequencing access, bioinformatics expertise, compute infrastructure, regional collaboration, standards, and data-sharing mechanisms can all determine whether a programme can act independently or must rely on external partners. A maturity discussion should therefore separate internal capability, external dependency, and the support arrangements that make a chosen model reliable.",
      "The implementation collection helps define practical maturity signals: participation in proficiency testing, harmonised inter-laboratory methods, validated bioinformatics workflows, reproducible AMR prediction, trained users, and routine links between genomic outputs and health-protection decisions.",
      "The dependency matrix is the practical bridge between implementation model and maturity. A programme can be immature if it owns too much without support, or fragile if it outsources too much without fallback, local interpretation, access governance, or cost control. The useful question is which dependency is unmanaged for the service being promised.",
      "For beta, maturity should be framed as risk reduction. Ask which dependency would stop the service from being used: one person leaving, internet failing, storage filling, access not being reviewed, a workflow changing without validation, a report not being understood, or a partner service becoming unavailable.",
    ],
    bodySourceIds: {
      0: ["pha4ge-infrastructure", "who-genomic-surveillance-progress-2023"],
      1: ["pha4ge-infrastructure", "who-genomic-surveillance-progress-2023"],
      2: ["pha4ge-infrastructure", "phe-case-study", "who-genomics-costing-tool-manual-2024"],
      3: ["pha4ge-infrastructure"],
      4: ["east-africa-genomics-landscape-2024", "auspathogen-implementation-2025"],
      5: [
        "mgen-eurl-amr-proficiency-test-2023",
        "mgen-harmonization-enterobacteriaceae-enterococci-2021",
        "mgen-stec-bioinformatics-validation-2021",
        "mgen-discordant-amr-predictions-2020",
        "mgen-kenya-amr-genomics-capacity-2023",
        "mgen-uk-delphi-health-protection-2023",
      ],
      6: [
        "pha4ge-infrastructure",
        "clinical-microbiology-implementation-2026",
        "east-africa-genomics-landscape-2024",
        "auspathogen-implementation-2025",
      ],
      7: ["pha4ge-infrastructure", "phe-case-study", "who-genomic-surveillance-progress-2023"],
    },
    technicalDetail: [
      "Beta maturity dimensions: use case clarity, sampling route, metadata lineage, QC and validation, workflow provenance, storage and backup, access control, reporting route, data-sharing route, workforce cover, recurrent cost, and service review.",
      "Dependency questions: Which functions are internal, external, shared, or unmanaged? Which dependency would stop reporting? Which dependency would stop interpretation? Which dependency would create unacceptable delay? Which dependency has no documented fallback?",
      "Do not use the current maturity language as a certified score. Use it to choose the next risk to reduce and record the evidence gap.",
    ],
    tables: [
      {
        title: "Beta maturity risk-reduction worksheet",
        summary:
          "Use this as a planning worksheet. It helps identify the next fragile part of the service; it is not a validated score.",
        columns: ["Dimension", "Evidence to check", "Next risk to reduce", "Beta caution"],
        rows: [
          {
            cells: [
              "Use case and service owner",
              "Named priority use cases, decision users, reporting route, and person or group accountable for service delivery.",
              "Clarify what decision the service must support and who accepts the operational risk if the route fails.",
              "A genomics programme can be technically capable but immature as a service if no one owns turnaround, reporting, user feedback and failure response.",
            ],
            sourceIds: [
              "who-national-genomic-surveillance-strategy-2023",
              "phe-case-study",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Sample, metadata and data lineage",
              "Documented linkage from sample or isolate to run, QC result, analysis output, interpreted report, repository submission and archive record.",
              "Fix the point where identifiers, metadata, correction history or handoffs are most likely to break.",
              "The public-health value of sequence data depends on metadata quality, stable linkage and context for interpretation.",
            ],
            sourceIds: [
              "who-genomic-data-sharing-platforms-2025",
              "aphl-ngs-implementation-2016",
              "phe-case-study",
            ],
          },
          {
            cells: [
              "Workflow validation and provenance",
              "Workflow version, execution environment, parameters, inputs, outputs, validation boundary, change-control record and rollback route.",
              "Move the most important routine workflow from informal execution to documented, repeatable, reviewable operation.",
              "Shared or managed workflows reduce some local burden, but the reporting service still needs to know what changed and whether results remain comparable.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "mgen-stec-bioinformatics-validation-2021",
              "mgen-discordant-amr-predictions-2020",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Storage, backup, access and recovery",
              "Storage ownership, retention rule, backup schedule, restore test, access review, security responsibility and data-residency decision.",
              "Test whether the service can recover the files and records needed to reissue or defend a report.",
              "Owning infrastructure without support is a risk; outsourcing infrastructure without access, portability and governance is also a risk.",
            ],
            sourceIds: [
              "pha4ge-infrastructure",
              "who-genomics-costing-tool-manual-2024",
              "who-genomic-data-sharing-platforms-2025",
            ],
          },
          {
            cells: [
              "Workforce and support cover",
              "Named cover for laboratory operation, bioinformatics, systems administration, interpretation, reporting, user support and quality review.",
              "Remove single-person dependency for the step most likely to stop reporting or interpretation.",
              "Capability is not only staff training; it includes support routes, cross-cover, communities of practice, EQA and retained local interpretation.",
            ],
            sourceIds: [
              "who-genomic-surveillance-progress-2023",
              "phe-case-study",
              "east-africa-genomics-landscape-2024",
              "clinical-microbiology-implementation-2026",
            ],
          },
          {
            cells: [
              "Cost, dependency and improvement review",
              "Recurrent cost lines, supplier or partner dependencies, renewal dates, feedback records, EQA outcomes, incident reviews and improvement actions.",
              "Turn the largest unmanaged dependency into a costed, owned, reviewed service decision.",
              "Maturity should not reward the most complex architecture. A simpler model can be more mature if responsibilities, fallback routes and review loops are clearer.",
            ],
            sourceIds: [
              "who-genomics-costing-tool-manual-2024",
              "pha4ge-infrastructure",
              "auspathogen-implementation-2025",
              "east-africa-genomics-landscape-2024",
            ],
          },
        ],
        sourceIds: [
          "who-national-genomic-surveillance-strategy-2023",
          "who-genomic-data-sharing-platforms-2025",
          "pha4ge-infrastructure",
          "who-genomics-costing-tool-manual-2024",
          "who-genomic-surveillance-progress-2023",
          "clinical-microbiology-implementation-2026",
          "phe-case-study",
          "east-africa-genomics-landscape-2024",
          "auspathogen-implementation-2025",
        ],
      },
    ],
    audiences: ["director", "policy", "funder", "lab-lead", "bioinformatician", "it-security", "data-manager", "all"],
    implementationStages: ["exploring", "pilot", "routine-service", "national-scale", "upgrading"],
    organisms: ["general", "enteric-bacteria", "tb", "respiratory-viruses", "amr", "nosocomial", "other"],
    topics: ["implementation", "infrastructure", "sustainability", "workforce", "quality"],
    detailLevel: "summary",
    sourceIds: [
      "pha4ge-infrastructure",
      "who-genomic-surveillance-progress-2023",
      "phe-case-study",
      "who-genomics-costing-tool-manual-2024",
      "east-africa-genomics-landscape-2024",
      "auspathogen-implementation-2025",
      "mgen-eurl-amr-proficiency-test-2023",
      "mgen-harmonization-enterobacteriaceae-enterococci-2021",
      "mgen-stec-bioinformatics-validation-2021",
      "mgen-discordant-amr-predictions-2020",
      "mgen-kenya-amr-genomics-capacity-2023",
      "mgen-uk-delphi-health-protection-2023",
    ],
    gaps: [
      "The beta worksheet supports risk-reduction planning, but a formal maturity rubric and scoring method still need source-backed review.",
      "The PHA4GE tier table is useful for discussion but needs editorial review before it becomes an assessment tool.",
    ],
  }
];
