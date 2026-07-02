export const metadata = {
  title: "API | Pathogen Genomics Guidance",
};

const endpoints = [
  {
    path: "/api/guidance",
    title: "Guidance text",
    description:
      "Structured whitepaper content: section titles, summaries, paragraphs, subsections, source-backed tables, technical detail, audience tags, organism tags, topics, source IDs, sourceStatus, and unresolved evidence notes.",
  },
  {
    path: "/api/resources",
    title: "Resource catalogue",
    description:
      "Resource finder records: title, agency, year, DOI, source URL, PDF URL where available, source-card path, executive summary, usefulness note, audiences, organisms, stages, topics, and review status.",
  },
  {
    path: "/api/sources",
    title: "Source registry",
    description: "Compact source registry used by the whitepaper citation markers.",
  },
];

export default function ApiDocsPage() {
  return (
    <div className="stack-page">
      <section className="page-heading">
        <p className="eyebrow">Programmatic access</p>
        <h1>Fetch the guidance text as structured data.</h1>
        <p>
          These read-only endpoints expose the same source-backed text and resource catalogue used by the app, so scripts and
          AI agents can retrieve the material without scraping the page.
        </p>
      </section>

      <section className="panel">
        <div className="panel-body">
          <div className="gap-list">
            {endpoints.map((endpoint) => (
              <article className="resource-card" key={endpoint.path}>
                <p className="eyebrow">{endpoint.path}</p>
                <h2>{endpoint.title}</h2>
                <p>{endpoint.description}</p>
                <pre className="code-sample">
                  <code>{`curl ${endpoint.path}`}</code>
                </pre>
                <p className="resource-actions">
                  <a href={endpoint.path}>Open JSON</a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-body">
          <h2 style={{ marginTop: 0 }}>Interpretation notes</h2>
          <p>
            In guidance blocks, <code>sourceStatus: "reviewed"</code> means the prose is ready for beta use,{" "}
            <code>"partial"</code> means it is source-backed but still incomplete, and <code>"gap"</code> marks a placeholder or
            unresolved evidence work item.
          </p>
          <p>
            In the resource catalogue, <code>sourceStatus: "extracted"</code> maps to <strong>Reviewed in guide</strong>.{" "}
            <code>"candidate"</code> maps to <strong>Needs extraction</strong>, meaning the source is relevant but should be
            extracted before making strong claims from it.
          </p>
          <p>
            PDF links are included only where a direct PDF URL has been identified. Publisher pages, PubMed pages, and some PMC
            pages may still provide downloadable files through their own interfaces. Public API responses must not expose local
            local user-home source-material paths.
          </p>
        </div>
      </section>
    </div>
  );
}
