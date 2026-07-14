import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { usePassport } from "@/context/app-context";
import { provinceMapData } from "@/data/provinces/provinces";

type PassportBookVisualProps = {
  isEmpty: boolean;
};

export const PassportBookVisual: React.FC<PassportBookVisualProps> = ({ isEmpty }) => {
  const { passport } = usePassport();
  const shouldReduceMotion = useReducedMotion();

  // Ambil maksimal 8 stempel terbaru
  const completedIds = passport.stamps.slice(-8);

  const coverVariants: any = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={coverVariants}
      className="relative w-full h-full min-h-[420px] md:min-h-[500px] lg:min-h-full rounded-[32px] overflow-hidden bg-[#10233A] border border-[#10233A]/80 shadow-[0_30px_90px_rgba(13,27,42,0.15)] flex items-center justify-center p-8 group"
    >
      {/* Background Texture / Foil */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" aria-hidden="true" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
      
      {/* Watermark / Indonesia Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none" aria-hidden="true">
        {/* Placeholder untuk watermark nusantara global */}
        <div className="w-[120%] h-[120%] bg-[url('/assets/patterns/nusantara-watermark.svg')] bg-center bg-no-repeat bg-contain" />
      </div>

      {/* Gold Foil Frame */}
      <div className="absolute inset-4 border border-[#D6B85B]/20 rounded-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-5 border border-[#D6B85B]/10 rounded-[14px] pointer-events-none" aria-hidden="true" />

      {/* Passport Content Inner */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Emblem */}
        <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center rounded-full bg-[#D6B85B]/10 border border-[#D6B85B]/30 shadow-inner">
           <svg className="w-8 h-8 text-[#D6B85B]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/>
           </svg>
        </div>

        <h4 className="font-serif text-2xl md:text-3xl text-[#D6B85B] font-bold tracking-widest text-center uppercase mb-12">
          Paspor Nusantara
        </h4>

        {isEmpty ? (
          <div className="text-center">
            <p className="text-[#FFFDF8]/60 text-sm md:text-base max-w-xs mx-auto">
              Lembaran ini masih kosong, menanti jejak pertamamu di Nusantara.
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md mx-auto relative">
             <div className="flex flex-wrap gap-4 justify-center items-center">
                {completedIds.map((id, index) => {
                  const prov = provinceMapData.find(p => p.id === id);
                  if (!prov) return null;
                  
                  // Simple rotation for organic look
                  const rotate = (index % 2 === 0 ? -1 : 1) * (3 + (index * 2) % 6);
                  
                  return (
                    <motion.div
                      key={`${id}-${index}`}
                      className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/5 border border-[#8B2020]/20 rounded-full overflow-hidden"
                      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      style={{ 
                        boxShadow: "inset 0 0 10px rgba(139,32,32,0.1)"
                      }}
                      title={prov.name}
                    >
                      {/* CSS Stamp Fallback */}
                      <div className="w-[85%] h-[85%] rounded-full border-2 border-[#8B2020] border-dashed opacity-80 flex flex-col items-center justify-center">
                        <span className="text-[8px] md:text-[10px] font-bold text-[#8B2020] uppercase truncate w-full text-center px-1">
                          {prov.name}
                        </span>
                        <span className="text-[6px] md:text-[7px] text-[#8B2020]/70 uppercase">VISITED</span>
                      </div>
                    </motion.div>
                  )
                })}
             </div>
             {passport.stamps.length > 8 && (
               <div className="mt-6 text-center text-[#D6B85B]/60 text-sm">
                 + {passport.stamps.length - 8} stempel lainnya
               </div>
             )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
