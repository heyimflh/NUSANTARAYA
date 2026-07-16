import React from "react";
import { motion } from "framer-motion";
import type { RoutePlannerFormValues } from "@/types/route-planner";
import { getRegionLabel, getProvinceLabel, getInterestLabels } from "@/lib/routes/composePreferenceSummary";
import { Compass, Map as MapIcon, Tag } from "lucide-react";

export function RouteLiveCanvas({ values }: { values: RoutePlannerFormValues }) {
  const regionLabel = getRegionLabel(values.destinationRegionId);
  const originLabel = getProvinceLabel(values.originProvinceId);
  const interestLabels = getInterestLabels(values.interests);
  const hasInput = values.destinationRegionId || values.originProvinceId;

  return (
    <div className="sticky top-28 w-full h-[600px] bg-[var(--route-paper)] rounded-3xl border border-[var(--route-border)] shadow-sm overflow-hidden flex flex-col p-6 isolate">
      {/* Decorative background abstract map lines */}
      <svg className="absolute inset-0 w-full h-full text-[var(--route-border)]/40 pointer-events-none -z-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 100 Q 150 50 300 200 T 600 150" fill="transparent" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
        <path d="M -50 300 Q 200 400 400 250 T 800 400" fill="transparent" stroke="currentColor" strokeWidth="1" />
        <path d="M 200 -50 Q 300 150 150 400 T 300 800" fill="transparent" stroke="currentColor" strokeWidth="1" />
        
        {/* Abstract topographic contours */}
        <circle cx="450" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="450" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="450" cy="150" r="160" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <div className="flex justify-between items-start mb-8">
        <div className="flex flex-col">
          <span className="font-mono text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-widest">
            Canvas Komposisi
          </span>
          <span className="font-playfair text-[18px] text-[var(--route-earth)] italic mt-1">
            Work in progress
          </span>
        </div>
        <Compass className="w-8 h-8 text-[var(--route-saffron)] opacity-50" />
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        {!hasInput ? (
          <div className="text-center flex flex-col items-center opacity-40">
            <MapIcon className="w-12 h-12 text-[var(--route-muted)] mb-4" />
            <p className="font-inter text-[14px] text-[var(--route-muted)]">
              Mulai memilih untuk melihat <br/>komposisi rutemu terbentuk.
            </p>
          </div>
        ) : (
          <div className="w-full h-full relative">
            {/* Origin Node */}
            {originLabel && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-[20%] left-[20%] flex flex-col items-center"
              >
                <div className="w-4 h-4 rounded-full border-2 border-[var(--route-ink)] bg-[var(--route-paper)] z-10" />
                <span className="mt-2 font-inter text-[12px] font-bold text-[var(--route-ink)] uppercase tracking-wider bg-[var(--route-paper)] px-2 py-0.5 rounded border border-[var(--route-border)] shadow-sm">
                  {originLabel}
                </span>
                <span className="font-mono text-[10px] text-[var(--route-muted)] mt-1">DEP</span>
              </motion.div>
            )}

            {/* Route Thread */}
            {originLabel && regionLabel && (
              <motion.svg 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full -z-10"
              >
                {/* A simplified curved path from 20%,20% to 70%,60% */}
                <path 
                  d="M 20% 20% C 50% 20%, 30% 60%, 70% 60%" 
                  fill="transparent" 
                  stroke="var(--route-primary)" 
                  strokeWidth="2" 
                  strokeDasharray="6,6"
                />
              </motion.svg>
            )}

            {/* Destination Node */}
            {regionLabel && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-[60%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border border-[var(--route-primary)] bg-[var(--route-primary)]/10 flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 rounded-full bg-[var(--route-primary)]" />
                </div>
                <span className="mt-3 font-playfair text-[20px] font-bold text-[var(--route-primary)]">
                  {regionLabel}
                </span>
                <span className="font-mono text-[10px] text-[var(--route-primary)]/70 mt-1 uppercase tracking-widest">
                  {values.durationDays} DAYS • {values.travelPace.toUpperCase()}
                </span>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Luggage Tags / Stamps (Interests) */}
      <div className="mt-auto pt-6 border-t border-[var(--route-border)] border-dashed flex flex-wrap gap-2">
        {interestLabels.map((int, i) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const randomRotate = React.useMemo(() => -5 + Math.random() * 10, []);
          return (
            <motion.div 
              key={int}
              initial={{ opacity: 0, y: 10, rotate: randomRotate }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--route-canvas)] border border-[var(--route-border)] rounded-md"
            >
              <Tag className="w-3 h-3 text-[var(--route-muted)]" />
              <span className="font-inter text-[11px] font-bold text-[var(--route-earth)] uppercase tracking-wider">
                {int}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
