import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const malukuReferences: ScientificReference[] = [
  {
    id: "mal-ref-bps",
    title: "Provinsi Maluku Dalam Angka 2024",
    authors: ["BPS Provinsi Maluku"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Maluku",
    url: "https://maluku.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["geography", "contemporary", "biodiversity", "destinations"],

  },
  {
    id: "mal-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Provinsi Maluku",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["culture", "culinary", "stories"],

  },
  {
    id: "mal-ref-sejarah",
    title: "Sejarah Maluku: Banda Neira, Rempah, dan Kolonialisme",
    authors: ["Des Alwi"],
    year: 2005,
    publisher: "Dian Rakyat",
    url: "https://id.wikipedia.org/wiki/Banda_Neira",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["maluku"],
    topicIds: ["history"],

  },
  {
    id: "mal-ref-bahasa",
    title: "Peta Bahasa di Provinsi Maluku",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2019,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://petabahasa.kemdikbud.go.id/",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["language"],

  },
  {
    id: "mal-ref-unesco",
    title: "Ambon City of Music",
    authors: ["UNESCO Creative Cities Network"],
    year: 2019,
    publisher: "UNESCO",
    url: "https://en.unesco.org/creative-cities/ambon",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["maluku"],
    topicIds: ["culture", "contemporary"],

  },
  {
    id: "mal-ref-pela",
    title: "Pela Gandong: Kearifan Lokal Resolusi Konflik di Maluku",
    authors: ["Pattikayhatu, J. A."],
    year: 2010,
    publisher: "Jurnal Sejarah dan Budaya",
    url: "https://id.wikipedia.org/wiki/Pela_gandong",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["maluku"],
    topicIds: ["society"],

  }
];

export const malukuAtlas: ProvinceAtlas = {
  provinceId: "maluku",
  slug: "maluku",
  title: "Maluku",
  tagline: "Kepulauan Rempah yang Kaya Akan Harmoni dan Keindahan Bahari",
  summary: [
    {
      id: "mal-sum-01",
      content: "Maluku, yang secara historis dikenal sebagai Kepulauan Rempah-Rempah (Spice Islands), adalah kepulauan yang pernah menjadi pusat perhatian dunia pada abad ke-15 hingga ke-17 karena kekayaan cengkeh dan palanya. Kini, Maluku dikenal dengan panorama baharinya yang memukau, kebudayaan musikalnya yang kuat, serta filosofi Pela Gandong yang mengikat persaudaraan masyarakatnya melintasi batas-batas keyakinan.",
      citationIds: ["mal-ref-sejarah", "mal-ref-pela"],
    }
  ],
  quickFacts: [
    { id: "mal-qf-01", label: "Ibu Kota", value: "Ambon", citationIds: ["mal-ref-bps"] },
    { id: "mal-qf-02", label: "Luas Wilayah", value: "46.150,92 km² (Daratan)", citationIds: ["mal-ref-bps"], dataYear: 2024 },
    { id: "mal-qf-03", label: "Populasi", value: "1.908.000 jiwa", citationIds: ["mal-ref-bps"], dataYear: 2023 },
    { id: "mal-qf-04", label: "Semboyan", value: "Siwa Lima (Milik Bersama)", citationIds: ["mal-ref-pela"] },
    { id: "mal-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["mal-ref-bps"] },
    { id: "mal-qf-06", label: "Gubernur", value: "Sadali Ie (Pj.)", citationIds: ["mal-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "mal-geo-01",
        content: "Provinsi Maluku merupakan provinsi kepulauan yang sebagian besar wilayahnya terdiri dari lautan. Dikelilingi oleh Laut Banda, Laut Seram, dan Laut Arafura, Maluku memiliki ribuan pulau kecil dengan topografi vulkanik dan pegunungan.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "mal-geo-02",
        content: "Secara morfologi, sebagian besar pulau di Maluku bergunung-gunung dan berbukit. Laut Banda yang terletak di wilayah ini adalah salah satu laut terdalam di Indonesia, dengan kedalaman mencapai lebih dari 7.000 meter (Palung Weber). Kondisi tektonik di wilayah ini sangat aktif karena merupakan zona pertemuan tiga lempeng tektonik utama dunia.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "mal-his-01",
        content: "Sejarah Maluku adalah sejarah perniagaan global purba. Daya tarik rempah-rempah eksotis menjadikan kepulauan ini sebagai episentrum perdagangan yang diperebutkan oleh penjelajah Arab, Tiongkok, hingga bangsa-bangsa Eropa seperti Portugis, Spanyol, Inggris, dan Belanda.",
        citationIds: ["mal-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "mal-era-01",
        period: "Abad ke-15 & 16",
        title: "Era Monopoli dan Penjelajahan Eropa",
        description: "Portugis (di bawah pimpinan Antonio de Abreu) mencapai Kepulauan Banda pada 1512. Spanyol menyusul, memicu perebutan monopoli rempah-rempah yang berujung pada Traktat Saragosa.",
        citationIds: ["mal-ref-sejarah"],
      },
      {
        id: "mal-era-02",
        period: "Abad ke-17",
        title: "Dominasi VOC di Banda Neira",
        description: "Jan Pieterszoon Coen menaklukkan Kepulauan Banda pada 1621 untuk memonopoli pala. Sistem perbudakan dan perkebunan (perken) diterapkan, diwarnai dengan pembantaian besar-besaran penduduk asli Banda.",
        citationIds: ["mal-ref-sejarah"],
      },
      {
        id: "mal-era-03",
        period: "1817",
        title: "Perang Pattimura",
        description: "Thomas Matulessy (Kapitan Pattimura) memimpin perlawanan rakyat Maluku melawan kembalinya kolonialisme Belanda setelah masa pemerintahan Inggris singkat. Ia merebut Benteng Duurstede di Saparua sebelum akhirnya ditangkap dan dihukum gantung di Ambon.",
        citationIds: ["mal-ref-sejarah"],
      }
    ],
    referenceIds: ["mal-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "mal-soc-01",
        content: "Masyarakat Maluku dikenal sangat menghargai nilai persaudaraan, keterbukaan, dan kerukunan beragama. Toleransi antarumat beragama di Maluku sangat tinggi, diikat oleh ikatan adat yang kuat peninggalan leluhur.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    socialStructure: [
      {
        id: "mal-soc-02",
        content: "Konsep Pela Gandong adalah sistem persekutuan antar-negeri (desa) di Maluku, yang menyatukan dua desa atau lebih (biasanya berbeda agama) dalam ikatan persaudaraan yang tak terputuskan. Sistem ini menjadi instrumen utama resolusi konflik dan pembangunan perdamaian di Maluku pasca-konflik tahun 1999.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    referenceIds: ["mal-ref-pela"],
  },

  culture: {
    introduction: [
      {
        id: "mal-cul-01",
        content: "Budaya Maluku sangat ekspresif, ditandai dengan kecintaan pada musik dan tarian. Sejak 2019, Ambon telah diakui oleh UNESCO sebagai Kota Musik Dunia (City of Music).",
        citationIds: ["mal-ref-unesco", "mal-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mal-cul-item-01",
        category: "Tari Tradisional",
        title: "Tari Cakalele",
        description: "Tarian perang tradisional Maluku yang melambangkan keberanian dan jiwa kepahlawanan. Penari pria menggunakan parang (salawaku), sementara penari wanita mengayunkan sapu tangan (lenso).",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-02",
        category: "Arsitektur",
        title: "Baileo",
        description: "Rumah adat sekaligus balai pertemuan masyarakat di Maluku. Baileo berbentuk rumah panggung tanpa dinding, melambangkan keterbukaan masyarakat serta memberikan tempat bagi roh leluhur untuk leluasa masuk dan keluar.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-03",
        category: "Tradisi Ekologi",
        title: "Sasi",
        description: "Hukum adat larangan mengambil hasil alam (laut maupun darat) di suatu wilayah untuk jangka waktu tertentu. Sasi adalah bentuk awal dari upaya konservasi lingkungan yang berbasis pada kearifan lokal.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-cul-item-04",
        category: "Adat & Ritus",
        title: "Pukul Sapu",
        description: "Tradisi saling memukul menggunakan sapu lidi dari tulang daun kelapa yang biasanya dilakukan oleh pemuda dari Negeri Mamala dan Morella. Tradisi ini menunjukkan ketangguhan fisik sekaligus diakhiri dengan perdamaian menggunakan minyak khusus pemulih luka.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-wbtb", "mal-ref-unesco"],
  },

  language: {
    introduction: [
      {
        id: "mal-lang-01",
        content: "Meskipun memiliki puluhan bahasa daerah endemik yang terancam punah, bahasa pergaulan (lingua franca) yang paling banyak digunakan di Maluku adalah Bahasa Melayu Ambon. Bahasa ini memiliki banyak kata serapan dari bahasa Belanda dan Portugis akibat sejarah kolonialisme yang panjang.",
        citationIds: ["mal-ref-bahasa"],
      }
    ],
    vocabulary: [
      { id: "mal-voc-01", word: "Dangke", meaning: "Terima kasih (berasal dari bahasa Belanda 'Dank je')", citationIds: ["mal-ref-bahasa"] },
      { id: "mal-voc-02", word: "Beta", meaning: "Saya", citationIds: ["mal-ref-bahasa"] },
      { id: "mal-voc-03", word: "Ose / Ale", meaning: "Kamu", citationIds: ["mal-ref-bahasa"] },
      { id: "mal-voc-04", word: "Katong", meaning: "Kita", citationIds: ["mal-ref-bahasa"] },
    ],
    referenceIds: ["mal-ref-bahasa"],
  },

  culinary: {
    introduction: [
      {
        id: "mal-culi-01",
        content: "Kuliner Maluku berbasis pada hasil laut (seafood) segar dan pemanfaatan pati sagu. Cita rasa masakan didominasi oleh asam segar dari jeruk lemon cui dan rasa pedas yang membangkitkan selera.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "mal-culi-item-01",
        title: "Papeda",
        description: "Bubur sagu bertekstur lengket bak lem, disantap sebagai pengganti nasi. Biasanya disajikan dengan kuah ikan kuning yang kaya rempah kunyit dan kemangi.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-02",
        title: "Ikan Kuah Kuning",
        description: "Hidangan ikan (biasanya tuna, cakalang, atau tongkol) yang dimasak dalam kuah berwarna kuning dari kunyit, dibumbui serai, kemangi, dan jeruk nipis.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-03",
        title: "Sambal Colo-Colo",
        description: "Sambal khas yang tidak diulek, melainkan irisan tomat, cabai rawit, bawang merah, yang disiram dengan air perasan jeruk nipis (lemon cui), kecap, dan kadang ditambahkan irisan kenari.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-culi-item-04",
        title: "Kohi-Kohi",
        description: "Olahan ikan cakalang asar (asap) yang disuwir dan dicampur dengan kelapa parut dan bumbu rempah.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "mal-bio-01",
        content: "Terletak di kawasan Wallacea, Maluku memiliki keanekaragaman flora dan fauna endemik perpaduan antara tipe Asia dan Australasia. Laut Banda juga merupakan salah satu kawasan dengan terumbu karang terkaya di dunia.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    species: [
      {
        id: "mal-bio-item-01",
        category: "Flora",
        title: "Anggrek Larat (Dendrobium phalaenopsis)",
        description: "Anggrek endemik Pulau Larat (Kepulauan Tanimbar) yang memiliki warna ungu cerah. Anggrek ini ditetapkan sebagai flora maskot Provinsi Maluku.",
        citationIds: ["mal-ref-bps"],
      },
      {
        id: "mal-bio-item-02",
        category: "Fauna",
        title: "Burung Nuri Maluku (Eos bornea)",
        description: "Burung paruh bengkok endemik yang memiliki bulu dominan merah terang. Merupakan fauna identitas Provinsi Maluku, keberadaannya dilindungi dari perburuan liar.",
        citationIds: ["mal-ref-bps"],
      },
      {
        id: "mal-bio-item-03",
        category: "Flora",
        title: "Pohon Pala (Myristica fragrans) dan Cengkeh (Syzygium aromaticum)",
        description: "Tanaman endemik asli Maluku yang pernah mengubah jalannya sejarah penjelajahan dunia. Terutama di Pulau Banda dan Ternate-Tidore.",
        citationIds: ["mal-ref-sejarah"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-sejarah"],
  },

  destinations: {
    introduction: [
      {
        id: "mal-dest-01",
        content: "Sebagai provinsi kepulauan, Maluku menawarkan destinasi wisata yang menggabungkan situs bersejarah era kolonial dengan panorama tropis kepulauan bahari yang perawan.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    items: [
      {
        id: "mal-dest-item-01",
        category: "Sejarah & Bahari",
        title: "Kepulauan Banda Neira",
        description: "Gugusan pulau bersejarah tempat pembuangan tokoh nasional seperti Bung Hatta dan Sjahrir. Terdapat Benteng Belgica peninggalan VOC, Gunung Api Banda, dan spot diving berkelas dunia.",
        citationIds: ["mal-ref-sejarah"],
      },
      {
        id: "mal-dest-item-02",
        category: "Alam",
        title: "Pantai Ora, Pulau Seram",
        description: "Sering dijuluki 'Maladewa-nya Indonesia', Pantai Ora menawarkan perairan kristal dengan penginapan terapung (eco-lodge) yang menghadap tebing kapur menjulang.",
        citationIds: ["mal-ref-bps"],
      },
      {
        id: "mal-dest-item-03",
        category: "Alam",
        title: "Pantai Natsepa, Ambon",
        description: "Pantai pasir putih populer di Ambon, sangat ikonis dan terkenal dengan kuliner rujak buah khas Natsepa yang dijajakan di sepanjang garis pantainya.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "mal-story-01",
        content: "Kisah-kisah rakyat di Maluku kental dengan nuansa nilai-nilai keluarga, pengorbanan, serta tragedi, sering kali mewujudkan pesan moral bagi anak-anak.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "mal-story-item-01",
        title: "Nenek Luhu",
        description: "Legenda tragis tentang Ta Ina Luhu, putri raja yang kerajaannya dihancurkan oleh VOC Belanda. Kesedihannya dan penolakannya terhadap penjajah membuatnya menjelma menjadi sosok tak kasat mata. Masyarakat Maluku, khususnya di Pulau Ambon, memercayai Nenek Luhu akan muncul pada cuaca panas dan hujan rintik-rintik (hujan orang mati) untuk menculik anak-anak, sebuah mitos yang dipakai para ibu agar anaknya tetap berada di dalam rumah saat cuaca buruk.",
        citationIds: ["mal-ref-wbtb"],
      },
      {
        id: "mal-story-item-02",
        title: "Batu Badaong",
        description: "Legenda tentang seorang ibu yang patah hati melihat anak-anaknya yang durhaka. Sang ibu lalu berdoa kepada sebuah batu karang raksasa di tepi laut agar menelan dirinya. Cerita ini menjadi pesan moral penting tentang bakti seorang anak kepada orang tua.",
        citationIds: ["mal-ref-wbtb"],
      }
    ],
    referenceIds: ["mal-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "mal-cont-01",
        content: "Di masa kini, Maluku berupaya bangkit sebagai kekuatan maritim dan ibu kota kreativitas musik. Pengakuan Ambon sebagai City of Music oleh UNESCO pada 2019 menumbuhkan industri ekonomi kreatif.",
        citationIds: ["mal-ref-unesco"],
      }
    ],
    economy: [
      {
        id: "mal-cont-02",
        content: "Sektor perikanan menjadi tulang punggung ekonomi Maluku, yang dicanangkan sebagai Lumbung Ikan Nasional (LIN). Laut Banda dan Laut Arafura berkontribusi signifikan pada tangkapan ikan tuna dan cakalang nasional.",
        citationIds: ["mal-ref-bps"],
      }
    ],
    referenceIds: ["mal-ref-unesco", "mal-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "mal-travel-01",
        content: "Perjalanan ke Maluku memberikan pengalaman napak tilas sejarah dunia yang dikelilingi oleh surga tropis. Aksesibilitas antar pulau sangat bergantung pada transportasi laut seperti kapal Pelni dan speedboat (kapal cepat).",
        citationIds: ["mal-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "mal-travel-02",
        content: "Saat berkunjung ke negeri (desa adat) di Maluku, hargai sistem kepemimpinan Raja (kepala desa adat) dan aturan Sasi jika sedang diberlakukan. Penduduk lokal sangat menghargai senyuman dan sapaan; memanggil warga dengan sebutan 'Nyong' (untuk pemuda) atau 'Nona' (untuk pemudi) dianggap ramah.",
        citationIds: ["mal-ref-pela"],
      }
    ],
    referenceIds: ["mal-ref-bps", "mal-ref-pela"],
  },

  lastReviewedAt: "2026-07-12T16:35:00Z",
  contentStatus: "draft",
  referenceIds: [
    "mal-ref-bps",
    "mal-ref-wbtb",
    "mal-ref-sejarah",
    "mal-ref-bahasa",
    "mal-ref-unesco",
    "mal-ref-pela"
  ]
};
