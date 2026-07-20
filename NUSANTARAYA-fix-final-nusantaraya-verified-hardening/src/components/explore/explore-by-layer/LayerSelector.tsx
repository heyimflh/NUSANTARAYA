import React, { useRef } from "react";
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
  const editorialLayers = exploreLayers.filter((l) => l.id !== "all");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Handle keyboard navigation for tabs
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    const maxIndex = editorialLayers.length - 1;

    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = index === maxIndex ? 0 : index + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = index === 0 ? maxIndex : index - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = maxIndex;
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        onSelect(editorialLayers[index].id as ExploreLayerId);
        return;
      default:
        return;
    }

    if (nextIndex !== index) {
      e.preventDefault();
      const nextTab = tabRefs.current[nextIndex];
      nextTab?.focus();
      // Optionally auto-select on focus for tabs:
      // onSelect(editorialLayers[nextIndex].id as ExploreLayerId);
    }
  };

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
            ref={(el) => { tabRefs.current[index] = el; }}
            role="tab"
            aria-selected={isStrictlyActive}
            aria-controls={`layer-panel-${layer.id}`}
            id={`layer-tab-${layer.id}`}
            tabIndex={isStrictlyActive ? 0 : (activeLayer === "all" && index === 0 ? 0 : -1)}
            onClick={() => onSelect(layer.id as ExploreLayerId)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={cn(
              "relative flex items-center gap-3 lg:gap-4 px-4 py-3 lg:p-4 text-left transition-all snap-start shrink-0 lg:shrink min-h-[44px] min-w-[44px]",
              "rounded-xl lg:rounded-2xl border border-transparent",
              "group outline-none focus-visible:ring-2 focus-visible:ring-nusaNavy focus-visible:ring-offset-2",
              isStrictlyActive
                ? "text-nusaNavy"
                : isSelected
                ? "text-nusaNavy"
                : "text-nusaNavy/60 hover:text-nusaNavy hover:bg-[#F8F4EA]"
            )}
            style={{
              // Fallback hover border for non-color dependent accessibility
              borderColor: isStrictlyActive ? "transparent" : "transparent",
            }}
          >
            {/* Active Background Indicator */}
            {isSelected && (
              <motion.div
                layoutId="layer-active-indicator"
                className="absolute inset-0 bg-[#F8F4EA] border border-[#E8E0CE] rounded-xl lg:rounded-2xl z-0 shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 330,
                  damping: 32,
                  mass: 0.8,
                  duration: shouldReduceMotion ? 0 : undefined,
                }}
              />
            )}

            {/* Active Accent Rail */}
            {isSelected && (
              <motion.div
                layoutId="layer-active-rail"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 lg:h-2/3 rounded-r-md bg-nusaGold z-10"
                transition={{
                  type: "spring",
                  stiffness: 330,
                  damping: 32,
                  mass: 0.8,
                  duration: shouldReduceMotion ? 0 : undefined,
                }}
              />
            )}

            <div className="relative z-10 flex items-center justify-center w-9 h-9 lg:w-11 lg:h-11 rounded-full bg-white border border-[#E8E0CE] shadow-sm transition-transform duration-300 group-hover:-translate-y-[1px]">
              <IconComponent
                className={cn(
                  "w-[18px] h-[18px] lg:w-5 lg:h-5 transition-colors duration-300",
                  isSelected ? "text-nusaGold" : "text-nusaNavy/50"
                )}
              />
            </div>

            <div className="relative z-10 flex flex-col pr-2">
              <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-nusaNavy/50 mb-[2px]">
                0{index + 1}
              </span>
              <span className="font-inter font-semibold text-sm lg:text-[15px] whitespace-nowrap">
                {layer.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
