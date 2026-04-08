import type { EvalCase } from '@/types';

export function EvalTable({ rows }: { rows: EvalCase[] }) {
  return (
    <div className="eval-shell">
      <table>
        <thead>
          <tr>
            <th>Eval</th>
            <th>What It Checks</th>
            <th>Pass Signal</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="font-semibold text-[var(--ink)]">{row.name}</td>
              <td className="text-[var(--muted)]">{row.check}</td>
              <td className="text-[var(--muted)]">{row.passSignal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
