import React from "react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";

interface PresetRouteRibbonProps {
  stops: RoutePresetDefinition["stops"];
  isInverse?: boolean;
}

export function PresetRouteRibbon({ stops, isInverse }: PresetRouteRibbonProps) {
  // If there are more than 4 stops, we truncate to 3 and show +N
  const maxDisplay = 4;
  const displayStops = stops.slice(0, maxDisplay);
  const hiddenCount = stops.length > maxDisplay ? stops.length - maxDisplay : 0;

  const getShortLabel = (label: string) => {
    if (label.includes(" & ")) return label.split(" & ")[0];
    if (label.includes("&")) return label.split("&")[0].trim();
    const words = label.split(" ");
    if (words.length > 2) return `${words[0]} ${words[1]}`;
    return label;
  };

  return (
    <div className="w-full relative py-2">
      {/* Accessible Text Equivalent */}
      <div className="sr-only">
        Rute perjalanan:{" "}
        {stops.map((stop, index) => `${index + 1}. ${stop.cityOrCluster}`).join(", ")}
      </div>

      {/* Visual Sequence */}
      <div aria-hidden="true" className="relative flex items-center w-full max-w-sm">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2">
          <div className={`w-full h-full ${isInverse ? "bg-white/20" : "bg-[#E8E0CE]/50"}`} />
        </div>
        
        {/* Nodes */}
        <div className="relative flex justify-between w-full">
          {displayStops.map((stop, index) => (
            <div key={`${stop.cityOrCluster}-${index}`} className="flex flex-col items-center group">
              <div className={`w-4 h-4 rounded-full border-2 shadow-sm transition-transform group-hover:scale-125 group-hover:bg-[#C89A3D] ${isInverse ? "bg-[#2A241F] border-[#C89A3D]" : "bg-[#FFFCF7] border-[#C89A3D]"}`} />
              <div className={`absolute top-6 whitespace-nowrap text-[10px] sm:text-xs font-medium max-w-[80px] truncate px-1 text-center group-hover:z-20 transition-colors ${isInverse ? "text-white/70 group-hover:text-white" : "text-[#71675E] group-hover:text-[#2A241F]"}`} title={stop.cityOrCluster}>
                {getShortLabel(stop.cityOrCluster)}
              </div>
            </div>
          ))}

          {hiddenCount > 0 && (
            <div className="flex flex-col items-center group">
              <div className="w-4 h-4 rounded-full bg-[#E8E0CE] border-2 border-[#FFFCF7] flex items-center justify-center">
                <span className="text-[8px] font-bold text-[#2A241F]">+{hiddenCount}</span>
              </div>
              <div className="absolute top-6 whitespace-nowrap text-[10px] sm:text-xs font-medium text-[#71675E]">
                Pengalaman
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Spacer for absolute positioned labels */}
      <div className="h-6" aria-hidden="true" />
    </div>
  );
}
