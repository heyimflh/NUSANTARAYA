"use client";

import { useEffect, useRef } from "react";
import { FutureSignal } from "@/types/future";
import { FUTURE_SOURCES } from "@/data/future/sourceRegistry";
import { X, Bookmark, ExternalLink, Map, BookOpen, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FUTURE_THEMES } from "@/data/future/themes";

export function FutureSignalDetailDrawer({
  signal,
  isOpen,
  isSaved,
  onClose,
  onToggleSave,
}: {
  signal: FutureSignal | null;
  isOpen: boolean;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (id: string) => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus management and escape to close
  useEffect(() => {
    if (isOpen && signal) {
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, signal, onClose]);

  if (!isOpen || !signal) return null;

  const content = signal.localeContent.id;
  const theme = FUTURE_THEMES.find(t => signal.themeIds.includes(t.id));

  return (
    <div 
      className="fixed inset-0 z-[999999] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`drawer-title-${signal.id}`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[var(--future-ink)]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="relative w-full max-w-2xl bg-[var(--future-paper)] h-full overflow-y-auto shadow-2xl flex flex-col transform transition-transform duration-300 ease-out translate-x-0"
        tabIndex={-1}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[var(--future-paper)]/95 backdrop-blur-xl z-20 border-b border-[var(--future-line)] px-6 py-5 md:px-10 md:py-6 flex items-center justify-between shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--future-paper-deep)] to-transparent opacity-50 pointer-events-none" />
          <div className="flex flex-wrap gap-3 items-center relative z-10">
            <span className="text-[10px] md:text-[11px] uppercase font-mono font-bold text-[var(--future-ink)] tracking-[0.25em] px-3.5 py-1.5 border border-[var(--future-line)] bg-[var(--future-paper)] shadow-sm">
              {signal.signalStatus.replace(/-/g, " ")}
            </span>
            {theme && (
              <span className="text-[10px] md:text-[11px] uppercase font-mono font-bold text-[var(--future-paper)] bg-[var(--future-ink)] tracking-[0.25em] px-3.5 py-1.5 shadow-md">
                {theme.label.id}
              </span>
            )}
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="relative z-10 p-2.5 text-[var(--future-ink)] hover:bg-[var(--future-paper-deep)] hover:rotate-90 hover:scale-110 transition-all duration-300 rounded-full border border-[var(--future-line)]/50 hover:border-[var(--future-line)] hover:shadow-sm bg-[var(--future-paper)]"
            aria-label="Tutup detail sinyal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 flex-1 flex flex-col gap-14">
          
          <div className="space-y-6 relative">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-[var(--future-solar)]/5 to-[var(--future-terracotta)]/5 rounded-full blur-3xl pointer-events-none" />
            
            <h2 id={`drawer-title-${signal.id}`} className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-[var(--future-ink)] leading-[1.1] tracking-tight">
              {content.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[var(--future-muted)]">
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[var(--future-paper-deep)] rounded-sm border border-[var(--future-line)]/50 shadow-sm"><Map className="w-4 h-4 text-[var(--future-terracotta)]"/> {signal.provinceIds[0]?.replace(/-/g, " ")}</span>
              <span className="flex items-center gap-2 px-3 py-1.5 bg-[var(--future-paper-deep)] rounded-sm border border-[var(--future-line)]/50 shadow-sm"><BookOpen className="w-4 h-4 text-[var(--future-teal)]"/> {signal.updatedAt.slice(0,7)}</span>
            </div>
            <p className="text-[var(--future-charcoal)] font-light text-lg md:text-xl leading-[1.8] pt-8 border-t border-[var(--future-line)]/40 relative z-10">
              {content.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="group bg-[var(--future-paper)] hover:bg-[var(--future-paper-deep)] p-8 border border-[var(--future-line)] hover:border-[var(--future-terracotta)]/40 hover:shadow-lg hover:shadow-[var(--future-terracotta)]/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--future-terracotta)] to-transparent opacity-80" />
              <h3 className="flex items-center gap-3 text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[var(--future-terracotta)] mb-5">
                 <span className="w-6 h-[1px] bg-[var(--future-terracotta)]/50"></span>
                 Tantangan
              </h3>
              <p className="text-sm md:text-base text-[var(--future-charcoal)] font-light leading-relaxed group-hover:text-[var(--future-ink)] transition-colors">{content.challenge}</p>
            </div>
            <div className="group bg-[var(--future-paper)] hover:bg-[var(--future-paper-deep)] p-8 border border-[var(--future-line)] hover:border-[var(--future-success)]/40 hover:shadow-lg hover:shadow-[var(--future-success)]/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--future-success)] to-transparent opacity-80" />
              <h3 className="flex items-center gap-3 text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[var(--future-success)] mb-5">
                 <span className="w-6 h-[1px] bg-[var(--future-success)]/50"></span>
                 Respons
              </h3>
              <p className="text-sm md:text-base text-[var(--future-charcoal)] font-light leading-relaxed group-hover:text-[var(--future-ink)] transition-colors">{content.response}</p>
            </div>
          </div>

          {/* Trade Offs (Static text for now if no specific tradeoff text is in signal.tradeOffIds mapped) */}
          {signal.tradeOffIds && signal.tradeOffIds.length > 0 && (
            <div className="p-5 border border-[var(--future-warning)]/50 bg-[var(--future-warning)]/5">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[var(--future-warning)] mb-3">
                <AlertTriangle className="w-4 h-4" /> Trade-off & Risiko
              </h3>
              <ul className="space-y-2">
                {signal.tradeOffIds.map(t => (
                  <li key={t} className="text-sm text-[var(--future-charcoal)] font-light flex gap-2">
                    <span className="text-[var(--future-warning)]">•</span> {t.replace(/-/g, " ")}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sources */}
          {signal.sourceRefs && signal.sourceRefs.length > 0 && (
            <div className="mt-4">
              <h3 className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[var(--future-ink)] mb-5 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[var(--future-line)]"></span>
                Sumber Referensi <span className="text-[var(--future-muted)] font-normal ml-1">({signal.evidenceDate || "N/A"})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {signal.sourceRefs.map(srcId => {
                  const src = FUTURE_SOURCES[srcId];
                  if (!src) return <div key={srcId} className="text-sm text-red-500">Source not found: {srcId}</div>;
                  return (
                    <div key={srcId} className="group flex flex-col p-4 bg-[var(--future-paper)] border border-[var(--future-line)] hover:border-[var(--future-ink)] transition-colors">
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <span className="font-playfair font-medium text-base text-[var(--future-ink)] leading-snug group-hover:text-[var(--future-solar)] transition-colors line-clamp-2">{src.name}</span>
                        {src.url ? (
                          <a href={src.url} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[var(--future-paper-deep)] text-[var(--future-ink)] hover:bg-[var(--future-solar)] hover:text-[var(--future-paper)] transition-colors rounded-sm shrink-0" aria-label={`Buka ${src.name}`}>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="p-1.5 bg-[var(--future-paper-deep)] text-[var(--future-muted)] rounded-sm shrink-0" title="Tautan Belum Tersedia">
                            <ShieldCheck className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-mono font-bold tracking-[0.15em] text-[var(--future-muted)] uppercase mt-auto">
                        <span className="bg-[var(--future-line)]/30 px-1.5 py-0.5">{src.type}</span>
                        {src.dateStr && <span>• {src.dateStr}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 p-5 md:px-10 md:py-6 border-t border-[var(--future-line)] bg-[var(--future-paper)]/95 backdrop-blur-xl flex flex-col sm:flex-row gap-4 mt-auto z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
          <button 
            onClick={() => onToggleSave(signal.id)}
            className={`flex-1 flex items-center justify-center gap-3 py-4 border transition-all duration-300 text-[11px] font-mono font-bold tracking-[0.2em] uppercase shadow-sm ${
              isSaved 
                ? 'bg-[var(--future-ink)] text-[var(--future-paper)] border-[var(--future-ink)] shadow-md scale-[0.98]' 
                : 'bg-transparent text-[var(--future-ink)] border-[var(--future-ink)] hover:bg-[var(--future-ink)] hover:text-[var(--future-paper)] hover:shadow-md'
            }`}
          >
            <Bookmark className={`w-4 h-4 transition-transform duration-300 ${isSaved ? 'fill-current scale-110' : ''}`} />
            {isSaved ? "Disimpan di Passport" : "Simpan Sinyal"}
          </button>
          
          <Link 
            href={`/explore?layer=future&province=${signal.provinceIds[0]}`}
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-[var(--future-solar)] text-[var(--future-ink)] border border-[var(--future-solar)] transition-all duration-300 text-[11px] font-mono font-bold tracking-[0.2em] uppercase hover:bg-[var(--future-teal)] hover:border-[var(--future-teal)] hover:text-[var(--future-paper)] hover:shadow-md shadow-sm"
          >
            <Map className="w-4 h-4" /> Buka di Atlas
          </Link>
        </div>

      </div>
    </div>
  );
}
