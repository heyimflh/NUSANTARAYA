import type {
  CitationIndex,
  CitedParagraph,
  ScientificReference,
} from "@/types/atlas";

export function createCitationIndex(
  references: ScientificReference[],
): CitationIndex {
  return Object.freeze(
    Object.fromEntries(
      references.map((reference, index) => [reference.id, index + 1]),
    ),
  );
}

export function collectCitationIds(paragraphs: CitedParagraph[]): string[] {
  return [...new Set(paragraphs.flatMap((paragraph) => paragraph.citationIds))];
}

export function resolveCitationNumbers(
  ids: string[],
  citationIndex: CitationIndex,
): number[] {
  return [
    ...new Set(
      ids
        .map((id) => citationIndex[id])
        .filter((number): number is number => Number.isInteger(number)),
    ),
  ].sort((a, b) => a - b);
}

export function formatCitationLabel(numbers: number[]): string {
  if (numbers.length === 0) return "";

  const segments: string[] = [];
  let rangeStart = numbers[0];
  let previous = numbers[0];

  const appendRange = (start: number, end: number) => {
    segments.push(start === end ? `${start}` : `${start}–${end}`);
  };

  for (const current of numbers.slice(1)) {
    if (current === previous + 1) {
      previous = current;
      continue;
    }

    appendRange(rangeStart, previous);
    rangeStart = current;
    previous = current;
  }

  appendRange(rangeStart, previous);
  return `[${segments.join(", ")}]`;
}
