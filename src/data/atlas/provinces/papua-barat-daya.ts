import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaBaratDayaReferences: ScientificReference[] = [
  {
    id: "pbd-ref-bps",
    title: "Provinsi Papua Barat Daya Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Barat Daya"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua Barat Daya",
    url: "https://papuabaratdaya.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["geography", "contemporary"],

  },
  {
    id: "pbd-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua Barat Daya",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["culture", "culinary", "stories"],

  },
  {
    id: "pbd-ref-conservation",
    title: "Raja Ampat Marine Protected Area Network",
    authors: ["Conservation International"],
    year: 2020,
    publisher: "Conservation International Indonesia",
    url: "https://www.conservation.org",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["biodiversity", "destinations"],

  },
  {
    id: "pbd-ref-sejarah",
    title: "Sejarah dan Pembentukan Provinsi Papua Barat Daya",
    authors: ["Kementerian Dalam Negeri RI"],
    year: 2022,
    publisher: "Kemendagri",
    url: "https://www.kemendagri.go.id/",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["history"],

  },
  {
    id: "pbd-ref-bahasa",
    title: "Peta Bahasa di Papua Barat dan Papua Barat Daya",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2019,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://petabahasa.kemdikbud.go.id/",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-barat-daya"],
    topicIds: ["language"],

  }
];

export const papuaBaratDayaAtlas: ProvinceAtlas = {
  provinceId: "papua-barat-daya",
  slug: "papua-barat-daya",
  title: "Papua Barat Daya",
  tagline: "Kepingan Surga Terakhir di Ujung Kepala Burung Papua",
  summary: [
    {
      id: "pbd-sum-01",
      content: "Papua Barat Daya adalah provinsi termuda ke-38 di Indonesia. Dikenal di seluruh dunia berkat pesona kepulauan Raja Ampat yang sering dijuluki 'The Last Paradise on Earth', provinsi ini adalah pusat episentrum keanekaragaman hayati laut dunia. Namun di balik lautnya yang memesona, Papua Barat Daya juga menyimpan kekayaan hutan tropis, budaya suku Moi dan Maybrat, serta legenda purba tentang manusia yang lahir dari telur naga.",
      citationIds: ["pbd-ref-bps", "pbd-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "pbd-qf-01", label: "Ibu Kota", value: "Sorong", citationIds: ["pbd-ref-bps"] },
    { id: "pbd-qf-02", label: "Luas Wilayah", value: "39.122,95 km²", citationIds: ["pbd-ref-bps"], dataYear: 2024 },
    { id: "pbd-qf-03", label: "Populasi", value: "603.054 jiwa", citationIds: ["pbd-ref-bps"], dataYear: 2023 },
    { id: "pbd-qf-04", label: "Provinsi Ke-", value: "38 (Dimekarkan 2022)", citationIds: ["pbd-ref-sejarah"] },
    { id: "pbd-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["pbd-ref-bps"] },
    { id: "pbd-qf-06", label: "Gubernur", value: "Mohammad Musa'ad (Pj.)", citationIds: ["pbd-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "pbd-geo-01",
        content: "Secara geografis, Papua Barat Daya terletak di bagian paling ujung barat daya semenanjung Kepala Burung (Vogelkop) Pulau Papua. Wilayahnya mencakup daratan tinggi, pesisir, dan ratusan pulau kecil, dengan kepulauan karst Raja Ampat sebagai ikon utamanya.",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "pbd-geo-02",
        content: "Topografi daratannya bervariasi dari dataran rendah rawa di pesisir Sorong hingga pegunungan karst di kawasan Maybrat (seperti Danau Ayamaru). Di laut, Raja Ampat dipenuhi oleh gugusan pulau-pulau kapur (karst) yang menjulang tinggi, dikelilingi oleh terumbu karang dangkal dan palung laut dalam.",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    referenceIds: ["pbd-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "pbd-his-01",
        content: "Sebelum menjadi entitas provinsi sendiri, wilayah Papua Barat Daya memiliki sejarah panjang yang terhubung dengan Kesultanan Tidore di masa lalu, eksplorasi kolonial Belanda, hingga akhirnya diresmikan sebagai provinsi otonom demi percepatan pembangunan di wilayah Sorong dan sekitarnya.",
        citationIds: ["pbd-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "pbd-era-01",
        period: "Abad ke-15 – 19",
        title: "Pengaruh Kesultanan Tidore",
        description: "Wilayah Raja Ampat dan semenanjung Kepala Burung pernah menjadi wilayah taklukan Kesultanan Tidore. Kesultanan ini menunjuk para pemimpin lokal (Raja) untuk mengumpulkan upeti berupa burung cenderawasih, budak, dan hasil hutan.",
        citationIds: ["pbd-ref-sejarah"],
      },
      {
        id: "pbd-era-02",
        period: "Era Kolonial & Perang Dunia II",
        title: "Pusat Pengeboran & Basis Militer",
        description: "Belanda mulai mengeksplorasi minyak bumi di Klamono, Sorong. Pada Perang Dunia II, Sorong dan wilayah pesisir lainnya sempat diduduki Jepang sebelum direbut kembali oleh pasukan Sekutu di bawah pimpinan Jenderal Douglas MacArthur.",
        citationIds: ["pbd-ref-sejarah"],
      },
      {
        id: "pbd-era-03",
        period: "8 Desember 2022",
        title: "Pembentukan Provinsi",
        description: "Papua Barat Daya resmi dimekarkan dari Provinsi Papua Barat, menjadikannya provinsi ke-38 di Indonesia dengan Kota Sorong sebagai ibu kota provinsinya.",
        citationIds: ["pbd-ref-sejarah"],
      }
    ],
    referenceIds: ["pbd-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "pbd-soc-01",
        content: "Masyarakat asli Papua Barat Daya terdiri dari berbagai suku besar, di antaranya Suku Moi (pemilik hak ulayat di wilayah Sorong), Suku Maybrat, Suku Tehit, dan suku-suku bahari di pesisir Raja Ampat. Mereka memiliki ikatan spiritual yang kuat dengan tanah, laut, dan hutan.",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "pbd-soc-02",
        content: "Kepemimpinan tradisional masih sangat dihormati. Suku Moi, misalnya, memiliki sistem pendidikan adat bernama 'Kambik' tempat para pemuda diajarkan filosofi hidup, cara berburu, dan menjaga kelestarian alam oleh para tetua adat.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    referenceIds: ["pbd-ref-bps", "pbd-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "pbd-cul-01",
        content: "Seni dan budaya di Papua Barat Daya adalah ekspresi langsung dari kehidupan sehari-hari mereka yang dinamis, penuh energi, dan menyatu dengan irama alam.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pbd-cul-item-01",
        category: "Kerajinan Tangan",
        title: "Noken",
        description: "Tas tradisional yang dirajut dari kulit kayu atau serat alami (seperti anggrek hutan) yang digunakan di kepala. Noken telah diakui UNESCO sebagai Warisan Budaya Takbenda yang membutuhkan pelindungan mendesak (2012).",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-cul-item-02",
        category: "Tari Tradisional",
        title: "Tari Yosim Pancar (Yospan)",
        description: "Tarian pergaulan muda-mudi Papua yang sangat dinamis, sering ditampilkan dalam festival atau acara penyambutan. Gerakannya melompat dan menghentak, diiringi alat musik tifa dan gitar.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-cul-item-03",
        category: "Adat Kematian",
        title: "Kain Timor",
        description: "Kain tenun yang sebenarnya berasal dari Nusa Tenggara namun menjadi barang yang sangat berharga dalam kebudayaan Suku Maybrat, digunakan sebagai maskawin (belis), alat tukar, hingga denda adat.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-cul-item-04",
        category: "Alat Musik Tradisional",
        title: "Tifa",
        description: "Alat musik pukul berbentuk tabung yang terbuat dari kayu yang dilubangi dan dilapisi kulit rusa atau biawak. Tifa di wilayah ini memiliki ukiran-ukiran khas yang melambangkan status dan marga.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    referenceIds: ["pbd-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "pbd-lang-01",
        content: "Puluhan bahasa daerah digunakan di wilayah ini, seperti Bahasa Moi, Bahasa Maybrat, Bahasa Tehit, dan Bahasa Biak. Untuk komunikasi antar-suku dan sehari-hari, masyarakat menggunakan Melayu Papua, dialek bahasa Indonesia dengan ritme yang cepat dan unik.",
        citationIds: ["pbd-ref-bahasa"],
      }
    ],
    vocabulary: [
      { id: "pbd-voc-01", word: "Sa / Ko", meaning: "Saya / Kamu (Melayu Papua)", citationIds: ["pbd-ref-bahasa"] },
      { id: "pbd-voc-02", word: "Tra", meaning: "Tidak", citationIds: ["pbd-ref-bahasa"] },
      { id: "pbd-voc-03", word: "Mace / Pace", meaning: "Sapaan untuk Ibu (Perempuan dewasa) / Bapak (Laki-laki dewasa)", citationIds: ["pbd-ref-bahasa"] },
      { id: "pbd-voc-04", word: "Kasuari", meaning: "Sering digunakan sebagai perumpamaan atau nama marga (berasal dari nama burung)", citationIds: ["pbd-ref-bahasa"] },
    ],
    referenceIds: ["pbd-ref-bahasa"],
  },

  culinary: {
    introduction: [
      {
        id: "pbd-culi-01",
        content: "Sagu dan umbi-umbian adalah makanan pokok masyarakat pegunungan dan pesisir Papua Barat Daya. Hasil laut seperti ikan, udang, dan kerang menjadi sumber protein utama yang melimpah.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pbd-culi-item-01",
        title: "Papeda",
        description: "Bubur sagu transparan yang kental dan lengket. Berbeda dengan Maluku yang menggunakan ikan kuah kuning, papeda di Papua sering dihidangkan dengan ikan bakar atau ikan kuah asam pedas.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-culi-item-02",
        title: "Ulat Sagu",
        description: "Sumber protein ekstrim namun lezat bagi masyarakat lokal. Diambil dari batang pohon sagu yang membusuk, ulat ini biasa dimakan mentah (hidup-hidup) atau ditusuk seperti sate lalu dibakar.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-culi-item-03",
        title: "Keladi Tumbuk",
        description: "Olahan umbi talas (keladi) yang direbus hingga empuk kemudian ditumbuk halus. Makanan ini sering menjadi pengganti nasi atau sagu dalam berbagai upacara adat.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-culi-item-04",
        title: "Ikan Bakar Manokwari/Sorong",
        description: "Ikan laut segar (tongkol, baronang, atau cakalang) yang dibakar tanpa banyak bumbu, lalu disiram dengan sambal mentah yang terdiri dari irisan cabai, bawang merah, tomat hijau, dan perasan jeruk nipis.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    referenceIds: ["pbd-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "pbd-bio-01",
        content: "Kepulauan Raja Ampat di Papua Barat Daya diakui oleh para ilmuwan sebagai jantung dari Segitiga Terumbu Karang Dunia (Coral Triangle). Lebih dari 75% spesies karang dunia dapat ditemukan di sini.",
        citationIds: ["pbd-ref-conservation"],
      }
    ],
    species: [
      {
        id: "pbd-bio-item-01",
        category: "Fauna Laut",
        title: "Pari Manta Oseanik & Karang (Manta birostris & alfredi)",
        description: "Ikan pari raksasa yang jinak dan anggun. Perairan Raja Ampat adalah salah satu dari sedikit tempat di dunia di mana kedua spesies Manta (Oseanik dan Karang) dapat ditemukan bersamaan di stasiun pembersihan (cleaning station).",
        citationIds: ["pbd-ref-conservation"],
      },
      {
        id: "pbd-bio-item-02",
        category: "Fauna Laut",
        title: "Hiu Karpet Berbintik (Wobbegong)",
        description: "Spesies hiu unik endemik yang tidak berenang bebas, melainkan lebih sering berdiam diri di dasar karang dan berkamuflase menyerupai karpet (atau rumput laut) berkat 'rumbai' di sekitar mulutnya.",
        citationIds: ["pbd-ref-conservation"],
      },
      {
        id: "pbd-bio-item-03",
        category: "Fauna Darat",
        title: "Burung Cenderawasih Merah (Paradisaea rubra) & Botak (Cicinnurus respublica)",
        description: "Dua spesies Burung Surga yang hanya dapat ditemukan endemik di hutan hujan pulau Waigeo dan Batanta (Raja Ampat). Mereka terkenal dengan tarian kawin (courtship dance) yang sangat memukau di atas dahan pohon tinggi.",
        citationIds: ["pbd-ref-conservation"],
      }
    ],
    referenceIds: ["pbd-ref-conservation"],
  },

  destinations: {
    introduction: [
      {
        id: "pbd-dest-01",
        content: "Destinasi wisata di Papua Barat Daya sebagian besar berpusat pada wisata bahari (menyelam dan snorkeling) kelas dunia di Raja Ampat, serta keindahan alam pegunungan di daerah pedalaman.",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    items: [
      {
        id: "pbd-dest-item-01",
        category: "Alam & Bahari",
        title: "Wayag",
        description: "Ikon utama Raja Ampat. Menawarkan pemandangan tak tertandingi berupa bukit-bukit karst hijau yang menyembul dari lautan biru toska sebening kristal. Menggapai puncaknya membutuhkan pendakian tebing karang terjal yang menantang.",
        citationIds: ["pbd-ref-bps"],
      },
      {
        id: "pbd-dest-item-02",
        category: "Alam & Bahari",
        title: "Piaynemo",
        description: "Sering disebut sebagai 'Mini Wayag'. Aksesnya lebih mudah dengan adanya tangga kayu panjang menuju gardu pandang bintang di atas bukit, menampilkan panorama gugusan pulau karst yang spektakuler.",
        citationIds: ["pbd-ref-bps"],
      },
      {
        id: "pbd-dest-item-03",
        category: "Alam (Darat)",
        title: "Danau Ayamaru",
        description: "Sebuah danau karst di Kabupaten Maybrat dengan air yang sangat jernih kebiruan. Wilayah ini merupakan tempat suci dan asal mula kehidupan bagi suku Maybrat.",
        citationIds: ["pbd-ref-wbtb"],
      },
      {
        id: "pbd-dest-item-04",
        category: "Budaya & Alam",
        title: "Desa Wisata Arborek",
        description: "Desa kecil yang terkenal dengan komitmen konservasi dan keramahan warganya. Wisatawan dapat menyelam tepat di bawah dermaga desa untuk melihat gerombolan ikan dan pari manta.",
        citationIds: ["pbd-ref-conservation"],
      }
    ],
    referenceIds: ["pbd-ref-bps", "pbd-ref-wbtb", "pbd-ref-conservation"],
  },

  stories: {
    introduction: [
      {
        id: "pbd-story-01",
        content: "Mitologi di kawasan Papua Barat Daya banyak berkisah tentang naga, keajaiban laut, dan asal-usul nenek moyang (genealogi) dari kelompok-kelompok klan utama.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "pbd-story-item-01",
        title: "Asal Usul Nama Raja Ampat (Mitos Telur Naga)",
        description: "Menurut legenda, seorang wanita menemukan tujuh butir telur naga raksasa di tepi sungai Waigeo. Empat telur tersebut menetas menjadi bayi laki-laki yang kelak memimpin empat pulau terbesar: Waigeo, Misool, Salawati, dan Batanta (sehingga disebut 'Raja Ampat' atau Empat Raja). Tiga telur lainnya tidak menetas manusia, melainkan menjadi batu, sosok wanita, dan hantu.",
        citationIds: ["pbd-ref-wbtb"],
      }
    ],
    referenceIds: ["pbd-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "pbd-cont-01",
        content: "Pembentukan Provinsi Papua Barat Daya memberikan dorongan besar pada tata kelola wilayah dan pemberdayaan masyarakat adat, menyeimbangkan pembangunan modern dan perlindungan keanekaragaman hayati.",
        citationIds: ["pbd-ref-sejarah"],
      }
    ],
    economy: [
      {
        id: "pbd-cont-02",
        content: "Pariwisata berkelanjutan adalah penggerak ekonomi utama di Raja Ampat, sementara Sorong berkembang pesat sebagai kota industri maritim, logistik, dan pintu gerbang utama (hub) di kawasan timur Indonesia dengan pelabuhan dan bandaranya yang sibuk.",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    referenceIds: ["pbd-ref-bps", "pbd-ref-sejarah"],
  },

  travel: {
    introduction: [
      {
        id: "pbd-travel-01",
        content: "Melancong ke Raja Ampat memerlukan perencanaan matang dan biaya (budget) yang tidak sedikit karena lokasinya yang terpencil dan bergantung pada transportasi laut (speedboat dan kapal pinisi).",
        citationIds: ["pbd-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "pbd-travel-02",
        content: "Wisatawan wajib membayar Tarif Layanan Lingkungan (PIN Raja Ampat) untuk konservasi alam. Dilarang keras memakai tabir surya berbahan kimia berbahaya (harus reef-safe sunscreen) dan sangat terlarang menyentuh karang atau satwa laut (terutama mengejar pari manta saat menyelam). Menghargai hari Minggu sebagai hari ibadah (sebagian besar aktivitas dan toko akan tutup).",
        citationIds: ["pbd-ref-conservation"],
      }
    ],
    referenceIds: ["pbd-ref-bps", "pbd-ref-conservation"],
  },

  lastReviewedAt: "2026-07-12T16:35:00Z",
  contentStatus: "draft",
  referenceIds: [
    "pbd-ref-bps",
    "pbd-ref-wbtb",
    "pbd-ref-conservation",
    "pbd-ref-sejarah",
    "pbd-ref-bahasa"
  ]
};
