import React from "react";
import { RecommendedJourney } from "@/data/journeys/types";
import { REASON_COPY_ID } from "@/lib/recommendation/engine";
import { Map, BookOpen, Compass, Bookmark, ExternalLink } from "lucide-react";
import { usePassport } from "@/context/app-context";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface JourneyDossierProps {
  journey: RecommendedJourney;
  reasons: string[];
}

export function JourneyDossier({ journey, reasons }: JourneyDossierProps) {
  const { passport, saveRoute } = usePassport();
  const router = useRouter();
  
  const isSaved = passport.savedRoutes.includes(journey.id);

  const handlePrimaryAction = () => {
    if (journey.primaryAction.type === "atlas" || journey.primaryAction.type === "learn") {
      if (journey.primaryAction.href) {
        router.push(journey.primaryAction.href);
      }
    } else if (journey.primaryAction.type === "route-planner") {
      router.push(`/planner?journeyId=${journey.id}`);
    }
  };

  const handleSave = () => {
    saveRoute(journey.id);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={journey.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-12"
      >
        {/* LAYER 2 — CINEMATIC JOURNEY STAGE (7/5 Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative">
          
          {/* Left: Cinematic Hero Collage (7 cols) */}
          <div className="col-span-1 lg:col-span-7 relative z-0">
            <div 
              className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[var(--journey-paper-deep)]"
              style={{
                // Asymmetric clipping shape instead of a generic box
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              <motion.img 
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                src={journey.coverAsset} 
                alt={`Hero visual for ${journey.title}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100%" height="100%" fill="%23e8ddc8" /></svg>';
                }}
              />
              {/* Subtle paper grain overlay */}
              <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-multiply pointer-events-none" />
              
              {/* Route Ribbon on Image (Desktop) */}
              <div className="absolute bottom-6 left-6 right-6 hidden md:flex items-center text-[var(--journey-paper)]">
                {journey.stops.map((stop, idx) => (
                  <React.Fragment key={stop.id}>
                    <div className="flex items-center gap-2 relative">
                      <div className="w-5 h-5 rounded-full border-2 border-[var(--journey-paper)] flex items-center justify-center text-[10px] font-bold bg-[var(--journey-ink)]/20 backdrop-blur-sm">
                        {idx + 1}
                      </div>
                      <span className="text-xs font-medium tracking-wide drop-shadow-md whitespace-nowrap hidden lg:block">
                        {stop.label}
                      </span>
                    </div>
                    {idx < journey.stops.length - 1 && (
                      <div className="flex-1 h-px bg-[var(--journey-paper)]/40 mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            
            {/* Organic offset paper layer behind image to create tactile depth */}
            <div 
              className="absolute -inset-4 bg-[var(--journey-paper)]/50 -z-10 mix-blend-multiply hidden lg:block"
              style={{ clipPath: "polygon(0 40px, 40px 0, 100% 0, 100% 100%, 0 100%)" }}
            />
          </div>

          {/* Right: Floating Journey Ticket (5 cols) */}
          <div className="col-span-1 lg:col-span-5 lg:-ml-12 relative z-10 pt-4 lg:pt-0">
            <div className="bg-[var(--journey-paper)] p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(43,33,24,0.08)] relative overflow-hidden border border-[var(--journey-paper-deep)]">
              {/* Vertical Accent Line */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{ backgroundColor: journey.accentColor }}
              />

              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--journey-muted)] border border-[var(--journey-line)] px-2.5 py-1 rounded-full">
                  {journey.kind.replace('-', ' ')}
                </span>
                <span 
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: journey.accentColor }}
                >
                  {journey.eyebrow}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--journey-ink)] leading-[1.1] mb-5 tracking-tight">
                {journey.title}
              </h3>
              
              <p className="text-[15px] text-[var(--journey-ink)] leading-relaxed mb-6 font-medium">
                {journey.promise}
              </p>

              {/* Condensed Reasons - Editorial List */}
              {reasons.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs font-bold text-[var(--journey-muted)] uppercase tracking-wider mb-3">
                    Dirangkai karena:
                  </p>
                  <ul className="space-y-2.5">
                    {reasons.map((reasonCode, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span 
                          className="text-[10px] mt-1 flex-shrink-0" 
                          style={{ color: journey.accentColor }}
                        >
                          ✦
                        </span>
                        <p className="text-[14px] text-[var(--journey-muted)] leading-snug">
                          {REASON_COPY_ID[reasonCode as keyof typeof REASON_COPY_ID]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Signals */}
              <div className="flex flex-wrap gap-2 mb-10">
                {journey.signals.map((signal, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-[var(--journey-paper-deep)] text-[var(--journey-ink)] text-xs font-medium tracking-wide"
                  >
                    {signal}
                  </span>
                ))}
              </div>

              {/* Controls / Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handlePrimaryAction}
                  className="px-6 py-3.5 text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 flex-1"
                  style={{ backgroundColor: journey.accentColor }}
                >
                  {journey.primaryAction.type === "learn" ? <BookOpen className="w-5 h-5" /> : 
                   journey.primaryAction.type === "route-planner" ? <Compass className="w-5 h-5" /> :
                   <ExternalLink className="w-5 h-5" />}
                  {journey.primaryAction.label}
                </button>
                <button
                  onClick={handleSave}
                  aria-pressed={isSaved}
                  className={`px-6 py-3.5 font-medium transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none border
                    ${isSaved 
                      ? 'bg-[var(--journey-paper-deep)] text-[var(--journey-ink)] border-[var(--journey-paper-deep)]' 
                      : 'bg-transparent text-[var(--journey-ink)] border-[var(--journey-line)] hover:border-[var(--journey-muted)]'}`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                  {isSaved ? "Tersimpan" : "Simpan"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 3 — ROUTE CHAPTER STRIP */}
        <div className="mt-4 border-t border-[var(--journey-line)] pt-8 relative">
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-[var(--journey-ink)]" />
          
          <h4 className="text-xs font-bold text-[var(--journey-ink)] uppercase tracking-[0.2em] mb-6">
            Rute Perjalanan ({journey.stops.length} Titik)
          </h4>
          
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
            {journey.stops.map((stop, i) => (
              <div 
                key={stop.id} 
                className="snap-start shrink-0 w-[240px] md:w-[280px] flex flex-col group relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="text-2xl font-serif font-bold opacity-30 group-hover:opacity-100 transition-opacity"
                    style={{ color: journey.accentColor }}
                  >
                    0{i + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-[var(--journey-line)] group-hover:bg-[var(--journey-muted)] transition-colors" />
                </div>
                
                <h5 className="font-bold text-[17px] text-[var(--journey-ink)] leading-tight mb-2">
                  {stop.label}
                </h5>
                <p className="text-sm text-[var(--journey-muted)] leading-relaxed">
                  {stop.shortReason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
