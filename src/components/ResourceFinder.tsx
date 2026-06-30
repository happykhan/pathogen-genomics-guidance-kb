"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import { resources } from "../data/resources";
import { scoreResource } from "../lib/recommendations";
import { organismLabels, parseProfileFromUrl, roleLabels, stageLabels } from "../lib/profile";
import { defaultProfile, type ImplementationStage, type OrganismFocus, type Profile, type UserRole } from "../types/profile";

type FinderFilters = {
  audience: "all" | UserRole;
  topic: "all" | string;
  organism: "all" | OrganismFocus;
  agency: "all" | string;
  stage: "all" | ImplementationStage;
};

const defaultFilters: FinderFilters = {
  audience: "all",
  topic: "all",
  organism: "all",
  agency: "all",
  stage: "all",
};

export function ResourceFinder() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [query, setQuery] = useState("");
  const [onlyRecommended, setOnlyRecommended] = useState(true);
  const [filters, setFilters] = useState<FinderFilters>(defaultFilters);

  useEffect(() => {
    setProfile(parseProfileFromUrl(window.location.search));
  }, []);

  const filterOptions = useMemo(() => {
    return {
      agencies: [...new Set(resources.map((resource) => resource.agency))].sort(),
      topics: [...new Set(resources.flatMap((resource) => resource.topics))].sort(),
    };
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
        const matchesAudience = filters.audience === "all" || resource.audiences.includes(filters.audience);
        const matchesTopic = filters.topic === "all" || resource.topics.includes(filters.topic);
        const matchesOrganism = filters.organism === "all" || resource.organisms.includes(filters.organism);
        const matchesAgency = filters.agency === "all" || resource.agency === filters.agency;
        const matchesStage = filters.stage === "all" || resource.implementationStages.includes(filters.stage);
        return (
          matchesText &&
          matchesRecommendation &&
          matchesAudience &&
          matchesTopic &&
          matchesOrganism &&
          matchesAgency &&
          matchesStage
        );
      })
      .sort((a, b) => b.score - a.score || a.resource.title.localeCompare(b.resource.title));
  }, [profile, query, onlyRecommended, filters]);

  function updateFilter<Key extends keyof FinderFilters>(key: Key, value: FinderFilters[Key]) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

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

      <section className="panel filter-panel" aria-label="Resource filters">
        <div className="panel-body">
          <div className="filter-grid">
            <label className="form-field">
              <span className="muted">Audience</span>
              <select value={filters.audience} onChange={(event) => updateFilter("audience", event.target.value as FinderFilters["audience"])}>
                <option value="all">All audiences</option>
                {(Object.keys(roleLabels) as UserRole[]).map((role) => (
                  <option value={role} key={role}>{roleLabels[role]}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span className="muted">Topic</span>
              <select value={filters.topic} onChange={(event) => updateFilter("topic", event.target.value)}>
                <option value="all">All topics</option>
                {filterOptions.topics.map((topic) => (
                  <option value={topic} key={topic}>{topic}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span className="muted">Organism</span>
              <select value={filters.organism} onChange={(event) => updateFilter("organism", event.target.value as FinderFilters["organism"])}>
                <option value="all">All organisms</option>
                {(Object.keys(organismLabels) as OrganismFocus[]).map((organism) => (
                  <option value={organism} key={organism}>{organismLabels[organism]}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span className="muted">Agency</span>
              <select value={filters.agency} onChange={(event) => updateFilter("agency", event.target.value)}>
                <option value="all">All agencies</option>
                {filterOptions.agencies.map((agency) => (
                  <option value={agency} key={agency}>{agency}</option>
                ))}
              </select>
            </label>
            <label className="form-field">
              <span className="muted">Stage</span>
              <select value={filters.stage} onChange={(event) => updateFilter("stage", event.target.value as FinderFilters["stage"])}>
                <option value="all">All stages</option>
                {(Object.keys(stageLabels) as ImplementationStage[]).map((stage) => (
                  <option value={stage} key={stage}>{stageLabels[stage]}</option>
                ))}
              </select>
            </label>
            <div className="form-field filter-actions">
              <span className="muted">{results.length} result{results.length === 1 ? "" : "s"}</span>
              <button className="button" type="button" onClick={() => {
                setQuery("");
                setFilters(defaultFilters);
                setOnlyRecommended(false);
              }}>
                Clear filters
              </button>
            </div>
          </div>
        </div>
      </section>

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
