"use client";

import { MapLayer, mapPreviewLayers } from "@/data/preview-map";

interface FilterChipsProps {
  activeLayer: string;
  onLayerChange: (layerId: string) => void;
}

export default function FilterChips({ activeLayer, onLayerChange }: FilterChipsProps) {
  return (
    <div className="w-full relative mt-6 md:mt-8">
      {/* Fade edges for scrollable container on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F8F4EA] to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F8F4EA] to-transparent z-10 pointer-events-none md:hidden" />
      
      <div className="flex flex-nowrap md:flex-wrap items-center gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-5 md:px-0 pb-4 md:pb-0 pt-2 -mx-5 md:mx-0 snap-x snap-mandatory">
        {mapPreviewLayers.map((layer) => {
          const isActive = activeLayer === layer.id;
          
          return (
            <button
              key={layer.id}
              onClick={() => onLayerChange(layer.id)}
              className={`
                relative flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-out snap-center overflow-hidden group
                ${isActive 
                  ? "text-white shadow-[0_8px_20px_-6px_rgba(216,181,109,0.5)] transform scale-105" 
                  : "bg-white/40 text-[#10233F]/70 hover:bg-white/80 hover:text-[#10233F] hover:shadow-md hover:scale-[1.02] border border-white/60"
                }
              `}
            >
              {/* Active State Background (Premium Gold Gradient) */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-[#10233F] to-[#0A1629] border border-[#D8B56D]/40 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
              />
              
              {/* Gold Shimmer effect for active chip */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D8B56D]/20 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />
              )}
              
              {/* Icon & Label Container */}
              <div className="relative z-10 flex items-center gap-2.5">
                {layer.id !== "all" && (
                  <img 
                    src={layer.icon} 
                    alt="" 
                    className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ${isActive ? "drop-shadow-[0_0_8px_rgba(216,181,109,0.8)] scale-110" : "opacity-60 group-hover:opacity-100 group-hover:scale-110"}`}
                    aria-hidden="true" 
                    style={isActive ? { filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(35deg) brightness(1.1)' } : {}}
                  />
                )}
                <span className={`tracking-wide whitespace-nowrap transition-colors duration-500 ${isActive ? 'text-[#D8B56D]' : ''}`}>
                  {layer.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
