import type { RouteItinerary } from "@/lib/routes/itinerary/routeItinerarySchema";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";

export const jawaBaliHeritage7: RouteItinerary = {
  id: "itinerary-jawa-bali-heritage-7",
  routeId: "jawa-bali-heritage-7",
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
        id: "jawa-bali-heritage-7-day-01",
        dayNumber: 1,
        type: "arrival",
        title: "Hari 1 di Yogyakarta",
        theme: "Eksplorasi Yogyakarta",
        summary: "Menjelajahi Candi Borobudur, Candi Prambanan, Batik Workshop di Yogyakarta.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "jawa-bali-heritage-7-stop-01",
        cityOrCluster: "Yogyakarta",
        density: "balanced",
        segments: [
            {
                id: "seg-1-1",
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
                id: "seg-1-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-candi-prambanan",
                title: "Candi Prambanan",
                summary: "Mengunjungi Candi Prambanan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-1-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-batik-workshop",
                title: "Batik Workshop",
                summary: "Mengunjungi Batik Workshop",
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
        id: "jawa-bali-heritage-7-day-02",
        dayNumber: 2,
        type: "exploration",
        title: "Hari 2 di Yogyakarta",
        theme: "Eksplorasi Yogyakarta",
        summary: "Menjelajahi Candi Borobudur, Candi Prambanan, Batik Workshop di Yogyakarta.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "jawa-bali-heritage-7-stop-01",
        cityOrCluster: "Yogyakarta",
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
                activityId: "act-candi-prambanan",
                title: "Candi Prambanan",
                summary: "Mengunjungi Candi Prambanan",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-2-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-batik-workshop",
                title: "Batik Workshop",
                summary: "Mengunjungi Batik Workshop",
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
        id: "jawa-bali-heritage-7-day-03",
        dayNumber: 3,
        type: "exploration",
        title: "Hari 3 di Solo",
        theme: "Eksplorasi Solo",
        summary: "Menjelajahi Keraton Surakarta, Kampung Batik Laweyan di Solo.",
        provinceIds: [
            "jawa-tengah"
        ],
        stopId: "jawa-bali-heritage-7-stop-02",
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
                activityId: "act-kampung-batik-laweyan",
                title: "Kampung Batik Laweyan",
                summary: "Mengunjungi Kampung Batik Laweyan",
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
        id: "jawa-bali-heritage-7-day-04",
        dayNumber: 4,
        type: "exploration",
        title: "Hari 4 di Transit",
        theme: "Eksplorasi Transit",
        summary: "Menjelajahi Perjalanan ke Bali di Transit.",
        provinceIds: [
            "di-yogyakarta"
        ],
        stopId: "jawa-bali-heritage-7-stop-03",
        cityOrCluster: "Transit",
        density: "balanced",
        segments: [
            {
                id: "seg-4-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-perjalanan-ke-bali",
                title: "Perjalanan ke Bali",
                summary: "Mengunjungi Perjalanan ke Bali",
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
        id: "jawa-bali-heritage-7-day-05",
        dayNumber: 5,
        type: "exploration",
        title: "Hari 5 di Ubud & Denpasar",
        theme: "Eksplorasi Ubud & Denpasar",
        summary: "Menjelajahi Pura Tirta Empul, Subak Jatiluwih, Tari Kecak di Ubud & Denpasar.",
        provinceIds: [
            "bali"
        ],
        stopId: "jawa-bali-heritage-7-stop-04",
        cityOrCluster: "Ubud & Denpasar",
        density: "balanced",
        segments: [
            {
                id: "seg-5-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pura-tirta-empul",
                title: "Pura Tirta Empul",
                summary: "Mengunjungi Pura Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-subak-jatiluwih",
                title: "Subak Jatiluwih",
                summary: "Mengunjungi Subak Jatiluwih",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-5-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-tari-kecak",
                title: "Tari Kecak",
                summary: "Mengunjungi Tari Kecak",
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
        id: "jawa-bali-heritage-7-day-06",
        dayNumber: 6,
        type: "exploration",
        title: "Hari 6 di Ubud & Denpasar",
        theme: "Eksplorasi Ubud & Denpasar",
        summary: "Menjelajahi Pura Tirta Empul, Subak Jatiluwih, Tari Kecak di Ubud & Denpasar.",
        provinceIds: [
            "bali"
        ],
        stopId: "jawa-bali-heritage-7-stop-04",
        cityOrCluster: "Ubud & Denpasar",
        density: "balanced",
        segments: [
            {
                id: "seg-6-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pura-tirta-empul",
                title: "Pura Tirta Empul",
                summary: "Mengunjungi Pura Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-subak-jatiluwih",
                title: "Subak Jatiluwih",
                summary: "Mengunjungi Subak Jatiluwih",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-6-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-tari-kecak",
                title: "Tari Kecak",
                summary: "Mengunjungi Tari Kecak",
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
        id: "jawa-bali-heritage-7-day-07",
        dayNumber: 7,
        type: "departure",
        title: "Hari 7 di Ubud & Denpasar",
        theme: "Eksplorasi Ubud & Denpasar",
        summary: "Menjelajahi Pura Tirta Empul, Subak Jatiluwih, Tari Kecak di Ubud & Denpasar.",
        provinceIds: [
            "bali"
        ],
        stopId: "jawa-bali-heritage-7-stop-04",
        cityOrCluster: "Ubud & Denpasar",
        density: "balanced",
        segments: [
            {
                id: "seg-7-1",
                type: "activity",
                dayPart: "morning",
                activityId: "act-pura-tirta-empul",
                title: "Pura Tirta Empul",
                summary: "Mengunjungi Pura Tirta Empul",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-2",
                type: "activity",
                dayPart: "midday",
                activityId: "act-subak-jatiluwih",
                title: "Subak Jatiluwih",
                summary: "Mengunjungi Subak Jatiluwih",
                durationCategory: "short",
                timeConfidence: "none",
                isPrimary: true
            },
            {
                id: "seg-7-3",
                type: "activity",
                dayPart: "afternoon",
                activityId: "act-tari-kecak",
                title: "Tari Kecak",
                summary: "Mengunjungi Tari Kecak",
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
