"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Bookmark, ArrowRight, ExternalLink } from "lucide-react";
import { CulinaryDish } from "@/data/rasa/culinary.types";
import { useTastingShelf } from "../_hooks/useTastingShelf";

interface DishQuickViewProps {
  dish: CulinaryDish;
  onClose: () => void;
}

export default function DishQuickView({ dish, onClose }: DishQuickViewProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { toggleSaveDish, isDishSaved } = useTastingShelf();
  
  const saved = isDishSaved(dish.id);

  // Focus trap & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    
    // Focus the close button when opened
    closeBtnRef.current?.focus();
    
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-[var(--rasa-ink)]/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qv-title"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer */}
      <div 
        ref={overlayRef}
        className="relative w-full max-w-[520px] bg-[var(--rasa-paper)] h-full shadow-2xl flex flex-col animate-slide-in-right overflow-y-auto"
      >
         {/* Header */}
         <div className="sticky top-0 bg-[var(--rasa-paper)]/95 backdrop-blur-md border-b border-[var(--rasa-line)] flex justify-between items-center p-4 z-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)]">
              Quick View
            </span>
            <button 
              ref={closeBtnRef}
              onClick={onClose}
              className="p-2 text-[var(--rasa-muted)] hover:text-[var(--rasa-error)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--rasa-saffron)]"
              aria-label="Tutup quick view"
            >
              <X size={20} />
            </button>
         </div>

         {/* Hero Image */}
         <div className="w-full aspect-[4/3] bg-[var(--rasa-paper-deep)] relative shrink-0">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img 
             src={dish.media[0]?.src} 
             alt={dish.media[0]?.alt} 
             className="w-full h-full object-cover"
           />
         </div>

         {/* Content */}
         <div className="p-6 md:p-8 flex flex-col gap-6 flex-grow">
            <div>
               <div className="flex justify-between items-start mb-2">
                 <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)]">
                   {dish.provinceIds[0].replace("-", " ")} &middot; {dish.categoryId.replace("-", " ")}
                 </span>
                 <span className="font-mono text-xs text-[var(--rasa-muted)]">#{dish.id.toUpperCase().slice(0,6)}</span>
               </div>
               
               <h2 id="qv-title" className="text-3xl font-serif text-[var(--rasa-cacao)] mb-3">
                 {dish.localeContent.id.title}
               </h2>
               
               <p className="text-[var(--rasa-ink)] leading-relaxed text-sm">
                 {dish.localeContent.id.summary}
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-[var(--rasa-line)] py-4 my-2">
               <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2">Rasa</h4>
                  <div className="flex flex-wrap gap-1">
                    {dish.flavorIds.map(f => (
                      <span key={f} className="text-xs border border-[var(--rasa-line)] px-2 py-0.5 text-[var(--rasa-ink)] capitalize">{f.replace("-", " ")}</span>
                    ))}
                  </div>
               </div>
               <div>
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2">Bahan</h4>
                  <ul className="text-xs text-[var(--rasa-ink)] flex flex-col gap-1">
                    {dish.localeContent.id.keyIngredients.slice(0,3).map(ing => (
                      <li key={ing} className="capitalize flex items-center gap-1">
                         <span className="w-1 h-1 bg-[var(--rasa-cacao)] rounded-full block"></span>
                         {ing.replace("-", " ")}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>

            <div>
               <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--rasa-muted)] mb-2">Konteks Asal</h4>
               <p className="text-xs text-[var(--rasa-ink)] leading-relaxed line-clamp-4">
                 {dish.localeContent.id.originContext}
               </p>
            </div>

            {/* Actions Sticky Bottom (within flow since scrollable) */}
            <div className="mt-auto pt-8 flex flex-col gap-3">
               <div className="flex gap-3">
                  <Link 
                    href={`/rasa/${dish.slug}`}
                    className="flex-grow inline-flex justify-center items-center gap-2 py-3 bg-[var(--rasa-cacao)] text-[var(--rasa-paper)] hover:bg-[var(--rasa-ink)] transition-colors text-sm font-medium uppercase tracking-wider"
                  >
                    Buka Detail <ArrowRight size={16} />
                  </Link>
                  <button 
                    onClick={() => toggleSaveDish(dish.id)}
                    className={`px-4 flex items-center justify-center border transition-colors ${saved ? "bg-[var(--rasa-chili)] border-[var(--rasa-chili)] text-white" : "border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)]"}`}
                    aria-label={saved ? "Hapus dari simpanan" : "Simpan rasa"}
                  >
                    <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
                  </button>
               </div>
               <Link 
                 href={`/provinsi/${dish.provinceIds[0]}`}
                 className="inline-flex justify-center items-center gap-2 py-3 border border-[var(--rasa-line)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
               >
                 <ExternalLink size={16} /> Lihat di Provinsi
               </Link>
            </div>
         </div>
      </div>
      
      {/* Simple inline style for animation since we don't want to touch global tailwind config if not needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}
