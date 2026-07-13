import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { RegionalProfile } from "@/types/region";
import { provinceMapData } from "@/data/provinces/provinces";

interface RegionalProvinceRailProps {
  region: RegionalProfile;
  selectedProvinceId: string | null;
  onSelectProvince: (id: string) => void;
  onOpenAtlas: (id: string) => void;
}

export function RegionalProvinceRail({ region, selectedProvinceId, onSelectProvince, onOpenAtlas }: RegionalProvinceRailProps) {
  
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
    <div className="w-full mt-8">
      <div className="flex items-center justify-between mb-4 px-1">
        <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--region-muted)]">
          Provinsi dalam Wilayah
        </h4>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
        {sortedProvinces.map((province) => {
          const isSelected = province.id === selectedProvinceId;
          
          return (
            <div 
              key={province.id}
              className={`
                snap-start flex-shrink-0 w-[200px] md:w-[240px] flex flex-col bg-[var(--region-paper)] rounded-2xl overflow-hidden border transition-all duration-300
                ${isSelected 
                  ? "border-[var(--region-gold)] shadow-md ring-1 ring-[var(--region-gold)]/20 scale-[1.02]" 
                  : "border-[var(--region-border)] hover:border-[var(--region-border)]/80 hover:shadow-sm"
                }
              `}
            >
              {/* Thumbnail */}
              <div 
                className="relative h-[120px] bg-[var(--region-canvas)] cursor-pointer group"
                onClick={() => onSelectProvince(province.id)}
              >
                <Image
                  src={province.assets.thumb}
                  alt={`Thumbnail ${province.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="240px"
                />
                {province.isFlagship && (
                  <div className="absolute top-2 right-2 bg-[var(--region-ink)]/80 backdrop-blur-sm text-[var(--region-gold)] p-1.5 rounded-full">
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                )}
                {isSelected && (
                  <div className="absolute top-2 left-2 bg-[var(--region-gold)] text-[var(--region-ink)] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Dipilih
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <h5 className="font-semibold text-[var(--region-ink)] text-sm mb-1 leading-tight line-clamp-1">
                    {province.name}
                  </h5>
                  <p className="text-[11px] text-[var(--region-muted)] line-clamp-2 leading-relaxed">
                    {province.summary}
                  </p>
                </div>
                
                {/* Actions */}
                <div className="mt-auto flex gap-2">
                  <button 
                    onClick={() => onSelectProvince(province.id)}
                    className="flex-1 py-1.5 text-xs font-semibold bg-[var(--region-canvas)] text-[var(--region-ink)] rounded-lg hover:bg-[var(--region-border)]/50 transition-colors"
                  >
                    Buka Ringkasan
                  </button>
                  <button 
                    onClick={() => onOpenAtlas(province.id)}
                    className="flex-1 py-1.5 text-xs font-semibold text-[var(--region-muted)] hover:text-[var(--region-ink)] transition-colors"
                  >
                    Atlas
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
