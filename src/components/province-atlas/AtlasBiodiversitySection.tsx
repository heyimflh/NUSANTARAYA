import React from "react";
import type {
  BiodiversityChapter,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { AtlasItemCollection } from "./AtlasItemCollection";
import { AtlasSubsection } from "./AtlasSubsection";

type AtlasBiodiversitySectionProps = {
  chapter: BiodiversityChapter;
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasBiodiversitySection = ({
  chapter,
  references,
  citationIndex,
}: AtlasBiodiversitySectionProps) => (
  <div className="grid gap-10">
    <AtlasSubsection
      title="Ekosistem"
      paragraphs={chapter.ecosystems}
      references={references}
      citationIndex={citationIndex}
    />
    <AtlasItemCollection
      title="Spesies dan Konservasi"
      items={chapter.species}
      references={references}
      citationIndex={citationIndex}
    />
  </div>
);
