import { scrollElementIntoView } from "@/lib/utils/scroll";
import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";
import React, { useState, useEffect } from "react";
import { RouteRecommendation } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { resolveRouteItinerary, ItineraryResolution } from "@/lib/routes/itinerary/resolveRouteItinerary";
import { ItinerarySkeleton } from "./ItinerarySkeleton";
import { ItinerarySectionHeader } from "./ItinerarySectionHeader";
import { ItineraryOverviewRail } from "./ItineraryOverviewRail";
import { ItineraryTimeline } from "./ItineraryTimeline";

interface DayByDayItinerarySectionProps {
  result: RouteRecommendation | null;
  status: "idle" | "resolving" | "ready" | "partial" | "error";
  itinerary: RouteItinerary | null;
  activeRouteKey: string | null;
  onViewInMap?: (context: {
    dayNumber: number;
    dayId: string;
    stopId?: string;
    segmentIds?: string[];
  }) => void;
  externalActiveDay?: number | null;
}

export function DayByDayItinerarySection({
  result,
  status,
  itinerary,
  activeRouteKey,
  onViewInMap,
  externalActiveDay,
}: DayByDayItinerarySectionProps) {
  const [activeDay, setActiveDay] = useState<number>(1);

  useEffect(() => {
    setActiveDay(1);
  }, [activeRouteKey]);

  useEffect(() => {
    if (externalActiveDay && externalActiveDay >= 1) {
      setActiveDay(externalActiveDay);
      setTimeout(() => {
        const dayEl = document.getElementById(`itinerary-day-${externalActiveDay}`);
        if (dayEl) scrollElementIntoView(dayEl, { block: "start" });
      }, 100);
    }
  }, [externalActiveDay]);

  if (status === "resolving") {
    return <ItinerarySkeleton durationDays={result?.durationDays || 5} />;
  }

  if (!result) {
    return null;
  }

  if (status === "partial" && !itinerary) {
    return (
      <section className="w-full mt-12 lg:mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4" tabIndex={-1} data-route-section-heading>Itinerary sedang dilengkapi</h2>
        <p className="text-muted-foreground">Itinerary dinamis untuk rute ini belum tersedia.</p>
      </section>
    );
  }

  if (status === "error" && !itinerary) {
    return (
      <section className="w-full mt-12 lg:mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4 text-destructive" tabIndex={-1} data-route-section-heading>Itinerary belum dapat ditampilkan karena data rute tidak konsisten.</h2>
      </section>
    );
  }

  if (!itinerary) return null;

  return (
    <section
      id={ROUTE_SECTION_IDS.itinerary}
      aria-labelledby="itinerary-title"
      className="w-full mt-12 lg:mt-24 scroll-mt-32"
    >
      <ItinerarySectionHeader durationDays={itinerary.durationDays} />

      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
        <div className="lg:w-1/3 xl:w-1/4 w-full sticky top-32 self-start shrink-0 z-10">
          <ItineraryOverviewRail
            days={itinerary.days}
            activeDay={activeDay}
            onDayClick={(dayNumber) => {
              setActiveDay(dayNumber);
              const el = document.getElementById(`itinerary-day-${dayNumber}`);
              if (el) {
                scrollElementIntoView(el, { block: "start" });
              }
            }}
          />
        </div>

        <div className="lg:w-2/3 xl:w-3/4 w-full">
          <ItineraryTimeline
            routeId={itinerary.routeId}
            days={itinerary.days}
            activeDay={activeDay}
            onToggleDay={(dayNum) => setActiveDay(dayNum === activeDay ? 0 : dayNum)}
            onViewInMap={onViewInMap
              ? (day) => onViewInMap({
                  dayNumber: day.dayNumber,
                  dayId: day.id,
                  stopId: day.stopId,
                  segmentIds: day.segments
                    .filter((s) => s.type === "transfer")
                    .map((s) => s.id),
                })
              : undefined
            }
          />
        </div>
      </div>
    </section>
  );
}





