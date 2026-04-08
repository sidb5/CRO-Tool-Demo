import { CapabilityCard } from '@/components/CapabilityCard';
import { EvalTable } from '@/components/EvalTable';
import { WorkflowPanel } from '@/components/WorkflowPanel';
import { capabilities, evalCases, workflowSteps } from '@/lib/showcase-data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="hero-shell">
        <div className="hero-grid">
          <div className="space-y-8">
            <p className="eyebrow">Sanitized Product Showcase</p>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Shipping AI products without open-sourcing the business.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
                This repository is a public-safe cut of a real commercial web app. The private
                domain workflows, prompts, schemas, and monetizable logic were removed. What
                remains is the product thinking, UX direction, and a sanitized view of the AI
                orchestration and evaluation patterns behind the build.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="primary-cta" href="#capabilities">
                View capabilities
              </a>
              <a className="secondary-cta" href="#workflow">
                See AI workflow
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span>Public Repo Scope</span>
              <span>v1.0</span>
            </div>
            <div className="space-y-4 text-sm leading-6 text-[var(--muted)]">
              <p>
                Kept: UI direction, product framing, TypeScript structure, workflow decomposition,
                and eval design.
              </p>
              <p>
                Removed: customer-specific logic, domain prompts, live integrations, schema/IP,
                billing, exports, and internal operating docs.
              </p>
              <div className="status-strip">
                <div>
                  <span className="status-label">Frontend</span>
                  <strong>Preserved</strong>
                </div>
                <div>
                  <span className="status-label">AI Orchestration</span>
                  <strong>Sanitized</strong>
                </div>
                <div>
                  <span className="status-label">Commercial Logic</span>
                  <strong>Removed</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="content-shell">
        <div className="section-heading">
          <p className="section-kicker">What This Showcases</p>
          <h2>Product execution, not just code snippets.</h2>
        </div>
        <div className="card-grid">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>
      </section>

      <section id="workflow" className="content-shell">
        <div className="section-heading">
          <p className="section-kicker">AI Workflow</p>
          <h2>How I structure tasking and generation loops.</h2>
        </div>
        <WorkflowPanel steps={workflowSteps} />
      </section>

      <section className="content-shell pb-24">
        <div className="section-heading">
          <p className="section-kicker">Evaluation Design</p>
          <h2>Sanitized examples of the checks used to keep LLM output usable.</h2>
        </div>
        <EvalTable rows={evalCases} />
      </section>
    </main>
  );
}
