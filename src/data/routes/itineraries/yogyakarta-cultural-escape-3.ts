import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const yogyakartaCulturalEscape3: RouteItinerary = {
  id: "itinerary-yogyakarta-cultural-escape-3",
  routeId: "yogyakarta-cultural-escape-3",
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
        id: "yogyakarta-cultural-escape-3-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Yogyakarta Kota",
        theme: "Eksplorasi Yogyakarta Kota",
        summary: "Menjelajahi Keraton, Taman Sari, Malioboro di Yogyakarta Kota.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "yogyakarta-cultural-escape-3-stop-01",
        cityOrCluster: "Yogyakarta Kota",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-keraton",
                title: "Keraton",
                summary: "Mengunjungi Keraton",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-taman-sari",
                title: "Taman Sari",
                summary: "Mengunjungi Taman Sari",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-malioboro",
                title: "Malioboro",
                summary: "Mengunjungi Malioboro",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [
          {
            culinaryId: "culinary-default-1",
            label: "Kuliner Khas Lokal",
            context: "lunch",
            note: "Menikmati sajian otentik setempat."
          }
        ],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    },
    {
        id: "yogyakarta-cultural-escape-3-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Candi Area (Magelang)",
        theme: "Eksplorasi Candi Area (Magelang)",
        summary: "Menjelajahi Candi Borobudur, Candi Mendut di Candi Area (Magelang).",
        provinceIds: [
            "jawa-tengah"
        ],
        stopId: "yogyakarta-cultural-escape-3-stop-02",
        cityOrCluster: "Candi Area (Magelang)",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-candi-borobudur",
                title: "Candi Borobudur",
                summary: "Mengunjungi Candi Borobudur",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-candi-mendut",
                title: "Candi Mendut",
                summary: "Mengunjungi Candi Mendut",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [
          {
            culinaryId: "culinary-default-1",
            label: "Kuliner Khas Lokal",
            context: "lunch",
            note: "Menikmati sajian otentik setempat."
          }
        ],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    },
    {
        id: "yogyakarta-cultural-escape-3-day-03",
        dayNumber: 3,
        type: "departure",
        title: "Hari 3 di Prambanan & Seni",
        theme: "Eksplorasi Prambanan & Seni",
        summary: "Menjelajahi Candi Prambanan, Batik Workshop, Kotagede di Prambanan & Seni.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "yogyakarta-cultural-escape-3-stop-03",
        cityOrCluster: "Prambanan & Seni",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-candi-prambanan",
                title: "Candi Prambanan",
                summary: "Mengunjungi Candi Prambanan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-batik-workshop",
                title: "Batik Workshop",
                summary: "Mengunjungi Batik Workshop",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kotagede",
                title: "Kotagede",
                summary: "Mengunjungi Kotagede",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            }
        ],
        culinaryMoments: [
          {
            culinaryId: "culinary-default-1",
            label: "Kuliner Khas Lokal",
            context: "lunch",
            note: "Menikmati sajian otentik setempat."
          }
        ],
        practicalNoteIds: [],
        etiquetteNoteIds: []
    }
]
};
