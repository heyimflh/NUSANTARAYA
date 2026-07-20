"use client";

import Link from "next/link";
import { Map, Library, Fingerprint, Activity } from "lucide-react";

export default function RasaEcosystem() {
  return (
    <section id="rasa-ecosystem" className="w-full pt-24 pb-12">
      <div className="text-center mb-12">
         <h2 className="text-3xl font-serif text-[var(--rasa-cacao)] mb-4">Ekosistem NUSANTARAYA</h2>
         <p className="text-sm text-[var(--rasa-muted)]">
           NusaRasa terhubung dengan fitur-fitur lain untuk pengalaman penjelajahan yang menyeluruh.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <Link href="/map?layer=kuliner" className="group p-6 border border-[var(--rasa-line)] bg-[var(--rasa-paper)] hover:border-[var(--rasa-cacao)] transition-colors flex flex-col items-center text-center">
            <Map size={32} className="text-[var(--rasa-muted)] group-hover:text-[var(--rasa-cacao)] transition-colors mb-4" />
            <h3 className="font-serif text-lg text-[var(--rasa-cacao)] mb-2">Nusa Map</h3>
            <p className="text-xs text-[var(--rasa-ink)]">Eksplorasi geospasial hidangan di atas peta interaktif.</p>
         </Link>

         <Link href="/provinsi" className="group p-6 border border-[var(--rasa-line)] bg-[var(--rasa-paper)] hover:border-[var(--rasa-cacao)] transition-colors flex flex-col items-center text-center">
            <Library size={32} className="text-[var(--rasa-muted)] group-hover:text-[var(--rasa-cacao)] transition-colors mb-4" />
            <h3 className="font-serif text-lg text-[var(--rasa-cacao)] mb-2">Province Atlas</h3>
            <p className="text-xs text-[var(--rasa-ink)]">Pelajari konteks budaya lebih dalam di setiap provinsi.</p>
         </Link>

         <Link href="/passport" className="group p-6 border border-[var(--rasa-line)] bg-[var(--rasa-paper)] hover:border-[var(--rasa-cacao)] transition-colors flex flex-col items-center text-center">
            <Fingerprint size={32} className="text-[var(--rasa-muted)] group-hover:text-[var(--rasa-cacao)] transition-colors mb-4" />
            <h3 className="font-serif text-lg text-[var(--rasa-cacao)] mb-2">Nusa Passport</h3>
            <p className="text-xs text-[var(--rasa-ink)]">Koleksi prangko digital dari petualangan rasa Anda.</p>
         </Link>

         <Link href="/archive" className="group p-6 border border-[var(--rasa-line)] bg-[var(--rasa-paper)] hover:border-[var(--rasa-cacao)] transition-colors flex flex-col items-center text-center">
            <Activity size={32} className="text-[var(--rasa-muted)] group-hover:text-[var(--rasa-cacao)] transition-colors mb-4" />
            <h3 className="font-serif text-lg text-[var(--rasa-cacao)] mb-2">RANI (AI)</h3>
            <p className="text-xs text-[var(--rasa-ink)]">Tanyakan kurator AI mengenai preferensi rasa unik Anda.</p>
         </Link>
      </div>
    </section>
  );
}
