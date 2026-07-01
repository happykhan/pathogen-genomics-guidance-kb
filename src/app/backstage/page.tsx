import Link from "next/link";
import { CheckCircle2, CircleDashed, FileText, GitBranch, Search, TriangleAlert } from "lucide-react";
import {
  evidenceClaimCards,
  getEditorialCoverage,
  sectionSynthesisBriefs,
  whitepaperFragments,
} from "../../data/editorialContent";
import { defaultProfile, defaultProfileVersion } from "../../data/defaultProfile";
import { sources } from "../../data/sources";
import { whitepaperOutline, whitepaperOutlineVersion } from "../../data/whitepaperOutline";
import type { EditorialReviewStatus } from "../../types/editorial";

export const metadata = {
  title: "Backstage editorial debug | Pathogen Genomics Guidance",
};

const statusLabels: Record<EditorialReviewStatus, string> = {
  draft: "Draft",
  reviewed: "Reviewed",
  gap: "Gap",
  deprecated: "Deprecated",
};

function StatusBadge({ status }: { status: EditorialReviewStatus }) {
  const className = status === "reviewed" ? "reviewed" : status === "gap" ? "gap" : status === "deprecated" ? "deprecated" : "draft";
  return <span className={`badge editorial-status ${className}`}>{statusLabels[status]}</span>;
}

function sourceLabel(sourceId: string) {
  return sources[sourceId as keyof typeof sources]?.label ?? sourceId;
}

export default function BackstagePage() {
  const coverage = getEditorialCoverage();
  const briefsBySection = new Map(sectionSynthesisBriefs.map((brief) => [brief.sectionId, brief]));
  const fragmentsBySection = new Map<string, typeof whitepaperFragments>();
  whitepaperFragments.forEach((fragment) => {
    const existing = fragmentsBySection.get(fragment.sectionId) ?? [];
    fragmentsBySection.set(fragment.sectionId, [...existing, fragment].sort((a, b) => a.order - b.order));
  });
  const claimsById = new Map(evidenceClaimCards.map((claim) => [claim.id, claim]));

  return (
    <div className="stack-page backstage-page">
      <section className="page-heading">
        <p className="eyebrow">Backstage</p>
        <h1>Editorial debug view</h1>
        <p>
          This unlinked page exposes the source-to-whitepaper pipeline for review: outline sections, extracted claim cards,
          synthesis briefs, draft fragments, source IDs, conditions, and gaps. Claim cards are source-backed interpretations,
          not verbatim source text. This view is public-safe and does not expose local files or full copyrighted source text.
        </p>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="toolbar">
            <div>
              <p className="eyebrow">Model Versions</p>
              <h2 style={{ margin: "4px 0 0" }}>Dynamic whitepaper defaults</h2>
            </div>
            <Link className="button" href="/api/editorial">
              Open JSON API
            </Link>
          </div>
          <div className="backstage-metrics">
            <div>
              <strong>{whitepaperOutlineVersion}</strong>
              <span>Outline version</span>
            </div>
            <div>
              <strong>{defaultProfileVersion}</strong>
              <span>Default profile version</span>
            </div>
            <div>
              <strong>{defaultProfile.role}</strong>
              <span>Default reader</span>
            </div>
            <div>
              <strong>{defaultProfile.stage}</strong>
              <span>Default stage</span>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-body">
          <p className="eyebrow">Coverage</p>
          <div className="backstage-metrics">
            <div>
              <strong>{coverage.outlineSections}</strong>
              <span>Outline sections</span>
            </div>
            <div>
              <strong>{coverage.claimCards}</strong>
              <span>Claim cards</span>
            </div>
            <div>
              <strong>{coverage.sectionBriefs}</strong>
              <span>Section briefs</span>
            </div>
            <div>
              <strong>{coverage.fragments}</strong>
              <span>Fragments</span>
            </div>
            <div>
              <strong>{coverage.reviewedFragments}</strong>
              <span>Reviewed fragments</span>
            </div>
            <div>
              <strong>{coverage.draftFragments}</strong>
              <span>Draft fragments</span>
            </div>
          </div>
          {coverage.missingClaimIds.length ? (
            <p className="backstage-warning">
              <TriangleAlert size={16} /> Missing claim IDs: {coverage.missingClaimIds.join(", ")}
            </p>
          ) : null}
        </div>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="toolbar">
            <div>
              <p className="eyebrow">Outline</p>
              <h2 style={{ margin: "4px 0 0" }}>Whitepaper section model</h2>
            </div>
            <span className="badge">{whitepaperOutline.length} sections</span>
          </div>

          <div className="backstage-outline">
            {whitepaperOutline.map((section) => {
              const brief = briefsBySection.get(section.id);
              const fragments = fragmentsBySection.get(section.id) ?? [];
              return (
                <article className="backstage-section" key={section.id}>
                  <div className="backstage-section-head">
                    <div>
                      <p className="eyebrow">Section {section.order}</p>
                      <h3>{section.title}</h3>
                    </div>
                    <div className="control-row">
                      <span className="badge">{fragments.length} fragments</span>
                      {brief ? <StatusBadge status={brief.reviewStatus} /> : <span className="badge gap">No brief</span>}
                    </div>
                  </div>
                  <p>{section.purpose}</p>
                  {brief ? (
                    <div className="backstage-brief">
                      <h4>
                        <GitBranch size={16} /> Synthesis brief
                      </h4>
                      <p>
                        <strong>Reader action:</strong> {brief.readerActionAfterReading}
                      </p>
                      <p>
                        <strong>Do not claim:</strong> {brief.doNotClaim.join("; ")}
                      </p>
                      <p>
                        <strong>Known gaps:</strong> {brief.knownGaps.join("; ")}
                      </p>
                    </div>
                  ) : null}

                  <div className="backstage-fragments">
                    {fragments.map((fragment) => (
                      <article className="backstage-fragment" key={fragment.id}>
                        <div className="backstage-fragment-head">
                          <h4>
                            {fragment.reviewStatus === "reviewed" ? (
                              <CheckCircle2 size={16} />
                            ) : fragment.reviewStatus === "gap" ? (
                              <TriangleAlert size={16} />
                            ) : (
                              <CircleDashed size={16} />
                            )}
                            {fragment.title ?? fragment.id}
                          </h4>
                          <div className="control-row">
                            <span className="badge">{fragment.kind}</span>
                            <StatusBadge status={fragment.reviewStatus} />
                          </div>
                        </div>
                        <div className="backstage-prose-block">
                          <p className="eyebrow">Draft whitepaper text</p>
                          <p>{fragment.text}</p>
                        </div>
                        {fragment.conditions ? (
                          <pre className="backstage-json">{JSON.stringify(fragment.conditions, null, 2)}</pre>
                        ) : null}
                        <p className="muted">
                          <strong>Sources:</strong> {fragment.sourceIds.map(sourceLabel).join("; ")}
                        </p>
                        <div className="backstage-evidence">
                          <p>
                            <strong>Extracted claims used, not verbatim source text:</strong>
                          </p>
                          <ul>
                            {fragment.claimIds.map((claimId) => {
                              const claim = claimsById.get(claimId);
                              return (
                                <li key={claimId}>
                                  <span>{claim?.claim ?? `Missing claim: ${claimId}`}</span>
                                  {claim ? (
                                    <small>
                                      Source pointer: {claim.sourceLocator}; source ID: {claim.sourceId}
                                    </small>
                                  ) : null}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        {fragment.reviewerNotes ? <p className="muted">Review note: {fragment.reviewerNotes}</p> : null}
                      </article>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="toolbar">
            <div>
              <p className="eyebrow">Extracted Claim Cards</p>
              <h2 style={{ margin: "4px 0 0" }}>Extracted claims, not source text</h2>
            </div>
            <span className="badge">{evidenceClaimCards.length} cards</span>
          </div>
          <p className="muted" style={{ marginTop: 0 }}>
            A claim card is our concise interpretation of what a source supports. The source locator points back to the
            source card, page, section, table, or figure that should justify the claim.
          </p>
          <div className="claim-card-grid">
            {evidenceClaimCards.map((claim) => (
              <article className="claim-card" key={claim.id}>
                <div className="backstage-fragment-head">
                  <h3>
                    <FileText size={16} /> {claim.id}
                  </h3>
                  <StatusBadge status={claim.reviewStatus} />
                </div>
                <p>
                  <strong>Extracted claim:</strong> {claim.claim}
                </p>
                <p className="muted">
                  <strong>Source:</strong> {sourceLabel(claim.sourceId)}
                </p>
                <p className="muted">
                  <strong>Source pointer:</strong> {claim.sourceLocator}
                </p>
                {claim.extractedText ? (
                  <p className="muted">
                    <strong>Passage note:</strong> {claim.extractedText}
                  </p>
                ) : null}
                <p className="muted">
                  <strong>Candidate sections:</strong> {claim.candidateSectionIds.join(", ")}
                </p>
                <p className="muted">
                  <Search size={14} /> {claim.tags.join(", ")}
                </p>
                {claim.limitations ? <p className="muted">Limitation: {claim.limitations}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
