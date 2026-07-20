import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const sulawesiCultureNature7: RouteItinerary = {
  id: "itinerary-sulawesi-culture-nature-7",
  routeId: "sulawesi-culture-nature-7",
  routeVersion: ROUTE_SCHEMA_VERSION,
  version: ROUTE_SCHEMA_VERSION,
  locale: "id",
  durationDays: 7 as const,
  status: "published",
  source: "preset",
  travelPace: "seimbang",
  disclosureIds: [],
  updatedAt: new Date().toISOString(),
  days: [
    {
        id: "sulawesi-culture-nature-7-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Makassar & Maros",
        theme: "Eksplorasi Makassar & Maros",
        summary: "Menjelajahi Fort Rotterdam, Rammang-Rammang, Coto Makassar di Makassar & Maros.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-01",
        cityOrCluster: "Makassar & Maros",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-fort-rotterdam",
                title: "Fort Rotterdam",
                summary: "Mengunjungi Fort Rotterdam",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-rammang-rammang",
                title: "Rammang-Rammang",
                summary: "Mengunjungi Rammang-Rammang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-coto-makassar",
                title: "Coto Makassar",
                summary: "Mengunjungi Coto Makassar",
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
        id: "sulawesi-culture-nature-7-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Makassar & Maros",
        theme: "Eksplorasi Makassar & Maros",
        summary: "Menjelajahi Fort Rotterdam, Rammang-Rammang, Coto Makassar di Makassar & Maros.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-01",
        cityOrCluster: "Makassar & Maros",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-fort-rotterdam",
                title: "Fort Rotterdam",
                summary: "Mengunjungi Fort Rotterdam",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-rammang-rammang",
                title: "Rammang-Rammang",
                summary: "Mengunjungi Rammang-Rammang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-coto-makassar",
                title: "Coto Makassar",
                summary: "Mengunjungi Coto Makassar",
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
        id: "sulawesi-culture-nature-7-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Transit & Parepare",
        theme: "Eksplorasi Transit & Parepare",
        summary: "Menjelajahi Perjalanan Darat Lintas Provinsi, Pantai Lumpue di Transit & Parepare.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-02",
        cityOrCluster: "Transit & Parepare",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-perjalanan-darat-lintas-provinsi",
                title: "Perjalanan Darat Lintas Provinsi",
                summary: "Mengunjungi Perjalanan Darat Lintas Provinsi",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pantai-lumpue",
                title: "Pantai Lumpue",
                summary: "Mengunjungi Pantai Lumpue",
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
        id: "sulawesi-culture-nature-7-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Transit & Parepare",
        theme: "Eksplorasi Transit & Parepare",
        summary: "Menjelajahi Perjalanan Darat Lintas Provinsi, Pantai Lumpue di Transit & Parepare.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-02",
        cityOrCluster: "Transit & Parepare",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-perjalanan-darat-lintas-provinsi",
                title: "Perjalanan Darat Lintas Provinsi",
                summary: "Mengunjungi Perjalanan Darat Lintas Provinsi",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pantai-lumpue",
                title: "Pantai Lumpue",
                summary: "Mengunjungi Pantai Lumpue",
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
        id: "sulawesi-culture-nature-7-day-05",
        dayNumber: 5,
        type: "exploration",
        title: "Hari 5 di Tana Toraja",
        theme: "Eksplorasi Tana Toraja",
        summary: "Menjelajahi Tongkonan, Lemo, Ke'te Kesu' di Tana Toraja.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-03",
        cityOrCluster: "Tana Toraja",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tongkonan",
                title: "Tongkonan",
                summary: "Mengunjungi Tongkonan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-lemo",
                title: "Lemo",
                summary: "Mengunjungi Lemo",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ke-te-kesu-",
                title: "Ke'te Kesu'",
                summary: "Mengunjungi Ke'te Kesu'",
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
        id: "sulawesi-culture-nature-7-day-06",
        dayNumber: 6,
        type: "exploration",
        title: "Hari 6 di Tana Toraja",
        theme: "Eksplorasi Tana Toraja",
        summary: "Menjelajahi Tongkonan, Lemo, Ke'te Kesu' di Tana Toraja.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-03",
        cityOrCluster: "Tana Toraja",
        density: "balanced",
        segments: [
            {
                id: "seg-6-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tongkonan",
                title: "Tongkonan",
                summary: "Mengunjungi Tongkonan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-lemo",
                title: "Lemo",
                summary: "Mengunjungi Lemo",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ke-te-kesu-",
                title: "Ke'te Kesu'",
                summary: "Mengunjungi Ke'te Kesu'",
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
        id: "sulawesi-culture-nature-7-day-07",
        dayNumber: 7,
        type: "departure",
        title: "Hari 7 di Tana Toraja",
        theme: "Eksplorasi Tana Toraja",
        summary: "Menjelajahi Tongkonan, Lemo, Ke'te Kesu' di Tana Toraja.",
        provinceIds: [
            "sulawesi-selatan"
        ],
        stopId: "sulawesi-culture-nature-7-stop-03",
        cityOrCluster: "Tana Toraja",
        density: "balanced",
        segments: [
            {
                id: "seg-7-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tongkonan",
                title: "Tongkonan",
                summary: "Mengunjungi Tongkonan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-lemo",
                title: "Lemo",
                summary: "Mengunjungi Lemo",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ke-te-kesu-",
                title: "Ke'te Kesu'",
                summary: "Mengunjungi Ke'te Kesu'",
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
