import React from 'react';
import { ZoomIn, ZoomOut, RefreshCcw, Map as MapIcon } from 'lucide-react';

type MapToolbarProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
};

export const MapToolbar: React.FC<MapToolbarProps> = ({ 
  onZoomIn, 
  onZoomOut, 
  onReset,
  canZoomIn,
  canZoomOut
}) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-2 bg-white/85 backdrop-blur-md p-2 rounded-2xl border border-nusaBorder shadow-[0_8px_30px_rgba(13,27,42,0.08)] z-20">
      <button 
        onClick={onZoomIn}
        disabled={!canZoomIn}
        className="w-[44px] h-[44px] flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold disabled:opacity-40 disabled:hover:bg-transparent"
        aria-label="Perbesar Peta"
        title="Perbesar Peta"
      >
        <ZoomIn size={20} />
      </button>
      <button 
        onClick={onZoomOut}
        disabled={!canZoomOut}
        className="w-[44px] h-[44px] flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold disabled:opacity-40 disabled:hover:bg-transparent"
        aria-label="Perkecil Peta"
        title="Perkecil Peta"
      >
        <ZoomOut size={20} />
      </button>
      <div className="w-full h-[1px] bg-nusaBorder/80 my-1"></div>
      <button 
        onClick={onReset}
        className="w-[44px] h-[44px] flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold"
        aria-label="Kembalikan Tampilan Peta"
        title="Kembalikan Tampilan Peta"
      >
        <RefreshCcw size={20} />
      </button>
    </div>
  );
};
