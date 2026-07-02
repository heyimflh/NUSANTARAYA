"use client";

import { FeaturedProvince } from "@/data/preview-map";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingProvinceCardProps {
  province: FeaturedProvince | null;
  isZoomed?: boolean;
  onClose?: () => void;
}

export default function FloatingProvinceCard({ province, isZoomed, onClose }: FloatingProvinceCardProps) {
  return (
    <div className={`absolute z-30 transition-all duration-500 ${isZoomed ? 'bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-8 pointer-events-auto' : 'bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:left-8 md:translate-x-0 pointer-events-none'}`}>
      <AnimatePresence mode="wait">
        {province && (
          <motion.div
            key={province.id + (isZoomed ? '-zoomed' : '-compact')}
            initial={{ opacity: 0, y: 15, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 15, scale: 0.9, filter: "blur(4px)" }}
            transition={{ duration: 0.4, type: "spring", stiffness: 350, damping: 25 }}
            className={`
              relative
              ${isZoomed 
                ? 'bg-white/40 backdrop-blur-[40px] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2rem] p-3 md:p-4 w-[calc(100vw-3rem)] sm:w-[280px] max-w-[300px] md:w-[300px]' 
                : 'overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_16px_40px_-10px_rgba(16,35,63,0.15)] rounded-full p-2 pr-4 flex items-center gap-3 w-max max-w-[calc(100vw-3rem)]'}
            `}
          >
            {/* Subtle magical gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-[#D8B56D]/10 to-transparent pointer-events-none ${isZoomed ? 'rounded-3xl' : 'rounded-full'}`}></div>
            
            {/* Close Button (Apple / Dynamic Style on Desktop, inner button on Mobile) */}
            {isZoomed && onClose && (
              <button 
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                className="absolute md:top-1/2 md:-right-[32px] md:-translate-y-1/2 md:w-[32px] md:h-16 top-3 right-3 w-8 h-8 flex items-center justify-center md:rounded-r-xl rounded-full bg-white/40 backdrop-blur-[40px] hover:bg-white/60 border border-white/40 md:border-l-0 transition-all z-20 md:z-[-1] text-[#10233F] shadow-md md:shadow-[10px_0_15px_-5px_rgba(0,0,0,0.1)] group cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:-translate-x-0.5 hidden md:block"><path d="m15 18-6-6 6-6"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:hidden block"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            )}

            {isZoomed ? (
              // EXPANDED STATE (Apple Style / Informative & Educational)
              <div className="relative z-10 flex flex-col gap-2 md:gap-3">
                {/* Header (Horizontal on mobile, Vertical on desktop) */}
                <div className="flex flex-row md:flex-col gap-3 md:gap-0 items-center md:items-stretch">
                  {/* Image Header */}
                  <div className="w-20 h-20 md:w-full md:h-[160px] shrink-0 rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative group cursor-pointer shadow-sm" onClick={() => window.location.href = province.href}>
                    <img src={province.thumbnail} alt={province.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent hidden md:block"></div>
                    <div className="absolute bottom-3 left-4 right-4 hidden md:block">
                      <p className="text-[9px] font-bold text-white/90 uppercase tracking-[0.2em] drop-shadow-sm mb-0.5">{province.region}</p>
                      <h4 className="font-serif font-bold text-white text-2xl leading-tight drop-shadow-md">
                        {province.name}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Mobile Title (Hidden on desktop) */}
                  <div className="flex flex-col justify-center md:hidden pr-6">
                    <p className="text-[8px] font-bold text-[#D8B56D] uppercase tracking-[0.2em] mb-0.5">{province.region}</p>
                    <h4 className="font-serif font-bold text-[#10233F] text-lg leading-tight">
                      {province.name}
                    </h4>
                  </div>
                </div>
                
                <div className="px-1 md:px-2 pt-1 pb-1 md:pb-2">
                  <p className="text-[11px] md:text-[13px] text-[#10233F] font-medium leading-relaxed opacity-90 line-clamp-2 md:line-clamp-none">
                    "{province.tagline}"
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-4">
                    {province.highlights.map(h => (
                      <span key={h} className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-white/50 border border-white/40 text-[9px] md:text-[10px] font-bold text-[#10233F] shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>
                  
                  <a href={province.href} className="mt-3 md:mt-5 w-full py-2.5 md:py-3.5 bg-black/80 hover:bg-black text-white text-[10px] md:text-xs text-center rounded-xl md:rounded-[1.25rem] font-bold tracking-wide transition-all duration-300 shadow-md flex justify-center items-center gap-2 group">
                    Eksplorasi Provinsi
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1 md:w-3.5 md:h-3.5"><path d="m9 18 6-6-6-6"/></svg>
                  </a>
                </div>
              </div>
            ) : (
              // COMPACT PILL STATE (Hover)
              <>
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md relative z-10">
                  <img 
                    src={province.thumbnail} 
                    alt={province.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col justify-center py-1 relative z-10 pr-2">
                  <h4 className="font-serif font-bold text-[#10233F] text-sm md:text-base leading-tight">
                    {province.name}
                  </h4>
                  <p className="text-[9px] md:text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D8B56D] animate-pulse"></span>
                    <span className="line-clamp-1 max-w-[120px] md:max-w-[150px]">{province.highlights.join(" · ")}</span>
                  </p>
                </div>
                
                <div className="ml-1 w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/50 border border-white flex items-center justify-center shrink-0 shadow-sm relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D8B56D] animate-ping opacity-70"></span>
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-[#D8B56D]"></span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
