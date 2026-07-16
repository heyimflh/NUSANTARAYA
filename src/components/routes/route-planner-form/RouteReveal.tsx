import { motion } from "framer-motion";
import type { RouteRecommendation, RoutePlannerFormValues } from "@/types/route-planner";
import { 
  getProvinceLabel, 
  getRegionLabel, 
  getInterestLabels,
  getPaceLabel,
  getBudgetLabel
} from "@/lib/routes/composePreferenceSummary";
import { Map, Edit3, BookmarkPlus, Share2, Compass, ShieldCheck } from "lucide-react";
import { usePassport } from "@/context/app-context";

interface RouteRevealProps {
  result: RouteRecommendation;
  adjustmentNote: string | null;
  values: RoutePlannerFormValues;
  onEdit: () => void;
  onReset: () => void;
}

export function RouteReveal({ result, adjustmentNote, values, onEdit, onReset }: RouteRevealProps) {
  const { saveRoute, passport } = usePassport();
  const isSaved = passport.savedRoutes.includes(result.id);
  
  const isAdapted = result.matchType === "adapted" && adjustmentNote;
  
  const origin = getProvinceLabel(values.originProvinceId);
  const region = getRegionLabel(values.destinationRegionId);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col gap-10 max-w-4xl mx-auto"
    >
      {/* Route Reveal Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="font-mono text-[12px] font-bold tracking-[0.3em] uppercase text-[var(--route-primary)] bg-[var(--route-primary)]/10 px-3 py-1 rounded-sm">
          {String(values.durationDays).padStart(2, "0")} DAYS / {region || "ISLAND"} EXPEDITION
        </span>
        <h2 className="font-playfair text-[40px] md:text-[56px] font-bold text-[var(--route-ink)] leading-[1.1]">
          {result.title}
        </h2>
        <p className="font-inter text-[16px] md:text-[18px] text-[var(--route-muted)] max-w-2xl leading-relaxed">
          {result.summary}
        </p>
      </div>

      {/* Hero Route Map (Abstract Route Diagram) */}
      <div className="w-full h-[300px] md:h-[400px] bg-[var(--route-paper)] rounded-3xl border border-[var(--route-border)] relative overflow-hidden flex items-center justify-center isolate shadow-sm">
        <svg className="absolute inset-0 w-full h-full text-[var(--route-border)]/40 pointer-events-none -z-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 200 Q 200 100 400 300 T 800 200" fill="transparent" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
          <path d="M -100 300 Q 200 400 400 250 T 800 400" fill="transparent" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-between px-[10%] md:px-[20%]">
          {origin && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[var(--route-ink)] border-2 border-white ring-1 ring-[var(--route-border)] z-10" />
              <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--route-muted)]">Origin</span>
              <span className="font-inter text-[13px] font-bold text-[var(--route-ink)]">{origin}</span>
            </motion.div>
          )}

          <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute left-[10%] right-[10%] md:left-[20%] md:right-[20%] top-1/2 -translate-y-1/2 h-[100px] w-auto -z-10" preserveAspectRatio="none">
            <path d="M 0 50 Q 50 0, 100 50 T 200 50" fill="transparent" stroke="var(--route-primary)" strokeWidth="2" strokeDasharray="6,6" vectorEffect="non-scaling-stroke" />
          </motion.svg>

          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="flex flex-col items-center">
             <div className="w-12 h-12 rounded-full bg-[var(--route-saffron)]/20 border border-[var(--route-saffron)] flex items-center justify-center z-10">
               <Compass className="w-5 h-5 text-[var(--route-saffron)]" />
             </div>
             <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--route-muted)]">Destination</span>
             <span className="font-playfair text-[16px] font-bold text-[var(--route-primary)]">{region}</span>
          </motion.div>
        </div>
      </div>

      {/* Why This Route (Personalization Proof) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[var(--route-surface)]/50 p-6 rounded-2xl border border-[var(--route-border)]">
          <h3 className="font-playfair text-[20px] font-bold text-[var(--route-ink)] mb-3 flex items-center gap-2">
            Mengapa rute ini?
          </h3>
          <p className="font-inter text-[14px] leading-relaxed text-[var(--route-earth)]">
            Rute ini dirancang khusus dari {origin || "titik terbaik"} menuju {region}. 
            Dengan durasi {values.durationDays} hari, kami membagi perjalanan menjadi cluster yang memungkinkan ritme <strong>{getPaceLabel(values.travelPace).toLowerCase()}</strong>, fokus pada <strong>{getInterestLabels(values.interests).join(", ").toLowerCase()}</strong>, 
            sambil mempertahankan karakter pengeluaran <strong>{getBudgetLabel(values.budgetLevel).toLowerCase()}</strong>.
          </p>
        </div>

        {isAdapted && (
          <div className="bg-[var(--route-primary)]/5 p-6 rounded-2xl border border-[var(--route-primary)]/20">
            <h3 className="font-inter text-[14px] font-bold uppercase tracking-wider text-[var(--route-primary)] mb-2 flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Diadaptasi untuk {values.durationDays} Hari
            </h3>
            <p className="font-inter text-[14px] leading-relaxed text-[var(--route-earth)]">
              {adjustmentNote}
            </p>
          </div>
        )}
      </div>

      {/* Day-by-Day Story */}
      <div className="relative pl-4 md:pl-8 py-8 border-l-2 border-[var(--route-border)] border-dashed space-y-12">
        {result.stops.map((stop, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="relative"
          >
            {/* Timeline Marker */}
            <div className="absolute -left-[23px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-[var(--route-canvas)] border-2 border-[var(--route-primary)]" />
            
            <div className="flex flex-col mb-2">
              <span className="font-mono text-[12px] font-bold text-[var(--route-primary)] tracking-widest">
                {stop.dayStart === stop.dayEnd ? `DAY ${stop.dayStart}` : `DAYS ${stop.dayStart}–${stop.dayEnd}`}
              </span>
              <h4 className="font-playfair text-[24px] md:text-[28px] font-bold text-[var(--route-ink)] mb-4">
                {stop.cityOrCluster}
              </h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {stop.highlights.map((h, i) => (
                <span key={i} className="font-inter text-[12px] font-medium text-[var(--route-earth)] px-3 py-1 bg-[var(--route-paper)] border border-[var(--route-border)] rounded-md">
                  {h}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Practical Layer */}
      <div className="p-6 bg-[var(--route-paper)] rounded-2xl border border-[var(--route-border)] flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-[var(--route-moss)]" />
          <h3 className="font-playfair text-[18px] font-bold text-[var(--route-ink)]">
            Catatan Perjalanan Praktis
          </h3>
        </div>
        {result.assumptions && result.assumptions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter text-[13px] leading-relaxed text-[var(--route-earth)]">
            {result.assumptions.map((assumption, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--route-primary)] mt-1.5 shrink-0" />
                <span>{assumption}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Source References */}
        {result.sourceRefs && result.sourceRefs.length > 0 && (
          <div className="mt-4 pt-4 border-t border-[var(--route-border)] flex flex-wrap gap-2">
            <span className="font-inter text-[11px] font-bold text-[var(--route-muted)] uppercase tracking-wider mt-1 mr-2">Sumber Data:</span>
            {result.sourceRefs.map((src, i) => (
              <span key={i} className="font-mono text-[10px] px-2 py-1 bg-[var(--route-surface)] text-[var(--route-muted)] rounded" title={src.title}>
                {src.id}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Dock */}
      <div className="sticky bottom-4 z-30 mt-4 flex flex-wrap items-center justify-center gap-4 bg-[var(--route-paper)]/90 backdrop-blur-md p-4 rounded-2xl border border-[var(--route-border)] shadow-lg">
        <button onClick={onEdit} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--route-border)] font-inter text-[14px] font-semibold text-[var(--route-ink)] hover:bg-[var(--route-surface)] transition-all">
          <Edit3 className="w-4 h-4" />
          Ubah Rute
        </button>
        
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--route-border)] font-inter text-[14px] font-semibold text-[var(--route-ink)] hover:bg-[var(--route-surface)] transition-all">
          <Share2 className="w-4 h-4" />
          Bagikan
        </button>
        
        <button 
          onClick={() => {
            if (!isSaved) saveRoute(result.id, result.provinceIds);
          }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-inter text-[14px] font-semibold transition-all shadow-sm ${
            isSaved 
              ? "bg-[var(--route-surface)] text-[var(--route-saffron)] cursor-default" 
              : "bg-[var(--route-primary)] text-white hover:bg-[var(--route-primary-hover)] active:scale-95"
          }`}
        >
          <BookmarkPlus className="w-4 h-4" />
          {isSaved ? "Tersimpan" : "Simpan ke Passport"}
        </button>
      </div>

    </motion.div>
  );
}
