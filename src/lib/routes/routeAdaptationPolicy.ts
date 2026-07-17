
import { RouteDuration } from "@/types/route-planner";

export type SupportedRouteDuration = 3 | 5 | 7;

export type RouteDurationAdaptation =
  | {
      type: "identity";
      targetstring: string;
    }
  | {
      type: "use-existing-route";
      targetstring: string;
      reason: string;
    }
  | {
      type: "unsupported";
      alternativestrings: string[];
      reason: string;
    };

export const ROUTE_ADAPTATION_POLICY = {
  // Jawa Tengah & DIY
  "jawa-budaya-kuliner-5": {
    3: {
      type: "use-existing-route",
      targetstring: "yogyakarta-cultural-escape-3",
      reason: "Tersedia rute 3 hari dalam region yang sama (Yogyakarta & Jawa Tengah).",
    },
    5: {
      type: "identity",
      targetstring: "jawa-budaya-kuliner-5",
    },
    7: {
      type: "use-existing-route",
      targetstring: "jawa-bali-heritage-7",
      reason: "Tersedia eksplorasi 7 hari melintasi Jawa hingga Bali.",
    },
  },
  "yogyakarta-cultural-escape-3": {
    3: {
      type: "identity",
      targetstring: "yogyakarta-cultural-escape-3",
    },
    5: {
      type: "use-existing-route",
      targetstring: "jawa-budaya-kuliner-5",
      reason: "Tersedia rute 5 hari untuk eksplorasi lebih luas di Jawa Tengah.",
    },
    7: {
      type: "use-existing-route",
      targetstring: "jawa-bali-heritage-7",
      reason: "Tersedia eksplorasi 7 hari melintasi Jawa hingga Bali.",
    },
  },

  // Jawa - Bali
  "jawa-bali-heritage-7": {
    3: {
      type: "use-existing-route",
      targetstring: "yogyakarta-cultural-escape-3",
      reason: "Tersedia rute 3 hari di Jawa Tengah & DIY.",
    },
    5: {
      type: "use-existing-route",
      targetstring: "jawa-budaya-kuliner-5",
      reason: "Tersedia eksplorasi 5 hari di Jawa.",
    },
    7: {
      type: "identity",
      targetstring: "jawa-bali-heritage-7",
    },
  },

  // Bali & Nusa Tenggara
  "bali-nusa-tenggara-5": {
    3: {
      type: "use-existing-route",
      targetstring: "bali-slow-journey-3",
      reason: "Tersedia rute 3 hari fokus di Bali.",
    },
    5: {
      type: "identity",
      targetstring: "bali-nusa-tenggara-5",
    },
    7: {
      type: "unsupported",
      alternativestrings: ["bali-nusa-tenggara-5"],
      reason: "Belum tersedia versi 7 hari penuh, namun rute 5 hari dapat diperluas secara mandiri.",
    },
  },
  "bali-slow-journey-3": {
    3: {
      type: "identity",
      targetstring: "bali-slow-journey-3",
    },
    5: {
      type: "use-existing-route",
      targetstring: "bali-nusa-tenggara-5",
      reason: "Tersedia eksplorasi 5 hari melintasi Bali dan Nusa Tenggara.",
    },
    7: {
      type: "unsupported",
      alternativestrings: ["bali-nusa-tenggara-5"],
      reason: "Belum tersedia versi 7 hari untuk region ini.",
    },
  },

  // Sumatra
  "sumatra-heritage-7": {
    3: {
      type: "unsupported",
      alternativestrings: ["sumatra-heritage-7"],
      reason: "Eksplorasi Sumatra direkomendasikan minimal 7 hari karena jarak tempuh.",
    },
    5: {
      type: "unsupported",
      alternativestrings: ["sumatra-heritage-7"],
      reason: "Eksplorasi Sumatra direkomendasikan minimal 7 hari karena jarak tempuh.",
    },
    7: {
      type: "identity",
      targetstring: "sumatra-heritage-7",
    },
  },

  // Kalimantan
  "kalimantan-nature-future-5": {
    3: {
      type: "unsupported",
      alternativestrings: ["kalimantan-nature-future-5"],
      reason: "Eksplorasi Kalimantan membutuhkan waktu perjalanan yang lebih lama.",
    },
    5: {
      type: "identity",
      targetstring: "kalimantan-nature-future-5",
    },
    7: {
      type: "unsupported",
      alternativestrings: ["kalimantan-nature-future-5"],
      reason: "Belum tersedia versi 7 hari terkurasi untuk wilayah ini.",
    },
  },

  // Sulawesi
  "sulawesi-culture-nature-7": {
    3: {
      type: "unsupported",
      alternativestrings: ["sulawesi-culture-nature-7"],
      reason: "Wilayah Sulawesi terlalu luas untuk dieksplorasi dalam 3 hari.",
    },
    5: {
      type: "unsupported",
      alternativestrings: ["sulawesi-culture-nature-7"],
      reason: "Rute terkurasi di Sulawesi saat ini berfokus pada durasi 7 hari.",
    },
    7: {
      type: "identity",
      targetstring: "sulawesi-culture-nature-7",
    },
  },

  // Maluku
  "maluku-spice-route-5": {
    3: {
      type: "unsupported",
      alternativestrings: ["maluku-spice-route-5"],
      reason: "Akses antar pulau di Maluku membutuhkan durasi perjalanan lebih panjang.",
    },
    5: {
      type: "identity",
      targetstring: "maluku-spice-route-5",
    },
    7: {
      type: "unsupported",
      alternativestrings: ["maluku-spice-route-5"],
      reason: "Belum tersedia versi 7 hari terkurasi untuk kepulauan Maluku.",
    },
  },

  // Papua
  "papua-wonder-7": {
    3: {
      type: "unsupported",
      alternativestrings: ["papua-wonder-7"],
      reason: "Jarak dan aksesibilitas Papua membutuhkan minimal 7 hari.",
    },
    5: {
      type: "unsupported",
      alternativestrings: ["papua-wonder-7"],
      reason: "Jarak dan aksesibilitas Papua membutuhkan minimal 7 hari.",
    },
    7: {
      type: "identity",
      targetstring: "papua-wonder-7",
    },
  },
} satisfies Record<string, Record<SupportedRouteDuration, RouteDurationAdaptation>>;

