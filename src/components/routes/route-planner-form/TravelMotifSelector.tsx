import type { RouteInterest } from "@/types/route-planner";

interface MotifOption {
  id: RouteInterest;
  label: string;
  icon: string;
}

const MOTIFS: MotifOption[] = [
  { id: "budaya", label: "Budaya", icon: "🏛️" },
  { id: "alam", label: "Alam", icon: "⛰️" },
  { id: "kuliner", label: "Kuliner", icon: "🍲" },
  { id: "sejarah", label: "Sejarah", icon: "📜" },
  { id: "petualangan", label: "Petualangan", icon: "🏕️" },
  { id: "relaksasi", label: "Relaksasi", icon: "🌴" },
  { id: "hidden-gems", label: "Hidden Gems", icon: "💎" },
  { id: "kota-kreatif", label: "Kota & Kreativitas", icon: "🏙️" },
];

interface TravelMotifSelectorProps {
  values: RouteInterest[];
  onChange: (values: RouteInterest[]) => void;
}

export function TravelMotifSelector({ values, onChange }: TravelMotifSelectorProps) {
  const handleToggle = (id: RouteInterest) => {
    if (values.includes(id)) {
      onChange(values.filter((v) => v !== id));
    } else {
      if (values.length < 3) {
        onChange([...values, id]);
      }
    }
  };

  const isMaxReached = values.length >= 3;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="font-inter text-[13px] text-[var(--route-muted)]">
          Pilih maksimal 3 stempel pengalaman.
        </span>
        <span className="font-mono text-[12px] font-bold text-[var(--route-primary)] bg-[var(--route-primary)]/10 px-2 py-1 rounded">
          {values.length}/3
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {MOTIFS.map((motif) => {
          const isSelected = values.includes(motif.id);
          const isDisabled = !isSelected && isMaxReached;

          return (
            <button
              key={motif.id}
              onClick={() => handleToggle(motif.id)}
              disabled={isDisabled}
              className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? "border-[var(--route-primary)] bg-[var(--route-primary)]/5"
                  : isDisabled
                  ? "border-[var(--route-border)] bg-[var(--route-surface)] opacity-50 cursor-not-allowed"
                  : "border-[var(--route-border)] bg-[var(--route-paper)] hover:border-[var(--route-muted)] hover:bg-[var(--route-surface)]"
              }`}
              style={{
                // Stamp shape effect
                borderRadius: "8px",
                borderStyle: isSelected ? "solid" : "dashed",
              }}
            >
              <span className="text-[24px] mb-2">{motif.icon}</span>
              <span className={`font-inter text-[13px] font-bold text-center leading-tight ${
                isSelected ? "text-[var(--route-primary)]" : "text-[var(--route-ink)]"
              }`}>
                {motif.label}
              </span>
            </button>
          );
        })}
      </div>

      {isMaxReached && (
        <div className="mt-4 p-3 bg-[var(--route-sea-glass)]/10 border border-[var(--route-sea-glass)]/30 rounded-lg animate-in fade-in">
          <p className="font-inter text-[13px] text-[var(--route-earth)] italic text-center">
            &quot;Rute ini mulai terasa fokus dan memiliki karakter yang jelas.&quot;
          </p>
        </div>
      )}
    </div>
  );
}
