"use client";

/**
 * RouteOverviewRibbon — Section 4 Route Stop Sequence
 * Displays 2–4 main stops as a visual ribbon (CSS only, no map library).
 * Provides accessible ordered list with screen-reader narrative.
 * Guardrails: does NOT imply geographic distance or transport mode.
 */

import { motion } from "framer-motion";
import type { RouteRecommendation } from "@/types/route-planner";

interface RouteOverviewRibbonProps {
  result: RouteRecommendation;
  locale?: "id" | "en";
}

export function RouteOverviewRibbon({ result, locale = "id" }: RouteOverviewRibbonProps) {
  // Show max 4 stops; add "+n" indicator if more
  const MAX_VISIBLE = 4;
  const visibleStops = result.stops.slice(0, MAX_VISIBLE);
  const hiddenCount = result.stops.length - MAX_VISIBLE;

  // Build screen-reader narrative
  const stopNames = result.stops.map((s) => s.cityOrCluster);
  const srNarrative =
    locale === "en"
      ? `Route sequence: ${stopNames.join(", then ")}.`
      : `Urutan rute: ${stopNames.join(", lalu ")}.`;

  const labelDay = locale === "en" ? "Day" : "Hari";

  return (
    <div className="flex flex-col gap-3">
      <p className="font-inter text-[11px] font-bold tracking-[0.15em] uppercase text-[#9DAEC2]">
        {locale === "en" ? "Route sequence" : "Urutan rute"}
      </p>

      {/* Accessible ordered list — primary content for screen readers */}
      <ol className="sr-only" aria-label={locale === "en" ? "Route stops" : "Stop rute"}>
        {result.stops.map((stop, i) => (
          <li key={i}>
            {stop.cityOrCluster} —{" "}
            {stop.dayStart === stop.dayEnd
              ? `${labelDay} ${stop.dayStart}`
              : `${labelDay} ${stop.dayStart}–${stop.dayEnd}`}
          </li>
        ))}
      </ol>

      {/* Screen reader narrative */}
      <p className="sr-only">{srNarrative}</p>

      {/* Visual ribbon — aria-hidden, decorative */}
      <div className="flex items-center gap-0 w-full overflow-x-auto hide-scrollbar pb-2" aria-hidden="true">
        {visibleStops.map((stop, i) => (
          <div key={i} className="flex items-center shrink-0">
            {/* Stop node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className="flex flex-col items-center gap-2 px-2"
            >
              {/* Node circle */}
              <div className="relative flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-[#FFFDF8] border border-[#C9A84C] flex items-center justify-center shadow-[0_2px_8px_rgba(201,168,76,0.15)]">
                  <span className="font-inter text-[9px] font-bold text-[#C9A84C]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              {/* City label */}
              <span className="font-inter text-[11px] font-bold text-[#0D1B2A] text-center max-w-[80px] leading-tight">
                {stop.cityOrCluster}
              </span>
              {/* Day range */}
              <span className="font-inter text-[10px] text-[#9DAEC2] text-center">
                {stop.dayStart === stop.dayEnd
                  ? `${labelDay} ${stop.dayStart}`
                  : `${labelDay} ${stop.dayStart}–${stop.dayEnd}`}
              </span>
            </motion.div>

            {/* Connector line (not shown after last visible stop or if overflow) */}
            {i < visibleStops.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.08 + 0.15, duration: 0.4 }}
                className="h-[1px] w-8 sm:w-14 bg-[#E8E0CE] origin-left shrink-0 -mt-8"
              />
            )}

            {/* "+n more" indicator */}
            {i === visibleStops.length - 1 && hiddenCount > 0 && (
              <div className="flex items-center gap-1 ml-2 -mt-8">
                <div className="h-[1px] w-6 bg-[#E8E0CE]" />
                <span className="font-inter text-[10px] text-[#9DAEC2] font-semibold whitespace-nowrap">
                  +{hiddenCount} {locale === "en" ? "more" : "lagi"}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
