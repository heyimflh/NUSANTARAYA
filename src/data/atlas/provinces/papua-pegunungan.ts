import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaPegununganReferences: ScientificReference[] = [
  {
    id: "ppg-ref-bps",
    title: "Provinsi Papua Pegunungan Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Pegunungan"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua Pegunungan",
    url: "https://papuapegunungan.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "ppg-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua Pegunungan",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "ppg-ref-archbold",
    title: "Unknown New Guinea (The Archbold Expedition 1938)",
    authors: ["Archbold, Richard"],
    year: 1941,
    publisher: "National Geographic Magazine",
    url: "https://en.wikipedia.org/wiki/Archbold_Expeditions",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["history", "geography"],
  },
  {
    id: "ppg-ref-dani",
    title: "Under the Mountain Wall: A Chronicle of Two Seasons in Stone Age New Guinea",
    authors: ["Matthiessen, Peter"],
    year: 1962,
    publisher: "Viking Press",
    url: "https://en.wikipedia.org/wiki/Dani_people",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["society", "culture"],
  },
  {
    id: "ppg-ref-habema",
    title: "Ecology of the Lorentz National Park and Habema",
    authors: ["Petocz, Ronald G."],
    year: 1989,
    publisher: "WWF",
    url: "https://id.wikipedia.org/wiki/Taman_Nasional_Lorentz",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["papua-pegunungan"],
    topicIds: ["biodiversity", "destinations"],
  }
];

export const papuaPegununganAtlas: ProvinceAtlas = {
  provinceId: "papua-pegunungan",
  slug: "papua-pegunungan",
  title: "Papua Pegunungan",
  tagline: "Lembah Baliem, Roh Mumi Hitam di Atas Awan (La-Pago)",
  summary: [
    {
      id: "ppg-sum-01",
      content: "Tersembunyi di balik awan raksasa Pegunungan Jayawijaya, Provinsi Papua Pegunungan (DOB 2022 / Wilayah Adat La-Pago) adalah satu-satunya provinsi di Indonesia yang tidak memiliki lautan sama sekali (Landlocked). Jantungnya berdetak di Lembah Baliem (Wamena), sebuah kanvas peradaban purba tempat suku Dani, Lani, dan Yali merawat mumi leluhur mereka, menyayat jari demi duka, dan mengorbankan ratusan babi dalam tradisi panas Bakar Batu. Wilayah ini secara biologis sangat subur dan magis, meski dibayangi ekstremnya penerbangan perintis udara tunggal dan rentannya stabilitas keamanan komunal di ceruk ngarai yang dalam.",
      citationIds: ["ppg-ref-bps", "ppg-ref-archbold", "ppg-ref-dani"],
    }
  ],
  quickFacts: [
    { id: "ppg-qf-01", label: "Ibu Kota", value: "Wamena (Jayawijaya)", citationIds: ["ppg-ref-bps"] },
    { id: "ppg-qf-02", label: "Luas Wilayah", value: "52.397,12 km²", citationIds: ["ppg-ref-bps"], dataYear: 2024 },
    { id: "ppg-qf-03", label: "Populasi", value: "1.444.606 jiwa", citationIds: ["ppg-ref-bps"], dataYear: 2023 },
    { id: "ppg-qf-04", label: "Karakteristik Unik", value: "Landlocked (Tanpa Pesisir/Laut)", citationIds: ["ppg-ref-bps"] },
    { id: "ppg-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["ppg-ref-bps"] },
    { id: "ppg-qf-06", label: "Gubernur", value: "Velix Wanggai (Pj.)", citationIds: ["ppg-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ppg-geo-01",
        content: "Ribuan meter di atas permukaan laut, di mana tidak ada jalan darat antar-kabupaten yang tidak menembus jurang maut berlapis kabut putih tebal.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ppg-geo-02",
        content: "Provinsi ini murni didominasi barisan raksasa Pegunungan Tengah (Central Cordillera) Papua. Kabupaten Jayawijaya membentang di Lembah Baliem yang landai nan hijau subur, dikelilingi pegunungan tinggi 2.500 - 4.000 mdpl (Nduga, Lanny Jaya, Tolikara, Yahukimo, Yalimo). Akibat topografi ini, tidak ada satu pun pelabuhan laut. Satu-satunya urat nadi logistik massal hanyalah via kargo udara (pesawat perintis Hercules atau Caravan) ke Bandara Wamena, melintasi celah bukit sempit (Pass) yang mematikan dan sering tertutup kabut kilat.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    referenceIds: ["ppg-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "ppg-his-01",
        content: "Lembah peradaban ini luput dari penglihatan dunia luar hingga sebuah pesawat pembom air mengintip dari langit pada malam PD II.",
        citationIds: ["ppg-ref-archbold"],
      }
    ],
    timeline: [
      {
        id: "ppg-era-01",
        period: "Zaman Batu – 1938",
        title: "Isolasi Peradaban Grand Valley",
        description: "Suku Dani membangun sistem irigasi pertanian tingkat tinggi (Hipere/Ubi Jalar) dan peternakan babi masif di lembah Baliem, hidup sepenuhnya tanpa menyadari adanya peradaban modern besi atau manusia berkulit putih di luar lembah mereka.",
        citationIds: ["ppg-ref-dani"],
      },
      {
        id: "ppg-era-02",
        period: "23 Juni 1938",
        title: "Penemuan oleh Richard Archbold",
        description: "Penjelajah miliarder Amerika, Richard Archbold, sedang menerbangkan pesawat terbang amfibi Guba II saat secara tidak sengaja menemukan dan memotret lembah subur luas berpenduduk 50.000 jiwa (Lembah Baliem/Grand Valley) di jantung Papua yang tak pernah tercatat peta manapun.",
        citationIds: ["ppg-ref-archbold"],
      },
      {
        id: "ppg-era-03",
        period: "1950 – 1960an",
        title: "Masuknya Misionaris Barat",
        description: "Zending Kristen Barat berdatangan terjun menggunakan pesawat kecil kecil/seaplane. Mereka menghentikan kebiasaan perang suku buta (kanibalisme ritual) dan menterjemahkan Alkitab ke dalam bahasa Dani, meski harus menghadapi resiko kematian dibunuh panah.",
        citationIds: ["ppg-ref-dani"],
      },
      {
        id: "ppg-era-04",
        period: "2022",
        title: "Pemekaran Provinsi Papua Pegunungan",
        description: "Pemerintah Jakarta mengesahkan daerah ini (La-Pago) menjadi provinsi baru otonom, dalam upaya untuk memperpendek rentang kendali birokrasi pemerintahan dari Jayapura yang selama ini harus ditempuh dengan biaya pesawat carter ekstrem mahal.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    referenceIds: ["ppg-ref-archbold", "ppg-ref-dani", "ppg-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "ppg-soc-01",
        content: "Rumpun masyarakat La-Pago sangat bergantung pada kekuatan fisik untuk berjalan kaki lintas gunung berhari-hari dan menahan suhu beku malam tanpa baju rajut.",
        citationIds: ["ppg-ref-dani"],
      }
    ],
    socialStructure: [
      {
        id: "ppg-soc-02",
        content: "Didominasi oleh tiga suku raksasa: Dani, Lani, dan Yali (ditambah Nduga dan Mek). Laki-laki memegang kuasa perang dan adat (sering mengenakan pelindung penis/Koteka berbahan buah labu botol/Holim), sedangkan wanita memikul tas Noken rajut menggunakan kepala, membawa hasil ladang hipere (ubi) berat dan anak babi sekaligus. Simbol kekayaan dan status sosial diukur secara mutlak dari jumlah babi yang dimiliki dan jumlah nyawa musuh (pada zaman dahulu) yang ditaklukkan. Kini, agama Kristen menjadi perekat universal menggantikan tradisi animis-medis shaman (Dukun).",
        citationIds: ["ppg-ref-dani", "ppg-ref-bps"],
      }
    ],
    referenceIds: ["ppg-ref-dani", "ppg-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "ppg-cul-01",
        content: "Kebudayaan mereka direkam di atas kulit tubuh (luka iris) dan batu panas, merayakan kematian serta kelahiran kehidupan alam yang tak kenal ampun.",
        citationIds: ["ppg-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ppg-cul-item-01",
        category: "Ritual Pemutusan Jari Tangan",
        title: "Iki Palek (Potong Jari)",
        description: "Tradisi (yang kini mulai dilarang keras) Suku Dani untuk mengungkapkan kesedihan mendalam atas kematian anggota keluarga dekat. Para wanita akan memotong ruas jari mereka menggunakan kapak batu; jumlah jari yang terpotong mencerminkan jumlah duka kematian. Banyak wanita tua di Wamena yang kehilangan seluruh jari tangannya hingga sisa telapak saja.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-cul-item-02",
        category: "Pesta Masak Komunal Raksasa",
        title: "Bakar Batu (Barapen)",
        description: "Festival syukuran massal (menyambut kelahiran/pernikahan/perdamaian/Gubernur). Batu-batu sungai dibakar hingga memerah menyala, lalu ditumpuk bertingkat ke dalam lubang tanah dalam formasi selang-seling bersama sayuran (hipere, paku) dan ratusan potong daging Babi. Di atasnya ditutup rumput ilalang berjam-jam untuk memasak lambat (slow cooking) menggunakan uap panas bumi.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-cul-item-03",
        category: "Karnaval Turis Internasional",
        title: "Festival Budaya Lembah Baliem (FBLB)",
        description: "Acara tahunan setiap bulan Agustus (Distrik Walesi), menampilkan pertunjukan kolosal atraksi perang-perangan antar suku raksasa (dengan ratusan pria ber-koteka membawa tombak/panah meliuk-liuk di padang ilalang). Sering dihadiri turis Eropa bertelanjang dada ikut menari bersama suku lokal.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-cul-item-04",
        category: "Arsitektur Bulat (Sarang)",
        title: "Rumah Adat Honai (Pilamo/Ebe'ai)",
        description: "Gubuk kayu mungil tanpa jendela berbentuk lingkaran jamur dengan atap jerami tebal melengkung. Atap jerami dan tiadanya celah angin berfungsi memerangkap asap perapian di dalam ruangan tengah, berguna menghangatkan suku Dani dari suhu luar (pegunungan 10 derajat celcius) saat tidur berdesakan.",
        citationIds: ["ppg-ref-dani"],
      }
    ],
    referenceIds: ["ppg-ref-wbtb", "ppg-ref-dani"],
  },

  language: {
    introduction: [
      {
        id: "ppg-lang-01",
        content: "Nada suara orang La-Pago sangat panjang beresonansi melintasi bukit, dan bersorak nyaring 'Waaa!' adalah bahasa universal perdamaian bagi mereka.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "ppg-voc-01", word: "Waaaaa... Waaaa...", meaning: "Seruan sorak/teriakan massal tanda setuju/terima kasih/bahagia.", citationIds: ["ppg-ref-wbtb"] },
      { id: "ppg-voc-02", word: "Hipere", meaning: "Ubi Jalar manis putih (Makanan pokok pegunungan).", citationIds: ["ppg-ref-dani"] },
      { id: "ppg-voc-03", word: "Kina / Wam", meaning: "Babi Hutan (Harta paling berharga dan mahal dalam budaya Dani).", citationIds: ["ppg-ref-dani"] },
      { id: "ppg-voc-04", word: "Nayom / Ap", meaning: "Kawan / Laki-Laki.", citationIds: ["ppg-ref-bps"] },
    ],
    referenceIds: ["ppg-ref-bps", "ppg-ref-wbtb", "ppg-ref-dani"],
  },

  culinary: {
    introduction: [
      {
        id: "ppg-culi-01",
        content: "Tanpa laut dan pabrik industri, bahan pangan Wamena didominasi hasil kebun organik super-manis yang dipanaskan di atas batu kali dan kopi kelas dunia.",
        citationIds: ["ppg-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ppg-culi-item-01",
        title: "Hipere (Ubi) Bakar Batu",
        description: "Ubi jalar lokal berukuran gempal yang dimasak dalam tumpukan bakar batu. Teksturnya sangat lunak seperti pasta keju dan berasa luar biasa manis karamel tanpa tambahan gula sama sekali akibat dinginnya iklim tanah yang menyuburkan glukosa alami umbi.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-culi-item-02",
        title: "Babi (Wam) Bakar Batu",
        description: "Daging babi yang disembelih tanpa ditusuk (dipanah) lalu dikukus tumpuk bersama daun pakis pegunungan di dalam lubang batu membara. Lemak dan minyak babinya meleleh menyerap merata melembabkan seluruh sayur di dalam lubang.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-culi-item-03",
        title: "Udang Selingkuh (Sungai Baliem)",
        description: "Udang air tawar raksasa yang secara aneh memiliki capit/capit besar layaknya kepiting bakau (karena itulah dinamai udang selingkuh, dianggap hasil perselingkuhan udang dengan kepiting). Digoreng mentega/asam manis di restoran Wamena.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-culi-item-04",
        title: "Kopi Arabika Wamena / Tiom",
        description: "Ditanam tanpa pestisida kimia di ketinggian ekstrem lembah (Organic Specialty Arabica). Memiliki profil rasa chocolatey, floral ringan, asam buah bersih, dan crema tebal, menjadi primadona incaran roastery (kedai kopi) Eropa dan Amerika.",
        citationIds: ["ppg-ref-wbtb"],
      }
    ],
    referenceIds: ["ppg-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ppg-bio-01",
        content: "Udara beku dataran tinggi tidak mengizinkan keberadaan nyamuk malaria, namun membesarkan tanaman paku pohon purba pemakan kabut.",
        citationIds: ["ppg-ref-habema"],
      }
    ],
    species: [
      {
        id: "ppg-bio-item-01",
        category: "Avifauna Salju Khatulistiwa",
        title: "Burung Isap-madu / MacGregor's Honeyeater",
        description: "Burung alpin besar bewarna hitam pekat berhias pial oranye terang layaknya topeng. Hanya ditemukan di atas ketinggian bersalju basah 3.000 mdpl (Danau Habema & Puncak Trikora).",
        citationIds: ["ppg-ref-habema"],
      },
      {
        id: "ppg-bio-item-02",
        category: "Krustasea Sungai Mutan",
        title: "Cherax (Udang Crayfish Endemik)",
        description: "Udang air tawar endemik sungai pegunungan berbatu (termasuk Udang Selingkuh). Memiliki cangkang warna biru gelap mencolok yang menutupi capit berbulu keras (untuk mencengkeram batu saat arus sungai meluap).",
        citationIds: ["ppg-ref-habema"],
      },
      {
        id: "ppg-bio-item-03",
        category: "Flora Hutan Berkabut Alpin",
        title: "Paku Tiang Purba (Cyathea spp.)",
        description: "Pakis (Paku) berbatang kayu hitam keras setinggi pohon kelapa yang tumbuh lebat seperti sarang laba-laba raksasa di sepanjang lereng gunung menuju Danau Habema, seringkali berlapis es tebal pada waktu subuh.",
        citationIds: ["ppg-ref-habema"],
      }
    ],
    referenceIds: ["ppg-ref-habema"],
  },

  destinations: {
    introduction: [
      {
        id: "ppg-dest-01",
        content: "Wisatawan asing rela membayar ribuan dolar menyewa pemandu (guide) hanya untuk sekadar berjalan kaki lintas bukit lumpur berminggu-minggu menemui peradaban batu.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    items: [
      {
        id: "ppg-dest-item-01",
        category: "Wisata Sejarah Mistik Etnis",
        title: "Desa Jiwika & Mumi Wimotok Mabel",
        description: "Di atas bukit kecil utara Wamena (Desa Kurima/Jiwika), tersimpan Mumi seorang kepala suku panglima perang besar (Wimotok Mabel) berumur nyaris 300 tahun. Mumi ini tidak dibalsem kain perban mesir, melainkan dihitamkan keras berkerut (di-smoke) dengan cara diasap di atas perapian tungku kayu babi perlahan-lahan selama berbulan-bulan usai kematiannya.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-dest-item-02",
        category: "Anomali Geologi Pegunungan",
        title: "Pasir Putih Aikima",
        description: "Hamparan perbukitan miring (bukan di pinggir laut) tapi anehnya dipenuhi pasir putih tebal asin yang dikelilingi rumput ilalang. Fenomena ini membuktikan bahwa jutaan tahun lalu barisan Pegunungan Jayawijaya ini adalah dasar laut (zona abisal) yang terangkat karena tabrakan lempeng tektonik.",
        citationIds: ["ppg-ref-bps"],
      },
      {
        id: "ppg-dest-item-03",
        category: "Danau Tertinggi Indonesia (Zona Es)",
        title: "Danau Habema (Taman Nasional Lorentz)",
        description: "Danau rawa gambut membeku yang terletak di ketinggian sangat esktrem (3.220 mdpl) di bawah kaki tebing Puncak Trikora. Suhu airnya sering mendekati 0 derajat celcius, dan pepohonan sekitarnya gundul kerdil (alpine tundra).",
        citationIds: ["ppg-ref-habema"],
      },
      {
        id: "ppg-dest-item-04",
        category: "Trekking Lembah Kematian Hijau",
        title: "Lembah Baliem (Wamena Trekking)",
        description: "Petualangan menantang maut bagi turis asing (Hiking) menembus desa Suku Yali menyusuri aliran keras Sungai Baliem, harus melewati puluhan jembatan gantung (rotan akar merambat) reot yang berayun-ayun mengerikan di atas jurang sungai berbatu tajam.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    referenceIds: ["ppg-ref-wbtb", "ppg-ref-bps", "ppg-ref-habema"],
  },

  stories: {
    introduction: [
      {
        id: "ppg-story-01",
        content: "Kepala suku yang hebat tidak dikubur, ia dipanaskan menjadi patung arang untuk menakuti panah musuh pada perang masa depan.",
        citationIds: ["ppg-ref-dani"],
      }
    ],
    stories: [
      {
        id: "ppg-story-item-01",
        title: "Kisah Mumi Hitam Wimotok",
        description: "Wimotok Mabel pada zamannya adalah jawara perang tak terkalahkan. Sebelum meninggal, ia berwasiat agar tubuhnya tidak dikubur, melainkan diasap (mumi) hitam agar arwah (kekuatan magis perang/kesuburannya) tetap tinggal melindungi keturunan Suku Dani di Lembah Jiwika selamanya.",
        citationIds: ["ppg-ref-wbtb"],
      },
      {
        id: "ppg-story-item-02",
        title: "Mitos Anjing Menangis (Suku Yali)",
        description: "Bagi masyarakat pedalaman (Yali/Mek), anjing (Yengge) bukanlah sekadar hewan penjaga babi peliharaan, tapi sahabat arwah. Mereka sering memiliki pantangan mengkonsumsi anjing kesayangan, karena meyakini jika babi mati kelaparan, anjinglah yang menangis menyayat di malam hari memanggil arwah leluhur turun tangan.",
        citationIds: ["ppg-ref-dani"],
      }
    ],
    referenceIds: ["ppg-ref-dani", "ppg-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "ppg-cont-01",
        content: "Wilayah Papua Pegunungan adalah daerah operasi pemulihan sipil paling pelik (tingkat kesulitan merah) di Indonesia akibat isolasi geografis logistik.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ppg-cont-02",
        content: "Sebagian kabupaten (Nduga, Yahukimo, Lanny Jaya) secara periodik diganggu oleh gerakan separatis bersenjata (KKB), menyebabkan pembangunan jalan Trans Papua sering terhenti. Harga semen dan mi instan di kabupaten udara (seperti Puncak/Ilaga) bisa 10 hingga 20 kali lipat harga Jakarta akibat ketergantungan pada penerbangan pesawat kecil Susi Air/MAF. Pemerintah menggenjot pembangunan fisik otonomi khusus provinsi baru secara hiperakselerasi untuk meningkatkan daya beli warga.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    referenceIds: ["ppg-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "ppg-travel-01",
        content: "Pendaratan di Wamena adalah saat di mana Anda akan melihat barisan pesawat militer hijau bersanding dengan babi babi gemuk yang diangkut menggunakan kargo udara Hercules.",
        citationIds: ["ppg-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "ppg-travel-02",
        content: "Dilarang memotret diam-diam orang asli Papua yang memakai Koteka (atau wanita berpakaian adat Noken) di jalanan/pasar Wamena tanpa izin dan kesepakatan memberi bayaran uang (Tip), karena mereka mencari nafkah ekonomi pariwisata dari foto turis (jika dilanggar akan diprotes keras beramai-ramai). Saat mengemudi/naik mobil pick-up lintas lembah, jika tidak sengaja menabrak anak babi peliharaan warga yang melintas di jalan raya trans Papua (Wamena), bersiaplah membayar denda adat ganti rugi (puluhan juta rupiah per ekor babi) yang nilainya bisa jauh lebih mahal daripada harga nyawa orang tabrakan biasa.",
        citationIds: ["ppg-ref-wbtb", "ppg-ref-dani"],
      }
    ],
    referenceIds: ["ppg-ref-bps", "ppg-ref-wbtb", "ppg-ref-dani"],
  },

  lastReviewedAt: "2026-07-13T00:52:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ppg-ref-bps",
    "ppg-ref-wbtb",
    "ppg-ref-archbold",
    "ppg-ref-dani",
    "ppg-ref-habema"
  ]
};
