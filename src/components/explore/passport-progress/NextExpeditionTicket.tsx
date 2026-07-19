import { scrollElementIntoView } from "@/lib/utils/scroll";
import React from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type NextExpeditionTicketProps = {
  summary: PassportProgressSummary;
  onOpenAtlas?: (provinceId: string) => void;
};

export const NextExpeditionTicket: React.FC<NextExpeditionTicketProps> = ({ summary, onOpenAtlas }) => {
  const shouldReduceMotion = useReducedMotion();
  const { nextMilestone } = summary;

  if (!nextMilestone) {
    // Empty state ticket (e.g. 38/38 complete, or wait if no milestone somehow)
    return (
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-32 mt-16">
        <div className="w-full max-w-4xl bg-[#EFE1C5] p-8 md:p-12 flex flex-col items-center justify-center border border-dashed border-[#D8C8A8]">
           <h3 className="font-serif text-3xl text-[#2C2118] mb-2 text-center">Seluruh Ekspedisi Selesai</h3>
           <p className="text-[#776A5D] text-center">Kamu telah melengkapi jejak seluruh Nusantara.</p>
        </div>
      </div>
    );
  }

  let expeditionType = "New Departure";
  if (nextMilestone.reason === "COMPLETES_REGION_BADGE") expeditionType = "Regional Final Stop";
  else if (nextMilestone.reason === "CONTINUE_STARTED_PROVINCE") expeditionType = "Resumed Journey";
  else if (nextMilestone.reason === "CONTINUE_PLANNED_JOURNEY") expeditionType = "Planned Route";

  return (
    <div className="w-full px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-32 mt-16 md:mt-24">
      <div className="mb-8 md:mb-12">
        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#7A302B] mb-2">
          Destinasi Berikutnya
        </h4>
        <h2 className="font-serif text-3xl md:text-5xl text-[#2C2118] font-bold">
          Your Next Expedition
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl flex flex-col md:flex-row shadow-[0_30px_60px_rgba(44,33,24,0.15)] bg-[#FFF9EC] relative overflow-hidden"
      >
        {/* Ticket Header / Stub (Mobile: Top, Desktop: Left) */}
        <div className="bg-[#2C2118] p-8 md:p-12 flex flex-col justify-between shrink-0 md:w-72 relative">
          {/* Decorative grain/noise */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
          
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#B85C38] mb-1">
              Ticket No.
            </p>
            <p className="font-serif text-3xl text-[#EFE1C5] opacity-90 mb-12">
              {String(summary.completedCount + 1).padStart(3, '0')}
            </p>
          </div>
          
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#B85C38] mb-1">
              Tipe Ekspedisi
            </p>
            <p className="text-[13px] font-bold text-[#FFF9EC] uppercase tracking-[0.2em] leading-relaxed">
              {expeditionType}
            </p>
          </div>

          <div className="absolute -left-12 -bottom-12 w-48 h-48 border border-[#3A281C] rounded-full opacity-50 pointer-events-none" />
        </div>

        {/* Perforated Divider */}
        <div className="hidden md:flex flex-col justify-between items-center relative z-20 w-4 -ml-2">
           {/* Hole Punches */}
           {Array.from({ length: 15 }).map((_, i) => (
             <div key={i} className="w-4 h-4 bg-[#F7F0DF] rounded-full shadow-[inset_0_0_4px_rgba(0,0,0,0.1)]" />
           ))}
        </div>
        <div className="md:hidden flex flex-row justify-between items-center relative z-20 h-4 -mt-2 w-full overflow-hidden">
           {Array.from({ length: 20 }).map((_, i) => (
             <div key={i} className="w-4 h-4 bg-[#F7F0DF] rounded-full shadow-[inset_0_0_4px_rgba(0,0,0,0.1)] shrink-0" />
           ))}
        </div>

        {/* Ticket Main Body */}
        <div className="flex-1 p-8 md:p-12 relative bg-[#FFF9EC]">
          {/* subtle paper texture base */}
          <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />

          {/* Regional Stamp watermark */}
          <div className="absolute -right-24 -top-24 w-80 h-80 border-[8px] border-[#EFE1C5] rounded-full flex items-center justify-center opacity-30 pointer-events-none">
            <span className="font-serif text-6xl text-[#EFE1C5] rotate-12">DEST.</span>
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A302B] mb-2">
              Provinsi Tujuan
            </p>
            <h3 className="font-serif text-4xl md:text-6xl text-[#2C2118] font-bold mb-4 uppercase leading-none tracking-tight">
              {nextMilestone.title}
            </h3>
            <p className="text-[#3A281C] text-sm md:text-base max-w-lg leading-relaxed mb-10">
              {nextMilestone.description}
            </p>

            <div className="mt-auto pt-8 border-t border-[#D8C8A8] flex flex-col md:flex-row md:items-end justify-between gap-8">
              
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#776A5D] mb-1">
                    Target Pencapaian
                  </p>
                  <p className="text-[11px] font-bold text-[#B85C38] uppercase tracking-[0.15em]">
                    Stempel {nextMilestone.title}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <Button 
                  onClick={() => {
                    const raniSection = document.getElementById("rani-map-assistant");
                    const raniHeading = document.getElementById("rani-map-assistant-heading");
                    if (raniSection && raniHeading) {
                      raniHeading.focus();
                      raniSection.scrollIntoView({ 
                        behavior: shouldReduceMotion ? "auto" : "smooth", 
                        block: "start" 
                      });
                    }
                  }}
                  variant="outline"
                  className="border-[#2C2118] text-[#2C2118] bg-transparent hover:bg-[#2C2118]/5 rounded-none uppercase tracking-[0.2em] text-[11px] font-bold px-6 h-14 w-full sm:w-auto"
                >
                  Tanya RANI
                </Button>
                <Button 
                  onClick={() => onOpenAtlas && onOpenAtlas(nextMilestone.provinceId)}
                  className="bg-[#2C2118] hover:bg-[#3A281C] text-[#FFF9EC] rounded-none uppercase tracking-[0.2em] text-[11px] font-bold px-8 h-14 w-full sm:w-auto shadow-[0_10px_20px_rgba(44,33,24,0.1)] transition-transform hover:scale-105"
                >
                  {nextMilestone.ctaLabel}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

