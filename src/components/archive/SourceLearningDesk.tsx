import React from "react";
import { archiveSourceRegistry } from "@/data/archive/archiveSourceRegistry";
import { Library, Landmark, BookMarked, Users } from "lucide-react";

interface SourceLearningDeskProps {
  t: (id: string, en: string) => string;
}

export function SourceLearningDesk({ t }: SourceLearningDeskProps) {
  // Helper to get an icon based on source type
  const getIcon = (type: string) => {
    switch(type) {
      case 'government': return <Landmark className="w-5 h-5" />;
      case 'academic': return <Library className="w-5 h-5" />;
      case 'museum': return <BookMarked className="w-5 h-5" />;
      case 'community': return <Users className="w-5 h-5" />;
      default: return <Library className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-transparent relative py-32 border-b border-[var(--archive-line)]/60">
      <div className="archive-container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="w-12 h-1 bg-[var(--archive-terracotta)] mb-8"></div>
          <h2 className="archive-display text-4xl md:text-5xl mb-6 text-[var(--archive-ink)] font-bold">{t("Meja Pembelajaran & Sumber", "Source & Learning Desk")}</h2>
          <p className="text-lg text-[var(--archive-muted)] font-inter leading-relaxed">
            {t("Nusa Archive didukung dan diverifikasi oleh jaringan institusi, pusat penelitian, dan komunitas penjaga budaya terkemuka.", "Nusa Archive is supported and verified by a network of leading institutions, research centers, and cultural guardian communities.")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archiveSourceRegistry.map((src, i) => (
            <div 
              key={src.id} 
              className="group relative flex flex-col p-6 bg-[var(--archive-paper)] border border-[var(--archive-line)] rounded-xl overflow-hidden transition-all duration-500 hover:border-[var(--archive-saffron)] hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--archive-canvas)] via-[var(--archive-saffron-soft)] to-[var(--archive-canvas)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--archive-canvas)] text-[var(--archive-charcoal)] group-hover:bg-[var(--archive-saffron)] group-hover:text-white transition-colors duration-500">
                  {getIcon(src.type)}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--archive-muted)] group-hover:text-[var(--archive-charcoal)] font-bold transition-colors duration-500">
                  {src.type}
                </p>
              </div>
              
              <h4 className="font-playfair text-xl font-bold text-[var(--archive-ink)] mb-2 group-hover:text-[var(--archive-terracotta)] transition-colors duration-500">
                {src.organization || src.title}
              </h4>
              
              {src.description && (
                <p className="text-sm text-[var(--archive-muted)] mt-auto pt-4 border-t border-[var(--archive-line)]/50 border-dashed">
                  {src.description}
                </p>
              )}
              
              {/* Decorative corner accent */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-[var(--archive-line)] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
