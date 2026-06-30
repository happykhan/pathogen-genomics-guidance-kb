import { Check, X } from "lucide-react";
import {
  goalLabels,
  infrastructureLabels,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import type {
  ImmediateGoal,
  InfrastructureContext,
  OrganismFocus,
  Profile,
  UserRole,
  ImplementationStage,
} from "../types/profile";

type Props = {
  profile: Profile;
  onChange: (profile: Profile) => void;
  onClose: () => void;
};

const roles = Object.keys(roleLabels) as UserRole[];
const stages = Object.keys(stageLabels) as ImplementationStage[];
const organisms = Object.keys(organismLabels) as OrganismFocus[];
const infrastructures = Object.keys(infrastructureLabels) as InfrastructureContext[];
const goals = Object.keys(goalLabels) as ImmediateGoal[];

export function GnomeyWizard({ profile, onChange, onClose }: Props) {
  function update(patch: Partial<Profile>) {
    onChange({ ...profile, ...patch });
  }

  function toggleOrganism(organism: OrganismFocus) {
    const next = profile.organisms.includes(organism)
      ? profile.organisms.filter((item) => item !== organism)
      : [...profile.organisms.filter((item) => item !== "general"), organism];
    update({ organisms: next.length ? next : ["general"] });
  }

  function toggleGoal(goal: ImmediateGoal) {
    const next = profile.goals.includes(goal)
      ? profile.goals.filter((item) => item !== goal)
      : [...profile.goals, goal];
    update({ goals: next.length ? next : ["design-infrastructure"] });
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
                aria-pressed={profile.role === role}
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
                aria-pressed={profile.stage === stage}
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
                aria-pressed={profile.organisms.includes(organism)}
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
                aria-pressed={profile.infrastructure === infrastructure}
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
                aria-pressed={profile.goals.includes(goal)}
                onClick={() => toggleGoal(goal)}
              >
                {goalLabels[goal]}
              </button>
            ))}
          </div>
        </div>

        <div className="wizard-section">
          <button className="button primary" type="button" onClick={onClose}>
            <Check size={18} />
            Apply profile
          </button>
        </div>
      </section>
    </div>
  );
}
