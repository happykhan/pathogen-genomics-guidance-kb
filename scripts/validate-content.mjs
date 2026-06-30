import { existsSync, readFileSync } from "node:fs";
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
  const source = read("src/data/resources.ts")
    .replace(/import type \{ ResourceRecord \} from "\.\.\/types\/content";\n\n/, "")
    .replace(/export const resources: ResourceRecord\[] =/, "const resources =")
    .replace(/;\s*$/, ";\nreturn resources;");
  return Function(source)();
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
const sourceIds = new Set(Object.keys(sources));
const validStatuses = new Set(["reviewed", "partial", "gap"]);
const validResourceStatuses = new Set(["extracted", "candidate"]);
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

if (errors.length) {
  console.error("Content validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Content validation passed: ${guidanceBlocks.length} guidance blocks, ${resources.length} resources, and ${sourceIds.size} source records checked.`,
);
