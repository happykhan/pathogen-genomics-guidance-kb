"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { defaultProfile, type ImplementationStage, type InfrastructureContext } from "../types/profile";
import { profileToSearch } from "../lib/profile";

type Question = {
  id: string;
  label: string;
  options: string[];
  axis: string;
};

const questions: Question[] = [
  {
    id: "volume",
    label: "What sample volume and urgency do you need to support?",
    options: ["Occasional batches", "Regular batches", "Time-sensitive routine work", "High-throughput outbreak/service demand"],
    axis: "service demand",
  },
  {
    id: "workflow",
    label: "How are routine analyses run?",
    options: ["Manual scripts", "Shared scripts", "Versioned workflow", "Validated service"],
    axis: "workflow reproducibility",
  },
  {
    id: "compute",
    label: "Where does compute happen?",
    options: ["Personal machines", "One shared server", "Managed server/HPC/cloud", "Resilient production platform"],
    axis: "compute model",
  },
  {
    id: "staffing",
    label: "How resilient is staffing?",
    options: ["One named person", "Small informal team", "Documented roles", "Service team with cover"],
    axis: "staff and support",
  },
  {
    id: "provenance",
    label: "Can you reconstruct a reported result?",
    options: ["Not reliably", "Some manual notes", "Versions and inputs recorded", "Automated provenance and audit"],
    axis: "data management and provenance",
  },
  {
    id: "storage",
    label: "How are data protected?",
    options: ["Ad hoc folders", "Shared drive backup", "Defined backup/archive", "Tested recovery and retention rules"],
    axis: "storage and recovery",
  },
  {
    id: "access",
    label: "How is access controlled?",
    options: ["Shared accounts or informal access", "Named users", "Role-based access", "Regular access review and offboarding"],
    axis: "access control",
  },
  {
    id: "validation",
    label: "How are workflow changes validated?",
    options: ["No formal process", "Manual spot checks", "Documented validation checks", "Change control with regression evidence"],
    axis: "validation and change control",
  },
  {
    id: "reporting",
    label: "How do results reach public-health users?",
    options: ["Ad hoc files or email", "Standard report template", "Linked to LIMS or reporting workflow", "Integrated decision/reporting pathway"],
    axis: "reporting and decision use",
  },
  {
    id: "integration",
    label: "How connected are reports and metadata?",
    options: ["Files emailed around", "Spreadsheet handoff", "LIMS or database linkage", "Integrated reporting pathway"],
    axis: "metadata integration",
  },
];

const tierText = [
  {
    tier: 1,
    title: "Starting or ad hoc",
    goodFor: "Learning, early exploration, and small low-urgency analyses where results are reviewed cautiously.",
    risks: ["Single-person dependency", "Unclear reproducibility", "Data loss or unrecoverable results"],
    action: "Prioritise documentation, version control, backup, and reducing single-person dependency.",
    stage: "exploring",
    infrastructure: "laptop-local",
  },
  {
    tier: 2,
    title: "Emerging shared capability",
    goodFor: "Pilot work and limited routine analysis when a small team can maintain shared workflows.",
    risks: ["Informal support model", "Patchy provenance", "Unclear ownership of storage and access"],
    action: "Stabilise shared workflows, define responsibility, and separate active data from backup and archive.",
    stage: "pilot",
    infrastructure: "institutional-server",
  },
  {
    tier: 3,
    title: "Routine workflow capability",
    goodFor: "Repeatable routine analysis with defined workflow versions, storage categories, and reporting handoffs.",
    risks: ["Validation debt", "Manual metadata handoffs", "Access and change-control gaps"],
    action: "Focus on validation, provenance, access review, monitoring, and handoff into public-health reporting.",
    stage: "routine-service",
    infrastructure: "hpc",
  },
  {
    tier: 4,
    title: "Managed service",
    goodFor: "Sustained service delivery with documented responsibility, service support, and recovery processes.",
    risks: ["Operational cost growth", "Provider dependency", "Cross-team governance gaps"],
    action: "Strengthen service management, tested disaster recovery, change control, and cross-team governance.",
    stage: "upgrading",
    infrastructure: "hybrid",
  },
  {
    tier: 5,
    title: "National or production platform",
    goodFor: "National-scale or federated service delivery where genomics is part of routine public-health decision-making.",
    risks: ["Sustainability", "Equity of access", "Repository/governance complexity"],
    action: "Use the guidance to review sustainability, federation, repository policy, and long-term workforce planning.",
    stage: "national-scale",
    infrastructure: "hybrid",
  },
] satisfies Array<{
  tier: number;
  title: string;
  goodFor: string;
  risks: string[];
  action: string;
  stage: ImplementationStage;
  infrastructure: InfrastructureContext;
}>;

export function TierQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>(
    Object.fromEntries(questions.map((question) => [question.id, 0])),
  );

  const result = useMemo(() => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const average = total / questions.length;
    const tier = Math.min(5, Math.max(1, Math.round(average) + 1));
    const weakAxes = questions
      .filter((question) => answers[question.id] <= 1)
      .map((question) => question.axis)
      .slice(0, 4);
    return { ...tierText[tier - 1], weakAxes };
  }, [answers]);

  const guidanceHref = useMemo(() => {
    const nextProfile = {
      ...defaultProfile,
      stage: result.stage,
      infrastructure: result.infrastructure,
    };
    return `/?${profileToSearch(nextProfile)}`;
  }, [answers, result.infrastructure, result.stage]);

  return (
    <section>
      <div className="hero-workspace">
        <div>
          <p className="eyebrow">Capability quiz</p>
          <h1 className="workspace-title">Which bioinformatics infrastructure tier are you operating in?</h1>
          <p className="workspace-copy">
            This is a lightweight self-assessment inspired by the PHA4GE tiering material. It is not a certification or
            audit score. It helps identify the next practical risks to address.
          </p>
        </div>
      </div>

      <div className="quiz-grid">
        <div className="resource-grid">
          {questions.map((question) => (
            <article className="resource-card" key={question.id}>
              <h2>{question.label}</h2>
              <div className="choice-grid">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    className="choice"
                    type="button"
                    aria-pressed={answers[question.id] === index}
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: index }))}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="panel">
          <div className="panel-body">
            <p className="eyebrow">Current result</p>
            <p className="result-number">Tier {result.tier}</p>
            <h2>{result.title}</h2>
            <p><strong>Good for:</strong> {result.goodFor}</p>
            <p>{result.action}</p>
            {result.weakAxes.length ? (
              <div className="gap-box">
                <strong>Red flags</strong>
                <ul>
                  {result.weakAxes.map((axis) => (
                    <li key={axis}>{axis}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="technical-detail">
              <strong>Risks to manage</strong>
              <ul>
                {result.risks.map((risk) => (
                  <li key={risk}>{risk}</li>
                ))}
              </ul>
            </div>
            <div className="technical-detail">
              <strong>
                <CheckCircle2 size={16} aria-hidden="true" /> Use this next
              </strong>
              <p>
                Open the tailored guidance and select "Assess maturity" as a goal. The app will bring infrastructure,
                workflow, storage, workforce, and governance blocks forward.
              </p>
              <a className="button primary" href={guidanceHref}>
                Apply to guidance <ArrowRight size={16} aria-hidden="true" />
              </a>
              <div className="block-meta">
                <span className="badge source">pha4ge-infrastructure</span>
                <span className="badge source">phe-case-study</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
