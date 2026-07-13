import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExploreLayerId, exploreLayers } from "@/data/exploreControls";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

interface LayerSelectorProps {
  activeLayer: ExploreLayerId;
  previewLayerId: string;
  onSelect: (layer: ExploreLayerId) => void;
}

export const LayerSelector: React.FC<LayerSelectorProps> = ({
  activeLayer,
  previewLayerId,
  onSelect,
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  // Exclude 'all' from the editorial layer list
  const editorialLayers = exploreLayers.filter(l => l.id !== "all");

  return (
    <div 
      role="tablist" 
      aria-label="Layer Peta Nusantara"
      className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x snap-mandatory"
    >
      {editorialLayers.map((layer, index) => {
        const isSelected = activeLayer === layer.id || (activeLayer === "all" && previewLayerId === layer.id);
        const isStrictlyActive = activeLayer === layer.id;
        const iconName = layer.icon as keyof typeof Icons;
        const IconComponent = (Icons[iconName] || Icons.Map) as React.ElementType;

        return (
          <button
            key={layer.id}
            role="tab"
            aria-selected={isStrictlyActive}
            aria-controls={`layer-panel-${layer.id}`}
            onClick={() => onSelect(layer.id as ExploreLayerId)}
            className={cn(
              "relative flex items-center gap-3 lg:gap-4 px-4 py-3 lg:p-4 text-left transition-colors snap-start shrink-0 lg:shrink",
              "rounded-xl lg:rounded-2xl border border-transparent",
              "group outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-offset-2",
              isStrictlyActive 
                ? "text-nusaNavy" 
                : isSelected 
                  ? "text-nusaNavy" 
                  : "text-nusaNavy/60 hover:text-nusaNavy hover:bg-[#F8F4EA]"
            )}
          >
            {/* Active Background Indicator */}
            {isSelected && (
              <motion.div
                layoutId="layer-active-indicator"
                className="absolute inset-0 bg-[#F8F4EA] border border-[#E8E0CE] rounded-xl lg:rounded-2xl z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: shouldReduceMotion ? 0 : undefined }}
              />
            )}

            <div className="relative z-10 flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white border border-[#E8E0CE] shadow-sm group-hover:scale-105 transition-transform">
              <IconComponent className={cn("w-4 h-4 lg:w-5 lg:h-5", isSelected ? "text-nusaGold" : "text-nusaNavy/50")} />
            </div>

            <div className="relative z-10 flex flex-col">
              <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-wider text-nusaNavy/40 mb-0.5">
                0{index + 1}
              </span>
              <span className="font-inter font-semibold text-sm lg:text-base whitespace-nowrap">
                {layer.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
