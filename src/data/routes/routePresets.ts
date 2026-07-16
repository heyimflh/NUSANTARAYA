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

export interface RoutePresetDefinition {
  id: string;
  title: string;
  summary: string;
  reason: string[];
  durationDays: RouteDuration;
  regionId: RoutePlannerRegionId;
  interests: RouteInterest[];
  supportedPaces: TravelPace[];
  supportedBudgets: BudgetLevel[];
  provinceIds: string[];
  stops: RouteStop[];
  budgetLabel: string;
  paceLabel: string;
  transportSummary: string[];
  etiquetteTips: string[];
}

export const ROUTE_PRESETS: readonly RoutePresetDefinition[] = [
  // 1. 5 Hari Budaya & Kuliner Jawa (DEMO PRIMARY)
  {
    id: "preset-5d-budaya-kuliner-jawa",
    title: "5 Hari Budaya & Kuliner Jawa",
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
        dayStart: 1,
        dayEnd: 2,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta",
        highlights: ["Keraton Yogyakarta", "Malioboro", "Gudeg Yu Djum"],
      },
      {
        dayStart: 3,
        dayEnd: 3,
        provinceId: "jawa-tengah",
        cityOrCluster: "Solo",
        highlights: ["Keraton Surakarta", "Pasar Gede", "Sate Buntel"],
      },
      {
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
  },

  // 2. 7 Hari Jawa–Bali Heritage
  {
    id: "preset-7d-jawa-bali-heritage",
    title: "7 Hari Jawa–Bali Heritage",
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
        dayStart: 1,
        dayEnd: 2,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta",
        highlights: ["Candi Borobudur", "Candi Prambanan", "Batik Workshop"],
      },
      {
        dayStart: 3,
        dayEnd: 3,
        provinceId: "jawa-tengah",
        cityOrCluster: "Solo",
        highlights: ["Keraton Surakarta", "Kampung Batik Laweyan"],
      },
      {
        dayStart: 4,
        dayEnd: 4,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Transit",
        highlights: ["Perjalanan ke Bali"],
      },
      {
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
  },

  // 3. 5 Hari Jalur Rempah Maluku
  {
    id: "preset-5d-rempah-maluku",
    title: "5 Hari Jalur Rempah Maluku",
    summary:
      "Mengikuti jejak pala dan cengkeh di kepulauan yang pernah mengubah jaringan perdagangan dunia.",
    reason: [
      "Maluku adalah pusat sejarah perdagangan rempah global.",
      "Kepulauan Banda dan Ternate memiliki warisan maritim yang kaya.",
    ],
    durationDays: 5,
    regionId: "maluku",
    interests: ["sejarah", "alam"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["maluku", "maluku-utara"],
    stops: [
      {
        dayStart: 1,
        dayEnd: 2,
        provinceId: "maluku",
        cityOrCluster: "Ambon & Banda",
        highlights: ["Benteng Victoria", "Kepulauan Banda", "Pala"],
      },
      {
        dayStart: 3,
        dayEnd: 5,
        provinceId: "maluku-utara",
        cityOrCluster: "Ternate & Tidore",
        highlights: ["Benteng Tolukko", "Gunung Gamalama", "Cengkeh"],
      },
    ],
    budgetLabel: "Estimasi menengah",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Ambon",
      "Kapal Ambon–Ternate (jadwal lokal)",
    ],
    etiquetteTips: [
      "Hormati tradisi pela-gandong antarkelompok.",
      "Tanyakan izin sebelum memasuki area adat.",
    ],
  },

  // 4. 7 Hari Sumatra Heritage
  {
    id: "preset-7d-sumatera-heritage",
    title: "7 Hari Sumatera Heritage",
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
        dayStart: 1,
        dayEnd: 3,
        provinceId: "sumatera-barat",
        cityOrCluster: "Padang & Bukittinggi",
        highlights: ["Ngarai Sianok", "Jam Gadang", "Rendang autentik"],
      },
      {
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
  },

  // 5. 5 Hari Kalimantan Nature Explorer
  {
    id: "preset-5d-kalimantan-alam",
    title: "5 Hari Kalimantan Nature Explorer",
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
        dayStart: 1,
        dayEnd: 3,
        provinceId: "kalimantan-tengah",
        cityOrCluster: "Pangkalan Bun & Tanjung Puting",
        highlights: ["TN Tanjung Puting", "Klotok cruise", "Orangutan"],
      },
      {
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
  },

  // 6. 7 Hari Sulawesi Culture & Nature
  {
    id: "preset-7d-sulawesi-budaya-alam",
    title: "7 Hari Sulawesi Culture & Nature",
    summary:
      "Dari tradisi pelaut Bugis hingga upacara Toraja dan keajaiban bawah laut Bunaken.",
    reason: [
      "Sulawesi menghubungkan budaya maritim, dataran tinggi, dan biodiversitas laut.",
      "Tana Toraja dan Bunaken adalah destinasi ikonik.",
    ],
    durationDays: 7,
    regionId: "sulawesi",
    interests: ["budaya", "alam"],
    supportedPaces: ["seimbang", "eksploratif"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["sulawesi-selatan", "sulawesi-utara"],
    stops: [
      {
        dayStart: 1,
        dayEnd: 2,
        provinceId: "sulawesi-selatan",
        cityOrCluster: "Makassar",
        highlights: ["Fort Rotterdam", "Pantai Losari", "Coto Makassar"],
      },
      {
        dayStart: 3,
        dayEnd: 4,
        provinceId: "sulawesi-selatan",
        cityOrCluster: "Tana Toraja",
        highlights: ["Tongkonan", "Lemo", "Ke'te Kesu'"],
      },
      {
        dayStart: 5,
        dayEnd: 7,
        provinceId: "sulawesi-utara",
        cityOrCluster: "Manado & Bunaken",
        highlights: ["TN Bunaken", "Danau Tondano", "Tinutuan"],
      },
    ],
    budgetLabel: "Estimasi menengah–premium",
    paceLabel: "Seimbang",
    transportSummary: [
      "Penerbangan menuju Makassar",
      "Transportasi darat Makassar–Toraja (±8 jam)",
      "Penerbangan Makassar–Manado (±2 jam)",
    ],
    etiquetteTips: [
      "Hormati upacara adat Toraja, terutama rambu solo'.",
      "Tanyakan izin sebelum memotret rumah tongkonan.",
    ],
  },

  // 7. 7 Hari Papua Wonder
  {
    id: "preset-7d-papua-wonder",
    title: "7 Hari Papua Wonder",
    summary:
      "Menjelajahi keajaiban alam Raja Ampat dan keragaman budaya Papua dari pesisir hingga lembah.",
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
        dayStart: 1,
        dayEnd: 4,
        provinceId: "papua-barat-daya",
        cityOrCluster: "Sorong & Raja Ampat",
        highlights: ["Raja Ampat", "Wayag", "Piaynemo"],
      },
      {
        dayStart: 5,
        dayEnd: 7,
        provinceId: "papua",
        cityOrCluster: "Jayapura & Sentani",
        highlights: ["Danau Sentani", "Taman Imbi", "Seni Asmat"],
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
  },

  // 8. 5 Hari Bali–Nusa Tenggara
  {
    id: "preset-5d-bali-nusatenggara",
    title: "5 Hari Bali–Nusa Tenggara",
    summary:
      "Dari tradisi hidup Bali menuju keindahan alam Lombok dan Komodo.",
    reason: [
      "Bali dan Nusa Tenggara menawarkan kontras budaya dan lanskap.",
      "Lombok dan Labuan Bajo terhubung dengan penerbangan langsung.",
    ],
    durationDays: 5,
    regionId: "bali-nusa-tenggara",
    interests: ["alam", "budaya", "relaksasi"],
    supportedPaces: ["santai", "seimbang"],
    supportedBudgets: ["menengah", "premium", "fleksibel"],
    provinceIds: ["bali", "nusa-tenggara-barat"],
    stops: [
      {
        dayStart: 1,
        dayEnd: 2,
        provinceId: "bali",
        cityOrCluster: "Ubud & Sanur",
        highlights: ["Tegallalang", "Tirta Empul", "Pasar Seni Ubud"],
      },
      {
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
  },

  // 9. 3 Hari Yogyakarta Cultural Escape
  {
    id: "preset-3d-yogyakarta-budaya",
    title: "3 Hari Yogyakarta Cultural Escape",
    summary:
      "Menyelami warisan keraton, seni, dan kuliner Yogyakarta dalam tiga hari padat makna.",
    reason: [
      "Yogyakarta adalah pusat budaya Jawa yang paling mudah dijangkau.",
      "Cukup waktu untuk Borobudur, Prambanan, dan keraton.",
    ],
    durationDays: 3,
    regionId: "jawa",
    interests: ["budaya", "kuliner", "sejarah"],
    supportedPaces: ["santai", "seimbang", "eksploratif"],
    supportedBudgets: ["hemat", "menengah", "premium", "fleksibel"],
    provinceIds: ["di-yogyakarta"],
    stops: [
      {
        dayStart: 1,
        dayEnd: 1,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Yogyakarta Kota",
        highlights: ["Keraton", "Taman Sari", "Malioboro"],
      },
      {
        dayStart: 2,
        dayEnd: 2,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Candi Area",
        highlights: ["Candi Borobudur", "Candi Prambanan"],
      },
      {
        dayStart: 3,
        dayEnd: 3,
        provinceId: "di-yogyakarta",
        cityOrCluster: "Kuliner & Seni",
        highlights: ["Gudeg Pawon", "Batik Workshop", "Kotagede"],
      },
    ],
    budgetLabel: "Estimasi hemat–menengah",
    paceLabel: "Seimbang",
    transportSummary: ["Transportasi lokal dalam kota Yogyakarta"],
    etiquetteTips: [
      "Gunakan pakaian sopan di area keraton dan candi.",
      "Coba naik becak untuk pengalaman lokal.",
    ],
  },

  // 10. 3 Hari Bali Slow Journey
  {
    id: "preset-3d-bali-santai",
    title: "3 Hari Bali Slow Journey",
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
        dayStart: 1,
        dayEnd: 1,
        provinceId: "bali",
        cityOrCluster: "Ubud",
        highlights: ["Monkey Forest", "Tegallalang", "Yoga & Spa"],
      },
      {
        dayStart: 2,
        dayEnd: 2,
        provinceId: "bali",
        cityOrCluster: "Pura & Sawah",
        highlights: ["Tirta Empul", "Jatiluwih", "Tari tradisional"],
      },
      {
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
  },
] as const;

/**
 * Convert a preset definition to a RouteRecommendation result.
 */
export function presetToRecommendation(
  preset: RoutePresetDefinition,
  matchType: "preset" | "fallback" = "preset"
): RouteRecommendation {
  return {
    id: preset.id,
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
