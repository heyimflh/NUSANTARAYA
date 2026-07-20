import React from "react";
import { ProvinceMapItem } from "@/types/province";
import { ExploreLayerId } from "@/data/exploreControls";
import { getProvinceRelevance } from "@/lib/provinceMatch";
import { ProvincePin } from "./ProvincePin";

type ProvincePinLayerProps = {
  provinces: ProvinceMapItem[];
  searchQuery: string;
  activeLayer: ExploreLayerId;
  showFlagshipOnly: boolean;
  hoveredProvinceId: string | null;
  selectedProvinceId: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
};

export function ProvincePinLayer({
  provinces,
  searchQuery,
  activeLayer,
  showFlagshipOnly,
  hoveredProvinceId,
  selectedProvinceId,
  onHover,
  onSelect,
}: ProvincePinLayerProps) {
  // Only show pins for highly relevant provinces (relevance === 3)
  // Limit to top 10 to avoid clutter
  const relevantProvinces = provinces
    .map((p) => ({
      ...p,
      relevance: getProvinceRelevance(p, searchQuery, activeLayer, showFlagshipOnly),
    }))
    .filter((p) => p.relevance === 3)
    .slice(0, 10);

  if (relevantProvinces.length === 0 && activeLayer === "all" && !searchQuery && !showFlagshipOnly) {
     // If no filters are active, maybe just show flagship pins
     return (
       <g id="province-pins-layer">
         {provinces.filter(p => p.isFlagship).map(p => (
           <ProvincePin
             key={p.id}
             id={p.id}
             x={p.mapPosition.x}
             y={p.mapPosition.y}
             activeLayer={activeLayer}
             isHovered={hoveredProvinceId === p.id}
             isSelected={selectedProvinceId === p.id}
             onHover={onHover}
             onSelect={onSelect}
           />
         ))}
       </g>
     );
  }

  return (
    <g id="province-pins-layer">
      {relevantProvinces.map((p) => (
        <ProvincePin
          key={p.id}
          id={p.id}
          x={p.mapPosition.x}
          y={p.mapPosition.y}
          activeLayer={activeLayer}
          isHovered={hoveredProvinceId === p.id}
          isSelected={selectedProvinceId === p.id}
          onHover={onHover}
          onSelect={onSelect}
        />
      ))}
    </g>
  );
}
