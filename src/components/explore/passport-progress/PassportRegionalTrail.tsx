import React from "react";
import { useRegionalPassportProgress } from "@/hooks/useRegionalPassportProgress";
import { RegionId } from "@/types/region";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { getRegionById } from "@/data/regions/regionProvinceMap";

const REGIONS: RegionId[] = [
  "sumatera",
  "jawa",
  "kalimantan",
  "sulawesi",
  "bali-nusa-tenggara",
  "maluku",
  "papua"
];

const RegionCard = ({ 
  regionId, 
  isActive,
  onExploreMapRegion 
}: { 
  regionId: RegionId, 
  isActive: boolean,
  onExploreMapRegion?: (id: string) => void 
}) => {
  const progress = useRegionalPassportProgress(regionId);
  const regionData = getRegionById(regionId);
  const shouldReduceMotion = useReducedMotion();

  if (!regionData) return null;

  const isCompleted = progress.completedProvinceCount === progress.totalProvinceCount;
  const isStarted = progress.completedProvinceCount > 0 || progress.startedProvinceCount > 0;
  
  let stateLabel = "Belum dimulai";
  if (isCompleted) stateLabel = "Wilayah lengkap";
  else if (progress.completedProvinceCount === progress.totalProvinceCount - 1) stateLabel = "Satu provinsi lagi";
  else if (isStarted) stateLabel = "Sedang dijelajahi";

  return (
    <motion.div
      whileHover={!shouldReduceMotion ? { y: -2 } : {}}
      className={cn(
        "flex flex-col bg-[#FFFDF8] rounded-2xl border p-4 md:p-5 min-w-[260px] md:min-w-[280px] shrink-0 snap-start transition-all duration-300",
        isActive ? "border-nusaGold shadow-md" : "border-[#E8E0CE] shadow-sm hover:border-nusaGold/50 hover:shadow-md"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <h5 className="font-serif font-bold text-lg text-nusaNavy">
          {regionData.label}
        </h5>
        <div className={cn(
          "px-2 py-1 rounded text-xs font-bold",
          isCompleted ? "bg-[#2D6A4F]/10 text-[#2D6A4F]" : "bg-[#F8F4EA] text-muted-foreground"
        )}>
          {progress.completedProvinceCount}/{progress.totalProvinceCount}
        </div>
      </div>

      {/* Mini Progress Bar */}
      <div className="flex gap-1 h-1.5 mb-3">
        {Array.from({ length: progress.totalProvinceCount }).map((_, i) => {
          let bgClass = "bg-[#E8E0CE]";
          if (i < progress.completedProvinceCount) bgClass = "bg-nusaGold";
          else if (i < progress.completedProvinceCount + progress.startedProvinceCount) bgClass = "bg-[#8B2020]/60";
          return (
            <div key={i} className={cn("flex-1 rounded-full", bgClass)} />
          )
        })}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-xs font-medium text-muted-foreground">
          {stateLabel}
        </span>
        
        {onExploreMapRegion && (
          <button 
            onClick={() => onExploreMapRegion(regionId)}
            className="text-xs font-bold text-nusaGold hover:text-nusaNavy transition-colors"
          >
            Lihat di Peta
          </button>
        )}
      </div>
    </motion.div>
  );
};

type PassportRegionalTrailProps = {
  activeRegionId?: RegionId | null;
  onExploreMapRegion?: (id: string) => void;
};

export const PassportRegionalTrail: React.FC<PassportRegionalTrailProps> = ({ 
  activeRegionId,
  onExploreMapRegion 
}) => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } },
  };

  return (
    <motion.div variants={containerVariants} className="w-full mt-2">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Jejak per Wilayah
        </h4>
      </div>
      
      {/* Horizontal Snap Rail */}
      <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory px-1 -mx-1">
        {REGIONS.map((regionId) => (
          <RegionCard 
            key={regionId} 
            regionId={regionId} 
            isActive={activeRegionId === regionId}
            onExploreMapRegion={onExploreMapRegion}
          />
        ))}
      </div>
    </motion.div>
  );
};
