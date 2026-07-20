"use client";

/**
 * RouteResultMetadata — Section 4 Core Route Facts
 * Shows duration, coverage, pace, budget, and transport summary.
 * 2-column grid on tablet/desktop. No fabricated prices or schedules.
 */

import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { Calendar, MapPin, Gauge, Wallet, Train } from "lucide-react";
import { getRegionLabel, getPaceLabel } from "@/lib/routes/composePreferenceSummary";

interface RouteResultMetadataProps {
  result: RouteRecommendation;
  values: RoutePlannerFormValues;
  locale?: "id" | "en";
}

export function RouteResultMetadata({ result, values, locale = "id" }: RouteResultMetadataProps) {
  const provinceCount = result.provinceIds.length;
  const clusterCount = result.stops.length;

  const coverageLabel =
    locale === "en"
      ? `${clusterCount} cluster · ${provinceCount} province${provinceCount !== 1 ? "s" : ""}`
      : `${clusterCount} cluster · ${provinceCount} provinsi`;

  const regionLabel = getRegionLabel(result.regionId);
  const paceLabel = getPaceLabel(values.travelPace);

  // Transport summary: use preset data or safe generic label
  const transport =
    result.transportSummary.length > 0
      ? result.transportSummary[0]
      : locale === "en"
      ? "Predominantly land transport"
      : "Transportasi darat dominan";

  const items = [
    {
      icon: <Calendar className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Duration" : "Durasi",
      value: locale === "en" ? `${result.durationDays} days` : `${result.durationDays} hari`,
    },
    {
      icon: <MapPin className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Region" : "Wilayah",
      value: regionLabel,
    },
    {
      icon: <Gauge className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Pace" : "Ritme",
      value: paceLabel,
    },
    {
      icon: <Wallet className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Budget" : "Anggaran",
      value: result.budgetLabel,
    },
    {
      icon: <MapPin className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Coverage" : "Cakupan",
      value: coverageLabel,
    },
    {
      icon: <Train className="w-4 h-4" aria-hidden="true" />,
      label: locale === "en" ? "Transport" : "Kendaraan",
      value: transport,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="font-inter text-[11px] font-bold tracking-[0.15em] uppercase text-[#9DAEC2]">
        {locale === "en" ? "Route Profile" : "Profil Rute"}
      </p>

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2.5 font-inter text-[13px] leading-tight text-[#0D1B2A]">
            <span className="shrink-0 mt-0.5 text-[#C9A84C]">{item.icon}</span>
            <div>
              <span className="text-[#4A5568]">{item.label}:</span>{" "}
              <span className="font-semibold">{item.value}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
