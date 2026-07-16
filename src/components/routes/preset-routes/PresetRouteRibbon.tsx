import React from "react";
import { RoutePresetDefinition } from "@/data/routes/routePresets";

interface PresetRouteRibbonProps {
  stops: RoutePresetDefinition["stops"];
}

export function PresetRouteRibbon({ stops }: PresetRouteRibbonProps) {
  // If there are more than 4 stops, we truncate to 3 and show +N
  const maxDisplay = 4;
  const displayStops = stops.slice(0, maxDisplay);
  const hiddenCount = stops.length > maxDisplay ? stops.length - maxDisplay : 0;

  return (
    <div className="w-full relative py-2">
      {/* Accessible Text Equivalent */}
      <div className="sr-only">
        Rute perjalanan:{" "}
        {stops.map((stop, index) => `${index + 1}. ${stop.cityOrCluster}`).join(", ")}
      </div>

      {/* Visual Sequence */}
      <div aria-hidden="true" className="relative flex items-center w-full max-w-sm">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-[var(--planner-warm-border)] -translate-y-1/2 z-0" />
        
        {/* Nodes */}
        <div className="relative flex items-center justify-between w-full z-10">
          {displayStops.map((stop, index) => (
            <div key={`${stop.cityOrCluster}-${index}`} className="flex flex-col items-center group">
              <div className="w-4 h-4 rounded-full bg-[var(--planner-paper)] border-2 border-[var(--planner-saffron)] shadow-sm transition-transform group-hover:scale-125 group-hover:bg-[var(--planner-saffron)]" />
              <div className="absolute top-6 whitespace-nowrap text-[10px] sm:text-xs font-medium text-[var(--planner-muted)] max-w-[80px] truncate px-1 text-center group-hover:text-[var(--planner-ink)] group-hover:z-20 transition-colors">
                {stop.cityOrCluster}
              </div>
            </div>
          ))}

          {hiddenCount > 0 && (
            <div className="flex flex-col items-center group">
              <div className="w-4 h-4 rounded-full bg-[var(--planner-warm-border)] border-2 border-[var(--planner-paper)] flex items-center justify-center">
                <span className="text-[8px] font-bold text-[var(--planner-ink)]">+{hiddenCount}</span>
              </div>
              <div className="absolute top-6 whitespace-nowrap text-[10px] sm:text-xs font-medium text-[var(--planner-muted)]">
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
