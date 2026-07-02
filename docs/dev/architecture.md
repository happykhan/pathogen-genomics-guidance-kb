# Architecture: Interactive Guidance App

## Decision

Build the product as a static-exportable Next.js application, aligned with the QualiBact web stack.

## Rationale

The product is mostly guidance content, so pages should be fast, stable, searchable, and easy to deploy as static HTML. The interactive parts, including Gnomey, profile state, tailored guidance, quizzes, sharing links, and export controls, run as explicit React client components inside the Next App Router.

This also keeps the implementation close to QualiBact: Next static export, Tailwind/PostCSS, React, TypeScript, and GenomicX-style design tokens.

## Stack

- Next.js App Router for routing, layout, metadata, and static export.
- React client components for Gnomey, profile state, guidance filtering, resource finder, and quizzes.
- Tailwind CSS and PostCSS, matching the QualiBact setup.
- GenomicX/QualiBact-style `gx-*` design tokens for colour, radius, shadow, typography, and spacing decisions.
- Structured TypeScript data for guidance blocks and resources.
- Browser print CSS for first PDF/export path.
- GitHub Pages, Vercel, or Cloudflare Pages can host the static output.

## Content Model

Guidance content is stored as structured blocks with audience, stage, organism, topic, source, and detail-level metadata. The app renders a readable guidance document by ranking and filtering blocks against the active user profile.

The source cards and extracted notes remain in the repository as provenance. The web app should not hide provenance, but source details should be secondary to readable guidance.

## Initial Folder Structure

```text
src/
  app/          Next App Router pages and root layout
  components/   React islands and shared UI
  data/         Structured guidance and resource records
  styles/       Global and print CSS
  types/        Shared TypeScript types
```

## Follow-Up

- Add search indexing once the resource catalogue grows.
- Keep browser print/PDF generation on the dedicated print-friendly route unless print CSS proves insufficient.
- Move guidance blocks to MDX or content collections if the data files become hard to maintain.
- Track QualiBact framework upgrades so Next/Tailwind security and compatibility updates happen consistently across both repos.
