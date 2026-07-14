import React from "react";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import { motion, useReducedMotion } from "framer-motion";

type PassportProgressDossierProps = {
  summary: PassportProgressSummary;
  isEmpty: boolean;
};

export const PassportProgressDossier: React.FC<PassportProgressDossierProps> = ({
  summary,
  isEmpty,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 10 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="flex flex-col h-full bg-[#FFFDF8] rounded-[32px] p-6 md:p-8 lg:p-10 border border-[#E8E0CE] shadow-[0_30px_100px_rgba(13,27,42,0.10)] relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.1),transparent_70%)] pointer-events-none" aria-hidden="true" />

      {/* Main Count */}
      <motion.div variants={itemVariants} className="mb-8">
        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
          Progress Nusantara
        </h4>
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-6xl md:text-[88px] leading-none text-nusaNavy font-bold">
            {summary.completedCount}
          </span>
          <span className="font-serif text-3xl md:text-5xl text-muted-foreground/60">
            / 38
          </span>
        </div>
        <div className="mt-2 text-base md:text-lg text-nusaNavy font-medium">
          provinsi telah diselesaikan
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div variants={itemVariants} className="mb-10 w-full">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={38}
          aria-valuenow={summary.completedCount}
          aria-valuetext={`${summary.completedCount} dari 38 provinsi selesai`}
          className="h-3 w-full bg-[#F8F4EA] rounded-full overflow-hidden border border-[#E8E0CE]/50"
        >
          <motion.div
            className="h-full bg-nusaGold"
            initial={{ width: 0 }}
            animate={{ width: `${summary.nationalPercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Current Level */}
      <motion.div variants={itemVariants} className="mb-8 p-5 bg-[#F8F4EA]/60 border border-[#E8E0CE]/50 rounded-2xl">
        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
          Level Saat Ini
        </div>
        <div className="font-serif text-2xl md:text-[28px] font-bold text-nusaNavy mb-2">
          {summary.currentLevel}
        </div>
        {summary.nextLevel ? (
          <div className="text-sm text-muted-foreground font-medium">
            <strong className="text-nusaGold">{summary.stampsToNextLevel}</strong> stempel lagi menuju {summary.nextLevel}
          </div>
        ) : (
          <div className="text-sm text-nusaGold font-medium">
            Seluruh tingkat utama telah terbuka.
          </div>
        )}
      </motion.div>

      {/* Three State Summary */}
      <motion.div variants={itemVariants} className="mt-auto grid grid-cols-3 gap-2 border-t border-[#E8E0CE]/60 pt-6">
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 border border-transparent hover:border-[#E8E0CE] transition-colors">
          <span className="text-2xl font-serif font-bold text-nusaNavy mb-1">
            {summary.completedCount}
          </span>
          <span className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase text-center">
            Selesai
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 border border-transparent hover:border-[#E8E0CE] transition-colors">
          <span className="text-2xl font-serif font-bold text-[#8B2020] mb-1">
            {summary.startedCount}
          </span>
          <span className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase text-center">
            Dimulai
          </span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/50 border border-transparent hover:border-[#E8E0CE] transition-colors">
          <span className="text-2xl font-serif font-bold text-muted-foreground mb-1">
            {summary.plannedCount}
          </span>
          <span className="text-[11px] md:text-xs font-bold text-muted-foreground uppercase text-center">
            Rencana
          </span>
        </div>
      </motion.div>
    </div>
  );
};
