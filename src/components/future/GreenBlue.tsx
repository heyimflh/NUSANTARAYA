import { FUTURE_SIGNALS } from "@/data/future/signals";
import { Droplets, Leaf } from "lucide-react";
import Image from "next/image";

export function GreenBlue() {
  const envSignals = FUTURE_SIGNALS.filter(
    s => s.themeIds.includes("regenerative-environment") || s.themeIds.includes("food-ocean-resilience")
  ).slice(0, 2);

  return (
    <section id="green-blue" className="w-full py-24 md:py-32 bg-[var(--future-paper-deep)] border-b border-[var(--future-line)] relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-[var(--future-teal)]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-[var(--future-forest)]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="w-full lg:w-5/12">
            <div className="mb-10">
              <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-forest)] mb-4 border border-[var(--future-forest)]/30 px-3 py-1 rounded-full bg-[var(--future-forest)]/5">
                Sektor II: Ekologi Sirkular
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
                Napas Hutan & <br />
                <span className="italic font-light text-[var(--future-teal)]">Denyut Lautan</span>
              </h2>
              <p className="text-lg text-[var(--future-charcoal)] font-light leading-relaxed mb-10">
                Transisi energi dan ketahanan pangan bertumpu pada menjaga ekosistem hutan tropis dan keanekaragaman hayati laut kepulauan Nusantara. Praktik regeneratif kini didukung oleh data geospasial presisi.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-[var(--future-paper)] border-l-4 border-[var(--future-forest)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <Leaf className="absolute -right-4 -bottom-4 w-24 h-24 text-[var(--future-forest)]/5 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="w-5 h-5 text-[var(--future-forest)]" />
                    <h4 className="font-mono font-bold text-sm uppercase tracking-widest text-[var(--future-ink)]">Karbon Biru & Hijau</h4>
                  </div>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed pl-8">Restorasi mangrove dan gambut sebagai buffer perubahan iklim berkapasitas masif.</p>
                </div>
              </div>
              <div className="p-6 bg-[var(--future-paper)] border-l-4 border-[var(--future-teal)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <Droplets className="absolute -right-4 -bottom-4 w-24 h-24 text-[var(--future-teal)]/5 group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="w-5 h-5 text-[var(--future-teal)]" />
                    <h4 className="font-mono font-bold text-sm uppercase tracking-widest text-[var(--future-ink)]">Akuakultur Cerdas</h4>
                  </div>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed pl-8">Pemantauan kualitas air real-time berbasis IoT untuk hasil laut lestari.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] mb-8 p-4 bg-[var(--future-canvas)] border border-[var(--future-line)]">
              <div className="relative w-full h-full overflow-hidden future-frame">
                <Image 
                  src="/assets/explore/layers/future.webp"
                  alt="Pemantauan Ekologi Nusantara"
                  fill
                  className="object-cover mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--future-ink)]/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 bg-[var(--future-success)] rounded-full animate-ping" />
                    <span className="text-[10px] font-mono tracking-widest text-[var(--future-paper)] uppercase">Sensors Active</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-playfair text-[var(--future-paper)]">
                    Jaringan Pemantauan Ekologi Terintegrasi
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              {envSignals.map((signal, idx) => (
                <div key={signal.id} className="flex-1 p-6 bg-[var(--future-canvas)] border-t-2 border-[var(--future-line)] hover:border-[var(--future-teal)] transition-colors relative group">
                  <span className="text-[3rem] font-playfair font-bold text-[var(--future-line)]/40 absolute top-4 right-4 pointer-events-none group-hover:text-[var(--future-teal)]/20 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono uppercase font-bold text-[var(--future-forest)] tracking-widest mb-3 block">
                      {signal.provinceIds[0].replace(/-/g, " ")}
                    </span>
                    <h3 className="text-lg font-playfair font-medium text-[var(--future-ink)] mb-3 leading-tight pr-8">
                      {signal.localeContent.id.title}
                    </h3>
                    <p className="text-xs text-[var(--future-charcoal)] font-light leading-relaxed line-clamp-3">
                      {signal.localeContent.id.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
