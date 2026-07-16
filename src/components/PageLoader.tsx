export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-[18px] py-24 sm:px-8" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading</span>
      <span className="block h-8 w-8 animate-loader-spin rotate-45 rounded-[6px] bg-pink" />
      <span className="font-heading text-sm font-extrabold tracking-[0.22em] text-ink">KOHSAR</span>
    </div>
  );
}
