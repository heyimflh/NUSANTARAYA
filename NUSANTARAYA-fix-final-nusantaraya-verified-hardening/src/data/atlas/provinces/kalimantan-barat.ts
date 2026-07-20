import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const kalimantanBaratReferences: ScientificReference[] = [
  {
    id: "klb-ref-bps",
    title: "Provinsi Kalimantan Barat Dalam Angka 2024",
    authors: ["BPS Provinsi Kalimantan Barat"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Kalimantan Barat",
    url: "https://kalbar.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "klb-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Kalimantan Barat",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "klb-ref-sejarah",
    title: "Sejarah Kesultanan Pontianak dan Republik Lanfang",
    authors: ["Heidhues, Mary Somers"],
    year: 2003,
    publisher: "SEAP Publications",
    url: "https://id.wikipedia.org/wiki/Republik_Lanfang",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["history", "society"],
  },
  {
    id: "klb-ref-sentarum",
    title: "Danau Sentarum National Park",
    authors: ["Ramsar Convention"],
    year: 1994,
    publisher: "Ramsar Sites Information Service",
    url: "https://rsis.ramsar.org/ris/667",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["geography", "biodiversity", "destinations"],
  },
  {
    id: "klb-ref-dayak",
    title: "Manusia Dayak: Orang Pedalaman Kalimantan",
    authors: ["Coomans, Mikhail"],
    year: 1987,
    publisher: "Penerbit Gramedia",
    url: "https://id.wikipedia.org/wiki/Suku_Dayak",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["kalimantan-barat"],
    topicIds: ["society"],
  }
];

export const kalimantanBaratAtlas: ProvinceAtlas = {
  provinceId: "kalimantan-barat",
  slug: "kalimantan-barat",
  title: "Kalimantan Barat",
  tagline: "Provinsi Seribu Sungai di Jantung Khatulistiwa",
  summary: [
    {
      id: "klb-sum-01",
      content: "Terbelah persis oleh garis lintang nol derajat Bumi (Khatulistiwa), Kalimantan Barat (Kalbar) adalah daratan raksasa yang dihidupi oleh aliran Sungai Kapuas (sungai terpanjang di Indonesia). Demografinya sangat unik, mempertemukan Kesultanan Melayu pesisir, kebijaksanaan hutan masyarakat adat Dayak, dan warisan niaga keturunan Tionghoa (Hakka/Teochew) yang pernah mendirikan kongsi republik penambang emas tertua di Asia Tenggara. Secara geopolitik, Kalbar juga merupakan gerbang darat terpanjang Indonesia yang berbatasan langsung dengan Malaysia (Sarawak).",
      citationIds: ["klb-ref-bps", "klb-ref-sejarah"],
    }
  ],
  quickFacts: [
    { id: "klb-qf-01", label: "Ibu Kota", value: "Pontianak", citationIds: ["klb-ref-bps"] },
    { id: "klb-qf-02", label: "Luas Wilayah", value: "147.307,00 km²", citationIds: ["klb-ref-bps"], dataYear: 2024 },
    { id: "klb-qf-03", label: "Populasi", value: "5.541.376 jiwa", citationIds: ["klb-ref-bps"], dataYear: 2023 },
    { id: "klb-qf-04", label: "Ikon Alam", value: "Sungai Kapuas & Garis Khatulistiwa", citationIds: ["klb-ref-bps"] },
    { id: "klb-qf-05", label: "Zona Waktu", value: "WIB (UTC+7)", citationIds: ["klb-ref-bps"] },
    { id: "klb-qf-06", label: "Gubernur", value: "Harisson (Pj.)", citationIds: ["klb-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "klb-geo-01",
        content: "Geografi Kalbar sangat didominasi oleh perairan pedalaman ('Provinsi Seribu Sungai'). Daratannya relatif datar di sebelah barat dan perlahan menanjak menjadi Pegunungan Muller dan Kapuas Hulu di batas timur.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "klb-geo-02",
        content: "Sungai Kapuas (1.143 km) mengular dari pedalaman membelah seluruh provinsi hingga bermuara di Pontianak. Jauh di hulu (Kapuas Hulu), terdapat ekosistem lahan basah raksasa, Danau Sentarum, yang mengering saat kemarau panjang dan meluap menjadi lautan air tawar saat musim penghujan. Hutan hujan tropis yang lebat menyelimuti sebagian besar perbatasan darat dengan Sarawak, Malaysia.",
        citationIds: ["klb-ref-sentarum"],
      }
    ],
    referenceIds: ["klb-ref-bps", "klb-ref-sentarum"],
  },

  history: {
    introduction: [
      {
        id: "klb-his-01",
        content: "Sejarah Kalbar diwarnai berdirinya kesultanan-kesultanan pesisir, eksploitasi emas kolonial, dan tragedi berdarah selama pendudukan Jepang.",
        citationIds: ["klb-ref-sejarah"],
      }
    ],
    timeline: [
      {
        id: "klb-era-01",
        period: "1771",
        title: "Berdirinya Kesultanan Pontianak",
        description: "Syarif Abdurrahman Alkadrie (seorang Habib keturunan Arab) membuka lahan di simpang Sungai Kapuas dan Landak. Ia mendirikan Masjid Jami dan Istana Kadriah, yang menjadi cikal bakal Kota Pontianak.",
        citationIds: ["klb-ref-sejarah"],
      },
      {
        id: "klb-era-02",
        period: "1777 – 1884",
        title: "Republik Lanfang (Kongsi Emas)",
        description: "Ribuan penambang emas Tionghoa Hakka yang dipimpin oleh Low Lan Pak membentuk 'Republik Lanfang' di Mandor. Ini adalah salah satu bentuk pemerintahan republik demokratis (kongsi) pertama di Asia Tenggara, sebelum akhirnya dibubarkan oleh militer Belanda.",
        citationIds: ["klb-ref-sejarah"],
      },
      {
        id: "klb-era-03",
        period: "1943 – 1944",
        title: "Peristiwa Mandor (Tragedi Berdarah)",
        description: "Militer Kekaisaran Jepang melakukan penangkapan dan pembantaian massal terhadap ribuan elite, sultan-sultan Melayu Kalbar, cendekiawan, dan tokoh masyarakat (Tragedi Mandor). Peristiwa ini memusnahkan hampir seluruh generasi pemimpin intelektual Kalbar pada masa itu.",
        citationIds: ["klb-ref-sejarah"],
      },
      {
        id: "klb-era-04",
        period: "1957",
        title: "Pembentukan Provinsi Kalimantan Barat",
        description: "Setelah masa RIS berlalu, Kalimantan Barat ditetapkan sebagai provinsi otonom dengan Pontianak sebagai ibu kota pemerintahannya.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    referenceIds: ["klb-ref-sejarah", "klb-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "klb-soc-01",
        content: "Masyarakat Kalbar berdiri di atas tiga pilar demografi budaya utama yang sering disebut 'Tidayu' (Tionghoa, Dayak, Melayu).",
        citationIds: ["klb-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "klb-soc-02",
        content: "Suku Dayak (ratusan sub-suku seperti Kanayatn, Iban, Mualang) mendiami daerah pedalaman dan pesisir sungai, mempertahankan hukum adat rumah betang (panjang). Suku Melayu mendiami kawasan pesisir dan muara. Sementara etnis Tionghoa (mayoritas Hakka di Singkawang dan Teochew di Pontianak) sangat mewarnai perekonomian pasar. Kota Singkawang dijuluki 'Kota Seribu Kelenteng' karena persentase etnis Tionghoa yang sangat dominan.",
        citationIds: ["klb-ref-dayak"],
      }
    ],
    referenceIds: ["klb-ref-bps", "klb-ref-dayak"],
  },

  culture: {
    introduction: [
      {
        id: "klb-cul-01",
        content: "Puncak kebudayaan Kalbar terjadi saat perayaan adat pasca-panen (Dayak) dan perayaan hari ke-15 Tahun Baru Imlek (Tionghoa).",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klb-cul-item-01",
        category: "Festival Adat Ekstrem",
        title: "Cap Go Meh & Pawai Tatung (Singkawang)",
        description: "Perayaan Cap Go Meh terbesar di Asia Tenggara. Ratusan 'Tatung' (dukun/medium roh leluhur pahlawan Tiongkok atau roh Dayak) berpawai dalam kondisi trance (kerasukan), menusuk pipi dan badan mereka dengan besi tajam tanpa berdarah untuk mengusir roh jahat.",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-cul-item-02",
        category: "Upacara Syukur (Dayak)",
        title: "Gawai Dayak",
        description: "Ritual pesta panen padi tahunan masyarakat Dayak yang ditandai dengan upacara selamatan, minum tuak beras (baram), dan tarian perang, dipusatkan di Rumah Radakng (rumah panjang replika raksasa di Pontianak).",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-cul-item-03",
        category: "Tradisi Melayu Raya",
        title: "Festival Meriam Karbit",
        description: "Diadakan setiap malam takbiran Idul Fitri di bantaran Sungai Kapuas. Warga menyalakan puluhan batang pohon raksasa yang dilubangi dan diisi karbit, menghasilkan suara ledakan memekakkan telinga (mitosnya untuk mengusir hantu kuntilanak).",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-cul-item-04",
        category: "Kriya Tekstil Tradisional",
        title: "Tenun Ikat Sambas (Kain Lunggi)",
        description: "Kain tenun songket khas Melayu Sambas bertenang emas dengan motif pucuk rebung, banyak digunakan dalam acara perkawinan adat istana pesisir.",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    referenceIds: ["klb-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "klb-lang-01",
        content: "Bahasa Melayu dialek Pontianak adalah lingua franca dengan nada vokal yang berayun cepat. Selain itu, Bahasa Khek (Hakka) sangat lumrah terdengar di pasar-pasar tradisional.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "klb-voc-01", word: "Kamek / Kitak", meaning: "Saya / Kalian (Melayu Pontianak).", citationIds: ["klb-ref-bps"] },
      { id: "klb-voc-02", word: "Aok", meaning: "Iya.", citationIds: ["klb-ref-bps"] },
      { id: "klb-voc-03", word: "Ame", meaning: "Jangan (Bahasa Dayak Kanayatn).", citationIds: ["klb-ref-dayak"] },
      { id: "klb-voc-04", word: "Ngi / Ngai", meaning: "Kamu / Saya (Bahasa Hakka/Khek).", citationIds: ["klb-ref-sejarah"] },
    ],
    referenceIds: ["klb-ref-bps", "klb-ref-dayak", "klb-ref-sejarah"],
  },

  culinary: {
    introduction: [
      {
        id: "klb-culi-01",
        content: "Persilangan masakan Melayu dan Tionghoa melahirkan mahakarya street-food yang melegenda, yang sangat dipengaruhi oleh kedekatan akses bahan baku sari laut dan hasil hutan.",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "klb-culi-item-01",
        title: "Choi Pan (Chai Kue)",
        description: "Jajanan Tionghoa asal Singkawang. Pangsit tipis tembus pandang (terbuat dari tepung beras/tapioka) berisi irisan bengkuang, ebi, atau kucai yang dikukus matang, disajikan dengan minyak bawang putih goreng dan sambal cuka.",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-culi-item-02",
        title: "Bubur Pedas (Bubbor Paddas)",
        description: "Makanan khas Melayu Sambas (meski namanya pedas, rasanya tidak cabai). Bubur nasi ini dimasak dengan kaldu sapi, kesum (daun laksa), daun kunyit, pakis, dan ubi jalar, disajikan dengan kacang goreng dan teri. Tampilannya kecoklatan karena beras disangrai lebih dulu.",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-culi-item-03",
        title: "Pengkang",
        description: "Ketan kukus berbentuk kerucut (segitiga) yang dibungkus daun pisang, di dalamnya berisi udang ebi manis berbumbu. Pengkang dijepit dengan bilah bambu lalu dibakar di atas arang, dihidangkan bersama sambal kepah (kerang).",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-culi-item-04",
        title: "Kwetiau Sapi & Kopi Asiang",
        description: "Pontianak terkenal dengan kwetiau goreng atau kuah daging sapi khas Teochew. Sementara untuk minuman ringan, warung Kopi Asiang (kopi tarik) sangat terkenal dengan pembuatnya yang beraksi tanpa mengenakan baju.",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    referenceIds: ["klb-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "klb-bio-01",
        content: "Kawasan Betung Kerihun dan Danau Sentarum menjadi paru-paru dunia yang dihuni satwa kunci purba Kalimantan.",
        citationIds: ["klb-ref-sentarum"],
      }
    ],
    species: [
      {
        id: "klb-bio-item-01",
        category: "Fauna Endemik (Maskot & Simbol Adat)",
        title: "Burung Enggang Gading (Rhinoplax vigil)",
        description: "Burung rangkong (hornbill) raksasa dengan helm (balung) padat berwarna merah-kuning di paruhnya. Sangat disakralkan oleh Suku Dayak sebagai simbol alam atas (kepemimpinan dan perdamaian). Sayangnya, ia sangat diburu secara ilegal untuk diambil gading/paruhnya (emas merah).",
        citationIds: ["klb-ref-bps"],
      },
      {
        id: "klb-bio-item-02",
        category: "Fauna Primata",
        title: "Orangutan Kalimantan (Pongo pygmaeus)",
        description: "Kera besar khas Kalimantan yang menyebar luas di TN Betung Kerihun dan Danau Sentarum. Ukuran badannya sedikit lebih besar dan warna rambutnya lebih gelap dibanding kerabatnya di Sumatera.",
        citationIds: ["klb-ref-sentarum"],
      },
      {
        id: "klb-bio-item-03",
        category: "Flora Maskot",
        title: "Tengkawang Tungkul (Shorea macrophylla)",
        description: "Pohon raksasa penghasil biji/buah tengkawang (meranti-merantian) yang lemaknya diekstrak menjadi 'mentega hijau' alami berkadar tinggi, biasa digunakan penduduk lokal untuk memasak atau industri kosmetik mahal.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    referenceIds: ["klb-ref-sentarum", "klb-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "klb-dest-01",
        content: "Pariwisata di Kalbar memadukan edukasi fenomena garis ekuator dan pengalaman ekstrim menyusuri hulu pedalaman sungai.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    items: [
      {
        id: "klb-dest-item-01",
        category: "Ikon Geografi Internasional",
        title: "Tugu Khatulistiwa (Equator Monument)",
        description: "Monumen penanda garis lintang 0 derajat di utara Pontianak. Setiap bulan Maret dan September (Ekuinoks/Kulminasi Matahari), bayangan tugu dan benda-benda tegak di sekitarnya akan menghilang (tegak lurus sempurna).",
        citationIds: ["klb-ref-bps"],
      },
      {
        id: "klb-dest-item-02",
        category: "Sejarah & Keraton",
        title: "Istana Kadriah & Masjid Jami",
        description: "Kompleks istana Kesultanan Pontianak peninggalan Syarif Abdurrahman yang seluruh bangunannya didominasi kayu belian (kayu besi) berwarna kuning. Di depannya mengalir cabang Kapuas yang menyejukkan.",
        citationIds: ["klb-ref-sejarah"],
      },
      {
        id: "klb-dest-item-03",
        category: "Kawasan Pecinan Heritage",
        title: "Singkawang (Kota Amoy)",
        description: "Berjarak 3 jam dari Pontianak, menyajikan suasana pecinan klasik yang sangat kental. Terdapat klenteng tertua Tri Dharma Bumi Raya dan puluhan kedai kopi jadul/choipan yang buka dari pagi hingga malam.",
        citationIds: ["klb-ref-sejarah"],
      },
      {
        id: "klb-dest-item-04",
        category: "Ekowisata Lahan Basah",
        title: "Taman Nasional Danau Sentarum",
        description: "Sistem hamparan puluhan danau yang saling terkoneksi ('floodplain' / danau paparan banjir). Tempat ini adalah rumah bagi ikan Arwana Super Red liar yang sangat langka dan berharga ratusan juta rupiah.",
        citationIds: ["klb-ref-sentarum"],
      }
    ],
    referenceIds: ["klb-ref-bps", "klb-ref-sejarah", "klb-ref-sentarum"],
  },

  stories: {
    introduction: [
      {
        id: "klb-story-01",
        content: "Nama ibu kota Pontianak tak lepas dari mitos hantu yang sangat melegenda, berpadu dengan epos pahlawan dari pedalaman.",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "klb-story-item-01",
        title: "Mitos Kuntilanak",
        description: "Legenda menyebut bahwa ketika Syarif Abdurrahman Alkadrie menyusuri Sungai Kapuas untuk membuka pemukiman baru, rombongannya terusik oleh tangisan hantu kuntilanak (Puntianak) yang bergelantungan di pohon. Ia memerintahkan penembakan meriam untuk mengusir makhluk tersebut; di lokasi jatuhnya peluru meriam itulah ia mendirikan masjid dan keraton.",
        citationIds: ["klb-ref-wbtb"],
      },
      {
        id: "klb-story-item-02",
        title: "Legenda Batu Menangis",
        description: "Kisah seorang gadis desa jelita nan sombong yang malu mengakui ibunya sendiri yang miskin di pasar, dan menyebut ibunya sebagai 'pembantu'. Sang ibu berdoa dalam kepedihan, hingga gadis itu dikutuk menjadi batu besar yang meneteskan air (menangis).",
        citationIds: ["klb-ref-wbtb"],
      }
    ],
    referenceIds: ["klb-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "klb-cont-01",
        content: "Kalimantan Barat mengalami transformasi ekonomi pesat melalui investasi hilirisasi tambang mineral dan modernisasi Pos Lintas Batas Negara (PLBN).",
        citationIds: ["klb-ref-bps"],
      }
    ],
    economy: [
      {
        id: "klb-cont-02",
        content: "Perkebunan kelapa sawit adalah tulang punggung ekonomi komersial Kalbar. Secara strategis, daerah Mempawah/Ketapang didorong sebagai pusat smelter Alumina (Bauksit) berkelas dunia (SGAR). Tiga PLBN modern (Entikong, Aruk, Badau) menjadikan Kalbar hub ekspor darat langsung ke Sarawak/Brunei.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    referenceIds: ["klb-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "klb-travel-01",
        content: "Bepergian di Kalimantan Barat berarti meluangkan waktu berjam-jam (bahkan berhari-hari) di dalam bus lintas negara atau perahu sungai.",
        citationIds: ["klb-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "klb-travel-02",
        content: "Masyarakat Dayak menjunjung tinggi prinsip menghargai tamu. Jika Anda ditawari makan/minum di Rumah Betang (Rumah Panjang), minimal Anda harus menyentuh ('menjamah') hidangan tersebut jika sedang kenyang agar tidak dianggap menolak rezeki/melanggar adat (kepuhunan). Jika berkunjung ke Singkawang saat perayaan Tatung, siapkan nyali karena atraksi ini dipenuhi elemen mistis dan benda tajam yang berbahaya bagi anak kecil.",
        citationIds: ["klb-ref-dayak"],
      }
    ],
    referenceIds: ["klb-ref-bps", "klb-ref-dayak"],
  },

  lastReviewedAt: "2026-07-13T00:25:00Z",
  contentStatus: "draft",
  referenceIds: [
    "klb-ref-bps",
    "klb-ref-wbtb",
    "klb-ref-sejarah",
    "klb-ref-sentarum",
    "klb-ref-dayak"
  ]
};
