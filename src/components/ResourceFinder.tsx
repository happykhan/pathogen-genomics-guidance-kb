"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { resources } from "../data/resources";
import { scoreResource } from "../lib/recommendations";
import { organismLabels, parseProfileFromUrl, roleLabels, stageLabels } from "../lib/profile";
import { defaultProfile, type Profile } from "../types/profile";

export function ResourceFinder() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [query, setQuery] = useState("");
  const [onlyRecommended, setOnlyRecommended] = useState(true);

  useEffect(() => {
    setProfile(parseProfileFromUrl(window.location.search));
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...resources]
      .map((resource) => ({ resource, score: scoreResource(resource, profile) }))
      .filter(({ resource, score }) => {
        const haystack = [
          resource.title,
          resource.agency,
          resource.year,
          resource.summary,
          resource.whyUseful,
          resource.documentType,
          ...resource.topics,
          ...resource.keywords,
        ]
          .join(" ")
          .toLowerCase();
        const matchesText = !q || haystack.includes(q);
        const matchesRecommendation = !onlyRecommended || score >= 5;
        return matchesText && matchesRecommendation;
      })
      .sort((a, b) => b.score - a.score || a.resource.title.localeCompare(b.resource.title));
  }, [profile, query, onlyRecommended]);

  return (
    <section>
      <div className="hero-workspace">
        <div>
          <p className="eyebrow">Resource finder</p>
          <h1 className="workspace-title">Find the public-health genomics documents that match the job.</h1>
          <p className="workspace-copy">
            This catalogue separates extracted source material from candidate documents that still need careful extraction.
            Search terms are matched against titles, agencies, topics, and hand-curated keywords.
          </p>
        </div>
        <aside className="panel">
          <div className="panel-body">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Profile used for ranking</h2>
            <p className="muted">
              {roleLabels[profile.role]} at {stageLabels[profile.stage].toLowerCase()} stage, focused on{" "}
              {profile.organisms.map((organism) => organismLabels[organism]).join(", ")}.
            </p>
          </div>
        </aside>
      </div>

      <div className="toolbar">
        <label className="form-field" style={{ flex: "1 1 320px" }}>
          <span className="muted">Search</span>
          <span style={{ position: "relative" }}>
            <Search size={17} style={{ left: 10, position: "absolute", top: 12 }} aria-hidden="true" />
            <input
              style={{ paddingLeft: 34 }}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try validation, data sharing, LIMS, SARS-CoV-2, APHL..."
            />
          </span>
        </label>
        <label className="check-row" style={{ flex: "0 0 auto" }}>
          <input
            type="checkbox"
            checked={onlyRecommended}
            onChange={(event) => setOnlyRecommended(event.target.checked)}
          />
          <span>Prioritise this profile</span>
        </label>
      </div>

      <div className="resource-grid">
        {results.map(({ resource, score }) => (
          <article className="resource-card" key={resource.id}>
            <div className="toolbar" style={{ marginBottom: 8 }}>
              <div>
                <p className="eyebrow">{resource.agency} / {resource.year}</p>
                <h2>{resource.title}</h2>
              </div>
              <span className={resource.sourceStatus === "extracted" ? "badge source" : "badge gap"}>
                {resource.sourceStatus}
              </span>
            </div>
            <p>{resource.summary}</p>
            <p className="muted">{resource.whyUseful}</p>
            <div className="block-meta">
              <span className="badge">match score {score}</span>
              {resource.topics.slice(0, 5).map((topic) => (
                <span className="badge" key={topic}>{topic}</span>
              ))}
            </div>
            <p>
              <a href={resource.url} target="_blank" rel="noreferrer">
                Open source <ExternalLink size={14} aria-hidden="true" />
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
