#!/usr/bin/env node

import { writeFile } from "node:fs/promises";

const searchEndpoint = "https://iris.who.int/server/api/discover/search/objects";
const outputPath = new URL("../src/data/whoIrisResources.ts", import.meta.url);

const queries = [
  "pathogen genomics",
  "genomic surveillance",
  "pathogen genome data sharing",
  "whole genome sequencing public health",
  "sequencing implementation guide",
  "bioinformatics genomic surveillance",
  "SARS-CoV-2 sequencing",
  "mpox genomic surveillance",
  "influenza genomic surveillance",
  "tuberculosis sequencing",
  "antimicrobial resistance genomic surveillance",
  "One Health genomic surveillance",
  "genomics costing",
  "laboratory sequencing quality",
  "metadata genomic surveillance",
];

const topicRules = [
  ["data-sharing", ["data sharing", "share", "sharing", "platform", "repository", "access"]],
  ["metadata", ["metadata", "data integration", "contextual data", "interoperability"]],
  ["bioinformatics", ["bioinformatics", "pipeline", "workflow", "analysis", "analytical", "computational"]],
  ["quality", ["quality", "validation", "proficiency", "assurance", "quality control", "qc"]],
  ["surveillance", ["surveillance", "monitoring", "preparedness", "response"]],
  ["implementation", ["implementation", "implementing", "strategy", "framework", "guidance", "guide"]],
  ["costing", ["cost", "costing", "investment", "economic", "financing"]],
  ["ethics-governance", ["ethic", "governance", "privacy", "legal", "principles"]],
  ["laboratory", ["laboratory", "specimen", "sequencing", "sample", "diagnostic"]],
  ["reporting", ["report", "decision", "interpret", "public health decision"]],
];

const organismRules = [
  ["tb", ["tuberculosis", "mycobacterium", " tb "]],
  ["respiratory-viruses", ["sars-cov-2", "covid", "influenza", "respiratory", "coronavirus"]],
  ["amr", ["antimicrobial resistance", "drug resistance", "resistance", "amr"]],
  ["enteric-bacteria", ["foodborne", "salmonella", "listeria", "escherichia", "enteric", "cholera"]],
  ["nosocomial", ["healthcare-associated", "hospital", "infection prevention", "infection control", "nosocomial"]],
];

const audienceRules = [
  ["policy", ["strategy", "framework", "governance", "principles", "policy"]],
  ["director", ["strategy", "investment", "implementation", "framework", "preparedness"]],
  ["lab-lead", ["laboratory", "specimen", "sequencing", "implementation guide", "quality"]],
  ["bioinformatician", ["bioinformatics", "analysis", "pipeline", "workflow", "analytical"]],
  ["it-security", ["data sharing", "platform", "access", "repository", "governance", "privacy"]],
  ["data-manager", ["metadata", "data sharing", "repository", "interoperability", "data integration"]],
  ["programme-lead", ["implementation", "surveillance", "response", "public health"]],
];

const stageRules = [
  ["exploring", ["strategy", "framework", "principles", "investment", "preparedness"]],
  ["pilot", ["implementation guide", "implementing", "pilot", "laboratory", "sequencing"]],
  ["routine-service", ["surveillance", "quality", "workflow", "data sharing", "reporting"]],
  ["national-scale", ["national", "global", "framework", "strategy", "platform"]],
  ["upgrading", ["strengthening", "enhance", "future", "scale", "capacity"]],
];

const stopWords = new Set(
  "a an and are as at be by can for from has have in into is it its of on or that the their this to with who world health organization genomic genomics genome pathogen pathogens surveillance sequencing sequence sequences data public".split(
    " ",
  ),
);

function values(metadata, key) {
  return (metadata?.[key] ?? []).map((entry) => entry.value).filter(Boolean);
}

function first(metadata, key) {
  return values(metadata, key)[0];
}

function cleanText(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function includesAny(text, terms) {
  const padded = ` ${text} `;
  return terms.some((term) => padded.includes(term));
}

function classify(text, rules, fallback = []) {
  const matches = rules.filter(([, terms]) => includesAny(text, terms)).map(([id]) => id);
  return matches.length ? matches : fallback;
}

function isRelevantPathogenGenomicsRecord(record) {
  const text = record.searchText.toLowerCase();
  const year = Number(record.year);
  if (Number.isFinite(year) && year < 2014) return false;
  if (text.includes("human genome") || text.includes("human genomics")) return false;
  if (text.includes("drinking-water") || text.includes("drinking water")) return false;
  if (text.includes("interferon gamma release")) return false;

  const hasGenomics = /\b(genomic|genomics|genome|sequencing|whole-genome|whole genome|next generation sequencing|ngs)\b/.test(text);
  const hasPublicHealthContext =
    /\b(pathogen|pathogens|surveillance|outbreak|epidemic|pandemic|public health|laboratory|antimicrobial|tuberculosis|influenza|sars-cov-2|mpox|virus|viral|bacteria|bacterial)\b/.test(
      text,
    );

  return hasGenomics && hasPublicHealthContext;
}

function tokenise(text) {
  return cleanText(text)
    .toLowerCase()
    .replace(/[^a-z0-9 -]+/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 2 && !stopWords.has(token));
}

function cosine(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return normA && normB ? dot / Math.sqrt(normA * normB) : 0;
}

function multiplyCovariance(matrix, vector) {
  const rows = matrix.length;
  const cols = vector.length;
  const mv = new Array(rows).fill(0);
  for (let row = 0; row < rows; row += 1) {
    let sum = 0;
    for (let col = 0; col < cols; col += 1) sum += matrix[row][col] * vector[col];
    mv[row] = sum;
  }
  const result = new Array(cols).fill(0);
  for (let col = 0; col < cols; col += 1) {
    let sum = 0;
    for (let row = 0; row < rows; row += 1) sum += matrix[row][col] * mv[row];
    result[col] = sum;
  }
  return result;
}

function normaliseVector(vector) {
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => value / norm);
}

function powerComponent(matrix, seed, orthogonalTo) {
  let vector = normaliseVector(seed);
  for (let iteration = 0; iteration < 60; iteration += 1) {
    vector = multiplyCovariance(matrix, vector);
    if (orthogonalTo) {
      const projection = vector.reduce((sum, value, index) => sum + value * orthogonalTo[index], 0);
      vector = vector.map((value, index) => value - projection * orthogonalTo[index]);
    }
    vector = normaliseVector(vector);
  }
  return vector;
}

function projectRecords(records) {
  if (records.length < 3) {
    return records.map((record, index) => ({ ...record, map: { x: 18 + index * 30, y: 50 }, similar: [] }));
  }

  const docs = records.map((record) => tokenise(`${record.title} ${record.abstract ?? ""} ${record.topics.join(" ")}`));
  const documentFrequency = new Map();
  docs.forEach((tokens) => {
    new Set(tokens).forEach((token) => documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1));
  });

  const vocab = [...documentFrequency.entries()]
    .filter(([, df]) => df >= 2)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 240)
    .map(([token]) => token);

  const vectors = docs.map((tokens) => {
    const counts = new Map();
    tokens.forEach((token) => counts.set(token, (counts.get(token) ?? 0) + 1));
    return vocab.map((token) => {
      const tf = counts.get(token) ?? 0;
      const idf = Math.log((records.length + 1) / ((documentFrequency.get(token) ?? 0) + 1)) + 1;
      return tf * idf;
    });
  });

  const means = vocab.map((_, col) => vectors.reduce((sum, vector) => sum + vector[col], 0) / vectors.length);
  const centered = vectors.map((vector) => vector.map((value, index) => value - means[index]));
  const pc1 = powerComponent(centered, vocab.map((_, index) => Math.sin(index + 1)));
  const pc2 = powerComponent(centered, vocab.map((_, index) => Math.cos(index + 3)), pc1);

  const rawPoints = centered.map((vector) => ({
    x: vector.reduce((sum, value, index) => sum + value * pc1[index], 0),
    y: vector.reduce((sum, value, index) => sum + value * pc2[index], 0),
  }));

  const minX = Math.min(...rawPoints.map((point) => point.x));
  const maxX = Math.max(...rawPoints.map((point) => point.x));
  const minY = Math.min(...rawPoints.map((point) => point.y));
  const maxY = Math.max(...rawPoints.map((point) => point.y));
  const scale = (value, min, max) => (max === min ? 50 : 8 + ((value - min) / (max - min)) * 84);

  return records.map((record, index) => {
    const neighbours = vectors
      .map((vector, otherIndex) => ({
        id: records[otherIndex].id,
        similarity: otherIndex === index ? -1 : cosine(vectors[index], vector),
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 4)
      .map((item) => item.id);

    return {
      ...record,
      map: {
        x: Number(scale(rawPoints[index].x, minX, maxX).toFixed(2)),
        y: Number(scale(rawPoints[index].y, minY, maxY).toFixed(2)),
      },
      similar: neighbours,
    };
  });
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "user-agent": "pathogen-genomics-guidance-kb metadata sync",
    },
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return response.json();
}

async function fetchSearch(query) {
  const url = new URL(searchEndpoint);
  url.searchParams.set("query", query);
  url.searchParams.set("size", "25");
  url.searchParams.set("page", "0");
  const json = await fetchJson(url);
  return json._embedded?.searchResult?._embedded?.objects ?? [];
}

async function fetchPdfUrl(itemId) {
  try {
    const json = await fetchJson(`https://iris.who.int/server/api/core/items/${itemId}/bundles?embed=bitstreams`);
    const bundles = json._embedded?.bundles ?? [];
    const bitstreams = bundles.flatMap((bundle) => bundle._embedded?.bitstreams?._embedded?.bitstreams ?? []);
    const pdf = bitstreams.find((bitstream) => bitstream.name?.toLowerCase().endsWith(".pdf"));
    return pdf?._links?.content?.href;
  } catch {
    return undefined;
  }
}

async function main() {
  const byHandle = new Map();
  for (const query of queries) {
    const objects = await fetchSearch(query);
    for (const object of objects) {
      const item = object._embedded?.indexableObject;
      if (!item?.handle) continue;
      byHandle.set(item.handle, item);
    }
  }

  const byTitleYear = new Map();
  const candidates = [...byHandle.values()]
    .map((item) => {
      const metadata = item.metadata ?? {};
      const title = cleanText(item.name || first(metadata, "dc.title") || "");
      const abstract = cleanText(first(metadata, "dc.description.abstract") || "");
      const issued = first(metadata, "dc.date.issued") || "";
      const year = issued.slice(0, 4) || "n.d.";
      const authors = values(metadata, "dc.contributor.author");
      const language = first(metadata, "dc.language") || first(metadata, "dc.language.iso");
      const pages = first(metadata, "dc.description");
      const url = first(metadata, "dc.identifier.uri") || `https://iris.who.int/handle/${item.handle}`;
      const text = cleanText(`${title} ${abstract} ${values(metadata, "dc.subject").join(" ")}`).toLowerCase();
      const topics = classify(text, topicRules, ["implementation"]);
      const organisms = classify(text, organismRules, ["general"]);
      const audiences = classify(text, audienceRules, ["all"]);
      const stages = classify(text, stageRules, ["exploring"]);

      return {
        id: `who-${item.handle.replace("/", "-")}`,
        title,
        year,
        issued,
        handle: item.handle,
        url,
        authors,
        language,
        pages,
        abstract,
        topics,
        organisms,
        audiences,
        stages,
        searchText: cleanText(`${title} ${abstract} ${topics.join(" ")} ${organisms.join(" ")}`),
      };
    })
    .filter((record) => record.title && isRelevantPathogenGenomicsRecord(record))
    .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title))
    .filter((record) => {
      const key = `${record.title.toLowerCase()}::${record.year}`;
      if (byTitleYear.has(key)) return false;
      byTitleYear.set(key, true);
      return true;
    })
    .slice(0, 80);

  const withPdfs = [];
  for (const record of candidates) {
    const itemId = record.id.replace(/^who-/, "").replace("-", "/");
    const sourceItem = byHandle.get(itemId);
    const pdfUrl = sourceItem?.uuid ? await fetchPdfUrl(sourceItem.uuid) : undefined;
    withPdfs.push({ ...record, pdfUrl });
  }

  const projected = projectRecords(withPdfs);
  const generatedAt = new Date().toISOString();
  const content = `import type { WhoIrisRecord } from "../types/whoIris";

export const whoIrisGeneratedAt = ${JSON.stringify(generatedAt)};

export const whoIrisResources: WhoIrisRecord[] = ${JSON.stringify(projected, null, 2)};
`;

  await writeFile(outputPath, content);
  console.log(`Wrote ${projected.length} WHO IRIS records to ${outputPath.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
