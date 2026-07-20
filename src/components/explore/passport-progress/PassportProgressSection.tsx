"use client";

import React, { useState, useEffect } from "react";
import { PassportManifesto } from "./PassportManifesto";
import { PassportHowItWorks } from "./PassportHowItWorks";
import { LivingStampCanvas } from "./LivingStampCanvas";
import { RegionalChapterIndex } from "./RegionalChapterIndex";
import { NextExpeditionTicket } from "./NextExpeditionTicket";
import { usePassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { RegionId } from "@/types/region";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onOpenSummary,
}) => {
  const [hasHydrated, setHasHydrated] = useState(false);
  
  // Hydration state sync
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasHydrated(true);
  }, []);

  const summary = usePassportProgressSummary(highlightedRegionId, selectedProvinceId);

  if (!hasHydrated) {
    // Skeleton
    return (
      <section id="passport-progress" className="w-full bg-[#FFF9EC] min-h-screen animate-pulse py-24 px-8">
        <div className="h-24 bg-[#EFE1C5] rounded-none w-2/3 max-w-4xl mx-auto mb-12" />
        <div className="h-64 bg-[#EFE1C5] rounded-none w-full max-w-7xl mx-auto mb-12" />
      </section>
    );
  }

  return (
    <section
      id="passport-progress"
      aria-labelledby="passport-progress-heading"
      className="relative w-full bg-[#FFF9EC] overflow-hidden border-t border-[#D8C8A8]"
    >
      <PassportManifesto summary={summary} />
      <PassportHowItWorks summary={summary} />
      <LivingStampCanvas summary={summary} onOpenAtlas={onOpenAtlas} />
      <RegionalChapterIndex activeRegionId={highlightedRegionId} onExploreMapRegion={onExploreMapRegion} />
      <NextExpeditionTicket summary={summary} onOpenAtlas={onOpenAtlas} />
      <div className="flex justify-center pb-24 relative z-10 -mt-12">
        <a href="/passport" className="group relative inline-flex items-center justify-between bg-[#3A281F] text-[#FFF9EE] px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform shadow-md">
          <span className="relative z-10">Buka Passport Lengkap</span>
        </a>
      </div>
    </section>
  );
};
