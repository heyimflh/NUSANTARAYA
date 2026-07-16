import type { RouteDuration } from "@/types/route-planner";

interface DurationTimelineProps {
  value: RouteDuration;
  onChange: (value: RouteDuration) => void;
}

export function DurationTimeline({ value, onChange }: DurationTimelineProps) {
  const options: { value: RouteDuration; label: string; desc: string }[] = [
    { value: 3, label: "03 HARI", desc: "Satu fokus, perpindahan minimum." },
    { value: 5, label: "05 HARI", desc: "Ritme paling seimbang." },
    { value: 7, label: "07 HARI", desc: "Lebih dalam, ruang luas." },
  ];

  return (
    <div className="w-full relative py-4">
      {/* Track */}
      <div className="absolute top-[32px] left-[10%] right-[10%] h-[2px] bg-[var(--route-border)] -z-10" />
      
      {/* Active Track */}
      <div 
        className="absolute top-[32px] left-[10%] h-[2px] bg-[var(--route-primary)] -z-10 transition-all duration-500 ease-out" 
        style={{ 
          width: value === 3 ? "0%" : value === 5 ? "40%" : "80%" 
        }}
      />

      <div className="flex justify-between items-start">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className="flex flex-col items-center group w-1/3"
            >
              {/* Node */}
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 mb-4 transition-all duration-300 bg-[var(--route-canvas)] ${
                  isActive 
                    ? "border-[var(--route-primary)] scale-110" 
                    : "border-[var(--route-border)] group-hover:border-[var(--route-muted)]"
                }`}
              >
                {isActive && <div className="w-2.5 h-2.5 rounded-full bg-[var(--route-primary)]" />}
              </div>
              
              {/* Labels */}
              <span 
                className={`font-inter text-[13px] font-bold tracking-widest mb-2 transition-colors duration-300 ${
                  isActive ? "text-[var(--route-ink)]" : "text-[var(--route-muted)]"
                }`}
              >
                {opt.label}
              </span>
              
              <span 
                className={`font-playfair text-[14px] italic text-center leading-snug px-2 transition-colors duration-300 ${
                  isActive ? "text-[var(--route-earth)]" : "text-[var(--route-muted)]/50 opacity-0 group-hover:opacity-100"
                }`}
                style={isActive ? { opacity: 1 } : {}}
              >
                {opt.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
