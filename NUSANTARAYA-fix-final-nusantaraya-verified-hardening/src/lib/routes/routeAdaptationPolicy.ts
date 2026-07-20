
import type { RouteDuration } from "@/types/route-planner";

export type SupportedRouteDuration = 3 | 5 | 7;

export type RouteDurationAdaptation =
  | {
      type: "identity";
      targetRouteId: string;
    }
  | {
      type: "use-existing-route";
      targetRouteId: string;
      reason: string;
    }
  | {
      type: "unsupported";
      alternativeRouteIds: string[];
      reason: string;
    };

export type RouteAdaptationPolicy = Record<
  string,
  Record<SupportedRouteDuration, RouteDurationAdaptation>
>;

export const ROUTE_ADAPTATION_POLICY: RouteAdaptationPolicy = {
  // Jawa Tengah & DIY
  "jawa-budaya-kuliner-5": {
    3: {
      type: "use-existing-route",
      targetRouteId: "yogyakarta-cultural-escape-3",
      reason: "Tersedia rute 3 hari dalam region yang sama (Yogyakarta & Jawa Tengah).",
    },
    5: {
      type: "identity",
      targetRouteId: "jawa-budaya-kuliner-5",
    },
    7: {
      type: "use-existing-route",
      targetRouteId: "jawa-bali-heritage-7",
      reason: "Tersedia eksplorasi 7 hari melintasi Jawa hingga Bali.",
    },
  },
  "yogyakarta-cultural-escape-3": {
    3: {
      type: "identity",
      targetRouteId: "yogyakarta-cultural-escape-3",
    },
    5: {
      type: "use-existing-route",
      targetRouteId: "jawa-budaya-kuliner-5",
      reason: "Tersedia rute 5 hari untuk eksplorasi lebih luas di Jawa Tengah.",
    },
    7: {
      type: "use-existing-route",
      targetRouteId: "jawa-bali-heritage-7",
      reason: "Tersedia eksplorasi 7 hari melintasi Jawa hingga Bali.",
    },
  },

  // Jawa - Bali
  "jawa-bali-heritage-7": {
    3: {
      type: "use-existing-route",
      targetRouteId: "yogyakarta-cultural-escape-3",
      reason: "Tersedia rute 3 hari di Jawa Tengah & DIY.",
    },
    5: {
      type: "use-existing-route",
      targetRouteId: "jawa-budaya-kuliner-5",
      reason: "Tersedia eksplorasi 5 hari di Jawa.",
    },
    7: {
      type: "identity",
      targetRouteId: "jawa-bali-heritage-7",
    },
  },

  // Bali & Nusa Tenggara
  "bali-nusa-tenggara-5": {
    3: {
      type: "use-existing-route",
      targetRouteId: "bali-slow-journey-3",
      reason: "Tersedia rute 3 hari fokus di Bali.",
    },
    5: {
      type: "identity",
      targetRouteId: "bali-nusa-tenggara-5",
    },
    7: {
      type: "unsupported",
      alternativeRouteIds: ["bali-nusa-tenggara-5"],
      reason: "Belum tersedia versi 7 hari penuh, namun rute 5 hari dapat diperluas secara mandiri.",
    },
  },
  "bali-slow-journey-3": {
    3: {
      type: "identity",
      targetRouteId: "bali-slow-journey-3",
    },
    5: {
      type: "use-existing-route",
      targetRouteId: "bali-nusa-tenggara-5",
      reason: "Tersedia eksplorasi 5 hari melintasi Bali dan Nusa Tenggara.",
    },
    7: {
      type: "unsupported",
      alternativeRouteIds: ["bali-nusa-tenggara-5"],
      reason: "Belum tersedia versi 7 hari untuk region ini.",
    },
  },

  // Sumatra
  "sumatra-heritage-7": {
    3: {
      type: "unsupported",
      alternativeRouteIds: ["sumatra-heritage-7"],
      reason: "Eksplorasi Sumatra direkomendasikan minimal 7 hari karena jarak tempuh.",
    },
    5: {
      type: "unsupported",
      alternativeRouteIds: ["sumatra-heritage-7"],
      reason: "Eksplorasi Sumatra direkomendasikan minimal 7 hari karena jarak tempuh.",
    },
    7: {
      type: "identity",
      targetRouteId: "sumatra-heritage-7",
    },
  },

  // Kalimantan
  "kalimantan-nature-future-5": {
    3: {
      type: "unsupported",
      alternativeRouteIds: ["kalimantan-nature-future-5"],
      reason: "Eksplorasi Kalimantan membutuhkan waktu perjalanan yang lebih lama.",
    },
    5: {
      type: "identity",
      targetRouteId: "kalimantan-nature-future-5",
    },
    7: {
      type: "unsupported",
      alternativeRouteIds: ["kalimantan-nature-future-5"],
      reason: "Belum tersedia versi 7 hari terkurasi untuk wilayah ini.",
    },
  },

  // Sulawesi
  "sulawesi-culture-nature-7": {
    3: {
      type: "unsupported",
      alternativeRouteIds: ["sulawesi-culture-nature-7"],
      reason: "Wilayah Sulawesi terlalu luas untuk dieksplorasi dalam 3 hari.",
    },
    5: {
      type: "unsupported",
      alternativeRouteIds: ["sulawesi-culture-nature-7"],
      reason: "Rute terkurasi di Sulawesi saat ini berfokus pada durasi 7 hari.",
    },
    7: {
      type: "identity",
      targetRouteId: "sulawesi-culture-nature-7",
    },
  },

  // Maluku
  "maluku-spice-route-5": {
    3: {
      type: "unsupported",
      alternativeRouteIds: ["maluku-spice-route-5"],
      reason: "Akses antar pulau di Maluku membutuhkan durasi perjalanan lebih panjang.",
    },
    5: {
      type: "identity",
      targetRouteId: "maluku-spice-route-5",
    },
    7: {
      type: "unsupported",
      alternativeRouteIds: ["maluku-spice-route-5"],
      reason: "Belum tersedia versi 7 hari terkurasi untuk kepulauan Maluku.",
    },
  },

  // Papua
  "papua-wonder-7": {
    3: {
      type: "unsupported",
      alternativeRouteIds: ["papua-wonder-7"],
      reason: "Jarak dan aksesibilitas Papua membutuhkan minimal 7 hari.",
    },
    5: {
      type: "unsupported",
      alternativeRouteIds: ["papua-wonder-7"],
      reason: "Jarak dan aksesibilitas Papua membutuhkan minimal 7 hari.",
    },
    7: {
      type: "identity",
      targetRouteId: "papua-wonder-7",
    },
  },
};
