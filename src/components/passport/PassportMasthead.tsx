"use client";

import { motion } from "framer-motion";
import { PassportProgressSummary } from "@/hooks/usePassportProgressSummary";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { BADGE_REGISTRY } from "@/lib/passport/badges";

import { usePassport } from "@/context/app-context";

export const PassportMasthead = ({ identity }: { identity: PassportProgressSummary }) => {
  const { passport } = usePassport();
  const isComplete = identity.completedCount === identity.totalProvinceCount;
  const isNew = identity.completedCount === 0;
  
  const latestAchievementObj = identity.latestAchievement 
    ? BADGE_REGISTRY.find(b => b.id === identity.latestAchievement?.referenceId) 
    : null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-12"
    >
      {/* Left: Expedition Identity */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-[#1A1410] text-[13px] font-bold uppercase tracking-[0.25em] mb-4 drop-shadow-[0_2px_12px_rgba(255,255,255,0.8)]">
          Nusa Passport
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1A1410] font-semibold leading-[1.1] mb-6 drop-shadow-[0_4px_16px_rgba(255,255,255,0.7)]">
          Setiap Jelajah<br />Meninggalkan Jejak.
        </h1>
        <p className="text-[#5C4A26] text-base md:text-[17px] mb-10 max-w-lg leading-relaxed drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
          {isComplete 
            ? "Jejak Nusantara lengkap—koleksi tetap dapat kamu telusuri kembali."
            : isNew
            ? "Passport-mu siap menerima jejak pertama. Lanjutkan jelajah untuk memulai."
            : "Lanjutkan rute yang tersimpan, lihat provinsi yang sedang kamu telusuri, dan buka pencapaian baru dari perjalanan digitalmu di Nusantara."
          }
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/explore"
            className="group relative inline-flex items-center justify-between bg-[#3A281F] text-[#FFF9EE] px-7 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform shadow-[0_8px_20px_rgba(58,40,31,0.15)]"
          >
            <span className="relative z-10">Lanjutkan Jelajah</span>
            <div className="relative z-10 w-7 h-7 ml-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C9A84C] group-hover:text-[#2B211B] transition-colors">
              <ArrowUpRight size={14} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform" />
            </div>
            <div className="absolute inset-0 bg-[#241913] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
          <div className="flex flex-col gap-1">
            <p className="text-[9px] text-[#786B60] font-semibold uppercase tracking-[0.1em]">Tersimpan di perangkat ini</p>
            <p className="text-[9px] text-[#786B60] font-semibold uppercase tracking-[0.1em]">Tanpa akun</p>
          </div>
        </div>
      </div>

      {/* Right: Progress Instrument (Folio) */}
      <div className="flex-1 w-full relative">
        {/* Binding strip */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#3A281F] z-10 rounded-l-2xl flex flex-col justify-between py-12 shadow-[4px_0_12px_rgba(0,0,0,0.1)] border-r border-[#241913]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-2 bg-[#1A120E] shadow-inner" />
          ))}
        </div>
        
        {/* Folio card */}
        <div className="bg-[#FFFCF6] ml-6 rounded-r-2xl border border-[#E8DFD1] shadow-[0_12px_40px_rgba(43,33,27,0.06)] p-8 md:p-10 pl-12 md:pl-14 relative overflow-hidden flex flex-col justify-between h-full min-h-[300px]">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/assets/noise.webp')] opacity-[0.35] pointer-events-none mix-blend-multiply" />
          
          <div className="flex justify-between items-start mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#786B60] font-bold mb-2">
                Identitas Penjelajah
              </p>
              <h3 className="text-[28px] md:text-[32px] font-serif text-[#1A1410] font-semibold leading-tight">
                {identity.currentLevel}
              </h3>
            </div>
            {/* Number plate x/38 */}
            <div className="bg-[#B88741] text-[#FFFCF6] px-5 py-2.5 rounded-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)] flex flex-col items-center justify-center min-w-[70px] border border-[#966C2E] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              <span className="text-2xl font-serif font-bold leading-none relative z-10">{identity.completedCount}</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none mt-2 opacity-90 border-t border-[#FFFCF6]/40 pt-1.5 w-full text-center relative z-10">
                38
              </span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Progress to next level */}
            {identity.nextLevel && (
              <div>
                <div className="flex justify-between text-xs font-semibold mb-2.5">
                  <span className="text-[#3A281F]">{identity.completedCount} Provinsi</span>
                  <span className="text-[#B85C38]">{identity.stampsToNextLevel} lagi menuju {identity.nextLevel}</span>
                </div>
                <div className="w-full h-2 bg-[#F3EBDD] rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${identity.nationalPercent}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-[#B85C38]"
                  />
                </div>
              </div>
            )}

            {/* Stats row */}
            <div className="flex items-center justify-between border-t border-[#E8DFD1] pt-6">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#786B60] mb-1.5">Total XP</p>
                <p className="text-2xl font-mono text-[#1A1410] font-medium leading-none">{passport.xp}</p>
              </div>
              
              {latestAchievementObj ? (
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#786B60] mb-1.5">Latest Achievement</p>
                    <p className="text-sm font-serif text-[#1A1410] font-medium">{latestAchievementObj.label}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-[#DCCDB8] flex items-center justify-center bg-[#F3EBDD] overflow-hidden p-1.5">
                    {latestAchievementObj.asset ? (
                      <Image 
                        src={latestAchievementObj.asset} 
                        alt={latestAchievementObj.label} 
                        width={40} 
                        height={40} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#A77B32]/20 rounded-full" />
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 opacity-50">
                  <div className="text-right">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#786B60] mb-1.5">Latest Achievement</p>
                    <p className="text-sm font-serif text-[#1A1410] font-medium">-</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#DCCDB8] flex items-center justify-center bg-transparent" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
