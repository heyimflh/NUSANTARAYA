"use client";

import { useState } from "react";
import { ArrowRight, Map } from "lucide-react";
import { CANONICAL_TRAILS, CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { RasaAssetManifest } from "@/data/rasa/asset-manifest";
import { useRasaState } from "../_hooks/useRasaState";
import Link from "next/link";

const TRAIL_REGIONS = [
  { id: "sumatera", name: "Sumatera", desc: "Salah satu pintu masuk ke keragaman bumbu Nusantara, memperlihatkan jejak pelabuhan kuno yang mengadopsi dan mengadaptasi rempah dari berbagai benua." },
  { id: "jawa", name: "Jawa", desc: "Mencakup tradisi kuliner keraton yang rumit hingga makanan rakyat yang sederhana, dengan spektrum manis dan gurih yang kaya." },
  { id: "kalimantan", name: "Kalimantan", desc: "Berkaitan erat dengan kehidupan sungai dan hutan, menawarkan olahan ikan air tawar dengan fermentasi lokal dan asam segar yang khas." },
  { id: "sulawesi", name: "Sulawesi", desc: "Mempresentasikan kekayaan maritim dan daratan tinggi, dari kaldu pekat berempah hingga hidangan laut dengan pedas yang murni." },
  { id: "bali-nusa-tenggara", name: "Bali & Nusa Tenggara", desc: "Menyimpan tradisi bumbu yang diwariskan dalam upacara adat, serta pengasapan yang lahir dari kondisi geografis kering." },
  { id: "maluku", name: "Maluku", desc: "Saksi sejarah jalur rempah dunia; di mana pala dan cengkeh menjadi pusat dari hidangan yang seimbang dan elegan." },
  { id: "papua", name: "Papua", desc: "Memperlihatkan kedekatan manusia dengan alam melalui olahan sagu dan umbi-umbian yang jujur dan bersahaja." }
];

export default function TasteTrails() {
  const { setRegion } = useRasaState();
  const [activeRegionId, setActiveRegionId] = useState(TRAIL_REGIONS[0].id);
  
  const activeRegion = TRAIL_REGIONS.find(r => r.id === activeRegionId) || TRAIL_REGIONS[0];
  const regionDishes = CANONICAL_DISHES.filter(d => d.status === "published" && d.regionIds.includes(activeRegion.id)).slice(0, 4);
  
  // Aggregate flavors safely
  const allFlavors = new Set<string>();
  regionDishes.forEach(d => d.flavorIds.forEach(f => allFlavors.add(f)));

  return (
    <section id="taste-trails" aria-labelledby="trails-heading" className="w-full pt-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left: Vertical Region Index (2 cols) */}
        <div className="lg:w-2/12 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
          <h2 id="trails-heading" className="sr-only">Tujuh Jalur Rasa</h2>
          {TRAIL_REGIONS.map((r, i) => {
             const isActive = r.id === activeRegionId;
             return (
               <button
                 key={r.id}
                 onClick={() => setActiveRegionId(r.id)}
                 className={`text-left whitespace-nowrap transition-colors py-2 border-l-2 pl-4 focus:outline-none focus:ring-2 focus:ring-[var(--rasa-saffron)] ${
                   isActive 
                    ? "border-[var(--rasa-chili)] text-[var(--rasa-chili)] font-medium" 
                    : "border-[var(--rasa-line)] text-[var(--rasa-muted)] hover:text-[var(--rasa-cacao)]"
                 }`}
                 aria-pressed={isActive}
               >
                 <span className="text-xs uppercase tracking-widest block mb-1">0{i+1}</span>
                 {r.name}
               </button>
             );
          })}
        </div>

        {/* Center: Regional Table Portrait (6 cols) */}
        <div className="lg:w-6/12 flex flex-col gap-6">
           <div className="aspect-[3/4] bg-[var(--rasa-paper-deep)] overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={RasaAssetManifest.getDishMedia("generic", activeRegion.id, "portrait").src} 
               alt={`Potret kuliner wilayah ${activeRegion.name}`} 
               className="w-full h-full object-cover"
               loading="lazy"
             />
           </div>
        </div>

        {/* Right: Ledger (4 cols) */}
        <div className="lg:w-4/12 flex flex-col pt-4 lg:pt-0">
           <h3 className="text-3xl font-serif text-[var(--rasa-cacao)] mb-6">{activeRegion.name}</h3>
           <p className="text-[var(--rasa-ink)] leading-relaxed mb-8">
             {activeRegion.desc}
           </p>

           <div className="border-t border-[var(--rasa-line)] pt-6 mb-8 flex-grow">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-4">Catatan Hidangan</h4>
              <ul className="flex flex-col gap-4">
                {regionDishes.map(dish => (
                  <li key={dish.id} className="flex justify-between items-start gap-4 group">
                    <div>
                       <div className="text-[var(--rasa-ink)] font-medium group-hover:text-[var(--rasa-chili)] transition-colors">{dish.localeContent.id.title}</div>
                       <div className="text-sm text-[var(--rasa-muted)]">{dish.provinceIds[0].replace("-", " ")}</div>
                    </div>
                  </li>
                ))}
              </ul>
              
              {allFlavors.size > 0 && (
                <div className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-3">Spektrum Rasa Wilayah</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(allFlavors).slice(0, 5).map(f => (
                      <span key={f} className="text-xs border border-[var(--rasa-line)] px-2 py-1 text-[var(--rasa-ink)] capitalize bg-[var(--rasa-paper)]">
                        {f.replace("-", " ")}
                      </span>
                    ))}
                  </div>
                </div>
              )}
           </div>

           <div className="flex flex-col gap-3 mt-auto">
              <button 
                onClick={() => {
                   setRegion(activeRegion.id);
                   const el = document.getElementById("flavor-atlas");
                   if(el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex justify-center items-center gap-2 w-full py-3 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Jelajahi Rasa Wilayah
                <ArrowRight size={16} />
              </button>
              <Link 
                href={`/explore?region=${activeRegion.id}&layer=kuliner`}
                className="inline-flex justify-center items-center gap-2 w-full py-3 border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
              >
                <Map size={16} />
                Lihat di Peta Nusa Map
              </Link>
              <Link 
                href={`/routes?source=nusarasa&region=${activeRegion.id}&interests=kuliner`}
                className="inline-flex justify-center items-center gap-2 w-full py-3 border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
              >
                Buat Perjalanan Kuliner
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
}
