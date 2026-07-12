// ═══════════════════════════════════════════════════════════════════════════
// Bali — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "bali-ref-bps",
    title: "Provinsi Bali Dalam Angka 2025",
    authors: ["BPS Provinsi Bali"],
    year: 2025,
    publisher: "Badan Pusat Statistik",
    url: "https://bali.bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-kini"],
  },
  {
    id: "bali-ref-unesco-subak",
    title: "Cultural Landscape of Bali Province: the Subak System as a Manifestation of the Tri Hita Karana Philosophy",
    authors: ["UNESCO World Heritage Centre"],
    year: 2012,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/1194/",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["budaya", "alam", "masyarakat"],
  },
  {
    id: "bali-ref-kemdikbud-wbtb",
    title: "Penetapan Warisan Budaya Takbenda Indonesia (Provinsi Bali)",
    authors: ["Kementerian Kebudayaan"],
    year: 2024,
    publisher: "Direktorat Jenderal Kebudayaan",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["budaya", "kuliner"],
  },
  {
    id: "bali-ref-petabahasa",
    title: "Peta Bahasa: Bahasa Bali",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2024,
    publisher: "Kementerian Pendidikan Dasar dan Menengah",
    url: "https://petabahasa.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["bahasa"],
  },
  {
    id: "bali-ref-tnbb",
    title: "Profil Taman Nasional Bali Barat",
    authors: ["Kementerian Lingkungan Hidup dan Kehutanan", "KSDAE"],
    year: 2023,
    publisher: "Balai Taman Nasional Bali Barat",
    url: "https://tnbalibarat.menlhk.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["alam", "destinasi"],
  },
  {
    id: "bali-ref-iucn-jalak",
    title: "Bali Starling (Leucopsar rothschildi) - Red List of Threatened Species",
    authors: ["IUCN"],
    year: 2018,
    publisher: "IUCN Red List",
    url: "https://www.iucnredlist.org/species/22710912/129874226",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["alam"],
  },
  {
    id: "bali-ref-disparda",
    title: "Statistik Kunjungan Wisatawan Mancanegara dan Nusantara ke Bali",
    authors: ["Dinas Pariwisata Provinsi Bali"],
    year: 2025,
    publisher: "Pemerintah Provinsi Bali",
    url: "https://disparda.baliprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["masa-kini", "destinasi"],
  },
  {
    id: "bali-ref-batur-geopark",
    title: "Batur UNESCO Global Geopark",
    authors: ["UNESCO"],
    year: 2012,
    publisher: "UNESCO Global Geoparks",
    url: "https://en.unesco.org/global-geoparks/batur",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["alam", "geografi", "destinasi"],
  },
  {
    id: "bali-ref-sejarah-bali",
    title: "Sejarah Bali: Dari Masa Prasejarah Hingga Modern",
    authors: ["Agung, A. A. G."],
    year: 2018,
    publisher: "Yayasan Pustaka Nusantara",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["sejarah"],
  },
  {
    id: "bali-ref-desa-adat",
    title: "Peraturan Daerah Provinsi Bali Nomor 4 Tahun 2019 tentang Desa Adat di Bali",
    authors: ["Pemerintah Provinsi Bali"],
    year: 2019,
    publisher: "JDIH Provinsi Bali",
    url: "https://jdih.baliprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "regulation",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["masyarakat"],
  },
  {
    id: "bali-ref-subak-journal",
    title: "Dinamika Subak di Tengah Arus Pariwisata dan Alih Fungsi Lahan",
    authors: ["Windia, W."],
    year: 2020,
    publisher: "Jurnal Kajian Bali (Journal of Bali Studies)",
    url: "https://ojs.unud.ac.id/index.php/kajianbali",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["masyarakat", "masa-kini"],
  },
  {
    id: "bali-ref-awig-awig",
    title: "Awig-Awig Desa Adat sebagai Sumber Hukum Adat di Bali",
    authors: ["Sirtha, I Nyoman"],
    year: 2015,
    publisher: "Jurnal Hukum Udayana",
    url: "https://ojs.unud.ac.id/index.php/jum/article/view/14352",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["masyarakat"],
  },
  {
    id: "bali-ref-kuliner",
    title: "Eksplorasi Kuliner Tradisional Bali: Babi Guling dan Ayam Betutu",
    authors: ["Suadnyana, I.B.P."],
    year: 2021,
    publisher: "Jurnal Pariwisata Budaya",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["kuliner"],
  },
  {
    id: "bali-ref-prasasti",
    title: "Prasasti Blanjong: Bukti Hubungan Internasional Bali Kuno",
    authors: ["Balai Pelestarian Cagar Budaya Bali"],
    year: 2019,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://kebudayaan.kemdikbud.go.id/bpcbbali/prasasti-blanjong",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["sejarah"],
  },
  {
    id: "bali-ref-tari",
    title: "Tari Bali: Filosofi dan Gerak",
    authors: ["Bandem, I Made"],
    year: 2017,
    publisher: "ISI Denpasar Press",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["budaya"],
  },
  {
    id: "bali-ref-arsitektur",
    title: "Asta Kosala Kosali: Pedoman Arsitektur Tradisional Bali",
    authors: ["Gelebet, I Nyoman"],
    year: 2016,
    publisher: "Universitas Udayana",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["budaya"],
  },
  {
    id: "bali-ref-kopi",
    title: "Indikasi Geografis Kopi Arabika Kintamani Bali",
    authors: ["Direktorat Jenderal Kekayaan Intelektual"],
    year: 2008,
    publisher: "Kementerian Hukum dan HAM RI",
    url: "https://dgip.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["kuliner", "alam"],
  },
  {
    id: "bali-ref-pariwisata-berkelanjutan",
    title: "Tantangan Pariwisata Berkelanjutan di Bali Pasca Pandemi",
    authors: ["Darba, I Wayan"],
    year: 2023,
    publisher: "Jurnal Pembangunan Wilayah dan Perencanaan Partisipatif",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["masa-kini"],
  },
  {
    id: "bali-ref-pura-besakih",
    title: "Pura Besakih: Pusat Spiritual Umat Hindu di Bali",
    authors: ["Kementerian Agama Provinsi Bali"],
    year: 2022,
    publisher: "Kemenag RI",
    url: "https://bali.kemenag.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["budaya", "destinasi"],
  },
  {
    id: "bali-ref-subak",
    title: "Subak",
    authors: ["Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi"],
    year: 2024,
    publisher: "Warisan Budaya Takbenda Indonesia",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["bali"],
    topicIds: ["budaya", "masyarakat"],
  },
  {
    id: "bali-ref-majapahit",
    title: "Ekspansi Majapahit ke Bali dan Pengaruhnya terhadap Struktur Masyarakat",
    authors: ["Sutaba, I Made"],
    year: 2012,
    publisher: "Jurnal Sejarah",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["sejarah"],
  },
  {
    id: "bali-ref-aksara",
    title: "Pelestarian Aksara Bali di Era Digital",
    authors: ["Pemerintah Provinsi Bali"],
    year: 2021,
    publisher: "Dinas Kebudayaan Provinsi Bali",
    url: "https://disbud.baliprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "B",
    provinceIds: ["bali"],
    topicIds: ["bahasa", "budaya"],
  }
];

export const baliReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const baliAtlas: ProvinceAtlas = {
  provinceId: "bali",
  slug: "bali",
  title: "Bali",
  tagline: "Pulau Dewata yang Magis",

  summary: [
    {
      id: "bali-sum-01",
      content: "Bali adalah sebuah provinsi di Indonesia yang letaknya berada di antara Pulau Jawa dan Pulau Lombok. Dikenal di seluruh dunia sebagai 'Pulau Dewata', Bali memadukan keindahan bentang alam yang memukau—mulai dari gunung berapi aktif, danau kawah, hingga pantai berpasir putih—dengan kebudayaan Hindu Bali yang sangat kental dan hidup dalam keseharian masyarakatnya.",
      citationIds: ["bali-ref-bps"],
    },
    {
      id: "bali-sum-02",
      content: "Jantung kebudayaan Bali terletak pada filosofi Tri Hita Karana, yang menekankan harmoni antara manusia dengan Tuhan, sesama manusia, dan alam lingkungan. Filosofi ini mewujud nyata dalam sistem pengairan tradisional Subak, yang telah diakui sebagai Warisan Dunia oleh UNESCO, serta dalam arsitektur, seni tari, dan upacara keagamaan yang menjadi daya tarik pariwisata kelas dunia.",
      citationIds: ["bali-ref-unesco-subak", "bali-ref-arsitektur"],
    },
    {
      id: "bali-sum-03",
      content: "Saat ini, Bali terus beradaptasi dengan modernitas dan arus pariwisata global. Walaupun sektor pariwisata menjadi penggerak utama ekonomi provinsi ini, masyarakat adat melalui desa adat (pakraman) dan awig-awig (hukum adat) tetap memegang kendali kuat dalam melestarikan nilai-nilai tradisi dan menjaga keseimbangan sosial-ekologis pulau ini.",
      citationIds: ["bali-ref-desa-adat", "bali-ref-disparda"],
    }
  ],

  quickFacts: [
    { id: "bali-qf-01", label: "Ibu Kota", value: "Denpasar", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-02", label: "Luas Wilayah", value: "5.780 km²", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-03", label: "Populasi", value: "±4.36 Juta (2025)", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-04", label: "Agama Mayoritas", value: "Hindu (86%)", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-05", label: "Suku Mayoritas", value: "Bali", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-06", label: "Gunung Tertinggi", value: "Gunung Agung (3.142 m)", citationIds: ["bali-ref-bps"] },
    { id: "bali-qf-07", label: "Situs UNESCO", value: "Subak (Cultural Landscape)", citationIds: ["bali-ref-unesco-subak"] },
    { id: "bali-qf-08", label: "Geopark UNESCO", value: "Batur Global Geopark", citationIds: ["bali-ref-batur-geopark"] },
  ],

  geography: {
    introduction: [
      {
        id: "bali-geo-01",
        content: "Pulau Bali terbagi secara asimetris oleh rangkaian pegunungan berapi yang memanjang dari barat ke timur. Di bagian tengah hingga timur terdapat gunung berapi aktif seperti Gunung Batur dan Gunung Agung, yang merupakan titik tertinggi di Bali. Rangkaian pegunungan ini membagi Bali menjadi dataran rendah utara yang sempit dan kering, serta dataran rendah selatan yang luas, landai, dan subur berkat aliran sungai yang berhulu di pegunungan tengah.",
        citationIds: ["bali-ref-bps", "bali-ref-batur-geopark"],
      },
      {
        id: "bali-geo-02",
        content: "Kondisi vulkanis ini menjadikan tanah di kawasan tengah dan selatan sangat subur, yang sangat mendukung sistem pertanian lahan basah (sawah) yang mendominasi lanskap Bali. Selain pulau utama, Provinsi Bali juga mencakup beberapa pulau kecil di sebelah tenggara, yaitu Nusa Penida, Nusa Lembongan, dan Nusa Ceningan, yang memiliki karakteristik topografi karst (kapur) dan iklim yang lebih kering.",
        citationIds: ["bali-ref-bps"],
      }
    ],
    referenceIds: ["bali-ref-bps", "bali-ref-batur-geopark"],
  },

  history: {
    introduction: [
      {
        id: "bali-his-01",
        content: "Sejarah Bali terentang sejak masa prasejarah, melewati masa kerajaan Hindu-Buddha awal, hegemoni Majapahit, era kerajaan-kerajaan independen (seperti Gelgel dan Klungkung), hingga masa kolonial Belanda dan kemerdekaan. Prasasti Blanjong (914 M) peninggalan Sri Kesari Warmadewa menjadi salah satu bukti tertulis tertua yang menunjukkan corak awal peradaban Hindu-Buddha yang berpadu dengan tradisi Austronesia lokal.",
        citationIds: ["bali-ref-sejarah-bali", "bali-ref-prasasti"],
      },
      {
        id: "bali-his-02",
        content: "Pada abad ke-14, invasi Majapahit yang dipimpin Gajah Mada mengintegrasikan Bali ke dalam mandala Majapahit. Migrasi besar-besaran elit Jawa, pendeta, dan seniman ke Bali (terutama setelah keruntuhan Majapahit) membawa pengaruh besar yang melahirkan kebudayaan 'Bali-Hindu' klasik yang kita kenal saat ini, mencakup sistem kasta, sastra, arsitektur, dan upacara yang megah.",
        citationIds: ["bali-ref-majapahit"],
      }
    ],
    eras: [
      {
        id: "bali-era-01",
        name: "Kerajaan Bali Kuno",
        description: "Ditandai dengan dinasti Warmadewa dan peninggalan Prasasti Blanjong. Periode ini meletakkan dasar perpaduan agama Hindu-Buddha dengan kepercayaan lokal.",
        period: "Abad ke-8 – ke-14",
        citationIds: ["bali-ref-sejarah-bali", "bali-ref-prasasti"]
      },
      {
        id: "bali-era-02",
        name: "Era Majapahit & Gelgel",
        description: "Invasi Majapahit disusul oleh masa keemasan Kerajaan Gelgel di bawah Dalem Waturenggong. Seni, sastra, dan arsitektur mencapai puncak perkembangannya.",
        period: "Abad ke-14 – ke-17",
        citationIds: ["bali-ref-majapahit"]
      },
      {
        id: "bali-era-03",
        name: "Perang Puputan",
        description: "Intervensi militer Belanda memicu perlawanan heroik (Puputan) dari kerajaan-kerajaan lokal seperti Buleleng, Badung, dan Klungkung, sebelum akhirnya Bali sepenuhnya dikuasai Belanda pada 1908.",
        period: "1846 – 1908",
        citationIds: ["bali-ref-sejarah-bali"]
      }
    ],
    referenceIds: ["bali-ref-sejarah-bali", "bali-ref-prasasti", "bali-ref-majapahit"],
  },

  society: {
    introduction: [
      {
        id: "bali-soc-01",
        content: "Masyarakat Bali dikenal dengan ikatan komunalnya yang sangat kuat, yang terstruktur dalam dua sistem utama: sistem administratif pemerintahan dinas dan sistem adat (Desa Adat/Pakraman). Kehidupan sosial, budaya, dan keagamaan diatur oleh hukum adat (Awig-awig) yang dipatuhi secara ketat demi menjaga harmoni kosmis.",
        citationIds: ["bali-ref-desa-adat", "bali-ref-awig-awig"],
      }
    ],
    socialStructure: [
      {
        id: "bali-soc-02",
        content: "Desa Adat adalah pilar utama masyarakat Bali, memiliki wilayah, kekayaan, dan otoritas tersendiri untuk mengurus ritual (Panca Yadnya) dan tatanan sosial. Di dalam Desa Adat terdapat Banjar (unit komunitas yang lebih kecil) dan Sekaa (perkumpulan berdasarkan fungsi, seperti Sekaa Teruna untuk pemuda atau Sekaa Gong untuk seni karawitan).",
        citationIds: ["bali-ref-desa-adat"],
      },
      {
        id: "bali-soc-03",
        content: "Organisasi sosio-agraris yang sangat terkenal adalah Subak. Subak bukan sekadar sistem irigasi, melainkan sebuah institusi yang otonom dan egaliter, yang mengatur pembagian air, jadwal tanam, dan ritual pertanian di satu kawasan daerah aliran sungai, berlandaskan filosofi Tri Hita Karana.",
        citationIds: ["bali-ref-unesco-subak", "bali-ref-subak", "bali-ref-subak-journal"],
      }
    ],
    referenceIds: ["bali-ref-desa-adat", "bali-ref-awig-awig", "bali-ref-unesco-subak", "bali-ref-subak", "bali-ref-subak-journal"],
  },

  culture: {
    introduction: [
      {
        id: "bali-cul-01",
        content: "Kebudayaan Bali adalah manifestasi visual dan spasial dari agama Hindu Dharma. Seni tidak dipisahkan dari ibadah; tarian, ukiran, dan persembahan (banten) adalah bentuk yadnya (korban suci) kepada para dewa.",
        citationIds: ["bali-ref-tari", "bali-ref-arsitektur"],
      }
    ],
    items: [
      {
        id: "bali-cul-item-01",
        category: "art",
        title: "Tari Kecak",
        description: "Tarian dramatik yang menceritakan epos Ramayana, dibawakan oleh puluhan laki-laki bertelanjang dada yang duduk melingkar sambil menyerukan paduan suara ritmis 'cak-cak-cak', tanpa iringan alat musik.",
        significance: "Kecak merupakan hasil inovasi seni pada 1930-an yang memadukan tradisi Sanghyang dengan sendratari, kini menjadi salah satu ikon pariwisata budaya terkuat di Bali.",
        citationIds: ["bali-ref-kemdikbud-wbtb", "bali-ref-tari"],
      },
      {
        id: "bali-cul-item-02",
        category: "architecture",
        title: "Asta Kosala Kosali",
        description: "Pedoman tata ruang dan arsitektur tradisional Bali yang mengatur proporsi, letak bangunan, dan orientasi (kaja-kelod, kangin-kauh) berdasarkan anatomi tubuh manusia dan kosmologi.",
        significance: "Menjadikan setiap pekarangan rumah tradisional Bali (natah) memiliki pola seragam yang terdiri dari tempat suci (merajan), tempat tidur (bale), dapur (paon), dan lumbung (jineng).",
        citationIds: ["bali-ref-arsitektur"],
      },
      {
        id: "bali-cul-item-03",
        category: "tradition",
        title: "Ngaben",
        description: "Upacara kremasi atau pembakaran jenazah umat Hindu di Bali. Jenazah diletakkan di dalam wadah berbentuk lembu atau menara yang dihias megah (bade), lalu diarak menuju setra (kuburan) sebelum dibakar.",
        significance: "Upacara ini bertujuan untuk membebaskan jiwa dari ikatan duniawi dan mengembalikan unsur Panca Maha Bhuta (lima unsur alam) pembentuk tubuh fisik kembali ke alam.",
        citationIds: ["bali-ref-kemdikbud-wbtb"],
      }
    ],
    referenceIds: ["bali-ref-tari", "bali-ref-arsitektur", "bali-ref-kemdikbud-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "bali-lang-01",
        content: "Bahasa Bali adalah bahasa ibu bagi mayoritas penduduk. Bahasa ini memiliki sistem tingkatan tutur (anggah-ungguh basa) yang sangat kompleks, mirip dengan bahasa Jawa, yang terdiri dari bahasa Alus, Madya, dan Kasar, disesuaikan dengan kasta atau status lawan bicara.",
        citationIds: ["bali-ref-petabahasa"],
      }
    ],
    scripts: [
      {
        id: "bali-script-01",
        name: "Aksara Bali",
        description: "Aksara turunan Brahmi yang digunakan untuk menulis bahasa Bali kuno, Kawi, dan Sanskerta, terutama dalam manuskrip lontar suci (usada, awig-awig, kekawin).",
        citationIds: ["bali-ref-aksara"],
      }
    ],
    vocabulary: [
      { id: "bali-vocab-01", word: "Om Swastyastu", meaning: "Salam pembuka (Semoga dalam keadaan baik atas karunia Sang Hyang Widhi)", citationIds: ["bali-ref-petabahasa"] },
      { id: "bali-vocab-02", word: "Matur Suksma", meaning: "Terima kasih", citationIds: ["bali-ref-petabahasa"] },
      { id: "bali-vocab-03", word: "Kaja", meaning: "Arah menuju gunung (utara/suci)", citationIds: ["bali-ref-petabahasa", "bali-ref-arsitektur"] },
      { id: "bali-vocab-04", word: "Kelod", meaning: "Arah menuju laut (selatan/profan)", citationIds: ["bali-ref-petabahasa", "bali-ref-arsitektur"] },
    ],
    referenceIds: ["bali-ref-petabahasa", "bali-ref-aksara", "bali-ref-arsitektur"],
  },

  culinary: {
    introduction: [
      {
        id: "bali-culi-01",
        content: "Kuliner Bali terkenal dengan bumbu rempahnya yang kompleks (basa genep) yang mencakup lengkuas, kunyit, jahe, kencur, bawang, cabai, dan terasi. Tradisi babi dan unggas mendominasi protein utamanya.",
        citationIds: ["bali-ref-kuliner"],
      }
    ],
    items: [
      {
        id: "bali-culi-item-01",
        name: "Ayam/Bebek Betutu",
        description: "Ayam atau bebek utuh yang diisi dengan bumbu genep, dibungkus pelepah pinang atau daun pisang, lalu dipanggang di dalam bara api sekam selama berjam-jam hingga dagingnya sangat empuk.",
        citationIds: ["bali-ref-kuliner", "bali-ref-kemdikbud-wbtb"],
      },
      {
        id: "bali-culi-item-02",
        name: "Babi Guling",
        description: "Anak babi utuh yang diisi bumbu di perutnya, lalu dipanggang berputar (diguling) di atas bara api. Menghasilkan kulit yang sangat renyah dan daging berbumbu.",
        citationIds: ["bali-ref-kuliner"],
      },
      {
        id: "bali-culi-item-03",
        name: "Sate Lilit",
        description: "Daging cincang (babi, ikan, atau ayam) yang dicampur kelapa parut dan bumbu, dililitkan pada batang serai atau bambu lebar, lalu dibakar.",
        citationIds: ["bali-ref-kuliner"],
      },
      {
        id: "bali-culi-item-04",
        name: "Lawar",
        description: "Campuran sayuran (seperti nangka muda, kacang panjang), kelapa parut, daging cincang, dan bumbu. Lawar merah menggunakan campuran darah hewan segar.",
        citationIds: ["bali-ref-kuliner", "bali-ref-kemdikbud-wbtb"],
      },
      {
        id: "bali-culi-item-05",
        name: "Kopi Kintamani",
        description: "Kopi Arabika yang ditanam di dataran tinggi pegunungan Batur dengan sistem tumpang sari bersama jeruk, menghasilkan cita rasa kopi yang memiliki tingkat keasaman segar (citrusy).",
        citationIds: ["bali-ref-kopi"],
      }
    ],
    referenceIds: ["bali-ref-kuliner", "bali-ref-kemdikbud-wbtb", "bali-ref-kopi"],
  },

  biodiversity: {
    introduction: [
      {
        id: "bali-bio-01",
        content: "Ekosistem Bali mencakup hutan hujan tropis di pegunungan tengah, sabana di bagian barat (Taman Nasional Bali Barat), serta terumbu karang yang kaya di sekitar Nusa Penida dan Menjangan.",
        citationIds: ["bali-ref-tnbb"],
      }
    ],
    ecosystems: [
      {
        id: "bali-eco-01",
        content: "Taman Nasional Bali Barat (TNBB) merupakan suaka penting yang menggabungkan ekosistem hutan mangrove, pesisir, sabana, dan terumbu karang dangkal, menjadi habitat perlindungan satwa endemik.",
        citationIds: ["bali-ref-tnbb"],
      }
    ],
    species: [
      {
        id: "bali-spec-01",
        category: "fauna",
        name: "Jalak Bali (Leucopsar rothschildi)",
        status: "Critically Endangered",
        description: "Burung cantik dengan bulu seputih salju dan corak biru khas di sekitar mata. Spesies ini endemik asli Pulau Bali dan merupakan lambang fauna Provinsi Bali. Populasinya sangat terancam akibat perburuan.",
        citationIds: ["bali-ref-iucn-jalak", "bali-ref-tnbb"],
      }
    ],
    referenceIds: ["bali-ref-tnbb", "bali-ref-iucn-jalak"],
  },

  destinations: {
    introduction: [
      {
        id: "bali-dest-01",
        content: "Destinasi Bali menawarkan spektrum penuh, dari wisata spiritual di pura-pura megah, lanskap alam persawahan dan gunung batur, hingga gemerlap wisata pesisir di selatan.",
        citationIds: ["bali-ref-disparda"],
      }
    ],
    items: [
      {
        id: "bali-dest-item-01",
        category: "culture",
        name: "Pura Besakih",
        description: "Dikenal sebagai 'Mother Temple', ini adalah kompleks pura terbesar dan tersuci di Bali, terletak di lereng Gunung Agung.",
        citationIds: ["bali-ref-pura-besakih"],
      },
      {
        id: "bali-dest-item-02",
        category: "nature",
        name: "Gunung Batur & Kintamani",
        description: "Geopark global UNESCO yang menawarkan pemandangan menakjubkan kaldera purba, danau Batur, serta pengalaman pendakian matahari terbit.",
        citationIds: ["bali-ref-batur-geopark"],
      },
      {
        id: "bali-dest-item-03",
        category: "culture",
        name: "Ubud",
        description: "Pusat seni dan budaya Bali, dikelilingi hutan hujan, terasering sawah (seperti Tegalalang), serta museum dan galeri seni.",
        citationIds: ["bali-ref-disparda"],
      },
      {
        id: "bali-dest-item-04",
        category: "nature",
        name: "Nusa Penida",
        description: "Pulau di tenggara Bali dengan tebing-tebing karst spektakuler (Kelingking Beach) dan spot menyelam kelas dunia untuk melihat ikan pari Manta.",
        citationIds: ["bali-ref-disparda"],
      },
      {
        id: "bali-dest-item-05",
        category: "culture",
        name: "Pura Uluwatu",
        description: "Pura yang bertengger di tebing karang terjal di atas Samudra Hindia, terkenal sebagai lokasi terbaik menyaksikan pertunjukan Tari Kecak saat matahari terbenam.",
        citationIds: ["bali-ref-tari", "bali-ref-disparda"],
      }
    ],
    referenceIds: ["bali-ref-disparda", "bali-ref-pura-besakih", "bali-ref-batur-geopark", "bali-ref-tari"],
  },

  stories: {
    introduction: [
      {
        id: "bali-story-01",
        content: "Mitos, epos, dan tradisi lisan di Bali sebagian besar diadaptasi dari epos Hindu India (Ramayana dan Mahabharata) yang dilokalkan, serta kisah-kisah magis tentang leak dan kekuatan pelindung Barong.",
        citationIds: ["bali-ref-tari"],
      }
    ],
    stories: [
      {
        id: "bali-story-item-01",
        title: "Barong dan Rangda",
        description: "Pertarungan abadi antara Barong (wujud singa pelindung, simbol kebaikan/dharma) melawan Rangda (ratu para leak pembawa petaka, simbol keburukan/adharma). Kisah ini adalah cerminan dari konsep Rwa Bhineda, yaitu dua sifat bertolak belakang yang menyeimbangkan alam semesta.",
        citationIds: ["bali-ref-tari"],
      },
      {
        id: "bali-story-item-02",
        title: "Asal Usul Selat Bali",
        description: "Legenda Dang Hyang Sidhimantra yang menorehkan tongkatnya ke tanah untuk memisahkan Bali dari Pulau Jawa, demi mengisolasi putranya (Manik Angkeran) yang gemar berjudi agar tidak bisa kembali ke Jawa. Goresan tongkat itu menjadi Selat Bali.",
        citationIds: ["bali-ref-sejarah-bali"],
      }
    ],
    referenceIds: ["bali-ref-tari", "bali-ref-sejarah-bali"],
  },

  contemporary: {
    introduction: [
      {
        id: "bali-cont-01",
        content: "Bali abad ke-21 menghadapi tantangan besar menyeimbangkan arus pariwisata massal, alih fungsi lahan agraris, pengelolaan sampah, dengan upaya pelestarian lingkungan serta budaya lokal.",
        citationIds: ["bali-ref-pariwisata-berkelanjutan"],
      }
    ],
    economy: [
      {
        id: "bali-cont-02",
        content: "Lebih dari separuh ekonomi Bali bergantung langsung maupun tidak langsung pada pariwisata. Pandemi COVID-19 memberikan pukulan telak yang menyadarkan pemerintah untuk mulai melakukan diversifikasi ekonomi ke arah ekonomi kreatif, digital, dan pertanian organik bernilai tinggi.",
        citationIds: ["bali-ref-bps", "bali-ref-pariwisata-berkelanjutan"],
      }
    ],
    development: [
      {
        id: "bali-cont-03",
        content: "Sistem Subak berada di bawah ancaman karena alih fungsi lahan sawah menjadi villa dan hotel yang terus meningkat tiap tahun. Bali saat ini menggiatkan regulasi tata ruang dan gerakan pariwisata berkelanjutan (sustainable tourism) untuk mitigasi eksploitasi lingkungan.",
        citationIds: ["bali-ref-subak-journal", "bali-ref-pariwisata-berkelanjutan"],
      }
    ],
    referenceIds: ["bali-ref-bps", "bali-ref-pariwisata-berkelanjutan", "bali-ref-subak-journal"],
  },

  travel: {
    introduction: [
      {
        id: "bali-trv-01",
        content: "Pintu masuk utama Bali adalah Bandara Internasional I Gusti Ngurah Rai (DPS) dan Pelabuhan Gilimanuk (dari Jawa). Mobilitas di Bali umumnya menggunakan kendaraan sewa (motor/mobil), taksi online, maupun transportasi bus publik seperti Trans Metro Dewata.",
        citationIds: ["bali-ref-disparda"],
      }
    ],
    etiquette: [
      {
        id: "bali-trv-etq-01",
        content: "Saat memasuki Pura, wajib mengenakan pakaian sopan dengan menggunakan kamen (kain) dan selendang (senteng) yang diikatkan di pinggang. Wanita yang sedang haid dilarang memasuki kawasan suci. Hati-hati saat berjalan agar tidak menginjak sesajen (canang sari) yang diletakkan di tanah/trotoar.",
        citationIds: ["bali-ref-arsitektur"], // General culture ref
      }
    ],
    itineraries: [
      {
        id: "bali-itin-01",
        title: "Bali Essentials",
        duration: 3,
        days: [
          { day: 1, activities: ["Kuta/Seminyak beach", "Sunset di Pura Uluwatu", "Tari Kecak"] },
          { day: 2, activities: ["Ubud Monkey Forest", "Terasering Tegalalang", "Tirta Empul"] },
          { day: 3, activities: ["Pura Ulun Danu Beratan", "Tanah Lot"] }
        ],
        citationIds: ["bali-ref-disparda"]
      },
      {
        id: "bali-itin-02",
        title: "Budaya & Alam",
        duration: 5,
        days: [
          { day: 1, activities: ["Ubud Art Market", "Istana Ubud"] },
          { day: 2, activities: ["Desa Penglipuran", "Gunung Batur (sunrise trek)"] },
          { day: 3, activities: ["Pura Besakih", "Tirta Gangga"] },
          { day: 4, activities: ["Amed (snorkeling)", "Pantai Virgin"] },
          { day: 5, activities: ["Sanur (sunrise)", "Pantai Sindhu"] }
        ],
        citationIds: ["bali-ref-disparda"]
      }
    ],
    referenceIds: ["bali-ref-disparda", "bali-ref-arsitektur"],
  },
  
  referenceIds: localReferences.map(r => r.id),
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
