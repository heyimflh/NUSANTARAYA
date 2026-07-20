import React from "react";
import { ItineraryDay } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ItineraryDayCard } from "./ItineraryDayCard";

interface ItineraryTimelineProps {
  routeId: string;
  days: ItineraryDay[];
  activeDay: number;
  onToggleDay: (dayNumber: number) => void;
  onViewInMap?: (day: ItineraryDay) => void;
}

export function ItineraryTimeline({ days, activeDay, onToggleDay, onViewInMap, routeId }: ItineraryTimelineProps) {
  return (
    <div className="flex flex-col gap-6">
      {days.map((day) => (
        <ItineraryDayCard
          key={day.id}
          day={day}
          isExpanded={day.dayNumber === activeDay}
          onToggle={() => onToggleDay(day.dayNumber)}
          onViewInMap={onViewInMap ? () => onViewInMap(day) : undefined}
          routeId={routeId}
        />
      ))}
    </div>
  );
}

