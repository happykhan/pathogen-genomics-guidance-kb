import { AlertTriangle, FileText } from "lucide-react";
import { guidanceBlocks } from "../../data/guidanceBlocks";
import { sources } from "../../data/sources";

const sourceLookup: Record<string, { label: string; path: string }> = sources;

const chapterGaps = [
  {
    title: "Metadata and identifier model",
    detail:
      "A source-backed model is still needed for linking sample or isolate identifiers, sequencing runs, raw data, workflow runs, results, reports, and repository accessions.",
    sourceNeed: "WHO, INSDC/NCBI, GA4GH, APHL, UKHSA, or other public-health metadata guidance.",
  },
  {
    title: "Repository and data-sharing decision pathway",
    detail:
      "The current sources support the principle that sharing must consider purpose, confidentiality, risk, and access model, but do not yet provide a reusable decision pathway.",
    sourceNeed: "WHO, ECDC, UKHSA, CDC, APHL, GISAID, NCBI, or national public-health data-sharing guidance.",
  },
  {
    title: "Governance beyond identity and access management",
    detail:
      "PHA4GE supports IAM, auditability, user lifecycle, and information-governance coordination. Broader privacy, ethics, legal basis, benefit sharing, and cross-border governance need additional sources.",
    sourceNeed: "WHO, national public-health ethics, data protection, and pathogen data-sharing sources.",
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
      "The current evidence supports capital-planning and service-transition lessons from PHE, but not a generic total-cost model for storage, compute, software maintenance, people, support, and renewal.",
    sourceNeed: "WHO implementation, procurement, costing, or health-system planning sources.",
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
