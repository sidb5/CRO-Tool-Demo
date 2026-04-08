# Sanitized AI Product Showcase

This repository is a public-safe cut of a real commercial AI product.

It is intentionally not the full application. The original product includes private workflows, domain-specific prompts, commercial logic, internal operating documents, and other product IP that should not be published in a public repository.

## What this repo keeps

- A polished Next.js frontend shell
- Product framing and UX direction
- Sanitized examples of AI workflow decomposition
- Sanitized examples of evaluation design
- A sanitized architecture overview and API design notes
- TypeScript structure suitable for a public portfolio repo

## What was removed

- Proprietary prompts and prompt chains
- Commercial business logic
- Live API routes and backend integrations
- Database schema and migrations
- Billing, export, referral, and sharing flows
- Internal planning docs and local development artifacts
- Customer-like sample material and private environment files

## Why this exists

The goal is to showcase how I build products with LLMs without handing over the monetizable core of the underlying business. This version demonstrates:

- product thinking
- frontend execution
- architecture and system decomposition
- API and workflow boundary design
- workflow decomposition for LLM tasks
- eval design for structured generation systems

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the sanitized system design, API boundaries, storage model, and LLM evaluation approach behind the original product.

## Notes

- This repository is intentionally static and sanitized.
- The original product used live integrations and private prompts that are not included here.
- If you want the repo name and copy updated for a specific portfolio angle, that can be done as a follow-up pass.
