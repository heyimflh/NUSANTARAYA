import { FutureSignal } from "@/types/future";

export const FUTURE_SIGNALS: FutureSignal[] = [
  {
    id: "fs-ikn-forest-city",
    slug: "ikn-forest-city",
    status: "published",
    signalStatus: "in-progress",
    themeIds: ["regenerative-environment", "civic-life"],
    provinceIds: ["kalimantan-timur"],
    regionIds: ["kalimantan"],
    scale: "city",
    localeContent: {
      id: {
        title: "Ibu Kota Nusantara (IKN): Kota Hutan Hujan",
        summary: "Pembangunan IKN sebagai kota berbasis kelestarian hutan dengan target restorasi ekosistem lokal.",
        challenge: "Pembangunan kota baru di area hutan Kalimantan Timur berisiko merusak ekosistem endemik jika tidak dikelola secara hati-hati.",
        response: "Menerapkan prinsip Forest City yang mengalokasikan 65% area sebagai kawasan lindung dan restorasi, serta mendesain koridor satwa."
      },
      en: {
        title: "Nusantara (IKN): The Rainforest City",
        summary: "Building IKN as a forest-based city with a local ecosystem restoration target.",
        challenge: "Building a new city in the East Kalimantan forest area risks damaging endemic ecosystems if not managed carefully.",
        response: "Implementing the Forest City principle that allocates 65% of the area as protected and restoration zones, and designing wildlife corridors."
      }
    },
    aliases: ["ikn", "nusantara", "forest city"],
    challengeIds: ["deforestation"],
    responseIds: ["forest-city-concept"],
    beneficiaryIds: ["local-biodiversity", "future-citizens"],
    tradeOffIds: ["ecological-footprint"],
    media: [
      {
        src: "/assets/province/kalimantan-timur/modern.webp",
        width: 800,
        height: 600,
        altId: "Visualisasi kota IKN di tengah hutan Kalimantan",
        altEn: "Visualization of IKN city amidst Kalimantan forest"
      }
    ],
    sourceRefs: ["ikn-masterplan", "bappenas-rpjpn-2045"],
    relatedSignalIds: ["fs-smart-grid-ikn"],
    relatedFeatureRefs: [
      { featureId: "kalimantan-timur", type: "atlas" }
    ],
    evidenceDate: "2024-05",
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-smart-grid-ikn",
    slug: "smart-grid-ikn",
    status: "published",
    signalStatus: "official-target",
    themeIds: ["regenerative-environment"],
    provinceIds: ["kalimantan-timur"],
    regionIds: ["kalimantan"],
    scale: "city",
    localeContent: {
      id: {
        title: "Sistem Energi Pintar IKN",
        summary: "Penerapan Smart Grid 100% energi terbarukan di zona inti IKN.",
        challenge: "Ketergantungan Kalimantan pada energi fosil (batu bara).",
        response: "Membangun sistem tenaga surya terpusat dan PLTA regional yang didukung distribusi Smart Grid responsif."
      },
      en: {
        title: "IKN Smart Energy System",
        summary: "100% renewable energy Smart Grid implementation in the IKN core zone.",
        challenge: "Kalimantan's reliance on fossil fuels (coal).",
        response: "Building a centralized solar power system and regional hydropower supported by a responsive Smart Grid distribution."
      }
    },
    aliases: ["energi pintar", "smart grid", "renewable energy"],
    challengeIds: ["fossil-fuel-dependency"],
    responseIds: ["smart-grid"],
    tradeOffIds: ["ecological-footprint"],
    media: [
      {
        src: "/assets/heritage-future/masa-depan.webp",
        width: 800,
        height: 600,
        altId: "Konsep energi terbarukan di Indonesia",
      }
    ],
    sourceRefs: ["ikn-masterplan"],
    relatedSignalIds: ["fs-ikn-forest-city"],
    relatedFeatureRefs: [],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-jabar-desa-digital",
    slug: "jabar-desa-digital",
    status: "published",
    signalStatus: "current",
    themeIds: ["digital-villages", "creative-economy"],
    provinceIds: ["jawa-barat"],
    regionIds: ["jawa"],
    scale: "village",
    localeContent: {
      id: {
        title: "Ekosistem Desa Digital Jawa Barat",
        summary: "Pemberdayaan desa melalui akses internet dan platform layanan masyarakat terintegrasi.",
        challenge: "Kesenjangan akses informasi dan pasar bagi UMKM desa di Jawa Barat.",
        response: "Membangun infrastruktur WiFi desa dan melatih kader digital untuk mendampingi UMKM masuk ke pasar digital."
      }
    },
    aliases: ["desa digital", "jabar digital"],
    challengeIds: ["digital-divide"],
    responseIds: ["community-wifi", "digital-literacy"],
    tradeOffIds: ["digital-divide"],
    media: [
      {
        src: "/assets/explore/layers/future.webp",
        width: 800,
        height: 600,
        altId: "Ilustrasi desa digital",
      }
    ],
    sourceRefs: ["desa-digital-jabar"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "jawa-barat", type: "atlas" }
    ],
    evidenceDate: "2023-12",
    updatedAt: "2024-05-10",
  },
  {
    id: "fs-bali-electric-mobility",
    slug: "bali-electric-mobility",
    status: "published",
    signalStatus: "in-progress",
    themeIds: ["connected-mobility", "regenerative-environment"],
    provinceIds: ["bali"],
    regionIds: ["bali-nusa-tenggara"],
    scale: "regional",
    localeContent: {
      id: {
        title: "Kawasan Mobilitas Listrik Bali",
        summary: "Transisi menuju transportasi publik dan pariwisata berbasis kendaraan listrik.",
        challenge: "Tingginya emisi dan kemacetan dari kendaraan pariwisata konvensional.",
        response: "Penyediaan bus listrik (Trans Metro Dewata) dan pembatasan kendaraan konvensional di zona pariwisata khusus."
      }
    },
    aliases: ["ev bali", "mobil listrik", "pariwisata hijau"],
    challengeIds: ["traffic-emissions"],
    responseIds: ["electric-buses"],
    tradeOffIds: ["ecological-footprint"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "bali", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-papua-food-sovereignty",
    slug: "papua-food-sovereignty",
    status: "published",
    signalStatus: "current",
    themeIds: ["food-ocean-resilience", "living-heritage"],
    provinceIds: ["papua"],
    regionIds: ["papua"],
    scale: "community",
    localeContent: {
      id: {
        title: "Pemetaan Hutan Sagu Partisipatif",
        summary: "Masyarakat lokal menggunakan teknologi pemetaan satelit untuk melindungi wilayah sagu tradisional.",
        challenge: "Ancaman konversi lahan hutan sagu menjadi perkebunan komersial.",
        response: "Komunitas memetakan wilayah adat dan sumber sagu menggunakan drone dan sistem GIS untuk mendapatkan pengakuan hukum."
      }
    },
    aliases: ["sagu papua", "ketahanan pangan papua"],
    challengeIds: ["land-conversion"],
    responseIds: ["participatory-mapping"],
    tradeOffIds: ["gentrification"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "papua", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-jakarta-transport-hub",
    slug: "jakarta-transport-hub",
    status: "published",
    signalStatus: "current",
    themeIds: ["connected-mobility", "civic-life"],
    provinceIds: ["dki-jakarta"],
    regionIds: ["jawa"],
    scale: "city",
    localeContent: {
      id: {
        title: "Integrasi Transportasi Publik Jakarta",
        summary: "Konektivitas seamless antara MRT, LRT, TransJakarta, dan KRL dengan satu sistem tarif.",
        challenge: "Kemacetan akut akibat orientasi kota yang terlalu bergantung pada kendaraan pribadi.",
        response: "Redesain stasiun sebagai Transit Oriented Development (TOD) dan integrasi pembayaran JakLingko."
      }
    },
    aliases: ["jaklingko", "mrt", "tod"],
    challengeIds: ["car-dependency"],
    responseIds: ["tod", "integrated-fare"],
    tradeOffIds: ["gentrification"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "dki-jakarta", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-ntt-solar-farms",
    slug: "ntt-solar-farms",
    status: "published",
    signalStatus: "in-progress",
    themeIds: ["regenerative-environment"],
    provinceIds: ["nusa-tenggara-timur"],
    regionIds: ["bali-nusa-tenggara"],
    scale: "regional",
    localeContent: {
      id: {
        title: "Pusat Energi Matahari Sumba",
        summary: "Pengembangan lahan tandus di Pulau Sumba menjadi fasilitas Pembangkit Listrik Tenaga Surya (PLTS) regional.",
        challenge: "Akses listrik yang tidak merata di daerah kepulauan dan ketergantungan diesel.",
        response: "Memanfaatkan tingkat iradiasi matahari tertinggi di Indonesia untuk menyuplai pulau-pulau sekitarnya."
      }
    },
    aliases: ["sumba solar", "ntt energi"],
    challengeIds: ["energy-access"],
    responseIds: ["solar-farm"],
    tradeOffIds: ["ecological-footprint"],
    media: [],
    sourceRefs: ["bappenas-rpjpn-2045"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "nusa-tenggara-timur", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-sulsel-maritime-hub",
    slug: "sulsel-maritime-hub",
    status: "published",
    signalStatus: "official-target",
    themeIds: ["food-ocean-resilience", "connected-mobility"],
    provinceIds: ["sulawesi-selatan"],
    regionIds: ["sulawesi"],
    scale: "regional",
    localeContent: {
      id: {
        title: "Digitalisasi Pelabuhan Makassar",
        summary: "Transformasi Makassar New Port sebagai hub logistik laut yang cerdas untuk Indonesia Timur.",
        challenge: "Biaya logistik antarpulau yang tinggi menghambat ekonomi pesisir.",
        response: "Menerapkan sistem Smart Port Authority untuk otomatisasi bongkar muat dan pelacakan pasokan secara real-time."
      }
    },
    aliases: ["makassar port", "smart port"],
    challengeIds: ["logistics-cost"],
    responseIds: ["smart-port"],
    tradeOffIds: ["gentrification"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "sulawesi-selatan", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-diy-creative-hub",
    slug: "diy-creative-hub",
    status: "published",
    signalStatus: "current",
    themeIds: ["creative-economy", "living-heritage"],
    provinceIds: ["di-yogyakarta"],
    regionIds: ["jawa"],
    scale: "city",
    localeContent: {
      id: {
        title: "Ekosistem Kreatif Kontemporer Jogja",
        summary: "Kolaborasi antara seniman tradisional, studio game, dan tech startup di Yogyakarta.",
        challenge: "Mencegah stagnasi budaya tradisional dengan membawanya ke medium kontemporer.",
        response: "Menyediakan co-working space kultural dan platform inkubasi untuk proyek persilangan budaya-teknologi."
      }
    },
    aliases: ["jogja kreatif", "game studio"],
    challengeIds: ["cultural-stagnation"],
    responseIds: ["creative-incubation"],
    tradeOffIds: ["cultural-erosion"],
    media: [],
    sourceRefs: ["kemenparekraf-creative"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "di-yogyakarta", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-maluku-spice-traceability",
    slug: "maluku-spice-traceability",
    status: "published",
    signalStatus: "prototype",
    themeIds: ["food-ocean-resilience", "creative-economy"],
    provinceIds: ["maluku"],
    regionIds: ["maluku"],
    scale: "community",
    localeContent: {
      id: {
        title: "Keterlacakan Rempah Maluku Berbasis Blockchain",
        summary: "Sistem pelacakan dari petani pala hingga konsumen global untuk menjamin harga yang adil.",
        challenge: "Rantai pasok yang panjang merugikan petani lokal dan mengaburkan kualitas rempah.",
        response: "Membangun sistem buku besar terdistribusi di mana asal, kualitas, dan harga rempah tercatat permanen."
      }
    },
    aliases: ["pala maluku", "blockchain rempah"],
    challengeIds: ["supply-chain-transparency"],
    responseIds: ["blockchain-traceability"],
    tradeOffIds: ["digital-divide"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "maluku", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-sumbar-minangkabau-architecture",
    slug: "sumbar-minangkabau-architecture",
    status: "published",
    signalStatus: "current",
    themeIds: ["living-heritage", "regenerative-environment"],
    provinceIds: ["sumatera-barat"],
    regionIds: ["sumatera"],
    scale: "village",
    localeContent: {
      id: {
        title: "Arsitektur Pasca-Gempa Berbasis Vernakular",
        summary: "Adaptasi desain Rumah Gadang untuk bangunan publik modern tahan gempa.",
        challenge: "Kerentanan infrastruktur modern terhadap gempa bumi di patahan Sumatera.",
        response: "Menyerap prinsip tahan gempa dari struktur kayu nir-paku vernakular ke dalam desain sekolah dan klinik baru."
      }
    },
    aliases: ["rumah gadang", "arsitektur tahan gempa"],
    challengeIds: ["earthquake-vulnerability"],
    responseIds: ["vernacular-adaptation"],
    tradeOffIds: ["cultural-erosion"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "sumatera-barat", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-jatim-circular-waste",
    slug: "jatim-circular-waste",
    status: "published",
    signalStatus: "in-progress",
    themeIds: ["regenerative-environment", "civic-life"],
    provinceIds: ["jawa-timur"],
    regionIds: ["jawa"],
    scale: "city",
    localeContent: {
      id: {
        title: "Manajemen Sampah Sirkular Surabaya",
        summary: "Sistem bank sampah kota yang memungkinkan warga membayar layanan transportasi dengan plastik daur ulang.",
        challenge: "Kapasitas tempat pembuangan akhir yang kritis dan tingginya sampah plastik harian.",
        response: "Mengintegrasikan Suroboyo Bus dengan skema pembayaran non-tunai berbasis botol plastik bekas."
      }
    },
    aliases: ["suroboyo bus", "bank sampah"],
    challengeIds: ["plastic-waste"],
    responseIds: ["circular-economy"],
    tradeOffIds: ["data-privacy"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "jawa-timur", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-sumut-lake-toba-tourism",
    slug: "sumut-lake-toba-tourism",
    status: "published",
    signalStatus: "in-progress",
    themeIds: ["creative-economy", "regenerative-environment"],
    provinceIds: ["sumatera-utara"],
    regionIds: ["sumatera"],
    scale: "regional",
    localeContent: {
      id: {
        title: "Pariwisata Regeneratif Danau Toba",
        summary: "Fokus pada ecotourism dan penghentian pencemaran keramba jaring apung skala industri.",
        challenge: "Degradasi kualitas air Danau Toba akibat industri perikanan massal.",
        response: "Moratorium keramba baru dan pendampingan warga beralih ke layanan wisata ramah lingkungan dan homestay budaya."
      }
    },
    aliases: ["danau toba", "pariwisata ramah lingkungan"],
    challengeIds: ["water-pollution"],
    responseIds: ["ecotourism-transition"],
    tradeOffIds: ["gentrification"],
    media: [],
    sourceRefs: ["kemenparekraf-creative"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "sumatera-utara", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  },
  {
    id: "fs-kalsel-floating-market-digital",
    slug: "kalsel-floating-market-digital",
    status: "published",
    signalStatus: "prototype",
    themeIds: ["digital-villages", "living-heritage"],
    provinceIds: ["kalimantan-selatan"],
    regionIds: ["kalimantan"],
    scale: "community",
    localeContent: {
      id: {
        title: "Pasar Terapung Terhubung",
        summary: "Penerapan sistem pembayaran digital QRIS dan pemesanan logistik sungai (river-commerce).",
        challenge: "Menurunnya daya saing pasar terapung tradisional di era aplikasi on-demand.",
        response: "Membekali pedagang sungai dengan pembayaran nirkontak dan platform pemesanan komunal untuk wisata dan logistik lokal."
      }
    },
    aliases: ["pasar terapung", "banjarmasin", "qris"],
    challengeIds: ["informal-economy-survival"],
    responseIds: ["digital-payment-adoption"],
    tradeOffIds: ["digital-divide"],
    media: [],
    sourceRefs: ["nusa-editorial-2024"],
    relatedSignalIds: [],
    relatedFeatureRefs: [
      { featureId: "kalimantan-selatan", type: "atlas" }
    ],
    updatedAt: "2024-05-15",
  }
];
