import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kepulauanRiauReferences: ScientificReference[] = [
  {
    id: "kpr-ref-bps",
    title: "Provinsi Kepulauan Riau Dalam Angka 2024",
    authors: ["BPS Provinsi Kepulauan Riau"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kepulauan Riau",
    url: "https://kepri.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "kpr-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kepulauan Riau",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "kpr-ref-sejarah",
    title: "Sejarah Kesultanan Riau-Lingga",
    authors: ["Andaya, Leonard Y."],
    year: 2001,
    publisher: "E.J. Brill",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Lingga",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["history", "language"],
  },
  {
    id: "kpr-ref-makyong",
    title: "Mak Yong Theatre",
    authors: ["UNESCO Intangible Cultural Heritage"],
    year: 2005,
    publisher: "UNESCO",
    url: "https://ich.unesco.org/en/RL/mak-yong-theatre-00167",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["culture"],
  },
  {
    id: "kpr-ref-sukulaut",
    title: "Orang Suku Laut Kepulauan Riau",
    authors: ["Lenhart, Lioba"],
    year: 1997,
    publisher: "Antropologi Indonesia",
    url: "https://id.wikipedia.org/wiki/Suku_Laut",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["kepulauan-riau"],
    topicIds: ["society"],
  }
];

export const kepulauanRiauAtlas: ProvinceAtlas = {
  provinceId: "kepulauan-riau",
  slug: "kepulauan-riau",
  title: "Kepulauan Riau",
  tagline: "Seribu Pulau Penjaga Gerbang Utara Nusantara",
  summary: [
    {
      id: "kpr-sum-01",
      content: "Provinsi Kepulauan Riau (Kepri) adalah kawasan maritim sejati dengan rasio daratan kurang dari 5%. Berbatasan langsung dengan Singapura dan Laut Natuna Utara, Kepri adalah episentrum peradaban Melayu maritim peninggalan Kesultanan Riau-Lingga, sekaligus tempat bersemayamnya Gurindam Dua Belas karya Raja Ali Haji yang memformalkan cikal bakal Bahasa Indonesia. Saat ini, Kepri (khususnya Batam dan Bintan) menjadi motor penggerak industri dan wisata silang-negara terdepan di Indonesia.",
      citationIds: ["kpr-ref-bps", "kpr-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "kpr-qf-01", label: "Ibu Kota", value: "Tanjungpinang", citationIds: ["kpr-ref-bps"] },
    { id: "kpr-qf-02", label: "Luas Wilayah (Darat)", value: "8.201,72 km²", citationIds: ["kpr-ref-bps"], dataYear: 2024 },
    { id: "kpr-qf-03", label: "Populasi", value: "2.152.607 jiwa", citationIds: ["kpr-ref-bps"], dataYear: 2023 },
    { id: "kpr-qf-04", label: "Jumlah Pulau", value: "2.408 Pulau", citationIds: ["kpr-ref-bps"] },
    { id: "kpr-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["kpr-ref-bps"] },
    { id: "kpr-qf-06", label: "Gubernur", value: "Ansar Ahmad", citationIds: ["kpr-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "kpr-geo-01",
        content: "Kepulauan Riau merupakan provinsi yang 95% wilayahnya adalah perairan laut (Selat Malaka dan Laut Cina Selatan), terdiri dari ribuan pulau yang dikelompokkan dalam beberapa gugusan.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "kpr-geo-02",
        content: "Gugusan terbesarnya adalah Batam, Bintan, dan Karimun (BBK) yang berdekatan dengan semenanjung Malaya. Jauh ke arah utara, terdapat Kepulauan Anambas dan Kabupaten Natuna, yang menjadi batas terluar landas kontinen Indonesia di Laut Natuna Utara.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "kpr-his-01",
        content: "Sejarah Kepri tidak dapat dipisahkan dari kejayaan Kesultanan Riau-Lingga-Johor-Pahang yang menguasai laut dan perdagangan rempah abad ke-18 dan 19.",
        citationIds: ["kpr-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "kpr-era-01",
        period: "Abad ke-18 M",
        title: "Pusat Kesultanan Melayu",
        description: "Pulau Penyengat di Tanjungpinang dijadikan pusat pemerintahan Kesultanan Riau-Lingga dan mahar pernikahan untuk Engku Putri Raja Hamidah. Tempat ini melahirkan banyak ulama dan cendekiawan Melayu terkemuka.",
        citationIds: ["kpr-ref-sejarah"],
      },
      {
        id: "kpr-era-02",
        period: "1847",
        title: "Penulisan Gurindam Dua Belas",
        description: "Raja Ali Haji, seorang cendekiawan Bugis-Melayu dari Penyengat, menulis 'Gurindam Dua Belas' (sastra nasihat syariat Islam) dan kemudian menyusun kamus Bahasa Melayu standar pertama, yang menjadi landasan Bahasa Indonesia modern.",
        citationIds: ["kpr-ref-sejarah"],
      },
      {
        id: "kpr-era-03",
        period: "1970-an",
        title: "Pengembangan Otorita Batam",
        description: "Presiden Soeharto dan B.J. Habibie merancang Pulau Batam sebagai kawasan industri dan alih kapal berikat (Free Trade Zone) untuk menyaingi Singapura. Ribuan investasi elektronik asing masuk ke Batam.",
        citationIds: ["kpr-ref-bps"],
      },
      {
        id: "kpr-era-04",
        period: "24 September 2002",
        title: "Pemekaran Provinsi Kepri",
        description: "Wilayah kepulauan secara resmi memisahkan diri dari Provinsi Riau daratan (Pekanbaru), dengan ibu kota ditetapkan di Tanjungpinang (Pulau Bintan).",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-sejarah", "kpr-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "kpr-soc-01",
        content: "Kepri adalah wilayah yang plural secara demografis. Etnis Melayu Kepulauan memegang tradisi, sementara keturunan Tionghoa mendominasi sektor niaga pesisir.",
        citationIds: ["kpr-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "kpr-soc-02",
        content: "Batam adalah melting pot tempat jutaan perantau dari Jawa, Sumatera Utara, dan Minangkabau mencari nafkah di pabrik. Sementara di ceruk pulau-pulau kecil, masih hidup komunitas nomaden laut purba (Orang Suku Laut / Orang Sampan) yang menggantungkan seluruh siklus hidupnya (lahir, hidup, dan mati) di atas perahu kayu yang disebut *kajang*.",
        citationIds: ["kpr-ref-sukulaut", "kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-sejarah", "kpr-ref-sukulaut", "kpr-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "kpr-cul-01",
        content: "Kesenian Kepri sangat bernuansa maritim (Tari Zapin pesisir, perahu kolek) dan sastra pantun yang kental dengan nuansa syiar Islam.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "kpr-cul-item-01",
        category: "Teater Tradisional (UNESCO)",
        title: "Mak Yong",
        description: "Seni teater kuno yang memadukan tarian, musik, dan drama lisan (tanpa naskah) dengan tokoh raja-raja mitologi. Awalnya dipertunjukkan di istana, kesenian ini diakui UNESCO sebagai Warisan Lisan Manusia.",
        citationIds: ["kpr-ref-makyong"],
      },
      {
        id: "kpr-cul-item-02",
        category: "Karya Sastra",
        title: "Gurindam Dua Belas",
        description: "Puisi Melayu kuno karya Raja Ali Haji yang berisi nasihat agama (akidah dan tasawuf). Pasal demi pasalnya dipahat pada marmer di sekeliling makam Raja Ali Haji di Pulau Penyengat.",
        citationIds: ["kpr-ref-sejarah"],
      },
      {
        id: "kpr-cul-item-03",
        category: "Seni Tari",
        title: "Tari Zapin (Japin)",
        description: "Tari pergaulan berakar dari Yaman (Arab) yang dibawa oleh pedagang Islam. Menekankan gerak kaki lincah yang mengikuti alunan alat musik gambus dan ketukan marawis.",
        citationIds: ["kpr-ref-wbtb"],
      },
      {
        id: "kpr-cul-item-04",
        category: "Permainan Rakyat",
        title: "Perahu Jong",
        description: "Permainan balap perahu layar mini tak berawak yang digerakkan semata-mata oleh tiupan angin muson, sangat populer di kalangan nelayan Bintan dan Batam saat cuaca sedang tidak mendukung untuk melaut.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    referenceIds: ["kpr-ref-wbtb", "kpr-ref-makyong", "kpr-ref-sejarah"],
  },

  language: {
    introduction: [
      {
        id: "kpr-lang-01",
        content: "Bahasa Melayu dialek Kepulauan Riau (dengan logat 'o' atau 'e' pepet ringan) adalah lingua franca. Di wilayah pelabuhan/bisnis, Bahasa Tionghoa (Hokkien, Teochew) sangat umum terdengar.",
        citationIds: ["kpr-ref-sejarah"],
      }
    ],
    vocabulary: [
      { id: "kpr-voc-01", word: "Cemane / Macam mane", meaning: "Bagaimana (Melayu Kepulauan).", citationIds: ["kpr-ref-sejarah"] },
      { id: "kpr-voc-02", word: "Budak", meaning: "Anak-anak (Sama dengan penggunaan di Malaysia/Singapura).", citationIds: ["kpr-ref-sejarah"] },
      { id: "kpr-voc-03", word: "Teh Obeng", meaning: "Es Teh Manis (Obeng berasal dari pelafalan Hokkien 'O-peng', O=hitam/teh, Peng=es).", citationIds: ["kpr-ref-bps"] },
      { id: "kpr-voc-04", word: "Kopi O", meaning: "Kopi Hitam pekat manis tanpa susu.", citationIds: ["kpr-ref-bps"] },
    ],
    referenceIds: ["kpr-ref-sejarah", "kpr-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "kpr-culi-01",
        content: "Sajian boga bahari (seafood) mendominasi, ditambah dengan kuatnya tradisi Kopitiam khas Selat Malaka (roti bakar, kopi tiam) peninggalan Tionghoa Peranakan.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "kpr-culi-item-01",
        title: "Siput Gonggong",
        description: "Hidangan laut paling ikonik dari Batam/Bintan. Siput laut berlendir dengan cangkang putih yang direbus sederhana, kemudian dagingnya dicungkil menggunakan tusuk gigi lalu dicelup ke saus cabai bawang putih pedas manis.",
        citationIds: ["kpr-ref-wbtb"],
      },
      {
        id: "kpr-culi-item-02",
        title: "Mie Tarempa",
        description: "Mie khas dari Anambas. Berupa mie pipih lebar yang ditumis agak basah (nyemek) berwarna kemerahan, menggunakan suwiran ikan tongkol bumbu pedas, taoge, dan kecap.",
        citationIds: ["kpr-ref-wbtb"],
      },
      {
        id: "kpr-culi-item-03",
        title: "Otak-otak Tanjungpinang",
        description: "Daging ikan tenggiri atau sotong (cumi) yang dihaluskan, dibumbui kari merah pedas, dibungkus daun kelapa (bukan daun pisang), lalu dibakar di atas arang, memiliki tekstur padat berwarna kemerahan.",
        citationIds: ["kpr-ref-wbtb"],
      },
      {
        id: "kpr-culi-item-04",
        title: "Luti Gendang",
        description: "Roti goreng lonjong bertesktur lembut dan garing di luar, berisi abon ikan (abon tongkol) pedas manis. Sangat populer sebagai pendamping kopi di kedai-kedai kopi (kopitiam) Batam.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    referenceIds: ["kpr-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "kpr-bio-01",
        content: "Kehidupan bawah laut (coral reef) di Natuna dan Anambas masih sangat asri (surga selam), serta terdapat populasi mamalia laut pemakan lamun yang terancam punah di pesisir Bintan.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    species: [
      {
        id: "kpr-bio-item-01",
        category: "Fauna Laut (Mamalia)",
        title: "Dugong (Dugong dugon)",
        description: "Sapi laut (duyung) pemakan rumput lamun perairan dangkal, yang masih sering ditemukan di padang lamun sebelah timur laut Pulau Bintan (Trikora). Populasinya kian terdesak lalu lintas kapal komersial.",
        citationIds: ["kpr-ref-bps"],
      },
      {
        id: "kpr-bio-item-02",
        category: "Fauna Reptil",
        title: "Penyu Sisik & Penyu Hijau",
        description: "Secara rutin mendarat dan bertelur di pulau-pulau kecil kosong (Pulau Tambelan, Natuna, Anambas). Konservasi penyu menjadi agenda utama di wilayah perbatasan utara ini.",
        citationIds: ["kpr-ref-bps"],
      },
      {
        id: "kpr-bio-item-03",
        category: "Flora Maskot",
        title: "Sirih (Piper betle)",
        description: "Tanaman merambat yang daunnya menjadi maskot (dan simbol budaya) resmi Provinsi Kepulauan Riau, menggambarkan fungsi penyambutan dan penghormatan adat Tepak Sirih.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "kpr-dest-01",
        content: "Batam dan Bintan menyajikan resor mewah bertaraf internasional dan wisata golf tepi pantai, sementara Natuna/Anambas menawarkan keindahan pulau tropis (laguna biru) yang terisolasi.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    items: [
      {
        id: "kpr-dest-item-01",
        category: "Ikon Modern",
        title: "Jembatan Barelang (Batam)",
        description: "Serangkaian 6 jembatan gantung (Cable-stayed) megah berarsitektur modern yang diprakarsai oleh B.J. Habibie, menghubungkan Pulau Batam, Rempang, dan Galang. Merupakan ikon utama Kota Batam.",
        citationIds: ["kpr-ref-bps"],
      },
      {
        id: "kpr-dest-item-02",
        category: "Sejarah & Kerajaan",
        title: "Pulau Penyengat (Tanjungpinang)",
        description: "Pulau kecil bersejarah yang bisa dicapai dengan perahu pompon. Di sini terdapat Masjid Raya Sultan Riau yang konon putih telurnya digunakan sebagai bahan campuran perekat bangunan.",
        citationIds: ["kpr-ref-sejarah"],
      },
      {
        id: "kpr-dest-item-03",
        category: "Resor Mewah",
        title: "Bintan Resorts (Lagoi)",
        description: "Kawasan terpadu (enclave) wisata mewah di pesisir utara Bintan seluas 23.000 hektar. Memiliki lapangan golf taraf internasional, danau laguna buatan terbesar (Crystal Lagoon) setara 50 kolam renang Olimpiade, dan dikelola khusus melayani wisman dari Singapura.",
        citationIds: ["kpr-ref-bps"],
      },
      {
        id: "kpr-dest-item-04",
        category: "Alam Bahari Terpencil",
        title: "Kepulauan Anambas & Natuna",
        description: "Gugusan pulau tropis berpasir putih mutiara dan berair sangat jernih (menyerupai Maladewa/Maldives). Terkenal dengan Pulau Bawah (resor eksklusif) dan hamparan batu granit raksasa di sepanjang pantainya (Natuna).",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-bps", "kpr-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "kpr-story-01",
        content: "Kepri melestarikan cerita-cerita pahlawan laut Melayu klasik, terutama epos Laksamana yang menavigasi perairan rawan Selat Malaka.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "kpr-story-item-01",
        title: "Hang Tuah dan Hang Jebat",
        description: "Kisah dua pendekar dan laksamana sahabat karib. Hang Tuah merepresentasikan ketaatan buta (loyalitas mutlak) kepada Sultan meski dihukum tak adil, sementara Hang Jebat merepresentasikan pemberontakan membela kebenaran/sahabat ('Raja alim raja disembah, Raja zalim raja disanggah'). Akhirnya mereka saling berduel mematikan.",
        citationIds: ["kpr-ref-sejarah"],
      },
      {
        id: "kpr-story-item-02",
        title: "Misteri Harta Karun Laut Cina Selatan",
        description: "Kisah turun-temurun nelayan tentang karamnya ratusan kapal niaga dari era Dinasti Ming dan VOC di perairan Natuna/Bintan yang sering membuat penemuan harta karun keramik kuno (BMKT) yang dilarang untuk dijarah sembarangan.",
        citationIds: ["kpr-ref-wbtb"],
      }
    ],
    referenceIds: ["kpr-ref-sejarah", "kpr-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "kpr-cont-01",
        content: "Karena lokasinya yang strategis, Batam dan Bintan ditetapkan sebagai Kawasan Perdagangan Bebas dan Pelabuhan Bebas (KPBPB) yang membuatnya dibebaskan dari PPN dan Pajak Impor.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    economy: [
      {
        id: "kpr-cont-02",
        content: "Ekonomi bertumpu kuat pada galangan kapal (shipyard), perakitan elektronik (HP, laptop), minyak dan gas lepas pantai (Natuna), dan arus turis harian (Ferry) dari Singapura-Johor Baru.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    referenceIds: ["kpr-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "kpr-travel-01",
        content: "Ferry laut adalah sarana transportasi utama ('angkot'-nya Kepri). Paspor adalah dokumen wajib bagi banyak warga lokal untuk sering melintasi perbatasan ke negara tetangga.",
        citationIds: ["kpr-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "kpr-travel-02",
        content: "Tinggalkan kebiasaan berbicara keras; orang Melayu Kepri berkomunikasi dengan nada mendayu, santai, dan agak lambat. Saat menyeberang antar pulau menggunakan kapal kecil (pompong), pastikan menggunakan jaket pelampung karena cuaca laut bisa berubah drastis (gelombang tinggi). Jika singgah di kedai kopi, ketahuilah bahwa banyak kedai Tionghoa (khususnya di Batam) yang mungkin menyajikan makanan non-halal, jadi selalu tanyakan 'Kopitiam ini halal tak?' sebelum memesan makan.",
        citationIds: ["kpr-ref-sejarah"],
      }
    ],
    referenceIds: ["kpr-ref-bps", "kpr-ref-sejarah"],
  },

  lastReviewedAt: "2026-07-13T00:07:00Z",
  contentStatus: "draft",
  referenceIds: [
    "kpr-ref-bps",
    "kpr-ref-wbtb",
    "kpr-ref-sejarah",
    "kpr-ref-makyong",
    "kpr-ref-sukulaut"
  ]
};
