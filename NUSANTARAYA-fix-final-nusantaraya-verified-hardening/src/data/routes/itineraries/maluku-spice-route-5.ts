import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const malukuSpiceRoute5: RouteItinerary = {
  id: "itinerary-maluku-spice-route-5",
  routeId: "maluku-spice-route-5",
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
        id: "maluku-spice-route-5-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Ambon",
        theme: "Eksplorasi Ambon",
        summary: "Menjelajahi Benteng Victoria, Pantai Natsepa, Pintu Kota di Ambon.",
        provinceIds: [
            "maluku"
        ],
        stopId: "maluku-spice-route-5-stop-01",
        cityOrCluster: "Ambon",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-benteng-victoria",
                title: "Benteng Victoria",
                summary: "Mengunjungi Benteng Victoria",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pantai-natsepa",
                title: "Pantai Natsepa",
                summary: "Mengunjungi Pantai Natsepa",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-pintu-kota",
                title: "Pintu Kota",
                summary: "Mengunjungi Pintu Kota",
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
        id: "maluku-spice-route-5-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Ambon",
        theme: "Eksplorasi Ambon",
        summary: "Menjelajahi Benteng Victoria, Pantai Natsepa, Pintu Kota di Ambon.",
        provinceIds: [
            "maluku"
        ],
        stopId: "maluku-spice-route-5-stop-01",
        cityOrCluster: "Ambon",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-benteng-victoria",
                title: "Benteng Victoria",
                summary: "Mengunjungi Benteng Victoria",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pantai-natsepa",
                title: "Pantai Natsepa",
                summary: "Mengunjungi Pantai Natsepa",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-pintu-kota",
                title: "Pintu Kota",
                summary: "Mengunjungi Pintu Kota",
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
        id: "maluku-spice-route-5-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Saparua & Banda",
        theme: "Eksplorasi Saparua & Banda",
        summary: "Menjelajahi Benteng Duurstede, Pulau Neira, Perkebunan Pala di Saparua & Banda.",
        provinceIds: [
            "maluku"
        ],
        stopId: "maluku-spice-route-5-stop-02",
        cityOrCluster: "Saparua & Banda",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-benteng-duurstede",
                title: "Benteng Duurstede",
                summary: "Mengunjungi Benteng Duurstede",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-neira",
                title: "Pulau Neira",
                summary: "Mengunjungi Pulau Neira",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-perkebunan-pala",
                title: "Perkebunan Pala",
                summary: "Mengunjungi Perkebunan Pala",
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
        id: "maluku-spice-route-5-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Saparua & Banda",
        theme: "Eksplorasi Saparua & Banda",
        summary: "Menjelajahi Benteng Duurstede, Pulau Neira, Perkebunan Pala di Saparua & Banda.",
        provinceIds: [
            "maluku"
        ],
        stopId: "maluku-spice-route-5-stop-02",
        cityOrCluster: "Saparua & Banda",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-benteng-duurstede",
                title: "Benteng Duurstede",
                summary: "Mengunjungi Benteng Duurstede",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-neira",
                title: "Pulau Neira",
                summary: "Mengunjungi Pulau Neira",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-perkebunan-pala",
                title: "Perkebunan Pala",
                summary: "Mengunjungi Perkebunan Pala",
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
        id: "maluku-spice-route-5-day-05",
        dayNumber: 5,
        type: "departure",
        title: "Hari 5 di Saparua & Banda",
        theme: "Eksplorasi Saparua & Banda",
        summary: "Menjelajahi Benteng Duurstede, Pulau Neira, Perkebunan Pala di Saparua & Banda.",
        provinceIds: [
            "maluku"
        ],
        stopId: "maluku-spice-route-5-stop-02",
        cityOrCluster: "Saparua & Banda",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-benteng-duurstede",
                title: "Benteng Duurstede",
                summary: "Mengunjungi Benteng Duurstede",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-pulau-neira",
                title: "Pulau Neira",
                summary: "Mengunjungi Pulau Neira",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-perkebunan-pala",
                title: "Perkebunan Pala",
                summary: "Mengunjungi Perkebunan Pala",
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
