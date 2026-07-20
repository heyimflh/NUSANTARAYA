import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const malukuReferences: ScientificReference[] = [
  {
    id: "mal-ref-bps",
    title: "Provinsi Maluku Dalam Angka 2024",
    authors: ["BPS Provinsi Maluku"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Maluku",
    url: "https://maluku.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "mal-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Maluku",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "mal-ref-banda",
    title: "Banda Islands: The Spice Islands",
    authors: ["Loth, Vincent C."],
    year: 1995,
    publisher: "Cakalele",
    url: "https://id.wikipedia.org/wiki/Kepulauan_Banda",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["maluku"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "mal-ref-pela",
    title: "Pela and Gandong: Alliance System in Central Maluku",
    authors: ["Bartels, Dieter"],
    year: 1977,
    publisher: "Cornell University",
    url: "https://id.wikipedia.org/wiki/Pela",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["society", "history"],
  },
  {
    id: "mal-ref-wallacea",
    title: "Ecology of the Indonesian Seas: Maluku",
    authors: ["Tomascik, Tomas"],
    year: 1997,
    publisher: "Periplus Editions",
    url: "https://en.wikipedia.org/wiki/Banda_Sea",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["biodiversity", "geography"],
  }
];

export const malukuAtlas: ProvinceAtlas = {
  provinceId: "maluku",
  slug: "maluku",
  title: "Maluku",
  tagline: "Bumi Raja-Raja, Titik Nol Jalur Rempah Dunia",
  summary: [
    {
      id: "mal-sum-01",
      content: "Jauh sebelum rempah menjadi emas yang memicu pelayaran global, kepulauan Maluku telah bertahta di atas Laut Banda sebagai The Spice Islands sejati. Beribu pulau mungil vulkanik dan atol (Ambon, Seram, Banda, Kei, Aru, Tanimbar) melahirkan pelaut tangguh, lagu-lagu persaudaraan yang menggetarkan (Pela Gandong), dan panggung sejarah berdarah monopoli VOC (Pembantaian Banda 1621). Meski pernah koyak oleh tragedi komunal (1999), Maluku hari ini kembali bernyanyi sebagai lumbung ikan nasional dan surga perawan pariwisata laut dalam (deep sea diving).",
      citationIds: ["mal-ref-bps", "mal-ref-banda", "mal-ref-pela"],
    }
  ],
  quickFacts: [
    { id: "mal-qf-01", label: "Ibu Kota", value: "Ambon", citationIds: ["mal-ref-bps"] },
    { id: "mal-qf-02", label: "Luas Wilayah Daratan", value: "46.150,92 km²", citationIds: ["mal-ref-bps"], dataYear: 2024 },
    { id: "mal-qf-03", label: "Populasi", value: "1.905.772 jiwa", citationIds: ["mal-ref-bps"], dataYear: 2023 },
    { id: "mal-qf-04", label: "Laut Utama", value: "Laut Banda (Laut terdalam di Indonesia)", citationIds: ["mal-ref-wallacea"] },
    { id: "mal-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["mal-ref-bps"] },
    { id: "mal-qf-06", label: "Gubernur", value: "Sadali Ie (Pj.)", citationIds: ["mal-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "mal-geo-01",
        content: "Provinsi yang 90% wilayahnya adalah air, di mana pulau-pulau tersusun membengkok seperti bulan sabit di atas palung laut terdalam.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "mal-geo-02",
        content: "Geografi Maluku didominasi oleh perairan Laut Banda dan Laut Seram. Daratan-daratan besarnya (Pulau Seram dan Pulau Buru) dipenuhi hutan hujan tropis lebat yang belum terjamah, sementara pulau-pulau kecilnya (Ambon, Banda Neira) adalah puncak-puncak gunung api vulkanik yang mencuat vertikal dari dasar laut. Lebih ke selatan (Kei, Aru, Tanimbar), lanskap berubah menjadi kepulauan karang koral putih yang datar dan dikelilingi laut dangkal (paparan Sahul) yang sangat jernih.",
        citationIds: ["mal-ref-bps", "mal-ref-wallacea"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-wallacea"],
  },

  history: {
    introduction: [
      {
        id: "mal-his-01",
        content: "Kepulauan inilah alasan mengapa Christopher Columbus salah arah ke Amerika, dan mengapa bangsa Eropa menjajah Nusantara.",
        citationIds: ["mal-ref-banda"],
      }
    ],
    timeline: [
      {
        id: "mal-era-01",
        period: "Abad ke-15 – 16",
        title: "Pusat Perdagangan Rempah Dunia",
        description: "Pedagang Arab, Tiongkok, dan Eropa (Portugis) berlomba mencapai Maluku (terutama Banda) yang saat itu merupakan satu-satunya tempat di planet bumi yang ditumbuhi pohon Pala (Nutmeg) dan Cengkeh (Clove).",
        citationIds: ["mal-ref-banda"],
      },
      {
        id: "mal-era-02",
        period: "1621",
        title: "Genosida Kepulauan Banda oleh VOC",
        description: "Gubernur Jenderal Jan Pieterszoon Coen (JP Coen) memimpin pembantaian mengerikan terhadap hampir seluruh penduduk asli Kepulauan Banda demi menguasai mutlak monopoli Pala dunia, menggantikan mereka dengan budak pekerja dari luar pulau.",
        citationIds: ["mal-ref-banda"],
      },
      {
        id: "mal-era-03",
        period: "1817",
        title: "Pemberontakan Kapitan Pattimura",
        description: "Thomas Matulessy (Pattimura) memimpin rakyat Saparua dan merebut Benteng Duurstede dari tangan Belanda. Perlawanan gigih ini akhirnya dipatahkan dengan eksekusi gantung terhadap Pattimura di Ambon.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-era-04",
        period: "1999 – 2002",
        title: "Konflik Sektarian Maluku",
        description: "Tragedi kemanusiaan (kerusuhan bernuansa agama Islam-Kristen) meledak di Ambon dan merambat ke pulau lain. Konflik ini berakhir damai melalui Perjanjian Malino II (2002), di mana kedua pihak sepakat meletakkan senjata dan kembali merajut persaudaraan.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    referenceIds: ["mal-ref-banda", "mal-ref-wbtb", "mal-ref-pela"],
  },

  society: {
    introduction: [
      {
        id: "mal-soc-01",
        content: "Masyarakat Maluku bersuara sangat lantang, namun memiliki ikatan toleransi darah (Pela Gandong) yang tidak dapat dipatahkan oleh sejarah.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    socialStructure: [
      {
        id: "mal-soc-02",
        content: "Maluku dihuni oleh kelompok etnis kepulauan yang beragam: Ambon (dominan), Alifuru (suku pedalaman Seram pelindung hutan), serta suku-suku di Kei dan Tanimbar. Mayoritas populasi beragama Kristen Protestan dan Islam dengan rasio yang hampir seimbang. Fondasi sosial terkuat mereka adalah 'Pela Gandong'—perjanjian persaudaraan sakral sejak zaman leluhur antara desa Kristen dan desa Islam. Jika sebuah desa Kristen membangun gereja, desa Islam yang menjadi 'Pela'-nya wajib membantu membangun, begitu pula sebaliknya (membangun Masjid).",
        citationIds: ["mal-ref-pela", "mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-pela", "mal-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "mal-cul-01",
        content: "Lompatan perang pedang yang beringas dari Cakalele akan selalu ditenangkan oleh irama merdu nyanyian paduan suara yang harmoni.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mal-cul-item-01",
        category: "Tarian Perang Magis",
        title: "Tari Cakalele",
        description: "Tari kebesaran dan tarian perang pria Maluku. Penari memegang parang (salawaku/perisai) dan menari dengan gerakan mata melotot dan lompatan agresif layaknya kerasukan roh kapitan leluhur, diiringi tabuhan keras tifa dan tiupan kerang raksasa (Tahuri).",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-02",
        category: "Atraksi Klenik Kuno",
        title: "Bambu Gila (Bulu Gila)",
        description: "Pertunjukan supranatural di mana tujuh pria dewasa berusaha menahan sebatang bambu panjang yang telah dimantrai oleh seorang dukun (pawang) menggunakan asap kemenyan. Bambu tersebut akan bergerak liar seakan memiliki nyawa dan kekuatan banteng, mengombang-ambingkan ketujuh penahannya.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-03",
        category: "Musikalitas Vokal",
        title: "Ambon City of Music (UNESCO)",
        description: "Orang Ambon diakui dunia (UNESCO 2019) karena talenta menyanyinya yang luar biasa. Budaya berkumpul dan bernyanyi harmoni (dengan iringan gitar/tifa) adalah DNA yang melahirkan puluhan penyanyi papan atas nasional dari tanah ini.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-04",
        category: "Kriya Tekstil Tradisional",
        title: "Tenun Tanimbar",
        description: "Kain tenun (Tais) dengan warna-warna gelap berani yang dihiasi garis/corak panah dan kelapa dari pulau Tanimbar di ujung selatan Maluku. Ditenun sangat kaku dan sering digunakan dalam penobatan adat.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "mal-lang-01",
        content: "Bahasa Melayu Ambon adalah lingua franca berintonasi tinggi yang merdu, banyak meminjam pelafalan Portugis dan Belanda.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "mal-voc-01", word: "Beta / Ose", meaning: "Saya / Kamu.", citationIds: ["mal-ref-bps"] },
      { id: "mal-voc-02", word: "Pela Gandong", meaning: "Ikatan persaudaraan sekandung antardesa yang beda agama.", citationIds: ["mal-ref-pela"] },
      { id: "mal-voc-03", word: "Nyong / Nona", meaning: "Panggilan kesayangan untuk anak laki-laki / perempuan yang belum menikah.", citationIds: ["mal-ref-bps"] },
      { id: "mal-voc-04", word: "Dangke", meaning: "Terima Kasih (serapan dari Dank je, Belanda).", citationIds: ["mal-ref-bps"] },
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-pela"],
  },

  culinary: {
    introduction: [
      {
        id: "mal-culi-01",
        content: "Kuliner Maluku berpusat pada kekayaan ikan laut (pelagis) yang dibumbui rempah tajam kenari dan lemon cui segar, disandingkan dengan getah sagu.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mal-culi-item-01",
        title: "Papeda & Ikan Kuah Kuning",
        description: "Makanan pokok kepulauan (pengganti nasi). Papeda terbuat dari pati sagu yang disiram air mendidih hingga berubah menjadi gumpalan lem lengket transparan. Cara makannya harus 'diseruput' cepat (jangan dikunyah) bersama siraman kaldu ikan tuna kuah kuning yang beraroma kunyit dan kemangi (lemon cui).",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-02",
        title: "Kohu-kohu",
        description: "Mirip urap Jawa, namun versi pesisir. Terdiri dari campuran parutan kelapa, kacang panjang rebus, tauge, daun kemangi, dan suwiran ikan cakalang asap yang diaduk mentah dengan perasan jeruk nipis tanpa dimasak ulang.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-03",
        title: "Rujak Natsepa",
        description: "Rujak buah legendaris di pesisir Pantai Natsepa (Ambon). Kekuatannya ada pada bumbu kacang tanah giling kasar yang sangat tebal, kental, legit karena menggunakan gula aren (gula merah sapi) asli.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-04",
        title: "Kopi Rarobang",
        description: "Racikan kopi robusta khas Ambon yang direbus bersama rempah-rempah: jahe, cengkeh, kayu manis, lalu ditaburi kepingan kacang kenari panggang gurih di atasnya. Menghangatkan badan saat malam laut dingin.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "mal-bio-01",
        content: "Garis Wallace dan Weber menjepit Maluku (Wallacea), menjadikannya daerah perlintasan spesies aneh dari benua Asia menuju Australasia.",
        citationIds: ["mal-ref-wallacea"],
      }
    ],
    species: [
      {
        id: "mal-bio-item-01",
        category: "Avifauna Cerdas Endemik",
        title: "Burung Nuri Maluku & Kakatua Seram",
        description: "Hutan hujan lebat di Seram adalah surga bagi burung paruh bengkok berwarna sangat cerah (merah jambu/hijau neon) yang memiliki kepintaran meniru suara manusia. Sayangnya mereka sangat rawan perburuan liar.",
        citationIds: ["mal-ref-wallacea"],
      },
      {
        id: "mal-bio-item-02",
        category: "Ekosistem Palung Laut Dalam",
        title: "Terumbu Karang Dinding (Drop-off) Laut Banda",
        description: "Laut Banda memiliki kedalaman palung lebih dari 7.000 meter. Formasi terumbu karangnya seringkali tidak datar, melainkan berupa dinding curam vertikal (Drop-off Wall) yang menjadi perlintasan migrasi kawanan paus biru dan hiu martil.",
        citationIds: ["mal-ref-wallacea"],
      },
      {
        id: "mal-bio-item-03",
        category: "Flora Rempah Sejarah",
        title: "Pohon Pala (Myristica fragrans) & Cengkeh (Syzygium aromaticum)",
        description: "Dua spesies flora ini aslinya hanya tumbuh secara endemik di pulau sekecil Banda dan Makian, namun wanginya mengubah peta dunia modern akibat perburuan Eropa.",
        citationIds: ["mal-ref-banda"],
      }
    ],
    referenceIds: ["mal-ref-wallacea", "mal-ref-banda"],
  },

  destinations: {
    introduction: [
      {
        id: "mal-dest-01",
        content: "Destinasi wisata di Maluku sangat jauh, mahal, dan sulit dijangkau, namun membalas dengan keperawanan alam paling paripurna di Indonesia.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    items: [
      {
        id: "mal-dest-item-01",
        category: "Surga Sejarah & Scuba Diving",
        title: "Kepulauan Banda (Banda Neira)",
        description: "Gugusan pulau romantis berbau pala. Banda Neira menawarkan wisata sejarah rumah pengasingan Bung Hatta, kemegahan Benteng Belgica (berbentuk segi lima), disandingkan dengan menyelam melihat aliran lava bawah laut dari Gunung Api Banda yang meletus.",
        citationIds: ["mal-ref-banda"],
      },
      {
        id: "mal-dest-item-02",
        category: "Pasir Paling Halus di Dunia",
        title: "Pantai Ngurbloat (Kepulauan Kei)",
        description: "Berada di Maluku Tenggara (Tual/Kei), pantai ini memiliki bentangan pasir putih yang saking putih dan halusnya seperti bubuk tepung terigu (sering diklaim National Geographic sebagai pasir terhalus di bumi).",
        citationIds: ["mal-ref-bps"],
      },
      {
        id: "mal-dest-item-03",
        category: "Bora-Bora-nya Indonesia",
        title: "Pantai Ora (Pulau Seram)",
        description: "Tersembunyi di utara pulau Seram. Resor dengan rumah-rumah panggung eksotis yang dibangun mengapung tepat di atas terumbu karang laut dangkal jernih, berlatarkan tebing batu kapur (karst) menjulang vertikal raksasa.",
        citationIds: ["mal-ref-bps"],
      },
      {
        id: "mal-dest-item-04",
        category: "Pintu Gerbang Pantai Kota",
        title: "Pantai Natsepa (Ambon)",
        description: "Pantai berpasir putih luas dengan laut tenang berombak kecil yang paling mudah dijangkau dari ibukota Ambon, tempat wajib menyantap rujak kacang kenari yang legendaris.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-banda"],
  },

  stories: {
    introduction: [
      {
        id: "mal-story-01",
        content: "Gugusan Banda Neira pernah ditukar oleh Inggris dengan sebuah pulau rawa di Amerika yang kini bernama Manhattan (New York).",
        citationIds: ["mal-ref-banda"],
      }
    ],
    stories: [
      {
        id: "mal-story-item-01",
        title: "Misteri Perjanjian Breda (Run Island)",
        description: "Pada tahun 1667, untuk mengakhiri perang monopoli Pala, Inggris dan Belanda bertukar wilayah (Perjanjian Breda). Inggris merelakan Pulau Run (di Kepulauan Banda yang penuh Pala) kepada Belanda, dan sebagai gantinya Inggris mendapatkan pulau rawa kecil di ujung Amerika, 'Nieuw Amsterdam'. Kini, pulau rawa itu adalah jantung keuangan dunia: Manhattan, New York.",
        citationIds: ["mal-ref-banda"],
      },
      {
        id: "mal-story-item-02",
        title: "Bung Hatta dan Sepatu Bally",
        description: "Saat dibuang/diasingkan ke Banda Neira oleh Belanda (1936-1942), Mohammad Hatta menghabiskan hari-harinya mendidik anak-anak pulau secara gratis (sekolah sore). Di sana, ia memendam mimpi sederhana memiliki sepasang sepatu mahal 'Bally' yang iklannya ia simpan dari koran. Sepatu itu tak pernah terbeli hingga akhir hayatnya yang jujur (bersih dari korupsi).",
        citationIds: ["mal-ref-banda"],
      }
    ],
    referenceIds: ["mal-ref-banda"],
  },

  contemporary: {
    introduction: [
      {
        id: "mal-cont-01",
        content: "Ambon telah meruntuhkan stigma gelap perang saudaranya, bertransformasi menjadi laboratorium perdamaian dunia terbesar di timur Indonesia.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    economy: [
      {
        id: "mal-cont-02",
        content: "Maluku secara bertahap bersiap menjadi Lumbung Ikan Nasional (LIN) dengan pelabuhan perikanan terpadu di Ambon yang menyokong ekspor tuna dunia. Selain itu, pengeboran Blok Masela (gas alam cair abadi) di Maluku Barat Daya sedang dirancang sebagai mega-proyek energi yang akan mengubah wajah ekonomi penduduk dari pulau-pulau miskin di sekitarnya.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-pela"],
  },

  travel: {
    introduction: [
      {
        id: "mal-travel-01",
        content: "Bepergian di Maluku adalah ujian kesabaran jadwal kapal ferry pelni, namun lautan di sela-selanya adalah meditasi panjang tiada dua.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "mal-travel-02",
        content: "Orang Maluku berbicara dengan volume suara dan intonasi yang sangat keras; jangan kaget atau salah paham menganggap mereka sedang marah/berkelahi, itu adalah ciri khas kegembiraan mereka (berwatak kasar namun berhati salju). Hargai tradisi sasi (larangan memancing/mengambil hasil bumi dalam waktu tertentu) yang dipasang pemuka adat di pesisir desa, karena melanggarnya berarti menantang denda denda adat magis dari masyarakat sekampung.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-wbtb"],
  },

  lastReviewedAt: "2026-07-13T00:46:00Z",
  contentStatus: "draft",
  referenceIds: [
    "mal-ref-bps",
    "mal-ref-wbtb",
    "mal-ref-banda",
    "mal-ref-pela",
    "mal-ref-wallacea"
  ]
};
