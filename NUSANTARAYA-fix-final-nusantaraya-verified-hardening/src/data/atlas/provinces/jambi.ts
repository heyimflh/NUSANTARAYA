import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const jambiReferences: ScientificReference[] = [
  {
    id: "jmb-ref-bps",
    title: "Provinsi Jambi Dalam Angka 2024",
    authors: ["BPS Provinsi Jambi"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Jambi",
    url: "https://jambi.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jambi"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "jmb-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Jambi",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["jambi"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "jmb-ref-muaro-jambi",
    title: "Muarajambi Temple Compound",
    authors: ["UNESCO World Heritage Centre"],
    year: 2009,
    publisher: "UNESCO (Tentative List)",
    url: "https://whc.unesco.org/en/tentativelists/5465/",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jambi"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "jmb-ref-orangrimba",
    title: "Orang Rimba: Menantang Zaman, Mempertahankan Hutan",
    authors: ["Sager, Steven"],
    year: 2008,
    publisher: "KKI Warsi",
    url: "https://warsi.or.id/",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["jambi"],
    topicIds: ["society"],
  },
  {
    id: "jmb-ref-kerinci",
    title: "Kerinci Seblat National Park",
    authors: ["UNESCO World Heritage Centre"],
    year: 2004,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/1167",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["jambi"],
    topicIds: ["biodiversity", "destinations", "geography"],
  }
];

export const jambiAtlas: ProvinceAtlas = {
  provinceId: "jambi",
  slug: "jambi",
  title: "Jambi",
  tagline: "Sepucuk Jambi Sembilan Lurah",
  summary: [
    {
      id: "jmb-sum-01",
      content: "Jambi adalah provinsi yang kehidupannya dirajut oleh aliran Sungai Batanghari (sungai terpanjang di Sumatera). Dahulu, kawasan hulu sungai ini merupakan pusat Kerajaan Melayu Kuno dan studi agama Buddha terbesar di Asia Tenggara (Candi Muaro Jambi). Secara geografi, Jambi memiliki dua wajah yang ekstrem: hutan dataran rendah pesisir timur yang dijaga oleh Suku Anak Dalam, dan pegunungan megah 'Atap Sumatera' (Gunung Kerinci) di batas baratnya.",
      citationIds: ["jmb-ref-bps", "jmb-ref-muaro-jambi"],
    }
  ],
  quickFacts: [
    { id: "jmb-qf-01", label: "Ibu Kota", value: "Kota Jambi", citationIds: ["jmb-ref-bps"] },
    { id: "jmb-qf-02", label: "Luas Wilayah", value: "50.160,05 km²", citationIds: ["jmb-ref-bps"], dataYear: 2024 },
    { id: "jmb-qf-03", label: "Populasi", value: "3.679.169 jiwa", citationIds: ["jmb-ref-bps"], dataYear: 2023 },
    { id: "jmb-qf-04", label: "Puncak Tertinggi", value: "Gunung Kerinci (3.805 mdpl)", citationIds: ["jmb-ref-kerinci"] },
    { id: "jmb-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["jmb-ref-bps"] },
    { id: "jmb-qf-06", label: "Gubernur", value: "Al Haris", citationIds: ["jmb-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "jmb-geo-01",
        content: "Geografi Jambi diwarnai oleh urat nadi utama, yaitu Sungai Batanghari sepanjang kurang lebih 800 km yang membelah provinsi ini dari barat (Pegunungan Bukit Barisan) menuju pesisir timur (Selat Berhala).",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "jmb-geo-02",
        content: "Dataran tinggi Kerinci di ujung barat membentengi Jambi dengan gunung berapi aktif tertinggi di Indonesia (di luar Papua), Gunung Kerinci (3.805 mdpl). Di sana juga terdapat danau kaldera tertinggi se-Asia Tenggara, Danau Gunung Tujuh. Di wilayah pedalaman (Tebo dan Merangin), terhampar rimba tropis (Hutan Harapan) dan Geopark Merangin dengan fosil flora purba berumur ratusan juta tahun.",
        citationIds: ["jmb-ref-kerinci"],
      }
    ],
    referenceIds: ["jmb-ref-bps", "jmb-ref-kerinci"],
  },

  history: {
    introduction: [
      {
        id: "jmb-his-01",
        content: "Catatan Tiongkok kuno menyebut wilayah Jambi purba sebagai 'San-fo-tsi' atau Melayu, pusat niaga maritim dan keagamaan yang sezaman (bahkan pernah bersaing) dengan Sriwijaya.",
        citationIds: ["jmb-ref-muaro-jambi"],
      }
    ],
    timeline: [
      {
        id: "jmb-era-01",
        period: "Abad ke-7 – 13 M",
        title: "Pusat Kerajaan Melayu (Dharmasraya)",
        description: "Bantaran Sungai Batanghari menjadi pusat peradaban Buddha (di Muaro Jambi). Para biksu dari India, Tiongkok, dan Tibet pernah menetap di sini untuk mendalami ajaran Tantrayana sebelum melanjutkan perjalanan.",
        citationIds: ["jmb-ref-muaro-jambi"],
      },
      {
        id: "jmb-era-02",
        period: "1615",
        title: "Kesultanan Jambi Islam",
        description: "Berdirinya Kesultanan Jambi dengan corak Melayu Islam yang kuat. Kesultanan ini makmur melalui monopoli lada, dan menjalin hubungan dagang bumbu dengan VOC (sebelum akhirnya VOC melakukan blokade).",
        citationIds: ["jmb-ref-bps"],
      },
      {
        id: "jmb-era-03",
        period: "1904",
        title: "Gugurnya Sultan Thaha Syaifuddin",
        description: "Sultan terakhir Jambi yang menolak tunduk pada kolonial Belanda, memimpin perang gerilya selama puluhan tahun hingga akhirnya gugur dalam pertempuran di desa Betung Bedarah.",
        citationIds: ["jmb-ref-bps"],
      },
      {
        id: "jmb-era-04",
        period: "9 Agustus 1957",
        title: "Berdirinya Provinsi Jambi",
        description: "Melalui tekanan dan tuntutan rakyat, Jambi dipisahkan secara definitif dari Provinsi Sumatera Tengah (yang berpusat di Bukittinggi) menjadi provinsi mandiri.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    referenceIds: ["jmb-ref-muaro-jambi", "jmb-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "jmb-soc-01",
        content: "Masyarakat Jambi sangat lekat dengan identitas Suku Melayu Jambi, diwakili dengan pedoman hukum adat 'Adat bersendi syarak, Syarak bersendi Kitabullah' (sama seperti Minangkabau).",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "jmb-soc-02",
        content: "Suku Kerinci yang menetap di pegunungan barat merupakan etnis agraris tua Sumatera. Yang paling unik adalah keberadaan Suku Anak Dalam (Orang Rimba atau Suku Kubu), komunitas adat nomaden yang sepenuhnya menggantungkan hidup ('melangun' atau berpindah) di dalam hutan belantara Taman Nasional Bukit Duabelas dan Bukit Tigapuluh.",
        citationIds: ["jmb-ref-orangrimba"],
      }
    ],
    referenceIds: ["jmb-ref-wbtb", "jmb-ref-orangrimba"],
  },

  culture: {
    introduction: [
      {
        id: "jmb-cul-01",
        content: "Seni dan tradisi Jambi menggambarkan budaya tepian sungai (kain batik bertema air/hewan) dan kearifan pepatah-petitih.",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jmb-cul-item-01",
        category: "Tari Penyambutan",
        title: "Tari Sekapur Sirih",
        description: "Tarian klasik penyambut tamu agung. Para penari wanita berpakaian adat ('baju kurung tanggung') dan hiasan kepala ('tengkuluk') membawa cerano (wadah sirih) yang akan disajikan kepada tamu.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-cul-item-02",
        category: "Kriya Tekstil",
        title: "Batik Jambi",
        description: "Motif batik Jambi sangat unik dan kuno, tidak menggunakan motif manusia/binatang (pengaruh Islam), melainkan flora dan benda ikonik, seperti motif 'Angso Duo' (Dua Angsa) dan 'Durian Pecah'.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-cul-item-03",
        category: "Sastra Lisan Adat",
        title: "Seloko",
        description: "Seni berbalas pantun (pepatah petitih) Jambi yang dilantunkan secara berirama untuk memberikan nasihat kehidupan, atau mengiringi tahapan upacara pernikahan adat Melayu Jambi.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-cul-item-04",
        category: "Kesenian Tradisional",
        title: "Tari Dana Sarah",
        description: "Tari pergaulan yang awalnya berfungsi sebagai media dakwah penyebaran Islam, diiringi lagu puji-pujian dan irama musik gambus Timur Tengah.",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    referenceIds: ["jmb-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "jmb-lang-01",
        content: "Bahasa Melayu Jambi membulatkan vokal akhir 'a' menjadi 'o' pada banyak kosakata. Di Dataran Tinggi Kerinci, Bahasa Kerinci (salah satu rumpun Austronesia kuno) dituturkan dan sangat sulit dipahami oleh orang luar Jambi.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "jmb-voc-01", word: "Apo / Kemano", meaning: "Apa / Kemana (Akhiran -o sangat umum).", citationIds: ["jmb-ref-bps"] },
      { id: "jmb-voc-02", word: "Sayo / Awak", meaning: "Saya / Kamu (Melayu Jambi).", citationIds: ["jmb-ref-bps"] },
      { id: "jmb-voc-03", word: "Nian", meaning: "Sangat/Sekali. Contoh: 'Elok nian' (Bagus sekali).", citationIds: ["jmb-ref-bps"] },
      { id: "jmb-voc-04", word: "Kayu Ara", meaning: "Meninggal (Bahasa rahasia Suku Anak Dalam untuk menghindari kata mati).", citationIds: ["jmb-ref-orangrimba"] },
    ],
    referenceIds: ["jmb-ref-bps", "jmb-ref-orangrimba"],
  },

  culinary: {
    introduction: [
      {
        id: "jmb-culi-01",
        content: "Banyak masakan khas Jambi menggunakan olahan ikan sungai (gabus/belida/patin) dan bumbu fermentasi rahasia: Tempoyak (durian yang difermentasi/diasamkan).",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jmb-culi-item-01",
        title: "Gulai Tempoyak",
        description: "Ikan sungai segar (seperti patin atau baung) dimasak dalam kuah gulai kental kuning berbahan tempoyak (durian fermentasi). Cita rasanya sangat kompleks: perpaduan asam, manis, gurih, dan pedas.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-culi-item-02",
        title: "Gulai Tepek Ikan",
        description: "Makanan dari daging ikan gabus/tenggiri yang dihaluskan bersama tepung sagu (mirip pempek rebus), kemudian dimasak ('ditepek') ke dalam kuah santan bumbu gulai nanas yang asam segar. Makanan ini hanya ada pada acara-acara adat/kenduri besar.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-culi-item-03",
        title: "Nasi Gemuk",
        description: "Nasi uduk versi Jambi. Nasi dimasak bersama santan, daun pandan, serai, dan daun salam, selalu disajikan dengan telur rebus, teri goreng kacang, kerupuk, dan siraman kuah kari sapi tipis (atau rendang).",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-culi-item-04",
        title: "Kue Padamaran",
        description: "Kue basah tradisional dalam wadah daun pisang persegi panjang. Terbuat dari adonan tepung beras dan santan yang diberi daun suji (hijau), dengan gula merah cair di dasar dan di atas permukaannya.",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    referenceIds: ["jmb-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "jmb-bio-01",
        content: "Hutan hujan pegunungan dan dataran rendah di Jambi merupakan bagian penting dari Situs Warisan Dunia (TRHS) pelestarian mega-fauna Sumatera.",
        citationIds: ["jmb-ref-kerinci"],
      }
    ],
    species: [
      {
        id: "jmb-bio-item-01",
        category: "Fauna Darat (Kucing Besar)",
        title: "Harimau Sumatera (Panthera tigris sondaica)",
        description: "Taman Nasional Kerinci Seblat merupakan benteng populasi Harimau Sumatera liar terbesar yang tersisa di planet ini (diperkirakan sekitar 150 - 200 individu).",
        citationIds: ["jmb-ref-kerinci"],
      },
      {
        id: "jmb-bio-item-02",
        category: "Fauna Endemik (Maskot Jambi)",
        title: "Harimau Sumatera",
        description: "Pemprov Jambi menetapkan Harimau Sumatera (atau 'Datuk' dalam sebutan lokal kehormatan) secara resmi sebagai lambang fauna provinsinya, menyadari pentingnya pelestarian kucing besar ini.",
        citationIds: ["jmb-ref-bps"],
      },
      {
        id: "jmb-bio-item-03",
        category: "Flora Hutan Masif",
        title: "Pohon Bulian (Eusideroxylon zwageri)",
        description: "Kayu besi endemik yang sangat keras dan tahan rayap air. Dulu banyak digunakan sebagai tiang utama rumah-rumah panggung dan istana kayu, namun kini semakin langka akibat penebangan (maskot flora).",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    referenceIds: ["jmb-ref-kerinci", "jmb-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "jmb-dest-01",
        content: "Jambi adalah tujuan impian para pendaki gunung ekstrem di Indonesia, dan surga bagi arkeolog candi (Muaro Jambi).",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    items: [
      {
        id: "jmb-dest-item-01",
        category: "Arkeologi Budaya",
        title: "Kompleks Candi Muaro Jambi",
        description: "Berada 26 km dari Kota Jambi. Inilah kompleks percandian batu bata Buddha terluas di Asia Tenggara (luas 3.981 hektar—delapan kali lebih luas dari Borobudur), tempat ribuan biksu zaman Sriwijaya dulu menuntut ilmu.",
        citationIds: ["jmb-ref-muaro-jambi"],
      },
      {
        id: "jmb-dest-item-02",
        category: "Alam Pendakian (Gunung)",
        title: "Gunung Kerinci (Atap Sumatera)",
        description: "Berada di Kabupaten Kerinci, menjulang setinggi 3.805 mdpl. Menawarkan trek pendakian menembus hutan lumut purba dan kawah aktif raksasa dengan pemandangan langsung ke arah Samudra Hindia jika cuaca cerah.",
        citationIds: ["jmb-ref-kerinci"],
      },
      {
        id: "jmb-dest-item-03",
        category: "Alam (Danau Mistik)",
        title: "Danau Kaco",
        description: "Danau mungil di tengah hutan rimba Kerinci Seblat yang airnya memancarkan warna cyan (biru kaca) menyala pada malam hari (terutama saat bulan purnama), seakan-akan dasar danaunya memiliki lampu.",
        citationIds: ["jmb-ref-kerinci"],
      },
      {
        id: "jmb-dest-item-04",
        category: "Keajaiban Geologi",
        title: "Geopark Merangin",
        description: "Arung jeram ekstrem di Sungai Batang Merangin sambil mengamati fosil kayu (Araucharioxylon) dan daun paku-pakuan yang tercetak di bebatuan cadas, berumur lebih dari 300 juta tahun lalu.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    referenceIds: ["jmb-ref-muaro-jambi", "jmb-ref-kerinci", "jmb-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "jmb-story-01",
        content: "Cerita rakyat Jambi banyak berpusat pada penamaan daerah (simbol hewan), maupun misteri di rimba pedalaman (kriptozoologi).",
        citationIds: ["jmb-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "jmb-story-item-01",
        title: "Legenda Angso Duo",
        description: "Menceritakan Raja Jambi (Orang Kayo Hitam) bersama istrinya (Putri Mayang Mangurai) yang dituntun oleh sepasang Angsa (Angso Duo) menyusuri Sungai Batanghari. Di mana dua angsa itu berhenti (naik ke tebing dan bertelur), di situlah keraton Jambi harus didirikan.",
        citationIds: ["jmb-ref-wbtb"],
      },
      {
        id: "jmb-story-item-02",
        title: "Misteri Uhang Pandak (Orang Pendek)",
        description: "Legenda 'kriptid' suku manusia kera purba berkaki terbalik (bipedal) bertubuh pendek yang diyakini penduduk lokal (dan peneliti barat) bersembunyi jauh di kedalaman Taman Nasional Kerinci Seblat.",
        citationIds: ["jmb-ref-kerinci"],
      }
    ],
    referenceIds: ["jmb-ref-wbtb", "jmb-ref-kerinci"],
  },

  contemporary: {
    introduction: [
      {
        id: "jmb-cont-01",
        content: "Jambi modern mengandalkan hasil buminya. Pemasukan terbesar berasal dari perkebunan komersial ekspor, kehutanan, dan pertambangan.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    economy: [
      {
        id: "jmb-cont-02",
        content: "Daerah pedalaman ditopang perkebunan kelapa sawit dan karet karet (getah Balam), sering melibatkan lahan alih-fungsi masyarakat adat. Pembangunan Jalan Tol Trans-Sumatera koridor Betung-Jambi diharapkan mempercepat denyut nadi distribusi komoditas Jambi ke laut/pelabuhan.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    referenceIds: ["jmb-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "jmb-travel-01",
        content: "Berwisata ke Jambi berarti siap menjelajah (off the beaten path) alam perbukitan menuju surga tersembunyi Kerinci, berjam-jam dari ibu kota provinsi.",
        citationIds: ["jmb-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "jmb-travel-02",
        content: "Saat berada di sekitar hutan, masyarakat Jambi menghindari menyebut 'Harimau', melainkan 'Datuk' sebagai bentuk penghormatan gaib agar tidak diganggu. Jika mengunjungi desa/hutan pemukiman Suku Anak Dalam, bertanyalah dan minta izin kepada pemandu atau kepala sukunya (Tumenggung) sebelum memotret, karena pantang bagi mereka untuk dipotret secara diam-diam (dianggap merampas nyawa bayangan).",
        citationIds: ["jmb-ref-orangrimba"],
      }
    ],
    referenceIds: ["jmb-ref-bps", "jmb-ref-orangrimba"],
  },

  lastReviewedAt: "2026-07-13T00:09:00Z",
  contentStatus: "draft",
  referenceIds: [
    "jmb-ref-bps",
    "jmb-ref-wbtb",
    "jmb-ref-muaro-jambi",
    "jmb-ref-orangrimba",
    "jmb-ref-kerinci"
  ]
};
