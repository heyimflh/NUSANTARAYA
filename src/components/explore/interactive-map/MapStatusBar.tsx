import React from 'react';
import { ExploreLayerId, ExploreModeId } from '@/data/exploreControls';
import { MODE_LABELS } from '@/lib/modeConfig';
import { LAYER_COLORS } from '@/lib/layerColors';

import { getRegionById } from '@/data/regions/regionProvinceMap';
import { RegionId } from '@/types/region';
import { X } from 'lucide-react';

type MapStatusBarProps = {
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  resultCount: number;
  regionFilter?: string | null;
  onClearRegionFilter?: () => void;
};

export const MapStatusBar: React.FC<MapStatusBarProps> = ({ activeMode, activeLayer, resultCount, regionFilter, onClearRegionFilter }) => {
  const regionLabel = regionFilter ? getRegionById(regionFilter as RegionId)?.label : null;

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
      {regionFilter && (
        <span className="flex items-center gap-1.5 bg-nusaGold/10 backdrop-blur-md px-3 py-1 rounded-full border border-nusaGold/30 shadow-sm text-nusaGold-dark font-medium">
          Wilayah {regionLabel || regionFilter}
          {onClearRegionFilter && (
            <button 
              onClick={onClearRegionFilter}
              className="p-0.5 hover:bg-nusaGold/20 rounded-full transition-colors"
              aria-label="Keluar dari tampilan wilayah"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </span>
      )}
    </div>
  );
};
