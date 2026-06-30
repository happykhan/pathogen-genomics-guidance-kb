"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Question = {
  id: string;
  label: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: "workflow",
    label: "How are routine analyses run?",
    options: ["Manual scripts", "Shared scripts", "Versioned workflow", "Validated service"],
  },
  {
    id: "compute",
    label: "Where does compute happen?",
    options: ["Personal machines", "One shared server", "Managed server/HPC/cloud", "Resilient production platform"],
  },
  {
    id: "staffing",
    label: "How resilient is staffing?",
    options: ["One named person", "Small informal team", "Documented roles", "Service team with cover"],
  },
  {
    id: "provenance",
    label: "Can you reconstruct a reported result?",
    options: ["Not reliably", "Some manual notes", "Versions and inputs recorded", "Automated provenance and audit"],
  },
  {
    id: "storage",
    label: "How are data protected?",
    options: ["Ad hoc folders", "Shared drive backup", "Defined backup/archive", "Tested recovery and retention rules"],
  },
  {
    id: "integration",
    label: "How connected are reports and metadata?",
    options: ["Files emailed around", "Spreadsheet handoff", "LIMS or database linkage", "Integrated reporting pathway"],
  },
];

const tierText = [
  {
    tier: 1,
    title: "Starting or ad hoc",
    action: "Prioritise documentation, version control, backup, and reducing single-person dependency.",
  },
  {
    tier: 2,
    title: "Emerging shared capability",
    action: "Stabilise shared workflows, define responsibility, and separate active data from backup and archive.",
  },
  {
    tier: 3,
    title: "Routine workflow capability",
    action: "Focus on validation, provenance, access review, monitoring, and handoff into public-health reporting.",
  },
  {
    tier: 4,
    title: "Managed service",
    action: "Strengthen service management, tested disaster recovery, change control, and cross-team governance.",
  },
  {
    tier: 5,
    title: "National or production platform",
    action: "Use the guidance to review sustainability, federation, repository policy, and long-term workforce planning.",
  },
];

export function TierQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>(
    Object.fromEntries(questions.map((question) => [question.id, 0])),
  );

  const result = useMemo(() => {
    const total = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const average = total / questions.length;
    const tier = Math.min(5, Math.max(1, Math.round(average) + 1));
    return tierText[tier - 1];
  }, [answers]);

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
            <p>{result.action}</p>
            <div className="technical-detail">
              <strong>
                <CheckCircle2 size={16} aria-hidden="true" /> Use this next
              </strong>
              <p>
                Open the tailored guidance and select "Assess maturity" as a goal. The app will bring infrastructure,
                workflow, storage, workforce, and governance blocks forward.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
