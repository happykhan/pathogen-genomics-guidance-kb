import { useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import {
  cloneProfile,
  constraintLabels,
  goalLabels,
  infrastructureLabels,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import { defaultProfile, type ImmediateGoal, type ImplementationStage, type InfrastructureContext, type OrganismFocus, type Profile, type UserRole } from "../types/profile";
import { ProfileSummary } from "./ProfileSummary";

type Props = {
  profile: Profile;
  onApply: (profile: Profile) => void;
  onClose: () => void;
};

const roles = Object.keys(roleLabels) as UserRole[];
const stages = Object.keys(stageLabels) as ImplementationStage[];
const organisms = Object.keys(organismLabels) as OrganismFocus[];
const infrastructures = Object.keys(infrastructureLabels) as InfrastructureContext[];
const goals = Object.keys(goalLabels) as ImmediateGoal[];
const constraintKeys = Object.keys(constraintLabels) as Array<keyof Profile["constraints"]>;

export function GnomeyWizard({ profile, onApply, onClose }: Props) {
  const [draft, setDraft] = useState<Profile>(() => cloneProfile(profile));

  function update(patch: Partial<Profile>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function updateConstraint(key: keyof Profile["constraints"], value: boolean | null) {
    setDraft((current) => ({
      ...current,
      constraints: {
        ...current.constraints,
        [key]: value,
      },
    }));
  }

  function toggleOrganism(organism: OrganismFocus) {
    const next = draft.organisms.includes(organism)
      ? draft.organisms.filter((item) => item !== organism)
      : [...draft.organisms.filter((item) => item !== "general"), organism];
    update({ organisms: next.length ? next : ["general"] });
  }

  function toggleGoal(goal: ImmediateGoal) {
    const next = draft.goals.includes(goal)
      ? draft.goals.filter((item) => item !== goal)
      : [...draft.goals, goal];
    update({ goals: next.length ? next : ["design-infrastructure"] });
  }

  function apply() {
    onApply(draft);
    onClose();
  }

  return (
    <div className="modal-backdrop" role="presentation">
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="wizard-title">
        <div className="modal-header">
          <div className="gnomey-tile">
            <img className="gnomey-image" src="/assets/gnomey.png" alt="" aria-hidden="true" />
            <div>
              <p className="eyebrow">Gnomey guidance wizard</p>
              <h2 id="wizard-title">Tailor the guidance</h2>
              <p className="muted">
                A few choices decide which guidance blocks, technical details, and resources are most prominent.
              </p>
            </div>
          </div>
          <button className="button icon-button" type="button" onClick={onClose} aria-label="Close wizard">
            <X size={18} />
          </button>
        </div>

        <div className="wizard-section">
          <h3>Who are you reading as?</h3>
          <div className="choice-grid">
            {roles.map((role) => (
              <button
                key={role}
                className="choice"
                type="button"
                aria-pressed={draft.role === role}
                onClick={() => update({ role })}
              >
                {roleLabels[role]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>Where is the programme?</h3>
          <div className="choice-grid">
            {stages.map((stage) => (
              <button
                key={stage}
                className="choice"
                type="button"
                aria-pressed={draft.stage === stage}
                onClick={() => update({ stage })}
              >
                {stageLabels[stage]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>Which organisms or programmes matter?</h3>
          <div className="choice-grid">
            {organisms.map((organism) => (
              <button
                key={organism}
                className="choice"
                type="button"
                aria-pressed={draft.organisms.includes(organism)}
                onClick={() => toggleOrganism(organism)}
              >
                {organismLabels[organism]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>What compute setup are you considering?</h3>
          <div className="choice-grid">
            {infrastructures.map((infrastructure) => (
              <button
                key={infrastructure}
                className="choice"
                type="button"
                aria-pressed={draft.infrastructure === infrastructure}
                onClick={() => update({ infrastructure })}
              >
                {infrastructureLabels[infrastructure]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>What are you trying to do today?</h3>
          <div className="choice-grid">
            {goals.map((goal) => (
              <button
                key={goal}
                className="choice"
                type="button"
                aria-pressed={draft.goals.includes(goal)}
                onClick={() => toggleGoal(goal)}
              >
                {goalLabels[goal]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <h3>What constraints should Gnomey consider?</h3>
          <div className="constraint-grid">
            {constraintKeys.map((key) => (
              <div className="constraint-row" key={key}>
                <span>{constraintLabels[key]}</span>
                <div className="segmented-control" aria-label={constraintLabels[key]}>
                  {[
                    ["yes", true, "Yes"],
                    ["no", false, "No"],
                    ["unknown", null, "Not sure"],
                  ].map(([id, value, label]) => (
                    <button
                      key={id as string}
                      className="segment"
                      type="button"
                      aria-pressed={draft.constraints[key] === value}
                      onClick={() => updateConstraint(key, value as boolean | null)}
                    >
                      {label as string}
                    </button>
                  ))}
                </div>
              </div>
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
