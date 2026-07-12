import React from "react";
import Image from "next/image";
import type {
  AtlasContentItem,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { AtlasCitedParagraphs } from "./AtlasCitedParagraphs";
import { InlineCitation } from "./InlineCitation";

type AtlasItemCollectionProps = {
  title: string;
  items?: AtlasContentItem[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasItemCollection = ({
  title,
  items,
  references,
  citationIndex,
}: AtlasItemCollectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h3 className="mb-5 font-serif text-2xl font-bold text-nusaNavy">
        {title}
      </h3>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => {
          const displayName = item.name || item.title || "";
          const displaySummary = item.summary || item.significance || "";
          const hasStructuredDescription =
            Array.isArray(item.description) && item.description.length > 0;
          const hasStringDescription =
            typeof item.description === "string" && item.description.length > 0;

          return (
            <article
              key={item.id}
              className="overflow-hidden rounded-3xl border border-[#E8E0CE] bg-white/75"
            >
              {item.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || displayName}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5 md:p-6">
                {item.category && (
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-nusaGold">
                    {item.category}
                  </p>
                )}
                <h4 className="mt-1 font-serif text-2xl font-bold text-nusaNavy">
                  {displayName}
                  {item.status && (
                    <span className="ml-2 text-xs font-medium uppercase tracking-wider text-red-600/70">
                      {item.status}
                    </span>
                  )}
                </h4>
                {displaySummary && (
                  <p className="mt-3 leading-relaxed text-nusaNavy/70">
                    {displaySummary}{" "}
                    <InlineCitation
                      ids={item.citationIds}
                      references={references}
                      citationIndex={citationIndex}
                    />
                  </p>
                )}
                {hasStructuredDescription && (
                  <div className="mt-4 border-t border-[#E8E0CE] pt-4">
                    <AtlasCitedParagraphs
                      paragraphs={item.description as { id: string; content: string; citationIds: string[] }[]}
                      references={references}
                      citationIndex={citationIndex}
                      className="text-sm leading-relaxed text-nusaNavy/65"
                    />
                  </div>
                )}
                {hasStringDescription && !hasStructuredDescription && (
                  <div className="mt-4 border-t border-[#E8E0CE] pt-4">
                    <p className="text-sm leading-relaxed text-nusaNavy/65">
                      {item.description as string}
                    </p>
                  </div>
                )}
                {item.significance && item.summary && (
                  <p className="mt-3 text-sm italic leading-relaxed text-nusaNavy/55">
                    {item.significance}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
