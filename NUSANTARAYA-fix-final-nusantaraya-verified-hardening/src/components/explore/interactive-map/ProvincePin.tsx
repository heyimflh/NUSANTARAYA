import React from "react";
import { cn } from "@/lib/utils";
import { LAYER_COLORS } from "@/lib/layerColors";
import { ExploreLayerId } from "@/data/exploreControls";

type ProvincePinProps = {
  id: string;
  x: number;
  y: number;
  activeLayer: ExploreLayerId;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
};

export function ProvincePin({
  id,
  x,
  y,
  activeLayer,
  isHovered,
  isSelected,
  onHover,
  onSelect,
}: ProvincePinProps) {
  const pinColor = activeLayer !== "all" ? LAYER_COLORS[activeLayer].pinColor : LAYER_COLORS.all.pinColor;

  return (
    <g
      className={cn(
        "cursor-pointer outline-none focus:outline-none transition-all duration-[260ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]",
        isHovered || isSelected ? "scale-[1.15]" : "scale-100"
      )}
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(id)}
    >
      {/* Invisible hit area (44x44px equivalent depending on svg scale) */}
      <circle r="22" fill="transparent" />

      {/* Pin Shadow */}
      <circle r="4" cy="6" fill="#0D1B2A" opacity="0.15" filter="blur(2px)" />

      {/* Pin Body */}
      <circle
        r={isSelected || isHovered ? "6" : "5"}
        fill={pinColor}
        stroke="#FFFFFF"
        strokeWidth={isSelected ? "2" : "1.5"}
        className="transition-all duration-300"
      />
      
      {/* Pin inner dot */}
      <circle r="1.5" fill="#FFFFFF" />
    </g>
  );
}
