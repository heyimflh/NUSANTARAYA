import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const acehReferences: ScientificReference[] = [
  {
    id: "ach-ref-bps",
    title: "Provinsi Aceh Dalam Angka 2024",
    authors: ["BPS Provinsi Aceh"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Aceh",
    url: "https://aceh.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["aceh"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "ach-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Aceh",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["aceh"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "ach-ref-unesco-saman",
    title: "Saman Dance",
    authors: ["UNESCO Intangible Cultural Heritage"],
    year: 2011,
    publisher: "UNESCO",
    url: "https://ich.unesco.org/en/USL/saman-dance-00509",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["aceh"],
    topicIds: ["culture"],
  },
  {
    id: "ach-ref-sejarah",
    title: "Sejarah Kesultanan Aceh Darussalam",
    authors: ["Lombard, Denys"],
    year: 2007,
    publisher: "Kepustakaan Populer Gramedia",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Aceh",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["aceh"],
    topicIds: ["history"],
  },
  {
    id: "ach-ref-leuser",
    title: "Tropical Rainforest Heritage of Sumatra",
    authors: ["UNESCO World Heritage Centre"],
    year: 2004,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/1167",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["aceh"],
    topicIds: ["biodiversity", "destinations"],
  }
];

export const acehAtlas: ProvinceAtlas = {
  provinceId: "aceh",
  slug: "aceh",
  title: "Aceh",
  tagline: "Serambi Mekkah, Pintu Gerbang Nusantara",
  summary: [
    {
      id: "ach-sum-01",
      content: "Aceh terletak di ujung paling utara Pulau Sumatera, memegang peran penting dalam sejarah sebagai tempat penyebaran Islam pertama di Asia Tenggara melalui Kesultanan Samudera Pasai. Dikenal dengan julukan 'Serambi Mekkah', Aceh adalah satu-satunya provinsi di Indonesia yang menerapkan hukum Syariat Islam secara otonom. Setelah luluh lantak oleh Tsunami 2004 dan konflik puluhan tahun, Aceh kini bangkit menjadi provinsi yang damai, menawarkan pesona alam bawah laut Sabang, kopi legendaris dari dataran tinggi Gayo, dan rimba purba Leuser.",
      citationIds: ["ach-ref-bps", "ach-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "ach-qf-01", label: "Ibu Kota", value: "Banda Aceh", citationIds: ["ach-ref-bps"] },
    { id: "ach-qf-02", label: "Luas Wilayah", value: "57.365,09 km²", citationIds: ["ach-ref-bps"], dataYear: 2024 },
    { id: "ach-qf-03", label: "Populasi", value: "5.464.925 jiwa", citationIds: ["ach-ref-bps"], dataYear: 2023 },
    { id: "ach-qf-04", label: "Status Khusus", value: "Otonomi Khusus (Syariat Islam)", citationIds: ["ach-ref-bps"] },
    { id: "ach-qf-05", label: "Titik Nol", value: "Pulau Weh (Sabang)", citationIds: ["ach-ref-bps"] },
    { id: "ach-qf-06", label: "Gubernur", value: "Bustami Hamzah (Pj.)", citationIds: ["ach-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ach-geo-01",
        content: "Geografi Aceh sangat strategis, berada di mulut Selat Malaka dan berhadapan langsung dengan Samudra Hindia, menjadikannya titik persinggahan maritim global sejak zaman kuno.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ach-geo-02",
        content: "Topografi Aceh dibelah oleh gugusan Pegunungan Bukit Barisan yang rimbun dan memanjang hingga ke selatan. Di kawasan tengah, terdapat Dataran Tinggi Gayo yang sejuk dengan Danau Laut Tawar yang membentang luas. Sedangkan wilayah pesisirnya dihiasi kepulauan eksotis seperti Pulau Weh (Sabang) dan Pulau Banyak.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    referenceIds: ["ach-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "ach-his-01",
        content: "Sejarah Aceh sarat dengan perlawanan heroik melawan kolonialisme (Perang Aceh terlama bagi Belanda) dan kejayaan kesultanan maritim Islam terbesar di Asia Tenggara.",
        citationIds: ["ach-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "ach-era-01",
        period: "Abad ke-13 (1267 M)",
        title: "Kesultanan Samudera Pasai",
        description: "Kerajaan Islam pertama di Nusantara yang terletak di pesisir utara Aceh (Lhokseumawe). Menjadi pusat perdagangan lada dan syiar Islam, pernah disinggahi oleh penjelajah terkenal Ibnu Battuta (1345) dan Marco Polo.",
        citationIds: ["ach-ref-sejarah"],
      },
      {
        id: "ach-era-02",
        period: "1607 – 1636",
        title: "Puncak Kejayaan Kesultanan Aceh",
        description: "Di bawah pimpinan Sultan Iskandar Muda, Kesultanan Aceh Darussalam menguasai jalur perdagangan rempah Selat Malaka, membangun angkatan laut yang sangat ditakuti (termasuk pasukan gajah), dan menjadi pusat peradaban Islam di Asia Tenggara.",
        citationIds: ["ach-ref-sejarah"],
      },
      {
        id: "ach-era-03",
        period: "1873 – 1904",
        title: "Perang Aceh",
        description: "Perang terpanjang dan paling merugikan bagi pemerintah kolonial Belanda. Tokoh pahlawan seperti Teuku Umar, Cut Nyak Dien, dan Panglima Polem memimpin perang gerilya tanpa henti dari hutan dan pegunungan.",
        citationIds: ["ach-ref-sejarah"],
      },
      {
        id: "ach-era-04",
        period: "26 Desember 2004",
        title: "Tsunami Samudra Hindia",
        description: "Gempa bumi megathrust bermagnitudo 9,1 memicu gelombang tsunami raksasa yang menyapu pesisir Aceh, menelan lebih dari 170.000 korban jiwa. Bencana ini sekaligus mempercepat proses Perjanjian Damai Helsinki (2005) antara Pemerintah RI dan Gerakan Aceh Merdeka (GAM).",
        citationIds: ["ach-ref-bps", "ach-ref-sejarah"],
      }
    ],
    referenceIds: ["ach-ref-sejarah", "ach-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "ach-soc-01",
        content: "Masyarakat Aceh memiliki identitas keislaman yang sangat teguh, yang tercermin dalam semboyan 'Adat bak Po Teumeureuhom, Hukom bak Syiah Kuala' (adat di tangan pemerintah, hukum di tangan ulama).",
        citationIds: ["ach-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "ach-soc-02",
        content: "Suku Aceh adalah etnis mayoritas yang mendiami pesisir. Di wilayah dataran tinggi tengah bermukim Suku Gayo dan Alas yang memiliki budaya berbeda (seperti Tari Saman dan keahlian bertani kopi). Di pesisir barat-selatan terdapat Suku Aneuk Jamee (keturunan perantau Minangkabau). Aceh adalah satu-satunya provinsi yang menjalankan syariat Islam secara resmi, diawasi oleh Polisi Niat (Wilayatul Hisbah).",
        citationIds: ["ach-ref-bps", "ach-ref-sejarah"],
      }
    ],
    referenceIds: ["ach-ref-bps", "ach-ref-sejarah"],
  },

  culture: {
    introduction: [
      {
        id: "ach-cul-01",
        content: "Kesenian Aceh sangat identik dengan kekompakan ritmis, di mana para penari tidak menggunakan alat musik eksternal, melainkan menggunakan tepukan dada, paha, dan nyanyian syair Islam.",
        citationIds: ["ach-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ach-cul-item-01",
        category: "Seni Tari Dunia (UNESCO)",
        title: "Tari Saman",
        description: "Tarian dari Suku Gayo yang dimainkan oleh belasan pria dalam posisi duduk berlutut bersaf. Mereka melakukan gerakan tepuk tangan, dada, dan paha dengan sinkronisasi kecepatan yang luar biasa. Diakui UNESCO pada tahun 2011 sebagai Warisan Budaya Takbenda Dunia.",
        citationIds: ["ach-ref-unesco-saman"],
      },
      {
        id: "ach-cul-item-02",
        category: "Seni Tari Pesisir",
        title: "Tari Seudati",
        description: "Tarian kepahlawanan suku Aceh (pesisir) yang dimainkan oleh 8 penari pria berdiri. Ciri khasnya adalah suara petikan jari (ketrep jaroe) dan hentakan kaki ke lantai yang menciptakan ritme heroik bersemangat.",
        citationIds: ["ach-ref-wbtb"],
      },
      {
        id: "ach-cul-item-03",
        category: "Senjata Tradisional",
        title: "Rencong",
        description: "Belati pendek melengkung tajam mirip huruf 'L'. Rencong bukan sekadar senjata (yang banyak digunakan pejuang melawan Belanda), tetapi juga simbol kehormatan, keberanian, dan kelaki-lakian pemuda Aceh (Tanah Rencong).",
        citationIds: ["ach-ref-wbtb"],
      },
      {
        id: "ach-cul-item-04",
        category: "Arsitektur Tradisional",
        title: "Rumoh Aceh",
        description: "Rumah panggung tradisional dari kayu yang dirancang untuk menahan gempa bumi dan banjir. Arah rumah selalu membujur dari timur ke barat agar mempermudah penentuan arah kiblat.",
        citationIds: ["ach-ref-wbtb"],
      }
    ],
    referenceIds: ["ach-ref-wbtb", "ach-ref-unesco-saman"],
  },

  language: {
    introduction: [
      {
        id: "ach-lang-01",
        content: "Terdapat berbagai bahasa daerah di Aceh yang sangat berbeda satu sama lain, membedakan masyarakat pesisir dengan masyarakat pegunungan pedalaman.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "ach-voc-01", word: "Peue Haba?", meaning: "Apa kabar? (Bahasa Aceh)", citationIds: ["ach-ref-bps"] },
      { id: "ach-voc-02", word: "Haba Göt / Haba Jroh", meaning: "Kabar baik", citationIds: ["ach-ref-bps"] },
      { id: "ach-voc-03", word: "Loen / Droeneuh", meaning: "Saya / Anda (Sopan dalam Bahasa Aceh)", citationIds: ["ach-ref-bps"] },
      { id: "ach-voc-04", word: "Gerehen", meaning: "Kapan / Bagaimana (Bahasa Gayo)", citationIds: ["ach-ref-bps"] },
    ],
    referenceIds: ["ach-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "ach-culi-01",
        content: "Masakan Aceh sangat kaya akan rempah-rempah yang berani dan tajam (pengaruh kuat dari pedagang Arab dan India), sering menggunakan kelapa gongseng (u neulheu) dan daun temurui (salam koja).",
        citationIds: ["ach-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ach-culi-item-01",
        title: "Mie Aceh",
        description: "Mie kuning tebal yang ditumis atau disajikan berkuah kental dengan bumbu kari (kapulaga, jintan, merica), sering ditambahkan daging sapi, kepiting, atau udang. Disajikan dengan emping, acar bawang merah, dan mentimun.",
        citationIds: ["ach-ref-wbtb"],
      },
      {
        id: "ach-culi-item-02",
        title: "Kuah Beulangong",
        description: "Kari daging sapi atau kambing yang dimasak bergotong-royong menggunakan kuali tanah liat besar (beulangong) dalam perayaan adat seperti Maulid Nabi. Menggunakan nangka muda, pisang kepok, atau batang pisang.",
        citationIds: ["ach-ref-wbtb"],
      },
      {
        id: "ach-culi-item-03",
        title: "Ayam Tangkap",
        description: "Ayam potong kecil-kecil yang digoreng garing bersama segenggam besar daun pandan, daun temurui (daun kari), dan cabai hijau utuh yang menutupi ('menangkap') potongan ayam saat disajikan.",
        citationIds: ["ach-ref-wbtb"],
      },
      {
        id: "ach-culi-item-04",
        title: "Timphan & Kopi Sanger",
        description: "Timphan adalah kue manis bungkus daun pisang berisi srikaya atau kelapa, wajib ada saat Lebaran. Biasanya disandingkan dengan Kopi Sanger (kopi saring tradisional Aceh yang ditarik/saring tinggi dengan sedikit susu kental manis).",
        citationIds: ["ach-ref-wbtb"],
      }
    ],
    referenceIds: ["ach-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ach-bio-01",
        content: "Aceh adalah rumah bagi ekosistem Leuser, salah satu dari sedikit tempat di planet ini di mana empat spesies mamalia besar (harimau, badak, gajah, dan orangutan) masih hidup berdampingan di alam liar.",
        citationIds: ["ach-ref-leuser"],
      }
    ],
    species: [
      {
        id: "ach-bio-item-01",
        category: "Fauna Darat (Endemik Langka)",
        title: "Orangutan Sumatera (Pongo abelii)",
        description: "Primata cerdas endemik yang statusnya sangat terancam punah. Orangutan Sumatera memiliki bulu yang lebih terang dan wajah yang lebih panjang dibanding kerabatnya di Kalimantan.",
        citationIds: ["ach-ref-leuser"],
      },
      {
        id: "ach-bio-item-02",
        category: "Fauna Darat (Maskot)",
        title: "Burung Cempala Kuneng (Copsychus malabaricus)",
        description: "Burung kicau maskot Provinsi Aceh yang lincah (dikenal juga sebagai Kucica Hutan). Keberanian burung ini banyak diabadikan dalam hikayat-hikayat Aceh kuno.",
        citationIds: ["ach-ref-bps"],
      },
      {
        id: "ach-bio-item-03",
        category: "Flora Maskot",
        title: "Bunga Jeumpa (Magnolia champaca)",
        description: "Bunga cempaka wangi berwarna kuning keemasan yang sangat ikonik di Aceh, bahkan menjadi judul lagu daerah paling terkenal ('Bungong Jeumpa').",
        citationIds: ["ach-ref-bps"],
      }
    ],
    referenceIds: ["ach-ref-leuser", "ach-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "ach-dest-01",
        content: "Pariwisata Aceh bertumpu pada wisata religi/sejarah di ibu kota Banda Aceh, wisata bahari kelas dunia di Sabang, dan wisata alam kopi di Gayo.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    items: [
      {
        id: "ach-dest-item-01",
        category: "Sejarah & Religi",
        title: "Masjid Raya Baiturrahman (Banda Aceh)",
        description: "Simbol agama, budaya, dan ketangguhan rakyat Aceh. Dibangun pada masa Sultan Iskandar Muda (dan dibangun ulang oleh Belanda pasca perang), masjid ini selamat dari hantaman Tsunami 2004 dan menjadi tempat berlindung ribuan warga.",
        citationIds: ["ach-ref-sejarah"],
      },
      {
        id: "ach-dest-item-02",
        category: "Sejarah Kontemporer",
        title: "Museum Tsunami & PLTD Apung",
        description: "Museum yang dirancang emosional (oleh Ridwan Kamil) untuk mengenang tragedi tsunami. Wisatawan juga dapat melihat Kapal PLTD Apung seberat 2.600 ton yang terseret gelombang raksasa sejauh 5 km ke tengah permukiman.",
        citationIds: ["ach-ref-bps"],
      },
      {
        id: "ach-dest-item-03",
        category: "Alam Bahari",
        title: "Pulau Weh & Tugu Kilometer Nol (Sabang)",
        description: "Pulau vulkanik kecil di ujung barat laut Indonesia yang terkenal dengan titik penyelaman/snorkeling yang spektakuler (Pulau Rubiah) dan tugu penanda dimulainya wilayah Nusantara (Kilometer Nol).",
        citationIds: ["ach-ref-bps"],
      },
      {
        id: "ach-dest-item-04",
        category: "Alam Pegunungan",
        title: "Danau Laut Tawar (Takengon, Aceh Tengah)",
        description: "Danau tektono-vulkanik di Dataran Tinggi Gayo yang dikelilingi perbukitan hijau dan kebun kopi arabika. Tempat yang ideal untuk camping dan menikmati kopi langsung dari sumbernya.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    referenceIds: ["ach-ref-bps", "ach-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "ach-story-01",
        content: "Kisah-kisah heroik wanita Aceh sangat dominan, membuktikan peran kesetaraan gender dalam kepemimpinan dan perlawanan sejarah Aceh.",
        citationIds: ["ach-ref-sejarah"],
      }
    ],
    stories: [
      {
        id: "ach-story-item-01",
        title: "Laksamana Keumalahayati",
        description: "Laksamana laut wanita pertama di dunia modern (abad ke-16) yang memimpin Inong Balee (pasukan janda prajurit Aceh). Ia berhasil mengalahkan armada Belanda dan bahkan membunuh komandan Belanda, Cornelis de Houtman, dalam duel satu lawan satu di atas kapal.",
        citationIds: ["ach-ref-sejarah"],
      },
      {
        id: "ach-story-item-02",
        title: "Legenda Putri Pukes",
        description: "Kisah dari dataran Gayo tentang seorang putri yang menikah dengan pangeran dari jauh. Saat meninggalkan desanya, ia melanggar larangan ibunya untuk tidak menoleh ke belakang, sehingga ia membatu di dalam sebuah gua.",
        citationIds: ["ach-ref-wbtb"],
      }
    ],
    referenceIds: ["ach-ref-sejarah", "ach-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "ach-cont-01",
        content: "Setelah pulih dari Tsunami 2004 dan konflik GAM, Aceh membangun kembali ekonominya dengan fokus pada sumber daya alam, pertanian unggulan (kopi Gayo), dan industri pariwisata halal.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ach-cont-02",
        content: "Kopi Arabika Gayo menjadi salah satu komoditas ekspor terbaik Indonesia (terutama ke Starbucks Amerika). Pelabuhan Sabang juga terus dikembangkan sebagai Kawasan Perdagangan Bebas (Free Trade Zone) untuk menarik investasi asing di wilayah barat.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    referenceIds: ["ach-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "ach-travel-01",
        content: "Aceh merupakan pelopor pariwisata halal di Indonesia. Budaya ngopi (warung kopi) sangat mengakar di sini dan buka 24 jam.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "ach-travel-02",
        content: "Sebagai wilayah bersyariat Islam, pelancong wajib mematuhi kode etik berpakaian: tidak memakai celana pendek di ruang publik (baik pria maupun wanita), dan bagi wanita muslim wajib berhijab. Meskipun non-muslim tidak diwajibkan berhijab, mereka dituntut berpakaian tertutup dan sopan. Kegiatan dihentikan sejenak, dan toko-toko ditutup saat adzan salat Jumat berkumandang. Dilarang keras membawa minuman beralkohol ke wilayah Aceh.",
        citationIds: ["ach-ref-bps"],
      }
    ],
    referenceIds: ["ach-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:02:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ach-ref-bps",
    "ach-ref-wbtb",
    "ach-ref-unesco-saman",
    "ach-ref-sejarah",
    "ach-ref-leuser"
  ]
};
