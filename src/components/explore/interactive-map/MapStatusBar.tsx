import React from 'react';
import { ExploreLayerId, ExploreModeId } from '@/data/exploreControls';
import { MODE_LABELS } from '@/lib/modeConfig';
import { LAYER_COLORS } from '@/lib/layerColors';

type MapStatusBarProps = {
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  resultCount: number;
};

export const MapStatusBar: React.FC<MapStatusBarProps> = ({ activeMode, activeLayer, resultCount }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-nusaNavy/70 mt-4 mb-6" aria-live="polite">
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder shadow-sm">
        Mode <strong className="text-nusaNavy">{MODE_LABELS[activeMode] || "Explore"}</strong>
      </span>
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder shadow-sm">
        Layer <strong className="text-nusaNavy">{LAYER_COLORS[activeLayer]?.label || "Semua"}</strong>
      </span>
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder shadow-sm">
        Menampilkan <strong className="text-nusaNavy">{resultCount} provinsi</strong>
      </span>
    </div>
  );
};
