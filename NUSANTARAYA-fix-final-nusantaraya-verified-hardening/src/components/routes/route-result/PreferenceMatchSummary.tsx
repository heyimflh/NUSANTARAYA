"use client";

/**
 * PreferenceMatchSummary — Section 4
 * Shows how user preferences map to the recommendation result.
 * Each chip has exact/compatible/adjusted/not-applicable state.
 * Adjusted state uses icon + text (not color alone) per WCAG AA.
 */

import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import type { PreferenceMatchState } from "@/types/route-planner";
import { buildPreferenceMatchChips } from "@/lib/routes/routeResultHelpers";
import { Check, Minus, AlertTriangle, CheckCircle2 } from "lucide-react";

interface PreferenceMatchSummaryProps {
  result: RouteRecommendation;
  values: RoutePlannerFormValues;
  locale?: "id" | "en";
}

const STATE_CONFIG: Record<
  PreferenceMatchState,
  {
    icon: React.ReactNode;
    iconClass: string;
    textClass: string;
    srLabel: string;
  }
> = {
  exact: {
    icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />,
    iconClass: "text-[#2D5A27]",
    textClass: "text-[#2D5A27]",
    srLabel: "(cocok)",
  },
  compatible: {
    icon: <Check className="w-4 h-4" aria-hidden="true" />,
    iconClass: "text-[#C9A84C]",
    textClass: "text-[#0D1B2A]",
    srLabel: "(sesuai)",
  },
  adjusted: {
    icon: <AlertTriangle className="w-4 h-4" aria-hidden="true" />,
    iconClass: "text-[#C09A3A]",
    textClass: "text-[#7A5E1A]",
    srLabel: "(disesuaikan)",
  },
  "not-applicable": {
    icon: <Minus className="w-4 h-4" aria-hidden="true" />,
    iconClass: "text-[#9DAEC2]",
    textClass: "text-[#9DAEC2]",
    srLabel: "(tidak diterapkan)",
  },
};

export function PreferenceMatchSummary({
  result,
  values,
  locale = "id",
}: PreferenceMatchSummaryProps) {
  const chips = buildPreferenceMatchChips(values, result, locale);
  const label = locale === "en" ? "Preference match" : "Kecocokan Preferensi";

  // Show adjustment note if any chip is adjusted
  const adjustedChips = chips.filter((c) => c.state === "adjusted");

  return (
    <div className="flex flex-col gap-4">
      <p className="font-inter text-[11px] font-bold tracking-[0.15em] uppercase text-[#9DAEC2]">
        {label}
      </p>

      {/* Clean list */}
      <ul
        className="flex flex-col gap-3"
        aria-label={label}
      >
        {chips.map((chip) => {
          const config = STATE_CONFIG[chip.state];
          return (
            <li
              key={chip.id}
              className={`flex items-start gap-2.5 font-inter text-[13px] leading-tight ${config.textClass}`}
            >
              <span className={`shrink-0 mt-0.5 ${config.iconClass}`}>{config.icon}</span>
              <div>
                <span className="text-[#4A5568]">{chip.label}:</span>{" "}
                <span className="font-semibold">{chip.value}</span>
                {/* Screen-reader state label */}
                <span className="sr-only">{config.srLabel}</span>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Adjustment note — only shown when a preference was adjusted */}
      {adjustedChips.length > 0 && (
        <div className="flex items-start gap-2 p-3 mt-1 rounded-xl bg-[#FFF8EC] border border-[#C09A3A]/20">
          <AlertTriangle
            className="w-4 h-4 text-[#C09A3A] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-0.5">
            {adjustedChips.map((chip) =>
              chip.note ? (
                <p key={chip.id} className="font-inter text-[13px] text-[#7A5E1A] leading-relaxed">
                  {chip.note}
                </p>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}
