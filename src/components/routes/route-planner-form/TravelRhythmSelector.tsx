import type { TravelPace } from "@/types/route-planner";

interface RhythmOption {
  id: TravelPace;
  label: string;
  visual: string;
  desc: string;
}

const RHYTHMS: RhythmOption[] = [
  { 
    id: "santai", 
    label: "Santai", 
    visual: "●──────●──────●", 
    desc: "Sedikit agenda, ruang untuk tinggal lebih lama." 
  },
  { 
    id: "seimbang", 
    label: "Seimbang", 
    visual: "●───●───●───●", 
    desc: "Eksplorasi dan waktu jeda seimbang." 
  },
  { 
    id: "eksploratif", 
    label: "Eksploratif", 
    visual: "●─●─●─●─●─●", 
    desc: "Lebih aktif, variatif, namun tetap realistis." 
  },
];

interface TravelRhythmSelectorProps {
  value: TravelPace;
  onChange: (value: TravelPace) => void;
}

export function TravelRhythmSelector({ value, onChange }: TravelRhythmSelectorProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      {RHYTHMS.map((rhythm) => {
        const isActive = value === rhythm.id;

        return (
          <button
            key={rhythm.id}
            onClick={() => onChange(rhythm.id)}
            className={`w-full flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
              isActive 
                ? "bg-[var(--route-primary)]/5 border-[var(--route-primary)] shadow-sm" 
                : "bg-[var(--route-paper)] border-[var(--route-border)] hover:bg-[var(--route-surface)]"
            }`}
          >
            <div className="flex flex-col text-left mb-3 sm:mb-0">
              <span className={`font-playfair text-[18px] font-bold mb-1 transition-colors ${
                isActive ? "text-[var(--route-primary)]" : "text-[var(--route-ink)]"
              }`}>
                {rhythm.label}
              </span>
              <span className={`font-inter text-[13px] transition-colors ${
                isActive ? "text-[var(--route-earth)]" : "text-[var(--route-muted)]"
              }`}>
                {rhythm.desc}
              </span>
            </div>

            <div className={`font-mono text-[14px] tracking-[0.2em] font-bold transition-colors ${
              isActive ? "text-[var(--route-primary)]" : "text-[var(--route-border)]"
            }`}>
              {rhythm.visual}
            </div>
          </button>
        );
      })}
    </div>
  );
}
