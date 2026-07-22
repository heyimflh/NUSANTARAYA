"use client";

import { useState } from "react";
import { FUTURE_SIGNALS } from "@/data/future/signals";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { FutureSignal } from "@/types/future";
import Image from "next/image";
import Link from "next/link";
export function CivicNetwork() {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const networkSignals = FUTURE_SIGNALS.filter(
    s => s.status === "published" && s.id !== "fs-ikn-forest-city" && s.id !== "fs-smart-grid-ikn"
  ).slice(0, 3);

  if (networkSignals.length === 0) return null;

  const featured = networkSignals[0];
  const others = networkSignals.slice(1);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const renderSignal = (signal: FutureSignal, isFeatured: boolean) => {
    const isSaved = savedIds.has(signal.id);
    return (
      <div 
        key={signal.id} 
        className={`flex flex-col bg-[var(--future-paper)] border border-[var(--future-line)] transition-all duration-500 hover:shadow-xl hover:shadow-[var(--future-ink)]/5 group ${isFeatured ? 'lg:col-span-2 lg:flex-row' : ''}`}
      >
        {isFeatured && (
          <div className="w-full lg:w-5/12 relative h-64 lg:h-auto future-frame shrink-0 m-4 lg:m-6 lg:mr-0">
            <div className="relative w-full h-full bg-[var(--future-paper-deep)]">
              <Image src="/assets/heritage-future/masa-kini.webp" alt="Inovasi Warga" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute top-4 left-4 bg-[var(--future-paper)] px-2 py-1 border border-[var(--future-line)] text-[10px] font-mono tracking-widest text-[var(--future-ink)]">
              FIG. {signal.id.slice(-4).toUpperCase()}
            </div>
          </div>
        )}

        <div className={`p-6 md:p-8 flex flex-col justify-between flex-1 ${isFeatured ? 'lg:w-7/12 lg:pl-10' : 'w-full'}`}>
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-[var(--future-line)]/50 pb-4">
              <span className="px-3 py-1 bg-[var(--future-paper-deep)] text-[var(--future-ink)] text-[10px] font-mono font-bold tracking-widest uppercase border border-[var(--future-line)]">
                {signal.provinceIds[0].replace(/-/g, " ")}
              </span>
              <span className="text-[10px] uppercase font-mono text-[var(--future-muted)] tracking-wider">
                STATUS: {signal.signalStatus.replace(/-/g, " ")}
              </span>
            </div>
            <h3 className={`${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-playfair text-[var(--future-ink)] mb-4 leading-tight`}>
              {signal.localeContent.id.title}
            </h3>
            <p className="text-[var(--future-charcoal)] font-light leading-relaxed mb-8 text-sm md:text-base">
              {signal.localeContent.id.summary}
            </p>
          </div>
          
          <div className="mt-auto space-y-6">
            <div className="p-5 bg-[var(--future-canvas)] border border-[var(--future-line)] relative">
              <div className="absolute -left-px top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--future-terracotta)] to-[var(--future-success)]" />
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-4 h-4 text-[var(--future-terracotta)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--future-charcoal)]"><span className="font-bold text-[var(--future-ink)]">Tantangan:</span> {signal.localeContent.id.challenge}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--future-success)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--future-charcoal)]"><span className="font-bold text-[var(--future-ink)]">Respons:</span> {signal.localeContent.id.response}</p>
              </div>
            </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--future-line)]/50">
              <Link 
                href={`/future?q=${signal.localeContent.id.title}#explorer`}
                className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--future-ink)] hover:text-[var(--future-terracotta)] transition-colors flex items-center gap-2"
              >
                Buka di Explorer <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="civic-network" className="w-full py-24 md:py-32 bg-[var(--future-canvas)] border-b border-[var(--future-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[var(--future-line)] pb-8">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--future-muted)] mb-4">
              Editorial Signal Field
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair text-[var(--future-ink)] mb-4">
              Civic Innovation Network
            </h2>
            <p className="text-[var(--future-charcoal)] font-light text-lg">
              Inovasi yang lahir dari bawah ke atas. Bukan sekadar menunggu arahan pusat, melainkan merespons tantangan lokal secara organik.
            </p>
          </div>
          <Link 
            href="/future?theme=civic-life#explorer"
            className="shrink-0 text-xs font-mono tracking-widest uppercase text-[var(--future-ink)] border-b border-[var(--future-ink)] pb-1 hover:text-[var(--future-terracotta)] hover:border-[var(--future-terracotta)] transition-colors"
          >
            Semua Inovasi Warga
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featured && renderSignal(featured, true)}
          {others.map(s => renderSignal(s, false))}
        </div>
      </div>
    </section>
  );
}
