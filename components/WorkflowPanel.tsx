import type { WorkflowStep } from '@/types';

export function WorkflowPanel({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="workflow-panel">
      {steps.map((step) => (
        <div key={step.step} className="workflow-step">
          <span className="step-number">{step.step}</span>
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
          <p className="max-w-3xl text-base leading-7 text-[var(--muted)]">{step.detail}</p>
        </div>
      ))}
    </div>
  );
}
