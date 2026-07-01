import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultSectionIds = ["storage-backup-archive-retention"];
const requestedSectionIds = process.argv.slice(2).length ? process.argv.slice(2) : defaultSectionIds;
const errors = [];

function read(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function readJsonRecords(relativeDir) {
  const directory = path.join(repoRoot, relativeDir);
  if (!existsSync(directory)) return [];

  return readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .flatMap((file) => {
      const relativePath = path.join(relativeDir, file);
      const parsed = JSON.parse(read(relativePath));
      if (!Array.isArray(parsed)) {
        errors.push(`${relativePath} must contain a JSON array.`);
        return [];
      }
      return parsed.map((record) => ({ ...record, __path: relativePath }));
    });
}

function loadWhitepaperOutline() {
  const source = read("src/data/whitepaperOutline.ts")
    .replace(/^import[\s\S]*?;\n\n?/gm, "")
    .replace(/export const whitepaperOutlineVersion = .*;\n\n/, "")
    .replace(/export const whitepaperTarget: WhitepaperTarget =/, "const whitepaperTarget =")
    .replace(/export const whitepaperOutline: WhitepaperOutlineSection\[] =/, "const whitepaperOutline =")
    .replace(/;\s*$/, ";\nreturn { whitepaperTarget, whitepaperOutline };");
  return Function(source)();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function byOrderThenId(left, right) {
  return (left.order ?? 9999) - (right.order ?? 9999) || left.id.localeCompare(right.id);
}

const { whitepaperTarget, whitepaperOutline } = loadWhitepaperOutline();
const outlineById = new Map(whitepaperOutline.map((section) => [section.id, section]));
const evidenceItems = readJsonRecords("editorial/evidence-items");
const claimCards = readJsonRecords("editorial/claim-cards");
const sectionBriefs = readJsonRecords("editorial/section-briefs");
const fragments = readJsonRecords("editorial/fragments");
const evidenceById = new Map(evidenceItems.map((item) => [item.id, item]));
const claimById = new Map(claimCards.map((claim) => [claim.id, claim]));
const briefBySectionId = new Map(sectionBriefs.map((brief) => [brief.sectionId, brief]));

const outputDirectory = path.join(repoRoot, "outputs", "compiled-guidance-blocks");
mkdirSync(outputDirectory, { recursive: true });

const compiledRecords = requestedSectionIds.map((sectionId) => {
  const outlineSection = outlineById.get(sectionId);
  if (!outlineSection) {
    errors.push(`Unknown outline section: ${sectionId}`);
    return null;
  }

  const reviewedFragments = fragments
    .filter((fragment) => fragment.sectionId === sectionId && fragment.reviewStatus === "reviewed")
    .sort(byOrderThenId);

  if (!reviewedFragments.length) {
    errors.push(`No reviewed fragments found for section: ${sectionId}`);
  }

  const usedClaimIds = unique(reviewedFragments.flatMap((fragment) => fragment.claimIds ?? []));
  const usedClaims = usedClaimIds.map((claimId) => {
    const claim = claimById.get(claimId);
    if (!claim) {
      errors.push(`Fragment references unknown claim: ${claimId}`);
      return null;
    }
    if (claim.reviewStatus !== "reviewed") {
      errors.push(`Compiled section ${sectionId} uses non-reviewed claim: ${claimId}`);
    }
    return claim;
  }).filter(Boolean);

  const usedEvidenceIds = unique(usedClaims.flatMap((claim) => claim.evidenceItemIds ?? []));
  const usedEvidence = usedEvidenceIds.map((evidenceId) => {
    const evidence = evidenceById.get(evidenceId);
    if (!evidence) {
      errors.push(`Claim references unknown evidence item: ${evidenceId}`);
      return null;
    }
    if (evidence.reviewStatus !== "reviewed") {
      errors.push(`Compiled section ${sectionId} uses non-reviewed evidence item: ${evidenceId}`);
    }
    return evidence;
  }).filter(Boolean);

  const sourceIds = unique([
    ...reviewedFragments.flatMap((fragment) => fragment.sourceIds ?? []),
    ...usedClaims.map((claim) => claim.sourceId),
    ...usedEvidence.map((evidence) => evidence.sourceId),
  ]);

  const brief = briefBySectionId.get(sectionId);

  return {
    compilerVersion: 1,
    sectionId,
    title: outlineSection.title,
    purpose: outlineSection.purpose,
    whitepaperTarget,
    synthesisBrief: brief
      ? {
          id: brief.id,
          purpose: brief.purpose,
          readerActionAfterReading: brief.readerActionAfterReading,
          mustCover: brief.mustCover,
          doNotClaim: brief.doNotClaim,
          knownGaps: brief.knownGaps,
          reviewStatus: brief.reviewStatus,
        }
      : null,
    sourceIds,
    claimIds: usedClaimIds,
    evidenceItemIds: usedEvidenceIds,
    fragments: reviewedFragments.map((fragment) => ({
      id: fragment.id,
      title: fragment.title,
      kind: fragment.kind,
      text: fragment.text,
      table: fragment.table,
      figure: fragment.figure,
      sourceIds: fragment.sourceIds,
      claimIds: fragment.claimIds,
      conditions: fragment.conditions,
      mutuallyExclusiveGroup: fragment.mutuallyExclusiveGroup,
      order: fragment.order,
      reviewerNotes: fragment.reviewerNotes,
    })),
    evidenceChain: usedClaims.map((claim) => ({
      claimId: claim.id,
      claim: claim.claim,
      sourceId: claim.sourceId,
      evidenceItemIds: claim.evidenceItemIds,
      limitations: claim.limitations,
      evidence: (claim.evidenceItemIds ?? []).map((evidenceId) => {
        const evidence = evidenceById.get(evidenceId);
        return evidence
          ? {
              evidenceItemId: evidence.id,
              sourceId: evidence.sourceId,
              sourceLocator: evidence.sourceLocator,
              evidenceType: evidence.evidenceType,
              directQuote: evidence.directQuote,
              passageSummary: evidence.passageSummary,
              limitations: evidence.limitations,
            }
          : { evidenceItemId: evidenceId, missing: true };
      }),
    })),
    gaps: unique([
      ...(brief?.knownGaps ?? []),
      ...usedClaims.map((claim) => claim.limitations).filter(Boolean),
      ...usedEvidence.map((evidence) => evidence.limitations).filter(Boolean),
    ]),
  };
}).filter(Boolean);

if (errors.length) {
  console.error("Guidance fragment compilation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

compiledRecords.forEach((record) => {
  const outputPath = path.join(outputDirectory, `${record.sectionId}.json`);
  writeFileSync(outputPath, `${JSON.stringify(record, null, 2)}\n`);
  console.log(`Compiled ${record.fragments.length} reviewed fragments to ${path.relative(repoRoot, outputPath)}`);
});
