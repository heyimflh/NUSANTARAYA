import React from 'react';
import { ExploreLayerId, ExploreModeId } from '@/data/exploreControls';

type MapStatusBarProps = {
  activeMode: ExploreModeId;
  activeLayer: ExploreLayerId;
  resultCount: number;
};

const MODE_LABELS: Record<ExploreModeId, string> = {
  explore: "Explore",
  tourist: "Tourist",
  learn: "Learn",
};

const LAYER_LABELS: Record<ExploreLayerId, string> = {
  all: "Semua",
  budaya: "Budaya",
  kuliner: "Kuliner",
  alam: "Alam",
  sejarah: "Sejarah",
  rempah: "Jalur Rempah",
  future: "Kota Masa Depan",
};

export const MapStatusBar: React.FC<MapStatusBarProps> = ({ activeMode, activeLayer, resultCount }) => {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm text-nusaNavy/70 mt-2 mb-4" aria-live="polite">
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder">
        Mode <strong>{MODE_LABELS[activeMode]}</strong>
      </span>
      <span>&middot;</span>
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder">
        Layer <strong>{LAYER_LABELS[activeLayer]}</strong>
      </span>
      <span>&middot;</span>
      <span className="bg-white/50 backdrop-blur-md px-3 py-1 rounded-full border border-nusaBorder">
        Menampilkan <strong>{resultCount}</strong> hasil
      </span>
    </div>
  );
};
