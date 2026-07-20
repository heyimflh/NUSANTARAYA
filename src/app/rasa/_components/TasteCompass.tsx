"use client";

import { useState } from "react";
import { useRasaState, RasaMode } from "../_hooks/useRasaState";
import { Search, SlidersHorizontal, Check, X } from "lucide-react";
import { FlavorId } from "@/data/rasa/culinary.types";

const ALL_FLAVORS: { id: FlavorId; label: string }[] = [
  { id: "pedas", label: "Pedas" },
  { id: "gurih", label: "Gurih" },
  { id: "manis", label: "Manis" },
  { id: "asam", label: "Asam" },
  { id: "rempah-kuat", label: "Rempah Kuat" },
  { id: "segar", label: "Segar" },
  { id: "pahit", label: "Pahit" },
  { id: "smoky", label: "Smoky" },
];

export default function TasteCompass() {
  const { query, mode, activeFlavors, setQuery, setMode, toggleFlavor, resetFilters } = useRasaState();
  const [localQuery, setLocalQuery] = useState(query);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Debounced search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(localQuery);
  };

  const handleModeChange = (newMode: RasaMode) => {
    setMode(newMode);
  };

  const hasActiveFilters = query || activeFlavors.length > 0;

  return (
    <section id="taste-compass" aria-labelledby="compass-heading" className="w-full relative">
      <h2 id="compass-heading" className="sr-only">Taste Compass - Navigasi Rasa</h2>
      
      <div className="w-full border-t border-b border-[var(--rasa-line)] py-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Search & Mode */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Ledger Line Search */}
              <form onSubmit={handleSearch} className="relative w-full group">
                <input 
                  type="text" 
                  value={localQuery}
                  onChange={(e) => setLocalQuery(e.target.value)}
                  placeholder="Cari hidangan, daerah, bahan..."
                  className="w-full bg-transparent border-b border-[var(--rasa-line)] text-[var(--rasa-ink)] placeholder:text-[var(--rasa-muted)] pb-2 pl-8 focus:outline-none focus:border-[var(--rasa-cacao)] transition-colors text-lg"
                />
                <Search size={20} className="absolute left-0 bottom-3 text-[var(--rasa-muted)] group-focus-within:text-[var(--rasa-cacao)] transition-colors" />
              </form>

              {/* Mode Selector */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] block mb-3">Perspektif</span>
                <div className="flex gap-4">
                  {(["explore", "tourist", "learn"] as RasaMode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => handleModeChange(m)}
                      className={`text-sm font-medium pb-1 border-b-2 transition-colors capitalize ${
                        mode === m 
                          ? "border-[var(--rasa-cacao)] text-[var(--rasa-cacao)]" 
                          : "border-transparent text-[var(--rasa-muted)] hover:text-[var(--rasa-ink)]"
                      }`}
                      aria-pressed={mode === m}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Flavor Swatches */}
            <div className="lg:col-span-8 flex flex-col gap-4 lg:pl-12 lg:border-l border-[var(--rasa-line)]">
              <div className="flex justify-between items-center">
                 <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)]">Spektrum Rasa</span>
                 <button 
                   onClick={() => setShowAdvanced(!showAdvanced)}
                   className="text-xs flex items-center gap-1 text-[var(--rasa-cacao)] hover:text-[var(--rasa-chili)] transition-colors uppercase tracking-widest"
                 >
                   <SlidersHorizontal size={14} />
                   {showAdvanced ? "Tutup Filter" : "Filter Lanjutan"}
                 </button>
              </div>

              <div className="flex flex-wrap gap-3">
                 {ALL_FLAVORS.map(flavor => {
                   const isActive = activeFlavors.includes(flavor.id);
                   return (
                     <button
                       key={flavor.id}
                       onClick={() => toggleFlavor(flavor.id)}
                       aria-pressed={isActive}
                       className={`
                         relative flex items-center justify-between px-4 py-2 border transition-all duration-200
                         ${isActive 
                           ? "border-[var(--rasa-chili)] bg-[var(--rasa-paper)] text-[var(--rasa-chili)] shadow-sm" 
                           : "border-[var(--rasa-line)] hover:border-[var(--rasa-cacao)] text-[var(--rasa-ink)]"
                         }
                       `}
                     >
                       <span className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}>{flavor.label}</span>
                       {isActive && <Check size={14} className="ml-2" />}
                     </button>
                   );
                 })}
              </div>

              {/* Active Context Summary */}
              {hasActiveFilters && (
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-[var(--rasa-line)] border-dashed">
                  <span className="text-sm text-[var(--rasa-muted)]">Filter aktif:</span>
                  <button 
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-xs text-[var(--rasa-error)] hover:underline"
                  >
                    <X size={12} /> Hapus semua
                  </button>
                </div>
              )}
            </div>

         </div>
      </div>
    </section>
  );
}
