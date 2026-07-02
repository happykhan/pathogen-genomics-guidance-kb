"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText, Share2, Wand2, X } from "lucide-react";
import { DocumentMap } from "./DocumentMap";
import { GnomeyCard } from "./GnomeyCard";
import { GnomeyWizard } from "./GnomeyWizard";
import { GuidanceRenderer } from "./GuidanceRenderer";
import { ProfileSummary } from "./ProfileSummary";
import { defaultProfile, type Profile } from "../types/profile";
import { copyText, parseProfileFromUrl, profileToSearch, roleLabels } from "../lib/profile";
import type { UserRole } from "../types/profile";

export function GuidanceApp() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [gnomeyDismissed, setGnomeyDismissed] = useState(false);
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

  async function copyShareUrl(profileOverride: Profile = profile) {
    const url = `${window.location.origin}${window.location.pathname}?${profileToSearch(profileOverride)}`;
    await copyText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function handoffProfile(role: UserRole): Profile {
    return {
      ...profile,
      role,
    };
  }

  function applyProfile(nextProfile: Profile) {
    setProfile(nextProfile);
    setWizardOpen(false);
    setGnomeyDismissed(true);
    window.requestAnimationFrame(() => {
      document.querySelector(".whitepaper")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <div inert={wizardOpen ? true : undefined} aria-hidden={wizardOpen ? "true" : undefined}>
        <section className="hero-workspace">
          <div>
            <p className="eyebrow">Dynamic guidance document</p>
            <h1 className="workspace-title">Pathogen genomics data and bioinformatics guidance.</h1>
          </div>
        </section>

        {!gnomeyDismissed ? (
          <aside className="gnomey-floating panel no-print" aria-label="Gnomey guidance helper">
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
              eyebrow="Gnomey says"
              state={wizardOpen ? "thinking" : copied ? "complete" : "expanded"}
              action={
                <button className="button primary" type="button" onClick={() => setWizardOpen(true)}>
                  <Wand2 size={18} />
                  Tailor guidance
                </button>
              }
            >
              <p>
                Choose the reader, programme stage, organism focus, and compute context. I will show the sections that
                matter for that situation and keep the rest out of the way.
              </p>
            </GnomeyCard>
          </aside>
        ) : null}

        <DocumentMap
          profile={profile}
          showAllSections={false}
          onEditProfile={() => setWizardOpen(true)}
          onResetProfile={() => setProfile(defaultProfile)}
        />

        <div className="document-wrap">
          <section className="panel print-only" aria-label="Printed profile summary">
            <div className="panel-body">
              <h2 style={{ marginTop: 0 }}>Tailored profile</h2>
              <ProfileSummary profile={profile} />
              <p className="muted">Generated {generatedDate}. Source identifiers are shown under each guidance block.</p>
            </div>
          </section>
          <GuidanceRenderer
            profile={profile}
            showTechnical={false}
            showAllSections={false}
            documentActions={
              <>
                <a className="button" href={`/print?${profileToSearch(profile)}`}>
                  <FileText size={18} />
                  Print-friendly version
                </a>
                <button className="button" type="button" onClick={() => copyShareUrl()}>
                  <Share2 size={18} />
                  {copied ? "Link copied" : "Share profile"}
                </button>
                <details className="share-menu">
                  <summary className="button">
                    <Share2 size={18} />
                    Share with
                  </summary>
                  <div className="share-menu-panel">
                    {(["director", "lab-lead", "bioinformatician", "it-security"] as UserRole[]).map((role) => (
                      <button className="button" type="button" key={role} onClick={() => copyShareUrl(handoffProfile(role))}>
                        <Share2 size={16} />
                        {roleLabels[role]}
                      </button>
                    ))}
                  </div>
                </details>
              </>
            }
          />
        </div>
      </div>

      {wizardOpen ? <GnomeyWizard profile={profile} onApply={applyProfile} onClose={() => setWizardOpen(false)} /> : null}
    </>
  );
}
