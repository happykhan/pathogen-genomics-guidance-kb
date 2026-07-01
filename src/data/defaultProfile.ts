import type { Profile } from "../types/profile";

export const defaultProfileVersion = "2026-07-01-beta-0.2";

export const defaultProfile: Profile = {
  role: "mixed",
  stage: "exploring",
  organisms: ["general"],
  infrastructure: "unknown",
  goals: ["design-infrastructure"],
  constraints: {
    internetReliable: null,
    bioinformaticsStaff: null,
    centralIT: null,
    lims: null,
    cloudAllowed: null,
    dataResidencyConcern: null,
  },
};
