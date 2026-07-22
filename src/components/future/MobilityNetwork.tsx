import { FUTURE_SIGNALS } from "@/data/future/signals";
import { Train, Zap } from "lucide-react";
import Image from "next/image";

export function MobilityNetwork() {
  const mobilitySignals = FUTURE_SIGNALS.filter(
    s => s.themeIds.includes("connected-mobility")
  ).slice(0, 2);

  return (
    <section id="mobility" className="w-full py-24 md:py-32 lg:py-40 bg-[var(--future-canvas)] border-b border-[var(--future-line)] relative overflow-hidden">
      
      {/* Decorative Grid Lines & Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--future-line)] to-transparent pointer-events-none opacity-40" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--future-line)] to-transparent pointer-events-none opacity-40" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--future-terracotta)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-24 items-center">
          
          {/* Text Content */}
          <div className="w-full xl:w-5/12 order-2 xl:order-1 relative z-20">
            <div className="mb-12 relative">
              <span className="inline-flex items-center gap-3 px-4 py-1.5 bg-[var(--future-terracotta)]/5 border border-[var(--future-terracotta)]/30 text-[10px] md:text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[var(--future-terracotta)] mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--future-terracotta)] animate-pulse" />
                Sektor I: Mobilitas Terhubung
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-[var(--future-ink)] mb-8 leading-[1.1] tracking-tight relative">
                Merajut Pulau dengan <br />
                <span className="italic font-light text-[var(--future-terracotta)]">Jejak Bebas Karbon</span>
              </h2>
              <p className="text-lg md:text-xl text-[var(--future-charcoal)] font-light leading-[1.8] mb-12 relative z-10">
                Dari kereta cepat yang menembus kontur Jawa hingga elektrifikasi transportasi laut antar pulau, mobilitas masa depan Nusantara memprioritaskan konektivitas tanpa emisi karbon.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                 <div className="flex-1 flex items-center gap-4 p-5 bg-[var(--future-paper)] border border-[var(--future-line)] group hover:border-[var(--future-terracotta)] hover:shadow-lg hover:shadow-[var(--future-terracotta)]/5 transition-all duration-300 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--future-terracotta)] to-transparent opacity-80" />
                   <div className="w-12 h-12 shrink-0 border border-[var(--future-terracotta)]/20 flex items-center justify-center bg-[var(--future-canvas)] group-hover:bg-[var(--future-terracotta)]/10 transition-colors rounded-sm">
                     <Train className="w-5 h-5 text-[var(--future-terracotta)]" />
                   </div>
                   <div>
                     <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--future-muted)] block mb-1">Infrastruktur</span>
                     <span className="text-sm font-bold font-mono tracking-wider text-[var(--future-ink)] uppercase">High-Speed Rail</span>
                   </div>
                 </div>
                 <div className="flex-1 flex items-center gap-4 p-5 bg-[var(--future-paper)] border border-[var(--future-line)] group hover:border-[var(--future-solar)] hover:shadow-lg hover:shadow-[var(--future-solar)]/5 transition-all duration-300 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--future-solar)] to-transparent opacity-80" />
                   <div className="w-12 h-12 shrink-0 border border-[var(--future-solar)]/20 flex items-center justify-center bg-[var(--future-canvas)] group-hover:bg-[var(--future-solar)]/10 transition-colors rounded-sm">
                     <Zap className="w-5 h-5 text-[var(--future-solar)]" />
                   </div>
                   <div>
                     <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[var(--future-muted)] block mb-1">Infrastruktur</span>
                     <span className="text-sm font-bold font-mono tracking-wider text-[var(--future-ink)] uppercase">EV Ecosystem</span>
                   </div>
                 </div>
              </div>

              {/* Signal Cards (Moved to left column to avoid covering image) */}
              <div className="flex flex-col gap-6 mt-12 w-full z-30">
                 {mobilitySignals.map((s) => (
                   <div key={s.id} className="p-6 md:p-8 bg-[var(--future-paper)] border border-[var(--future-line)] group hover:border-[var(--future-terracotta)]/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden shadow-sm hover:shadow-[var(--future-terracotta)]/5">
                     <div className="absolute inset-0 bg-gradient-to-br from-[var(--future-paper-deep)] to-transparent opacity-50 pointer-events-none" />
                     <div className="relative z-10">
                       <span className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase font-mono font-bold text-[var(--future-muted)] tracking-[0.2em] mb-4 border-b border-[var(--future-line)]/60 pb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--future-terracotta)]/70 block" />
                          {s.provinceIds[0].replace(/-/g, " ")}
                       </span>
                       <h3 className="font-playfair font-medium text-xl md:text-2xl text-[var(--future-ink)] mb-4 leading-snug group-hover:text-[var(--future-terracotta)] transition-colors">{s.localeContent.id.title}</h3>
                       <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed line-clamp-3">{s.localeContent.id.summary}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
          
          {/* Image & Annotation Card */}
          <div className="w-full xl:w-7/12 order-1 xl:order-2 relative flex items-center justify-end">
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] future-frame p-2 md:p-3 bg-[var(--future-paper-deep)] z-0 shadow-2xl xl:w-[105%] xl:-mr-6">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/assets/province/dki-jakarta/modern.webp"
                  alt="Mobilitas Masa Depan - Jakarta"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--future-ink)]/40 via-transparent to-transparent opacity-80" />
              </div>
              
              {/* Annotation Card */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-[var(--future-paper)] p-6 md:p-8 border border-[var(--future-line)] shadow-2xl z-20 max-w-xs hidden md:block group hover:border-[var(--future-solar)]/50 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--future-solar)]" />
                <h4 className="font-playfair font-medium text-lg text-[var(--future-ink)] mb-2">Cetak Biru Mobilitas 2045</h4>
                <p className="text-xs text-[var(--future-charcoal)] font-light leading-relaxed">Fokus pada transportasi publik elektrifikasi dan <em className="italic">15-minute city</em>.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
