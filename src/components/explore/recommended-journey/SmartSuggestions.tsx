import React from "react";
import { RecommendedJourney } from "@/data/journeys/types";
import { ArrowRight, Sparkles } from "lucide-react";

interface SmartSuggestionsProps {
  suggestions: RecommendedJourney[];
  onSelect: (id: string) => void;
}

export function SmartSuggestions({ suggestions, onSelect }: SmartSuggestionsProps) {
  if (suggestions.length === 0) return null;

  // Derive contextual strategy labels based on index or properties.
  const getStrategyLabel = (idx: number) => {
    if (idx === 0) return "Lanjutkan Cerita";
    if (idx === 1) return "Coba Kontras";
    return "Lengkapi Passport";
  };

  return (
    <div className="mt-16 md:mt-24 border-t border-[var(--journey-line)] pt-12 md:pt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[var(--journey-saffron)]" />
          <h4 className="text-sm font-bold text-[var(--journey-ink)] uppercase tracking-[0.2em]">
            Eksplorasi Alternatif
          </h4>
        </div>
      </div>
      
      {/* 
        Desktop: Asymmetric 3-column grid.
        Tablet/Mobile: Horizontal scroll rail.
      */}
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-[1.15fr_0.925fr_0.925fr] gap-5 md:gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
        {suggestions.map((journey, idx) => (
          <button
            key={journey.id}
            onClick={() => onSelect(journey.id)}
            className="group relative text-left flex flex-col focus:outline-none w-[280px] sm:w-[320px] lg:w-auto shrink-0 snap-start rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-[460px] shadow-sm hover:shadow-2xl transition-all duration-700 focus-visible:ring-2 focus-visible:ring-[var(--journey-saffron)] bg-[#1A1A1A]"
          >
            {/* Background Image with Dark Base */}
            <div className="absolute inset-0 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={journey.coverAsset} 
                alt={`Visual untuk ${journey.shortTitle}`}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%232D3748" /></svg>';
                }}
              />
            </div>
            
            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 group-hover:to-black/95 transition-colors duration-700" />

            {/* Inner Content Container */}
            <div className="relative z-10 flex flex-col h-full p-6 lg:p-8 w-full">
              
              {/* Header: Badge & Arrow */}
              <div className="flex items-start justify-between mb-auto">
                <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.2em] uppercase px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  {getStrategyLabel(idx)}
                </span>
                
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Bottom Content: Title & Expanding Description */}
              <div className="mt-8 flex flex-col justify-end transform transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
                
                {/* Meta Strip */}
                <div className="flex items-center gap-3 mb-4 text-white/80">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--journey-saffron)]">
                    A0{idx + 1}
                  </span>
                  <span className="w-6 h-[1px] bg-white/30" />
                  <span className="text-[9px] lg:text-[10px] font-medium tracking-widest uppercase truncate">
                    {journey.stops[0].label} — {journey.stops[journey.stops.length - 1].label}
                  </span>
                </div>
                
                {/* Title */}
                <h5 className="font-serif font-bold text-3xl lg:text-[32px] !text-white leading-[1.1] mb-1 drop-shadow-lg">
                  {journey.shortTitle}
                </h5>
                
                {/* Animated Expanding Description (CSS Grid Trick) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-[13px] lg:text-sm text-white/70 leading-relaxed pt-4 mt-4 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 transform translate-y-2 group-hover:translate-y-0">
                      {journey.promise}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Ambient Base Glow (Active indicator effect on hover) */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"
              style={{ backgroundColor: journey.accentColor || 'var(--journey-saffron)' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
