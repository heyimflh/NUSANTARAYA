import React from "react";
import type {
  AtlasTimelineItem,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type AtlasTimelineProps = {
  items: AtlasTimelineItem[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasTimeline = ({
  items,
  references,
  citationIndex,
}: AtlasTimelineProps) => {
  if (items.length === 0) return null;

  return (
    <div className="mt-12 border-t border-[#E8E0CE] pt-8">
      <h3 className="mb-6 font-serif text-2xl font-bold text-nusaNavy">
        Linimasa Sejarah
      </h3>
      <ol className="relative ml-2 border-l border-nusaGold/35">
        {items.map((item) => (
          <li key={item.id} className="relative pb-8 pl-7 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-nusaGold" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-nusaGold">
              {item.period}
            </p>
            <h4 className="mt-1 font-serif text-xl font-bold text-nusaNavy">
              {item.title || item.name}
            </h4>
            <p className="mt-2 leading-relaxed text-nusaNavy/70">
              {item.description}{" "}
              <InlineCitation
                ids={item.citationIds}
                references={references}
                citationIndex={citationIndex}
              />
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};
