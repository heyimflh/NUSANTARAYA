"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightLeft, ExternalLink } from "lucide-react";
import { CANONICAL_BATTLE_PAIRS, CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { RasaAssetManifest } from "@/data/rasa/asset-manifest";
import { useTastingShelf } from "../_hooks/useTastingShelf";

export default function FoodBattleTable() {
  const [activePairId, setActivePairId] = useState(CANONICAL_BATTLE_PAIRS[0]?.id);
  const activePair = CANONICAL_BATTLE_PAIRS.find(p => p.id === activePairId) || CANONICAL_BATTLE_PAIRS[0];
  
  const dishA = CANONICAL_DISHES.find(d => d.status === "published" && d.id === activePair.dishAId);
  const dishB = CANONICAL_DISHES.find(d => d.status === "published" && d.id === activePair.dishBId);
  
  const { toggleSaveBattlePair, isBattlePairSaved } = useTastingShelf();

  if (!activePair || !dishA || !dishB) return null;

  const isSaved = isBattlePairSaved(activePair.id);

  return (
    <section id="food-battle" aria-labelledby="battle-heading" className="w-full pt-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-[var(--rasa-line)] pb-4 gap-6">
        <div className="text-center md:text-left">
           <h2 id="battle-heading" className="text-3xl font-serif text-[var(--rasa-cacao)] flex items-center gap-3 justify-center md:justify-start">
              <ArrowRightLeft size={28} className="text-[var(--rasa-muted)]" />
              Tasting Table
           </h2>
           <p className="text-sm text-[var(--rasa-muted)] mt-2 max-w-md mx-auto md:mx-0">
             Membandingkan karakter dua hidangan ikonik tanpa menentukan yang terbaik.
           </p>
        </div>
        
        {/* Pair Selector */}
        <div className="relative">
          <select 
            value={activePairId}
            onChange={(e) => setActivePairId(e.target.value)}
            className="appearance-none bg-[var(--rasa-paper)] border border-[var(--rasa-line)] text-[var(--rasa-cacao)] text-sm font-medium py-3 pl-4 pr-10 focus:outline-none focus:border-[var(--rasa-chili)] cursor-pointer"
            aria-label="Pilih pasangan hidangan"
          >
            {CANONICAL_BATTLE_PAIRS.map(pair => {
              const dA = CANONICAL_DISHES.find(d => d.status === "published" && d.id === pair.dishAId)?.localeContent.id.title;
              const dB = CANONICAL_DISHES.find(d => d.status === "published" && d.id === pair.dishBId)?.localeContent.id.title;
              return (
                <option key={pair.id} value={pair.id}>
                  {dA} vs {dB}
                </option>
              );
            })}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[var(--rasa-muted)]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
          </div>
        </div>
      </div>

      <div className="mb-12 text-center max-w-2xl mx-auto">
        <p className="text-[var(--rasa-ink)] leading-relaxed italic border-l-2 md:border-l-0 md:border-t-2 border-[var(--rasa-line)] pl-4 md:pl-0 md:pt-4">
          "{activePair.context}"
        </p>
      </div>

      {/* Desktop: 5 - 2 - 5. Mobile: Stacked A -> Spine -> B */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
        
        {/* Dish A (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="aspect-[4/3] bg-[var(--rasa-paper-deep)] overflow-hidden border border-[var(--rasa-line)]">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={dishA.media[1]?.src || dishA.media[0]?.src} 
               alt={dishA.localeContent.id.title} 
               className="w-full h-full object-cover"
               loading="lazy"
             />
          </div>
          <div className="text-center lg:text-right px-4">
            <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] block mb-1">{dishA.provinceIds[0].replace("-", " ")}</span>
            <h3 className="text-3xl font-serif text-[var(--rasa-cacao)] mb-4">{dishA.localeContent.id.title}</h3>
            <Link 
              href={`/rasa/${dishA.slug}`}
              className="inline-flex items-center gap-1 text-sm text-[var(--rasa-chili)] hover:underline font-medium"
            >
              Lihat Detail {dishA.localeContent.id.title}
            </Link>
          </div>
        </div>

        {/* Comparison Spine (2 cols) */}
        <div className="lg:col-span-2 flex flex-col justify-center relative py-8 lg:py-0 border-y lg:border-y-0 border-[var(--rasa-line)]">
           <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[var(--rasa-line)] -translate-x-1/2"></div>
           
           <div className="flex flex-col gap-12 relative z-10 w-full px-4 lg:px-0">
             {activePair.dimensions.map((dim) => (
               <div key={dim.id} className="bg-[var(--rasa-paper)] border border-[var(--rasa-line)] p-3 text-center shadow-sm w-full lg:w-10/12 mx-auto">
                 <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)]">{dim.label}</h4>
               </div>
             ))}
           </div>
        </div>

        {/* Mobile only: Show dimensions values sequentially below spine. On desktop, they are placed left/right of spine visually, but DOM order is tricky. Let's make a grid for the dimensions instead. */}
        {/* Wait, the 5-2-5 layout needs the dimension values aligned. A better approach for desktop: */}
      </div>

      {/* Dimensions Table / Grid */}
      <div className="mt-8 flex flex-col gap-6 w-full relative">
         {activePair.dimensions.map((dim, idx) => (
           <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-center py-4 border-b border-[var(--rasa-line)] border-dashed">
             <div className="lg:col-span-5 text-center lg:text-right px-4 order-2 lg:order-1 text-[var(--rasa-ink)]">
               {dim.dishAValue || <span className="text-[var(--rasa-muted)] italic">Informasi belum tersedia</span>}
             </div>
             
             <div className="lg:col-span-2 text-center order-1 lg:order-2">
               <span className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] bg-[var(--rasa-paper)] px-3 py-1 lg:hidden border border-[var(--rasa-line)] mb-2 inline-block">{dim.label}</span>
             </div>
             
             <div className="lg:col-span-5 text-center lg:text-left px-4 order-3 text-[var(--rasa-ink)]">
               {dim.dishBValue || <span className="text-[var(--rasa-muted)] italic">Informasi belum tersedia</span>}
             </div>
           </div>
         ))}
      </div>

      <div className="mt-12 flex justify-center gap-4 flex-wrap">
         <button 
           onClick={() => toggleSaveBattlePair(activePair.id)}
           className={`px-8 py-4 border transition-colors text-sm font-medium uppercase tracking-wider ${
             isSaved 
               ? "bg-[var(--rasa-chili)] text-white border-[var(--rasa-chili)]" 
               : "border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)]"
           }`}
         >
           {isSaved ? "Tersimpan di Tasting Shelf" : "Simpan Perbandingan Ini"}
         </button>
         <Link
           href={`/explore?query=Bandingkan+${dishA.localeContent.id.title}+dan+${dishB.localeContent.id.title}`}
           className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
         >
           Tanya RANI
           <ExternalLink size={16} />
         </Link>
      </div>

    </section>
  );
}
