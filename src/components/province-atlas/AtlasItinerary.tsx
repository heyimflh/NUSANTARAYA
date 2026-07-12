import React from "react";
import type {
  AtlasItinerary as AtlasItineraryData,
  CitationIndex,
  ScientificReference,
} from "@/types/atlas";
import { InlineCitation } from "./InlineCitation";

type AtlasItineraryProps = {
  itineraries?: AtlasItineraryData[];
  references: ScientificReference[];
  citationIndex: CitationIndex;
};

export const AtlasItinerary = ({
  itineraries,
  references,
  citationIndex,
}: AtlasItineraryProps) => {
  if (!itineraries || itineraries.length === 0) return null;

  return (
    <div>
      <h3 className="mb-5 font-serif text-2xl font-bold text-nusaNavy">
        Rencana Perjalanan
      </h3>
      <div className="grid gap-5 lg:grid-cols-3">
        {itineraries.map((itinerary) => (
          <article
            key={itinerary.id}
            className="rounded-3xl border border-[#E8E0CE] bg-white/70 p-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-nusaGold">
              {itinerary.duration} hari
            </p>
            <h4 className="mt-1 font-serif text-xl font-bold text-nusaNavy">
              {itinerary.title}{" "}
              <InlineCitation
                ids={itinerary.citationIds}
                references={references}
                citationIndex={citationIndex}
              />
            </h4>
            {itinerary.editorialRecommendation && (
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-nusaNavy/45">
                Rekomendasi editorial — verifikasi jadwal operasional sebelum berangkat
              </p>
            )}
            <ol className="mt-4 flex flex-col gap-4">
              {itinerary.days.map((day) => (
                <li key={day.day}>
                  <p className="text-sm font-bold text-nusaNavy">
                    Hari {day.day}
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-relaxed text-nusaNavy/65">
                    {day.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
};
