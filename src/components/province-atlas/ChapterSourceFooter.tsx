import React from "react";
import type { ScientificReference } from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type ChapterSourceFooterProps = {
  references: ScientificReference[];
};

export const ChapterSourceFooter = ({ references }: ChapterSourceFooterProps) => {
  if (!references || references.length === 0) return null;

  return (
    <div className="mt-8 pt-6 border-t border-[#E8E0CE]">
      <p className="text-xs font-semibold text-nusaNavy/50 mb-3">SUMBER BAB INI:</p>
      <ul className="flex flex-col gap-2">
        {references.map((ref) => (
          <li key={ref.id} className="flex gap-2 text-sm">
            <span className="text-nusaGold/70">
              <InlineCitation ids={[ref.id]} references={references} />
            </span>
            <div className="text-nusaNavy/70">
              <a href={`#ref-${ref.id}`} className="hover:text-nusaGold hover:underline transition-colors line-clamp-1">
                {ref.authors?.join(", ") || ref.publisher} {ref.year ? `(${ref.year}).` : "."} {ref.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a href="#referensi" className="text-xs font-semibold text-nusaGold hover:text-nusaGold/80 transition-colors">
          Lihat semua referensi →
        </a>
      </div>
    </div>
  );
};
