"use client";

/**
 * RouteResultHeader — Section 4 Eyebrow + Title + Promise
 * The h2 uses id="route-result-title" to fulfill aria-labelledby.
 * Title is limited to 2–3 lines. Promise is limited to ~4 lines.
 */

import type { RouteRecommendation } from "@/types/route-planner";

interface RouteResultHeaderProps {
  result: RouteRecommendation;
  locale?: "id" | "en";
}

export function RouteResultHeader({ result, locale = "id" }: RouteResultHeaderProps) {
  const eyebrow =
    locale === "en" ? "Your Recommended Journey" : "Rekomendasi Perjalananmu";

  return (
    <div className="flex flex-col gap-3">
      {/* Eyebrow */}
      <p className="font-inter text-[11px] font-bold tracking-[0.18em] uppercase text-[#C9A84C]">
        {eyebrow}
      </p>

      {/* Title — serves as section heading via aria-labelledby */}
      <h2
        id="route-result-title"
        tabIndex={-1}
        className="font-playfair text-[32px] md:text-[40px] font-bold text-[#0D1B2A] leading-[1.1] tracking-tight outline-none focus-visible:outline-none"
      >
        {result.title}
      </h2>

      {/* Promise / Tagline (Lead paragraph) */}
      <p className="font-inter text-[16px] md:text-[17px] text-[#2D3748] leading-relaxed mt-1">
        {result.summary}
      </p>
    </div>
  );
}
