import React from "react";
import { Map, RefreshCw } from "lucide-react";

interface PresetRoutesEmptyStateProps {
  onReset: () => void;
}

export function PresetRoutesEmptyState({ onReset }: PresetRoutesEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-[var(--planner-warm-border)] rounded-[24px] bg-[var(--planner-canvas)]/50 max-w-3xl mx-auto mb-16">
      <div className="w-16 h-16 rounded-full bg-[var(--planner-saffron-soft)] text-[var(--planner-saffron)] flex items-center justify-center mb-6">
        <Map className="w-8 h-8 opacity-80" />
      </div>
      
      <h3 className="font-playfair text-xl md:text-2xl font-medium text-[var(--planner-ink)] mb-3">
        Belum ada rute yang cocok.
      </h3>
      
      <p className="text-[var(--planner-earth)] text-sm md:text-base mb-8 max-w-md leading-relaxed">
        Belum ada preset yang cocok dengan semua filter ini. Coba hapus satu filter atau gunakan Route Planner untuk rekomendasi yang lebih personal.
      </p>
      
      <button
        onClick={onReset}
        className="px-6 py-2.5 bg-transparent hover:bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] text-[var(--planner-ink)] text-sm font-semibold rounded-full flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--planner-saffron)]"
      >
        <RefreshCw className="w-4 h-4 text-[var(--planner-muted)]" />
        <span>Hapus Filter</span>
      </button>
    </div>
  );
}
