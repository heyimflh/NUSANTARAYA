import { ProvinceAtlas, ScientificReference } from "@/types/atlas";

export const papuaTengahReferences: ScientificReference[] = [
  {
    id: "ppt-ref-bps",
    title: "Provinsi Papua Tengah Dalam Angka 2024",
    authors: ["BPS Provinsi Papua Tengah"],
    year: 2024,
    publisher: "Badan Pusat Statistik Provinsi Papua Tengah",
    url: "https://papuatengah.bps.go.id/publication/2024",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-tengah"],
    topicIds: ["geography", "contemporary"],
  },
  {
    id: "ppt-ref-wbtb",
    title: "Warisan Budaya Takbenda Indonesia: Papua Tengah",
    authors: ["Direktorat Warisan dan Diplomasi Budaya"],
    year: 2023,
    publisher: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
    url: "https://warisanbudaya.kemdikbud.go.id",
    accessedAt: "2026-07-13",
    sourceType: "institution",
    credibilityTier: "A",
    provinceIds: ["papua-tengah"],
    topicIds: ["culture", "culinary", "stories"],
  },
  {
    id: "ppt-ref-freeport",
    title: "Grasberg: Mining the Richest and Most Remote Deposit of Copper and Gold in the World",
    authors: ["Mealey, George A."],
    year: 1996,
    publisher: "Freeport-McMoRan",
    url: "https://en.wikipedia.org/wiki/Grasberg_mine",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua-tengah"],
    topicIds: ["history", "contemporary", "destinations"],
  },
  {
    id: "ppt-ref-carstensz",
    title: "The Snow Mountains of New Guinea (Carstensz Pyramid)",
    authors: ["Hope, G.S."],
    year: 1976,
    publisher: "Balkema",
    url: "https://en.wikipedia.org/wiki/Puncak_Jaya",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "A",
    provinceIds: ["papua-tengah"],
    topicIds: ["geography", "history", "stories"],
  },
  {
    id: "ppt-ref-mee",
    title: "The Mee People of Paniai",
    authors: ["Pospisil, Leopold"],
    year: 1958,
    publisher: "Yale University",
    url: "https://id.wikipedia.org/wiki/Suku_Mee",
    accessedAt: "2026-07-13",
    sourceType: "book",
    credibilityTier: "B",
    provinceIds: ["papua-tengah"],
    topicIds: ["society", "culture"],
  }
];

export const papuaTengahAtlas: ProvinceAtlas = {
  provinceId: "papua-tengah",
  slug: "papua-tengah",
  title: "Papua Tengah",
  tagline: "Salju Abadi Khatulistiwa, Gunung Emas di Jantung Mee Pago",
  summary: [
    {
      id: "ppt-sum-01",
      content: "Provinsi Papua Tengah membentang menyobek utuh Pulau Papua dari pesisir utara (Nabire/Teluk Cenderawasih) menyeberangi Pegunungan Sudirman, lalu jatuh ke pesisir rawa selatan (Mimika/Timika). Wilayah adat Mee Pago ini menyimpan dua keajaiban ekstrem (paradoks) dunia di satu tempat: Gunung Es bersalju abadi di tengah garis lintang khatulistiwa yang panas (Puncak Jaya/Carstensz), yang tepat di sebelah kakinya dikeruk dan dihancurkan pelan-pelan menjadi kawah tambang tembaga/emas terbesar milik manusia (Grasberg). Di sela-sela dentuman tambang dan badai es, Danau Paniai memantulkan ketenangan surgawi air tawar di puncak perbukitan sunyi.",
      citationIds: ["ppt-ref-bps", "ppt-ref-freeport", "ppt-ref-carstensz"],
    }
  ],
  quickFacts: [
    { id: "ppt-qf-01", label: "Ibu Kota", value: "Nabire", citationIds: ["ppt-ref-bps"] },
    { id: "ppt-qf-02", label: "Luas Wilayah", value: "61.072,92 km²", citationIds: ["ppt-ref-bps"], dataYear: 2024 },
    { id: "ppt-qf-03", label: "Populasi", value: "1.452.810 jiwa", citationIds: ["ppt-ref-bps"], dataYear: 2023 },
    { id: "ppt-qf-04", label: "Wilayah Adat", value: "Mee Pago", citationIds: ["ppt-ref-bps"] },
    { id: "ppt-qf-05", label: "Zona Waktu", value: "WIT (UTC+9)", citationIds: ["ppt-ref-bps"] },
    { id: "ppt-qf-06", label: "Gubernur", value: "Anwar Harun Damanik (Pj.)", citationIds: ["ppt-ref-bps"], dataYear: 2024 },
  ],

  geography: {
    introduction: [
      {
        id: "ppt-geo-01",
        content: "Topografi provisi ini melenting dari garis pantai utara yang disinari matahari menyengat, meroket ke atas langit menembus minus nol derajat pilar es batu, sebelum merosot kembali ke rawa-rawa lumpur lebat bakau selatan.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    terrain: [
      {
        id: "ppt-geo-02",
        content: "Di ujung utara, Kabupaten Nabire menawarkan pesisir perairan hangat kepulauan terumbu (berbagi habitat paus dengan Papua Barat). Bergeser ke perut provinsi, Pegunungan Tengah Sudirman menonjolkan Puncak Jaya (Carstensz Pyramid) setinggi 4.884 mdpl—titik daratan tertinggi di seluruh Oseania dan satu-satunya puncak bersalju tropis di Asia. Di selatan, Kabupaten Mimika (Timika) adalah dataran rendah rawa basah (Estuari) yang menjadi jalur 'pipa pembuangan' sisa limbah sedimen galian tambang raksasa ke arah Laut Arafura.",
        citationIds: ["ppt-ref-bps", "ppt-ref-carstensz"],
      }
    ],
    referenceIds: ["ppt-ref-bps", "ppt-ref-carstensz"],
  },

  history: {
    introduction: [
      {
        id: "ppt-his-01",
        content: "Sejarahnya direkam saat seorang pelaut Belanda melihat silau es di atas pohon kelapa, dan berujung pada ditemukannya bongkahan tembaga murni seukuran bukit hijau.",
        citationIds: ["ppt-ref-carstensz", "ppt-ref-freeport"],
      }
    ],
    timeline: [
      {
        id: "ppt-era-01",
        period: "1623",
        title: "Penemuan Salju Khatulistiwa",
        description: "Pelaut Belanda Jan Carstensz berlayar di lepas pantai Arafura dan tak sengaja melihat kilauan gletser es putih gemerlap tinggi menjulang di atas awan (meski ia tahu wilayah ini adalah tropis). Sepulangnya ke Eropa dan melaporkannya, tak ada satupun yang percaya (ditertawakan dianggap gila melihat 'es' di atas garis khatulistiwa). Puncak itu kini dinamai 'Carstensz Pyramid'.",
        citationIds: ["ppt-ref-carstensz"],
      },
      {
        id: "ppt-era-02",
        period: "1936",
        title: "Penemuan Ertsberg (Gunung Bijih Hitam)",
        description: "Geolog Belanda, Jean Jacques Dozy, saat mendaki mencari salju (Carstensz), secara tidak sengaja menemukan bukit padat aneh tak bertumbuhan berwarna hitam kehijauan tembaga alami (Ertsberg). Karena PD II, temuannya ini ia lupakan dalam laci perpustakaan di Belanda selama berpuluh-puluh tahun.",
        citationIds: ["ppt-ref-freeport"],
      },
      {
        id: "ppt-era-03",
        period: "1967",
        title: "Masuknya Freeport-McMoRan",
        description: "Laporan lama J.J. Dozy tak sengaja dibaca ulang oleh Forbes Wilson (eksekutif tambang Freeport AS). Mereka meninjau lokasi, membenarkan deposit gila tersebut, dan ini menjadi Kontrak Karya (KK) pertama pemerintahan Soeharto (Orde Baru) dengan modal asing, melahirkan tambang Grasberg (Emas & Tembaga raksasa).",
        citationIds: ["ppt-ref-freeport"],
      },
      {
        id: "ppt-era-04",
        period: "2022",
        title: "Pemekaran Ibukota Nabire",
        description: "Meski Timika sangat jauh lebih maju dan kaya berkat sumbangan uang dollar Freeport, ibukota otonomi baru Papua Tengah justru ditetapkan di Nabire secara politis untuk mendistribusikan merata pembangunan dan membagi dua kutub kekuatan di koridor tengah Papua.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    referenceIds: ["ppt-ref-carstensz", "ppt-ref-freeport", "ppt-ref-bps"],
  },

  society: {
    introduction: [
      {
        id: "ppt-soc-01",
        content: "Ada suku di selatan yang mencium bau air laut pesing berlumpur, dan ada suku di utara yang menanam hipere sayur membelah danau perbukitan es.",
        citationIds: ["ppt-ref-mee"],
      }
    ],
    socialStructure: [
      {
        id: "ppt-soc-02",
        content: "Suku Mee (mendominasi Paniai, Deiyai, Dogiyai) adalah masyarakat agraris danau tingkat tinggi. Berbeda dengan Dani yang agresif, orang Mee lebih menonjolkan kekuatan negosiasi dan perdagangan mahar perkawinan menggunakan kulit kerang penanda kasta (Kapauku cowrie). Di sekitar lingkar gunung tambang, berdiam Suku Amungme (pemilik hak ulayat gunung salju) dan suku Moni, sementara di wilayah pesisir muara rawa Timika didiami oleh suku nomaden pesisir, Suku Kamoro (Mimikawe) yang hidup berbaur dengan transmigran modern ekspatriat.",
        citationIds: ["ppt-ref-bps", "ppt-ref-mee"],
      }
    ],
    referenceIds: ["ppt-ref-bps", "ppt-ref-mee"],
  },

  culture: {
    introduction: [
      {
        id: "ppt-cul-01",
        content: "Kesedihan diungkapkan dengan ratapan putus jari di gunung, namun di muara selatan ia dihias dengan perisai ukir pahat beringas berwarna merah tanah.",
        citationIds: ["ppt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ppt-cul-item-01",
        category: "Ritual Adat Komunal (Mee)",
        title: "Yuwo (Pesta Babi Berbalut Bisnis)",
        description: "Tidak sekadar 'bakar batu' syukuran, tradisi 'Yuwo' milik suku Mee adalah sebuah festival bursa ekonomi yang sangat besar di mana seluruh klan bertukar utang-piutang babi, merajut investasi kulit kerang, dan mendemonstrasikan kelas hierarki pimpinan sosial tonowi (orang kaya/big man) melalui pidato massal megah di lapangan.",
        citationIds: ["ppt-ref-mee"],
      },
      {
        id: "ppt-cul-item-02",
        category: "Kriya Ukir Muara Kematian",
        title: "Ukiran Yamate (Perisai Kamoro)",
        description: "Mirip dengan Asmat, Suku Kamoro mahir memahat. Mahakarya mereka adalah 'Yamate' atau perisai pelindung panjang dari kayu lunak bakau. Biasanya diukir dekorasi bermotif sirip ikan pari atau tulang belulang manusia (roh kematian) berwarna kontras putih kapur dan merah tanah.",
        citationIds: ["ppt-ref-wbtb"],
      },
      {
        id: "ppt-cul-item-03",
        category: "Tradisi Santap Menjijikkan Nan Lezat",
        title: "Pesta Sagu Ndambu (Kamoro)",
        description: "Pesta kumpul warga rawa (Kamoro) untuk panen ulat sagu yang sedang menggemuk matang. Ulat ulat dipanggang masif di atas perapian nipah atau dimakan hidup (mengiang putus kepala).",
        citationIds: ["ppt-ref-wbtb"],
      },
      {
        id: "ppt-cul-item-04",
        category: "Alat Tenun Serat Anggrek Emas",
        title: "Noken Anggrek Paniai",
        description: "Berbeda dari serat kayu biasa, anyaman Noken suku Mee di Paniai sangat mewah dan sakral; dibuat menggunakan rajutan urat/serat akar anggrek hutan kuning menyala yang sulit didapat dan hanya menempel di pohon-pohon basah sekitaran kabut danau.",
        citationIds: ["ppt-ref-wbtb"],
      }
    ],
    referenceIds: ["ppt-ref-wbtb", "ppt-ref-mee"],
  },

  language: {
    introduction: [
      {
        id: "ppt-lang-01",
        content: "Bahasa Melayu Timika terdengar sangat heterogen bercampur makian pasar dan sapaan khas ekspatriat asing, kontras dengan lisan orang Nabire/Mee yang lugu.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    vocabulary: [
      { id: "ppt-voc-01", word: "Koya", meaning: "Berarti Keren / Sombong ria (Dalam gaul papua).", citationIds: ["ppt-ref-bps"] },
      { id: "ppt-voc-02", word: "Kapauku / Ekari", meaning: "Sebutan/nama lawas peninggalan antropolog belanda untuk menamai (suku Mee) di Paniai.", citationIds: ["ppt-ref-mee"] },
      { id: "ppt-voc-03", word: "Amungme / Mimikawe", meaning: "Orang/Manusia Asli (Masyarakat Gunung / Masyarakat Pesisir).", citationIds: ["ppt-ref-wbtb"] },
      { id: "ppt-voc-04", word: "Karaka", meaning: "Kepiting (Khususnya kepiting bakau Timika super raksasa).", citationIds: ["ppt-ref-bps"] },
    ],
    referenceIds: ["ppt-ref-bps", "ppt-ref-mee", "ppt-ref-wbtb"],
  },

  culinary: {
    introduction: [
      {
        id: "ppt-culi-01",
        content: "Kuliner pesisir selatan menyajikan monster bercapit raksasa dari rawa, sementara lidah utara Nabire mencium harum asap kakap merah jeruk nipis.",
        citationIds: ["ppt-ref-wbtb"],
      }
    ],
    items: [
      {
        id: "ppt-culi-item-01",
        title: "Kepiting Bakau Timika (Karaka)",
        description: "Rawa bakau dangkal luas Timika menghasilkan jenis kepiting bakau raksasa bermoncong hitam/hijau lumpur. Capitnya sangat masif dan kuat (dagingnya penuh tidak kopong). Di restoran ekspat Timika, Karaka sering dilumuri bumbu lada hitam Singapura atau saus asam pedas pekat.",
        citationIds: ["ppt-ref-wbtb"],
      },
      {
        id: "ppt-culi-item-02",
        title: "Ikan Bakar Nabire",
        description: "Mirip ikan bakar Manokwari (Papua Barat). Mengingat perairan utara ini laut dalam Pasifik (bukan lumpur Arafuru), ikan yang dominan disajikan adalah tuna sirip kuning, disiram dabu dabu mangga muda yang kasar dan perasan lemon cui liar tebal.",
        citationIds: ["ppt-ref-wbtb"],
      },
      {
        id: "ppt-culi-item-03",
        title: "Keladi Tumbuk Mee Pago",
        description: "Olahan pokok orang danau (Paniai/Mee). Keladi dipanggang batu, dihaluskan (tumbuk) menjadi semacam pure lengket gurih pengganjal kalori sebelum bekerja mengayuh sampan perahu mencari siput ke tengah telaga dingin. Tanpa lauk, keladi ini sudah meneteskan sari pati manis alamiah.",
        citationIds: ["ppt-ref-mee"],
      },
      {
        id: "ppt-culi-item-04",
        title: "Sate Ulat Koo Panggang Kering",
        description: "Di Nabire, ulat sagu gemuk tidak lagi dimakan basah berlendir hidup. Agar lebih 'bersahabat' di lidah pendatang, ulat dibelah ususnya lalu dibersihkan/dicuci dan ditusuk lidi rapi, dibakar kecap manis lama hingga krispi (menyerupai rasa udang bakar madu gurih lezat non-amis).",
        citationIds: ["ppt-ref-wbtb"],
      }
    ],
    referenceIds: ["ppt-ref-wbtb", "ppt-ref-mee"],
  },

  biodiversity: {
    introduction: [
      {
        id: "ppt-bio-01",
        content: "Dataran ini menjadi suaka terakhir bagi anjing liar purba yang melolong melodi paduan suara ke langit malam alpin, seolah menyanyikan nyanyian rindu zaman es glasial.",
        citationIds: ["ppt-ref-carstensz"],
      }
    ],
    species: [
      {
        id: "ppt-bio-item-01",
        category: "Karnivora Purba Bermelodi Puncak Salju",
        title: "Anjing Penyanyi Papua (New Guinea Singing Dog)",
        description: "Spesies anjing prasejarah berbulu oranye dingo (Canis dingo hallstromi) langka yang hanya hidup menyendiri (liar dan sakral) di kawasan sabana alpine berkabut tinggi Puncak Jaya. Lolongan mereka saat berkomunikasi tidak seperti anjing kampung menggonggong, melainkan berbunyi nada suara vokal tinggi menyerupai koor lantunan harmoni serigala penyanyi paduan suara, konon dapat menggetarkan jiwa penduduk pegunungan di malam sunyi dingin.",
        citationIds: ["ppt-ref-carstensz"],
      },
      {
        id: "ppt-bio-item-02",
        category: "Burung Purba Raksasa Pesisir Bawah",
        title: "Kasuari Gelambir Ganda (Casuarius casuarius)",
        description: "Burung darat petarung kelas berat endemik Mimika dan sekitarnya (Taman Nasional Lorentz/Timika daratan bawah). Tidak bisa terbang tapi mematikan. Ia berlari zigzag dan bisa melompat menyodok dada mangsa manusia dengan tulang cakar kakinya yang tajam seperti belati jika sedang merasa terancam nyawanya (bahkan merobek perut).",
        citationIds: ["ppt-ref-bps"],
      },
      {
        id: "ppt-bio-item-03",
        category: "Makhluk Kantung Nokturnal Ranting",
        title: "Kuskus Tutul Bintang (Spilocuscus maculatus)",
        description: "Mirip musang malam marsupial berbulu putih bintik coklat/merah, hidup bermalas malasan bergantung melilit menggunakan ekor botaknya memakan pucuk daun ara hutan, sering jadi tangkapan mahal konsumsi pesta malam warga lokal akibat daging dan bulunya berharga.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    referenceIds: ["ppt-ref-carstensz", "ppt-ref-bps"],
  },

  destinations: {
    introduction: [
      {
        id: "ppt-dest-01",
        content: "Anda bisa mendaki gunung suci para pendaki gila dunia pada pagi buta di utara, atau bermain golf rumput inggris mengendarai SUV menembus pos satpam amerika tambang emas siangnya.",
        citationIds: ["ppt-ref-freeport", "ppt-ref-carstensz"],
      }
    ],
    items: [
      {
        id: "ppt-dest-item-01",
        category: "Gunung Salju Alpin Tropis Dunia (7 Summits)",
        title: "Carstensz Pyramid (Puncak Jaya)",
        description: "Impian paling angker dan diidamkan para pendaki internasional elit dalam menaklukkan 'Seven Summits'. Jalur tebing kapurnya vertikal terjal berlapis salju abadi. Medannya sangat brutal karena oksigen tipis dan seringnya tertutup badai mematikan es di tengah-tengah tropis (bahkan helikopter pun rentan jatuh/dihadang separatis).",
        citationIds: ["ppt-ref-carstensz"],
      },
      {
        id: "ppt-dest-item-02",
        category: "Megastruktur Pengeruk Tambang Emas Terbuka",
        title: "Grasberg Mine & Kota Tambang Tembagapura (Freeport)",
        description: "Lubang (Crater) galian terbuka (Open-Pit) buatan manusia super raksasa yang menyedot setengah isi bukit keemasan sedalam ratusan meter, diselimuti sistem kereta api gantung pengangkut bijih tembaga masif dan terowongan canggih. Untuk mencapainya, warga (hanya pegawai resmi) menggunakan jalan memutar dan bermukim di kota Tembagapura (Kota dengan tata kelola bergaya pemukiman elit bule/Amerika serikat di tengah cuaca ekstrem bersalju lokal Papua).",
        citationIds: ["ppt-ref-freeport"],
      },
      {
        id: "ppt-dest-item-03",
        category: "Telaga Ketenangan Langit Berawan",
        title: "Danau Paniai",
        description: "Danau vulkanik elok permai yang diakui kecantikannya (pernah diklaim terindah dunia) karena posisinya di atas langit bukit yang menawan, diselimuti rumput hijau tenang, tanpa riak ombak. Para turis biasa menyewa perahu motor dan merasakan sensasi memancing ikan sembari memandangi awan kabut putih tebal mengambang tipis tepat di atas kepala air danau, semacam berada di taman eden es langit ketujuh.",
        citationIds: ["ppt-ref-mee"],
      },
      {
        id: "ppt-dest-item-04",
        category: "Taman Berenang Hiu Tutul Laut Nabire",
        title: "Hiu Paus Kwatisore (Nabire - Perbatasan TN Cenderawasih)",
        description: "Turis bisa menumpangi kapal sewaan pagi buta bertolak dari Nabire menuju batas taman nasional. Tak perlu menyelam tabung (scuba), hanya dengan snorkel dan berenang pelan di permukaan, belasan hiu paus rakus sepanjang bus (berbibir lebar ompong ramah) akan berputar jinak mendekati pengunjung berenang mengemis cipratan teri kecil.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    referenceIds: ["ppt-ref-carstensz", "ppt-ref-freeport", "ppt-ref-mee", "ppt-ref-bps"],
  },

  stories: {
    introduction: [
      {
        id: "ppt-story-01",
        content: "Ada saat di mana penjelajah dituduh sakit jiwa halusinasi oleh ilmuwan Eropa, hanya karena melaporkan kebenaran adanya gunung es batu murni yang letaknya hanya sejengkal di bawah garis ekuator (khatulistiwa matahari merah).",
        citationIds: ["ppt-ref-carstensz"],
      }
    ],
    stories: [
      {
        id: "ppt-story-item-01",
        title: "Ejekan Halusinasi Jan Carstensz (Salju Ekuator)",
        description: "Tahun 1623, sewaktu Carstensz mendarat sandar dan melaporkan (lewat surat resmi pelayar VOC) bahwa ia mengintip gugusan salju gemerlapan abadi nun jauh dari garis laut selatan kepulauan (di pulau yang jaraknya dilewati sabuk merah Khatulistiwa ekuator), para ahli geografi dan ilmuwan akademi elit di belanda eropa beramai-ramai menertawakan laporannya dan menganggap ia hanya mabuk terik atau berhalusinasi sakit mental di perjalanan laut. Tiga ratus tahun kemudian, terbukti bahwa laporan gilanya 100% benar; Carstensz dinobatkan sebagai 'Nabi es pertama' oleh federasi pendaki puncak sedunia untuk menamai gletser Pyramid tertinggi benua Oseania tersebut.",
        citationIds: ["ppt-ref-carstensz"],
      },
      {
        id: "ppt-story-item-02",
        title: "Perang Memperebutkan Tulang Babi Kapauku",
        description: "Bagi orang pegunungan luhur Mee Pago, seekor babi hutan gemuk (wàm) adalah mata uang sentral. Pada era prasejarah 1950an, terjadi perang besar masif lintas kampung/klen gara gara masalah utang babi curian tak terbayar saat pesta (Yuwo). Saking bernilainya, setiap bagian babi punya nilai ganti rugi adat, hingga ke harga sekeping tulang rahang/taringnya, yang memicu konflik fisik panjang memakan korban tombak.",
        citationIds: ["ppt-ref-mee"],
      }
    ],
    referenceIds: ["ppt-ref-carstensz", "ppt-ref-mee"],
  },

  contemporary: {
    introduction: [
      {
        id: "ppt-cont-01",
        content: "Provinsi muda ini memikul beratnya PDRB yang sangat timpang; di satu sisi (Timika) menyimpan deposit pajak emas asing modern bernilai miliaran dolar, sementara sisa perbukitan aslinya bertarung berdarah-darah di tengah keterisolasian komunal.",
        citationIds: ["ppt-ref-bps"],
      }
    ],
    economy: [
      {
        id: "ppt-cont-02",
        content: "Hampir seratus persen PDRB Kabupaten Mimika (bahkan Papua keseluruhan dulu) ditopang masif oleh operasional PT Freeport Indonesia (Tambang Grasberg & kini tambang bawah tanah Deep Mill Level Zone / DMLZ raksasa terbesar sedunia). Freeport mempekerjakan puluhan ribu buruh karyawan multinasional dengan standar keselamatan tambang US/Australia, menyulap Timika (kuala Kencana) menjadi kluster metropolis (super block) mahal berkemilau dolar modernisme dengan fasilitas gym elit/lapangan golf hijau, bandara udara komersial Mozes Kilangin megah, sementara warga pedalaman Intan Jaya sering terjebak kemacetan akses penerbangan miskin/harga sembako inflasi berujung kerusuhan perang komunal suku (KKB separatism) perebutan kekuasaan dana desa/pemilu bupati.",
        citationIds: ["ppt-ref-bps", "ppt-ref-freeport"],
      }
    ],
    referenceIds: ["ppt-ref-bps", "ppt-ref-freeport"],
  },

  travel: {
    introduction: [
      {
        id: "ppt-travel-01",
        content: "Untuk berwisata damai pergilah melaut ke utara teluk Nabire, karena masuk ke pedalaman tambang selatan (Tembagapura) memerlukan sekuritas militer ketat seperti masuk ke kompleks area nuklir militer pangkalan elit Pentagon bule.",
        citationIds: ["ppt-ref-freeport"],
      }
    ],
    etiquette: [
      {
        id: "ppt-travel-02",
        content: "Bagi pelancong umum/turis independen non-pegawai, jangan nekat berharap/maksa naik bus jemputan gratis ke atas kota tambang tembaga Tembagapura (Freeport Mimika); area tersebut murni properti zona vital obvitnas nasional tertutup ketat yang mewajibkan izin berlapis super ribet/paspor id card berlapis untuk memasukinya. Jika berlibur ke danau Paniai (daerah Mee Pago), jangan pelit untuk tersenyum duluan sambil memberikan salam 'Koya-koya' (ramah) ke masyarakat lokal di pasar pelabuhan dermaga kecil untuk memecah kekakuan senyum curiga mereka (karena mereka sejatinya butuh dihargai respek sejajar).",
        citationIds: ["ppt-ref-freeport", "ppt-ref-mee"],
      }
    ],
    referenceIds: ["ppt-ref-freeport", "ppt-ref-mee"],
  },

  lastReviewedAt: "2026-07-13T00:55:00Z",
  contentStatus: "draft",
  referenceIds: [
    "ppt-ref-bps",
    "ppt-ref-wbtb",
    "ppt-ref-freeport",
    "ppt-ref-carstensz",
    "ppt-ref-mee"
  ]
};
