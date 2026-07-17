"use client";

/**
 * RouteResultStatusBar — Section 4 Match Type + Source Bar
 * Shows how the result was resolved (dynamic/preset/fallback/restored).
 * Uses role="status" for screen reader announcements.
 */

import type { RouteMatchType } from "@/types/route-planner";
import { getMatchTypeLabel } from "@/lib/routes/routeResultHelpers";
import { Sparkles, BookOpen, AlertCircle, RefreshCw } from "lucide-react";

interface RouteResultStatusBarProps {
  matchType: RouteMatchType;
  isAdjusted: boolean;
  locale?: "id" | "en";
}

const MATCH_TYPE_ICONS: Record<RouteMatchType, React.ReactNode> = {
  dynamic: <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />,
  preset: <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />,
  fallback: <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />,
  restored: <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />,
};

const MATCH_TYPE_COLORS: Record<RouteMatchType, { dot: string; text: string; bg: string; border: string }> = {
  dynamic: {
    dot: "bg-[#2D5A27]",
    text: "text-[#2D5A27]",
    bg: "bg-[#F0F7EF]",
    border: "border-[#2D5A27]/20",
  },
  preset: {
    dot: "bg-[#C9A84C]",
    text: "text-[#A08A3A]",
    bg: "bg-[#FFFDF8]",
    border: "border-[#C9A84C]/30",
  },
  fallback: {
    dot: "bg-[#C09A3A]",
    text: "text-[#7A5E1A]",
    bg: "bg-[#FFF8EC]",
    border: "border-[#C09A3A]/30",
  },
  restored: {
    dot: "bg-[#2D6BE4]",
    text: "text-[#2D6BE4]",
    bg: "bg-[#EFF4FF]",
    border: "border-[#2D6BE4]/20",
  },
};

export function RouteResultStatusBar({
  matchType,
  isAdjusted,
  locale = "id",
}: RouteResultStatusBarProps) {
  const label = getMatchTypeLabel(matchType, locale);
  const colors = MATCH_TYPE_COLORS[matchType];
  const icon = MATCH_TYPE_ICONS[matchType];

  const adjustedSuffix =
    isAdjusted
      ? locale === "en"
        ? " · Adjusted"
        : " · Disesuaikan"
      : "";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="flex items-center gap-2 flex-wrap"
    >
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold tracking-wide uppercase font-inter border ${colors.bg} ${colors.border} ${colors.text}`}
      >
        {icon}
        {label}{adjustedSuffix}
      </span>
    </div>
  );
}
