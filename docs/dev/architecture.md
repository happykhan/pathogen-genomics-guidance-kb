# Architecture: Interactive Guidance App

## Decision

Build the product as a static-first Astro application with React islands for profile-aware interactivity.

## Rationale

The product is mostly guidance content, so pages should be fast, stable, searchable, and easy to deploy as static HTML. The interactive parts, including Gnomey, profile state, tailored guidance, quizzes, sharing links, and export controls, can run as client-side React components.

## Stack

- Astro for page routing, layout, and static build.
- React components for Gnomey, profile state, guidance filtering, resource finder, and quizzes.
- Structured TypeScript data for guidance blocks and resources.
- Browser print CSS for first PDF/export path.
- GitHub Pages, Vercel, or Cloudflare Pages can host the static output.

## Content Model

Guidance content is stored as structured blocks with audience, stage, organism, topic, source, and detail-level metadata. The app renders a readable guidance document by ranking and filtering blocks against the active user profile.

The source cards and extracted notes remain in the repository as provenance. The web app should not hide provenance, but source details should be secondary to readable guidance.

## Initial Folder Structure

```text
src/
  components/   React islands and shared UI
  data/         Structured guidance and resource records
  layouts/      Astro layouts
  pages/        Static routes
  styles/       Global and print CSS
  types/        Shared TypeScript types
```

## Follow-Up

- Add search indexing once the resource catalogue grows.
- Replace browser print export only if print CSS proves insufficient.
- Move guidance blocks to MDX or content collections if the data files become hard to maintain.
