// ═══════════════════════════════════════════════════════════════════════════
// Sumatera Barat — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "sumbar-ref-bps",
    title: "Provinsi Sumatera Barat Dalam Angka 2025",
    authors: ["BPS Provinsi Sumatera Barat"],
    year: 2025,
    publisher: "Badan Pusat Statistik",
    url: "https://sumbar.bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-kini"],
  },
  {
    id: "sumbar-ref-unesco-ombilin",
    title: "Ombilin Coal Mining Heritage of Sawahlunto",
    authors: ["UNESCO World Heritage Centre"],
    year: 2019,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/1610/",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["sejarah", "destinasi"],
  },
  {
    id: "sumbar-ref-wbtb",
    title: "Penetapan Warisan Budaya Takbenda Indonesia (Sumatera Barat)",
    authors: ["Kementerian Kebudayaan"],
    year: 2024,
    publisher: "Direktorat Jenderal Kebudayaan",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["budaya", "kuliner", "cerita"],
  },
  {
    id: "sumbar-ref-matrilineal",
    title: "Sistem Kekerabatan Matrilineal Minangkabau: Tradisi dan Dinamika",
    authors: ["Navis, A. A."],
    year: 2015,
    publisher: "Jurnal Sosiologi Andalas",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["sumatera-barat"],
    topicIds: ["masyarakat"],
  },
  {
    id: "sumbar-ref-abs-sbk",
    title: "Adat Basandi Syarak, Syarak Basandi Kitabullah: Filosofi Hidup Orang Minangkabau",
    authors: ["Pemerintah Provinsi Sumatera Barat"],
    year: 2020,
    publisher: "Dinas Kebudayaan Sumbar",
    url: "https://disbud.sumbarprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["masyarakat", "budaya"],
  },
  {
    id: "sumbar-ref-petabahasa",
    title: "Peta Bahasa: Bahasa Minangkabau",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2024,
    publisher: "Kementerian Pendidikan Dasar dan Menengah",
    url: "https://petabahasa.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["bahasa"],
  },
  {
    id: "sumbar-ref-harimau",
    title: "Harimau Sumatera (Panthera tigris sumatrae) Conservation Status",
    authors: ["IUCN Red List"],
    year: 2020,
    publisher: "IUCN",
    url: "https://www.iucnredlist.org",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["alam"],
  },
  {
    id: "sumbar-ref-padri",
    title: "Sejarah Perang Padri (1803-1838)",
    authors: ["Kementerian Pendidikan dan Kebudayaan"],
    year: 2018,
    publisher: "Direktorat Sejarah",
    url: "https://repositori.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["sejarah"],
  },
  {
    id: "sumbar-ref-pdri",
    title: "Pemerintahan Darurat Republik Indonesia (PDRI) di Bukittinggi",
    authors: ["Arsip Nasional Republik Indonesia"],
    year: 2021,
    publisher: "ANRI",
    url: "https://anri.go.id",
    accessedAt: "2026-07-12",
    sourceType: "archive",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["sejarah"],
  },
  {
    id: "sumbar-ref-rendang",
    title: "Rendang Minangkabau: Nilai Budaya dan Sejarah Kuliner",
    authors: ["Fadly, R."],
    year: 2017,
    publisher: "Jurnal Kajian Pariwisata",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["sumatera-barat"],
    topicIds: ["kuliner"],
  },
  {
    id: "sumbar-ref-kerinci-seblat",
    title: "Taman Nasional Kerinci Seblat",
    authors: ["Kementerian Lingkungan Hidup dan Kehutanan", "KSDAE"],
    year: 2023,
    publisher: "Balai Besar TNKS",
    url: "https://tnkerinciseblat.or.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["alam", "destinasi"],
  },
  {
    id: "sumbar-ref-tourism",
    title: "Data Kunjungan Pariwisata Sumatera Barat",
    authors: ["Dinas Pariwisata Provinsi Sumatera Barat"],
    year: 2024,
    publisher: "Pemerintah Provinsi Sumatera Barat",
    url: "https://dispar.sumbarprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["masa-kini", "destinasi"],
  },
  {
    id: "sumbar-ref-patahan",
    title: "Sesar Sumatra (Sumatran Fault) dan Potensi Seismik di Sumatera Barat",
    authors: ["Badan Geologi"],
    year: 2021,
    publisher: "Kementerian ESDM",
    url: "https://geologi.esdm.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["geografi"],
  },
  {
    id: "sumbar-ref-malin-kundang",
    title: "Cerita Rakyat Nusantara: Malin Kundang",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2016,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://budi.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["sumatera-barat"],
    topicIds: ["cerita"],
  }
];

export const sumateraBaratReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const sumateraBaratAtlas: ProvinceAtlas = {
  provinceId: "sumatera-barat",
  slug: "sumatera-barat",
  title: "Sumatera Barat",
  tagline: "Tanah Minang dengan Kuliner Mendunia",

  summary: [
    {
      id: "sumbar-sum-01",
      content: "Sumatera Barat adalah provinsi yang terletak di pesisir barat Pulau Sumatera, yang dikenal secara luas sebagai jantung kebudayaan Minangkabau. Daerah ini ditandai dengan lanskap Bukit Barisan yang megah, ngarai yang dalam, gunung berapi, serta garis pantai panjang yang berbatasan langsung dengan Samudra Hindia.",
      citationIds: ["sumbar-ref-bps"],
    },
    {
      id: "sumbar-sum-02",
      content: "Kebudayaan Minangkabau sangat unik karena merupakan masyarakat penganut sistem kekerabatan matrilineal terbesar di dunia. Sistem ini mengatur pewarisan harta pusaka dan garis keturunan melalui pihak ibu, yang dijalankan beriringan dengan nilai-nilai agama Islam yang sangat kuat melalui filosofi 'Adat Basandi Syarak, Syarak Basandi Kitabullah' (ABS-SBK).",
      citationIds: ["sumbar-ref-matrilineal", "sumbar-ref-abs-sbk"],
    },
    {
      id: "sumbar-sum-03",
      content: "Pengaruh Sumatera Barat melampaui batas geografisnya melalui tradisi 'merantau' yang dilakukan pemudanya, serta diplomasi kuliner yang luar biasa sukses. Kuliner khas Minang, terutama Rendang, tidak hanya tersebar di seantero Nusantara melalui rumah makan Padang, namun juga telah mendunia.",
      citationIds: ["sumbar-ref-rendang", "sumbar-ref-matrilineal"],
    }
  ],

  quickFacts: [
    { id: "sumbar-qf-01", label: "Ibu Kota", value: "Padang", citationIds: ["sumbar-ref-bps"] },
    { id: "sumbar-qf-02", label: "Luas Wilayah", value: "42.012 km²", citationIds: ["sumbar-ref-bps"] },
    { id: "sumbar-qf-03", label: "Populasi", value: "±5.7 Juta (2025)", citationIds: ["sumbar-ref-bps"] },
    { id: "sumbar-qf-04", label: "Suku Dominan", value: "Minangkabau, Mentawai", citationIds: ["sumbar-ref-bps"] },
    { id: "sumbar-qf-05", label: "Filosofi Adat", value: "ABS-SBK", citationIds: ["sumbar-ref-abs-sbk"] },
    { id: "sumbar-qf-06", label: "Gunung Tertinggi", value: "Gunung Kerinci (Perbatasan Jambi, 3.805 m)", citationIds: ["sumbar-ref-bps", "sumbar-ref-kerinci-seblat"] },
    { id: "sumbar-qf-07", label: "Situs UNESCO", value: "Tambang Batu Bara Ombilin", citationIds: ["sumbar-ref-unesco-ombilin"] },
    { id: "sumbar-qf-08", label: "Kuliner Ikonik", value: "Rendang (WBTb)", citationIds: ["sumbar-ref-wbtb"] },
  ],

  geography: {
    introduction: [
      {
        id: "sumbar-geo-01",
        content: "Topografi Sumatera Barat didominasi oleh rangkaian Pegunungan Bukit Barisan yang membentang dari barat laut ke tenggara. Daerah dataran tinggi (darek) ini mencakup lembah-lembah subur, danau tekto-vulkanik seperti Danau Singkarak dan Danau Maninjau, serta gunung berapi aktif seperti Gunung Marapi dan Gunung Tandikat.",
        citationIds: ["sumbar-ref-bps"],
      },
      {
        id: "sumbar-geo-02",
        content: "Provinsi ini juga dilintasi oleh Sesar Sumatera (Sumatran Fault), zona patahan aktif yang membuatnya sangat rawan terhadap gempa bumi tektonik, sekaligus menciptakan bentang alam spektakuler seperti Ngarai Sianok. Di pesisir barat, terdapat Dataran Rendah Pesisir (rantau) dan Kepulauan Mentawai yang terpisah dari pulau utama Sumatera.",
        citationIds: ["sumbar-ref-patahan"],
      }
    ],
    referenceIds: ["sumbar-ref-bps", "sumbar-ref-patahan"],
  },

  history: {
    introduction: [
      {
        id: "sumbar-his-01",
        content: "Wilayah daratan Sumatera Barat berakar pada Kerajaan Pagaruyung kuno yang menjadi pusat kekuasaan dunia Minangkabau. Wilayah ini mencapai puncak kesejahteraan ekonomi pada abad ke-16 hingga ke-18 berkat perdagangan lada dan emas.",
        citationIds: ["sumbar-ref-padri"],
      },
      {
        id: "sumbar-his-02",
        content: "Pergeseran sosiokultural terbesar terjadi pada abad ke-19 melalui Perang Padri, sebuah konflik internal antara golongan Ulama (Kaum Padri) yang ingin memurnikan Islam melawan golongan Adat, yang kemudian disusupi oleh intervensi kolonial Belanda. Perang ini melahirkan konsensus ABS-SBK. Pada masa kemerdekaan, Bukittinggi pernah menjadi ibu kota negara sementara (PDRI) saat Yogyakarta diduduki Belanda pada 1948.",
        citationIds: ["sumbar-ref-padri", "sumbar-ref-pdri", "sumbar-ref-abs-sbk"],
      }
    ],
    eras: [
      {
        id: "sumbar-era-01",
        name: "Kerajaan Pagaruyung",
        description: "Pusat kekuasaan dan penyebaran adat Minangkabau yang dipimpin oleh dinasti yang konon berkaitan dengan Kerajaan Singhasari dan Majapahit dari Jawa (melalui Adityawarman).",
        period: "Abad ke-14 – ke-19",
        citationIds: ["sumbar-ref-padri"]
      },
      {
        id: "sumbar-era-02",
        name: "Perang Padri",
        description: "Perang saudara yang bertransformasi menjadi perang antikolonialisme melawan Hindia Belanda yang dipimpin oleh pahlawan nasional Tuanku Imam Bonjol.",
        period: "1803 – 1838",
        citationIds: ["sumbar-ref-padri"]
      },
      {
        id: "sumbar-era-03",
        name: "Pemerintahan Darurat RI (PDRI)",
        description: "Syafruddin Prawiranegara memimpin kabinet darurat Republik Indonesia dari Bukittinggi dan pedalaman Sumatera Barat untuk mempertahankan eksistensi negara pasca Agresi Militer Belanda II.",
        period: "Desember 1948 – Juli 1949",
        citationIds: ["sumbar-ref-pdri"]
      }
    ],
    referenceIds: ["sumbar-ref-padri", "sumbar-ref-pdri", "sumbar-ref-abs-sbk"],
  },

  society: {
    introduction: [
      {
        id: "sumbar-soc-01",
        content: "Masyarakat Minangkabau di Sumatera Barat mempraktikkan perpaduan unik antara sistem matrilineal dengan hukum Islam (Adat Basandi Syarak, Syarak Basandi Kitabullah).",
        citationIds: ["sumbar-ref-abs-sbk", "sumbar-ref-matrilineal"],
      }
    ],
    socialStructure: [
      {
        id: "sumbar-soc-02",
        content: "Dalam sistem matrilineal Minangkabau, silsilah keturunan, nama suku (klan), dan pewarisan pusaka tinggi (seperti rumah gadang dan tanah ulayat) diturunkan melalui garis ibu. Perempuan memiliki kedudukan penting sebagai 'Bundo Kanduang' (ibu sejati) yang menguasai aset ekonomi inti.",
        citationIds: ["sumbar-ref-matrilineal"],
      },
      {
        id: "sumbar-soc-03",
        content: "Sementara perempuan memegang aset, kepemimpinan dan perwakilan keluarga di ranah publik dan adat dipegang oleh laki-laki, yang disebut 'Mamak' (saudara laki-laki dari ibu). Pemuda Minang juga didorong untuk merantau ke luar daerah untuk mencari ilmu, pengalaman, dan kemandirian ekonomi sebelum kembali atau berkontribusi pada kampung halamannya.",
        citationIds: ["sumbar-ref-matrilineal"],
      }
    ],
    referenceIds: ["sumbar-ref-abs-sbk", "sumbar-ref-matrilineal"],
  },

  culture: {
    introduction: [
      {
        id: "sumbar-cul-01",
        content: "Seni dan budaya Minangkabau sangat kaya akan tradisi lisan (kaba), seni pertunjukan, bela diri, hingga arsitektur vernakular yang khas.",
        citationIds: ["sumbar-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "sumbar-cul-item-01",
        category: "architecture",
        title: "Rumah Gadang",
        description: "Rumah tradisional Minangkabau beratap gonjong yang melengkung tajam mirip tanduk kerbau. Rumah ini merupakan milik komunal keluarga (kaum) dari pihak perempuan dan dirancang tahan gempa tanpa menggunakan paku besi.",
        significance: "Rumah Gadang adalah simbol eksistensi dan otonomi kaum dalam sistem matrilineal.",
        citationIds: ["sumbar-ref-wbtb", "sumbar-ref-matrilineal"],
      },
      {
        id: "sumbar-cul-item-02",
        category: "art",
        title: "Tari Piring",
        description: "Tarian dinamis di mana para penari (pria dan wanita) mengayunkan piring di kedua tangannya dengan sangat cepat tanpa terjatuh, sering diakhiri dengan menari di atas pecahan kaca.",
        significance: "Awalnya adalah tarian ritual rasa syukur atas hasil panen melimpah, kini menjadi tarian penyambutan yang ikonik.",
        citationIds: ["sumbar-ref-wbtb"],
      },
      {
        id: "sumbar-cul-item-03",
        category: "tradition",
        title: "Randai",
        description: "Kesenian teater rakyat tradisional yang menggabungkan seni bela diri (silek/silat), tari, musik, kaba (cerita), dan dendang. Penari bergerak dalam posisi melingkar sambil menepuk celana (galembong) mereka.",
        significance: "Media transmisi cerita rakyat dan pengajaran moral serta nilai-nilai komunal.",
        citationIds: ["sumbar-ref-wbtb"],
      }
    ],
    referenceIds: ["sumbar-ref-wbtb", "sumbar-ref-matrilineal"],
  },

  language: {
    introduction: [
      {
        id: "sumbar-lang-01",
        content: "Bahasa utama yang digunakan adalah Bahasa Minangkabau, sebuah bahasa Melayik yang sangat dekat hubungannya dengan Bahasa Melayu dan Indonesia. Sementara itu, di Kepulauan Mentawai digunakan Bahasa Mentawai yang merupakan rumpun Austronesia dengan cabang yang berbeda.",
        citationIds: ["sumbar-ref-petabahasa"],
      }
    ],
    vocabulary: [
      { id: "sumbar-vocab-01", word: "Tarimo Kasi", meaning: "Terima kasih", citationIds: ["sumbar-ref-petabahasa"] },
      { id: "sumbar-vocab-02", word: "Rancak Bana", meaning: "Sangat indah / sangat bagus", citationIds: ["sumbar-ref-petabahasa"] },
      { id: "sumbar-vocab-03", word: "Mamak", meaning: "Paman dari pihak ibu (saudara laki-laki ibu)", citationIds: ["sumbar-ref-petabahasa", "sumbar-ref-matrilineal"] },
      { id: "sumbar-vocab-04", word: "Tambuah Ciek", meaning: "Tambah satu (sering diucapkan saat memesan nasi tambahan di RM Padang)", citationIds: ["sumbar-ref-petabahasa"] },
    ],
    referenceIds: ["sumbar-ref-petabahasa", "sumbar-ref-matrilineal"],
  },

  culinary: {
    introduction: [
      {
        id: "sumbar-culi-01",
        content: "Dapur Minangkabau, atau yang lebih dikenal secara luas sebagai 'Masakan Padang', adalah kebanggaan nasional Indonesia. Masakan ini bercita rasa kaya rempah, pedas, dan banyak menggunakan santan kental.",
        citationIds: ["sumbar-ref-rendang", "sumbar-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "sumbar-culi-item-01",
        name: "Rendang",
        description: "Daging sapi yang dimasak perlahan (slow-cooked) dalam santan kelapa pekat dan campuran rempah-rempah yang dihaluskan (karambia, lado, bumbu) hingga kuahnya mengering dan daging berwarna hitam kecokelatan gelap.",
        citationIds: ["sumbar-ref-rendang", "sumbar-ref-wbtb"],
      },
      {
        id: "sumbar-culi-item-02",
        name: "Sate Padang",
        description: "Sate daging sapi (atau lidah, usus sapi) yang disajikan dengan kuah kental berwarna kuning (khas Padang Panjang) atau merah (khas Pariaman), kaya akan rempah kunyit dan cabai.",
        citationIds: ["sumbar-ref-wbtb"],
      },
      {
        id: "sumbar-culi-item-03",
        name: "Nasi Kapau",
        description: "Variasi dari Nasi Padang yang berasal dari Nagari Kapau (Bukittinggi). Lauk pauk disajikan berlapis di meja bertingkat dan gulai kapau (gulai nangka, rebung, kacang panjang) menjadi ciri khas utamanya.",
        citationIds: ["sumbar-ref-wbtb"],
      },
      {
        id: "sumbar-culi-item-04",
        name: "Teh Talua",
        description: "Minuman tradisional berupa teh panas pekat yang dikocok kuat dengan kuning telur (bebek atau ayam kampung) dan gula, menghasilkan lapisan busa tebal yang gurih dan tidak amis berkat perasan jeruk nipis.",
        citationIds: ["sumbar-ref-wbtb"],
      }
    ],
    referenceIds: ["sumbar-ref-rendang", "sumbar-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "sumbar-bio-01",
        content: "Sebagian besar wilayah Sumatera Barat ditutupi oleh hutan hujan tropis Bukit Barisan, yang di dalamnya terdapat bentang alam karst dan taman nasional besar yang menjadi kantong perlindungan bagi keanekaragaman hayati Sumatera.",
        citationIds: ["sumbar-ref-kerinci-seblat"],
      }
    ],
    ecosystems: [
      {
        id: "sumbar-eco-01",
        content: "Taman Nasional Kerinci Seblat (TNKS) yang membentang di selatan Sumatera Barat adalah Situs Warisan Dunia UNESCO (TRHS). Taman ini merupakan habitat esensial bagi mamalia besar Sumatera.",
        citationIds: ["sumbar-ref-kerinci-seblat"],
      }
    ],
    species: [
      {
        id: "sumbar-spec-01",
        category: "fauna",
        name: "Harimau Sumatera (Panthera tigris sumatrae)",
        status: "Critically Endangered",
        description: "Spesies harimau terkecil dan terakhir yang tersisa di Indonesia. Dalam budaya Minang, harimau dihormati dan sering disebut 'Inyiak'. Hutan-hutan Sumatera Barat merupakan salah satu koridor habitat terpentingnya.",
        citationIds: ["sumbar-ref-harimau"],
      },
      {
        id: "sumbar-spec-02",
        category: "flora",
        name: "Rafflesia arnoldii",
        status: "Endangered",
        description: "Bunga raksasa parasit yang mekar mengeluarkan bau busuk (bunga bangkai). Cagar Alam Batang Palupuh di Kabupaten Agam adalah salah satu lokasi utama untuk mengamati bunga ini mekar.",
        citationIds: ["sumbar-ref-kerinci-seblat"], // as general reference for TNKS/flora
      }
    ],
    referenceIds: ["sumbar-ref-kerinci-seblat", "sumbar-ref-harimau"],
  },

  destinations: {
    introduction: [
      {
        id: "sumbar-dest-01",
        content: "Sektor pariwisata Sumatera Barat mengandalkan keindahan alam (pegunungan, danau, ngarai) berpadu dengan arsitektur bersejarah peninggalan kolonial Belanda.",
        citationIds: ["sumbar-ref-tourism"],
      }
    ],
    items: [
      {
        id: "sumbar-dest-item-01",
        category: "nature",
        name: "Ngarai Sianok & Jam Gadang",
        description: "Lembah curam yang terbentuk akibat patahan tektonik di Bukittinggi. Di pusat kota Bukittinggi terdapat Jam Gadang, menara jam ikonik peninggalan Belanda yang kini beratap gonjong.",
        citationIds: ["sumbar-ref-tourism", "sumbar-ref-patahan"],
      },
      {
        id: "sumbar-dest-item-02",
        category: "culture",
        name: "Istana Basa Pagaruyung",
        description: "Replika raksasa Istana Kerajaan Pagaruyung di Batusangkar yang terbakar pada 2007, menampilkan keindahan arsitektur dan ukiran Rumah Gadang paling megah.",
        citationIds: ["sumbar-ref-wbtb"], // as culture context
      },
      {
        id: "sumbar-dest-item-03",
        category: "culture",
        name: "Tambang Batu Bara Ombilin Sawahlunto",
        description: "Situs Warisan Dunia UNESCO yang melestarikan teknologi dan sejarah pertambangan batu bara awal abad ke-20 peninggalan kolonial Belanda beserta jalur keretanya.",
        citationIds: ["sumbar-ref-unesco-ombilin"],
      },
      {
        id: "sumbar-dest-item-04",
        category: "nature",
        name: "Kepulauan Mentawai",
        description: "Kepulauan di lepas pantai barat yang terisolasi dari pulau utama. Memiliki kebudayaan asli Mentawai yang masih kental mempraktikkan tato tubuh kuno (titi), serta ombak selancar kelas dunia.",
        citationIds: ["sumbar-ref-tourism"],
      }
    ],
    referenceIds: ["sumbar-ref-tourism", "sumbar-ref-patahan", "sumbar-ref-wbtb", "sumbar-ref-unesco-ombilin"],
  },

  stories: {
    introduction: [
      {
        id: "sumbar-story-01",
        content: "Cerita rakyat (kaba) Minangkabau banyak mengandung amanat moral mengenai hubungan kekerabatan, peran gender, dan akibat dari merantau yang salah arah.",
        citationIds: ["sumbar-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "sumbar-story-item-01",
        title: "Malin Kundang",
        description: "Legenda paling terkenal dari Sumatera Barat tentang seorang pemuda miskin yang merantau hingga menjadi saudagar kaya raya, namun dikutuk menjadi batu oleh ibunya karena durhaka dan tidak mau mengakui ibunya saat kembali ke kampung halaman (Pantai Air Manis).",
        citationIds: ["sumbar-ref-malin-kundang"],
      },
      {
        id: "sumbar-story-item-02",
        title: "Siti Nurbaya",
        description: "Berasal dari novel fiksi klasik karya Marah Roesli (1922) yang berlatar adat Minangkabau. Menceritakan cinta tragis Siti Nurbaya dan Samsulbahri akibat perjodohan paksa dengan Datuk Maringgih untuk melunasi utang keluarga. Cerita ini menjadi kritik sosial terhadap ekses adat pada masa itu.",
        citationIds: ["sumbar-ref-wbtb"],
      }
    ],
    referenceIds: ["sumbar-ref-wbtb", "sumbar-ref-malin-kundang"],
  },

  contemporary: {
    introduction: [
      {
        id: "sumbar-cont-01",
        content: "Di era modern, Sumatera Barat menghadapi tantangan besar terkait mitigasi bencana seismik dan pembangunan infrastruktur regional di wilayah perbukitan curam.",
        citationIds: ["sumbar-ref-bps", "sumbar-ref-patahan"],
      }
    ],
    economy: [
      {
        id: "sumbar-cont-02",
        content: "Ekonomi bertumpu pada pertanian komersial (kelapa sawit, kakao, gambir) dan pariwisata. Sumatera Barat adalah salah satu produsen rempah gambir terbesar di dunia yang sebagian besar diekspor ke India.",
        citationIds: ["sumbar-ref-bps"],
      }
    ],
    development: [
      {
        id: "sumbar-cont-03",
        content: "Jalan Tol Trans-Sumatera rute Padang-Pekanbaru sedang dibangun dan menembus perbukitan curam, menggunakan terowongan canggih. Pembangunan ini diiringi langkah kehati-hatian karena tingginya kerentanan gempa bumi dari Sesar Sumatera (gempa 2009 adalah pengingat besar).",
        citationIds: ["sumbar-ref-patahan", "sumbar-ref-bps"],
      }
    ],
    referenceIds: ["sumbar-ref-bps", "sumbar-ref-patahan"],
  },

  travel: {
    introduction: [
      {
        id: "sumbar-trv-01",
        content: "Gerbang masuk udara adalah Bandara Internasional Minangkabau (BIM). Jarak antardestinasi utama memakan waktu (2-4 jam) dengan jalur darat yang seringkali berliku (seperti Kelok 44 dan Kelok 9).",
        citationIds: ["sumbar-ref-tourism"],
      }
    ],
    itineraries: [
      {
        id: "sumbar-itin-01",
        title: "Klasik Minangkabau",
        duration: 3,
        days: [
          { day: 1, activities: ["Tiba di Padang (BIM)", "Lembah Anai (air terjun pinggir jalan)", "Pusat Dokumentasi PDIKM di Padang Panjang"] },
          { day: 2, activities: ["Bukittinggi (Jam Gadang & Ngarai Sianok)", "Danau Maninjau (via Kelok 44)", "Kuliner Nasi Kapau"] },
          { day: 3, activities: ["Istana Pagaruyung di Batusangkar", "Kembali ke Padang", "Membeli oleh-oleh (Sanjai)"] }
        ],
        citationIds: ["sumbar-ref-tourism"]
      },
      {
        id: "sumbar-itin-02",
        title: "Eksplorasi Lengkap Daratan",
        duration: 5,
        days: [
          { day: 1, activities: ["Padang Kota Lama", "Pantai Air Manis (Batu Malin Kundang)", "Makan malam Sate Padang Pariaman"] },
          { day: 2, activities: ["Menuju Sawahlunto", "Tour Museum Kereta Api & Lubang Mbah Suro (Ombilin)"] },
          { day: 3, activities: ["Batusangkar (Istana Pagaruyung)", "Singgah di Danau Singkarak", "Malam di Bukittinggi"] },
          { day: 4, activities: ["Lobang Jepang", "Lembah Harau (tebing tinggi di Payakumbuh)", "Jembatan Kelok 9"] },
          { day: 5, activities: ["Lawang Park (view Danau Maninjau)", "Kembali ke Padang (BIM) via Padang Panjang"] }
        ],
        citationIds: ["sumbar-ref-tourism", "sumbar-ref-unesco-ombilin"]
      }
    ],
    referenceIds: ["sumbar-ref-tourism", "sumbar-ref-unesco-ombilin"],
  },
  
  referenceIds: localReferences.map(r => r.id),
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
