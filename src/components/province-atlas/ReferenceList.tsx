import React from "react";
import type {
  CitationIndex,
  ScientificReference,
  SourceType,
} from "@/types/atlas";

type ReferenceListProps = {
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  government: "Data Pemerintah",
  statistics: "Statistik",
  journal: "Jurnal Ilmiah",
  book: "Buku dan Monograf",
  thesis: "Tesis dan Disertasi",
  museum: "Museum dan Institusi Budaya",
  unesco: "UNESCO dan Organisasi Internasional",
  institution: "Institusi",
  regulation: "Peraturan",
  archive: "Arsip dan Naskah",
};

const SOURCE_TYPE_ORDER: SourceType[] = [
  "government", "statistics", "regulation", "unesco", "journal",
  "book", "museum", "institution", "archive", "thesis",
];

const TIER_LABELS: Record<string, string> = {
  A: "Sumber Primer",
  B: "Sumber Ilmiah",
  C: "Sumber Pendukung",
};

export const ReferenceList = ({ references, citationIndex }: ReferenceListProps) => {
  if (!references || references.length === 0) return null;

  // Group by sourceType
  const grouped = SOURCE_TYPE_ORDER.reduce<Record<string, ScientificReference[]>>((acc, type) => {
    const items = references.filter((r) => r.sourceType === type);
    if (items.length > 0) acc[type] = items;
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(grouped).map(([type, refs]) => (
        <div key={type}>
          <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-nusaNavy/40 mb-3">
            {SOURCE_TYPE_LABELS[type as SourceType] || type}
          </h4>
          <ol className="flex flex-col gap-3 list-none">
            {refs.map((ref) => {
              const referenceNumber = citationIndex[ref.id];
              const numberLabel = referenceNumber
                ? `[${referenceNumber}]`
                : process.env.NODE_ENV !== "production"
                  ? "[?]"
                  : "";

              return (
                <li key={ref.id} id={`ref-${ref.id}`} tabIndex={-1} className="flex gap-3 scroll-mt-36 focus:outline-none">
                  <span className="text-sm font-bold text-nusaGold flex-shrink-0 w-8 text-right">
                    {numberLabel}
                  </span>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-sm font-semibold text-nusaNavy leading-snug">
                      {ref.authors?.join(", ") || ref.publisher}
                      {ref.year ? ` (${ref.year}).` : "."}
                    </span>
                    <span className="text-sm text-nusaNavy/80 italic leading-snug">
                      {ref.title}
                    </span>
                    {ref.publication && (
                      <span className="text-xs text-nusaNavy/60">
                        {ref.publication}
                        {ref.volume ? `, ${ref.volume}` : ""}
                        {ref.issue ? `(${ref.issue})` : ""}
                        {ref.pages ? `, ${ref.pages}` : ""}
                      </span>
                    )}
                    {ref.publisher && !ref.authors && (
                      <span className="text-xs text-nusaNavy/60">{ref.publisher}</span>
                    )}
                    {ref.doi && (
                      <a
                        href={`https://doi.org/${ref.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-nusaGold hover:underline"
                        aria-label={`DOI: ${ref.doi}`}
                      >
                        doi:{ref.doi} ↗
                      </a>
                    )}
                    {ref.url && !ref.doi && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-nusaGold hover:underline truncate"
                        aria-label={`Buka sumber: ${ref.title}`}
                      >
                        {ref.url} ↗
                      </a>
                    )}
                    <span className="text-[10px] text-nusaNavy/40 mt-0.5">
                      Diakses: {ref.accessedAt} · {TIER_LABELS[ref.credibilityTier] || ref.credibilityTier}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
};
