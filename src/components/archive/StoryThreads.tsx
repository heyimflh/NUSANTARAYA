import React from "react";
import { ArchiveStoryThread } from "@/types/archive";
import { ArrowRight, BookOpen } from "lucide-react";

interface StoryThreadsProps {
  threads: readonly ArchiveStoryThread[];
  onOpenThread: (id: string) => void;
  t: (id: string, en: string) => string;
}

export function StoryThreads({ threads, onOpenThread, t }: StoryThreadsProps) {
  return (
    <section className="bg-transparent relative py-32 border-b border-[var(--archive-line)]/60 overflow-hidden">
      {/* Background Texture / Abstract Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--archive-ink) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="archive-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--archive-line)] bg-[var(--archive-canvas)] mb-6">
              <BookOpen className="w-4 h-4 text-[var(--archive-oxblood)]" />
              <span className="archive-eyebrow !mb-0 tracking-widest text-[var(--archive-ink)]">Curated Editorials</span>
            </div>
            <h2 className="archive-display text-5xl md:text-7xl mb-6 text-[var(--archive-ink)] font-bold">{t("Benang Merah Cerita", "Story Threads")}</h2>
            <p className="text-xl md:text-2xl text-[var(--archive-muted)] font-playfair italic leading-relaxed">
              {t("Jelajahi alur cerita tematik yang menenun berbagai artefak dan tradisi menjadi satu permadani narasi besar Nusantara.", "Explore thematic storylines that weave various artifacts and traditions into a grand tapestry of Nusantara narratives.")}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threads.map((tData, index) => {
            // Assign different subtle background tints based on index for a premium magazine look
            const bgTints = [
              "from-[#FFF9F0] to-[#E7DAC5]/40",
              "from-[#FFF9F0] to-[#EAD5C8]/40",
              "from-[#FFF9F0] to-[#DDE3D5]/40",
            ];
            const bgTint = bgTints[index % bgTints.length];
            const delay = index * 100;

            return (
              <div 
                key={tData.id} 
                className={`group relative flex flex-col h-full bg-gradient-to-br ${bgTint} border border-[var(--archive-line)] rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--archive-charcoal)]/30`}
                style={{ animationDelay: `${delay}ms` }}
                onClick={() => onOpenThread(tData.id)}
              >
                {/* Top Label */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--archive-terracotta)] via-[var(--archive-saffron)] to-[var(--archive-teal)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <span className="inline-block px-3 py-1 bg-[var(--archive-ink)] text-[var(--archive-canvas)] text-xs font-bold tracking-widest uppercase rounded">
                      {tData.primaryPillar}
                    </span>
                    <span className="text-[var(--archive-line)] font-playfair italic text-xl">0{index + 1}</span>
                  </div>
                  
                  <h3 className="archive-h2 !text-3xl md:!text-4xl mb-6 group-hover:text-[var(--archive-terracotta)] transition-colors duration-500">
                    {t(tData.title, tData.titleEn || tData.title)}
                  </h3>
                  
                  <p className="text-base text-[var(--archive-muted)] font-inter leading-relaxed mt-auto border-t border-[var(--archive-line)] pt-6">
                    {t(tData.promise, tData.promiseEn || tData.promise)}
                  </p>
                </div>

                {/* Footer/CTA Area */}
                <div className="px-8 py-5 bg-[var(--archive-canvas)]/50 backdrop-blur-sm border-t border-[var(--archive-line)] flex items-center justify-between group-hover:bg-[var(--archive-ink)] transition-colors duration-500">
                  <span className="text-sm font-medium tracking-widest uppercase text-[var(--archive-charcoal)] group-hover:text-[var(--archive-canvas)] transition-colors duration-500">
                    {t("Baca Cerita", "Read Story")}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[var(--archive-charcoal)] flex items-center justify-center group-hover:border-[var(--archive-canvas)] transition-colors duration-500 group-hover:translate-x-2">
                    <ArrowRight className="w-4 h-4 text-[var(--archive-charcoal)] group-hover:text-[var(--archive-canvas)] transition-colors duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
