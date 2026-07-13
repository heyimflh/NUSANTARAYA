import React from "react";
import { RecommendedJourney } from "@/data/journeys/types";
import { ArrowRight, Sparkles } from "lucide-react";

interface SmartSuggestionsProps {
  suggestions: RecommendedJourney[];
  onSelect: (id: string) => void;
}

export function SmartSuggestions({ suggestions, onSelect }: SmartSuggestionsProps) {
  if (suggestions.length === 0) return null;

  const featured = suggestions[0];
  const compacts = suggestions.slice(1);

  return (
    <div className="mt-20 pt-16 border-t border-[var(--journey-line)]">
      
      <div className="flex items-center gap-3 mb-10">
        <Sparkles className="w-5 h-5 text-[var(--journey-muted)]" />
        <h4 className="text-xs font-bold text-[var(--journey-ink)] uppercase tracking-[0.2em]">
          Alternatif Penjelajahan
        </h4>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        
        {/* Featured Alternative (Large, Image-led) */}
        {featured && (
          <div className="md:col-span-6 lg:col-span-7">
            <button
              onClick={() => onSelect(featured.id)}
              className="group text-left w-full h-full flex flex-col focus:outline-none"
            >
              <div 
                className="relative w-full aspect-[4/3] md:aspect-[16/9] mb-5 overflow-hidden bg-[var(--journey-paper-deep)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px))" }}
              >
                <img 
                  src={featured.coverAsset} 
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23e8ddc8" /></svg>';
                  }}
                />
                <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-multiply pointer-events-none" />
              </div>
              
              <div className="px-2">
                <span 
                  className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2 block"
                  style={{ color: featured.accentColor }}
                >
                  {featured.eyebrow}
                </span>
                
                <h5 className="font-serif font-bold text-2xl md:text-3xl text-[var(--journey-ink)] leading-tight mb-3">
                  {featured.shortTitle}
                </h5>
                
                <p className="text-[15px] text-[var(--journey-muted)] leading-relaxed mb-4 line-clamp-2">
                  {featured.promise}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-[var(--journey-ink)] uppercase tracking-wider group-hover:opacity-70 transition-opacity">
                    Lihat Perjalanan
                  </span>
                  <div 
                    className="w-6 h-px transition-all group-hover:w-10"
                    style={{ backgroundColor: featured.accentColor }}
                  />
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: featured.accentColor }} />
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Compact Alternatives */}
        {compacts.length > 0 && (
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8 md:justify-end">
            {compacts.map((compact) => (
              <button
                key={compact.id}
                onClick={() => onSelect(compact.id)}
                className="group text-left flex items-center gap-5 focus:outline-none"
              >
                <div 
                  className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 overflow-hidden bg-[var(--journey-paper-deep)]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)" }}
                >
                  <img 
                    src={compact.coverAsset} 
                    alt={compact.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23e8ddc8" /></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-multiply pointer-events-none" />
                </div>

                <div className="flex-1 py-1">
                  <span 
                    className="text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5 block"
                    style={{ color: compact.accentColor }}
                  >
                    {compact.eyebrow}
                  </span>
                  
                  <h5 className="font-serif font-bold text-xl md:text-2xl text-[var(--journey-ink)] leading-tight mb-2 group-hover:opacity-80 transition-opacity">
                    {compact.shortTitle}
                  </h5>
                  
                  <div className="flex items-center gap-2 mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-bold text-[var(--journey-ink)] uppercase tracking-wider">
                      Jelajahi
                    </span>
                    <ArrowRight className="w-3 h-3" style={{ color: compact.accentColor }} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
