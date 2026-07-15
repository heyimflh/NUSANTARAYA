"use client";

import { mapPreviewLayers, type MapLayerId } from "@/data/preview-map";

interface FilterChipsProps {
  activeLayer: MapLayerId;
  onLayerChange: (layerId: MapLayerId) => void;
}

export default function FilterChips({
  activeLayer,
  onLayerChange,
}: FilterChipsProps) {
  return (
    <div className="w-full relative mt-6 md:mt-8">
      {/* Fade edges for scrollable container on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F8F4EA] to-transparent z-10 pointer-events-none md:hidden" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F8F4EA] to-transparent z-10 pointer-events-none md:hidden" />

      <div className="flex flex-nowrap md:flex-wrap items-center gap-3 md:gap-4 overflow-x-auto md:overflow-visible hide-scrollbar px-5 md:px-2 pb-4 md:pb-2 pt-2 -mx-5 md:-mx-2 snap-x snap-mandatory">
        {mapPreviewLayers.map((layer) => {
          const isActive = activeLayer === layer.id;

          return (
            <button
              key={layer.id}
              onClick={() => onLayerChange(layer.id)}
              className={`
                relative flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-out snap-center overflow-hidden group
                ${
                  isActive
                    ? "text-white shadow-[0_8px_20px_-6px_rgba(201,168,76,0.6)] transform scale-105"
                    : "bg-white/60 text-[#705A2F] hover:bg-white hover:text-[#34291A] hover:shadow-md hover:scale-[1.02] border border-[#D8B56D]/30"
                }
              `}
            >
              {/* Active State Background (Deep Warm Earth Brown - Seirama dengan Ivory) */}
              <div
                className={`absolute inset-0 bg-[#4A3B2C] border border-[#34291A] transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
              />

              {/* White Shimmer effect for active chip */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]" />
              )}

              {/* Icon & Label Container */}
              <div className="relative z-10 flex items-center gap-2.5">
                {layer.id !== "all" && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={layer.icon}
                      alt=""
                      className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-500 ${isActive ? "drop-shadow-md scale-110" : "opacity-80 group-hover:opacity-100 group-hover:scale-110"}`}
                      aria-hidden="true"
                    />
                  </>
                )}
                <span
                  className={`tracking-wide whitespace-nowrap transition-colors duration-500 ${isActive ? "text-white font-bold" : "font-semibold"}`}
                >
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
