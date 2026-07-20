import React from "react";
import { Map, RefreshCw } from "lucide-react";

interface PresetRoutesEmptyStateProps {
  onReset: () => void;
}

export function PresetRoutesEmptyState({ onReset }: PresetRoutesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-[#E8E0CE] rounded-[24px] bg-[#F4EFE6]/50 max-w-3xl mx-auto mb-16">
      <div className="w-16 h-16 rounded-full bg-[#F4EFE6] text-[#C89A3D] flex items-center justify-center mb-6 shadow-sm border border-[#E8E0CE]">
        <Map className="w-8 h-8 opacity-80" />
      </div>
      
      <h3 className="font-playfair text-xl md:text-2xl font-medium text-[#2A241F] mb-3">
        Belum ada rute yang cocok.
      </h3>
      
      <p className="text-[#71675E] text-sm md:text-base mb-8 max-w-md leading-relaxed">
        Belum ada preset yang cocok dengan semua filter ini. Coba hapus satu filter atau gunakan Route Planner untuk rekomendasi yang lebih personal.
      </p>
      
      <button
        onClick={onReset}
        className="px-6 py-2.5 bg-transparent hover:bg-[#FFFCF7] border border-[#E8E0CE] text-[#2A241F] text-sm font-bold rounded-full flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C89A3D]"
      >
        <RefreshCw className="w-4 h-4 text-[#71675E]" />
        <span>Hapus Filter</span>
      </button>
    </div>
  );
}
