import { resources } from "../../data/resources";

export const metadata = {
  title: "About | Pathogen Genomics Guidance",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-workspace">
        <div>
          <p className="eyebrow">Editorial basis</p>
          <h1 className="workspace-title">A source-backed guide, not a generic advice generator.</h1>
          <p className="workspace-copy">
            The app is built from extracted source material and structured source cards. Guidance blocks expose their
            source basis and mark evidence gaps instead of silently filling them with unsourced advice.
          </p>
        </div>
        <aside className="panel">
          <div className="panel-body">
            <h2 style={{ marginTop: 0, fontSize: "1.1rem" }}>Current source catalogue</h2>
            <p>
              {resources.length} records, including extracted PHA4GE, PHE, and CDC/NEJM material plus candidate
              public-health agency sources.
            </p>
          </div>
        </aside>
      </section>

      <section className="panel">
        <div className="panel-body">
          <h2>What is implemented</h2>
          <p>
            The first app slice includes a profile-aware guidance document, the Gnomey wizard, shareable profile URLs,
            browser print export, a resource finder, and a bioinformatics tier quiz.
          </p>
          <h2>What still needs source work</h2>
          <p>
            Priority gaps remain around a formal metadata and identifier model, repository decision pathways, validation
            and change-control runbooks, costing models, and organism-specific guidance beyond the currently extracted
            sources.
          </p>
        </div>
      </section>
    </>
  );
}
