"use client";

/**
 * RouteResultSkeleton — Section 4 Loading State
 * Stable skeleton that preserves dossier dimensions to prevent layout shift.
 * Announces loading status via aria-live.
 */

export function RouteResultSkeleton({ isPreset = false }: { isPreset?: boolean }) {
  const loadingText = isPreset
    ? "Menyiapkan detail rute terkurasi…"
    : "Menyusun rute terbaik dari preferensimu…";

  return (
    <section
      id="route-recommendation-result"
      aria-labelledby="route-result-title"
      className="w-full scroll-mt-32"
    >
      {/* Live region announcement */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        role="status"
      >
        {loadingText}
      </div>

      <div
        className="w-full rounded-[28px] md:rounded-[36px] border border-[#E8E0CE] bg-[#FFFDF8] overflow-hidden shadow-[0_4px_24px_rgba(13,27,42,0.06)] animate-pulse"
        aria-hidden="true"
      >
        {/* Status bar skeleton */}
        <div className="px-6 py-4 border-b border-[#E8E0CE] flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#E8E0CE]" />
          <div className="h-4 w-40 rounded-full bg-[#E8E0CE]" />
        </div>

        {/* Main content skeleton: split layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Left — visual */}
          <div className="lg:w-5/12 min-h-[280px] lg:min-h-[420px] bg-[#E8E0CE] relative">
            <div className="absolute bottom-6 left-6 flex flex-col gap-3">
              <div className="h-3 w-20 rounded-full bg-[#D4CAB8]" />
              <div className="h-5 w-36 rounded-full bg-[#D4CAB8]" />
            </div>
          </div>

          {/* Right — content */}
          <div className="lg:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col gap-6">
            {/* Eyebrow */}
            <div className="h-3 w-32 rounded-full bg-[#E8E0CE]" />
            {/* Title */}
            <div className="flex flex-col gap-2">
              <div className="h-7 w-3/4 rounded-xl bg-[#E8E0CE]" />
              <div className="h-7 w-1/2 rounded-xl bg-[#E8E0CE]" />
            </div>
            {/* Promise */}
            <div className="flex flex-col gap-1.5">
              <div className="h-4 w-full rounded-full bg-[#F0E9D8]" />
              <div className="h-4 w-5/6 rounded-full bg-[#F0E9D8]" />
              <div className="h-4 w-4/6 rounded-full bg-[#F0E9D8]" />
            </div>
            {/* Chips */}
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-7 w-20 rounded-full bg-[#E8E0CE]" />
              ))}
            </div>
            {/* Metadata */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="h-3 w-14 rounded-full bg-[#E8E0CE]" />
                  <div className="h-4 w-20 rounded-full bg-[#F0E9D8]" />
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <div className="h-12 w-full sm:w-56 rounded-full bg-[#E8E0CE]" />
              <div className="h-12 w-full sm:w-36 rounded-full bg-[#F0E9D8]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
