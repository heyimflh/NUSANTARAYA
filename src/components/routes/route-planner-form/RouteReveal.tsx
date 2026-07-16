import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { 
  getProvinceLabel, 
  getRegionLabel, 
  getInterestLabels,
  getPaceLabel,
  getBudgetLabel
} from "@/lib/routes/composePreferenceSummary";
import { 
  Edit3, 
  BookmarkPlus, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown,
  Info
} from "lucide-react";
import { usePassport } from "@/context/app-context";
import { announcer } from "./PlannerLiveRegion";

interface RouteRevealProps {
  result: RouteRecommendation;
  adjustmentNote: string | null;
  values: RoutePlannerFormValues;
  onEdit: () => void;
  onReset: () => void;
}

export function RouteReveal({ result, adjustmentNote, values, onEdit }: RouteRevealProps) {
  const { saveRoute, passport } = usePassport();
  const isSaved = passport.savedRoutes.includes(result.id);
  const [isCopied, setIsCopied] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  
  const isAdapted = result.matchType === "adapted" && adjustmentNote;
  const isFallback = result.matchType === "fallback" && adjustmentNote;
  
  const origin = getProvinceLabel(values.originProvinceId);
  const region = getRegionLabel(values.destinationRegionId);
  
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      announcer.announce("Tautan rute disalin ke clipboard", "polite");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleSave = () => {
    if (!isSaved) {
      saveRoute(result.id, result.provinceIds);
      announcer.announce("Rute berhasil disimpan ke Passport.", "polite");
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col gap-10 max-w-4xl mx-auto pb-24"
    >
      {/* Fallback Notice */}
      {isFallback && (
        <div className="bg-[var(--planner-saffron-soft)]/30 border-l-2 border-[var(--planner-saffron)] p-4 flex gap-3 mb-4">
          <Info className="w-5 h-5 text-[var(--planner-saffron)] shrink-0 mt-0.5" />
          <p className="font-inter text-[14px] text-[var(--planner-ink)] leading-relaxed">
            <strong className="font-bold text-[var(--planner-ink)]">Catatan Sistem:</strong> {adjustmentNote}
          </p>
        </div>
      )}

      {/* Title Header */}
      <div className="flex flex-col items-center text-center gap-4 relative">
        <span className="font-inter text-[13px] font-bold tracking-wide uppercase text-[var(--planner-primary)]">
          Rute {values.durationDays} Hari &middot; {region || "Destinasi"}
        </span>
        <h2 className="font-playfair text-[36px] md:text-[48px] font-bold text-[var(--planner-ink)] leading-[1.1] max-w-3xl">
          {result.title}
        </h2>
        <p className="font-inter text-[16px] md:text-[18px] text-[var(--planner-earth)] max-w-2xl leading-relaxed mt-1">
          {result.summary}
        </p>
      </div>

      {/* Visual Map Timeline */}
      <div className="w-full relative min-h-[160px] border border-[var(--planner-warm-border)] rounded-2xl py-10 flex flex-col items-center justify-center bg-[var(--planner-paper-raised)]">
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mx-auto gap-8 md:gap-4 px-6">
          {origin && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center bg-[var(--planner-paper)] px-4 py-3 rounded-xl shadow-sm border border-[var(--planner-warm-border)] relative z-20">
              <span className="font-inter text-[11px] font-bold text-[var(--planner-muted)] uppercase tracking-wider mb-1">ASAL</span>
              <span className="font-inter text-[15px] font-bold text-[var(--planner-ink)]">{origin}</span>
            </motion.div>
          )}

          <div className="flex-1 w-full flex items-center justify-center relative min-h-[60px]">
            {/* The line */}
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} 
              className="absolute left-0 right-0 h-[2px] bg-[var(--planner-primary)]/20 origin-left hidden md:block top-1/2 -translate-y-1/2" 
            />
            
            {/* The stops along the way */}
            <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-6 md:gap-2 relative z-20">
              {result.stops.map((stop, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col items-center bg-[var(--planner-paper)] px-3 py-2 rounded-lg border border-[var(--planner-warm-border)] shadow-sm min-w-[100px]"
                >
                  <span className="font-inter text-[11px] text-[var(--planner-primary)] font-bold mb-1">Hari {stop.dayStart === stop.dayEnd ? stop.dayStart : `${stop.dayStart}-${stop.dayEnd}`}</span>
                  <span className="font-inter text-[13px] font-bold text-[var(--planner-ink)] text-center leading-tight tracking-wide">{stop.cityOrCluster}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="flex flex-col items-center bg-[var(--planner-paper)] px-4 py-3 rounded-xl shadow-sm border border-[var(--planner-warm-border)] relative z-20">
             <span className="font-inter text-[11px] font-bold text-[var(--planner-muted)] uppercase tracking-wider mb-1">TUJUAN</span>
             <span className="font-inter text-[15px] font-bold text-[var(--planner-ink)]">{region}</span>
          </motion.div>
        </div>
      </div>

      {/* Rationale & Adaptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-inter text-[12px] font-bold tracking-widest text-[var(--planner-ink)] uppercase border-b border-[var(--planner-warm-border)] pb-2">
            Rasional Rute
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[var(--planner-earth)]">
            Disusun berdasarkan ritme <strong className="font-bold text-[var(--planner-ink)]">{getPaceLabel(values.travelPace)?.toLowerCase()}</strong>, 
            anggaran <strong className="font-bold text-[var(--planner-ink)]">{getBudgetLabel(values.budgetLevel)?.toLowerCase()}</strong>, 
            dan fokus pada <strong className="font-bold text-[var(--planner-ink)]">{getInterestLabels(values.interests).join(", ").toLowerCase()}</strong>. 
            Urutan ini meminimalkan waktu transit sambil memaksimalkan kedalaman pengalaman.
          </p>
        </div>

        {isAdapted && (
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[12px] font-bold tracking-widest text-[var(--planner-primary)] uppercase border-b border-[var(--planner-warm-border)] pb-2 flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Adaptasi Durasi ({values.durationDays} Hari)
            </h3>
            <p className="font-inter text-[14px] leading-relaxed text-[var(--planner-earth)]">
              {adjustmentNote}
            </p>
          </div>
        )}
      </div>

      {/* Day-by-Day Itinerary List */}
      <div className="flex flex-col gap-8 w-full border-t border-[var(--planner-warm-border)] pt-8">
        <h3 className="font-playfair text-[28px] font-bold text-[var(--planner-ink)]">
          Panduan Perjalanan
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {result.stops.map((stop, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="flex flex-col p-6 bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] shadow-[0_4px_20px_rgba(37,30,24,0.03)] relative"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--planner-primary)]" />
              
              <span className="font-inter text-[12px] font-bold text-[var(--planner-primary)] tracking-wide mb-1 uppercase">
                {stop.dayStart === stop.dayEnd ? `Hari ${stop.dayStart}` : `Hari ${stop.dayStart}–${stop.dayEnd}`}
              </span>
              
              <h4 className="font-playfair text-[24px] font-bold text-[var(--planner-ink)] mb-4">
                {stop.cityOrCluster}
              </h4>

              <div className="flex flex-wrap gap-2 mt-auto">
                {stop.highlights.map((h, i) => (
                  <span key={i} className="font-inter text-[12px] font-medium text-[var(--planner-earth)] px-2.5 py-1 bg-[var(--planner-canvas)] border border-[var(--planner-warm-border)] uppercase tracking-wider">
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practical Layer (Accordion) */}
      <div className="bg-[var(--planner-paper)] border border-[var(--planner-warm-border)] rounded-2xl overflow-hidden mt-4">
        <button 
          onClick={() => setShowNotes(!showNotes)}
          className="w-full flex items-center justify-between p-6 hover:bg-[var(--planner-canvas)] transition-colors"
          aria-expanded={showNotes}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--planner-moss)]" />
            <h3 className="font-playfair text-[18px] font-bold text-[var(--planner-ink)] m-0">
              Catatan Praktis & Asumsi
            </h3>
          </div>
          <ChevronDown className={`w-5 h-5 text-[var(--planner-muted)] transition-transform duration-300 ${showNotes ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {showNotes && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 flex flex-col gap-8 border-t border-[var(--planner-warm-border)] mt-2">
                {result.assumptions && result.assumptions.length > 0 && (
                  <div className="flex flex-col gap-3 pt-6">
                    <span className="font-mono text-[10px] font-bold text-[var(--planner-muted)] uppercase tracking-widest">ASUMSI PENYUSUNAN</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-inter text-[14px] leading-relaxed text-[var(--planner-earth)]">
                      {result.assumptions.map((assumption, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--planner-primary)] mt-1.5 shrink-0" />
                          <span>{assumption}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Real Source References */}
                {result.sourceRefs && result.sourceRefs.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] font-bold text-[var(--planner-muted)] uppercase tracking-widest">SUMBER VALIDASI</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {result.sourceRefs.map((src, i) => (
                        <div key={i} className="flex flex-col gap-1 text-[13px] p-4 border border-[var(--planner-warm-border)] bg-[var(--planner-canvas)]/50 relative">
                          <span className="font-bold text-[var(--planner-ink)]">{src.title}</span>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[11px] text-[var(--planner-muted)] gap-1 mt-1">
                            <span>{src.publisher || src.id}</span>
                            {src.lastVerifiedAt && <span>Verifikasi: {src.lastVerifiedAt}</span>}
                          </div>
                          {src.url && (
                            <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-[var(--planner-primary)] font-bold uppercase tracking-wider text-[10px] hover:underline mt-2">
                              LIHAT REFERENSI ↗
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Dock */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[var(--planner-paper)] p-6 border border-[var(--planner-warm-border)] rounded-2xl w-full">
        <button 
          onClick={onEdit} 
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-inter text-[15px] font-semibold text-[var(--planner-ink)] hover:bg-[var(--planner-canvas)] border border-[var(--planner-warm-border)] transition-all w-full sm:w-auto"
        >
          <Edit3 className="w-4 h-4" />
          Revisi
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-inter text-[15px] font-semibold text-[var(--planner-ink)] hover:bg-[var(--planner-canvas)] border border-[var(--planner-warm-border)] transition-all w-full sm:w-auto"
        >
          {isCopied ? <CheckCircle2 className="w-4 h-4 text-[var(--planner-moss)]" /> : <Share2 className="w-4 h-4" />}
          {isCopied ? "Tersalin!" : "Bagikan"}
        </button>
        
        <button 
          onClick={handleSave}
          className={`group flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-inter text-[15px] font-bold transition-all w-full sm:w-auto ${
            isSaved 
              ? "bg-[var(--planner-canvas)] text-[var(--planner-saffron)] border border-[var(--planner-warm-border)] cursor-default" 
              : "bg-[var(--planner-primary)] text-white hover:bg-[var(--planner-primary-hover)] hover:shadow-md"
          }`}
        >
          {isSaved ? <CheckCircle2 className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4 transition-transform group-hover:scale-110" />}
          {isSaved ? "Tersimpan" : "Simpan Rute"}
        </button>
      </div>

    </motion.div>
  );
}
