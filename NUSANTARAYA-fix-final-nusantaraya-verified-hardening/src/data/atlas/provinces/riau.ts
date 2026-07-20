import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const riauReferences: ScientificReference[] = [
  {
    id: "riu-ref-bps",
    title: "Provinsi Riau Dalam Angka 2024",
    authors: ["BPS Provinsi Riau"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Riau",
    url: "https://riau.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["riau"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "riu-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Riau",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["riau"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "riu-ref-sejarah",
    title: "Sejarah Kesultanan Siak Sri Indrapura",
    authors: ["U.U. Hamidy"],
    year: 2011,
    publisher: "Bilik Kreatif",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Siak_Sri_Indrapura",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["riau"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "riu-ref-bahasa",
    title: "Bahasa Melayu Riau sebagai Asal Usul Bahasa Indonesia",
    authors: ["Collins, James T."],
    year: 2005,
    publisher: "Pusat Bahasa",
    url: "https://id.wikipedia.org/wiki/Bahasa_Melayu_Riau",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["riau"],
    topicIds: ["language", "society"],
  },
  {
    id: "riu-ref-tesso",
    title: "Tesso Nilo National Park Conservation",
    authors: ["WWF Indonesia"],
    year: 2018,
    publisher: "WWF",
    url: "https://www.wwf.id/en/where-we-work/tesso-nilo",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["riau"],
    topicIds: ["biodiversity"],
  }
];

export const riauAtlas: ProvinceAtlas = {
  provinceId: "riau",
  slug: "riau",
  title: "Riau",
  tagline: "Bumi Lancang Kuning, Marwah Tanah Melayu",
  summary: [
    {
      id: "riu-sum-01",
      content: "Riau adalah jantung peradaban budaya Melayu dan cikal bakal bahasa pemersatu Republik, Bahasa Indonesia. Dialiri empat sungai besar sebagai urat nadi transportasi sejak zaman Kesultanan Siak, provinsi berjuluk 'Bumi Lancang Kuning' ini tumbuh pesat berkat limpahan 'emas hitam' (minyak bumi) dan perkebunan sawit. Hutan gambut di Riau juga menyimpan ekosistem kunci bagi mamalia besar Sumatera.",
      citationIds: ["riu-ref-bps", "riu-ref-bahasa", "riu-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "riu-qf-01", label: "Ibu Kota", value: "Pekanbaru", citationIds: ["riu-ref-bps"] },
    { id: "riu-qf-02", label: "Luas Wilayah", value: "87.023,66 km²", citationIds: ["riu-ref-bps"], dataYear: 2024 },
    { id: "riu-qf-03", label: "Populasi", value: "6.614.384 jiwa", citationIds: ["riu-ref-bps"], dataYear: 2023 },
    { id: "riu-qf-04", label: "Urat Nadi", value: "S. Siak, Kampar, Rokan, Indragiri", citationIds: ["riu-ref-bps"] },
    { id: "riu-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["riu-ref-bps"] },
    { id: "riu-qf-06", label: "Gubernur", value: "SF Hariyanto (Pj.)", citationIds: ["riu-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "riu-geo-01",
        content: "Sebagian besar daratan Riau berupa daratan rendah, hutan rawa gambut yang luas, dan pesisir dangkal berlumpur yang bermuara di Selat Malaka.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "riu-geo-02",
        content: "Topografinya didominasi oleh perairan sungai-sungai berukuran raksasa. Keempat sungai utama (Sungai Siak, Kampar, Rokan, dan Indragiri) membelah provinsi dari barat (kaki Bukit Barisan) mengalir pelan menuju pesisir timur. Kondisi tanah di sepanjang pesisir sangat didominasi lahan gambut tebal.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    referenceIds: ["riu-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "riu-his-01",
        content: "Peninggalan sejarah Riau membentang dari pusat pendidikan Buddha era Sriwijaya purba hingga gemerlap Kesultanan Melayu yang merelakan kedaulatannya demi Republik Indonesia.",
        citationIds: ["riu-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "riu-era-01",
        period: "Abad ke-11 M",
        title: "Candi Muara Takus",
        description: "Dibangun di tepi Sungai Kampar (saat wilayah Riau dalam pengaruh Sriwijaya). Merupakan kompleks stupa Buddha tertua di Sumatera yang diyakini pernah menjadi salah satu pusat studi cendekiawan Buddha Asia.",
        citationIds: ["riu-ref-sejarah"],
      },
      {
        id: "riu-era-02",
        period: "1723",
        title: "Berdirinya Kesultanan Siak",
        description: "Raja Kecil memisahkan diri dari Kesultanan Johor (Malaysia) dan mendirikan Kesultanan Siak Sri Indrapura di pinggir Sungai Siak. Kesultanan ini menjadi kekuatan Melayu terbesar dan termakmur di pantai timur Sumatera.",
        citationIds: ["riu-ref-sejarah"],
      },
      {
        id: "riu-era-03",
        period: "1939",
        title: "Penemuan Ladang Minyak Minas",
        description: "Perusahaan minyak Caltex (kini Chevron/Pertamina) pertama kali menemukan ladang minyak mentah (Blok Rokan) berjenis Duri crude. Ini mengubah lanskap ekonomi Riau selamanya sebagai penghasil minyak utama di Indonesia.",
        citationIds: ["riu-ref-bps"],
      },
      {
        id: "riu-era-04",
        period: "November 1945",
        title: "Bergabung dengan Republik",
        description: "Sultan Syarif Kasim II menyerahkan tahta dan hartanya (senilai 13 juta gulden—sekitar Rp1 triliun kurs saat ini) kepada Presiden Soekarno, sebagai tanda bergabungnya Kesultanan Siak ke dalam NKRI secara sukarela.",
        citationIds: ["riu-ref-sejarah"],
      }
    ],
    referenceIds: ["riu-ref-sejarah", "riu-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "riu-soc-01",
        content: "Identitas budaya Suku Melayu sangat dominan (berpepatah 'Tak kan Melayu hilang di bumi'). Riau menghargai pantun (puisi lisan) dalam setiap lini komunikasi sosial masyarakatnya.",
        citationIds: ["riu-ref-bahasa"],
      }
    ],
    socialStructure: [
      {
        id: "riu-soc-02",
        content: "Selain Melayu daratan, penduduk Riau terdiri dari masyarakat perantau Minangkabau (di area barat/Kampar), transmigran Jawa, serta suku asli yang menjaga rimba (seperti Suku Sakai, Suku Akit, Suku Talang Mamak) yang secara perlahan berbaur seiring menyusutnya hutan pedalaman Riau.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    referenceIds: ["riu-ref-bahasa", "riu-ref-bps"],
  },

  culture: {
    introduction: [
      {
        id: "riu-cul-01",
        content: "Kesenian Melayu Riau penuh dengan nilai kelembutan, persembahan/penghormatan kepada tamu (Makan Sirih), dan sastra tutur yang tinggi.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "riu-cul-item-01",
        category: "Tari Penyambutan",
        title: "Tari Persembahan (Tari Makan Sirih)",
        description: "Tari wajib untuk menyambut tamu kehormatan, di mana para penari (berbaju kurung) membawa kotak berisi daun sirih, pinang, dan kapur, lalu memberikannya agar tamu mencicipinya (simbol persaudaraan).",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-cul-item-02",
        category: "Sastra Lisan",
        title: "Berbalas Pantun",
        description: "Budaya merangkai kata dengan rima a-b-a-b secara spontan untuk menyampaikan maksud (seperti melamar gadis atau menasihati). Pantun telah diakui UNESCO sebagai Warisan Budaya Takbenda (Joint nomination Indonesia-Malaysia).",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-cul-item-03",
        category: "Olahraga Tradisional",
        title: "Pacu Jalur (Kuantan Singingi)",
        description: "Lomba mendayung perahu panjang (jalur) yang terbuat dari satu batang pohon utuh berkapasitas hingga 60 pendayung. Event tahunan di Sungai Kuantan ini ditonton oleh puluhan ribu masyarakat pesisir.",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-cul-item-04",
        category: "Pakaian Adat",
        title: "Baju Kurung Melayu & Songket",
        description: "Pakaian bersiluet longgar untuk kaum wanita, dan teluk belanga (atau cekak musang) dengan lilitan kain songket di pinggang (samping) untuk pria, menjunjung norma kesopanan Melayu-Islam.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    referenceIds: ["riu-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "riu-lang-01",
        content: "Bahasa Melayu Tinggi (Baku) yang berasal dari Kepulauan Riau (Johor-Riau) adalah cikal bakal akar Bahasa Indonesia. Namun, di masyarakat Riau daratan (Pekanbaru), logat Melayu keseharian dipadukan dengan aksen Minangkabau.",
        citationIds: ["riu-ref-bahasa"],
      }
    ],
    vocabulary: [
      { id: "riu-voc-01", word: "Cakap", meaning: "Bicara (Melayu Baku). Contoh: 'Jangan banyak cakap.'", citationIds: ["riu-ref-bahasa"] },
      { id: "riu-voc-02", word: "Apo kaba?", meaning: "Apa kabar? (Dengan pelafalan akhiran 'o' mirip dialek Kampar/Minang perbatasan).", citationIds: ["riu-ref-bahasa"] },
      { id: "riu-voc-03", word: "Kacak", meaning: "Tampan / Gagah (Bahasa Melayu klasik).", citationIds: ["riu-ref-bahasa"] },
      { id: "riu-voc-04", word: "Lawa", meaning: "Cantik (Bahasa Melayu Riau).", citationIds: ["riu-ref-bahasa"] },
    ],
    referenceIds: ["riu-ref-bahasa"],
  },

  culinary: {
    introduction: [
      {
        id: "riu-culi-01",
        content: "Makanan khas Riau sangat memanfaatkan hasil perairan sungai, berbumbu kuning pekat dari kunyit, serta makanan ringan dari sagu/durian.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "riu-culi-item-01",
        title: "Gulai Asam Pedas Ikan Patin",
        description: "Ikan air tawar patin berdaging lembut (atau ikan baung) dimasak dalam kuah gulai kental kuning kemerahan dengan cita rasa asam menyegarkan dari belimbing wuluh/asam kandis, tanpa menggunakan santan.",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-culi-item-02",
        title: "Bolu Kemojo",
        description: "Kue basah tradisional beraroma pandan yang dicetak menggunakan loyang berbentuk bunga kamboja berbujur delapan. Warnanya hijau legam, manis, dengan rasa santan telur yang kuat.",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-culi-item-03",
        title: "Lopek Bugi (Lepat Ketan)",
        description: "Jajanan khas Kampar berupa adonan tepung ketan yang diisi parutan kelapa manis (inti), dibungkus daun pisang berlapis memanjang menyerupai perahu kecil, lalu dikukus.",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-culi-item-04",
        title: "Mie Sagu",
        description: "Mie kenyal berbahan dasar pati sagu (pohon rumbia khas pesisir timur Riau, Kep. Meranti) yang ditumis kering (goreng) bersama ikan teri, tauge, kucai, dan cabai.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    referenceIds: ["riu-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "riu-bio-01",
        content: "Lanskap hutan gambut dan Taman Nasional Tesso Nilo di Riau merupakan benteng perlindungan penting bagi 'raja hutan' Sumatera.",
        citationIds: ["riu-ref-tesso"],
      }
    ],
    species: [
      {
        id: "riu-bio-item-01",
        category: "Fauna Darat (Spesies Payung)",
        title: "Harimau Sumatera (Panthera tigris sondaica)",
        description: "Kucing besar terakhir di Indonesia. Tesso Nilo sempat memiliki salah satu populasi harimau terpadat di Sumatera, meski kini ruang geraknya menyusut drastis karena alih fungsi hutan.",
        citationIds: ["riu-ref-tesso"],
      },
      {
        id: "riu-bio-item-02",
        category: "Fauna Endemik (Maskot)",
        title: "Burung Serindit Melayu (Loriculus galgulus)",
        description: "Burung kicau kecil berwarna hijau cerah dengan dada merah (maskot Provinsi Riau). Sering disebut dalam pantun-pantun klasik sebagai lambang kearifan dan persahabatan masyarakat Melayu.",
        citationIds: ["riu-ref-bps"],
      },
      {
        id: "riu-bio-item-03",
        category: "Flora Hutan Rawa",
        title: "Nibung (Oncosperma tigillarium)",
        description: "Palem liar yang batangnya lurus tegak berduri, hidup berumpun di rawa gambut. Batang nibung melambangkan persatuan kuat (tidak mudah patah) dan sering digunakan untuk tiang rumah panggung tradisional (maskot flora).",
        citationIds: ["riu-ref-bps"],
      }
    ],
    referenceIds: ["riu-ref-tesso", "riu-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "riu-dest-01",
        content: "Objek wisata Riau difokuskan pada kilas balik kemegahan arsitektur istana kerajaan dan masjid-masjid monumental, serta ekowisata unik fenomena alam di sungai.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    items: [
      {
        id: "riu-dest-item-01",
        category: "Sejarah & Kerajaan",
        title: "Istana Siak Sri Indrapura (Istana Asserayah Hasyimiah)",
        description: "Istana bergaya arsitektur perpaduan Eropa (Moor, Arab) dan Melayu (dibangun 1889). Wisatawan masih bisa melihat komet (alat pemutar piringan hitam klasik raksasa yang hanya ada dua di dunia), meriam kuno, dan benda pusaka emas peninggalan Sultan Siak.",
        citationIds: ["riu-ref-sejarah"],
      },
      {
        id: "riu-dest-item-02",
        category: "Fenomena Alam",
        title: "Gelombang Bono (Sungai Kampar)",
        description: "Fenomena ombak besar bergulung memanjang ('tidal bore') akibat pertemuan arus laut pasang dengan arus sungai. Gelombang ini bisa mencapai ketinggian 3 meter dan berjalan puluhan kilometer masuk ke dalam sungai. Sering digunakan untuk olahraga surfing ekstrem kelas dunia.",
        citationIds: ["riu-ref-bps"],
      },
      {
        id: "riu-dest-item-03",
        category: "Sejarah Buddha",
        title: "Candi Muara Takus",
        description: "Kompleks candi bata merah purba (abad 11) yang letaknya terisolasi di dalam hutan dekat hulu Kampar, terdiri dari candi induk (bentuk stupa yang tidak lancip, melainkan bundar dengan pahatan unik).",
        citationIds: ["riu-ref-sejarah"],
      },
      {
        id: "riu-dest-item-04",
        category: "Religi & Arsitektur",
        title: "Masjid Agung An-Nur (Pekanbaru)",
        description: "Masjid ikonik Pekanbaru dengan arsitektur yang sering dijuluki 'Taj Mahal-nya Indonesia', karena menaranya yang simetris, perpaduan kubah hijau, kaligrafi Melayu, serta taman yang luas di tengah kota.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    referenceIds: ["riu-ref-bps", "riu-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "riu-story-01",
        content: "Dongeng dan legenda di Riau sering bercerita tentang tuah (kesaktian) dari sebuah perkataan, kisah asal muasal kerajaan (Singgasana), serta tragedi percintaan putri raja.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "riu-story-item-01",
        title: "Legenda Lancang Kuning",
        description: "Dongeng tentang kapal (lancang) berwarna kuning milik seorang Datuk atau Raja pesisir. Dipercaya jika sang nahkoda zalim, lancang akan karam dan mengutuk pelabuhan. Istilah 'Lancang Kuning' kemudian menjadi metafora bagi Provinsi Riau.",
        citationIds: ["riu-ref-wbtb"],
      },
      {
        id: "riu-story-item-02",
        title: "Kisah Putri Kaca Mayang",
        description: "Legenda di daerah Pekanbaru tentang putri cantik yang diculik, lalu memicu perang. Ketika akhirnya diselamatkan dan dibawa pulang ke Gasib, ia jatuh sakit hingga meninggal, diyakini sebagai penanda sejarah peperangan kuno sebelum masa Kesultanan Siak.",
        citationIds: ["riu-ref-wbtb"],
      }
    ],
    referenceIds: ["riu-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "riu-cont-01",
        content: "Perekonomian modern Riau ditopang penuh oleh eksploitasi kekayaan bumi: minyak mentah/migas di pesisir utara dan perkebunan monokultur.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    economy: [
      {
        id: "riu-cont-02",
        content: "Blok Rokan adalah ladang minyak darat terbesar dan tersibuk di Indonesia (dioperasikan penuh oleh Pertamina). Riau juga memiliki wilayah perkebunan kelapa sawit (CPO) dan pabrik kertas (Pulp and Paper) paling luas di tanah air, mendorong perputaran ekonomi luar biasa sekaligus ancaman kabut asap jika terjadi karhutla (kebakaran hutan dan lahan).",
        citationIds: ["riu-ref-bps"],
      }
    ],
    referenceIds: ["riu-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "riu-travel-01",
        content: "Wisata di Riau adalah memadukan perjalanan menyusuri sungai-sungai bersejarah, mencicipi kuah asam pedas ikan baung, dengan cuaca khatulistiwa yang panas terik.",
        citationIds: ["riu-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "riu-travel-02",
        content: "Masyarakat Melayu Riau sangat menjaga tata krama bersalaman, berbicaralah dengan sopan dan hargai petuah/pantun yang diucapkan tetua. Bagi wisatawan wanita (khususnya saat mengunjungi Istana Siak atau Masjid Agung), sangat disarankan memakai baju sopan tertutup (baju kurung) sebagai bentuk penghormatan. Saat berkunjung ke area gambut pedalaman, hindari membuang puntung rokok sembarangan karena rawa gambut sangat sensitif terhadap api.",
        citationIds: ["riu-ref-bahasa"],
      }
    ],
    referenceIds: ["riu-ref-bps", "riu-ref-bahasa"],
  },

  lastReviewedAt: "2026-07-13T00:05:00Z",
  contentStatus: "draft",
  referenceIds: [
    "riu-ref-bps",
    "riu-ref-wbtb",
    "riu-ref-sejarah",
    "riu-ref-bahasa",
    "riu-ref-tesso"
  ]
};
