// ═══════════════════════════════════════════════════════════════════════════
// Kalimantan Timur — Deep Province Atlas Data
// ═══════════════════════════════════════════════════════════════════════════

import type { ProvinceAtlas, ScientificReference } from "@/types/atlas";
import { sharedReferences } from "../references/shared";

// ─── References ─────────────────────────────────────────────────────────

const localReferences: ScientificReference[] = [
  {
    id: "kaltim-ref-bps",
    title: "Provinsi Kalimantan Timur Dalam Angka 2025",
    authors: ["BPS Provinsi Kalimantan Timur"],
    year: 2025,
    publisher: "Badan Pusat Statistik",
    url: "https://kaltim.bps.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["ringkasan", "geografi", "masyarakat", "masa-kini"],
  },
  {
    id: "kaltim-ref-wbtb",
    title: "Penetapan Warisan Budaya Takbenda Indonesia (Kalimantan Timur)",
    authors: ["Kementerian Kebudayaan"],
    year: 2024,
    publisher: "Direktorat Jenderal Kebudayaan",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["budaya", "kuliner", "cerita"],
  },
  {
    id: "kaltim-ref-yupa",
    title: "Prasasti Yupa: Bukti Tertua Kerajaan Hindu di Nusantara",
    authors: ["Museum Nasional Indonesia"],
    year: 2019,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://museumnasional.or.id",
    accessedAt: "2026-07-12",
    sourceType: "museum",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["sejarah"],
  },
  {
    id: "kaltim-ref-ikn",
    title: "Undang-Undang Nomor 3 Tahun 2022 tentang Ibu Kota Negara",
    authors: ["Pemerintah Republik Indonesia"],
    year: 2022,
    publisher: "Lembaran Negara Republik Indonesia",
    url: "https://peraturan.go.id",
    accessedAt: "2026-07-12",
    sourceType: "regulation",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["masa-kini", "geografi"],
  },
  {
    id: "kaltim-ref-pesut",
    title: "Irrawaddy Dolphin (Orcaella brevirostris) - Mahakam River Subpopulation",
    authors: ["IUCN Red List"],
    year: 2017,
    publisher: "IUCN",
    url: "https://www.iucnredlist.org",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["alam"],
  },
  {
    id: "kaltim-ref-orangutan",
    title: "Bornean Orangutan (Pongo pygmaeus)",
    authors: ["IUCN Red List"],
    year: 2016,
    publisher: "IUCN",
    url: "https://www.iucnredlist.org",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["alam"],
  },
  {
    id: "kaltim-ref-tn-kutai",
    title: "Taman Nasional Kutai: Habitat Orangutan Kalimantan",
    authors: ["Balai Taman Nasional Kutai"],
    year: 2023,
    publisher: "Kementerian Lingkungan Hidup dan Kehutanan",
    url: "https://tnkutai.menlhk.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["alam", "destinasi"],
  },
  {
    id: "kaltim-ref-petabahasa",
    title: "Peta Bahasa: Bahasa-bahasa di Kalimantan Timur",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2024,
    publisher: "Kementerian Pendidikan Dasar dan Menengah",
    url: "https://petabahasa.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["bahasa"],
  },
  {
    id: "kaltim-ref-dayak",
    title: "Kebudayaan Dayak: Ekologi dan Sistem Kepercayaan",
    authors: ["Coomans, M."],
    year: 1987,
    publisher: "Penerbit Gramedia",
    url: "https://garuda.kemdikbud.go.id", // Using Garuda as discovery reference
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["masyarakat", "budaya"],
  },
  {
    id: "kaltim-ref-mahakam",
    title: "Karakteristik Hidrologi dan Ekologi Sungai Mahakam",
    authors: ["Dinas Lingkungan Hidup Provinsi Kaltim"],
    year: 2021,
    publisher: "Pemerintah Provinsi Kalimantan Timur",
    url: "https://dlh.kaltimprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "government",
    credibilityTier: "B",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["geografi"],
  },
  {
    id: "kaltim-ref-tourism",
    title: "Statistik Pariwisata Kalimantan Timur",
    authors: ["Dinas Pariwisata Provinsi Kalimantan Timur"],
    year: 2024,
    publisher: "Pemerintah Provinsi Kalimantan Timur",
    url: "https://dispar.kaltimprov.go.id",
    accessedAt: "2026-07-12",
    sourceType: "statistics",
    credibilityTier: "A",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["destinasi", "masa-kini"],
  },
  {
    id: "kaltim-ref-kuliner",
    title: "Gastronomi Kutai: Gence Ruan dan Nasi Bekepor",
    authors: ["Wahyuni, S."],
    year: 2019,
    publisher: "Jurnal Pariwisata Nusantara",
    url: "https://garuda.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["kalimantan-timur"],
    topicIds: ["kuliner"],
  }
];

export const kalimantanTimurReferences: ScientificReference[] = [...sharedReferences, ...localReferences];

// ─── Atlas Content ──────────────────────────────────────────────────────

export const kalimantanTimurAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-timur",
  slug: "kalimantan-timur",
  title: "Kalimantan Timur",
  tagline: "Benua Etam, Jantung Kehidupan Mahakam",

  summary: [
    {
      id: "kaltim-sum-01",
      content: "Kalimantan Timur adalah salah satu provinsi terbesar di Indonesia, terkenal dengan kekayaan sumber daya alamnya, bentangan Sungai Mahakam yang masif, dan hamparan hutan hujan tropis yang menjadi habitat penting bagi orangutan Borneo. Wilayah ini mengadopsi julukan 'Benua Etam' (Benua Kita).",
      citationIds: ["kaltim-ref-bps", "kaltim-ref-mahakam"],
    },
    {
      id: "kaltim-sum-02",
      content: "Provinsi ini juga memiliki nilai historis yang luar biasa sebagai tempat berdirinya Kerajaan Kutai Martadipura, kerajaan Hindu tertua di Nusantara yang dibuktikan melalui penemuan Prasasti Yupa. Secara kultural, Kalimantan Timur adalah rumah harmoni bagi kebudayaan Kutai, Paser, berbagai sub-suku Dayak, serta para pendatang.",
      citationIds: ["kaltim-ref-yupa", "kaltim-ref-dayak"],
    },
    {
      id: "kaltim-sum-03",
      content: "Pada abad ke-21, signifikansi geopolitik Kalimantan Timur melonjak seiring dengan ditetapkannya sebagian wilayah Kabupaten Penajam Paser Utara dan Kutai Kartanegara sebagai lokasi Ibu Kota Nusantara (IKN), yang memicu transformasi infrastruktur dan ekonomi yang masif.",
      citationIds: ["kaltim-ref-ikn"],
    }
  ],

  quickFacts: [
    { id: "kaltim-qf-01", label: "Ibu Kota", value: "Samarinda", citationIds: ["kaltim-ref-bps"] },
    { id: "kaltim-qf-02", label: "Luas Wilayah", value: "127.346 km²", citationIds: ["kaltim-ref-bps"] },
    { id: "kaltim-qf-03", label: "Populasi", value: "±3.9 Juta (2025)", citationIds: ["kaltim-ref-bps"] },
    { id: "kaltim-qf-04", label: "Suku Utama", value: "Jawa, Bugis, Banjar, Kutai, Dayak", citationIds: ["kaltim-ref-bps"] },
    { id: "kaltim-qf-05", label: "Sungai Utama", value: "Sungai Mahakam (920 km)", citationIds: ["kaltim-ref-mahakam"] },
    { id: "kaltim-qf-06", label: "Proyek Strategis Nasional", value: "Ibu Kota Nusantara (IKN)", citationIds: ["kaltim-ref-ikn"] },
    { id: "kaltim-qf-07", label: "Kerajaan Tertua", value: "Kutai Martadipura (Abad 4 M)", citationIds: ["kaltim-ref-yupa"] },
    { id: "kaltim-qf-08", label: "Fauna Ikonik", value: "Pesut Mahakam & Orangutan", citationIds: ["kaltim-ref-pesut", "kaltim-ref-orangutan"] },
  ],

  geography: {
    introduction: [
      {
        id: "kaltim-geo-01",
        content: "Topografi Kalimantan Timur bervariasi dari dataran rendah berawa di kawasan pesisir pesisir timur, daratan bergelombang di bagian tengah, hingga pegunungan di sepanjang perbatasan barat laut (Pegunungan Muller). Lanskap ekologi provinsi ini sangat didominasi oleh Daerah Aliran Sungai (DAS) Mahakam, yang merupakan sungai terbesar dan terpanjang di Kalimantan Timur.",
        citationIds: ["kaltim-ref-bps", "kaltim-ref-mahakam"],
      },
      {
        id: "kaltim-geo-02",
        content: "Sungai Mahakam tidak hanya berfungsi sebagai sumber air, melainkan urat nadi transportasi logistik utama (khususnya untuk komoditas batu bara dan kayu) serta jalur penghubung antarkabupaten di pedalaman. Wilayah ini kaya akan endapan hidrokarbon (minyak dan gas bumi) serta batu bara yang menjadi tulang punggung ekonominya.",
        citationIds: ["kaltim-ref-bps", "kaltim-ref-mahakam"],
      }
    ],
    referenceIds: ["kaltim-ref-bps", "kaltim-ref-mahakam"],
  },

  history: {
    introduction: [
      {
        id: "kaltim-his-01",
        content: "Sejarah tercatat Indonesia bermula di wilayah ini. Di Muara Kaman, ditemukan tujuh tiang batu (Prasasti Yupa) bertuliskan huruf Pallawa dengan bahasa Sanskerta dari abad ke-4 Masehi. Yupa tersebut menceritakan kebesaran Raja Mulawarman dari Kerajaan Kutai Martadipura.",
        citationIds: ["kaltim-ref-yupa"],
      },
      {
        id: "kaltim-his-02",
        content: "Beberapa abad kemudian, berdiri Kesultanan Kutai Kartanegara di Tepian Batu (Kutai Lama) yang perlahan menaklukkan dan menyerap Kutai Martadipura. Kesultanan ini kemudian masuk Islam dan pada abad ke-19 memindahkan pusat kekuasaannya ke Tenggarong, yang hingga hari ini masih memegang peranan pelestarian kebudayaan di Kaltim.",
        citationIds: ["kaltim-ref-dayak", "kaltim-ref-yupa"], // General history coverage
      }
    ],
    eras: [
      {
        id: "kaltim-era-01",
        name: "Kutai Martadipura",
        description: "Kerajaan Hindu tertua di Nusantara yang dipimpin Dinasti Kundungga (Aswawarman, Mulawarman). Berkembang pesat berkat lokasinya di jalur perdagangan maritim pedalaman.",
        period: "Abad ke-4 – ke-17 M",
        citationIds: ["kaltim-ref-yupa"]
      },
      {
        id: "kaltim-era-02",
        name: "Kesultanan Kutai Kartanegara ing Martadipura",
        description: "Fusi antara kerajaan asli dan Kutai Kartanegara. Masa keemasan Islam di sepanjang Sungai Mahakam dengan pusat keraton di Tenggarong.",
        period: "Abad ke-14 – 1960",
        citationIds: ["kaltim-ref-yupa"]
      },
      {
        id: "kaltim-era-03",
        name: "Era Penetapan IKN",
        description: "Undang-Undang mengesahkan pemindahan ibu kota negara dari Jakarta ke wilayah perbatasan Penajam Paser Utara dan Kutai Kartanegara, dinamakan 'Nusantara'.",
        period: "2022 – Sekarang",
        citationIds: ["kaltim-ref-ikn"]
      }
    ],
    referenceIds: ["kaltim-ref-yupa", "kaltim-ref-dayak", "kaltim-ref-ikn"],
  },

  society: {
    introduction: [
      {
        id: "kaltim-soc-01",
        content: "Secara demografis, Kalimantan Timur sangat heterogen karena tingginya arus transmigrasi dan urbanisasi pekerja industri. Suku asli meliputi Dayak (di pedalaman), Kutai (di sepanjang aliran sungai), dan Paser (di selatan).",
        citationIds: ["kaltim-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "kaltim-soc-02",
        content: "Masyarakat Dayak pedalaman secara tradisional hidup komunal di rumah bentang (lamin) yang dipimpin oleh seorang Kepala Adat. Kehidupan mereka sangat bersandar pada pengelolaan hutan (agroforestri) yang berasaskan hukum adat. Di sisi lain, masyarakat Kutai pesisir dan sungai memiliki struktur yang lebih dipengaruhi oleh sisa hierarki Kesultanan Melayu-Islam.",
        citationIds: ["kaltim-ref-dayak"],
      }
    ],
    referenceIds: ["kaltim-ref-bps", "kaltim-ref-dayak"],
  },

  culture: {
    introduction: [
      {
        id: "kaltim-cul-01",
        content: "Kesenian Kalimantan Timur diwarnai oleh harmonisasi budaya Dayak, Kutai, dan kesenian keraton. Motif hias pakis (kelakai), ukiran burung enggang, dan dominasi warna kuning-hitam-merah sangat kentara dalam ornamen lokal.",
        citationIds: ["kaltim-ref-wbtb", "kaltim-ref-dayak"],
      }
    ],
    items: [
      {
        id: "kaltim-cul-item-01",
        category: "art",
        title: "Tari Hudoq",
        description: "Tarian topeng kayu suku Dayak (Bahaq/Kenyah) yang merepresentasikan roh-roh penjaga alam. Ditampilkan saat musim tanam padi untuk mengusir hama dan memohon panen melimpah.",
        significance: "Wujud harmoni ekologis dan pelestarian kebudayaan Dayak, diakui sebagai WBTb.",
        citationIds: ["kaltim-ref-wbtb", "kaltim-ref-dayak"],
      },
      {
        id: "kaltim-cul-item-02",
        category: "architecture",
        title: "Rumah Lamin",
        description: "Rumah panggung komunal memanjang (bisa mencapai 300 meter) khas Dayak yang dapat dihuni oleh puluhan keluarga. Dihiasi ukiran totem bermotif naga atau burung enggang.",
        significance: "Simbol kebersamaan, musyawarah, dan kekerabatan erat masyarakat adat.",
        citationIds: ["kaltim-ref-wbtb", "kaltim-ref-dayak"],
      },
      {
        id: "kaltim-cul-item-03",
        category: "tradition",
        title: "Erau",
        description: "Festival budaya tahunan Kesultanan Kutai Kartanegara di Tenggarong, yang awalnya adalah upacara penobatan sultan. Kini menjadi pesta rakyat internasional.",
        significance: "Ajang pelestarian keraton sekaligus diplomasi budaya internasional.",
        citationIds: ["kaltim-ref-wbtb"],
      },
      {
        id: "kaltim-cul-item-04",
        category: "craft",
        title: "Mandau",
        description: "Senjata tajam tradisional khas Dayak. Mata pisaunya sering kali dihiasi tatahan logam bermotif bintang atau titik (mata punai), sementara gagangnya diukir dari tulang atau tanduk rusa.",
        significance: "Bukan sekadar senjata, melainkan simbol pusaka, keberanian, dan pusaka keluarga.",
        citationIds: ["kaltim-ref-wbtb"],
      }
    ],
    referenceIds: ["kaltim-ref-wbtb", "kaltim-ref-dayak"],
  },

  language: {
    introduction: [
      {
        id: "kaltim-lang-01",
        content: "Bahasa Indonesia berfungsi sebagai lingua franca utama karena multikulturalisme. Namun, bahasa lokal yang dominan dituturkan adalah Bahasa Kutai, berbagai rumpun Bahasa Dayak (seperti Kenyah, Benuaq), serta Bahasa Paser di selatan.",
        citationIds: ["kaltim-ref-petabahasa"],
      }
    ],
    vocabulary: [
      { id: "kaltim-vocab-01", word: "Etam", meaning: "Kita (dalam Bahasa Kutai, sering dipakai untuk 'Benua Etam')", citationIds: ["kaltim-ref-petabahasa"] },
      { id: "kaltim-vocab-02", word: "Keroan", meaning: "Kawan-kawan / masyarakat", citationIds: ["kaltim-ref-petabahasa"] },
      { id: "kaltim-vocab-03", word: "Ces", meaning: "Perahu motor kecil yang beroperasi di Sungai Mahakam", citationIds: ["kaltim-ref-mahakam"] },
      { id: "kaltim-vocab-04", word: "Belian", meaning: "Pemimpin ritual / dukun (penyembuh) dalam budaya Dayak", citationIds: ["kaltim-ref-wbtb"] },
    ],
    referenceIds: ["kaltim-ref-petabahasa", "kaltim-ref-mahakam", "kaltim-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "kaltim-culi-01",
        content: "Kuliner Kaltim sangat mengandalkan ikan air tawar dari Sungai Mahakam (ikan patin, haruan/gabus, toman). Penggunaan rempah lokio dan teknik pengasapan sangat lazim.",
        citationIds: ["kaltim-ref-kuliner"],
      }
    ],
    items: [
      {
        id: "kaltim-culi-item-01",
        name: "Gence Ruan",
        description: "Hidangan ikan haruan (gabus) khas Kutai yang dibakar utuh lalu dilumuri bumbu tumis (gence) yang dominan dengan bawang merah dan cabai bertabur rempah kasar.",
        citationIds: ["kaltim-ref-kuliner"],
      },
      {
        id: "kaltim-culi-item-02",
        name: "Nasi Bekepor",
        description: "Nasi liwet khas Kutai yang dimasak di dalam kuali tanah liat bersama minyak sayur, rempah, dan potongan ikan asin. Cara memasaknya diputar (dikepor) agar matang merata.",
        citationIds: ["kaltim-ref-kuliner", "kaltim-ref-wbtb"],
      },
      {
        id: "kaltim-culi-item-03",
        name: "Ayam Cincane",
        description: "Ayam kampung merah asal Samarinda yang direbus dengan bumbu kemerahan manis-pedas hingga empuk, kemudian dibakar.",
        citationIds: ["kaltim-ref-kuliner"],
      },
      {
        id: "kaltim-culi-item-04",
        name: "Sayur Gangan Manok",
        description: "Sayur bening berisi daging ayam yang dimasak bersama potongan bonggol pisang (jantung pisang) muda, bayam, dan rempah ringan.",
        citationIds: ["kaltim-ref-kuliner"],
      }
    ],
    referenceIds: ["kaltim-ref-kuliner", "kaltim-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "kaltim-bio-01",
        content: "Hutan hujan primer Kalimantan Timur menyimpan keanekaragaman hayati yang masif, termasuk berbagai spesies anggrek liar dan kantong semar. Wilayah ini memiliki kawasan konservasi vital, meski mendapat tekanan deforestasi ekstrem pada dekade sebelumnya.",
        citationIds: ["kaltim-ref-tn-kutai"],
      }
    ],
    ecosystems: [
      {
        id: "kaltim-eco-01",
        content: "Taman Nasional Kutai adalah perwakilan ekosistem hutan ulin (kayu besi) dan hutan campuran Dipterocarpaceae dataran rendah yang menjadi habitat alami penting satwa liar Kalimantan.",
        citationIds: ["kaltim-ref-tn-kutai"],
      }
    ],
    species: [
      {
        id: "kaltim-spec-01",
        category: "fauna",
        name: "Orangutan Kalimantan (Pongo pygmaeus)",
        status: "Critically Endangered",
        description: "Kera besar endemik Kalimantan berambut kemerahan. Deforestasi mengancam habitatnya, menjadikan TN Kutai sebagai kantong genetik penyelamatan yang kritis.",
        citationIds: ["kaltim-ref-orangutan", "kaltim-ref-tn-kutai"],
      },
      {
        id: "kaltim-spec-02",
        category: "fauna",
        name: "Pesut Mahakam (Orcaella brevirostris)",
        status: "Critically Endangered",
        description: "Lumba-lumba air tawar tak bersirip punggung lancip yang hanya ditemukan di Sungai Mahakam. Populasinya diperkirakan bersisa di bawah 100 ekor akibat lalu lintas ponton batu bara dan degradasi kualitas sungai.",
        citationIds: ["kaltim-ref-pesut", "kaltim-ref-mahakam"],
      }
    ],
    referenceIds: ["kaltim-ref-tn-kutai", "kaltim-ref-orangutan", "kaltim-ref-pesut", "kaltim-ref-mahakam"],
  },

  destinations: {
    introduction: [
      {
        id: "kaltim-dest-01",
        content: "Destinasi wisata di Kaltim berpusat pada wisata budaya kesultanan, susur sungai Mahakam, pelestarian satwa, serta pesona bahari di gugus kepulauan Derawan.",
        citationIds: ["kaltim-ref-tourism"],
      }
    ],
    items: [
      {
        id: "kaltim-dest-item-01",
        category: "nature",
        name: "Kepulauan Derawan",
        description: "Berada di Kabupaten Berau, menawarkan keindahan taman bawah laut kelas dunia, danau ubur-ubur tanpa sengat di Pulau Kakaban, serta konservasi penyu.",
        citationIds: ["kaltim-ref-tourism"],
      },
      {
        id: "kaltim-dest-item-02",
        category: "culture",
        name: "Desa Budaya Pampang",
        description: "Perkampungan Dayak Kenyah di Samarinda. Menampilkan lamin adat megah dan rutinitas pertunjukan tari tradisional setiap akhir pekan.",
        citationIds: ["kaltim-ref-tourism", "kaltim-ref-dayak"],
      },
      {
        id: "kaltim-dest-item-03",
        category: "culture",
        name: "Museum Mulawarman",
        description: "Bekas istana Kesultanan Kutai di Tenggarong yang kini menjadi museum koleksi peninggalan kerajaan dan sejarah awal mula Hindu di Nusantara.",
        citationIds: ["kaltim-ref-tourism", "kaltim-ref-yupa"],
      },
      {
        id: "kaltim-dest-item-04",
        category: "nature",
        name: "Samboja Lestari",
        description: "Pusat rehabilitasi orangutan dan beruang madu yang dikelola oleh yayasan pelestarian alam, menawarkan edukasi konservasi langsung.",
        citationIds: ["kaltim-ref-orangutan", "kaltim-ref-tourism"],
      }
    ],
    referenceIds: ["kaltim-ref-tourism", "kaltim-ref-dayak", "kaltim-ref-yupa", "kaltim-ref-orangutan"],
  },

  stories: {
    introduction: [
      {
        id: "kaltim-story-01",
        content: "Cerita rakyat dari Kalimantan Timur kaya akan mitologi sungai, penciptaan alam semesta (mitologi Dayak), dan kisah keajaiban pangeran-pangeran Kutai.",
        citationIds: ["kaltim-ref-dayak"],
      }
    ],
    stories: [
      {
        id: "kaltim-story-item-01",
        title: "Asal Usul Pesut Mahakam",
        description: "Legenda yang menceritakan tentang kakak beradik yang ditelantarkan ayahnya karena tipu muslihat ibu tiri. Mereka kelaparan dan memakan bubur panas yang membuat suhu tubuh mereka terbakar, lalu melompat ke Sungai Mahakam dan berubah menjadi ikan Pesut yang menyemburkan air.",
        citationIds: ["kaltim-ref-pesut"], // as cultural context
      },
      {
        id: "kaltim-story-item-02",
        title: "Legenda Putri Karang Melenu",
        description: "Mitos kelahiran putri cantik dari sebuah buih di perairan Mahakam, yang kelak menikah dengan raja Kutai pertama. Ia dilindungi oleh naga Erau.",
        citationIds: ["kaltim-ref-wbtb"], // Context of Erau festival myth
      }
    ],
    referenceIds: ["kaltim-ref-dayak", "kaltim-ref-pesut", "kaltim-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "kaltim-cont-01",
        content: "Kalimantan Timur saat ini berada di pusat transisi masif tingkat nasional karena pembangunan megaproyek Ibu Kota Nusantara.",
        citationIds: ["kaltim-ref-ikn"],
      }
    ],
    economy: [
      {
        id: "kaltim-cont-02",
        content: "Struktur ekonominya sangat digerakkan oleh sektor pertambangan (batu bara) dan penggalian (migas), yang menyumbang lebih dari separuh PDRB provinsi. Pemerintah pusat kini berupaya melakukan hilirisasi dan transisi ke ekonomi berkelanjutan sejalan dengan narasi IKN.",
        citationIds: ["kaltim-ref-bps"],
      }
    ],
    development: [
      {
        id: "kaltim-cont-03",
        content: "Pembangunan IKN ('Nusantara') di Penajam Paser Utara diproyeksikan menjadi *smart forest city*. Hal ini mendongkrak konektivitas via Jalan Tol Balikpapan-Samarinda (Balsam), namun juga memicu debat ekologis terkait deforestasi dan jaminan hak masyarakat adat.",
        citationIds: ["kaltim-ref-ikn", "kaltim-ref-dayak", "kaltim-ref-bps"],
      }
    ],
    referenceIds: ["kaltim-ref-ikn", "kaltim-ref-bps", "kaltim-ref-dayak"],
  },

  travel: {
    introduction: [
      {
        id: "kaltim-trv-01",
        content: "Pintu gerbang udara terpadat adalah Bandara Internasional SAMS Sepinggan (Balikpapan) dan Bandara APT Pranoto (Samarinda). Balikpapan berfungsi sebagai hub industri, sedangan pelancong biasanya menuju utara (Berau) atau timur via penerbangan perintis.",
        citationIds: ["kaltim-ref-tourism"],
      }
    ],
    itineraries: [
      {
        id: "kaltim-itin-01",
        title: "Jalur Sungai & Keraton",
        duration: 3,
        days: [
          { day: 1, activities: ["Tiba di Balikpapan", "Menuju Samarinda via Tol Balsam", "Mahakam River Cruise senja"] },
          { day: 2, activities: ["Desa Budaya Pampang (Dayak)", "Menuju Tenggarong", "Museum Mulawarman"] },
          { day: 3, activities: ["Kedaton Kutai Kartanegara", "Menuju Bandara"] }
        ],
        citationIds: ["kaltim-ref-tourism"]
      },
      {
        id: "kaltim-itin-02",
        title: "Eksplorasi Derawan & Konservasi",
        duration: 5,
        days: [
          { day: 1, activities: ["Terbang ke Tanjung Redeb (Berau)", "Menyeberang ke Pulau Derawan"] },
          { day: 2, activities: ["Snorkeling di Derawan", "Melihat penyu hijau bertelur di malam hari"] },
          { day: 3, activities: ["Pulau Maratua (Pantai jernih)", "Danau Kakaban (Berenang dengan ubur-ubur)"] },
          { day: 4, activities: ["Pulau Sangalaki (Spot Manta Ray)", "Kembali ke Berau"] },
          { day: 5, activities: ["Eksplorasi kuliner Berau", "Penerbangan pulang"] }
        ],
        citationIds: ["kaltim-ref-tourism"]
      }
    ],
    referenceIds: ["kaltim-ref-tourism"],
  },

  referenceIds: localReferences.map(r => r.id),
  lastReviewedAt: "2026-07-12",
  contentStatus: "draft",
};
