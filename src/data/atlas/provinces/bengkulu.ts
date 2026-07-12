import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const bengkuluReferences: ScientificReference[] = [
  {
    id: "bkl-ref-bps",
    title: "Provinsi Bengkulu Dalam Angka 2024",
    authors: ["BPS Provinsi Bengkulu"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Bengkulu",
    url: "https://bengkulu.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["bengkulu"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "bkl-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Bengkulu",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["bengkulu"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "bkl-ref-sejarah",
    title: "Bencoolen: Sejarah Kolonial Inggris di Bengkulu",
    authors: ["Siddik, Abdullah"],
    year: 1996,
    publisher: "Balai Pustaka",
    url: "https://id.wikipedia.org/wiki/Bengkulu_(provinsi)",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["bengkulu"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "bkl-ref-sukurejang",
    title: "Hukum Adat Rejang",
    authors: ["Hazairin"],
    year: 1936,
    publisher: "Bataviaasch Genootschap",
    url: "https://id.wikipedia.org/wiki/Suku_Rejang",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["bengkulu"],
    topicIds: ["society", "language"],
  },
  {
    id: "bkl-ref-rafflesia",
    title: "Rafflesia arnoldii: The Biggest Flower in the World",
    authors: ["Meijer, Willem"],
    year: 1997,
    publisher: "Flora Malesiana",
    url: "https://en.wikipedia.org/wiki/Rafflesia_arnoldii",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["bengkulu"],
    topicIds: ["biodiversity"],
  }
];

export const bengkuluAtlas: ProvinceAtlas = {
  provinceId: "bengkulu",
  slug: "bengkulu",
  title: "Bengkulu",
  tagline: "Bumi Rafflesia, Jejak Pengasingan Sang Proklamator",
  summary: [
    {
      id: "bkl-sum-01",
      content: "Bengkulu adalah satu-satunya provinsi di Indonesia yang memiliki jejak kuat sejarah kolonisasi Kerajaan Inggris (EIC/Bencoolen), yang ditandai dengan kokohnya Benteng Marlborough. Berada tersembunyi di pesisir barat Pegunungan Bukit Barisan, Bumi Rafflesia ini menjadi saksi bisu pengasingan Presiden pertama RI, Soekarno, sekaligus tempat lahirnya Fatmawati—penjahit Sang Saka Merah Putih.",
      citationIds: ["bkl-ref-bps", "bkl-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "bkl-qf-01", label: "Ibu Kota", value: "Bengkulu", citationIds: ["bkl-ref-bps"] },
    { id: "bkl-qf-02", label: "Luas Wilayah", value: "19.919,33 km²", citationIds: ["bkl-ref-bps"], dataYear: 2024 },
    { id: "bkl-qf-03", label: "Populasi", value: "2.086.883 jiwa", citationIds: ["bkl-ref-bps"], dataYear: 2023 },
    { id: "bkl-qf-04", label: "Suku Mayoritas", value: "Jawa (Trans), Rejang, Serawai", citationIds: ["bkl-ref-bps"] },
    { id: "bkl-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["bkl-ref-bps"] },
    { id: "bkl-qf-06", label: "Gubernur", value: "Rohidin Mersyah", citationIds: ["bkl-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "bkl-geo-01",
        content: "Geografi Bengkulu membujur panjang bagai pita (memanjang dari barat laut ke tenggara), terjepit di antara garis pantai terjal Samudra Hindia dan punggung curam Pegunungan Bukit Barisan.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "bkl-geo-02",
        content: "Dataran rendahnya sangat sempit, ombak di pesisir baratnya sangat besar karena berhadapan langsung dengan samudra lepas (seperti halnya Nias dan Mentawai). Selain daratan utama di Pulau Sumatera, Bengkulu juga memiliki satu pulau terluar berpenghuni yang cukup terisolasi: Pulau Enggano.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "bkl-his-01",
        content: "Bengkulu awalnya diperintah oleh raja-raja lokal yang tunduk pada Kesultanan Banten, sebelum akhirnya diserahkan Banten kepada Inggris pada akhir abad ke-17.",
        citationIds: ["bkl-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "bkl-era-01",
        period: "1685 – 1824",
        title: "Bencoolen (Koloni Inggris EIC)",
        description: "Kongsi Dagang Inggris (EIC) membangun benteng pertahanan raksasa 'Fort Marlborough' sebagai pusat monopoli komoditas lada dan rempah di Sumatera pesisir barat. Thomas Stamford Raffles menjabat sebagai Gubernur Jenderal Inggris di sini sebelum pindah dan mendirikan Singapura.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-era-02",
        period: "1824",
        title: "Traktat London (Tukar Guling)",
        description: "Inggris dan Belanda membuat perjanjian (Traktat London) untuk menukar wilayah jajahan mereka: Inggris menyerahkan Bengkulu (Bencoolen) kepada Belanda, dan sebagai gantinya Belanda menyerahkan Singapura dan Melaka kepada Inggris.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-era-03",
        period: "1938 – 1942",
        title: "Pengasingan Bung Karno",
        description: "Ir. Soekarno (Bung Karno) dibuang oleh pemerintah kolonial Belanda ke pengasingan (tahanan kota) di Bengkulu. Di sinilah ia merancang arsitektur masjid (Masjid Jamik Bengkulu) dan bertemu dengan Fatmawati yang kelak menjadi Ibu Negara RI.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-era-04",
        period: "18 November 1968",
        title: "Pembentukan Provinsi",
        description: "Bengkulu resmi memisahkan diri dari Provinsi Sumatera Selatan, menjadi provinsi ke-26 di Indonesia.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-sejarah", "bkl-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "bkl-soc-01",
        content: "Bengkulu merupakan titik pertemuan peradaban agraris bukit (Suku Rejang dan Serawai) dengan peradaban pesisir dagang (Melayu Bengkulu).",
        citationIds: ["bkl-ref-sukurejang"],
      }
    ],
    socialStructure: [
      {
        id: "bkl-soc-02",
        content: "Suku Rejang (suku asli pedalaman dengan aksara kuno Kaganga) dan Suku Serawai adalah penduduk pribumi dominan. Namun secara statistik modern, kelompok pendatang transmigran beretnis Jawa mencakup persentase terbesar di Bengkulu berkat program transmigrasi besar-besaran era Orde Baru.",
        citationIds: ["bkl-ref-sukurejang", "bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-sukurejang", "bkl-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "bkl-cul-01",
        content: "Budaya Bengkulu adalah saksi terjadinya akulturasi kental antara peninggalan Muslim-India penganut Syiah (pekerja bangunan Benteng Inggris) dan kearifan lokal Melayu pesisir.",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "bkl-cul-item-01",
        category: "Festival & Ritual Keagamaan",
        title: "Festival Tabot",
        description: "Upacara tradisional untuk memperingati gugurnya Husein (cucu Nabi Muhammad SAW) dalam Perang Karbala (10 Muharram). Budaya ini dibawa oleh para pekerja ('sipai') Muslim India-Syiah yang didatangkan Inggris. Masyarakat mengarak bangunan/menara (Tabot) tinggi dan membuangnya ke laut.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-cul-item-02",
        category: "Kriya Tekstil",
        title: "Kain Besurek",
        description: "Batik tradisional Bengkulu yang menggunakan motif kaligrafi tulisan Arab gundul (huruf Hijaiyah tanpa makna spesifik, hanya ornamen) atau 'Be-surek' (Bersurat/Ditulis). Sering dipadukan dengan motif Bunga Rafflesia.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-cul-item-03",
        category: "Seni Tari Pedalaman",
        title: "Tari Kejei",
        description: "Tarian adat sakral suku Rejang yang hanya ditampilkan dalam upacara besar seperti panen raya (Bimbang Ulu). Menggambarkan kemakmuran dan ucapan syukur masyarakat yang menetap di lereng gunung.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-cul-item-04",
        category: "Alat Musik",
        title: "Dhol (Dol)",
        description: "Alat musik beduk/kendang berbentuk gembung besar asal India Selatan yang dimainkan secara rampak (bersamaan) untuk mengiringi perayaan Festival Tabot dengan irama bertempo cepat dan heroik.",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    referenceIds: ["bkl-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "bkl-lang-01",
        content: "Bahasa sehari-hari di pesisir adalah Bahasa Melayu Bengkulu (berbeda dengan Palembang karena dipengaruhi dialek Minangkabau pesisir). Di dataran tinggi, Bahasa Rejang masih sangat dominan digunakan.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "bkl-voc-01", word: "Apo kaba?", meaning: "Apa kabar? (Bahasa Melayu Bengkulu).", citationIds: ["bkl-ref-bps"] },
      { id: "bkl-voc-02", word: "Ambo / Sayo", meaning: "Saya (Ambo digunakan sebagai serapan langsung dari bahasa Minangkabau pesisir barat).", citationIds: ["bkl-ref-bps"] },
      { id: "bkl-voc-03", word: "Mok / Uku", meaning: "Saya (Bahasa Rejang).", citationIds: ["bkl-ref-sukurejang"] },
      { id: "bkl-voc-04", word: "Pai / Meng", meaning: "Pergi (Melayu Bengkulu).", citationIds: ["bkl-ref-bps"] },
    ],
    referenceIds: ["bkl-ref-bps", "bkl-ref-sukurejang"],
  },

  culinary: {
    introduction: [
      {
        id: "bkl-culi-01",
        content: "Makanan tradisional Bengkulu kaya akan kelapa/santan, fermentasi durian (mirip Jambi/Palembang), serta resep olahan ikan unik menggunakan kelapa gongseng (tanpa santan basah).",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "bkl-culi-item-01",
        title: "Pendap",
        description: "Ikan (biasanya ikan laut/pantai) yang dicampur dengan parutan kelapa muda berbumbu pedas, dibungkus berlapis-lapis dengan daun talas, diikat dengan tali rafia/rotan, lalu direbus sangat lama hingga 8 jam agar daun talas tidak gatal saat dimakan.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-culi-item-02",
        title: "Bagar Hiu",
        description: "Gulai khas (yang ironisnya menggunakan daging ikan hiu atau ikan pari laut) tanpa santan, melainkan menggunakan parutan kelapa yang disangrai (gongseng) hingga keluar minyaknya. Makanan ini disebut-sebut sebagai salah satu favorit Bung Karno saat diasingkan.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-culi-item-03",
        title: "Lempuk Durian",
        description: "Camilan semacam dodol namun bahan dasarnya nyaris 100% daging durian matang tanpa (atau sangat sedikit) campuran tepung. Memiliki aroma durian yang sangat pekat.",
        citationIds: ["bkl-ref-wbtb"],
      },
      {
        id: "bkl-culi-item-04",
        title: "Kue Bay Tat",
        description: "Kue pai tradisional manis peninggalan budaya keraton/bangsawan lokal. Bentuknya kotak besar tebal, berbahan telur, terigu, dan santan, dilapisi oleh selai nanas basah di bagian atasnya.",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    referenceIds: ["bkl-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "bkl-bio-01",
        content: "Bengkulu menjadi pusat dunia ketika Thomas Stamford Raffles dan Dr. Joseph Arnold menemukan bunga raksasa (terbesar di bumi) di belantara hutan Bukit Barisan.",
        citationIds: ["bkl-ref-rafflesia"],
      }
    ],
    species: [
      {
        id: "bkl-bio-item-01",
        category: "Flora (Rekor Dunia & Maskot)",
        title: "Bunga Rafflesia Arnoldii",
        description: "Bunga raksasa (tanpa akar, batang, atau daun) berkelopak lima merah berbintik-bintik putih. Ia mengeluarkan bau busuk untuk menarik serangga (lalat) guna penyerbukan. Bunga ini hanya hidup menjalar parasitik di hutan-hutan lembab Sumatera (Bengkulu merupakan salah satu habitat terbesarnya).",
        citationIds: ["bkl-ref-rafflesia"],
      },
      {
        id: "bkl-bio-item-02",
        category: "Flora Ikonik Lainnya",
        title: "Bunga Bangkai (Amorphophallus titanum)",
        description: "Flora raksasa yang sering tertukar dengan Rafflesia. Bunga bangkai tumbuh vertikal memanjang (berbentuk bonggol tegak/spadix) dan mekar sangat jarang.",
        citationIds: ["bkl-ref-rafflesia"],
      },
      {
        id: "bkl-bio-item-03",
        category: "Fauna Mamalia (Maskot)",
        title: "Beruang Madu (Helarctos malayanus)",
        description: "Spesies beruang terkecil di dunia. Memiliki corak putih/krem berbentuk huruf 'U' atau lingkaran di dadanya. Beruang ini adalah maskot fauna dari Provinsi Bengkulu.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-rafflesia", "bkl-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "bkl-dest-01",
        content: "Situs-situs pariwisata Bengkulu dipenuhi oleh tapak tilas benteng pertahanan batu marmer era militer Inggris (satu-satunya di Indonesia) dan nostalgia founding father Indonesia.",
        citationIds: ["bkl-ref-sejarah"],
      }
    ],
    items: [
      {
        id: "bkl-dest-item-01",
        category: "Sejarah Kolonial",
        title: "Benteng Marlborough (Fort Marlborough)",
        description: "Benteng terkuat Inggris kedua di wilayah timur (setelah Benteng St. George di India), dibangun 1713. Memiliki bentuk arsitektur (jika dilihat dari atas) menyerupai punggung kura-kura, dilengkapi meriam dan sel penjara bawah tanah.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-dest-item-02",
        category: "Sejarah Proklamator",
        title: "Rumah Pengasingan Bung Karno & Rumah Fatmawati",
        description: "Di rumah peristirahatan ini tersimpan rapi sepeda ontel kesayangan Bung Karno, ranjang tidur kuno, serta lemari buku aslinya. Di dekatnya juga bisa dikunjungi rumah kayu keluarga tempat Ibu Fatmawati menenun masa mudanya.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-dest-item-03",
        category: "Alam Pantai",
        title: "Pantai Panjang",
        description: "Garis pantai berpasir putih mulus membentang lebih dari 7 kilometer menghadap Samudra Hindia, sangat ideal untuk berjalan sore dan jogging (meski ombaknya terlalu besar/rawan untuk berenang).",
        citationIds: ["bkl-ref-bps"],
      },
      {
        id: "bkl-dest-item-04",
        category: "Ekowisata Terasing",
        title: "Pulau Enggano",
        description: "Pulau kecil dan terluar di Samudra Hindia (bisa ditempuh via feri 12 jam). Pulau ini menaungi Suku Enggano dengan ekosistem laut (snorkeling) yang perawan dan tebing-tebing karang.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-bps", "bkl-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "bkl-story-01",
        content: "Legenda Bengkulu didominasi dengan cerita pembentukan telaga (ular siluman) dan sejarah percintaan romantis sang Proklamator Kemerdekaan di masa pembuangan.",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "bkl-story-item-01",
        title: "Romansa Pengasingan (Soekarno-Fatmawati)",
        description: "Bukan sekadar dongeng, ini adalah roman sejarah nyata. Ketika diasingkan ke Bengkulu, Bung Karno (yang saat itu masih beristrikan Inggit Garnasih) terpesona dengan gadis penenun lokal, Fatmawati. Percintaan dan dialog-dialog filsafat antara Soekarno dan keluarga Fatmawati menjadi saksi bisu kota Bengkulu dalam merajut awal (embrio) dari kemerdekaan Republik Indonesia.",
        citationIds: ["bkl-ref-sejarah"],
      },
      {
        id: "bkl-story-item-02",
        title: "Legenda Ular Kepala Tujuh",
        description: "Dongeng tentang danau mistis (Danau Tes di Lebong) yang dipercaya dihuni ular raksasa naga berkepala tujuh penjaga harta karun, sehingga melahirkan peringatan bagi warga untuk tidak bertindak sembrono di sekitar danau.",
        citationIds: ["bkl-ref-wbtb"],
      }
    ],
    referenceIds: ["bkl-ref-wbtb", "bkl-ref-sejarah"],
  },

  contemporary: {
    introduction: [
      {
        id: "bkl-cont-01",
        content: "Perekonomian Bengkulu sangat tertutup dan menantang (karena diapit samudra dan punggung gunung). Mereka menggantungkan ekonominya dari pertambangan mineral dan pertanian pedalaman.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    economy: [
      {
        id: "bkl-cont-02",
        content: "Ekspor terbesar adalah batubara dan CPO sawit (yang mengalir melalui Pelabuhan Pulau Baai). Bengkulu juga memiliki sumber energi Geothermal (Panas Bumi) di Lebong. Namun konektivitas logistik darat ke provinsi tetangga (Palembang/Lampung) masih menjadi tantangan utama pembangunan ekonominya.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    referenceIds: ["bkl-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "bkl-travel-01",
        content: "Wisata ke Bengkulu menawarkan ketenangan tempo dulu. Tidak sepadat kota-kota besar di pantai timur Sumatera, Bengkulu adalah tempat ideal untuk menikmati senja sejarah.",
        citationIds: ["bkl-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "bkl-travel-02",
        content: "Perhatikan tanda peringatan dilarang berenang di Pantai Panjang dan pesisir lainnya, ombak 'Rip Current' (arus balik samudra) di pesisir barat Sumatera sangat mematikan. Ketika mengunjungi hutan Taman Nasional/Cagar Alam (Kaba, Seblat) untuk mencari jejak mekar bunga Rafflesia, dilarang keras menyentuh kelopaknya (karena sangat rapuh dan bisa menyebabkan bunga mati secara instan sebelum mekar sempurna).",
        citationIds: ["bkl-ref-rafflesia"],
      }
    ],
    referenceIds: ["bkl-ref-bps", "bkl-ref-rafflesia"],
  },

  lastReviewedAt: "2026-07-13T00:13:00Z",
  contentStatus: "draft",
  referenceIds: [
    "bkl-ref-bps",
    "bkl-ref-wbtb",
    "bkl-ref-sejarah",
    "bkl-ref-sukurejang",
    "bkl-ref-rafflesia"
  ]
};
