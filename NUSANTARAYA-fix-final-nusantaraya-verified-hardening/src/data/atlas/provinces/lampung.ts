import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const lampungReferences: ScientificReference[] = [
  {
    id: "lmp-ref-bps",
    title: "Provinsi Lampung Dalam Angka 2024",
    authors: ["BPS Provinsi Lampung"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Lampung",
    url: "https://lampung.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["lampung"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "lmp-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Lampung",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["lampung"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "lmp-ref-krakatau",
    title: "Krakatoa: The Day the World Exploded",
    authors: ["Winchester, Simon"],
    year: 2003,
    publisher: "HarperCollins",
    url: "https://en.wikipedia.org/wiki/Krakatoa:_The_Day_the_World_Exploded",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["lampung"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "lmp-ref-waykambas",
    title: "Way Kambas National Park",
    authors: ["ASEAN Heritage Parks"],
    year: 2016,
    publisher: "ASEAN Centre for Biodiversity",
    url: "https://aseanbiodiversity.org/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["lampung"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "lmp-ref-transmigrasi",
    title: "Kolonisasi dan Transmigrasi di Lampung",
    authors: ["Gondowarsito, Ria"],
    year: 1990,
    publisher: "Universitas Indonesia",
    url: "https://id.wikipedia.org/wiki/Suku_Lampung",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["lampung"],
    topicIds: ["society"],
  }
];

export const lampungAtlas: ProvinceAtlas = {
  provinceId: "lampung",
  slug: "lampung",
  title: "Lampung",
  tagline: "Sang Bumi Ruwa Jurai, Gerbang Emas Pulau Sumatera",
  summary: [
    {
      id: "lmp-sum-01",
      content: "Sebagai pintu gerbang darat Pulau Sumatera, Lampung memikul peran strategis yang menyambungkan dua pulau terpadat di Indonesia via Selat Sunda. Terkenal secara global akan legenda letusan kiamat Krakatau (1883) dan perlindungan satwa eksotis di Way Kambas, provinsi ini ('Sang Bumi Ruwa Jurai') adalah titik kumpul sempurna antara identitas agung Suku Lampung (Pepadun dan Saibatin) dengan gelombang transmigran dari pulau Jawa dan Bali.",
      citationIds: ["lmp-ref-bps", "lmp-ref-krakatau"],
    }
  ],
  quickFacts: [
    { id: "lmp-qf-01", label: "Ibu Kota", value: "Bandar Lampung", citationIds: ["lmp-ref-bps"] },
    { id: "lmp-qf-02", label: "Luas Wilayah", value: "34.623,80 km²", citationIds: ["lmp-ref-bps"], dataYear: 2024 },
    { id: "lmp-qf-03", label: "Populasi", value: "9.081.792 jiwa", citationIds: ["lmp-ref-bps"], dataYear: 2023 },
    { id: "lmp-qf-04", label: "Ikon Budaya", value: "Menara Siger", citationIds: ["lmp-ref-bps"] },
    { id: "lmp-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["lmp-ref-bps"] },
    { id: "lmp-qf-06", label: "Gubernur", value: "Samsudin (Pj.)", citationIds: ["lmp-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "lmp-geo-01",
        content: "Bentuk geografis Lampung menyerupai kaki segitiga yang mencengkeram Selat Sunda di ujung paling selatan Pulau Sumatera.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "lmp-geo-02",
        content: "Pantai timur Lampung berupa dataran rendah, rawa bakau, dan muara sungai yang bermuara di Laut Jawa. Sebaliknya, wilayah barat dibentengi oleh patahan Bukit Barisan (Gunung Pesagi) dan pesisir Krui yang berhadapan dengan ombak buas Samudra Hindia. Di perairan Selat Sunda, menyembul sang legenda vulkanik: Gunung Anak Krakatau.",
        citationIds: ["lmp-ref-bps", "lmp-ref-krakatau"],
      }
    ],
    referenceIds: ["lmp-ref-bps", "lmp-ref-krakatau"],
  },

  history: {
    introduction: [
      {
        id: "lmp-his-01",
        content: "Lampung pernah menjadi wilayah kekuasaan Kerajaan Tulang Bawang, lumbung lada Kesultanan Banten, dan lokasi mega-bencana letusan gunung berapi yang mengubah sejarah iklim dunia.",
        citationIds: ["lmp-ref-krakatau"],
      }
    ],
    timeline: [
      {
        id: "lmp-era-01",
        period: "Abad ke-5 M",
        title: "Kerajaan Tulang Bawang",
        description: "Catatan I-Tsing (biksu Tiongkok) mencatat adanya kerajaan pedalaman purba di 'To-Lang P'o-Hwang' (Lampung) yang merajai perdagangan pesisir selatan Sumatera sebelum munculnya hegemoni Sriwijaya.",
        citationIds: ["lmp-ref-bps"],
      },
      {
        id: "lmp-era-02",
        period: "26-27 Agustus 1883",
        title: "Erupsi Megakolosal Krakatau",
        description: "Gunung Krakatau meledak dengan kekuatan 13.000 kali bom atom Hiroshima. Suaranya terdengar hingga Australia (4.800 km). Tsunami setinggi 40 meter menyapu pesisir selatan Lampung dan Banten (menewaskan 36.000 orang), dan abu vulkaniknya menutupi atmosfer bumi, menurunkan suhu global selama 5 tahun.",
        citationIds: ["lmp-ref-krakatau"],
      },
      {
        id: "lmp-era-03",
        period: "1905",
        title: "Kolonisasi (Transmigrasi Pertama)",
        description: "Pemerintah Hindia Belanda mencetuskan program 'Kolonisasi' untuk memindahkan ribuan penduduk dari Pulau Jawa (Karesidenan Kedu) yang padat ke Gedong Tataan, Lampung, untuk membuka lahan perkebunan. Ini adalah program transmigrasi (bedeng) pertama dalam sejarah Nusantara.",
        citationIds: ["lmp-ref-transmigrasi"],
      },
      {
        id: "lmp-era-04",
        period: "1964",
        title: "Pemekaran Provinsi",
        description: "Provinsi Lampung secara resmi berpisah dari Provinsi Sumatera Selatan, berdiri sebagai entitas otonom.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    referenceIds: ["lmp-ref-krakatau", "lmp-ref-transmigrasi", "lmp-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "lmp-soc-01",
        content: "Moto Lampung 'Sang Bumi Ruwa Jurai' bermakna: Satu Bumi (Lampung) untuk Dua Jurai/Golongan Adat (Pepadun dan Saibatin).",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "lmp-soc-02",
        content: "Masyarakat asli Suku Lampung terbagi dua kelompok adat besar: Pepadun (tinggal di pedalaman, sifat kepemimpinan adat/gelar bisa diraih berdasarkan prestasi atau kekayaan melalui upacara Cakak Pepadun) dan Saibatin (tinggal di pesisir, kepemimpinan adat diturunkan secara turun-temurun berdarah biru/bangsawan aristokratis). Saat ini, etnis Jawa mendominasi populasi Lampung berkat keberlanjutan program transmigrasi puluhan tahun.",
        citationIds: ["lmp-ref-transmigrasi"],
      }
    ],
    referenceIds: ["lmp-ref-transmigrasi", "lmp-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "lmp-cul-01",
        content: "Kemewahan dan nilai keagungan (gawi) budaya Lampung diejawantahkan dalam seni sulaman emas-perak dan pemakaian mahkota agung (Siger).",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "lmp-cul-item-01",
        category: "Kriya Tekstil Emas",
        title: "Kain Tapis",
        description: "Pakaian wanita suku Lampung berbentuk kain sarung yang ditenun dengan benang kapas, dipadukan dengan sulaman motif alam/geometris (seperti Pucuk Rebung atau Kapal) menggunakan benang emas dan perak asli. Kain ini sangat berat dan disakralkan.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-cul-item-02",
        category: "Mahkota Kehormatan",
        title: "Siger",
        description: "Mahkota adat pengantin wanita Lampung (berbentuk seperti tanduk berlapis-lapis tinggi atau mirip sirip hiu yang dilapisi emas). Siger Saibatin memiliki tujuh lekukan, sedangkan Siger Pepadun memiliki sembilan lekukan.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-cul-item-03",
        category: "Tari Persembahan",
        title: "Tari Sigeh Penguten (Tari Sembah)",
        description: "Tari penyambutan tamu agung di mana para penari wanita menggunakan mahkota Siger besar dan ujung jari berhias tanggai emas panjang, membawa tepak sirih untuk disuguhkan kepada tamu VVIP.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-cul-item-04",
        category: "Kesenian Bela Diri Lisan",
        title: "Pincak Khakot",
        description: "Silat tradisional pedang atau golok khas Lampung yang ditarikan pada saat menyambut besan atau memeriahkan arak-arakan mempelai (Begawi).",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    referenceIds: ["lmp-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "lmp-lang-01",
        content: "Bahasa Lampung memiliki aksara turunan Brahmi India kuno (Aksara Kaganga/Surat Ulu) yang unik. Secara pelafalan, terdapat dua dialek utama: Dialek A (Api) untuk pesisir dan Dialek O (Nyow) untuk pedalaman.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "lmp-voc-01", word: "Tabik Pun!", meaning: "Salam penghormatan/permisi. Lawan bicaranya wajib menjawab 'Ya Pun!'.", citationIds: ["lmp-ref-bps"] },
      { id: "lmp-voc-02", word: "Nyak / Sikam", meaning: "Saya / Kami (Bahasa Lampung).", citationIds: ["lmp-ref-bps"] },
      { id: "lmp-voc-03", word: "Niku / Puskam", meaning: "Kamu / Anda (Bahasa Lampung).", citationIds: ["lmp-ref-bps"] },
      { id: "lmp-voc-04", word: "Mengan", meaning: "Makan.", citationIds: ["lmp-ref-bps"] },
    ],
    referenceIds: ["lmp-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "lmp-culi-01",
        content: "Kultur makan Lampung sangat mengedepankan tradisi 'Seruit' (makan bersama-sama lesehan menggunakan ikan dan tempoyak) serta surga bagi penikmat camilan pisang coklat dan kopi.",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "lmp-culi-item-01",
        title: "Seruit (Nyruit)",
        description: "Bukan sekadar nama masakan, melainkan tradisi makan bersama. Nasi hangat, ikan sungai (belide, baung, atau patin bakar/goreng), sayuran lalapan mentah, lalu dicampur (diaduk) dengan sambal terasi mentah, tempoyak, dan perasan jeruk limau menggunakan tangan langsung.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-culi-item-02",
        title: "Geguduh",
        description: "Kue basah sejenis pisang goreng khas Lampung. Pisang kepok dihaluskan, dicampur terigu, susu, parutan kelapa, daun pandan (atau selai coklat/keju saat ini), lalu digoreng hingga kuning keemasan.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-culi-item-03",
        title: "Pindang Meranjat / Pindang Baung",
        description: "Ikan sungai berdaging lembut berkuah pedas asam khas Lampung/Palembang. Ciri khas di Lampung kadang menggunakan kuah yang lebih kental bumbu tempoyak.",
        citationIds: ["lmp-ref-wbtb"],
      },
      {
        id: "lmp-culi-item-04",
        title: "Kopi Robusta Lampung",
        description: "Provinsi ini adalah penghasil kopi robusta terbesar se-Indonesia (berpusat di Lampung Barat/Way Tenong). Cita rasanya sangat kuat (bold), pahit tebal, sangat ideal dipadukan dengan krimer/susu.",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    referenceIds: ["lmp-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "lmp-bio-01",
        content: "Taman Nasional Way Kambas (dataran rendah pesisir) merupakan kawah candradimuka bagi pelatihan dan penangkaran Gajah serta Badak Sumatera bertaraf internasional.",
        citationIds: ["lmp-ref-waykambas"],
      }
    ],
    species: [
      {
        id: "lmp-bio-item-01",
        category: "Fauna Endemik Kritis",
        title: "Badak Sumatera (Dicerorhinus sumatrensis)",
        description: "Satu-satunya badak bercula dua di Asia dan spesies badak terkecil (serta paling berambut/berbulu) di dunia. Suaka Rhino Sumatera (SRS) di Way Kambas adalah satu dari sedikit tempat keberhasilan kelahiran anak badak ini di penangkaran (semi in-situ).",
        citationIds: ["lmp-ref-waykambas"],
      },
      {
        id: "lmp-bio-item-02",
        category: "Fauna Endemik (Maskot)",
        title: "Gajah Sumatera (Elephas maximus sumatranus)",
        description: "Hewan terbesar daratan Sumatera yang kini mengalami penyusutan habitat. Way Kambas memiliki Pusat Latihan Gajah (PLG) pertama di Indonesia (1985) untuk menanggulangi konflik gajah liar dengan pemukiman.",
        citationIds: ["lmp-ref-waykambas"],
      },
      {
        id: "lmp-bio-item-03",
        category: "Flora Maskot",
        title: "Bunga Ashar (Mirabilis jalapa)",
        description: "Bunga unik (dikenal juga sebagai *four o'clock flower*) yang kuncup dan mekar setiap sore hari (sekitar pukul 16:00), bersamaan dengan masuknya waktu ibadah salat Ashar bagi umat Islam.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    referenceIds: ["lmp-ref-waykambas", "lmp-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "lmp-dest-01",
        content: "Lampung menonjolkan wisata petualangan pulau (bahari), konservasi megafauna, dan selancar ombak berkelas dunia.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    items: [
      {
        id: "lmp-dest-item-01",
        category: "Ikon Penyeberangan",
        title: "Menara Siger",
        description: "Bangunan raksasa berwarna kuning kemerahan berbentuk mahkota Siger pengantin yang berdiri megah di puncak bukit pelabuhan Bakauheni. Menara ini menjadi penanda Titik Nol (0 km) Pulau Sumatera bagian selatan.",
        citationIds: ["lmp-ref-bps"],
      },
      {
        id: "lmp-dest-item-02",
        category: "Konservasi Satwa",
        title: "Taman Nasional Way Kambas",
        description: "Sekitar 110 km dari Bandar Lampung. Wisatawan dapat melakukan safari hutan, melihat RS Gajah, memandikan gajah jinak bersama pawang, serta mengamati kehidupan liar si belalai.",
        citationIds: ["lmp-ref-waykambas"],
      },
      {
        id: "lmp-dest-item-03",
        category: "Bahari (Selancar Samudra Hindia)",
        title: "Pantai Tanjung Setia (Krui, Pesisir Barat)",
        description: "Terletak jauh di pesisir barat (menghadap langsung Samudra Hindia). Dianggap sebagai salah satu surga peselancar dunia (setara Hawaii) karena konsistensi ombak tingginya mencapai 6 hingga 7 meter di bulan tertentu (Krui Pro Surfing).",
        citationIds: ["lmp-ref-bps"],
      },
      {
        id: "lmp-dest-item-04",
        category: "Bahari (Snorkeling & Ekowisata)",
        title: "Pulau Pahawang & Teluk Kiluan",
        description: "Pahawang menawarkan keindahan bawah laut terumbu karang dangkal dan penginapan mengapung. Teluk Kiluan di Kabupaten Tanggamus adalah lokasi spesifik untuk menaiki jukung (perahu kecil) ke tengah laut demi berpapasan dengan rombongan lumba-lumba hidung botol.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    referenceIds: ["lmp-ref-bps", "lmp-ref-waykambas"],
  },

  stories: {
    introduction: [
      {
        id: "lmp-story-01",
        content: "Banyak kisah perlawanan tokoh kepung (Raden Intan) dan legenda pembentukan bentang alam di Lampung akibat gunung berapi.",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "lmp-story-item-01",
        title: "Raden Intan II",
        description: "Pahlawan muda Lampung keturunan Kesultanan Banten yang sejak usia remaja mengorganisir perlawanan kuat masyarakat Lampung (khususnya wilayah Kalianda/Rajabasa) terhadap penetrasi militer Belanda. Ia dikhianati dan gugur muda, namun semangatnya abadi menjadi nama Bandara Lampung (Radin Inten II).",
        citationIds: ["lmp-ref-bps"],
      },
      {
        id: "lmp-story-item-02",
        title: "Legenda Ratu Ali dan Sumur Putri",
        description: "Mitos yang berpusat di Teluk Betung, menceritakan tentang putri raja Lampung yang mandi di sumur ajaib (Sumur Putri). Konon sumber air panas/hangat di Lampung berhubungan langsung dengan aktivitas magma Gunung Krakatau purba.",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    referenceIds: ["lmp-ref-bps", "lmp-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "lmp-cont-01",
        content: "Sebagai lumbung pangan dan perkebunan, Lampung memiliki posisi tawar strategis mensuplai logistik ke Pulau Jawa.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    economy: [
      {
        id: "lmp-cont-02",
        content: "Lampung memegang status sebagai salah satu produsen buah-buahan olahan nanas kalengan (Great Giant Pineapple), pisang (Cavendish), serta tambak udang/ikan (Bumi Dipasena) terbesar di dunia/Asia Tenggara. Pelabuhan Bakauheni memegang rekor sebagai salah satu pelabuhan penyeberangan feri (Ro-Ro) terpadat dan tersibuk di Indonesia.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    referenceIds: ["lmp-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "lmp-travel-01",
        content: "Perjalanan di Lampung didominasi oleh jalan raya Trans-Sumatera (dan kini Tol Bakauheni-Terbanggi Besar) yang selalu dilewati truk-truk logistik antar pulau.",
        citationIds: ["lmp-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "lmp-travel-02",
        content: "Sapa masyarakat dengan 'Tabik Pun'. Saat dihidangkan makanan Seruit, usahakan tidak menolak dan cucilah tangan Anda untuk makan bersama tanpa sendok. Oleh-oleh wajib Lampung adalah Keripik Pisang Susu/Coklat yang pusat penjualannya selalu memadati Jalan Pagar Alam (Gang PU).",
        citationIds: ["lmp-ref-wbtb"],
      }
    ],
    referenceIds: ["lmp-ref-bps", "lmp-ref-wbtb"],
  },

  lastReviewedAt: "2026-07-13T00:17:00Z",
  contentStatus: "draft",
  referenceIds: [
    "lmp-ref-bps",
    "lmp-ref-wbtb",
    "lmp-ref-krakatau",
    "lmp-ref-waykambas",
    "lmp-ref-transmigrasi"
  ]
};
