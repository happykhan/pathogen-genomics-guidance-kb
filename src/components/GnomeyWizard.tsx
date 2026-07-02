import { useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import {
  cloneProfile,
  infrastructureLabels,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import { defaultProfile, type ImplementationStage, type InfrastructureContext, type OrganismFocus, type Profile, type UserRole } from "../types/profile";
import { GnomeyCard } from "./GnomeyCard";
import { ProfileSummary } from "./ProfileSummary";

type Props = {
  profile: Profile;
  onApply: (profile: Profile) => void;
  onClose: () => void;
};

const roles = Object.keys(roleLabels) as UserRole[];
const stages = Object.keys(stageLabels) as ImplementationStage[];
const organisms = Object.keys(organismLabels) as OrganismFocus[];
const bioinformaticsSupportOptions: InfrastructureContext[] = [
  "unknown",
  "laptop-local",
  "institutional-server",
  "hpc",
  "cloud",
  "managed-platform",
];

export function GnomeyWizard({ profile, onApply, onClose }: Props) {
  const [draft, setDraft] = useState<Profile>(() => cloneProfile(profile));

  function update(patch: Partial<Profile>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function toggleOrganism(organism: OrganismFocus) {
    const next = draft.organisms.includes(organism)
      ? draft.organisms.filter((item) => item !== organism)
      : [...draft.organisms.filter((item) => item !== "general"), organism];
    update({ organisms: next.length ? next : ["general"] });
  }

  function apply() {
    onApply(draft);
    onClose();
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="wizard-title">
        <div className="modal-header">
          <GnomeyCard state="thinking" eyebrow="Gnomey guidance wizard" title="Tailor the guidance" titleId="wizard-title">
            <p className="muted">
              A few choices decide which guidance blocks, technical details, and resources are most prominent.
            </p>
          </GnomeyCard>
          <button className="button icon-button" type="button" onClick={onClose} aria-label="Close wizard">
            <X size={18} />
          </button>
        </div>

        <div className="wizard-section">
          <div className="wizard-section-heading">
            <h3>Who are you reading as?</h3>
            <p>Choose one. This changes the level of detail and the order of sections.</p>
          </div>
          <div className="choice-grid">
            {roles.map((role) => (
              <button
                key={role}
                className="choice choice-radio"
                type="button"
                aria-pressed={draft.role === role}
                onClick={() => update({ role })}
              >
                <span className="choice-indicator" aria-hidden="true" />
                {roleLabels[role]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <div className="wizard-section-heading">
            <h3>What stage is the service at?</h3>
            <p>Choose the closest stage. This gives context for the guide; the bioinformatics support model does more of the tailoring.</p>
          </div>
          <div className="choice-grid">
            {stages.map((stage) => (
              <button
                key={stage}
                className="choice choice-radio"
                type="button"
                aria-pressed={draft.stage === stage}
                onClick={() => update({ stage })}
              >
                <span className="choice-indicator" aria-hidden="true" />
                {stageLabels[stage]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <div className="wizard-section-heading">
            <h3>Which organisms or programmes matter?</h3>
            <p>Choose one or more. Pick General if this is not tied to a specific disease programme yet.</p>
          </div>
          <div className="choice-grid">
            {organisms.map((organism) => (
              <button
                key={organism}
                className="choice choice-checkbox"
                type="button"
                aria-pressed={draft.organisms.includes(organism)}
                onClick={() => toggleOrganism(organism)}
              >
                <span className="choice-indicator" aria-hidden="true" />
                {organismLabels[organism]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <div className="wizard-section-heading">
            <h3>How is bioinformatics currently supported?</h3>
            <p>
              Choose the closest operating model. This helps tailor workflow ownership, validation, storage, support,
              handover risk, and what not to recommend.
            </p>
          </div>
          <div className="choice-grid">
            {bioinformaticsSupportOptions.map((infrastructure) => (
              <button
                key={infrastructure}
                className="choice choice-radio"
                type="button"
                aria-pressed={draft.infrastructure === infrastructure}
                onClick={() => update({ infrastructure })}
              >
                <span className="choice-indicator" aria-hidden="true" />
                {infrastructureLabels[infrastructure]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>Profile summary</h3>
          <div className="summary-box">
            <ProfileSummary profile={draft} />
          </div>
        </div>

        <div className="wizard-section wizard-actions">
          <button className="button primary" type="button" onClick={apply}>
            <Check size={18} />
            Apply profile
          </button>
          <button className="button" type="button" onClick={() => setDraft(cloneProfile(defaultProfile))}>
            <RotateCcw size={18} />
            Reset
          </button>
          <button className="button ghost" type="button" onClick={onClose}>
            Skip for now
          </button>
        </div>
      </section>
    </div>
  );
}
