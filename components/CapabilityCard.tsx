import type { Capability } from '@/types';

export function CapabilityCard({ capability }: { capability: Capability }) {
  return (
    <article className="capability-card">
      <p className="eyebrow">{capability.title}</p>
      <p className="mt-4 font-sans text-base leading-7 text-[var(--muted)]">
        {capability.summary}
      </p>
      <ul className="mt-6 space-y-3 font-sans text-sm leading-6 text-[var(--ink)]">
        {capability.bullets.map((bullet) => (
          <li key={bullet} className="border-t border-[var(--line)] pt-3">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
