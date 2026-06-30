import { AlertTriangle, BookOpen, SlidersHorizontal } from "lucide-react";
import { guidanceBlocks } from "../data/guidanceBlocks";
import { scoreGuidanceBlock } from "../lib/recommendations";
import { isTechnicalProfile } from "../lib/profile";
import type { Profile } from "../types/profile";

type Props = {
  profile: Profile;
  showTechnical: boolean;
};

export function GuidanceRenderer({ profile, showTechnical }: Props) {
  const ranked = [...guidanceBlocks]
    .map((block) => ({ block, score: scoreGuidanceBlock(block, profile) }))
    .filter((item) => item.score >= 4)
    .sort((a, b) => b.score - a.score);
  const revealTechnical = showTechnical || isTechnicalProfile(profile);

  return (
    <section className="panel" aria-label="Tailored guidance document">
      <div className="panel-body">
        {ranked.map(({ block }) => (
          <article className="guidance-block" key={block.id}>
            <p className="eyebrow">{block.detailLevel}</p>
            <h2>{block.title}</h2>
            <p className="muted">{block.summary}</p>
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {block.technicalDetail && revealTechnical ? (
              <div className="technical-detail">
                <strong>
                  <SlidersHorizontal size={16} aria-hidden="true" /> Technical detail
                </strong>
                {block.technicalDetail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {block.gaps?.length ? (
              <div className="gap-box">
                <strong>
                  <AlertTriangle size={16} aria-hidden="true" /> Evidence gap
                </strong>
                {block.gaps.map((gap) => (
                  <p key={gap}>{gap}</p>
                ))}
              </div>
            ) : null}
            <div className="block-meta">
              <span className="badge">
                <BookOpen size={14} aria-hidden="true" />
                Source-backed
              </span>
              {block.sourceIds.map((sourceId) => (
                <span className="badge source" key={sourceId}>
                  {sourceId}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
