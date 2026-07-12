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
    <div className="flex bg-[#0D1B2A]/[0.04] p-1.5 rounded-full w-full md:w-auto shadow-inner border border-[#0D1B2A]/[0.06] backdrop-blur-sm">
      {exploreModes.map((mode) => {
        const isActive = activeMode === mode.id;

        return (
          <button
            key={mode.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onModeChange(mode.id)}
            title={mode.description}
            className={cn(
              "flex-1 md:flex-none px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C9A84C]/25",
              isActive
                ? "bg-white text-[#0D1B2A] shadow-[0_4px_16px_rgba(13,27,42,0.08)] ring-1 ring-black/[0.03]"
                : "text-[#0D1B2A]/60 hover:text-[#0D1B2A]/90 hover:bg-black/[0.03]"
            )}
          >
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
