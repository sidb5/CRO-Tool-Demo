import type { Capability, EvalCase, WorkflowStep } from '@/types';

export const capabilities: Capability[] = [
  {
    title: 'Product Framing',
    summary:
      'I build around the commercial workflow first: who is blocked, what decision has to happen, and how fast the system needs to move to be valuable.',
    bullets: [
      'Translate messy real-world inputs into constrained product flows.',
      'Decide what should be automated, reviewed, or left human-controlled.',
      'Cut broad product ideas into phased releases that can ship.',
    ],
  },
  {
    title: 'AI Task Design',
    summary:
      'I break LLM work into smaller units so outputs can be regenerated, inspected, scored, and corrected independently instead of relying on one giant prompt.',
    bullets: [
      'Separate extraction, drafting, critique, and rewrite steps.',
      'Constrain outputs to typed shapes when the next step needs structure.',
      'Design prompts so failure is visible and recoverable rather than silent.',
    ],
  },
  {
    title: 'Execution Quality',
    summary:
      'The goal is not just model output. It is a product that feels deliberate, stable, and usable under commercial pressure.',
    bullets: [
      'Build interfaces around the next action, not around raw data.',
      'Keep state transitions and edge cases understandable.',
      'Preserve enough architecture to explain the system without exposing the business.',
    ],
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: '01',
    title: 'Normalize the request',
    detail:
      'Treat input ingestion as its own stage. Pull messy source material into a typed summary before generation starts, so downstream prompt chains are not trying to parse and persuade at the same time.',
  },
  {
    step: '02',
    title: 'Split generation into bounded jobs',
    detail:
      'Each content block or decision gets its own task with its own retry behavior. That makes targeted regeneration possible and keeps one weak output from poisoning the entire result.',
  },
  {
    step: '03',
    title: 'Score outputs against operational checks',
    detail:
      'Run focused evals around structural correctness, missing information, forbidden behavior, and tone. The point is not academic benchmarking. It is reducing bad outputs before they reach a user.',
  },
  {
    step: '04',
    title: 'Keep humans in the money path',
    detail:
      'Anything that carries business risk, pricing risk, or irreversible client impact should stay inspectable and editable. Good AI product design is often about deciding what not to automate.',
  },
];

export const evalCases: EvalCase[] = [
  {
    name: 'Schema Conformance',
    check:
      'The model returns the exact output shape expected by the next system step, with no extra prose and no missing required fields.',
    passSignal:
      'Response parses cleanly and matches the typed contract without fallback cleanup.',
  },
  {
    name: 'Unsupported Assumptions',
    check:
      'The model does not invent facts, quantities, timelines, or claims that were not present in the input context.',
    passSignal:
      'Unclear details are surfaced as gaps or questions instead of being fabricated.',
  },
  {
    name: 'Section Isolation',
    check:
      'A failure or regeneration in one content block does not destroy the rest of the assembled output.',
    passSignal:
      'Each unit can be retried independently and stored separately.',
  },
  {
    name: 'Human-Controlled Fields',
    check:
      'Protected fields stay manual when automation would introduce commercial or compliance risk.',
    passSignal:
      'The UI preserves explicit human editing for high-risk sections.',
  },
];
