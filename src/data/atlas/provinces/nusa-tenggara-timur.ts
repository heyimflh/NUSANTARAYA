import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const nusaTenggaraTimurReferences: ScientificReference[] = [
  {
    id: "ntt-ref-bps",
    title: "Provinsi Nusa Tenggara Timur Dalam Angka 2024",
    authors: ["BPS Provinsi Nusa Tenggara Timur"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Nusa Tenggara Timur",
    url: "https://ntt.bps.go.id/publication/2024",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["geography", "contemporary"],

  },
  {
    id: "ntt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Provinsi NTT",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["culture", "culinary", "stories"],

  },
  {
    id: "ntt-ref-unesco-komodo",
    title: "Komodo National Park",
    authors: ["UNESCO World Heritage Centre"],
    year: 1991,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/list/609",
    accessedAt: "2026-07-12",
    sourceType: "unesco",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["biodiversity", "destinations"],

  },
  {
    id: "ntt-ref-sejarah",
    title: "Sejarah Daerah Nusa Tenggara Timur",
    authors: ["G. Parera dkk"],
    year: 1980,
    publisher: "Departemen Pendidikan dan Kebudayaan",
    url: "https://id.wikipedia.org/wiki/Nusa_Tenggara_Timur",
    accessedAt: "2026-07-12",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["history", "society"],

  },
  {
    id: "ntt-ref-bahasa",
    title: "Peta Bahasa di Provinsi Nusa Tenggara Timur",
    authors: ["Badan Pengembangan dan Pembinaan Bahasa"],
    year: 2019,
    publisher: "Kementerian Pendidikan dan Kebudayaan",
    url: "https://petabahasa.kemdikbud.go.id/",
    accessedAt: "2026-07-12",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-timur"],
    topicIds: ["language"],

  }
];

export const nusaTenggaraTimurAtlas: ProvinceAtlas = {
  provinceId: "nusa-tenggara-timur",
  slug: "nusa-tenggara-timur",
  title: "Nusa Tenggara Timur",
  tagline: "Tanah Flobamora yang Eksotis dan Rumah Naga Terakhir",
  summary: [
    {
      id: "ntt-sum-01",
      content: "Nusa Tenggara Timur (NTT), yang sering dijuluki Flobamora (Flores, Sumba, Timor, Alor), adalah kepulauan vulkanik dengan keindahan sabana yang memukau. Di sinilah satu-satunya habitat alami Komodo berada, berpadu dengan kekayaan tradisi purba, tenun ikat yang memikat, dan keeksotisan lanskap gersang yang justru menjadi daya tarik utamanya.",
      citationIds: ["ntt-ref-bps", "ntt-ref-unesco-komodo"],
    }
  ],
  quickFacts: [
    { id: "ntt-qf-01", label: "Ibu Kota", value: "Kupang", citationIds: ["ntt-ref-bps"] },
    { id: "ntt-qf-02", label: "Luas Wilayah", value: "48.718,10 km² (Daratan)", citationIds: ["ntt-ref-bps"], dataYear: 2024 },
    { id: "ntt-qf-03", label: "Populasi", value: "5.541.394 jiwa", citationIds: ["ntt-ref-bps"], dataYear: 2023 },
    { id: "ntt-qf-04", label: "Pulau Utama", value: "Flores, Sumba, Timor, Alor, Lembata", citationIds: ["ntt-ref-bps"] },
    { id: "ntt-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["ntt-ref-bps"] },
    { id: "ntt-qf-06", label: "Gubernur", value: "Ayodhia G. L. Kalake (Pj.)", citationIds: ["ntt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ntt-geo-01",
        content: "Topografi NTT didominasi oleh perbukitan terjal dan sabana yang luas. Kondisi iklimnya cenderung lebih kering (tropis basah dan kering) dengan curah hujan yang jauh lebih sedikit dibandingkan wilayah barat Indonesia, menciptakan ekosistem sabana (padang rumput) khas seperti di Afrika.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ntt-geo-02",
        content: "Kepulauan NTT berada tepat di Cincin Api Pasifik (Ring of Fire). Di Pulau Flores saja terdapat lebih dari 10 gunung berapi aktif, di mana Gunung Kelimutu dengan tiga danau kawah berwarna-warni menjadi ikon vulkanis paling terkenal.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-bps"],
  },

  history: {
    introduction: [
      {
        id: "ntt-his-01",
        content: "Sejarah NTT sangat kaya dan dipengaruhi oleh rute perdagangan maritim. Di masa praaksara, Pulau Flores menjadi rumah bagi 'Hobbit dari Flores' (Homo floresiensis). Di era kolonial, wilayah ini sangat dipengaruhi oleh masuknya agama Katolik melalui bangsa Portugis dan pembentukan kerajaan-kerajaan lokal.",
        citationIds: ["ntt-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "ntt-era-01",
        period: "Pra-Sejarah (± 50.000 Tahun Lalu)",
        title: "Penemuan Homo floresiensis",
        description: "Fosil manusia purba berukuran kerdil (dijuluki Hobbit) ditemukan di Gua Liang Bua, Manggarai, membuktikan evolusi manusia purba yang terisolasi di kepulauan Flores.",
        citationIds: ["ntt-ref-sejarah"],
      },
      {
        id: "ntt-era-02",
        period: "Abad ke-16",
        title: "Pengaruh Portugis di Larantuka",
        description: "Pedagang dan misionaris Dominikan dari Portugal mendarat di Pulau Solor dan Larantuka (Flores Timur). Mereka membawa ajaran Katolik yang kemudian berakulturasi dengan budaya lokal, menciptakan tradisi Semana Santa.",
        citationIds: ["ntt-ref-sejarah"],
      },
      {
        id: "ntt-era-03",
        period: "1958",
        title: "Pembentukan Provinsi",
        description: "Provinsi Sunda Kecil dimekarkan, sehingga terbentuklah Provinsi Nusa Tenggara Timur, yang memisahkan diri dari Bali dan NTB.",
        citationIds: ["ntt-ref-sejarah"],
      }
    ],
    referenceIds: ["ntt-ref-sejarah"],
  },

  society: {
    introduction: [
      {
        id: "ntt-soc-01",
        content: "Masyarakat NTT terdiri dari beragam suku bangsa, seperti Suku Dawan (Timor), Manggarai, Lio, Ngada, Sumba, dan Alor. Masing-masing memiliki struktur kekerabatan dan rumah adat yang unik.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "ntt-soc-02",
        content: "Sebagian besar suku di NTT menganut garis keturunan patrilineal yang kuat, di mana praktik 'Belis' (mas kawin) merupakan bagian fundamental dari perkawinan, berfungsi untuk menyatukan dua klan besar. Namun, suku-suku di wilayah tertentu, seperti Wehali di Kabupaten Malaka, menganut sistem matrilineal secara utuh.",
        citationIds: ["ntt-ref-sejarah"],
      }
    ],
    referenceIds: ["ntt-ref-bps", "ntt-ref-sejarah"],
  },

  culture: {
    introduction: [
      {
        id: "ntt-cul-01",
        content: "Kebudayaan NTT tercermin melalui seni tenun ikat yang mendunia, tarian magis-religius, serta tradisi lisan dan ritual agraris yang tetap dipertahankan turun-temurun.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntt-cul-item-01",
        category: "Ritual & Festival",
        title: "Pasola",
        description: "Tradisi perang berkuda saling melempar lembing kayu di Sumba Barat, bagian dari ritual kepercayaan Marapu untuk menyambut panen cacing laut (Nyale). Darah yang jatuh diyakini akan menyuburkan tanah.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-cul-item-02",
        category: "Seni Kriya",
        title: "Tenun Ikat Sumba",
        description: "Kain tradisional berharga tinggi yang ditenun dengan pewarna alam purba seperti akar mengkudu dan nila. Motif kain menggambarkan kasta, cerita kehidupan prasejarah, dan alam spiritual.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-cul-item-03",
        category: "Arsitektur",
        title: "Mbaru Niang (Wae Rebo)",
        description: "Rumah adat Manggarai yang berbentuk kerucut tinggi dengan atap jerami hingga hampir menyentuh tanah. Desa Wae Rebo pernah mendapat penghargaan UNESCO Asia Pacific Heritage Award.",
        citationIds: ["ntt-ref-wbtb", "ntt-ref-unesco-komodo"],
      },
      {
        id: "ntt-cul-item-04",
        category: "Alat Musik Tradisional",
        title: "Sasando",
        description: "Alat musik dawai berdenting khas Pulau Rote, dimainkan dengan cara dipetik dan resonansinya diperkuat oleh anyaman daun lontar setengah bola.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-wbtb", "ntt-ref-unesco-komodo"],
  },

  language: {
    introduction: [
      {
        id: "ntt-lang-01",
        content: "Keberagaman pulau di NTT melahirkan puluhan bahasa daerah yang berbeda-beda bahkan dalam satu pulau yang sama. Bahasa yang mendominasi antara lain Uab Meto (Suku Dawan di Timor), Bahasa Manggarai (Flores Barat), dan Bahasa Kambera (Sumba Timur). Bahasa Kupang bertindak sebagai lingua franca bagi masyarakat urban.",
        citationIds: ["ntt-ref-bahasa"],
      }
    ],
    vocabulary: [
      { id: "ntt-voc-01", word: "Lu / Sonde", meaning: "Kamu / Tidak (Bahasa Melayu Kupang)", citationIds: ["ntt-ref-bahasa"] },
      { id: "ntt-voc-02", word: "Uis Neno", meaning: "Tuhan / Sang Pencipta Langit (Uab Meto)", citationIds: ["ntt-ref-bahasa"] },
      { id: "ntt-voc-03", word: "Tabe", meaning: "Salam / Permisi (Manggarai)", citationIds: ["ntt-ref-bahasa"] },
      { id: "ntt-voc-04", word: "Marapu", meaning: "Kepercayaan lokal pemujaan arwah leluhur di Sumba", citationIds: ["ntt-ref-wbtb"] },
    ],
    referenceIds: ["ntt-ref-bahasa", "ntt-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "ntt-culi-01",
        content: "Lanskap sabana dan cuaca kering menjadikan makanan pokok penduduk berpusat pada jagung. Protein hewani didapat dari peternakan yang diternakkan secara luas dan ikan dari laut. Masakan dimasak sederhana namun mengandalkan teknik asap untuk pengawetan.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntt-culi-item-01",
        title: "Se'i",
        description: "Daging (sapi atau babi) yang diiris memanjang kemudian diasap perlahan dengan kayu kosambi (Schleichera oleosa) dan daunnya. Proses ini mengunci rasa dan aroma kayu ke dalam daging.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-culi-item-02",
        title: "Jagung Bose",
        description: "Bubur jagung putih yang dimasak perlahan bersama kacang merah atau kacang tanah hingga lembut, sering kali disajikan bersama se'i dan sambal lu'at.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-culi-item-03",
        title: "Kopi Bajawa",
        description: "Kopi Arabika organik kualitas ekspor yang ditanam di dataran tinggi Ngada, Flores. Memiliki aroma kuat dengan sentuhan cokelat dan tingkat keasaman rendah.",
        citationIds: ["ntt-ref-bps"],
      },
      {
        id: "ntt-culi-item-04",
        title: "Sambal Lu'at",
        description: "Sambal khas yang dibuat dari cabai, daun siba, kulit jeruk nipis, dan terasi yang difermentasi (disimpan dalam bambu) terlebih dahulu sebelum dikonsumsi.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-wbtb", "ntt-ref-bps"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ntt-bio-01",
        content: "Kepulauan NTT berada di jantung wilayah peralihan Wallacea. Isolasi geografis selama jutaan tahun menghasilkan berbagai spesies endemik purba yang tidak ditemukan di belahan bumi mana pun, terutama biawak raksasa Komodo.",
        citationIds: ["ntt-ref-unesco-komodo"],
      }
    ],
    species: [
      {
        id: "ntt-bio-item-01",
        category: "Fauna",
        title: "Komodo (Varanus komodoensis)",
        description: "Kadal terbesar di dunia, panjangnya bisa mencapai 3 meter dengan berat lebih dari 70 kg. Karnivora purba ini mendiami Pulau Komodo, Rinca, dan Padar, serta diakui sebagai salah satu dari 7 Keajaiban Alam Baru Dunia.",
        citationIds: ["ntt-ref-unesco-komodo"],
      },
      {
        id: "ntt-bio-item-02",
        category: "Fauna",
        title: "Kakatua Kecil Jambul Kuning (Cacatua sulphurea parvula)",
        description: "Burung paruh bengkok endemik yang sangat cerdas. Populasinya sangat terancam akibat perburuan dan diperketat perlindungannya dalam kawasan Taman Nasional Komodo.",
        citationIds: ["ntt-ref-unesco-komodo"],
      },
      {
        id: "ntt-bio-item-03",
        category: "Flora",
        title: "Pohon Cendana (Santalum album)",
        description: "Pohon semiparasit yang menghasilkan kayu beraroma sangat wangi. Kayu ini adalah komoditas perdagangan utama Pulau Timor pada masa lalu dan kini ditetapkan sebagai flora maskot NTT.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-unesco-komodo", "ntt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "ntt-dest-01",
        content: "Lanskap NTT layaknya kepingan dunia lain; perpaduan jurang-jurang kapur, pesisir berpasir merah jambu, dan perkampungan purba di atas awan, menjadikannya primadona ekowisata premium.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    items: [
      {
        id: "ntt-dest-item-01",
        category: "Alam & Satwa",
        title: "Taman Nasional Komodo",
        description: "Situs Warisan Dunia UNESCO dengan pulau-pulau dramatis (seperti Pulau Padar), pantai Pink Beach berpasir merah jambu (hasil serpihan karang Foraminifera merah), dan habitat asli naga komodo.",
        citationIds: ["ntt-ref-unesco-komodo"],
      },
      {
        id: "ntt-dest-item-02",
        category: "Alam",
        title: "Danau Kelimutu",
        description: "Danau vulkanik tiga warna di puncak Gunung Kelimutu, Ende. Warna danau dapat berubah secara mandiri secara vulkanis (biru, hijau, merah/cokelat hitam).",
        citationIds: ["ntt-ref-bps"],
      },
      {
        id: "ntt-dest-item-03",
        category: "Budaya",
        title: "Desa Adat Wae Rebo",
        description: "Perkampungan adat Mbaru Niang yang terisolasi di lembah pegunungan hijau Manggarai. Hanya bisa dicapai dengan trekking pendakian berjalan kaki sekitar 3-4 jam menembus hutan rimba.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-dest-item-04",
        category: "Alam",
        title: "Bukit Wairinding, Sumba",
        description: "Lanskap sabana bergelombang yang tampak hijau segar saat musim hujan, dan berubah warna menjadi savana cokelat keemasan khas Afrika di kala kemarau.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-unesco-komodo", "ntt-ref-bps", "ntt-ref-wbtb"],
  },

  stories: {
    introduction: [
      {
        id: "ntt-story-01",
        content: "Cerita rakyat dari daratan Timor, Flores, dan Sumba banyak memuat tentang penciptaan alam, hubungan manusia dengan semesta magis, hingga epos ksatria masa lalu.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "ntt-story-item-01",
        title: "Legenda Ine Pare",
        description: "Mitos Ibu Padi dari masyarakat Lio di Flores. Mengisahkan anak yatim piatu yang tewas terbunuh, dan dari titik air mata/darah mereka tumbuhlah tanaman yang menjadi bahan pangan pokok (padi, jagung). Kisah ini adalah landasan spiritual bagi ritual pertanian masyarakat lokal.",
        citationIds: ["ntt-ref-wbtb"],
      },
      {
        id: "ntt-story-item-02",
        title: "Tiga Warna Kelimutu",
        description: "Legenda pertarungan Ata Bupu (tokoh bijak yang menjelma menjadi danau orang tua) melawan Ata Polo (penyihir jahat yang menjadi danau merah menyala) dalam memperebutkan anak muda-mudi. Ketiganya dipercaya merepresentasikan perhentian arwah manusia sesuai amal perbuatan saat hidup.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "ntt-cont-01",
        content: "Transformasi besar sedang terjadi di NTT. Penetapan Labuan Bajo (Flores Barat) sebagai Destinasi Pariwisata Super Prioritas (DPSP) membawa percepatan infrastruktur kelas dunia.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ntt-cont-02",
        content: "Selain bertumpu pada pariwisata super premium, NTT juga mengembangkan potensi energi terbarukan dari sumber panas bumi (geothermal) di Pulau Flores yang dicanangkan sebagai Geothermal Island, serta peternakan sapi berskala besar di hamparan sabana.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    referenceIds: ["ntt-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "ntt-travel-01",
        content: "Berwisata ke NTT layaknya sebuah ekspedisi alam liar. Jarak antar destinasi di Pulau Flores sangat jauh dan dihubungkan oleh Jalur Trans Flores yang berliku tajam mengular melewati pegunungan.",
        citationIds: ["ntt-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "ntt-travel-02",
        content: "Sangat disarankan menghormati hari-hari suci (seperti perayaan Paskah Semana Santa di Larantuka). Jika mengunjungi desa adat di Sumba atau Flores, wajib meminta izin tetua adat dan mengikuti ritual penyambutan 'siri pinang' atau meminum kopi yang disuguhkan sebagai simbol kekerabatan.",
        citationIds: ["ntt-ref-wbtb"],
      }
    ],
    referenceIds: ["ntt-ref-bps", "ntt-ref-wbtb"],
  },

  lastReviewedAt: "2026-07-12T16:35:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ntt-ref-bps",
    "ntt-ref-wbtb",
    "ntt-ref-unesco-komodo",
    "ntt-ref-sejarah",
    "ntt-ref-bahasa"
  ]
};
