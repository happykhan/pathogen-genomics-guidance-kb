import { AlertTriangle, BookOpen, SlidersHorizontal } from "lucide-react";
import { guidanceBlocks } from "../data/guidanceBlocks";
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

type Props = {
  profile: Profile;
  showTechnical: boolean;
  showAllSections: boolean;
};

const relevanceThreshold = 7;

export function GuidanceRenderer({ profile, showTechnical, showAllSections }: Props) {
  const scored = guidanceBlocks.map((block, index) => ({
    block,
    index,
    score: scoreGuidanceBlock(block, profile),
  }));
  const visible = scored.filter((item) => showAllSections || item.score >= relevanceThreshold);
  const hiddenCount = scored.filter((item) => item.score < relevanceThreshold).length;
  const revealTechnical = showTechnical || isTechnicalProfile(profile);

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
          {visible.map(({ block, index, score }) => (
            <li key={block.id}>
              <a href={`#${block.id}`}>
                <span>{index + 1}.</span>
                {block.title}
              </a>
              {score < relevanceThreshold ? <span className="toc-note">expanded view</span> : null}
            </li>
          ))}
        </ol>
      </nav>

      <div className="whitepaper-body">
        {visible.map(({ block, index, score }) => (
          <section
            className={score < relevanceThreshold ? "document-section low-relevance" : "document-section"}
            id={block.id}
            key={block.id}
          >
            <div className="section-kicker">
              <span>Section {index + 1}</span>
              <span>{block.detailLevel}</span>
            </div>
            <h2>{block.title}</h2>
            <p className="section-summary">{block.summary}</p>
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {block.technicalDetail && revealTechnical ? (
              <aside className="technical-detail">
                <strong>
                  <SlidersHorizontal size={16} aria-hidden="true" /> Technical detail
                </strong>
                {block.technicalDetail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </aside>
            ) : null}
            {block.gaps?.length ? (
              <aside className="gap-box">
                <strong>
                  <AlertTriangle size={16} aria-hidden="true" /> Evidence gap
                </strong>
                {block.gaps.map((gap) => (
                  <p key={gap}>{gap}</p>
                ))}
              </aside>
            ) : null}
            <footer className="section-sources">
              <span>
                <BookOpen size={14} aria-hidden="true" />
                Source basis
              </span>
              {block.sourceIds.map((sourceId) => (
                <code key={sourceId}>{sourceId}</code>
              ))}
            </footer>
          </section>
        ))}
      </div>
    </section>
  );
}
