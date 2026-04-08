export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-xl rounded-[28px] border border-[var(--line)] bg-[var(--panel)] px-8 py-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">Page not found.</h1>
        <p className="mt-4 font-sans text-base leading-7 text-[var(--muted)]">
          The sanitized showcase only exposes a small public surface. Head back to the case study.
        </p>
        <a className="primary-cta mt-6" href="/">
          Return home
        </a>
      </div>
    </main>
  );
}
