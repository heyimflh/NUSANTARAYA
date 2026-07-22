"use client";

import { FutureSignal } from "@/types/future";
import { FutureSignalCard } from "./FutureSignalCard";
import { FilterX } from "lucide-react";

export function FutureSignalResults({
  signals,
  savedSignalIds,
  onToggleSave,
  onOpenDetail,
  onResetFilters,
}: {
  signals: FutureSignal[];
  savedSignalIds: Set<string>;
  onToggleSave: (id: string) => void;
  onOpenDetail: (id: string) => void;
  onResetFilters: () => void;
}) {
  if (signals.length === 0) {
    return (
      <div className="w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <div className="w-16 h-16 mb-6 rounded-full bg-[var(--future-paper-deep)] flex items-center justify-center border border-[var(--future-line)]">
          <FilterX className="w-6 h-6 text-[var(--future-muted)]" />
        </div>
        <h3 className="text-xl font-playfair text-[var(--future-ink)] mb-3">Tidak ada sinyal yang cocok.</h3>
        <p className="text-[var(--future-charcoal)] font-light text-sm max-w-md mb-8">
          Coba hapus filter status, pilih semua wilayah, atau gunakan kata kunci yang lebih umum.
        </p>
        <button 
          onClick={onResetFilters}
          className="px-6 py-3 bg-[var(--future-ink)] text-[var(--future-paper)] text-xs font-mono font-bold tracking-widest uppercase hover:bg-[var(--future-solar)] hover:text-[var(--future-ink)] transition-colors border border-[var(--future-ink)]"
        >
          Reset Filter
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {signals.map((signal) => (
          <FutureSignalCard
            key={signal.id}
            signal={signal}
            isSaved={savedSignalIds.has(signal.id)}
            onToggleSave={onToggleSave}
            onOpenDetail={onOpenDetail}
          />
        ))}
      </div>
    </div>
  );
}
