import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kalimantanTengahReferences: ScientificReference[] = [
  {
    id: "klt-ref-bps",
    title: "Provinsi Kalimantan Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kalimantan Tengah",
    url: "https://kalteng.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "klt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kalimantan Tengah",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "klt-ref-tanjungputing",
    title: "Tanjung Puting National Park: Orangutan Conservation",
    authors: ["Galdikas, Biruté Mary"],
    year: 1995,
    publisher: "Orangutan Foundation International",
    url: "https://orangutan.org/",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "klt-ref-tjilikriwut",
    title: "Tjilik Riwut dan Sejarah Pembentukan Kalimantan Tengah",
    authors: ["Riwut, Nila"],
    year: 2007,
    publisher: "Pusaka",
    url: "https://id.wikipedia.org/wiki/Tjilik_Riwut",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["history", "society"],
  },
  {
    id: "klt-ref-kaharingan",
    title: "Kaharingan: Agama Asli Suku Dayak",
    authors: ["Fridolin, Ukur"],
    year: 1971,
    publisher: "Gunung Mulia",
    url: "https://id.wikipedia.org/wiki/Kaharingan",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-tengah"],
    topicIds: ["culture", "society"],
  }
];

export const kalimantanTengahAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-tengah",
  slug: "kalimantan-tengah",
  title: "Kalimantan Tengah",
  tagline: "Bumi Tambun Bungai, Paru-Paru Hutan Hujan",
  summary: [
    {
      id: "klt-sum-01",
      content: "Sebagai provinsi terluas ke-2 di Indonesia (setelah Papua dimekarkan), Kalimantan Tengah (Kalteng) menyimpan hamparan hutan hujan, lahan gambut raksasa, dan perairan sungai pedalaman yang tak berujung. Ibu kotanya, Palangka Raya, adalah kota impian yang awalnya digagas oleh Soekarno sebagai calon ibu kota negara Indonesia. Bumi 'Tambun Bungai' ini adalah jantung filosofi kehidupan suku Dayak (khususnya Dayak Ngaju) dan merupakan salah satu destinasi konservasi orangutan paling dihormati di dunia, Tanjung Puting.",
      citationIds: ["klt-ref-bps", "klt-ref-tjilikriwut", "klt-ref-tanjungputing"],
    }
  ],
  quickFacts: [
    { id: "klt-qf-01", label: "Ibu Kota", value: "Palangka Raya", citationIds: ["klt-ref-bps"] },
    { id: "klt-qf-02", label: "Luas Wilayah", value: "153.564,50 km²", citationIds: ["klt-ref-bps"], dataYear: 2024 },
    { id: "klt-qf-03", label: "Populasi", value: "2.741.000 jiwa", citationIds: ["klt-ref-bps"], dataYear: 2023 },
    { id: "klt-qf-04", label: "Ikon Satwa", value: "Orangutan (Pongo pygmaeus)", citationIds: ["klt-ref-bps"] },
    { id: "klt-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["klt-ref-bps"] },
    { id: "klt-qf-06", label: "Gubernur", value: "Sugianto Sabran", citationIds: ["klt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "klt-geo-01",
        content: "Geografi Kalteng adalah representasi ekstrim dari rawa gambut pesisir selatan yang perlahan menanjak menjadi barisan pegunungan curam di perbatasan utara.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "klt-geo-02",
        content: "Sebelas sungai besar (seperti Barito, Kahayan, dan Katingan) membelah dataran rendah rawa dan gambut tropis (peatland). Lanskap pesisir di selatan sangat berlumpur (memiliki hutan mangrove/nipah yang tebal). Makin ke utara (menuju Pegunungan Schwaner dan Muller), medannya menjadi perbukitan batu dan hutan primer purba, tempat menjulangnya Bukit Raya (Gunung tertinggi di Kalimantan wilayah Indonesia).",
        citationIds: ["klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "klt-his-01",
        content: "Evolusi Kalimantan Tengah berakar pada penyatuan suku Dayak dan ambisi nasional pasca-kemerdekaan RI.",
        citationIds: ["klt-ref-tjilikriwut"],
      }
    ],
    timeline: [
      {
        id: "klt-era-01",
        period: "1894",
        title: "Perjanjian Tumbang Anoi",
        description: "Ribuan pemimpin adat Suku Dayak dari seluruh penjuru Pulau Kalimantan berkumpul di Desa Tumbang Anoi (Kalteng). Mereka menyepakati resolusi historis untuk menghentikan tradisi 'Mengayau' (memotong kepala musuh), perbudakan adat, dan memulai era perdamaian ('Huma Betang').",
        citationIds: ["klt-ref-tjilikriwut"],
      },
      {
        id: "klt-era-02",
        period: "17 Juli 1957",
        title: "Pemekaran Provinsi Baru",
        description: "Berkat perjuangan panjang tokoh Dayak, Tjilik Riwut, Kalteng resmi mekar dari Kalimantan Selatan, mewadahi aspirasi otonomi Suku Dayak.",
        citationIds: ["klt-ref-tjilikriwut"],
      },
      {
        id: "klt-era-03",
        period: "1957",
        title: "Peletakan Batu Pertama Palangka Raya",
        description: "Presiden Soekarno meletakkan batu pertama ibu kota baru Kalteng, Palangka Raya. Kota ini dibangun di tengah hutan perawan dengan tata kota bintang yang futuristik, sedari awal diproyeksikan Bung Karno sebagai calon Ibu Kota Negara RI di masa depan (meskipun wacana itu memudar di era Orde Baru).",
        citationIds: ["klt-ref-tjilikriwut"],
      },
      {
        id: "klt-era-04",
        period: "1995 – 1999",
        title: "Proyek Lahan Gambut (PLG)",
        description: "Pemerintah Orde Baru mencanangkan Mega Proyek Lahan Gambut 1 Juta Hektar untuk cetak sawah. Proyek ini gagal total, mengeringkan jutaan hektar kubah gambut yang memicu bencana kebakaran hutan paling merusak (Karhutla 1997) dan mengubah ekologi Kalteng secara permanen.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-tjilikriwut", "klt-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "klt-soc-01",
        content: "Masyarakat Kalteng memiliki keanekaragaman etnis yang sangat inklusif, mendasarkan hidup pada filosofi toleransi tinggi 'Huma Betang' (Rumah Panjang).",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "klt-soc-02",
        content: "Suku asli dominan adalah Dayak Ngaju (mendiami daerah aliran Kahayan/Kapuas) dan Dayak Ma'anyan (di pesisir Barito Timur). Mayoritas memeluk Kristen Protestan/Katolik, namun banyak pula yang memeluk Islam. Secara spesifik, ribuan suku Dayak Kalteng masih merawat agama adat/asli mereka: Kaharingan (diakui resmi negara sebagai cabang agama Hindu). Kelompok pendatang (Banjar, Madura, Jawa Transmigran) berakulturasi kuat pada sentra-sentra ekonomi tambang dan perkebunan sawit.",
        citationIds: ["klt-ref-kaharingan", "klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-kaharingan", "klt-ref-bps", "klt-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "klt-cul-01",
        content: "Budaya Kalteng memelihara ritual leluhur animistik/dinamistik yang kompleks, terutama terkait perlakuan terhadap arwah yang telah meninggal.",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klt-cul-item-01",
        category: "Ritual Puncak Kematian",
        title: "Upacara Tiwah",
        description: "Ritual pembersihan dan pemindahan tulang belulang jenazah (yang sudah lama dimakamkan) dari liang lahat menuju sandung (rumah kecil dari kayu ulin). Upacara sakral Kaharingan ini bisa berlangsung sebulan penuh dengan mengorbankan ratusan sapi/babi/kerbau.",
        citationIds: ["klt-ref-kaharingan"],
      },
      {
        id: "klt-cul-item-02",
        category: "Senjata Pusaka",
        title: "Mandau",
        description: "Parang khas Dayak berbentuk asimetris tajam, dilengkapi dengan pisau kecil penyayat (raut) pada sarungnya (kumpang). Mandau pusaka seringkali bertatahkan perak/tembaga dan dihiasi helaian rambut di gagangnya.",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-cul-item-03",
        category: "Arsitektur Kebersamaan",
        title: "Rumah Huma Betang",
        description: "Rumah panggung kayu sangat panjang (bisa mencapai 150 meter) peninggalan Suku Dayak. Di masa lalu, satu Betang bisa dihuni belasan hingga puluhan kepala keluarga, mencerminkan sifat gotong royong dan kesetaraan tanpa kelas sosial.",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-cul-item-04",
        category: "Tarian Mistis / Pengobatan",
        title: "Tari Balean Dadas & Wadian",
        description: "Tarian/ritual Suku Dayak Ma'anyan (Barito Timur) di mana para 'Wadian' (dukun perempuan/laki-laki) menggunakan gelang kuningan di tangan untuk menari dan mengobati orang sakit.",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    referenceIds: ["klt-ref-wbtb", "klt-ref-kaharingan"],
  },

  language: {
    introduction: [
      {
        id: "klt-lang-01",
        content: "Sebagai provinsi pelbagai etnis Dayak, Bahasa Dayak Ngaju ('Basa Sangiang' untuk upacara ritual) menjadi lingua franca di ibu kota dan pelosok pedalaman.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "klt-voc-01", word: "Isen Mulang", meaning: "Pantang Mundur (Semboyan Kalteng).", citationIds: ["klt-ref-wbtb"] },
      { id: "klt-voc-02", word: "Kilen Ampi?", meaning: "Apa kabar? (Dayak Ngaju).", citationIds: ["klt-ref-bps"] },
      { id: "klt-voc-03", word: "Aku / Ikau", meaning: "Saya / Kamu (Dayak Ngaju).", citationIds: ["klt-ref-bps"] },
      { id: "klt-voc-04", word: "Buli", meaning: "Pulang.", citationIds: ["klt-ref-bps"] },
    ],
    referenceIds: ["klt-ref-bps", "klt-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "klt-culi-01",
        content: "Kuliner Kalteng sangat mengandalkan resep hutan: rotan muda manis, umbi-umbian purba, dan fermentasi daging liar sebagai sumber protein.",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klt-culi-item-01",
        title: "Juhu Singkah (Sayur Rotan)",
        description: "Hidangan unik Suku Dayak Ngaju. Bagian dalam (umbut) rotan muda bertekstur krispi dimasak berkuah kuning/asam, dicampur dengan ikan lais atau baung. Rasanya unik, kombinasi gurih, asam, dan sedikit pahit eksotis.",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-culi-item-02",
        title: "Wadi",
        description: "Cara tradisional Suku Dayak menyimpan bahan makanan. Ikan (atau daging babi/sapi) dilumuri dengan beras sangrai yang ditumbuk kasar (samu), lalu difermentasi dalam toples/guci berhari-hari. Rasanya asin, sedikit asam, dengan aroma fermentasi (acquired taste).",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-culi-item-03",
        title: "Kalumpe (Karuang)",
        description: "Mirip dengan sayur daun singkong, namun dalam resep Dayak Ma'anyan daun singkong ditumbuk ekstra halus hingga menjadi lumatan kecil, lalu dimasak dengan terong pipit dan air kaldu santan.",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-culi-item-04",
        title: "Bangamat (Kelelawar Buah)",
        description: "Daging kelelawar buah berukuran besar (kalong/megabat) yang ditangkap dari hutan, dibersihkan sayapnya, lalu direbus atau dimasak kuah (Juhu). Ini adalah santapan protein tinggi yang sangat diminati (biasanya non-halal).",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    referenceIds: ["klt-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "klt-bio-01",
        content: "Keberadaan ekosistem gambut (peat-swamp) dan hutan tropis dataran rendah merupakan benteng terakhir mamalia terancam punah Borneo.",
        citationIds: ["klt-ref-tanjungputing"],
      }
    ],
    species: [
      {
        id: "klt-bio-item-01",
        category: "Fauna Endemik & Maskot Global",
        title: "Orangutan Kalimantan (Pongo pygmaeus)",
        description: "Kalteng (TN Tanjung Puting dan Sabangau) adalah habibat terbesar kera besar Asia yang luar biasa cerdas ini. Mereka sangat terancam oleh deforestasi (pembukaan sawit) dan kebakaran gambut.",
        citationIds: ["klt-ref-tanjungputing"],
      },
      {
        id: "klt-bio-item-02",
        category: "Fauna Misterius",
        title: "Kucing Merah (Catopuma badia)",
        description: "Kucing liar endemik Kalimantan yang sangat langka dan sulit ditemui, hidup menyendiri di pedalaman hutan primer Kalteng.",
        citationIds: ["klt-ref-bps"],
      },
      {
        id: "klt-bio-item-03",
        category: "Flora Kanivora",
        title: "Kantong Semar (Nepenthes boschiana)",
        description: "Tanaman pemakan serangga karnivora yang menjulur (epifit). Habitatnya tersebar luas di lahan gambut asam dan perbukitan. Banyak juga masyarakat adat menjadikannya mangkuk alami untuk menanak nasi ketan kelapa.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-tanjungputing", "klt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "klt-dest-01",
        content: "Daya tarik wisata Kalteng bukanlah modernitas mal atau pasir putih, melainkan perjalanan lambat membelah rimbanya kalimantan.",
        citationIds: ["klt-ref-tanjungputing"],
      }
    ],
    items: [
      {
        id: "klt-dest-item-01",
        category: "Ekowisata Konservasi Dunia",
        title: "Taman Nasional Tanjung Puting",
        description: "Sebuah kawasan taman nasional rawa-hutan pesisir. Wisatawan menyewa 'Klotok' (kapal kayu 2 tingkat beratap) selama 3-4 hari untuk menyusuri Sungai Sekonyer yang berair hitam teh pekat. Kapal ini menjadi hotel terapung untuk melihat Orangutan, Bekantan, dan kunang-kunang. Camp Leakey di dalamnya didirikan oleh primatolog legendaris Biruté Galdikas.",
        citationIds: ["klt-ref-tanjungputing"],
      },
      {
        id: "klt-dest-item-02",
        category: "Ikon Tata Kota & Sejarah",
        title: "Jembatan Kahayan & Bundaran Besar",
        description: "Di Palangka Raya, desain kotanya dibangun dengan sumbu presisi. Bundaran Besar merupakan titik nol KM (jantung kota), sementara Jembatan Kahayan melintang megah warna merah di atas sungai selebar ratusan meter.",
        citationIds: ["klt-ref-bps"],
      },
      {
        id: "klt-dest-item-03",
        category: "Lahan Gambut Ekstrim",
        title: "Taman Nasional Sebangau",
        description: "Sangat dekat dengan Palangka Raya, TN Sebangau menyajikan rawa gambut utuh alami (yang lolos dari PLG). Air sungainya hitam kemerahan akibat tingginya kandungan asam tannin, dan menaiki kelotok di sungai mungil ini ibarat masuk ke era Jurassic.",
        citationIds: ["klt-ref-bps"],
      },
      {
        id: "klt-dest-item-04",
        category: "Petualangan Ekspedisi Atap Kalimantan",
        title: "Taman Nasional Bukit Baka Bukit Raya",
        description: "Gunung Bukit Raya (2.278 mdpl) adalah titik tertinggi Pulau Kalimantan di bagian wilayah Indonesia. Merupakan bagian dari ekspedisi 7 Summits Indonesia, trek pendakiannya terkenal dipenuhi lintah (pacet) gajah dan hutan lebat nir-peta.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-tanjungputing", "klt-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "klt-story-01",
        content: "Hikayat kepahlawanan Tambun dan Bungai meletakkan dasar nama kebanggaan wilayah Kalteng ('Bumi Tambun Bungai').",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "klt-story-item-01",
        title: "Legenda Tambun & Bungai",
        description: "Mereka adalah dua sosok pemuda Dayak kembar/saudara sakti mandraguna di masa purba yang terkenal bijaksana, gagah berani, pantang menyerah, dan memiliki kemampuan mistis. Epos kedua pahlawan ini menjadi simbol keberanian, pembela kaum yang lemah, serta sifat asli orang Dayak Ngaju.",
        citationIds: ["klt-ref-wbtb"],
      },
      {
        id: "klt-story-item-02",
        title: "Hantu Kepala Anjing (Panglima Burung)",
        description: "Panglima Burung adalah sosok mitologis (bukan sekadar legenda) panglima perang Suku Dayak yang gaib, hidup bersatu dengan alam. Ia dipercaya hanya akan turun wujud saat masyarakat Dayak merasa sangat terancam (dipercaya turun saat tragedi konflik etnis di era 2000-an awal).",
        citationIds: ["klt-ref-wbtb"],
      }
    ],
    referenceIds: ["klt-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "klt-cont-01",
        content: "Kalteng modern adalah arena tarik menarik antara ekspansi perkebunan korporasi (Sawit) dengan ambisi konservasi karbon dunia.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "klt-cont-02",
        content: "Kalimantan Tengah merupakan provinsi dengan angka ekspansi perkebunan kelapa sawit tertinggi, dibarengi dengan program lumbung pangan baru 'Food Estate' di Kapuas-Pulang Pisau. Ini mendatangkan investasi besar, tetapi memicu polemik masif terkait kerusakan gambut permanen dan kebakaran lahan menahun (Karhutla) yang asapnya kerap mengganggu stabilitas regional negara-negara ASEAN.",
        citationIds: ["klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "klt-travel-01",
        content: "Menjelajahi Kalteng ibarat ekspedisi Amazon di Asia. Waktu terasa melambat, bergantung pada pasang surut sungai dan cuaca basah.",
        citationIds: ["klt-ref-tanjungputing"],
      }
    ],
    etiquette: [
      {
        id: "klt-travel-02",
        content: "Pusat masuk mancanegara justru berada di Pangkalan Bun (Bandara Iskandar) di pesisir barat karena magnet Tanjung Puting, bukan Palangka Raya. Saat menginap 3D2N di Klotok Sekonyer, dengarkan setiap instruksi kelasi/nahkoda (terutama tentang larangan memberi makan orangutan liar). Jangan pernah membuang sesuatu ke rawa hitam, dan saat musim kemarau tebal asap (September-Oktober), persiapkan masker medis/N95 setiap saat.",
        citationIds: ["klt-ref-tanjungputing", "klt-ref-bps"],
      }
    ],
    referenceIds: ["klt-ref-tanjungputing", "klt-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:26:00Z",
  contentStatus: "draft",
  referenceIds: [
    "klt-ref-bps",
    "klt-ref-wbtb",
    "klt-ref-tanjungputing",
    "klt-ref-tjilikriwut",
    "klt-ref-kaharingan"
  ]
};
