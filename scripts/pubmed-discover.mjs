#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const PUBMED_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils";
const DEFAULT_OUT_DIR = "outputs/pubmed-discovery";
const DEFAULT_MAX_PER_QUERY = 25;

const searchProfiles = [
  {
    id: "why-genomics-value",
    label: "Why genomics: public-health value, benefits, and limitations",
    query:
      '("pathogen genomics"[Title/Abstract] OR "genomic surveillance"[Title/Abstract] OR "whole genome sequencing"[Title/Abstract]) AND ("public health"[Title/Abstract]) AND (benefit*[Title/Abstract] OR value[Title/Abstract] OR impact[Title/Abstract] OR limitation*[Title/Abstract] OR implementation[Title/Abstract])',
  },
  {
    id: "investment-costing",
    label: "Investment, costing, economics, and return on investment",
    query:
      '("pathogen genomics"[Title/Abstract] OR "genomic surveillance"[Title/Abstract] OR (("whole genome sequencing"[Title/Abstract]) AND ("public health"[Title/Abstract] OR pathogen*[Title/Abstract] OR outbreak*[Title/Abstract] OR surveillance[Title/Abstract] OR infectious[Title/Abstract]))) AND ("cost"[Title/Abstract] OR costing[Title/Abstract] OR economic*[Title/Abstract] OR investment[Title/Abstract] OR "return on investment"[Title/Abstract] OR "cost-effectiveness"[Title/Abstract])',
  },
  {
    id: "foodborne-value",
    label: "Foodborne pathogen genomics and microbial food safety",
    query:
      '("whole genome sequencing"[Title/Abstract] OR genomics[Title/Abstract] OR "genomic surveillance"[Title/Abstract]) AND (foodborne[Title/Abstract] OR "food safety"[Title/Abstract] OR Salmonella[Title/Abstract] OR Listeria[Title/Abstract] OR "Escherichia coli"[Title/Abstract] OR GenomeTrakr[Title/Abstract]) AND ("public health"[Title/Abstract] OR outbreak*[Title/Abstract] OR surveillance[Title/Abstract] OR "source tracking"[Title/Abstract])',
  },
  {
    id: "implementation-national",
    label: "National implementation, readiness, and capability building",
    query:
      '("pathogen genomics"[Title/Abstract] OR "genomic surveillance"[Title/Abstract]) AND (implementation[Title/Abstract] OR readiness[Title/Abstract] OR capacity[Title/Abstract] OR capability[Title/Abstract] OR "national programme"[Title/Abstract] OR "public health laboratory"[Title/Abstract])',
  },
  {
    id: "data-bioinformatics-infrastructure",
    label: "Bioinformatics, data systems, workflows, and infrastructure",
    query:
      '("pathogen genomics"[Title/Abstract] OR "genomic surveillance"[Title/Abstract] OR "whole genome sequencing"[Title/Abstract]) AND (bioinformatics[Title/Abstract] OR workflow*[Title/Abstract] OR metadata[Title/Abstract] OR "data sharing"[Title/Abstract] OR infrastructure[Title/Abstract] OR "data integration"[Title/Abstract]) AND "public health"[Title/Abstract]',
  },
];

const relevanceThemes = [
  {
    id: "value-case",
    label: "value case",
    terms: ["benefit", "value", "impact", "public health action", "decision", "preparedness", "response"],
  },
  {
    id: "economic",
    label: "economic/costing",
    terms: ["cost", "economic", "investment", "budget", "cost-effectiveness", "return on investment", "health benefits"],
  },
  {
    id: "foodborne",
    label: "foodborne",
    terms: ["foodborne", "food safety", "salmonella", "listeria", "escherichia coli", "genometrakr", "source tracking"],
  },
  {
    id: "implementation",
    label: "implementation",
    terms: ["implementation", "capacity", "capability", "readiness", "national", "programme", "laboratory"],
  },
  {
    id: "data-infrastructure",
    label: "data/bioinformatics infrastructure",
    terms: ["bioinformatics", "workflow", "metadata", "data sharing", "infrastructure", "data integration", "sequencing capacity"],
  },
  {
    id: "limits-equity",
    label: "limits/equity/constraints",
    terms: ["limitation", "challenge", "barrier", "equity", "disparit", "supply chain", "procurement", "workforce"],
  },
];

function parseArgs(argv) {
  const args = {
    outDir: DEFAULT_OUT_DIR,
    maxPerQuery: DEFAULT_MAX_PER_QUERY,
    sinceYear: 2014,
    email: process.env.NCBI_EMAIL || "",
    apiKey: process.env.NCBI_API_KEY || "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--out-dir") args.outDir = argv[++index];
    else if (arg === "--max-per-query") args.maxPerQuery = Number(argv[++index]);
    else if (arg === "--since-year") args.sinceYear = Number(argv[++index]);
    else if (arg === "--email") args.email = argv[++index];
    else if (arg === "--api-key") args.apiKey = argv[++index];
    else if (arg === "--help") {
      printHelp();
      process.exit(0);
    }
  }
  return args;
}

function printHelp() {
  console.log(`Usage: npm run pubmed:discover -- [options]

Options:
  --max-per-query <n>   PubMed records per search profile. Default: ${DEFAULT_MAX_PER_QUERY}
  --since-year <year>   Only include papers from this year onward. Default: 2014
  --out-dir <path>      Output directory. Default: ${DEFAULT_OUT_DIR}
  --email <email>       Optional NCBI email/tool contact.
  --api-key <key>       Optional NCBI API key, or set NCBI_API_KEY.
`);
}

async function ncbiGet(endpoint, params, args) {
  const url = new URL(`${PUBMED_BASE}/${endpoint}`);
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }
  url.searchParams.set("tool", "pathogen-genomics-guidance-kb");
  if (args.email) url.searchParams.set("email", args.email);
  if (args.apiKey) url.searchParams.set("api_key", args.apiKey);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`NCBI request failed ${response.status}: ${url.toString()}`);
  }
  return response.text();
}

async function searchPubMed(profile, args) {
  const text = await ncbiGet(
    "esearch.fcgi",
    {
      db: "pubmed",
      retmode: "json",
      sort: "relevance",
      retmax: args.maxPerQuery,
      term: `${profile.query} AND ${args.sinceYear}:3000[pdat]`,
    },
    args,
  );
  const json = JSON.parse(text);
  return json.esearchresult?.idlist ?? [];
}

async function fetchPubMedRecords(pmids, args) {
  if (!pmids.length) return [];
  const xmlText = await ncbiGet(
    "efetch.fcgi",
    {
      db: "pubmed",
      retmode: "xml",
      id: pmids.join(","),
    },
    args,
  );
  return parsePubMedXml(xmlText);
}

function parsePubMedXml(xmlText) {
  const articles = [...xmlText.matchAll(/<PubmedArticle>([\s\S]*?)<\/PubmedArticle>/g)].map((match) => match[1]);
  return articles.map((article) => {
    const pmid = text(article, /<PMID[^>]*>([\s\S]*?)<\/PMID>/);
    const title = clean(text(article, /<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/));
    const journal = clean(text(article, /<Title>([\s\S]*?)<\/Title>/) || text(article, /<ISOAbbreviation>([\s\S]*?)<\/ISOAbbreviation>/));
    const year =
      text(article, /<PubDate>[\s\S]*?<Year>([\s\S]*?)<\/Year>[\s\S]*?<\/PubDate>/) ||
      text(article, /<PubDate>[\s\S]*?<MedlineDate>([\s\S]*?)<\/MedlineDate>[\s\S]*?<\/PubDate>/);
    const abstract = [...article.matchAll(/<AbstractText(?: Label="([^"]+)")?[^>]*>([\s\S]*?)<\/AbstractText>/g)]
      .map((match) => `${match[1] ? `${decodeXml(match[1])}: ` : ""}${clean(match[2])}`)
      .join(" ");
    const authors = [...article.matchAll(/<Author\b[\s\S]*?<\/Author>/g)]
      .map((authorMatch) => {
        const block = authorMatch[0];
        const collective = clean(text(block, /<CollectiveName>([\s\S]*?)<\/CollectiveName>/));
        if (collective) return collective;
        const last = clean(text(block, /<LastName>([\s\S]*?)<\/LastName>/));
        const initials = clean(text(block, /<Initials>([\s\S]*?)<\/Initials>/));
        return [last, initials].filter(Boolean).join(" ");
      })
      .filter(Boolean);
    const doi = [...article.matchAll(/<ArticleId IdType="doi">([\s\S]*?)<\/ArticleId>/g)].map((match) => clean(match[1]))[0] ?? "";
    const publicationTypes = [...article.matchAll(/<PublicationType[^>]*>([\s\S]*?)<\/PublicationType>/g)].map((match) => clean(match[1]));

    return {
      pmid,
      title,
      journal,
      year,
      doi,
      authors,
      publicationTypes,
      abstract,
      url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
    };
  });
}

function text(source, regex) {
  const match = source.match(regex);
  return match ? decodeXml(match[1]) : "";
}

function clean(value) {
  return decodeXml(value)
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeXml(value = "") {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function scoreRecord(record, matchedProfiles) {
  const haystack = `${record.title} ${record.abstract} ${record.journal} ${record.publicationTypes.join(" ")}`.toLowerCase();
  const themeHits = relevanceThemes
    .map((theme) => {
      const hits = theme.terms.filter((term) => haystack.includes(term.toLowerCase()));
      return hits.length ? { id: theme.id, label: theme.label, hits } : null;
    })
    .filter(Boolean);

  let score = 0;
  score += matchedProfiles.length * 2;
  score += themeHits.reduce((sum, theme) => sum + Math.min(theme.hits.length, 4), 0);
  if (/review|systematic review|meta-analysis/i.test(record.publicationTypes.join(" ") + " " + record.title)) score += 3;
  if (/economic|cost|investment|foodborne|genometrakr|implementation|public health/i.test(record.title)) score += 3;
  if (/oncology|cancer|tumou?r|pharmacogenomics|human genomics|rare disease/i.test(`${record.title} ${record.abstract}`)) score -= 6;
  if (!record.abstract) score -= 4;

  const recommendation =
    score >= 12
      ? "priority-review"
      : score >= 8
        ? "screen"
        : score >= 5
          ? "low-priority"
          : "probably-skip";

  return {
    score,
    recommendation,
    themes: themeHits,
  };
}

function dedupeResults(profileResults) {
  const byPmid = new Map();
  for (const result of profileResults) {
    for (const record of result.records) {
      const current = byPmid.get(record.pmid) ?? { ...record, matchedProfiles: [] };
      current.matchedProfiles.push({ id: result.profile.id, label: result.profile.label });
      byPmid.set(record.pmid, current);
    }
  }
  return [...byPmid.values()]
    .map((record) => ({ ...record, relevance: scoreRecord(record, record.matchedProfiles) }))
    .sort((a, b) => b.relevance.score - a.relevance.score || Number(b.year.slice(0, 4) || 0) - Number(a.year.slice(0, 4) || 0));
}

function markdownReport(records, args) {
  const generated = new Date().toISOString();
  const priority = records.filter((record) => record.relevance.recommendation === "priority-review");
  const screen = records.filter((record) => record.relevance.recommendation === "screen");

  return `# PubMed Discovery Report

Generated: ${generated}

Search scope: ${args.sinceYear}+; max ${args.maxPerQuery} records per query.

## Summary

- Total unique records: ${records.length}
- Priority review: ${priority.length}
- Screen: ${screen.length}

## Priority Review

${records
  .filter((record) => ["priority-review", "screen"].includes(record.relevance.recommendation))
  .map(formatRecord)
  .join("\n\n")}

## Lower Priority / Probably Skip

${records
  .filter((record) => !["priority-review", "screen"].includes(record.relevance.recommendation))
  .slice(0, 50)
  .map(formatRecord)
  .join("\n\n")}
`;
}

function formatRecord(record) {
  const authors = record.authors.length > 6 ? `${record.authors.slice(0, 6).join(", ")} et al.` : record.authors.join(", ");
  const abstract = record.abstract || "No abstract returned by PubMed.";
  const themes = record.relevance.themes.map((theme) => `${theme.label}: ${theme.hits.slice(0, 5).join(", ")}`).join("; ");
  const profiles = record.matchedProfiles.map((profile) => profile.label).join("; ");

  return `### ${record.title}

- PMID: [${record.pmid}](${record.url})
- Year / journal: ${record.year || "unknown"} / ${record.journal || "unknown"}
- Authors: ${authors || "not returned"}
- DOI: ${record.doi || "not returned"}
- Recommendation: \`${record.relevance.recommendation}\` (score ${record.relevance.score})
- Matched searches: ${profiles}
- Theme hits: ${themes || "none"}

${abstract}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profileResults = [];

  for (const profile of searchProfiles) {
    console.error(`Searching PubMed: ${profile.label}`);
    const pmids = await searchPubMed(profile, args);
    await delay(args.apiKey ? 120 : 350);
    const records = await fetchPubMedRecords(pmids, args);
    await delay(args.apiKey ? 120 : 350);
    profileResults.push({ profile, pmids, records });
  }

  const records = dedupeResults(profileResults);
  await mkdir(args.outDir, { recursive: true });
  const jsonPath = path.join(args.outDir, "pubmed-discovery.json");
  const mdPath = path.join(args.outDir, "pubmed-discovery.md");
  await writeFile(jsonPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), args, searchProfiles, records }, null, 2)}\n`);
  await writeFile(mdPath, markdownReport(records, args));

  console.log(`Wrote ${records.length} unique PubMed records`);
  console.log(`- ${jsonPath}`);
  console.log(`- ${mdPath}`);
  console.log("");
  console.log("Top records:");
  for (const record of records.slice(0, 10)) {
    console.log(`- [${record.relevance.recommendation}] ${record.relevance.score} PMID ${record.pmid}: ${record.title}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
