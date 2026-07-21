import { FUTURE_THEMES } from "@/data/future/themes";
import { ArrowRight, Users, Move, Leaf, Palette, Home, Waves, History } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  "users": Users,
  "move": Move,
  "leaf": Leaf,
  "palette": Palette,
  "home": Home,
  "waves": Waves,
  "history": History,
};

export function FutureSystems() {
  const featured = FUTURE_THEMES[0];
  const secondary = FUTURE_THEMES.slice(1, 3);
  const others = FUTURE_THEMES.slice(3);

  const renderCard = (theme: typeof FUTURE_THEMES[0], featured: boolean = false, img?: string) => {
    const Icon = iconMap[theme.iconId] || Users;
    
    return (
      <div 
        key={theme.id}
        className={`relative flex flex-col bg-[var(--future-paper)] border border-[var(--future-line)] rounded-none p-6 md:p-8 group hover:bg-[var(--future-paper-deep)] transition-all duration-500 overflow-hidden ${featured ? 'lg:col-span-2 lg:flex-row gap-8' : ''}`}
      >
        {/* Subtle accent glow */}
        <div 
          className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: theme.colorVar }}
        />

        {featured && img && (
          <div className="w-full lg:w-1/2 relative h-48 lg:h-auto future-frame mb-6 lg:mb-0 shrink-0">
            <div className="relative w-full h-full bg-[var(--future-canvas)]">
              <Image src={img} alt={theme.label.id} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        )}

        <div className={`flex flex-col flex-1 relative z-10 ${featured ? 'justify-center' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-[var(--future-line)] flex items-center justify-center bg-[var(--future-canvas)] text-[var(--future-ink)]">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-xl md:text-2xl font-playfair font-medium text-[var(--future-ink)]">
              {theme.label.id}
            </h3>
          </div>
          <p className="text-[var(--future-charcoal)] font-light leading-relaxed mb-8 flex-1 text-sm md:text-base">
            {theme.description.id}
          </p>
          <div className="mt-auto flex items-center justify-between border-t border-[var(--future-line)]/50 pt-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--future-muted)] uppercase">
              Eksplorasi Sistem
            </span>
            <div className="w-8 h-8 rounded-full border border-[var(--future-line)] flex items-center justify-center group-hover:bg-[var(--future-ink)] group-hover:text-[var(--future-paper)] group-hover:border-[var(--future-ink)] transition-colors">
              <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="systems" className="w-full py-24 md:py-32 bg-[var(--future-canvas)] border-b border-[var(--future-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--future-line)] pb-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-mono tracking-widest uppercase text-[var(--future-muted)] mb-4">
              Taksonomi Observatorium
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-ink)] mb-4">
              Tujuh Sistem Masa Depan
            </h2>
            <p className="text-[var(--future-charcoal)] font-light text-lg">
              Inovasi Nusantara tidak berdiri sendiri. Ia bergerak secara paralel di tujuh area fundamental kehidupan yang saling terhubung.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderCard(featured, true, "/assets/heritage-future/warisan.webp")}
          {secondary.map(t => renderCard(t))}
          {others.map((t, idx) => renderCard(t, false, idx === 1 ? "/assets/heritage-future/masa-kini.webp" : undefined))}
        </div>
      </div>
    </section>
  );
}
