import React from "react";
import type {
  CitationIndex,
  CitedParagraph,
  ScientificReference,
} from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type AtlasCitedParagraphsProps = {
  paragraphs?: CitedParagraph[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
  className?: string;
};

export const AtlasCitedParagraphs = ({
  paragraphs,
  references,
  citationIndex,
  className = "text-base leading-relaxed text-nusaNavy/75",
}: AtlasCitedParagraphsProps) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.id}>
          {paragraph.content}{" "}
          <InlineCitation
            ids={paragraph.citationIds}
            references={references}
            citationIndex={citationIndex}
          />
        </p>
      ))}
    </div>
  );
};
