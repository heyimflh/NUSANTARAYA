export type DayPart = "morning" | "midday" | "afternoon" | "evening";
export type ActivityDurationCategory = "short" | "half-day" | "flexible";
export type TimeConfidence = "none" | "estimated" | "verified";
export type ItineraryDayType =
  | "arrival"
  | "exploration"
  | "transfer"
  | "slow-day"
  | "departure";

import type { RouteDuration, TravelPace } from "@/types/route-contracts";

export interface RouteItinerary {
  id: string;
  routeId: string;
  routeVersion: string;
  version: string;
  locale: "id" | "en";
  durationDays: RouteDuration; // Replaced literal
  status: "published" | "adjusted" | "stale";
  source: "preset" | "dynamic" | "fallback";
  travelPace: TravelPace; // Replaced literal
  days: ItineraryDay[];
  disclosureIds: string[];
  sourceRefs?: string[];
  updatedAt: string;
}

export interface ItineraryDay {
  id: string;
  dayNumber: number;
  type: ItineraryDayType;
  title: string;
  theme: string;
  summary: string;
  provinceIds: string[];
  stopId: string;
  cityOrCluster: string;
  density: "light" | "balanced" | "active" | "transfer";
  segments: ItinerarySegment[];
  culinaryMoments?: ItineraryCulinaryMoment[];
  etiquetteNoteIds?: string[];
  practicalNoteIds?: string[];
  optionalActivityIds?: string[];
  sourceRefs?: string[];
}

export type ItinerarySegment =
  | {
      id: string;
      type: "activity";
      dayPart: DayPart;
      activityId: string;
      destinationId?: string;
      title: string;
      summary: string;
      durationCategory: ActivityDurationCategory;
      timeLabel?: string;
      timeConfidence: TimeConfidence;
      isPrimary: boolean;
      sourceRefs?: string[];
    }
  | {
      id: string;
      type: "transfer";
      dayPart: DayPart;
      fromStopId: string;
      toStopId: string;
      modeLabel?: string;
      isValidated: boolean;
      note: string;
    }
  | {
      id: string;
      type: "rest" | "flex";
      dayPart: DayPart;
      label: string;
      note?: string;
    };

export interface ItineraryCulinaryMoment {
  culinaryId: string;
  label: string;
  context: "breakfast" | "lunch" | "dinner" | "snack" | "market";
  note: string;
  sourceRefs?: string[];
}

export interface ItineraryDayViewModel {
  id: string;
  dayLabel: string;
  title: string;
  locationLabel: string;
  summary: string;
  typeLabel: string;
  densityLabel: string;
  segments: Array<{
    id: string;
    dayPartLabel: string;
    title: string;
    description: string;
    kind: "activity" | "transfer" | "rest" | "flex";
  }>;
  culinaryLabels: string[];
  etiquetteNotes: string[];
  practicalNotes: string[];
  optionalActivities: string[];
}
