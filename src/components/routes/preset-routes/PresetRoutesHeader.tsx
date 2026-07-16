import React from "react";
import { ShieldCheck } from "lucide-react";

export function PresetRoutesHeader() {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 px-4">
      {/* Eyebrow */}
      <span className="text-[var(--planner-saffron)] text-sm md:text-xs font-bold tracking-widest uppercase mb-4 opacity-90">
        Rute Terkurasi Nusantara
      </span>
      
      {/* Heading */}
      <h2 
        id="preset-routes-title"
        className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--planner-ink)] leading-tight mb-6"
      >
        Mulai dari perjalanan yang sudah kami pilihkan.
      </h2>
      
      {/* Supporting Copy */}
      <p className="text-[var(--planner-earth)] text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
        Jelajahi rute siap pakai berdasarkan wilayah, durasi, dan pengalaman. Buka detailnya sekarang atau gunakan preferensinya sebagai titik awal untuk rute versimu sendiri.
      </p>

      {/* Trust Microcopy */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs md:text-sm text-[var(--planner-muted)] bg-[var(--planner-paper)]/60 px-4 py-2 rounded-full border border-[var(--planner-warm-border)]/50 shadow-sm">
        <ShieldCheck className="w-4 h-4 text-[var(--planner-moss)]" />
        <span>Dikurasi dari data lokal</span>
        <span aria-hidden="true">&middot;</span>
        <span>Dapat disesuaikan</span>
        <span aria-hidden="true">&middot;</span>
        <span>Tetap tersedia tanpa generator AI</span>
      </div>
    </div>
  );
}
