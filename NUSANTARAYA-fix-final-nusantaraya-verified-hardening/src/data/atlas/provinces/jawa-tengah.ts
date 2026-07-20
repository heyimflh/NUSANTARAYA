import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const jawaTengahReferences: ScientificReference[] = [
  {
    id: "jgt-ref-bps",
    title: "Provinsi Jawa Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Jawa Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Jawa Tengah",
    url: "https://jateng.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-tengah"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "jgt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Jawa Tengah",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jawa-tengah"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "jgt-ref-unesco-borobudur",
    title: "Borobudur Temple Compounds",
    authors: ["UNESCO World Heritage Centre"],
    year: 1991,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/592",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jawa-tengah"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "jgt-ref-sejarah",
    title: "Sejarah Nasional Indonesia: Zaman Kuno",
    authors: ["Poesponegoro, Marwati Djoened", "Notosusanto, Nugroho"],
    year: 2008,
    publisher: "Balai Pustaka",
    url: "https://id.wikipedia.org/wiki/Sejarah_Jawa_Tengah",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["jawa-tengah"],
    topicIds: ["history"],
  },
  {
    id: "jgt-ref-batik",
    title: "Indonesian Batik",
    authors: ["UNESCO Intangible Cultural Heritage"],
    year: 2009,
    publisher: "UNESCO",
    url: "https://ich.unesco.org/en/RL/indonesian-batik-00170",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jawa-tengah"],
    topicIds: ["culture"],
  }
];

export const jawaTengahAtlas: ProvinceAtlas = {
  provinceId: "jawa-tengah",
  slug: "jawa-tengah",
  title: "Jawa Tengah",
  tagline: "Jantung Kebudayaan dan Mahakarya Tanah Jawa",
  summary: [
    {
      id: "jgt-sum-01",
      content: "Jawa Tengah adalah pusat poros kebudayaan dan peradaban Pulau Jawa, merangkum sejarah wangsa-wangsa besar Hindu-Buddha yang mendirikan Candi Borobudur, hingga Kesultanan Demak sebagai kerajaan Islam pertama di Jawa. Diberkahi dengan bentang alam berupa jajaran gunung berapi yang subur, kesenian Adiluhung (Wayang Kulit dan Batik), serta keramahtamahan warganya, Jawa Tengah memegang kunci identitas Jawa secara mendalam.",
      citationIds: ["jgt-ref-bps", "jgt-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "jgt-qf-01", label: "Ibu Kota", value: "Semarang", citationIds: ["jgt-ref-bps"] },
    { id: "jgt-qf-02", label: "Luas Wilayah", value: "32.800,69 km²", citationIds: ["jgt-ref-bps"], dataYear: 2024 },
    { id: "jgt-qf-03", label: "Populasi", value: "37.545.800 jiwa", citationIds: ["jgt-ref-bps"], dataYear: 2023 },
    { id: "jgt-qf-04", label: "Situs UNESCO", value: "Borobudur, Prambanan, Sangiran", citationIds: ["jgt-ref-unesco-borobudur"] },
    { id: "jgt-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["jgt-ref-bps"] },
    { id: "jgt-qf-06", label: "Gubernur", value: "Nana Sudjana (Pj.)", citationIds: ["jgt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "jgt-geo-01",
        content: "Berada tepat di bagian tengah Pulau Jawa, geografi Jawa Tengah didominasi oleh dataran rendah di wilayah utara (Pantura) dan pegunungan tinggi di bagian tengah yang menjalar ke selatan.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "jgt-geo-02",
        content: "Gunung-gunung berapi spektakuler seperti Gunung Merapi (salah satu gunung teraktif di dunia), Sindoro, Sumbing, dan Slamet membelah wilayah provinsi ini. Di kawasan Dieng, terdapat dataran tinggi vulkanik purba yang dingin dengan kawah aktif dan danau belerang. Sementara pesisir utara dibentengi oleh pelabuhan bersejarah dan pesisir selatan berhadapan dengan ombak besar Samudra Hindia.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    referenceIds: ["jgt-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "jgt-his-01",
        content: "Wilayah Jawa Tengah merupakan pusat pemerintahan berbagai kemaharajaan klasik di Nusantara, meninggalkan mahakarya arsitektur batu purba yang monumental.",
        citationIds: ["jgt-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "jgt-era-01",
        period: "Abad ke-8 – 10 M",
        title: "Mataram Kuno & Pembangunan Candi",
        description: "Wangsa Sanjaya (Hindu) dan Wangsa Syailendra (Buddha) membangun peradaban besar di Kedu dan Prambanan. Pada masa ini, monumen Buddha terbesar di dunia, Candi Borobudur, dan kompleks Candi Hindu Prambanan dibangun.",
        citationIds: ["jgt-ref-sejarah", "jgt-ref-unesco-borobudur"],
      },
      {
        id: "jgt-era-02",
        period: "Abad ke-15 – 16 M",
        title: "Kesultanan Demak & Wali Songo",
        description: "Demak Bintoro berdiri sebagai kerajaan Islam pertama di Jawa. Para Wali Songo menggunakan wilayah pantai utara (Demak, Kudus, Muria) sebagai pusat syiar agama Islam melalui pendekatan kultural seperti wayang dan gamelan.",
        citationIds: ["jgt-ref-sejarah"],
      },
      {
        id: "jgt-era-03",
        period: "1755",
        title: "Perjanjian Giyanti",
        description: "VOC (Belanda) memecah belah Kesultanan Mataram Islam menjadi dua: Kasunanan Surakarta (Jawa Tengah) dan Kasultanan Yogyakarta (DIY) demi melemahkan kekuatan pribumi Jawa.",
        citationIds: ["jgt-ref-sejarah"],
      },
      {
        id: "jgt-era-04",
        period: "15 Agustus 1950",
        title: "Pembentukan Provinsi",
        description: "Jawa Tengah resmi dibentuk sebagai provinsi di Republik Indonesia dengan ibu kota Semarang.",
        citationIds: ["jgt-ref-sejarah"],
      }
    ],
    referenceIds: ["jgt-ref-sejarah", "jgt-ref-unesco-borobudur"],
  },

  society: {
    introduction: [
      {
        id: "jgt-soc-01",
        content: "Masyarakat Suku Jawa dikenal karena filosofi hidupnya yang menjunjung tinggi keharmonisan (rukun) dan perilaku halus (tepo seliro atau tenggang rasa).",
        citationIds: ["jgt-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "jgt-soc-02",
        content: "Kultur Surakarta (Solo) sangat berpengaruh dalam melestarikan budaya 'Kejawen', yakni pandangan hidup mistis yang menghormati leluhur dan menjaga keselarasan makrokosmos dan mikrokosmos, yang tercermin dalam tradisi Keraton Kasunanan Surakarta.",
        citationIds: ["jgt-ref-sejarah"],
      }
    ],
    referenceIds: ["jgt-ref-sejarah"],
  },

  culture: {
    introduction: [
      {
        id: "jgt-cul-01",
        content: "Kebudayaan Jawa Tengah adalah akar seni klasik (Adiluhung) Indonesia yang penyebarannya mendunia, mencakup seni kriya, pertunjukan, hingga musik ansambel.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jgt-cul-item-01",
        category: "Kriya Tekstil",
        title: "Batik (Pekalongan, Solo, Lasem)",
        description: "Seni menggambar di atas kain menggunakan lilin (malam) dan canting. Solo terkenal dengan warna sogan (cokelat bumi) bermotif keraton, sedangkan Pekalongan dan Lasem sangat ikonik dengan Batik Pesisir bercorak flora fauna dengan warna-warni cerah hasil akulturasi Tionghoa-Eropa.",
        citationIds: ["jgt-ref-batik"],
      },
      {
        id: "jgt-cul-item-02",
        category: "Seni Pertunjukan",
        title: "Wayang Kulit",
        description: "Pertunjukan bayangan lakon pewayangan dari kulit kerbau semalam suntuk yang dimainkan oleh Dalang. Wayang kulit merupakan karya agung Warisan Budaya Takbenda Dunia (UNESCO).",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-cul-item-03",
        category: "Kriya Senjata",
        title: "Keris",
        description: "Senjata tikam asimetris berpamor (motif pada bilah) yang sarat dengan daya magis dan melambangkan status sosial serta spiritualitas pemiliknya.",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-cul-item-04",
        category: "Musik Tradisional",
        title: "Gamelan Jawa",
        description: "Ansambel musik tradisional yang mengutamakan instrumen perkusi logam (seperti saron, bonang, gong, dan kempul) bersuara mengalun lembut (pelog dan slendro), mengiringi pertunjukan tari dan wayang.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    referenceIds: ["jgt-ref-wbtb", "jgt-ref-batik"],
  },

  language: {
    introduction: [
      {
        id: "jgt-lang-01",
        content: "Bahasa Jawa dituturkan dengan sistem tingkatan bahasa yang sangat kompleks (Undak Usuk Basa) untuk mencerminkan penghormatan status sosial.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "jgt-voc-01", word: "Aku / Kula / Dalem", meaning: "Saya (Ngoko / Krama / Krama Inggil/Sangat Halus)", citationIds: ["jgt-ref-bps"] },
      { id: "jgt-voc-02", word: "Kowe / Sampeyan / Panjenengan", meaning: "Kamu (Ngoko / Krama / Krama Inggil)", citationIds: ["jgt-ref-bps"] },
      { id: "jgt-voc-03", word: "Monggo", meaning: "Silakan (Kata sapaan universal untuk mempersilakan orang lain)", citationIds: ["jgt-ref-bps"] },
      { id: "jgt-voc-04", word: "Inyong (Ngapak)", meaning: "Saya (Digunakan dalam Dialek Banyumasan/Tegal yang sangat lugas, tanpa tingkatan kasta bahasa)", citationIds: ["jgt-ref-bps"] },
    ],
    referenceIds: ["jgt-ref-bps"],
  },

  culinary: {
    introduction: [
      {
        id: "jgt-culi-01",
        content: "Masakan pedalaman Jawa Tengah (Solo) terkenal dengan cita rasa manis dan bumbu rempah ringan, sementara daerah pesisir (Semarang, Pati) lebih berani dengan rasa gurih dan asimilasi kuliner Tionghoa.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jgt-culi-item-01",
        title: "Lumpia Semarang",
        description: "Makanan perpaduan budaya Jawa dan Tionghoa. Kulit lumpia renyah yang membungkus isian rebung (tunas bambu muda), telur, dan daging ayam/udang, disajikan dengan saus kental manis dan lokio.",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-culi-item-02",
        title: "Nasi Liwet Solo",
        description: "Nasi gurih yang dimasak dengan santan kental dan kaldu ayam, disajikan di atas pincuk daun pisang dengan lauk ayam suwir, telur pindang, sayur labu siam pedas, dan kumut (santan kental pelengkap).",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-culi-item-03",
        title: "Tempe Mendoan (Banyumas/Purwokerto)",
        description: "Tempe kedelai tipis yang dicelupkan ke adonan tepung berbumbu ketumbar dan irisan daun bawang, lalu digoreng setengah matang ('mendo' berarti lembek/setengah matang). Cocok disantap dengan kecap pedas.",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-culi-item-04",
        title: "Garang Asem",
        description: "Olahan ayam yang dibungkus daun pisang (seperti pepes) dan dikukus bersama kuah santan bening, belimbing wuluh (yang memberikan rasa asam segar), serta cabai rawit utuh mempedaskan.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    referenceIds: ["jgt-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "jgt-bio-01",
        content: "Topografi pegunungan dan pesisir utara menciptakan habitat satwa yang beragam, dari pegunungan Dieng hingga konservasi Pulau Karimunjawa.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    species: [
      {
        id: "jgt-bio-item-01",
        category: "Flora Pegunungan",
        title: "Bunga Kantil (Magnolia × alba)",
        description: "Bunga maskot Provinsi Jawa Tengah yang sangat beraroma wangi. Sering digunakan dalam berbagai ritual adat keraton, sesajen, pusaka keris, hingga riasan sanggul pengantin Jawa.",
        citationIds: ["jgt-ref-bps"],
      },
      {
        id: "jgt-bio-item-02",
        category: "Fauna Endemik (Maskot)",
        title: "Burung Kepodang (Oriolus chinensis)",
        description: "Burung kicau berbulu kuning keemasan terang dengan corak hitam di sekitar mata (seperti topeng). Burung ini melambangkan kekompakan dan keselarasan masyarakat Jawa Tengah.",
        citationIds: ["jgt-ref-bps"],
      },
      {
        id: "jgt-bio-item-03",
        category: "Kawasan Konservasi",
        title: "Taman Nasional Karimunjawa",
        description: "Kepulauan di perairan utara Jepara yang menjadi kawasan perlindungan terumbu karang, padang lamun, hutan bakau, serta penyu hijau dan sisik.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    referenceIds: ["jgt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "jgt-dest-01",
        content: "Destinasi Jawa Tengah adalah ziarah ke pusat peradaban purba Jawa, wisata keraton/budaya, relaksasi pegunungan, dan jelajah sejarah kota tua kolonial.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    items: [
      {
        id: "jgt-dest-item-01",
        category: "Sejarah Dunia (UNESCO)",
        title: "Candi Borobudur (Magelang)",
        description: "Candi Buddha terbesar di dunia peninggalan Wangsa Syailendra (abad ke-8). Strukturnya membentuk mandala raksasa berundak dengan relief ukiran batu (menceritakan kehidupan Sidharta Gautama) terpanjang di dunia.",
        citationIds: ["jgt-ref-unesco-borobudur"],
      },
      {
        id: "jgt-dest-item-02",
        category: "Alam Pegunungan",
        title: "Dataran Tinggi Dieng (Wonosobo & Banjarnegara)",
        description: "Kawasan vulkanik di ketinggian 2.000 mdpl yang sering disebut 'Negeri di Atas Awan'. Terkenal dengan kompleks Candi Arjuna, Kawah Sikidang, Telaga Warna, dan fenomena anak berambut gimbal (gembel).",
        citationIds: ["jgt-ref-bps"],
      },
      {
        id: "jgt-dest-item-03",
        category: "Sejarah Kolonial",
        title: "Kota Lama & Lawang Sewu (Semarang)",
        description: "Kawasan Oudstad (Kota Lama) Semarang menyimpan arsitektur Eropa abad 18 (Gereja Blenduk). Sementara Lawang Sewu (Gedung Seribu Pintu) adalah bekas kantor pusat Kereta Api Hindia Belanda yang ikonik dan diselimuti aura mistis masa penjajahan Jepang.",
        citationIds: ["jgt-ref-sejarah"],
      },
      {
        id: "jgt-dest-item-04",
        category: "Budaya Keraton",
        title: "Keraton Kasunanan Surakarta (Solo)",
        description: "Istana resmi penerus dinasti Mataram Islam. Wisatawan dapat menjelajahi museum benda pusaka, melihat kereta kencana kuno, dan merasakan kehidupan abdi dalem yang bersahaja.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    referenceIds: ["jgt-ref-bps", "jgt-ref-unesco-borobudur", "jgt-ref-sejarah", "jgt-ref-wbtb"],
  },

  stories: {
    introduction: [
      {
        id: "jgt-story-01",
        content: "Mitos Jawa Tengah menautkan alam (gunung, rawa) dengan ajaran moral atau sanksi dari perilaku buruk (karma).",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "jgt-story-item-01",
        title: "Asal Mula Rawa Pening (Baru Klinting)",
        description: "Legenda anak naga (Baru Klinting) yang diusir dan ditolak warga desa karena berwajah buruk. Warga tak satu pun sanggup mencabut lidi yang ia tancapkan ke tanah. Saat ia mencabutnya sendiri, memancarlah air yang menenggelamkan seluruh desa yang congkak tersebut (menjadi Rawa Pening), kecuali satu nenek tua yang sempat memberinya makan.",
        citationIds: ["jgt-ref-wbtb"],
      },
      {
        id: "jgt-story-item-02",
        title: "Jaka Tarub & Bidadari Nawang Wulan",
        description: "Dongeng legendaris seorang pemuda (Jaka Tarub) yang mencuri selendang gaib milik salah satu dari 7 bidadari yang sedang mandi di telaga, memaksanya menikah dengan pemuda tersebut dan menjadi leluhur raja-raja Mataram.",
        citationIds: ["jgt-ref-wbtb"],
      }
    ],
    referenceIds: ["jgt-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "jgt-cont-01",
        content: "Jawa Tengah modern berbenah diri menjadi hub industri dan pertanian berdaya saing tinggi, dengan dukungan infrastruktur jalan tol Trans-Jawa yang membelah seluruh wilayah Pantura hingga selatan.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "jgt-cont-02",
        content: "Kawasan Ekonomi Khusus Kendal (KIK) bekerja sama dengan investor Singapura membuka puluhan ribu lapangan kerja baru. Selain itu, provinsi ini terus mempertahankan perannya sebagai lumbung padi nasional dan sentra Usaha Kecil Menengah (UKM) furnitur kayu dari Jepara.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    referenceIds: ["jgt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "jgt-travel-01",
        content: "Berwisata ke Jawa Tengah sangatlah mudah, aman, dan berbiaya sangat terjangkau (budget-friendly) dengan akses kereta api jarak jauh yang terhubung rapi dari Jakarta maupun Surabaya.",
        citationIds: ["jgt-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "jgt-travel-02",
        content: "Candi Borobudur saat ini (demi pelestarian candi) tidak mengizinkan pengunjung sembarangan naik ke badan (stupa) candi tanpa menggunakan alas kaki khusus (Upanat) dan harus dipandu guide. Menurunkan intonasi suara saat berbicara di Keraton atau tempat ibadah tua sangat diapresiasi. Saat berbelanja batik di pasar tradisional (seperti Pasar Klewer, Solo), bersikap ramah (tersenyum) saat menawar harga.",
        citationIds: ["jgt-ref-unesco-borobudur"],
      }
    ],
    referenceIds: ["jgt-ref-bps", "jgt-ref-unesco-borobudur"],
  },

  lastReviewedAt: "2026-07-12T16:55:00Z",
  contentStatus: "draft",
  referenceIds: [
    "jgt-ref-bps",
    "jgt-ref-wbtb",
    "jgt-ref-unesco-borobudur",
    "jgt-ref-sejarah",
    "jgt-ref-batik"
  ]
};
