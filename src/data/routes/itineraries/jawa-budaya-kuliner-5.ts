import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const jawaBudayaKuliner5: RouteItinerary = {
  id: "itinerary-jawa-budaya-kuliner-5",
  routeId: "jawa-budaya-kuliner-5",
  routeVersion: ROUTE_SCHEMA_VERSION,
  version: ROUTE_SCHEMA_VERSION,
  locale: "id",
  durationDays: 5 as const,
  status: "published",
  source: "preset",
  travelPace: "santai",
  disclosureIds: [],
  updatedAt: new Date().toISOString(),
  days: [
    {
        id: "jawa-budaya-kuliner-5-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Yogyakarta",
        theme: "Eksplorasi Yogyakarta",
        summary: "Menjelajahi Keraton Yogyakarta, Malioboro, Gudeg Yu Djum di Yogyakarta.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "jawa-budaya-kuliner-5-stop-01",
        cityOrCluster: "Yogyakarta",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-keraton-yogyakarta",
                title: "Keraton Yogyakarta",
                summary: "Mengunjungi Keraton Yogyakarta",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-malioboro",
                title: "Malioboro",
                summary: "Mengunjungi Malioboro",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-gudeg-yu-djum",
                title: "Gudeg Yu Djum",
                summary: "Mengunjungi Gudeg Yu Djum",
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
        id: "jawa-budaya-kuliner-5-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Yogyakarta",
        theme: "Eksplorasi Yogyakarta",
        summary: "Menjelajahi Keraton Yogyakarta, Malioboro, Gudeg Yu Djum di Yogyakarta.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "jawa-budaya-kuliner-5-stop-01",
        cityOrCluster: "Yogyakarta",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-keraton-yogyakarta",
                title: "Keraton Yogyakarta",
                summary: "Mengunjungi Keraton Yogyakarta",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-malioboro",
                title: "Malioboro",
                summary: "Mengunjungi Malioboro",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-gudeg-yu-djum",
                title: "Gudeg Yu Djum",
                summary: "Mengunjungi Gudeg Yu Djum",
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
        id: "jawa-budaya-kuliner-5-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Solo",
        theme: "Eksplorasi Solo",
        summary: "Menjelajahi Keraton Surakarta, Pasar Gede, Sate Buntel di Solo.",
        provinceIds: [
            "jawa-tengah"
        ],
        stopId: "jawa-budaya-kuliner-5-stop-02",
        cityOrCluster: "Solo",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-keraton-surakarta",
                title: "Keraton Surakarta",
                summary: "Mengunjungi Keraton Surakarta",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pasar-gede",
                title: "Pasar Gede",
                summary: "Mengunjungi Pasar Gede",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-sate-buntel",
                title: "Sate Buntel",
                summary: "Mengunjungi Sate Buntel",
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
        id: "jawa-budaya-kuliner-5-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Surabaya & Malang",
        theme: "Eksplorasi Surabaya & Malang",
        summary: "Menjelajahi Tugu Pahlawan, Rawon Setan, Batu di Surabaya & Malang.",
        provinceIds: [
            "jawa-timur"
        ],
        stopId: "jawa-budaya-kuliner-5-stop-03",
        cityOrCluster: "Surabaya & Malang",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tugu-pahlawan",
                title: "Tugu Pahlawan",
                summary: "Mengunjungi Tugu Pahlawan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-rawon-setan",
                title: "Rawon Setan",
                summary: "Mengunjungi Rawon Setan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-batu",
                title: "Batu",
                summary: "Mengunjungi Batu",
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
        id: "jawa-budaya-kuliner-5-day-05",
        dayNumber: 5,
        type: "departure",
        title: "Hari 5 di Surabaya & Malang",
        theme: "Eksplorasi Surabaya & Malang",
        summary: "Menjelajahi Tugu Pahlawan, Rawon Setan, Batu di Surabaya & Malang.",
        provinceIds: [
            "jawa-timur"
        ],
        stopId: "jawa-budaya-kuliner-5-stop-03",
        cityOrCluster: "Surabaya & Malang",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tugu-pahlawan",
                title: "Tugu Pahlawan",
                summary: "Mengunjungi Tugu Pahlawan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-rawon-setan",
                title: "Rawon Setan",
                summary: "Mengunjungi Rawon Setan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-batu",
                title: "Batu",
                summary: "Mengunjungi Batu",
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
