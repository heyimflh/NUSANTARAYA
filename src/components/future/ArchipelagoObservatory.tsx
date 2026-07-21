"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RegionId } from "@/types/region";
import { ArrowRight, MapPin, Activity } from "lucide-react";
import Image from "next/image";

export function ArchipelagoObservatory({
  activeRegion,
  onRegionSelect
}: {
  activeRegion: RegionId | null;
  onRegionSelect: (r: RegionId) => void;
}) {
  const regions: { id: RegionId; label: string; offsetClass: string; img: string }[] = [
    { id: "sumatera", label: "Sumatera", offsetClass: "top-10 left-10 md:top-20 md:left-24", img: "/assets/explore/layers/future.webp" },
    { id: "jawa", label: "Jawa", offsetClass: "bottom-10 left-32 md:bottom-20 md:left-48", img: "/assets/heritage-future/masa-kini.webp" },
    { id: "kalimantan", label: "Kalimantan", offsetClass: "top-20 left-1/2 md:top-24 md:left-1/2 -translate-x-1/2", img: "/assets/province/kalimantan-timur/modern.webp" },
    { id: "bali-nusa-tenggara", label: "Bali & Nusa Tenggara", offsetClass: "bottom-10 right-1/2 md:bottom-24 md:right-1/2 translate-x-1/2", img: "/assets/heritage-future/warisan.webp" },
    { id: "sulawesi", label: "Sulawesi", offsetClass: "top-1/3 right-1/4 md:top-1/3 md:right-1/3", img: "/assets/heritage-future/masa-depan.webp" },
    { id: "maluku", label: "Maluku", offsetClass: "top-1/2 right-20 md:top-1/2 md:right-32", img: "/assets/explore/layers/future.webp" },
    { id: "papua", label: "Papua", offsetClass: "top-10 right-4 md:top-24 md:right-10", img: "/assets/heritage-future/masa-depan.webp" },
  ];

  const activeRegionData = regions.find(r => r.id === activeRegion);

  return (
    <section id="observatory" className="w-full py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[var(--future-ink)] z-0" />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen" style={{ backgroundImage: 'radial-gradient(var(--future-line) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-5 h-5 text-[var(--future-solar)]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--future-solar)]">
                Node Jaringan Nasional
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-paper)] mb-6">
              Living Archipelago Observatory
            </h2>
            <p className="text-[var(--future-paper-deep)]/80 text-lg font-light leading-relaxed">
              Masa depan Nusantara tidak terpusat. Ia menyebar melalui inovasi wilayah, koridor laut, jaringan digital, dan komitmen untuk regenerasi ekologi dari Sabang hingga Merauke.
            </p>
          </div>
          <div className="flex-shrink-0 mb-2">
            <a 
              href="#civic-network"
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-[var(--future-solar)]/50 text-[var(--future-solar)] hover:bg-[var(--future-solar)] hover:text-[var(--future-ink)] transition-colors text-sm tracking-wider uppercase font-medium"
            >
              Lihat Node Inovasi
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 min-h-[550px]">
          {/* Schematic Map (8 cols on desktop) */}
          <div className="w-full lg:w-8/12 future-glass-dark rounded-none relative overflow-hidden flex items-center justify-center min-h-[400px]">
            {/* Ambient Map Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--future-teal)]/10 via-transparent to-[var(--future-solar)]/5 pointer-events-none" />

            <div className="relative w-full h-full min-h-[400px]">
              {regions.map((region) => {
                const isActive = activeRegion === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => onRegionSelect(region.id)}
                    className={`absolute flex items-center gap-3 group transition-all duration-500 ${region.offsetClass} ${isActive ? 'scale-110 z-30' : 'scale-100 hover:scale-105 z-10'}`}
                    aria-pressed={isActive}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className={`absolute w-full h-full rounded-full transition-all duration-700 ${isActive ? 'animate-ping bg-[var(--future-solar)]/40' : 'bg-transparent'}`} />
                      <div className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-colors duration-500 ${isActive ? 'bg-[var(--future-solar)] border-transparent shadow-[0_0_15px_rgba(214,166,46,0.6)]' : 'bg-[var(--future-ink)] border-[var(--future-line)]/50 group-hover:border-[var(--future-solar)] group-hover:bg-[var(--future-charcoal)]'}`} />
                    </div>
                    <span className={`text-xs md:text-sm font-mono tracking-widest uppercase transition-colors ${isActive ? 'text-[var(--future-solar)] font-bold' : 'text-[var(--future-paper-deep)]/60 group-hover:text-[var(--future-paper)]'}`}>
                      {region.label}
                    </span>
                  </button>
                );
              })}

              {/* Special IKN Pin */}
              <button 
                onClick={() => onRegionSelect("kalimantan")}
                className="absolute top-1/2 left-1/2 -translate-x-12 translate-y-4 md:translate-y-8 flex flex-col items-center group z-40"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--future-terracotta)] border border-[var(--future-solar)] shadow-[0_0_20px_rgba(183,91,62,0.4)] flex items-center justify-center text-[var(--future-paper)] transform transition-transform duration-500 group-hover:scale-110">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold text-[var(--future-solar)] mt-2 tracking-widest uppercase bg-[var(--future-ink)]/80 backdrop-blur-sm border border-[var(--future-line)]/20 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  IKN ANCHOR
                </span>
              </button>
            </div>
            
            <div className="absolute bottom-4 left-4 text-[10px] font-mono text-[var(--future-muted)] tracking-widest uppercase">
              // DATA TERHUBUNG: 38 PROVINSI
            </div>
          </div>

          {/* Active Region Dossier (4 cols on desktop) */}
          <div className="w-full lg:w-4/12 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeRegion || "empty"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="future-glass rounded-none h-full p-8 flex flex-col"
              >
                {!activeRegion || !activeRegionData ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center opacity-60">
                    <Activity className="w-10 h-10 text-[var(--future-charcoal)] mb-6 opacity-50" />
                    <p className="text-[var(--future-ink)] font-mono text-sm tracking-wider uppercase mb-2">Menunggu Input</p>
                    <p className="text-sm text-[var(--future-muted)]">Pilih node pada skema jaringan untuk memuat data telemetri wilayah.</p>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b border-[var(--future-line)] pb-4 mb-6">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--future-muted)]">
                        Dossier Wilayah
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[var(--future-solar)] bg-[var(--future-ink)] px-2 py-1">
                        LIVE
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-playfair text-[var(--future-ink)] mb-6 capitalize">
                      {activeRegionData.label}
                    </h3>
                    
                    {/* Image inclusion for dossier */}
                    <div className="w-full aspect-video relative overflow-hidden mb-6 future-frame">
                      <div className="relative w-full h-full">
                        <Image 
                          src={activeRegionData.img}
                          alt={activeRegionData.label}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8 flex-1">
                      <div className="flex justify-between items-center py-2 border-b border-[var(--future-line)]/50 text-sm">
                        <span className="text-[var(--future-muted)]">Status Integrasi</span>
                        <span className="font-mono font-medium text-[var(--future-teal)]">Optimal</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[var(--future-line)]/50 text-sm">
                        <span className="text-[var(--future-muted)]">Jumlah Sinyal</span>
                        <span className="font-mono font-medium">12 Node Aktif</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-[var(--future-line)]/50 text-sm">
                        <span className="text-[var(--future-muted)]">Fokus Utama</span>
                        <span className="font-mono font-medium text-right">Ekonomi Biru & Hijau</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full py-4 bg-[var(--future-ink)] text-[var(--future-paper)] font-mono text-xs tracking-widest uppercase hover:bg-[var(--future-solar)] hover:text-[var(--future-ink)] transition-colors border border-[var(--future-ink)]">
                        Muat Data Lengkap
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
