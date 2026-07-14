import { RaniMapContext } from "@/types/rani";
import { Map, Layers, Compass, Trophy } from "lucide-react";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { provinceMapData } from "@/data/provinces/provinces";
import { useLanguage } from "@/context/app-context";

type Props = {
  context: RaniMapContext;
};

export function RaniContextRibbon({ context }: Props) {
  const { t } = useLanguage();

  const activeModeStr =
    context.activeMode === "explore"
      ? t("Eksplorasi", "Explore")
      : context.activeMode === "tourist"
      ? t("Turis", "Tourist")
      : t("Belajar", "Learn");

  const chips: Array<{ id: string; icon: any; label: string }> = [];

  // 1. Mode
  chips.push({ id: "mode", icon: Compass, label: activeModeStr });

  // 2. Layer
  if (context.activeLayer !== "all") {
    chips.push({
      id: "layer",
      icon: Layers,
      label:
        context.activeLayer.charAt(0).toUpperCase() +
        context.activeLayer.slice(1),
    });
  }

  // 3. Selected Province or Region
  if (context.selectedProvinceId) {
    const prov = provinceMapData.find((p) => p.id === context.selectedProvinceId);
    if (prov) {
      chips.push({ id: "prov", icon: Map, label: prov.name });
    }
  } else if (context.activeRegionId || context.highlightedRegionId) {
    const regionId = context.activeRegionId || context.highlightedRegionId;
    if (regionId) {
      const region = getRegionById(regionId);
      if (region) {
        chips.push({ id: "region", icon: Map, label: region.label });
      }
    }
  }

  // 4. Milestone
  if (context.nextMilestone) {
    chips.push({ id: "milestone", icon: Trophy, label: "1 provinsi lagi" }); // static text just for MVP context chip
  }

  return (
    <div 
      className="flex flex-wrap items-center gap-2 mb-6"
      aria-label="Konteks RANI saat ini"
    >
      {chips.map((chip) => {
        const Icon = chip.icon;
        return (
          <div
            key={chip.id}
            className="flex items-center gap-1.5 px-3 py-1 bg-white/60 backdrop-blur-sm border border-[#E8E0CE] rounded-full text-xs font-medium text-[#5E6570]"
          >
            <Icon className="w-3.5 h-3.5 text-[#2D6BE4]" />
            <span>{chip.label}</span>
          </div>
        );
      })}
    </div>
  );
}
