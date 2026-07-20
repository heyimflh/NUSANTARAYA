import React from "react";
import {
  formatCitationLabel,
  resolveCitationNumbers,
} from "@/data/atlas/citations";
import type { CitationIndex, ScientificReference } from "@/types/atlas";
import { InlineCitationClient } from "./InlineCitationClient";

type InlineCitationProps = {
  ids?: string[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const InlineCitation = ({
  ids,
  references,
  citationIndex,
}: InlineCitationProps) => {
  if (!ids || ids.length === 0) return null;

  const missingIds = ids.filter((id) => citationIndex[id] == null);
  const missingIdsKey = missingIds.length > 0 ? missingIds.join(", ") : undefined;

  const matchedRefs = ids
    .map((id) => references.find((reference) => reference.id === id))
    .filter((reference): reference is ScientificReference => reference != null)
    .sort(
      (left, right) =>
        citationIndex[left.id] - citationIndex[right.id],
    );

  const numbers = resolveCitationNumbers(ids, citationIndex);
  const label = formatCitationLabel(numbers);

  if (matchedRefs.length === 0 || !label) {
    return process.env.NODE_ENV !== "production" ? (
      <span
        className="align-super text-[10px] font-bold text-red-700"
        title={`Sitasi tidak ditemukan: ${ids.join(", ")}`}
      >
        [sitasi?]
      </span>
    ) : null;
  }

  // Create a minimal version of references to pass to the client
  // We include _indexNumber to map the citationIndex
  const minimalRefs = matchedRefs.map((ref) => ({
    ...ref,
    _indexNumber: citationIndex[ref.id],
  }));

  return (
    <InlineCitationClient
      label={label}
      matchedRefs={minimalRefs}
      missingIdsKey={missingIdsKey}
    />
  );
};
