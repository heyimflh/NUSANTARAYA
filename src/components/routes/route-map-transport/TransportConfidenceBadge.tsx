"use client";

/**
 * NUSANTARAYA — Transport Confidence Badge
 * Section 6: Route Map + Transport Summary
 *
 * Visual badge for transport confidence level.
 * - verified: green, explicit source
 * - estimated: amber, clearly labeled as estimation
 * - Unavailable: gray, no facts claimed
 *
 * IMPORTANT: Status never communicated by color alone (WCAG 1.4.1).
 */

import React from "react";
import { CheckCircle2, Clock, HelpCircle, Info } from "lucide-react";
import { clsx } from "clsx";
import type { TransportConfidence } from "@/types/route-map";

interface TransportConfidenceBadgeProps {
  confidence: TransportConfidence;
  locale?: "id" | "en";
  size?: "sm" | "md";
}

const BADGE_CONFIG = {
  verified: {
    id: "Tervalidasi",
    en: "Verified",
    icon: CheckCircle2,
    className: "bg-[#2D5A27]/10 text-[#2D5A27] border-[#2D5A27]/20",
    iconClass: "text-[#2D5A27]",
  },
  estimated: {
    id: "Estimasi",
    en: "Estimated",
    icon: Clock,
    className: "bg-[#C9A84C]/10 text-[#8B6B1A] border-[#C9A84C]/25",
    iconClass: "text-[#C9A84C]",
  },
  editorial: {
    id: "Kurasi Internal",
    en: "Editorial",
    icon: Info,
    className: "bg-[#F8F4EA] text-[#5C6470] border-[#E8E0CE]",
    iconClass: "text-[#5C6470]",
  },
  unavailable: {
    id: "Perlu dicek",
    en: "Unavailable",
    icon: HelpCircle,
    className: "bg-[#8A94A6]/10 text-[#5C6470] border-[#8A94A6]/20",
    iconClass: "text-[#8A94A6]",
  },
} as const;

export function TransportConfidenceBadge({
  confidence,
  locale = "id",
  size = "sm",
}: TransportConfidenceBadgeProps) {
  const config = BADGE_CONFIG[confidence];
  const Icon = config.icon;
  const label = locale === "en" ? config.en : config.id;

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border font-bold uppercase tracking-[0.08em]",
        config.className,
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
      )}
      role="status"
      aria-label={label}
    >
      <Icon
        className={clsx(config.iconClass, size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3")}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}


