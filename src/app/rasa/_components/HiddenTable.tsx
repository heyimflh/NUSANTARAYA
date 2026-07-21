"use client";

import Link from "next/link";
import { ArrowRight, EyeOff } from "lucide-react";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { RasaAssetManifest } from "@/data/rasa/asset-manifest";

export default function HiddenTable() {
  // Select some "hidden" or less universally popular dishes
  const hiddenDishIds = ["manday", "choipan", "tinutuan", "keladi-tumbuk"];
  const dishes = hiddenDishIds.map(id => CANONICAL_DISHES.find(d => d.id === id)).filter(d => d && d.status === "published");

  if (dishes.length === 0) return null;

  return (
    <section id="hidden-table" aria-labelledby="hidden-heading" className="w-full pt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[var(--rasa-line)] pb-4 gap-4">
        <div>
           <h2 id="hidden-heading" className="text-3xl font-serif text-[var(--rasa-cacao)] flex items-center gap-3">
              <EyeOff size={28} className="text-[var(--rasa-muted)]" />
              Pilihan Lokal
           </h2>
           <p className="text-sm text-[var(--rasa-muted)] mt-2">Menjelajahi cita rasa yang kurang dikenal secara luas namun kaya akan tradisi.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: One large portrait (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="aspect-[3/4] bg-[var(--rasa-paper-deep)] overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
               src={RasaAssetManifest.getDishMedia("generic", "kalimantan", "portrait").src} 
               alt="Pilihan hidangan lokal" 
               className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
               loading="lazy"
             />
          </div>
          <p className="text-xs text-[var(--rasa-muted)] text-center italic">
            Visual representasi dari kekayaan kuliner yang dijaga ketat oleh komunitas lokal.
          </p>
        </div>

        {/* Middle: Ordered List of Dishes (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
           {dishes.map((dish, i) => (
             <div key={dish?.id} className="group relative border-b border-[var(--rasa-line)] border-dashed pb-6 last:border-0 pl-10">
               <span className="absolute left-0 top-1 text-sm font-mono text-[var(--rasa-muted)]">0{i+1}</span>
               
               <h3 className="text-xl font-serif text-[var(--rasa-cacao)] mb-1 group-hover:text-[var(--rasa-chili)] transition-colors">
                 {dish?.localeContent.id.title}
               </h3>
               
               <div className="flex gap-2 text-xs text-[var(--rasa-muted)] uppercase tracking-widest mb-3">
                 <span>{dish?.provinceIds[0].replace("-", " ")}</span>
                 <span>&middot;</span>
                 <span>Ketersediaan: {dish?.availability === "seasonal" ? "Musiman" : dish?.availability === "ceremonial" ? "Upacara" : "Terbatas"}</span>
               </div>
               
               <p className="text-[var(--rasa-ink)] text-sm mb-4 leading-relaxed line-clamp-2">
                 {dish?.localeContent.id.summary}
               </p>

               <div className="flex items-center gap-4">
                 <div className="flex flex-wrap gap-1">
                   {dish?.flavorIds.slice(0, 2).map(f => (
                     <span key={f} className="text-[10px] border border-[var(--rasa-line)] px-1.5 py-0.5 text-[var(--rasa-ink)] capitalize bg-[var(--rasa-paper)]">
                       {f.replace("-", " ")}
                     </span>
                   ))}
                 </div>
                 
                 <Link 
                   href={`/rasa/${dish?.slug}`}
                   className="text-xs flex items-center gap-1 text-[var(--rasa-cacao)] hover:text-[var(--rasa-chili)] transition-colors uppercase tracking-widest font-semibold ml-auto"
                 >
                   Buka Catatan <ArrowRight size={14} />
                 </Link>
               </div>
             </div>
           ))}
        </div>

        {/* Right: Vertical Notes (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-8 pl-0 lg:pl-8 lg:border-l border-[var(--rasa-line)]">
           <div className="bg-[var(--rasa-paper)] p-6 border border-[var(--rasa-line)]">
             <h4 className="text-sm font-serif text-[var(--rasa-cacao)] mb-3">Konteks Komunitas</h4>
             <p className="text-xs text-[var(--rasa-ink)] leading-relaxed mb-4">
               Beberapa hidangan tidak dirancang untuk diproduksi secara massal atau dihidangkan di restoran besar. Mereka mengikat identitas sebuah wilayah secara intim.
             </p>
             <p className="text-xs text-[var(--rasa-ink)] leading-relaxed">
               Menikmati hidangan lokal terbaik dilakukan langsung di daerah asalnya, bersama keluarga yang mewariskan resep tersebut.
             </p>
           </div>
           
           <div className="bg-[var(--rasa-paper)] p-6 border border-[var(--rasa-line)]">
             <h4 className="text-sm font-serif text-[var(--rasa-cacao)] mb-3">Informasi Ketersediaan</h4>
             <p className="text-xs text-[var(--rasa-ink)] leading-relaxed">
               Hidangan musiman sangat bergantung pada hasil panen atau cuaca, sementara hidangan seremonial mungkin hanya disajikan pada waktu-waktu sakral tertentu. Konfirmasikan ketersediaan saat merencanakan perjalanan.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
}
