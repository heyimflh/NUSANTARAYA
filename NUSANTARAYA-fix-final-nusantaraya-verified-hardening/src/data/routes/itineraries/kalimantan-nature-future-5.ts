import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const kalimantanNatureFuture5: RouteItinerary = {
  id: "itinerary-kalimantan-nature-future-5",
  routeId: "kalimantan-nature-future-5",
  routeVersion: ROUTE_SCHEMA_VERSION,
  version: ROUTE_SCHEMA_VERSION,
  locale: "id",
  durationDays: 5 as const,
  status: "published",
  source: "preset",
  travelPace: "seimbang",
  disclosureIds: [],
  updatedAt: new Date().toISOString(),
  days: [
    {
        id: "kalimantan-nature-future-5-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Pangkalan Bun & Tanjung Puting",
        theme: "Eksplorasi Pangkalan Bun & Tanjung Puting",
        summary: "Menjelajahi TN Tanjung Puting, Klotok cruise, Orangutan di Pangkalan Bun & Tanjung Puting.",
        provinceIds: [
            "kalimantan-tengah"
        ],
        stopId: "kalimantan-nature-future-5-stop-01",
        cityOrCluster: "Pangkalan Bun & Tanjung Puting",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tn-tanjung-puting",
                title: "TN Tanjung Puting",
                summary: "Mengunjungi TN Tanjung Puting",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-klotok-cruise",
                title: "Klotok cruise",
                summary: "Mengunjungi Klotok cruise",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-orangutan",
                title: "Orangutan",
                summary: "Mengunjungi Orangutan",
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
        id: "kalimantan-nature-future-5-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Pangkalan Bun & Tanjung Puting",
        theme: "Eksplorasi Pangkalan Bun & Tanjung Puting",
        summary: "Menjelajahi TN Tanjung Puting, Klotok cruise, Orangutan di Pangkalan Bun & Tanjung Puting.",
        provinceIds: [
            "kalimantan-tengah"
        ],
        stopId: "kalimantan-nature-future-5-stop-01",
        cityOrCluster: "Pangkalan Bun & Tanjung Puting",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tn-tanjung-puting",
                title: "TN Tanjung Puting",
                summary: "Mengunjungi TN Tanjung Puting",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-klotok-cruise",
                title: "Klotok cruise",
                summary: "Mengunjungi Klotok cruise",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-orangutan",
                title: "Orangutan",
                summary: "Mengunjungi Orangutan",
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
        id: "kalimantan-nature-future-5-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Pangkalan Bun & Tanjung Puting",
        theme: "Eksplorasi Pangkalan Bun & Tanjung Puting",
        summary: "Menjelajahi TN Tanjung Puting, Klotok cruise, Orangutan di Pangkalan Bun & Tanjung Puting.",
        provinceIds: [
            "kalimantan-tengah"
        ],
        stopId: "kalimantan-nature-future-5-stop-01",
        cityOrCluster: "Pangkalan Bun & Tanjung Puting",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tn-tanjung-puting",
                title: "TN Tanjung Puting",
                summary: "Mengunjungi TN Tanjung Puting",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-klotok-cruise",
                title: "Klotok cruise",
                summary: "Mengunjungi Klotok cruise",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-orangutan",
                title: "Orangutan",
                summary: "Mengunjungi Orangutan",
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
        id: "kalimantan-nature-future-5-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Pontianak",
        theme: "Eksplorasi Pontianak",
        summary: "Menjelajahi Tugu Khatulistiwa, Sungai Kapuas, Kuliner Melayu di Pontianak.",
        provinceIds: [
            "kalimantan-barat"
        ],
        stopId: "kalimantan-nature-future-5-stop-02",
        cityOrCluster: "Pontianak",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tugu-khatulistiwa",
                title: "Tugu Khatulistiwa",
                summary: "Mengunjungi Tugu Khatulistiwa",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-sungai-kapuas",
                title: "Sungai Kapuas",
                summary: "Mengunjungi Sungai Kapuas",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kuliner-melayu",
                title: "Kuliner Melayu",
                summary: "Mengunjungi Kuliner Melayu",
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
        id: "kalimantan-nature-future-5-day-05",
        dayNumber: 5,
        type: "departure",
        title: "Hari 5 di Pontianak",
        theme: "Eksplorasi Pontianak",
        summary: "Menjelajahi Tugu Khatulistiwa, Sungai Kapuas, Kuliner Melayu di Pontianak.",
        provinceIds: [
            "kalimantan-barat"
        ],
        stopId: "kalimantan-nature-future-5-stop-02",
        cityOrCluster: "Pontianak",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tugu-khatulistiwa",
                title: "Tugu Khatulistiwa",
                summary: "Mengunjungi Tugu Khatulistiwa",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-sungai-kapuas",
                title: "Sungai Kapuas",
                summary: "Mengunjungi Sungai Kapuas",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kuliner-melayu",
                title: "Kuliner Melayu",
                summary: "Mengunjungi Kuliner Melayu",
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
