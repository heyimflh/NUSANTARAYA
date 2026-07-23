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

      {/* Aesthetic Side-by-Side Images & Titles */}
      <div className="grid grid-cols-2 gap-4 md:gap-12 max-w-5xl mx-auto">
        {/* Dish A */}
        <div className="flex flex-col gap-4 md:gap-6 text-center group">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[var(--rasa-line)] relative">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={dishA.media[1]?.src || dishA.media[0]?.src} 
               alt={dishA.localeContent.id.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
          </div>
          <div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[var(--rasa-chili)] uppercase">{dishA.provinceIds[0].replace("-", " ")}</span>
            <h3 className="text-2xl md:text-4xl font-serif text-[var(--rasa-cacao)] mt-1 mb-2">{dishA.localeContent.id.title}</h3>
            <Link 
              href={`/rasa/${dishA.slug}`}
              className="inline-flex items-center gap-1 text-xs md:text-sm text-[var(--rasa-muted)] hover:text-[var(--rasa-chili)] transition-colors font-medium underline underline-offset-4 decoration-1 decoration-[var(--rasa-line)] hover:decoration-[var(--rasa-chili)]"
            >
              Lihat Detail {dishA.localeContent.id.title}
            </Link>
          </div>
        </div>

        {/* Dish B */}
        <div className="flex flex-col gap-4 md:gap-6 text-center group">
          <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[var(--rasa-line)] relative">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={dishB.media[1]?.src || dishB.media[0]?.src} 
               alt={dishB.localeContent.id.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
          </div>
          <div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[var(--rasa-chili)] uppercase">{dishB.provinceIds[0].replace("-", " ")}</span>
            <h3 className="text-2xl md:text-4xl font-serif text-[var(--rasa-cacao)] mt-1 mb-2">{dishB.localeContent.id.title}</h3>
            <Link 
              href={`/rasa/${dishB.slug}`}
              className="inline-flex items-center gap-1 text-xs md:text-sm text-[var(--rasa-muted)] hover:text-[var(--rasa-chili)] transition-colors font-medium underline underline-offset-4 decoration-1 decoration-[var(--rasa-line)] hover:decoration-[var(--rasa-chili)]"
            >
              Lihat Detail {dishB.localeContent.id.title}
            </Link>
          </div>
        </div>
      </div>

      {/* Premium Comparison Dimensions Table */}
      <div className="mt-16 md:mt-24 flex flex-col w-full max-w-4xl mx-auto border-t border-[var(--rasa-line)]">
         {activePair.dimensions.map((dim, idx) => (
           <div key={idx} className="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-0 py-8 md:py-12 border-b border-[var(--rasa-line)] hover:bg-[var(--rasa-paper-deep)] transition-colors duration-300">
             
             {/* Central Label Pill (Absolute center on Desktop, top center on Mobile) */}
             <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 flex justify-center z-10 mb-2 md:mb-0">
               <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#FFFDF8] bg-[var(--rasa-cacao)] px-4 py-2 rounded-full shadow-md whitespace-nowrap border border-black/10">
                 {dim.label}
               </span>
             </div>
             
             {/* Dish A Value */}
             <div className="text-center md:text-right px-6 md:pr-24 lg:pr-32 text-[var(--rasa-ink)] flex items-center justify-center md:justify-end min-h-[40px]">
               <p className="text-sm md:text-base leading-relaxed">{dim.dishAValue || <span className="text-[var(--rasa-muted)] italic">Informasi belum tersedia</span>}</p>
             </div>
             
             {/* Dish B Value */}
             <div className="text-center md:text-left px-6 md:pl-24 lg:pl-32 text-[var(--rasa-ink)] flex items-center justify-center md:justify-start min-h-[40px]">
               <p className="text-sm md:text-base leading-relaxed">{dim.dishBValue || <span className="text-[var(--rasa-muted)] italic">Informasi belum tersedia</span>}</p>
             </div>
           </div>
         ))}
      </div>

      <div className="mt-16 flex justify-center gap-4 flex-wrap">
         <button 
           onClick={() => toggleSaveBattlePair(activePair.id)}
           className={`px-8 py-4 rounded-full transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md ${
             isSaved 
               ? "bg-[var(--rasa-chili)] text-white" 
               : "bg-[var(--rasa-paper)] border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-cacao)] hover:text-white"
           }`}
         >
           {isSaved ? "Tersimpan di Tasting Shelf" : "Simpan Perbandingan"}
         </button>
         <Link
           href={`/explore?query=Bandingkan+${dishA.localeContent.id.title}+dan+${dishB.localeContent.id.title}`}
           className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-[var(--rasa-cacao)] text-[#FFFDF8] hover:bg-[var(--rasa-ink)] transition-all duration-300 text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md"
         >
           Tanya RANI
           <ExternalLink size={16} />
         </Link>
      </div>

    </section>
  );
}
