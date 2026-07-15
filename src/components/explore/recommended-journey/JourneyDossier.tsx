import React from "react";
import { RecommendedJourney } from "@/data/journeys/types";
import { REASON_COPY_ID } from "@/lib/recommendation/engine";
import { Map, BookOpen, Compass, Bookmark, ExternalLink, RefreshCw, Sparkles } from "lucide-react";
import { usePassport } from "@/context/app-context";
import { useRouter } from "next/navigation";
import { isRouteAvailable } from "@/lib/routes";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface JourneyDossierProps {
  journey: RecommendedJourney;
  reasons: string[];
  onRegenerate: () => void;
}

export function JourneyDossier({ journey, reasons, onRegenerate }: JourneyDossierProps) {
  const { passport, saveRoute } = usePassport();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  
  const isSaved = passport.savedRoutes.includes(journey.id);

  const handlePrimaryAction = () => {
    if (journey.primaryAction.type === "atlas" || journey.primaryAction.type === "learn") {
      if (journey.primaryAction.href && isRouteAvailable(journey.primaryAction.href)) {
        router.push(journey.primaryAction.href);
      }
    } else if (journey.primaryAction.type === "route-planner") {
      if (isRouteAvailable("/planner")) {
        router.push(`/planner?journeyId=${journey.id}`);
      }
    }
  };

  const handleSecondaryAction = (action: RecommendedJourney['secondaryActions'][0]) => {
    if (action.type === 'map') {
      const mapHeading = document.getElementById("interactive-map-heading");
      const mapSection = document.getElementById("interactive-map");
      
      if (mapSection) {
        const yOffset = -80; // approximate sticky navbar offset
        const y = mapSection.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: shouldReduceMotion ? "auto" : "smooth"
        });

        if (mapHeading) {
          mapHeading.focus({ preventScroll: true });
        }
      }
    }
  };

  const handleSave = () => {
    const provinceIds = journey.stops
      .map(stop => stop.provinceId)
      .filter((id): id is string => Boolean(id));
      
    saveRoute(journey.id, provinceIds);
  };

  const getPrimaryActionIcon = () => {
    switch (journey.primaryAction.type) {
      case "learn": return <BookOpen className="w-5 h-5" />;
      case "route-planner": return <Compass className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <div 
      aria-live="polite"
      className="w-full max-w-[1360px] mx-auto bg-[var(--journey-paper)] border border-[var(--journey-line)] rounded-[28px] shadow-[0_4px_24px_-8px_rgba(13,27,42,0.06)] flex flex-col relative overflow-hidden"
    >
      {/* EDITORIAL SPINE (LEFT SIDE) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-[var(--journey-line)] hidden lg:flex flex-col items-center justify-between py-12 z-20 bg-[var(--journey-paper)]/50 backdrop-blur-sm">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--journey-muted)] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          07
        </span>
        <div className="flex-1 w-px bg-gradient-to-b from-[var(--journey-line)] to-transparent my-6" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--journey-muted)] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          JOURNEY DOSSIER
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={journey.id}
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, ease: "easeInOut" }}
          className="flex flex-col w-full lg:pl-12"
        >
          <div className="flex flex-col lg:flex-row w-full min-w-0 h-full">
            
            {/* VISUAL REGION & CARTOGRAPHIC OVERLAY (58%) */}
            <div className="w-full lg:w-[58%] relative min-w-0 border-b lg:border-b-0 lg:border-r border-[var(--journey-line)] bg-[#FDFBF7]">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:h-full lg:min-h-[580px] overflow-hidden">
                <img 
                  src={journey.coverAsset} 
                  alt={`Visual jalur ${journey.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23e8ddc8" /></svg>';
                  }}
                />
                
                {/* Cartographic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--journey-ink)]/80 via-[var(--journey-ink)]/10 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
                
                {/* Cartographic Route Line Overlay */}
                <div className="absolute bottom-12 md:bottom-16 left-10 right-10 flex items-center text-white" aria-hidden="true">
                  {journey.stops.map((stop, idx) => (
                    <React.Fragment key={stop.id}>
                      <div className="relative flex justify-center group cursor-default">
                        {/* Top Label (e.g. SUL, JBW) */}
                        <span className={`text-[9px] font-bold tracking-[0.2em] text-white/70 whitespace-nowrap absolute bottom-full mb-2 opacity-0 md:opacity-100 ${
                          journey.stops.length === 1 ? 'left-1/2 -translate-x-1/2 text-center' :
                          idx === 0 ? 'left-1/2 -translate-x-3 text-left' :
                          idx === journey.stops.length - 1 ? 'right-1/2 translate-x-3 text-right' :
                          'left-1/2 -translate-x-1/2 text-center'
                        }`}>
                          {(stop.provinceId || stop.label).slice(0, 3).toUpperCase()}
                        </span>
                        
                        {/* Node */}
                        <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white bg-white/20 backdrop-blur-sm relative z-10" />
                        
                        {/* Bottom Label (Province Name) */}
                        <span className={`text-[11px] font-bold tracking-wider drop-shadow-md whitespace-nowrap absolute top-full mt-2 hidden sm:block ${
                          journey.stops.length === 1 ? 'left-1/2 -translate-x-1/2 text-center' :
                          idx === 0 ? 'left-1/2 -translate-x-3 text-left' :
                          idx === journey.stops.length - 1 ? 'right-1/2 translate-x-3 text-right' :
                          'left-1/2 -translate-x-1/2 text-center'
                        }`}>
                          {stop.label}
                        </span>
                      </div>
                      {idx < journey.stops.length - 1 && (
                        <div className="flex-1 h-[1px] mx-3 relative">
                          {/* Abstract dashed connector */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                          <div className="w-full h-full border-b border-dashed border-white/40" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Coordinate Decor */}
                <div className="absolute top-6 left-6 text-[9px] font-mono tracking-widest text-white/50 hidden md:block">
                  LAT 0.7893° S / LONG 113.9213° E
                </div>
              </div>
            </div>

            {/* EDITORIAL REGION (42%) */}
            <div className="w-full lg:w-[42%] min-w-0 flex flex-col relative bg-[var(--journey-paper)] p-6 sm:p-8 md:p-10 lg:p-12 shadow-[-10px_0_30px_-10px_rgba(13,27,42,0.03)] z-10">
              
              {/* TOP HEADER: Metadata & Regenerate Button */}
              <div className="flex items-start justify-between mb-8">
                {/* Journey Metadata Strip */}
                <div className="flex flex-wrap items-center text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--journey-muted)]">
                  <span>DIGITAL TRAIL</span>
                  <span className="mx-2">/</span>
                  <span style={{ color: journey.accentColor }}>{journey.kind.replace('-', ' ')}</span>
                  <span className="mx-2">/</span>
                  <span>{journey.stops.length} TITIK</span>
                </div>

                {/* The Relocated "Beri Saran Lain" Utility Button */}
                <button
                  onClick={onRegenerate}
                  className="flex items-center gap-1.5 px-3 py-1.5 -mt-1.5 -mr-2 rounded-md border border-transparent text-[11px] font-bold uppercase tracking-wider text-[var(--journey-muted)] hover:text-[var(--journey-ink)] hover:bg-[var(--journey-saffron)]/10 hover:border-[var(--journey-saffron)]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--journey-saffron)]"
                  aria-label="Regenerate journey suggestion"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Saran Lain</span>
                </button>
              </div>

              {/* TITLE & PROMISE */}
              <h3 className="text-3xl md:text-[40px] lg:text-[46px] font-serif font-bold text-[var(--journey-ink)] leading-[1.05] mb-5 tracking-tight">
                {journey.title}
              </h3>
              
              <p className="text-[15px] md:text-[16px] text-[var(--journey-ink)] leading-relaxed mb-8 font-medium">
                {journey.promise}
              </p>

              {/* REASON BLOCK (Editorial Note) */}
              {reasons.length > 0 && (
                <div 
                  className="mb-10 p-5 rounded-xl border border-[var(--journey-line)]/50 relative overflow-hidden"
                  style={{ backgroundColor: `${journey.accentColor}08` }} /* 08 = ~3-5% opacity */
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: journey.accentColor }} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em]" style={{ color: journey.accentColor }}>
                      MENGAPA JALUR INI DIPILIH
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {reasons.map((reasonCode, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[14px] text-[var(--journey-muted)] leading-snug font-medium">
                          {REASON_COPY_ID[reasonCode as keyof typeof REASON_COPY_ID]}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* Subtle edge highlight */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: journey.accentColor }} />
                </div>
              )}

              <div className="flex-1" /> {/* Spacer */}

              {/* ACTION HIERARCHY */}
              <div className="flex flex-col gap-3 mt-8">
                {/* Primary Action (Full Width) */}
                <button
                  onClick={handlePrimaryAction}
                  disabled={
                    Boolean(
                      (journey.primaryAction.type === "route-planner" && !isRouteAvailable("/planner")) ||
                      ((journey.primaryAction.type === "atlas" || journey.primaryAction.type === "learn") && 
                        journey.primaryAction.href && !isRouteAvailable(journey.primaryAction.href))
                    )
                  }
                  className="w-full h-[52px] text-white font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: journey.accentColor, '--tw-ring-color': journey.accentColor } as React.CSSProperties}
                >
                  {getPrimaryActionIcon()}
                  {journey.primaryAction.label}
                </button>
                
                {/* Secondary Actions (Split) */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleSave}
                    aria-pressed={isSaved}
                    className={`w-full h-11 font-medium transition-colors flex items-center justify-center gap-2 rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--journey-saffron)]
                      ${isSaved 
                        ? 'bg-[var(--journey-paper-deep)] text-[var(--journey-ink)] border-[var(--journey-paper-deep)]' 
                        : 'bg-transparent text-[var(--journey-ink)] border-[var(--journey-line)] hover:border-[var(--journey-muted)]'}`}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    <span className="text-sm">{isSaved ? "Tersimpan" : "Simpan"}</span>
                  </button>
                  
                  {journey.secondaryActions[0] && (
                    <button
                      onClick={() => handleSecondaryAction(journey.secondaryActions[0])}
                      className="w-full h-11 bg-transparent text-[var(--journey-ink)] border border-[var(--journey-line)] hover:border-[var(--journey-muted)] font-medium transition-colors flex items-center justify-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--journey-saffron)]"
                    >
                      <Map className="w-4 h-4" />
                      <span className="text-sm">{journey.secondaryActions[0].label}</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* LAYER 3 — JOURNEY CHAPTER RAIL (ROUTE SEQUENCE FOOTER) */}
          <div className="w-full border-t border-[var(--journey-line)] bg-[var(--journey-paper)] lg:bg-[var(--journey-paper-deep)]/10 p-6 sm:p-8 lg:px-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <h4 className="text-[10px] md:text-xs font-bold text-[var(--journey-muted)] uppercase tracking-[0.2em] md:-rotate-90 origin-center whitespace-nowrap">
              CHAPTERS
            </h4>
            
            <ol className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
              {journey.stops.map((stop, i) => (
                <li 
                  key={stop.id} 
                  className="flex-1 relative group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span 
                      className="text-2xl md:text-3xl font-serif font-bold text-[var(--journey-line)] transition-colors group-hover:text-[var(--journey-saffron)]"
                    >
                      0{i + 1}
                    </span>
                    {/* Horizontal Connector (Desktop) */}
                    {i < journey.stops.length - 1 && (
                      <div className="hidden md:block flex-1 h-[1px] bg-[var(--journey-line)] relative">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--journey-line)] group-hover:bg-[var(--journey-saffron)] transition-colors" />
                      </div>
                    )}
                  </div>
                  
                  <div className="pl-10 md:pl-0">
                    <h5 className="font-bold text-[15px] md:text-[16px] text-[var(--journey-ink)] leading-tight mb-1.5">
                      {stop.label}
                    </h5>
                    <p className="text-[13px] text-[var(--journey-muted)] leading-relaxed">
                      {stop.shortReason}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
