"use client";

import { FutureSignal } from "@/types/future";
import { ArrowRight, Bookmark } from "lucide-react";
import Image from "next/image";

export function FutureSignalCard({
  signal,
  isSaved,
  onToggleSave,
  onOpenDetail,
}: {
  signal: FutureSignal;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onOpenDetail: (id: string) => void;
}) {
  const content = signal.localeContent.id;
  const mainMedia = signal.media?.[0];

  return (
    <div className="flex flex-col bg-[var(--future-paper)] border border-[var(--future-line)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--future-ink)]/5 group w-full h-full">
      {mainMedia && (
        <div className="w-full relative h-48 future-frame shrink-0">
          <div className="relative w-full h-full bg-[var(--future-paper-deep)] overflow-hidden">
            <Image 
              src={mainMedia.src} 
              alt={mainMedia.altId} 
              fill 
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <div className="absolute top-3 left-3 bg-[var(--future-paper)]/90 backdrop-blur-sm px-2 py-1 border border-[var(--future-line)] text-[10px] font-mono tracking-widest text-[var(--future-ink)]">
            {signal.provinceIds[0]?.replace(/-/g, " ").toUpperCase()}
          </div>
        </div>
      )}

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--future-line)]/50">
            <span className="text-[10px] uppercase font-mono text-[var(--future-muted)] tracking-wider">
              {signal.signalStatus.replace(/-/g, " ")}
            </span>
            <span className="text-[10px] uppercase font-mono text-[var(--future-solar)] tracking-wider">
              {signal.updatedAt.slice(0, 7)}
            </span>
          </div>
          <h3 className="text-xl font-playfair text-[var(--future-ink)] mb-3 leading-snug group-hover:text-[var(--future-solar)] transition-colors">
            {content.title}
          </h3>
          <p className="text-[var(--future-charcoal)] font-light text-sm leading-relaxed mb-6 line-clamp-3">
            {content.summary}
          </p>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--future-line)]/50">
          <button 
            onClick={() => onOpenDetail(signal.id)}
            className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--future-ink)] hover:text-[var(--future-solar)] transition-colors flex items-center gap-2"
          >
            Lihat Detail <ArrowRight className="w-3 h-3" />
          </button>
          <button 
            onClick={() => onToggleSave(signal.id)}
            className={`p-2 rounded-full border transition-colors ${
              isSaved 
                ? 'bg-[var(--future-ink)] text-[var(--future-paper)] border-[var(--future-ink)]' 
                : 'bg-transparent text-[var(--future-ink)] border-[var(--future-line)] hover:bg-[var(--future-paper-deep)] hover:border-[var(--future-charcoal)]'
            }`}
            aria-pressed={isSaved}
            aria-label={isSaved ? "Hapus dari tersimpan" : "Simpan Sinyal"}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
