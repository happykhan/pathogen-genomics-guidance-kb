import Link from "next/link";
import { CheckCircle2, CircleDashed, FileText, GitBranch, Search, TriangleAlert } from "lucide-react";
import {
  evidenceItems,
  evidenceClaimCards,
  getEditorialCoverage,
  sectionSynthesisBriefs,
  whitepaperFragments,
} from "../../data/editorialContent";
import { defaultProfile, defaultProfileVersion } from "../../data/defaultProfile";
import { sources } from "../../data/sources";
import { whitepaperOutline, whitepaperOutlineVersion, whitepaperTarget } from "../../data/whitepaperOutline";
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
  const evidenceById = new Map(evidenceItems.map((item) => [item.id, item]));

  return (
    <div className="stack-page backstage-page">
      <section className="page-heading">
        <p className="eyebrow">Backstage</p>
        <h1>Editorial debug view</h1>
        <p>
          This unlinked page exposes the source-to-whitepaper pipeline for review: source evidence pointers, extracted claim
          cards, synthesis briefs, draft fragments, source IDs, conditions, and gaps. The evidence pointer is the closest
          public-safe link back to the original source. The claim card is our source-backed interpretation. The fragment is
          synthesized whitepaper prose. This view does not expose local files or full copyrighted source text.
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
          <p className="eyebrow">Editorial Target</p>
          <h2 style={{ margin: "4px 0 0" }}>{whitepaperTarget.title}</h2>
          <div className="backstage-brief" style={{ marginTop: 16 }}>
            <p>
              <strong>Primary audience:</strong> {whitepaperTarget.primaryAudience}
            </p>
            <p>
              <strong>Practical use:</strong> {whitepaperTarget.practicalUse}
            </p>
            <p>
              <strong>Core question:</strong> {whitepaperTarget.coreQuestion}
            </p>
          </div>
          <div className="grid-two" style={{ marginTop: 16 }}>
            <div className="backstage-brief">
              <h3>Success criteria</h3>
              <ul>
                {whitepaperTarget.successCriteria.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </div>
            <div className="backstage-brief">
              <h3>Out of scope</h3>
              <ul>
                {whitepaperTarget.outOfScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
              <strong>{coverage.evidenceItems}</strong>
              <span>Evidence items</span>
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
          {coverage.missingEvidenceItemIds.length ? (
            <p className="backstage-warning">
              <TriangleAlert size={16} /> Missing evidence item IDs: {coverage.missingEvidenceItemIds.join(", ")}
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
                          <p className="eyebrow">Layer 3 / Synthesized whitepaper fragment</p>
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
                            <strong>Evidence chain used for this fragment:</strong> read from layer 1 to layer 3 before
                            approving.
                          </p>
                          <ul>
                            {fragment.claimIds.map((claimId) => {
                              const claim = claimsById.get(claimId);
                              return (
                                <li key={claimId}>
                                  {claim?.evidenceItemIds?.map((itemId) => {
                                    const item = evidenceById.get(itemId);
                                    const directQuote = item?.directQuote ?? item?.excerpt;
                                    return (
                                      <span className="evidence-item" key={itemId}>
                                        {item ? (
                                          <>
                                            {directQuote ? (
                                              <em>Layer 1 / Direct quote from source: "{directQuote}"</em>
                                            ) : (
                                              <em>
                                                Layer 1 / No direct source quote captured yet; use the locator and passage
                                                summary to check the original source.
                                              </em>
                                            )}
                                            <span>
                                              <strong>Public-safe passage note:</strong> {item.passageSummary}
                                            </span>
                                            <small>
                                              {item.evidenceType}; {item.sourceLocator}
                                            </small>
                                          </>
                                        ) : (
                                          `Missing evidence item: ${itemId}`
                                        )}
                                      </span>
                                    );
                                  })}
                                  {!claim?.evidenceItemIds?.length && claim?.extractedText ? (
                                    <span>
                                      <strong>Layer 1 / Legacy source evidence note or short excerpt:</strong>{" "}
                                      {claim.extractedText}
                                    </span>
                                  ) : null}
                                  <span>
                                    <strong>Layer 2 / Extracted claim, not verbatim source text:</strong>{" "}
                                    {claim?.claim ?? `Missing claim: ${claimId}`}
                                  </span>
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
            A claim card is layer 2 of the editorial chain. It links one or more layer-1 source evidence pointers to a
            concise interpretation of what those sources support. It is not original source text and should not be approved
            unless the source locator, passage note, limitation and candidate section all make sense.
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
                  <strong>Layer 2 / Extracted claim:</strong> {claim.claim}
                </p>
                <div className="backstage-evidence compact">
                  <p>
                    <strong>Layer 1 / Evidence pointers behind this claim:</strong>
                  </p>
                  <ul>
                    {claim.evidenceItemIds.map((itemId) => {
                      const item = evidenceById.get(itemId);
                      const directQuote = item?.directQuote ?? item?.excerpt;
                      return (
                        <li key={itemId}>
                          {directQuote ? (
                            <span>Direct quote from source: "{directQuote}"</span>
                          ) : (
                            <span>No direct source quote captured yet; use the locator and passage note.</span>
                          )}
                          <span>Public-safe passage note: {item?.passageSummary ?? `Missing evidence item: ${itemId}`}</span>
                          {item ? (
                            <small>
                              {item.evidenceType}; {item.sourceLocator}
                            </small>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className="muted">
                  <strong>Source:</strong> {sourceLabel(claim.sourceId)}
                </p>
                <p className="muted">
                  <strong>Source pointer:</strong> {claim.sourceLocator}
                </p>
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
