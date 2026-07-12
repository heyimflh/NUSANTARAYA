import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sulawesiUtaraReferences: ScientificReference[] = [
  {
    id: "slu-ref-bps",
    title: "Provinsi Sulawesi Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sulawesi Utara",
    url: "https://sulut.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "slu-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sulawesi Utara",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "slu-ref-minahasa",
    title: "Minahasa Past and Present",
    authors: ["Henley, David"],
    year: 2005,
    publisher: "KITLV Press",
    url: "https://id.wikipedia.org/wiki/Suku_Minahasa",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["history", "society"],
  },
  {
    id: "slu-ref-bunaken",
    title: "Bunaken National Marine Park",
    authors: ["UNESCO World Heritage Centre"],
    year: 2005,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/tentativelists/2002/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["biodiversity", "destinations", "geography"],
  },
  {
    id: "slu-ref-yaki",
    title: "Macaca nigra (Celebes Crested Macaque)",
    authors: ["IUCN Red List"],
    year: 2020,
    publisher: "IUCN",
    url: "https://www.iucnredlist.org/species/12556/17950422",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-utara"],
    topicIds: ["biodiversity"],
  }
];

export const sulawesiUtaraAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-utara",
  slug: "sulawesi-utara",
  title: "Sulawesi Utara",
  tagline: "Bumi Nyiur Melambai, Harmoni Minahasa di Ujung Pasifik",
  summary: [
    {
      id: "slu-sum-01",
      content: "Terletak di ujung semenanjung utara pulau Sulawesi yang nyaris menyentuh Filipina, Sulawesi Utara (Sulut) adalah provinsi yang sangat identik dengan keramahan Suku Minahasa ('Torang Samua Basudara'), keeksotisan kuliner ekstrem pedasnya, serta ketaatan kuat pada iman Kristiani yang berpadu dengan warisan kolonial ('Provinsi ke-12 Belanda'). Diberkahi dengan rangkaian gunung api aktif yang subur dan taman laut Bunaken-Lembeh yang diakui dunia penyelaman global, Sulut berpacu menjadi gerbang maritim Indonesia menuju Samudra Pasifik.",
      citationIds: ["slu-ref-bps", "slu-ref-minahasa", "slu-ref-bunaken"],
    }
  ],
  quickFacts: [
    { id: "slu-qf-01", label: "Ibu Kota", value: "Manado", citationIds: ["slu-ref-bps"] },
    { id: "slu-qf-02", label: "Luas Wilayah", value: "13.892,47 km²", citationIds: ["slu-ref-bps"], dataYear: 2024 },
    { id: "slu-qf-03", label: "Populasi", value: "2.683.282 jiwa", citationIds: ["slu-ref-bps"], dataYear: 2023 },
    { id: "slu-qf-04", label: "Ikon Bahari", value: "Taman Nasional Bunaken", citationIds: ["slu-ref-bps"] },
    { id: "slu-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["slu-ref-bps"] },
    { id: "slu-qf-06", label: "Gubernur", value: "Olly Dondokambey", citationIds: ["slu-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "slu-geo-01",
        content: "Bentuk fisik Sulawesi Utara ibarat belalai panjang yang menjulur ke timur dan berbelok tajam ke utara, dipenuhi kerucut gunung berapi (Ring of Fire).",
        citationIds: ["slu-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "slu-geo-02",
        content: "Dataran utama (Minahasa dan Bolaang Mongondow) sangat subur akibat abu vulkanik dari Gunung Lokon, Klabat, dan Soputan, yang melingkupi perairan tawar Danau Tondano. Lepas dari daratan utama, gugusan Kepulauan Sangihe-Talaud (Nusa Utara) membentang ke utara hingga menempel pada perbatasan perairan Mindanao (Filipina). Garis pantainya dihiasi pasir hitam vulkanik dan dinding terumbu karang (drop-off) raksasa.",
        citationIds: ["slu-ref-bps", "slu-ref-bunaken"],
      }
    ],
    referenceIds: ["slu-ref-bps", "slu-ref-bunaken"],
  },

  history: {
    introduction: [
      {
        id: "slu-his-01",
        content: "Sejarah Sulut ditandai dengan aliansi yang sangat erat dengan kekuatan kolonial Eropa (Spanyol, Portugis, dan Belanda), menjadikannya kawasan yang paling ter-Baratkan di Indonesia Timur.",
        citationIds: ["slu-ref-minahasa"],
      }
    ],
    timeline: [
      {
        id: "slu-era-01",
        period: "Abad ke-16",
        title: "Kedatangan Portugis & Spanyol",
        description: "Bangsa Eropa berlabuh untuk berdagang dan menyebarkan agama Kristen Katolik. Pengaruh bahasa Portugis dan Spanyol sangat kuat mewarnai dialek keseharian (misalnya kata 'Kadera' untuk kursi, 'Fatsal' untuk pasal).",
        citationIds: ["slu-ref-minahasa"],
      },
      {
        id: "slu-era-02",
        period: "1679",
        title: "Perjanjian Persahabatan (Verbond) VOC",
        description: "Tokoh-tokoh (Tonaas) persekutuan Suku Minahasa menandatangani perjanjian kesetaraan militer dengan Gubernur VOC (Robertus Padtbrugge). Minahasa menjadi sekutu logistik dan militer andalan Belanda melawan kerajaan-kerajaan lain di Nusantara, hingga wilayah ini dijuluki 'De Twaalfde Provincie' (Provinsi ke-12 Belanda).",
        citationIds: ["slu-ref-minahasa"],
      },
      {
        id: "slu-era-03",
        period: "1831",
        title: "Penginjilan Riedel & Schwarz",
        description: "Dua pekabar Injil asal Jerman, Johann Friedrich Riedel dan Johann Gottlieb Schwarz, menyebarkan agama Kristen Protestan (NZG) yang akhirnya memenangkan hati hampir seluruh masyarakat Minahasa dan merombak struktur budaya feodal.",
        citationIds: ["slu-ref-minahasa"],
      },
      {
        id: "slu-era-04",
        period: "1964",
        title: "Pemekaran Sulawesi Utara",
        description: "Berdasarkan UU No. 13 Tahun 1964, Sulawesi Utara resmi berpisah dari Sulawesi Tengah, dan kelak di 2000 menelurkan provinsi baru: Gorontalo.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    referenceIds: ["slu-ref-minahasa", "slu-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "slu-soc-01",
        content: "Identitas sosial Sulut ditegakkan di atas dua filosofi luhur: 'Torang Samua Basudara' (Kita Semua Bersaudara) dan 'Mapalus' (Gotong Royong Murni).",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    socialStructure: [
      {
        id: "slu-soc-02",
        content: "Masyarakat terbagi dalam tiga kelompok etnis dominan. Pertama, Suku Minahasa (mayoritas Kristen Protestan) di wilayah utara (Manado, Tomohon, Minahasa). Kedua, Suku Bolaang Mongondow di wilayah selatan (mayoritas Muslim, berakar pada Kerajaan Mongondow yang bersekutu dengan Ternate). Ketiga, Suku Sangihe-Talaud (Nusa Utara) pelaut tangguh di kepulauan. Toleransi umat beragama di provinsi ini sangat tinggi, difasilitasi oleh BKSAUA (Badan Kerja Sama Antar Umat Beragama) yang dibentuk sejak 1969.",
        citationIds: ["slu-ref-minahasa", "slu-ref-bps"],
      }
    ],
    referenceIds: ["slu-ref-minahasa", "slu-ref-bps", "slu-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "slu-cul-01",
        content: "Kebudayaan Minahasa adalah perpaduan unik ritus leluhur (pemujaan Opo) yang direkonsiliasi dengan estetika pakaian dan musik ala Eropa (Spanyol/Belanda).",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slu-cul-item-01",
        category: "Tarian Perang Magis",
        title: "Tari Kabasaran (Cakalele)",
        description: "Tarian keprajuritan pria (Waraney) Minahasa. Penari menggunakan pakaian serba merah cerah, membawa parang (pedang bara) dan perisai kayu, menari dengan mimik wajah sangat garang (melotot) diiringi pukulan tambur ritmis untuk menakuti roh jahat.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-cul-item-02",
        category: "Ansambel Musik Kayu",
        title: "Kolintang",
        description: "Alat musik pukul melodis yang terbuat dari bilah kayu lokal ringan (kayu telur/banderan) yang disusun memanjang di atas peti resonansi. Dimainkan berkelompok (orkestra kayu) dengan nada dasar Barat, sering membawakan lagu rohani atau keroncong.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-cul-item-03",
        category: "Tari Syukuran Panen",
        title: "Tari Maengket",
        description: "Tari massal berpasangan (pria dan wanita muda) yang dilakukan setelah panen padi (Makamberu) atau meresmikan rumah baru. Tariannya anggun, diwarnai lirik-lirik pujian kepada Tuhan.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-cul-item-04",
        category: "Arsitektur Kematian Purba",
        title: "Waruga",
        description: "Sarkofagus/kubur batu leluhur Minahasa kuno berbentuk kubus dengan tutup berbentuk bubungan atap. Jenazah didudukkan dengan posisi tumit menyentuh pantat (posisi janin rahim) sebelum dimasukkan ke dalam lubang sempit batu utuh ini.",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    referenceIds: ["slu-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "slu-lang-01",
        content: "Bahasa Melayu Manado (Manado Creole) adalah bahasa sehari-hari yang sangat musikal, dipenuhi kosata serapan murni Belanda, Portugis, dan Spanyol.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "slu-voc-01", word: "Kita / Ngana", meaning: "Saya / Kamu (Secara umum/akrab).", citationIds: ["slu-ref-bps"] },
      { id: "slu-voc-02", word: "Pe", meaning: "Punya (Contoh: Kita pe tamang = Temanku).", citationIds: ["slu-ref-bps"] },
      { id: "slu-voc-03", word: "Kuala / Oto", meaning: "Sungai / Mobil (Serapan Belanda/Auto).", citationIds: ["slu-ref-minahasa"] },
      { id: "slu-voc-04", word: "Baku Dapa", meaning: "Saling bertemu / berjumpa.", citationIds: ["slu-ref-bps"] },
    ],
    referenceIds: ["slu-ref-bps", "slu-ref-minahasa"],
  },

  culinary: {
    introduction: [
      {
        id: "slu-culi-01",
        content: "Seni boga Manado menggilai rasa pedas yang membakar (Rica) dipadukan dengan kesegaran bumbu dedaunan (kemangi, pandan), serta sangat menonjolkan kuliner 'Ekstrem' non-halal.",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slu-culi-item-01",
        title: "Tinutuan (Bubur Manado)",
        description: "Bubur sehat berkuah kuning kental (campuran beras, labu kuning/sambiki, ubi, singkong, jagung manis) yang dicampur daun bayam, kangkung, gedi, dan kemangi. Disajikan dengan cakalang fufu, dabu-dabu roa (sambal ikan), dan tahu goreng.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-culi-item-02",
        title: "Ayam Woku Belanga & Rica-Rica",
        description: "Masakan daging (ayam/ikan) yang dimasak dalam belanga (kuali tanah liat) dengan bumbu rempah daun melimpah (woku) berwarna kuning. Sedangkan 'Rica-rica' adalah bumbu cabai merah pedas ulek kasar.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-culi-item-03",
        title: "Cakalang Fufu",
        description: "Ikan Cakalang (Skipjack Tuna) khas perairan Utara yang diasap (fufu) di atas para-para kayu berhari-hari. Dagingnya keras di luar, merah merona, dan sangat wangi asap.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-culi-item-04",
        title: "Kuliner Ekstrem (Paniki & RW)",
        description: "Hidangan khusus non-halal bagi masyarakat Minahasa. Paniki adalah masakan kelelawar buah (sayap dan dagingnya hitam) berbumbu santan ekstra pedas. Sementara 'RW' (Rintek Wuuk = bulu halus) merujuk pada olahan daging anjing berbumbu rempah kuat (cengkeh/jahe) untuk menghilangkan bau amis.",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    referenceIds: ["slu-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "slu-bio-01",
        content: "Posisi Sulut di garis Wallace (Sulawesi) dan segitiga koral dunia menghasilkan primata aneh bermata besar di darat, dan fosil hidup berenang di laut dalam.",
        citationIds: ["slu-ref-yaki", "slu-ref-bunaken"],
      }
    ],
    species: [
      {
        id: "slu-bio-item-01",
        category: "Fauna Endemik (Darat)",
        title: "Monyet Yaki (Macaca nigra)",
        description: "Monyet hitam tanpa ekor dengan ciri khas jambul mirip punk di atas kepalanya dan bokong berwarna merah muda terang. Mereka hanya hidup secara alami di hutan Tangkoko, Minahasa Utara, dan sering menjadi target perburuan lokal untuk konsumsi.",
        citationIds: ["slu-ref-yaki"],
      },
      {
        id: "slu-bio-item-02",
        category: "Fauna Endemik (Maskot Malam)",
        title: "Tarsius (Tarsius tarsier / spectrum)",
        description: "Primata seukuran kepalan tangan balita bermata bulat raksasa yang tak bisa digerakkan (sebagai kompensasinya, lehernya bisa berputar hampir 180 derajat). Spesies ini aktif di malam hari melompat antar ranting bagai ninja.",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-bio-item-03",
        category: "Fauna Laut (Fosil Hidup)",
        title: "Ikan Raja Laut (Coelacanth / Latimeria menadoensis)",
        description: "Ikan purba berumur ratusan juta tahun yang pernah dianggap punah bersama dinosaurus, secara ajaib ditemukan nelayan masih hidup berenang di palung laut dalam perairan Manado Tua/Bunaken pada tahun 1998.",
        citationIds: ["slu-ref-bunaken"],
      }
    ],
    referenceIds: ["slu-ref-yaki", "slu-ref-bunaken", "slu-ref-wbtb"],
  },

  destinations: {
    introduction: [
      {
        id: "slu-dest-01",
        content: "Pesona laut dangkal Bunaken, taman vulkanik Tomohon, dan pasar daging unik adalah magnet turis global Sulut.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    items: [
      {
        id: "slu-dest-item-01",
        category: "Taman Laut Internasional",
        title: "Taman Nasional Bunaken & Selat Lembeh",
        description: "Bunaken (Teluk Manado) menawarkan tebing karang laut (wall diving) mematikan sepanjang puluhan meter ke dasar jurang, dipenuhi koral warna-warni dan penyu raksasa. Lembeh (Bitung) adalah surga bagi penyelam 'Muck Diving' (mencari hewan kerdil nan aneh di lumpur vulkanik hitam).",
        citationIds: ["slu-ref-bunaken"],
      },
      {
        id: "slu-dest-item-02",
        category: "Wisata Dingin Vulkanik",
        title: "Danau Linow & Danau Tondano",
        description: "Terletak di dataran tinggi Tomohon. Danau Linow adalah danau vulkanik yang airnya bisa berubah tiga warna (hijau toska, biru, coklat) karena tingginya kandungan belerang. Sementara Danau Tondano adalah danau raksasa sentra perikanan air tawar Minahasa.",
        citationIds: ["slu-ref-bps"],
      },
      {
        id: "slu-dest-item-03",
        category: "Simbol Toleransi Beragama",
        title: "Bukit Kasih Kanonang",
        description: "Bukit belerang yang didaki ribuan anak tangga. Di puncaknya berjejer berdampingan lima rumah ibadah dari lima agama resmi di Indonesia (Gereja Protestan, Katolik, Masjid, Vihara, Pura) sebagai simbol keharmonisan abadi Sulut.",
        citationIds: ["slu-ref-bps"],
      },
      {
        id: "slu-dest-item-04",
        category: "Wisata Budaya & Kejutan",
        title: "Pasar Beriman Tomohon (Pasar Ekstrim)",
        description: "Pasar tradisional di Kota Tomohon yang tidak diperuntukkan bagi wisatawan berhati lemah. Di sini dijual secara terbuka berbagai jenis daging tak lazim (anjing, tikus ekor putih, ular piton, kalong, babi hutan) yang sering dimasak oleh penduduk lokal.",
        citationIds: ["slu-ref-minahasa"],
      }
    ],
    referenceIds: ["slu-ref-bunaken", "slu-ref-bps", "slu-ref-minahasa"],
  },

  stories: {
    introduction: [
      {
        id: "slu-story-01",
        content: "Keyakinan nenek moyang Minahasa bersumber dari legenda kosmik persatuan darah antara manusia, dewi alam, dan kekuatan batu-batu keramat (Watu Pinawetengan).",
        citationIds: ["slu-ref-minahasa"],
      }
    ],
    stories: [
      {
        id: "slu-story-item-01",
        title: "Legenda Toar dan Lumimuut",
        description: "Mitologi asli masyarakat Minahasa tentang asal usul suku mereka. Menceritakan sang dewi cantik utusan Tuhan (Lumimuut) yang melahirkan dewa matahari (Toar). Karena terpisah sangat lama, di kemudian hari mereka saling jatuh cinta (tanpa menyadari status ibu-anak) berkat tipu muslihat siasat alam, dan melahirkan anak-anak yang membelah diri menjadi sub-suku Minahasa (Tombulu, Tonsea, Tolour, Tountemboan).",
        citationIds: ["slu-ref-wbtb"],
      },
      {
        id: "slu-story-item-02",
        title: "Pingkan Matindas",
        description: "Legenda sejarah heroisme seorang gadis jelita asal Minahasa yang diculik oleh raja-raja Bolaang Mongondow karena kecantikannya, memicu peperangan besar antara suku Minahasa dengan Mongondow yang berujung pada kebebasan Minahasa.",
        citationIds: ["slu-ref-wbtb"],
      }
    ],
    referenceIds: ["slu-ref-minahasa", "slu-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "slu-cont-01",
        content: "Kemajuan ekonomi Sulut saat ini ditopang oleh diplomasi turisme Asia Timur (Tiongkok/Korea) dan hilirisasi industri perikanan tuna.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    economy: [
      {
        id: "slu-cont-02",
        content: "Posisi geografis Sulut (bibir Pasifik) membuat jarak tempuh pesawat ke Tiongkok Selatan, Korea, dan Jepang menjadi sangat pendek (hanya 3-4 jam). Hal ini dimanfaatkan gubernur untuk membuka penerbangan carter langsung, membanjiri Sulut dengan puluhan ribu wisman asing. Sementara Pelabuhan Bitung ditunjuk sebagai Kawasan Ekonomi Khusus (KEK) sebagai sentra pabrik pengalengan Ikan Tuna dan Kopra terbesar di kawasan timur.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    referenceIds: ["slu-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "slu-travel-01",
        content: "Sulawesi Utara menyajikan perpaduan gaya hidup urban (mall, gereja, musik keras, kafe) yang sangat meriah dan dekat dengan alam.",
        citationIds: ["slu-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "slu-travel-02",
        content: "Jika Anda Muslim dan berkunjung ke wilayah Minahasa/Tomohon, waspadailah saat memesan makanan di pesta atau restoran umum (tanyakan dengan baik apakah masakan menggunakan 'Minyak Babi' atau daging non-halal, orang lokal akan sangat memahaminya). Orang Manado sangat mementingkan penampilan rapi, wangi, dan senyuman (Biar Kalah Nasi, Asal Jangan Kalah Aksi). Pada bulan Desember (menjelang Natal), hampir setiap desa di pedalaman memutar lagu rohani Natal dengan sound system raksasa sepanjang hari.",
        citationIds: ["slu-ref-minahasa"],
      }
    ],
    referenceIds: ["slu-ref-bps", "slu-ref-minahasa"],
  },

  lastReviewedAt: "2026-07-13T00:33:00Z",
  contentStatus: "draft",
  referenceIds: [
    "slu-ref-bps",
    "slu-ref-wbtb",
    "slu-ref-minahasa",
    "slu-ref-bunaken",
    "slu-ref-yaki"
  ]
};
