import React from "react";
import type {
  CitationIndex,
  CitedParagraph,
  ScientificReference,
} from "@/types/atlas";
import { AtlasCitedParagraphs } from "./AtlasCitedParagraphs";

type AtlasSubsectionProps = {
  title: string;
  paragraphs?: CitedParagraph[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasSubsection = ({
  title,
  paragraphs,
  references,
  citationIndex,
}: AtlasSubsectionProps) => {
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <div>
      <h3 className="mb-4 font-serif text-2xl font-bold text-nusaNavy">
        {title}
      </h3>
      <AtlasCitedParagraphs
        paragraphs={paragraphs}
        references={references}
        citationIndex={citationIndex}
      />
    </div>
  );
};
