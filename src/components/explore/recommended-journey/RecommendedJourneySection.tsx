"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { useLanguage, usePassport } from "@/context/app-context";
import { JourneyDossier } from "./JourneyDossier";
import { SmartSuggestions } from "./SmartSuggestions";
import { getRecommendedJourneys } from "@/lib/recommendation/engine";
import { JourneyRecommendationContext, RecommendedJourney } from "@/data/journeys/types";
import { Map, MapPin, Compass } from "lucide-react";

interface RecommendedJourneySectionProps {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  onJourneyChange?: (journey: RecommendedJourney | null) => void;
}

export function RecommendedJourneySection({
  activeLayer,
  activeMode,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
  onJourneyChange,
}: RecommendedJourneySectionProps) {
  const { passport } = usePassport();
  const { language } = useLanguage();
  
  // Track viewed history internally without causing immediate visual jumps
  const viewedJourneyIds = useRef<string[]>([]);
  
  // Presentation state
  const [displayedPrimary, setDisplayedPrimary] = useState<RecommendedJourney | null>(null);
  const [displayedReasons, setDisplayedReasons] = useState<string[]>([]);
  const [displayedAlternatives, setDisplayedAlternatives] = useState<RecommendedJourney[]>([]);

  // Re-compute recommendation strictly when context changes
  useEffect(() => {
    const context: JourneyRecommendationContext = {
      activeLayer,
      activeMode,
      selectedProvinceId,
      searchQuery,
      showFlagshipOnly,
      passportProvinceIds: passport.stamps,
      viewedJourneyIds: viewedJourneyIds.current,
      locale: language,
    };
    
    const result = getRecommendedJourneys(context);
    
    setDisplayedPrimary(result.primary);
    setDisplayedReasons(result.reasons);
    setDisplayedAlternatives(result.alternatives.slice(0, 3));
    
    if (!viewedJourneyIds.current.includes(result.primary.id)) {
      viewedJourneyIds.current.push(result.primary.id);
    }

    if (onJourneyChange) {
      onJourneyChange(result.primary);
    }
  }, [activeLayer, activeMode, selectedProvinceId, searchQuery, showFlagshipOnly, passport.stamps, language, onJourneyChange]);

  const handleRegenerate = () => {
    if (displayedAlternatives.length > 0) {
      const newPrimary = displayedAlternatives[0];
      setDisplayedPrimary(newPrimary);
      setDisplayedReasons(["THEMATIC_CONTINUITY"]); 
      
      if (!viewedJourneyIds.current.includes(newPrimary.id)) {
        viewedJourneyIds.current.push(newPrimary.id);
      }
      
      if (onJourneyChange) {
        onJourneyChange(newPrimary);
      }
      
      const context: JourneyRecommendationContext = {
        activeLayer,
        activeMode,
        selectedProvinceId,
        searchQuery,
        showFlagshipOnly,
        passportProvinceIds: passport.stamps,
        viewedJourneyIds: viewedJourneyIds.current,
        locale: language,
      };
      
      const nextResult = getRecommendedJourneys(context);
      
      const newAlts = [];
      if (nextResult.primary.id !== newPrimary.id) newAlts.push(nextResult.primary);
      newAlts.push(...nextResult.alternatives.filter(a => a.id !== newPrimary.id));
      
      setDisplayedAlternatives(newAlts.slice(0, 3));
    }
  };

  const handleSelectSuggestion = (id: string) => {
    const selectedAlt = displayedAlternatives.find(a => a.id === id);
    if (selectedAlt) {
      setDisplayedPrimary(selectedAlt);
      setDisplayedReasons(["THEMATIC_CONTINUITY"]);
      
      if (!viewedJourneyIds.current.includes(selectedAlt.id)) {
        viewedJourneyIds.current.push(selectedAlt.id);
      }
      
      if (onJourneyChange) {
        onJourneyChange(selectedAlt);
      }
      
      const context: JourneyRecommendationContext = {
        activeLayer,
        activeMode,
        selectedProvinceId,
        searchQuery,
        showFlagshipOnly,
        passportProvinceIds: passport.stamps,
        viewedJourneyIds: viewedJourneyIds.current,
        locale: language,
      };
      
      const nextResult = getRecommendedJourneys(context);
      const newAlts = [];
      if (nextResult.primary.id !== selectedAlt.id) newAlts.push(nextResult.primary);
      newAlts.push(...nextResult.alternatives.filter(a => a.id !== selectedAlt.id));
      
      setDisplayedAlternatives(newAlts.slice(0, 3));
    }
  };

  if (!displayedPrimary) return null;

  return (
    <section 
      id="recommended-journey" 
      aria-labelledby="recommended-journey-heading"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-[rgba(248,244,234,0.22)]"
      style={{
        "--journey-canvas": "#F8F4EA",
        "--journey-paper": "#FFFDF8",
        "--journey-paper-deep": "#E8E0CE",
        "--journey-ink": "#0D1B2A",
        "--journey-muted": "#5E6570",
        "--journey-terracotta": "#B85C38",
        "--journey-saffron": "#C9A84C",
        "--journey-sage": "#2D5A27",
        "--journey-teal": "#1B7A7A",
        "--journey-coral": "#D4691E",
        "--journey-plum": "#6B3FA0",
        "--journey-line": "#E8E0CE",
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-[1440px]">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-[720px] mb-12 lg:mb-14">
          <p className="text-[11px] md:text-xs font-bold text-[var(--journey-muted)] uppercase tracking-[0.2em] mb-4">
            DISUSUN UNTUK JELAJAHMU
          </p>
          <h2 id="recommended-journey-heading" className="text-4xl md:text-[44px] lg:text-[56px] font-serif text-[var(--journey-ink)] font-bold leading-[1.15] mb-5 tracking-tight">
            Perjalanan Berikutnya, <br className="hidden sm:block"/>Lebih Terarah
          </h2>
          <p className="text-base md:text-[17px] text-[var(--journey-muted)] leading-[1.6] mb-8">
            NUSANTARAYA menghubungkan minat, mode jelajah, provinsi pilihan, dan progres Passport menjadi satu jalur yang relevan.
          </p>
          
          {/* Context Summary */}
          <div className="flex flex-wrap items-center gap-2 text-[13px] md:text-sm font-medium text-[var(--journey-ink)]">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--journey-paper)] border border-[var(--journey-line)] rounded-full">
              <Compass className="w-3.5 h-3.5 text-[var(--journey-muted)]" />
              Mode {activeMode === 'explore' ? 'Explore' : activeMode === 'tourist' ? 'Wisata' : 'Pelajar'}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--journey-paper)] border border-[var(--journey-line)] rounded-full capitalize">
              {activeLayer === 'all' ? 'Semua Minat' : activeLayer}
            </span>
            {selectedProvinceId && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--journey-paper)] border border-[var(--journey-line)] rounded-full">
                <MapPin className="w-3.5 h-3.5 text-[var(--journey-muted)]" />
                Dimulai dari {selectedProvinceId.replace(/-/g, ' ')}
              </span>
            )}
          </div>
        </div>

        {/* PRIMARY DOSSIER */}
        <JourneyDossier 
          journey={displayedPrimary} 
          reasons={displayedReasons}
          onRegenerate={handleRegenerate}
        />

        {/* SMART ROUTE BRIEFS (SUGGESTIONS) */}
        <SmartSuggestions 
          suggestions={displayedAlternatives} 
          onSelect={handleSelectSuggestion} 
        />
        
      </div>
    </section>
  );
}
