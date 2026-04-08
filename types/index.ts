export interface Capability {
  title: string;
  summary: string;
  bullets: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface EvalCase {
  name: string;
  check: string;
  passSignal: string;
}
