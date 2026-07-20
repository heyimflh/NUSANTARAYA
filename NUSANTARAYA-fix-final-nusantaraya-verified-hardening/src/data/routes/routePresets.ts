/**
 * NUSANTARAYA — Route Planner Presets
 * 10 deterministic preset routes per planning spec.
 * Each preset has stable ID, region, duration, interests, stops, and recommendation copy.
 * These serve as the fallback guardrail when dynamic generation is unavailable.
 */

import type {
  RouteDuration,
  RoutePlannerRegionId,
  RouteInterest,
  BudgetLevel,
  TravelPace,
  RouteRecommendation,
  RouteStop,
} from "@/types/route-planner";
import { ROUTE_SCHEMA_VERSION } from "@/types/route-planner";
import type { ProvinceId } from "@/data/provinces/provinceIds";

export interface RoutePresetMedia {
  src: string;
  alt: string;
  focalPosition?: string;
}

export interface RoutePresetDefinition {
  id: string;
  title: string;
  summary: string;
  reason: string[];
  durationDays: RouteDuration;
  regionId: RoutePlannerRegionId;
  primaryRegionId: RoutePlannerRegionId;
  regionIds: RoutePlannerRegionId[];
  status: "draft" | "review" | "published" | "archived";
  version: typeof ROUTE_SCHEMA_VERSION;
  legacyIds?: string[];
  interests: RouteInterest[];
  supportedPaces: TravelPace[];
  supportedBudgets: BudgetLevel[];
  provinceIds: ProvinceId[];
  stops: RouteStop[];
  budgetLabel: string;
  paceLabel: string;
  transportSummary: string[];
  etiquetteTips: string[];
  collections?: string[];
  badge?: "Pilihan Utama" | "Cocok untuk Pertama Kali" | "Heritage Trail" | "Slow Journey" | "Jalur Rempah" | "Indonesia Timur" | "Demo Pilihan";
  heroImage?: RoutePresetMedia;
  artworkConfig?: {
    primaryColor: string;
    secondaryColor: string;
    patternType: "batik" | "topographic" | "wave" | "geometric";
  };
}

export const ROUTE_PRESETS: readonly RoutePresetDefinition[] = [
  // 1. 5 Hari Budaya & Kuliner Jawa (DEMO PRIMARY)
  {
    id: "jawa-budaya-kuliner-5",
    legacyIds: ["preset-5d-budaya-kuliner-jawa"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "jawa",
    regionIds: ["jawa"],
    title: "5 Hari Budaya & Kuliner Jawa",
    heroImage: {
      src: "/assets/province/jawa-tengah/culture.webp",
      alt: "Suasana budaya dan pasar tradisional di Jawa Tengah",
      focalPosition: "object-center",
    },
    
    summary:
      "Menjelajahi warisan budaya Jawa dari keraton hingga pasar tradisional, dengan wisata kuliner autentik di setiap kota.",
    reason: [
      "Wilayah Jawa memiliki kepadatan destinasi budaya dan kuliner tertinggi.",
      "Yogyakarta dan Solo menjadi gerbang utama untuk warisan kerajaan Mataram.",
      "Kuliner Jawa sangat beragam dari gudeg hingga sate klatak.",
    ],
    durationDays: 5,
    regionId: "jawa",
    interests: ["budaya", "kuliner"],
    supportedPaces: ["santai", "seimbang", "eksploratif"],
    supportedBudgets: ["hemat", "menengah", "premium", "fleksibel"],
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur"],
    stops: [
      {
        id: "jawa-budaya-kuliner-5-stop-01",
        dayStart: 1,
        dayEnd: 2,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta",
        highlights: ["Keraton Yogyakarta", "Malioboro", "Gudeg Yu Djum"],
      },
      {
        id: "jawa-budaya-kuliner-5-stop-02",
        dayStart: 3,
        dayEnd: 3,
        provinceId: "jawa-tengah",
        cityOrCluster: "Solo",
        highlights: ["Keraton Surakarta", "Pasar Gede", "Sate Buntel"],
      },
      {
        id: "jawa-budaya-kuliner-5-stop-03",
        dayStart: 4,
        dayEnd: 5,
        provinceId: "jawa-timur",
        cityOrCluster: "Surabaya & Malang",
        highlights: ["Tugu Pahlawan", "Rawon Setan", "Batu"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Kereta api Yogyakarta–Solo (±1 jam)",
      "Kereta api Solo–Surabaya (±4 jam)",
    ],
    etiquetteTips: [
      "Gunakan pakaian sopan saat mengunjungi keraton.",
      "Tanyakan izin sebelum memotret di pasar tradisional.",
    ],
    collections: ["popular-starter", "heritage", "culinary", "demo-ready"],
    badge: "Pilihan Utama",
    artworkConfig: {
      primaryColor: "#C9A84C", // gold
      secondaryColor: "#2A241F", // espresso
      patternType: "batik"
    }
  },

  // 2. 7 Hari Jawa–Bali Heritage
  {
    id: "jawa-bali-heritage-7",
    legacyIds: ["preset-7d-jawa-bali-heritage"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "jawa",
    regionIds: ["jawa", "bali-nusa-tenggara"],
    title: "7 Hari Jawa–Bali Heritage",
    heroImage: {
      src: "/assets/province/jawa-timur/destination.webp",
      alt: "Pemandangan Gunung Bromo dan bentang alam Jawa Timur",
      focalPosition: "object-center",
    },
    summary:
      "Perjalanan warisan budaya dari jantung Jawa menuju tradisi hidup di Bali.",
    reason: [
      "Menghubungkan dua pusat budaya terbesar Indonesia.",
      "Kombinasi candi, keraton, dan tradisi Hindu-Bali.",
    ],
    durationDays: 7,
    regionId: "jawa",
    interests: ["budaya", "sejarah"],
    supportedPaces: ["seimbang", "eksploratif"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["di-yogyakarta", "jawa-tengah", "bali"],
    stops: [
      {
        id: "jawa-bali-heritage-7-stop-01",
        dayStart: 1,
        dayEnd: 2,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta",
        highlights: ["Candi Borobudur", "Candi Prambanan", "Batik Workshop"],
      },
      {
        id: "jawa-bali-heritage-7-stop-02",
        dayStart: 3,
        dayEnd: 3,
        provinceId: "jawa-tengah",
        cityOrCluster: "Solo",
        highlights: ["Keraton Surakarta", "Kampung Batik Laweyan"],
      },
      {
        id: "jawa-bali-heritage-7-stop-03",
        dayStart: 4,
        dayEnd: 4,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Transit",
        highlights: ["Perjalanan ke Bali"],
      },
      {
        id: "jawa-bali-heritage-7-stop-04",
        dayStart: 5,
        dayEnd: 7,
        provinceId: "bali",
        cityOrCluster: "Ubud & Denpasar",
        highlights: ["Pura Tirta Empul", "Subak Jatiluwih", "Tari Kecak"],
      },
    ],
    budgetLabel: "Estimasi menengah–premium",
    paceLabel: "Seimbang",
    transportSummary: [
      "Kereta api Yogyakarta–Solo (±1 jam)",
      "Penerbangan Yogyakarta–Bali (±1,5 jam)",
    ],
    etiquetteTips: [
      "Gunakan selendang di pura.",
      "Hormati upacara keagamaan yang sedang berlangsung.",
    ],
    collections: ["heritage", "first-journey"],
    badge: "Heritage Trail",
    artworkConfig: {
      primaryColor: "#2D5A27", // forest
      secondaryColor: "#C9A84C", // gold
      patternType: "batik"
    }
  },

  // 3. 5 Hari Jalur Rempah Maluku
  {
    id: "maluku-spice-route-5",
    legacyIds: ["preset-5d-rempah-maluku"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "maluku",
    regionIds: ["maluku"],
    title: "5 Hari Jalur Rempah Maluku",
    heroImage: {
      src: "/assets/province/maluku/destination.webp",
      alt: "Kepulauan dan perairan biru jernih jalur rempah Maluku",
      focalPosition: "object-center",
    },
    summary:
      "Mengikuti jejak pala dan cengkeh di kepulauan yang pernah mengubah jaringan perdagangan dunia.",
    reason: [
      "Maluku adalah pusat sejarah perdagangan rempah global.",
      "Ambon dan kepulauan sekitarnya memiliki warisan maritim yang kaya.",
    ],
    durationDays: 5,
    regionId: "maluku",
    interests: ["sejarah", "alam"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["maluku"],
    stops: [
      {
        id: "maluku-spice-route-5-stop-01",
        dayStart: 1,
        dayEnd: 2,
        provinceId: "maluku",
        cityOrCluster: "Ambon",
        highlights: ["Benteng Victoria", "Pantai Natsepa", "Pintu Kota"],
      },
      {
        id: "maluku-spice-route-5-stop-02",
        dayStart: 3,
        dayEnd: 5,
        provinceId: "maluku",
        cityOrCluster: "Saparua & Banda",
        highlights: ["Benteng Duurstede", "Pulau Neira", "Perkebunan Pala"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Ambon",
      "Kapal cepat Ambon–Saparua/Banda",
    ],
    etiquetteTips: [
      "Hormati tradisi pela-gandong antarkelompok.",
      "Tanyakan izin sebelum memasuki area adat.",
    ],
    collections: ["spice-route", "heritage", "east-indonesia"],
    badge: "Jalur Rempah",
    artworkConfig: {
      primaryColor: "#7B5C3A", // warm brown for spice
      secondaryColor: "#C89A3D",
      patternType: "wave"
    }
  },

  // 4. 7 Hari Sumatra Heritage
  {
    id: "sumatra-heritage-7",
    legacyIds: ["preset-7d-sumatera-heritage"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "sumatera",
    regionIds: ["sumatera"],
    title: "7 Hari Sumatera Heritage",
    heroImage: {
      src: "/assets/province/sumatera-barat/culture.webp",
      alt: "Arsitektur Rumah Gadang di Sumatera Barat",
      focalPosition: "object-center",
    },
    summary:
      "Perjalanan melintasi warisan budaya Sumatera dari Minangkabau hingga Danau Toba.",
    reason: [
      "Sumatera memiliki keragaman budaya dari sistem matrilineal Minang hingga tradisi Batak.",
      "Danau Toba dan Bukittinggi menawarkan lanskap ikonik.",
    ],
    durationDays: 7,
    regionId: "sumatera",
    interests: ["budaya", "kuliner", "alam"],
    supportedPaces: ["seimbang", "eksploratif"],
    supportedBudgets: ["hemat", "menengah", "fleksibel"],
    provinceIds: ["sumatera-barat", "sumatera-utara"],
    stops: [
      {
        id: "sumatra-heritage-7-stop-01",
        dayStart: 1,
        dayEnd: 3,
        provinceId: "sumatera-barat",
        cityOrCluster: "Padang & Bukittinggi",
        highlights: ["Ngarai Sianok", "Jam Gadang", "Rendang autentik"],
      },
      {
        id: "sumatra-heritage-7-stop-02",
        dayStart: 4,
        dayEnd: 7,
        provinceId: "sumatera-utara",
        cityOrCluster: "Medan & Danau Toba",
        highlights: ["Danau Toba", "Pulau Samosir", "Ulos dan Tor-Tor"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Padang",
      "Transportasi darat Padang–Bukittinggi (±2 jam)",
      "Penerbangan Padang–Medan atau darat (estimasi panjang)",
    ],
    etiquetteTips: [
      "Hormati adat istiadat Minangkabau dan Batak.",
      "Cicipi rendang dan makanan khas di rumah makan lokal.",
    ],
    collections: ["heritage", "culinary"],
    badge: "Heritage Trail",
    artworkConfig: {
      primaryColor: "#8B4513", // brown-ish
      secondaryColor: "#2D5A27",
      patternType: "topographic"
    }
  },

  // 5. 5 Hari Kalimantan Nature Explorer
  {
    id: "kalimantan-nature-future-5",
    legacyIds: ["preset-5d-kalimantan-alam"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "kalimantan",
    regionIds: ["kalimantan"],
    title: "5 Hari Kalimantan Nature Explorer",
    heroImage: {
      src: "/assets/province/kalimantan-timur/hero.webp",
      alt: "Hutan hujan dan lanskap sungai Kalimantan Timur",
      focalPosition: "object-center",
    },
    summary:
      "Menjelajahi hutan hujan tropis, sungai besar, dan kehidupan orangutan di jantung Borneo.",
    reason: [
      "Kalimantan memiliki hutan hujan dan sungai terbesar di Indonesia.",
      "Taman Nasional Tanjung Puting terkenal untuk konservasi orangutan.",
    ],
    durationDays: 5,
    regionId: "kalimantan",
    interests: ["alam", "petualangan"],
    supportedPaces: ["seimbang", "eksploratif"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["kalimantan-tengah", "kalimantan-barat"],
    stops: [
      {
        id: "kalimantan-nature-future-5-stop-01",
        dayStart: 1,
        dayEnd: 3,
        provinceId: "kalimantan-tengah",
        cityOrCluster: "Pangkalan Bun & Tanjung Puting",
        highlights: ["TN Tanjung Puting", "Klotok cruise", "Orangutan"],
      },
      {
        id: "kalimantan-nature-future-5-stop-02",
        dayStart: 4,
        dayEnd: 5,
        provinceId: "kalimantan-barat",
        cityOrCluster: "Pontianak",
        highlights: ["Tugu Khatulistiwa", "Sungai Kapuas", "Kuliner Melayu"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Pangkalan Bun",
      "Penerbangan Pangkalan Bun–Pontianak",
    ],
    etiquetteTips: [
      "Ikuti aturan taman nasional dan jaga jarak dari satwa liar.",
      "Bawa obat anti nyamuk dan perlengkapan outdoor.",
    ],
    collections: ["nature", "popular-starter"],
    badge: "Pilihan Utama",
    artworkConfig: {
      primaryColor: "#2D5A27", // forest
      secondaryColor: "#E8E0CE", // warm border
      patternType: "geometric"
    }
  },

  // 6. 7 Hari Sulawesi Culture & Nature
  {
    id: "sulawesi-culture-nature-7",
    legacyIds: ["preset-7d-sulawesi-budaya-alam"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "sulawesi",
    regionIds: ["sulawesi"],
    title: "7 Hari Sulawesi Selatan Explorer",
    heroImage: {
      src: "/assets/province/sulawesi-selatan/culture.webp",
      alt: "Lanskap unik dan warisan budaya Toraja, Sulawesi Selatan",
      focalPosition: "object-center",
    },
    summary:
      "Dari tradisi pelaut Bugis hingga upacara Toraja dan lanskap karst Maros.",
    reason: [
      "Sulawesi Selatan menghubungkan budaya maritim dan tradisi dataran tinggi.",
      "Tana Toraja dan Rammang-Rammang adalah destinasi ikonik yang dapat dijangkau dari Makassar.",
    ],
    durationDays: 7,
    regionId: "sulawesi",
    interests: ["budaya", "alam"],
    supportedPaces: ["seimbang", "eksploratif"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["sulawesi-selatan"],
    stops: [
      {
        id: "sulawesi-culture-nature-7-stop-01",
        dayStart: 1,
        dayEnd: 2,
        provinceId: "sulawesi-selatan",
        cityOrCluster: "Makassar & Maros",
        highlights: ["Fort Rotterdam", "Rammang-Rammang", "Coto Makassar"],
      },
      {
        id: "sulawesi-culture-nature-7-stop-02",
        dayStart: 3,
        dayEnd: 4,
        provinceId: "sulawesi-selatan",
        cityOrCluster: "Transit & Parepare",
        highlights: ["Perjalanan Darat Lintas Provinsi", "Pantai Lumpue"],
      },
      {
        id: "sulawesi-culture-nature-7-stop-03",
        dayStart: 5,
        dayEnd: 7,
        provinceId: "sulawesi-selatan",
        cityOrCluster: "Tana Toraja",
        highlights: ["Tongkonan", "Lemo", "Ke'te Kesu'"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Makassar",
      "Transportasi darat Makassar–Toraja (±8 jam)",
    ],
    etiquetteTips: [
      "Hormati upacara adat Toraja, terutama rambu solo'.",
      "Tanyakan izin sebelum memotret rumah tongkonan.",
    ],
    collections: ["heritage", "nature"],
    badge: "Heritage Trail",
    artworkConfig: {
      primaryColor: "#A52A2A", // brown-red
      secondaryColor: "#2A241F",
      patternType: "batik"
    }
  },

  // 7. 7 Hari Papua Wonder
  {
    id: "papua-wonder-7",
    legacyIds: ["preset-7d-papua-wonder"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "papua",
    regionIds: ["papua"],
    title: "7 Hari Papua Wonder",
    heroImage: {
      src: "/assets/province/papua-barat-daya/hero.webp",
      alt: "Keindahan gugusan pulau Raja Ampat, Papua Barat Daya",
      focalPosition: "object-center",
    },
    summary:
      "Menjelajahi keajaiban alam Raja Ampat dan budaya Papua dari pesisir hingga Danau Sentani.",
    reason: [
      "Papua menyimpan biodiversitas laut terkaya di dunia.",
      "Raja Ampat adalah destinasi dunia untuk snorkeling dan diving.",
    ],
    durationDays: 7,
    regionId: "papua",
    interests: ["alam", "budaya"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["papua-barat-daya", "papua"],
    stops: [
      {
        id: "papua-wonder-7-stop-01",
        dayStart: 1,
        dayEnd: 4,
        provinceId: "papua-barat-daya",
        cityOrCluster: "Sorong & Raja Ampat",
        highlights: ["Raja Ampat", "Wayag", "Piaynemo"],
      },
      {
        id: "papua-wonder-7-stop-02",
        dayStart: 5,
        dayEnd: 7,
        provinceId: "papua",
        cityOrCluster: "Jayapura & Sentani",
        highlights: ["Danau Sentani", "Bukit Teletubbies", "Kampung Yoboi"],
      },
    ],
    budgetLabel: "Estimasi premium",
    paceLabel: "Santai",
    transportSummary: [
      "Penerbangan menuju Sorong",
      "Speedboat Sorong–Raja Ampat",
      "Penerbangan Sorong–Jayapura",
    ],
    etiquetteTips: [
      "Hormati adat dan tanah ulayat masyarakat Papua.",
      "Bayar retribusi masuk kawasan konservasi Raja Ampat.",
    ],
    collections: ["nature", "east-indonesia"],
    badge: "Indonesia Timur",
    artworkConfig: {
      primaryColor: "#1E90FF", // dodger blue
      secondaryColor: "#2D5A27",
      patternType: "topographic"
    }
  },

  // 8. 5 Hari Bali–Nusa Tenggara
  {
    id: "bali-nusa-tenggara-5",
    legacyIds: ["preset-5d-bali-nusatenggara"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "bali-nusa-tenggara",
    regionIds: ["bali-nusa-tenggara"],
    title: "5 Hari Bali–Lombok",
    heroImage: {
      src: "/assets/province/nusa-tenggara-barat/hero.webp",
      alt: "Pantai berpasir putih dan lautan biru di Lombok, Nusa Tenggara Barat",
      focalPosition: "object-center",
    },
    summary:
      "Dari tradisi hidup Bali menuju keindahan alam pesisir Lombok.",
    reason: [
      "Bali dan Lombok menawarkan kontras budaya dan lanskap yang berdekatan.",
      "Kedua pulau terhubung dengan fastboat yang praktis.",
    ],
    durationDays: 5,
    regionId: "bali-nusa-tenggara",
    interests: ["alam", "budaya", "relaksasi"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["bali", "nusa-tenggara-barat"],
    stops: [
      {
        id: "bali-nusa-tenggara-5-stop-01",
        dayStart: 1,
        dayEnd: 2,
        provinceId: "bali",
        cityOrCluster: "Ubud & Sanur",
        highlights: ["Tegallalang", "Tirta Empul", "Pasar Seni Ubud"],
      },
      {
        id: "bali-nusa-tenggara-5-stop-02",
        dayStart: 3,
        dayEnd: 5,
        provinceId: "nusa-tenggara-barat",
        cityOrCluster: "Lombok & Gili",
        highlights: ["Pantai Kuta Lombok", "Gili Trawangan", "Desa Sade"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Bali",
      "Fastboat Bali–Lombok (±2 jam)",
    ],
    etiquetteTips: [
      "Gunakan selendang saat memasuki pura di Bali.",
      "Hormati tradisi Sasak di Lombok.",
    ],
    collections: ["popular-starter", "first-journey", "nature"],
    badge: "Cocok untuk Pertama Kali",
    artworkConfig: {
      primaryColor: "#00CED1", // dark turquoise
      secondaryColor: "#C9A84C",
      patternType: "wave"
    }
  },

  // 9. 3 Hari Yogyakarta Cultural Escape
  {
    id: "yogyakarta-cultural-escape-3",
    legacyIds: ["preset-3d-yogyakarta-budaya"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "jawa",
    regionIds: ["jawa"],
    title: "3 Hari Yogyakarta & Candi Borobudur",
    heroImage: {
      src: "/assets/province/di-yogyakarta/destination.webp",
      alt: "Kemegahan Candi Borobudur di Yogyakarta",
      focalPosition: "object-center",
    },
    summary:
      "Menyelami warisan keraton, seni, dan kuliner Yogyakarta dipadukan kemegahan candi di Jawa Tengah.",
    reason: [
      "Yogyakarta adalah pusat budaya Jawa yang paling mudah dijangkau.",
      "Cukup waktu untuk Borobudur, Prambanan, dan keraton.",
    ],
    durationDays: 3,
    regionId: "jawa",
    interests: ["budaya", "kuliner", "sejarah"],
    supportedPaces: ["santai", "seimbang", "eksploratif"],
    supportedBudgets: ["hemat", "menengah", "premium", "fleksibel"],
    provinceIds: ["di-yogyakarta", "jawa-tengah"],
    stops: [
      {
        id: "yogyakarta-cultural-escape-3-stop-01",
        dayStart: 1,
        dayEnd: 1,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta Kota",
        highlights: ["Keraton", "Taman Sari", "Malioboro"],
      },
      {
        id: "yogyakarta-cultural-escape-3-stop-02",
        dayStart: 2,
        dayEnd: 2,
        provinceId: "jawa-tengah",
        cityOrCluster: "Candi Area (Magelang)",
        highlights: ["Candi Borobudur", "Candi Mendut"],
      },
      {
        id: "yogyakarta-cultural-escape-3-stop-03",
        dayStart: 3,
        dayEnd: 3,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Prambanan & Seni",
        highlights: ["Candi Prambanan", "Batik Workshop", "Kotagede"],
      },
    ],
    budgetLabel: "Estimasi hemat–menengah",
    paceLabel: "Seimbang",
    transportSummary: ["Transportasi lokal dalam kota Yogyakarta dan Magelang"],
    etiquetteTips: [
      "Gunakan pakaian sopan di area keraton dan candi.",
      "Coba naik becak untuk pengalaman lokal.",
    ],
    collections: ["first-journey", "heritage", "culinary"],
    badge: "Cocok untuk Pertama Kali",
    artworkConfig: {
      primaryColor: "#C9A84C",
      secondaryColor: "#8B4513",
      patternType: "batik"
    }
  },

  // 10. 3 Hari Bali Slow Journey
  {
    id: "bali-slow-journey-3",
    legacyIds: ["preset-3d-bali-santai"],
    status: "published",
    version: ROUTE_SCHEMA_VERSION,
    primaryRegionId: "bali-nusa-tenggara",
    regionIds: ["bali-nusa-tenggara"],
    title: "3 Hari Bali Slow Journey",
    heroImage: {
      src: "/assets/province/bali/hero.webp",
      alt: "Sawah terasering hijau subur dan suasana damai Bali",
      focalPosition: "object-center",
    },
    summary:
      "Tiga hari menikmati Bali dengan ritme santai: pura, sawah, dan pantai.",
    reason: [
      "Bali ideal untuk perjalanan singkat dengan ritme santai.",
      "Ubud dan pantai selatan memberikan kontras yang menyegarkan.",
    ],
    durationDays: 3,
    regionId: "bali-nusa-tenggara",
    interests: ["relaksasi", "budaya", "alam"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["bali"],
    stops: [
      {
        id: "bali-slow-journey-3-stop-01",
        dayStart: 1,
        dayEnd: 1,
        provinceId: "bali",
        cityOrCluster: "Ubud",
        highlights: ["Monkey Forest", "Tegallalang", "Yoga & Spa"],
      },
      {
        id: "bali-slow-journey-3-stop-02",
        dayStart: 2,
        dayEnd: 2,
        provinceId: "bali",
        cityOrCluster: "Pura & Sawah",
        highlights: ["Tirta Empul", "Jatiluwih", "Tari tradisional"],
      },
      {
        id: "bali-slow-journey-3-stop-03",
        dayStart: 3,
        dayEnd: 3,
        provinceId: "bali",
        cityOrCluster: "Pantai Selatan",
        highlights: ["Uluwatu", "Pantai Padang Padang", "Sunset"],
      },
    ],
    budgetLabel: "Estimasi menengah–premium",
    paceLabel: "Santai",
    transportSummary: ["Transportasi lokal dalam Bali"],
    etiquetteTips: [
      "Gunakan selendang dan kain di pura.",
      "Hindari menyentuh kepala seseorang, itu dianggap tidak sopan.",
    ],
    collections: ["slow-travel", "first-journey"],
    badge: "Slow Journey",
    artworkConfig: {
      primaryColor: "#3CB371", // medium sea green
      secondaryColor: "#FFFDF8",
      patternType: "wave"
    }
  },
] as const;

/**
 * Convert a preset definition to a RouteRecommendation result.
 */
export function createRouteRecommendation(
  preset: RoutePresetDefinition,
  matchType: "exact-preset" | "adapted-preset" | "fallback-preset" = "exact-preset"
): RouteRecommendation {
  return {
    id: preset.id,
    version: ROUTE_SCHEMA_VERSION,
    matchType,
    title: preset.title,
    summary: preset.summary,
    reason: preset.reason,
    durationDays: preset.durationDays,
    regionId: preset.regionId,
    provinceIds: preset.provinceIds,
    stops: preset.stops,
    interests: [...preset.interests],
    budgetLabel: preset.budgetLabel,
    paceLabel: preset.paceLabel,
    transportSummary: preset.transportSummary,
    etiquetteTips: preset.etiquetteTips,
  };
}

export function presetToRecommendation(
  preset: RoutePresetDefinition,
  matchType: "exact-preset" | "adapted-preset" | "fallback-preset" = "exact-preset"
): RouteRecommendation {
  return createRouteRecommendation(preset, matchType);
}


