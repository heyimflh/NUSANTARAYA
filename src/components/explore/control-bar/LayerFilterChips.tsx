"use client";

import { exploreLayers, ExploreLayerId } from "@/data/exploreControls";
import { cn } from "@/lib/utils";
import { 
  Map, 
  Palette, 
  Utensils, 
  Mountain, 
  Landmark, 
  Ship, 
  Building2, 
  LucideIcon 
} from "lucide-react";

type LayerFilterChipsProps = {
  activeLayer: ExploreLayerId;
  onLayerChange: (layer: ExploreLayerId) => void;
};

const iconMap: Record<string, LucideIcon> = {
  Map,
  Palette,
  Utensils,
  Mountain,
  Landmark,
  Ship,
  Building2,
};

export function LayerFilterChips({
  activeLayer,
  onLayerChange,
}: LayerFilterChipsProps) {
  return (
    <div className="relative w-full">
      {/* Optional: Add gradient fades on the sides for better scroll affordance on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
      
      <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x py-2 -my-2 px-1">
        {exploreLayers.map((layer) => {
          const IconComponent = iconMap[layer.icon] || Map;
          const isActive = activeLayer === layer.id;

          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onLayerChange(layer.id)}
              className={cn(
                "snap-start flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 border focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A84C]/25",
                isActive
                  ? "bg-[#0D1B2A] text-white border-[#0D1B2A] shadow-none"
                  : "bg-white/80 text-[#0D1B2A]/70 border-[#E8E0CE] shadow-none hover:bg-white hover:border-[#C9A84C]/50 hover:text-[#0D1B2A]"
              )}
            >
              <IconComponent 
                className={cn(
                  "w-4 h-4 transition-all duration-300", 
                  isActive ? "text-[#C9A84C] scale-110 drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]" : "text-[#0D1B2A]/60"
                )} 
              />
              <span className="font-medium text-sm">
                <span className="hidden md:inline">{layer.label}</span>
                <span className="md:hidden">{layer.shortLabel}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
