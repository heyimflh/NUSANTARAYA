import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const baliSlowJourney3: RouteItinerary = {
  id: "itinerary-bali-slow-journey-3",
  routeId: "bali-slow-journey-3",
  routeVersion: ROUTE_SCHEMA_VERSION,
  version: ROUTE_SCHEMA_VERSION,
  locale: "id",
  durationDays: 3 as const,
  status: "published",
  source: "preset",
  travelPace: "santai",
  disclosureIds: [],
  updatedAt: new Date().toISOString(),
  days: [
    {
        id: "bali-slow-journey-3-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Ubud",
        theme: "Eksplorasi Ubud",
        summary: "Menjelajahi Monkey Forest, Tegallalang, Yoga & Spa di Ubud.",
        provinceIds: [
            "bali"
        ],
        stopId: "bali-slow-journey-3-stop-01",
        cityOrCluster: "Ubud",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-monkey-forest",
                title: "Monkey Forest",
                summary: "Mengunjungi Monkey Forest",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-tegallalang",
                title: "Tegallalang",
                summary: "Mengunjungi Tegallalang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-yoga---spa",
                title: "Yoga & Spa",
                summary: "Mengunjungi Yoga & Spa",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    },
    {
        id: "bali-slow-journey-3-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Pura & Sawah",
        theme: "Eksplorasi Pura & Sawah",
        summary: "Menjelajahi Tirta Empul, Jatiluwih, Tari tradisional di Pura & Sawah.",
        provinceIds: [
            "bali"
        ],
        stopId: "bali-slow-journey-3-stop-02",
        cityOrCluster: "Pura & Sawah",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tirta-empul",
                title: "Tirta Empul",
                summary: "Mengunjungi Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-jatiluwih",
                title: "Jatiluwih",
                summary: "Mengunjungi Jatiluwih",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-tari-tradisional",
                title: "Tari tradisional",
                summary: "Mengunjungi Tari tradisional",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    },
    {
        id: "bali-slow-journey-3-day-03",
        dayNumber: 3,
        type: "departure",
        title: "Hari 3 di Pantai Selatan",
        theme: "Eksplorasi Pantai Selatan",
        summary: "Menjelajahi Uluwatu, Pantai Padang Padang, Sunset di Pantai Selatan.",
        provinceIds: [
            "bali"
        ],
        stopId: "bali-slow-journey-3-stop-03",
        cityOrCluster: "Pantai Selatan",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-uluwatu",
                title: "Uluwatu",
                summary: "Mengunjungi Uluwatu",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pantai-padang-padang",
                title: "Pantai Padang Padang",
                summary: "Mengunjungi Pantai Padang Padang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-sunset",
                title: "Sunset",
                summary: "Mengunjungi Sunset",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    }
]
};
