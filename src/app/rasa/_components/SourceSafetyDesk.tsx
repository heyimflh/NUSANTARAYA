"use client";

import { ShieldCheck, BookOpen, AlertTriangle } from "lucide-react";

export default function SourceSafetyDesk() {
  return (
    <section id="source-safety" aria-labelledby="safety-heading" className="w-full pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-[var(--rasa-line)] pt-12">
        
        {/* Left: Headers */}
        <div className="lg:col-span-4">
           <h2 id="safety-heading" className="text-3xl font-serif text-[var(--rasa-cacao)] mb-4">Meja Redaksi & Validasi</h2>
           <p className="text-sm text-[var(--rasa-muted)] leading-relaxed">
             Transparansi mengenai sumber kurasi, kebijakan pencantuman, dan panduan keamanan makanan bagi pengguna NusaRasa.
           </p>
        </div>

        {/* Right: The Desk Notes */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
             {/* Methodology */}
             <div className="bg-[var(--rasa-paper)] p-6 border border-[var(--rasa-line)]">
               <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-cacao)] mb-3 flex items-center gap-2">
                 <BookOpen size={16} /> Metodologi Kurasi
               </h3>
               <p className="text-xs text-[var(--rasa-ink)] leading-relaxed mb-3">
                 Semua hidangan divalidasi silang melalui dua sumber tepercaya: arsip budaya lokal dan wawancara lisan yang diakui secara akademis atau komunitas.
               </p>
               <div className="text-[10px] text-[var(--rasa-muted)] uppercase tracking-widest">
                 Update Terakhir: Juli 2026
               </div>
             </div>

             {/* Safety & Allergies */}
             <div className="bg-[var(--rasa-paper)] p-6 border border-[var(--rasa-line)]">
               <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--rasa-error)] mb-3 flex items-center gap-2">
                 <AlertTriangle size={16} /> Peringatan Alergi
               </h3>
               <p className="text-xs text-[var(--rasa-ink)] leading-relaxed font-medium mb-3">
                 Bahan dan cara penyajian dapat berbeda drastis menurut daerah, rumah tangga, atau restoran.
               </p>
               <p className="text-xs text-[var(--rasa-ink)] leading-relaxed">
                 NusaRasa TIDAK menjamin status halal, vegetarian, atau bebas alergen secara universal. Jika Anda memiliki kondisi medis atau kebutuhan diet khusus, <strong>konfirmasikan langsung kepada penyaji makanan</strong>.
               </p>
             </div>

           </div>
           
           <div className="flex justify-end mt-2">
             <button className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-chili)] hover:underline">
               Laporkan Koreksi Data
             </button>
           </div>
        </div>

      </div>
    </section>
  );
}
