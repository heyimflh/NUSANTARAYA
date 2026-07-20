"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { CANONICAL_STORIES } from "@/data/rasa/culinary.data";
import { RasaAssetManifest } from "@/data/rasa/asset-manifest";

export default function FoodStoryTheatre() {
  const [activeStoryId, setActiveStoryId] = useState(CANONICAL_STORIES[0]?.id);
  const activeStory = CANONICAL_STORIES.find(s => s.id === activeStoryId) || CANONICAL_STORIES[0];
  
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = activeStory?.chapters[activeChapterIndex];

  if (!activeStory) return null;

  return (
    <section id="food-stories" aria-labelledby="story-heading" className="w-full pt-24">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-12 border-b border-[var(--rasa-line)] pb-4 gap-4">
        <div>
           <h2 id="story-heading" className="text-3xl font-serif text-[var(--rasa-cacao)] flex items-center gap-3">
              <BookOpen size={28} className="text-[var(--rasa-muted)]" />
              Food Story Theatre
           </h2>
           <p className="text-sm text-[var(--rasa-muted)] mt-2">Membaca budaya melalui piring dan dapur.</p>
        </div>
        
        {/* Alternatives selector */}
        {CANONICAL_STORIES.length > 1 && (
          <div className="flex gap-4">
             {CANONICAL_STORIES.map(story => (
               <button
                 key={story.id}
                 onClick={() => {
                   setActiveStoryId(story.id);
                   setActiveChapterIndex(0);
                 }}
                 className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                   activeStoryId === story.id 
                     ? "border-[var(--rasa-cacao)] text-[var(--rasa-cacao)]" 
                     : "border-transparent text-[var(--rasa-muted)] hover:text-[var(--rasa-ink)]"
                 }`}
               >
                 {story.title}
               </button>
             ))}
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        
        {/* Left: Image Stage (7 cols) */}
        <div className="lg:w-7/12 aspect-square md:aspect-[4/3] bg-[var(--rasa-paper-deep)] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeStory.id}-${activeChapterIndex}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={RasaAssetManifest.getDishMedia(activeStory.relatedDishIds[0] || "generic", "sumatera", "hero").src} 
                alt={activeChapter?.title || "Story image"} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Chapter Rail (5 cols) */}
        <div className="lg:w-5/12 bg-[var(--rasa-paper)] p-8 lg:p-12 flex flex-col border border-[var(--rasa-line)] lg:border-l-0 relative min-h-[400px]">
           <div className="mb-8">
             <h3 className="text-4xl font-serif text-[var(--rasa-cacao)] mb-4">{activeStory.title}</h3>
             <p className="text-[var(--rasa-ink)] text-lg leading-relaxed italic border-l-2 border-[var(--rasa-line)] pl-4">
               {activeStory.summary}
             </p>
           </div>

           <div className="flex-grow flex flex-col justify-center relative pl-8">
              {/* Progress Line */}
              <div className="absolute top-0 bottom-0 left-[11px] w-[2px] bg-[var(--rasa-line)]"></div>
              
              <div className="flex flex-col gap-8 relative z-10">
                {activeStory.chapters.map((chapter, index) => {
                  const isActive = index === activeChapterIndex;
                  return (
                    <button 
                      key={chapter.id}
                      onClick={() => setActiveChapterIndex(index)}
                      className="text-left group focus:outline-none flex flex-col gap-2 relative"
                      aria-pressed={isActive}
                    >
                       {/* Node */}
                       <div className={`absolute -left-[32.5px] top-1.5 w-6 h-6 rounded-full border-2 bg-[var(--rasa-paper)] flex items-center justify-center transition-colors ${
                         isActive ? "border-[var(--rasa-cacao)]" : "border-[var(--rasa-line)] group-hover:border-[var(--rasa-muted)]"
                       }`}>
                          {isActive && <div className="w-2 h-2 rounded-full bg-[var(--rasa-chili)]"></div>}
                       </div>
                       
                       <h4 className={`text-xl font-serif transition-colors ${isActive ? "text-[var(--rasa-chili)]" : "text-[var(--rasa-cacao)] opacity-70 group-hover:opacity-100"}`}>
                         {chapter.title}
                       </h4>
                       
                       {isActive && (
                         <motion.p 
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           className="text-[var(--rasa-ink)] leading-relaxed mt-2"
                         >
                           {chapter.content}
                         </motion.p>
                       )}
                    </button>
                  );
                })}
              </div>
           </div>

           <div className="mt-12 text-sm text-[var(--rasa-muted)] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[var(--rasa-line)]"></span>
              Oleh {activeStory.author || "Editorial"}
           </div>
        </div>
      </div>
    </section>
  );
}
