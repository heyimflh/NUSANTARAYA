"use client";

import Link from "next/link";
import { Bookmark, Trash2, ArrowRight } from "lucide-react";
import { useTastingShelf } from "../_hooks/useTastingShelf";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { RasaAssetManifest } from "@/data/rasa/asset-manifest";

export default function TastingShelf() {
  const { shelf, isLoaded, toggleSaveDish, toggleSaveBattlePair, clearDraftTrail } = useTastingShelf();

  if (!isLoaded || (shelf.savedDishes.length === 0 && shelf.savedBattlePairs.length === 0 && !shelf.draftTrail)) {
    return null;
  }

  const savedDishes = shelf.savedDishes
    .map(id => CANONICAL_DISHES.find(d => d.id === id))
    .filter(d => d && d.status === "published");

  return (
    <section id="tasting-shelf" aria-labelledby="shelf-heading" className="w-full pt-24 pb-12">
      <div className="flex items-center gap-3 mb-12 border-b border-[var(--rasa-line)] pb-4">
        <Bookmark size={28} className="text-[var(--rasa-cacao)]" />
        <h2 id="shelf-heading" className="text-3xl font-serif text-[var(--rasa-cacao)]">Personal Tasting Shelf</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         
         {/* Saved Dishes */}
         {savedDishes.length > 0 && (
           <div className={`flex flex-col gap-6 ${shelf.draftTrail ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-muted)]">Hidangan Tersimpan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {savedDishes.map((dish) => (
                   <div key={dish?.id} className="relative group border border-[var(--rasa-line)] bg-[var(--rasa-paper)] flex p-3 gap-3 items-center">
                      <div className="w-12 h-12 bg-[var(--rasa-paper-deep)] shrink-0">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img 
                           src={dish?.media[1]?.src || dish?.media[0]?.src} 
                           alt="" 
                           className="w-full h-full object-cover" 
                           loading="lazy" 
                         />
                      </div>
                      <div className="flex-grow min-w-0">
                         <Link href={`/rasa/${dish?.slug}`} className="block text-sm font-semibold text-[var(--rasa-cacao)] truncate hover:text-[var(--rasa-chili)] transition-colors">
                            {dish?.localeContent.id.title}
                         </Link>
                         <div className="text-[10px] text-[var(--rasa-muted)] uppercase tracking-widest truncate">
                            {dish?.provinceIds[0].replace("-", " ")}
                         </div>
                      </div>
                      <button 
                        onClick={() => dish && toggleSaveDish(dish.id)}
                        className="text-[var(--rasa-muted)] hover:text-[var(--rasa-error)] transition-colors shrink-0 p-2"
                        aria-label="Hapus dari simpanan"
                      >
                         <Trash2 size={16} />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
         )}

         {/* Draft Trail */}
         {shelf.draftTrail && (
           <div className="lg:col-span-4 flex flex-col gap-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-muted)]">Draft Tasting Trail</h3>
              <div className="bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] p-6 flex flex-col justify-between min-h-[200px]">
                 <div>
                    <div className="text-xs font-mono uppercase tracking-widest opacity-70 mb-2 flex justify-between">
                       <span>Draft</span>
                       <span>Dur: {shelf.draftTrail.duration} HARI</span>
                    </div>
                    <h4 className="font-serif text-xl mb-4">Jalur {shelf.draftTrail.pace}</h4>
                    <p className="text-sm opacity-80 mb-6">
                       Berdasarkan preferensi rasa dan wilayah {shelf.draftTrail.regionId}.
                    </p>
                 </div>
                 <div className="flex justify-between items-center mt-auto">
                    <button 
                      onClick={clearDraftTrail}
                      className="text-xs uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-white transition-opacity"
                    >
                       Hapus
                    </button>
                    <Link 
                      href="/routes" 
                      className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-widest text-[var(--rasa-paper)] hover:text-white transition-colors"
                    >
                       Buka Planner <ArrowRight size={14} />
                    </Link>
                 </div>
              </div>
           </div>
         )}

      </div>
    </section>
  );
}
