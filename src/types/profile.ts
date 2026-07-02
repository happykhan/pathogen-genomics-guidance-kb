export type UserRole =
  | "programme-lead"
  | "director"
  | "policy"
  | "lab-lead"
  | "bioinformatician"
  | "it-security"
  | "data-manager"
  | "funder";

export type ImplementationStage =
  | "exploring"
  | "pilot"
  | "routine-service"
  | "national-scale"
  | "upgrading";

export type OrganismFocus =
  | "general"
  | "enteric-bacteria"
  | "tb"
  | "respiratory-viruses"
  | "amr"
  | "nosocomial";

export type InfrastructureContext =
  | "unknown"
  | "laptop-local"
  | "institutional-server"
  | "hpc"
  | "cloud"
  | "managed-platform"
  | "hybrid";

export type Profile = {
  role: UserRole;
  stage: ImplementationStage;
  organisms: OrganismFocus[];
  infrastructure: InfrastructureContext;
};

export { defaultProfile, defaultProfileVersion } from "../data/defaultProfile";

export type Audience = UserRole | "all";
export type DetailLevel = "summary" | "operational" | "technical" | "governance";
