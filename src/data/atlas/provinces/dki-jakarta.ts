import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const dkiJakartaReferences: ScientificReference[] = [
  {
    id: "jkt-ref-bps",
    title: "Provinsi DKI Jakarta Dalam Angka 2024",
    authors: ["BPS Provinsi DKI Jakarta"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi DKI Jakarta",
    url: "https://jakarta.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["dki-jakarta"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "jkt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: DKI Jakarta",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["dki-jakarta"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "jkt-ref-sejarah",
    title: "Sejarah Jakarta: Dari Sunda Kelapa ke Batavia",
    authors: ["Heuken, Adolf"],
    year: 2012,
    publisher: "Cipta Loka Caraka",
    url: "https://id.wikipedia.org/wiki/Sejarah_Jakarta",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["dki-jakarta"],
    topicIds: ["history"],
  },
  {
    id: "jkt-ref-betawi",
    title: "Orang Betawi, Bangsa Kita",
    authors: ["Shahab, Yasmine Zaki"],
    year: 2004,
    publisher: "Universitas Indonesia",
    url: "https://id.wikipedia.org/wiki/Suku_Betawi",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["dki-jakarta"],
    topicIds: ["society", "language"],
  }
];

export const dkiJakartaAtlas: ProvinceAtlas = {
  provinceId: "dki-jakarta",
  slug: "dki-jakarta",
  title: "DKI Jakarta",
  tagline: "Metropolitan Dinamis, Jantung Nusantara",
  summary: [
    {
      id: "jkt-sum-01",
      content: "Jakarta adalah pusat episentrum politik, ekonomi, dan budaya Indonesia. Berawal dari bandar niaga kecil bernama Sunda Kelapa, lalu menjadi Batavia di era kolonial, hingga bertransformasi menjadi megapolitan modern berpenduduk jutaan jiwa. Jakarta adalah 'melting pot' tempat bertemunya seluruh suku bangsa Nusantara, membentuk masyarakat plural dengan kebudayaan asli Betawi yang unik dan tangguh.",
      citationIds: ["jkt-ref-bps", "jkt-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "jkt-qf-01", label: "Pusat Pemerintahan", value: "Jakarta Pusat", citationIds: ["jkt-ref-bps"] },
    { id: "jkt-qf-02", label: "Luas Wilayah", value: "661,52 km²", citationIds: ["jkt-ref-bps"], dataYear: 2024 },
    { id: "jkt-qf-03", label: "Populasi", value: "10.679.951 jiwa", citationIds: ["jkt-ref-bps"], dataYear: 2023 },
    { id: "jkt-qf-04", label: "Status Khusus", value: "DKI (Daerah Khusus Ibukota)", citationIds: ["jkt-ref-bps"] },
    { id: "jkt-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["jkt-ref-bps"] },
    { id: "jkt-qf-06", label: "Gubernur", value: "Heru Budi Hartono (Pj.)", citationIds: ["jkt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "jkt-geo-01",
        content: "Secara geografis, Jakarta merupakan dataran rendah yang relatif datar (bahkan beberapa bagian di Jakarta Utara berada di bawah permukaan laut), terletak di muara Sungai Ciliwung dan dialiri belasan sungai lainnya yang bermuara di Teluk Jakarta.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "jkt-geo-02",
        content: "Topografi daratannya penuh dengan hutan beton dan kawasan pemukiman padat. Selain daratan utama di Pulau Jawa, wilayah Jakarta juga mencakup kawasan perairan Kepulauan Seribu di Teluk Jakarta, yang terdiri dari ratusan pulau karang kecil.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    referenceIds: ["jkt-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "jkt-his-01",
        content: "Jakarta memiliki rekam jejak panjang yang tercermin dalam pergantian namanya: Sunda Kelapa, Jayakarta, Batavia, Tokubetsu Shi, Djakarta, hingga DKI Jakarta.",
        citationIds: ["jkt-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "jkt-era-01",
        period: "Abad ke-14 – 16",
        title: "Sunda Kelapa",
        description: "Merupakan bandar utama Kerajaan Hindu Pajajaran yang sibuk melayani pedagang dari Arab, Tiongkok, dan Eropa, khususnya untuk komoditas lada.",
        citationIds: ["jkt-ref-sejarah"],
      },
      {
        id: "jkt-era-02",
        period: "22 Juni 1527",
        title: "Penaklukan Fatahillah (HUT Jakarta)",
        description: "Panglima Fatahillah dari Kesultanan Demak/Cirebon merebut pelabuhan ini dari tangan Portugis dan Pajajaran, lalu mengganti namanya menjadi 'Jayakarta' (Kota Kemenangan). Tanggal ini diperingati sebagai hari jadi Kota Jakarta.",
        citationIds: ["jkt-ref-sejarah"],
      },
      {
        id: "jkt-era-03",
        period: "1619 – 1942",
        title: "Batavia (Era VOC & Hindia Belanda)",
        description: "Jan Pieterszoon Coen menaklukkan Jayakarta dan membangun kota baru bercorak Eropa bernama Batavia. Batavia menjadi markas besar VOC (Perusahaan Hindia Timur Belanda) dan pusat kekuasaan kolonial di Nusantara.",
        citationIds: ["jkt-ref-sejarah"],
      },
      {
        id: "jkt-era-04",
        period: "1945 – Sekarang",
        title: "Ibukota Republik",
        description: "Pasca kemerdekaan, Jakarta dikukuhkan sebagai pusat pemerintahan Republik Indonesia (sempat berpindah sementara ke Yogyakarta dan Bukittinggi saat perang kemerdekaan). Menjadi Daerah Khusus Ibukota (DKI) sejak tahun 1961.",
        citationIds: ["jkt-ref-sejarah"],
      }
    ],
    referenceIds: ["jkt-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "jkt-soc-01",
        content: "Penduduk asli Jakarta adalah Suku Betawi, masyarakat hibrida (campuran) keturunan dari perpaduan berbagai etnis di Nusantara (Sunda, Jawa, Bali, Bugis, Ambon) dan mancanegara (Arab, Tionghoa, Mardijker) yang berinteraksi di Batavia sejak masa kolonial.",
        citationIds: ["jkt-ref-betawi"],
      }
    ],
    socialStructure: [
      {
        id: "jkt-soc-02",
        content: "Saat ini, Jakarta dihuni oleh perantau dari Sabang sampai Merauke. Sikap egaliter, spontan, dan toleran sangat kental di masyarakat Betawi, yang menjunjung tinggi dua nilai utama: ibadah (mengaji) dan bela diri (silat/maen pukulan).",
        citationIds: ["jkt-ref-betawi"],
      }
    ],
    referenceIds: ["jkt-ref-betawi"],
  },

  culture: {
    introduction: [
      {
        id: "jkt-cul-01",
        content: "Seni dan budaya Betawi adalah bukti kejeniusan akulturasi dari berbagai peradaban dunia, tergabung dalam perayaan, musik, dan teater yang sarat akan unsur jenaka.",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jkt-cul-item-01",
        category: "Seni Pertunjukan",
        title: "Ondel-ondel",
        description: "Boneka raksasa setinggi 2,5 meter yang terbuat dari anyaman bambu dengan wajah dicat (merah untuk pria melambangkan keberanian, putih untuk wanita melambangkan kesucian). Awalnya digunakan sebagai penolak bala, kini menjadi ikon hiburan kota.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-cul-item-02",
        category: "Teater Tradisional",
        title: "Lenong",
        description: "Teater komedi tradisional Betawi yang diiringi musik Gambang Kromong. Ciri khas lenong adalah dialog spontan (improvisasi), pantun, logat Betawi yang kental, dan interaksi langsung dengan penonton.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-cul-item-03",
        category: "Musik Tradisional",
        title: "Tanjidor",
        description: "Orkes kesenian Betawi yang sarat pengaruh Eropa (khususnya musik baris militer/brass band), dimainkan menggunakan alat musik tiup logam besar, tambur, dan simbal. Biasa tampil dalam acara pernikahan atau perayaan.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-cul-item-04",
        category: "Adat Pernikahan",
        title: "Palang Pintu",
        description: "Tradisi menyambut rombongan pengantin pria dengan 'berbalas pantun' jenaka dan adu atraksi 'silat' (maen pukulan) antar jawara wakil mempelai. Pihak pria harus bisa mengalahkan jawara wanita untuk diizinkan masuk (secara simbolik).",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    referenceIds: ["jkt-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "jkt-lang-01",
        content: "Bahasa Betawi berakar dari bahasa Melayu Kreol (pasar) yang banyak dipengaruhi kata serapan dari bahasa Arab, Tionghoa (Hokkien), Belanda, Sunda, dan Jawa. Saat ini, Jakarta juga menjadi tempat lahirnya 'Bahasa Gaul' Indonesia.",
        citationIds: ["jkt-ref-betawi"],
      }
    ],
    vocabulary: [
      { id: "jkt-voc-01", word: "Gue / Lu (Elu)", meaning: "Saya / Kamu (Populer digunakan di kalangan anak muda secara nasional)", citationIds: ["jkt-ref-betawi"] },
      { id: "jkt-voc-02", word: "Gocap / Cepek", meaning: "Lima Puluh / Seratus (Serapan dialek Hokkien yang umum digunakan dalam jual beli)", citationIds: ["jkt-ref-betawi"] },
      { id: "jkt-voc-03", word: "Bagen", meaning: "Biarin / Biarkan saja (Dialek Pinggiran/Ora)", citationIds: ["jkt-ref-betawi"] },
      { id: "jkt-voc-04", word: "Kongko", meaning: "Nongkrong atau duduk santai bersama teman-teman santai (Tionghoa-Betawi)", citationIds: ["jkt-ref-betawi"] },
    ],
    referenceIds: ["jkt-ref-betawi"],
  },

  culinary: {
    introduction: [
      {
        id: "jkt-culi-01",
        content: "Kuliner Betawi merefleksikan perpaduan budaya dengan pemakaian bumbu rempah lokal, kuah santan, sentuhan tauco (Tionghoa), dan jintan/biji pala (Arab-Eropa).",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "jkt-culi-item-01",
        title: "Kerak Telor",
        description: "Camilan klasik gurih perpaduan beras ketan putih, telur ayam/bebek, ebi (udang kering), dan serundeng kelapa sangrai. Dimasak unik dengan wajan dibalik menghadap arang hingga permukaannya berkerak.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-culi-item-02",
        title: "Soto Betawi",
        description: "Soto daging sapi campur jeroan yang kuahnya sangat kaya, merupakan campuran dari santan kelapa dan susu sapi/krim, ditaburi tomat segar, kentang goreng, emping, dan minyak samin.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-culi-item-03",
        title: "Gado-Gado & Ketoprak",
        description: "Salad lokal khas Jakarta. Gado-gado terdiri dari aneka sayuran rebus, tahu, tempe, telur, disiram bumbu kacang. Ketoprak berisi bihun, tahu, tauge, lontong dengan bumbu kacang bawang putih.",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-culi-item-04",
        title: "Roti Buaya",
        description: "Roti manis berbentuk buaya. Merupakan elemen wajib dalam seserahan pernikahan adat Betawi, melambangkan kesetiaan (karena buaya hanya kawin sekali seumur hidup) dan kemapanan finansial.",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    referenceIds: ["jkt-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "jkt-bio-01",
        content: "Meski merupakan megapolitan padat, Jakarta memiliki lambang satwa dan flora endemik (Salak Condet dan Elang Bondol) serta kawasan konservasi ekosistem bahari di Taman Nasional Kepulauan Seribu.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    species: [
      {
        id: "jkt-bio-item-01",
        category: "Fauna Darat (Maskot)",
        title: "Elang Bondol (Haliastur indus)",
        description: "Burung pemangsa dengan bulu dada berwarna putih terang dan sayap cokelat, sering terlihat mencari ikan di pesisir utara Kepulauan Seribu. (Bersama Salak Condet menjadi maskot Pemprov DKI Jakarta).",
        citationIds: ["jkt-ref-bps"],
      },
      {
        id: "jkt-bio-item-02",
        category: "Flora (Maskot)",
        title: "Salak Condet (Salacca edulis)",
        description: "Varian salak khas dari kawasan Condet, Jakarta Timur. Terkenal karena rasanya yang manis-sepat dengan daging buah yang masir. Saat ini perkebunan aslinya sangat terbatas akibat pembangunan.",
        citationIds: ["jkt-ref-bps"],
      },
      {
        id: "jkt-bio-item-03",
        category: "Fauna Laut",
        title: "Penyu Sisik (Eretmochelys imbricata)",
        description: "Sering ditemukan di zona konservasi Taman Nasional Laut Kepulauan Seribu (khususnya Pulau Pramuka) yang memiliki program penangkaran penyu langka ini.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    referenceIds: ["jkt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "jkt-dest-01",
        content: "Pariwisata di Jakarta meliputi edutourism sejarah (museum), rekreasi keluarga raksasa terpadu, pusat perbelanjaan (mall) kelas wahid, hingga pelarian laut di Kepulauan Seribu.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    items: [
      {
        id: "jkt-dest-item-01",
        category: "Sejarah & Monumen",
        title: "Monumen Nasional (Monas)",
        description: "Ikon utama Indonesia setinggi 132 meter, dihiasi lidah api berlapis emas di puncaknya. Dirancang pada era Presiden Soekarno untuk mengenang perlawanan dan perjuangan kemerdekaan rakyat Indonesia.",
        citationIds: ["jkt-ref-bps"],
      },
      {
        id: "jkt-dest-item-02",
        category: "Sejarah Kota Lama",
        title: "Kota Tua (Oud Batavia)",
        description: "Kawasan peninggalan VOC dengan bangunan klasik megah bergaya Eropa. Pusat keramaiannya berada di Taman Fatahillah, yang dikelilingi oleh Museum Sejarah Jakarta (Stadhuis), Museum Wayang, dan Museum Seni Rupa & Keramik.",
        citationIds: ["jkt-ref-bps"],
      },
      {
        id: "jkt-dest-item-03",
        category: "Budaya & Taman Hiburan",
        title: "Taman Mini Indonesia Indah (TMII) & Ancol",
        description: "TMII adalah rangkuman kebudayaan seluruh provinsi di Indonesia dalam miniatur anjungan. Sementara Taman Impian Jaya Ancol adalah resor tepi laut terpadu dengan taman bermain Dunia Fantasi (Dufan).",
        citationIds: ["jkt-ref-bps"],
      },
      {
        id: "jkt-dest-item-04",
        category: "Bahari",
        title: "Kepulauan Seribu (Pulau Macan, Pramuka, Pari)",
        description: "Gugusan pulau di utara Jakarta yang menawarkan 'escape' instan dari kepenatan kota dengan pasir putih, snorkeling, dan resor eco-friendly.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    referenceIds: ["jkt-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "jkt-story-01",
        content: "Kisah rakyat Betawi seringkali bertema pahlawan jelata yang membela kaum tertindas, atau legenda urban yang mewarnai sejarah panjang kota ini.",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "jkt-story-item-01",
        title: "Si Pitung: Robin Hood Betawi",
        description: "Kisah legendaris jawara silat dari Rawa Belong yang merampok tuan tanah kaya dan pejabat korup Belanda, lalu membagikan hartanya kepada rakyat miskin. Konon Si Pitung kebal peluru dan hanya bisa tewas dengan peluru emas (atau peluru jimat).",
        citationIds: ["jkt-ref-wbtb"],
      },
      {
        id: "jkt-story-item-02",
        title: "Si Manis Jembatan Ancol",
        description: "Urban legend paling terkenal di Jakarta sejak abad ke-19, mengisahkan arwah Mariam (atau Siti Ariah), gadis manis yang dibunuh dan jasadnya dibuang di dekat jembatan Ancol oleh lintah darat berhidung belang.",
        citationIds: ["jkt-ref-wbtb"],
      }
    ],
    referenceIds: ["jkt-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "jkt-cont-01",
        content: "Jakarta saat ini bertransformasi menjadi kota global dengan infrastruktur transportasi publik mutakhir (MRT, LRT, TransJakarta) sembari menghadapi tantangan lingkungan (banjir, penurunan permukaan tanah).",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "jkt-cont-02",
        content: "Kawasan Segitiga Emas (Sudirman-Thamrin-Kuningan) merupakan pusat bisnis komersial terbesar di Indonesia. Seiring dengan perpindahan Ibukota Negara ke Nusantara (IKN) di Kalimantan Timur, status Jakarta akan direvisi dari 'DKI' menjadi Daerah Khusus Jakarta (DKJ), dengan fokus menjadi pusat ekonomi dan bisnis global terkemuka di Asia.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    referenceIds: ["jkt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "jkt-travel-01",
        content: "Berwisata di Jakarta berarti siap merasakan ritme cepat kota metropolitan dengan gemerlap malamnya dan kemacetan lalu lintas pada jam sibuk.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "jkt-travel-02",
        content: "Gunakan transportasi publik (MRT atau Bus TransJakarta) untuk menghindari kemacetan dan aturan Ganjil-Genap pelat nomor kendaraan bermotor di jalan protokol. Berjalan kaki lebih disarankan di area transit (TOD) yang sudah diperbaiki trotoarnya. Saat berkunjung ke tempat ibadah monumental seperti Masjid Istiqlal, kenakan pakaian panjang yang sopan.",
        citationIds: ["jkt-ref-bps"],
      }
    ],
    referenceIds: ["jkt-ref-bps"],
  },

  lastReviewedAt: "2026-07-12T16:51:00Z",
  contentStatus: "draft",
  referenceIds: [
    "jkt-ref-bps",
    "jkt-ref-wbtb",
    "jkt-ref-sejarah",
    "jkt-ref-betawi"
  ]
};
