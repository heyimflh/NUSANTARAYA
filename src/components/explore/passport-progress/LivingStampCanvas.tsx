import React, { useMemo } from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getStampAsset } from "@/lib/passport/assetMap";
import { getRegionById, getAllRegionIds } from "@/data/regions/regionProvinceMap";
import { Button } from "@/components/ui/button";

type LivingStampCanvasProps = {
  summary: PassportProgressSummary;
  onOpenAtlas?: (provinceId: string) => void;
};

export const LivingStampCanvas: React.FC<LivingStampCanvasProps> = ({ summary, onOpenAtlas }) => {
  const shouldReduceMotion = useReducedMotion();

  // Pick up to 8 random but deterministic stamps to display from completed
  const displayStamps = useMemo(() => {
    return [...summary.completed]
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 8);
  }, [summary.completed]);

  const hasNoProgress = summary.completedCount === 0;

  return (
    <div className="w-full px-4 md:px-12 max-w-7xl mx-auto mb-16 md:mb-24">
      {/* The Canvas */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] bg-[#EFE1C5] shadow-[0_20px_60px_rgba(44,33,24,0.1)]">
        
        {/* Paper Textures */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
        
        {/* Torn Edge Effect - Top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-[url('/assets/ui/torn-edge-top.svg')] bg-repeat-x opacity-20 pointer-events-none" />
        
        {/* The Fold / Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 w-12 -ml-6 bg-gradient-to-r from-transparent via-[#2C2118]/10 to-transparent mix-blend-multiply pointer-events-none hidden md:block" />

        <div className="absolute inset-0 p-8 md:p-16 flex flex-col md:flex-row gap-8 md:gap-16 pb-24 md:pb-32 overflow-hidden">
          
          {/* Left Page: Level Seal & Info */}
          <div className="flex-1 flex flex-col relative z-10">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7A302B] mb-8 md:mb-12">
              Koleksi Jejak
            </h4>
            
            {hasNoProgress ? (
              <div className="flex-1 flex flex-col items-start justify-center max-w-md">
                <h3 className="font-serif text-4xl md:text-5xl text-[#2C2118] leading-tight mb-4">
                  Stempel Pertamamu Menunggu.
                </h3>
                
                {summary.startedCount > 0 ? (
                  <>
                    <p className="text-[#3A281C] mb-8 text-base md:text-lg">
                      Kamu sudah mulai menjelajahi {summary.startedCount} provinsi. Lanjutkan salah satunya untuk memperoleh jejak pertama.
                    </p>
                    <div className="flex gap-4">
                      {summary.started[0] && (
                        <Button 
                          onClick={() => onOpenAtlas && onOpenAtlas(summary.started[0])}
                          className="bg-[#B85C38] hover:bg-[#A04D2D] text-[#FFF9EC] rounded-none uppercase tracking-wider text-[11px] font-bold px-8 h-12"
                        >
                          Lanjutkan Ekspedisi
                        </Button>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-[#3A281C] text-base md:text-lg">
                    Pilih satu provinsi dan buka Atlas untuk memulai perjalanan pertamamu di Nusantara.
                  </p>
                )}
              </div>
            ) : (
              <div className="flex-1 flex flex-col">
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 drop-shadow-[0_10px_20px_rgba(122,48,43,0.3)] group">
                  <Image 
                    src={`/assets/passport/levels/${summary.currentLevel.toLowerCase().replace(/ /g, '-')}.png`} 
                    alt={summary.currentLevel}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/noise.webp";
                    }}
                  />
                </div>
                
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#776A5D] mb-1">
                  Level Saat Ini
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-[#2C2118] font-bold mb-2">
                  {summary.currentLevel}
                </h3>
                <p className="text-sm text-[#7A302B] font-medium max-w-[200px]">
                  {summary.nextLevel !== null 
                    ? `${summary.stampsToNextLevel} stempel lagi menuju level berikutnya` 
                    : "Level Maksimal"}
                </p>
              </div>
            )}
          </div>

          {/* Right Page: Stamp Canvas */}
          <div className="flex-1 relative min-h-[300px] w-full mt-8 md:mt-0">
            {hasNoProgress && (
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-48 h-48 border-2 border-dashed border-[#D8C8A8] rounded-full flex flex-col items-center justify-center text-center p-6">
                  <span className="text-4xl mb-2">🏛️</span>
                  <span className="text-[10px] uppercase tracking-widest text-[#776A5D] font-bold">Tempat Stempel Pertamamu</span>
                </div>
              </div>
            )}

            {!hasNoProgress && displayStamps.map((id, index) => {
              const src = getStampAsset(id);
              if (!src) return null;
              
              const xPos = [10, 55, 20, 65, 30, 75, 5, 45][index % 8];
              const yPos = [5, 20, 45, 55, 75, 10, 35, 80][index % 8];
              const rot = [-12, 8, -5, 15, -8, 12, -15, 6][index % 8];
              
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                  className="absolute"
                  style={{
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    transform: `rotate(${rot}deg)`,
                  }}
                >
                  <div className="relative w-28 h-28 md:w-40 md:h-40 opacity-90 mix-blend-multiply drop-shadow-sm hover:z-10 hover:opacity-100 hover:scale-105 transition-all duration-300">
                    <Image src={src} alt={`Stempel ${id}`} fill className="object-contain" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Progress Marks - Perforated style at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 border-t border-[#D8C8A8] bg-[#FFF9EC]/60 flex items-center px-8 md:px-12 overflow-x-auto hide-scrollbar z-20">
          <div className="flex items-center w-max">
            {getAllRegionIds().map((regionId) => {
              const region = getRegionById(regionId);
              if (!region) return null;
              
              const count = region.provinceIds.length;
              const completedCount = region.provinceIds.filter(id => summary.completed.includes(id)).length;
              
              return (
                <div key={regionId} className="flex gap-2 items-center mr-8 md:mr-12 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#776A5D] mr-2">
                    {region.shortLabel}
                  </span>
                  {Array.from({ length: count }).map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-2.5 h-4 transition-colors duration-500",
                        i < completedCount 
                          ? "bg-[#2C2118]" 
                          : "bg-transparent border border-[#D8C8A8]"
                      )}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
