import React from "react";
import type {
  CitationIndex,
  CitedParagraph,
  ScientificReference,
} from "@/types/atlas";
import { AtlasCitedParagraphs } from "./AtlasCitedParagraphs";

type AtlasEtiquetteProps = {
  paragraphs?: CitedParagraph[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasEtiquette = ({
  paragraphs,
  references,
  citationIndex,
}: AtlasEtiquetteProps) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <aside className="rounded-3xl border border-nusaGold/25 bg-[#F8F4EA] p-6 md:p-8">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-nusaGold">
        Etika Perjalanan
      </p>
      <h3 className="mb-4 font-serif text-2xl font-bold text-nusaNavy">
        Berkunjung dengan Hormat
      </h3>
      <AtlasCitedParagraphs
        paragraphs={paragraphs}
        references={references}
        citationIndex={citationIndex}
      />
    </aside>
  );
};
