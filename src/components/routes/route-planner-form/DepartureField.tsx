import { useState, useRef, useEffect } from "react";
import { provinceMapData } from "@/data/provinces/provinces";
import { MapPin, X, ChevronDown } from "lucide-react";

interface DepartureFieldProps {
  value: string | null;
  onChange: (value: string | null) => void;
}

export function DepartureField({ value, onChange }: DepartureFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedProvince = value ? provinceMapData.find((p) => p.id === value) : null;

  const filtered = provinceMapData.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 bg-[var(--route-paper)] border rounded-xl text-left transition-all duration-300 ${
          isOpen ? "border-[var(--route-primary)] shadow-sm" : "border-[var(--route-border)] hover:border-[var(--route-muted)]"
        }`}
      >
        <div className="flex items-center gap-3">
          <MapPin className={`w-5 h-5 ${selectedProvince ? "text-[var(--route-primary)]" : "text-[var(--route-muted)]"}`} />
          <div className="flex flex-col">
            {selectedProvince ? (
              <>
                <span className="font-playfair text-[18px] font-bold text-[var(--route-ink)]">
                  {selectedProvince.name}
                </span>
                <span className="font-inter text-[12px] text-[var(--route-muted)]">
                  Memengaruhi entry point ke region.
                </span>
              </>
            ) : (
              <>
                <span className="font-inter text-[15px] font-medium text-[var(--route-ink)]">
                  Saya Fleksibel
                </span>
                <span className="font-inter text-[12px] text-[var(--route-muted)]">
                  Sistem akan memilih titik masuk yang paling masuk akal.
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {selectedProvince && (
            <div 
              role="button"
              tabIndex={0}
              className="p-2 hover:bg-[var(--route-surface)] rounded-full text-[var(--route-muted)] hover:text-[var(--route-ink)]"
              onClick={(e) => { e.stopPropagation(); onChange(null); }}
            >
              <X className="w-4 h-4" />
            </div>
          )}
          <ChevronDown className={`w-5 h-5 text-[var(--route-muted)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-20 top-[calc(100%+8px)] left-0 w-full bg-[var(--route-paper)] border border-[var(--route-border)] rounded-xl shadow-lg max-h-[300px] flex flex-col overflow-hidden">
          <div className="p-3 border-b border-[var(--route-border)] bg-white">
            <input 
              type="text" 
              placeholder="Cari provinsi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full font-inter text-[14px] bg-[var(--route-canvas)] px-4 py-2.5 rounded-lg border border-[var(--route-border)] outline-none focus:border-[var(--route-primary)] text-[var(--route-ink)]"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <button
              onClick={() => { onChange(null); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg font-inter text-[14px] mb-1 ${
                !value ? "bg-[var(--route-surface)] font-bold text-[var(--route-ink)]" : "hover:bg-[var(--route-canvas)] text-[var(--route-muted)]"
              }`}
            >
              Saya Fleksibel
            </button>
            {filtered.map(p => (
              <button
                key={p.id}
                onClick={() => { onChange(p.id); setIsOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-lg font-inter text-[14px] ${
                  value === p.id ? "bg-[var(--route-primary)]/10 font-bold text-[var(--route-primary)]" : "hover:bg-[var(--route-canvas)] text-[var(--route-ink)]"
                }`}
              >
                {p.name}
              </button>
            ))}
            {filtered.length === 0 && (
              <div className="px-4 py-8 text-center text-[var(--route-muted)] font-inter text-[14px]">
                Provinsi tidak ditemukan.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
