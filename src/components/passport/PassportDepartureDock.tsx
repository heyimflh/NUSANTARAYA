"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, Map as MapIcon, LibraryBig } from "lucide-react";
import { motion } from "framer-motion";

export const PassportDepartureDock = () => {
  return (
    <section className="mt-24 mb-12 text-center border-t border-[#DCCDB8] pt-16">
      <p className="text-[10px] uppercase tracking-widest text-[#786B60] font-bold mb-4">
        Akhir dari Arsip
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-[#2B211B] font-bold mb-6">
        Passport menyimpan jejak.<br/>
        NUSANTARAYA membantumu menentukan keberangkatan berikutnya.
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-12">
        <Link
          href="/explore?source=passport"
          className="group relative flex items-center justify-between w-full md:w-auto bg-[#3A281F] text-[#FFF9EE] px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase overflow-hidden active:scale-95 transition-transform"
        >
          <div className="relative z-10 flex items-center gap-3">
            <Compass size={18} />
            <span>Lanjut Jelajah</span>
          </div>
          <div className="relative z-10 w-8 h-8 ml-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#C9973A] group-hover:text-[#2B211B] transition-colors">
            <ArrowUpRight size={16} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform" />
          </div>
        </Link>
        
        <Link
          href="/routes?source=passport"
          className="group flex items-center justify-center gap-3 w-full md:w-auto bg-[#FFFCF6] border border-[#DCCDB8] text-[#2B211B] hover:bg-[#F3EBDD] hover:border-[#A77B32] px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all"
        >
          <MapIcon size={18} className="text-[#A77B32]" />
          <span>Buat Rute Baru</span>
        </Link>
      </div>

      <div className="mt-16 flex items-center justify-center">
        <div className="w-16 h-16 opacity-30 pointer-events-none" style={{ backgroundImage: "url('/assets/noise.webp')" }} />
      </div>
    </section>
  );
};
