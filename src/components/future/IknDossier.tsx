import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, AlertTriangle, Leaf } from "lucide-react";

export function IknDossier() {
  return (
    <section id="ikn" className="w-full py-24 md:py-32 bg-[var(--future-canvas)] border-b border-[var(--future-line)] relative overflow-hidden">
      
      {/* Background typographic watermark */}
      <div className="absolute top-10 -left-10 text-[20vw] font-playfair font-bold text-[var(--future-paper-deep)] opacity-20 pointer-events-none tracking-tighter leading-none select-none">
        IKN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          {/* Dossier Content (5 cols) */}
          <div className="w-full lg:w-5/12 flex flex-col order-2 lg:order-1">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-4 h-4 text-[var(--future-forest)]" />
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[var(--future-forest)]">
                  Anchor Project · Kaltim
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
                Kota di <br />Tengah Hutan.
              </h2>
              <p className="text-base text-[var(--future-charcoal)] mb-8 font-light leading-relaxed">
                Nusantara dirancang dengan konsep <em className="font-playfair italic font-medium">Forest City</em> dan <em className="font-playfair italic font-medium">Smart City</em>. Bukan sekadar memindahkan pusat administrasi, tetapi mereset paradigma tata ruang agar kembali selaras dengan ritme alam dan komunitas lokal.
              </p>
            </div>

            {/* Chapters / Key Areas */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="flex gap-4 items-start group">
                <span className="text-3xl font-playfair font-bold text-[var(--future-line)] group-hover:text-[var(--future-forest)] transition-colors">01</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--future-ink)] tracking-wide uppercase mb-1">Sistem Ekologi Pintar</h4>
                  <p className="text-sm text-[var(--future-muted)] font-light">Integrasi sensor lingkungan dan perlindungan koridor satwa. (Sumber: Cetak Biru IKN)</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[var(--future-line)] opacity-50" />
              <div className="flex gap-4 items-start group">
                <span className="text-3xl font-playfair font-bold text-[var(--future-line)] group-hover:text-[var(--future-solar)] transition-colors">02</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--future-ink)] tracking-wide uppercase mb-1">Mobilitas Aktif</h4>
                  <p className="text-sm text-[var(--future-muted)] font-light">Prioritas pejalan kaki, pesepeda, dan 100% transportasi publik listrik pada zona inti.</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[var(--future-line)] opacity-50" />
              <div className="flex gap-4 items-start group">
                <span className="text-3xl font-playfair font-bold text-[var(--future-line)] group-hover:text-[var(--future-terracotta)] transition-colors">03</span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--future-ink)] tracking-wide uppercase mb-1">Integrasi Budaya</h4>
                  <p className="text-sm text-[var(--future-muted)] font-light">Pemberdayaan komunitas adat Dayak & Kutai dalam perencanaan ruang kota berkelanjutan.</p>
                </div>
              </div>
            </div>

          {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/explore?layer=future&province=kalimantan-timur"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--future-ink)] text-[var(--future-paper)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--future-charcoal)] transition-colors border border-[var(--future-ink)]"
              >
                Buka Atlas Kaltim
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/routes"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-[var(--future-ink)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--future-paper-deep)] transition-colors border border-[var(--future-line)]"
              >
                Rute Warisan–IKN
              </Link>
            </div>

            <div className="mt-8 flex items-start gap-3 text-[10px] text-[var(--future-muted)] leading-tight bg-[var(--future-paper)] p-4 border border-[var(--future-line)]">
              <Info className="w-4 h-4 shrink-0 text-[var(--future-charcoal)]" />
              <p>
                Informasi ini mengacu pada target resmi (RPJPN 2045) dan observasi awal lapangan (2024). Target resmi tidak dianggap sebagai hasil final sebelum evaluasi independen.
              </p>
            </div>
          </div>

          {/* Main Image Gallery (7 cols) */}
          <div className="w-full lg:w-7/12 relative order-1 lg:order-2 h-full min-h-[500px]">
            <div className="relative w-[85%] aspect-[3/4] lg:aspect-[4/5] future-frame ml-auto z-10">
              <div className="relative w-full h-full bg-[var(--future-paper-deep)]">
                <Image 
                  src="/assets/province/kalimantan-timur/modern.webp"
                  alt="Pemandangan modern Ibu Kota Nusantara"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 60vw"
                />
              </div>
              <div className="absolute top-6 -left-6 bg-[var(--future-paper)] px-4 py-2 shadow-sm border border-[var(--future-line)] text-[10px] font-mono tracking-widest text-[var(--future-ink)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--future-warning)]" />
                STATUS: IN-PROGRESS
              </div>
            </div>
            
            {/* Overlapping Info Card */}
            <div className="absolute bottom-10 left-0 w-[80%] sm:w-[60%] lg:w-[70%] future-glass p-6 z-20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[var(--future-terracotta)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[var(--future-ink)] tracking-wide uppercase mb-2 text-sm">Trade-off Ekologis</h4>
                  <p className="text-sm text-[var(--future-charcoal)] font-light leading-relaxed">
                    Infrastruktur masif berisiko pada fragmentasi habitat endemik. Rencana mitigasi berfokus pada alokasi 65% area hijau, yang pelaksanaannya masih dalam pemantauan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
