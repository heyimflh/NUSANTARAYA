"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRasaState } from "../_hooks/useRasaState";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";

// Schematic region data
const REGIONS = [
  { id: "sumatera", name: "Sumatera", x: "15%", y: "40%", promise: "Pintu gerbang rempah dunia, di mana kari kental dan cabai berpadu." },
  { id: "jawa", name: "Jawa", x: "35%", y: "75%", promise: "Simfoni manis dan gurih dari dapur keraton hingga pinggir jalan." },
  { id: "kalimantan", name: "Kalimantan", x: "45%", y: "35%", promise: "Rasa sungai purba yang dibumbui asam segar dan ikan air tawar." },
  { id: "sulawesi", name: "Sulawesi", x: "65%", y: "45%", promise: "Pertemuan laut dan gunung dengan kaldu pekat serta pedas menyengat." },
  { id: "bali-nusa-tenggara", name: "Bali & Nusra", x: "55%", y: "85%", promise: "Rempah yang dibakar, diasap, dan disucikan dalam tradisi." },
  { id: "maluku", name: "Maluku", x: "85%", y: "40%", promise: "Jantung kepulauan rempah; pala dan cengkeh di atas lautan biru." },
  { id: "papua", name: "Papua", x: "92%", y: "55%", promise: "Kemurnian alam dalam bentuk sagu lengket dan hidangan laut segar." }
];

export default function CulinaryCartography() {
  const { region, setRegion } = useRasaState();
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const activeRegionId = region || "sumatera"; // Default if none selected
  const activeRegion = REGIONS.find(r => r.id === activeRegionId) || REGIONS[0];
  
  // Get dishes for active region
  const regionDishes = CANONICAL_DISHES.filter(d => d.regionIds.includes(activeRegion.id));
  const signatureDishes = regionDishes.slice(0, 3);
  const dishCount = regionDishes.length;

  return (
    <section id="culinary-cartography" aria-labelledby="cartography-heading" className="w-full">
      <div className="flex flex-col lg:flex-row gap-12">
         
         {/* Left: Atlas Canvas (8 cols) */}
         <div className="lg:w-2/3 relative aspect-video bg-[var(--rasa-paper-deep)] border border-[var(--rasa-line)] overflow-hidden">
            <h2 id="cartography-heading" className="absolute top-6 left-6 text-sm uppercase tracking-widest text-[var(--rasa-cacao)] font-semibold z-10">
              Peta Cita Rasa
            </h2>
            
            {/* Schematic Map Layer (Decorative) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
               <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
                  <path d="M 100 250 Q 200 100 300 300 T 500 200 T 700 350 T 900 200" fill="none" stroke="var(--rasa-cacao)" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 200 400 Q 400 500 600 300 T 900 450" fill="none" stroke="var(--rasa-chili)" strokeWidth="1" opacity="0.5" />
               </svg>
            </div>

            {/* Region Anchors */}
            {REGIONS.map(r => {
              const isActive = r.id === activeRegionId;
              const isHovered = r.id === hoveredRegion;
              return (
                <button
                  key={r.id}
                  onClick={() => setRegion(r.id)}
                  onMouseEnter={() => setHoveredRegion(r.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-[var(--rasa-saffron)] focus:ring-offset-2 focus:ring-offset-[var(--rasa-paper-deep)] rounded-full p-2"
                  style={{ left: r.x, top: r.y }}
                  aria-pressed={isActive}
                  aria-label={`Pilih region ${r.name}`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    isActive 
                      ? "bg-[var(--rasa-chili)] scale-150 shadow-[0_0_15px_rgba(168,62,46,0.4)]" 
                      : isHovered 
                        ? "bg-[var(--rasa-cacao)] scale-125" 
                        : "bg-[var(--rasa-muted)]"
                  }`} />
                  <span className={`absolute left-1/2 -translate-x-1/2 mt-4 text-xs font-medium tracking-wider whitespace-nowrap transition-colors ${
                    isActive ? "text-[var(--rasa-chili)]" : "text-[var(--rasa-cacao)] opacity-70 group-hover:opacity-100"
                  }`}>
                    {r.name}
                  </span>
                </button>
              );
            })}
         </div>

         {/* Right: Flavor Dossier (4 cols) */}
         <div className="lg:w-1/3 flex flex-col justify-center">
            <AnimatePresence mode="wait">
               <motion.div 
                 key={activeRegion.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.3 }}
                 className="flex flex-col gap-6"
               >
                 <div>
                   <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] block mb-2">Flavor Dossier</span>
                   <h3 className="text-4xl font-serif text-[var(--rasa-cacao)] mb-3">{activeRegion.name}</h3>
                   <p className="text-[var(--rasa-ink)] leading-relaxed italic border-l-2 border-[var(--rasa-chili)] pl-4">
                     "{activeRegion.promise}"
                   </p>
                 </div>

                 <div className="pt-4 border-t border-[var(--rasa-line)]">
                   <div className="text-sm text-[var(--rasa-muted)] mb-3">{dishCount} Hidangan Tercatat</div>
                   <ul className="flex flex-col gap-3">
                     {signatureDishes.map((dish, i) => (
                       <li key={dish.id} className="flex items-center gap-3">
                         <span className="text-xs font-mono text-[var(--rasa-muted)]">0{i+1}</span>
                         <span className="text-[var(--rasa-ink)] font-medium">{dish.localeContent.id.title}</span>
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="pt-6">
                   <button 
                     onClick={() => {
                        const el = document.getElementById("taste-trails");
                        if(el) el.scrollIntoView({ behavior: "smooth" });
                     }}
                     className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--rasa-chili)] hover:text-[var(--rasa-cacao)] transition-colors group font-semibold"
                   >
                     <MapPin size={16} />
                     Jelajahi Wilayah Ini
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                 </div>
               </motion.div>
            </AnimatePresence>
         </div>

      </div>
    </section>
  );
}
