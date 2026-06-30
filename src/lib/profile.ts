import { defaultProfile, type ImmediateGoal, type InfrastructureContext, type OrganismFocus, type Profile, type UserRole, type ImplementationStage } from "../types/profile";

export const roleLabels: Record<UserRole, string> = {
  director: "Director",
  policy: "Policy or governance",
  "lab-lead": "Laboratory lead",
  bioinformatician: "Bioinformatician",
  "it-security": "IT or security",
  "data-manager": "Data manager",
  funder: "Funder or partner",
  mixed: "Mixed team",
};

export const stageLabels: Record<ImplementationStage, string> = {
  exploring: "Exploring",
  pilot: "Pilot",
  "routine-service": "Routine service",
  "national-scale": "National scale",
  upgrading: "Upgrading",
};

export const organismLabels: Record<OrganismFocus, string> = {
  general: "General",
  "enteric-bacteria": "Enteric bacteria",
  tb: "Tuberculosis",
  "respiratory-viruses": "Respiratory viruses",
  amr: "AMR",
  nosocomial: "Healthcare-associated infection",
  other: "Other",
};

export const infrastructureLabels: Record<InfrastructureContext, string> = {
  unknown: "Not decided",
  "laptop-local": "Laptop or local workstation",
  "institutional-server": "Institutional server",
  hpc: "HPC",
  cloud: "Cloud",
  "managed-platform": "Managed platform",
  hybrid: "Hybrid",
};

export const goalLabels: Record<ImmediateGoal, string> = {
  "make-case": "Make the case",
  "design-infrastructure": "Design infrastructure",
  "validate-workflows": "Validate workflows",
  "share-data": "Share data",
  "find-documents": "Find documents",
  "assess-tier": "Assess maturity",
};

export function parseProfileFromUrl(search: string): Profile {
  const params = new URLSearchParams(search);
  const profile: Profile = structuredClone(defaultProfile);

  const role = params.get("role") as UserRole | null;
  if (role && role in roleLabels) profile.role = role;

  const stage = params.get("stage") as ImplementationStage | null;
  if (stage && stage in stageLabels) profile.stage = stage;

  const infrastructure = params.get("infra") as InfrastructureContext | null;
  if (infrastructure && infrastructure in infrastructureLabels) profile.infrastructure = infrastructure;

  const organisms = params
    .get("organisms")
    ?.split(",")
    .filter((value): value is OrganismFocus => value in organismLabels);
  if (organisms?.length) profile.organisms = organisms;

  const goals = params
    .get("goals")
    ?.split(",")
    .filter((value): value is ImmediateGoal => value in goalLabels);
  if (goals?.length) profile.goals = goals;

  return profile;
}

export function profileToSearch(profile: Profile): string {
  const params = new URLSearchParams();
  params.set("role", profile.role);
  params.set("stage", profile.stage);
  params.set("organisms", profile.organisms.join(","));
  params.set("infra", profile.infrastructure);
  params.set("goals", profile.goals.join(","));
  return params.toString();
}

export function isTechnicalProfile(profile: Profile): boolean {
  return ["bioinformatician", "it-security", "data-manager"].includes(profile.role);
}
