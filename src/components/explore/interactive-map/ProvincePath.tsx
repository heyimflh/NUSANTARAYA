import React, { memo } from "react";
import { ProvinceMapItem } from "@/types/province";
import { ExploreLayerId } from "@/data/exploreControls";
import { PROVINCE_STATES, LAYER_COLORS } from "@/lib/layerColors";
import { getProvinceRelevance } from "@/lib/provinceMatch";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { RegionId } from "@/types/region";
import { cn } from "@/lib/utils";

type ProvincePathProps = {
  province: ProvinceMapItem;
  pathData: string;
  isHovered: boolean;
  isSelected: boolean;
  isFocused: boolean;
  searchQuery: string;
  activeLayer: ExploreLayerId;
  showFlagshipOnly: boolean;
  regionFilter?: string | null;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
  onFocus: (id: string | null) => void;
};

export const ProvincePath = memo(function ProvincePath({
  province,
  pathData,
  isHovered,
  isSelected,
  isFocused,
  searchQuery,
  activeLayer,
  showFlagshipOnly,
  regionFilter,
  onHover,
  onSelect,
  onFocus,
}: ProvincePathProps) {
  // Determine if this province matches current filters using relevance
  const relevance = getProvinceRelevance(
    province,
    searchQuery,
    activeLayer,
    showFlagshipOnly,
    regionFilter
  );

  // Determine visual state based on priority:
  // selected > focused > hovered > primary_match > related_match > nonmatching (dimmed)
  let stateKey: keyof typeof PROVINCE_STATES = "default";

  if (isSelected) {
    stateKey = "selected";
  } else if (isFocused) {
    stateKey = "focus";
  } else if (isHovered) {
    stateKey = "hover";
  } else if (relevance === 3 || relevance === 2) {
    stateKey = "primary_match";
  } else if (relevance === 1 && (activeLayer !== "all" || searchQuery || showFlagshipOnly || regionFilter)) {
    stateKey = "related_match";
  } else if (relevance === 0) {
    stateKey = "dimmed";
  }

  const baseStyle = PROVINCE_STATES[stateKey] as any;
  let fill = baseStyle.fill || "transparent";
  let fillOpacity = baseStyle.fillOpacity || 0;
  let stroke = baseStyle.stroke || "rgba(13,27,42,0.12)";
  const strokeWidth = baseStyle.strokeWidth || 0.5;

  // Determine if it's highlighted due to regional filter
  const isRegionMatch = regionFilter && relevance > 0;
  const activeRegion = isRegionMatch ? getRegionById(regionFilter as RegionId) : null;

  // Override fill and stroke color for match states
  if (stateKey === "primary_match" || stateKey === "related_match") {
    if (activeRegion && isRegionMatch) {
      fill = activeRegion.accentColor;
      fillOpacity = 0.28; // soft fill
      stroke = activeRegion.accentColor;
      // stroke width handled below in class logic or baseStyle, but let's override directly:
      // user requested 2-3px for active region highlight
    } else {
      const layerColor = activeLayer !== "all" ? LAYER_COLORS[activeLayer] : LAYER_COLORS.all;
      fill = layerColor.fill;
      stroke = layerColor.stroke;
    }
  }

  // Selected province state should not be overwritten by regional color completely if we want to differentiate it
  if (stateKey === "selected" && activeRegion && isRegionMatch) {
    fill = activeRegion.accentColor;
    fillOpacity = 0.55;
    stroke = "#C9A84C"; // Gold for selected
  }

  return (
    <path
      d={pathData}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeWidth={isRegionMatch && stateKey !== "dimmed" && stateKey !== "selected" ? 1.5 : strokeWidth}
      className={cn(
        "cursor-pointer outline-none focus:outline-none transition-all motion-reduce:transition-[fill,stroke,opacity] motion-reduce:duration-100 duration-300 ease-out",
        isFocused && "drop-shadow-md",
        (isRegionMatch && stateKey !== "dimmed") && "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] xl:stroke-[2px]"
      )}
      onMouseEnter={() => onHover(province.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(province.id)}
      onFocus={() => onFocus(province.id)}
      onBlur={() => onFocus(null)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(province.id);
        }
      }}
      tabIndex={relevance > 0 ? 0 : -1}
      role="button"
      aria-label={province.name}
      aria-selected={isSelected}
    />
  );
});
