import { RotateCcw } from "lucide-react";
import { ProfileSummary } from "./ProfileSummary";
import { getGuidanceSelection, type SelectedGuidanceBlock } from "../lib/guidanceSelection";
import { infrastructureLabels, organismLabels, roleLabels, stageLabels } from "../lib/profile";
import type { Profile } from "../types/profile";

type DocumentBranch = {
  id: string;
  title: string;
  description: string;
  sectionIds: string[];
};

const programmeSectionIds = new Set([
  "reporting-enteric-bacteria",
  "reporting-respiratory-viruses",
  "reporting-tb",
  "reporting-amr",
  "reporting-healthcare-associated-infection",
]);

const branches: DocumentBranch[] = [
  {
    id: "case",
    title: "Why and investment",
    description: "The argument for genomics, the service case, and assumptions behind investment claims.",
    sectionIds: ["why-pathogen-genomics", "investment-case-assumptions", "framing-public-health-use"],
  },
  {
    id: "service",
    title: "Service and lifecycle",
    description: "How samples, metadata, analysis, reporting, and review become a routine service.",
    sectionIds: [
      "use-case-service-model",
      "sampling-programme-design",
      "data-lifecycle-sample-to-report",
      "metadata-and-epidemiology-integration",
    ],
  },
  {
    id: "quality",
    title: "Quality and bioinformatics",
    description: "Workflow operation, validation, provenance, failures, and continuous improvement.",
    sectionIds: ["quality-validation-before-switch", "failure-handling-continuous-improvement", "workflow-reproducibility"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure and security",
    description: "Storage, backup, compute choices, access control, cloud, local systems, and operating responsibility.",
    sectionIds: [
      "storage-backup-archive-distinction",
      "infrastructure-operating-model",
      "avoid-one-size-fits-all-cloud",
      "iam-is-continuous",
    ],
  },
  {
    id: "sharing-reporting",
    title: "Sharing and reporting",
    description: "Governed data sharing, repositories, decision products, limitations, and report release records.",
    sectionIds: ["sharing-is-not-unconditional", "reporting-decision-use"],
  },
  {
    id: "programmes",
    title: "Programme-specific detail",
    description: "Organism or programme sections that change the interpretation and reporting details.",
    sectionIds: Array.from(programmeSectionIds),
  },
  {
    id: "sustainability",
    title: "Workforce and maturity",
    description: "People, training, recurrent cost, procurement, implementation dependencies, and maturity.",
    sectionIds: [
      "workforce-is-part-of-system",
      "costing-recurrent",
      "implementation-model-dependencies",
      "maturity-next-steps",
    ],
  },
];

function groupBlocks(selection: SelectedGuidanceBlock[], showAllSections: boolean) {
  const assigned = new Set<string>();

  const grouped = branches.map((branch) => {
    const items = selection.filter((item) => {
      if (assigned.has(item.block.id) || !branch.sectionIds.includes(item.block.id)) return false;
      if (!showAllSections && !item.included) return false;
      assigned.add(item.block.id);
      return true;
    });

    return { ...branch, items };
  });

  const unassigned = selection.filter((item) => !assigned.has(item.block.id) && (showAllSections || item.included));
  if (unassigned.length) {
    grouped.push({
      id: "other",
      title: "Other guide sections",
      description: "Sections that do not yet have a stable editorial branch.",
      sectionIds: unassigned.map((item) => item.block.id),
      items: unassigned,
    });
  }

  return grouped.filter((branch) => branch.items.length > 0);
}

function nodeState(item: SelectedGuidanceBlock, showAllSections: boolean) {
  if (item.included) return "included";
  return showAllSections ? "expanded" : "hidden";
}

function stateLabel(item: SelectedGuidanceBlock, showAllSections: boolean) {
  if (item.included) return "Included";
  return showAllSections ? "Expanded view" : "Not included";
}

type DocumentMapProps = {
  profile: Profile;
  showAllSections: boolean;
  onEditProfile?: () => void;
  onResetProfile?: () => void;
};

export function DocumentMap({ profile, showAllSections, onEditProfile, onResetProfile }: DocumentMapProps) {
  const selection = getGuidanceSelection(profile);
  const grouped = groupBlocks(selection, showAllSections);
  const includedCount = selection.filter((item) => item.included).length;
  const profileSpecificCount = selection.filter((item) => item.sourceBlock.roleVariants?.[profile.role]).length;

  return (
    <section className="document-map panel no-print" aria-label="Document map">
      <div className="panel-body">
        <div className="document-map-head">
          <div>
            <p className="eyebrow">Document map</p>
            <h2>The outline stays fixed. Gnomey changes what is brought forward.</h2>
            <p>
              This map shows the full whitepaper structure and how the current profile affects it:{" "}
              {roleLabels[profile.role].toLowerCase()}, {stageLabels[profile.stage].toLowerCase()},{" "}
              {profile.organisms.map((organism) => organismLabels[organism].toLowerCase()).join(", ")}, and{" "}
              {infrastructureLabels[profile.infrastructure].toLowerCase()}.
            </p>
          </div>
          <aside className="document-map-profile" aria-label="Current profile for document map">
            <div className="toolbar">
              <h3>Current profile</h3>
              <div className="control-row">
                {onEditProfile ? (
                  <button className="button" type="button" onClick={onEditProfile}>
                    Edit
                  </button>
                ) : null}
                {onResetProfile ? (
                  <button className="button icon-button" type="button" onClick={onResetProfile} aria-label="Reset profile">
                    <RotateCcw size={17} />
                  </button>
                ) : null}
              </div>
            </div>
            <ProfileSummary profile={profile} />
            <dl className="document-map-stats" aria-label="Document map summary">
              <div>
                <dt>Included</dt>
                <dd>
                  {includedCount}/{selection.length}
                </dd>
              </div>
              <div>
                <dt>Rules</dt>
                <dd>Role / stage / programme</dd>
              </div>
              <div>
                <dt>Role-specific</dt>
                <dd>{profileSpecificCount}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="document-map-legend" aria-label="Map legend">
          <span>
            <i className="legend-dot included" aria-hidden="true" /> Included in this profile
          </span>
          <span>
            <i className="legend-dot variant" aria-hidden="true" /> Has role-specific wording
          </span>
        </div>

        <div className="document-map-grid">
          {grouped.map((branch) => (
            <article className="document-map-branch" key={branch.id}>
              <h3>{branch.title}</h3>
              <p>{branch.description}</p>
              <ol>
                {branch.items.map((item) => {
                  const state = nodeState(item, showAllSections);
                  const hasVariant = Boolean(item.sourceBlock.roleVariants?.[profile.role]);
                  const className = `document-map-node ${state}${hasVariant ? " variant" : ""}`;
                  const label = stateLabel(item, showAllSections);
                  const nodeContent = (
                    <>
                      <span className="document-map-dot" aria-hidden="true" />
                      <span className="document-map-title">{item.block.title}</span>
                      <span className="document-map-match">{label}</span>
                    </>
                  );

                  return (
                    <li key={item.block.id} className={className}>
                      {state === "hidden" ? (
                        <span aria-label={`${item.block.title}. Not included for this profile. ${item.reason}.`}>
                          {nodeContent}
                        </span>
                      ) : (
                        <a href={`#${item.block.id}`} aria-label={`${item.block.title}. ${label}. ${item.reason}.`}>
                          {nodeContent}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
