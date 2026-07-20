import React from "react";
import type {
  AtlasVocabularyItem,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type AtlasVocabularyProps = {
  items?: AtlasVocabularyItem[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasVocabulary = ({
  items,
  references,
  citationIndex,
}: AtlasVocabularyProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl font-bold text-nusaNavy">
        Kosakata
      </h3>
      <dl className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#E8E0CE] bg-white/70 p-4"
          >
            <dt className="font-serif text-lg font-bold text-nusaNavy">
              {item.word}{" "}
              <InlineCitation
                ids={item.citationIds}
                references={references}
                citationIndex={citationIndex}
              />
            </dt>
            <dd className="mt-1 text-sm text-nusaNavy/65">{item.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
