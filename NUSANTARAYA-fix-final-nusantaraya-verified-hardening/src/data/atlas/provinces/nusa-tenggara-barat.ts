import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const nusaTenggaraBaratReferences: ScientificReference[] = [
  {
    id: "ntb-ref-bps",
    title: "Provinsi Nusa Tenggara Barat Dalam Angka 2024",
    authors: ["BPS Provinsi NTB"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Nusa Tenggara Barat",
    url: "https://ntb.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "ntb-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: NTB",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "ntb-ref-rinjani",
    title: "Gunung Rinjani National Park",
    authors: ["UNESCO Global Geoparks"],
    year: 2018,
    publisher: "UNESCO",
    url: "https://en.unesco.org/global-geoparks/rinjani-lombok",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["biodiversity", "destinations", "geography"],
  },
  {
    id: "ntb-ref-tambora",
    title: "Tambora: The Eruption That Changed the World",
    authors: ["Wood, Gillen D'Arcy"],
    year: 2014,
    publisher: "Princeton University Press",
    url: "https://id.wikipedia.org/wiki/Letusan_Tambora_1815",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["history", "geography"],
  },
  {
    id: "ntb-ref-sasak",
    title: "Islam and Adat among Sasak of Lombok",
    authors: ["Barth, Fredrik"],
    year: 1993,
    publisher: "Duke University Press",
    url: "https://en.wikipedia.org/wiki/Sasak_people",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["nusa-tenggara-barat"],
    topicIds: ["society", "culture"],
  }
];

export const nusaTenggaraBaratAtlas: ProvinceAtlas = {
  provinceId: "nusa-tenggara-barat",
  slug: "nusa-tenggara-barat",
  title: "Nusa Tenggara Barat",
  tagline: "Bumi Gora, Dua Pulau Sejuta Pesona Puncak Rinjani",
  summary: [
    {
      id: "ntb-sum-01",
      content: "Nusa Tenggara Barat (NTB) berdiri gagah di atas dua raksasa daratan yang diikat oleh laut: Pulau Lombok (Tanah Sasak) di barat, dan Pulau Sumbawa (Tanah Samawa & Mbojo) di timur. Dikenal dengan julukan 'Pulau Seribu Masjid' karena ketaatan spiritual warganya, NTB menyimpan kekuatan alam pembuat sejarah; mulai dari kepundan suci Rinjani hingga kaldera Tambora yang pernah membekukan dunia pada 1815. Hari ini, dengan hadirnya sirkuit kelas wahid MotoGP Mandalika, NTB melesat merangkul kemodernan global tanpa menanggalkan sarung tenun ikat dan nyali tarung rotan mereka.",
      citationIds: ["ntb-ref-bps", "ntb-ref-tambora"],
    }
  ],
  quickFacts: [
    { id: "ntb-qf-01", label: "Ibu Kota", value: "Mataram", citationIds: ["ntb-ref-bps"] },
    { id: "ntb-qf-02", label: "Luas Wilayah", value: "20.124,48 km²", citationIds: ["ntb-ref-bps"], dataYear: 2024 },
    { id: "ntb-qf-03", label: "Populasi", value: "5.540.090 jiwa", citationIds: ["ntb-ref-bps"], dataYear: 2023 },
    { id: "ntb-qf-04", label: "Gunung Berapi Utama", value: "Rinjani (3.726 mdpl)", citationIds: ["ntb-ref-rinjani"] },
    { id: "ntb-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["ntb-ref-bps"] },
    { id: "ntb-qf-06", label: "Gubernur", value: "Lalu Gita Ariadi (Pj.)", citationIds: ["ntb-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ntb-geo-01",
        content: "Kepulauan vulkanik kembar beda karakter; Lombok yang sangat hijau-basah dan Sumbawa yang berbukit sabana kering memanjang.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ntb-geo-02",
        content: "Di ujung barat, Pulau Lombok didominasi oleh kerucut raksasa Gunung Rinjani dengan kawah biru Segara Anak. Garis Wallace melintasi Selat Lombok, membelah fauna Asia dan Australasia secara tajam. Menyeberang ke timur melintasi Selat Alas, membentang Pulau Sumbawa yang tiga kali lebih luas, beriklim jauh lebih gersang, dan dipenuhi padang rumput sabana luas yang menjadi surga peternakan kuda/sapi liar. Di tengah utara Sumbawa, menganga kaldera raksasa Gunung Tambora.",
        citationIds: ["ntb-ref-rinjani", "ntb-ref-bps"],
      }
    ],
    referenceIds: ["ntb-ref-bps", "ntb-ref-rinjani", "ntb-ref-tambora"],
  },

  history: {
    introduction: [
      {
        id: "ntb-his-01",
        content: "Sejarah NTB dikoyak oleh letusan gunung api yang mengubah iklim dunia dan jejak panjang invasi kerajaan tetangga.",
        citationIds: ["ntb-ref-tambora"],
      }
    ],
    timeline: [
      {
        id: "ntb-era-01",
        period: "Abad ke-16",
        title: "Kerajaan Selaparang & Bima",
        description: "Lombok dipimpin oleh Kerajaan Selaparang Hindu yang kemudian diislamkan oleh pendakwah Jawa (Sunan Prapen), sedangkan Sumbawa bagian timur dikuasai Kesultanan Bima yang beraliansi kuat dengan Kesultanan Gowa-Tallo dari Sulawesi.",
        citationIds: ["ntb-ref-sasak"],
      },
      {
        id: "ntb-era-02",
        period: "1815",
        title: "Erupsi Mega Kolosal Tambora",
        description: "Gunung Tambora di Sumbawa meletus dengan skala VEI 7 (terbesar dalam sejarah peradaban). Menyemburkan abu hingga ke atmosfer stratosfer, memicu fenomena 'Tahun Tanpa Musim Panas' (The Year Without a Summer) di Eropa dan Amerika Utara pada 1816, serta melenyapkan tiga kerajaan kecil lokal.",
        citationIds: ["ntb-ref-tambora"],
      },
      {
        id: "ntb-era-03",
        period: "Abad ke-18 – 1894",
        title: "Penaklukan Karangasem & VOC",
        description: "Raja-raja Bali (Karangasem) menaklukkan Lombok dan menanamkan pengaruh kuat arsitektur dan irigasi Subak (Pura Lingsar). Pemberontakan Sasak terhadap kekuasaan Bali memicu kedatangan militer Belanda (Perang Lombok 1894) yang mengakhiri dominasi Karangasem dan memulai kontrol penuh Hindia Belanda.",
        citationIds: ["ntb-ref-sasak"],
      },
      {
        id: "ntb-era-04",
        period: "Maret 2022",
        title: "Debut MotoGP Mandalika",
        description: "Sirkuit Mandalika (Lombok Selatan) resmi menggelar perhelatan balap motor kelas dunia, menempatkan wajah pariwisata Indonesia kembali di sirkuit utama kejuaraan global.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    referenceIds: ["ntb-ref-tambora", "ntb-ref-sasak", "ntb-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "ntb-soc-01",
        content: "Etnis NTB berdiri di atas akar religius Islam yang sangat kuat, seringkali menjadi benteng penyeimbang kultural terhadap sekularisme pariwisata.",
        citationIds: ["ntb-ref-sasak"],
      }
    ],
    socialStructure: [
      {
        id: "ntb-soc-02",
        content: "Masyarakat Lombok mayoritas adalah Suku Sasak (Muslim), yang menjuluki pulau mereka 'Seribu Masjid'. Secara tradisional, Tuan Guru (ulama) memiliki pengaruh sosial politik yang nyaris tak tertandingi (seperti pendiri Nahdlatul Wathan). Di Sumbawa, terdapat Suku Samawa (barat) dan Suku Mbojo/Bima (timur). Keunikan sosial NTB adalah tradisi kawin lari (Merariq) pada Suku Sasak, di mana pihak pria secara adat diharuskan 'menculik' sang gadis di malam hari dari rumah orang tuanya sebelum dinikahi demi harga diri keluarga.",
        citationIds: ["ntb-ref-sasak", "ntb-ref-wbtb"],
      }
    ],
    referenceIds: ["ntb-ref-sasak", "ntb-ref-wbtb"],
  },

  culture: {
    introduction: [
      {
        id: "ntb-cul-01",
        content: "Budaya panggung di NTB berpusat pada uji kejantanan fisik dan perayaan panen yang meriah.",
        citationIds: ["ntb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntb-cul-item-01",
        category: "Ritual Laut Pesisir Selatan",
        title: "Bau Nyale (Menangkap Cacing Laut)",
        description: "Tradisi Suku Sasak di pantai Kuta/Mandalika pada bulan Februari/Maret. Ribuan orang turun ke pantai saat fajar menyingsing (dibuka oleh tokoh adat) untuk berburu Nyale (cacing palolo warna-warni) yang bermunculan setahun sekali. Cacing ini diyakini membawa kesuburan.",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-cul-item-02",
        category: "Seni Bela Diri Sakral",
        title: "Peresean",
        description: "Pertarungan fisik antara dua lelaki Sasak (Pepadu) yang bertelanjang dada. Mereka bersenjatakan tongkat rotan (Penjalin) untuk memukul dan perisai kulit kerbau (Ende). Jika darah mengalir akibat pukulan, hal itu dipercaya akan memanggil hujan saat kemarau panjang.",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-cul-item-03",
        category: "Busana/Tenun Tradisional",
        title: "Tenun Ikat Mbojo & Tradisi Rimpu",
        description: "Kain tenun Bima (Tembe Nggoli) sangat tebal. Perempuan Bima tradisional menggunakan dua helai sarung tenun ini untuk menutupi seluruh tubuh hingga hanya menyisakan celah mata; tradisi busana syariat yang disebut 'Rimpu'.",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-cul-item-04",
        category: "Balap Hewan Sabana",
        title: "Maen Jaran (Balap Kuda Sumbawa)",
        description: "Pacuan kuda tradisional Bima/Sumbawa yang sangat ekstrim. Joki-jokinya adalah anak laki-laki kecil (bahkan usia 6-10 tahun) yang menunggangi kuda dengan kecepatan tinggi (tanpa pelana pengaman) di lintasan debu tebal.",
        citationIds: ["ntb-ref-wbtb"],
      }
    ],
    referenceIds: ["ntb-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "ntb-lang-01",
        content: "Lombok dan Sumbawa dipisahkan secara linguistik yang tajam; tidak saling mengerti walau hanya dipisah satu selat sempit.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "ntb-voc-01", word: "Ape Kuni?", meaning: "Apa Kabar? (Bahasa Sasak).", citationIds: ["ntb-ref-sasak"] },
      { id: "ntb-voc-02", word: "Mada / Naha", meaning: "Saya / Tidak (Bahasa Bima/Mbojo).", citationIds: ["ntb-ref-bps"] },
      { id: "ntb-voc-03", word: "Merariq", meaning: "Tradisi kawin lari (menculik calon istri) suku Sasak.", citationIds: ["ntb-ref-wbtb"] },
      { id: "ntb-voc-04", word: "Ngiring", meaning: "Mari/Silakan (pengaruh akar kerajaan Bali di Lombok barat).", citationIds: ["ntb-ref-sasak"] },
    ],
    referenceIds: ["ntb-ref-bps", "ntb-ref-sasak", "ntb-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "ntb-culi-01",
        content: "Dapur Lombok mengagungkan kejamnya rasa pedas cabai lokal murni (tanpa rasa manis), yang membakar kerongkongan namun adiktif.",
        citationIds: ["ntb-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ntb-culi-item-01",
        title: "Ayam Taliwang & Plecing Kangkung",
        description: "Ikon kuliner Lombok. Ayam kampung muda (biasanya berumur 3-4 bulan, masih sangat kecil) yang dibakar menantang dengan bumbu terasi, bawang, dan cabai melimpah gila-gilaan. Pendamping wajibnya adalah kangkung air Lombok yang batangnya sangat besar renyah disiram sambal terasi mentah perasan jeruk limau (Plecing).",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-culi-item-02",
        title: "Sate Rembiga",
        description: "Sate sapi manis pedas khas Mataram (Desa Rembiga). Daging sapi direndam lama dengan ketumbar, asam jawa, dan gula merah muda sebelum dibakar tanpa bumbu kacang/kecap saus tambahan sama sekali (sudah meresap kuat).",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-culi-item-03",
        title: "Soto Sepat (Sumbawa)",
        description: "Sup ikan bakar berkuah bening asam segar. Keunikan Sepat adalah penggunaan mangga muda parut, belimbing wuluh, dan air kaldu perasan daun asam (kemangi/ruku-ruku) yang membuat mata langsung melek seketika.",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-culi-item-04",
        title: "Susu Kuda Liar & Madu Hutan Sumbawa",
        description: "Sumbawa terkenal memproduksi madu hutan lebah raksasa (Apis dorsata) dan susu dari kuda yang dilepasliarkan di padang sabana, dipercaya mengandung khasiat probiotik keperkasaan/penyembuhan alami tinggi.",
        citationIds: ["ntb-ref-wbtb"],
      }
    ],
    referenceIds: ["ntb-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ntb-bio-01",
        content: "Garis Wallace yang melintas tepat di antara Bali dan Lombok mengubah total lanskap fauna NTB menjadi jauh lebih eksotis ke-Australasia-an.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    species: [
      {
        id: "ntb-bio-item-01",
        category: "Fauna Endemik (Darat)",
        title: "Rusa Timor (Cervus timorensis)",
        description: "Mamalia liar yang mendiami padang rumput Bima/Dompu. Rusa jantannya memiliki tanduk panjang meruncing. Sering menjadi target perburuan tradisional yang kini dikontrol ketat oleh negara.",
        citationIds: ["ntb-ref-bps"],
      },
      {
        id: "ntb-bio-item-02",
        category: "Kuda Sabana Timur",
        title: "Kuda Liar Sumbawa (Kuda Sumba)",
        description: "Kuda berukuran kecil namun sangat kuat (pony), yang tidak dikandangkan secara tertutup melainkan dilepas ribuan ekor berkeliaran di padang sabana (lar).",
        citationIds: ["ntb-ref-bps"],
      },
      {
        id: "ntb-bio-item-03",
        category: "Konservasi Laut Tiga Gili",
        title: "Penyu Hijau & Penyu Sisik",
        description: "Perairan Gili Trawangan, Meno, dan Air adalah zona aman (Turtle Sanctuary) di mana penyelam bisa dengan mudah berpapasan dengan puluhan penyu berukuran raksasa merumput di dasar karang dangkal.",
        citationIds: ["ntb-ref-rinjani"],
      }
    ],
    referenceIds: ["ntb-ref-bps", "ntb-ref-rinjani"],
  },

  destinations: {
    introduction: [
      {
        id: "ntb-dest-01",
        content: "Pilihan ekstrem bagi turis di NTB: membakar betis mendaki kawah vulkanik 3.726 mdpl atau bermalas-malasan tanpa kendaraan bermotor di surga pasir putih Gili.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    items: [
      {
        id: "ntb-dest-item-01",
        category: "Pendakian Bintang Lima Asia",
        title: "Gunung Rinjani & Segara Anak",
        description: "Rute pendakian terindah se-Indonesia. Trek berhari-hari menembus hutan (Senaru/Sembalun), mengarah ke kawah raksasa yang menampung danau biru panas (Segara Anak) dengan anak gunung menyembul di tengahnya (Gunung Barujari).",
        citationIds: ["ntb-ref-rinjani"],
      },
      {
        id: "ntb-dest-item-02",
        category: "Tiga Pulau Tanpa Polusi",
        title: "Gili Trawangan, Meno, dan Air",
        description: "Tiga pulau karang kecil di barat laut Lombok di mana penggunaan kendaraan bermotor (mesin) diharamkan sepenuhnya oleh hukum adat desa. Transportasi hanya menggunakan sepeda gayung atau kereta kuda (Cidomo). Surga kafe malam dan diving.",
        citationIds: ["ntb-ref-bps"],
      },
      {
        id: "ntb-dest-item-03",
        category: "Wisata Otomotif Megah",
        title: "Sirkuit Internasional Pertamina Mandalika",
        description: "Sirkuit balap (Street Circuit) beraspal canggih sepanjang 4,3 km yang dibangun menempel dengan deburan ombak pantai Tanjung Aan dan perbukitan karang di Lombok Selatan. Jadi tuan rumah MotoGP setiap tahun.",
        citationIds: ["ntb-ref-bps"],
      },
      {
        id: "ntb-dest-item-04",
        category: "Wisata Budaya Desa",
        title: "Desa Adat Sade / Ende",
        description: "Perkampungan suku Sasak asli di Pujut. Rumah-rumahnya masih beratap alang-alang (Bale Tani) berlantaikan tanah liat murni yang rutin dipel/digosok secara unik menggunakan kotoran kerbau cair (yang ajaibnya tidak berbau).",
        citationIds: ["ntb-ref-sasak"],
      }
    ],
    referenceIds: ["ntb-ref-rinjani", "ntb-ref-bps", "ntb-ref-sasak"],
  },

  stories: {
    introduction: [
      {
        id: "ntb-story-01",
        content: "Dongeng terbesar NTB lahir dari pengorbanan dramatis sang putri yang tidak ingin sukunya saling bunuh demi memperebutkan kecantikannya.",
        citationIds: ["ntb-ref-wbtb"],
      }
    ],
    stories: [
      {
        id: "ntb-story-item-01",
        title: "Legenda Putri Mandalika",
        description: "Putri berparas luar biasa cantik yang dilamar oleh banyak pangeran kuat dari berbagai kerajaan. Jika ia memilih satu, pangeran lain akan memulai perang. Demi mencegah pertumpahan darah rakyat, Mandalika menenggelamkan dirinya sendiri (terjun) ke ganasnya ombak lautan. Rakyat meyakini wujudnya menjelma menjadi cacing Nyale yang muncul setahun sekali.",
        citationIds: ["ntb-ref-wbtb"],
      },
      {
        id: "ntb-story-item-02",
        title: "Kemurkaan Gunung Tambora",
        description: "Kisah lisan kuno menganggap letusan Tambora (1815) adalah azab Tuhan karena raja Kerajaan Tambora membunuh sadis seorang ulama sakti Arab keturunan nabi yang saat itu menyebarkan agama, memicu ledakan yang mengubur rata kerajaan tersebut bagai kota Pompeii.",
        citationIds: ["ntb-ref-tambora"],
      }
    ],
    referenceIds: ["ntb-ref-wbtb", "ntb-ref-tambora"],
  },

  contemporary: {
    introduction: [
      {
        id: "ntb-cont-01",
        content: "Sirkuit balap Mandalika ibarat pedang bermata dua: melesatkan nama Lombok ke jagat motorsport, sekaligus meminggirkan warga lokal yang tergusur.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ntb-cont-02",
        content: "Status KEK (Kawasan Ekonomi Khusus) Mandalika adalah pertaruhan triliunan rupiah dari pemerintah pusat untuk menciptakan 'The New Bali'. Sementara Lombok Selatan diguyur investasi hotel mewah dan aspal MotoGP, di Pulau Sumbawa, raksasa tambang emas dan tembaga (Batu Hijau/AMMAN) menyedot hasil bumi dengan keuntungan fantastis.",
        citationIds: ["ntb-ref-bps"],
      }
    ],
    referenceIds: ["ntb-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "ntb-travel-01",
        content: "Jangan anggap NTB sama dengan Bali; ini adalah wilayah di mana toleransi dipadukan erat dengan kesopanan syariat Islam.",
        citationIds: ["ntb-ref-sasak"],
      }
    ],
    etiquette: [
      {
        id: "ntb-travel-02",
        content: "Turis dilarang keras berjalan-jalan dengan menggunakan bikini/pakaian renang terlalu terbuka di luar area pantai terlarang, terutama jika masuk ke kawasan pemukiman atau perdesaan (Senggigi/Mataram). Hindari membunyikan klakson panjang atau memotong iring-iringan upacara adat pengantin (Nyongkolan) Suku Sasak yang sering menutup seluruh badan jalan raya provinsi di hari libur. Saat di desa Sade, jadilah pembeli suvenir (kain) yang sopan karena itu urat nadi ekonomi mereka.",
        citationIds: ["ntb-ref-sasak"],
      }
    ],
    referenceIds: ["ntb-ref-sasak"],
  },

  lastReviewedAt: "2026-07-13T00:41:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ntb-ref-bps",
    "ntb-ref-wbtb",
    "ntb-ref-rinjani",
    "ntb-ref-tambora",
    "ntb-ref-sasak"
  ]
};
