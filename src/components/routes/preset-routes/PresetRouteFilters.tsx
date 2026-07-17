import React from "react";
import { type PresetRouteFilters as FilterState } from "@/lib/routes/presetRouteHelpers";
import { ROUTE_PLANNER_REGION_IDS, ROUTE_DURATIONS, ROUTE_INTERESTS, type RoutePlannerRegionId, type RouteInterest, type RouteDuration } from "@/types/route-planner";

interface PresetRouteFiltersProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  resultCount: number;
}

const COLLECTIONS = [
  { value: "", label: "Semua" },
  { value: "first-journey", label: "Untuk Pertama Kali" },
  { value: "heritage", label: "Heritage" },
  { value: "nature", label: "Alam" },
  { value: "culinary", label: "Kuliner" },
  { value: "slow-travel", label: "Slow Travel" },
];

function formatRegionId(id: string) {
  if (id === "indonesia") return "Seluruh Indonesia";
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function PresetRouteFilters({ filters, onChange, resultCount }: PresetRouteFiltersProps) {
  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const isResetVisible =
    filters.collection || filters.regionId || filters.durationDays || filters.interest;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 mb-12 w-full max-w-5xl mx-auto px-4">
      {/* Live Region for Screen Readers */}
      <div aria-live="polite" className="sr-only">
        {resultCount === 0
          ? "Belum ada preset yang cocok dengan semua filter ini."
          : `Menampilkan ${resultCount} rute terkurasi.`}
      </div>

      {/* Main Collection Filter (Chips) */}
      <fieldset className="flex flex-wrap justify-center gap-2">
        <legend className="sr-only">Filter berdasarkan koleksi</legend>
        {COLLECTIONS.map((c) => {
          const isActive = (filters.collection || "") === c.value;
          return (
            <button
              key={c.value}
              onClick={() => updateFilter("collection", c.value || null)}
              aria-pressed={isActive}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors border ${
                isActive
                  ? "bg-[#2A241F] text-white border-[#2A241F] shadow-md"
                  : "bg-transparent text-[#2A241F] border-[#E8E0CE] hover:bg-[#F4EFE6]"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </fieldset>

      {/* Secondary Filters */}
      <div className="flex flex-wrap justify-center gap-3 w-full">
        <fieldset>
          <legend className="sr-only">Filter berdasarkan wilayah</legend>
          <select
            value={filters.regionId || ""}
            onChange={(e) => updateFilter("regionId", (e.target.value as RoutePlannerRegionId) || null)}
            className="px-4 py-2 text-sm bg-transparent text-[#2A241F] border border-[#E8E0CE] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C89A3D] appearance-none cursor-pointer"
          >
            <option value="">Semua Wilayah</option>
            {ROUTE_PLANNER_REGION_IDS.filter(id => id !== "indonesia").map((id) => (
              <option key={id} value={id}>
                {formatRegionId(id)}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend className="sr-only">Filter berdasarkan durasi</legend>
          <select
            value={filters.durationDays || ""}
            onChange={(e) => updateFilter("durationDays", e.target.value ? (Number(e.target.value) as RouteDuration) : null)}
            className="px-4 py-2 text-sm bg-transparent text-[#2A241F] border border-[#E8E0CE] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C89A3D] appearance-none cursor-pointer"
          >
            <option value="">Semua Durasi</option>
            {ROUTE_DURATIONS.map((dur) => (
              <option key={dur} value={dur}>
                {dur} Hari
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset>
          <legend className="sr-only">Filter berdasarkan minat</legend>
          <select
            value={filters.interest || ""}
            onChange={(e) => updateFilter("interest", (e.target.value as RouteInterest) || null)}
            className="px-4 py-2 text-sm bg-transparent text-[#2A241F] border border-[#E8E0CE] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C89A3D] appearance-none cursor-pointer"
          >
            <option value="">Semua Minat</option>
            {ROUTE_INTERESTS.map((int) => (
              <option key={int} value={int}>
                {formatRegionId(int)}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-4 h-8">
        <span className="text-sm text-[#71675E] font-medium">
          {resultCount} rute ditemukan
        </span>
        {isResetVisible && (
          <>
            <span className="text-[#E8E0CE]">|</span>
            <button
              onClick={() => onChange({ collection: null, regionId: null, durationDays: null, interest: null })}
              className="text-sm font-semibold text-[#B94C32] hover:text-[#C95A3D] focus:outline-none focus:underline"
            >
              Hapus Filter
            </button>
          </>
        )}
      </div>
    </div>
  );
}
