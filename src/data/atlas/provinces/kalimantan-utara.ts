import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kalimantanUtaraReferences: ScientificReference[] = [
  {
    id: "klu-ref-bps",
    title: "Provinsi Kalimantan Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kalimantan Utara",
    url: "https://kaltara.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "klu-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kalimantan Utara",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "klu-ref-kayan",
    title: "Kayan Mentarang National Park",
    authors: ["WWF Indonesia"],
    year: 2005,
    publisher: "World Wide Fund for Nature",
    url: "https://www.wwf.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["biodiversity", "destinations", "geography"],
  },
  {
    id: "klu-ref-bulungan",
    title: "Kesultanan Bulungan dan Perang Dunia II di Tarakan",
    authors: ["Magenda, Burhan Djabier"],
    year: 1991,
    publisher: "Cornell University",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Bulungan",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["history", "society"],
  },
  {
    id: "klu-ref-sebatik",
    title: "Border Studies: Sebatik Island",
    authors: ["Eilenberg, Michael"],
    year: 2012,
    publisher: "At the Edges of States",
    url: "https://en.wikipedia.org/wiki/Sebatik_Island",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["kalimantan-utara"],
    topicIds: ["destinations", "contemporary"],
  }
];

export const kalimantanUtaraAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-utara",
  slug: "kalimantan-utara",
  title: "Kalimantan Utara",
  tagline: "Benuanta, Tapal Batas Hijau di Utara Borneo",
  summary: [
    {
      id: "klu-sum-01",
      content: "Sebagai provinsi termuda ('anak bungsu') di daratan Kalimantan yang dimekarkan tahun 2012, Kalimantan Utara (Kaltara) berdiri sebagai tameng perbatasan negara (berbatasan dengan Sabah dan Sarawak, Malaysia). Wilayah ini dikaruniai cadangan migas di Tarakan (yang memicu pertempuran dahsyat di Perang Dunia II), bentang alam perawan Taman Nasional Kayan Mentarang, serta fenomena Pulau Sebatik—satu pulau yang dibelah garis batas dua negara berdaulat.",
      citationIds: ["klu-ref-bps", "klu-ref-sebatik", "klu-ref-bulungan"],
    }
  ],
  quickFacts: [
    { id: "klu-qf-01", label: "Ibu Kota", value: "Tanjung Selor (Kab. Bulungan)", citationIds: ["klu-ref-bps"] },
    { id: "klu-qf-02", label: "Luas Wilayah", value: "75.467,70 km²", citationIds: ["klu-ref-bps"], dataYear: 2024 },
    { id: "klu-qf-03", label: "Populasi", value: "738.163 jiwa", citationIds: ["klu-ref-bps"], dataYear: 2023 },
    { id: "klu-qf-04", label: "Ikon Perbatasan", value: "Pulau Sebatik", citationIds: ["klu-ref-sebatik"] },
    { id: "klu-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["klu-ref-bps"] },
    { id: "klu-qf-06", label: "Gubernur", value: "Zainal Arifin Paliwang", citationIds: ["klu-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "klu-geo-01",
        content: "Didominasi oleh topografi curam perbukitan tinggi menuju perbatasan Serawak/Sabah (Pegunungan Meratus/Iran) dan gugusan pulau migas di pesisir.",
        citationIds: ["klu-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "klu-geo-02",
        content: "Sungai Kayan dan Sungai Sesayap meliuk-liuk membelah hutan perawan seluas puluhan ribu kilometer persegi (Kayan Mentarang) sebelum bermuara di Laut Sulawesi. Di pesisirnya bertebaran pulau-pulau padat penduduk penyuplai ekonomi seperti Tarakan, Bunyu, dan Sebatik. Topografinya yang sangat terisolasi membuat pesawat perintis Pilatus Porter atau Cessna menjadi moda transportasi vital (airbridge) bagi warga pedalaman.",
        citationIds: ["klu-ref-bps", "klu-ref-kayan"],
      }
    ],
    referenceIds: ["klu-ref-bps", "klu-ref-kayan"],
  },

  history: {
    introduction: [
      {
        id: "klu-his-01",
        content: "Tarakan menjadi pijakan awal Perang Pasifik di Indonesia, sementara daratan utamanya dipimpin oleh Kesultanan Bulungan berabad-abad lamanya.",
        citationIds: ["klu-ref-bulungan"],
      }
    ],
    timeline: [
      {
        id: "klu-era-01",
        period: "Abad ke-16 – 1964",
        title: "Kesultanan Bulungan",
        description: "Kesultanan pesisir pelabuhan yang menjembatani perdagangan suku pedalaman Dayak (hasil hutan) dengan Kesultanan Sulu dan Hindia Belanda. Riwayatnya berakhir tragis secara politis pasca-kemerdekaan (Tragedi Bultiken).",
        citationIds: ["klu-ref-bulungan"],
      },
      {
        id: "klu-era-02",
        period: "1942 & 1945",
        title: "Pertempuran Tarakan",
        description: "Pulau Tarakan adalah salah satu lokasi strategis minyak dunia (BPM Belanda). Pada 1942, Jepang menyerang Tarakan sebagai target pertama di Indonesia untuk merampas ladang minyaknya. Pada 1945, pasukan sekutu (Australia) mendarat dalam pertempuran amfibi raksasa untuk merebutnya kembali.",
        citationIds: ["klu-ref-bulungan"],
      },
      {
        id: "klu-era-03",
        period: "1963 – 1966",
        title: "Konfrontasi Ganyang Malaysia",
        description: "Perbatasan Nunukan dan Sebatik menjadi front terdepan pertempuran pasukan sukarelawan Indonesia dengan pasukan Inggris/Malaysia selama masa Konfrontasi.",
        citationIds: ["klu-ref-sebatik"],
      },
      {
        id: "klu-era-04",
        period: "25 Oktober 2012",
        title: "Lahirnya Provinsi Ke-34",
        description: "Pemerintah pusat mensahkan Undang-Undang pemekaran Kaltara dari provinsi induk (Kalimantan Timur) demi memperpendek rentang kendali dan menjaga kedaulatan blok perbatasan (pasca lepasnya Sipadan-Ligitan).",
        citationIds: ["klu-ref-bps"],
      }
    ],
    referenceIds: ["klu-ref-bulungan", "klu-ref-bps", "klu-ref-sebatik"],
  },

  society: {
    introduction: [
      {
        id: "klu-soc-01",
        content: "Masyarakat 'Benuanta' (Kaltara) dibentuk oleh irisan suku adat Dayak perbatasan yang berkerabat dekat dengan Dayak Malaysia, ditengahi masyarakat pesisir Islam.",
        citationIds: ["klu-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "klu-soc-02",
        content: "Garis batas negara seringkali mengaburkan identitas kesukuan pedalaman. Sub-etnis Dayak (seperti Lundayeh dan Kenyah) yang tinggal di dataran tinggi Krayan memiliki kekerabatan darah (keluarga/kawin-mawin) langsung dengan Suku Kelabit/Murut di Sarawak (Malaysia). Di pesisir, suku Tidung (kerabat Melayu/Dayak Muslim) dan suku Bulungan bertahta secara politis, berdampingan damai dengan perantau Bugis (Bone) dan Tionghoa (di Tarakan).",
        citationIds: ["klu-ref-sebatik", "klu-ref-bulungan"],
      }
    ],
    referenceIds: ["klu-ref-bps", "klu-ref-sebatik", "klu-ref-bulungan"],
  },

  culture: {
    introduction: [
      {
        id: "klu-cul-01",
        content: "Festival perahu kerajaan Tidung dan seni ukir raksasa Dayak Kenyah menghidupkan napas estetika provinsi utara ini.",
        citationIds: ["klu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klu-cul-item-01",
        category: "Festival Bahari (Tarakan)",
        title: "Iraw Tengkayu",
        description: "Upacara tradisional suku Tidung (Tengkayu) untuk mensyukuri hasil laut. Puncaknya adalah pelepasan 'Padaw Tuju Dulung' (perahu kayu sakral bermoncong tiga yang dipenuhi sesaji tiga warna: kuning, merah, hijau) ke tengah laut.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-cul-item-02",
        category: "Kriya/Kesenian Dayak",
        title: "Seni Ukir Kenyah & Mandau",
        description: "Suku Dayak Kenyah terkenal sebagai pemahat ukiran kayu (ornamen naga, sulur, anjing aso) paling detil se-Kalimantan, yang digunakan di tameng (perisai) perang maupun tiang rumah panjang betang.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-cul-item-03",
        category: "Tari Kedaton",
        title: "Tari Jepen Bulungan",
        description: "Tari pergaulan berpasangan yang diadaptasi dari tari Zapin Melayu, diiringi musik tingkilan gambus, merepresentasikan keramahan masyarakat pesisir Bulungan menyambut tamu.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-cul-item-04",
        category: "Ritual Panen Pedalaman",
        title: "Irau Aco Lundayeh",
        description: "Festival besar suku Dayak Lundayeh (di dataran tinggi Krayan) untuk mensyukuri panen beras organik Krayan. Ditandai dengan musyawarah adat, tarian massal berbaju kulit kayu, dan memukul beduk raksasa.",
        citationIds: ["klu-ref-wbtb"],
      }
    ],
    referenceIds: ["klu-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "klu-lang-01",
        content: "Di kawasan perbatasan darat, mata uang Ringgit (RM) seringkali lebih 'berbunyi' daripada Rupiah, dan percampuran bahasa melayu setempat sangat cair.",
        citationIds: ["klu-ref-sebatik"],
      }
    ],
    vocabulary: [
      { id: "klu-voc-01", word: "Benuanta", meaning: "Wilayah kita bersama (Moto Provinsi Kaltara).", citationIds: ["klu-ref-bps"] },
      { id: "klu-voc-02", word: "Nda / Nda Ada", meaning: "Tidak / Tidak ada (Khas Tarakan).", citationIds: ["klu-ref-bps"] },
      { id: "klu-voc-03", word: "Ulin", meaning: "Kayu besi endemik yang sangat mahal harganya.", citationIds: ["klu-ref-bps"] },
      { id: "klu-voc-04", word: "Paggun", meaning: "Tunggu sebentar (Suku Tidung).", citationIds: ["klu-ref-wbtb"] },
    ],
    referenceIds: ["klu-ref-bps", "klu-ref-sebatik", "klu-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "klu-culi-01",
        content: "Geografi Tarakan sebagai pulau 'kepiting' berpadu dengan tradisi pesisir Bulungan melahirkan dominasi olahan sari laut kelas premium.",
        citationIds: ["klu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klu-culi-item-01",
        title: "Kepiting Soka Tarakan",
        description: "Tarakan dikenal mengekspor ribuan ton kepiting bakau (crab). Variannya yang paling fenomenal adalah Kepiting Soka (Cangkang Lunak/Soft Shell Crab) yang digoreng tepung krispi lada hitam, di mana cangkangnya bisa dimakan utuh bagai kerupuk.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-culi-item-02",
        title: "Tudai (Kerang Darah Bulungan)",
        description: "Kerang berukuran besar berkulit tebal berwarna hitam kemerahan, sering ditemukan di pesisir Bulungan. Direbus dengan sambal kacang nanas atau dimasak tumis bumbu pedas manis.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-culi-item-03",
        title: "Sate Temburung",
        description: "Sate yang bukan terbuat dari daging ayam/sapi, melainkan dari daging hewan sejenis siput/kerang laut (Temburung) berbentuk panjang. Teksturnya kenyal mirip cumi-cumi dan dibakar menggunakan bumbu kacang.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-culi-item-04",
        title: "Nasi Subut & Beras Krayan",
        description: "Nasi Subut (Tidung) dicampur jagung dan ubi jalar ungu sehingga warnanya keunguan. Sedangkan Beras Adan Krayan (Dayak Lundayeh) adalah beras organik pegunungan yang konon mensuplai meja makan Kesultanan Brunei karena pulen dan aromatik.",
        citationIds: ["klu-ref-wbtb"],
      }
    ],
    referenceIds: ["klu-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "klu-bio-01",
        content: "Garis batas negara utara-hulu menyimpan populasi endemik kerdil yang tersisa dan salah satu cadangan blok hutan pegunungan perawan terakhir di Kalimantan.",
        citationIds: ["klu-ref-kayan"],
      }
    ],
    species: [
      {
        id: "klu-bio-item-01",
        category: "Fauna Endemik Kritis",
        title: "Gajah Kerdil Borneo (Elephas maximus borneensis)",
        description: "Sub-spesies gajah Asia (Pygmy Elephant) yang bentuk tubuhnya lebih bulat dan gadingnya lurus, ukurannya jauh lebih kerdil dari Gajah Sumatera. Hewan ini sangat pemalu dan bermigrasi di batas wilayah Sebuku-Nunukan, keluar masuk Malaysia.",
        citationIds: ["klu-ref-kayan"],
      },
      {
        id: "klu-bio-item-02",
        category: "Predator Hutan",
        title: "Macan Dahan Kalimantan (Neofelis diardi borneensis)",
        description: "Kucing liar terbesar di Kalimantan, predator soliter yang corak kulitnya mirip gumpalan awan/dahan pohon besar. Banyak dijumpai secara kamera jebak (trap) di dalam gelapnya TN Kayan Mentarang.",
        citationIds: ["klu-ref-kayan"],
      },
      {
        id: "klu-bio-item-03",
        category: "Flora Kanopi",
        title: "Berbagai Spesies Anggrek Hitam & Meranti Hibrida",
        description: "Hutan Kayan Mentarang masih menyimpan pohon dipterokarpa (meranti) purba berusia ratusan tahun yang kanopinya menyelimuti lantai hutan dalam kegelapan parsial.",
        citationIds: ["klu-ref-bps"],
      }
    ],
    referenceIds: ["klu-ref-kayan", "klu-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "klu-dest-01",
        content: "Kaltara tidak untuk turis instan. Anda memerlukan uang saku besar (sewa perintis/speedboat) untuk mencapai keajaiban geopolitik atau konservasi.",
        citationIds: ["klu-ref-sebatik"],
      }
    ],
    items: [
      {
        id: "klu-dest-item-01",
        category: "Geopolitik 2 Negara",
        title: "Pulau Sebatik (Rumah Dua Negara)",
        description: "Sebuah pulau di Kabupaten Nunukan yang bagian selatannya milik Indonesia dan utaranya milik Malaysia (Tawau). Fenomena unik terjadi pada 'Rumah Patok 3': di mana ruang tamu/teras rumah berada di wilayah Indonesia, sementara dapur/toiletnya secara hukum masuk teritorial Malaysia.",
        citationIds: ["klu-ref-sebatik"],
      },
      {
        id: "klu-dest-item-02",
        category: "Ekowisata Hutan Perawan",
        title: "Taman Nasional Kayan Mentarang",
        description: "Kawasan lindung trans-batas terbesar (1,3 juta hektar). Tak ada jalan aspal. Mengunjunginya berarti menyusuri hulu riam sungai ekstrim dengan perahu ketinting atau terbang menggunakan pesawat Pilatus berkapasitas 8 orang.",
        citationIds: ["klu-ref-kayan"],
      },
      {
        id: "klu-dest-item-03",
        category: "Pesisir Nostalgia",
        title: "Pantai Amal (Tarakan)",
        description: "Bukan pantai berpasir putih maldivian, melainkan pantai berpasir coklat terang yang membentang menawan. Menjadi sentra bersantai warga Tarakan untuk menyantap makanan laut dan Kapah (kerang) bakar manis.",
        citationIds: ["klu-ref-bps"],
      },
      {
        id: "klu-dest-item-04",
        category: "Desa Wisata Adat",
        title: "Desa Setulang (Malinau)",
        description: "Desa komunitas Dayak Kenyah Oma’ Lung yang secara swadaya dan heroik melindungi 5.300 hektar hutan adatnya (Tane’ Olen) dari serbuan perusahaan HPH, menjadikan hutannya sebagai laboratorium riset iklim dunia.",
        citationIds: ["klu-ref-kayan"],
      }
    ],
    referenceIds: ["klu-ref-sebatik", "klu-ref-kayan", "klu-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "klu-story-01",
        content: "Suku Tidung meyakini perlunya memanjatkan doa pada penguasa perairan pedalaman setiap kali musim memanen kelimpahan.",
        citationIds: ["klu-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "klu-story-item-01",
        title: "Mitos Padaw Tuju Dulung",
        description: "Keyakinan masa lalu suku Tidung Pesisir yang meyakini asal usul dan kelancaran rezeki dititipkan pada lautan. Maka mereka menciptakan kapal berhaluan 7 (tuju) sebagai sarana mistis membayar nazar/rasa syukur kepada pencipta.",
        citationIds: ["klu-ref-wbtb"],
      },
      {
        id: "klu-story-item-02",
        title: "Batu Ilas Kematian",
        description: "Di dalam goa-goa perbukitan pegunungan Muller yang sulit dijangkau, peneliti purbakala sering menemukan 'Ilas' (lukisan gua) dan tempayan misterius berisi tulang nenek moyang suku Dayak Kayan berumur ribuan tahun.",
        citationIds: ["klu-ref-kayan"],
      }
    ],
    referenceIds: ["klu-ref-wbtb", "klu-ref-kayan"],
  },

  contemporary: {
    introduction: [
      {
        id: "klu-cont-01",
        content: "Kaltara menyimpan ambisi 'energi bersih' terbesar dunia melalui bendungan mega proyek kelistrikan hidrografi (PLTA).",
        citationIds: ["klu-ref-bps"],
      }
    ],
    economy: [
      {
        id: "klu-cont-02",
        content: "Gebrakan raksasa ekonomi Kaltara di abad ke-21 adalah Proyek PLTA Sungai Kayan (Kayan Cascade) dan Kawasan Industri Hijau Indonesia (KIHI) di Tanah Kuning. Proyek ini diproyeksikan mensuplai pasokan listrik hijau raksasa ribuan megawatt untuk smelter aluminium dan baterai EV, menyulap pedalaman hutan menjadi Silicon Valley energi terbarukan di timur Asia.",
        citationIds: ["klu-ref-bps"],
      }
    ],
    referenceIds: ["klu-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "klu-travel-01",
        content: "Tiga moda utama bertualang di Benuanta: Pesawat Jet (Tarakan), Speedboat (Tanjung Selor), dan Pesawat Perintis (Krayan/Malinau).",
        citationIds: ["klu-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "klu-travel-02",
        content: "Bepergian menggunakan speedboat (mesin 200 PK x 2) dari Tarakan ke Tanjung Selor sangat cepat namun menegangkan; selalu taati prosedur keamanan jaket pelampung (life-jacket). Saat di wilayah pedalaman perbatasan, wajar jika Anda tidak mendapatkan sinyal seluler Indonesia namun langsung tersambung (roaming) ke jaringan operator seluler Malaysia. Saat berkunjung ke Desa Adat Kenyah, dilarang keras berkata kasar atau berteriak/tertawa menghina saat melihat telinga panjang (telingaan aru) warga sesepuh Dayak.",
        citationIds: ["klu-ref-kayan"],
      }
    ],
    referenceIds: ["klu-ref-bps", "klu-ref-kayan"],
  },

  lastReviewedAt: "2026-07-13T00:28:00Z",
  contentStatus: "draft",
  referenceIds: [
    "klu-ref-bps",
    "klu-ref-wbtb",
    "klu-ref-kayan",
    "klu-ref-bulungan",
    "klu-ref-sebatik"
  ]
};
