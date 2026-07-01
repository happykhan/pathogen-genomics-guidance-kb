import { AlertTriangle, FileText } from "lucide-react";
import { guidanceBlocks } from "../../data/guidanceBlocks";
import { sources } from "../../data/sources";

const sourceLookup: Record<string, { label: string; path: string }> = sources;

const chapterGaps = [
  {
    title: "Economic and public-health value case",
    detail:
      "The guide now has a source-backed investment-case section and economic synthesis note. The remaining gap is comparative extraction of study methods and quantitative estimates before making numeric return-on-investment claims.",
    sourceNeed:
      "Economic evaluations, systematic reviews, national implementation reports, and organism-specific public-health outbreak case studies.",
  },
  {
    title: "Metadata and identifier model",
    detail:
      "The guide now has a source-backed lineage model and organism/use-case field-priority table linking samples or isolates, metadata, sequencing runs, raw data, QC, workflow runs, results, reports, sharing events, accessions, and retention. The remaining work is repository- and organism-specific field mapping.",
    sourceNeed: "INSDC/NCBI, ENA, GISAID, GA4GH, APHL, UKHSA, or public-health metadata field implementation guidance.",
  },
  {
    title: "Repository and data-sharing decision pathway",
    detail:
      "The guide now has beta route-map and governance-review tables for public, controlled, operational, partner-workspace, and retained-local sharing. The remaining work is direct extraction of repository-specific field templates, current platform rules, and local legal or ethics requirements.",
    sourceNeed: "INSDC/NCBI, GISAID, ECDC, UKHSA, CDC, APHL, national public-health data-sharing guidance, and jurisdiction-specific legal or ethics sources.",
  },
  {
    title: "Governance beyond identity and access management",
    detail:
      "The guide now has beta governance-review prompts for sensitivity, access, attribution, benefit sharing, data residency, platform location, correction, replacement, and withdrawal. The remaining work is jurisdiction-specific review and local role assignment.",
    sourceNeed: "WHO platform guidance plus national public-health ethics, data protection, and pathogen data-sharing sources.",
  },
  {
    title: "Pipeline validation and change control",
    detail:
      "The guide now has beta release/change-control, SOP handoff, shared-workflow adoption, and report-template readiness checklists. The remaining work is local QA/accreditation review and organism-specific QC/reportability thresholds.",
    sourceNeed: "APHL, CDC/APHL, ISO 15189 bioinformatics, UKHSA, laboratory-quality guidance, and pathogen-specific validation sources.",
  },
  {
    title: "Organism-specific report templates and QC thresholds",
    detail:
      "The guide now has beta reporting fields, limitations prompts, and automated organism-profile QA for enteric bacteria, respiratory viruses, TB/AMR, and healthcare-associated infection. The remaining work is current report examples, nomenclature rules, cluster interpretation criteria, repository fields, and QC thresholds by organism.",
    sourceNeed:
      "Salmonella, STEC, Listeria, influenza, RSV, SARS-CoV-2, TB, AMR and healthcare-associated infection reporting templates from national public-health or laboratory-quality sources.",
  },
  {
    title: "Costing and recurrent service model",
    detail:
      "WHO's costing tool and the economic synthesis provide category and scenario framing. The guide now has beta scenario and workforce-capacity worksheets. The remaining gap is a setting-specific quantitative model that links costs to throughput, service model, staffing, pathogen programme, and measured value evidence.",
    sourceNeed: "WHO costing tool, national implementation reports, procurement evidence, and economic evaluations.",
  },
  {
    title: "Formal maturity model",
    detail:
      "PHA4GE vignettes and survey dimensions support capability thinking, but the KB still needs a source-backed assessment model that avoids false precision.",
    sourceNeed: "WHO, ECDC, APHL, UKHSA, or national readiness/maturity frameworks.",
  },
];

const blockGaps = guidanceBlocks.flatMap((block) =>
  (block.gaps ?? []).map((gap) => ({
    blockTitle: block.title,
    gap,
    sourceLabels: block.sourceIds.map((sourceId) => sourceLookup[sourceId]?.label ?? sourceId),
  })),
);

export default function GapsPage() {
  return (
    <div className="stack-page">
      <section className="page-heading">
        <p className="eyebrow">Editorial Worklist</p>
        <h1>Needs More Work</h1>
        <p>
          This page keeps unresolved evidence needs out of the reader-facing whitepaper while making the remaining work explicit
          for editors, reviewers, and contributors.
        </p>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="toolbar">
            <div>
              <p className="eyebrow">Priority Source Needs</p>
              <h2 style={{ margin: "4px 0 0" }}>Evidence to extract next</h2>
            </div>
            <span className="badge gap">{chapterGaps.length} open areas</span>
          </div>
          <div className="gap-list">
            {chapterGaps.map((item) => (
              <article className="gap-card" key={item.title}>
                <AlertTriangle size={18} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <p className="muted">
                    <strong>Useful sources:</strong> {item.sourceNeed}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="toolbar">
            <div>
              <p className="eyebrow">Dynamic Guide</p>
              <h2 style={{ margin: "4px 0 0" }}>Section-specific evidence needs</h2>
            </div>
            <span className="badge gap">{blockGaps.length} flagged items</span>
          </div>
          <div className="gap-list">
            {blockGaps.map((item) => (
              <article className="gap-card" key={`${item.blockTitle}-${item.gap}`}>
                <FileText size={18} aria-hidden="true" />
                <div>
                  <h3>{item.blockTitle}</h3>
                  <p>{item.gap}</p>
                  <p className="muted">
                    <strong>Current source basis:</strong> {item.sourceLabels.join("; ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
