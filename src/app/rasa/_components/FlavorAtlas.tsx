"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRasaState } from "../_hooks/useRasaState";
import { CANONICAL_DISHES } from "@/data/rasa/culinary.data";
import { ArrowRight, UtensilsCrossed, Eye } from "lucide-react";
import DishQuickView from "./DishQuickView";
import { CulinaryDish } from "@/data/rasa/culinary.types";

const ITEMS_PER_PAGE = 12;

export default function FlavorAtlas() {
  const { query, region, activeFlavors, mode } = useRasaState();
  const [page, setPage] = useState(1);
  const [quickViewDish, setQuickViewDish] = useState<CulinaryDish | null>(null);

  // Filter logic
  const filteredDishes = useMemo(() => {
    let result = CANONICAL_DISHES;

    // Filter by query (title or alias)
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(d => 
        d.localeContent.id.title.toLowerCase().includes(lowerQuery) ||
        d.aliases.some(a => a.toLowerCase().includes(lowerQuery)) ||
        d.provinceIds.some(p => p.includes(lowerQuery))
      );
    }

    // Filter by region
    if (region) {
      result = result.filter(d => d.regionIds.includes(region));
    }

    // Filter by flavors
    if (activeFlavors.length > 0) {
      result = result.filter(d => 
        activeFlavors.every(f => d.flavorIds.includes(f))
      );
    }

    return result;
  }, [query, region, activeFlavors]);

  const visibleDishes = filteredDishes.slice(0, page * ITEMS_PER_PAGE);
  const hasMore = visibleDishes.length < filteredDishes.length;

  const viewType = mode === "learn" ? "compact" : "editorial";

  if (filteredDishes.length === 0) {
    return (
      <section id="flavor-atlas" className="w-full py-16 border-t border-[var(--rasa-line)] flex flex-col items-center justify-center text-center">
        <UtensilsCrossed size={48} className="text-[var(--rasa-muted)] mb-6 opacity-20" />
        <h3 className="text-2xl font-serif text-[var(--rasa-cacao)] mb-3">Tidak Ditemukan</h3>
        <p className="text-[var(--rasa-ink)] max-w-md">
          Kami tidak menemukan hidangan yang sesuai dengan filter Anda. Cobalah mengurangi kriteria pencarian atau pilih region lain.
        </p>
      </section>
    );
  }

  return (
    <section id="flavor-atlas" aria-labelledby="atlas-heading" className="w-full pt-16 relative">
      <div className="flex justify-between items-end mb-8 border-b border-[var(--rasa-line)] pb-4">
        <div>
           <h2 id="atlas-heading" className="text-3xl font-serif text-[var(--rasa-cacao)]">Katalog Rasa</h2>
           <p className="text-sm text-[var(--rasa-muted)] mt-1">Menampilkan {filteredDishes.length} hidangan</p>
        </div>
      </div>

      {viewType === "editorial" ? (
        // Editorial Feast (Grid)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="group flex flex-col bg-[var(--rasa-paper)] border border-[var(--rasa-line)] hover:border-[var(--rasa-cacao)] transition-colors focus-within:ring-2 focus-within:ring-[var(--rasa-saffron)] relative"
            >
              <Link href={`/rasa/${dish.slug}`} className="absolute inset-0 z-0" aria-label={`Buka detail ${dish.localeContent.id.title}`}></Link>
              <div className="aspect-[4/3] bg-[var(--rasa-paper-deep)] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={dish.media[1]?.src || dish.media[0]?.src} 
                  alt={dish.media[1]?.alt || dish.media[0]?.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <button 
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickViewDish(dish); }}
                  className="absolute bottom-3 right-3 bg-[var(--rasa-paper)]/90 backdrop-blur-sm p-2 text-[var(--rasa-cacao)] hover:text-[var(--rasa-chili)] transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                  aria-label={`Quick view ${dish.localeContent.id.title}`}
                >
                  <Eye size={18} />
                </button>
              </div>
              <div className="p-5 flex flex-col flex-grow relative z-0 pointer-events-none">
                <span className="text-xs uppercase tracking-widest text-[var(--rasa-muted)] mb-2">
                  {dish.provinceIds[0].replace("-", " ")}
                </span>
                <h3 className="text-xl font-serif text-[var(--rasa-cacao)] mb-2 group-hover:text-[var(--rasa-chili)] transition-colors">
                  {dish.localeContent.id.title}
                </h3>
                <p className="text-sm text-[var(--rasa-ink)] line-clamp-2 flex-grow mb-4">
                  {dish.localeContent.id.summary}
                </p>
                <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-[var(--rasa-line)] border-dashed">
                  {dish.flavorIds.slice(0, 3).map(f => (
                    <span key={f} className="text-xs text-[var(--rasa-muted)] capitalize after:content-[',_'] last:after:content-['']">{f.replace("-", " ")}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Compact Culinary Index (List)
        <div className="flex flex-col border border-[var(--rasa-line)] bg-[var(--rasa-paper)]">
          {visibleDishes.map((dish, i) => (
            <div 
              key={dish.id} 
              className={`flex flex-col sm:flex-row sm:items-center gap-4 p-4 hover:bg-[var(--rasa-paper-deep)] transition-colors group focus-within:ring-2 focus-within:ring-[var(--rasa-saffron)] -outline-offset-2 relative ${i !== visibleDishes.length - 1 ? 'border-b border-[var(--rasa-line)]' : ''}`}
            >
              <Link href={`/rasa/${dish.slug}`} className="absolute inset-0 z-0" aria-label={`Buka detail ${dish.localeContent.id.title}`}></Link>
              <div className="w-16 h-16 bg-[var(--rasa-line)] shrink-0 overflow-hidden relative z-0 pointer-events-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={dish.media[1]?.src || dish.media[0]?.src} 
                  alt="" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-grow relative z-0 pointer-events-none">
                <h3 className="text-lg font-serif text-[var(--rasa-cacao)] group-hover:text-[var(--rasa-chili)] transition-colors">
                  {dish.localeContent.id.title}
                </h3>
                <div className="text-sm text-[var(--rasa-muted)]">
                  {dish.provinceIds[0].replace("-", " ")} &middot; {dish.categoryId.replace("-", " ")}
                </div>
              </div>
              <div className="hidden md:flex flex-wrap gap-2 w-48 shrink-0 relative z-0 pointer-events-none">
                 {dish.flavorIds.map(f => (
                    <span key={f} className="text-xs border border-[var(--rasa-line)] px-2 py-0.5 text-[var(--rasa-ink)] capitalize">{f.replace("-", " ")}</span>
                 ))}
              </div>
              <div className="shrink-0 flex items-center gap-2 z-10">
                 <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickViewDish(dish); }}
                    className="p-2 text-[var(--rasa-muted)] hover:text-[var(--rasa-chili)] transition-colors"
                    aria-label={`Quick view ${dish.localeContent.id.title}`}
                 >
                    <Eye size={20} />
                 </button>
                 <ArrowRight size={20} className="text-[var(--rasa-muted)] group-hover:text-[var(--rasa-chili)] transition-colors hidden sm:block pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setPage(p => p + 1)}
            className="px-8 py-3 border border-[var(--rasa-cacao)] text-[var(--rasa-cacao)] hover:bg-[var(--rasa-paper-deep)] transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}

      {quickViewDish && (
        <DishQuickView 
          dish={quickViewDish} 
          onClose={() => setQuickViewDish(null)} 
        />
      )}
    </section>
  );
}
