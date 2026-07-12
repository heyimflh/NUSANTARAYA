import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const bantenReferences: ScientificReference[] = [
  {
    id: "btn-ref-bps",
    title: "Provinsi Banten Dalam Angka 2024",
    authors: ["BPS Provinsi Banten"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Banten",
    url: "https://banten.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["banten"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "btn-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Banten",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["banten"],
    topicIds: ["culture", "culinary"],
  },
  {
    id: "btn-ref-ujung-kulon",
    title: "Ujung Kulon National Park",
    authors: ["UNESCO World Heritage Centre"],
    year: 1991,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/608",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["banten"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "btn-ref-sejarah",
    title: "Sejarah Banten: Menyelusuri Jejak Kesultanan",
    authors: ["Guillot, Claude"],
    year: 2008,
    publisher: "Kepustakaan Populer Gramedia",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Banten",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["banten"],
    topicIds: ["history"],
  },
  {
    id: "btn-ref-baduy",
    title: "Orang Baduy: Manusia Sungai Kolonial dan Masyarakat Adat",
    authors: ["Garna, Judistira K."],
    year: 1993,
    publisher: "Universitas Padjadjaran",
    url: "https://id.wikipedia.org/wiki/Suku_Badui",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["banten"],
    topicIds: ["society"],
  }
];

export const bantenAtlas: ProvinceAtlas = {
  provinceId: "banten",
  slug: "banten",
  title: "Banten",
  tagline: "Tanah Jawara di Pintu Gerbang Jawa",
  summary: [
    {
      id: "btn-sum-01",
      content: "Banten adalah provinsi yang terletak di ujung paling barat Pulau Jawa, berbatasan langsung dengan Selat Sunda dan DKI Jakarta. Pernah menjadi pusat salah satu kesultanan maritim terkuat di Nusantara pada abad ke-16, kini Banten memadukan warisan sejarah dan budaya mistis (Debus), kemurnian masyarakat adat Baduy, serta laju pesat kawasan industri modern dan pelabuhan internasional.",
      citationIds: ["btn-ref-bps", "btn-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "btn-qf-01", label: "Ibu Kota", value: "Serang", citationIds: ["btn-ref-bps"] },
    { id: "btn-qf-02", label: "Luas Wilayah", value: "9.662,92 km²", citationIds: ["btn-ref-bps"], dataYear: 2024 },
    { id: "btn-qf-03", label: "Populasi", value: "12.307.700 jiwa", citationIds: ["btn-ref-bps"], dataYear: 2023 },
    { id: "btn-qf-04", label: "Provinsi Ke-", value: "30 (Dimekarkan 2000)", citationIds: ["btn-ref-bps"] },
    { id: "btn-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["btn-ref-bps"] },
    { id: "btn-qf-06", label: "Gubernur", value: "Al Muktabar (Pj.)", citationIds: ["btn-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "btn-geo-01",
        content: "Geografi Banten sangat bervariasi. Di sebelah utara dan barat dikelilingi laut (Laut Jawa dan Selat Sunda) dengan pesisir datar, sedangkan di wilayah selatan membentang pegunungan dan perbukitan yang masih sangat asri.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "btn-geo-02",
        content: "Semenanjung Ujung Kulon berada di ujung paling barat daya provinsi ini. Di Selat Sunda, terdapat fragmen sejarah geologi dunia: Gunung Anak Krakatau. Bagian selatan Banten mencakup kawasan pegunungan Kendeng yang menjadi wilayah adat tempat tinggal Suku Baduy.",
        citationIds: ["btn-ref-ujung-kulon"],
      }
    ],
    referenceIds: ["btn-ref-bps", "btn-ref-ujung-kulon"],
  },

  history: {
    introduction: [
      {
        id: "btn-his-01",
        content: "Banten memiliki sejarah gemilang sebagai pusat perdagangan lada internasional dan basis penyebaran agama Islam yang tangguh melawan dominasi kolonialisme VOC (Belanda).",
        citationIds: ["btn-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "btn-era-01",
        period: "1526",
        title: "Penaklukan Banten Girang",
        description: "Sunan Gunung Jati dan putranya, Maulana Hasanuddin, menaklukkan pelabuhan Banten (Banten Girang) dari Kerajaan Sunda Pajajaran, yang menjadi cikal bakal berdirinya Kesultanan Banten.",
        citationIds: ["btn-ref-sejarah"],
      },
      {
        id: "btn-era-02",
        period: "1651 – 1683",
        title: "Puncak Kejayaan Kesultanan Banten",
        description: "Di bawah pimpinan Sultan Ageng Tirtayasa, Kesultanan Banten mencapai puncak keemasan. Banten memiliki armada laut modern, diplomat di kancah internasional (hingga ke Inggris), dan menjadi pusat perdagangan lada dunia yang bersaing ketat dengan VOC di Batavia.",
        citationIds: ["btn-ref-sejarah"],
      },
      {
        id: "btn-era-03",
        period: "1888",
        title: "Geger Cilegon",
        description: "Pemberontakan besar petani dan ulama (dipimpin Ki Wasyid) melawan pemerintah kolonial Hindia Belanda yang menindas, menunjukkan akar perlawanan kerakyatan (jawara dan kiai) di Banten.",
        citationIds: ["btn-ref-sejarah"],
      },
      {
        id: "btn-era-04",
        period: "4 Oktober 2000",
        title: "Pemekaran Provinsi",
        description: "Masyarakat Banten secara resmi memisahkan diri dari Provinsi Jawa Barat melalui UU No. 23 Tahun 2000, didorong oleh semangat reformasi untuk mempercepat pemerataan pembangunan.",
        citationIds: ["btn-ref-sejarah"],
      }
    ],
    referenceIds: ["btn-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "btn-soc-01",
        content: "Struktur sosial Banten sangat kental dengan nilai keislaman tradisional yang memadukan peran ulama (Kiai) dan tokoh beladiri/adat (Jawara). Selain itu, Banten merupakan rumah bagi komunitas adat Kanekes (Baduy).",
        citationIds: ["btn-ref-baduy"],
      }
    ],
    socialStructure: [
      {
        id: "btn-soc-02",
        content: "Suku Baduy di Pegunungan Kendeng membagi wilayahnya menjadi Baduy Dalam (Tangtu) yang sangat ketat menjaga tradisi leluhur (dilarang menggunakan kendaraan, listrik, dan sabun kimia) serta Baduy Luar (Panamping) yang lebih terbuka dan bertugas melindungi Baduy Dalam.",
        citationIds: ["btn-ref-baduy"],
      }
    ],
    referenceIds: ["btn-ref-baduy"],
  },

  culture: {
    introduction: [
      {
        id: "btn-cul-01",
        content: "Banten mewarisi kekayaan seni pertunjukan yang unik, sering kali menggabungkan unsur magis, kekuatan fisik, dan kesenian bernapaskan Islam.",
        citationIds: ["btn-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "btn-cul-item-01",
        category: "Seni Pertunjukan (Bela Diri)",
        title: "Debus",
        description: "Kesenian bela diri ekstrem yang mempertontonkan kekebalan tubuh terhadap senjata tajam, air keras, atau api. Pada awalnya (zaman Sultan Maulana Hasanuddin), Debus digunakan sebagai sarana penyebaran agama Islam sekaligus membangkitkan semangat juang melawan penjajah.",
        citationIds: ["btn-ref-wbtb"],
      },
      {
        id: "btn-cul-item-02",
        category: "Musik Tradisional",
        title: "Angklung Buhun",
        description: "Kesenian angklung kuno dari masyarakat Baduy yang dimainkan secara sakral saat upacara penanaman padi (ngaseuk) dan panen, sebagai bentuk penghormatan kepada Dewi Sri (Nyai Pohaci).",
        citationIds: ["btn-ref-wbtb"],
      },
      {
        id: "btn-cul-item-03",
        category: "Seni Suara",
        title: "Rampak Bedug",
        description: "Seni menabuh bedug secara serempak dengan ritme dinamis dan harmonis, yang pada mulanya dilakukan saat bulan suci Ramadan atau malam takbiran, kini menjadi pertunjukan seni populer.",
        citationIds: ["btn-ref-wbtb"],
      }
    ],
    referenceIds: ["btn-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "btn-lang-01",
        content: "Provinsi Banten adalah area percampuran linguistik. Terdapat dua bahasa daerah utama yang digunakan, mencerminkan wilayah pesisir dan wilayah pedalaman.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "btn-voc-01", word: "Dia / Sire", meaning: "Kamu (Bahasa Sunda Banten kasar / Halus)", citationIds: ["btn-ref-bps"] },
      { id: "btn-voc-02", word: "Aing", meaning: "Saya (Sering digunakan sehari-hari dalam Sunda Banten, tidak selalu dianggap sangat kasar seperti di Parahyangan)", citationIds: ["btn-ref-bps"] },
      { id: "btn-voc-03", word: "Pripun", meaning: "Bagaimana (Bahasa Jawa Serang/Jaser)", citationIds: ["btn-ref-bps"] },
      { id: "btn-voc-04", word: "Kule", meaning: "Saya (Jawa Serang)", citationIds: ["btn-ref-bps"] },
    ],
    referenceIds: ["btn-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "btn-culi-01",
        content: "Kuliner Banten sangat dipengaruhi oleh sumber daya pesisir (ikan bandeng) serta peninggalan kuliner istana Kesultanan Banten dan sentuhan budaya Arab-Gudjarat.",
        citationIds: ["btn-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "btn-culi-item-01",
        title: "Sate Bandeng",
        description: "Ikan bandeng yang dihilangkan durinya, dagingnya dihaluskan dan dicampur bumbu rempah kelapa sangrai, dimasukkan kembali ke dalam kulit ikan, ditusuk bambu besar, lalu dibakar. Makanan ini adalah warisan juru masak Kesultanan Banten.",
        citationIds: ["btn-ref-wbtb"],
      },
      {
        id: "btn-culi-item-02",
        title: "Rabeg",
        description: "Semacam semur daging dan jeroan kambing bercita rasa manis, pedas rempah (lada, pala, kayu manis), khas masakan Arab. Rabeg adalah hidangan favorit Sultan Maulana Hasanuddin setelah kepulangannya dari kota Rabigh (Arab Saudi).",
        citationIds: ["btn-ref-wbtb"],
      },
      {
        id: "btn-culi-item-03",
        title: "Nasi Sumsum",
        description: "Nasi yang dicampur dengan sumsum tulang kerbau (atau sapi) yang sudah dibumbui rempah pedas, kemudian dibungkus daun pisang dan dibakar hingga aroma lemaknya meresap.",
        citationIds: ["btn-ref-wbtb"],
      },
      {
        id: "btn-culi-item-04",
        title: "Kue Jojorong",
        description: "Kue basah berbahan tepung beras dan santan dengan gula aren cair di bagian bawahnya, disajikan dalam mangkuk mungil dari daun pisang (takir).",
        citationIds: ["btn-ref-wbtb"],
      }
    ],
    referenceIds: ["btn-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "btn-bio-01",
        content: "Kekayaan hayati terbesar Banten terletak di Semenanjung Ujung Kulon, yang merupakan Situs Warisan Dunia UNESCO (1991) dan habitat perlindungan terakhir bagi salah satu mamalia paling langka di bumi.",
        citationIds: ["btn-ref-ujung-kulon"],
      }
    ],
    species: [
      {
        id: "btn-bio-item-01",
        category: "Fauna Darat (Endemik Langka)",
        title: "Badak Jawa (Rhinoceros sondaicus)",
        description: "Mamalia purba bercula satu yang berstatus sangat terancam punah (Critically Endangered). Populasinya di dunia hanya tersisa sekitar 70-80 ekor, semuanya berada secara eksklusif di Taman Nasional Ujung Kulon.",
        citationIds: ["btn-ref-ujung-kulon"],
      },
      {
        id: "btn-bio-item-02",
        category: "Fauna Darat",
        title: "Banteng Jawa (Bos javanicus)",
        description: "Mamalia besar liar yang menjadi mangsa utama predator (seperti macan tutul) sekaligus penjaga keseimbangan ekosistem padang penggembalaan (Cidaon) di Ujung Kulon.",
        citationIds: ["btn-ref-ujung-kulon"],
      },
      {
        id: "btn-bio-item-03",
        category: "Flora Hutan Tropis",
        title: "Kokoleceran (Vatica bantamensis)",
        description: "Pohon maskot Provinsi Banten yang sangat langka. Pohon ini endemik Ujung Kulon dan dinamai 'kokoleceran' karena buahnya memiliki sayap yang bisa berputar seperti baling-baling (kolecer) saat jatuh ditiup angin.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    referenceIds: ["btn-ref-ujung-kulon", "btn-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "btn-dest-01",
        content: "Pariwisata Banten didominasi oleh deretan pantai di pesisir barat, wisata ziarah/sejarah, serta wisata petualangan alam di Taman Nasional.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    items: [
      {
        id: "btn-dest-item-01",
        category: "Sejarah & Religi",
        title: "Kawasan Banten Lama (Masjid Agung Banten)",
        description: "Situs bersejarah pusat Kesultanan Banten yang terkenal dengan Masjid Agung Banten yang memiliki menara bata khas menyerupai mercusuar atau pagoda, dirancang oleh arsitek Tionghoa (Tjek Ban Tjut) dan Belanda (Hendrik Lucasz Cardeel).",
        citationIds: ["btn-ref-sejarah"],
      },
      {
        id: "btn-dest-item-02",
        category: "Alam & Bahari",
        title: "Pantai Anyer, Carita, dan Tanjung Lesung",
        description: "Kawasan pesisir berpasir putih sepanjang pesisir barat Selat Sunda yang menjadi destinasi liburan favorit, menawarkan pemandangan langsung ke arah Gunung Krakatau.",
        citationIds: ["btn-ref-bps"],
      },
      {
        id: "btn-dest-item-03",
        category: "Budaya",
        title: "Desa Adat Baduy (Kanekes)",
        description: "Perjalanan spiritual dan budaya (trekking) melintasi perbukitan menuju desa suku Baduy, untuk belajar tentang kesederhanaan, harmoni dengan alam, dan ketahanan mempertahankan adat istiadat leluhur.",
        citationIds: ["btn-ref-baduy"],
      },
      {
        id: "btn-dest-item-04",
        category: "Taman Nasional",
        title: "Pulau Peucang & Ujung Kulon",
        description: "Pulau resor eksotis di lepas pantai barat semenanjung Ujung Kulon dengan pasir putih halus dan satwa liar (rusa, monyet berekor panjang, babi hutan) yang sering berkeliaran di sekitar pantai.",
        citationIds: ["btn-ref-ujung-kulon"],
      }
    ],
    referenceIds: ["btn-ref-bps", "btn-ref-sejarah", "btn-ref-ujung-kulon", "btn-ref-baduy"],
  },

  stories: {
    introduction: [
      {
        id: "btn-story-01",
        content: "Cerita rakyat dan mitos di Banten sangat dipengaruhi oleh sejarah heroisme lokal, dunia persilatan, mistisisme Islam, dan penjagaan alam.",
        citationIds: ["btn-ref-sejarah"],
      }
    ],
    stories: [
      {
        id: "btn-story-item-01",
        title: "Kisah Jawara dan Ilmu Rawa Rontek",
        description: "Mitos yang berkembang di masyarakat menceritakan bahwa para jawara Banten di masa penjajahan memiliki ilmu kebal (Rawa Rontek / Pancasona) yang membuat mereka tidak bisa mati bila tubuh atau bagian tubuhnya masih menyentuh tanah.",
        citationIds: ["btn-ref-sejarah"],
      },
      {
        id: "btn-story-item-02",
        title: "Puasanya Baduy Dalam",
        description: "Kisah tentang bulan 'Kawalu' dimana wilayah suku Baduy Dalam ditutup total bagi orang luar/wisatawan selama tiga bulan penuh untuk melakukan ritual pembersihan diri demi keseimbangan dunia.",
        citationIds: ["btn-ref-baduy"],
      }
    ],
    referenceIds: ["btn-ref-sejarah", "btn-ref-baduy"],
  },

  contemporary: {
    introduction: [
      {
        id: "btn-cont-01",
        content: "Saat ini, Banten adalah salah satu pilar ekonomi utama di barat Pulau Jawa, menjadi rumah bagi industri berat dan pintu gerbang utama lalu lintas logistik dan penumpang antar-pulau maupun internasional.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    economy: [
      {
        id: "btn-cont-02",
        content: "Kota Cilegon dijuluki 'Kota Baja' karena merupakan markas PT Krakatau Steel, pabrik baja terbesar di Asia Tenggara. Banten juga menaungi Bandara Internasional Soekarno-Hatta (di Kota Tangerang) dan Pelabuhan Penyeberangan Merak (penghubung Jawa-Sumatera).",
        citationIds: ["btn-ref-bps"],
      }
    ],
    referenceIds: ["btn-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "btn-travel-01",
        content: "Banten sangat mudah diakses dari Jakarta melalui jalan tol (Tol Jakarta-Merak) maupun kereta komuter (KRL) ke Rangkasbitung.",
        citationIds: ["btn-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "btn-travel-02",
        content: "Wisatawan yang berkunjung ke kawasan Banten Lama (Masjid/Makam Sultan) wajib berpakaian sopan dan tertutup. Saat berkunjung ke Desa Baduy (khususnya Baduy Dalam), terdapat larangan sangat ketat (tabu): dilarang mengambil foto/video, dilarang memakai sabun/sampo/pasta gigi bahan kimia di sungai, dan wisatawan asing (WNA) dilarang sama sekali masuk ke Baduy Dalam (hanya boleh sampai Baduy Luar).",
        citationIds: ["btn-ref-baduy"],
      }
    ],
    referenceIds: ["btn-ref-bps", "btn-ref-baduy"],
  },

  lastReviewedAt: "2026-07-12T16:50:00Z",
  contentStatus: "draft",
  referenceIds: [
    "btn-ref-bps",
    "btn-ref-wbtb",
    "btn-ref-ujung-kulon",
    "btn-ref-sejarah",
    "btn-ref-baduy"
  ]
};
