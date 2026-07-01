import http from "node:http";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const host = "127.0.0.1";
const port = Number(process.env.EDITORIAL_REVIEW_PORT ?? 5177);
const fragmentDir = path.join(repoRoot, "editorial/fragments");
const evidenceDir = path.join(repoRoot, "editorial/evidence-items");
const claimDir = path.join(repoRoot, "editorial/claim-cards");
const briefDir = path.join(repoRoot, "editorial/section-briefs");

const validStatuses = new Set(["draft", "reviewed", "gap", "deprecated"]);

function readJsonFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .sort()
    .flatMap((file) => {
      const fullPath = path.join(dir, file);
      const records = JSON.parse(readFileSync(fullPath, "utf8"));
      return records.map((record) => ({ ...record, _file: path.relative(repoRoot, fullPath) }));
    });
}

function loadEditorial() {
  return {
    evidenceItems: readJsonFiles(evidenceDir),
    fragments: readJsonFiles(fragmentDir).sort((a, b) => {
      if (a.sectionId === b.sectionId) return (a.order ?? 0) - (b.order ?? 0);
      return String(a.sectionId).localeCompare(String(b.sectionId));
    }),
    claims: readJsonFiles(claimDir),
    briefs: readJsonFiles(briefDir),
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large."));
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function updateFragment(fragmentId, patch) {
  if (!validStatuses.has(patch.reviewStatus)) {
    throw new Error(`Invalid reviewStatus: ${patch.reviewStatus}`);
  }

  const files = readdirSync(fragmentDir).filter((file) => file.endsWith(".json"));
  for (const file of files) {
    const fullPath = path.join(fragmentDir, file);
    const records = JSON.parse(readFileSync(fullPath, "utf8"));
    const index = records.findIndex((record) => record.id === fragmentId);
    if (index === -1) continue;

    records[index] = {
      ...records[index],
      reviewStatus: patch.reviewStatus,
      reviewerNotes: patch.reviewerNotes ?? records[index].reviewerNotes,
      updatedAt: new Date().toISOString().slice(0, 10),
    };

    writeFileSync(fullPath, `${JSON.stringify(records, null, 2)}\n`);
    return records[index];
  }

  throw new Error(`No fragment found with id: ${fragmentId}`);
}

function renderPage() {
  const { evidenceItems, fragments, claims, briefs } = loadEditorial();
  const evidenceById = new Map(evidenceItems.map((item) => [item.id, item]));
  const claimsById = new Map(claims.map((claim) => [claim.id, claim]));
  const briefSections = new Set(briefs.map((brief) => brief.sectionId));
  const counts = fragments.reduce(
    (acc, fragment) => {
      acc[fragment.reviewStatus] = (acc[fragment.reviewStatus] ?? 0) + 1;
      return acc;
    },
    { draft: 0, reviewed: 0, gap: 0, deprecated: 0 },
  );

  const rows = fragments
    .map((fragment) => {
      const claimDetails = fragment.claimIds
        .map((claimId) => {
          const claim = claimsById.get(claimId);
          if (!claim) return `<li><span>Missing claim: ${escapeHtml(claimId)}</span></li>`;
          const evidenceDetails = (claim.evidenceItemIds ?? [])
            .map((itemId) => {
              const item = evidenceById.get(itemId);
              if (!item) return `<span class="evidence-item">Missing evidence item: ${escapeHtml(itemId)}</span>`;
              return `<span class="evidence-item">
                <strong>Source evidence item:</strong> ${escapeHtml(item.passageSummary)}
                ${item.excerpt ? `<em>Short excerpt: "${escapeHtml(item.excerpt)}"</em>` : ""}
                <small>${escapeHtml(item.evidenceType)}; ${escapeHtml(item.sourceLocator)}</small>
              </span>`;
            })
            .join("");
          return `<li>
            ${evidenceDetails}
            <span><strong>Extracted claim, not verbatim source text:</strong> ${escapeHtml(claim.claim)}</span>
            <small>Source pointer: ${escapeHtml(claim.sourceLocator)}; source ID: ${escapeHtml(claim.sourceId)}</small>
          </li>`;
        })
        .join("");
      return `
        <article class="fragment" data-fragment-id="${escapeHtml(fragment.id)}">
          <header>
            <div>
              <p class="kicker">${escapeHtml(fragment.sectionId)} / ${escapeHtml(fragment.kind)}</p>
              <h2>${escapeHtml(fragment.title ?? fragment.id)}</h2>
            </div>
            <span class="status ${escapeHtml(fragment.reviewStatus)}">${escapeHtml(fragment.reviewStatus)}</span>
          </header>
          <p class="label">Draft whitepaper text</p>
          <p class="fragment-text">${escapeHtml(fragment.text)}</p>
          <div class="evidence">
            <p><strong>Evidence chain used for this fragment:</strong></p>
            <ul>${claimDetails}</ul>
          </div>
          <p class="meta"><strong>Sources:</strong> ${escapeHtml(fragment.sourceIds.join(", "))}</p>
          <p class="meta"><strong>File:</strong> ${escapeHtml(fragment._file)}</p>
          <label>
            Review notes
            <textarea>${escapeHtml(fragment.reviewerNotes ?? "")}</textarea>
          </label>
          <div class="actions">
            <button data-status="reviewed">Approve</button>
            <button data-status="draft">Keep draft</button>
            <button data-status="gap">Mark gap</button>
            <button data-status="deprecated">Deprecate</button>
          </div>
        </article>
      `;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Local editorial review</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f8fafc;
        --surface: #fff;
        --line: #dbe4ee;
        --ink: #0f172a;
        --muted: #64748b;
        --accent: #0d9488;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font: 15px/1.55 Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main { max-width: 1040px; margin: 0 auto; padding: 28px 18px 60px; }
      .hero, .fragment {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--surface);
        box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
      }
      .hero { padding: 22px; margin-bottom: 16px; }
      h1 { margin: 4px 0 8px; font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.05; }
      .hero p { max-width: 760px; color: var(--muted); }
      .metrics { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
      .pill, .status {
        display: inline-flex; align-items: center; border: 1px solid var(--line); border-radius: 999px;
        padding: 3px 9px; background: #f1f5f9; font-size: 0.82rem; font-weight: 700;
      }
      .fragment { padding: 18px; margin-top: 12px; }
      .fragment header { display: flex; align-items: start; justify-content: space-between; gap: 16px; }
      .kicker { margin: 0; color: var(--accent); text-transform: uppercase; font-size: 0.75rem; font-weight: 800; }
      h2 { margin: 4px 0 0; font-size: 1.16rem; }
      .fragment-text { max-width: 820px; font-size: 1rem; }
      .label { margin: 12px 0 4px; color: var(--accent); text-transform: uppercase; font-size: 0.75rem; font-weight: 800; }
      .meta { color: var(--muted); margin: 7px 0; }
      .evidence {
        margin-top: 12px; border: 1px solid var(--line); border-radius: 8px;
        background: #f8fafc; padding: 12px;
      }
      .evidence p { margin: 0 0 8px; color: var(--muted); }
      .evidence ul { display: grid; gap: 8px; margin: 0; padding-left: 1.15rem; }
      .evidence li span, .evidence li small { display: block; }
      .evidence .evidence-item { margin: 0 0 6px; border-left: 2px solid #cbd5e1; padding-left: 8px; }
      .evidence .evidence-item em { display: block; margin-top: 3px; color: #334155; font-style: normal; }
      .evidence li small {
        margin-top: 3px; color: var(--muted); font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.78rem; overflow-wrap: anywhere;
      }
      label { display: grid; gap: 6px; margin-top: 12px; color: var(--muted); font-weight: 700; }
      textarea {
        width: 100%; min-height: 80px; resize: vertical; border: 1px solid var(--line);
        border-radius: 6px; padding: 10px; color: var(--ink); font: inherit; font-weight: 400;
      }
      .actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
      button {
        min-height: 38px; border: 1px solid var(--line); border-radius: 6px; background: #fff;
        color: var(--ink); cursor: pointer; padding: 7px 11px; font: inherit;
      }
      button:hover { border-color: var(--accent); }
      .status.reviewed { background: #f0fdfa; border-color: #99f6e4; color: #115e59; }
      .status.draft { background: #eff6ff; border-color: #bfdbfe; color: #1d4ed8; }
      .status.gap { background: #fff4dd; border-color: #e8c982; color: #5b3c00; }
      .status.deprecated { background: #fff1f2; border-color: #fecdd3; color: #9f1239; }
      .notice { display: none; margin-top: 12px; color: #115e59; font-weight: 700; }
      .notice.visible { display: block; }
    </style>
  </head>
  <body>
    <main>
      <section class="hero">
        <p class="kicker">Local only / writes to repo JSON</p>
        <h1>Editorial fragment review</h1>
        <p>This tool binds to 127.0.0.1 and updates files under <code>editorial/fragments/</code>. The main paragraph is draft whitepaper text. Under it, source evidence notes point back to the original documents, and extracted claims show our source-backed interpretation. Use the public <code>/backstage</code> page for read-only deployed debugging.</p>
        <div class="metrics">
          <span class="pill">${fragments.length} fragments</span>
          <span class="pill">${evidenceItems.length} evidence items</span>
          <span class="pill">${counts.draft ?? 0} draft</span>
          <span class="pill">${counts.reviewed ?? 0} reviewed</span>
          <span class="pill">${counts.gap ?? 0} gap</span>
          <span class="pill">${briefSections.size} section briefs</span>
          <span class="pill">${claims.length} claim cards</span>
        </div>
        <p class="notice" id="notice">Saved.</p>
      </section>
      ${rows}
    </main>
    <script>
      const notice = document.querySelector("#notice");
      document.addEventListener("click", async (event) => {
        const button = event.target.closest("button[data-status]");
        if (!button) return;
        const article = button.closest("[data-fragment-id]");
        const fragmentId = article.dataset.fragmentId;
        const reviewerNotes = article.querySelector("textarea").value;
        const response = await fetch("/api/fragments/" + encodeURIComponent(fragmentId), {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ reviewStatus: button.dataset.status, reviewerNotes })
        });
        if (!response.ok) {
          alert(await response.text());
          return;
        }
        const updated = await response.json();
        const status = article.querySelector(".status");
        status.className = "status " + updated.reviewStatus;
        status.textContent = updated.reviewStatus;
        notice.classList.add("visible");
        window.setTimeout(() => notice.classList.remove("visible"), 1600);
      });
    </script>
  </body>
</html>`;
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${host}:${port}`);

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(request.method === "HEAD" ? undefined : renderPage());
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/api/editorial") {
      response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      response.end(request.method === "HEAD" ? undefined : JSON.stringify(loadEditorial(), null, 2));
      return;
    }

    const fragmentMatch = url.pathname.match(/^\/api\/fragments\/([^/]+)$/);
    if (request.method === "POST" && fragmentMatch) {
      const body = await readBody(request);
      const patch = JSON.parse(body);
      const updated = updateFragment(decodeURIComponent(fragmentMatch[1]), patch);
      response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      response.end(JSON.stringify(updated));
      return;
    }

    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  } catch (error) {
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : String(error));
  }
});

server.listen(port, host, () => {
  console.log(`Local editorial review server: http://${host}:${port}`);
});
