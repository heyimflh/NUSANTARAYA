import React from "react";
import { RegionalProfile, RegionId } from "@/types/region";
import { ArchiveItem } from "@/types/archive";
import { Compass, Navigation, Mountain, Leaf, Anchor, Sun, Feather, Flame, Map } from "lucide-react";

interface RegionalMemoryIndexProps {
  regions: RegionalProfile[];
  allItems: ArchiveItem[];
  activeRegionId: RegionId | null;
  onRegionSelect: (id: RegionId | null) => void;
  t: (id: string, en: string) => string;
}

const RegionIconMap: Record<string, React.ElementType> = {
  sumatera: Mountain,
  jawa: Map,
  kalimantan: Leaf,
  sulawesi: Anchor,
  "bali-nusa": Sun,
  maluku: Flame,
  papua: Feather,
};

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
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {regions.map(r => {
            const isActive = activeRegionId === r.id;
            const count = allItems.filter(item => item.provinceIds.some(pid => r.provinceIds.includes(pid))).length;
            const Icon = RegionIconMap[r.id] || Navigation;

            return (
              <button
                key={r.id}
                onClick={() => {
                  onRegionSelect(isActive ? null : r.id);
                  if (!isActive) {
                    setTimeout(() => {
                      document.getElementById("archive-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }
                }}
                className={`group relative overflow-hidden flex flex-col items-start p-6 md:p-8 rounded-2xl text-left transition-all duration-700 border ${
                  isActive 
                    ? "bg-[#FFFDF8] border-[var(--archive-terracotta)] shadow-2xl scale-[1.02] ring-1 ring-[var(--archive-terracotta)]/50" 
                    : "bg-[#fcfaf5] border-[var(--archive-line)] hover:border-[var(--archive-terracotta)]/40 hover:shadow-xl hover:-translate-y-2"
                }`}
              >
                {/* Background Texture/Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${
                  isActive 
                    ? 'from-[var(--archive-terracotta)]/5 to-transparent opacity-100' 
                    : 'from-[var(--archive-paper)] to-[#f4f0e6] opacity-100 group-hover:opacity-0'
                }`}></div>
                
                {/* Large Background Icon (Abstract) */}
                <Icon className={`absolute -bottom-8 -right-8 w-40 h-40 transition-all duration-700 ${
                  isActive 
                    ? 'text-[var(--archive-terracotta)]/10 rotate-12 scale-110' 
                    : 'text-[var(--archive-line)]/40 group-hover:text-[var(--archive-terracotta)]/5 group-hover:rotate-12 group-hover:scale-110'
                }`} strokeWidth={1} />
                
                {/* Top highlight bar */}
                <div className={`absolute top-0 left-0 w-full h-1 transition-all duration-700 ${
                  isActive ? 'bg-[var(--archive-terracotta)]' : 'bg-transparent group-hover:bg-[var(--archive-saffron)]'
                }`}></div>

                {/* Content Container (z-10) */}
                <div className="relative z-10 w-full h-full flex flex-col min-h-[140px]">
                  {/* Icon */}
                  <div className={`mb-8 inline-flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-700 ${
                    isActive 
                      ? 'border-[var(--archive-terracotta)]/50 bg-[var(--archive-terracotta)]/10 text-[var(--archive-terracotta)]' 
                      : 'border-[var(--archive-line)] bg-white text-[var(--archive-ink)]/50 group-hover:border-[var(--archive-terracotta)]/30 group-hover:text-[var(--archive-terracotta)] shadow-sm'
                  }`}>
                    <Icon className={`w-5 h-5 transition-transform duration-700 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  </div>

                  <div className="mt-auto w-full">
                    <h3 className={`font-playfair text-2xl md:text-3xl font-bold mb-3 transition-colors duration-700 ${
                      isActive ? 'text-[var(--archive-terracotta)]' : 'text-[var(--archive-ink)]'
                    }`}>
                      {r.label}
                    </h3>
                    
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-700 ${
                          isActive ? 'text-[var(--archive-terracotta)]' : 'text-[var(--archive-muted)] group-hover:text-[var(--archive-ink)]'
                        }`}>
                          {count} Aset
                        </span>
                        {isActive && (
                          <span className="w-8 h-[1px] bg-[var(--archive-terracotta)]"></span>
                        )}
                      </div>
                      
                      {/* Interactive Arrow */}
                      <div className={`transition-all duration-700 ${
                        isActive 
                          ? 'opacity-100 translate-x-0 text-[var(--archive-terracotta)]' 
                          : 'opacity-0 -translate-x-4 text-[var(--archive-ink)] group-hover:opacity-100 group-hover:translate-x-0'
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
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
