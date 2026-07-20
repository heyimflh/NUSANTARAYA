import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kalimantanSelatanReferences: ScientificReference[] = [
  {
    id: "kls-ref-bps",
    title: "Provinsi Kalimantan Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kalimantan Selatan",
    url: "https://kalsel.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "kls-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kalimantan Selatan",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "kls-ref-sejarah",
    title: "Sejarah Banjar dan Perang Banjar",
    authors: ["Ideham, M. Suriansyah (Ed.)"],
    year: 2003,
    publisher: "Pemerintah Provinsi Kalimantan Selatan",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Banjar",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["history", "society"],
  },
  {
    id: "kls-ref-bekantan",
    title: "Ecology of the Proboscis Monkey (Nasalis larvatus)",
    authors: ["Meijaard, Erik", "Nijman, Vincent"],
    year: 2000,
    publisher: "International Journal of Primatology",
    url: "https://id.wikipedia.org/wiki/Bekantan",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["biodiversity"],
  },
  {
    id: "kls-ref-meratus",
    title: "Meratus Geopark",
    authors: ["UNESCO Global Geoparks"],
    year: 2021,
    publisher: "Geopark Meratus Management Board",
    url: "https://geoparkmeratus.org/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-selatan"],
    topicIds: ["destinations", "geography"],
  }
];

export const kalimantanSelatanAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-selatan",
  slug: "kalimantan-selatan",
  title: "Kalimantan Selatan",
  tagline: "Bumi Antasari, Kota Seribu Sungai dan Gugusan Intan Meratus",
  summary: [
    {
      id: "kls-sum-01",
      content: "Kalimantan Selatan (Kalsel) adalah pusat gravitasi peradaban pesisir sungai Borneo. Berbeda dengan tetangganya, provinsi ini didominasi mutlak oleh etnis Banjar yang sangat lekat dengan identitas keislaman, kemahiran berniaga di atas sungai (Pasar Terapung), serta memegang erat bahasa Banjar yang menjadi bahasa persatuan (lingua franca) se-Kalimantan. Di atas tanah ini pula tersimpan dua kekayaan eksploitatif paling mahardika: intan berlian Martapura dan cadangan raksasa emas hitam (batu bara) yang menghidupi separuh republik.",
      citationIds: ["kls-ref-bps", "kls-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "kls-qf-01", label: "Ibu Kota", value: "Banjarbaru (sejak 2022)", citationIds: ["kls-ref-bps"] },
    { id: "kls-qf-02", label: "Luas Wilayah", value: "38.744,00 km²", citationIds: ["kls-ref-bps"], dataYear: 2024 },
    { id: "kls-qf-03", label: "Populasi", value: "4.209.684 jiwa", citationIds: ["kls-ref-bps"], dataYear: 2023 },
    { id: "kls-qf-04", label: "Suku Dominan", value: "Banjar (74%)", citationIds: ["kls-ref-bps"] },
    { id: "kls-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["kls-ref-bps"] },
    { id: "kls-qf-06", label: "Gubernur", value: "Sahbirin Noor", citationIds: ["kls-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "kls-geo-01",
        content: "Bentuk provinsi ini terkecil di Kalimantan, diapit oleh rawa pantai di barat/selatan dan dibelah vertikal oleh Pegunungan Meratus di tengah-timurnya.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "kls-geo-02",
        content: "Bagian barat dan selatan Kalsel sangat datar dan tergenang, dibentuk oleh dataran banjir (floodplain) Sungai Barito dan anak-anak sungainya (seperti Sungai Martapura yang membelah Banjarmasin). Namun, membelah tepat di sisi timur dari selatan ke utara adalah Pegunungan Meratus yang hijau purba. Kontras geografis ini menciptakan lahan rawa gambut basah di bawah dan formasi karst kapur/mineral intan di dataran tingginya.",
        citationIds: ["kls-ref-meratus", "kls-ref-bps"],
      }
    ],
    referenceIds: ["kls-ref-bps", "kls-ref-meratus"],
  },

  history: {
    introduction: [
      {
        id: "kls-his-01",
        content: "Kalsel berkembang dari keraton Hindu kuno menjadi Kesultanan Banjar Islam yang perkasa, sebelum hancur dalam peperangan sengit melawan Belanda.",
        citationIds: ["kls-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "kls-era-01",
        period: "Abad ke-14",
        title: "Kerajaan Negara Dipa & Negara Daha",
        description: "Periode kerajaan bercorak Hindu purba di pedalaman Amuntai/Nagara. Jejak kuat dari peradaban ini adalah pembuatan kapal laut (undagi) kayu besi dan teknik pengolahan besi tempa purba (kemahiran yang menurun pada masyarakat Daha pesisir modern).",
        citationIds: ["kls-ref-sejarah"],
      },
      {
        id: "kls-era-02",
        period: "1526",
        title: "Kesultanan Banjar",
        description: "Pangeran Samudera memeluk Islam dengan bantuan bala tentara Kesultanan Demak untuk mengalahkan pamannya. Ia bergelar Sultan Suriansyah, mendirikan Kesultanan Banjar di tepi Sungai Kuin (Banjarmasin) yang menjadi pusat dagang lada maritim.",
        citationIds: ["kls-ref-sejarah"],
      },
      {
        id: "kls-era-03",
        period: "1859 – 1905",
        title: "Perang Banjar",
        description: "Belanda memonopoli tambang batubara (Oranje Nassau) dan mencampuri suksesi Kesultanan. Pangeran Antasari memimpin perang semesta (sabil) melawan Hindia Belanda dengan slogan 'Haram Manyarah Waja Sampai Kaputing'. Beliau gugur, kesultanan dibubarkan, namun perlawanan bergerilya berlanjut hingga abad 20.",
        citationIds: ["kls-ref-sejarah"],
      },
      {
        id: "kls-era-04",
        period: "2022",
        title: "Pemindahan Ibu Kota Provinsi",
        description: "Status ibu kota provinsi secara resmi dipindahkan dari kota sejarah Banjarmasin menuju Banjarbaru untuk menghindari ancaman ekologis rawa ambles/banjir permanen Banjarmasin.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    referenceIds: ["kls-ref-sejarah", "kls-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "kls-soc-01",
        content: "Etnis Banjar (Urang Banjar) adalah peleburan antara Suku Melayu (dari Sumatera), Dayak (lokal), dan Jawa purba yang disatukan erat oleh identitas agama Islam.",
        citationIds: ["kls-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "kls-soc-02",
        content: "Mayoritas masyarakat memeluk agama Islam yang sangat tradisional (pengaruh Syekh Muhammad Arsyad al-Banjari). Kegiatan 'maulid', pengajian, dan penghormatan terhadap Tuan Guru (ulama) sangat kuat (seperti fenomena Haul Guru Sekumpul di Martapura yang dihadiri jutaan orang setiap tahun). Selain itu, di Pegunungan Meratus, berdiam masyarakat adat 'Dayak Meratus' (Dayak Bukit) yang masih memeluk agama adat (Kaharingan).",
        citationIds: ["kls-ref-sejarah", "kls-ref-wbtb"],
      }
    ],
    referenceIds: ["kls-ref-sejarah", "kls-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "kls-cul-01",
        content: "Seni Kalsel adalah asimilasi melayu-islam; dari kain pengobatan magis (Sasirangan) hingga seni pantun kilat yang ditabuh secara jenaka.",
        citationIds: ["kls-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "kls-cul-item-01",
        category: "Kriya Tekstil/Pakaian",
        title: "Kain Sasirangan",
        description: "Kain tenun celup ikat tradisional Banjar (batik Banjar). Zaman dahulu (disebut Kain Pamintan), kain berwarna kuning, merah, atau hijau ini digunakan oleh tabib ('batatamba') sebagai ikat kepala atau sabuk untuk mengusir roh jahat penyakit.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-cul-item-02",
        category: "Arsitektur Klasik Istana",
        title: "Rumah Bubungan Tinggi",
        description: "Tipe tertinggi dari arsitektur rumah tradisional Suku Banjar yang diperuntukkan bagi keluarga bangsawan sultan. Atapnya membumbung sangat tajam dan tinggi hingga 45 derajat menyerupai layar, dan lantainya berupa rumah panggung kayu ulin bertingkat (split-level).",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-cul-item-03",
        category: "Sastra Tutur Islami",
        title: "Madihin",
        description: "Pertunjukan puisi rakyat anonym/pantun jenaka yang diucapkan secara cepat (nge-rap) oleh satu atau dua orang seniman (Pemadihin), diselingi pukulan ritmis Rebana/Tarbang. Kata-katanya diimprovisasi saat itu juga untuk menyindir kelucuan zaman.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-cul-item-04",
        category: "Seni Perdagangan Tradisional",
        title: "Pasar Terapung (Pasar Bapandut)",
        description: "Budaya berjualan ratusan ibu-ibu (Acil) di atas perahu kayu klotok/jukung. Transaksi jual beli sayur, buah, atau sarapan soto banjar menggunakan bahasa tubuh atau sistem barter sejak subuh sebelum matahari meninggi.",
        citationIds: ["kls-ref-wbtb"],
      }
    ],
    referenceIds: ["kls-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "kls-lang-01",
        content: "Bahasa Banjar adalah bahasa pengantar wajib se-Kalimantan, yang terbagi dalam dialek Kuala (pesisir Banjarmasin yang cenderung Melayu/vokal pendek) dan dialek Hulu (Kandangan/Amuntai yang bervokal berat).",
        citationIds: ["kls-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "kls-voc-01", word: "Ulun / Pian", meaning: "Saya / Anda (Sangat sopan, kasta tertinggi penghormatan).", citationIds: ["kls-ref-bps"] },
      { id: "kls-voc-02", word: "Undang / Nyawa", meaning: "Aku / Kamu (Sangat kasar, diucapkan ke teman seumuran).", citationIds: ["kls-ref-bps"] },
      { id: "kls-voc-03", word: "Bungas / Langkar", meaning: "Cantik / Ganteng.", citationIds: ["kls-ref-bps"] },
      { id: "kls-voc-04", word: "Haram Manyarah, Waja Sampai Kaputing", meaning: "Pantang menyerah (Haram), bagaikan baja (Waja) mulai dari awal hingga titik akhir (Kaputing) - Motto Banjar.", citationIds: ["kls-ref-sejarah"] },
    ],
    referenceIds: ["kls-ref-bps", "kls-ref-sejarah"],
  },

  culinary: {
    introduction: [
      {
        id: "kls-culi-01",
        content: "Masakan Banjar bertumpu pada bumbu merah (habang) yang manis legit tak pedas, kaldu rempah bening, dan kebiasaan menikmati ikan sungai panggang.",
        citationIds: ["kls-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "kls-culi-item-01",
        title: "Soto Banjar",
        description: "Soto kaldu ayam bening (bisa dikentalkan dengan susu/kuning telur) yang sangat kaya aroma rempah kapulaga, kayu manis, dan cengkeh. Disajikan bersama ketupat (bukan nasi), soun, suwiran ayam, dan perkedel singkong. Perasan jeruk purut adalah wajib.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-culi-item-02",
        title: "Ketupat Kandangan",
        description: "Hidangan khas Hulu Sungai Selatan. Ketupat pulen keras direndam dalam kuah santan kental yang gurih dan sedikit kelat bumbu terasi/kemiri. Lauk intinya adalah Ikan Haruan (Gabus) panggang.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-culi-item-03",
        title: "Nasi Kuning Masak Habang",
        description: "Menu sarapan sejuta umat di Kalsel. Nasi kuning legit ditemani lauk (telur itik, ayam, haruan) yang disiram bumbu habang; saus kental merah gelap (cabai kering besar) yang rasanya manis karamel gula aren.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-culi-item-04",
        title: "Wadai Bingka Barantai",
        description: "Kue basah tradisional yang wajib hadir saat bulan Ramadan. Terbuat dari telur itik parit, santan, dan kentang/tapai yang dipanggang (dibakar atas bawah) hingga wangi gosong kecoklatan dengan bentuk kelopak bunga bersudut enam.",
        citationIds: ["kls-ref-wbtb"],
      }
    ],
    referenceIds: ["kls-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "kls-bio-01",
        content: "Hutan bakau di hilir Barito adalah habitat primata berhidung aneh nan pemalu yang menjadi maskot rekreasi dunia.",
        citationIds: ["kls-ref-bekantan"],
      }
    ],
    species: [
      {
        id: "kls-bio-item-01",
        category: "Fauna Endemik (Maskot)",
        title: "Bekantan (Nasalis larvatus)",
        description: "Kera berbulu jingga keemasan yang jantannya memiliki hidung sangat besar (menggantung seperti terong) dan perut buncit (disebut juga kera Belanda/Monyet Belanda). Primata ini pandai berenang dan hidup berkelompok di pinggir sungai (endemik Kalimantan).",
        citationIds: ["kls-ref-bekantan"],
      },
      {
        id: "kls-bio-item-02",
        category: "Flora Maskot (Anggrek)",
        title: "Kasturi (Mangifera casturi) & Anggrek Bulan",
        description: "Kasturi adalah spesies mangga kecil purba beraroma tajam luar biasa yang diperkirakan sudah punah di alam liar dan hanya tersisa di pekarangan penduduk. Sementara di Meratus, hidup puluhan spesies anggrek liar eksotis asli Kalimantan.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    referenceIds: ["kls-ref-bekantan", "kls-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "kls-dest-01",
        content: "Berwisata ke Kalsel berarti bangun sedini mungkin sebelum matahari terbit, dan menyusuri cerahnya kilau intan bumi atau gelapnya hijau rimba purba.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    items: [
      {
        id: "kls-dest-item-01",
        category: "Ikon Pesisir Sungai",
        title: "Pasar Terapung Lok Baintan / Kuin",
        description: "Kumpulan 'Acil-acil' (ibu-ibu berbedak putih pelindung panas) yang menjajakan dagangannya di atas ratusan perahu saling berdempetan di atas Sungai Martapura mulai pukul 05:30. Sebuah pemandangan spektakuler yang menolak mati digempur daratan.",
        citationIds: ["kls-ref-wbtb"],
      },
      {
        id: "kls-dest-item-02",
        category: "Petualangan Ekstrem Pegunungan",
        title: "Loksado (Bamboo Rafting) & Pegunungan Meratus",
        description: "Berada di hulu sungai Amandit (Kandangan). Merupakan kawasan Dayak Meratus di mana wisatawan menaiki rakit dari deretan batang bambu asli, diterjang jeram sungai berbatu yang dikendalikan joki lokal bermodal tongkat.",
        citationIds: ["kls-ref-meratus"],
      },
      {
        id: "kls-dest-item-03",
        category: "Konservasi Monyet",
        title: "Pulau Kembang / Pulau Bakut",
        description: "Gugusan pulau kecil berbentuk delta di tengah muara Barito, dihuni kawanan monyet ekor panjang yang agresif (Kembang) atau satwa pemalu Bekantan pemakan pucuk daun (Bakut).",
        citationIds: ["kls-ref-bekantan"],
      },
      {
        id: "kls-dest-item-04",
        category: "Sejarah Tambang Rakyat",
        title: "Pendulangan Intan Cempaka (Martapura)",
        description: "Sebuah desa tua berlumpur di mana para pria mendulang (mencuci pasir) di lubang galian terbuka bermeter-meter dalamnya, mencari kilau kecil sebutir intan atau berlian Kalimantan yang berharga selangit (tempat ditemukannya 'Intan Trisakti' sebesar telur burung puyuh pada masa Soekarno).",
        citationIds: ["kls-ref-sejarah"],
      }
    ],
    referenceIds: ["kls-ref-bps", "kls-ref-wbtb", "kls-ref-meratus", "kls-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "kls-story-01",
        content: "Di balik kehalusan syiar agama, terdapat epos masa lalu Kesultanan Banjar yang melahirkan pahlawan pemersatu.",
        citationIds: ["kls-ref-sejarah"],
      }
    ],
    stories: [
      {
        id: "kls-story-item-01",
        title: "Hikayat Banjar",
        description: "Teks kronik istana Melayu klasik (abad 17) yang panjang, menceritakan mitologi keturunan raja-raja Banjar (mulai dari Pangeran Suryanata Hindu hingga Islam), memuat falsafah ketatanegaraan kuno Banjar yang dibaca saat pelantikan elit keraton.",
        citationIds: ["kls-ref-sejarah"],
      },
      {
        id: "kls-story-item-02",
        title: "Legenda Datu Landak",
        description: "Cerita wali sakti/ulama pada masa kesultanan (Datu) yang kebal senjata tajam atau bisa berpindah tempat, yang sering digunakan rakyat Banjar sebagai penjelasan mistis terhadap keberadaan makam-makam wali keramat (kubah) yang berserakan di desa-desa.",
        citationIds: ["kls-ref-wbtb"],
      }
    ],
    referenceIds: ["kls-ref-sejarah", "kls-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "kls-cont-01",
        content: "Isu kerusakan ekologis menjadi sorotan global akibat pengerukan batu bara intensif selama dua dekade terakhir.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    economy: [
      {
        id: "kls-cont-02",
        content: "Kalsel adalah pemasok batubara (kalori rendah/menengah) terbesar nasional. Raksasa tambang seperti Adaro/Arutmin membongkar hutan Meratus untuk diekspor via pelabuhan muat raksasa (transshipment) di Taboneo. Di tengah rezeki pertambangan, Pemprov Kalsel memindahkan ibukota ke Banjarbaru demi mengatasi tata kelola banjir Banjarmasin yang kian tenggelam ('Banjir Kalsel 2021').",
        citationIds: ["kls-ref-bps"],
      }
    ],
    referenceIds: ["kls-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "kls-travel-01",
        content: "Perjalanan di Kalsel berarti menyelami hiruk-pikuknya pasar terapung dan pekatnya kabut pagi di perbukitan zamrud Meratus.",
        citationIds: ["kls-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "kls-travel-02",
        content: "Bawalah uang tunai recehan banyak jika menyusuri Pasar Terapung. Saat berkunjung ke makam-makam ulama ('Kubah'), gunakan pakaian sangat sopan (busana tertutup panjang/Kopiah). Karena nuansa Islam sangat kental, alkohol sangat sulit ditemukan dan tabu diminum secara terbuka di Banjarmasin. Di Martapura, hati-hati saat membeli berlian 'kaleng-kaleng' (palsu); belilah di toko bersertifikat resmi.",
        citationIds: ["kls-ref-sejarah"],
      }
    ],
    referenceIds: ["kls-ref-bps", "kls-ref-sejarah"],
  },

  lastReviewedAt: "2026-07-13T00:27:00Z",
  contentStatus: "draft",
  referenceIds: [
    "kls-ref-bps",
    "kls-ref-wbtb",
    "kls-ref-sejarah",
    "kls-ref-bekantan",
    "kls-ref-meratus"
  ]
};
