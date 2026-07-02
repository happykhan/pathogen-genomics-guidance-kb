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

export type ImmediateGoal =
  | "make-case"
  | "design-infrastructure"
  | "validate-workflows"
  | "share-data"
  | "find-documents"
  | "assess-tier";

export type Profile = {
  role: UserRole;
  stage: ImplementationStage;
  organisms: OrganismFocus[];
  infrastructure: InfrastructureContext;
  goals: ImmediateGoal[];
  constraints: {
    internetReliable: boolean | null;
    bioinformaticsStaff: boolean | null;
    centralIT: boolean | null;
    lims: boolean | null;
    cloudAllowed: boolean | null;
    dataResidencyConcern: boolean | null;
  };
};

export { defaultProfile, defaultProfileVersion } from "../data/defaultProfile";

export type Audience = UserRole | "all";
export type DetailLevel = "summary" | "operational" | "technical" | "governance";
