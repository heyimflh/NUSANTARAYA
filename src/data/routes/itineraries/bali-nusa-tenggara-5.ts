import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const baliNusaTenggara5: RouteItinerary = {
  id: "itinerary-bali-nusa-tenggara-5",
  routeId: "bali-nusa-tenggara-5",
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
        id: "bali-nusa-tenggara-5-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Ubud & Sanur",
        theme: "Eksplorasi Ubud & Sanur",
        summary: "Menjelajahi Tegallalang, Tirta Empul, Pasar Seni Ubud di Ubud & Sanur.",
        provinceIds: [
            "bali"
        ],
        stopId: "bali-nusa-tenggara-5-stop-01",
        cityOrCluster: "Ubud & Sanur",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tegallalang",
                title: "Tegallalang",
                summary: "Mengunjungi Tegallalang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-tirta-empul",
                title: "Tirta Empul",
                summary: "Mengunjungi Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-pasar-seni-ubud",
                title: "Pasar Seni Ubud",
                summary: "Mengunjungi Pasar Seni Ubud",
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
        id: "bali-nusa-tenggara-5-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Ubud & Sanur",
        theme: "Eksplorasi Ubud & Sanur",
        summary: "Menjelajahi Tegallalang, Tirta Empul, Pasar Seni Ubud di Ubud & Sanur.",
        provinceIds: [
            "bali"
        ],
        stopId: "bali-nusa-tenggara-5-stop-01",
        cityOrCluster: "Ubud & Sanur",
        density: "balanced",
        segments: [
            {
                id: "seg-2-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-tegallalang",
                title: "Tegallalang",
                summary: "Mengunjungi Tegallalang",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-tirta-empul",
                title: "Tirta Empul",
                summary: "Mengunjungi Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-pasar-seni-ubud",
                title: "Pasar Seni Ubud",
                summary: "Mengunjungi Pasar Seni Ubud",
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
        id: "bali-nusa-tenggara-5-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Lombok & Gili",
        theme: "Eksplorasi Lombok & Gili",
        summary: "Menjelajahi Pantai Kuta Lombok, Gili Trawangan, Desa Sade di Lombok & Gili.",
        provinceIds: [
            "nusa-tenggara-barat"
        ],
        stopId: "bali-nusa-tenggara-5-stop-02",
        cityOrCluster: "Lombok & Gili",
        density: "balanced",
        segments: [
            {
                id: "seg-3-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pantai-kuta-lombok",
                title: "Pantai Kuta Lombok",
                summary: "Mengunjungi Pantai Kuta Lombok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-gili-trawangan",
                title: "Gili Trawangan",
                summary: "Mengunjungi Gili Trawangan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-3-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-desa-sade",
                title: "Desa Sade",
                summary: "Mengunjungi Desa Sade",
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
        id: "bali-nusa-tenggara-5-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Lombok & Gili",
        theme: "Eksplorasi Lombok & Gili",
        summary: "Menjelajahi Pantai Kuta Lombok, Gili Trawangan, Desa Sade di Lombok & Gili.",
        provinceIds: [
            "nusa-tenggara-barat"
        ],
        stopId: "bali-nusa-tenggara-5-stop-02",
        cityOrCluster: "Lombok & Gili",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pantai-kuta-lombok",
                title: "Pantai Kuta Lombok",
                summary: "Mengunjungi Pantai Kuta Lombok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-gili-trawangan",
                title: "Gili Trawangan",
                summary: "Mengunjungi Gili Trawangan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-4-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-desa-sade",
                title: "Desa Sade",
                summary: "Mengunjungi Desa Sade",
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
        id: "bali-nusa-tenggara-5-day-05",
        dayNumber: 5,
        type: "departure",
        title: "Hari 5 di Lombok & Gili",
        theme: "Eksplorasi Lombok & Gili",
        summary: "Menjelajahi Pantai Kuta Lombok, Gili Trawangan, Desa Sade di Lombok & Gili.",
        provinceIds: [
            "nusa-tenggara-barat"
        ],
        stopId: "bali-nusa-tenggara-5-stop-02",
        cityOrCluster: "Lombok & Gili",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pantai-kuta-lombok",
                title: "Pantai Kuta Lombok",
                summary: "Mengunjungi Pantai Kuta Lombok",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-gili-trawangan",
                title: "Gili Trawangan",
                summary: "Mengunjungi Gili Trawangan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-desa-sade",
                title: "Desa Sade",
                summary: "Mengunjungi Desa Sade",
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
