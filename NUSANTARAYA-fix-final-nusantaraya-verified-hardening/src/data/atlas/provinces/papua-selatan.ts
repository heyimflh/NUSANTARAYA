import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaSelatanReferences: ScientificReference[] = [
  {
    id: "pps-ref-bps",
    title: "Provinsi Papua Selatan Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Selatan"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua Selatan",
    url: "https://papuaselatan.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-selatan"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "pps-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua Selatan",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-selatan"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "pps-ref-asmat",
    title: "The Asmat of New Guinea: The Journal of Michael Clark Rockefeller",
    authors: ["Rockefeller, Michael C.", "Gerbrands, Adrian A."],
    year: 1967,
    publisher: "Museum of Primitive Art",
    url: "https://en.wikipedia.org/wiki/Asmat_people",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua-selatan"],
    topicIds: ["society", "culture", "stories"],
  },
  {
    id: "pps-ref-digoel",
    title: "The Exiles of Boven Digoel",
    authors: ["Shiraishi, Takashi"],
    year: 1990,
    publisher: "Cornell University Press",
    url: "https://id.wikipedia.org/wiki/Boven_Digoel",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua-selatan"],
    topicIds: ["history"],
  },
  {
    id: "pps-ref-wasur",
    title: "Ecology of Wasur National Park",
    authors: ["Bowe, M."],
    year: 1997,
    publisher: "WWF Indonesia",
    url: "https://id.wikipedia.org/wiki/Taman_Nasional_Wasur",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "B",
    provinceIds: ["papua-selatan"],
    topicIds: ["biodiversity", "destinations"],
  }
];

export const papuaSelatanAtlas: ProvinceAtlas = {
  provinceId: "papua-selatan",
  slug: "papua-selatan",
  title: "Papua Selatan",
  tagline: "Sabana Kangguru Tanah (Anim-Ha) dan Ujung Timur Nusantara",
  summary: [
    {
      id: "pps-sum-01",
      content: "Papua Selatan (Wilayah Adat Anim-Ha) menawarkan lanskap datar yang ekstrem. Dari kota lumpur seribu papan di pesisir Asmat yang melahirkan para seniman pahat legendaris (hingga memakan korban miliarder Rockefeller), menyusuri ke hulu sungai mematikan Boven Digoel tempat Bung Hatta pernah dibuang, hingga bermuara di padang sabana raksasa Merauke. Di sinilah letak tapal batas nol kilometer ujung timur peradaban Republik Indonesia. Dataran sabananya dipenuhi istana rayap raksasa (Musamus) dan kangguru tanah (walabi) yang berkejaran, mengukuhkan Merauke sebagai 'Serengeti'-nya Papua tempat ribuan hektar sawah padi modern sedang dicetak.",
      citationIds: ["pps-ref-bps", "pps-ref-asmat", "pps-ref-digoel", "pps-ref-wasur"],
    }
  ],
  quickFacts: [
    { id: "pps-qf-01", label: "Ibu Kota", value: "Merauke", citationIds: ["pps-ref-bps"] },
    { id: "pps-qf-02", label: "Luas Wilayah", value: "117.833,92 km²", citationIds: ["pps-ref-bps"], dataYear: 2024 },
    { id: "pps-qf-03", label: "Populasi", value: "534.659 jiwa", citationIds: ["pps-ref-bps"], dataYear: 2023 },
    { id: "pps-qf-04", label: "Wilayah Adat", value: "Anim-Ha", citationIds: ["pps-ref-bps"] },
    { id: "pps-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["pps-ref-bps"] },
    { id: "pps-qf-06", label: "Gubernur", value: "Apolo Safanpo (Pj.)", citationIds: ["pps-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "pps-geo-01",
        content: "Dataran berawa landai dengan ratusan ribu hektar padang rumput sabana kering mirip benua Australia, dipisahkan oleh sungai sungai besar cokelat berkelok membelah rimba.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "pps-geo-02",
        content: "Geografi Papua Selatan adalah dataran rendah aluvial terluas di pulau Papua. Di pesisir barat (Kabupaten Asmat dan Mappi), lahannya merupakan rawa bakau abadi di mana daratan padat sangat langka (air selalu pasang menenggelamkan lumpur). Bergerak ke timur tenggara (Boven Digoel dan Merauke), topografi mengering berubah menjadi hamparan sabana padang rumput datar yang dipengaruhi langsung oleh iklim benua Australia (Monsun Tropis Kering).",
        citationIds: ["pps-ref-bps", "pps-ref-wasur"],
      }
    ],
    referenceIds: ["pps-ref-bps", "pps-ref-wasur"],
  },

  history: {
    introduction: [
      {
        id: "pps-his-01",
        content: "Sebuah sungai yang namanya menjadi mitos kamp kematian bagi pergerakan kemerdekaan Indonesia (Digoel), dan sebuah muara yang menjadi batas akhir kedaulatan bangsa (Merauke).",
        citationIds: ["pps-ref-digoel"],
      }
    ],
    timeline: [
      {
        id: "pps-era-01",
        period: "1902",
        title: "Penamaan Merauke (Sungai Maro)",
        description: "Asal usul nama kota ini adalah kesalahpahaman bahasa; ketika pelaut Belanda datang menunjuk muara sungai dan bertanya apa namanya, orang suku Marind menjawab 'Maro-ke' (Itu Sungai Maro). Belanda mencatat nama daerah itu menjadi Merauke.",
        citationIds: ["pps-ref-bps"],
      },
      {
        id: "pps-era-02",
        period: "1927 – 1943",
        title: "Kamp Pengasingan Boven Digoel",
        description: "Gubernur Jenderal Hindia Belanda mendirikan Boven Digoel (Tanah Merah) sebagai kamp tahanan alam terbuka tanpa jeruji besi paling sadis. Tokoh nasionalis (Sjahrir, Hatta, Sayuti Melik) dibuang ke sini, dipenjara oleh keganasan nyamuk malaria rawa dan buaya muara yang memagari kamp alam tersebut.",
        citationIds: ["pps-ref-digoel"],
      },
      {
        id: "pps-era-03",
        period: "1961",
        title: "Ekspedisi Rockefeller Asmat",
        description: "Michael Rockefeller (putra miliarder termuda Amerika, Nelson Rockefeller) melakukan ekspedisi mengoleksi seni patung Asmat. Perahunya terbalik di muara sunga pesisir Asmat; ia berenang mencari daratan dan menghilang tanpa jejak (diduga tenggelam atau dimakan buaya, memicu teori konspirasi dunia).",
        citationIds: ["pps-ref-asmat"],
      },
      {
        id: "pps-era-04",
        period: "2022",
        title: "Pembentukan Provinsi Papua Selatan",
        description: "Daerah Anim-Ha dimekarkan mandiri menjadi provinsi terpisah dengan ibu kota Merauke untuk memfokuskan pengembangan kedaulatan logistik perbatasan dan pelestarian kebudayaan selatan.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    referenceIds: ["pps-ref-digoel", "pps-ref-asmat", "pps-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "pps-soc-01",
        content: "Etnis selatan (Anim Ha) bertubuh jenjang tinggi dan merupakan peramu sagu andal yang hidup seirama dengan pasang surut lumpur muara.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "pps-soc-02",
        content: "Wilayah pesisir didominasi oleh Suku Asmat (seniman ukir jenius berjiwa spiritual yang hidup di atas rawa lumpur) dan suku-suku peramu sagu Mappi/Muyu. Di kawasan Merauke, Suku Marind (Marind-Anim) mendominasi sabana darat. Suku Marind dulunya dikenal karena ritual perburuan kepala (headhunting) musuh yang dipadukan dengan kesenian menghias tubuh menggunakan tanah liat putih (kapur). Saat ini, Merauke sangat heterogen berkat program transmigrasi besar-besaran era Orde Baru; warga pendatang etnis Jawa sangat banyak di sini bermata pencaharian sebagai petani sawah.",
        citationIds: ["pps-ref-bps", "pps-ref-asmat"],
      }
    ],
    referenceIds: ["pps-ref-bps", "pps-ref-asmat"],
  },

  culture: {
    introduction: [
      {
        id: "pps-cul-01",
        content: "Orang Asmat memahat kayu untuk menghidupkan kembali kerabat yang mati; setiap lengkungan patung adalah nafas roh yang dipanggil pulang.",
        citationIds: ["pps-ref-asmat"],
      }
    ],
    items: [
      {
        id: "pps-cul-item-01",
        category: "Kriya Kayu Magis (Mahakarya)",
        title: "Seni Ukir Patung Asmat (Bisj Pole)",
        description: "Patung raksasa (Tiang Bisj/Mbis) yang diukir bertumpuk-tumpuk ke atas menyerupai totem panjang. Diukir murni tanpa sketsa terlebih dahulu dari akar pohon beringin terbalik. Dulunya, patung ini adalah sarana memanggil roh leluhur (Fumeripits) untuk meminta restu perang membalas dendam kematian. Karyanya dipajang di lobi PBB dan museum-museum elit dunia.",
        citationIds: ["pps-ref-asmat"],
      },
      {
        id: "pps-cul-item-02",
        category: "Tarian Selamat Datang Lumpur",
        title: "Tari Gatsi (Asmat)",
        description: "Tarian suka cita menyambut tamu penting. Puluhan orang Asmat dengan hiasan rambut rumbai kasuari dan cat tubuh putih kapur sagu (menyerupai roh) akan menari menghentak-hentak lumpur di atas papan kayu sambil menabuh Tifa memanjang bertalu-talu dari atas kano perahu sungai panjang.",
        citationIds: ["pps-ref-wbtb"],
      },
      {
        id: "pps-cul-item-03",
        category: "Pakaian Adat Kamuflase",
        title: "Rumbai Sagu (Kain Tali Sagu)",
        description: "Pakaian penutup panggul tebal yang terbuat dari rajutan rumit daun muda pucuk pohon sagu. Saat digunakan wanita Marind/Asmat dalam ritual, rumbai-rumbai ini berayun indah menyapu angin membentuk siluet burung kasuari berdansa.",
        citationIds: ["pps-ref-wbtb"],
      },
      {
        id: "pps-cul-item-04",
        category: "Alat Transportasi Kayu Utuh",
        title: "Perahu Lesung (Kano) Asmat",
        description: "Perahu sungai utama masyarakat Asmat yang dibuat dari satu batang pohon utuh yang dikorek (dikeruk) bagian tengahnya dan dibakar tipis. Panjangnya bisa mencapai belasan meter, memuat puluhan pengayuh berdiri.",
        citationIds: ["pps-ref-asmat"],
      }
    ],
    referenceIds: ["pps-ref-asmat", "pps-ref-wbtb"],
  },

  language: {
    introduction: [
      {
        id: "pps-lang-01",
        content: "Melayu Merauke terdengar sedikit mendayu ketimbang Jayapura, bercampur dengan logat masyarakat transmigran yang membawakan tata krama halus di atas sabana.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "pps-voc-01", word: "Anim Ha", meaning: "Manusia Sejati / Orang Sejati (Panggilan kehormatan dan kebanggaan Suku Marind di Merauke).", citationIds: ["pps-ref-bps"] },
      { id: "pps-voc-02", word: "Papan (Kota Papan)", meaning: "Merujuk pada kota Agats (Asmat) di mana jalan rayanya terbuat dari jutaan papan/beton panggung kayu di atas lumpur.", citationIds: ["pps-ref-bps"] },
      { id: "pps-voc-03", word: "Musamus", meaning: "Sarang rayap (Istana Semut) raksasa setinggi tiang listrik.", citationIds: ["pps-ref-wasur"] },
      { id: "pps-voc-04", word: "Amas / Nda", meaning: "Sagu / Makan (Bahasa Asmat).", citationIds: ["pps-ref-asmat"] },
    ],
    referenceIds: ["pps-ref-bps", "pps-ref-wasur", "pps-ref-asmat"],
  },

  culinary: {
    introduction: [
      {
        id: "pps-culi-01",
        content: "Lumbung pangan selatan memiliki menu perpaduan: olahan sagu tebal dari rawa, daging rusa yang sangat melimpah dari sabana, dan beras padi transmigrasi.",
        citationIds: ["pps-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "pps-culi-item-01",
        title: "Sagu Sep (Pizza Asmat)",
        description: "Hidangan sakral mirip 'pizza' (bongkahan tebal besar). Campuran pati sagu yang diaduk mentah dengan parutan kelapa, dijejali banyak daging ulat sagu (koo) atau daging babi hutan, dibungkus daun nipah lalu dipanggang di atas bakar batu menyala hingga keras garing di luar, namun super lumer dan kenyal lezat di dalam.",
        citationIds: ["pps-ref-wbtb"],
      },
      {
        id: "pps-culi-item-02",
        title: "Dendeng & Sate Rusa Sota",
        description: "Karena populasi rusa (Cervus timorensis) sangat melimpah liar di sabana Wasur Merauke (terkadang dianggap hama kebun/liar), daging rusa sering diolah menjadi sate empuk manis dan dendeng kemasan. Rasanya nyaris mirip sapi, tapi lebih kering dan tidak terlalu amis.",
        citationIds: ["pps-ref-wbtb"],
      },
      {
        id: "pps-culi-item-03",
        title: "Gastronomi Ulat Sagu (Asmat/Mappi)",
        description: "Di Boven Digoel dan Asmat, makan ulat sagu gemuk hidup-hidup (mentah) saat menebang pohon sagu adalah sebuah kebiasaan pencuci mulut biasa. Kepala/rahang ulat harus digigit lepas dibuang dulu sebelum mengisap isi tubuh (protein lumer murni) dari badan ulat.",
        citationIds: ["pps-ref-wbtb"],
      },
      {
        id: "pps-culi-item-04",
        title: "Nasi Padi Merauke",
        description: "Berkat raksasanya luasan cetak sawah (Food Estate) pertanian warga transmigran, beras organik lokal Merauke diolah segar tanpa pemutih kimia menjadi makanan pokok tandingan yang lebih dominan dimakan sehari-hari (disanding kuah ikan asar) ketimbang papeda.",
        citationIds: ["pps-ref-wbtb"],
      }
    ],
    referenceIds: ["pps-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "pps-bio-01",
        content: "Saat angin muson kering meniupkan hawa Australia melintasi Arafuru, kawanan walabi dan burung pelikan akan berbaris melintasi istana tanah lempung yang menara (Musamus).",
        citationIds: ["pps-ref-wasur"],
      }
    ],
    species: [
      {
        id: "pps-bio-item-01",
        category: "Arsitektur Serangga Raksasa",
        title: "Musamus (Sarang Rayap Bompa/Magnet)",
        description: "Gundukan menara menjulang raksasa setinggi 3-5 meter terbuat dari campuran tanah liat, air liur rayap, dan rumput. Sangat kokoh layaknya beton keras. Dibangun oleh koloni rayap raksasa, berderet rapi puluhan ribu buah di atas padang sabana luas Wasur.",
        citationIds: ["pps-ref-wasur"],
      },
      {
        id: "pps-bio-item-02",
        category: "Kangguru Mungil Pelompat Darat",
        title: "Walabi (Kangguru Tanah/Agile Wallaby)",
        description: "Berbeda dengan kangguru pohon utara Papua, Walabi Merauke adalah kangguru padang rumput asli yang berjalan melompat mirip dengan di daratan Australia. Ukurannya kecil seukuran anjing sedang, namun kakinya sangat kuat berlari melintasi sabana terbakar.",
        citationIds: ["pps-ref-wasur"],
      },
      {
        id: "pps-bio-item-03",
        category: "Burung Migran Antar Benua",
        title: "Pelikan Australia & Kasuari Gelambir Ganda",
        description: "Saat musim dingin di Australia, ribuan burung bangau dan Pelikan akan bermigrasi terbang lelah dan singgah bertelur di rawa rawa Rawa Biru (Wasur). Di daratannya yang rimbun, burung purba agresif tak bisa terbang—Kasuari (berleher biru leher merah)—berpatroli sangat ganas.",
        citationIds: ["pps-ref-wasur"],
      }
    ],
    referenceIds: ["pps-ref-wasur"],
  },

  destinations: {
    introduction: [
      {
        id: "pps-dest-01",
        content: "Merauke menyajikan perjalanan garis mendatar tak berujung, lalu memaksamu menginjak rem melihat batas tugu putih di mana kedaulatan tanah ini berhenti dan PNG dimulai.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    items: [
      {
        id: "pps-dest-item-01",
        category: "Taman Nasional Ekologi Sabana",
        title: "Taman Nasional Wasur (Serengeti Papua)",
        description: "Lanskap unik seluas 400.000 hektar yang dipenuhi padang rumput sabana ilalang membentang dan menara Musamus. Jika menyewa motor/mobil terbuka pada sore hari, pengunjung serasa bersafari di Afrika (dengan Walabi liar dan burung merak berlompatan menyeberang jalan Trans Papua).",
        citationIds: ["pps-ref-wasur"],
      },
      {
        id: "pps-dest-item-02",
        category: "Markas Nol Kilometer (Ujung Timur RI)",
        title: "Perbatasan Sota (PLBN Sota)",
        description: "Sota adalah pos lintas batas paling timur di titik meridian. Terdapat tugu raksasa bertuliskan KM 0 Merauke (yang jika digabung titik Sabang Aceh menjadi 5.245 KM rentang nusantara). Pengunjung wisata sangat ramai di sini membeli topi kangguru warga PNG dan makan sate rusa madu.",
        citationIds: ["pps-ref-bps"],
      },
      {
        id: "pps-dest-item-03",
        category: "Situs Pembuangan Kolonial (Dark Tourism)",
        title: "Penjara Boven Digoel (Tanah Merah)",
        description: "Situs bersejarah tua yang sangat sepi di Boven Digoel. Di sinilah bangunan tua sisa-sisa sel kamp interniran Belanda dan rumah kayu kecil panggung tempat Mohammad Hatta ditahan berdiri kokoh, dikelilingi hutan lebat yang pernah menjadi penjara hijau mematikan.",
        citationIds: ["pps-ref-digoel"],
      },
      {
        id: "pps-dest-item-04",
        category: "Metropolis Rawa Tanpa Aspal",
        title: "Agats (Kota Seribu Papan Asmat)",
        description: "Sebuah ibukota kabupaten paling unik di dunia. Permukaan tanah aslinya adalah rawa pasang surut pekat nan dalam sehingga satu kota (semua jalan, gedung, rumah, masjid, gereja) didirikan menyambung mengapung di atas tonggak-tonggak pilar beton dan ribuan jembatan kayu besi.",
        citationIds: ["pps-ref-bps"],
      },
      {
        id: "pps-dest-item-05",
        category: "Monumen Modernisme Timur",
        title: "Kapsul Waktu Merauke",
        description: "Monumen megah kebanggaan kota Merauke (bentuk fisiknya dilihat dari udara menyerupai logo 'Avengers' atau tameng/mata). Di dalamnya tersimpan impian/doa puluhan anak anak dari 34 provinsi se-indonesia (yang ditulis tahun 2015) yang baru akan dibuka dan dibaca tahun 2085 mendatang.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    referenceIds: ["pps-ref-wasur", "pps-ref-bps", "pps-ref-digoel"],
  },

  stories: {
    introduction: [
      {
        id: "pps-story-01",
        content: "Sejarah Asmat dikepung cerita magis dewa pahat pencipta manusia kayu dan nasib tragis para pemburu kepala di pedalaman sungai lebat.",
        citationIds: ["pps-ref-asmat"],
      }
    ],
    stories: [
      {
        id: "pps-story-item-01",
        title: "Mitos Fumeripits Pencipta Asmat",
        description: "Orang Asmat percaya bahwa nenek moyang pertama mereka adalah Dewa Fumeripits yang kesepian membangun rumah di pinggir sungai (rindu teman). Ia mengukir puluhan patung kayu berbentuk rupa tubuh manusia. Saat Fumeripits menabuh tifa, mukjizat terjadi: patung-patung kayu tegap itu hidup mendadak bergerak menari, dan menjelma menjadi cikal bakal (manusia asli) Suku Asmat masa kini.",
        citationIds: ["pps-ref-asmat"],
      },
      {
        id: "pps-story-item-02",
        title: "Bung Hatta Mengajar Sejarah kepada Sipir",
        description: "Selama dibuang di Boven Digoel (1935), ketabahan Bung Hatta sangat luar biasa. Beliau membawa belasan peti besi buku tebal berharga. Ketimbang stress diisolasi, Hatta justru memberikan kursus/sekolah sore pelajaran ekonomi dan sejarah. Uniknya, muridnya bukan hanya rekan tahanan Indonesia, tapi sipir-sipir serdadu Belanda (penjaganya) pun ikut duduk terpesona mendengar kuliah kepintaran Hatta di tengah rimba mematikan Digoel.",
        citationIds: ["pps-ref-digoel"],
      }
    ],
    referenceIds: ["pps-ref-asmat", "pps-ref-digoel"],
  },

  contemporary: {
    introduction: [
      {
        id: "pps-cont-01",
        content: "Merauke tidak lagi bermimpi muluk; ia secara nyata mengeksekusi lahan raksasanya menjadi kekuatan ketahanan pangan terbesar negeri.",
        citationIds: ["pps-ref-bps"],
      }
    ],
    economy: [
      {
        id: "pps-cont-02",
        content: "Proyek PSN (Proyek Strategis Nasional) Food Estate mencetak jutaan hektar sawah, kebun tebu, dan lahan tebu etanol baru berskala masif (terbesar se-Asia Tenggara) di Merauke, mengubah drastis lanskap sabananya menjadi industri agribisnis raksasa (Pabrik Gula modern). Sementara di Agats, kebijakan nol kendaraan emisi/mobil besar diterapkan ketat (100% warga Agats hanya menggunakan motor listrik/sepeda listrik (E-bike) demi menjaga getaran jembatan kayu tidak runtuh/papan tidak cepat lapuk rusak).",
        citationIds: ["pps-ref-bps"],
      }
    ],
    referenceIds: ["pps-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "pps-travel-01",
        content: "Berkendaralah dengan hening dan awas di Wasur, sebab seekor pelikan atau rusa besar bisa tiba-tiba meloncat anggun melintasi kap mobil Anda tanpa peringatan.",
        citationIds: ["pps-ref-wasur"],
      }
    ],
    etiquette: [
      {
        id: "pps-travel-02",
        content: "Saat berada di taman nasional Wasur, jangan pernah memanjat/merusak monumen (sarang semut Musamus) untuk sekadar berfoto keren nangkring, karena struktur ini dilindungi keras undang undang lingkungan hidup (merusaknya didenda). Jika di Asmat Agats, patuhi batas kecepatan (pelan) motor listrik Anda; menyalip membahayakan nyawa orang lain karena pinggiran jalan panggung asmat mayoritas tidak berpagar kayu pembatas (jika senggolan ban jatuh meleset sedikit saja, Anda akan terperosok ke kubangan lumpur pekat di bawahnya sedalam berhektar-hektar).",
        citationIds: ["pps-ref-wasur", "pps-ref-bps"],
      }
    ],
    referenceIds: ["pps-ref-wasur", "pps-ref-bps"],
  },

  lastReviewedAt: "2026-07-13T00:54:00Z",
  contentStatus: "draft",
  referenceIds: [
    "pps-ref-bps",
    "pps-ref-wbtb",
    "pps-ref-asmat",
    "pps-ref-digoel",
    "pps-ref-wasur"
  ]
};
