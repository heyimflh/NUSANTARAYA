"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bookmark, ExternalLink, ArrowRight } from "lucide-react";
import { useRasaState } from "../_hooks/useRasaState";
import { useTastingShelf } from "../_hooks/useTastingShelf";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";

export default function DishOfTheMoment() {
  const { region, activeFlavors } = useRasaState();
  const { toggleSaveDish, isDishSaved } = useTastingShelf();

  // Deterministic selection based on active region or fallback
  let featured = CANONICAL_DISHES.find(d => d.regionIds.includes(region || "sumatera"));
  if (!featured) featured = CANONICAL_DISHES.find(d => d.id === "papeda") || CANONICAL_DISHES[0];

  const saved = isDishSaved(featured.id);

  return (
    <section id="featured-dish" aria-labelledby="featured-heading" className="w-full relative mt-12">
      <div className="flex flex-col lg:flex-row items-center relative">
        
        {/* Left: Image Stage (7 cols) */}
        <div className="w-full lg:w-7/12 relative aspect-[4/3] bg-[var(--rasa-paper-deep)] overflow-hidden z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={featured.media[0]?.src} 
            alt={featured.media[0]?.alt} 
            className="w-full h-full object-cover"
            style={{ objectPosition: featured.media[0]?.focalPoint || "center" }}
            loading="lazy"
          />
        </div>

        {/* Right: Dossier (5 cols), overlapping */}
        <div className="w-full lg:w-5/12 bg-[var(--rasa-paper)] p-8 lg:p-12 z-10 lg:-ml-12 mt-[-40px] lg:mt-0 border border-[var(--rasa-line)] shadow-xl lg:mr-12">
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] block mb-1">Sorotan / {featured.provinceIds[0].replace("-", " ")}</span>
              <h2 id="featured-heading" className="text-3xl md:text-4xl font-serif text-[var(--rasa-cacao)]">
                {featured.localeContent.id.title}
              </h2>
              {featured.aliases.length > 0 && (
                <p className="text-sm italic text-[var(--rasa-muted)] mt-1">Dikenal juga sebagai: {featured.aliases.join(", ")}</p>
              )}
            </div>
            
            <button 
              onClick={() => toggleSaveDish(featured.id)}
              className={`p-3 rounded-full transition-colors ${saved ? "bg-[var(--rasa-chili)] text-white" : "bg-[var(--rasa-paper-deep)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-line)]"}`}
              aria-label={saved ? "Hapus dari simpanan" : "Simpan rasa"}
              aria-pressed={saved}
            >
              <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
            </button>
          </div>

          <p className="text-[var(--rasa-ink)] leading-relaxed mb-6">
            {featured.localeContent.id.summary}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8 border-t border-b border-[var(--rasa-line)] py-4">
             <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2">Profil Rasa</h4>
                <div className="flex flex-wrap gap-1">
                  {featured.flavorIds.slice(0, 4).map(f => (
                    <span key={f} className="text-sm text-[var(--rasa-ink)] capitalize after:content-[',_'] last:after:content-['']">{f.replace("-", " ")}</span>
                  ))}
                </div>
             </div>
             <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2">Bahan Kunci</h4>
                <div className="flex flex-wrap gap-1">
                  {featured.localeContent.id.keyIngredients.slice(0, 5).map(ing => (
                    <span key={ing} className="text-sm text-[var(--rasa-ink)] capitalize after:content-[',_'] last:after:content-['']">{ing.replace("-", " ")}</span>
                  ))}
                </div>
             </div>
          </div>

          <div className="flex flex-col gap-3">
             <Link 
               href={`/rasa/${featured.slug}`}
               className="inline-flex justify-center items-center gap-2 w-full py-3 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
             >
               Buka Catatan Lengkap
               <ArrowRight size={16} />
             </Link>
             <Link 
               href={`/provinsi/${featured.provinceIds[0]}`}
               className="inline-flex justify-center items-center gap-2 w-full py-3 border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
             >
               <ExternalLink size={16} />
               Lihat Konteks Provinsi
             </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}
