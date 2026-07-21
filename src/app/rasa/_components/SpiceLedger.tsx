"use client";

import { useState } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { CANONICAL_SPICES, CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import Link from "next/link";

export default function SpiceLedger() {
  const [activeSpiceId, setActiveSpiceId] = useState(CANONICAL_SPICES[0]?.id);
  const activeSpice = CANONICAL_SPICES.find(s => s.id === activeSpiceId) || CANONICAL_SPICES[0];

  if (!activeSpice) return null;

  const relatedDishes = activeSpice.relatedDishIds
    .map(id => CANONICAL_DISHES.find(d => d.id === id))
    .filter(d => d && d.status === "published");

  return (
    <section id="spice-ledger" aria-labelledby="spice-heading" className="w-full pt-24">
      <div className="flex items-center gap-3 mb-12 border-b border-[var(--rasa-line)] pb-4">
        <Leaf size={28} className="text-[var(--rasa-muted)]" />
        <h2 id="spice-heading" className="text-3xl font-serif text-[var(--rasa-cacao)]">Buku Besar Rempah</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 border border-[var(--rasa-line)] bg-[var(--rasa-paper)]">
        
        {/* Left: Spice Cabinet Index (3 cols) */}
        <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-[var(--rasa-line)] flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible hide-scrollbar p-4 lg:p-6 gap-2">
           <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2 hidden lg:block">Indeks Spesimen</h3>
           {CANONICAL_SPICES.map(spice => (
             <button
               key={spice.id}
               onClick={() => setActiveSpiceId(spice.id)}
               className={`text-left px-4 py-3 border transition-colors whitespace-nowrap lg:whitespace-normal ${
                 activeSpiceId === spice.id 
                   ? "bg-[var(--rasa-paper-deep)] border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] font-medium shadow-sm" 
                   : "border-transparent text-[var(--rasa-ink)] hover:bg-[var(--rasa-paper-deep)]/50"
               }`}
             >
               {spice.name}
             </button>
           ))}
        </div>

        {/* Center: Specimen Visual (5 cols) */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[var(--rasa-line)] relative aspect-square lg:aspect-auto flex items-center justify-center bg-[var(--rasa-paper-deep)] overflow-hidden">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
             src={activeSpice.media?.src} 
             alt={activeSpice.media?.alt}
             className="w-full h-full object-cover mix-blend-multiply opacity-90 p-12"
             loading="lazy"
           />
           <div className="absolute top-6 left-6 font-mono text-xs text-[var(--rasa-muted)]">
             REF: {activeSpice.id.toUpperCase()}
           </div>
        </div>

        {/* Right: Notes & History (4 cols) */}
        <div className="lg:col-span-4 p-6 lg:p-8 flex flex-col gap-8">
           <div>
              <div className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] mb-1">
                {activeSpice.aliases.join(" • ")}
              </div>
              <h3 className="text-3xl font-serif text-[var(--rasa-cacao)] mb-4">{activeSpice.name}</h3>
              <p className="text-[var(--rasa-ink)] leading-relaxed text-sm">
                <span className="font-semibold">Karakter Rasa:</span> {activeSpice.flavorContribution}
              </p>
           </div>

           <div className="border-l-2 border-[var(--rasa-chili)] pl-4">
              <h4 className="text-sm font-serif text-[var(--rasa-cacao)] mb-2">Catatan Sejarah</h4>
              <p className="text-[var(--rasa-ink)] text-sm leading-relaxed italic">
                {activeSpice.historicalNote}
              </p>
           </div>

           <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-3">Terkait dengan</h4>
              <div className="flex flex-wrap gap-2">
                 {relatedDishes.map(dish => (
                   <Link 
                     key={dish?.id} 
                     href={`/rasa/${dish?.slug}`}
                     className="text-xs border border-[var(--rasa-line)] px-2 py-1 text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors"
                   >
                     {dish?.localeContent.id.title}
                   </Link>
                 ))}
              </div>
           </div>

           <div className="mt-auto pt-8 border-t border-[var(--rasa-line)] flex flex-col gap-3">
              <div className="text-xs text-[var(--rasa-muted)] flex items-center justify-between mb-2">
                <span>Status Sumber:</span>
                <span className="font-mono">{activeSpice.sourceStatus}</span>
              </div>
              <Link 
                href="/explore?layer=rempah"
                className="inline-flex justify-center items-center gap-2 w-full py-3 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Ikuti Jalur Rempah
                <ArrowRight size={16} />
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}
