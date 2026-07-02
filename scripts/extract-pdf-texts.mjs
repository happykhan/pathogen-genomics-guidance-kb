import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(repoRoot, "source-material", "extracted-text");
const manifest = [];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractPdf(pdfPath, group) {
  if (!existsSync(pdfPath)) return;
  const relativePdfPath = path.relative(repoRoot, pdfPath);
  const groupDir = path.join(outputRoot, group);
  mkdirSync(groupDir, { recursive: true });
  const outputPath = path.join(groupDir, `${slugify(path.basename(pdfPath))}.txt`);

  execFileSync("pdftotext", ["-layout", "-enc", "UTF-8", pdfPath, outputPath], {
    cwd: repoRoot,
    stdio: "pipe",
  });

  const text = readFileSync(outputPath, "utf8");
  manifest.push({
    sourcePdf: relativePdfPath.startsWith("..") ? pdfPath : relativePdfPath,
    extractedText: path.relative(repoRoot, outputPath),
    bytes: Buffer.byteLength(text),
    lines: text.split(/\r?\n/).length,
  });
}

function extractDirectory(relativeDir, group) {
  const directory = path.join(repoRoot, relativeDir);
  if (!existsSync(directory)) return;
  readdirSync(directory)
    .filter((file) => file.toLowerCase().endsWith(".pdf"))
    .sort()
    .forEach((file) => extractPdf(path.join(directory, file), group));
}

extractDirectory("public/pdfs", "public-pdfs");
extractDirectory("source-material/local/who-ipsn", "local-who-ipsn");

const localInventoryPath = path.join(repoRoot, "source-material", "local-full-text-inventory.md");
if (existsSync(localInventoryPath)) {
  const inventory = readFileSync(localInventoryPath, "utf8");
  const localPaths = [...inventory.matchAll(/`(\/Users\/[^`]+?\.pdf)`/g)].map((match) => match[1]);
  localPaths.forEach((pdfPath) => extractPdf(pdfPath, "local-downloads"));
}

mkdirSync(outputRoot, { recursive: true });
writeFileSync(path.join(outputRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Extracted ${manifest.length} PDFs to ${path.relative(repoRoot, outputRoot)}`);
