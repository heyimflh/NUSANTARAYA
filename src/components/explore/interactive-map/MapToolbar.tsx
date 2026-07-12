import React from 'react';
import { ZoomIn, ZoomOut, RefreshCcw, Map as MapIcon } from 'lucide-react';

type MapToolbarProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
};

export const MapToolbar: React.FC<MapToolbarProps> = ({ onZoomIn, onZoomOut, onReset }) => {
  return (
    <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-nusaBorder shadow-lg">
      <button 
        onClick={onZoomIn}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold"
        aria-label="Zoom In"
        title="Zoom In"
      >
        <ZoomIn size={20} />
      </button>
      <button 
        onClick={onZoomOut}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold"
        aria-label="Zoom Out"
        title="Zoom Out"
      >
        <ZoomOut size={20} />
      </button>
      <div className="w-full h-[1px] bg-nusaBorder/60 my-1"></div>
      <button 
        onClick={onReset}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-nusaWarm text-nusaNavy transition-colors focus:outline-none focus:ring-2 focus:ring-nusaGold"
        aria-label="Reset Map"
        title="Reset Map"
      >
        <RefreshCcw size={20} />
      </button>
    </div>
  );
};
