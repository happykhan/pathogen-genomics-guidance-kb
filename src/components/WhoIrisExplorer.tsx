"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, ExternalLink, Search, Wand2, X } from "lucide-react";
import { GnomeyCard } from "./GnomeyCard";
import { GnomeyWizard } from "./GnomeyWizard";
import { whoIrisGeneratedAt, whoIrisResources } from "../data/whoIrisResources";
import { organismLabels, parseProfileFromUrl, roleLabels, stageLabels } from "../lib/profile";
import { defaultProfile, type OrganismFocus, type Profile } from "../types/profile";
import type { WhoIrisRecord } from "../types/whoIris";

const pageSize = 8;

const roleTopicWeights: Record<Profile["role"], string[]> = {
  "programme-lead": ["implementation", "surveillance", "laboratory", "reporting", "costing"],
  director: ["implementation", "costing", "surveillance", "ethics-governance"],
  policy: ["implementation", "ethics-governance", "data-sharing", "surveillance"],
  "lab-lead": ["laboratory", "quality", "implementation", "surveillance"],
  bioinformatician: ["bioinformatics", "quality", "metadata", "reporting"],
  "it-security": ["data-sharing", "ethics-governance", "metadata"],
  "data-manager": ["metadata", "data-sharing", "reporting", "ethics-governance"],
  funder: ["costing", "implementation", "surveillance"],
};

function scoreWhoRecord(record: WhoIrisRecord, profile: Profile) {
  let score = 0;
  if (record.audiences.includes("all") || record.audiences.includes(profile.role)) score += 5;
  if (profile.organisms.some((organism) => record.organisms.includes(organism))) score += 5;
  if (record.organisms.includes("general")) score += 1;
  if (record.stages.includes(profile.stage)) score += 3;
  score += record.topics.filter((topic) => roleTopicWeights[profile.role].includes(topic)).length * 2;
  if (record.pdfUrl) score += 1;
  return score;
}

function recordTypeLabel(record: WhoIrisRecord) {
  if (record.topics.includes("costing")) return "Costing";
  if (record.topics.includes("data-sharing")) return "Data sharing";
  if (record.topics.includes("quality")) return "Quality";
  if (record.topics.includes("bioinformatics")) return "Bioinformatics";
  if (record.topics.includes("laboratory")) return "Laboratory";
  return "Guidance";
}

function shortAbstract(record: WhoIrisRecord) {
  if (!record.abstract) return "No abstract was available from IRIS metadata for this record.";
  return record.abstract.length > 360 ? `${record.abstract.slice(0, 357).trim()}...` : record.abstract;
}

export function WhoIrisExplorer() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [gnomeyDismissed, setGnomeyDismissed] = useState(false);
  const [query, setQuery] = useState("");
  const [organism, setOrganism] = useState<"all" | OrganismFocus>("all");
  const [topic, setTopic] = useState("all");
  const [onlyProfile, setOnlyProfile] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(whoIrisResources[0]?.id ?? "");

  useEffect(() => {
    setProfile(parseProfileFromUrl(window.location.search));
  }, []);

  const topics = useMemo(() => [...new Set(whoIrisResources.flatMap((record) => record.topics))].sort(), []);

  const scored = useMemo(
    () =>
      whoIrisResources
        .map((record) => ({ record, score: scoreWhoRecord(record, profile) }))
        .sort((a, b) => b.score - a.score || Number(b.record.year) - Number(a.record.year) || a.record.title.localeCompare(b.record.title)),
    [profile],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scored.filter(({ record, score }) => {
      const matchesQuery = !q || record.searchText.toLowerCase().includes(q);
      const matchesTopic = topic === "all" || record.topics.includes(topic);
      const matchesOrganism = organism === "all" || record.organisms.includes(organism);
      const matchesProfile = !onlyProfile || score >= 6;
      return matchesQuery && matchesTopic && matchesOrganism && matchesProfile;
    });
  }, [scored, query, topic, organism, onlyProfile]);

  useEffect(() => {
    setPage(1);
  }, [profile, query, topic, organism, onlyProfile]);

  useEffect(() => {
    if (results.length && !results.some(({ record }) => record.id === selectedId)) {
      setSelectedId(results[0].record.id);
    }
  }, [results, selectedId]);

  const selected = whoIrisResources.find((record) => record.id === selectedId) ?? results[0]?.record ?? whoIrisResources[0];
  const selectedScore = selected ? scoreWhoRecord(selected, profile) : 0;
  const similarRecords = selected
    ? selected.similar.map((id) => whoIrisResources.find((record) => record.id === id)).filter((record): record is WhoIrisRecord => Boolean(record))
    : [];
  const totalPages = Math.max(1, Math.ceil(results.length / pageSize));
  const pageResults = results.slice((page - 1) * pageSize, page * pageSize);
  const generatedDate = new Date(whoIrisGeneratedAt).toLocaleDateString("en-GB");

  function applyProfile(nextProfile: Profile) {
    setProfile(nextProfile);
    setWizardOpen(false);
    setGnomeyDismissed(true);
  }

  return (
    <>
      <div inert={wizardOpen ? true : undefined} aria-hidden={wizardOpen ? "true" : undefined}>
        <div className="hero-workspace">
          <div>
            <p className="eyebrow">WHO IRIS resources</p>
            <h1 className="workspace-title">Find WHO pathogen genomics resources and related documents.</h1>
            <p className="page-intro">
              This page is generated from WHO IRIS metadata. It searches genomics, sequencing, surveillance, data-sharing,
              costing, laboratory, and implementation records, then ranks them against the current profile.
            </p>
          </div>
        </div>

        {!gnomeyDismissed ? (
          <aside className="gnomey-floating panel no-print" aria-label="Gnomey WHO IRIS helper">
            <button
              className="button icon-button gnomey-close"
              type="button"
              onClick={() => setGnomeyDismissed(true)}
              aria-label="Close Gnomey helper"
            >
              <X size={16} />
            </button>
            <GnomeyCard
              compact
              state={wizardOpen ? "thinking" : "collapsed"}
              eyebrow="Gnomey ranks WHO IRIS for"
              title={roleLabels[profile.role]}
              action={
                <button className="button primary" type="button" onClick={() => setWizardOpen(true)}>
                  <Wand2 size={18} />
                  Change profile
                </button>
              }
            >
              <p>
                {stageLabels[profile.stage]} stage, focused on{" "}
                {profile.organisms.map((value) => organismLabels[value]).join(", ")}. Metadata last synced {generatedDate}.
              </p>
            </GnomeyCard>
          </aside>
        ) : null}

        <section className="panel filter-panel" aria-label="WHO IRIS filters">
          <div className="panel-body">
            <div className="filter-grid">
              <label className="form-field">
                <span className="muted">Search WHO metadata</span>
                <span style={{ position: "relative" }}>
                  <Search size={17} style={{ left: 10, position: "absolute", top: 12 }} aria-hidden="true" />
                  <input
                    style={{ paddingLeft: 34 }}
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Try mpox, TB, data sharing, costing, foodborne..."
                  />
                </span>
              </label>
              <label className="form-field">
                <span className="muted">Topic</span>
                <select value={topic} onChange={(event) => setTopic(event.target.value)}>
                  <option value="all">All topics</option>
                  {topics.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-field">
                <span className="muted">Organism or programme</span>
                <select value={organism} onChange={(event) => setOrganism(event.target.value as "all" | OrganismFocus)}>
                  <option value="all">All programmes</option>
                  {(Object.keys(organismLabels) as OrganismFocus[]).map((value) => (
                    <option value={value} key={value}>
                      {organismLabels[value]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="check-row">
                <input type="checkbox" checked={onlyProfile} onChange={(event) => setOnlyProfile(event.target.checked)} />
                <span>Prioritise current profile</span>
              </label>
              <div className="form-field filter-actions">
                <span className="muted">
                  {results.length} of {whoIrisResources.length} records
                </span>
                <button
                  className="button"
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setTopic("all");
                    setOrganism("all");
                    setOnlyProfile(false);
                  }}
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="iris-grid">
          <div className="panel">
            <div className="panel-body">
              <div className="toolbar">
                <div>
                  <p className="eyebrow">Similarity map</p>
                  <h2 className="compact-heading">Documents positioned by title and abstract text</h2>
                </div>
                <span className="badge match">{results.length} visible</span>
              </div>
              <div className="iris-map" role="list" aria-label="WHO IRIS document similarity map">
                {results.map(({ record, score }) => (
                  <button
                    className={record.id === selected?.id ? "iris-map-point active" : "iris-map-point"}
                    type="button"
                    role="listitem"
                    key={record.id}
                    style={{ left: `${record.map.x}%`, top: `${record.map.y}%` }}
                    onClick={() => setSelectedId(record.id)}
                    aria-label={`${record.title}. Profile score ${score}.`}
                    title={record.title}
                  >
                    <span>{recordTypeLabel(record)}</span>
                  </button>
                ))}
              </div>
              {selected ? (
                <article className="iris-selected">
                  <p className="eyebrow">
                    Selected / match {selectedScore} / {selected.year}
                  </p>
                  <h3>{selected.title}</h3>
                  <p>{shortAbstract(selected)}</p>
                  <div className="resource-meta-row">
                    {selected.topics.slice(0, 6).map((value) => (
                      <span className="badge" key={value}>
                        {value}
                      </span>
                    ))}
                    {selected.pdfUrl ? <span className="badge source">PDF available</span> : null}
                  </div>
                  <div className="resource-actions">
                    {selected.pdfUrl ? (
                      <a className="button primary" href={selected.pdfUrl} target="_blank" rel="noreferrer">
                        <Download size={16} />
                        PDF
                      </a>
                    ) : null}
                    <a className="button" href={selected.url} target="_blank" rel="noreferrer">
                      Open IRIS <ExternalLink size={14} />
                    </a>
                  </div>
                </article>
              ) : null}
            </div>
          </div>

          <aside className="panel">
            <div className="panel-body">
              <p className="eyebrow">Nearest documents</p>
              <h2 className="compact-heading">Similar in IRIS metadata</h2>
              <div className="similar-list">
                {similarRecords.map((record) => (
                  <button className="similar-item" type="button" key={record.id} onClick={() => setSelectedId(record.id)}>
                    <span>{record.year}</span>
                    <strong>{record.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="resource-grid" aria-label="WHO IRIS results">
          {pageResults.map(({ record, score }) => (
            <article className="resource-card" key={record.id}>
              <div className="resource-card-head">
                <p className="eyebrow">WHO IRIS / {record.year}</p>
                <h2>{record.title}</h2>
                <div className="resource-meta-row">
                  <span className="badge match">profile match {score}</span>
                  {record.pdfUrl ? <span className="badge source">PDF available</span> : null}
                  {record.organisms.map((value) => (
                    <span className="badge" key={value}>
                      {organismLabels[value]}
                    </span>
                  ))}
                  {record.topics.slice(0, 5).map((value) => (
                    <span className="badge" key={value}>
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="resource-summary">
                <h3>IRIS metadata summary</h3>
                <p>{shortAbstract(record)}</p>
                {record.pages ? <p className="muted">{record.pages}</p> : null}
              </div>
              <div className="resource-actions">
                {record.pdfUrl ? (
                  <a className="button primary" href={record.pdfUrl} target="_blank" rel="noreferrer">
                    <Download size={16} />
                    Download PDF
                  </a>
                ) : null}
                <a className="button" href={record.url} target="_blank" rel="noreferrer">
                  Open IRIS <ExternalLink size={14} />
                </a>
                <button className="button" type="button" onClick={() => setSelectedId(record.id)}>
                  Show on map
                </button>
              </div>
            </article>
          ))}
        </section>

        <nav className="pagination" aria-label="WHO IRIS result pages">
          <button className="button" type="button" disabled={page <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="button"
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
          >
            Next
          </button>
        </nav>
      </div>

      {wizardOpen ? <GnomeyWizard profile={profile} onApply={applyProfile} onClose={() => setWizardOpen(false)} /> : null}
    </>
  );
}
