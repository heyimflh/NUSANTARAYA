export const intentSynonyms = {
  NEXT_STEP: [
    "lanjut", "berikutnya", "selanjutnya", "ke mana lagi", "arah", "langkah", 
    "habis ini", "setelah ini", "apa lagi", "rekomendasi selanjutnya"
  ],
  RECOMMEND_PROVINCE: [
    "rekomendasi provinsi", "provinsi apa", "tempat apa", "daerah mana", 
    "saran provinsi", "provinsi yang bagus", "pilih provinsi"
  ],
  EXPLAIN_PROVINCE: [
    "jelaskan provinsi", "tentang provinsi", "informasi provinsi", "deskripsi provinsi",
    "apa itu provinsi", "ceritakan provinsi", "detail provinsi"
  ],
  EXPLAIN_CULTURE: [
    "budaya", "sejarah", "tradisi", "adat", "kebiasaan", "asal usul", 
    "cerita rakyat", "kesenian", "tarian", "musik tradisional", "pakaian adat", 
    "jalur rempah"
  ],
  RECOMMEND_CULINARY: [
    "kuliner", "makanan", "minuman", "masakan", "hidangan", "jajanan", 
    "makan apa", "rasa", "khas", "rendang", "sate", "soto"
  ],
  CREATE_JOURNEY: [
    "buat perjalanan", "bikin rute", "rancang perjalanan", "buat journey", 
    "perjalanan dari", "rute wisata", "itinerary dari"
  ],
  ADJUST_JOURNEY: [
    "ubah perjalanan", "ganti rute", "sesuaikan perjalanan", "tambah perhentian", 
    "hapus rute", "edit journey"
  ],
  CREATE_ITINERARY: [
    "buat itinerary", "rencana perjalanan", "jadwal liburan", "jadwal wisata", 
    "itinerary", "plan", "hari", "trip"
  ],
  CULTURAL_ETIQUETTE: [
    "etika", "sopan santun", "aturan", "pantangan", "boleh dan tidak boleh", 
    "do and don't", "dos and donts", "tata krama", "norma"
  ],
  TRAVEL_TIPS: [
    "tips", "saran wisata", "persiapan", "bawa apa", "waktu terbaik", 
    "kapan bagusnya", "panduan wisata"
  ],
  TRANSLATE_TERM: [
    "arti kata", "terjemahkan", "maksudnya", "bahasa", "apa arti", 
    "makna dari", "istilah"
  ],
  PASSPORT_PROGRESS: [
    "passport", "paspor", "milestone", "pencapaian", "progress", "stempel", 
    "badge", "lencana", "koleksi", "cap"
  ],
  COMPARE_REGIONS: [
    "bandingkan", "perbandingan", "beda", "bedanya", "vs", "versus", 
    "lebih bagus mana", "pilih mana"
  ],
  FIND_SOURCE: [
    "sumber", "referensi", "buku", "literatur", "dari mana", "bacaan", 
    "daftar pustaka", "sumber informasi"
  ],
  OPEN_FEATURE: [
    "buka", "tampilkan", "lihat fitur", "ke halaman", "pindah ke"
  ]
};

// Non-cultural/Non-contextual words to politely reject
export const outOfScopeKeywords = [
  "harga tiket", "pesan hotel", "beli tiket", "booking", "customer service", 
  "halo", "hai", "test", "tes", "cuaca", "berita hari ini", "politik", 
  "cara daftar", "lupa password", "login"
];

// Time extraction tokens
export const durationTokens = [
  "hari", "minggu", "bulan", "jam", "days", "weeks", "months"
];
