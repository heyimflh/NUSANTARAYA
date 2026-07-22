import { FUTURE_HUMAN_STORIES } from "@/data/future/humanStories";
import { UserCircle2, Quote } from "lucide-react";
import Image from "next/image";

export function PeopleStories() {
  return (
    <section id="people-stories" className="w-full py-24 md:py-32 bg-[var(--future-paper)] border-b border-[var(--future-line)] relative overflow-hidden">
      
      {/* Background typographic element */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-playfair font-bold text-[var(--future-canvas)] opacity-40 pointer-events-none tracking-tighter leading-none select-none z-0">
        PEOPLE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-charcoal)] mb-4 pb-2 border-b border-[var(--future-line)]">
            Naratif Lapangan
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[var(--future-ink)] mb-6 leading-tight">
            Manusia di Jantung <br className="hidden md:block" />
            <span className="italic font-light">Perubahan</span>
          </h2>
          <p className="text-lg text-[var(--future-charcoal)] font-light leading-relaxed max-w-2xl mx-auto">
            Masa depan tidak hanya dibangun dengan beton dan algoritma, tetapi oleh tangan-tangan yang merawat bumi dan merajut komunitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {FUTURE_HUMAN_STORIES.map((story, index) => (
            <div key={story.id} className="relative mt-8 md:mt-0">
              {/* Decorative Number */}
              <div className="absolute -top-10 -left-6 text-[8rem] font-playfair font-bold text-[var(--future-canvas)] opacity-80 pointer-events-none z-0">
                0{index + 1}
              </div>
              
              <div className="p-8 lg:p-12 bg-[var(--future-canvas)]/80 backdrop-blur-sm border border-[var(--future-line)] flex flex-col relative z-10 h-full future-frame hover:-translate-y-2 transition-transform duration-500 hover:shadow-xl hover:shadow-[var(--future-ink)]/5">
                 <div className="absolute top-0 left-12 w-[1px] h-12 bg-[var(--future-ink)]" />
                 
                 <div className="flex items-center gap-6 mb-10 pb-8 border-b border-[var(--future-line)]">
                   <div className="w-16 h-16 bg-[var(--future-paper-deep)] flex items-center justify-center shrink-0 border border-[var(--future-line)] shadow-inner">
                     <UserCircle2 className="w-8 h-8 text-[var(--future-charcoal)]" />
                   </div>
                   <div>
                     <span className="text-[10px] font-mono font-bold uppercase text-[var(--future-muted)] tracking-widest block mb-2">
                       {story.role.replace("-", " ")}
                     </span>
                     <div className="flex items-center gap-3 mb-2">
                       <h3 className="font-playfair text-2xl text-[var(--future-ink)] leading-none">{story.name}</h3>
                       {story.isComposite && (
                         <span className="text-[8px] font-mono tracking-widest uppercase border border-[var(--future-line)] px-2 py-0.5 text-[var(--future-muted)]">
                           Composite Persona
                         </span>
                       )}
                     </div>
                     <span className="text-xs font-mono uppercase text-[var(--future-charcoal)] tracking-wider">
                       LOC: {story.location}
                     </span>
                   </div>
                 </div>
                 
                 <div className="space-y-8 flex-1 relative">
                   <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[var(--future-line)] opacity-30 pointer-events-none rotate-180" />
                   {story.chapters.map((ch, idx) => (
                     <div key={idx} className="relative z-10">
                       <h4 className="font-mono text-[10px] font-bold tracking-widest uppercase text-[var(--future-ink)] mb-3">{ch.title}</h4>
                       <p className="text-base text-[var(--future-charcoal)] leading-relaxed italic font-playfair pr-4">
                         "{ch.content}"
                       </p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
