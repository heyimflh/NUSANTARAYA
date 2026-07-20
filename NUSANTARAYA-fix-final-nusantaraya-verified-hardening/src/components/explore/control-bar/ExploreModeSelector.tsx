"use client";

import { exploreModes, ExploreModeId } from "@/data/exploreControls";
import { cn } from "@/lib/utils";

type ExploreModeSelectorProps = {
  activeMode: ExploreModeId;
  onModeChange: (mode: ExploreModeId) => void;
};

export function ExploreModeSelector({
  activeMode,
  onModeChange,
}: ExploreModeSelectorProps) {
  return (
    <div 
      className="flex bg-[#0D1B2A]/5 p-1.5 rounded-full w-full min-w-0 shadow-inner border border-[#0D1B2A]/5 backdrop-blur-sm"
      role="radiogroup"
      aria-label="Pilih mode eksplorasi"
    >
      {exploreModes.map((mode) => {
        const isActive = activeMode === mode.id;

        return (
          <button
            key={mode.id}
            role="radio"
            aria-checked={isActive}
            onClick={() => onModeChange(mode.id)}
            title={mode.description}
            className={cn(
              "relative flex-1 px-4 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-all duration-[220ms] ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
              isActive
                ? "text-[#0D1B2A] shadow-[0_2px_8px_rgba(13,27,42,0.08)] bg-white ring-1 ring-black/5"
                : "text-[#0D1B2A]/60 hover:text-[#0D1B2A] hover:bg-[#0D1B2A]/5"
            )}
          >
            <span className="relative z-10">{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}
