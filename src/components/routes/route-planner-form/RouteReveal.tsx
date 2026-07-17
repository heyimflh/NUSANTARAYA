import { useState } from "react";
import Image from "next/image";
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
  Info,
  MapPin
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
  const [imgError, setImgError] = useState(false);
  
  const isAdapted = result.matchType === "adapted-preset" && adjustmentNote;
  const isFallback = result.matchType === "fallback-preset" && adjustmentNote;
  
  const origin = getProvinceLabel(values.originProvinceId);
  const region = getRegionLabel(values.destinationRegionId);
  
  // Safe image resolution
  const primaryProvince = result.provinceIds?.[0] || 'bali';
  const coverImage = `/assets/province/${primaryProvince}/hero.webp`;
  const fallbackImage = `/assets/province/bali/hero.webp`;

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
      className="w-full flex flex-col gap-10 max-w-5xl mx-auto pb-24"
    >
      {/* Fallback Notice */}
      {isFallback && (
        <div className="bg-[#FFFDF8] border border-[#C89A3D]/30 p-4 rounded-xl flex gap-3 mb-2 shadow-sm">
          <Info className="w-5 h-5 text-[#C89A3D] shrink-0 mt-0.5" />
          <p className="font-inter text-[14px] text-[#2A241F] leading-relaxed">
            <strong className="font-bold text-[#2A241F]">Catatan Sistem:</strong> {adjustmentNote}
          </p>
        </div>
      )}

      {/* Cinematic Hero Header with Image */}
      <div className="w-full relative rounded-[32px] overflow-hidden bg-[#2A241F] shadow-[0_16px_40px_rgba(42,36,31,0.15)] mb-2 aspect-[4/3] md:aspect-[2.35/1] min-h-[400px]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
             src={imgError ? fallbackImage : coverImage}
             alt={result.title}
             fill
             priority
             sizes="(max-width: 1024px) 100vw, 1024px"
             className="object-cover scale-105 transition-transform duration-1000"
             onError={() => setImgError(true)}
          />
          {/* Gradient overlay so text is highly readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A241F]/95 via-[#2A241F]/50 to-[#2A241F]/20" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-end text-center gap-4 px-6 py-12 md:py-16 h-full">
          <span className="font-inter text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase text-[#C89A3D] drop-shadow-sm bg-[#2A241F]/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-[#C89A3D]/20">
            RUTE {values.durationDays} HARI &middot; {region || "DESTINASI"}
          </span>
          <h2 className="font-playfair text-[38px] md:text-[56px] lg:text-[64px] font-bold text-white !text-white leading-[1.05] max-w-4xl drop-shadow-md">
            {result.title}
          </h2>
          <p className="font-inter text-[15px] md:text-[18px] text-white/90 !text-white/90 max-w-2xl leading-relaxed mt-2 drop-shadow">
            {result.summary}
          </p>
        </div>
      </div>

      {/* Visual Map Timeline (Premium Gold/Ivory Style) */}
      <div className="w-full relative border border-[#E8E0CE] rounded-[24px] py-10 md:py-14 flex flex-col items-center justify-center bg-[#FFFDF8] shadow-sm">
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto gap-8 md:gap-4 px-6 md:px-12">
          {origin && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center bg-white px-5 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(42,36,31,0.06)] border border-[#E8E0CE] relative z-20">
              <span className="font-inter text-[10px] font-bold text-[#71675E] uppercase tracking-widest mb-1.5">ASAL</span>
              <span className="font-inter text-[15px] font-bold text-[#2A241F]">{origin}</span>
            </motion.div>
          )}

          <div className="flex-1 w-full flex items-center justify-center relative min-h-[60px]">
            {/* The line */}
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} 
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C89A3D]/50 to-transparent origin-left hidden md:block top-1/2 -translate-y-1/2" 
            />
            
            {/* The stops along the way */}
            <div className="flex flex-col md:flex-row items-center justify-evenly w-full gap-8 md:gap-4 relative z-20">
              {result.stops.map((stop, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex flex-col items-center bg-white px-4 py-3 rounded-2xl border border-[#E8E0CE] shadow-sm min-w-[120px] relative group"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#FFFCF7] border-2 border-[#C89A3D] flex items-center justify-center shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C89A3D]" />
                  </div>
                  <span className="font-inter text-[11px] text-[#C89A3D] font-bold uppercase tracking-wider mt-2 mb-1.5">
                    Hari {stop.dayStart === stop.dayEnd ? stop.dayStart : `${stop.dayStart}-${stop.dayEnd}`}
                  </span>
                  <span className="font-inter text-[14px] font-bold text-[#2A241F] text-center leading-tight tracking-wide">
                    {stop.cityOrCluster}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} className="flex flex-col items-center bg-white px-5 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(42,36,31,0.06)] border border-[#C89A3D]/30 relative z-20">
             <span className="font-inter text-[10px] font-bold text-[#C89A3D] uppercase tracking-widest mb-1.5">TUJUAN</span>
             <span className="font-inter text-[15px] font-bold text-[#2A241F]">{region}</span>
          </motion.div>
        </div>
      </div>

      {/* Rationale & Adaptions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-[#FFFCF7] p-8 md:p-10 rounded-[24px] border border-[#E8E0CE]">
        <div className="flex flex-col gap-4">
          <h3 className="font-inter text-[12px] font-bold tracking-widest text-[#2A241F] uppercase border-b border-[#E8E0CE] pb-3">
            Rasional Rute
          </h3>
          <p className="font-inter text-[15px] leading-relaxed text-[#71675E]">
            Disusun berdasarkan ritme <strong className="font-bold text-[#2A241F]">{getPaceLabel(values.travelPace)?.toLowerCase()}</strong>, 
            anggaran <strong className="font-bold text-[#2A241F]">{getBudgetLabel(values.budgetLevel)?.toLowerCase()}</strong>, 
            dan fokus pada <strong className="font-bold text-[#2A241F]">{getInterestLabels(values.interests).join(", ").toLowerCase()}</strong>. 
            Urutan ini meminimalkan waktu transit sambil memaksimalkan kedalaman pengalaman.
          </p>
        </div>

        {isAdapted && (
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[12px] font-bold tracking-widest text-[#C89A3D] uppercase border-b border-[#E8E0CE] pb-3 flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Adaptasi Durasi ({values.durationDays} Hari)
            </h3>
            <p className="font-inter text-[15px] leading-relaxed text-[#71675E]">
              {adjustmentNote}
            </p>
          </div>
        )}
      </div>

      {/* Day-by-Day Itinerary List */}
      <div className="flex flex-col gap-8 w-full pt-4">
        <h3 className="font-playfair text-[32px] md:text-[40px] font-bold text-[#2A241F] text-center mb-4">
          Panduan Perjalanan
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {result.stops.map((stop, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="flex flex-col p-8 bg-white rounded-[24px] border border-[#E8E0CE] shadow-sm relative group hover:shadow-[0_8px_30px_rgba(42,36,31,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-[#F4EFE6] pb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFFDF8] border border-[#C89A3D]/20 text-[#C89A3D] font-bold text-[15px] shadow-sm">
                   {stop.dayStart === stop.dayEnd ? stop.dayStart : `${stop.dayStart}-${stop.dayEnd}`}
                </div>
                <h4 className="font-playfair text-[26px] font-bold text-[#2A241F] leading-tight">
                  {stop.cityOrCluster}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5 mt-auto">
                {stop.highlights.map((h, i) => (
                  <span key={i} className="flex items-center gap-1.5 font-inter text-[12px] font-bold text-[#71675E] px-3 py-1.5 bg-[#FFFDF8] border border-[#E8E0CE] rounded-full uppercase tracking-wider">
                    <MapPin className="w-3 h-3 text-[#C89A3D]" />
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practical Layer (Accordion) */}
      <div className="bg-white border border-[#E8E0CE] rounded-[24px] overflow-hidden mt-8 shadow-sm">
        <button 
          onClick={() => setShowNotes(!showNotes)}
          className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-[#FFFDF8] transition-colors outline-none focus-visible:bg-[#FFFDF8]"
          aria-expanded={showNotes}
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-[#F4EFE6] rounded-xl">
              <ShieldCheck className="w-6 h-6 text-[#2A241F]" />
            </div>
            <h3 className="font-playfair text-[22px] font-bold text-[#2A241F] m-0">
              Catatan Praktis & Asumsi
            </h3>
          </div>
          <ChevronDown className={`w-6 h-6 text-[#71675E] transition-transform duration-300 ${showNotes ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {showNotes && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 md:p-8 pt-0 flex flex-col gap-8 border-t border-[#E8E0CE] mt-2">
                {result.assumptions && result.assumptions.length > 0 && (
                  <div className="flex flex-col gap-4 pt-6">
                    <span className="font-mono text-[11px] font-bold text-[#C89A3D] uppercase tracking-widest">ASUMSI PENYUSUNAN</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-inter text-[15px] leading-relaxed text-[#71675E]">
                      {result.assumptions.map((assumption, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D] mt-2 shrink-0" />
                          <span>{assumption}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Real Source References */}
                {result.sourceRefs && result.sourceRefs.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="font-mono text-[11px] font-bold text-[#C89A3D] uppercase tracking-widest">SUMBER VALIDASI</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {result.sourceRefs.map((src, i) => (
                        <div key={i} className="flex flex-col gap-1.5 text-[14px] p-5 border border-[#E8E0CE] bg-[#FFFDF8] rounded-xl relative hover:border-[#C89A3D]/50 transition-colors">
                          <span className="font-bold text-[#2A241F]">{src.title}</span>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-[12px] text-[#71675E] gap-1 mt-1">
                            <span>{src.publisher || src.id}</span>
                            {src.lastVerifiedAt && <span>Verifikasi: {src.lastVerifiedAt}</span>}
                          </div>
                          {src.url && (
                            <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-[#C89A3D] font-bold uppercase tracking-wider text-[11px] hover:text-[#2A241F] mt-3 inline-flex items-center gap-1 transition-colors">
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
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-white p-6 border border-[#E8E0CE] rounded-full shadow-[0_8px_30px_rgba(42,36,31,0.04)] w-full max-w-fit mx-auto">
        <button 
          onClick={onEdit} 
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-inter text-[15px] font-bold text-[#2A241F] hover:bg-[#F4EFE6] border border-transparent hover:border-[#E8E0CE] transition-all w-full sm:w-auto hover:scale-105"
        >
          <Edit3 className="w-4 h-4" /> Revisi
        </button>
        
        <div className="hidden sm:block w-px h-8 bg-[#E8E0CE]" />
        
        <button 
          onClick={handleShare}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-inter text-[15px] font-bold text-[#2A241F] hover:bg-[#F4EFE6] border border-transparent hover:border-[#E8E0CE] transition-all w-full sm:w-auto hover:scale-105"
        >
          {isCopied ? <CheckCircle2 className="w-4 h-4 text-[#2D5A27]" /> : <Share2 className="w-4 h-4" />}
          {isCopied ? "Tersalin!" : "Bagikan"}
        </button>

        <div className="hidden sm:block w-px h-8 bg-[#E8E0CE]" />
        
        <button 
          onClick={handleSave}
          className={`group flex items-center justify-center gap-2 px-10 py-3.5 rounded-full font-inter text-[15px] font-bold transition-all w-full sm:w-auto hover:scale-105 ${
            isSaved 
              ? "bg-[#FFFDF8] text-[#C89A3D] border border-[#E8E0CE] cursor-default shadow-sm" 
              : "bg-[#C89A3D] text-[#2A241F] hover:bg-[#E8D48B] shadow-[0_8px_24px_rgba(200,154,61,0.25)]"
          }`}
        >
          {isSaved ? <CheckCircle2 className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4 transition-transform group-hover:scale-110" />}
          {isSaved ? "Tersimpan" : "Simpan Rute"}
        </button>
      </div>

    </motion.div>
  );
}

