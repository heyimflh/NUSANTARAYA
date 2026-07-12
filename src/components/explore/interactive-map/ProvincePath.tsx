import React, { memo } from "react";
import { ProvinceMapItem } from "@/types/province";
import { ExploreLayerId } from "@/data/exploreControls";
import { PROVINCE_STATES, LAYER_COLORS } from "@/lib/layerColors";
import { getProvinceRelevance } from "@/lib/provinceMatch";
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
  onHover,
  onSelect,
  onFocus,
}: ProvincePathProps) {
  // Determine if this province matches current filters using relevance
  const relevance = getProvinceRelevance(
    province,
    searchQuery,
    activeLayer,
    showFlagshipOnly
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
  } else if (relevance === 1 && (activeLayer !== "all" || searchQuery || showFlagshipOnly)) {
    stateKey = "related_match";
  } else if (relevance === 0) {
    stateKey = "dimmed";
  }

  const baseStyle = PROVINCE_STATES[stateKey] as any;
  let fill = baseStyle.fill || "transparent";
  let fillOpacity = baseStyle.fillOpacity || 0;
  let stroke = baseStyle.stroke || "rgba(13,27,42,0.12)";
  const strokeWidth = baseStyle.strokeWidth || 0.5;

  // Override fill and stroke color for match states
  if (stateKey === "primary_match" || stateKey === "related_match") {
    const layerColor = activeLayer !== "all" ? LAYER_COLORS[activeLayer] : LAYER_COLORS.all;
    fill = layerColor.fill;
    stroke = layerColor.stroke;
  }

  return (
    <path
      d={pathData}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={cn(
        "cursor-pointer outline-none focus:outline-none transition-all motion-reduce:transition-none duration-[260ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        isFocused && "drop-shadow-md"
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
