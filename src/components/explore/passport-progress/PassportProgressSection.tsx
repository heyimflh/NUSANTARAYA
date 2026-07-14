"use client";

import React, { useState, useEffect } from "react";
import { PassportBookVisual } from "./PassportBookVisual";
import { PassportProgressDossier } from "./PassportProgressDossier";
import { PassportRegionalTrail } from "./PassportRegionalTrail";
import { PassportMilestoneCards } from "./PassportMilestoneCards";
import { usePassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { RegionId } from "@/types/region";
import { motion, useReducedMotion } from "framer-motion";

type PassportProgressSectionProps = {
  highlightedRegionId?: RegionId | null;
  selectedProvinceId?: string | null;
  onExploreMapRegion?: (regionId: string) => void;
  onOpenAtlas?: (provinceId: string) => void;
  onOpenSummary?: (provinceId: string) => void;
};

export const PassportProgressSection: React.FC<PassportProgressSectionProps> = ({
  highlightedRegionId = null,
  selectedProvinceId = null,
  onExploreMapRegion,
  onOpenAtlas,
  onOpenSummary,
}) => {
  const [hasHydrated, setHasHydrated] = useState(false);
  
  // Hydration state sync
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const summary = usePassportProgressSummary(highlightedRegionId, selectedProvinceId);
  const shouldReduceMotion = useReducedMotion();

  // Entrance variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  if (!hasHydrated) {
    // Skeleton
    return (
      <section id="passport-progress" className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 animate-pulse">
        <div className="h-8 bg-muted rounded w-1/4 mb-4" />
        <div className="h-12 bg-muted rounded w-2/3 mb-12" />
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 min-h-[560px]">
          <div className="lg:w-[55%] bg-muted rounded-[32px]" />
          <div className="lg:w-[45%] bg-muted rounded-[32px]" />
        </div>
      </section>
    );
  }

  // Handle Empty State
  const isEmpty =
    summary.completedCount === 0 &&
    summary.startedCount === 0 &&
    summary.plannedCount === 0;

  return (
    <motion.section
      id="passport-progress"
      aria-labelledby="passport-progress-heading"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <header className="mb-8 md:mb-12">
        <motion.h2
          id="passport-progress-heading"
          variants={fadeUpVariant}
          className="text-sm font-bold uppercase tracking-widest text-nusaGold mb-2"
        >
          Nusa Passport
        </motion.h2>
        <motion.h3
          variants={fadeUpVariant}
          className="font-serif text-3xl md:text-5xl text-nusaNavy font-bold mb-3"
        >
          Jejak Perjalananmu di Nusantara
        </motion.h3>
        <motion.p
          variants={fadeUpVariant}
          className="text-muted-foreground max-w-2xl text-base md:text-lg"
        >
          Lihat provinsi yang telah kamu selesaikan, wilayah yang mulai terbuka, badge yang terkumpul, dan langkah berikutnya untuk melanjutkan perjalanan digitalmu.
        </motion.p>
        <motion.div variants={fadeUpVariant} className="mt-4 text-xs font-medium text-muted-foreground">
          <span aria-hidden="true">🔒</span> Progress tersimpan secara lokal di browser ini. Tidak ada akun atau data perjalanan pribadi yang diperlukan.
        </motion.div>
      </header>

      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Visual Book Area */}
          <div className="lg:w-[58%]">
            <PassportBookVisual isEmpty={isEmpty} />
          </div>

          {/* Progress Dossier Area */}
          <div className="lg:w-[42%] flex flex-col gap-6">
            <PassportProgressDossier summary={summary} isEmpty={isEmpty} />
          </div>
        </div>

        {/* Regional Trail */}
        <PassportRegionalTrail activeRegionId={highlightedRegionId} onExploreMapRegion={onExploreMapRegion} />

        {/* Milestone Cards */}
        <PassportMilestoneCards
          summary={summary}
          onOpenAtlas={onOpenAtlas}
          onOpenSummary={onOpenSummary}
        />
      </div>
    </motion.section>
  );
};
