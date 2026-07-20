import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const papuaWonder7: RouteItinerary = {
  id: "itinerary-papua-wonder-7",
  routeId: "papua-wonder-7",
  routeVersion: ROUTE_SCHEMA_VERSION,
  version: ROUTE_SCHEMA_VERSION,
  locale: "id",
  durationDays: 7 as const,
  status: "published",
  source: "preset",
  travelPace: "santai",
  disclosureIds: [],
  updatedAt: new Date().toISOString(),
  days: [
    {
        id: "papua-wonder-7-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Sorong & Raja Ampat",
        theme: "Eksplorasi Sorong & Raja Ampat",
        summary: "Menjelajahi Raja Ampat, Wayag, Piaynemo di Sorong & Raja Ampat.",
        provinceIds: [
            "papua-barat-daya"
        ],
        stopId: "papua-wonder-7-stop-01",
        cityOrCluster: "Sorong & Raja Ampat",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-raja-ampat",
                title: "Raja Ampat",
                summary: "Mengunjungi Raja Ampat",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-wayag",
                title: "Wayag",
                summary: "Mengunjungi Wayag",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-piaynemo",
                title: "Piaynemo",
                summary: "Mengunjungi Piaynemo",
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
        id: "papua-wonder-7-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Sorong & Raja Ampat",
        theme: "Eksplorasi Sorong & Raja Ampat",
        summary: "Menjelajahi Raja Ampat, Wayag, Piaynemo di Sorong & Raja Ampat.",
        provinceIds: [
            "papua-barat-daya"
        ],
        stopId: "papua-wonder-7-stop-01",
        cityOrCluster: "Sorong & Raja Ampat",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-raja-ampat",
                title: "Raja Ampat",
                summary: "Mengunjungi Raja Ampat",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-wayag",
                title: "Wayag",
                summary: "Mengunjungi Wayag",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-piaynemo",
                title: "Piaynemo",
                summary: "Mengunjungi Piaynemo",
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
        id: "papua-wonder-7-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Sorong & Raja Ampat",
        theme: "Eksplorasi Sorong & Raja Ampat",
        summary: "Menjelajahi Raja Ampat, Wayag, Piaynemo di Sorong & Raja Ampat.",
        provinceIds: [
            "papua-barat-daya"
        ],
        stopId: "papua-wonder-7-stop-01",
        cityOrCluster: "Sorong & Raja Ampat",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-raja-ampat",
                title: "Raja Ampat",
                summary: "Mengunjungi Raja Ampat",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-wayag",
                title: "Wayag",
                summary: "Mengunjungi Wayag",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-piaynemo",
                title: "Piaynemo",
                summary: "Mengunjungi Piaynemo",
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
        id: "papua-wonder-7-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Sorong & Raja Ampat",
        theme: "Eksplorasi Sorong & Raja Ampat",
        summary: "Menjelajahi Raja Ampat, Wayag, Piaynemo di Sorong & Raja Ampat.",
        provinceIds: [
            "papua-barat-daya"
        ],
        stopId: "papua-wonder-7-stop-01",
        cityOrCluster: "Sorong & Raja Ampat",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-raja-ampat",
                title: "Raja Ampat",
                summary: "Mengunjungi Raja Ampat",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-wayag",
                title: "Wayag",
                summary: "Mengunjungi Wayag",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-piaynemo",
                title: "Piaynemo",
                summary: "Mengunjungi Piaynemo",
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
        id: "papua-wonder-7-day-05",
        dayNumber: 5,
        type: "exploration",
        title: "Hari 5 di Jayapura & Sentani",
        theme: "Eksplorasi Jayapura & Sentani",
        summary: "Menjelajahi Danau Sentani, Bukit Teletubbies, Kampung Yoboi di Jayapura & Sentani.",
        provinceIds: [
            "papua"
        ],
        stopId: "papua-wonder-7-stop-02",
        cityOrCluster: "Jayapura & Sentani",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-sentani",
                title: "Danau Sentani",
                summary: "Mengunjungi Danau Sentani",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-bukit-teletubbies",
                title: "Bukit Teletubbies",
                summary: "Mengunjungi Bukit Teletubbies",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kampung-yoboi",
                title: "Kampung Yoboi",
                summary: "Mengunjungi Kampung Yoboi",
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
        id: "papua-wonder-7-day-06",
        dayNumber: 6,
        type: "exploration",
        title: "Hari 6 di Jayapura & Sentani",
        theme: "Eksplorasi Jayapura & Sentani",
        summary: "Menjelajahi Danau Sentani, Bukit Teletubbies, Kampung Yoboi di Jayapura & Sentani.",
        provinceIds: [
            "papua"
        ],
        stopId: "papua-wonder-7-stop-02",
        cityOrCluster: "Jayapura & Sentani",
        density: "balanced",
        segments: [
            {
                id: "seg-6-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-sentani",
                title: "Danau Sentani",
                summary: "Mengunjungi Danau Sentani",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-bukit-teletubbies",
                title: "Bukit Teletubbies",
                summary: "Mengunjungi Bukit Teletubbies",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kampung-yoboi",
                title: "Kampung Yoboi",
                summary: "Mengunjungi Kampung Yoboi",
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
        id: "papua-wonder-7-day-07",
        dayNumber: 7,
        type: "departure",
        title: "Hari 7 di Jayapura & Sentani",
        theme: "Eksplorasi Jayapura & Sentani",
        summary: "Menjelajahi Danau Sentani, Bukit Teletubbies, Kampung Yoboi di Jayapura & Sentani.",
        provinceIds: [
            "papua"
        ],
        stopId: "papua-wonder-7-stop-02",
        cityOrCluster: "Jayapura & Sentani",
        density: "balanced",
        segments: [
            {
                id: "seg-7-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-danau-sentani",
                title: "Danau Sentani",
                summary: "Mengunjungi Danau Sentani",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-bukit-teletubbies",
                title: "Bukit Teletubbies",
                summary: "Mengunjungi Bukit Teletubbies",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-kampung-yoboi",
                title: "Kampung Yoboi",
                summary: "Mengunjungi Kampung Yoboi",
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
