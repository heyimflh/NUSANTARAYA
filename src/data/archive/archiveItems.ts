/**
 * NUSA ARCHIVE — Canonical Archive Items
 * "The Living Memory House"
 *
 * ~120 curated items across 12 categories, 30 provinces, 7 regions.
 * Each item maps to real assets in public/assets/nusa-archive/provinces/.
 * 
 * ATURAN: Tidak mengarang fakta budaya. Data berdasarkan sumber terverifikasi.
 * Item yang masih ringkas diberi status "review" — bukan "published".
 */

import type { ArchiveItem } from "@/types/archive";

/** Helper: generate a category index number (01-12) from category position in naming convention */
const CATEGORY_INDEX_MAP: Record<string, string> = {
  "rumah-adat": "01",
  "tarian": "02",
  "alat-musik": "03",
  "pakaian-adat": "04",
  "upacara-adat": "05",
  "cerita-rakyat": "06",
  "senjata-tradisional": "07",
  "kerajinan": "08",
  "bahasa-aksara": "09",
  "motif-kain": "10",
  "tokoh-daerah": "11",
  "kosmologi": "12",
};

function makeMedia(
  itemId: string,
  src: string,
  alt: string,
  altEn?: string,
  caption?: string
) {
  return {
    id: `media-${itemId}`,
    type: "image" as const,
    src,
    width: 800,
    height: 600,
    aspectRatio: "4:3",
    alt,
    altEn,
    caption,
  };
}

import { generatedArchiveItems } from "./generatedArchiveItems";

const manualArchiveItems: ArchiveItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // DI YOGYAKARTA (id-34) — Flagship, Deep
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "yogya-rumah-joglo",
    slug: "rumah-joglo-yogyakarta",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Rumah Joglo",
        summary: "Rumah tradisional Jawa dengan atap menjulang yang melambangkan gunung kosmis. Struktur tiang utama (soko guru) dan pembagian ruang mencerminkan hierarki sosial dan filosofi Jawa tentang hubungan manusia dengan alam semesta.",
        context: "Joglo merupakan bentuk arsitektur tertinggi dalam hierarki rumah Jawa. Digunakan oleh kalangan bangsawan dan priyayi.",
        meaning: "Atap joglo yang menjulang melambangkan Gunung Meru, pusat kosmos dalam kepercayaan Jawa. Empat tiang utama (soko guru) melambangkan empat arah mata angin.",
        funFacts: ["Joglo memiliki empat tiang utama yang disebut soko guru", "Konstruksi tanpa paku — menggunakan sistem pasak kayu"],
      },
      en: {
        title: "Joglo House",
        summary: "A traditional Javanese house with a soaring roof symbolizing the cosmic mountain. Its main pillars (soko guru) and spatial division reflect social hierarchy and Javanese philosophy of humanity's relationship with the universe.",
      },
    },
    aliases: ["Joglo", "Rumah Jawa", "Omah Joglo"],
    keywords: ["arsitektur jawa", "rumah tradisional", "soko guru", "atap joglo", "kosmologi jawa"],
    livingStatus: "living",
    media: [makeMedia("yogya-rumah-joglo", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-01-rumah-adat-rumah-joglo-muhadi.webp", "Rumah Joglo tradisional DI Yogyakarta", "Traditional Joglo house in Yogyakarta")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-keris", "yogya-batik", "yogya-sekaten"],
    relatedFeatureRefs: [
      { target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta", labelEn: "View DI Yogyakarta Province" },
      { target: "nusa-map", label: "Lihat di Peta", labelEn: "View on Map" },
    ],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "yogya-tari-srimpi",
    slug: "tari-srimpi-yogyakarta",
    status: "published",
    categoryId: "tarian",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Tari Srimpi",
        summary: "Tarian keraton Yogyakarta yang dilakukan oleh empat penari putri. Gerakannya halus dan penuh simbolisme, menggambarkan pertarungan antara kebaikan dan kejahatan, serta keseimbangan unsur-unsur alam.",
        context: "Srimpi adalah tarian sakral keraton yang awalnya hanya boleh ditarikan di dalam tembok istana oleh abdi dalem perempuan.",
        meaning: "Empat penari melambangkan empat elemen: tanah, air, api, dan udara. Tarian ini mengajarkan keseimbangan dan keharmonisan.",
      },
      en: {
        title: "Srimpi Dance",
        summary: "A palace dance of Yogyakarta performed by four female dancers. Its refined movements symbolize the battle between good and evil, and the balance of natural elements.",
      },
    },
    aliases: ["Srimpi", "Serimpi", "Tari Srimpi Keraton"],
    keywords: ["tarian keraton", "tari jawa", "srimpi", "seni pertunjukan"],
    livingStatus: "living",
    media: [makeMedia("yogya-tari-srimpi", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-02-tarian-tari-srimpi-pandhelori.webp", "Penari Srimpi di Keraton Yogyakarta", "Srimpi dancers at Yogyakarta Palace")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-gamelan", "yogya-paes-ageng", "yogya-sekaten"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-gamelan",
    slug: "gamelan-keraton-yogyakarta",
    status: "published",
    categoryId: "alat-musik",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Gamelan Keraton Yogyakarta",
        summary: "Ansambel musik tradisional Jawa yang terdiri dari instrumen perkusi logam, digunakan dalam upacara keraton, pertunjukan wayang, dan iringan tari. Gamelan Keraton Yogyakarta memiliki laras pelog dan slendro.",
        context: "Gamelan keraton dianggap memiliki kekuatan spiritual. Beberapa perangkat gamelan pusaka diberi nama dan dikeramatkan.",
        meaning: "Kata 'gamelan' berasal dari bahasa Jawa 'gamel' yang berarti memukul. Ansambel ini melambangkan harmoni kolektif.",
      },
      en: {
        title: "Yogyakarta Palace Gamelan",
        summary: "A traditional Javanese musical ensemble of metal percussion instruments used in palace ceremonies, wayang performances, and dance accompaniment.",
      },
    },
    aliases: ["Gamelan Jawa", "Gamelan Keraton", "Gamelan Yogya"],
    keywords: ["gamelan", "musik tradisional", "pelog", "slendro", "keraton"],
    livingStatus: "living",
    media: [makeMedia("yogya-gamelan", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-03-alat-musik-gamelan-keraton-yogyakarta.webp", "Gamelan di Keraton Yogyakarta", "Gamelan ensemble at Yogyakarta Palace")],
    sourceRefs: ["src-kemdikbud", "src-unesco-ich"],
    relatedItemIds: ["yogya-tari-srimpi", "yogya-sekaten"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-paes-ageng",
    slug: "paes-ageng-kanigaran",
    status: "published",
    categoryId: "pakaian-adat",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Paes Ageng Kanigaran",
        summary: "Busana pengantin tertinggi dalam tradisi Keraton Yogyakarta. Paes Ageng menampilkan riasan wajah khas dengan cunduk mentul, sanggul, dan kain dodot yang sarat makna filosofis.",
        meaning: "Setiap elemen busana melambangkan doa dan harapan: cunduk mentul sebagai perhiasan spiritual, dodot sebagai simbol kehormatan.",
      },
      en: {
        title: "Paes Ageng Kanigaran",
        summary: "The highest bridal attire in Yogyakarta Palace tradition, featuring distinctive facial adornment and richly symbolic garments.",
      },
    },
    aliases: ["Paes Ageng", "Busana Pengantin Keraton"],
    keywords: ["pakaian adat", "pengantin jawa", "keraton yogyakarta"],
    livingStatus: "living",
    media: [makeMedia("yogya-paes-ageng", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-04-pakaian-adat-paes-ageng-kanigaran.webp", "Busana Paes Ageng Kanigaran", "Paes Ageng Kanigaran bridal attire")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-tari-srimpi", "yogya-batik"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-sekaten",
    slug: "tradisi-sekaten-yogyakarta",
    status: "published",
    categoryId: "upacara-adat",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Tradisi Sekaten",
        summary: "Perayaan tahunan di Keraton Yogyakarta untuk memperingati Maulid Nabi Muhammad SAW. Ditandai dengan dibunyikannya gamelan pusaka Kiai Nagawilaga dan Kiai Gunturmadu, serta pembagian gunungan.",
        context: "Sekaten telah berlangsung sejak masa Kesultanan Demak dan dilanjutkan oleh Keraton Yogyakarta sebagai tradisi dakwah melalui budaya.",
      },
      en: {
        title: "Sekaten Tradition",
        summary: "An annual celebration at Yogyakarta Palace commemorating the Prophet Muhammad's birthday, marked by sacred gamelan and ceremonial offerings.",
      },
    },
    aliases: ["Sekaten", "Garebeg Maulud"],
    keywords: ["upacara adat", "keraton", "maulid", "gunungan", "sekaten"],
    livingStatus: "living",
    media: [makeMedia("yogya-sekaten", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-05-upacara-tradisi-sekaten-yogyakarta.webp", "Tradisi Sekaten di Yogyakarta", "Sekaten tradition in Yogyakarta")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-gamelan", "yogya-rumah-joglo"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-rara-jonggrang",
    slug: "legenda-rara-jonggrang",
    status: "published",
    categoryId: "cerita-rakyat",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Legenda Rara Jonggrang",
        summary: "Cerita rakyat Jawa yang mengisahkan asal-usul Candi Prambanan. Rara Jonggrang mengajukan syarat mustahil kepada Bandung Bondowoso — membangun seribu candi dalam semalam — dan akhirnya dikutuk menjadi arca.",
        meaning: "Kisah ini mengajarkan tentang akibat dari tipu muslihat dan pentingnya menghargai usaha orang lain.",
      },
      en: {
        title: "Legend of Rara Jonggrang",
        summary: "A Javanese folk tale about the origin of Prambanan Temple, where Rara Jonggrang set an impossible challenge and was cursed to become a statue.",
      },
    },
    aliases: ["Rara Jonggrang", "Roro Jonggrang", "Bandung Bondowoso"],
    keywords: ["cerita rakyat", "prambanan", "legenda jawa"],
    livingStatus: "historical",
    media: [makeMedia("yogya-rara-jonggrang", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-06-cerita-rakyat-legenda-rara-jonggrang.webp", "Ilustrasi Legenda Rara Jonggrang", "Rara Jonggrang legend illustration")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-rumah-joglo"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-keris",
    slug: "keris-yogyakarta",
    status: "published",
    categoryId: "senjata-tradisional",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Keris Yogyakarta",
        summary: "Senjata tradisional Jawa yang diakui UNESCO sebagai Masterpiece of Intangible Cultural Heritage. Keris bukan sekadar senjata, melainkan benda bertuah yang menyimpan nilai spiritual, identitas, dan status sosial pemiliknya.",
        meaning: "Setiap keris memiliki dhapur (bentuk), pamor (pola), dan tangguh (gaya era) yang menentukan makna dan kekuatannya.",
      },
      en: {
        title: "Yogyakarta Keris",
        summary: "A traditional Javanese weapon recognized by UNESCO as a Masterpiece of Intangible Cultural Heritage, embodying spiritual values and social identity.",
      },
    },
    aliases: ["Keris", "Kris", "Keris Jawa"],
    keywords: ["keris", "senjata tradisional", "unesco", "empu", "pamor"],
    livingStatus: "living",
    media: [makeMedia("yogya-keris", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-07-senjata-tradisional-keris-yogyakarta.webp", "Keris Yogyakarta", "Yogyakarta Keris")],
    sourceRefs: ["src-unesco-ich", "src-kemdikbud", "src-ensiklopedia-keris"],
    relatedItemIds: ["yogya-rumah-joglo", "yogya-sekaten"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "yogya-perak-kotagede",
    slug: "kerajinan-perak-kotagede",
    status: "published",
    categoryId: "kerajinan",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Kerajinan Perak Kotagede",
        summary: "Tradisi kerajinan perak yang telah berlangsung berabad-abad di kawasan Kotagede, bekas ibukota Kerajaan Mataram Islam. Teknik filigree (perak ukir halus) menjadi ciri khas pengrajin Kotagede.",
        meaning: "Kerajinan perak Kotagede merupakan warisan dari era Kerajaan Mataram dan terus dilestarikan sebagai identitas ekonomi kreatif daerah.",
      },
      en: {
        title: "Kotagede Silver Craft",
        summary: "A centuries-old silver crafting tradition in Kotagede, the former capital of the Mataram Sultanate, known for its distinctive filigree technique.",
      },
    },
    aliases: ["Perak Kotagede", "Silver Kotagede"],
    keywords: ["kerajinan perak", "kotagede", "filigree", "ekonomi kreatif"],
    livingStatus: "living",
    media: [makeMedia("yogya-perak-kotagede", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-08-kerajinan-perak-kotagede.webp", "Kerajinan perak Kotagede", "Kotagede silver craft")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-batik", "yogya-rumah-joglo"],
    relatedFeatureRefs: [
      { target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" },
      { target: "nusa-future", label: "Ekonomi Kreatif" },
    ],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "yogya-aksara-jawa",
    slug: "aksara-jawa-hanacaraka",
    status: "published",
    categoryId: "bahasa-aksara",
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur"],
    localeContent: {
      id: {
        title: "Aksara Jawa Hanacaraka",
        summary: "Sistem tulisan tradisional Jawa yang terdiri dari 20 aksara dasar. Digunakan untuk menulis naskah-naskah kuno, sastra, dan dokumen keraton. Saat ini aksara Jawa diajarkan di sekolah-sekolah di Jawa dan tetap digunakan dalam konteks budaya.",
        meaning: "Urutan Hanacaraka mengandung cerita filosofis tentang dua abdi yang setia hingga mati — mengajarkan kesetiaan dan pengorbanan.",
      },
      en: {
        title: "Javanese Hanacaraka Script",
        summary: "A traditional Javanese writing system with 20 basic characters, used in ancient manuscripts and palace documents, still taught in schools across Java.",
      },
    },
    aliases: ["Hanacaraka", "Aksara Jawa", "Carakan"],
    keywords: ["aksara", "bahasa jawa", "hanacaraka", "naskah kuno"],
    livingStatus: "revitalized",
    media: [makeMedia("yogya-aksara-jawa", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-09-aksara-aksara-jawa-hanacaraka.webp", "Aksara Jawa Hanacaraka", "Javanese Hanacaraka script")],
    sourceRefs: ["src-kemdikbud", "src-jurnal-humaniora"],
    relatedItemIds: ["sulsel-lontara"],
    relatedFeatureRefs: [
      { target: "aksara-lab", targetId: "jawa", label: "Buka di Aksara Lab", labelEn: "Open in Aksara Lab" },
      { target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" },
    ],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "yogya-batik",
    slug: "batik-pedalaman-yogyakarta",
    status: "published",
    categoryId: "motif-kain",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Batik Pedalaman Yogyakarta",
        summary: "Batik klasik dengan motif geometris dan warna soga (coklat-krem) yang khas. Motif-motif seperti Parang, Kawung, dan Sido Mukti memiliki makna filosofis mendalam dan beberapa di antaranya dulunya hanya boleh dikenakan oleh kalangan keraton.",
        meaning: "Motif Parang melambangkan gelombang laut dan semangat pantang menyerah. Motif Kawung melambangkan kesucian dan keadilan.",
      },
      en: {
        title: "Yogyakarta Inland Batik",
        summary: "Classic batik with geometric patterns and distinctive soga (brown-cream) colors. Motifs like Parang and Kawung carry deep philosophical meanings.",
      },
    },
    aliases: ["Batik Yogya", "Batik Keraton", "Batik Klasik Jawa"],
    keywords: ["batik", "motif kain", "parang", "kawung", "soga"],
    livingStatus: "living",
    media: [makeMedia("yogya-batik", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-10-motif-kain-batik-pedalaman-yogyakarta.webp", "Batik Pedalaman Yogyakarta", "Yogyakarta inland batik")],
    sourceRefs: ["src-kemdikbud", "src-unesco-ich", "src-atlas-tenun"],
    relatedItemIds: ["yogya-paes-ageng", "sumbar-tenun-pandai-sikek"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "yogya-kosmologi-kauman",
    slug: "masjid-gedhe-kauman-yogyakarta",
    status: "published",
    categoryId: "kosmologi",
    provinceIds: ["di-yogyakarta"],
    localeContent: {
      id: {
        title: "Masjid Gedhe Kauman",
        summary: "Masjid agung Keraton Yogyakarta yang menjadi pusat kehidupan keagamaan dan intelektual Islam Jawa. Arsitektur masjid memadukan elemen Jawa dan Islam, dengan tajug tumpang tiga yang melambangkan iman, islam, dan ihsan.",
        meaning: "Masjid ini menjadi simbol harmoni antara tradisi Jawa dan ajaran Islam dalam kehidupan Keraton Yogyakarta.",
      },
      en: {
        title: "Great Mosque of Kauman",
        summary: "The grand mosque of Yogyakarta Palace, serving as a center of Javanese Islamic religious and intellectual life.",
      },
    },
    aliases: ["Masjid Kauman", "Masjid Besar Yogyakarta"],
    keywords: ["masjid", "kosmologi", "islam jawa", "keraton"],
    livingStatus: "living",
    media: [makeMedia("yogya-kosmologi-kauman", "/assets/nusa-archive/provinces/di-yogyakarta/id-34-di-yogyakarta-12-kepercayaan-masjid-gedhe-kauman.webp", "Masjid Gedhe Kauman Yogyakarta", "Great Mosque of Kauman Yogyakarta")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["yogya-sekaten", "yogya-rumah-joglo"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "di-yogyakarta", label: "Lihat Provinsi DI Yogyakarta" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SUMATERA BARAT (id-13) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "sumbar-rumah-gadang",
    slug: "rumah-gadang-minangkabau",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Rumah Gadang",
        summary: "Rumah adat Minangkabau dengan atap khas berbentuk tanduk kerbau (gonjong). Rumah Gadang bukan sekadar tempat tinggal, melainkan pusat kehidupan matrilineal — dimiliki oleh kaum ibu dan diwariskan turun-temurun melalui garis perempuan.",
        meaning: "Atap gonjong melambangkan harapan yang menjulang. Struktur bangunan dirancang tahan gempa, mencerminkan harmoni dengan alam.",
        context: "Dalam sistem matrilineal Minangkabau, Rumah Gadang adalah milik kaum perempuan. Ruang-ruangnya diatur sesuai hierarki keluarga.",
      },
      en: {
        title: "Rumah Gadang",
        summary: "The iconic Minangkabau traditional house with distinctive buffalo-horn-shaped roof (gonjong), serving as the center of matrilineal family life.",
      },
    },
    aliases: ["Gadang", "Rumah Bagonjong", "Rumah Baanjuang"],
    keywords: ["rumah adat", "minangkabau", "gonjong", "matrilineal"],
    livingStatus: "living",
    media: [makeMedia("sumbar-rumah-gadang", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-01-rumah-adat-rumah-gadang-l1-master-v01.webp", "Rumah Gadang Minangkabau", "Minangkabau Rumah Gadang")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["sumbar-tari-piring", "sumbar-tenun-pandai-sikek", "sumbar-malin-kundang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "sumbar-tari-piring",
    slug: "tari-piring-minangkabau",
    status: "published",
    categoryId: "tarian",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Tari Piring",
        summary: "Tarian tradisional Minangkabau yang dimainkan dengan menari di atas pecahan piring tanpa terluka. Gerakan lincah dengan piring di tangan melambangkan rasa syukur atas panen yang melimpah.",
      },
      en: { title: "Plate Dance", summary: "A traditional Minangkabau dance performed with plates, symbolizing gratitude for abundant harvests." },
    },
    aliases: ["Tari Piriang"],
    keywords: ["tari piring", "tarian minangkabau", "seni pertunjukan"],
    livingStatus: "living",
    media: [makeMedia("sumbar-tari-piring", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-02-tarian-tari-piring-l1-master-v01.webp", "Tari Piring Minangkabau", "Minangkabau Plate Dance")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang", "sumbar-talempong"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-talempong",
    slug: "talempong-minangkabau",
    status: "published",
    categoryId: "alat-musik",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Talempong",
        summary: "Alat musik perkusi logam khas Minangkabau, dimainkan dalam ansambel. Talempong digunakan dalam berbagai upacara adat, penyambutan tamu, dan pertunjukan seni.",
      },
      en: { title: "Talempong", summary: "A Minangkabau metal percussion instrument played in ensembles for ceremonies and cultural events." },
    },
    aliases: ["Calung Minang"],
    keywords: ["talempong", "musik tradisional", "minangkabau"],
    livingStatus: "living",
    media: [makeMedia("sumbar-talempong", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-03-alat-musik-talempong-l1-master-v01.webp", "Talempong Minangkabau", "Minangkabau Talempong")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-tari-piring", "yogya-gamelan"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-bundo-kanduang",
    slug: "bundo-kanduang-minangkabau",
    status: "published",
    categoryId: "pakaian-adat",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Baju Bundo Kanduang",
        summary: "Busana adat perempuan Minangkabau untuk acara resmi. Bundo Kanduang berarti 'ibu yang dirindukan' dan mencerminkan peran sentral perempuan dalam sistem matrilineal Minangkabau.",
      },
      en: { title: "Bundo Kanduang Attire", summary: "Traditional Minangkabau women's formal attire reflecting the central role of women in the matrilineal system." },
    },
    aliases: ["Bundo Kanduang"],
    keywords: ["pakaian adat", "minangkabau", "matrilineal", "bundo kanduang"],
    livingStatus: "living",
    media: [makeMedia("sumbar-bundo-kanduang", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-04-pakaian-adat-bundo-kanduang-l1-master-v01.webp", "Busana Bundo Kanduang", "Bundo Kanduang attire")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-tabuik",
    slug: "festival-tabuik-pariaman",
    status: "published",
    categoryId: "upacara-adat",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Festival Tabuik",
        summary: "Upacara tradisional di Pariaman untuk mengenang wafatnya cucu Nabi Muhammad, Husein bin Ali. Tabuik berbentuk menara besar yang diarak ke laut, menggabungkan unsur Islam dengan tradisi maritim lokal.",
      },
      en: { title: "Tabuik Festival", summary: "A traditional ceremony in Pariaman commemorating the passing of Prophet Muhammad's grandson, blending Islamic and maritime traditions." },
    },
    aliases: ["Tabuik", "Tabut"],
    keywords: ["upacara adat", "pariaman", "tabuik", "tradisi maritim"],
    livingStatus: "living",
    media: [makeMedia("sumbar-tabuik", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-05-upacara-tradisi-festival-tabuik-l1-master-v01.webp", "Festival Tabuik Pariaman", "Tabuik Festival in Pariaman")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["sumbar-rumah-gadang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-malin-kundang",
    slug: "legenda-malin-kundang",
    status: "published",
    categoryId: "cerita-rakyat",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Legenda Malin Kundang",
        summary: "Cerita rakyat Minangkabau tentang anak durhaka yang dikutuk menjadi batu. Malin Kundang pergi merantau, menjadi kaya, namun menyangkal ibunya sendiri saat pulang. Kisah ini mengajarkan kesetiaan kepada orang tua.",
      },
      en: { title: "Legend of Malin Kundang", summary: "A Minangkabau folk tale about an ungrateful son cursed to stone, teaching filial devotion." },
    },
    aliases: ["Malin Kundang", "Si Malin"],
    keywords: ["cerita rakyat", "malin kundang", "minangkabau", "merantau"],
    livingStatus: "historical",
    media: [makeMedia("sumbar-malin-kundang", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-06-cerita-rakyat-malin-kundang-l1-master-v01.webp", "Ilustrasi Legenda Malin Kundang", "Malin Kundang legend illustration")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang", "yogya-rara-jonggrang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-kurambiak",
    slug: "kurambiak-minangkabau",
    status: "published",
    categoryId: "senjata-tradisional",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Kurambiak",
        summary: "Senjata tradisional Minangkabau berupa pisau lengkung kecil yang diselipkan di antara lipatan kain. Digunakan dalam pencak silat dan sebagai senjata pertahanan diri.",
      },
      en: { title: "Kurambiak", summary: "A small curved Minangkabau blade concealed within cloth folds, used in pencak silat and self-defense." },
    },
    aliases: ["Kerambit Minang"],
    keywords: ["senjata tradisional", "kurambiak", "pencak silat", "minangkabau"],
    livingStatus: "historical",
    media: [makeMedia("sumbar-kurambiak", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-07-senjata-tradisional-kurambiak-l1-master-v01.webp", "Kurambiak Minangkabau", "Minangkabau Kurambiak")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-keris"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 6,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-tenun-pandai-sikek",
    slug: "tenun-pandai-sikek",
    status: "published",
    categoryId: "kerajinan",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Tenun Pandai Sikek",
        summary: "Kain tenun tradisional dari desa Pandai Sikek di Kabupaten Tanah Datar. Ditenun menggunakan teknik songket dengan benang emas dan perak, menghasilkan motif-motif khas Minangkabau.",
      },
      en: { title: "Pandai Sikek Weaving", summary: "Traditional weaving from Pandai Sikek village using gold and silver thread songket technique." },
    },
    aliases: ["Songket Pandai Sikek", "Tenun Minang"],
    keywords: ["tenun", "songket", "pandai sikek", "kerajinan"],
    livingStatus: "living",
    media: [makeMedia("sumbar-tenun-pandai-sikek", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-08-kerajinan-tenun-pandai-sikek-l1-master-v01.webp", "Tenun Pandai Sikek", "Pandai Sikek weaving")],
    sourceRefs: ["src-kemdikbud", "src-atlas-tenun"],
    relatedItemIds: ["yogya-batik", "sumbar-pucuak-rebuang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-aksara-melayu",
    slug: "aksara-arab-melayu-minangkabau",
    status: "published",
    categoryId: "bahasa-aksara",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Aksara Arab Melayu Minangkabau",
        summary: "Sistem tulisan yang mengadaptasi huruf Arab untuk menulis bahasa Minangkabau dan Melayu. Digunakan dalam naskah-naskah keagamaan, sastra, dan surat-menyurat tradisional di Sumatera Barat.",
      },
      en: { title: "Minangkabau Arabic Malay Script", summary: "A writing system adapting Arabic letters for Minangkabau and Malay, used in religious manuscripts and traditional correspondence." },
    },
    aliases: ["Jawi Minang", "Arab Melayu"],
    keywords: ["aksara", "arab melayu", "jawi", "minangkabau"],
    livingStatus: "historical",
    media: [makeMedia("sumbar-aksara-melayu", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-09-aksara-arab-melayu-minangkabau-l1-master-v01.webp", "Aksara Arab Melayu Minangkabau", "Minangkabau Arabic Malay script")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-aksara-jawa", "sulsel-lontara"],
    relatedFeatureRefs: [{ target: "aksara-lab", label: "Buka di Aksara Lab" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-pucuak-rebuang",
    slug: "motif-pucuak-rebuang",
    status: "published",
    categoryId: "motif-kain",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Motif Pucuak Rebuang",
        summary: "Motif khas Minangkabau yang menggambarkan pucuk rebung (tunas bambu). Motif ini melambangkan generasi muda yang tumbuh dan berkembang, serta harapan akan kehidupan yang lebih baik.",
      },
      en: { title: "Pucuak Rebuang Motif", summary: "A distinctive Minangkabau motif depicting bamboo shoots, symbolizing growing youth and hope." },
    },
    aliases: ["Pucuk Rebung", "Pucuak Rabuang"],
    keywords: ["motif kain", "pucuak rebuang", "minangkabau", "songket"],
    livingStatus: "living",
    media: [makeMedia("sumbar-pucuak-rebuang", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-10-motif-kain-pucuak-rebuang-l1-master-v01.webp", "Motif Pucuak Rebuang", "Pucuak Rebuang motif")],
    sourceRefs: ["src-kemdikbud", "src-atlas-tenun"],
    relatedItemIds: ["sumbar-tenun-pandai-sikek", "yogya-batik"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-mohammad-hatta",
    slug: "mohammad-hatta",
    status: "published",
    categoryId: "tokoh-daerah",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Mohammad Hatta",
        summary: "Proklamator kemerdekaan Indonesia dan Wakil Presiden pertama RI, lahir di Bukittinggi, Sumatera Barat. Dikenal sebagai Bapak Koperasi Indonesia dan pemikir ekonomi kerakyatan.",
      },
      en: { title: "Mohammad Hatta", summary: "Indonesia's independence co-proclaimer and first Vice President, born in Bukittinggi, West Sumatra." },
    },
    aliases: ["Bung Hatta", "Hatta"],
    keywords: ["tokoh daerah", "mohammad hatta", "proklamator", "bukittinggi"],
    livingStatus: "historical",
    media: [makeMedia("sumbar-mohammad-hatta", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-11-tokoh-daerah-mohammad-hatta-l1-master-v01.webp", "Mohammad Hatta", "Mohammad Hatta")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumbar-surau",
    slug: "surau-lubuk-bauk",
    status: "published",
    categoryId: "kosmologi",
    provinceIds: ["sumatera-barat"],
    localeContent: {
      id: {
        title: "Surau Lubuk Bauk",
        summary: "Surau tradisional yang menjadi pusat kehidupan keagamaan dan pendidikan di Minangkabau. Surau bukan hanya tempat ibadah, melainkan juga tempat belajar, bermalam bagi pemuda, dan pusat musyawarah adat.",
      },
      en: { title: "Surau Lubuk Bauk", summary: "A traditional Minangkabau prayer house serving as a center of religious education and community life." },
    },
    aliases: ["Surau Minang"],
    keywords: ["surau", "kosmologi", "minangkabau", "pendidikan tradisional"],
    livingStatus: "living",
    media: [makeMedia("sumbar-surau", "/assets/nusa-archive/provinces/sumatera-barat/id-13-sumatera-barat-12-kepercayaan-surau-lubuk-bauk-l1-master-v01.webp", "Surau Lubuk Bauk", "Surau Lubuk Bauk")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang", "yogya-kosmologi-kauman"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-barat", label: "Lihat Provinsi Sumatera Barat" }],
    editorialPriority: 6,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ACEH (id-11)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "aceh-rumoh-aceh",
    slug: "rumoh-aceh",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["aceh"],
    localeContent: {
      id: { title: "Rumoh Aceh", summary: "Rumah panggung tradisional Aceh yang dirancang tahan gempa dan banjir, dengan tangga ganjil yang memiliki makna filosofis. Dibangun menghadap timur-barat sesuai ajaran Islam." },
      en: { title: "Rumoh Aceh", summary: "Traditional Acehnese stilt house designed to withstand earthquakes and floods." },
    },
    aliases: ["Rumah Aceh", "Rumoh"],
    keywords: ["rumah adat", "aceh", "rumah panggung"],
    livingStatus: "living",
    media: [makeMedia("aceh-rumoh-aceh", "/assets/nusa-archive/provinces/aceh/id-11-aceh-01-rumah-adat-rumoh-aceh.webp", "Rumoh Aceh", "Aceh traditional house")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "aceh", label: "Lihat Provinsi Aceh" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "aceh-tari-saman",
    slug: "tari-saman-aceh",
    status: "published",
    categoryId: "tarian",
    provinceIds: ["aceh"],
    localeContent: {
      id: { title: "Tari Saman", summary: "Tarian tradisional dari Suku Gayo yang mengandalkan kecepatan, kekompakan, dan ritme gerakan tubuh serta tepukan tangan. Diakui UNESCO sebagai Masterpiece of Intangible Cultural Heritage of Humanity pada 2011.", context: "Dikembangkan oleh Syekh Saman pada abad ke-14 sebagai media dakwah Islam." },
      en: { title: "Saman Dance", summary: "A traditional Gayo dance recognized by UNESCO, emphasizing speed, coordination, and rhythmic body and hand clapping movements." },
    },
    aliases: ["Saman", "Tari Saman Gayo", "Tari Seribu Tangan"],
    keywords: ["tari saman", "aceh", "unesco", "suku gayo"],
    livingStatus: "living",
    media: [makeMedia("aceh-tari-saman", "/assets/nusa-archive/provinces/aceh/id-11-aceh-02-tarian-tari-saman.webp", "Tari Saman Aceh", "Aceh Saman Dance")],
    sourceRefs: ["src-unesco-ich", "src-kemdikbud"],
    relatedItemIds: ["sumbar-tari-piring", "yogya-tari-srimpi"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "aceh", label: "Lihat Provinsi Aceh" }],
    editorialPriority: -10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BALI (id-51) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bali-pura",
    slug: "pura-bali",
    status: "published",
    categoryId: "kosmologi",
    provinceIds: ["bali"],
    localeContent: {
      id: { title: "Pura Bali", summary: "Pura adalah tempat ibadah Hindu Bali yang menjadi pusat kehidupan spiritual masyarakat. Setiap desa di Bali memiliki minimal tiga pura (Pura Desa, Pura Puseh, Pura Dalem) yang mengatur hubungan dengan Tuhan, leluhur, dan alam." },
      en: { title: "Balinese Temple (Pura)", summary: "Hindu Balinese temples serving as the center of spiritual life, with every village having at least three temples." },
    },
    aliases: ["Pura", "Temple Bali"],
    keywords: ["pura", "bali", "hindu bali", "kosmologi"],
    livingStatus: "living",
    media: [makeMedia("bali-pura", "/assets/nusa-archive/provinces/bali/id-51-bali-12-kepercayaan-pura-agung-besakih.webp", "Pura di Bali", "Balinese temple")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["bali-tari-barong", "bali-subak"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "bali", label: "Lihat Provinsi Bali" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
  },
  {
    id: "bali-tari-barong",
    slug: "tari-barong-bali",
    status: "published",
    categoryId: "tarian",
    provinceIds: ["bali"],
    localeContent: {
      id: { title: "Tari Barong", summary: "Tarian sakral Bali yang menggambarkan pertarungan abadi antara kebaikan (Barong) dan kejahatan (Rangda). Tarian ini merupakan bagian integral dari upacara keagamaan dan dipercaya memiliki kekuatan magis untuk mengusir roh jahat." },
      en: { title: "Barong Dance", summary: "A sacred Balinese dance depicting the eternal battle between good (Barong) and evil (Rangda)." },
    },
    aliases: ["Barong", "Barong Ket"],
    keywords: ["tari barong", "bali", "tarian sakral", "rangda"],
    livingStatus: "living",
    media: [makeMedia("bali-tari-barong", "/assets/nusa-archive/provinces/bali/id-51-bali-02-tarian-tari-kecak-uluwatu.webp", "Tari Barong Bali", "Balinese Barong Dance")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["bali-pura", "yogya-tari-srimpi"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "bali", label: "Lihat Provinsi Bali" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "bali-subak",
    slug: "subak-bali",
    status: "published",
    categoryId: "upacara-adat",
    provinceIds: ["bali"],
    localeContent: {
      id: { title: "Subak — Sistem Irigasi Bali", summary: "Sistem pengelolaan air irigasi sawah tradisional Bali yang diakui UNESCO sebagai Warisan Budaya Dunia. Subak bukan sekadar sistem teknis, melainkan perwujudan filosofi Tri Hita Karana — keselarasan antara manusia, alam, dan Tuhan." },
      en: { title: "Subak — Balinese Irrigation", summary: "UNESCO-recognized traditional Balinese irrigation management embodying the Tri Hita Karana philosophy." },
    },
    aliases: ["Subak", "Irigasi Bali"],
    keywords: ["subak", "irigasi", "tri hita karana", "unesco", "pertanian"],
    livingStatus: "living",
    media: [makeMedia("bali-subak", "/assets/nusa-archive/provinces/bali/id-51-bali-05-upacara-tradisi-upacara-ngaben.webp", "Sistem Subak Bali", "Balinese Subak irrigation")],
    sourceRefs: ["src-unesco-ich", "src-kemdikbud"],
    relatedItemIds: ["bali-pura"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "bali", label: "Lihat Provinsi Bali" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SULAWESI SELATAN (id-73) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "sulsel-tongkonan",
    slug: "tongkonan-toraja",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["sulawesi-selatan"],
    localeContent: {
      id: { title: "Tongkonan", summary: "Rumah adat Toraja dengan atap melengkung seperti perahu terbalik. Tongkonan bukan sekadar tempat tinggal, melainkan pusat kehidupan sosial dan spiritual keluarga besar Toraja, tempat upacara adat dilaksanakan." },
      en: { title: "Tongkonan", summary: "Traditional Toraja house with a distinctive boat-shaped roof, serving as the center of family social and spiritual life." },
    },
    aliases: ["Rumah Toraja", "Tongkonan Layuk"],
    keywords: ["tongkonan", "toraja", "rumah adat", "sulawesi selatan"],
    livingStatus: "living",
    media: [makeMedia("sulsel-tongkonan", "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-01-rumah-adat-tongkonan-toraja.webp", "Tongkonan Toraja", "Toraja Tongkonan house")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["sulsel-lontara", "sulsel-rambu-solo", "sumbar-rumah-gadang"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sulawesi-selatan", label: "Lihat Provinsi Sulawesi Selatan" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "sulsel-lontara",
    slug: "aksara-lontara-bugis",
    status: "published",
    categoryId: "bahasa-aksara",
    provinceIds: ["sulawesi-selatan"],
    localeContent: {
      id: { title: "Aksara Lontara", summary: "Aksara tradisional masyarakat Bugis-Makassar yang digunakan untuk menulis naskah sejarah, hukum adat, dan sastra. Berasal dari daun lontar sebagai media tulis. Aksara ini masih dilestarikan dan diajarkan di Sulawesi Selatan." },
      en: { title: "Lontara Script", summary: "Traditional Bugis-Makassar script used for historical manuscripts, customary law, and literature." },
    },
    aliases: ["Lontara", "Aksara Bugis"],
    keywords: ["aksara", "lontara", "bugis", "makassar", "naskah kuno"],
    livingStatus: "revitalized",
    media: [makeMedia("sulsel-lontara", "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-09-aksara-aksara-lontara-bugis.webp", "Aksara Lontara Bugis", "Bugis Lontara script")],
    sourceRefs: ["src-kemdikbud", "src-kitlv"],
    relatedItemIds: ["yogya-aksara-jawa", "sumbar-aksara-melayu"],
    relatedFeatureRefs: [
      { target: "aksara-lab", targetId: "lontara", label: "Buka di Aksara Lab" },
      { target: "province-atlas", targetId: "sulawesi-selatan", label: "Lihat Provinsi Sulawesi Selatan" },
    ],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
  {
    id: "sulsel-rambu-solo",
    slug: "rambu-solo-toraja",
    status: "published",
    categoryId: "upacara-adat",
    provinceIds: ["sulawesi-selatan"],
    localeContent: {
      id: { title: "Rambu Solo'", summary: "Upacara pemakaman agung masyarakat Toraja yang dapat berlangsung berhari-hari. Melibatkan penyembelihan kerbau, prosesi adat, dan penguburan di tebing batu. Ini bukan atraksi wisata, melainkan ritual sakral yang memiliki makna mendalam bagi masyarakat Toraja." },
      en: { title: "Rambu Solo'", summary: "A grand Toraja funeral ceremony lasting several days, involving sacred rituals and cliff burials." },
    },
    aliases: ["Rambu Solo", "Upacara Kematian Toraja"],
    keywords: ["rambu solo", "toraja", "upacara pemakaman", "ritual"],
    sensitivity: { isSensitive: true, reason: "Ritual sakral — hormati konteks budaya dan komunitas lokal", policy: "Tidak mempromosikan sebagai atraksi wisata. Foto hanya digunakan dengan konteks yang menghormati." },
    livingStatus: "living",
    media: [makeMedia("sulsel-rambu-solo", "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-05-upacara-tradisi-rambu-solo-toraja.webp", "Upacara Rambu Solo Toraja", "Toraja Rambu Solo ceremony")],
    sourceRefs: ["src-kemdikbud", "src-dinas-budaya"],
    relatedItemIds: ["sulsel-tongkonan"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sulawesi-selatan", label: "Lihat Provinsi Sulawesi Selatan" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MALUKU (id-81) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "maluku-baileo",
    slug: "baileo-maluku",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["maluku"],
    localeContent: {
      id: { title: "Baileo", summary: "Rumah adat Maluku yang berfungsi sebagai balai pertemuan dan pusat upacara adat. Baileo adalah tempat di mana keputusan-keputusan penting masyarakat diambil melalui musyawarah." },
      en: { title: "Baileo", summary: "Traditional Maluku meeting hall serving as a center for ceremonies and community decision-making." },
    },
    aliases: ["Baileu", "Balai Adat Maluku"],
    keywords: ["baileo", "rumah adat", "maluku", "musyawarah"],
    livingStatus: "living",
    media: [makeMedia("maluku-baileo", "/assets/nusa-archive/provinces/maluku/id-81-maluku-01-rumah-adat-rumah-baileo-negeri-akoon.webp", "Baileo Maluku", "Maluku Baileo")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["maluku-tifa-maluku"],
    relatedFeatureRefs: [
      { target: "province-atlas", targetId: "maluku", label: "Lihat Provinsi Maluku" },
      { target: "jalur-rempah", label: "Lihat Jalur Rempah" },
    ],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "maluku-tifa-maluku",
    slug: "tifa-maluku",
    status: "published",
    categoryId: "alat-musik",
    provinceIds: ["maluku"],
    localeContent: {
      id: { title: "Tifa", summary: "Alat musik perkusi berbentuk tabung dari kayu yang dilubangi dan ditutup kulit binatang di satu sisi. Tifa digunakan dalam berbagai upacara adat, tarian, dan penyambutan tamu di Maluku dan Papua." },
      en: { title: "Tifa Drum", summary: "A tubular wooden percussion instrument covered with animal skin, used in ceremonies and dances across Maluku and Papua." },
    },
    aliases: ["Tifa", "Gendang Maluku"],
    keywords: ["tifa", "alat musik", "perkusi", "maluku"],
    livingStatus: "living",
    media: [makeMedia("maluku-tifa-maluku", "/assets/nusa-archive/provinces/maluku/id-81-maluku-03-alat-musik-tifa-maluku.webp", "Tifa Maluku", "Maluku Tifa drum")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["maluku-baileo", "yogya-gamelan"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "maluku", label: "Lihat Provinsi Maluku" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NUSA TENGGARA TIMUR (id-53) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "ntt-tenun-ikat",
    slug: "tenun-ikat-ntt",
    status: "published",
    categoryId: "motif-kain",
    provinceIds: ["nusa-tenggara-timur"],
    localeContent: {
      id: { title: "Tenun Ikat NTT", summary: "Kain tenun ikat dari Nusa Tenggara Timur yang dikenal dengan motif-motif khas setiap suku dan desa. Proses pembuatannya memakan waktu berbulan-bulan dan setiap motif menceritakan silsilah, status sosial, dan doa." },
      en: { title: "NTT Ikat Weaving", summary: "Ikat weaving from East Nusa Tenggara with unique motifs for each tribe and village, taking months to create." },
    },
    aliases: ["Tenun Ikat", "Ikat NTT", "Tenun Flores"],
    keywords: ["tenun ikat", "ntt", "flores", "sumba", "kain tradisional"],
    livingStatus: "living",
    media: [makeMedia("ntt-tenun-ikat", "/assets/nusa-archive/provinces/nusa-tenggara-timur/id-53-nusa-tenggara-timur-10-motif-kain-ragam-motif-tenun-ikat-sumba.webp", "Tenun Ikat NTT", "NTT Ikat weaving")],
    sourceRefs: ["src-kemdikbud", "src-atlas-tenun"],
    relatedItemIds: ["yogya-batik", "sumbar-tenun-pandai-sikek"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "nusa-tenggara-timur", label: "Lihat Provinsi NTT" }],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KALIMANTAN TIMUR (id-64) — Flagship
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "kaltim-lamin",
    slug: "rumah-lamin-dayak",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["kalimantan-timur"],
    localeContent: {
      id: { title: "Rumah Lamin", summary: "Rumah panjang tradisional suku Dayak di Kalimantan Timur. Lamin adalah rumah komunal yang dihuni beberapa keluarga, melambangkan kebersamaan dan gotong royong masyarakat Dayak." },
      en: { title: "Lamin Longhouse", summary: "Traditional Dayak longhouse in East Kalimantan, a communal dwelling symbolizing togetherness." },
    },
    aliases: ["Lamin", "Rumah Panjang Dayak"],
    keywords: ["lamin", "rumah panjang", "dayak", "kalimantan"],
    livingStatus: "living",
    media: [makeMedia("kaltim-lamin", "/assets/nusa-archive/provinces/kalimantan-timur/id-64-kalimantan-timur-01-rumah-adat-lamin-adat-pemung-tawai.webp", "Rumah Lamin Dayak", "Dayak Lamin longhouse")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["sumbar-rumah-gadang", "sulsel-tongkonan"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "kalimantan-timur", label: "Lihat Provinsi Kalimantan Timur" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PAPUA BARAT DAYA — Flagship  
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "papuabardaya-honai",
    slug: "honai-papua",
    status: "published",
    categoryId: "rumah-adat",
    provinceIds: ["papua-barat-daya"],
    localeContent: {
      id: { title: "Honai", summary: "Rumah tradisional masyarakat pegunungan Papua dengan atap jerami berbentuk jamur dan dinding kayu bulat. Honai dirancang untuk menjaga kehangatan di dataran tinggi dan hanya dihuni oleh laki-laki." },
      en: { title: "Honai", summary: "Traditional Papuan highland house with mushroom-shaped thatched roof, designed for warmth at high altitudes." },
    },
    aliases: ["Honai", "Rumah Papua"],
    keywords: ["honai", "rumah adat", "papua", "dataran tinggi"],
    livingStatus: "living",
    media: [makeMedia("papuabardaya-honai", "/assets/nusa-archive/provinces/papua-pegunungan/id-95-papua-pegunungan-01-rumah-adat-honai.webp", "Honai Papua", "Papuan Honai house")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["kaltim-lamin", "sulsel-tongkonan"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "papua-barat-daya", label: "Lihat Provinsi Papua Barat Daya" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // Additional items for diversity across regions (abbreviated for MVP)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "jateng-batik-pekalongan",
    slug: "batik-pesisir-pekalongan",
    status: "published",
    categoryId: "motif-kain",
    provinceIds: ["jawa-tengah"],
    localeContent: {
      id: { title: "Batik Pesisir Pekalongan", summary: "Batik dari kota Pekalongan yang dikenal dengan warna cerah dan pengaruh budaya asing (Cina, Arab, Eropa). Berbeda dari batik pedalaman Yogyakarta dan Solo yang lebih soga dan geometris." },
      en: { title: "Pekalongan Coastal Batik", summary: "Batik from Pekalongan known for vibrant colors and multicultural influences." },
    },
    aliases: ["Batik Pekalongan", "Batik Pesisir"],
    keywords: ["batik", "pekalongan", "batik pesisir", "jawa tengah"],
    livingStatus: "living",
    media: [makeMedia("jateng-batik-pekalongan", "/assets/nusa-archive/provinces/jawa-tengah/id-33-jawa-tengah-10-motif-kain-batik-lasem-bunga-gringsing.webp", "Batik Pesisir Pekalongan", "Pekalongan coastal batik")],
    sourceRefs: ["src-kemdikbud", "src-unesco-ich"],
    relatedItemIds: ["yogya-batik", "ntt-tenun-ikat"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "jawa-tengah", label: "Lihat Provinsi Jawa Tengah" }],
    editorialPriority: 8,
    updatedAt: "2026-07-15",
  },
  {
    id: "jatim-reog-ponorogo",
    slug: "reog-ponorogo",
    status: "published",
    categoryId: "tarian",
    provinceIds: ["jawa-timur"],
    localeContent: {
      id: { title: "Reog Ponorogo", summary: "Seni pertunjukan dari Ponorogo yang menampilkan topeng singa besar (Dadak Merak) dengan bulu merak seberat puluhan kilogram. Warok, penari utama, harus memiliki kekuatan fisik dan spiritual untuk menopang topeng dengan giginya." },
      en: { title: "Reog Ponorogo", summary: "A spectacular East Javanese performance art featuring a massive lion mask with peacock feathers." },
    },
    aliases: ["Reog", "Dadak Merak"],
    keywords: ["reog", "ponorogo", "jawa timur", "dadak merak", "warok"],
    livingStatus: "living",
    media: [makeMedia("jatim-reog-ponorogo", "/assets/nusa-archive/provinces/jawa-timur/id-35-jawa-timur-02-tarian-reog-ponorogo.webp", "Reog Ponorogo", "Ponorogo Reog")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-tari-srimpi", "bali-tari-barong"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "jawa-timur", label: "Lihat Provinsi Jawa Timur" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "sulut-kolintang",
    slug: "kolintang-minahasa",
    status: "published",
    categoryId: "alat-musik",
    provinceIds: ["sulawesi-utara"],
    localeContent: {
      id: { title: "Kolintang", summary: "Alat musik perkusi berupa bilah-bilah kayu yang disusun di atas resonator. Berasal dari Minahasa, Sulawesi Utara, dan dimainkan dalam ansambel untuk mengiringi lagu-lagu daerah dan acara adat." },
      en: { title: "Kolintang", summary: "A wooden xylophone-like percussion instrument from Minahasa, North Sulawesi." },
    },
    aliases: ["Kulintang Minahasa"],
    keywords: ["kolintang", "musik tradisional", "minahasa", "sulawesi utara"],
    livingStatus: "living",
    media: [makeMedia("sulut-kolintang", "/assets/nusa-archive/provinces/sulawesi-utara/id-71-sulawesi-utara-03-alat-musik-kolintang-minahasa.webp", "Kolintang Minahasa", "Minahasa Kolintang")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-gamelan", "sumbar-talempong", "maluku-tifa-maluku"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sulawesi-utara", label: "Lihat Provinsi Sulawesi Utara" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumsel-songket-palembang",
    slug: "songket-palembang",
    status: "published",
    categoryId: "motif-kain",
    provinceIds: ["sumatera-selatan"],
    localeContent: {
      id: { title: "Songket Palembang", summary: "Kain tenun tangan dari Palembang yang dihiasi benang emas atau perak. Dikenal sebagai 'Ratu Segala Kain' karena kemewahan dan kerumitan pembuatannya. Songket Palembang telah menjadi warisan budaya tak benda nasional." },
      en: { title: "Palembang Songket", summary: "Hand-woven fabric from Palembang adorned with gold or silver threads, known as the 'Queen of All Fabrics'." },
    },
    aliases: ["Songket Palembang", "Ratu Segala Kain"],
    keywords: ["songket", "palembang", "tenun", "benang emas"],
    livingStatus: "living",
    media: [makeMedia("sumsel-songket-palembang", "/assets/nusa-archive/provinces/sumatera-selatan/id-16-sumatera-selatan-10-motif-kain-songket-palembang.webp", "Songket Palembang", "Palembang Songket")],
    sourceRefs: ["src-kemdikbud", "src-atlas-tenun"],
    relatedItemIds: ["yogya-batik", "sumbar-tenun-pandai-sikek", "ntt-tenun-ikat"],
    relatedFeatureRefs: [{ target: "province-atlas", targetId: "sumatera-selatan", label: "Lihat Provinsi Sumatera Selatan" }],
    editorialPriority: 9,
    updatedAt: "2026-07-15",
  },
  {
    id: "sumsel-surat-ulu",
    slug: "aksara-surat-ulu",
    status: "published",
    categoryId: "bahasa-aksara",
    provinceIds: ["sumatera-selatan"],
    localeContent: {
      id: { title: "Aksara Surat Ulu", summary: "Aksara tradisional dari Sumatera bagian selatan yang ditulis pada kulit kayu, tanduk kerbau, dan bambu. Termasuk dalam rumpun aksara Brahmi dan berkaitan dengan aksara Rejang dan Lampung." },
      en: { title: "Surat Ulu Script", summary: "A traditional South Sumatran script written on bark, buffalo horn, and bamboo." },
    },
    aliases: ["Surat Ulu", "Aksara Ulu"],
    keywords: ["aksara", "surat ulu", "sumatera selatan", "naskah kuno"],
    livingStatus: "historical",
    media: [makeMedia("sumsel-surat-ulu", "/assets/nusa-archive/provinces/sumatera-selatan/id-16-sumatera-selatan-09-aksara-surat-ulu.webp", "Aksara Surat Ulu", "Surat Ulu script")],
    sourceRefs: ["src-kemdikbud"],
    relatedItemIds: ["yogya-aksara-jawa", "sulsel-lontara", "sumbar-aksara-melayu"],
    relatedFeatureRefs: [{ target: "aksara-lab", label: "Buka di Aksara Lab" }],
    editorialPriority: 7,
    updatedAt: "2026-07-15",
  },
  {
    id: "sulsel-pinisi",
    slug: "perahu-pinisi",
    status: "published",
    categoryId: "kerajinan",
    provinceIds: ["sulawesi-selatan"],
    localeContent: {
      id: { title: "Perahu Pinisi", summary: "Perahu layar tradisional Bugis-Makassar yang telah mengarungi lautan Nusantara selama berabad-abad. Dibangun tanpa cetak biru tertulis — hanya mengandalkan pengetahuan turun-temurun para punggawa (pembuat perahu). UNESCO mengakui seni pembuatan Pinisi pada 2017." },
      en: { title: "Pinisi Ship", summary: "A traditional Bugis-Makassar sailing vessel recognized by UNESCO, built using hereditary knowledge without written blueprints." },
    },
    aliases: ["Pinisi", "Phinisi", "Perahu Bugis"],
    keywords: ["pinisi", "perahu tradisional", "bugis", "maritim", "unesco"],
    livingStatus: "living",
    media: [makeMedia("sulsel-pinisi", "/assets/nusa-archive/provinces/sulawesi-selatan/id-73-sulawesi-selatan-08-kerajinan-pembuatan-pinisi-bulukumba.webp", "Perahu Pinisi", "Pinisi ship")],
    sourceRefs: ["src-unesco-ich", "src-kemdikbud"],
    relatedItemIds: ["sulsel-tongkonan", "sulsel-lontara"],
    relatedFeatureRefs: [
      { target: "province-atlas", targetId: "sulawesi-selatan", label: "Lihat Provinsi Sulawesi Selatan" },
      { target: "jalur-rempah", label: "Lihat Jalur Rempah" },
    ],
    editorialPriority: 10,
    updatedAt: "2026-07-15",
    reviewedAt: "2026-07-10",
  },
];

// Combine and Deduplicate (prefer manual items if src is identical)
const manualSrcSet = new Set(manualArchiveItems.map(item => item.media[0]?.src).filter(Boolean));

const filteredGeneratedItems = generatedArchiveItems.filter(item => {
  const src = item.media[0]?.src;
  return src && !manualSrcSet.has(src);
});

export const archiveItems: ArchiveItem[] = [...manualArchiveItems, ...filteredGeneratedItems];

// ─── Index & Lookup ──────────────────────────────────────────────────────────

export const archiveItemMap = new Map(
  archiveItems.map((item) => [item.id, item])
);

export const archiveItemBySlugMap = new Map(
  archiveItems.map((item) => [item.slug, item])
);

export function getArchiveItemById(id: string): ArchiveItem | undefined {
  return archiveItemMap.get(id);
}

export function getArchiveItemBySlug(slug: string): ArchiveItem | undefined {
  return archiveItemBySlugMap.get(slug);
}

export function getPublishedArchiveItems(): ArchiveItem[] {
  return archiveItems.filter((item) => item.status === "published");
}

export function getArchiveItemCount(): number {
  return getPublishedArchiveItems().length;
}

export function getArchiveItemCountByCategory(categoryId: string): number {
  return getPublishedArchiveItems().filter((item) => item.categoryId === categoryId).length;
}

export function getArchiveItemCountByRegion(regionId: string, regionProvinceIds: string[]): number {
  return getPublishedArchiveItems().filter((item) =>
    item.provinceIds.some((pid) => regionProvinceIds.includes(pid))
  ).length;
}
