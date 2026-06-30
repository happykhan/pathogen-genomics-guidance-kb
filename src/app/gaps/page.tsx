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
      "A draft source-backed lineage table now links samples or isolates, metadata, sequencing runs, raw data, QC, workflow runs, results, reports, sharing events, and retention. The remaining work is repository- and organism-specific field mapping.",
    sourceNeed: "INSDC/NCBI, ENA, GISAID, GA4GH, APHL, UKHSA, or public-health metadata field implementation guidance.",
  },
  {
    title: "Repository and data-sharing decision pathway",
    detail:
      "WHO platform principles now provide selection dimensions. The KB still needs to turn those dimensions into a practical decision pathway for public, controlled, operational, and internal sharing.",
    sourceNeed: "WHO platform guidance, INSDC/NCBI, GISAID, ECDC, UKHSA, CDC, APHL, and national public-health data-sharing guidance.",
  },
  {
    title: "Governance beyond identity and access management",
    detail:
      "WHO platform guidance now covers governance, access, benefit sharing, security, and sustainability. The remaining work is to translate that into country/laboratory governance roles, legal review points, and cross-border sharing options.",
    sourceNeed: "WHO platform guidance plus national public-health ethics, data protection, and pathogen data-sharing sources.",
  },
  {
    title: "Pipeline validation and change control",
    detail:
      "The PHE case study supports parallel running, comparison, troubleshooting, and accreditation review. A generic release, rollback, emergency-update, and revalidation runbook is still missing.",
    sourceNeed: "APHL, CDC/APHL, ISO 15189 bioinformatics, UKHSA, or laboratory-quality guidance.",
  },
  {
    title: "Costing and recurrent service model",
    detail:
      "WHO's costing tool and the new economic synthesis provide category and scenario framing. The remaining gap is a setting-specific quantitative model that links costs to service models, staffing patterns, pathogen programmes, and measured value evidence.",
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
