// ═══════════════════════════════════════════════════════════════════════════
// DI Yogyakarta — Deep Province Atlas Data & References
// Canonical Pilot Province
// ═══════════════════════════════════════════════════════════════════════════

import type {
  ProvinceAtlas,
  ScientificReference,
} from "@/types/atlas";

// ─── References ─────────────────────────────────────────────────────────

export const diYogyakartaReferences: ScientificReference[] = [
  {
    id: "diy-ref-01",
    title: "Provinsi D.I. Yogyakarta Dalam Angka 2025",
    authors: ["BPS Provinsi DI Yogyakarta"],
    year: 2025,
    publisher: "BPS Provinsi DI Yogyakarta",
    url: "https://yogyakarta.bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-depan"],
  },
  {
    id: "diy-ref-02",
    title: "Undang-Undang Nomor 3 Tahun 1950 tentang Pembentukan Daerah Istimewa Jogjakarta",
    year: 1950,
    publisher: "Pemerintah Republik Indonesia",
    url: "https://peraturan.bpk.go.id/Details/44928/uu-no-3-tahun-1950",
    accessedAt: "2026-07-12",
    sourceType: "regulation",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["ringkasan", "sejarah"],
  },
  {
    id: "diy-ref-03",
    title: "Undang-Undang Nomor 13 Tahun 2012 tentang Keistimewaan Daerah Istimewa Yogyakarta",
    year: 2012,
    publisher: "Pemerintah Republik Indonesia",
    url: "https://peraturan.bpk.go.id/Details/39149/uu-no-13-tahun-2012",
    accessedAt: "2026-07-12",
    sourceType: "regulation",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["ringkasan", "sejarah"],
  },
  {
    id: "diy-ref-04",
    title: "Wayang Puppet Theatre — Inscribed in 2008 on the Representative List of the Intangible Cultural Heritage of Humanity",
    authors: ["UNESCO"],
    year: 2008,
    publisher: "UNESCO Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/wayang-puppet-theatre-00063",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    language: "en",
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur", "jawa-barat"],
    topicIds: ["budaya"],
  },
  {
    id: "diy-ref-05",
    title: "Indonesian Kris — Inscribed in 2008 on the Representative List of the Intangible Cultural Heritage of Humanity",
    authors: ["UNESCO"],
    year: 2008,
    publisher: "UNESCO Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/indonesian-kris-00112",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    language: "en",
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur"],
    topicIds: ["budaya"],
  },
  {
    id: "diy-ref-06",
    title: "Indonesian Batik — Inscribed in 2009 on the Representative List of the Intangible Cultural Heritage of Humanity",
    authors: ["UNESCO"],
    year: 2009,
    publisher: "UNESCO Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/indonesian-batik-00170",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    language: "en",
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-barat"],
    topicIds: ["budaya"],
  },
  {
    id: "diy-ref-07",
    title: "The Cosmological Axis of Yogyakarta and its Historic Landmarks — Inscribed in 2023 on the World Heritage List",
    authors: ["UNESCO World Heritage Centre"],
    year: 2023,
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/1671",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    language: "en",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["budaya", "sejarah", "destinasi"],
  },
  {
    id: "diy-ref-08",
    title: "Perjanjian Giyanti dan Berdirinya Kasultanan Ngayogyakarta Hadiningrat",
    authors: ["Keraton Ngayogyakarta Hadiningrat"],
    publisher: "Keraton Jogja",
    url: "https://kratonjogja.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["sejarah"],
  },
  {
    id: "diy-ref-09",
    title: "Sejarah Daerah Istimewa Yogyakarta",
    authors: ["Pemerintah Provinsi DIY"],
    publisher: "Pemerintah Daerah Istimewa Yogyakarta",
    url: "https://jogjaprov.go.id/sejarah",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["sejarah", "ringkasan"],
  },
  {
    id: "diy-ref-10",
    title: "Penetapan Warisan Budaya Takbenda Indonesia: Gudeg Yogyakarta (SK Nomor 186/M/2015)",
    authors: ["Kementerian Pendidikan dan Kebudayaan"],
    year: 2015,
    publisher: "Direktorat Warisan dan Diplomasi Budaya, Kemendikbud",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["kuliner"],
  },
  {
    id: "diy-ref-11",
    title: "Peta Bahasa — Bahasa Jawa",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://petabahasa.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta", "jawa-tengah", "jawa-timur"],
    topicIds: ["bahasa"],
  },
  {
    id: "diy-ref-12",
    title: "Prambanan Temple Compounds — Inscribed in 1991 on the World Heritage List",
    authors: ["UNESCO World Heritage Centre"],
    year: 1991,
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/list/642",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    language: "en",
    provinceIds: ["di-yogyakarta", "jawa-tengah"],
    topicIds: ["destinasi", "sejarah"],
  },
  {
    id: "diy-ref-13",
    title: "Taman Nasional Gunung Merapi",
    authors: ["Kementerian Lingkungan Hidup dan Kehutanan"],
    publisher: "Balai Taman Nasional Gunung Merapi",
    url: "https://tngm.menlhk.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta", "jawa-tengah"],
    topicIds: ["alam", "geografi"],
  },
  {
    id: "diy-ref-14",
    title: "Maklumat Sri Sultan Hamengku Buwono IX, 5 September 1945",
    authors: ["Sri Sultan Hamengku Buwono IX"],
    year: 1945,
    publisher: "Arsip Nasional Republik Indonesia",
    url: "https://anri.go.id",
    accessedAt: "2026-07-12",
    sourceType: "archive",
    credibilityTier: "A",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["sejarah"],
  },
  {
    id: "diy-ref-15",
    title: "Aksara Jawa (Hanacaraka): Sejarah dan Struktur",
    authors: ["Balai Bahasa Provinsi DIY"],
    publisher: "Badan Pengembangan dan Pembinaan Bahasa",
    url: "https://balaibahasadiy.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "B",
    language: "id",
    provinceIds: ["di-yogyakarta"],
    topicIds: ["bahasa"],
  },
];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const diYogyakartaAtlas: ProvinceAtlas = {
  provinceId: "di-yogyakarta",
  slug: "di-yogyakarta",
  title: "DI Yogyakarta",
  tagline: "Kota Budaya dan Pelajar",

  summary: [
    {
      id: "diy-sum-01",
      content: "Daerah Istimewa Yogyakarta (DIY) merupakan provinsi terkecil kedua di Indonesia setelah DKI Jakarta, dengan luas wilayah sekitar 3.185,80 km². Meskipun berukuran kecil, DIY memiliki kekayaan budaya yang sangat dalam — menjadi satu-satunya provinsi di Indonesia yang kepala daerahnya ditetapkan melalui mekanisme keistimewaan berdasarkan garis keturunan Kasultanan dan Kadipaten.",
      citationIds: ["diy-ref-01", "diy-ref-03"],
    },
    {
      id: "diy-sum-02",
      content: "Tradisi keraton yang berusia lebih dari dua abad berdampingan harmonis dengan kehidupan modern dan semangat pendidikan yang menjadikan Yogyakarta sebagai salah satu pusat intelektual Indonesia. Pada tahun 2023, Sumbu Filosofi Yogyakarta — garis imajiner yang menghubungkan Panggung Krapyak, Kraton, dan Tugu — diinskripsikan sebagai Warisan Budaya Dunia UNESCO, menegaskan posisi kota ini sebagai lanskap budaya yang hidup dan relevan.",
      citationIds: ["diy-ref-07"],
    },
  ],

  quickFacts: [
    { id: "diy-qf-01", label: "Ibu Kota", value: "Kota Yogyakarta", citationIds: ["diy-ref-01"] },
    { id: "diy-qf-02", label: "Luas Wilayah", value: "3.185,80 km²", dataYear: 2025, citationIds: ["diy-ref-01"] },
    { id: "diy-qf-03", label: "Populasi", value: "~3,72 juta jiwa", dataYear: 2024, citationIds: ["diy-ref-01"] },
    { id: "diy-qf-04", label: "Kabupaten/Kota", value: "4 kabupaten, 1 kota", citationIds: ["diy-ref-01"] },
    { id: "diy-qf-05", label: "Pembentukan", value: "UU No. 3/1950", citationIds: ["diy-ref-02"] },
    { id: "diy-qf-06", label: "Status Khusus", value: "Daerah Istimewa (UU No. 13/2012)", citationIds: ["diy-ref-03"] },
    { id: "diy-qf-07", label: "Bahasa Daerah", value: "Jawa (dialek Yogyakarta-Surakarta)", citationIds: ["diy-ref-11"] },
    { id: "diy-qf-08", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["diy-ref-01"] },
  ],

  geography: {
    introduction: [
      {
        id: "diy-geo-01",
        content: "DIY terletak di bagian selatan Pulau Jawa, berbatasan dengan Provinsi Jawa Tengah di sisi utara, timur, dan barat, serta Samudra Hindia di selatan. Topografi wilayahnya sangat bervariasi: dari puncak Gunung Merapi (2.930 mdpl) di utara yang merupakan salah satu gunung berapi paling aktif di dunia, dataran alluvial di tengah, hingga perbukitan karst Gunung Kidul di selatan yang membentuk geopark dengan sistem gua dan pantai-pantai tersembunyi.",
        citationIds: ["diy-ref-01", "diy-ref-13"],
      },
      {
        id: "diy-geo-02",
        content: "Gunung Merapi, meskipun menyimpan ancaman erupsi, juga menyuburkan tanah pertanian di lerengnya. Wilayah Taman Nasional Gunung Merapi melindungi ekosistem hutan hujan pegunungan yang menjadi habitat beragam flora dan fauna. Di sisi selatan, kawasan karst Gunungkidul menyimpan sumber daya air bawah tanah dan gua-gua yang menjadi objek penelitian geologi dan arkeologi.",
        citationIds: ["diy-ref-13"],
      },
    ],
    referenceIds: ["diy-ref-01", "diy-ref-13"],
  },

  history: {
    introduction: [
      {
        id: "diy-hist-01",
        content: "Sejarah Yogyakarta tidak dapat dipisahkan dari dinamika Kerajaan Mataram Islam dan warisan intelektual yang terus hidup hingga saat ini. Dari pecahnya Mataram melalui Perjanjian Giyanti hingga perannya sebagai ibu kota darurat Republik Indonesia, Yogyakarta memiliki posisi unik dalam narasi kebangsaan Indonesia.",
        citationIds: ["diy-ref-08", "diy-ref-09"],
      },
    ],
    timeline: [
      {
        id: "diy-tl-01",
        period: "Abad ke-8–10",
        title: "Kerajaan Mataram Kuno",
        description: "Wilayah Yogyakarta merupakan bagian dari pusat Kerajaan Mataram Kuno yang meninggalkan warisan Candi Prambanan, kompleks candi Hindu terbesar di Indonesia.",
        citationIds: ["diy-ref-12"],
      },
      {
        id: "diy-tl-02",
        period: "13 Februari 1755",
        title: "Perjanjian Giyanti",
        description: "Perjanjian Giyanti (Palihan Nagari) membagi Kerajaan Mataram Islam menjadi dua: Kasunanan Surakarta dan Kasultanan Ngayogyakarta Hadiningrat di bawah Sri Sultan Hamengku Buwono I.",
        citationIds: ["diy-ref-08"],
      },
      {
        id: "diy-tl-03",
        period: "5 September 1945",
        title: "Maklumat Integrasi ke NKRI",
        description: "Sultan Hamengku Buwono IX mengeluarkan maklumat yang menyatakan Kasultanan Ngayogyakarta Hadiningrat sebagai daerah istimewa bagian dari Negara Republik Indonesia.",
        citationIds: ["diy-ref-14", "diy-ref-09"],
      },
      {
        id: "diy-tl-04",
        period: "1946–1949",
        title: "Ibu Kota Republik",
        description: "Yogyakarta menjadi ibu kota sementara Republik Indonesia pada masa revolusi kemerdekaan, menegaskan peran strategis kota ini dalam perjuangan bangsa.",
        citationIds: ["diy-ref-09"],
      },
      {
        id: "diy-tl-05",
        period: "1950",
        title: "Pembentukan Daerah Istimewa",
        description: "Daerah Istimewa Yogyakarta resmi dibentuk melalui UU Nomor 3 Tahun 1950 sebagai daerah setingkat provinsi.",
        citationIds: ["diy-ref-02"],
      },
      {
        id: "diy-tl-06",
        period: "2012",
        title: "UU Keistimewaan",
        description: "UU Nomor 13 Tahun 2012 mengukuhkan keistimewaan DIY, mengatur penetapan Gubernur dari garis Kasultanan dan Wakil Gubernur dari garis Kadipaten Paku Alaman, serta kewenangan khusus dalam kebudayaan, pertanahan, dan tata ruang.",
        citationIds: ["diy-ref-03"],
      },
      {
        id: "diy-tl-07",
        period: "18 September 2023",
        title: "Sumbu Filosofi — UNESCO World Heritage",
        description: "Sumbu Filosofi Yogyakarta (The Cosmological Axis of Yogyakarta and its Historic Landmarks) diinskripsikan sebagai Warisan Budaya Dunia UNESCO dalam Sidang ke-45 Komite Warisan Dunia di Riyadh.",
        citationIds: ["diy-ref-07"],
      },
    ],
    referenceIds: ["diy-ref-08", "diy-ref-09", "diy-ref-02", "diy-ref-03", "diy-ref-07", "diy-ref-12", "diy-ref-14"],
  },

  culture: {
    introduction: [
      {
        id: "diy-cul-01",
        content: "Yogyakarta merupakan salah satu pusat kebudayaan Jawa yang paling hidup. Tiga warisan budaya takbenda UNESCO — Wayang Kulit, Keris, dan Batik — semuanya memiliki akar yang dalam di kota ini. Tradisi keraton menjadi penjaga sekaligus pembaharu, memastikan seni dan kerajinan terus berkembang tanpa meninggalkan filosofi dasarnya.",
        citationIds: ["diy-ref-04", "diy-ref-05", "diy-ref-06"],
      },
    ],
    items: [
      {
        id: "diy-cul-item-01",
        name: "Wayang Kulit",
        category: "Seni Pertunjukan",
        summary: "Seni pertunjukan bayangan yang menggunakan boneka dari kulit kerbau, dimainkan oleh seorang dalang dengan iringan gamelan.",
        description: [
          {
            id: "diy-cul-item-01-p1",
            content: "Wayang Kulit diinskripsikan UNESCO dalam Representative List of the Intangible Cultural Heritage of Humanity pada tahun 2008, setelah sebelumnya diproklamasikan sebagai Masterpiece of Oral and Intangible Heritage pada 2003. Pertunjukan wayang bukan sekadar hiburan, melainkan media filosofi, pendidikan moral, dan refleksi kehidupan manusia melalui cerita-cerita yang bersumber dari Ramayana dan Mahabharata.",
            citationIds: ["diy-ref-04"],
          },
        ],
        citationIds: ["diy-ref-04"],
      },
      {
        id: "diy-cul-item-02",
        name: "Keris",
        category: "Senjata Tradisional",
        summary: "Senjata tradisional berlekuk (luk) yang diakui UNESCO sebagai warisan budaya takbenda Indonesia.",
        description: [
          {
            id: "diy-cul-item-02-p1",
            content: "Keris Indonesia diinskripsikan UNESCO pada tahun 2008. Di Yogyakarta, keris bukan hanya senjata, melainkan ageman (perlengkapan spiritual) yang memiliki makna kehormatan, ketangguhan, dan spiritualitas. Tradisi pembuatan keris (tosan aji) masih dipertahankan oleh empu-empu di kawasan Kotagede dan sekitarnya.",
            citationIds: ["diy-ref-05"],
          },
        ],
        citationIds: ["diy-ref-05"],
      },
      {
        id: "diy-cul-item-03",
        name: "Batik Yogyakarta",
        category: "Kerajinan Tekstil",
        summary: "Teknik pewarnaan kain dengan lilin (malam) yang memiliki motif-motif khas keraton.",
        description: [
          {
            id: "diy-cul-item-03-p1",
            content: "Batik Indonesia diinskripsikan UNESCO pada tahun 2009. Batik Yogyakarta memiliki ciri khas motif keraton dengan warna-warna sogan (cokelat) dan warna dasar putih atau krem. Motif-motif tertentu seperti Parang Rusak dan Kawung secara tradisional hanya boleh dikenakan oleh keluarga keraton, meskipun aturan ini kini telah melonggar.",
            citationIds: ["diy-ref-06"],
          },
        ],
        citationIds: ["diy-ref-06"],
      },
      {
        id: "diy-cul-item-04",
        name: "Sumbu Filosofi",
        category: "Konsep Tata Ruang",
        summary: "Garis imajiner lurus yang menghubungkan Panggung Krapyak, Kraton, dan Tugu Yogyakarta sebagai poros kosmologi Jawa.",
        description: [
          {
            id: "diy-cul-item-04-p1",
            content: "Sumbu Filosofi Yogyakarta diinskripsikan sebagai Warisan Budaya Dunia UNESCO pada 18 September 2023. Konsep tata ruang ini digagas oleh Sri Sultan Hamengku Buwono I pada abad ke-18 dan melambangkan Sangkan Paraning Dumadi — perjalanan hidup manusia sejak lahir hingga kembali kepada Sang Pencipta. Garis ini juga dikaitkan dengan poros yang lebih luas dari Gunung Merapi di utara hingga Laut Selatan di selatan, mewakili harmoni antara manusia, alam, dan Tuhan.",
            citationIds: ["diy-ref-07"],
          },
        ],
        citationIds: ["diy-ref-07"],
      },
    ],
    referenceIds: ["diy-ref-04", "diy-ref-05", "diy-ref-06", "diy-ref-07"],
  },

  language: {
    introduction: [
      {
        id: "diy-lang-01",
        content: "Bahasa Jawa dialek Yogyakarta-Surakarta merupakan salah satu varian yang dianggap sebagai acuan standar dalam tata bahasa dan unggah-ungguh (tingkat tutur) Jawa. Bahasa Jawa di Yogyakarta memiliki sistem tingkat tutur yang kompleks: ngoko (informal/akrab), krama (formal/hormat), dan krama inggil (sangat hormat), yang mencerminkan nilai-nilai kesopanan dan hierarki sosial masyarakat Jawa.",
        citationIds: ["diy-ref-11"],
      },
    ],
    scripts: [
      {
        id: "diy-lang-script-01",
        content: "Aksara Jawa (Hanacaraka) merupakan sistem tulisan abugida yang terdiri dari 20 huruf dasar (nglegena), dilengkapi dengan pasangan dan sandhangan untuk mengubah bunyi vokal. Aksara ini berasal dari rumpun aksara Brahmi dan mulai berkembang di Jawa sekitar abad ke-15. Meskipun penggunaannya dalam kehidupan sehari-hari terbatas, aksara Jawa tetap diajarkan sebagai muatan lokal di sekolah-sekolah di DIY.",
        citationIds: ["diy-ref-15"],
      },
    ],
    vocabulary: [
      { id: "diy-vocab-01", word: "Sugeng Rawuh", meaning: "Selamat Datang", citationIds: [] },
      { id: "diy-vocab-02", word: "Matur Nuwun", meaning: "Terima Kasih", citationIds: [] },
      { id: "diy-vocab-03", word: "Mangga", meaning: "Silakan", citationIds: [] },
      { id: "diy-vocab-04", word: "Nuwun Sewu", meaning: "Permisi / Mohon Maaf", citationIds: [] },
    ],
    referenceIds: ["diy-ref-11", "diy-ref-15"],
  },

  culinary: {
    introduction: [
      {
        id: "diy-kul-01",
        content: "Kuliner Yogyakarta mencerminkan karakter masyarakat Jawa yang menghargai kesabaran dan ketelitian. Beberapa makanan khas DIY telah ditetapkan sebagai Warisan Budaya Takbenda Indonesia, menegaskan bahwa kuliner bukan sekadar soal rasa tetapi juga identitas budaya.",
        citationIds: ["diy-ref-10"],
      },
    ],
    items: [
      {
        id: "diy-kul-item-01",
        name: "Gudeg",
        category: "Makanan Utama",
        summary: "Olahan nangka muda (gori) yang dimasak perlahan berjam-jam dengan santan, gula aren, dan daun jati.",
        description: [
          {
            id: "diy-kul-item-01-p1",
            content: "Gudeg Yogyakarta ditetapkan sebagai Warisan Budaya Takbenda Indonesia pada tahun 2015 melalui SK Penetapan Nomor 186/M/2015, dalam domain Kemahiran dan Kerajinan Tradisional. Nama 'gudeg' dipercaya berasal dari kata hangudeg (mengaduk), merujuk pada proses memasak yang memerlukan pengadukan intensif dalam waktu lama — melambangkan filosofi Jawa alon-alon asal kelakon (pelan-pelan asal tercapai).",
            citationIds: ["diy-ref-10"],
          },
        ],
        citationIds: ["diy-ref-10"],
      },
      {
        id: "diy-kul-item-02",
        name: "Kopi Joss",
        category: "Minuman",
        summary: "Kopi seduh tradisional yang dicelup arang membara, menghasilkan cita rasa unik yang menjadi ikon angkringan Yogyakarta.",
        description: [
          {
            id: "diy-kul-item-02-p1",
            content: "Kopi Joss merupakan inovasi kuliner khas angkringan Yogyakarta. Arang aktif yang dicelupkan ke dalam kopi panas dipercaya memberikan efek penetralisasi asam lambung, meskipun klaim kesehatan ini perlu dikaji lebih lanjut secara ilmiah. Sebagai fenomena kuliner lokal, Kopi Joss menjadi daya tarik wisata kuliner tersendiri.",
            citationIds: [],
          },
        ],
        citationIds: [],
      },
    ],
    referenceIds: ["diy-ref-10"],
  },

  destinations: {
    introduction: [
      {
        id: "diy-dest-01",
        content: "Yogyakarta menawarkan destinasi yang membentang dari situs warisan dunia hingga lanskap alam yang menakjubkan. Dua situs UNESCO World Heritage — Candi Prambanan dan Sumbu Filosofi — menjadi anchor destinasi yang dilengkapi oleh berbagai objek budaya dan alam di seluruh wilayah DIY.",
        citationIds: ["diy-ref-12", "diy-ref-07"],
      },
    ],
    items: [
      {
        id: "diy-dest-item-01",
        name: "Candi Prambanan",
        category: "Warisan Dunia",
        summary: "Kompleks candi Hindu terbesar di Indonesia, dibangun pada abad ke-9 dan diinskripsikan UNESCO pada tahun 1991.",
        description: [
          {
            id: "diy-dest-item-01-p1",
            content: "Candi Prambanan (Prambanan Temple Compounds) diinskripsikan dalam Daftar Warisan Dunia UNESCO pada tahun 1991. Kompleks ini terdiri dari ratusan candi, dengan tiga candi utama dipersembahkan untuk Trimurti Hindu: Brahma, Wisnu, dan Siwa. Candi Siwa merupakan yang tertinggi dengan ketinggian 47 meter.",
            citationIds: ["diy-ref-12"],
          },
        ],
        citationIds: ["diy-ref-12"],
      },
      {
        id: "diy-dest-item-02",
        name: "Keraton Ngayogyakarta Hadiningrat",
        category: "Budaya",
        summary: "Istana kerajaan yang masih berfungsi sebagai pusat kebudayaan Jawa dan kediaman resmi Sri Sultan.",
        description: [
          {
            id: "diy-dest-item-02-p1",
            content: "Keraton Yogyakarta dibangun oleh Sri Sultan Hamengku Buwono I setelah Perjanjian Giyanti 1755. Keraton ini merupakan bagian integral dari Sumbu Filosofi yang telah diakui UNESCO. Hingga kini, keraton tetap berfungsi sebagai pusat kehidupan budaya Jawa dan kediaman Sri Sultan.",
            citationIds: ["diy-ref-08", "diy-ref-07"],
          },
        ],
        citationIds: ["diy-ref-08", "diy-ref-07"],
      },
    ],
    referenceIds: ["diy-ref-12", "diy-ref-07", "diy-ref-08"],
  },

  stories: {
    introduction: [
      {
        id: "diy-story-01",
        content: "Tradisi lisan Yogyakarta terkait erat dengan warisan Keraton dan tradisi Jawa yang lebih luas. Cerita rakyat di DIY sering berkaitan dengan asal-usul tempat, hubungan manusia dengan alam, dan nilai-nilai kehidupan yang disampaikan secara turun-temurun.",
        citationIds: [],
      },
    ],
    stories: [
      {
        id: "diy-story-item-01",
        name: "Legenda Ratu Kidul",
        category: "Legenda",
        summary: "Tradisi lisan tentang penguasa gaib Laut Selatan yang memiliki hubungan mistis dengan para Sultan Yogyakarta.",
        description: [
          {
            id: "diy-story-item-01-p1",
            content: "Legenda Nyi Roro Kidul (Kanjeng Ratu Kidul) merupakan salah satu tradisi lisan yang paling dikenal di Yogyakarta. Dalam kepercayaan keraton, Ratu Kidul dianggap sebagai penguasa Laut Selatan yang memiliki hubungan dengan garis keturunan Mataram. Tradisi ini tercermin dalam berbagai upacara keraton seperti Labuhan. Catatan: ini adalah tradisi lisan dan kepercayaan budaya, bukan catatan sejarah terverifikasi.",
            citationIds: [],
          },
        ],
        citationIds: [],
      },
    ],
    referenceIds: [],
  },

  contemporary: {
    introduction: [
      {
        id: "diy-cont-01",
        content: "DIY merupakan pusat pendidikan dengan lebih dari 100 perguruan tinggi, sekaligus mengembangkan ekonomi kreatif berbasis budaya. Tantangan kontemporer meliputi urbanisasi, konversi lahan pertanian, dan keseimbangan antara pariwisata massal dengan pelestarian budaya.",
        citationIds: ["diy-ref-01"],
      },
    ],
    referenceIds: ["diy-ref-01"],
  },

  travel: {
    introduction: [
      {
        id: "diy-travel-01",
        content: "Yogyakarta sangat mudah dijangkau melalui Bandara Internasional Yogyakarta (YIA) di Kulon Progo, atau melalui kereta api dari berbagai kota di Jawa. Transportasi dalam kota meliputi Trans Jogja, becak, andong (delman), dan ojek online.",
        citationIds: [],
      },
    ],
    itineraries: [
      {
        id: "diy-itin-01",
        duration: 3,
        title: "Jogja Klasik 3 Hari",
        days: [
          { day: 1, activities: ["Keraton Yogyakarta", "Taman Sari", "Jalan Malioboro", "Angkringan malam"] },
          { day: 2, activities: ["Candi Prambanan", "Kotagede", "Alun-Alun Kidul"] },
          { day: 3, activities: ["Merapi Lava Tour", "Kaliurang", "Oleh-oleh di Mirota Batik"] },
        ],
        citationIds: [],
      },
    ],
    etiquette: [
      {
        id: "diy-travel-etq-01",
        content: "Saat mengunjungi Keraton atau tempat ibadah, kenakan pakaian sopan yang menutupi lutut dan bahu. Budaya Jawa menghargai kesantunan — gunakan bahasa yang halus dan hormati tradisi lokal. Di kawasan keraton, masyarakat masih mempraktikkan unggah-ungguh (tata krama Jawa) dalam interaksi sehari-hari.",
        citationIds: [],
      },
    ],
    referenceIds: [],
  },

  referenceIds: [
    "diy-ref-01", "diy-ref-02", "diy-ref-03", "diy-ref-04", "diy-ref-05",
    "diy-ref-06", "diy-ref-07", "diy-ref-08", "diy-ref-09", "diy-ref-10",
    "diy-ref-11", "diy-ref-12", "diy-ref-13", "diy-ref-14", "diy-ref-15",
  ],
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
