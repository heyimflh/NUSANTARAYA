import type { BudgetLevel } from "@/types/route-planner";

interface ComfortOption {
  id: BudgetLevel;
  label: string;
  impact: string;
}

const COMFORT_LEVELS: ComfortOption[] = [
  { id: "hemat", label: "LOKAL & RINGKAS", impact: "Lebih banyak pilihan lokal, perpindahan efisien, aktivitas terjangkau." },
  { id: "menengah", label: "SEIMBANG", impact: "Kenyamanan dan pengalaman berada dalam keseimbangan." },
  { id: "premium", label: "LEBIH NYAMAN", impact: "Prioritas pada kenyamanan perpindahan dan pengalaman terkurasi." },
  { id: "fleksibel", label: "FLEKSIBEL", impact: "Rute ditentukan oleh kecocokan pengalaman, bukan satu tingkat biaya." },
];

interface TravelComfortSpectrumProps {
  value: BudgetLevel;
  onChange: (value: BudgetLevel) => void;
}

export function TravelComfortSpectrum({ value, onChange }: TravelComfortSpectrumProps) {
  const selectedIndex = COMFORT_LEVELS.findIndex(c => c.id === value);
  const selectedImpact = COMFORT_LEVELS[selectedIndex]?.impact;

  return (
    <div className="w-full mt-4 mb-2">
      {/* Spectrum Bar */}
      <div className="relative w-full h-12 bg-[var(--route-surface)] rounded-full flex overflow-hidden border border-[var(--route-border)]">
        {COMFORT_LEVELS.map((level, idx) => {
          const isActive = value === level.id;
          return (
            <button
              key={level.id}
              onClick={() => onChange(level.id)}
              className={`relative flex-1 h-full flex items-center justify-center transition-all duration-300 outline-none focus-visible:bg-[var(--route-border)] ${
                isActive ? "bg-[var(--route-primary)] shadow-sm z-10" : "hover:bg-[var(--route-border)]"
              }`}
            >
              <span className={`font-inter text-[11px] sm:text-[12px] font-bold tracking-wider transition-colors ${
                isActive ? "text-white" : "text-[var(--route-muted)]"
              }`}>
                {level.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-4 border border-[var(--route-border)] border-dashed rounded-xl bg-[var(--route-paper)] min-h-[72px] flex items-center justify-center animate-in fade-in">
        <p className="font-playfair text-[15px] italic text-[var(--route-earth)] text-center">
          {selectedImpact}
        </p>
      </div>
    </div>
  );
}
