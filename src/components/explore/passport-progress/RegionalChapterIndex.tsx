import React, { useState } from "react";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { getRegionById, getAllRegionIds } from "@/data/regions/regionProvinceMap";
import { RegionId } from "@/types/region";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

type RegionalChapterIndexProps = {
  activeRegionId?: RegionId | null;
  onExploreMapRegion?: (id: string) => void;
};

// Sub-component for individual region row
const RegionalChapterRow = ({ 
  regionId, 
  index, 
  isActive, 
  isExpanded,
  onToggle,
  onExploreMapRegion 
}: { 
  regionId: RegionId; 
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onExploreMapRegion?: (id: string) => void;
}) => {
  const progress = useRegionalPassportProgress(regionId);
  const regionData = getRegionById(regionId);

  if (!regionData) return null;

  const isCompleted = progress.completedProvinceCount === progress.totalProvinceCount;
  const isStarted = progress.completedProvinceCount > 0 || progress.startedProvinceCount > 0;
  
  let stateLabel = "BELUM DIMULAI";
  if (isCompleted) stateLabel = "WILAYAH LENGKAP";
  else if (progress.completedProvinceCount === progress.totalProvinceCount - 1) stateLabel = "1 PROVINSI LAGI";
  else if (isStarted) stateLabel = "SEDANG DIJELAJAHI";

  return (
    <div className={cn(
      "border-b border-[#D8C8A8] transition-colors duration-300",
      isExpanded ? "bg-[#FFF9EC]" : "hover:bg-[#FFF9EC]/50"
    )}>
      <button 
        onClick={onToggle}
        className="w-full py-6 md:py-8 flex items-center justify-between text-left group px-6 md:px-12 relative"
        aria-expanded={isExpanded}
      >
        {/* Active Marker */}
        {(isActive || isExpanded) && (
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#B85C38]" />
        )}

        <div className="flex items-center gap-6 md:gap-16 w-full">
          <span className="font-serif text-xl md:text-2xl text-[#C87532] font-bold w-8 shrink-0 opacity-70">
            {String(index).padStart(2, '0')}
          </span>
          <h3 className={cn(
            "font-serif text-2xl md:text-4xl font-bold tracking-tight flex-1 transition-colors duration-300",
            isExpanded ? "text-[#B85C38]" : "text-[#2C2118] group-hover:text-[#3A281C]"
          )}>
            {regionData.label}
          </h3>
          <div className="hidden md:flex items-center gap-8 shrink-0">
            <span className="text-sm font-bold text-[#776A5D]">
              {progress.completedProvinceCount} / {progress.totalProvinceCount}
            </span>
            <span className={cn(
              "text-[10px] font-bold uppercase tracking-[0.2em] w-40 text-right transition-colors",
              isCompleted ? "text-[#B85C38]" : "text-[#7A302B]"
            )}>
              {stateLabel}
            </span>
          </div>
          <ChevronDown className={cn(
            "w-5 h-5 text-[#776A5D] transition-transform duration-300 shrink-0 md:hidden",
            isExpanded && "rotate-180"
          )} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-6 md:px-12 ml-0 md:ml-24 flex flex-col md:flex-row gap-8 md:gap-16">
              
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-6 mb-6">
                  {/* Mobile stats */}
                  <div className="md:hidden flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#776A5D]">Progress</span>
                    <span className="text-sm font-bold text-[#2C2118]">{progress.completedProvinceCount} / {progress.totalProvinceCount} Selesai</span>
                  </div>
                  <div className="md:hidden flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#776A5D]">Status</span>
                    <span className="text-[10px] font-bold uppercase text-[#7A302B] tracking-widest">{stateLabel}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 border-t border-[#D8C8A8] pt-6">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#776A5D] mb-1">Direncanakan</span>
                    <span className="text-lg font-serif text-[#2C2118]">{progress.plannedProvinceCount}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#776A5D] mb-1">Mulai Dijelajahi</span>
                    <span className="text-lg font-serif text-[#2C2118]">{progress.startedProvinceCount}</span>
                  </div>
                </div>
                
                {onExploreMapRegion && (
                  <button 
                    onClick={() => onExploreMapRegion(regionId)}
                    className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C2118] hover:text-[#B85C38] transition-colors"
                  >
                    Lihat Peta Wilayah Ini
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>

              <div className="shrink-0 w-full md:w-64 border-t md:border-t-0 md:border-l border-[#D8C8A8] pt-6 md:pt-0 md:pl-16 flex flex-col items-start md:items-center text-left md:text-center">
                {isCompleted ? (
                  <>
                    <div className="relative w-24 h-24 mb-4 drop-shadow-md">
                      <Image 
                        src={`/assets/passport/badges/regions/${regionId}.png`} 
                        alt={`Badge ${regionData.label}`}
                        fill
                        className="object-contain"
                        onError={(e) => { e.currentTarget.src = "/assets/noise.webp"; }}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#B85C38] bg-[#B85C38]/10 px-3 py-1 rounded-sm">
                      Chapter Complete
                    </span>
                  </>
                ) : (
                  <>
                    <div className="relative w-24 h-24 mb-4 opacity-30 grayscale sepia mix-blend-multiply">
                      <Image 
                        src={`/assets/passport/badges/regions/${regionId}.png`} 
                        alt="Locked Badge"
                        fill
                        className="object-contain blur-[2px]"
                        onError={(e) => { e.currentTarget.src = "/assets/noise.webp"; }}
                      />
                    </div>
                    <span className="text-[10px] text-center max-w-[160px] font-bold uppercase tracking-widest text-[#776A5D]">
                      {progress.totalProvinceCount - progress.completedProvinceCount} provinsi lagi untuk membuka badge
                    </span>
                  </>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RegionalChapterIndex = ({ activeRegionId, onExploreMapRegion }: RegionalChapterIndexProps) => {
  const regions = getAllRegionIds();
  const [expandedId, setExpandedId] = useState<RegionId | null>(activeRegionId || null);

  const handleToggle = (id: RegionId) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-16 md:mb-24 mt-16 md:mt-24">
      <div className="px-6 md:px-12 mb-8 md:mb-12">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7A302B] mb-2">
          Jejak per Wilayah
        </h4>
        <h2 className="font-serif text-3xl md:text-5xl text-[#2C2118] font-bold">
          Regional Chapter Index
        </h2>
      </div>

      <div className="border-t border-[#D8C8A8]">
        {regions.map((regionId, index) => (
          <RegionalChapterRow 
            key={regionId}
            regionId={regionId}
            index={index + 1}
            isActive={activeRegionId === regionId}
            isExpanded={expandedId === regionId}
            onToggle={() => handleToggle(regionId)}
            onExploreMapRegion={onExploreMapRegion}
          />
        ))}
      </div>
    </div>
  );
};
