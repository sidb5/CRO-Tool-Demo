# Case Study

## Project

Sanitized AI product showcase derived from a real commercial web application.

## The problem

The original product solved a high-friction commercial workflow where users had to respond to messy incoming requests quickly, but with enough precision that bad output would create direct business risk.

This created a difficult engineering constraint:

- inputs were unstructured
- outputs needed to feel professional and usable
- some parts could be AI-assisted
- some parts had to remain under explicit human control
- the whole workflow needed to be fast enough to matter commercially

## My role

This project reflects end-to-end product engineering work:

- product framing
- system design
- frontend UX and workflow design
- AI orchestration
- evaluation design
- persistence model thinking

## Core design choices

### 1. Treat AI as a pipeline, not a button

The system was designed around stages:

1. intake
2. normalization
3. bounded generation
4. validation
5. human review
6. delivery

That choice made the product more reliable and made failures easier to isolate.

### 2. Separate normalization from generation

One of the biggest practical mistakes in AI products is asking the model to understand messy input and generate polished output in the same step.

I split those responsibilities. First produce a normalized structured object. Then use that structure to drive generation.

Benefits:

- better prompt stability
- easier testing
- better visibility into missing information
- safer downstream automation

### 3. Store outputs in smaller units

Instead of storing one giant generated blob, the architecture was designed around independently stored content units and versions.

Benefits:

- targeted regeneration
- partial saves
- easier auditing
- future reuse paths

### 4. Keep humans in the high-risk path

Not everything should be AI-generated. Where the commercial or compliance risk was high, the product deliberately left editing and control with the user.

That was not a limitation. It was a product decision.

## Technical challenges

### Unstructured input quality

Incoming source material could be incomplete, inconsistent, or badly formatted. The system needed a stable intermediate representation before generation could be trusted.

### Recoverability

If one generated unit failed, users still needed a usable draft. The architecture could not treat generation as all-or-nothing.

### Product trust

Users do not care whether the model is impressive. They care whether the system is dependable and whether they can correct it quickly when it gets something wrong.

## Evaluation approach

The evaluation strategy focused on operational failure modes rather than benchmark vanity metrics.

Primary checks included:

- schema conformance
- unsupported assumptions
- missing-critical-input detection
- recoverability of partial failures
- consistency across independently generated sections

## Why the public repo is sanitized

The original app is a real commercial product. Publishing the exact prompts, schema, workflow logic, and monetizable backend would weaken the business.

So this repository is designed to show the engineering quality without revealing the moat.

That means the interviewer can still inspect:

- how the system was decomposed
- how the UX was framed
- how AI task boundaries were defined
- how evals were used pragmatically

## What I would highlight in an interview

- I do not bolt LLMs onto products casually; I design around failure modes.
- I bias toward architectures that preserve recoverability and iteration speed.
- I think about user trust and business risk at the same time as implementation.
- I know when to automate and when not to.

## Repo guide

- [README.md](./README.md): public-facing overview
- [ARCHITECTURE.md](./ARCHITECTURE.md): sanitized system design and diagram
- [app/page.tsx](./app/page.tsx): portfolio presentation layer
- [lib/showcase-data.ts](./lib/showcase-data.ts): sanitized workflow/eval content model
