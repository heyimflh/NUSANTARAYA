import { useEffect, useState } from "react";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { LAYER_COLORS } from "@/lib/layerColors";
import { MODE_LABELS } from "@/lib/modeConfig";
import { cn } from "@/lib/utils";

type ExploreActiveSummaryProps = {
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  showFlagshipOnly: boolean;
  resultCount: number;
};

export function ExploreActiveSummary({
  searchQuery,
  activeLayer,
  activeMode,
  showFlagshipOnly,
  resultCount,
}: ExploreActiveSummaryProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const layerLabel = LAYER_COLORS[activeLayer]?.label || "Semua Layer";
  const modeLabel = MODE_LABELS[activeMode] || "Explore";

  // Trigger brief animation when filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsUpdating(true);
    const t = setTimeout(() => setIsUpdating(false), 400);
    return () => clearTimeout(t);
  }, [searchQuery, activeLayer, activeMode, showFlagshipOnly, resultCount]);

  // Determine main status message
  let statusMessage = "Siap menjelajahi 38 provinsi.";
  if (resultCount === 0) {
    statusMessage = "Belum ada provinsi yang cocok.";
  } else if (searchQuery) {
    statusMessage = `Menemukan ${resultCount} provinsi untuk "${searchQuery}".`;
  } else if (showFlagshipOnly) {
    statusMessage = "Menyorot 8 provinsi unggulan.";
  } else if (activeMode === "tourist") {
    statusMessage = "Mode Tourist aktif · Destinasi diprioritaskan.";
  } else if (activeMode === "learn") {
    statusMessage = "Mode Learn aktif · Budaya dan sejarah diprioritaskan.";
  } else if (activeLayer !== "all") {
    statusMessage = `Menampilkan layer ${layerLabel}.`;
  }

  return (
    <div
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-[#0D1B2A]/70"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-center gap-2 font-medium">
        <span className="relative flex h-2 w-2">
          <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", isUpdating ? "bg-[#C9A84C]" : "bg-transparent")} />
          <span className={cn("relative inline-flex rounded-full h-2 w-2 transition-colors duration-300", isUpdating ? "bg-[#C9A84C]" : "bg-[#2D6BE4]")} />
        </span>
        <span className={cn("transition-opacity duration-300", isUpdating ? "opacity-50" : "opacity-100")}>
          {statusMessage}
        </span>
      </div>
      
      {/* Compact indicators only shown if not default */}
      {(activeLayer !== "all" || showFlagshipOnly || activeMode !== "explore") && (
        <div className="hidden sm:flex items-center gap-2 text-[#0D1B2A]/40">
          <span className="w-1 h-1 rounded-full bg-[#0D1B2A]/20" />
          
          <div className="flex items-center gap-2">
            {activeMode !== "explore" && (
              <span className="px-1.5 py-0.5 bg-[#0D1B2A]/5 text-[#0D1B2A]/80 font-semibold rounded text-[11px] uppercase tracking-wider">
                {modeLabel}
              </span>
            )}

            {activeLayer !== "all" && (
              <span className="px-1.5 py-0.5 bg-[#C9A84C]/10 text-[#0D1B2A]/80 font-semibold rounded text-[11px] uppercase tracking-wider">
                {layerLabel}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
