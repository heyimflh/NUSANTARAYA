import React from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Map } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type PassportMilestoneCardsProps = {
  summary: PassportProgressSummary;
  onOpenAtlas?: (provinceId: string) => void;
  onOpenSummary?: (provinceId: string) => void;
};

export const PassportMilestoneCards: React.FC<PassportMilestoneCardsProps> = ({
  summary,
  onOpenAtlas,
  onOpenSummary,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const { nextMilestone } = summary;

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Pencapaian Terbaru */}
      <motion.div variants={cardVariants} className="flex flex-col bg-[#FFFDF8] rounded-[24px] border border-[#E8E0CE] shadow-sm p-6 md:p-8 relative overflow-hidden">
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Pencapaian Terbaru
        </h4>
        
        {summary.completedCount > 0 ? (
          <div className="flex items-start gap-4 h-full">
            <div className="w-12 h-12 rounded-full bg-[#D6B85B]/10 border border-[#D6B85B]/30 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-nusaGold" />
            </div>
            <div className="flex flex-col h-full justify-center">
              <div className="text-xs font-bold text-nusaGold uppercase mb-1">
                Level Explorer
              </div>
              <h5 className="font-serif text-xl font-bold text-nusaNavy mb-2">
                {summary.currentLevel}
              </h5>
              <p className="text-sm text-muted-foreground">
                Terus jelajahi Nusantara untuk membuka pencapaian berikutnya.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-full opacity-60 py-4">
            <Trophy className="w-8 h-8 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">
              Belum ada pencapaian. Selesaikan provinsi pertamamu.
            </p>
          </div>
        )}
      </motion.div>

      {/* Langkah Berikutnya */}
      <motion.div variants={cardVariants} className="flex flex-col bg-[#0D1B2A] rounded-[24px] shadow-md p-6 md:p-8 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        
        <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFFDF8]/60 mb-4 relative z-10">
          Langkah Berikutnya
        </h4>
        
        {nextMilestone ? (
          <div className="flex flex-col h-full relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-nusaGold bg-nusaGold/10 px-2 py-0.5 rounded">
                REKOMENDASI
              </span>
            </div>
            <h5 className="font-serif text-xl md:text-2xl font-bold text-[#FFFDF8] mb-2">
              {nextMilestone.title}
            </h5>
            <p className="text-sm text-[#FFFDF8]/70 mb-6">
              {nextMilestone.description}
            </p>
            
            <div className="mt-auto flex flex-wrap gap-3">
              <Button 
                variant="gold"
                className="group shadow-md"
                onClick={() => onOpenAtlas && onOpenAtlas(nextMilestone.provinceId)}
              >
                {nextMilestone.ctaLabel}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-[#FFFDF8]/20 text-[#FFFDF8] hover:bg-[#FFFDF8]/10 hover:text-white"
                onClick={() => onOpenSummary && onOpenSummary(nextMilestone.provinceId)}
              >
                Lihat Ringkasan
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-full opacity-70 py-4 relative z-10">
            <Map className="w-8 h-8 text-nusaGold mb-3" />
            <p className="text-sm text-[#FFFDF8]/80 mb-4">
              Jelajahi interaktif peta untuk menemukan langkah berikutnya.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
