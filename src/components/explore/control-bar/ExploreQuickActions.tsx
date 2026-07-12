"use client";

import { RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type ExploreQuickActionsProps = {
  onReset: () => void;
  onShowFlagship: () => void;
};

export function ExploreQuickActions({
  onReset,
  onShowFlagship,
}: ExploreQuickActionsProps) {
  return (
    <div className="flex items-center gap-3 w-full md:w-auto">
      <button
        type="button"
        onClick={onReset}
        className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[#E8E0CE] bg-white/80 text-[#0D1B2A]/80 shadow-sm transition-all duration-300 hover:border-[#C9A84C]/50 hover:bg-white hover:text-[#0D1B2A] hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A84C]/25 group"
      >
        <RotateCcw className="w-4 h-4 text-[#0D1B2A]/60 group-hover:text-[#C9A84C] group-hover:-rotate-45 transition-all duration-300" />
        <span>Reset Peta</span>
      </button>

      <button
        type="button"
        onClick={onShowFlagship}
        className="flex-1 md:flex-none flex justify-center items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#0D1B2A] shadow-sm transition-all duration-300 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/20 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A84C]/25 group"
      >
        <Sparkles className="w-4 h-4 text-[#C9A84C] group-hover:animate-pulse" />
        <span className="hidden md:inline">Tampilkan Flagship</span>
        <span className="md:hidden">Flagship</span>
      </button>

      {/* Passport button - disabled with "Soon" badge for now */}
      <button
        type="button"
        disabled
        className="hidden md:flex justify-center items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[#0D1B2A]/10 bg-[#0D1B2A]/5 text-[#0D1B2A]/40 cursor-not-allowed"
      >
        <span>Buka Passport</span>
        <span className="px-2 py-0.5 text-[10px] font-bold tracking-wider text-white bg-[#0D1B2A]/40 rounded-full uppercase">
          Soon
        </span>
      </button>
    </div>
  );
}
