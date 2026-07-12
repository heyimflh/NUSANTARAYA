"use client";

import { Crown, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type ExploreQuickActionsProps = {
  showFlagshipOnly: boolean;
  onReset: () => void;
  onToggleFlagship: () => void;
};

export function ExploreQuickActions({
  showFlagshipOnly,
  onReset,
  onToggleFlagship,
}: ExploreQuickActionsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-3 w-full justify-end">
      <button
        onClick={onToggleFlagship}
        aria-pressed={showFlagshipOnly}
        className={cn(
          "flex-1 md:flex-none flex items-center justify-center gap-1.5 md:gap-2 px-4 py-2 md:py-2.5 rounded-full border transition-all duration-[220ms] ease-out font-semibold text-[13px] md:text-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
          showFlagshipOnly
            ? "bg-[#C9A84C] text-white border-[#C9A84C] shadow-md shadow-[#C9A84C]/20"
            : "bg-white border-[#E8E0CE] text-[#0D1B2A]/70 hover:border-[#C9A84C]/50 hover:text-[#C9A84C] hover:bg-[#C9A84C]/5"
        )}
      >
        <Crown className={cn("w-4 h-4 transition-transform duration-300", showFlagshipOnly ? "text-white scale-110" : "text-[#C9A84C]")} />
        <span className="hidden sm:inline">Unggulan</span>
      </button>

      <button
        onClick={onReset}
        className="shrink-0 flex items-center justify-center px-4 py-2 md:py-2.5 bg-white border border-[#E8E0CE] rounded-full text-[#0D1B2A]/60 hover:text-[#0D1B2A] hover:bg-[#0D1B2A]/5 hover:border-[#0D1B2A]/20 transition-all duration-[220ms] font-semibold text-[13px] md:text-sm shadow-sm active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2"
        aria-label="Reset semua filter"
        title="Reset semua filter"
      >
        <RotateCcw className="w-4 h-4 md:mr-1.5 transition-transform duration-300 group-hover:-rotate-45" />
        <span className="hidden lg:inline">Reset</span>
      </button>
    </div>
  );
}
