import { Destination } from "./heroData";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HeroDestinationSliderProps = {
  destinations: Destination[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function HeroDestinationSlider({
  destinations,
  activeIndex,
  onSelect,
  onNext,
  onPrevious,
}: HeroDestinationSliderProps) {
  return (
    <div className="absolute bottom-24 md:bottom-8 left-0 z-40 w-full px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-6">
        <button
          onClick={onPrevious}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 border border-white/10 hover:border-[#C9A84C]/50"
          aria-label="Destinasi sebelumnya"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="hidden flex-1 items-end justify-center gap-8 md:flex">
          {destinations.map((destination, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={destination.id}
                onClick={() => onSelect(index)}
                className={`group relative min-w-[100px] text-center transition-all duration-300 ${
                  isActive ? "opacity-100 scale-105" : "opacity-45 hover:opacity-80"
                }`}
              >
                <span className="block text-xs uppercase tracking-[0.2em] text-white/60 font-semibold mb-1">
                  {destination.shortLabel}
                </span>
                <span
                  className={`block text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "font-bold text-white drop-shadow-md"
                      : "font-medium text-white/70 group-hover:text-white"
                  }`}
                >
                  {destination.title}
                </span>

                {isActive && (
                  <span className="absolute -top-4 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex-1 text-center md:hidden">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold drop-shadow-md">
            {destinations[activeIndex].shortLabel}
          </p>
          <p className="mt-1 text-xl font-bold text-white drop-shadow-md">
            {destinations[activeIndex].title}
          </p>
        </div>

        <button
          onClick={onNext}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 border border-white/10 hover:border-[#C9A84C]/50"
          aria-label="Destinasi berikutnya"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
