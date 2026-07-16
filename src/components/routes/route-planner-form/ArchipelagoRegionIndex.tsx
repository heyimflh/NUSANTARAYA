import type { RoutePlannerRegionId } from "@/types/route-planner";

interface RegionOption {
  id: RoutePlannerRegionId;
  label: string;
  insight: string;
}

const REGIONS: RegionOption[] = [
  { id: "sumatera", label: "Sumatera", insight: "Bentang alam liar dan kuliner pekat." },
  { id: "jawa", label: "Jawa", insight: "Pusat sejarah, budaya keraton, & kota dinamis." },
  { id: "kalimantan", label: "Kalimantan", insight: "Hutan hujan tropis & sungai purba." },
  { id: "sulawesi", label: "Sulawesi", insight: "Tradisi megalitik & pesona pesisir eksotis." },
  { id: "bali-nusa-tenggara", label: "Bali–Nusa Tenggara", insight: "Surgawi tropis & lanskap savana dramatis." },
  { id: "maluku", label: "Maluku", insight: "Jejak rempah & kepulauan karang." },
  { id: "papua", label: "Papua", insight: "Seni kesukuan & batas alam paling timur." },
];

interface ArchipelagoRegionIndexProps {
  value: RoutePlannerRegionId | null;
  onChange: (value: RoutePlannerRegionId) => void;
}

export function ArchipelagoRegionIndex({ value, onChange }: ArchipelagoRegionIndexProps) {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {REGIONS.map((region) => {
          const isActive = value === region.id;
          
          return (
            <button
              key={region.id}
              onClick={() => onChange(region.id)}
              className={`group relative p-4 text-left border rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-[var(--route-primary)]/5 border-[var(--route-primary)] shadow-sm" 
                  : "bg-[var(--route-paper)] border-[var(--route-border)] hover:bg-[var(--route-surface)]"
              }`}
            >
              {isActive && (
                <div className="absolute top-4 right-4 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--route-primary)]">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              )}
              
              <div className="flex flex-col pr-6">
                <span className={`font-playfair text-[18px] mb-1 font-bold transition-colors ${
                  isActive ? "text-[var(--route-primary)]" : "text-[var(--route-ink)]"
                }`}>
                  {region.label}
                </span>
                
                <span className={`font-inter text-[13px] leading-snug transition-colors ${
                  isActive ? "text-[var(--route-earth)]" : "text-[var(--route-muted)]"
                }`}>
                  {region.insight}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Visual Canvas Connection Hint */}
      {value && (
        <div className="mt-4 p-3 bg-[var(--route-saffron)]/10 border border-[var(--route-saffron)]/30 rounded-lg animate-in fade-in">
          <p className="font-inter text-[13px] text-[var(--route-earth)] italic text-center">
            Region ini akan menjadi &quot;Tujuanmu&quot; pada kanvas rute.
          </p>
        </div>
      )}
    </div>
  );
}
