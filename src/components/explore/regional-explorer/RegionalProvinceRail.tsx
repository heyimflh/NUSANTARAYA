import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { RegionalProfile } from "@/types/region";
import { provinceMapData } from "@/data/provinces/provinces";

import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { LAYER_COLORS } from "@/lib/layerColors";

interface RegionalProvinceRailProps {
  region: RegionalProfile;
  selectedProvinceId: string | null;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  onSelectProvince: (id: string) => void;
  onOpenAtlas: (id: string) => void;
}

export function RegionalProvinceRail({ 
  region, 
  selectedProvinceId, 
  activeLayer, 
  activeMode, 
  onSelectProvince, 
  onOpenAtlas 
}: RegionalProvinceRailProps) {
  
  // Get province data mapping
  const provinces = region.provinceIds.map(id => provinceMapData.find(p => p.id === id)).filter(Boolean) as typeof provinceMapData;
  
  // Sorting: selected first, then flagship, then the rest
  const sortedProvinces = [...provinces].sort((a, b) => {
    if (a.id === selectedProvinceId) return -1;
    if (b.id === selectedProvinceId) return 1;
    if (a.isFlagship && !b.isFlagship) return -1;
    if (!a.isFlagship && b.isFlagship) return 1;
    return 0;
  });

  return (
    <div className="w-full mt-10">
      <div className="flex items-center gap-2 mb-6 px-1">
        <span className="w-4 h-px bg-[var(--atlas-gold)]"></span>
        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--atlas-ink-soft)]">
          Catatan Lapangan Provinsi
        </h4>
      </div>
      
      <div className="flex gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-1">
        {sortedProvinces.map((province) => {
          const isSelected = province.id === selectedProvinceId;
          const layerRelevance = activeLayer !== 'all' && province.categories.includes(activeLayer);
          const accentColor = layerRelevance ? LAYER_COLORS[activeLayer].fill : 'var(--atlas-gold)';
          
          return (
            <div 
              key={province.id}
              className={`
                snap-start flex-shrink-0 w-[220px] md:w-[260px] flex flex-col bg-[var(--atlas-paper)] rounded-lg overflow-hidden transition-all duration-300 relative group
                ${isSelected 
                  ? "shadow-[0_8px_24px_rgba(36,42,46,0.08)] scale-[1.02] border-t-4 z-10" 
                  : "border border-[var(--atlas-line)] shadow-[0_2px_8px_rgba(36,42,46,0.03)] hover:shadow-[0_6px_16px_rgba(36,42,46,0.06)] hover:-translate-y-1"
                }
              `}
              style={isSelected ? { borderTopColor: accentColor } : {}}
            >
              {/* Ticket Edge Effects */}
              <div className="absolute top-[100px] -left-1.5 w-3 h-3 bg-[var(--atlas-canvas)] rounded-full border-r border-[var(--atlas-line)] z-20 hidden md:block"></div>
              <div className="absolute top-[100px] -right-1.5 w-3 h-3 bg-[var(--atlas-canvas)] rounded-full border-l border-[var(--atlas-line)] z-20 hidden md:block"></div>
              
              <div className="absolute top-[106px] left-0 w-full border-t-[1.5px] border-dashed border-[var(--atlas-line)] opacity-60 z-20"></div>

              {/* Thumbnail */}
              <div 
                className="relative h-[100px] bg-[var(--atlas-canvas)] cursor-pointer overflow-hidden p-2"
                onClick={() => onSelectProvince(province.id)}
              >
                <div className="relative w-full h-full rounded bg-[var(--atlas-paper-aged)] overflow-hidden border border-[var(--atlas-line)]/50">
                  <Image
                    src={province.assets.thumb}
                    alt={`Thumbnail ${province.name}`}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110 ${!layerRelevance && activeLayer !== 'all' ? 'grayscale opacity-70' : ''}`}
                    sizes="240px"
                  />
                  {/* Photo Corner Effects */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50 z-10"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/50 z-10"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/50 z-10"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50 z-10"></div>
                </div>
                
                {province.isFlagship && (
                  <div className="absolute -top-1 -right-1 bg-[var(--atlas-ink)] backdrop-blur-sm text-[var(--atlas-gold)] p-1.5 rounded-bl-lg rounded-tr-lg shadow-sm border border-[var(--atlas-gold)]/20 z-20">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                )}
                {isSelected && (
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[var(--atlas-ink)] text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded shadow-sm z-20">
                    Dipilih
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5 pt-6 flex flex-col flex-1 bg-gradient-to-b from-[var(--atlas-paper)] to-[var(--atlas-canvas)]/30">
                <div className="flex-1">
                  <h5 className="font-serif font-bold text-[var(--atlas-ink)] text-base mb-2 leading-tight line-clamp-1 group-hover:text-[var(--atlas-gold)] transition-colors">
                    {province.name}
                  </h5>
                  <p className="text-[12px] text-[var(--atlas-ink-soft)] line-clamp-3 leading-relaxed font-serif italic opacity-90">
                    {province.summary}
                  </p>
                </div>
                
                {/* Actions */}
                <div className="mt-5 flex items-center justify-between border-t border-[var(--atlas-line)]/50 pt-3">
                  <button 
                    onClick={() => onSelectProvince(province.id)}
                    className="text-[11px] font-bold tracking-widest uppercase text-[var(--atlas-ink)] hover:text-[var(--atlas-gold)] transition-colors flex items-center gap-1"
                  >
                    Ringkasan
                  </button>
                  <button 
                    onClick={() => onOpenAtlas(province.id)}
                    className="text-[11px] font-bold tracking-widest uppercase text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-ink)] transition-colors"
                  >
                    Buka Atlas
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
