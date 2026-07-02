"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Printer } from "lucide-react";
import { GuidanceRenderer } from "./GuidanceRenderer";
import { defaultProfile, type Profile } from "../types/profile";
import { parseProfileFromUrl, profileToSearch } from "../lib/profile";

export function PrintGuidanceApp() {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  useEffect(() => {
    setProfile(parseProfileFromUrl(window.location.search));
  }, []);

  const guideHref = useMemo(() => `/?${profileToSearch(profile)}`, [profile]);

  return (
    <div className="print-page">
      <header className="print-toolbar no-print">
        <div>
          <p className="eyebrow">Print-friendly version</p>
          <h1>Tailored pathogen genomics guidance</h1>
          <p>Use your browser print dialog from this page to save a clean PDF.</p>
        </div>
        <div className="control-row">
          <a className="button" href={guideHref}>
            <ArrowLeft size={18} />
            Back to guide
          </a>
          <button className="button primary" type="button" onClick={() => window.print()}>
            <Printer size={18} />
            Print / Save PDF
          </button>
        </div>
      </header>
      <div className="print-document-frame">
        <GuidanceRenderer profile={profile} showTechnical={false} showAllSections={false} />
      </div>
    </div>
  );
}
