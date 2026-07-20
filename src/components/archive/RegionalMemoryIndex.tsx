import React from "react";
import { RegionalProfile, RegionId } from "@/types/region";
import { ArchiveItem } from "@/types/archive";

interface RegionalMemoryIndexProps {
  regions: RegionalProfile[];
  allItems: ArchiveItem[];
  activeRegionId: RegionId | null;
  onRegionSelect: (id: RegionId | null) => void;
  t: (id: string, en: string) => string;
}

export function RegionalMemoryIndex({ regions, allItems, activeRegionId, onRegionSelect, t }: RegionalMemoryIndexProps) {
  return (
    <section className="archive-surface-deep py-16 border-b border-[var(--archive-line)]">
      <div className="archive-container">
        <h2 className="archive-h2 mb-4">{t("Indeks Memori Regional", "Regional Memory Index")}</h2>
        <p className="archive-body text-[var(--archive-muted)] mb-10 max-w-2xl">
          {t("Jelajahi arsip berdasarkan wilayah geografis.", "Explore archives by geographical region.")}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {regions.map(r => (
            <button
              key={r.id}
              onClick={() => onRegionSelect(activeRegionId === r.id ? null : r.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors border ${
                activeRegionId === r.id 
                  ? "bg-[var(--archive-ink)] text-[var(--archive-canvas)] border-[var(--archive-ink)]" 
                  : "bg-[var(--archive-paper)] text-[var(--archive-charcoal)] border-[var(--archive-line)] hover:border-[var(--archive-charcoal)]"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
