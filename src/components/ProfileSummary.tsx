import {
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
    </dl>
  );
}
