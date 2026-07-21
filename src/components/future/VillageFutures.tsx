import { FUTURE_HUMAN_STORIES } from "@/data/future/humanStories";
import Image from "next/image";
import { Quote } from "lucide-react";

export function VillageFutures() {
  const story = FUTURE_HUMAN_STORIES.find(s => s.themeId === "digital-villages");

  return (
    <section id="village-futures" className="w-full py-24 md:py-32 bg-[var(--future-paper-deep)] border-b border-[var(--future-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Field Journal Spread (5 cols) */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <div className="mb-10">
              <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-teal)] mb-4">
                Desa yang Tetap Menjadi Rumah
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
                Masa Depan Berkumpul di Balai Desa
              </h2>
              <p className="text-base text-[var(--future-charcoal)] font-light leading-relaxed mb-8">
                Teknologi tidak digunakan untuk mencabut penduduk desa menuju kota, melainkan memastikan akses pendidikan, kesehatan, dan logistik setara dengan pusat kota tanpa menghilangkan ritme agraris.
              </p>
            </div>

            {story && (
              <div className="relative pt-6">
                <Quote className="absolute top-0 left-0 w-8 h-8 text-[var(--future-line)]/50 -translate-x-3 -translate-y-2 rotate-180" />
                <div className="bg-[var(--future-paper)] p-8 border-l border-t border-[var(--future-line)] relative future-frame-shadow">
                  {story.isComposite && (
                    <div className="absolute top-0 right-0 bg-[var(--future-canvas)] text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-1 border-b border-l border-[var(--future-line)] text-[var(--future-muted)]">
                      Editorial Composite
                    </div>
                  )}
                  
                  <div className="mb-6 border-b border-[var(--future-line)]/50 pb-4">
                    <h4 className="font-playfair text-xl md:text-2xl text-[var(--future-ink)] mb-1">
                      {story.name}
                    </h4>
                    <span className="text-[10px] font-mono text-[var(--future-muted)] uppercase tracking-widest block">
                      {story.role.replace("-", " ")} — {story.location}
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    {story.chapters.map((chapter, idx) => (
                      <div key={idx}>
                        <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--future-teal)] mb-2">{chapter.title}</h5>
                        <p className="text-sm text-[var(--future-charcoal)] leading-relaxed font-light">{chapter.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Landscape and Diagram (7 cols) */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="w-full aspect-[4/3] lg:aspect-[4/3] relative mb-12 future-frame p-3 bg-[var(--future-canvas)]">
              <div className="relative w-full h-full bg-[var(--future-paper-deep)] overflow-hidden">
                <Image 
                  src="/assets/explore/layers/future.webp"
                  alt="Ilustrasi desa digital"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 90vw, 60vw"
                />
              </div>
              <div className="absolute -bottom-4 right-8 bg-[var(--future-paper)] px-4 py-2 border border-[var(--future-line)] shadow-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--future-teal)] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[var(--future-ink)] uppercase">
                  Telemetry: Aktif
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 relative">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-[var(--future-line)] via-[var(--future-line)] to-transparent" />
              
              <div className="relative">
                <div className="text-3xl font-playfair font-bold text-[var(--future-line)]/50 mb-2">01</div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Akses & Literasi</h4>
                <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Infrastruktur internet menjangkau balai desa, disertai pendampingan relawan digital lokal.</p>
              </div>
              <div className="relative">
                <div className="text-3xl font-playfair font-bold text-[var(--future-line)]/50 mb-2">02</div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Produk Lokal</h4>
                <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Rantai pasok dipersingkat melalui koperasi digital yang menghubungkan hasil panen langsung ke konsumen.</p>
              </div>
              <div className="relative">
                <div className="text-3xl font-playfair font-bold text-[var(--future-line)]/50 mb-2">03</div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--future-ink)] mb-2">Logistik Terhubung</h4>
                <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">Drone pengiriman dan motor listrik dimanfaatkan untuk menembus medan terjal antar desa terpencil.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
