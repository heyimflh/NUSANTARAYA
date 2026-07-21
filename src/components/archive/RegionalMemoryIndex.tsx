import React from "react";
import { RegionalProfile, RegionId } from "@/types/region";
import { ArchiveItem } from "@/types/archive";
import { Map, Compass, Navigation } from "lucide-react";

interface RegionalMemoryIndexProps {
  regions: RegionalProfile[];
  allItems: ArchiveItem[];
  activeRegionId: RegionId | null;
  onRegionSelect: (id: RegionId | null) => void;
  t: (id: string, en: string) => string;
}

export function RegionalMemoryIndex({ regions, allItems, activeRegionId, onRegionSelect, t }: RegionalMemoryIndexProps) {
  return (
    <section className="bg-transparent relative py-24 border-b border-[var(--archive-line)]/60 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--archive-terracotta)] blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--archive-teal)] blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="archive-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--archive-line)] bg-[var(--archive-paper)]/50 backdrop-blur-sm mb-6">
              <Compass className="w-4 h-4 text-[var(--archive-saffron)]" />
              <span className="archive-eyebrow !mb-0 tracking-widest text-[var(--archive-ink)]">Geographical Index</span>
            </div>
            <h2 className="archive-display text-4xl md:text-6xl mb-4 text-[var(--archive-ink)] font-bold">{t("Indeks Memori Regional", "Regional Memory Index")}</h2>
            <p className="text-lg md:text-xl text-[var(--archive-muted)] font-inter leading-relaxed">
              {t("Jelajahi lanskap arsip Nusantara berdasarkan garis lintang dan bujur kepulauan. Setiap wilayah menyimpan corak budaya dan kearifan ekologisnya masing-masing.", "Explore the archive landscape of Nusantara across its archipelagic latitudes. Each region holds its own distinct cultural patterns and ecological wisdom.")}
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full border border-[var(--archive-line)] bg-[var(--archive-paper)]/30 backdrop-blur-md">
            <Map className="w-10 h-10 text-[var(--archive-muted)] opacity-50" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {regions.map(r => {
            const isActive = activeRegionId === r.id;
            // Get count of items in this region
            const count = allItems.filter(item => item.provinceIds.some(pid => r.provinceIds.includes(pid))).length;

            return (
              <button
                key={r.id}
                onClick={() => onRegionSelect(isActive ? null : r.id)}
                className={`group relative overflow-hidden flex flex-col items-start p-6 rounded-2xl text-left transition-all duration-500 border ${
                  isActive 
                    ? "bg-[var(--archive-ink)] border-[var(--archive-ink)] shadow-2xl scale-[1.02]" 
                    : "bg-[var(--archive-paper)]/80 backdrop-blur-md border-[var(--archive-line)] hover:border-[var(--archive-terracotta)]/50 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isActive ? 'opacity-20' : ''}`}></div>
                
                <div className={`mb-6 p-3 rounded-full transition-colors duration-500 ${isActive ? 'bg-[var(--archive-paper)]/10' : 'bg-[var(--archive-canvas)] group-hover:bg-[var(--archive-saffron-soft)]'}`}>
                  <Navigation className={`w-6 h-6 ${isActive ? 'text-[var(--archive-canvas)]' : 'text-[var(--archive-muted)] group-hover:text-[var(--archive-terracotta)]'}`} />
                </div>

                <div className="mt-auto">
                  <h3 className={`font-playfair text-xl md:text-2xl font-bold mb-2 transition-colors duration-500 ${isActive ? 'text-[var(--archive-canvas)]' : 'text-[var(--archive-ink)]'}`}>
                    {r.label}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium tracking-wider uppercase ${isActive ? 'text-[var(--archive-paper-deep)]' : 'text-[var(--archive-muted)]'}`}>
                      {count} Aset
                    </span>
                    {isActive && (
                      <span className="w-12 h-[1px] bg-[var(--archive-saffron)] ml-2"></span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
