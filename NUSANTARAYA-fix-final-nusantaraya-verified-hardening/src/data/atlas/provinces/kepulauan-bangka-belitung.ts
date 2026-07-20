import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kepulauanBangkaBelitungReferences: ScientificReference[] = [
  {
    id: "bbl-ref-bps",
    title: "Provinsi Kepulauan Bangka Belitung Dalam Angka 2024",
    authors: ["BPS Provinsi Kepulauan Bangka Belitung"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kep. Bangka Belitung",
    url: "https://babel.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "bbl-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kep. Bangka Belitung",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "bbl-ref-timah",
    title: "Sejarah Penambangan Timah di Bangka Belitung",
    authors: ["Heidhues, Mary Somers"],
    year: 1992,
    publisher: "SEAP Publications",
    url: "https://id.wikipedia.org/wiki/Timah",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["history", "contemporary", "society"],
  },
  {
    id: "bbl-ref-laskarpelangi",
    title: "Laskar Pelangi",
    authors: ["Hirata, Andrea"],
    year: 2005,
    publisher: "Bentang Pustaka",
    url: "https://id.wikipedia.org/wiki/Laskar_Pelangi",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["stories", "destinations"],
  },
  {
    id: "bbl-ref-mentilin",
    title: "Tarsius bancanus (Horsfield's Tarsier)",
    authors: ["IUCN Red List"],
    year: 2020,
    publisher: "IUCN",
    url: "https://www.iucnredlist.org/species/21488/17953257",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kepulauan-bangka-belitung"],
    topicIds: ["biodiversity"],
  }
];

export const kepulauanBangkaBelitungAtlas: ProvinceAtlas = {
  provinceId: "kepulauan-bangka-belitung",
  slug: "kepulauan-bangka-belitung",
  title: "Kep. Bangka Belitung",
  tagline: "Negeri Laskar Pelangi, Harmoni Melayu-Tionghoa",
  summary: [
    {
      id: "bbl-sum-01",
      content: "Provinsi Kepulauan Bangka Belitung (Babel) berdiri di atas endapan bijih timah kelas dunia yang telah mengubah demografi kepulauan ini sejak masa Hindia Belanda. Bebatuan granit raksasa berjejer rapi di pantai-pantainya yang berpasir putih bak tepung. Selain keindahan geologisnya yang melegenda berkat novel 'Laskar Pelangi', Babel menjadi role-model toleransi abadi (Thong Ngin Fan Ngin Jit Jong) antara masyarakat Melayu dan keturunan Tionghoa Hakka.",
      citationIds: ["bbl-ref-bps", "bbl-ref-timah", "bbl-ref-laskarpelangi"],
    }
  ],
  quickFacts: [
    { id: "bbl-qf-01", label: "Ibu Kota", value: "Pangkalpinang (Bangka)", citationIds: ["bbl-ref-bps"] },
    { id: "bbl-qf-02", label: "Luas Wilayah", value: "16.424,06 km²", citationIds: ["bbl-ref-bps"], dataYear: 2024 },
    { id: "bbl-qf-03", label: "Populasi", value: "1.494.618 jiwa", citationIds: ["bbl-ref-bps"], dataYear: 2023 },
    { id: "bbl-qf-04", label: "Komoditas Utama", value: "Timah, Lada Putih (Muntok)", citationIds: ["bbl-ref-bps"] },
    { id: "bbl-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["bbl-ref-bps"] },
    { id: "bbl-qf-06", label: "Gubernur", value: "Safrizal ZA (Pj.)", citationIds: ["bbl-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "bbl-geo-01",
        content: "Kepulauan Bangka Belitung terdiri dari dua pulau utama (Bangka di sebelah barat, Belitung di sebelah timur) dan ratusan pulau kecil lainnya, diapit oleh Laut Natuna dan Laut Jawa.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "bbl-geo-02",
        content: "Dataran pulau-pulaunya relatif rendah dengan beberapa perbukitan kecil (Bukit Menumbing di Bangka). Ciri khas bentang alamnya (terutama di Belitung) adalah batuan intrusi granit raksasa (berumur ratusan juta tahun) yang tersebar di sepanjang garis pantainya. Sisi gelap dari geografi ini adalah maraknya lubang galian 'kolong' (danau kawah buatan) sisa penambangan timah yang tersebar di daratan Bangka.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    referenceIds: ["bbl-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "bbl-his-01",
        content: "Sejarah Babel adalah sejarah penambangan komoditas dunia: Lada Putih (Muntok White Pepper) dan Timah (Plumbum) oleh Belanda.",
        citationIds: ["bbl-ref-timah"],
      }
    ],
    timeline: [
      {
        id: "bbl-era-01",
        period: "Abad ke-18 M",
        title: "Penemuan Bijih Timah",
        description: "Timah ditemukan pertama kali di Mentok (Bangka) oleh Sultan Palembang Darussalam. Ia kemudian mendatangkan ribuan tenaga kerja (kuli) tambang terlatih dari Tiongkok (mayoritas etnis Hakka) untuk mengeksploitasi mineral ini.",
        citationIds: ["bbl-ref-timah"],
      },
      {
        id: "bbl-era-02",
        period: "1851",
        title: "Billiton Maatschappij",
        description: "Perusahaan Belanda NV Billiton Maatschappij (Cikal bakal perusahaan tambang dunia, BHP Billiton) memonopoli tambang timah di Pulau Belitung (Billiton). Sisa-sisa kemewahan staf Belanda (Gedong) dan kemiskinan kuli Tionghoa/Lokal (Parit) menciptakan stratifikasi sosial panjang.",
        citationIds: ["bbl-ref-timah"],
      },
      {
        id: "bbl-era-03",
        period: "1948 – 1949",
        title: "Pengasingan Pemimpin RI (Muntok)",
        description: "Pada masa Agresi Militer Belanda II, para founding fathers RI (termasuk Bung Karno, Bung Hatta, Agus Salim) ditawan dan diasingkan di Pesanggrahan Menumbing dan Wisma Ranggam, Muntok (Bangka).",
        citationIds: ["bbl-ref-bps"],
      },
      {
        id: "bbl-era-04",
        period: "21 November 2000",
        title: "Terbentuknya Provinsi",
        description: "Bangka Belitung secara resmi dimekarkan dari Provinsi Sumatera Selatan dan berdiri sebagai provinsi tersendiri untuk mengelola potensi alam (timah dan wisatanya) secara mandiri.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    referenceIds: ["bbl-ref-timah", "bbl-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "bbl-soc-01",
        content: "Masyarakat Bangka Belitung merupakan model asimilasi paling sukses di Nusantara, memegang falsafah 'Thong Ngin Fan Ngin Jit Jong' (Tionghoa-Melayu Sama Saja).",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "bbl-soc-02",
        content: "Kedua etnis utama (Melayu Muslim dan Tionghoa Hakka/Konghucu/Buddha) telah membaur secara perkawinan (Peranakan), bisnis, dan budaya selama lebih dari dua abad tanpa ada sejarah konflik etnis berskala besar. Kesenjangan bukan terjadi karena perbedaan suku, melainkan sisa-sisa era penambangan kolonial (staf PT Timah vs. pekerja serabutan).",
        citationIds: ["bbl-ref-timah"],
      }
    ],
    referenceIds: ["bbl-ref-timah", "bbl-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "bbl-cul-01",
        content: "Budaya Babel mencerminkan silang budaya; Tari pergaulan ala Eropa (Portugis) berbaur dengan tradisi gotong royong membagi makanan Melayu.",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "bbl-cul-item-01",
        category: "Tari Pergaulan",
        title: "Tari Campak",
        description: "Tari gembira (biasanya untuk menyambut panen) yang memadukan budaya Melayu lokal dengan gaya dansa Portugis. Para penari berbalas pantun diringi alat musik akordeon, biola, dan gendang.",
        citationIds: ["bbl-ref-wbtb"],
      },
      {
        id: "bbl-cul-item-02",
        category: "Ritual Adat (Bangka)",
        title: "Perang Ketupat (Tempilang)",
        description: "Upacara penolak bala tahunan. Ratusan masyarakat berkumpul, saling melempar ketupat layaknya berperang, melambangkan pembersihan dosa/sial sebelum memasuki bulan puasa (Ramadhan).",
        citationIds: ["bbl-ref-wbtb"],
      },
      {
        id: "bbl-cul-item-03",
        category: "Falsafah Gotong Royong",
        title: "Sepintu Sedulang (Nganggung)",
        description: "Tradisi membawa satu tudung saji beralas kuningan (berisi makanan/lauk pauk) dari setiap satu pintu rumah ('sepintu sedulang') menuju ke Masjid desa. Seluruh lauk pauk ini akan dinikmati bersama/bertukar setelah sholat Jumat atau perayaan Lebaran.",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    referenceIds: ["bbl-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "bbl-lang-01",
        content: "Bahasa lokal terbagi dua: Bahasa Melayu Bangka dan Melayu Belitung. Bahasa Hakka (Khek) juga menjadi bahasa pergaulan penting dalam perdagangan sehari-hari.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "bbl-voc-01", word: "Cemane?", meaning: "Bagaimana? (Melayu Belitung).", citationIds: ["bbl-ref-bps"] },
      { id: "bbl-voc-02", word: "Ku / Ka", meaning: "Saya / Kamu (Bangka Belitung).", citationIds: ["bbl-ref-bps"] },
      { id: "bbl-voc-03", word: "Aok", meaning: "Iya (Kata persetujuan yang paling sering digunakan, dilafalkan panjang 'Aoooook').", citationIds: ["bbl-ref-bps"] },
      { id: "bbl-voc-04", word: "Kam Sia", meaning: "Terima Kasih (Hakka/Tionghoa lokal).", citationIds: ["bbl-ref-timah"] },
    ],
    referenceIds: ["bbl-ref-bps", "bbl-ref-timah"],
  },

  culinary: {
    introduction: [
      {
        id: "bbl-culi-01",
        content: "Kuliner pesisir berkuah kuning nanas dan mi/kwetiau kaldu udang merupakan bintang utama, ditemani dengan kebudayaan meminum kopi o di warung kayu.",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "bbl-culi-item-01",
        title: "Lempah Kuning",
        description: "Hidangan berkuah kuning khas Bangka berbahan dasar ikan (tenggiri, kerisi, kakap) dimasak asam pedas segar tanpa santan, dan biasanya dilengkapi dengan irisan buah nanas atau belimbing wuluh.",
        citationIds: ["bbl-ref-wbtb"],
      },
      {
        id: "bbl-culi-item-02",
        title: "Mie Belitung (Mie Atep)",
        description: "Mie kuning basah yang disiram dengan kuah kaldu udang kental yang cenderung manis (karena gula aren). Disajikan panas-panas dengan taburan udang rebus, potongan emping, taoge, dan mentimun.",
        citationIds: ["bbl-ref-wbtb"],
      },
      {
        id: "bbl-culi-item-03",
        title: "Otak-otak Daun & Kemplang",
        description: "Adonan ikan berbalut daun kelapa nipah (dipanggang) atau kerupuk kemplang (dipanggang pasir) khas Bangka. Yang membuatnya sangat unik adalah 'cocolan' tauco pedas jeruk nipis-nya.",
        citationIds: ["bbl-ref-wbtb"],
      },
      {
        id: "bbl-culi-item-04",
        title: "Kopi O (Manggar)",
        description: "Kota Manggar (Belitung Timur) dijuluki Kota 1001 Warung Kopi. Kopi O adalah kopi hitam pekat khas Semenanjung yang disaring menggunakan saringan kain panjang (mirip kaus kaki).",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    referenceIds: ["bbl-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "bbl-bio-01",
        content: "Hutan-hutan kecil sekunder di Bangka Belitung menyimpan populasi primata terkecil di dunia yang sangat sensitif.",
        citationIds: ["bbl-ref-mentilin"],
      }
    ],
    species: [
      {
        id: "bbl-bio-item-01",
        category: "Fauna Endemik (Maskot)",
        title: "Mentilin (Tarsius bancanus)",
        description: "Primata terkecil berukuran sebesar telapak tangan dewasa yang sangat mirip dengan tarsius Sulawesi. Memiliki mata sangat besar untuk berburu serangga malam. Hewan ini sangat rapuh dan dapat mengalami stres hingga bunuh diri jika ditangkap/dikurung.",
        citationIds: ["bbl-ref-mentilin"],
      },
      {
        id: "bbl-bio-item-02",
        category: "Flora Maskot",
        title: "Pohon Pelawan (Tristaniopsis merguensis)",
        description: "Pohon dengan batang berwarna merah mengelupas yang mendominasi hutan Belitung/Bangka. Di sekitar akar pelawan tumbuh 'Jamur Pelawan', jamur tanah langka yang harganya setara dengan daging sapi.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    referenceIds: ["bbl-ref-mentilin", "bbl-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "bbl-dest-01",
        content: "Pantai dengan batu granit raksasa berumur 200 juta tahun dan danau kawah pasca tambang menjadi jualan utama ekowisata Babel.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    items: [
      {
        id: "bbl-dest-item-01",
        category: "Alam Pantai & Ikon Sastra",
        title: "Pantai Tanjung Tinggi (Pantai Laskar Pelangi)",
        description: "Terletak di Belitung, pantai ini sangat ikonik karena pantainya tertutup dengan tumpukan batu granit bulat raksasa sebesar rumah, pasir putih bersih, dan ombak tenang. Lokasi syuting utama film 'Laskar Pelangi'.",
        citationIds: ["bbl-ref-laskarpelangi"],
      },
      {
        id: "bbl-dest-item-02",
        category: "Geopark & Island Hopping",
        title: "Pulau Lengkuas & Tanjung Kelayang",
        description: "Pantai utara Belitung merupakan Kawasan Ekonomi Khusus (KEK). Wisatawan melakukan 'Island Hopping' menggunakan perahu kayu menuju Pulau Lengkuas yang di tengahnya berdiri kokoh Mercusuar besi tua pabrikan Belanda (sejak 1882).",
        citationIds: ["bbl-ref-bps"],
      },
      {
        id: "bbl-dest-item-03",
        category: "Eksotisme Pasca Tambang",
        title: "Danau Kaolin (Kulong Biru)",
        description: "Danau-danau kecil di Bangka dan Belitung yang terbentuk akibat lubang galian tambang timah yang ditinggalkan ('kolong'). Bekas galian mineral kaolin putih ini diisi air hujan dan menciptakan danau dengan warna toska atau biru muda surealis, seperti gletser.",
        citationIds: ["bbl-ref-timah"],
      },
      {
        id: "bbl-dest-item-04",
        category: "Sejarah Proklamator",
        title: "Pesanggrahan Menumbing (Muntok)",
        description: "Bungalo peristirahatan pejabat timah Belanda di atas Bukit Menumbing, Bangka. Tempat ini pernah menjadi tempat tahanan Bung Karno dan Bung Hatta (kamar dan mobil kuno BN-10 milik Bung Karno masih terawat).",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    referenceIds: ["bbl-ref-bps", "bbl-ref-laskarpelangi", "bbl-ref-timah"],
  },

  stories: {
    introduction: [
      {
        id: "bbl-story-01",
        content: "Kepulauan ini diabadikan secara global dalam karya fiksi dan memoar yang menyoroti semangat perlawanan terhadap ketidaksetaraan pendidikan.",
        citationIds: ["bbl-ref-laskarpelangi"],
      }
    ],
    stories: [
      {
        id: "bbl-story-item-01",
        title: "Laskar Pelangi",
        description: "Buku fiksi otobiografi terlaris karya Andrea Hirata. Menceritakan 10 anak kampung dari kalangan miskin Melayu di Desa Gantong, Belitung (termasuk Ikal, Lintang sang genius, dan Mahar sang seniman) yang berjuang mempertahankan sekolah reot mereka (SD Muhammadiyah) dari ancaman penutupan perusahaan tambang timah milik negara.",
        citationIds: ["bbl-ref-laskarpelangi"],
      },
      {
        id: "bbl-story-item-02",
        title: "Legenda Bujang Katak",
        description: "Cerita rakyat khas Bangka tentang seorang anak miskin yang dikutuk menyerupai katak, tetapi berkat keikhlasan dan kecerdikannya, mampu menyelamatkan kampung dan berubah menjadi pemuda tampan yang menikahi putri raja.",
        citationIds: ["bbl-ref-wbtb"],
      }
    ],
    referenceIds: ["bbl-ref-laskarpelangi", "bbl-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "bbl-cont-01",
        content: "Kepulauan Bangka Belitung menghadapi tantangan serius dalam beralih dari 'Kutukan Timah' menuju industri pariwisata yang berkelanjutan (Laskar Pelangi Effect).",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    economy: [
      {
        id: "bbl-cont-02",
        content: "Ketergantungan ekonomi rakyat pada penambangan Timah Inkonvensional (TI) secara lepas pantai maupun darat telah memicu reklamasi lingkungan yang masif dan isu korupsi tata niaga (Kasus Korupsi Timah 2024). Di saat bersamaan, Pemprov Babel sedang mendorong KEK Tanjung Kelayang Belitung agar menjadi tujuan wisata internasional pasca-tambang.",
        citationIds: ["bbl-ref-timah", "bbl-ref-bps"],
      }
    ],
    referenceIds: ["bbl-ref-bps", "bbl-ref-timah"],
  },

  travel: {
    introduction: [
      {
        id: "bbl-travel-01",
        content: "Pariwisata di Bangka Belitung (khususnya Belitung) ditandai dengan akses infrastruktur aspal yang sangat mulus, sepi dari kemacetan, dan penduduk yang sangat toleran.",
        citationIds: ["bbl-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "bbl-travel-02",
        content: "Saat mencicipi kuliner Tionghoa (Mie/Otak-otak), jangan segan bertanya apakah mengandung daging babi atau tidak; pedagang Hakka akan dengan jujur memberi tahu (karena banyak juga yang berjualan varian halal 100%). Menghabiskan secangkir Kopi O di Manggar adalah wajib, dan sapa penduduk lokal dengan 'Aok' (iya) sembari melempar senyum.",
        citationIds: ["bbl-ref-timah"],
      }
    ],
    referenceIds: ["bbl-ref-bps", "bbl-ref-timah"],
  },

  lastReviewedAt: "2026-07-13T00:15:00Z",
  contentStatus: "draft",
  referenceIds: [
    "bbl-ref-bps",
    "bbl-ref-wbtb",
    "bbl-ref-timah",
    "bbl-ref-laskarpelangi",
    "bbl-ref-mentilin"
  ]
};
