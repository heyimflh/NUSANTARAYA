import React from "react";
import type { CitationIndex, ScientificReference } from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type ChapterSourceFooterProps = {
  referenceIds: string[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const ChapterSourceFooter = ({
  referenceIds,
  references,
  citationIndex,
}: ChapterSourceFooterProps) => {
  const uniqueIds = [...new Set(referenceIds)];
  const chapterReferences = uniqueIds
    .map((id) => references.find((reference) => reference.id === id))
    .filter((reference): reference is ScientificReference => reference != null)
    .sort(
      (left, right) =>
        citationIndex[left.id] - citationIndex[right.id],
    );

  if (chapterReferences.length === 0) return null;

  return (
    <div className="mt-8 border-t border-[#E8E0CE] pt-6">
      <p className="mb-3 text-xs font-semibold text-nusaNavy/50">
        SUMBER BAB INI:
      </p>
      <ul className="flex flex-col gap-2">
        {chapterReferences.map((reference) => (
          <li key={reference.id} className="flex gap-2 text-sm">
            <span className="text-nusaGold/70">
              <InlineCitation
                ids={[reference.id]}
                references={references}
                citationIndex={citationIndex}
              />
            </span>
            <div className="text-nusaNavy/70">
              <a
                href={`#ref-${reference.id}`}
                className="line-clamp-1 transition-colors hover:text-nusaGold hover:underline"
              >
                {reference.authors?.join(", ") || reference.publisher}{" "}
                {reference.year ? `(${reference.year}).` : "."}{" "}
                {reference.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a
          href="#referensi"
          className="text-xs font-semibold text-nusaGold transition-colors hover:text-nusaGold/80"
        >
          Lihat semua referensi →
        </a>
      </div>
    </div>
  );
};
