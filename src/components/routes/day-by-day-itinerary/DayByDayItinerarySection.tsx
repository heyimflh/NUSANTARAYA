import { ROUTE_SECTION_IDS } from "@/lib/routes/routeSections";
import React, { useState, useCallback } from "react";
import { RouteRecommendation } from "@/types/route-planner";
import { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
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

function DayByDayItinerarySectionContent({
  result,
  status,
  itinerary,
  onViewInMap,
  externalActiveDay,
}: Omit<DayByDayItinerarySectionProps, "activeRouteKey">) {
  const [activeDay, setActiveDay] = useState<number>(externalActiveDay && externalActiveDay >= 1 ? externalActiveDay : 1);

  // Sync activeDay from external source
  // This is a valid use case for setState in effect because we're synchronizing with 
  // an external system (map interaction). The map component triggers day selection 
  // and we need to respond to it.
  React.useEffect(() => {
    if (externalActiveDay && externalActiveDay >= 1 && externalActiveDay !== activeDay) {
      setActiveDay(externalActiveDay);
      requestAnimationFrame(() => {
        const dayEl = document.getElementById(`itinerary-day-${externalActiveDay}`);
        if (dayEl) {
          dayEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [externalActiveDay, activeDay]); // Only depend on externalActiveDay

  const handleDayClick = useCallback((dayNumber: number) => {
    setActiveDay(dayNumber);
    const el = document.getElementById(`itinerary-day-${dayNumber}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (status === "resolving") {
    return <ItinerarySkeleton durationDays={result?.durationDays || 5} />;
  }

  if (!result) {
    return null;
  }

  if (status === "partial" && !itinerary) {
    return (
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-[#F8F4EA]/80 backdrop-blur-md border border-[#E8E0CE] rounded-3xl text-center">
          <div className="w-16 h-16 bg-[#E8E0CE] rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#5C6470]"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-[#0D1B2A] mb-3" tabIndex={-1} data-route-section-heading>
            Itinerary Sedang Dilengkapi
          </h2>
          <p className="text-[#5C6470] max-w-md">Itinerary dinamis untuk rute ini belum tersedia secara penuh.</p>
        </div>
      </section>
    );
  }

  if (status === "error" && !itinerary) {
    return (
      <section className="w-full mt-12 lg:mt-24">
        <div className="flex flex-col items-center justify-center p-12 bg-red-50/80 backdrop-blur-md border border-red-100 rounded-3xl text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
          <h2 className="text-2xl font-playfair font-bold text-red-700 mb-3" tabIndex={-1} data-route-section-heading>
            Gagal Memuat Itinerary
          </h2>
          <p className="text-red-600/80 max-w-md">Itinerary belum dapat ditampilkan karena data rute tidak konsisten.</p>
        </div>
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
            onDayClick={handleDayClick}
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

export function DayByDayItinerarySection(props: DayByDayItinerarySectionProps) {
  // Use key to remount component when route changes, resetting activeDay to 1
  return (
    <DayByDayItinerarySectionContent
      key={props.activeRouteKey ?? "idle"}
      {...props}
    />
  );
}
