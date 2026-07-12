"use client";

import React, { useState, useRef, useEffect } from "react";
import type { ScientificReference } from "@/types/atlas";

type InlineCitationProps = {
  ids: string[];
  references: ScientificReference[];
};

export const InlineCitation = ({ ids, references }: InlineCitationProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setShowPopover(false);
      }
    };
    if (showPopover) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopover]);

  if (!ids || ids.length === 0) return null;

  const matchedRefs = ids
    .map((id) => references.find((r) => r.id === id))
    .filter(Boolean) as ScientificReference[];

  const label = ids.length === 1
    ? `[${references.findIndex((r) => r.id === ids[0]) + 1}]`
    : `[${references.findIndex((r) => r.id === ids[0]) + 1}–${references.findIndex((r) => r.id === ids[ids.length - 1]) + 1}]`;

  return (
    <span className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setShowPopover(!showPopover)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setShowPopover(false);
        }}
        className="text-[11px] font-bold text-nusaGold hover:text-nusaGold/80 cursor-pointer align-super leading-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nusaGold focus-visible:ring-offset-1 rounded-sm px-0.5"
        aria-label={`Sumber ${label}`}
      >
        {label}
      </button>

      {showPopover && matchedRefs.length > 0 && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-white border border-[#E8E0CE] rounded-xl shadow-lg p-3 z-50 text-left animate-in fade-in slide-in-from-bottom-1 duration-200"
        >
          {matchedRefs.map((ref, i) => (
            <span key={ref.id} className={`block ${i > 0 ? "mt-2 pt-2 border-t border-[#E8E0CE]" : ""}`}>
              <span className="block text-[11px] font-bold text-nusaNavy leading-snug">
                {ref.title}
              </span>
              <span className="block text-[10px] text-nusaNavy/60 mt-0.5">
                {ref.authors?.join(", ") || ref.publisher} {ref.year ? `(${ref.year})` : ""}
              </span>
              <span className="inline-block mt-1 px-1.5 py-0.5 bg-[#F8F4EA] text-[9px] font-bold text-nusaNavy/50 rounded uppercase tracking-wider">
                {ref.sourceType === "unesco" ? "UNESCO" :
                  ref.sourceType === "government" ? "Pemerintah" :
                  ref.sourceType === "statistics" ? "Statistik" :
                  ref.sourceType === "regulation" ? "Regulasi" :
                  ref.sourceType === "journal" ? "Jurnal" :
                  ref.sourceType === "archive" ? "Arsip" :
                  ref.sourceType === "institution" ? "Institusi" :
                  ref.sourceType === "book" ? "Buku" : ref.sourceType}
              </span>
            </span>
          ))}
        </span>
      )}
    </span>
  );
};
