"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import type { ScientificReference } from "@/types/atlas";

type MinimalRef = ScientificReference & { _indexNumber: number };

type InlineCitationClientProps = {
  label: string;
  matchedRefs: MinimalRef[];
  missingIdsKey?: string;
};

const SOURCE_TYPE_LABELS: Record<string, string> = {
  unesco: "UNESCO",
  government: "Pemerintah",
  statistics: "Statistik",
  regulation: "Regulasi",
  journal: "Jurnal",
  archive: "Arsip",
  institution: "Institusi",
  book: "Buku",
  thesis: "Tesis",
  museum: "Museum",
};

export const InlineCitationClient = ({
  label,
  matchedRefs,
  missingIdsKey,
}: InlineCitationClientProps) => {
  const [showPopover, setShowPopover] = useState(false);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const popoverId = `citation-${useId().replaceAll(":", "")}`;

  const closePopover = useCallback((restoreFocus: boolean) => {
    setShowPopover(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production" && missingIdsKey) {
      console.error(
        `[Atlas citation] ID referensi tidak ditemukan: ${missingIdsKey}`,
      );
    }
  }, [missingIdsKey]);

  useEffect(() => {
    if (!showPopover) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        closePopover(true);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePopover(true);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopover, showPopover]);

  return (
    <span className="relative inline-block" ref={wrapperRef}>
      <a
        ref={triggerRef}
        href={`#ref-${matchedRefs[0]?.id}`}
        onClick={(event) => {
          if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
          ) {
            return;
          }
          event.preventDefault();
          setShowPopover((isOpen) => !isOpen);
        }}
        className="rounded-sm px-0.5 align-super text-[11px] font-bold leading-none text-nusaGold transition-colors hover:text-nusaGold/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nusaGold focus-visible:ring-offset-1"
        aria-label={`Buka sumber ${label}`}
        aria-haspopup="dialog"
        aria-controls={popoverId}
        aria-expanded={showPopover}
        data-missing-citations={missingIdsKey}
      >
        {label}
      </a>

      {showPopover && (
        <span
          id={popoverId}
          role="dialog"
          aria-label={`Sumber ${label}`}
          className="absolute bottom-full left-1/2 z-50 mb-2 block w-72 -translate-x-1/2 rounded-xl border border-[#E8E0CE] bg-white p-3 text-left shadow-lg animate-in fade-in slide-in-from-bottom-1 duration-200"
        >
          {matchedRefs.map((reference, index) => (
            <span
              key={reference.id}
              className={`block ${index > 0 ? "mt-2 border-t border-[#E8E0CE] pt-2" : ""}`}
            >
              <a
                href={`#ref-${reference.id}`}
                onClick={() => closePopover(false)}
                className="block rounded-sm text-[11px] font-bold leading-snug text-nusaNavy hover:text-nusaGold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-nusaGold"
              >
                [{reference._indexNumber}] {reference.title}
              </a>
              <span className="mt-0.5 block text-[10px] text-nusaNavy/60">
                {reference.authors?.join(", ") || reference.publisher}{" "}
                {reference.year ? `(${reference.year})` : ""}
              </span>
              <span className="mt-1 inline-block rounded bg-[#F8F4EA] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-nusaNavy/50">
                {SOURCE_TYPE_LABELS[reference.sourceType] || reference.sourceType}
              </span>
            </span>
          ))}
        </span>
      )}
    </span>
  );
};
