import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const sumatraHeritage7: RouteItinerary = {
  id: "itinerary-sumatra-heritage-7",
  routeId: "sumatra-heritage-7",
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
        id: "sumatra-heritage-7-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Padang & Bukittinggi",
        theme: "Eksplorasi Padang & Bukittinggi",
        summary: "Menjelajahi Ngarai Sianok, Jam Gadang, Rendang autentik di Padang & Bukittinggi.",
        provinceIds: [
            "sumatera-barat"
        ],
        stopId: "sumatra-heritage-7-stop-01",
        cityOrCluster: "Padang & Bukittinggi",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-ngarai-sianok",
                title: "Ngarai Sianok",
                summary: "Mengunjungi Ngarai Sianok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-jam-gadang",
                title: "Jam Gadang",
                summary: "Mengunjungi Jam Gadang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-rendang-autentik",
                title: "Rendang autentik",
                summary: "Mengunjungi Rendang autentik",
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
        id: "sumatra-heritage-7-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Padang & Bukittinggi",
        theme: "Eksplorasi Padang & Bukittinggi",
        summary: "Menjelajahi Ngarai Sianok, Jam Gadang, Rendang autentik di Padang & Bukittinggi.",
        provinceIds: [
            "sumatera-barat"
        ],
        stopId: "sumatra-heritage-7-stop-01",
        cityOrCluster: "Padang & Bukittinggi",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-ngarai-sianok",
                title: "Ngarai Sianok",
                summary: "Mengunjungi Ngarai Sianok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-jam-gadang",
                title: "Jam Gadang",
                summary: "Mengunjungi Jam Gadang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-rendang-autentik",
                title: "Rendang autentik",
                summary: "Mengunjungi Rendang autentik",
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
        id: "sumatra-heritage-7-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Padang & Bukittinggi",
        theme: "Eksplorasi Padang & Bukittinggi",
        summary: "Menjelajahi Ngarai Sianok, Jam Gadang, Rendang autentik di Padang & Bukittinggi.",
        provinceIds: [
            "sumatera-barat"
        ],
        stopId: "sumatra-heritage-7-stop-01",
        cityOrCluster: "Padang & Bukittinggi",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-ngarai-sianok",
                title: "Ngarai Sianok",
                summary: "Mengunjungi Ngarai Sianok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-jam-gadang",
                title: "Jam Gadang",
                summary: "Mengunjungi Jam Gadang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-rendang-autentik",
                title: "Rendang autentik",
                summary: "Mengunjungi Rendang autentik",
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
        id: "sumatra-heritage-7-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Medan & Danau Toba",
        theme: "Eksplorasi Medan & Danau Toba",
        summary: "Menjelajahi Danau Toba, Pulau Samosir, Ulos dan Tor-Tor di Medan & Danau Toba.",
        provinceIds: [
            "sumatera-utara"
        ],
        stopId: "sumatra-heritage-7-stop-02",
        cityOrCluster: "Medan & Danau Toba",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-toba",
                title: "Danau Toba",
                summary: "Mengunjungi Danau Toba",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-samosir",
                title: "Pulau Samosir",
                summary: "Mengunjungi Pulau Samosir",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ulos-dan-tor-tor",
                title: "Ulos dan Tor-Tor",
                summary: "Mengunjungi Ulos dan Tor-Tor",
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
        id: "sumatra-heritage-7-day-05",
        dayNumber: 5,
        type: "exploration",
        title: "Hari 5 di Medan & Danau Toba",
        theme: "Eksplorasi Medan & Danau Toba",
        summary: "Menjelajahi Danau Toba, Pulau Samosir, Ulos dan Tor-Tor di Medan & Danau Toba.",
        provinceIds: [
            "sumatera-utara"
        ],
        stopId: "sumatra-heritage-7-stop-02",
        cityOrCluster: "Medan & Danau Toba",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-toba",
                title: "Danau Toba",
                summary: "Mengunjungi Danau Toba",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-samosir",
                title: "Pulau Samosir",
                summary: "Mengunjungi Pulau Samosir",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ulos-dan-tor-tor",
                title: "Ulos dan Tor-Tor",
                summary: "Mengunjungi Ulos dan Tor-Tor",
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
        id: "sumatra-heritage-7-day-06",
        dayNumber: 6,
        type: "exploration",
        title: "Hari 6 di Medan & Danau Toba",
        theme: "Eksplorasi Medan & Danau Toba",
        summary: "Menjelajahi Danau Toba, Pulau Samosir, Ulos dan Tor-Tor di Medan & Danau Toba.",
        provinceIds: [
            "sumatera-utara"
        ],
        stopId: "sumatra-heritage-7-stop-02",
        cityOrCluster: "Medan & Danau Toba",
        density: "balanced",
        segments: [
            {
                id: "seg-6-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-toba",
                title: "Danau Toba",
                summary: "Mengunjungi Danau Toba",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-samosir",
                title: "Pulau Samosir",
                summary: "Mengunjungi Pulau Samosir",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ulos-dan-tor-tor",
                title: "Ulos dan Tor-Tor",
                summary: "Mengunjungi Ulos dan Tor-Tor",
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
        id: "sumatra-heritage-7-day-07",
        dayNumber: 7,
        type: "departure",
        title: "Hari 7 di Medan & Danau Toba",
        theme: "Eksplorasi Medan & Danau Toba",
        summary: "Menjelajahi Danau Toba, Pulau Samosir, Ulos dan Tor-Tor di Medan & Danau Toba.",
        provinceIds: [
            "sumatera-utara"
        ],
        stopId: "sumatra-heritage-7-stop-02",
        cityOrCluster: "Medan & Danau Toba",
        density: "balanced",
        segments: [
            {
                id: "seg-7-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-toba",
                title: "Danau Toba",
                summary: "Mengunjungi Danau Toba",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-samosir",
                title: "Pulau Samosir",
                summary: "Mengunjungi Pulau Samosir",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-ulos-dan-tor-tor",
                title: "Ulos dan Tor-Tor",
                summary: "Mengunjungi Ulos dan Tor-Tor",
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
