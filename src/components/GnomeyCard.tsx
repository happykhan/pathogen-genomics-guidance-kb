import type { ReactNode } from "react";

type GnomeyState = "collapsed" | "expanded" | "thinking" | "complete";

type Props = {
  state?: GnomeyState;
  compact?: boolean;
  eyebrow: string;
  title?: string;
  titleId?: string;
  children: ReactNode;
  action?: ReactNode;
};

const stateText: Record<GnomeyState, string> = {
  collapsed: "Gnomey helper collapsed",
  expanded: "Gnomey helper expanded",
  thinking: "Gnomey is tailoring the guide",
  complete: "Gnomey has applied the profile",
};

export function GnomeyCard({ state = "expanded", compact = false, eyebrow, title, titleId, children, action }: Props) {
  return (
    <div className={`gnomey-tile${compact ? " compact" : ""}`} data-state={state} aria-label={stateText[state]}>
      <img className="gnomey-image" src="/assets/gnomey.png" alt="" aria-hidden="true" />
      <div>
        <p className="eyebrow">{eyebrow}</p>
        {title ? (
          <h2 id={titleId} style={{ margin: "4px 0 8px", fontSize: "1.1rem" }}>
            {title}
          </h2>
        ) : null}
        <div className="gnomey-copy">{children}</div>
        {action}
      </div>
    </div>
  );
}
