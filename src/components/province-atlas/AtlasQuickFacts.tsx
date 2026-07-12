import React from "react";
import type {
  AtlasFact,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type AtlasQuickFactsProps = {
  facts: AtlasFact[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasQuickFacts = ({
  facts,
  references,
  citationIndex,
}: AtlasQuickFactsProps) => {
  if (facts.length === 0) return null;

  return (
    <div className="mt-12 border-t border-[#E8E0CE] pt-8">
      <h3 className="mb-5 font-serif text-2xl font-bold text-nusaNavy">
        Fakta Singkat
      </h3>
      <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact) => (
          <div
            key={fact.id}
            className="rounded-2xl border border-[#E8E0CE] bg-white/70 p-4"
          >
            <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-nusaNavy/45">
              {fact.label}
            </dt>
            <dd className="mt-1 text-sm font-semibold leading-relaxed text-nusaNavy">
              {fact.value}{" "}
              <InlineCitation
                ids={fact.citationIds}
                references={references}
                citationIndex={citationIndex}
              />
            </dd>
            {fact.dataYear && (
              <span className="mt-1 block text-[10px] text-nusaNavy/40">
                Tahun data: {fact.dataYear}
              </span>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
};
