import React from "react";
import { motion } from "framer-motion";
import { RegionId } from "@/types/region";
import { regions } from "@/data/regions/regions";

interface RegionSelectorProps {
  activeRegionId: RegionId;
  onSelect: (id: RegionId) => void;
}

export function RegionSelector({ activeRegionId, onSelect }: RegionSelectorProps) {
  return (
    <div className="w-full xl:w-[22%] flex-shrink-0 flex xl:flex-col gap-2 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 scrollbar-hide snap-x snap-mandatory">
      {regions.map((region) => {
        const isActive = activeRegionId === region.id;
        
        return (
          <button
            key={region.id}
            onClick={() => onSelect(region.id)}
            aria-current={isActive ? "page" : undefined}
            className={`
              snap-start relative flex items-center text-left gap-3 px-4 xl:px-5 py-3 xl:py-4 rounded-2xl xl:rounded-3xl transition-all duration-300 flex-shrink-0 min-w-[140px] xl:min-w-0
              ${isActive 
                ? "bg-[var(--region-paper)] shadow-sm border border-[var(--region-gold)]/40" 
                : "hover:bg-[var(--region-paper)]/50 border border-transparent"
              }
            `}
          >
            {/* Active Indicator Line */}
            {isActive && (
              <motion.div 
                layoutId="activeRegionIndicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--region-gold)] rounded-r-full hidden xl:block"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] xl:text-xs font-bold tracking-widest text-[var(--region-muted)] uppercase">
                {String(region.index).padStart(2, '0')}
              </span>
              <span className={`text-sm xl:text-base font-semibold transition-colors duration-300 ${isActive ? "text-[var(--region-ink)]" : "text-[var(--region-ink)]/70"}`}>
                <span className="xl:hidden">{region.shortLabel}</span>
                <span className="hidden xl:inline">{region.label}</span>
              </span>
              <span className="text-[11px] xl:text-xs text-[var(--region-muted)] hidden xl:block mt-1">
                {region.provinceIds.length} Provinsi
              </span>
            </div>
            
            {/* Mobile Count Badge */}
            <div className="xl:hidden ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-[var(--region-muted)]/10 text-[10px] font-bold text-[var(--region-ink)]/70">
              {region.provinceIds.length}
            </div>
          </button>
        );
      })}
    </div>
  );
}
