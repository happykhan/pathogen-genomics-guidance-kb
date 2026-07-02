import {
  defaultProfile,
  type ImmediateGoal,
  type ImplementationStage,
  type InfrastructureContext,
  type OrganismFocus,
  type Profile,
  type UserRole,
} from "../types/profile";

export const roleLabels: Record<UserRole, string> = {
  "programme-lead": "Programme lead",
  director: "Director",
  policy: "Policy or governance",
  "lab-lead": "Laboratory lead",
  bioinformatician: "Bioinformatician",
  "it-security": "IT or security",
  "data-manager": "Data manager",
  funder: "Funder or partner",
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

export const constraintLabels: Record<keyof Profile["constraints"], string> = {
  internetReliable: "Reliable internet",
  bioinformaticsStaff: "Bioinformatics staff",
  centralIT: "Central IT support",
  lims: "LIMS or sample system",
  cloudAllowed: "Cloud use allowed",
  dataResidencyConcern: "Data residency concern",
};

export const constraintParamKeys: Record<keyof Profile["constraints"], string> = {
  internetReliable: "net",
  bioinformaticsStaff: "staff",
  centralIT: "it",
  lims: "lims",
  cloudAllowed: "cloud",
  dataResidencyConcern: "residency",
};

const constraintParamToKey = Object.fromEntries(
  Object.entries(constraintParamKeys).map(([key, value]) => [value, key]),
) as Record<string, keyof Profile["constraints"]>;

export function cloneProfile(profile: Profile = defaultProfile): Profile {
  return {
    ...profile,
    organisms: [...profile.organisms],
    goals: [...profile.goals],
    constraints: { ...profile.constraints },
  };
}

function parseBooleanParam(value: string | null): boolean | null {
  if (value === "yes") return true;
  if (value === "no") return false;
  return null;
}

function formatBooleanParam(value: boolean | null): string {
  if (value === true) return "yes";
  if (value === false) return "no";
  return "unknown";
}

export function parseProfileFromUrl(search: string): Profile {
  const params = new URLSearchParams(search);
  const profile: Profile = cloneProfile(defaultProfile);

  const role = params.get("role") as UserRole | null;
  if (params.get("role") === "mixed") profile.role = "programme-lead";
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

  for (const [paramKey, constraintKey] of Object.entries(constraintParamToKey)) {
    const value = params.get(paramKey);
    if (value) profile.constraints[constraintKey] = parseBooleanParam(value);
  }

  return profile;
}

export function profileToSearch(profile: Profile): string {
  const params = new URLSearchParams();
  params.set("role", profile.role);
  params.set("stage", profile.stage);
  params.set("organisms", profile.organisms.join(","));
  params.set("infra", profile.infrastructure);
  params.set("goals", profile.goals.join(","));
  for (const [constraintKey, paramKey] of Object.entries(constraintParamKeys)) {
    const value = profile.constraints[constraintKey as keyof Profile["constraints"]];
    if (value !== null) params.set(paramKey, formatBooleanParam(value));
  }
  return params.toString();
}

export function isTechnicalProfile(profile: Profile): boolean {
  return ["bioinformatician", "it-security", "data-manager"].includes(profile.role);
}

export function profileUrl(pathname: string, profile: Profile): string {
  return `${pathname}?${profileToSearch(profile)}`;
}

export async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}
