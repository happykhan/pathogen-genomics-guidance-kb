import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(repoRoot, "public/pdfs/manifest.json");
const publicPdfDir = path.join(repoRoot, "public/pdfs");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const errors = [];

mkdirSync(publicPdfDir, { recursive: true });

function resolveSource(sourcePath) {
  return path.isAbsolute(sourcePath) ? sourcePath : path.join(repoRoot, sourcePath);
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

manifest.forEach((entry) => {
  const destination = path.join(repoRoot, "public", entry.publicPath.replace(/^\//, ""));

  if (!entry.resourceId || !entry.publicPath || !entry.redistributionNote) {
    errors.push(`Manifest entry is incomplete: ${JSON.stringify(entry)}`);
    return;
  }

  if (!entry.publicPath.startsWith("/pdfs/") || !entry.publicPath.endsWith(".pdf")) {
    errors.push(`Manifest entry ${entry.resourceId} has invalid publicPath: ${entry.publicPath}`);
    return;
  }

  if (!entry.sourcePath) {
    if (!existsSync(destination)) {
      errors.push(`Manifest entry ${entry.resourceId} missing public file: ${entry.publicPath}`);
      return;
    }
    console.log(`${entry.resourceId}: ${entry.publicPath} (${formatBytes(statSync(destination).size)})`);
    return;
  }

  const source = resolveSource(entry.sourcePath);

  if (!existsSync(source)) {
    errors.push(`Manifest entry ${entry.resourceId} missing source file: ${entry.sourcePath}`);
    return;
  }

  mkdirSync(path.dirname(destination), { recursive: true });
  copyFileSync(source, destination);
  console.log(`${entry.resourceId}: ${entry.publicPath} (${formatBytes(statSync(destination).size)})`);
});

if (errors.length) {
  console.error("PDF sync failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Synced ${manifest.length} public PDFs.`);
