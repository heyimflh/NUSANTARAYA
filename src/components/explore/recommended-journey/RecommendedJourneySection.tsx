"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ExploreLayerId, ExploreModeId } from "@/data/exploreControls";
import { useLanguage, usePassport } from "@/context/app-context";
import { JourneyDossier } from "./JourneyDossier";
import { SmartSuggestions } from "./SmartSuggestions";
import { getRecommendedJourneys } from "@/lib/recommendation/engine";
import { JourneyRecommendationContext } from "@/data/journeys/types";
import { RefreshCw, ArrowRight } from "lucide-react";

interface RecommendedJourneySectionProps {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
}

export function RecommendedJourneySection({
  activeLayer,
  activeMode,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
}: RecommendedJourneySectionProps) {
  const { passport } = usePassport();
  const { language } = useLanguage();
  
  const [viewedJourneyIds, setViewedJourneyIds] = useState<string[]>([]);
  const [activeJourneyId, setActiveJourneyId] = useState<string | null>(null);

  const context: JourneyRecommendationContext = useMemo(() => ({
    activeLayer,
    activeMode,
    selectedProvinceId,
    searchQuery,
    showFlagshipOnly,
    passportProvinceIds: passport.stamps,
    viewedJourneyIds,
    locale: language,
  }), [
    activeLayer, activeMode, selectedProvinceId, searchQuery, 
    showFlagshipOnly, passport.stamps, viewedJourneyIds, language
  ]);

  const recommendationResult = useMemo(() => {
    return getRecommendedJourneys(context);
  }, [context]);

  const displayedPrimary = useMemo(() => {
    if (activeJourneyId) {
      if (recommendationResult.primary.id === activeJourneyId) return recommendationResult.primary;
      const foundAlt = recommendationResult.alternatives.find(a => a.id === activeJourneyId);
      if (foundAlt) return foundAlt;
    }
    return recommendationResult.primary;
  }, [activeJourneyId, recommendationResult]);

  const displayedSuggestions = useMemo(() => {
    const all = [recommendationResult.primary, ...recommendationResult.alternatives];
    return all.filter(j => j.id !== displayedPrimary.id).slice(0, 3);
  }, [displayedPrimary, recommendationResult]);

  useEffect(() => {
    if (displayedPrimary && !viewedJourneyIds.includes(displayedPrimary.id)) {
      setViewedJourneyIds(prev => [...prev, displayedPrimary.id]);
    }
  }, [displayedPrimary, viewedJourneyIds]);

  const handleRegenerate = () => {
    if (displayedSuggestions.length > 0) {
      setActiveJourneyId(displayedSuggestions[0].id);
    }
  };

  const handleSelectSuggestion = (id: string) => {
    setActiveJourneyId(id);
  };

  return (
    <section 
      id="recommended-journey" 
      aria-labelledby="recommended-journey-heading"
      className="py-24 relative overflow-hidden"
      style={{
        // Local Semantic Tokens for Archipelago Journey Atelier
        "--journey-canvas": "#F4EBDD",
        "--journey-paper": "#FFF9F0",
        "--journey-paper-deep": "#E8DDC8",
        "--journey-ink": "#2B2118",
        "--journey-muted": "#766A5D",
        "--journey-terracotta": "#B8563F",
        "--journey-saffron": "#D2A52C",
        "--journey-sage": "#718064",
        "--journey-teal": "#2F766D",
        "--journey-coral": "#D9785F",
        "--journey-plum": "#76536A",
        "--journey-line": "#CDBFA9",
        backgroundColor: "var(--journey-canvas)",
      } as React.CSSProperties}
    >
      <div className="container-custom mx-auto">
        
        {/* LAYER 1 — EDITORIAL HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-16 items-start">
          
          <div className="md:col-span-2 hidden md:block">
            <span 
              className="text-6xl font-serif italic text-[var(--journey-muted)] opacity-20 block leading-none"
              aria-hidden="true"
            >
              07
            </span>
          </div>

          <div className="md:col-span-5">
            <h2 id="recommended-journey-heading" className="text-xs font-bold text-[var(--journey-ink)] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="md:hidden">07. </span>Disusun untuk Jelajahmu
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--journey-ink)] font-bold leading-[1.15] mb-5 tracking-tight">
              Perjalanan Berikutnya, Dirangkai untukmu
            </h3>
            <p className="text-[17px] text-[var(--journey-muted)] leading-[1.6]">
              Satu jalur terkurasi dari minat, mode jelajah, provinsi aktif, dan progres Passport.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col md:items-end justify-end h-full">
            <div className="text-left md:text-right w-full md:w-auto mt-4 md:mt-0 pt-6 border-t border-[var(--journey-line)] md:border-0 md:pt-0">
              <p className="text-sm font-medium text-[var(--journey-muted)] mb-4">
                Tidak yakin dengan pilihan ini?
              </p>
              <button 
                onClick={handleRegenerate}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--journey-line)] text-[var(--journey-ink)] font-medium hover:bg-[var(--journey-paper)] hover:border-[var(--journey-muted)] transition-all shrink-0 active:scale-95"
                aria-label="Beri saran lain"
              >
                <RefreshCw className="w-4 h-4 text-[var(--journey-muted)] group-hover:rotate-180 transition-transform duration-500" />
                Beri Saran Lain
              </button>
            </div>
          </div>
        </div>

        {/* LAYER 2 & 3 — CINEMATIC JOURNEY STAGE & ROUTE CHAPTER STRIP */}
        <div aria-live="polite">
          <JourneyDossier 
            journey={displayedPrimary} 
            reasons={activeJourneyId === displayedPrimary.id ? [] : recommendationResult.reasons} 
          />
        </div>

        {/* LAYER 4 — SMART SUGGESTIONS FILMSTRIP */}
        <SmartSuggestions 
          suggestions={displayedSuggestions} 
          onSelect={handleSelectSuggestion} 
        />
        
        {/* LAYER 5 — SECTION HANDOFF */}
        <div className="mt-24 pt-12 border-t border-[var(--journey-line)] text-center max-w-2xl mx-auto">
          <h4 className="text-xl md:text-2xl font-serif text-[var(--journey-ink)] mb-4">
            Ingin melihat pilihan dari sudut wilayah?
          </h4>
          <p className="text-base text-[var(--journey-muted)] mb-6">
            Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua.
          </p>
          <a 
            href="#regional-explorer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--journey-ink)] uppercase tracking-wider hover:opacity-70 transition-opacity group"
          >
            Lanjut ke Regional Explorer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
