"use client";

import { FUTURE_SIGNALS } from "@/data/future/signals";
import { Sparkles, Store, Globe, Hexagon } from "lucide-react";
import Image from "next/image";

export function CreativeEconomy() {
  const creativeSignals = FUTURE_SIGNALS.filter(
    s => s.themeIds.includes("creative-economy") && s.status === "published"
  ).slice(0, 3);

  return (
    <section id="creative-economy" className="w-full py-24 md:py-32 bg-[var(--future-canvas)] border-b border-[var(--future-line)] relative overflow-hidden">
      
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--future-solar)_0%,_transparent_70%)] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-24">
          
          <div className="w-full lg:w-1/2">
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-solar)] mb-4">
              Sektor III: Resiliensi Budaya
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
              Ekonomi Kreatif & Warisan Hidup
            </h2>
            <p className="text-lg text-[var(--future-charcoal)] font-light leading-relaxed mb-8">
              Tradisi tidak berhenti sebagai tontonan masa lalu. Melalui sentuhan inovasi dan integrasi pasar digital, budaya Nusantara berevolusi menjadi penggerak ekonomi sirkular yang bernilai tinggi.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-paper)] text-[var(--future-terracotta)]">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Platform Kriya Lokal</h3>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Sistem verifikasi otentisitas kriya berbasis blockchain memastikan pengrajin lokal mendapatkan nilai wajar dari karyanya tanpa perantara berlebih.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-paper)] text-[var(--future-solar)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Festival Interaktif</h3>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Penyelenggaraan festival budaya yang menggabungkan kehadiran fisik dengan pengalaman augmented reality untuk menjangkau audiens global.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-paper)] text-[var(--future-teal)]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Pasar Global</h3>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Ekspor rempah dan tenun yang dilengkapi dengan rekam jejak karbon dan narasi sumber daya lestari (sustainable sourcing).</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 bg-[var(--future-paper-deep)] border border-[var(--future-line)] rotate-3 transform transition-transform hover:rotate-0 duration-700"></div>
            <div className="absolute inset-0 bg-[var(--future-canvas)] border border-[var(--future-line)] p-4 shadow-xl z-10 transition-transform hover:-translate-y-2 duration-700">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/assets/heritage-future/warisan.webp" 
                  alt="Warisan Kreatif Nusantara" 
                  fill 
                  className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute top-8 left-8 bg-[var(--future-ink)] text-[var(--future-paper)] px-3 py-1.5 border border-[var(--future-solar)] text-[10px] font-mono tracking-widest flex items-center gap-2">
                <Hexagon className="w-3 h-3 text-[var(--future-solar)]" />
                ARCHIVE: 2024
              </div>
            </div>
          </div>
          
        </div>

        {creativeSignals.length > 0 && (
          <div className="pt-16 border-t border-[var(--future-line)]/50 relative">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--future-canvas)] px-4 text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-muted)]">
              Sinyal Terkait
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {creativeSignals.map(signal => (
                <div key={signal.id} className="group p-6 bg-[var(--future-paper)] border border-[var(--future-line)] hover:border-[var(--future-solar)] transition-all duration-300 hover:-translate-y-1 relative">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--future-solar)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <span className="text-[10px] font-mono uppercase font-bold text-[var(--future-solar)] mb-3 block tracking-widest">
                    {signal.provinceIds[0].replace(/-/g, " ")}
                  </span>
                  <h4 className="font-playfair text-xl text-[var(--future-ink)] mb-3">{signal.localeContent.id.title}</h4>
                  <p className="text-xs text-[var(--future-charcoal)] font-light leading-relaxed line-clamp-3">{signal.localeContent.id.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
