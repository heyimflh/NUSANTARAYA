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

const layerThemeMap: Record<string, string> = {
  all: "bg-[#0D1B2A] text-[#C9A84C] border-[#0D1B2A]",
  budaya: "bg-[#9A3B3B] text-white border-[#9A3B3B]",
  kuliner: "bg-[#D97706] text-white border-[#D97706]",
  alam: "bg-[#2D5A27] text-white border-[#2D5A27]",
  sejarah: "bg-[#2D6BE4] text-white border-[#2D6BE4]",
  "jalur-rempah": "bg-[#1B7A7A] text-white border-[#1B7A7A]",
  "masa-depan": "bg-[#6B3FA0] text-white border-[#6B3FA0]",
};

export function LayerFilterChips({ activeLayer, onLayerChange }: LayerFilterChipsProps) {
  return (
    <div className="relative w-full">
      {/* Edge fades for horizontal scroll indication on mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 to-transparent pointer-events-none md:hidden z-10" />
      
      <div 
        className="flex items-center gap-2 pt-2 pb-1 overflow-x-auto hide-scrollbar snap-x snap-mandatory pr-6 md:pr-0"
        role="radiogroup"
        aria-label="Pilih layer peta"
      >
        <span className="text-xs font-bold text-[#0D1B2A]/50 uppercase tracking-wider pl-1 mr-2 hidden md:block shrink-0">
          Layer Peta
        </span>
        
        {exploreLayers.map((layer) => {
          const Icon = iconMap[layer.icon] || Map;
          const isActive = activeLayer === layer.id;
          const activeTheme = layerThemeMap[layer.id] || layerThemeMap.all;

          return (
            <button
              key={layer.id}
              role="radio"
              aria-checked={isActive}
              onClick={() => onLayerChange(layer.id)}
              className={cn(
                "flex items-center shrink-0 snap-start gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-[220ms] ease-out border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 active:scale-[0.98]",
                isActive
                  ? cn(activeTheme, "shadow-md")
                  : "bg-white text-[#0D1B2A]/70 border-[#E8E0CE] hover:border-[#C9A84C]/50 hover:text-[#0D1B2A] hover:bg-[#C9A84C]/5 hover:-translate-y-[1px] hover:shadow-sm"
              )}
              title={layer.description}
            >
              <Icon className={cn("w-4 h-4 transition-colors", isActive ? "opacity-90" : "text-[#0D1B2A]/40")} />
              <span>{layer.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
