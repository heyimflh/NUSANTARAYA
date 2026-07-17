import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RouteRecommendation } from "@/types/route-planner";
import { RouteItinerary, ItineraryDay } from "@/lib/routes/itinerary/routeItinerarySchema";
import { resolveRouteItinerary } from "@/lib/routes/itinerary/resolveRouteItinerary";
import { FALLBACK_ITINERARY_JAWA_5_HARI } from "@/data/routes/presetItineraries";
import { ItinerarySkeleton } from "./ItinerarySkeleton";
import { ItinerarySectionHeader } from "./ItinerarySectionHeader";
import { ItineraryOverviewRail } from "./ItineraryOverviewRail";
import { ItineraryTimeline } from "./ItineraryTimeline";

interface DayByDayItinerarySectionProps {
  result: RouteRecommendation | null;
  status: "idle" | "loading" | "success" | "error" | "fallback";
  /** Called when user clicks "Lihat di Peta" from a day card. */
  onViewInMap?: (context: {
    dayNumber: number;
    dayId: string;
    stopId?: string;
    segmentIds?: string[];
  }) => void;
  /** Called when external day selection should open a specific day card. */
  externalActiveDay?: number | null;
  /** Called with the resolved itinerary for Section 6 consumption. */
  onItineraryResolved?: (itinerary: RouteItinerary | null) => void;
}

export function DayByDayItinerarySection({
  result,
  status,
  onViewInMap,
  externalActiveDay,
  onItineraryResolved,
}: DayByDayItinerarySectionProps) {
  const [itinerary, setItinerary] = useState<RouteItinerary | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);

  // Resolve itinerary whenever result changes
  useEffect(() => {
    if (status === "loading") {
      setItinerary(null);
      onItineraryResolved?.(null);
      return;
    }
    if (result) {
      const resolved = resolveRouteItinerary(result, FALLBACK_ITINERARY_JAWA_5_HARI);
      setItinerary(resolved);
      setActiveDay(1); // Default to day 1 open
      onItineraryResolved?.(resolved);
    } else {
      setItinerary(null);
      onItineraryResolved?.(null);
    }
  }, [result, status]); // eslint-disable-line react-hooks/exhaustive-deps

  // Sync external day selection (from Map section)
  useEffect(() => {
    if (externalActiveDay && externalActiveDay >= 1) {
      setActiveDay(externalActiveDay);
      // Scroll to the specific day card after a brief delay to allow expand animation
      setTimeout(() => {
        const dayEl = document.getElementById(`itinerary-day-${externalActiveDay}`);
        if (dayEl) dayEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [externalActiveDay]);

  if (status === "loading") {
    return <ItinerarySkeleton durationDays={result?.durationDays || 5} />;
  }

  if (!result || !itinerary) {
    return null; // Hidden/teaser state
  }

  return (
    <section
      id="day-by-day-itinerary"
      aria-labelledby="itinerary-title"
      className="w-full mt-12 lg:mt-24 scroll-mt-32"
    >
      <ItinerarySectionHeader durationDays={itinerary.durationDays} />

      {/* Adding items-start ensures flex children don't stretch, which allows the sticky item to behave correctly in its block context */}
      <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start relative">
        {/* Sticky side rail for Desktop, top rail for Mobile/Tablet */}
        <div className="lg:w-1/3 xl:w-1/4 w-full sticky top-32 self-start shrink-0 z-10">
          <ItineraryOverviewRail
            days={itinerary.days}
            activeDay={activeDay}
            onDayClick={(dayNumber) => {
              setActiveDay(dayNumber);
              const el = document.getElementById(`itinerary-day-${dayNumber}`);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
        </div>

        {/* Timeline Content */}
        <div className="lg:w-2/3 xl:w-3/4 w-full">
          <ItineraryTimeline
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
