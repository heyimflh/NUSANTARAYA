import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const sulawesiTenggaraReferences: ScientificReference[] = [
  {
    id: "slr-ref-bps",
    title: "Provinsi Sulawesi Tenggara Dalam Angka 2024",
    authors: ["BPS Provinsi Sulawesi Tenggara"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Sulawesi Tenggara",
    url: "https://sultra.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "slr-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Sulawesi Tenggara",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "slr-ref-wakatobi",
    title: "Wakatobi National Park: The Coral Triangle",
    authors: ["UNESCO World Heritage Centre"],
    year: 2005,
    publisher: "UNESCO",
    url: "https://whc.unesco.org/en/tentativelists/2006/",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["biodiversity", "destinations"],
  },
  {
    id: "slr-ref-buton",
    title: "Kesultanan Buton dan Benteng Wolio",
    authors: ["Zuhdi, Susanto"],
    year: 2010,
    publisher: "Penerbit Kompas",
    url: "https://id.wikipedia.org/wiki/Kesultanan_Buton",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["history", "destinations"],
  },
  {
    id: "slr-ref-bajo",
    title: "Genetic Adaptations of the Bajau Sea Nomads",
    authors: ["Ilardo, Melissa A.", "et al."],
    year: 2018,
    publisher: "Cell Journal",
    url: "https://www.cell.com/cell/fulltext/S0092-8674(18)30386-6",
    accessedAt: "2026-07-13",
    sourceType: "journal",
    credibilityTier: "A",
    provinceIds: ["sulawesi-tenggara"],
    topicIds: ["society", "stories"],
  }
];

export const sulawesiTenggaraAtlas: ProvinceAtlas = {
  provinceId: "sulawesi-tenggara",
  slug: "sulawesi-tenggara",
  title: "Sulawesi Tenggara",
  tagline: "Bumi Anoa, Jazirah Karang Wolio dan Singgasana Nikel Dunia",
  summary: [
    {
      id: "slr-sum-01",
      content: "Terletak di kaki tenggara berbentuk semenanjung besar yang terpecah menjadi gugusan kepulauan eksotis laut Banda (Muna, Buton, Wakatobi), Sulawesi Tenggara (Sultra) adalah surga bagi peradaban pulau karang ('Hutan Karang'). Provinsi ini merajut kebesaran Kesultanan Buton yang tak pernah dijajah Belanda (memiliki benteng keraton terluas di dunia) dengan budaya laut nomaden Suku Bajo sang manusia ikan. Di daratan utamanya (Tolaki/Konawe), Sultra kini bertransformasi drastis menjadi lumbung industri pengolahan nikel raksasa terbesar yang mengerakkan revolusi baja global.",
      citationIds: ["slr-ref-bps", "slr-ref-buton", "slr-ref-wakatobi"],
    }
  ],
  quickFacts: [
    { id: "slr-qf-01", label: "Ibu Kota", value: "Kendari", citationIds: ["slr-ref-bps"] },
    { id: "slr-qf-02", label: "Luas Wilayah", value: "36.757,45 km²", citationIds: ["slr-ref-bps"], dataYear: 2024 },
    { id: "slr-qf-03", label: "Populasi", value: "2.755.589 jiwa", citationIds: ["slr-ref-bps"], dataYear: 2023 },
    { id: "slr-qf-04", label: "Pulau Utama", value: "Buton, Muna, Wakatobi", citationIds: ["slr-ref-bps"] },
    { id: "slr-qf-05", label: "Zona Waktu", value: "WITA (UTC+8)", citationIds: ["slr-ref-bps"] },
    { id: "slr-qf-06", label: "Gubernur", value: "Andap Budhi Revianto (Pj.)", citationIds: ["slr-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "slr-geo-01",
        content: "Topografi Sultra sangat kontras: daratan utamanya adalah perbukitan rawa nikel, sementara sisi selatannya pecah menjadi hamparan kepulauan batu kapur/karang murni.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "slr-geo-02",
        content: "Dataran utama semenanjung tenggara (Konawe/Kolaka) didominasi oleh perbukitan yang menyimpan cadangan bijih nikel laterit dalam jumlah tak terbatas. Namun, saat menyeberang ke selatan, lanskap berubah total menjadi pulau-pulau gersang berbatu kapur (karst) seperti Muna dan Buton. Buton sangat unik karena dari bebatuan retaknya mengalir aspal alam cair. Lebih ke ujung timur, hamparan Wakatobi (Wangi-wangi, Kaledupa, Tomia, Binongko) menyembul murni dari pengangkatan dasar atol terumbu karang laut dalam (Segitiga Koral Dunia).",
        citationIds: ["slr-ref-bps", "slr-ref-wakatobi"],
      }
    ],
    referenceIds: ["slr-ref-bps", "slr-ref-wakatobi"],
  },

  history: {
    introduction: [
      {
        id: "slr-his-01",
        content: "Jantung sejarah Sultra berdetak di Kesultanan Buton, satu-satunya kerajaan di Nusantara yang berhasil mengelabuhi kemerdekaannya dari Belanda berabad-abad.",
        citationIds: ["slr-ref-buton"],
      }
    ],
    timeline: [
      {
        id: "slr-era-01",
        period: "1538",
        title: "Puncak Kejayaan Kesultanan Buton",
        description: "Raja Mulae (Murhum) memeluk agama Islam dan mengubah Buton menjadi Kesultanan berdasar syariat Islam (Sufisme tarekat). Mereka memberlakukan mata uang berbahan kain tenun (Kampua) dan konstitusi tak bertulis yang sangat demokratis (Sultan bisa dipecat oleh dewan sara jika melanggar agama).",
        citationIds: ["slr-ref-buton"],
      },
      {
        id: "slr-era-02",
        period: "Abad ke-16 – 20",
        title: "Perjanjian Sekutu Taktis VOC",
        description: "Alih-alih ditaklukkan, Kesultanan Buton cerdik melakukan pakta 'Perjanjian Abadi' dengan VOC. Mereka tidak pernah diinvasi oleh Belanda secara militer langsung, membiarkan benteng Wolio tetap merdeka memungut pajak di jalur rempah timur hingga masa kemerdekaan.",
        citationIds: ["slr-ref-buton"],
      },
      {
        id: "slr-era-03",
        period: "1964",
        title: "Pemekaran Sulawesi Tenggara",
        description: "Resmi melepaskan diri dari induk Sulawesi Selatan/Tenggara, mengangkat Kendari sebagai ibu kota dan menyatukan kembali klan daratan (Tolaki) dengan klan laut (Buton, Muna).",
        citationIds: ["slr-ref-bps"],
      },
      {
        id: "slr-era-04",
        period: "2014 – Sekarang",
        title: "Mega-Investasi Nikel Morosi & Konawe",
        description: "Kawasan Konawe (VDNI & OSS) dibanjiri ribuan modal dan tenaga ahli Tiongkok untuk mengekstraksi nikel, menjadikan wajah pesisir daratan Sultra berubah drastis menjadi kota industri pabrik asap raksasa.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    referenceIds: ["slr-ref-buton", "slr-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "slr-soc-01",
        content: "Kehidupan Sultra tersusun atas dua poros peradaban: Suku Darat (Tolaki/Muna) dan Suku Laut (Buton/Bajo).",
        citationIds: ["slr-ref-bps"],
      }
    ],
    socialStructure: [
      {
        id: "slr-soc-02",
        content: "Suku Tolaki (mayoritas di daratan Kendari/Konawe) sangat kental dengan tradisi pertanian/hutan dan filosofi pergaulan 'Kalo Sara' (simbol ikatan rotan melingkar lambang penyelesaian masalah adat). Di kepulauan, Suku Muna dan Buton berwatak pedagang ulet nan agamis. Di tepian karang ekstrem (Wakatobi/Bokori), bernaung Suku Bajo (Sama/Bajau)—Gipsy Laut pengembara yang tinggal di rumah panggung air, yang anak-anak balitanya sudah diajari berenang tanpa alat sebelum bisa berjalan.",
        citationIds: ["slr-ref-wbtb", "slr-ref-bajo"],
      }
    ],
    referenceIds: ["slr-ref-bps", "slr-ref-wbtb", "slr-ref-bajo"],
  },

  culture: {
    introduction: [
      {
        id: "slr-cul-01",
        content: "Sutra butonan dengan aksara melayunya bertaut harmonis dengan tarian persahabatan bambu dari dataran tolaki.",
        citationIds: ["slr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slr-cul-item-01",
        category: "Tarian Persatuan (Tolaki)",
        title: "Tari Lulo (Molulo)",
        description: "Tarian massal persahabatan muda-mudi Tolaki (mirip Tari Dero di Sulteng). Peserta membentuk lingkaran sangat besar, bergandengan tangan, dan menginjak-injak kaki searah jarum jam sembari diiringi tabuhan gong bertalu-talu. Simbol kesetaraan dan perdamaian.",
        citationIds: ["slr-ref-wbtb"],
      },
      {
        id: "slr-cul-item-02",
        category: "Kriya Tekstil/Uang Kuno",
        title: "Tenun Buton & Kampua",
        description: "Kain tenun (Bida) Buton berciri khas garis membujur yang rumit. Hebatnya, pada masa lalu (Kesultanan), potongan kecil tenun Buton ini ('Kampua') distempel oleh sultan dan dijadikan sebagai uang kartal resmi alat tukar yang diakui.",
        citationIds: ["slr-ref-wbtb"],
      },
      {
        id: "slr-cul-item-03",
        category: "Arsitektur Ketahanan Militer",
        title: "Benteng Keraton Wolio",
        description: "Arsitektur batu karang raksasa (tanpa semen, direkatkan dengan putih telur) sepanjang nyaris 3 kilometer, mengelilingi perbukitan tinggi di kota Baubau. Tercatat dalam Guinness Book (2006) sebagai benteng keraton terluas di dunia.",
        citationIds: ["slr-ref-buton"],
      },
      {
        id: "slr-cul-item-04",
        category: "Sastra Islam/Tasawuf",
        title: "Kabhanti & Buri Wolio",
        description: "Kabhanti adalah pantun syair petuah bijak ala Buton yang dinyanyikan semalaman. Tradisi ini sering ditulis dalam aksara unik 'Buri Wolio' (huruf Arab yang dimodifikasi khusus untuk membaca aksen lokal bahasa Buton).",
        citationIds: ["slr-ref-wbtb"],
      }
    ],
    referenceIds: ["slr-ref-wbtb", "slr-ref-buton"],
  },

  language: {
    introduction: [
      {
        id: "slr-lang-01",
        content: "Perbedaan logat di daratan Tolaki yang mengayun bertentangan tajam dengan bahasa kesultanan Wolio yang sangat kental serapan pesisirnya.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "slr-voc-01", word: "La Ode / Wa Ode", meaning: "Gelar bangsawan Kesultanan Buton-Muna (La Ode untuk Pria, Wa Ode untuk Wanita).", citationIds: ["slr-ref-buton"] },
      { id: "slr-voc-02", word: "Tabea", meaning: "Permisi / Salam hormat (Sangat sering digunakan).", citationIds: ["slr-ref-bps"] },
      { id: "slr-voc-03", word: "Inae Sida?", meaning: "Siapa itu? (Bahasa Tolaki).", citationIds: ["slr-ref-bps"] },
      { id: "slr-voc-04", word: "Puu / Lalo", meaning: "Pohon / Hati (Kosakata daratan Konawe).", citationIds: ["slr-ref-bps"] },
    ],
    referenceIds: ["slr-ref-bps", "slb-ref-wbtb", "slr-ref-buton"],
  },

  culinary: {
    introduction: [
      {
        id: "slr-culi-01",
        content: "Kuliner Sultra tidak mengandalkan nasi beras. Sagu licin dari rawa (Sinonggi) atau singkong padat karang (Kasuami) adalah raja meja makan sejati.",
        citationIds: ["slr-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "slr-culi-item-01",
        title: "Sinonggi (Khas Tolaki)",
        description: "Adonan pati sagu (seperti lem transparan yang sangat kenyal dan molor) yang digulung menggunakan sumpit bambu. Dimakan (ditelan tanpa dikunyah) bersama siraman kuah ikan Palumara (ikan asam pedas) bumbu serai dan ruku-ruku liar.",
        citationIds: ["slr-ref-wbtb"],
      },
      {
        id: "slr-culi-item-02",
        title: "Kasuami (Khas Buton/Wakatobi)",
        description: "Makanan penahan lapar khas pelaut (bisa awet berhari-hari). Terbuat dari singkong (ubi kayu) yang diparut, disaring habis getah airnya, kemudian dikukus dalam cetakan daun kelapa (anyaman kerucut) hingga padat menjulang seperti tumpeng kuning kasar. Paling enak diurai dengan tangan dan dicocol kaldu ikan parende.",
        citationIds: ["slr-ref-wbtb"],
      },
      {
        id: "slr-culi-item-03",
        title: "Kabuto",
        description: "Singkong karang yang dijemur sampai kering dan berjamur hitam secara alami (fermentasi). Saat direbus kembali, umbi ini menjadi sangat empuk/kenyal seperti kue basah dan dinikmati dengan kelapa parut asin/manis.",
        citationIds: ["slr-ref-wbtb"],
      },
      {
        id: "slr-culi-item-04",
        title: "Ikan Parende",
        description: "Sup ikan laut (kakap merah/kuro) berkuah kunyit bening asam segar racikan emak-emak pesisir Buton. Bumbu wajibnya sangat simpel; belimbing wuluh, asam jawa, sereh, kemangi, tanpa santan sama sekali.",
        citationIds: ["slr-ref-wbtb"],
      }
    ],
    referenceIds: ["slr-ref-wbtb"],
  },

  biodiversity: {
    introduction: [
      {
        id: "slr-bio-01",
        content: "Kepulauan Sultra menyembunyikan dua mutasi alam luar biasa: ikan-ikan karang segitiga ajaib Wakatobi dan mutasi genetis paru-paru suku Bajo.",
        citationIds: ["slr-ref-bajo", "slr-ref-wakatobi"],
      }
    ],
    species: [
      {
        id: "slr-bio-item-01",
        category: "Evolusi Genetik Manusia",
        title: "Spleen Raksasa (Limpa) Suku Bajo",
        description: "Berdasarkan riset sains terbaru (Jurnal Cell, 2018), orang Bajo asli memiliki organ limpa (Spleen) yang membesar 50% lebih besar dari manusia normal. Mutasi genetik (PDE10A) ini memungkinkan limpa menyuntikkan sel darah merah cadangan super saat mereka menyelam menahan napas (freedive) hingga 13 menit di dasar laut dalam tanpa tabung oksigen.",
        citationIds: ["slr-ref-bajo"],
      },
      {
        id: "slr-bio-item-02",
        category: "Kekayaan Spesies Terumbu Karang",
        title: "750 Spesies Koral (Taman Nasional Wakatobi)",
        description: "Wakatobi adalah episentrum 'Coral Triangle' dunia. Dari 850 spesies karang keras (hard coral) di dunia, 750 spesies di antaranya (sekitar 88%) hidup berkumpul dan berdesak-desakan di tebing-tebing bawah laut Wakatobi (sebagai perbandingan, laut merah Mesir hanya memiliki sekitar 300 spesies karang).",
        citationIds: ["slr-ref-wakatobi"],
      },
      {
        id: "slr-bio-item-03",
        category: "Fauna Endemik Daratan",
        title: "Anoa (Bubalus quarlesi)",
        description: "Sama halnya dengan kerabatnya di Sulteng, anoa pegunungan (kerbau cebol liar) menjadikan hutan perbukitan Kolaka-Konawe sebagai tempat melarikan diri dari pembukaan lahan nikel.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    referenceIds: ["slr-ref-bajo", "slr-ref-wakatobi", "slr-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "slr-dest-01",
        content: "Menjelajah pesisir Buton adalah meraba dinginnya benteng karang kerajaan raksasa, sementara ke lautan lepas kita mendapati atol bawah air impian.",
        citationIds: ["slr-ref-buton", "slr-ref-wakatobi"],
      }
    ],
    items: [
      {
        id: "slr-dest-item-01",
        category: "Nirwana Bawah Laut",
        title: "Taman Nasional Wakatobi",
        description: "Hamparan atol sepanjang lebih dari 100 km (Hoga, Tomia) yang menjadi magnet penyelam kelas berat Eropa/Amerika. Menawarkan drop-off wall yang jernih dengan visibilitas luar biasa, penyu laut raksasa, dan ikan pelagis yang beterbangan (berenang).",
        citationIds: ["slr-ref-wakatobi"],
      },
      {
        id: "slr-dest-item-02",
        category: "Keajaiban Alam Danau Asin",
        title: "Danau Napabale & Danau Biru (Muna/Kolaka)",
        description: "Napabale (Pulau Muna) adalah danau air asin di balik bukit karst yang terhubung ke laut lewat terowongan karang (bisa dilalui perahu kecil saat surut). Sementara Danau Biru (Kolaka Utara) adalah danau di tepi pantai berair sangat jernih kebiruan bagai kaca di tengah rimbun pepohonan.",
        citationIds: ["slr-ref-bps"],
      },
      {
        id: "slr-dest-item-03",
        category: "Raja Ampat-nya Sulawesi",
        title: "Pulau Labengki & Sombori",
        description: "Gugusan bukit karang raksasa berselimut pepohonan hijau lebat menyembul di tengah laut zamrud (mirip Wayag Raja Ampat). Hanya bisa dijangkau speedboat dari Kendari, menjadi surga baru (new hidden paradise) wisata Sultra.",
        citationIds: ["slr-ref-bps"],
      },
      {
        id: "slr-dest-item-04",
        category: "Situs Arsitektur Kolosal",
        title: "Benteng Keraton Buton & Tiang Bendera Pusaka",
        description: "Berjalan di atas tembok pertahanan batu raksasa ini di senja hari (Baubau) seakan melintasi lorong waktu abad ke-16. Di tengah benteng, terdapat tiang bendera kayu ulin setinggi 21 meter (Kasulana Tombi) berumur 300 tahun yang hingga kini tidak lapuk dimakan zaman.",
        citationIds: ["slr-ref-buton"],
      }
    ],
    referenceIds: ["slr-ref-bps", "slr-ref-wakatobi", "slr-ref-buton"],
  },

  stories: {
    introduction: [
      {
        id: "slr-story-01",
        content: "Orang pesisir meyakini lautan selalu melahirkan pewaris mutasi alam, hingga melahirkan fenomena mata bermata nilam biru.",
        citationIds: ["slr-ref-bajo"],
      }
    ],
    stories: [
      {
        id: "slr-story-item-01",
        title: "Mata Biru Suku Bajo (Pulau Siompu / Buton)",
        description: "Selain kemampuan menahan napas dalam, di pedalaman Buton dan Muna (Desa Siompu), bermukim sebuah klan keluarga Suku Bajo/Buton terasing yang karena mutasi genetik bawaan (Sindrom Waardenburg) memiliki sepasang bola mata berwarna biru terang (Blue Eyes) layaknya ras Kaukasia Eropa, meskipun kulit mereka sawo matang khas Indonesia.",
        citationIds: ["slr-ref-bajo"],
      },
      {
        id: "slr-story-item-02",
        title: "Batu Menganga (Watu Mpanini)",
        description: "Legenda rakyat Wakatobi (Kaledupa) tentang sebuah tebing batu karang sakti peninggalan penyiar Islam, yang dulunya bisa membuka (menganga) layaknya pintu dan menelan orang yang berniat jahat atau memberikan keselamatan pada yang terdesak.",
        citationIds: ["slr-ref-wbtb"],
      }
    ],
    referenceIds: ["slr-ref-bajo", "slr-ref-wbtb"],
  },

  contemporary: {
    introduction: [
      {
        id: "slr-cont-01",
        content: "Perut bumi daratan Sultra sedang diiris-iris secara kilat oleh modal asing untuk memompa revolusi baterai lithium global.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    economy: [
      {
        id: "slr-cont-02",
        content: "Morosi (Kabupaten Konawe) adalah jantung baru peleburan nikel Sultra (PT. VDNI/OSS) yang setara dengan IMIP Sulteng. Jutaan ton feronikel diekspor ke China, menciptakan ribuan lapangan pekerjaan di Kendari. Sementara di bagian kepulauan, Kabupaten Buton memegang konsesi raksasa miliaran ton 'Aspal Buton' (Asbuton)—aspal alam siap pakai yang hanya ada dua di dunia (Buton dan Danau Pitch Trinidad).",
        citationIds: ["slr-ref-bps"],
      }
    ],
    referenceIds: ["slr-ref-bps"],
  },

  travel: {
    introduction: [
      {
        id: "slr-travel-01",
        content: "Mengarungi perairan selatan Sultra membutuhkan kebesaran hati (dan usus) menghadapi goyangan ombak laut Banda yang kejam.",
        citationIds: ["slr-ref-bps"],
      }
    ],
    etiquette: [
      {
        id: "slr-travel-02",
        content: "Perjalanan laut menyusuri Kendari menuju Baubau dan Wakatobi dengan kapal cepat (ferry fiber) adalah ujian perut, siapkan obat anti mabuk (antimo). Jika dihidangkan Sinonggi/Kasuami di rumah kolega Kendari, cobalah menelannya walau teksturnya aneh (beras/nasi seringkali bukan pertanda penghormatan setinggi menghidangkan sinonggi). Saat menyelam (Diving) di Wakatobi, pemakaian tabir surya (sunblock) sangat diawasi demi menghindari kematian bleaching karang langka.",
        citationIds: ["slr-ref-wakatobi"],
      }
    ],
    referenceIds: ["slr-ref-bps", "slr-ref-wakatobi"],
  },

  lastReviewedAt: "2026-07-13T00:37:00Z",
  contentStatus: "draft",
  referenceIds: [
    "slr-ref-bps",
    "slr-ref-wbtb",
    "slr-ref-buton",
    "slr-ref-wakatobi",
    "slr-ref-bajo"
  ]
};
