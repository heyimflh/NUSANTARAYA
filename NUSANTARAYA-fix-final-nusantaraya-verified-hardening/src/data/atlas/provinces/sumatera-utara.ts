import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sumateraUtaraReferences: ScientificReference[] = [
  {
    id: "smu-ref-bps",
    title: "Provinsi Sumatera Utara Dalam Angka 2024",
    authors: ["BPS Provinsi Sumatera Utara"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sumatera Utara",
    url: "https://sumut.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-utara"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "smu-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sumatera Utara",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-utara"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "smu-ref-toba-geopark",
    title: "Toba Caldera UNESCO Global Geopark",
    authors: ["UNESCO Global Geoparks"],
    year: 2020,
    publisher: "UNESCO",
    url: "https://en.unesco.org/global-geoparks/toba-caldera",
    accessedAt: "2026-07-13",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["sumatera-utara"],
    topicIds: ["geography", "destinations"],
  },
  {
    id: "smu-ref-sejarah",
    title: "Sejarah Sumatera Utara",
    authors: ["Sinar, Tengku Luckman"],
    year: 2006,
    publisher: "Dinas Kebudayaan dan Pariwisata Sumut",
    url: "https://id.wikipedia.org/wiki/Sumatera_Utara",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["sumatera-utara"],
    topicIds: ["history", "society"],
  },
  {
    id: "smu-ref-orangutan",
    title: "The Tapanuli Orangutan",
    authors: ["Nater, Alexander, et al."],
    year: 2017,
    publisher: "Current Biology",
    url: "https://www.cell.com/current-biology/fulltext/S0960-9822(17)31245-9",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["sumatera-utara"],
    topicIds: ["biodiversity"],
  }
];

export const sumateraUtaraAtlas: ProvinceAtlas = {
  provinceId: "sumatera-utara",
  slug: "sumatera-utara",
  title: "Sumatera Utara",
  tagline: "Tanah Para Raja dan Kaldera Toba",
  summary: [
    {
      id: "smu-sum-01",
      content: "Sumatera Utara adalah provinsi multikultural yang kaya, dibentuk oleh epik geologi raksasa—letusan supervulkan purba yang melahirkan Danau Toba. Provinsi ini mempertemukan kemegahan Kesultanan Melayu Deli di pesisir timur yang sarat sejarah perkebunan dengan ketangguhan masyarakat adat Batak di dataran tinggi, serta eksotisme budaya megalitik Pulau Nias di samudra lepas.",
      citationIds: ["smu-ref-bps", "smu-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "smu-qf-01", label: "Ibu Kota", value: "Medan", citationIds: ["smu-ref-bps"] },
    { id: "smu-qf-02", label: "Luas Wilayah", value: "72.981,23 km²", citationIds: ["smu-ref-bps"], dataYear: 2024 },
    { id: "smu-qf-03", label: "Populasi", value: "15.388.948 jiwa", citationIds: ["smu-ref-bps"], dataYear: 2023 },
    { id: "smu-qf-04", label: "Suku Utama", value: "Batak, Melayu, Jawa, Nias", citationIds: ["smu-ref-sejarah"] },
    { id: "smu-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["smu-ref-bps"] },
    { id: "smu-qf-06", label: "Gubernur", value: "Hassanudin (Pj.)", citationIds: ["smu-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "smu-geo-01",
        content: "Bentang alam Sumatera Utara merupakan perpaduan antara pesisir timur yang landai dan berawa di Selat Malaka, dataran tinggi vulkanik Bukit Barisan di tengah, dan pesisir barat yang terjal menghadap Samudra Hindia.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "smu-geo-02",
        content: "Ciri geografis paling ikonik adalah Kaldera Toba (Danau Toba), danau vulkanik terbesar di dunia yang ditengahnya terdapat Pulau Samosir (pulau di dalam pulau). Dataran tinggi Karo (Berastagi) diapit oleh dua gunung berapi aktif: Sinabung dan Sibayak. Di barat daya, terpisah oleh selat, terdapat Pulau Nias yang terkenal dengan ombak ekstremnya.",
        citationIds: ["smu-ref-toba-geopark"],
      }
    ],
    referenceIds: ["smu-ref-bps", "smu-ref-toba-geopark"],
  },

  history: {
    introduction: [
      {
        id: "smu-his-01",
        content: "Sejarah Sumatera Utara adalah tentang kerajaan-kerajaan kuno, migrasi bangsa-bangsa, perlawanan gigih Sisingamangaraja melawan kolonial, dan era perkebunan Deli yang mengubah Medan menjadi 'Paris van Sumatera'.",
        citationIds: ["smu-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "smu-era-01",
        period: "Abad ke-13 – 16 M",
        title: "Kerajaan Aru (Haru)",
        description: "Salah satu kerajaan tertua di Sumatera Timur yang merupakan saingan kuat Kesultanan Aceh dan Kesultanan Melaka. Mayoritas warganya merupakan cikal bakal orang Karo dan Simalungun pesisir.",
        citationIds: ["smu-ref-sejarah"],
      },
      {
        id: "smu-era-02",
        period: "1863",
        title: "Perkebunan Tembakau Deli",
        description: "Jacobus Nienhuys membuka perkebunan tembakau Deli pertama dengan izin Kesultanan Deli. Kualitas cerutu Deli sangat mendunia (diburu di pasar Eropa), mendorong migrasi massal kuli kontrak Tionghoa dan Jawa (Pujakesuma) ke Sumatera Utara.",
        citationIds: ["smu-ref-sejarah"],
      },
      {
        id: "smu-era-03",
        period: "1878 – 1907",
        title: "Perang Batak",
        description: "Perang panjang antara masyarakat Batak Toba yang dipimpin oleh Raja Sisingamangaraja XII melawan penetrasi militer dan misionaris Belanda. Perang berakhir saat sang raja gugur di Dairi pada 1907.",
        citationIds: ["smu-ref-sejarah"],
      },
      {
        id: "smu-era-04",
        period: "15 April 1948",
        title: "Pembentukan Provinsi",
        description: "Sumatera Utara resmi berdiri sebagai provinsi dalam Republik Indonesia, menyatukan karesidenan Tapanuli, Sumatera Timur, dan Nias.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    referenceIds: ["smu-ref-sejarah", "smu-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "smu-soc-01",
        content: "Masyarakat Sumatera Utara sangat plural dan egaliter. Interaksi berbagai suku membuat masyarakatnya terkenal dengan karakter lugas, bersuara keras, dan sangat mengedepankan sistem kekerabatan marga.",
        citationIds: ["smu-ref-sejarah"],
      }
    ],
    socialStructure: [
      {
        id: "smu-soc-02",
        content: "Etnis Batak (terdiri dari sub-etnis Toba, Karo, Simalungun, Mandailing, Pakpak, Angkola) memegang falsafah 'Dalihan Na Tolu' (Tungku Nan Tiga), sebuah sistem kekerabatan yang mengatur struktur sosial (Hula-hula/pihak istri, Dongan Tubu/semarga, Boru/pihak suami) agar selalu harmonis. Suku Melayu mendiami pesisir timur (Langkat, Deli, Serdang, Asahan). Suku Nias (Ono Niha) memiliki kebudayaan megalitik purba yang mandiri.",
        citationIds: ["smu-ref-sejarah"],
      }
    ],
    referenceIds: ["smu-ref-sejarah"],
  },

  culture: {
    introduction: [
      {
        id: "smu-cul-01",
        content: "Setiap sub-etnis di Sumatera Utara memiliki instrumen, tari, dan kain sakralnya masing-masing yang sangat dipertahankan hingga kini.",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "smu-cul-item-01",
        category: "Kriya Tekstil (Batak)",
        title: "Ulos",
        description: "Kain tenun sakral masyarakat Batak berbentuk selendang. Ulos wajib disematkan (Mangulosi) dalam setiap peristiwa penting kehidupan (kelahiran, pernikahan, duka cita) sebagai simbol penyaluran kehangatan, berkat, dan kasih sayang.",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-cul-item-02",
        category: "Seni Pertunjukan Tari",
        title: "Tari Tor-Tor",
        description: "Tarian seremonial suku Batak yang diiringi gondang (ansambel gendang). Penari (panortor) bergerak dengan mengatupkan kedua telapak tangan secara ritmis ke atas dan ke bawah.",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-cul-item-03",
        category: "Ritual Pemakaman Unik",
        title: "Sigale-gale",
        description: "Boneka kayu (seukuran manusia) dari Toba yang dapat menari secara magis (atau digerakkan dengan tali). Konon dibuat pertama kali oleh seorang raja untuk mengobati kerinduannya pada putra tunggalnya yang tewas di medan perang (Manggale).",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-cul-item-04",
        category: "Olahraga Tradisional (Nias)",
        title: "Fahombo (Lompat Batu)",
        description: "Tradisi suku Nias di mana pemuda desa harus melompati susunan batu setinggi 2 meter tanpa menyentuhnya. Jika berhasil, pemuda tersebut dianggap sudah dewasa dan siap menjadi prajurit perang.",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    referenceIds: ["smu-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "smu-lang-01",
        content: "Terdapat banyak rumpun bahasa di provinsi ini (Batak Toba, Karo, Mandailing, Nias, Melayu Deli). Namun, di ibu kota Medan, masyarakat berkomunikasi menggunakan Bahasa Indonesia dialek Medan (Melayu pasar) yang sangat khas.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "smu-voc-01", word: "Horas", meaning: "Salam khas Batak Toba/Simalungun/Mandailing untuk menyapa, berpisah, atau bersyukur.", citationIds: ["smu-ref-sejarah"] },
      { id: "smu-voc-02", word: "Mejuah-juah / Njuah-juah", meaning: "Salam khas Batak Karo / Pakpak (semakna dengan Horas).", citationIds: ["smu-ref-sejarah"] },
      { id: "smu-voc-03", word: "Kereta", meaning: "Sepeda Motor (Dialek Medan).", citationIds: ["smu-ref-bps"] },
      { id: "smu-voc-04", word: "Awak", meaning: "Saya / Kita (Dialek Medan).", citationIds: ["smu-ref-bps"] },
    ],
    referenceIds: ["smu-ref-bps", "smu-ref-sejarah"],
  },

  culinary: {
    introduction: [
      {
        id: "smu-culi-01",
        content: "Kuliner Sumatera Utara memadukan bumbu khas Batak (andaliman/merica batak) yang memberikan sensasi kebas di lidah (mati rasa ringan), dengan santan Melayu dan pengaruh oriental Tionghoa-Medan.",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "smu-culi-item-01",
        title: "Arsik (Ikan Mas)",
        description: "Sajian ikonik Batak Toba. Ikan mas (yang sisiknya tidak dibuang) dimasak lama hingga kuahnya kering (diarsik) menggunakan bumbu andaliman, asam cikala, dan bunga kecombrang. Wajib ada dalam upacara adat marga.",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-culi-item-02",
        title: "Bika Ambon",
        description: "Kue manis berwarna kuning dengan tekstur bersarang lebah dan aroma pandan/daun jeruk. Anehnya, kue ini murni kuliner khas Medan (Sumatera Utara), bukan berasal dari Ambon (Maluku). Namanya diambil dari lokasi penjualan pertamanya di Jalan Ambon, Medan.",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-culi-item-03",
        title: "Saksang",
        description: "Hidangan daging (umumnya babi, anjing, atau kerbau) yang dicacah kecil dan dimasak pedas menggunakan andaliman serta darah hewan tersebut (atau santan bumbu untuk versi halalnya).",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-culi-item-04",
        title: "Lontong Medan",
        description: "Lontong sayur dengan kondimen yang sangat kaya: sayur nangka/labu, tauco udang, telur balado, teri medan kacang, mie lidi, dan kerupuk merah.",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    referenceIds: ["smu-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "smu-bio-01",
        content: "Rimba Sumatera Utara, khususnya di lanskap Tapanuli dan Taman Nasional Gunung Leuser (berbatasan dengan Aceh), menyimpan keragaman satwa endemik purba yang tidak ditemukan di belahan bumi lain.",
        citationIds: ["smu-ref-orangutan"],
      }
    ],
    species: [
      {
        id: "smu-bio-item-01",
        category: "Fauna Darat (Kera Besar Endemik)",
        title: "Orangutan Tapanuli (Pongo tapanuliensis)",
        description: "Spesies orangutan ketiga (ditemukan tahun 2017) yang hidup eksklusif di Hutan Batang Toru. Sangat langka (kurang dari 800 individu), rambutnya lebih keriting dibandingkan Orangutan Sumatera/Kalimantan.",
        citationIds: ["smu-ref-orangutan"],
      },
      {
        id: "smu-bio-item-02",
        category: "Fauna Primata",
        title: "Kedih (Presbytis thomasi)",
        description: "Primata berpenampilan khas seperti menggunakan mahkota (jambul rambut di kepalanya) berwarna abu-abu gelap, sering bersuara ribut melompat di pepohonan tinggi. Endemik Sumatera Utara bagian utara.",
        citationIds: ["smu-ref-bps"],
      },
      {
        id: "smu-bio-item-03",
        category: "Flora Maskot",
        title: "Bunga Kenanga (Cananga odorata)",
        description: "Maskot flora provinsi, bunganya kuning kehijauan dengan aroma harum menyengat. Minyak atsiri kenanga (ylang-ylang) sering disuling dan diekspor untuk bahan baku parfum mahal.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    referenceIds: ["smu-ref-orangutan", "smu-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "smu-dest-01",
        content: "Pariwisata provinsi ini menonjolkan keajaiban geologis Danau Toba, warisan arsitektur Melayu/Kolonial, dan surga peselancar di Nias.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    items: [
      {
        id: "smu-dest-item-01",
        category: "Keajaiban Geologi",
        title: "Danau Toba & Pulau Samosir",
        description: "Danau kawah letusan gunung api terbesar di bumi. Wisatawan dapat menyeberang ke Pulau Samosir (di tengah danau) untuk melihat perkampungan tradisional Batak (Desa Tomok, Ambarita) dan situs kursi batu persidangan Raja Siallagan.",
        citationIds: ["smu-ref-toba-geopark"],
      },
      {
        id: "smu-dest-item-02",
        category: "Sejarah & Arsitektur (Medan)",
        title: "Istana Maimun & Masjid Raya Al-Mashun",
        description: "Istana megah Kesultanan Deli beraliran campuran Melayu, Islam, Spanyol, dan Italia yang didominasi warna kuning khas Melayu. Di dekatnya terdapat Masjid Raya Al-Mashun yang dirancang oleh arsitek Belanda dengan kemegahan Moorish.",
        citationIds: ["smu-ref-sejarah"],
      },
      {
        id: "smu-dest-item-03",
        category: "Alam Pegunungan",
        title: "Berastagi & Air Terjun Sipiso-piso",
        description: "Berastagi adalah kota wisata sejuk (mirip Puncak di Jawa) yang terkenal dengan kebun markisa/jeruk dan pemandangan Gunung Sinabung. Sipiso-piso adalah air terjun setinggi 120 meter yang airnya mengucur tajam layaknya pisau membelah bukit menuju tepian Danau Toba.",
        citationIds: ["smu-ref-bps"],
      },
      {
        id: "smu-dest-item-04",
        category: "Alam & Olahraga Bahari",
        title: "Pantai Sorake & Lagundri (Nias)",
        description: "Terletak di Nias Selatan, pantai ini memilki gulungan ombak sempurna (right hander breaker) setinggi 3-5 meter yang konstan, menjadikannya masuk dalam 10 besar spot surfing (selancar) terbaik di dunia.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    referenceIds: ["smu-ref-bps", "smu-ref-toba-geopark", "smu-ref-sejarah"],
  },

  stories: {
    introduction: [
      {
        id: "smu-story-01",
        content: "Banyak mitologi Batak menceritakan tentang penciptaan dunia dari langit serta kisah-kisah anak durhaka atau melanggar sumpah.",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "smu-story-item-01",
        title: "Legenda Danau Toba",
        description: "Kisah Toba, pemuda yang menikahi wanita cantik jelmaan ikan mas. Dengan syarat pantangan: Toba tak boleh mengungkit asal-usul istrinya (ikan). Ketika Toba marah dan mengumpat anaknya (Samosir) sebagai 'anak ikan', sang istri menangis hingga memunculkan mata air raksasa yang menenggelamkan lembah tersebut (Danau Toba), dan Samosir menyelamatkan diri ke pulau di tengahnya.",
        citationIds: ["smu-ref-wbtb"],
      },
      {
        id: "smu-story-item-02",
        title: "Si Boru Deak Parujar",
        description: "Mitologi penciptaan bumi (Banua Tonga) dalam kosmologi Batak, di mana putri kayangan turun ke lautan bawah dengan segenggam tanah, dan dengan bantuan hewan-hewan menenun tanah tersebut hingga menjadi Pulau Sumatera (atau bumi itu sendiri).",
        citationIds: ["smu-ref-wbtb"],
      }
    ],
    referenceIds: ["smu-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "smu-cont-01",
        content: "Medan (sebagai ibu kota provinsi) telah memantapkan diri sebagai pusat bisnis dan metropolitan terbesar ketiga di Indonesia (setelah Jakarta dan Surabaya) di luar Pulau Jawa.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    economy: [
      {
        id: "smu-cont-02",
        content: "Sumatera Utara mendominasi ekspor kelapa sawit (CPO) dan karet nasional melalui Kawasan Ekonomi Khusus (KEK) Sei Mangkei dan Pelabuhan Belawan. Danau Toba saat ini dimasukkan pemerintah sebagai 'Destinasi Pariwisata Super Prioritas' dengan perbaikan jalan, bandara (Silangit), dan pelabuhan feri.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    referenceIds: ["smu-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "smu-travel-01",
        content: "Perjalanan di Sumatera Utara menawarkan nuansa keberagaman yang pekat. Suara keras orang Batak/Medan bukanlah ekspresi marah, melainkan memang logat aslinya.",
        citationIds: ["smu-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "smu-travel-02",
        content: "Bagi wisatawan Muslim yang berkunjung ke daerah pegunungan Tapanuli atau Nias (yang mayoritas penduduknya beragama Kristen), telitilah sebelum makan (tanyakan menu daging karena olahan babi atau saksang dan BPK/Babi Panggang Karo sangat umum). Menawar barang di pasar (seperti Pajak Ikan/Pajak Melati) memerlukan kemampuan 'keras' layaknya warga lokal, namun usahakan dengan senyuman. Panggil pria dewasa dengan 'Lae' (untuk teman sebaya/akrab) atau 'Tulang/Amang' untuk yang dituakan.",
        citationIds: ["smu-ref-sejarah"],
      }
    ],
    referenceIds: ["smu-ref-bps", "smu-ref-sejarah"],
  },

  lastReviewedAt: "2026-07-13T00:03:00Z",
  contentStatus: "draft",
  referenceIds: [
    "smu-ref-bps",
    "smu-ref-wbtb",
    "smu-ref-toba-geopark",
    "smu-ref-sejarah",
    "smu-ref-orangutan"
  ]
};
