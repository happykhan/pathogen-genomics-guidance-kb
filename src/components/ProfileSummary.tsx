import {
  constraintLabels,
  infrastructureLabels,
  organismLabels,
  roleLabels,
  stageLabels,
} from "../lib/profile";
import type { Profile } from "../types/profile";

type Props = {
  profile: Profile;
};

export function ProfileSummary({ profile }: Props) {
  const setConstraints = Object.entries(profile.constraints)
    .filter(([, value]) => value !== null)
    .map(([key, value]) => `${constraintLabels[key as keyof Profile["constraints"]]}: ${value ? "yes" : "no"}`);

  return (
    <dl className="profile-list">
      <div>
        <dt>Reader</dt>
        <dd>{roleLabels[profile.role]}</dd>
      </div>
      <div>
        <dt>Stage</dt>
        <dd>{stageLabels[profile.stage]}</dd>
      </div>
      <div>
        <dt>Organisms</dt>
        <dd>{profile.organisms.map((organism) => organismLabels[organism]).join(", ")}</dd>
      </div>
      <div>
        <dt>Compute</dt>
        <dd>{infrastructureLabels[profile.infrastructure]}</dd>
      </div>
      {setConstraints.length ? (
        <div>
          <dt>Constraints</dt>
          <dd>{setConstraints.join("; ")}</dd>
        </div>
      ) : null}
    </dl>
  );
}
