import {
  defaultProfile,
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

export function cloneProfile(profile: Profile = defaultProfile): Profile {
  return {
    ...profile,
    organisms: [...profile.organisms],
  };
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
    .map((value) => (value === "other" ? "general" : value))
    .filter((value): value is OrganismFocus => value in organismLabels);
  if (organisms?.length) profile.organisms = organisms;

  return profile;
}

export function profileToSearch(profile: Profile): string {
  const params = new URLSearchParams();
  params.set("role", profile.role);
  params.set("stage", profile.stage);
  params.set("organisms", profile.organisms.join(","));
  params.set("infra", profile.infrastructure);
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
