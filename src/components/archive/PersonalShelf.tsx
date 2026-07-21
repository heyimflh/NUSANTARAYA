import React from "react";
import { Bookmark, Sparkles, FolderOpen } from "lucide-react";
import { ArchiveItem } from "@/types/archive";

interface PersonalShelfProps {
  allItems: ArchiveItem[];
  onOpenQuickView: (itemId: string) => void;
  t: (id: string, en: string) => string;
}

export function PersonalShelf({ allItems, onOpenQuickView, t }: PersonalShelfProps) {
  return (
    <section className="bg-transparent relative py-32 border-b border-[var(--archive-line)]/60 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--archive-canvas)]/30 pointer-events-none"></div>
      
      <div className="archive-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="archive-display text-4xl md:text-5xl mb-6 text-[var(--archive-ink)] font-bold">{t("Rak Personal", "Personal Shelf")}</h2>
          <p className="text-xl text-[var(--archive-muted)] max-w-2xl mx-auto font-playfair italic">
            {t("Ruang privat Anda untuk merawat ingatan. Simpan artefak digital yang paling beresonansi dengan Anda di sini.", "Your private space to curate memories. Save the digital artifacts that resonate most with you here.")}
          </p>
        </div>

        {/* Empty State Redesign */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group p-12 md:p-20 bg-[var(--archive-paper)]/80 backdrop-blur-md border border-[var(--archive-line)] border-dashed rounded-3xl text-center overflow-hidden transition-all duration-700 hover:border-[var(--archive-saffron)] hover:bg-[var(--archive-paper)] hover:shadow-2xl">
            
            {/* Animated Glow in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--archive-saffron)]/10 blur-[80px] rounded-full group-hover:bg-[var(--archive-saffron)]/20 transition-all duration-700"></div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Floating Icons */}
              <div className="relative w-32 h-32 mb-8">
                <div className="absolute inset-0 bg-[var(--archive-canvas)] rounded-2xl shadow-xl flex items-center justify-center rotate-[-5deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-700 z-10 border border-[var(--archive-line)]">
                  <Bookmark className="w-12 h-12 text-[var(--archive-saffron)]" />
                </div>
                <div className="absolute inset-0 bg-[var(--archive-saffron-soft)] rounded-2xl shadow-lg flex items-center justify-center rotate-[10deg] group-hover:rotate-15 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-700 border border-[var(--archive-saffron)]/30">
                  <FolderOpen className="w-10 h-10 text-[var(--archive-terracotta)]/50" />
                </div>
                {/* Sparkles */}
                <Sparkles className="absolute -top-4 -right-4 w-6 h-6 text-[var(--archive-saffron)] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                <Sparkles className="absolute -bottom-2 -left-6 w-4 h-4 text-[var(--archive-teal)] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300" />
              </div>

              <h3 className="text-2xl font-bold font-playfair text-[var(--archive-ink)] mb-4">
                {t("Rak Masih Kosong", "Shelf is Empty")}
              </h3>
              <p className="text-[var(--archive-muted)] max-w-md mx-auto mb-8 leading-relaxed">
                {t("Anda belum menyimpan arsip apapun. Jelajahi Kabinet Kategori atau Indeks Regional, lalu klik ikon bookmark pada arsip yang Anda sukai.", "You haven't saved any archives yet. Explore the Category Cabinet or Regional Index, and click the bookmark icon on archives you like.")}
              </p>

              <button className="px-8 py-4 bg-[var(--archive-ink)] text-[var(--archive-canvas)] rounded-full font-bold tracking-wider uppercase text-sm hover:bg-[var(--archive-terracotta)] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                {t("Mulai Eksplorasi", "Start Exploring")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
