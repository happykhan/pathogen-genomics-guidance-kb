# Guidance App Design System

## Direction

The interface should feel like a calm public-health working document with a lightweight helper, not a marketing site. The document body carries the authority; Gnomey and controls stay outside the whitepaper flow.

## Tokens

The CSS tokens live in `src/styles/global.css` and follow the QualiBact/GenomicX-style `--gx-*` naming convention for colour, radius, shadow, typography, spacing, and layout width.

Core conventions:

- neutral document background with white content surface;
- one restrained teal accent for active controls, citations, and source-backed labels;
- 8px or smaller radii for routine controls and cards;
- high-contrast dark text on light surfaces;
- no gradient/orb/slideware decoration;
- browser print CSS as the beta PDF path.

## Components

- Guidance document: seamless whitepaper rhythm, contents, inline citations, numbered references, and source-status notes.
- Gnomey card: helper panel with `collapsed`, `expanded`, `thinking`, and `complete` states.
- Source cards: resource finder records with reader-friendly status labels, tags, public links, and PDF links where available.
- Gap notes: explicit missing-evidence blocks, never hidden as completed guidance.
- Profile summary: role, service stage, organism focus, and bioinformatics support model.

## Accessibility Checks

For beta QA:

- keyboard-accessible buttons, links, checkboxes, and modal close control;
- wizard modal uses `role="dialog"` and `aria-modal`;
- decorative mascot image is hidden from assistive technology because the adjacent text carries the meaning;
- skip link is present in the app layout;
- reduced-motion preference is respected in CSS;
- desktop, mobile, and print screenshots are captured before release.
