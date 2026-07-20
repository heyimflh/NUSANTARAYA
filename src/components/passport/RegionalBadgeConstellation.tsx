"use client";

import { RegionalProgress } from "@/types/region";
import { getRegionById } from "@/data/regions/regionProvinceMap";
import { BadgeWilayah } from "@/lib/types";
import { getBadgeAsset } from "@/lib/passport/badges";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const RegionalBadgeConstellation = ({ regionalProgress }: { regionalProgress: RegionalProgress[] }) => {
  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-serif text-[#2B211B] font-bold">Tujuh Wilayah, Tujuh Cerita Pencapaian</h2>
        <div className="h-[1px] flex-1 bg-[#DCCDB8]" />
      </div>
      <p className="text-[#786B60] text-sm mb-12 -mt-4">
        Lengkapi seluruh provinsi dalam satu wilayah untuk membuka badge regional eksklusif.
      </p>

      {/* Grid of Badges - Constellation Layout (or simple grid) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />

        {regionalProgress.map((progress) => {
          const region = getRegionById(progress.regionId);
          if (!region) return null;

          // Mapping region ID to BadgeWilayah id based on standard.
          const badgeIdMap: Record<string, BadgeWilayah> = {
            "sumatera": "Sumatra Seeker",
            "jawa": "Java Heritage Keeper",
            "kalimantan": "Borneo Nature Guardian",
            "sulawesi": "Celebes Voyager",
            "bali-nusa-tenggara": "Bali-Nusa Wanderer",
            "maluku": "Maluku Spice Explorer",
            "papua": "Papua Wonder Seeker",
          };

          const badgeId = badgeIdMap[progress.regionId];
          const isUnlocked = progress.badgeUnlocked;
          const badgeAsset = getBadgeAsset(badgeId);
          
          const completionPercent = Math.round((progress.completedProvinceCount / progress.totalProvinceCount) * 100);

          return (
            <div 
              key={progress.regionId} 
              className={cn(
                "group relative bg-[#FFFCF6] border rounded-2xl p-6 text-center transition-all duration-300",
                isUnlocked 
                  ? "border-[#A77B32] shadow-[0_8px_30px_rgba(167,123,50,0.1)] hover:-translate-y-1" 
                  : "border-[#DCCDB8] hover:border-[#A77B32]/50"
              )}
            >
              <div className={cn(
                "w-28 h-28 mx-auto mb-6 relative transition-all duration-500",
                isUnlocked ? "scale-100 opacity-100" : "scale-95 opacity-40 grayscale sepia"
              )}>
                {badgeAsset ? (
                  <Image
                    src={badgeAsset}
                    alt={badgeId}
                    fill
                    className="object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#A77B32] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#A77B32]">{region.shortLabel}</span>
                  </div>
                )}
              </div>
              
              <h4 className="font-serif font-bold text-[#2B211B] text-lg mb-1">{badgeId}</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#786B60] mb-4">{region.label}</p>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#3A281F]">{progress.completedProvinceCount} / {progress.totalProvinceCount}</span>
                  <span className="text-[#B85C38]">{completionPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#F3EBDD] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#B85C38] rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
