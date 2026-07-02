import { ArrowRight, ExternalLink } from "lucide-react";
import { TierQuiz } from "../../components/TierQuiz";

export const metadata = {
  title: "Interactive Tools | Pathogen Genomics Guidance",
};

const tools = [
  {
    title: "Bioinformatics infrastructure tier quiz",
    type: "Self-assessment",
    status: "Built into this guide",
    description:
      "A quick maturity-style self-assessment for workflow reproducibility, compute, staffing, provenance, storage, access control, validation, reporting, and metadata integration.",
    href: "#bioinformatics-tier-quiz",
    action: "Start quiz",
    internal: true,
  },
  {
    title: "Genomics Costing Tool",
    type: "Cost planning",
    status: "External tool",
    description:
      "An 8-step costing wizard for genomic surveillance laboratories covering instruments, consumables, staffing, infrastructure, and related implementation costs.",
    href: "https://genomicscost.vercel.app/",
    action: "Open costing tool",
    internal: false,
  },
  {
    title: "WGS Econ Benefit",
    type: "Economic benefit",
    status: "External tool",
    description:
      "A foodborne-pathogen WGS economics tool that estimates annual benefits, avoided illnesses, avoided costs, and benefit-cost ratios from user-entered sequencing and cost data.",
    href: "https://pub-connect.foodsafetyrisk.org/wgs-economics/",
    action: "Open economics tool",
    internal: false,
  },
];

export default function QuizzesPage() {
  return (
    <div className="stack-page">
      <section className="page-heading">
        <p className="eyebrow">Interactive tools</p>
        <h1>Quizzes, calculators, and decision-support tools.</h1>
        <p>
          Use these tools alongside the guidance. Some are built into this site; others are external tools that help with
          costing or economic-benefit estimates.
        </p>
      </section>

      <section className="tool-card-grid" aria-label="Available interactive tools">
        {tools.map((tool) => (
          <article className="resource-card tool-card" key={tool.title}>
            <div className="resource-card-head">
              <div className="resource-meta-row">
                <span className="badge match">{tool.type}</span>
                <span className="badge source">{tool.status}</span>
              </div>
              <h2>{tool.title}</h2>
            </div>
            <p>{tool.description}</p>
            <div className="resource-actions">
              <a className={tool.internal ? "button primary" : "button"} href={tool.href} target={tool.internal ? undefined : "_blank"} rel={tool.internal ? undefined : "noreferrer"}>
                {tool.action}
                {tool.internal ? <ArrowRight size={16} aria-hidden="true" /> : <ExternalLink size={16} aria-hidden="true" />}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="tool-section">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Built-in quiz</p>
            <h2>Bioinformatics infrastructure tier quiz</h2>
            <p>
              This is a lightweight self-assessment inspired by the PHA4GE tiering material. It is not a certification or
              audit score. It helps identify practical risks to address next.
            </p>
          </div>
        </div>
        <TierQuiz showIntro={false} />
      </section>
    </div>
  );
}
