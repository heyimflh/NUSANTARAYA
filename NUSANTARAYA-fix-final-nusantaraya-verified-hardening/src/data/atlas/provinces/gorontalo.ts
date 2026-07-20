import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const gorontaloReferences: ScientificReference[] = [
  {
    id: "gor-ref-bps",
    title: "Provinsi Gorontalo Dalam Angka 2024",
    authors: ["BPS Provinsi Gorontalo"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Gorontalo",
    url: "https://gorontalo.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["gorontalo"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "gor-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Gorontalo",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["gorontalo"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "gor-ref-naniwartabone",
    title: "Nani Wartabone dan Perjuangan Kemerdekaan di Gorontalo",
    authors: ["Haba, John"],
    year: 1998,
    publisher: "LIPI Press",
    url: "https://id.wikipedia.org/wiki/Nani_Wartabone",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["gorontalo"],
    topicIds: ["history"],
  },
  {
    id: "gor-ref-hiupaus",
    title: "Whale Shark (Rhincodon typus) Tourism in Botubarani",
    authors: ["Himawan, M. R.", "et al."],
    year: 2017,
    publisher: "Journal of Coastal Research",
    url: "https://id.wikipedia.org/wiki/Botubarani,_Kabila_Bone,_Bone_Bolango",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["gorontalo"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "gor-ref-limboto",
    title: "Kajian Ekologis Danau Limboto",
    authors: ["Kementerian Lingkungan Hidup"],
    year: 2016,
    publisher: "KLHK Republik Indonesia",
    url: "https://menlhk.go.id/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["gorontalo"],
    topicIds: ["geography", "contemporary"],
  }
];

export const gorontaloAtlas: ProvinceAtlas = {
  provinceId: "gorontalo",
  slug: "gorontalo",
  title: "Gorontalo",
  tagline: "Bumi Serambi Madinah, Lumbung Jagung Nusantara",
  summary: [
    {
      id: "gor-sum-01",
      content: "Gorontalo adalah oasis keislaman yang teguh berdiri di ujung utara pulau Sulawesi ('Serambi Madinah'). Dipandu oleh falsafah leluhur 'Adat Bersendi Syarak, Syarak Bersendi Kitabullah', provinsi yang mekar dari Sulawesi Utara ini berhasil melepaskan diri pada tahun 2000 untuk memperjuangkan nasib dan identitas budaya lokal. Menyimpan pesona alam mulai dari Teluk Tomini (tempat berkumpulnya Hiu Paus raksasa pemakan plankton), resor laut eksotis (Pulo Cinta), hingga hamparan tak bertepi perkebunan jagung hibrida yang menjadi detak jantung ekonomi rakyatnya.",
      citationIds: ["gor-ref-bps", "gor-ref-wbtb", "gor-ref-hiupaus"],
    }
  ],
  quickFacts: [
    { id: "gor-qf-01", label: "Ibu Kota", value: "Kota Gorontalo", citationIds: ["gor-ref-bps"] },
    { id: "gor-qf-02", label: "Luas Wilayah", value: "11.257,07 km²", citationIds: ["gor-ref-bps"], dataYear: 2024 },
    { id: "gor-qf-03", label: "Populasi", value: "1.205.865 jiwa", citationIds: ["gor-ref-bps"], dataYear: 2023 },
    { id: "gor-qf-04", label: "Komoditas Utama", value: "Jagung (Binte)", citationIds: ["gor-ref-bps"] },
    { id: "gor-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["gor-ref-bps"] },
    { id: "gor-qf-06", label: "Gubernur", value: "Mohammad Rudy Salahuddin (Pj.)", citationIds: ["gor-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "gor-geo-01",
        content: "Geografi Gorontalo terjepit memanjang ('Hulondalo') di antara Laut Sulawesi (utara) dan Teluk Tomini (selatan).",
        citationIds: ["gor-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "gor-geo-02",
        content: "Sebagian besar (lebih dari 70%) wilayahnya adalah area perbukitan dan pegunungan berhutan sekunder yang memanjang searah garis khatulistiwa. Di jantung provinsi ini terhampar dataran rendah subur ('Lumbung Pangan') yang mengelilingi Danau Limboto, danau purba dangkal yang menjadi penampung utama air dari puluhan sungai yang mengalir deras dari bukit-bukit kapur di sekitarnya.",
        citationIds: ["gor-ref-limboto"],
      }
    ],
    referenceIds: ["gor-ref-bps", "gor-ref-limboto"],
  },

  history: {
    introduction: [
      {
        id: "gor-his-01",
        content: "Gorontalo dikenal dengan patriotisme pra-kemerdekaan yang membanggakan: merdeka 3 tahun sebelum Soekarno memproklamasikan Indonesia.",
        citationIds: ["gor-ref-naniwartabone"],
      }
    ],
    timeline: [
      {
        id: "gor-era-01",
        period: "Abad ke-14 – 16",
        title: "Persekutuan Kerajaan Gorontalo",
        description: "Wilayah ini dulunya dipimpin oleh konfederasi lima kerajaan besar kekerabatan (U Duluwo Limo Lo Pohalaa). Kerajaan Gorontalo dan Suwawa adalah yang paling dominan dalam membendung hegemoni Kesultanan Ternate dan kolonialisme asing.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-era-02",
        period: "1525",
        title: "Masuknya Islam",
        description: "Agama Islam masuk melalui perantaraan para pedagang dan pendakwah dari Ternate/Bone. Para raja Gorontalo sepakat memeluk Islam secara serentak, yang kemudian diikat dalam sumpah adat persendian kitabullah.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-era-03",
        period: "23 Januari 1942",
        title: "Hari Patriotik (Proklamasi Gorontalo)",
        description: "Pahlawan Nasional Nani Wartabone mengobarkan semangat pemuda setempat untuk melucuti senjata polisi Belanda dan menaikkan bendera Merah Putih sembari menyanyikan Indonesia Raya, menyatakan Gorontalo merdeka dan menjadi bagian dari Indonesia yang akan dibentuk kelak.",
        citationIds: ["gor-ref-naniwartabone"],
      },
      {
        id: "gor-era-04",
        period: "16 Februari 2001",
        title: "Pembentukan Provinsi Gorontalo",
        description: "Secara de facto, aspirasi pemisahan dari Sulawesi Utara ('Pemekaran') disahkan pada tahun 2000 (UU No 38/2000), namun pemerintahan provinsinya baru aktif secara resmi dan dilantik pada Februari 2001.",
        citationIds: ["gor-ref-bps"],
      }
    ],
    referenceIds: ["gor-ref-naniwartabone", "gor-ref-bps", "gor-ref-wbtb"],
  },

  society: {
    introduction: [
      {
        id: "gor-soc-01",
        content: "Masyarakat Gorontalo memegang erat nafas keislaman dalam setiap hembus adat budayanya ('Serambi Madinah' Sulawesi).",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "gor-soc-02",
        content: "Lebih dari 97% penduduk Gorontalo adalah Suku Gorontalo (Hulondalo) yang beragama Islam, disusul dengan minoritas etnis tetangga (Suku Suwawa, Atinggola, dan perantau Bugis). Sistem adat lama warisan konfederasi kerajaan masih hidup dalam pranata 'Baate' (Panglima Adat) dan 'Qadhi' (Hakim Agama) yang menjadi penasehat spiritual pada masa pernikahan atau pengambilan keputusan krusial gubernur/wali kota.",
        citationIds: ["gor-ref-bps", "gor-ref-wbtb"],
      }
    ],
    referenceIds: ["gor-ref-bps", "gor-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "gor-cul-01",
        content: "Seni kriya kain dan ritme ketukan bambu adalah representasi keluwesan pergaulan suku Gorontalo.",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "gor-cul-item-01",
        category: "Kriya Tekstil/Sulam",
        title: "Karawo",
        description: "Kain tenun sulam tradisional asli Gorontalo. Proses pembuatannya sangat lambat dan memakan kesabaran luar biasa karena pengrajin (mayoritas wanita) harus mencabut-cabut benang halus dari kain, mengikatnya, dan menyulam motif bunga atau geometris ke dalam ruang kosong rajutan benang tersebut.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-cul-item-02",
        category: "Tarian Pergaulan/Pernikahan",
        title: "Tari Saronde",
        description: "Tari pergaulan yang awalnya ditarikan khusus oleh pihak mempelai pria yang berkunjung malam hari (malam momeati) ke rumah calon istrinya untuk mencuri pandang sang perawan pujaan. Ditarikan sangat lincah menggunakan selendang besar.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-cul-item-03",
        category: "Alat Musik",
        title: "Polopalo",
        description: "Alat musik yang terbuat dari rongga bambu kecil (idiophone) yang dipukul-pukulkan pada lutut bagian dalam penari, memunculkan nada ritmis yang khas (sering digunakan mengiringi Tari Saronde).",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-cul-item-04",
        category: "Siklus Kehidupan",
        title: "Molontalo",
        description: "Upacara adat syukuran (nujuh bulan/mitoni) bagi perempuan Gorontalo yang mengandung anak pertamanya. Sang calon ibu dimandikan air kembang setaman yang telah dibacakan tahlil doa.",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    referenceIds: ["gor-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "gor-lang-01",
        content: "Bahasa Gorontalo memiliki tingkat kelancaran fonologi (vokal) yang menuntut setiap ujung kata diakhiri dengan huruf hidup (A, I, U, E, O).",
        citationIds: ["gor-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "gor-voc-01", word: "Wololo Habari?", meaning: "Apa kabar?", citationIds: ["gor-ref-wbtb"] },
      { id: "gor-voc-02", word: "Binte", meaning: "Jagung (Komoditas emas Gorontalo).", citationIds: ["gor-ref-bps"] },
      { id: "gor-voc-03", word: "Wau / Yio", meaning: "Saya / Kamu (Gorontalo).", citationIds: ["gor-ref-bps"] },
      { id: "gor-voc-04", word: "Oto", meaning: "Mobil (Banyak menggunakan serapan/dialek Melayu Manado di pasaran).", citationIds: ["gor-ref-bps"] },
    ],
    referenceIds: ["gor-ref-bps", "gor-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "gor-culi-01",
        content: "Identitas kuliner utama Gorontalo disandarkan mutlak pada olahan berbahan dasar jagung dan racikan santan daging yang dibakar.",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "gor-culi-item-01",
        title: "Binte Biluhuta (Milu Siram)",
        description: "Sup jagung tradisional khas pelaut Teluk Tomini. Terbuat dari pipilan jagung manis rebus (Binte) yang disiram dengan kuah kaldu ikan cakalang/tenggiri atau udang cincang suwir, kelapa parut, perasan jeruk suanggi, dan daun bawang.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-culi-item-02",
        title: "Ilabulo",
        description: "Semacam pepes unik yang terbuat dari campuran tepung sagu/tapioka basah, ati ampela atau lemak sapi, serta telur puyuh, yang dibalut daun pisang. Sering diolah dengan cara dibakar langsung di atas arang sehingga beraroma 'smokey' gila.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-culi-item-03",
        title: "Tili Aya",
        description: "Jajanan takjil puasa/kue sakral acara tahlilan. Terbuat dari campuran gula aren kental, telur itik organik, dan santan kental yang dikukus di dalam loyang piring, lalu dinikmati menggunakan sendok secara sangat manis legit.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-culi-item-04",
        title: "Ayam Iloni",
        description: "Ayam bakar (kampung/pejantan) khas Gorontalo yang sebelum dibakar, dagingnya dimasak terendam (ungkep) lebih dulu menggunakan kuah santan sangat kental bercampur bawang putih, kunyit, kemiri, dan jahe hingga mengering.",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    referenceIds: ["gor-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "gor-bio-01",
        content: "Lautan Gorontalo merupakan jalur lintas ikan tropis, sedangkan hutannya melindungi fosil burung berumur jutaan tahun.",
        citationIds: ["gor-ref-hiupaus"],
      }
    ],
    species: [
      {
        id: "gor-bio-item-01",
        category: "Fauna Endemik & Megafauna (Maskot Bahari)",
        title: "Hiu Paus (Rhincodon typus)",
        description: "Ikan terbesar di dunia yang bergerak sangat lamban dan hanya memakan plankton/udang halus. Di Teluk Tomini, rombongan hiu paus (disebut lokal 'Munggi') sering mendekat hingga kurang dari 10 meter ke bibir pantai karena kedalaman palung drop-off yang curam.",
        citationIds: ["gor-ref-hiupaus"],
      },
      {
        id: "gor-bio-item-02",
        category: "Fauna Darat (Burung)",
        title: "Maleo (Macrocephalon maleo)",
        description: "Burung purba tak bisa terbang bertubuh kehitaman dengan tonjolan (helm) di kepalanya. Bertelur menimbun di pasir geothermal/vulkanik bawah tanah yang dipanaskan bumi liar Bogani Nani Wartabone.",
        citationIds: ["gor-ref-bps"],
      },
      {
        id: "gor-bio-item-03",
        category: "Flora Hutan Tropis",
        title: "Eboni (Diospyros celebica)",
        description: "Kayu hitam Sulawesi yang sangat mahal (Ironwood). Warnanya hitam kemerahan gelap, tahan rayap, sangat diburu untuk ukiran patung, membuat populasinya kini kritis di Taman Nasional.",
        citationIds: ["gor-ref-bps"],
      }
    ],
    referenceIds: ["gor-ref-hiupaus", "gor-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "gor-dest-01",
        content: "Daya tarik Gorontalo mengandalkan kontak satwa laut terestrial ekstrem dan wisata menginap laut dangkal (shallow water resort).",
        citationIds: ["gor-ref-hiupaus"],
      }
    ],
    items: [
      {
        id: "gor-dest-item-01",
        category: "Ekowisata Mamalia Raksasa",
        title: "Pantai Botubarani (Whale Shark)",
        description: "Hanya berjarak belasan kilometer dari pusat Kota Gorontalo. Turis bisa menyewa perahu kayu kecil (jukung) mendayung 15 meter dari pantai dan langsung berenang bebas (snorkeling) bersentuhan lembut dengan 3-5 ekor Hiu Paus liar seukuran bus mini.",
        citationIds: ["gor-ref-hiupaus"],
      },
      {
        id: "gor-dest-item-02",
        category: "Resor Mewah Pesisir",
        title: "Pulo Cinta (Boalemo)",
        description: "Gugusan gundukan pasir putih karang dangkal (atol) melingkar yang jika dilihat dari udara secara alami berbentuk Hati ('Cinta'). Tempat ini dibangun jembatan-jembatan kayu melingkar berisi resort apung (water villa) ala Maldives.",
        citationIds: ["gor-ref-bps"],
      },
      {
        id: "gor-dest-item-03",
        category: "Cagar Budaya Sejarah",
        title: "Benteng Otanaha",
        description: "Benteng kecil pertahanan raja-raja Gorontalo di masa abad ke-15 yang dibangun dari batu kapur, direkatkan dengan putih telur burung maleo/getah, berdiri kokoh di atas bukit yang menatap langsung kejayaan Danau Limboto.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-dest-item-04",
        category: "Taman Konservasi Darat",
        title: "Taman Nasional Bogani Nani Wartabone",
        description: "Membentang membelah Gorontalo hingga batas Bolaang Mongondow (Sulut). Taman nasional seluas lebih dari 280.000 hektar ini adalah satu-satunya pelindung koridor satwa Babi Rusa, Anoa, dan Burung Maleo.",
        citationIds: ["gor-ref-bps"],
      }
    ],
    referenceIds: ["gor-ref-hiupaus", "gor-ref-wbtb", "gor-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "gor-story-01",
        content: "Dongeng dan legenda Gorontalo seringkali berkisah pada ikatan cinta tak sampai antara manusia fana dengan bidadari alam.",
        citationIds: ["gor-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "gor-story-item-01",
        title: "Legenda Lahilote",
        description: "Kisah seorang pemuda sakti Lahilote yang mencuri selendang satu dari tujuh bidadari yang mandi di sungai (seperti cerita Jaka Tarub). Ia menikahi bidadari malang tersebut, namun kebohongannya terbongkar. Sang istri terbang kembali ke kahyangan. Dalam kekalutannya, tubuh raksasa Lahilote jatuh ke bumi secara mengenaskan; jejak telapak kakinya tercetak membatu di pesisir Pantai Pohe.",
        citationIds: ["gor-ref-wbtb"],
      },
      {
        id: "gor-story-item-02",
        title: "Kisah Patriot Nani Wartabone",
        description: "Bukan legenda fiktif, namun heroisme nyata tentang petani buta huruf huruf Latin yang membenci kolonial, masuk penjara, dan menolak membungkuk kepada serdadu. Keteguhan hatinya dalam menyelamatkan tanahnya menjadikan namanya diabadikan pada hutan nasional terbesar.",
        citationIds: ["gor-ref-naniwartabone"],
      }
    ],
    referenceIds: ["gor-ref-wbtb", "gor-ref-naniwartabone"],
  },

  contemporary: {
    introduction: [
      {
        id: "gor-cont-01",
        content: "Wajah Gorontalo abad 21 berhadapan dengan bahaya matinya danau purba raksasa di tengah obsesi industrialisasi jagung.",
        citationIds: ["gor-ref-limboto"],
      }
    ],
    economy: [
      {
        id: "gor-cont-02",
        content: "Gorontalo dicanangkan sebagai 'Lumbung Pangan Jagung Nasional'. Perkebunan jagung kuning (untuk bahan pakan ternak) mendominasi separuh lebih lahan kritis provinsi ini. Namun, deforestasi besar di hulu demi jagung ini memicu erosi sungai yang mempercepat pendangkalan Danau Limboto secara kritis (dari kedalaman puluhan meter, kini sebagian besar titik kedalamannya tinggal 1,5 hingga 2 meter).",
        citationIds: ["gor-ref-limboto", "gor-ref-bps"],
      }
    ],
    referenceIds: ["gor-ref-limboto", "gor-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "gor-travel-01",
        content: "Menyusuri daratan Gorontalo akan menyajikan panorama masjid jami yang berderet di sepanjang jalan datar (Hulondalo).",
        citationIds: ["gor-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "gor-travel-02",
        content: "Sangat disarankan berpakaian sopan dan menutup bahu/lutut karena kuatnya adab Islami (Gorontalo dijuluki Serambi Madinah). Saat berinteraksi dengan hiu paus di Pantai Botubarani, patuhi instruksi nelayan dengan tertib: jangan menyentuh, jangan menendang, dan jangan membuat suara bising sirine. Nikmati hidangan Binte Biluhuta dengan tangan kosong sambil duduk lesehan, itu adalah cara masyarakat Gorontalo menyambut Anda layaknya keluarga.",
        citationIds: ["gor-ref-hiupaus"],
      }
    ],
    referenceIds: ["gor-ref-bps", "gor-ref-hiupaus"],
  },

  lastReviewedAt: "2026-07-13T00:34:00Z",
  contentStatus: "draft",
  referenceIds: [
    "gor-ref-bps",
    "gor-ref-wbtb",
    "gor-ref-naniwartabone",
    "gor-ref-hiupaus",
    "gor-ref-limboto"
  ]
};
