import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const nusaTenggaraTimurReferences: ScientificReference[] = [
  {
    id: "ntt-ref-bps",
    title: "Provinsi Nusa Tenggara Timur Dalam Angka 2024",
    authors: ["BPS Provinsi NTT"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Nusa Tenggara Timur",
    url: "https://ntt.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "ntt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: NTT",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "ntt-ref-komodo",
    title: "Komodo National Park",
    authors: ["UNESCO World Heritage Centre"],
    year: 1991,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/609/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "ntt-ref-flores",
    title: "The Catholic Church and the Local Culture in Flores",
    authors: ["Steenbrink, Karel"],
    year: 2003,
    publisher: "KITLV Press",
    url: "https://en.wikipedia.org/wiki/Larantuka",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["history", "society", "culture"],
  },
  {
    id: "ntt-ref-marapu",
    title: "The Religion of the Marapu in Sumba",
    authors: ["Keane, Webb"],
    year: 1997,
    publisher: "University of California Press",
    url: "https://id.wikipedia.org/wiki/Suku_Sumba",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["society", "culture", "history"],
  }
];

export const nusaTenggaraTimurAtlas: ProvinceAtlas = {
  provinceId: "nusa-tenggara-timur",
  slug: "nusa-tenggara-timur",
  title: "Nusa Tenggara Timur",
  tagline: "Bumi Flobamora, Takhta Naga Komodo dan Negeri Ribuan Bukit Sabana",
  summary: [
    {
      id: "ntt-sum-01",
      content: "Nusa Tenggara Timur (NTT) adalah kepulauan ('Flobamora': Flores, Sumba, Timor, Alor) dengan lanskap gersang paling megah dan ganas di kepulauan Indonesia. Alamnya melahirkan peradaban sabana ekstrem tempat suku-suku kuno melempar lembing berkuda (Pasola) dan mencambuk darah sesamanya (Caci). Di perairan Labuan Bajo-nya, karnivora purba prasejarah (Naga Komodo) berburu liar mencabik mangsa mamalia. Menjadi jantung kekristenan mayoritas negeri ini (Katolik dan Protestan), NTT adalah mosaik surga wisata eksotis (dari pasir merah muda hingga padang rumput tak bertepi) sekaligus provinsi yang gigih merangkak melawan stunting dan kerasnya musim kemarau panjang abadi.",
      citationIds: ["ntt-ref-bps", "ntt-ref-komodo", "ntt-ref-marapu"],
    }
  ],
  quickFacts: [
    { id: "ntt-qf-01", label: "Ibu Kota", value: "Kupang (Timor)", citationIds: ["ntt-ref-bps"] },
    { id: "ntt-qf-02", label: "Luas Wilayah", value: "48.718,10 km²", citationIds: ["ntt-ref-bps"], dataYear: 2024 },
    { id: "ntt-qf-03", label: "Populasi", value: "5.569.059 jiwa", citationIds: ["ntt-ref-bps"], dataYear: 2023 },
    { id: "ntt-qf-04", label: "Satwa Maskot", value: "Komodo", citationIds: ["ntt-ref-komodo"] },
    { id: "ntt-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["ntt-ref-bps"] },
    { id: "ntt-qf-06", label: "Gubernur", value: "Ayodhia G. L. Kalake (Pj.)", citationIds: ["ntt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ntt-geo-01",
        content: "Untaian tiga pulau raksasa yang kering berdebu, didominasi sabana batu kapur dan vulkanik yang curam berbatasan langsung dengan Samudera Hindia.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ntt-geo-02",
        content: "Lanskap NTT terbagi dalam tiga pulau poros (Flobamora). Di utara, daratan sempit memanjang vulkanik Flores (menyimpan Gunung Kelimutu). Di tenggara, daratan kering semi-gurun Timor Barat yang berbatasan darat dengan negara Timor Leste. Dan di barat daya, pulau Sabana berbukit Sumba yang tak memiliki letusan vulkanik namun sangat eksotis akan padang rumput (prairie) liar. Curah hujan provinsi ini adalah yang terendah di Indonesia, menciptakan musim kemarau hingga delapan bulan berturut-turut.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "ntt-his-01",
        content: "Kepulauan ini (Timor/Sumba) adalah rute ujung dari pelayaran wangsa Eropa pemburu Kayu Cendana yang wangi memabukkan.",
        citationIds: ["ntt-ref-flores"],
      }
    ],
    timeline: [
      {
        id: "ntt-era-01",
        period: "Abad ke-16",
        title: "Perburuan Kayu Cendana (Sandalwood)",
        description: "Pelaut Portugis dan Belanda menemukan harta karun dunia di Pulau Timor dan Sumba: pohon Cendana, yang diekspor mahal ke Tiongkok dan Eropa untuk dupa wangi. Para padri Dominikan Portugis mulai membaptis raja-raja lokal Flores dan Timor.",
        citationIds: ["ntt-ref-flores"],
      },
      {
        id: "ntt-era-02",
        period: "1550 – Sekarang",
        title: "Kerajaan Larantuka (Kota Reinha Rosari)",
        description: "Salah satu peninggalan kerajaan bercorak Katolik Roma terbesar di Nusantara yang didirikan oleh bangsa Portugis-Melayu, di mana rajanya menabalkan Bunda Maria (Reinha Rosari) secara gaib sebagai Ratu Kerajaan Larantuka.",
        citationIds: ["ntt-ref-flores"],
      },
      {
        id: "ntt-era-03",
        period: "1912",
        title: "Penemuan Komodo oleh Barat",
        description: "Letnan Steyn van Hensbroek dari Hindia Belanda mendarat di Pulau Komodo dan memburu 'Naga' pertama yang tubuhnya dikirim ke Kebun Raya Bogor untuk dibuktikan secara sains oleh Peter Ouwens (Varanus komodoensis).",
        citationIds: ["ntt-ref-komodo"],
      },
      {
        id: "ntt-era-04",
        period: "1958",
        title: "Pembentukan Provinsi NTT",
        description: "Pemerintah memisahkan Sunda Kecil menjadi tiga provinsi: Bali, NTB, dan NTT. Kupang didapuk menjadi ibukota strategis NTT di selatan berhadapan dengan Darwin, Australia.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-flores", "ntt-ref-komodo", "ntt-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "ntt-soc-01",
        content: "Ikatan darah di NTT dibangun di atas sistem marga patrilineal dan sinkretisme kuat antara Alkitab (Kristen) dengan aliran sesajen arwah leluhur kuno.",
        citationIds: ["ntt-ref-marapu"],
      }
    ],
    socialStructure: [
      {
        id: "ntt-soc-02",
        content: "Agama Katolik memegang kuasa budaya mutlak di Flores (suku Manggarai, Ngada, Lio, Lamaholot), sementara Protestan sangat dominan di Timor (suku Dawan/Atoni) dan Alor. Di Pulau Sumba yang gersang nan eksotis, meskipun banyak yang sudah beragama Nasrani, penganut agama asli 'Marapu' (pemuja arwah leluhur) masih berurat akar pada kehidupan kasta keras (hamba sahaya dan raja). Ciri sosial yang mengikat NTT secara utuh adalah tradisi 'Belis' (Mas Kawin/Mahar) yang sangat tinggi (ratusan ekor hewan babi/sapi) yang harus diserahkan oleh keluarga pria.",
        citationIds: ["ntt-ref-flores", "ntt-ref-marapu", "ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-flores", "ntt-ref-marapu", "ntt-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "ntt-cul-01",
        content: "Pertumpahan darah (dalam perkelahian kultural) dianggap sakral di NTT, karena darah manusia yang menyentuh bumi adalah tumbal kesuburan hasil panen sabana kering.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntt-cul-item-01",
        category: "Olahraga Darah Magis",
        title: "Pasola (Sumba)",
        description: "Festival melempar lembing kayu dari atas punggung kuda yang berlari kencang tanpa pelana (kuda Sumba). Puluhan pria Sumba Barat bertarung secara barbar melempar lembing untuk melukai lawannya (tidak jarang ada korban jiwa). Darah segar yang menetes ke tanah gersang dipercaya menyuburkan padi dan umbi lokal.",
        citationIds: ["ntt-ref-marapu"],
      },
      {
        id: "ntb-cul-item-02",
        category: "Tari Cambuk Kejantanan",
        title: "Tari Caci (Manggarai)",
        description: "Tarian perang/tarung fisik Suku Manggarai (Flores). Dua lelaki membawa pecut/cambuk kulit (Larik) dan perisai tameng kecil (Nggiling). Mereka menari menggoda lawan sebelum tiba-tiba mencambukkan pecut dengan kekuatan mematikan ke badan lawannya hingga meninggalkan luka robek memerah.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-cul-item-03",
        category: "Prosesi Keagamaan Abad 16",
        title: "Semana Santa (Larantuka)",
        description: "Perayaan Paskah (Pekan Suci) tradisi Portugis Katolik berumur ratusan tahun. Puncaknya pada Jumat Agung, di mana seluruh lampu kota dipadamkan, peziarah berjalan kaki menyusuri malam menyalakan ribuan lilin kecil mengarak patung suci Tuan Ma (Bunda Maria) membelah kota pesisir Larantuka yang mistis.",
        citationIds: ["ntt-ref-flores"],
      },
      {
        id: "ntt-cul-item-04",
        category: "Instrumen Kriya Melodi",
        title: "Sasando (Rote)",
        description: "Alat musik petik berdawai dari Pulau Rote yang resonator suaranya terbuat dari anyaman daun lontar raksasa yang melengkung indah. Nada yang dihasilkan sangat halus, mirip harpa dipadu gitar, menjadi instrumen kebanggaan musikal NTT.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-wbtb", "ntt-ref-marapu", "ntt-ref-flores"],
  },

  language: {
    introduction: [
      {
        id: "ntt-lang-01",
        content: "Bahasa Melayu Kupang bertindak sebagai perekat utama antar-pulau, karena ratusan dialek bahasa daerah Flores dan Timor tidak bisa saling dipahami.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "ntt-voc-01", word: "Beta / Lu / Sonde", meaning: "Saya / Kamu / Tidak (Bahasa Melayu Kupang).", citationIds: ["ntt-ref-bps"] },
      { id: "ntt-voc-02", word: "Se'i", meaning: "Asap/Pengasapan (Metode memasak khas Timor).", citationIds: ["ntt-ref-wbtb"] },
      { id: "ntt-voc-03", word: "Marapu", meaning: "Yang Dihormati / Leluhur Dewa Sumba.", citationIds: ["ntt-ref-marapu"] },
      { id: "ntt-voc-04", word: "Belis", meaning: "Uang Jujuran / Mahar kawin ternak raksasa (Sapi/Babi/Kuda).", citationIds: ["ntt-ref-wbtb"] },
    ],
    referenceIds: ["ntt-ref-bps", "ntt-ref-wbtb", "ntt-ref-marapu"],
  },

  culinary: {
    introduction: [
      {
        id: "ntt-culi-01",
        content: "Kemiskinan agrikultur akibat tanah koral/gersang membuat masyarakat beralih pada pengolahan daging asap liar yang tahan lama dan jagung batu lokal.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntt-culi-item-01",
        title: "Se'i (Daging Asap Kupang/Timor)",
        description: "Daging (sapi atau babi/pork) yang diiris tipis memanjang lalu dipanggang dan diasap pelan menggunakan panas kayu Kosambi. Aroma asapnya tajam luar biasa meresap hingga ke serat paling dalam, menjadikannya awet berhari-hari. Dinikmati dengan siraman sambal Luat yang asam pedas.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-culi-item-02",
        title: "Jagung Bose",
        description: "Bubur keras khas Timor (pengganti nasi). Jagung putih tua yang ditumbuk bersama kacang merah, direbus dalam santan encer sangat lama berjam-jam hingga teksturnya melunak pecah. Mengenyangkan perut petani peladang Timor.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-culi-item-03",
        title: "Kolo (Nasi Bambu Bakar)",
        description: "Nasi bambu ala Suku Manggarai (Flores). Beras pulen yang dimasukkan dalam tabung bambu hijau muda bersama sedikit rempah/kuah, kemudian dibakar (di-grill) miring pada api unggun besar. Berbau hangus sedap getah bambu.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-culi-item-04",
        title: "Sopi & Moke (Minuman Keras Tradisional)",
        description: "Arak lokal berkadar alkohol tinggi (Bisa menyala jika disulut api). Disuling tradisional berhari-hari dari sadapan air pohon nira/lontar, diminum bersama di pesta pernikahan/acara adat. (Non-halal).",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ntt-bio-01",
        content: "Kepulauan ini (terutama Komodo) adalah kantong isolasi geologis jutaan tahun yang menolak kepunahan kadal raksasa teratas bumi.",
        citationIds: ["ntt-ref-komodo"],
      }
    ],
    species: [
      {
        id: "ntt-bio-item-01",
        category: "Predator Purba (Maskot Fauna)",
        title: "Komodo (Varanus komodoensis)",
        description: "Kadal monitor terbesar di planet bumi, endemik di pulau Komodo, Rinca, dan Padar. Spesies purba raksasa sepanjang 3 meter ini memiliki air liur berbisa bakteri mematikan; ia bisa menumbangkan (membunuh) kerbau/kuda dewasa hanya dengan satu gigitan maut dan menunggunya mati membusuk berhari-hari.",
        citationIds: ["ntt-ref-komodo"],
      },
      {
        id: "ntt-bio-item-02",
        category: "Kuda Pekerja Sabana",
        title: "Kuda Sandalwood Pony (Kuda Sumba)",
        description: "Ras kuda kerdil Sumba yang fisiknya kecil namun tenaganya sangat brutal dan liar, sangat tahan panas. Kuda ini dikembangkan silang dengan kuda arab, tak hanya digunakan untuk transportasi (dan Pasola), tapi juga dihormati sakral masuk dalam seserahan Belis adat Sumba.",
        citationIds: ["ntt-ref-marapu"],
      },
      {
        id: "ntt-bio-item-03",
        category: "Flora Gurun (Pohon Kehidupan)",
        title: "Lontar (Borassus flabellifer)",
        description: "Pohon palma tinggi di Timor dan Rote, yang bagian daunnya dibuat Sasando, batangnya dibuat tiang rumah, air gulanya dimasak menjadi gula lempeng dan arak, dan buahnya dimakan sabutnya. Benar-benar menopang kehidupan penduduk di tengah kemarau mati.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-komodo", "ntt-ref-marapu", "ntt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "ntt-dest-01",
        content: "NTT adalah definisi surga Instagram masa kini, dari atas savana bukit purba Sumba hingga berenang bersama ikan pari Manta raksasa di Pulau Komodo.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    items: [
      {
        id: "ntt-dest-item-01",
        category: "Dunia Hilang Masa Lalu",
        title: "Taman Nasional Komodo (Labuan Bajo)",
        description: "Selain habitat kadal Komodo, ini adalah rute pelayaran elit Pinisi. Padar menawarkan pendakian bukit untuk melihat 3 warna pantai lengkung, Pink Beach dengan pasir serpihan karang merah jambu tajam, serta Manta Point untuk menyelam dikelilingi belasan burung laut raksasa air (Manta Ray).",
        citationIds: ["ntt-ref-komodo"],
      },
      {
        id: "ntt-dest-item-02",
        category: "Keajaiban Warna Geologi",
        title: "Danau Kelimutu (Flores Ende)",
        description: "Tiga telaga vulkanik kawah purba yang mempesona sekaligus menakutkan karena airnya bisa berubah warna dengan ekstrem (hitam, biru, merah, hijau toska). Bagi Suku Lio, danau ini adalah penjara magis arwah orang mati (Tiwa).",
        citationIds: ["ntt-ref-flores"],
      },
      {
        id: "ntt-dest-item-03",
        category: "Desa Mistis Kerucut Mbaru Niang",
        title: "Kampung Adat Wae Rebo",
        description: "Desa paling terisolasi di Flores (Manggarai), dijuluki kampung di atas awan (1200 mdpl). Turis harus trekking berjalan kaki mendaki bukit gila selama 4 jam lebih untuk sekadar melihat 7 rumah adat mbaru niang (kerucut tinggi raksasa) beralas ijuk.",
        citationIds: ["ntt-ref-bps"],
      },
      {
        id: "ntt-dest-item-04",
        category: "Savana Sumba Erotis",
        title: "Bukit Tenau & Kampung Tarung",
        description: "Bukan sabana biasa, namun gugusan teletubbies (perbukitan kapur sabana bergelombang rapi) yang hijau cantik di musim hujan dan menguning liar eksotis mematikan di musim kemarau. Di sini juga terdapat resor eksklusif terbaik di dunia (Nihiwatu) incaran aktor Hollywood.",
        citationIds: ["ntt-ref-marapu"],
      }
    ],
    referenceIds: ["ntt-ref-komodo", "ntt-ref-flores", "ntt-ref-bps", "ntt-ref-marapu"],
  },

  stories: {
    introduction: [
      {
        id: "ntt-story-01",
        content: "Danau warna-warni memendam misteri yang sangat dihindari penganut klenik suku Lio pada waktu senja.",
        citationIds: ["ntt-ref-flores"],
      }
    ],
    stories: [
      {
        id: "ntt-story-item-01",
        title: "Mitos Tiga Telaga Arwah (Kelimutu)",
        description: "Penduduk lokal sangat percaya setiap danau melambangkan terminal arwah. Tiwu Nuwa Muri (yang hijau) menampung jiwa muda/suci, Tiwu Ata Polo (merah kental) mengurung jiwa orang-orang jahat dan pembunuh berdarah, dan Tiwu Ata Bupu (hitam legam) mengumpulkan jiwa orang tua bijaksana yang tenang.",
        citationIds: ["ntt-ref-flores"],
      },
      {
        id: "ntt-story-item-02",
        title: "Saudara Kembar Manusia Komodo",
        description: "Orang lokal Flores meyakini (mitos Orah), manusia pertama wanita sakti Putri Naga melahirkan anak kembar, seorang anak laki manusia normal dan saudara kembarnya seekor kadal (Komodo). Sehingga, penduduk desa asli pulau komodo tak berani membunuh buaya darat raksasa ini karena menganggap naga-naga itu adalah leluhur se-pupu kandung mereka yang mengamuk jika dilukai.",
        citationIds: ["ntt-ref-komodo"],
      }
    ],
    referenceIds: ["ntt-ref-flores", "ntt-ref-komodo"],
  },

  contemporary: {
    introduction: [
      {
        id: "ntt-cont-01",
        content: "NTT terjebak pada ketidaksetaraan raksasa: pesisir komodo ditaburi resor mewah super premium, sementara pedalaman Timor berjuang melawan gizi buruk (Stunting) parah.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ntt-cont-02",
        content: "Labuan Bajo telah ditetapkan sebagai Destinasi Wisata Super Prioritas, mengundang arus miliaran rupiah devisa ke NTT. Namun demikian, PR terbesar provinsi ini adalah kekeringan esktrem karena rendahnya curah hujan dan kegagalan panen rutin. Mengatasinya, pemerintah mati-matian membangun 7 bendungan raksasa baru di NTT untuk menyelamatkan nasib pertanian dan mengakhiri rekor persentase stunting terburuk se-Indonesia.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "ntt-travel-01",
        content: "Merasakan NTT tidak cukup semalam; belilah paket 'Liveaboard' (tidur bermalam hari-hari di kapal kayu phinisi) untuk mengeksplor laut liar.",
        citationIds: ["ntt-ref-komodo"],
      }
    ],
    etiquette: [
      {
        id: "ntt-travel-02",
        content: "Jika wanita Anda sedang datang bulan (haid), dilarang sangat keras mengikuti trekking menyusuri sabana Pulau Komodo karena penciuman naga liar purba sangat sensitif terhadap darah mentah 5 kilometer maut jauhnya. Jangan pernah memberikan makanan kepada hewan liar. Jika diajak minum 'Moke' (tuak) oleh warga Sumba/Timor, minumlah satu sloki sebagai tanda penghormatan persahabatan, karena arak adalah perlambang keterbukaan rumah orang timur. Gunakan kacamata hitam karena matahari NTT sangat panas menusuk dibanding Jawa.",
        citationIds: ["ntt-ref-komodo", "ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-komodo", "ntt-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:42:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ntt-ref-bps",
    "ntt-ref-wbtb",
    "ntt-ref-komodo",
    "ntt-ref-flores",
    "ntt-ref-marapu"
  ]
};
