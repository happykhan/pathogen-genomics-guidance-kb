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
type GuidanceTable = NonNullable<(typeof guidanceBlocks)[number]["tables"]>[number];
type GuidanceFigure = NonNullable<(typeof guidanceBlocks)[number]["figures"]>[number];

type Props = {
  profile: Profile;
  showTechnical: boolean;
  showAllSections: boolean;
};

const relevanceThreshold = 7;
const sourceLookup: Record<string, { label: string; path: string }> = sources;
const sourceStatusLabels = {
  reviewed: "Reviewed source basis",
  partial: "Partial source basis",
  gap: "Gap placeholder",
} as const;

function CitationRun({ sourceIds, referenceNumber }: { sourceIds: string[]; referenceNumber: Map<string, number> }) {
  if (!sourceIds.length) return null;
  const refs = sourceIds
    .map((sourceId) => {
      const number = referenceNumber.get(sourceId);
      const source = sourceLookup[sourceId];
      return number ? { sourceId, number, label: source?.label ?? sourceId } : null;
    })
    .filter((ref): ref is { sourceId: string; number: number; label: string } => ref !== null)
    .sort((a, b) => a.number - b.number);
  if (!refs.length) return null;
  const numbers = refs.map((ref) => ref.number);

  return (
    <details className="citation-run">
      <summary aria-label={`Show cited sources ${numbers.join(", ")}`}>[{numbers.join(",")}]</summary>
      <span className="citation-popover" role="list">
        {refs.map((ref) => (
          <a href={`#ref-${ref.number}`} key={ref.sourceId} role="listitem">
            <span>[{ref.number}]</span> {ref.label}
          </a>
        ))}
      </span>
    </details>
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

function tableUseLabel(title: string) {
  const normalized = title.toLowerCase();
  if (normalized.includes("checklist")) return "Checklist";
  if (normalized.includes("register") || normalized.includes("log")) return "Record template";
  if (normalized.includes("matrix") || normalized.includes("map") || normalized.includes("decision")) return "Decision aid";
  if (normalized.includes("worksheet") || normalized.includes("scenario")) return "Worksheet";
  return "Planning table";
}

function publicTableTitle(title: string) {
  return title.replace(/^Beta\s+/i, "");
}

function publicColumnTitle(title: string) {
  return title.replace(/^Beta\s+/i, "");
}

function GuidanceTableView({ table, referenceNumber }: { table: GuidanceTable; referenceNumber: Map<string, number> }) {
  return (
    <figure className="document-table">
      <figcaption>
        <span className="table-kind">{tableUseLabel(table.title)}</span>
        <strong>{publicTableTitle(table.title)}</strong>
        {table.summary ? <span>{table.summary}</span> : null}
        <CitationRun sourceIds={table.sourceIds ?? []} referenceNumber={referenceNumber} />
      </figcaption>
      <div className="document-table-scroll">
        <table>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col">
                  {publicColumnTitle(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={`${table.title}-${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={`${table.title}-${rowIndex}-${cellIndex}`}>
                    {cell}
                    {cellIndex === row.cells.length - 1 ? (
                      <>
                        {" "}
                        <CitationRun sourceIds={row.sourceIds ?? []} referenceNumber={referenceNumber} />
                      </>
                    ) : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function GuidanceFigureView({ figure, referenceNumber }: { figure: GuidanceFigure; referenceNumber: Map<string, number> }) {
  return (
    <figure className="document-figure">
      <img src={figure.imageSrc} alt={figure.alt} />
      <figcaption>
        <strong>{figure.title}</strong>
        {figure.caption ? <span>{figure.caption}</span> : null}
        <CitationRun sourceIds={figure.sourceIds ?? []} referenceNumber={referenceNumber} />
      </figcaption>
    </figure>
  );
}

function collectBlockReferenceIds(block: (typeof guidanceBlocks)[number]) {
  const ids = new Set(block.sourceIds);
  block.summarySourceIds?.forEach((sourceId) => ids.add(sourceId));
  Object.values(block.bodySourceIds ?? {}).forEach((sourceIds) => sourceIds.forEach((sourceId) => ids.add(sourceId)));
  Object.values(block.bodyCitationAnchors ?? {}).forEach((anchors) =>
    anchors.forEach((anchor) => anchor.sourceIds.forEach((sourceId) => ids.add(sourceId))),
  );
  block.subsections?.forEach((subsection) => {
    Object.values(subsection.bodySourceIds ?? {}).forEach((sourceIds) => sourceIds.forEach((sourceId) => ids.add(sourceId)));
    Object.values(subsection.bodyCitationAnchors ?? {}).forEach((anchors) =>
      anchors.forEach((anchor) => anchor.sourceIds.forEach((sourceId) => ids.add(sourceId))),
    );
  });
  Object.values(block.technicalDetailSourceIds ?? {}).forEach((sourceIds) =>
    sourceIds.forEach((sourceId) => ids.add(sourceId)),
  );
  Object.values(block.technicalDetailCitationAnchors ?? {}).forEach((anchors) =>
    anchors.forEach((anchor) => anchor.sourceIds.forEach((sourceId) => ids.add(sourceId))),
  );
  block.tables?.forEach((table) => {
    table.sourceIds?.forEach((sourceId) => ids.add(sourceId));
    table.rows.forEach((row) => row.sourceIds?.forEach((sourceId) => ids.add(sourceId)));
  });
  block.figures?.forEach((figure) => figure.sourceIds?.forEach((sourceId) => ids.add(sourceId)));
  return Array.from(ids);
}

export function GuidanceRenderer({ profile, showTechnical, showAllSections }: Props) {
  const scored = guidanceBlocks.map((block, index) => ({
    block,
    index,
    score: scoreGuidanceBlock(block, profile),
  }));
  const visible = scored
    .filter((item) => showAllSections || item.score >= relevanceThreshold)
    .sort((left, right) => right.score - left.score || left.index - right.index);
  const hiddenCount = scored.filter((item) => item.score < relevanceThreshold).length;
  const revealTechnical = showTechnical || isTechnicalProfile(profile);
  const referenceIds = Array.from(new Set(visible.flatMap(({ block }) => collectBlockReferenceIds(block))));
  const referenceNumber = new Map(referenceIds.map((sourceId, index) => [sourceId, index + 1]));
  const priorityTitles = visible.slice(0, 4).map(({ block }) => block.title);

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
        {priorityTitles.length ? (
          <p className="profile-priority-note">
            Gnomey prioritised {priorityTitles.map((title) => title.toLowerCase()).join("; ")} for this profile.
          </p>
        ) : null}
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
              <span className={`source-status ${block.sourceStatus}`}>{sourceStatusLabels[block.sourceStatus]}</span>
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
            {block.figures?.map((figure) => (
              <GuidanceFigureView key={figure.title} figure={figure} referenceNumber={referenceNumber} />
            ))}
            {block.tables?.map((table) => (
              <GuidanceTableView key={table.title} table={table} referenceNumber={referenceNumber} />
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
            {referenceIds.map((sourceId, index) => {
              const source = sourceLookup[sourceId];
              const number = index + 1;
              return (
                <li id={`ref-${number}`} key={sourceId} tabIndex={-1}>
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
