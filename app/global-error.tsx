'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl rounded-[28px] border border-[var(--line)] bg-[var(--panel)] px-8 py-10 text-center">
            <p className="eyebrow">Unexpected Error</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">
              The showcase hit a rendering issue.
            </h1>
            <p className="mt-4 font-sans text-base leading-7 text-[var(--muted)]">
              This public repo intentionally runs without the original production integrations, so
              the safest recovery is a local reset.
            </p>
            <button className="primary-cta mt-6" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
