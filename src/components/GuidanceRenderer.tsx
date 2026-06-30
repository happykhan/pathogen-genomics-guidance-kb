import { SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { guidanceBlocks } from "../data/guidanceBlocks";
import { sources } from "../data/sources";
import {
  goalLabels,
  infrastructureLabels,
  isTechnicalProfile,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import { scoreGuidanceBlock } from "../lib/recommendations";
import type { Profile } from "../types/profile";

type CitationAnchor = { text: string; sourceIds: string[] };

type Props = {
  profile: Profile;
  showTechnical: boolean;
  showAllSections: boolean;
};

const relevanceThreshold = 7;
const sourceLookup: Record<string, { label: string; path: string }> = sources;

function CitationRun({ sourceIds, referenceNumber }: { sourceIds: string[]; referenceNumber: Map<string, number> }) {
  if (!sourceIds.length) return null;
  const numbers = sourceIds
    .map((sourceId) => referenceNumber.get(sourceId))
    .filter((number): number is number => number !== undefined)
    .sort((a, b) => a - b);
  if (!numbers.length) return null;

  return (
    <span className="citation-run" aria-label="Section sources">
      <a href="#references">[{numbers.join(",")}]</a>
    </span>
  );
}

function TextWithCitations({
  text,
  anchors = [],
  endSourceIds = [],
  referenceNumber,
}: {
  text: string;
  anchors?: CitationAnchor[];
  endSourceIds?: string[];
  referenceNumber: Map<string, number>;
}) {
  if (!anchors.length) {
    return (
      <>
        {text} <CitationRun sourceIds={endSourceIds} referenceNumber={referenceNumber} />
      </>
    );
  }

  const parts: ReactNode[] = [];
  let cursor = 0;

  anchors.forEach((anchor, anchorIndex) => {
    const start = text.indexOf(anchor.text, cursor);
    if (start === -1) return;
    const end = start + anchor.text.length;
    parts.push(text.slice(cursor, end));
    parts.push(" ");
    parts.push(<CitationRun key={`citation-${anchorIndex}`} sourceIds={anchor.sourceIds} referenceNumber={referenceNumber} />);
    parts.push(" ");
    cursor = end;
  });

  parts.push(text.slice(cursor));

  return (
    <>
      {parts}
      {endSourceIds.length ? <> <CitationRun sourceIds={endSourceIds} referenceNumber={referenceNumber} /></> : null}
    </>
  );
}

export function GuidanceRenderer({ profile, showTechnical, showAllSections }: Props) {
  const scored = guidanceBlocks.map((block, index) => ({
    block,
    index,
    score: scoreGuidanceBlock(block, profile),
  }));
  const visible = scored.filter((item) => showAllSections || item.score >= relevanceThreshold);
  const hiddenCount = scored.filter((item) => item.score < relevanceThreshold).length;
  const revealTechnical = showTechnical || isTechnicalProfile(profile);
  const referenceIds = Array.from(new Set(visible.flatMap(({ block }) => block.sourceIds)));
  const referenceNumber = new Map(referenceIds.map((sourceId, index) => [sourceId, index + 1]));

  return (
    <section className="whitepaper" aria-label="Tailored guidance document">
      <header className="whitepaper-cover">
        <p className="eyebrow">Tailored whitepaper</p>
        <h1>Pathogen genomics data and bioinformatics infrastructure guidance</h1>
        <p className="whitepaper-dek">
          A source-backed guidance document tailored for {roleLabels[profile.role].toLowerCase()} readers at the{" "}
          {stageLabels[profile.stage].toLowerCase()} stage, focused on{" "}
          {profile.organisms.map((organism) => organismLabels[organism].toLowerCase()).join(", ")}.
        </p>
        <dl className="document-profile">
          <div>
            <dt>Reader</dt>
            <dd>{roleLabels[profile.role]}</dd>
          </div>
          <div>
            <dt>Programme stage</dt>
            <dd>{stageLabels[profile.stage]}</dd>
          </div>
          <div>
            <dt>Compute context</dt>
            <dd>{infrastructureLabels[profile.infrastructure]}</dd>
          </div>
          <div>
            <dt>Immediate goal</dt>
            <dd>{profile.goals.map((goal) => goalLabels[goal]).join(", ")}</dd>
          </div>
        </dl>
        {hiddenCount && !showAllSections ? (
          <p className="omission-note">
            {hiddenCount} lower-relevance section{hiddenCount === 1 ? " is" : "s are"} hidden for this profile.
          </p>
        ) : null}
      </header>

      <nav className="whitepaper-toc" aria-label="Document contents">
        <h2>Contents</h2>
        <ol>
          {visible.map(({ block, score }, visibleIndex) => (
            <li key={block.id}>
              <a href={`#${block.id}`}>
                <span>{visibleIndex + 1}.</span>
                {block.title}
              </a>
              {score < relevanceThreshold ? <span className="toc-note">expanded view</span> : null}
            </li>
          ))}
        </ol>
      </nav>

      <div className="whitepaper-body">
        {visible.map(({ block, score }, visibleIndex) => (
          <section
            className={score < relevanceThreshold ? "document-section low-relevance" : "document-section"}
            id={block.id}
            key={block.id}
          >
            <div className="section-kicker">
              <span>Section {visibleIndex + 1}</span>
              <span>{block.detailLevel}</span>
            </div>
            <h2>{block.title}</h2>
            <p className="section-summary">
              {block.summary} <CitationRun sourceIds={block.summarySourceIds ?? []} referenceNumber={referenceNumber} />
            </p>
            {block.body.map((paragraph, paragraphIndex) => (
              <p key={paragraph}>
                <TextWithCitations
                  text={paragraph}
                  anchors={block.bodyCitationAnchors?.[paragraphIndex]}
                  endSourceIds={block.bodySourceIds?.[paragraphIndex] ?? []}
                  referenceNumber={referenceNumber}
                />
              </p>
            ))}
            {block.subsections?.map((subsection) => (
              <section className="document-subsection" key={subsection.title}>
                <h3>{subsection.title}</h3>
                {subsection.body.map((paragraph, paragraphIndex) => (
                  <p key={paragraph}>
                    <TextWithCitations
                      text={paragraph}
                      anchors={subsection.bodyCitationAnchors?.[paragraphIndex]}
                      endSourceIds={subsection.bodySourceIds?.[paragraphIndex] ?? []}
                      referenceNumber={referenceNumber}
                    />
                  </p>
                ))}
              </section>
            ))}
            {block.technicalDetail && revealTechnical ? (
              <aside className="technical-detail">
                <strong>
                  <SlidersHorizontal size={16} aria-hidden="true" /> Technical detail
                </strong>
                {block.technicalDetail.map((paragraph, paragraphIndex) => (
                  <p key={paragraph}>
                    <TextWithCitations
                      text={paragraph}
                      anchors={block.technicalDetailCitationAnchors?.[paragraphIndex]}
                      endSourceIds={block.technicalDetailSourceIds?.[paragraphIndex] ?? []}
                      referenceNumber={referenceNumber}
                    />
                  </p>
                ))}
              </aside>
            ) : null}
          </section>
        ))}

        <section className="document-section references-section" id="references" aria-label="References">
          <div className="section-kicker">
            <span>References</span>
          </div>
          <h2>Sources Cited</h2>
          <ol>
            {referenceIds.map((sourceId) => {
              const source = sourceLookup[sourceId];
              return (
                <li key={sourceId}>
                  {source ? (
                    <>
                      <span>{source.label}</span>
                      <code>{source.path}</code>
                    </>
                  ) : (
                    <span>{sourceId}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </section>
  );
}
