import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sulawesiBaratReferences: ScientificReference[] = [
  {
    id: "slb-ref-bps",
    title: "Provinsi Sulawesi Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sulawesi Barat",
    url: "https://sulbar.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "slb-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sulawesi Barat",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "slb-ref-sandeq",
    title: "Sandeq: Perahu Bercadik Tercepat dari Mandar",
    authors: ["Ridwan, Muhammad"],
    year: 2017,
    publisher: "Jurnal Kelautan Nasional",
    url: "https://id.wikipedia.org/wiki/Sandeq",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["culture", "destinations"],
  },
  {
    id: "slb-ref-mamasa",
    title: "Arsitektur dan Budaya Mamasa (Toraja Barat)",
    authors: ["Waterson, Roxana"],
    year: 2009,
    publisher: "NUS Press",
    url: "https://id.wikipedia.org/wiki/Suku_Mamasa",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["society", "destinations"],
  },
  {
    id: "slb-ref-gempa",
    title: "Dampak dan Mitigasi Gempa Majene-Mamuju 2021",
    authors: ["Badan Geologi"],
    year: 2021,
    publisher: "Kementerian ESDM",
    url: "https://vsi.esdm.go.id/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-barat"],
    topicIds: ["contemporary", "history"],
  }
];

export const sulawesiBaratAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-barat",
  slug: "sulawesi-barat",
  title: "Sulawesi Barat",
  tagline: "Bumi Malaqbi, Kepak Layar Pelaut Mandar",
  summary: [
    {
      id: "slb-sum-01",
      content: "Menghadap langsung keganasan Selat Makassar, Sulawesi Barat (Sulbar) adalah 'Bumi Malaqbi' (Bumi Kehormatan) yang membesarkan para pelaut ulung tak kenal takut. Provinsi yang mekar dari Sulawesi Selatan ini hidup dari denyut nadi Suku Mandar yang Islami di pesisir dan budaya animisme tua Suku Mamasa (Toraja Barat) di sejuknya pegunungan tinggi. Sulbar memiliki maha karya teknologi maritim nir-mesin tercepat di dunia, Perahu Sandeq, yang siap mengarungi era modern bersama trauma pemulihan dari gempa mematikan.",
      citationIds: ["slb-ref-bps", "slb-ref-sandeq", "slb-ref-wbtb"],
    }
  ],
  quickFacts: [
    { id: "slb-qf-01", label: "Ibu Kota", value: "Mamuju", citationIds: ["slb-ref-bps"] },
    { id: "slb-qf-02", label: "Luas Wilayah", value: "16.787,18 km²", citationIds: ["slb-ref-bps"], dataYear: 2024 },
    { id: "slb-qf-03", label: "Populasi", value: "1.479.231 jiwa", citationIds: ["slb-ref-bps"], dataYear: 2023 },
    { id: "slb-qf-04", label: "Suku Dominan", value: "Mandar", citationIds: ["slb-ref-bps"] },
    { id: "slb-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["slb-ref-bps"] },
    { id: "slb-qf-06", label: "Gubernur", value: "Bahtiar Baharuddin (Pj.)", citationIds: ["slb-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "slb-geo-01",
        content: "Dataran yang terjepit vertikal di antara pesisir panjang Selat Makassar yang panas dan punggungan karst Pegunungan Quarles yang beku.",
        citationIds: ["slb-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "slb-geo-02",
        content: "Garis pantainya membentang lurus nyaris 700 kilometer dari Polewali Mandar hingga Pasangkayu, berfungsi sebagai urat nadi logistik laut kuno (jalur perompakan dan dagang sutra Bugis). Semakin masuk ke timur (Kabupaten Mamasa), topografinya melesat curam di atas 1.000 mdpl (ketinggian pegunungan tropis) yang diliputi kabut dingin dan hutan lebat, berbatasan langsung dengan dataran tinggi Toraja di sisi timur-selatannya.",
        citationIds: ["slb-ref-bps", "slb-ref-mamasa"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-mamasa"],
  },

  history: {
    introduction: [
      {
        id: "slb-his-01",
        content: "Afdeling Mandar selalu mempertahankan wilayahnya dari aneksasi kolonial berkat kemampuan mematikan para penguasa lautnya.",
        citationIds: ["slb-ref-sandeq"],
      }
    ],
    timeline: [
      {
        id: "slb-era-01",
        period: "Abad ke-16",
        title: "Perjanjian Allamungan Batu di Luyo",
        description: "Tujuh kerajaan di muara pantai (Pitu Baqbana Binanga) dan tujuh kerajaan di pegunungan (Pitu Ulunna Salu) bersumpah (Allamungan Batu) untuk menghentikan perang saudara, menyatukan klan mereka di bawah ikatan kebangsaan awal 'Mandar'.",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-era-02",
        period: "Masa Kolonial Belanda",
        title: "Resistensi Bahari Mandar",
        description: "Hindia Belanda kewalahan menundukkan Afdeling Mandar. Pasukan maritim Mandar yang menggunakan perahu cadik ramping melakukan gerilya 'hit and run' mematikan di perairan dangkal Majene, merepotkan kapal-kapal meriam VOC yang besar dan lamban.",
        citationIds: ["slb-ref-sandeq"],
      },
      {
        id: "slb-era-03",
        period: "5 Oktober 2004",
        title: "Pemekaran Sulawesi Barat",
        description: "Provinsi ini resmi pisah dari ibu kandungnya (Sulawesi Selatan) melalui UU No. 26/2004 demi mengakselerasi pembangunan daerah pesisir yang merasa 'tertinggal' dari kemajuan kota Makassar.",
        citationIds: ["slb-ref-bps"],
      },
      {
        id: "slb-era-04",
        period: "Januari 2021",
        title: "Gempa Majene - Mamuju (6.2 SR)",
        description: "Duka mendalam akibat guncangan tektonik darat dangkal (Sesar Naik Mamuju). Mengakibatkan lumpuhnya ibu kota provinsi (Mamuju), meruntuhkan kantor Gubernur, dan mengisolasi ribuan warga di jalur trans-Sulawesi akibat longsor.",
        citationIds: ["slb-ref-gempa"],
      }
    ],
    referenceIds: ["slb-ref-wbtb", "slb-ref-sandeq", "slb-ref-bps", "slb-ref-gempa"],
  },

  society: {
    introduction: [
      {
        id: "slb-soc-01",
        content: "Ada dikotomi lembut namun harmoni antara karakter keras 'Orang Laut' Mandar dengan heningnya penduduk kristiani lembah Mamasa.",
        citationIds: ["slb-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "slb-soc-02",
        content: "Suku Mandar (dominan) membentuk peradaban Islam pesisir dengan struktur sosial egaliter ala pelaut; kejujuran (lempuq) dan harga diri/rasa malu (siri') dijunjung tinggi. Bergeser ke atas awan, Suku Mamasa (sering disalahpahami sebagai suku Toraja) bernaung dalam komunitas mayoritas Kristiani yang taat dan ritualistik (menghormati orang mati/Rambu Solo). Hubungan Mandar dan Mamasa dipersatukan dalam filosofi lokal 'Sipamandaq' (saling menguatkan).",
        citationIds: ["slb-ref-bps", "slb-ref-mamasa"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-mamasa"],
  },

  culture: {
    introduction: [
      {
        id: "slb-cul-01",
        content: "Teknologi bahari menembus angin (Sandeq) dan kuda yang dilatih menari (Pattuqduq) adalah puncak karsa estetis manusia Sulbar.",
        citationIds: ["slb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slb-cul-item-01",
        category: "Teknologi Maritim Cepat",
        title: "Lopi Sandeq",
        description: "Mahakarya Suku Mandar berupa perahu layar bercadik ganda dari kayu utuh (lopi). Bentuknya sangat ramping (seperti pedang), mengandalkan layar segitiga raksasa (lete). Sandeq mampu menembus ombak dengan kecepatan angin luar biasa (hingga 20-30 knot), menjadikannya perahu tak bermesin tercepat di dunia dalam balap (Sandeq Race).",
        citationIds: ["slb-ref-sandeq"],
      },
      {
        id: "slb-cul-item-02",
        category: "Karnaval Menunggang Kuda",
        title: "Sayyang Pattuqduq (Kuda Menari)",
        description: "Tradisi perayaan tamat mengaji (Khatam Al-Quran) bagi anak suku Mandar. Sang anak akan dinaikkan ke atas seekor kuda yang sudah dilatih khusus untuk bisa bergoyang mengangguk-angguk (menari) mengikuti irama tabuhan rebana yang rancak keliling desa.",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-cul-item-03",
        category: "Kriya Tekstil/Tenun",
        title: "Saqbe Mandar (Sutra Mandar)",
        description: "Kain tenun sutra kebanggaan kaum perempuan pesisir Mandar yang pembuatannya dirahasiakan (dengan pantangan adat saat menenun). Warnanya sangat berani (merah/emas) dan ditenun sangat rapat (Sure' Pengulu).",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-cul-item-04",
        category: "Arsitektur Kematian Lontar",
        title: "Tedong-tedong Minanga (Mamasa)",
        description: "Peti mati purba berbentuk miniatur kerbau (atau babi/perahu) yang diletakkan saling bertumpuk di dalam relung tebing atau gua-gua karst peninggalan zaman prasejarah Megalitik awal suku Mamasa.",
        citationIds: ["slb-ref-mamasa"],
      }
    ],
    referenceIds: ["slb-ref-wbtb", "slb-ref-sandeq", "slb-ref-mamasa"],
  },

  language: {
    introduction: [
      {
        id: "slb-lang-01",
        content: "Bahasa Mandar dan Mamasa terhubung dengan rumpun Sulawesi Selatan (Bugis-Makassar), namun diucapkan dengan intonasi laut yang lantang (Mandar) atau nada lembah yang pelan (Mamasa).",
        citationIds: ["slb-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "slb-voc-01", word: "Malaqbi", meaning: "Muliat/Terhormat/Bermartabat (Karakter ideal orang Mandar).", citationIds: ["slb-ref-bps"] },
      { id: "slb-voc-02", word: "Lopi", meaning: "Perahu.", citationIds: ["slb-ref-sandeq"] },
      { id: "slb-voc-03", word: "Polea", meaning: "Saya datang / tiba.", citationIds: ["slb-ref-bps"] },
      { id: "slb-voc-04", word: "Sipamandaq", meaning: "Saling memperkuat satu sama lain.", citationIds: ["slb-ref-wbtb"] },
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-sandeq", "slb-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "slb-culi-01",
        content: "Kuliner Sulbar diresapi dengan kekayaan lautan yang dibumbui asam alami belimbing wuluh/mangga dan kelezatan ubi parut panas.",
        citationIds: ["slb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slb-culi-item-01",
        title: "Bau Peapi",
        description: "Hidangan ikan (biasanya Tuna/Cakalang/Tongkol) legendaris Mandar berkuah kuning kecoklatan tanpa santan. Keunikan rasanya berasal dari 'Pammaisang' (asam mangga Mandar yang dikeringkan) dan minyak kelapa mandar cair, dicampur kunyit dan bawang mandar berukuran mungil.",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-culi-item-02",
        title: "Jepa",
        description: "Roti singkong khas Suku Mandar. Singkong parut (yang getahnya telah diperas habis) dibakar hingga berbentuk pipih tipis (mirip tortilla Meksiko/pizza) di atas wajan tanah liat ganda (Panjepangan). Jepa dimakan sebagai pengganti nasi berdampingan dengan ikan Tuqdu (Tongkol) atau Bau Peapi.",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-culi-item-03",
        title: "Golla Kambu",
        description: "Kudapan padat manis sejenis dodol khas Campalagian (Polewali Mandar). Terbuat dari campuran gula aren kental, parutan kelapa muda, dan kacang tanah sangrai, lalu dibungkus memakai pelepah pinang (lontar/pindang) basah.",
        citationIds: ["slb-ref-wbtb"],
      },
      {
        id: "slb-culi-item-04",
        title: "Kopi Mamasa",
        description: "Kopi Arabika Toraja versi Mamasa (ditanam di atas 1200 mdpl). Memiliki profil rasa fruity (buah-buahan asam manis segar) dipadu jejak herbal pedas tanpa kepahitan gelap.",
        citationIds: ["slb-ref-mamasa"],
      }
    ],
    referenceIds: ["slb-ref-wbtb", "slb-ref-mamasa"],
  },

  biodiversity: {
    introduction: [
      {
        id: "slb-bio-01",
        content: "Lembah-lembah mamasa dikelilingi keragaman flora anggrek tebing dan fauna burung petelur liar.",
        citationIds: ["slb-ref-bps"],
      }
    ],
    species: [
      {
        id: "slb-bio-item-01",
        category: "Unggas Purba Bertelur Tanah",
        title: "Burung Gosong (Megapodius cumingii)",
        description: "Burung endemik pesisir/kepulauan Sulawesi yang mirip ayam liar. Alih-alih mengerami, mereka menyimpan telur di tumpukan serasah daun mati bercampur pasir vulkanik (inkubator alami) agar panas pembusukan mengerami anak-anaknya.",
        citationIds: ["slb-ref-bps"],
      },
      {
        id: "slb-bio-item-02",
        category: "Flora Hutan Berkabut",
        title: "Keragaman Spesies Anggrek (Orchidaceae)",
        description: "Hutan hujan pegunungan Mamasa yang basah (cloud forest) merupakan habitat liar bagi puluhan spesies anggrek epifit eksotis, sebagian besar menempel tanpa merusak di inang pohon-pohon raksasa hutan peninggalan kolonial.",
        citationIds: ["slb-ref-mamasa"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-mamasa"],
  },

  destinations: {
    introduction: [
      {
        id: "slb-dest-01",
        content: "Dari pesisir batu karang yang merobek langit di Majene, ke surga perbukitan cemara yang berselimut kabut pagi di Mamasa.",
        citationIds: ["slb-ref-bps"],
      }
    ],
    items: [
      {
        id: "slb-dest-item-01",
        category: "Surga Pesisir Karang",
        title: "Pantai Dato (Majene)",
        description: "Tidak seperti pantai pasir biasa. Daya tarik utama Pantai Dato adalah formasi batuan karang vulkanik raksasa yang menjorok tajam menantang birunya lautan lepas Selat Makassar; tempat menenangkan diri sembari menunggu tenggelamnya matahari (sunset) sempurna.",
        citationIds: ["slb-ref-bps"],
      },
      {
        id: "slb-dest-item-02",
        category: "Negeri di Atas Awan (Toraja Barat)",
        title: "Lembah Mamasa & Buntu Burake",
        description: "Destinasi tersembunyi jauh di balik punggung gunung. Kota kecil Mamasa dipenuhi rumah tradisional (Banua Layuk) berselimut kabut mirip lukisan. Di sini juga terdapat Patung Bunda Maria dan wisata mendaki patung Yesus (versi Mamasa) di bukit hijau Buntu Burake.",
        citationIds: ["slb-ref-mamasa"],
      },
      {
        id: "slb-dest-item-03",
        category: "Pulau Penyu Berpasir Putih",
        title: "Pulau Karampuang (Mamuju)",
        description: "Pulau terumbu karang berpasir putih tepat di seberang pelabuhan Kota Mamuju. Penuh dengan keanekaragaman karang keras (hard coral) dan sering disambangi penyu belimbing untuk bertelur (menjadi surga diving/snorkeling).",
        citationIds: ["slb-ref-bps"],
      },
      {
        id: "slb-dest-item-04",
        category: "Event Internasional Olahraga Ekstrim Bahari",
        title: "Sandeq Race",
        description: "Event budaya/sport tahunan laut (umumnya Agustus/September) di mana para pelaut nekat berlomba mengemudikan 'Sandeq' (ratusan unit) menyusuri pesisir Sulawesi hingga rute membelah selat sejauh 400 km dengan hanya memanfaatkan tiupan angin laut. Sangat memompa adrenalin penonton.",
        citationIds: ["slb-ref-sandeq"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-mamasa", "slb-ref-sandeq"],
  },

  stories: {
    introduction: [
      {
        id: "slb-story-01",
        content: "Kepahlawanan orang Mandar selalu bermuara pada penaklukkan ganasnya ombak, serta harga diri menolak ketidakadilan (Siri').",
        citationIds: ["slb-ref-sandeq"],
      }
    ],
    stories: [
      {
        id: "slb-story-item-01",
        title: "Passandeq Sang Penakluk Angin",
        description: "Banyak mitos di pesisir Polewali bahwa para punggawa/nahkoda (Sawi) kapal Sandeq menguasai 'ilmu penunduk angin'. Saat mereka kekurangan angin di tengah laut, mereka akan memukul badan perahu sambil merapalkan mantra sihir kuno, dan angin puyuh akan seketika mengisi layar perahu mereka membelah malam.",
        citationIds: ["slb-ref-sandeq"],
      },
      {
        id: "slb-story-item-02",
        title: "Pahlawan I Calo Ammana Wewang",
        description: "Kisah bangsawan perempuan (Tomakaka) di Tinambung (Mandar) yang memimpin perlawanan fisik rakyat dengan menyabotase dan melawan pasukan kompeni Belanda menggunakan senjata tajam keris dan kebulatan tekad, sebuah simbol kuatnya peran perempuan di Sulbar.",
        citationIds: ["slb-ref-wbtb"],
      }
    ],
    referenceIds: ["slb-ref-sandeq", "slb-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "slb-cont-01",
        content: "Pasca-bencana gempa, Sulbar sedang memutar kemudi ekonominya menuju ketahanan agro-pangan hibrida (Kelapa Sawit dan Kakao).",
        citationIds: ["slb-ref-bps"],
      }
    ],
    economy: [
      {
        id: "slb-cont-02",
        content: "Meski terkenal karena lautnya, roda ekonomi masa kini Mamuju Tengah dan Pasangkayu ditopang kuat oleh monokultur jutaan hektar kelapa sawit dan cokelat (Kakao). Pemprov saat ini berfokus pada mitigasi bencana permanen di sepanjang pesisir (membangun ulang infrastruktur anti-gempa) untuk mencegah terulangnya kelumpuhan total seperti pada gempa Mamuju 2021.",
        citationIds: ["slb-ref-bps", "slb-ref-gempa"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-gempa"],
  },

  travel: {
    introduction: [
      {
        id: "slb-travel-01",
        content: "Sulbar mengajarkan kita bahwa rute terindah kadang adalah jalan pesisir panjang yang tak berujung (Roadtrip Trans-Sulawesi).",
        citationIds: ["slb-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "slb-travel-02",
        content: "Jika ada penduduk lokal menawarkan 'Jepa' dan menyuapi Anda 'Bau Peapi' hangat, jangan menolak. Terimalah dengan senyum, karena itu wujud penerimaan mereka yang paling dalam ('Malaqbi'). Jalan berkelok curam dan sering tertimpa longsor (khususnya saat musim hujan) di jalur pesisir Majene-Mamuju mengharuskan pengendara ekstra siaga terhadap klakson truk muatan sawit besar; mengemudilah di siang hari.",
        citationIds: ["slb-ref-wbtb"],
      }
    ],
    referenceIds: ["slb-ref-bps", "slb-ref-wbtb"],
  },

  lastReviewedAt: "2026-07-13T00:36:00Z",
  contentStatus: "draft",
  referenceIds: [
    "slb-ref-bps",
    "slb-ref-wbtb",
    "slb-ref-sandeq",
    "slb-ref-mamasa",
    "slb-ref-gempa"
  ]
};
