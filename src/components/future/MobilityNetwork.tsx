import { FUTURE_SIGNALS } from "@/data/future/signals";
import { Train, Zap } from "lucide-react";
import Image from "next/image";

export function MobilityNetwork() {
  const mobilitySignals = FUTURE_SIGNALS.filter(
    s => s.themeIds.includes("connected-mobility")
  ).slice(0, 2);

  return (
    <section id="mobility" className="w-full py-24 md:py-32 bg-[var(--future-canvas)] border-b border-[var(--future-line)] relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--future-line)]/50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[var(--future-line)]/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          <div className="w-full lg:w-5/12 order-2 lg:order-1">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--future-terracotta)]/10 border border-[var(--future-terracotta)]/30 text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-terracotta)] mb-6">
                Sektor I: Mobilitas Terhubung
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
                Merajut Pulau dengan <br />
                <span className="italic font-light">Jejak Bebas Karbon</span>
              </h2>
              <p className="text-lg text-[var(--future-charcoal)] font-light leading-relaxed mb-10">
                Dari kereta cepat yang menembus kontur Jawa hingga elektrifikasi transportasi laut antar pulau, mobilitas masa depan Nusantara memprioritaskan konektivitas tanpa emisi karbon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="flex items-center gap-3 p-4 bg-[var(--future-paper)] border border-[var(--future-line)] group hover:border-[var(--future-terracotta)] transition-colors">
                   <div className="w-10 h-10 shrink-0 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-canvas)] group-hover:bg-[var(--future-terracotta)]/10 transition-colors">
                     <Train className="w-5 h-5 text-[var(--future-terracotta)]" />
                   </div>
                   <div>
                     <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--future-muted)] block mb-1">Infrastruktur</span>
                     <span className="text-sm font-bold font-mono tracking-wider text-[var(--future-ink)] uppercase">High-Speed Rail</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 p-4 bg-[var(--future-paper)] border border-[var(--future-line)] group hover:border-[var(--future-solar)] transition-colors">
                   <div className="w-10 h-10 shrink-0 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-canvas)] group-hover:bg-[var(--future-solar)]/10 transition-colors">
                     <Zap className="w-5 h-5 text-[var(--future-solar)]" />
                   </div>
                   <div>
                     <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--future-muted)] block mb-1">Infrastruktur</span>
                     <span className="text-sm font-bold font-mono tracking-wider text-[var(--future-ink)] uppercase">EV Ecosystem</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/10] future-frame p-2 bg-[var(--future-paper-deep)] mb-10 lg:mb-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-[45vw] lg:right-0 lg:max-w-3xl z-0">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/assets/province/kalimantan-timur/modern.webp"
                  alt="Mobilitas Masa Depan"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[var(--future-paper)] p-6 border border-[var(--future-line)] shadow-xl z-20 max-w-sm hidden md:block">
                <h4 className="font-playfair text-lg text-[var(--future-ink)] mb-2">Cetak Biru Mobilitas 2045</h4>
                <p className="text-xs text-[var(--future-charcoal)] font-light leading-relaxed">Fokus pada transportasi publik elektrifikasi dan 15-minute city di pusat urban baru.</p>
              </div>
            </div>
            
            {/* Signals overlaying image on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:absolute lg:bottom-12 lg:right-12 lg:w-3/4 z-20">
               {mobilitySignals.map(s => (
                 <div key={s.id} className="p-6 bg-[var(--future-paper)]/95 backdrop-blur border border-[var(--future-line)] group hover:border-[var(--future-ink)] transition-colors">
                   <span className="text-[10px] uppercase font-mono font-bold text-[var(--future-muted)] tracking-widest mb-3 block border-b border-[var(--future-line)]/50 pb-2">
                      {s.provinceIds[0].replace(/-/g, " ")}
                   </span>
                   <h3 className="font-playfair font-medium text-lg text-[var(--future-ink)] mb-3 leading-tight group-hover:text-[var(--future-terracotta)] transition-colors">{s.localeContent.id.title}</h3>
                   <p className="text-xs text-[var(--future-charcoal)] font-light leading-relaxed line-clamp-3">{s.localeContent.id.summary}</p>
                 </div>
               ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
