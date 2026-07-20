"use client";

import { useState, useMemo } from "react";
import { Compass, Calendar, Coffee, Sparkles, Map } from "lucide-react";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { FlavorId, TastingTrailDraft } from "@/data/rasa/culinary.types";
import { useTastingShelf } from "../_hooks/useTastingShelf";

const DURATIONS = [1, 3, 5, 7];
const PACES = ["Santai", "Seimbang", "Eksploratif"];
const REGIONS = [
  { id: "sumatera", name: "Sumatera" },
  { id: "jawa", name: "Jawa" },
  { id: "kalimantan", name: "Kalimantan" },
  { id: "sulawesi", name: "Sulawesi" },
  { id: "bali-nusa-tenggara", name: "Bali & Nusra" },
  { id: "maluku", name: "Maluku" },
  { id: "papua", name: "Papua" }
];
const FLAVORS: {id: FlavorId, name: string}[] = [
  { id: "pedas", name: "Pedas" }, { id: "gurih", name: "Gurih" },
  { id: "manis", name: "Manis" }, { id: "asam", name: "Asam" },
  { id: "rempah-kuat", name: "Rempah" }, { id: "segar", name: "Segar" }
];

export default function TastingTrailComposer() {
  const { shelf, saveDraftTrail } = useTastingShelf();
  
  const [draft, setDraft] = useState<TastingTrailDraft>({
    duration: 3,
    regionId: "jawa",
    flavorInterests: [],
    pace: "Seimbang",
    savedDishIds: []
  });

  const toggleFlavor = (f: FlavorId) => {
    if (draft.flavorInterests.includes(f)) {
      setDraft(d => ({ ...d, flavorInterests: d.flavorInterests.filter(i => i !== f) }));
    } else if (draft.flavorInterests.length < 3) {
      setDraft(d => ({ ...d, flavorInterests: [...d.flavorInterests, f] }));
    }
  };

  // Generate deterministic preview based on inputs
  const trailDishes = useMemo(() => {
    let pool = CANONICAL_DISHES;
    if (draft.regionId) {
      pool = pool.filter(d => d.regionIds.includes(draft.regionId!));
    }
    
    // Sort by flavor match
    if (draft.flavorInterests.length > 0) {
       pool = [...pool].sort((a, b) => {
         const matchA = a.flavorIds.filter(f => draft.flavorInterests.includes(f)).length;
         const matchB = b.flavorIds.filter(f => draft.flavorInterests.includes(f)).length;
         return matchB - matchA;
       });
    }

    // Include some saved dishes if they fit the region
    const savedInRegion = draft.savedDishIds
      .map(id => CANONICAL_DISHES.find(d => d.id === id))
      .filter(d => d && (!draft.regionId || d.regionIds.includes(draft.regionId))) as typeof CANONICAL_DISHES;
      
    // Determine count based on duration and pace
    const targetCount = draft.duration === 1 ? 3 : draft.duration === 3 ? 5 : draft.duration === 5 ? 7 : 10;
    
    // Mix saved and pool, removing duplicates
    const mixed = Array.from(new Set([...savedInRegion, ...pool]));
    return mixed.slice(0, targetCount);

  }, [draft]);

  const handleSaveDraft = () => {
    saveDraftTrail(draft);
    // Ideally this would also jump to Route Planner via router.push(/routes?...)
    alert("Draft Tasting Trail disimpan. Di aplikasi nyata, ini akan membawa Anda ke Nusa Route.");
  };

  return (
    <section id="tasting-trail" aria-labelledby="composer-heading" className="w-full pt-24">
      <div className="flex flex-col items-center text-center mb-12 border-b border-[var(--rasa-line)] pb-8">
        <Compass size={32} className="text-[var(--rasa-muted)] mb-4" />
        <h2 id="composer-heading" className="text-4xl font-serif text-[var(--rasa-cacao)] mb-3">Rancang Tasting Trail</h2>
        <p className="text-[var(--rasa-ink)] max-w-xl mx-auto">
          Buat draf perjalanan kuliner berdasarkan preferensi Anda. NusaRasa akan merekomendasikan hidangan utama sebelum Anda mematangkannya di Nusa Route Planner.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left: Controls (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Region */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-cacao)] mb-4 flex items-center gap-2">
              <Map size={16} /> Pilih Wilayah
            </h3>
            <div className="flex flex-wrap gap-3">
              {REGIONS.map(r => (
                <button
                  key={r.id}
                  onClick={() => setDraft(d => ({ ...d, regionId: r.id }))}
                  className={`px-4 py-2 border text-sm transition-colors ${
                    draft.regionId === r.id 
                      ? "bg-[var(--rasa-paper-deep)] border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] font-medium shadow-sm" 
                      : "border-[var(--rasa-line)] text-[var(--rasa-ink)] hover:border-[var(--rasa-cacao)]"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Duration & Pace */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-cacao)] mb-4 flex items-center gap-2">
                <Calendar size={16} /> Durasi
              </h3>
              <div className="flex gap-2">
                {DURATIONS.map(dur => (
                  <button
                    key={dur}
                    onClick={() => setDraft(d => ({ ...d, duration: dur as any }))}
                    className={`flex-1 py-2 border text-sm transition-colors ${
                      draft.duration === dur 
                        ? "bg-[var(--rasa-paper-deep)] border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] font-medium shadow-sm" 
                        : "border-[var(--rasa-line)] text-[var(--rasa-ink)] hover:border-[var(--rasa-cacao)]"
                    }`}
                  >
                    {dur} Hari
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-cacao)] mb-4 flex items-center gap-2">
                <Coffee size={16} /> Ritme
              </h3>
              <div className="flex gap-2">
                {PACES.map(p => (
                  <button
                    key={p}
                    onClick={() => setDraft(d => ({ ...d, pace: p as any }))}
                    className={`flex-1 py-2 border text-sm transition-colors ${
                      draft.pace === p 
                        ? "bg-[var(--rasa-paper-deep)] border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] font-medium shadow-sm" 
                        : "border-[var(--rasa-line)] text-[var(--rasa-ink)] hover:border-[var(--rasa-cacao)]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Flavors */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-cacao)] mb-4 flex items-center gap-2">
              <Sparkles size={16} /> Preferensi Rasa (Maks 3)
            </h3>
            <div className="flex flex-wrap gap-3">
              {FLAVORS.map(f => {
                const isActive = draft.flavorInterests.includes(f.id);
                const isDisabled = !isActive && draft.flavorInterests.length >= 3;
                return (
                  <button
                    key={f.id}
                    onClick={() => toggleFlavor(f.id)}
                    disabled={isDisabled}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--rasa-chili)] border-[var(--rasa-chili)] text-white shadow-sm" 
                        : isDisabled
                          ? "border-[var(--rasa-line)] text-[var(--rasa-line)] cursor-not-allowed opacity-50"
                          : "border-[var(--rasa-line)] text-[var(--rasa-ink)] hover:border-[var(--rasa-cacao)]"
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Use saved dishes? */}
          {shelf.savedDishes.length > 0 && (
            <div className="p-4 bg-[var(--rasa-paper)] border border-[var(--rasa-line)] flex justify-between items-center">
               <div>
                  <h4 className="text-sm font-semibold text-[var(--rasa-cacao)]">Sertakan Tasting Shelf?</h4>
                  <p className="text-xs text-[var(--rasa-muted)]">Gunakan {shelf.savedDishes.length} hidangan tersimpan untuk mencocokkan trail.</p>
               </div>
               <button
                 onClick={() => setDraft(d => ({ ...d, savedDishIds: d.savedDishIds.length ? [] : shelf.savedDishes }))}
                 className={`text-xs px-3 py-1.5 border transition-colors ${
                   draft.savedDishIds.length > 0 ? "border-[var(--rasa-chili)] text-[var(--rasa-chili)]" : "border-[var(--rasa-line)] text-[var(--rasa-ink)]"
                 }`}
               >
                 {draft.savedDishIds.length > 0 ? "Disertakan" : "Sertakan"}
               </button>
            </div>
          )}

        </div>

        {/* Right: Live Ticket (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="sticky top-24 bg-[var(--rasa-paper)] border-2 border-[var(--rasa-cacao)] shadow-2xl p-6 md:p-8 flex flex-col min-h-[500px]">
             
             {/* Ticket Header */}
             <div className="border-b border-dashed border-[var(--rasa-cacao)] pb-6 mb-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--rasa-muted)] mb-2 flex justify-between">
                   <span>Tiket Draft</span>
                   <span>Dur: {draft.duration} HARI</span>
                </div>
                <h3 className="text-2xl font-serif text-[var(--rasa-cacao)]">
                  Jalur {draft.pace} di {REGIONS.find(r => r.id === draft.regionId)?.name || "Nusantara"}
                </h3>
                <div className="flex gap-2 mt-3">
                   {draft.flavorInterests.map(f => (
                     <span key={f} className="text-[10px] bg-[var(--rasa-paper-deep)] px-2 py-1 text-[var(--rasa-cacao)] uppercase tracking-widest">{f}</span>
                   ))}
                </div>
             </div>

             {/* Itinerary Preview */}
             <div className="flex-grow">
               <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-4">Preview Pencicipan</h4>
               <div className="flex flex-col gap-5 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--rasa-line)]">
                 {trailDishes.map((dish, i) => (
                   <div key={dish.id} className="relative pl-8">
                     <div className="absolute left-[3px] top-1.5 w-2 h-2 rounded-full bg-[var(--rasa-cacao)] outline outline-4 outline-[var(--rasa-paper)]"></div>
                     <div className="text-sm font-semibold text-[var(--rasa-cacao)]">{dish.localeContent.id.title}</div>
                     <div className="text-xs text-[var(--rasa-muted)] mt-1">{dish.provinceIds[0].replace("-", " ")}</div>
                   </div>
                 ))}
                 
                 {trailDishes.length === 0 && (
                    <div className="pl-8 text-sm text-[var(--rasa-muted)] italic">
                      Ubah kombinasi filter untuk mendapatkan rekomendasi.
                    </div>
                 )}
               </div>
             </div>

             {/* Ticket Footer */}
             <div className="mt-8 pt-6 border-t border-dashed border-[var(--rasa-cacao)]">
                <button
                  onClick={handleSaveDraft}
                  disabled={trailDishes.length === 0}
                  className="w-full py-4 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-widest"
                >
                  Kirim ke Route Planner
                </button>
             </div>
             
          </div>
        </div>

      </div>
    </section>
  );
}
