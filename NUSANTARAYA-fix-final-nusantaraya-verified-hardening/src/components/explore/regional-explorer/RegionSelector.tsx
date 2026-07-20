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
    <div className="w-full xl:w-[18%] xl:max-w-[220px] flex-shrink-0 flex xl:flex-col gap-1.5 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 scrollbar-hide snap-x snap-mandatory">
      {regions.map((region) => {
        const isActive = activeRegionId === region.id;
        
        return (
          <button
            key={region.id}
            onClick={() => onSelect(region.id)}
            aria-current={isActive ? "page" : undefined}
            className={`
              group relative flex items-center text-left gap-3 px-4 xl:px-4 py-2.5 xl:py-3.5 rounded-xl xl:rounded-l-xl xl:rounded-r-none transition-all duration-300 flex-shrink-0 min-w-[140px] xl:min-w-0
              ${isActive 
                ? "bg-[var(--atlas-paper)] shadow-[-2px_0_8px_rgba(36,42,46,0.03)] border border-[var(--atlas-line)] xl:border-r-0 z-10 xl:translate-x-1" 
                : "bg-transparent hover:bg-[var(--atlas-paper-aged)]/40 border border-transparent xl:border-r-[var(--atlas-line)] text-[var(--atlas-ink-soft)] hover:text-[var(--atlas-ink)]"
              }
            `}
          >
            {isActive && (
              <motion.div 
                layoutId="activeRegionIndicator"
                className="absolute left-0 top-5 bottom-5 w-[3px] bg-[var(--atlas-gold)] rounded-full hidden xl:block"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            <div className="flex flex-col gap-0.5 w-full">
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] xl:text-[11px] font-bold tracking-[0.1em] uppercase transition-colors ${isActive ? "text-[var(--atlas-gold)]" : "text-[var(--atlas-ink-soft)] group-hover:text-[var(--atlas-ink)]"}`}>
                  {String(region.index).padStart(2, '0')}
                </span>
                <div className={`xl:hidden flex items-center justify-center w-5 h-5 rounded-full border text-[10px] font-medium transition-colors ${isActive ? "border-[var(--atlas-gold)] bg-[var(--atlas-gold)]/10 text-[var(--atlas-gold)]" : "border-[var(--atlas-line)] bg-[var(--atlas-paper-aged)] text-[var(--atlas-ink-soft)]"}`}>
                  {region.provinceIds.length}
                </div>
              </div>
              <span className={`font-serif text-sm xl:text-[16px] transition-colors duration-300 ${isActive ? "text-[var(--atlas-ink)] font-bold" : "text-[var(--atlas-ink-soft)] font-medium"}`}>
                <span className="xl:hidden">{region.shortLabel}</span>
                <span className="hidden xl:inline">{region.label}</span>
              </span>
              <span className={`text-[11px] transition-colors hidden xl:block ${isActive ? "text-[var(--atlas-ink-soft)]" : "text-[var(--atlas-ink-soft)]/70"}`}>
                {region.provinceIds.length} Provinsi
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
