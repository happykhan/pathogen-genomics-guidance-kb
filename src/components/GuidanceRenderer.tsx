import { SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";
import { sources } from "../data/sources";
import {
  infrastructureLabels,
  isTechnicalProfile,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import { getScoredGuidanceBlocks, getVisibleGuidanceBlocks, relevanceThreshold } from "../lib/guidanceSelection";
import type { GuidanceBlock } from "../types/content";
import type { Profile } from "../types/profile";

type CitationAnchor = { text: string; sourceIds: string[] };
type GuidanceTable = NonNullable<GuidanceBlock["tables"]>[number];
type GuidanceFigure = NonNullable<GuidanceBlock["figures"]>[number];

type Props = {
  profile: Profile;
  showTechnical: boolean;
  showAllSections: boolean;
};

const sourceLookup: Record<string, { label: string; path: string }> = sources;
const sourceStatusLabels = {
  reviewed: "Reviewed source basis",
  partial: "Partial source basis",
  gap: "Gap placeholder",
} as const;

const roleBriefs = {
  director: {
    purpose: "This version frames pathogen genomics as a service investment, not a technology purchase.",
    ask: "Your main ask is to decide the public-health use case, service model, accountable owners, recurrent funding, and governance route.",
    risk: "Watch for hidden recurring costs: storage growth, workflow support, validation, data management, user support, and dependence on one specialist.",
  },
  policy: {
    purpose: "This version focuses on how genomic data should support surveillance, reporting, sharing, and public-health decisions.",
    ask: "Your main ask is to connect the technical service to policy objectives, governance, data-sharing rules, privacy, and cross-organisation responsibilities.",
    risk: "Watch for overclaiming: genomic resolution does not replace sampling design, epidemiology, metadata quality, or legal and ethical review.",
  },
  "lab-lead": {
    purpose: "This version treats sequencing as part of a routine service that must handle samples, failures, reports, users, and quality review.",
    ask: "Your main ask is to define the sample route, QC and validation boundary, reporting product, turnaround expectations, and handoff to bioinformatics and data teams.",
    risk: "Watch for pilot workflows becoming routine services without documented acceptance criteria, exception routes, user feedback, or accreditation planning.",
  },
  bioinformatician: {
    purpose: "This version focuses on making analyses reproducible, supportable, validated, auditable, and connected to reporting decisions.",
    ask: "Your main ask is to define workflow ownership, versions, reference data, QC outputs, provenance records, compute/storage needs, and change-control routes.",
    risk: "Watch for analysis scripts that work for one expert but cannot be rerun, explained, validated, supported, or handed over during routine service.",
  },
  "it-security": {
    purpose: "This version explains what the genomics service is trying to achieve before asking for infrastructure support.",
    ask: "Your main ask is to help provide secure storage, identity and access management, backup and restore routes, network or cloud controls, monitoring, and incident escalation.",
    risk: "Watch for unmanaged research-computing patterns: large data growth, informal file shares, unclear data residency, untested backups, weak offboarding, and unsupported local servers.",
  },
  "data-manager": {
    purpose: "This version focuses on keeping samples, metadata, sequence data, reports, accessions, corrections, and retention decisions linked.",
    ask: "Your main ask is to define identifiers, metadata responsibilities, system-of-record rules, correction routes, sharing records, and archive or deletion decisions.",
    risk: "Watch for broken lineage: a technically correct genome result becomes hard to use if sample identifiers, metadata, QC records, workflow versions, or accession links are missing.",
  },
  funder: {
    purpose: "This version frames genomics capacity as a recurring service with infrastructure, workforce, quality, data, and governance dependencies.",
    ask: "Your main ask is to test whether the proposal includes recurrent costs, implementation owners, sustainability, support, and realistic benefits for the setting.",
    risk: "Watch for equipment-only budgets that omit storage, compute, validation, training, workflow maintenance, data management, and user support.",
  },
  "programme-lead": {
    purpose: "This version is written for the person responsible for getting a pathogen genomics service designed, resourced, and operating.",
    ask: "Your main ask is to align the public-health use case, sample flow, metadata, analysis, storage, reporting, sharing, governance, and support model, then bring the right specialists into each decision.",
    risk: "Watch for one-size-fits-all solutions. The right infrastructure depends on connectivity, people, central IT, data residency, service urgency, and the outputs users need.",
  },
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

function collectBlockReferenceIds(block: GuidanceBlock) {
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
  const scored = getScoredGuidanceBlocks(profile);
  const visible = getVisibleGuidanceBlocks(profile, showAllSections);
  const hiddenCount = scored.filter((item) => !item.included).length;
  const revealTechnical = showTechnical || isTechnicalProfile(profile);
  const referenceIds = Array.from(new Set(visible.flatMap(({ block }) => collectBlockReferenceIds(block))));
  const referenceNumber = new Map(referenceIds.map((sourceId, index) => [sourceId, index + 1]));
  const roleBrief = roleBriefs[profile.role];

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
        </dl>
        <div className="role-orientation">
          <p>
            <strong>For this reader:</strong> {roleBrief.purpose}
          </p>
          <p>
            <strong>What is being asked of you:</strong> {roleBrief.ask}
          </p>
          <p>
            <strong>Risks to watch:</strong> {roleBrief.risk}
          </p>
        </div>
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
