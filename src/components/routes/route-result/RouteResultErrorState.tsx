"use client";

/**
 * RouteResultErrorState — Section 4 Recoverable Error
 * Shows when result loading fails. Always provides actionable recovery paths.
 * No dead ends: always has "Coba Lagi" + "Kembali ke Preferensi".
 */

import { AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";

interface RouteResultErrorStateProps {
  onRetry: () => void;
  onEdit: () => void;
  locale?: "id" | "en";
}

export function RouteResultErrorState({
  onRetry,
  onEdit,
  locale = "id",
}: RouteResultErrorStateProps) {
  const t = {
    title:
      locale === "en"
        ? "Route could not be loaded"
        : "Rute belum dapat dimuat",
    body:
      locale === "en"
        ? "A curated summary is still available. You can try again or adjust your preferences."
        : "Ringkasan terkurasi tetap tersedia, dan kamu dapat mencoba lagi atau mengubah preferensi.",
    retry: locale === "en" ? "Try Again" : "Coba Lagi",
    edit: locale === "en" ? "Adjust Preferences" : "Ubah Preferensi",
  };

  return (
    <section
      id="route-recommendation-result"
      aria-labelledby="route-result-error-heading"
      className="w-full scroll-mt-32"
    >
      <div
        className="w-full rounded-[28px] border border-[#E8E0CE] bg-[#FFFDF8] p-8 md:p-12 flex flex-col items-center text-center gap-6 shadow-[0_4px_24px_rgba(13,27,42,0.06)]"
        role="alert"
      >
        <div className="w-14 h-14 rounded-full bg-[#FDF3F3] border border-[#8B2020]/20 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-[#8B2020]" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-2 max-w-lg">
          <h2
            id="route-result-error-heading"
            className="font-playfair text-[22px] md:text-[26px] font-bold text-[#0D1B2A]"
          >
            {t.title}
          </h2>
          <p className="font-inter text-[15px] text-[#4A5568] leading-relaxed">
            {t.body}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <button
            onClick={onRetry}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-inter text-[14px] font-bold bg-[#C9A84C] text-[#0D1B2A] hover:bg-[#E8D48B] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            {t.retry}
          </button>
          <button
            onClick={onEdit}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-inter text-[14px] font-bold border border-[#E8E0CE] text-[#0D1B2A] hover:bg-[#F8F4EA] transition-colors focus-visible:outline-2 focus-visible:outline-[#C9A84C] focus-visible:outline-offset-2 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t.edit}
          </button>
        </div>
      </div>
    </section>
  );
}
