import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const jawaBaratReferences: ScientificReference[] = [
  {
    id: "jbr-ref-bps",
    title: "Provinsi Jawa Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Jawa Barat",
    url: "https://jabar.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-barat"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "jbr-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Jawa Barat",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-barat"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "jbr-ref-unesco-angklung",
    title: "Indonesian Angklung",
    authors: ["UNESCO"],
    year: 2010,
    publisher: "UNESCO Intangible Cultural Heritage",
    url: "https://ich.unesco.org/en/RL/indonesian-angklung-00393",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jawa-barat"],
    topicIds: ["culture"],
  },
  {
    id: "jbr-ref-sejarah",
    title: "Sejarah Jawa Barat: Dari Tarumanagara hingga Masa Kini",
    authors: ["Ekadjati, Edi S."],
    year: 2005,
    publisher: "Pustaka Jaya",
    url: "https://id.wikipedia.org/wiki/Jawa_Barat",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["jawa-barat"],
    topicIds: ["history", "society"],
  },
  {
    id: "jbr-ref-geopark",
    title: "Ciletuh - Palabuhanratu UNESCO Global Geopark",
    authors: ["UNESCO Global Geoparks"],
    year: 2018,
    publisher: "UNESCO",
    url: "https://en.unesco.org/global-geoparks/ciletuh-palabuhanratu",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jawa-barat"],
    topicIds: ["geography", "destinations"],
  }
];

export const jawaBaratAtlas: ProvinceAtlas = {
  provinceId: "jawa-barat",
  slug: "jawa-barat",
  title: "Jawa Barat",
  tagline: "Bumi Parahyangan, Harmoni Alam dan Kreasi",
  summary: [
    {
      id: "jbr-sum-01",
      content: "Jawa Barat, atau dikenal sebagai Tatar Sunda, adalah provinsi dengan populasi terbesar di Indonesia. Dikelilingi oleh barisan pegunungan vulkanik yang subur dengan iklim sejuk, provinsi ini adalah pusat pelestarian kebudayaan Sunda yang kental dengan filosofi 'Silih Asih, Silih Asah, Silih Asuh'. Jawa Barat kini menjadi poros industri nasional, sekaligus magnet wisata kreatif terdepan di Indonesia.",
      citationIds: ["jbr-ref-bps", "jbr-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "jbr-qf-01", label: "Ibu Kota", value: "Bandung", citationIds: ["jbr-ref-bps"] },
    { id: "jbr-qf-02", label: "Luas Wilayah", value: "35.377,76 km²", citationIds: ["jbr-ref-bps"], dataYear: 2024 },
    { id: "jbr-qf-03", label: "Populasi", value: "49.405.808 jiwa", citationIds: ["jbr-ref-bps"], dataYear: 2023 },
    { id: "jbr-qf-04", label: "Suku Mayoritas", value: "Sunda", citationIds: ["jbr-ref-sejarah"] },
    { id: "jbr-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["jbr-ref-bps"] },
    { id: "jbr-qf-06", label: "Gubernur", value: "Bey Machmudin (Pj.)", citationIds: ["jbr-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "jbr-geo-01",
        content: "Bentang alam Jawa Barat sangat bervariasi, membentang dari pesisir Laut Jawa di sebelah utara yang cenderung landai, hingga Samudra Hindia di sebelah selatan yang berombak besar.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "jbr-geo-02",
        content: "Bagian tengah Jawa Barat didominasi oleh dataran tinggi dan gugusan gunung api aktif (Cincin Api) seperti Gunung Gede-Pangrango, Tangkuban Parahu, dan Papandayan. Kawasan ini dikenal sebagai Dataran Tinggi Parahyangan (Tempat Para Dewa). Di pesisir selatan, terdapat Geopark Ciletuh-Palabuhanratu yang diakui UNESCO karena kekayaan geologi purba berbentuk amfiteater alam.",
        citationIds: ["jbr-ref-geopark"],
      }
    ],
    referenceIds: ["jbr-ref-bps", "jbr-ref-geopark"],
  },

  history: {
    introduction: [
      {
        id: "jbr-his-01",
        content: "Jawa Barat menyimpan jejak peradaban sejak masa kerajaan Hindu-Buddha tertua di Nusantara hingga menjadi pusat pergerakan kemerdekaan dan diplomasi internasional.",
        citationIds: ["jbr-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "jbr-era-01",
        period: "Abad ke-4 – 7 M",
        title: "Kerajaan Tarumanagara",
        description: "Merupakan salah satu kerajaan Hindu tertua di Nusantara. Peninggalannya tersebar di wilayah Bogor dan sekitarnya berupa Prasasti Ciaruteun (yang memuat jejak telapak kaki Raja Purnawarman).",
        citationIds: ["jbr-ref-sejarah"],
      },
      {
        id: "jbr-era-02",
        period: "Abad ke-14 – 16 M",
        title: "Sunda Pajajaran & Prabu Siliwangi",
        description: "Kerajaan Pajajaran di bawah kepemimpinan Sri Baduga Maharaja (Prabu Siliwangi) mencapai masa kejayaannya, menguasai mayoritas bagian barat Pulau Jawa, sebelum runtuh oleh Kesultanan Banten.",
        citationIds: ["jbr-ref-sejarah"],
      },
      {
        id: "jbr-era-03",
        period: "Maret 1946",
        title: "Bandung Lautan Api",
        description: "Peristiwa heroik di mana rakyat dan tentara membakar hangus kota Bandung selatan agar tidak dijadikan markas strategis militer oleh tentara Sekutu dan NICA (Belanda).",
        citationIds: ["jbr-ref-sejarah"],
      },
      {
        id: "jbr-era-04",
        period: "April 1955",
        title: "Konferensi Asia Afrika (KAA)",
        description: "Kota Bandung menjadi tuan rumah KAA yang diprakarsai Presiden Soekarno. Konferensi ini dihadiri oleh puluhan negara dari Asia dan Afrika (yang baru merdeka) untuk mempromosikan perdamaian dunia dan menentang kolonialisme (Dasasila Bandung).",
        citationIds: ["jbr-ref-sejarah"],
      }
    ],
    referenceIds: ["jbr-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "jbr-soc-01",
        content: "Masyarakat Suku Sunda merupakan etnis mayoritas di Jawa Barat. Mereka dikenal memiliki sifat *'Someah Hade ka Semah'* (sopan, ramah, dan memuliakan tamu).",
        citationIds: ["jbr-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "jbr-soc-02",
        content: "Falsafah hidup orang Sunda berpusat pada *'Silih Asih, Silih Asah, Silih Asuh'* (Saling mengasihi, saling memajukan/mengajarkan pengetahuan, dan saling menjaga). Dalam beragama, masyarakat Jawa Barat mayoritas beragama Islam dengan tradisi keislaman yang kuat di berbagai pesantren tradisional.",
        citationIds: ["jbr-ref-sejarah"],
      }
    ],
    referenceIds: ["jbr-ref-sejarah"],
  },

  culture: {
    introduction: [
      {
        id: "jbr-cul-01",
        content: "Seni budaya Sunda sangat khas dengan nuansa alam, penggunaan alat musik bambu, dan gerak tari yang gemulai namun dinamis.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jbr-cul-item-01",
        category: "Alat Musik",
        title: "Angklung",
        description: "Alat musik yang terbuat dari tabung bambu yang menghasilkan nada ketika digoyangkan. Angklung diakui oleh UNESCO sebagai Karya Agung Warisan Budaya Lisan dan Nonbendawi Manusia (2010).",
        citationIds: ["jbr-ref-unesco-angklung"],
      },
      {
        id: "jbr-cul-item-02",
        category: "Teater Tradisional",
        title: "Wayang Golek",
        description: "Seni pertunjukan wayang kayu 3D (berbeda dengan wayang kulit dari Jawa Tengah/Timur). Sang dalang memainkan tokoh-tokoh Mahabharata/Ramayana yang telah diakulturasi, dengan tokoh komedi paling ikonis: Cepot.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-cul-item-03",
        category: "Seni Tari",
        title: "Tari Jaipong",
        description: "Tarian pergaulan tradisional yang diciptakan oleh Gugum Gumbira pada tahun 1970-an, mengadopsi gerakan Pencak Silat, Ketuk Tilu, dan Wayang Golek. Tarian ini diiringi tabuhan kendang yang sangat dinamis.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-cul-item-04",
        category: "Seni Pertunjukan Arak-arakan",
        title: "Sisingaan",
        description: "Kesenian asal Subang di mana seorang anak laki-laki (biasanya saat akan dikhitan) diarak menaiki tandu berbentuk singa buatan yang dipanggul oleh empat pria dewasa sambil menari mengikuti irama musik.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    referenceIds: ["jbr-ref-wbtb", "jbr-ref-unesco-angklung"],
  },

  language: {
    introduction: [
      {
        id: "jbr-lang-01",
        content: "Bahasa Sunda adalah bahasa pengantar utama di pedalaman Parahyangan. Di wilayah pesisir utara seperti Cirebon dan Indramayu, masyarakat menuturkan bahasa Cirebonan (perpaduan unik antara kosa kata Jawa dan Sunda).",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "jbr-voc-01", word: "Kumaha Damang?", meaning: "Bagaimana kabarnya? (Halus)", citationIds: ["jbr-ref-bps"] },
      { id: "jbr-voc-02", word: "Punteun - Mangga", meaning: "Permisi / Maaf - Silakan (Budaya sapaan wajib jika melewati orang lain)", citationIds: ["jbr-ref-bps"] },
      { id: "jbr-voc-03", word: "Geulis / Kasep", meaning: "Cantik / Tampan", citationIds: ["jbr-ref-bps"] },
      { id: "jbr-voc-04", word: "Nuhun (Hatur Nuhun)", meaning: "Terima kasih", citationIds: ["jbr-ref-bps"] },
    ],
    referenceIds: ["jbr-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "jbr-culi-01",
        content: "Orang Sunda sangat menyukai lalapan (sayuran mentah) dan sambal terasi. Olahan berbahan dasar singkong/tapioka (aci) sangat mendominasi jajanan kekinian dari Jawa Barat.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jbr-culi-item-01",
        title: "Nasi Timbel",
        description: "Nasi pulen hangat yang dibungkus daun pisang, biasanya disajikan lengkap dengan ayam goreng/bakar, tahu, tempe, ikan asin (jambal roti), lalapan segar, dan sambal terasi atau sambal dadak.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-culi-item-02",
        title: "Batagor & Siomay",
        description: "Batagor (Baso Tahu Goreng) dan Siomay Bandung adalah olahan pasta ikan tenggiri yang dibalut tahu atau kulit pangsit. Batagor digoreng krispi, sementara Siomay dikukus. Keduanya disiram bumbu kacang legit dan perasan jeruk limau.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-culi-item-03",
        title: "Seblak",
        description: "Jajanan kekinian yang terbuat dari kerupuk mentah yang direbus hingga lembek, dimasak bersama aneka topping (sosis, ceker, telur, makaroni) dalam kuah kental bercita rasa kencur (cikur) dan sangat pedas.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-culi-item-04",
        title: "Karedok",
        description: "Mirip dengan gado-gado (salad berbumbu kacang), perbedaannya adalah sayuran pada karedok (kacang panjang, kol, tauge, daun kemangi) sama sekali tidak direbus alias disajikan mentah segar.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    referenceIds: ["jbr-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "jbr-bio-01",
        content: "Hutan hujan pegunungan di Jawa Barat adalah benteng terakhir bagi berbagai primata endemik dan kucing besar Pulau Jawa. Kebun Raya Bogor (didirikan 1817) berperan penting sebagai pusat konservasi ex-situ flora Indonesia.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    species: [
      {
        id: "jbr-bio-item-01",
        category: "Fauna Darat (Kucing Besar)",
        title: "Macan Tutul Jawa (Panthera pardus melas)",
        description: "Kucing besar terakhir yang tersisa di Pulau Jawa setelah punahnya Harimau Jawa. Terdapat di Taman Nasional Gunung Gede Pangrango dan Gunung Halimun Salak. Spesies ini memiliki varian genetik melanistik (berbulu hitam seluruhnya) yang dikenal sebagai Macan Kumbang.",
        citationIds: ["jbr-ref-bps"],
      },
      {
        id: "jbr-bio-item-02",
        category: "Fauna Primata",
        title: "Owa Jawa (Hylobates moloch)",
        description: "Primata endemik berbulu abu-abu keperakan tanpa ekor. Owa Jawa dikenal setia (monogami) dan melindungi wilayahnya dengan mengeluarkan suara (nyanyian) melengking bersahut-sahutan di pagi hari.",
        citationIds: ["jbr-ref-bps"],
      },
      {
        id: "jbr-bio-item-03",
        category: "Flora Ikonik",
        title: "Bunga Bangkai Raksasa (Amorphophallus titanum)",
        description: "Bunga raksasa berbau busuk. Meskipun aslinya endemik Sumatera, spesimen terbesar dan paling terkenal dari flora ini sering mekar dan menjadi daya tarik utama turis di Kebun Raya Bogor.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    referenceIds: ["jbr-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "jbr-dest-01",
        content: "Jawa Barat menawarkan lanskap pariwisata yang komplit: dari wisata kawah gunung api, peninggalan arsitektur Art Deco peninggalan kolonial Belanda di Bandung, hingga peselancar kelas dunia di pesisir selatan.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    items: [
      {
        id: "jbr-dest-item-01",
        category: "Alam Pegunungan",
        title: "Kawah Putih & Tangkuban Parahu",
        description: "Dua ikon gunung api Bandung. Kawah Putih (Ciwidey) adalah danau vulkanik berwarna pirus/putih susu berselimut kabut. Tangkuban Parahu berbentuk menyerupai perahu terbalik dengan kawah berasap (Kawah Ratu) yang bisa dicapai langsung menggunakan kendaraan.",
        citationIds: ["jbr-ref-bps"],
      },
      {
        id: "jbr-dest-item-02",
        category: "Sejarah & Arsitektur",
        title: "Gedung Sate & Jalan Asia Afrika",
        description: "Gedung Sate adalah kantor Gubernur Jawa Barat (dibangun 1920-an) berarsitektur perpaduan Eropa dan elemen Nusantara dengan ornamen tusuk sate di puncaknya. Jalan Asia Afrika adalah koridor klasik bersejarah tempat berdirinya Gedung Merdeka.",
        citationIds: ["jbr-ref-bps"],
      },
      {
        id: "jbr-dest-item-03",
        category: "Alam & Bahari",
        title: "Geopark Ciletuh (Sukabumi)",
        description: "Kawasan geopark global UNESCO yang memadukan amfiteater alam raksasa, hamparan sawah, puluhan air terjun purba (curug), dan formasi batuan geologi tertua di Jawa yang langsung menghadap Samudra Hindia.",
        citationIds: ["jbr-ref-geopark"],
      },
      {
        id: "jbr-dest-item-04",
        category: "Bahari",
        title: "Pantai Pangandaran",
        description: "Pantai primadona di selatan Jawa Barat dengan hamparan pasir hitam dan putih. Menawarkan ombak ideal untuk berselancar, cagar alam, dan Green Canyon (Cukang Taneuh) di dekatnya.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    referenceIds: ["jbr-ref-bps", "jbr-ref-geopark"],
  },

  stories: {
    introduction: [
      {
        id: "jbr-story-01",
        content: "Cerita rakyat Parahyangan (dongeng atau 'sasakala') banyak menceritakan asal usul gunung dan danau, serta pantangan adat yang harus dihormati manusia.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "jbr-story-item-01",
        title: "Sangkuriang (Asal Usul Tangkuban Parahu)",
        description: "Legenda paling terkenal di Jawa Barat. Mengisahkan Sangkuriang, pemuda sakti yang jatuh cinta pada ibunya sendiri yang awet muda (Dayang Sumbi). Untuk menggagalkan pernikahan, Dayang Sumbi meminta Sangkuriang membuat danau dan perahu dalam semalam. Gagal memenuhi syarat, Sangkuriang marah dan menendang perahu tersebut hingga terbalik menjadi Gunung Tangkuban Parahu.",
        citationIds: ["jbr-ref-wbtb"],
      },
      {
        id: "jbr-story-item-02",
        title: "Nyi Roro Kidul (Penguasa Pantai Selatan)",
        description: "Kepercayaan masyarakat selatan Jawa (khususnya Pelabuhan Ratu) bahwa laut selatan dikuasai oleh ratu gaib berbusana hijau. Hal ini melahirkan pantangan (pamali) menggunakan baju hijau saat bermain di pantai selatan agar tidak 'diambil' oleh sang Ratu.",
        citationIds: ["jbr-ref-wbtb"],
      }
    ],
    referenceIds: ["jbr-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "jbr-cont-01",
        content: "Jawa Barat saat ini adalah provinsi terpadat dan episentrum manufaktur industri di Indonesia, berpusat di koridor Cikarang hingga Karawang.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    economy: [
      {
        id: "jbr-cont-02",
        content: "Dengan beroperasinya Kereta Cepat Jakarta-Bandung (Whoosh), mobilitas antara Ibukota Jakarta dan Bandung hanya memakan waktu 45 menit. Sementara itu, kawasan Rebana (Cirebon, Patimban, Majalengka) tengah dibangun sebagai mesin ekonomi masa depan, ditopang oleh Bandara Internasional Kertajati dan Pelabuhan Patimban.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    referenceIds: ["jbr-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "jbr-travel-01",
        content: "Jawa Barat (khususnya kawasan Puncak, Bogor, dan Bandung) adalah destinasi wisata akhir pekan utama bagi jutaan warga Jabodetabek.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "jbr-travel-02",
        content: "Karena tingginya volume kunjungan, sistem satu arah (one-way) sering diterapkan polisi di jalur Puncak (Bogor) setiap akhir pekan. Jika berlibur ke kawasan pegunungan (Lembang/Ciwidey), bawalah jaket karena cuaca bisa turun drastis di malam hari. Hormati adat masyarakat pedesaan Sunda dengan membungkukkan badan sedikit (punteun) saat melintas di depan orang tua.",
        citationIds: ["jbr-ref-bps"],
      }
    ],
    referenceIds: ["jbr-ref-bps"],
  },

  lastReviewedAt: "2026-07-12T16:55:00Z",
  contentStatus: "draft",
  referenceIds: [
    "jbr-ref-bps",
    "jbr-ref-wbtb",
    "jbr-ref-unesco-angklung",
    "jbr-ref-sejarah",
    "jbr-ref-geopark"
  ]
};
