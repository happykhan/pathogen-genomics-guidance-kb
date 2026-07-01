import { existsSync, readFileSync } from "node:fs";
import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function read(relativePath) {
  return readFileSync(path.join(repoRoot, relativePath), "utf8");
}

function loadSources() {
  const source = read("src/data/sources.ts")
    .replace(/export const sources =/, "const sources =")
    .replace(/} as const;/, "};")
    .replace(/export type SourceId[\s\S]*$/, "return sources;");
  return Function(source)();
}

function loadGuidanceBlocks() {
  const source = read("src/data/guidanceBlocks.ts")
    .replace(/import type \{ GuidanceBlock \} from "\.\.\/types\/content";\n\n/, "")
    .replace(/export const guidanceBlocks: GuidanceBlock\[] =/, "const guidanceBlocks =")
    .replace(/;\s*$/, ";\nreturn guidanceBlocks;");
  return Function(source)();
}

function loadResources() {
  const collectionSource = read("src/data/microbialGenomicsCollection.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n?/, "")
    .replace(/export const microbialGenomicsCollectionResources: ResourceRecord\[] =/, "const microbialGenomicsCollectionResources =")
    .replace(/;\s*$/, ";\nreturn microbialGenomicsCollectionResources;");
  const microbialGenomicsCollectionResources = Function(collectionSource)();
  const source = read("src/data/resources.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n?/, "")
    .replace(/import \{ microbialGenomicsCollectionResources \} from "\.\/microbialGenomicsCollection";\n/, "")
    .replace(/export const resources: ResourceRecord\[] =/, "const resources =")
    .replace(/;\s*$/, ";\nreturn resources;");
  return Function("microbialGenomicsCollectionResources", source)(microbialGenomicsCollectionResources);
}

function loadWhitepaperOutline() {
  const source = read("src/data/whitepaperOutline.ts")
    .replace(/import type \{ WhitepaperOutlineSection \} from "\.\.\/types\/editorial";\n\n/, "")
    .replace(/export const whitepaperOutlineVersion = .*;\n\n/, "")
    .replace(/export const whitepaperOutline: WhitepaperOutlineSection\[] =/, "const whitepaperOutline =")
    .replace(/;\s*$/, ";\nreturn whitepaperOutline;");
  return Function(source)();
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
        errors.push(`Editorial JSON file ${relativePath} must contain an array.`);
        return [];
      }
      return parsed.map((record) => ({ ...record, __path: relativePath }));
    });
}

function collectSourceIds(value, activeKey = "", output = new Set()) {
  if (Array.isArray(value)) {
    if (activeKey.endsWith("SourceIds") || activeKey === "sourceIds") {
      value.forEach((item) => {
        if (typeof item === "string") output.add(item);
      });
    }
    value.forEach((item) => collectSourceIds(item, activeKey, output));
    return output;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, nested]) => collectSourceIds(nested, key, output));
  }

  return output;
}

const sources = loadSources();
const guidanceBlocks = loadGuidanceBlocks();
const resources = loadResources();
const whitepaperOutline = loadWhitepaperOutline();
const sourceIds = new Set(Object.keys(sources));
const outlineSectionIds = new Set(whitepaperOutline.map((section) => section.id));
const validStatuses = new Set(["reviewed", "partial", "gap"]);
const validResourceStatuses = new Set(["extracted", "candidate"]);
const validEditorialStatuses = new Set(["draft", "reviewed", "gap", "deprecated"]);
const errors = [];
const seenResourceIds = new Set();

Object.entries(sources).forEach(([sourceId, source]) => {
  if (!source?.label || !source?.path) {
    errors.push(`Source ${sourceId} must include label and path.`);
    return;
  }

  if (!existsSync(path.join(repoRoot, source.path))) {
    errors.push(`Source ${sourceId} points to missing source card: ${source.path}`);
  }
});

guidanceBlocks.forEach((block) => {
  if (!validStatuses.has(block.sourceStatus)) {
    errors.push(`Guidance block ${block.id} has invalid sourceStatus: ${block.sourceStatus}`);
  }

  if (block.sourceStatus === "reviewed" && block.gaps?.length) {
    errors.push(`Guidance block ${block.id} is reviewed but still has gaps.`);
  }

  const usedSourceIds = collectSourceIds(block);
  usedSourceIds.forEach((sourceId) => {
    if (!sourceIds.has(sourceId)) {
      errors.push(`Guidance block ${block.id} references unknown source ID: ${sourceId}`);
    }
  });
});

resources.forEach((resource) => {
  if (seenResourceIds.has(resource.id)) {
    errors.push(`Resource ID is duplicated: ${resource.id}`);
  }
  seenResourceIds.add(resource.id);

  if (!resource.id || !resource.title || !resource.url || !resource.summary || !resource.whyUseful) {
    errors.push(`Resource ${resource.id ?? "(missing id)"} must include id, title, url, summary, and whyUseful.`);
  }

  if (!validResourceStatuses.has(resource.sourceStatus)) {
    errors.push(`Resource ${resource.id} has invalid sourceStatus: ${resource.sourceStatus}`);
  }

  if (resource.sourceStatus === "extracted" && !resource.sourceCardPath) {
    errors.push(`Extracted resource ${resource.id} must include sourceCardPath.`);
  }

  for (const field of ["url", "pdfUrl", "sourceCardPath"]) {
    const value = resource[field];
    if (typeof value === "string" && value.includes("/Users/")) {
      errors.push(`Resource ${resource.id} exposes a local path in ${field}.`);
    }
  }

  if (resource.pdfUrl && !/^https?:\/\//.test(resource.pdfUrl)) {
    errors.push(`Resource ${resource.id} has a non-public pdfUrl: ${resource.pdfUrl}`);
  }

  if (resource.sourceCardPath) {
    if (!resource.sourceCardPath.startsWith("knowledge-base/source-cards/")) {
      errors.push(`Resource ${resource.id} sourceCardPath must point under knowledge-base/source-cards/.`);
    }

    if (!existsSync(path.join(repoRoot, resource.sourceCardPath))) {
      errors.push(`Resource ${resource.id} points to missing source card: ${resource.sourceCardPath}`);
    }
  }
});

const evidenceItems = readJsonRecords("editorial/evidence-items");
const claimCards = readJsonRecords("editorial/claim-cards");
const sectionBriefs = readJsonRecords("editorial/section-briefs");
const fragments = readJsonRecords("editorial/fragments");
const evidenceItemIds = new Set();
const claimIds = new Set();
const fragmentIds = new Set();

function assertNoLocalPaths(record, label) {
  const serialized = JSON.stringify(record);
  if (serialized.includes("/Users/")) {
    errors.push(`${label} exposes a local /Users/ path.`);
  }
}

whitepaperOutline.forEach((section) => {
  if (!section.id || !section.title || typeof section.order !== "number") {
    errors.push(`Whitepaper outline section ${section.id ?? "(missing id)"} must include id, title, and numeric order.`);
  }
});

evidenceItems.forEach((item) => {
  assertNoLocalPaths(item, `Evidence item ${item.id ?? "(missing id)"}`);

  if (!item.id || !item.sourceId || !item.sourceLocator || !item.evidenceType || !item.passageSummary) {
    errors.push(
      `Evidence item ${item.id ?? "(missing id)"} must include id, sourceId, sourceLocator, evidenceType, and passageSummary.`,
    );
    return;
  }

  if (evidenceItemIds.has(item.id)) {
    errors.push(`Evidence item ID is duplicated: ${item.id}`);
  }
  evidenceItemIds.add(item.id);

  if (!sourceIds.has(item.sourceId)) {
    errors.push(`Evidence item ${item.id} references unknown source ID: ${item.sourceId}`);
  }

  if (!validEditorialStatuses.has(item.reviewStatus)) {
    errors.push(`Evidence item ${item.id} has invalid reviewStatus: ${item.reviewStatus}`);
  }
});

claimCards.forEach((claim) => {
  assertNoLocalPaths(claim, `Claim card ${claim.id ?? "(missing id)"}`);

  if (
    !claim.id ||
    !claim.sourceId ||
    !claim.claim ||
    !Array.isArray(claim.evidenceItemIds) ||
    !Array.isArray(claim.candidateSectionIds)
  ) {
    errors.push(
      `Claim card ${claim.id ?? "(missing id)"} must include id, sourceId, claim, evidenceItemIds, and candidateSectionIds.`,
    );
    return;
  }

  if (claimIds.has(claim.id)) {
    errors.push(`Claim card ID is duplicated: ${claim.id}`);
  }
  claimIds.add(claim.id);

  if (!sourceIds.has(claim.sourceId)) {
    errors.push(`Claim card ${claim.id} references unknown source ID: ${claim.sourceId}`);
  }

  if (!validEditorialStatuses.has(claim.reviewStatus)) {
    errors.push(`Claim card ${claim.id} has invalid reviewStatus: ${claim.reviewStatus}`);
  }

  if (!claim.evidenceItemIds.length) {
    errors.push(`Claim card ${claim.id} must include at least one evidenceItemId.`);
  }

  claim.evidenceItemIds.forEach((itemId) => {
    if (!evidenceItemIds.has(itemId)) {
      errors.push(`Claim card ${claim.id} references unknown evidence item ID: ${itemId}`);
    }
  });

  claim.candidateSectionIds.forEach((sectionId) => {
    if (!outlineSectionIds.has(sectionId)) {
      errors.push(`Claim card ${claim.id} references unknown outline section: ${sectionId}`);
    }
  });
});

sectionBriefs.forEach((brief) => {
  assertNoLocalPaths(brief, `Section brief ${brief.id ?? "(missing id)"}`);

  if (!brief.id || !brief.sectionId || !brief.purpose) {
    errors.push(`Section brief ${brief.id ?? "(missing id)"} must include id, sectionId, and purpose.`);
    return;
  }

  if (!outlineSectionIds.has(brief.sectionId)) {
    errors.push(`Section brief ${brief.id} references unknown outline section: ${brief.sectionId}`);
  }

  if (!validEditorialStatuses.has(brief.reviewStatus)) {
    errors.push(`Section brief ${brief.id} has invalid reviewStatus: ${brief.reviewStatus}`);
  }

  (brief.preferredClaimIds ?? []).forEach((claimId) => {
    if (!claimIds.has(claimId)) {
      errors.push(`Section brief ${brief.id} references unknown claim ID: ${claimId}`);
    }
  });
});

fragments.forEach((fragment) => {
  assertNoLocalPaths(fragment, `Whitepaper fragment ${fragment.id ?? "(missing id)"}`);

  if (!fragment.id || !fragment.sectionId || !fragment.kind || !fragment.text) {
    errors.push(`Whitepaper fragment ${fragment.id ?? "(missing id)"} must include id, sectionId, kind, and text.`);
    return;
  }

  if (fragmentIds.has(fragment.id)) {
    errors.push(`Whitepaper fragment ID is duplicated: ${fragment.id}`);
  }
  fragmentIds.add(fragment.id);

  if (!outlineSectionIds.has(fragment.sectionId)) {
    errors.push(`Whitepaper fragment ${fragment.id} references unknown outline section: ${fragment.sectionId}`);
  }

  if (!validEditorialStatuses.has(fragment.reviewStatus)) {
    errors.push(`Whitepaper fragment ${fragment.id} has invalid reviewStatus: ${fragment.reviewStatus}`);
  }

  if (!Array.isArray(fragment.claimIds) || !fragment.claimIds.length) {
    errors.push(`Whitepaper fragment ${fragment.id} must include at least one claimId.`);
  } else {
    fragment.claimIds.forEach((claimId) => {
      if (!claimIds.has(claimId)) {
        errors.push(`Whitepaper fragment ${fragment.id} references unknown claim ID: ${claimId}`);
      }
    });
  }

  if (!Array.isArray(fragment.sourceIds) || !fragment.sourceIds.length) {
    errors.push(`Whitepaper fragment ${fragment.id} must include at least one sourceId.`);
  } else {
    fragment.sourceIds.forEach((sourceId) => {
      if (!sourceIds.has(sourceId)) {
        errors.push(`Whitepaper fragment ${fragment.id} references unknown source ID: ${sourceId}`);
      }
    });
  }
});

if (errors.length) {
  console.error("Content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Content validation passed: ${guidanceBlocks.length} guidance blocks, ${resources.length} resources, ${sourceIds.size} source records, ${evidenceItems.length} evidence items, ${claimCards.length} claim cards, ${sectionBriefs.length} briefs, and ${fragments.length} fragments checked.`,
);
