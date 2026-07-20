"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FinalHandoff() {
  return (
    <section id="final-handoff" className="w-full pt-24 pb-32 flex justify-center">
      <div className="bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] max-w-4xl w-full p-12 text-center relative overflow-hidden group">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4 rotate-12 transition-transform duration-1000 group-hover:rotate-45">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 p-8 opacity-10 pointer-events-none transform -translate-x-1/4 translate-y-1/4 -rotate-12 transition-transform duration-1000 group-hover:-rotate-45">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20"></path>
            <path d="M12 2v20"></path>
            <path d="m4.93 4.93 14.14 14.14"></path>
            <path d="m4.93 19.07 14.14-14.14"></path>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center">
           <span className="text-xs uppercase tracking-widest text-[var(--rasa-line)] mb-6 font-semibold">Tiba di Penghujung Catatan</span>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
             Kini Giliran Anda <br/> Menjelajahi Nusantara
           </h2>
           <p className="text-lg text-[var(--rasa-paper-deep)] max-w-xl mx-auto leading-relaxed mb-12 font-light">
             Rasa hanyalah pintu gerbang. Buka peta, susun rute, dan alami sendiri keragaman budaya Indonesia dari dekat.
           </p>

           <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/routes"
                className="px-8 py-4 bg-[var(--rasa-paper)] text-[var(--rasa-cacao)] hover:bg-white transition-colors text-sm font-semibold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                Susun Perjalanan Sekarang
                <ArrowUpRight size={16} />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
