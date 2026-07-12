import React from 'react';
import { LAYER_COLORS } from '@/lib/layerColors';
import { ExploreLayerId } from '@/data/exploreControls';

export const MapLegend = ({ activeLayer }: { activeLayer: ExploreLayerId }) => {
  if (activeLayer === "all") return null;

  const colorConfig = LAYER_COLORS[activeLayer];
  if (!colorConfig) return null;

  return (
    <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-nusaBorder shadow-lg flex items-center gap-3">
      <div 
        className="w-4 h-4 rounded-full" 
        style={{ backgroundColor: colorConfig.fill, opacity: colorConfig.fillOpacity + 0.3 }}
      />
      <span className="text-sm font-medium text-nusaNavy">
        Menyoroti: {colorConfig.label}
      </span>
    </div>
  );
};
