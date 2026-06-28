import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroNusantaraya from "@/components/hero/HeroNusantaraya";

export default function HomePage() {
  return (
    <>
      <HeroNusantaraya />
      <div className="nusa-container py-12 md:py-20">
        {/* Stats */}
        <section className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "38", label: "Provinsi" },
            { value: "1000+", label: "Budaya" },
            { value: "500+", label: "Kuliner" },
            { value: "300+", label: "Destinasi" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-surface border border-border-light hover:border-gold/20 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-gold">
                {stat.value}
              </p>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* 7 Pilar Preview */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-center text-2xl md:text-3xl font-heading font-bold mb-8">
            Tujuh Pilar <span className="text-gold">NUSANTARAYA</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { pilar: "Sejarah", desc: "Jejak masa lalu", color: "bg-merah/10 text-merah" },
              { pilar: "Aksara", desc: "Bahasa & tulisan", color: "bg-biru/10 text-biru" },
              { pilar: "Narasi", desc: "Cerita Nusantara", color: "bg-gold/10 text-gold-dark" },
              { pilar: "Tradisi", desc: "Adat & seni", color: "bg-sumatera/10 text-sumatera" },
              { pilar: "Alam", desc: "Destinasi & wisata", color: "bg-hijau/10 text-hijau" },
              { pilar: "Rasa", desc: "Kuliner khas", color: "bg-sulawesi/10 text-sulawesi" },
              { pilar: "Yatra", desc: "Perjalanan & masa depan", color: "bg-papua/10 text-papua" },
            ].map((p) => (
              <div
                key={p.pilar}
                className={`flex flex-col items-center text-center p-4 rounded-2xl ${p.color} transition-transform hover:scale-105`}
              >
                <p className="text-lg font-heading font-bold">{p.pilar}</p>
                <p className="text-xs mt-1 opacity-80">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
