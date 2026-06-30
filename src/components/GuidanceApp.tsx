"use client";

import { useEffect, useMemo, useState } from "react";
import { FileDown, Share2, Wand2 } from "lucide-react";
import { GnomeyWizard } from "./GnomeyWizard";
import { GuidanceRenderer } from "./GuidanceRenderer";
import { ProfileSummary } from "./ProfileSummary";
import { defaultProfile, type Profile } from "../types/profile";
import { parseProfileFromUrl, profileToSearch } from "../lib/profile";

export function GuidanceApp() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [showTechnical, setShowTechnical] = useState(false);
  const [showAllSections, setShowAllSections] = useState(false);
  const [copied, setCopied] = useState(false);
  const generatedDate = useMemo(() => new Date().toLocaleDateString("en-GB"), []);

  useEffect(() => {
    setProfile(parseProfileFromUrl(window.location.search));
  }, []);

  useEffect(() => {
    const next = `${window.location.pathname}?${profileToSearch(profile)}`;
    window.history.replaceState(null, "", next);
  }, [profile]);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${window.location.pathname}?${profileToSearch(profile)}`;
  }, [profile]);

  async function copyShareUrl() {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <section className="hero-workspace">
        <div>
          <p className="eyebrow">Dynamic guidance document</p>
          <h1 className="workspace-title">Set up pathogen genomics infrastructure for the context you actually have.</h1>
          <p className="workspace-copy">
            Use the wizard to tailor the document by role, programme stage, organism focus, and compute context. The visible
            guidance can be printed or shared as a profile-specific link.
          </p>
          <div className="control-row no-print" aria-label="Guidance actions">
            <button className="button primary" type="button" onClick={() => setWizardOpen(true)}>
              <Wand2 size={18} />
              Tailor guidance
            </button>
            <button className="button" type="button" onClick={() => window.print()}>
              <FileDown size={18} />
              Export PDF
            </button>
            <button className="button" type="button" onClick={copyShareUrl}>
              <Share2 size={18} />
              {copied ? "Link copied" : "Share profile"}
            </button>
          </div>
        </div>
        <aside className="panel">
          <div className="panel-body">
            <div className="gnomey-tile">
              <img className="gnomey-image" src="/assets/gnomey.png" alt="" aria-hidden="true" />
              <div>
                <p className="eyebrow">Gnomey says</p>
                <p>
                  Tell me who is reading, what you are building, and where the constraints are. I will bring the relevant
                  sections forward.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <div className="grid-two">
        <div>
          <section className="panel print-only" aria-label="Printed profile summary">
            <div className="panel-body">
              <h2 style={{ marginTop: 0 }}>Tailored profile</h2>
              <ProfileSummary profile={profile} />
              <p className="muted">Generated {generatedDate}. Source identifiers are shown under each guidance block.</p>
            </div>
          </section>
          <GuidanceRenderer profile={profile} showTechnical={showTechnical} showAllSections={showAllSections} />
        </div>
        <aside className="side-stack no-print" aria-label="Current profile">
          <section className="panel">
            <div className="panel-body">
              <div className="toolbar">
                <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Current profile</h2>
                <button className="button" type="button" onClick={() => setWizardOpen(true)}>
                  Edit
                </button>
              </div>
              <ProfileSummary profile={profile} />
            </div>
          </section>
          <section className="panel">
            <div className="panel-body">
              <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Detail controls</h2>
              <label className="check-row">
                <input
                  type="checkbox"
                  checked={showTechnical}
                  onChange={(event) => setShowTechnical(event.target.checked)}
                />
                <span>Show technical detail for non-technical roles</span>
              </label>
              <label className="check-row">
                <input
                  type="checkbox"
                  checked={showAllSections}
                  onChange={(event) => setShowAllSections(event.target.checked)}
                />
                <span>Show lower-ranked sections</span>
              </label>
            </div>
          </section>
        </aside>
      </div>

      {wizardOpen ? <GnomeyWizard profile={profile} onChange={setProfile} onClose={() => setWizardOpen(false)} /> : null}
    </>
  );
}
