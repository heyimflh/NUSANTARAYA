# Flowchart Web App NUSANTARAYA

## Navigasi Utama Sejarah, Aksara, Narasi, Tradisi, Alam, Rasa, dan Yatra

### Tagline

**Satu Peta, Ribuan Cerita**

---

# 1. Flowchart Utama Web App NUSANTARAYA

```mermaid
flowchart TD
    A([User Membuka NUSANTARAYA]) --> B[Home Cinematic]
    B --> C{Pilih Mode Eksplorasi}

    C --> C1[Explore Mode]
    C --> C2[Tourist Mode]
    C --> C3[Learn Mode]

    C1 --> D[Nusa Map - Peta Interaktif 38 Provinsi]
    C2 --> E[Tourist Dashboard]
    C3 --> F[Learn Dashboard]

    D --> G{User Memilih Provinsi}
    G --> H[Panel Ringkasan Provinsi]
    H --> I[Halaman Detail Provinsi]

    E --> E1[What to See]
    E --> E2[What to Eat]
    E --> E3[How to Get There]
    E --> E4[Cultural Etiquette]
    E --> E5[Best Time to Visit]
    E --> J[Route Planner]

    F --> F1[Nusa Archive]
    F --> F2[Aksara Lab]
    F --> F3[Jalur Rempah]
    F --> F4[Learn Content dengan Sumber]
    F1 --> K[Detail Item Budaya]

    I --> I1[Sejarah]
    I --> I2[Budaya dan Tradisi]
    I --> I3[Aksara dan Bahasa]
    I --> I4[Kuliner]
    I --> I5[Destinasi Wisata]
    I --> I6[NUSANTARAYA Stories]
    I --> I7[Potensi Modern]
    I --> I8[Itinerary Rekomendasi]
    I --> I9[Quiz Mini]
    I --> I10[Tambah ke Passport]

    I4 --> L[NusaRasa Atlas Kuliner]
    I5 --> J
    I7 --> M[Nusa Future]
    I8 --> J
    I9 --> N[Nusa Passport]
    I10 --> N

    J --> J1[Input Durasi]
    J1 --> J2[Input Minat]
    J2 --> J3[Input Wilayah]
    J3 --> J4[Input Budget]
    J4 --> J5[Input Tipe Traveler]
    J5 --> J6[Generate Itinerary]
    J6 --> J7[Hasil Rute Perjalanan]
    J7 --> J8[Simpan Rute]
    J8 --> N

    L --> L1[Peta Kuliner]
    L --> L2[Filter Rasa]
    L --> L3[Food Story]
    L --> L4[Food Battle]
    L --> L5[Jalur Rempah Kuliner]

    M --> M1[IKN Nusantara]
    M --> M2[Smart City]
    M --> M3[UMKM Digital]
    M --> M4[Ekonomi Kreatif]
    M --> M5[Desa Wisata Digital]

    N --> N1[Stempel Provinsi]
    N --> N2[Badge Wilayah]
    N --> N3[Level Explorer]
    N --> N4[Progress Peta Indonesia]
    N --> N5[Sertifikat Digital]

    O[RANI AI Guide] -. Bisa Diakses dari Semua Halaman .-> B
    O -. Rekomendasi Provinsi .-> D
    O -. Buat Itinerary .-> J
    O -. Jelaskan Budaya .-> F1
    O -. Rekomendasi Kuliner .-> L
    O -. Tips Turis .-> E
```

---

# 2. Flowchart Sitemap dan Struktur Navigasi

```mermaid
flowchart TD
    A[NUSANTARAYA] --> B[Beranda]
    A --> C[Jelajahi]
    A --> D[Budaya]
    A --> E[Wisata]
    A --> F[Kuliner]
    A --> G[Masa Depan]
    A --> H[Passport]
    A --> I[Events]
    A --> J[Tentang]
    A --> K[RANI AI Guide]

    B --> B1[Hero Cinematic]
    B --> B2[Preview Peta]
    B --> B3[Highlight 7 Pilar]
    B --> B4[Preview Fitur Utama]
    B --> B5[CTA Mulai Jelajah]

    C --> C1[Nusa Map 38 Provinsi]
    C --> C2[Per Wilayah]
    C --> C3[Detail Provinsi]
    C2 --> C21[Sumatera]
    C2 --> C22[Jawa]
    C2 --> C23[Kalimantan]
    C2 --> C24[Sulawesi]
    C2 --> C25[Bali dan Nusa Tenggara]
    C2 --> C26[Maluku]
    C2 --> C27[Papua]

    D --> D1[Nusa Archive]
    D --> D2[Nusa Aksara Lab]
    D --> D3[Nusa Jalur Rempah]
    D --> D4[Nusa 3D Gallery]
    D1 --> D11[Rumah Adat]
    D1 --> D12[Tarian]
    D1 --> D13[Alat Musik]
    D1 --> D14[Pakaian Adat]
    D1 --> D15[Upacara Adat]
    D1 --> D16[Cerita Rakyat]
    D1 --> D17[Aksara dan Bahasa]
    D1 --> D18[Kerajinan]

    E --> E1[Route Planner]
    E --> E2[Rute Populer]
    E --> E3[Heritage Trail]
    E --> E4[Destinasi Wisata]

    F --> F1[NusaRasa Atlas]
    F --> F2[Peta Kuliner]
    F --> F3[Food Battle]
    F --> F4[Jalur Rempah Kuliner]
    F --> F5[Hidden Food Gems]

    G --> G1[IKN Nusantara]
    G --> G2[Smart City Indonesia]
    G --> G3[UMKM Digital]
    G --> G4[Ekonomi Kreatif]
    G --> G5[Desa Wisata Digital]
    G --> G6[Green Tourism]

    H --> H1[Dashboard Passport]
    H --> H2[Koleksi Stempel]
    H --> H3[Koleksi Badge]
    H --> H4[Level Explorer]
    H --> H5[Sertifikat Digital]

    I --> I1[Kalender Festival]
    I --> I2[Filter Bulan]
    I --> I3[Filter Wilayah]
    I --> I4[Detail Event]
    I --> I5[Simpan ke Itinerary]

    J --> J1[Visi Misi]
    J --> J2[Tujuan Produk]
    J --> J3[Sumber Data]
    J --> J4[Roadmap]

    K --> K1[Chat Rekomendasi]
    K --> K2[Itinerary Generator]
    K --> K3[Culture Explainer]
    K --> K4[Food Recommender]
    K --> K5[Tourist Assistant]
```

---

# 3. Flowchart Nusa Map dan Detail Provinsi

```mermaid
flowchart TD
    A[User Masuk ke Nusa Map] --> B[Peta Interaktif Indonesia Tampil]
    B --> C{User Melakukan Aksi}

    C --> C1[Klik Provinsi]
    C --> C2[Gunakan Search]
    C --> C3[Pilih Filter Layer]
    C --> C4[Ubah Mode Peta]

    C1 --> D[Panel Ringkasan Provinsi]
    C2 --> D
    C3 --> E[Layer Peta Berubah]
    C4 --> F{Mode Peta}

    F --> F1[Standard Mode]
    F --> F2[Spice Route Mode]
    F --> F3[Destination Heatmap Mode]
    F --> F4[Future City Mode]

    D --> D1[Nama Provinsi]
    D --> D2[Ibu Kota]
    D --> D3[Wilayah]
    D --> D4[Ikon Budaya]
    D --> D5[3 Kuliner Khas]
    D --> D6[3 Destinasi Unggulan]
    D --> D7[Potensi Modern]
    D --> D8[CTA Jelajahi Provinsi]
    D --> D9[CTA Tambah ke Passport]

    D8 --> G[Halaman Detail Provinsi]
    D9 --> H[Nusa Passport Menyimpan Stempel]

    G --> G1[Hero Provinsi]
    G1 --> G2[Sekilas Provinsi]
    G2 --> G3[Timeline Sejarah]
    G3 --> G4[Budaya dan Tradisi]
    G4 --> G5[Aksara dan Bahasa]
    G5 --> G6[NusaRasa Provinsi]
    G6 --> G7[Destinasi Wisata]
    G7 --> G8[NUSANTARAYA Stories]
    G8 --> G9[Potensi Modern]
    G9 --> G10[Itinerary Rekomendasi]
    G10 --> G11[Quiz Mini]
    G11 --> G12[Provinsi Terkait]

    G10 --> I[Route Planner]
    G11 --> H
    G9 --> J[Nusa Future]
    G6 --> K[NusaRasa Atlas]
```

---

# 4. Flowchart RANI AI Guide

```mermaid
flowchart TD
    A[User Membuka RANI AI Guide] --> B[RANI Menyapa User]
    B --> C{Bahasa dan Mode User}

    C --> C1[Indonesia - Explore Mode]
    C --> C2[English - Tourist Mode]
    C --> C3[Learn Mode]

    C1 --> D[User Mengajukan Pertanyaan]
    C2 --> D
    C3 --> D

    D --> E{Jenis Pertanyaan}

    E --> E1[Rekomendasi Destinasi]
    E --> E2[Buat Itinerary]
    E --> E3[Jelaskan Budaya]
    E --> E4[Rekomendasi Kuliner]
    E --> E5[Etika Budaya]
    E --> E6[Tips Perjalanan]
    E --> E7[Terjemahkan Kosakata]
    E --> E8[Pertanyaan di Luar Cakupan]

    E1 --> F1[Ambil Data Provinsi dan Destinasi]
    E2 --> F2[Ambil Data Route Planner]
    E3 --> F3[Ambil Data Nusa Archive]
    E4 --> F4[Ambil Data NusaRasa]
    E5 --> F5[Ambil Data Tourist Mode]
    E6 --> F6[Ambil Data Travel Tips]
    E7 --> F7[Ambil Data Aksara dan Bahasa]
    E8 --> F8[Arahkan ke Fitur Terkait]

    F1 --> G{API AI Tersedia?}
    F2 --> G
    F3 --> G
    F4 --> G
    F5 --> G
    F6 --> G
    F7 --> G

    G -->|Ya| H[Generate Jawaban AI Berbasis Dataset]
    G -->|Tidak| I[Gunakan Fallback Dataset Lokal]

    H --> J[RANI Menampilkan Jawaban]
    I --> J
    F8 --> J

    J --> K[Quick Reply Chips]
    K --> L{User Memilih Aksi Lanjutan}

    L --> L1[Buka Provinsi]
    L --> L2[Generate Route]
    L --> L3[Buka Archive]
    L --> L4[Buka NusaRasa]
    L --> L5[Buka Tourist Guide]

    L1 --> M[Nusa Map atau Detail Provinsi]
    L2 --> N[Route Planner]
    L3 --> O[Nusa Archive]
    L4 --> P[NusaRasa]
    L5 --> Q[Tourist Mode]
```

---

# 5. Flowchart Route Planner

```mermaid
flowchart TD
    A[User Masuk Route Planner] --> B[Mood Explorer Dimulai]
    B --> C[Input Durasi Perjalanan]
    C --> D[Input Minat Perjalanan]
    D --> E[Input Wilayah Tujuan]
    E --> F[Input Budget]
    F --> G[Input Tipe Traveler]
    G --> H{Pilih Metode Rute}

    H --> H1[Gunakan Preset Route]
    H --> H2[Generate dengan RANI AI]
    H --> H3[Generate Lokal Berbasis Dataset]

    H1 --> I[Ambil Rute Kurasi Manual]
    H2 --> J{API AI Tersedia?}
    H3 --> K[Ambil Template Rute Lokal]

    J -->|Ya| L[AI Menyesuaikan Rute]
    J -->|Tidak| K

    I --> M[Susun Hasil Itinerary]
    L --> M
    K --> M

    M --> N[Output Hari per Hari]
    N --> O[Peta Rute Mini]
    O --> P[Rekomendasi Kuliner]
    P --> Q[Tips Transportasi]
    Q --> R[Cultural Etiquette]
    R --> S[Estimasi Budget]
    S --> T[Checklist Perjalanan]

    T --> U{User Melakukan Aksi}

    U --> U1[Simpan Rute]
    U --> U2[Bagikan Itinerary]
    U --> U3[Edit Preferensi]
    U --> U4[Tanya RANI]
    U --> U5[Tambah Provinsi ke Passport]

    U1 --> V[Saved Routes]
    U2 --> W[Share Link atau WhatsApp]
    U3 --> B
    U4 --> X[RANI AI Guide]
    U5 --> Y[Nusa Passport]
```

---

# 6. Flowchart Nusa Passport

```mermaid
flowchart TD
    A[User Menggunakan NUSANTARAYA] --> B{Aksi User}

    B --> B1[Membuka Halaman Provinsi]
    B --> B2[Menyelesaikan Quiz]
    B --> B3[Menyimpan Itinerary]
    B --> B4[Menyelesaikan Misi Tematik]
    B --> B5[Menggunakan RANI]
    B --> B6[Membuka Aksara Lab]
    B --> B7[Mengaktifkan Soundscape]

    B1 --> C[Tambah Stempel Basic]
    B2 --> D[Tambah Stempel Verified Explorer]
    B3 --> E[Tambah Route Stamp]
    B4 --> F[Tambah Badge Tematik]
    B5 --> G[Tambah Progress RANI Companion]
    B6 --> H[Tambah Progress Aksara Learner]
    B7 --> I[Tambah Progress Soundscape Listener]

    C --> J[Update localStorage]
    D --> J
    E --> J
    F --> J
    G --> J
    H --> J
    I --> J

    J --> K[Hitung XP]
    K --> L{Cek Level Explorer}

    L --> L1[Penjelajah Baru]
    L --> L2[Petualang Nusantara]
    L --> L3[Pengembara Sejati]
    L --> L4[Penjaga Warisan]
    L --> L5[Pahlawan Nusantara]

    K --> M{Cek Badge Wilayah}
    M --> M1[Sumatra Seeker]
    M --> M2[Java Heritage Keeper]
    M --> M3[Borneo Nature Guardian]
    M --> M4[Celebes Voyager]
    M --> M5[Bali-Nusa Wanderer]
    M --> M6[Maluku Spice Explorer]
    M --> M7[Papua Wonder Seeker]
    M --> M8[Indonesia Complete Explorer]

    K --> N{Cek Badge Tematik}
    N --> N1[Spice Route Explorer]
    N --> N2[Heritage Trail Keeper]
    N --> N3[NusaRasa Hunter]
    N --> N4[Aksara Learner]
    N --> N5[Soundscape Listener]
    N --> N6[Future City Explorer]
    N --> N7[RANI Companion]

    L --> O[Dashboard Passport]
    M --> O
    N --> O

    O --> P[Tampilkan Progress Peta]
    O --> Q[Tampilkan Stempel]
    O --> R[Tampilkan Badge]
    O --> S[Tampilkan Level]
    O --> T[Download Sertifikat]
    O --> U[Share Progress]
```

---

# 7. Flowchart Nusa Archive

```mermaid
flowchart TD
    A[User Membuka Nusa Archive] --> B[Halaman Ensiklopedia Budaya]
    B --> C{User Melakukan Aksi}

    C --> C1[Search Keyword]
    C --> C2[Filter Provinsi]
    C --> C3[Filter Kategori]
    C --> C4[Filter Era]
    C --> C5[Sort Konten]

    C1 --> D[Query Data Archive]
    C2 --> D
    C3 --> D
    C4 --> D
    C5 --> D

    D --> E[Menampilkan Hasil Card Budaya]
    E --> F{User Memilih Item}

    F --> F1[Rumah Adat]
    F --> F2[Tarian Tradisional]
    F --> F3[Alat Musik]
    F --> F4[Pakaian Adat]
    F --> F5[Upacara Adat]
    F --> F6[Cerita Rakyat]
    F --> F7[Aksara dan Bahasa]
    F --> F8[Senjata Tradisional]
    F --> F9[Kerajinan]
    F --> F10[Motif Budaya]
    F --> F11[Tokoh Daerah]

    F1 --> G[Detail Item Budaya]
    F2 --> G
    F3 --> G
    F4 --> G
    F5 --> G
    F6 --> G
    F7 --> G
    F8 --> G
    F9 --> G
    F10 --> G
    F11 --> G

    G --> H[Nama Item]
    G --> I[Asal Daerah]
    G --> J[Deskripsi]
    G --> K[Makna Filosofis]
    G --> L[Konteks Sejarah]
    G --> M[Status Saat Ini]
    G --> N[Sumber Referensi]
    G --> O[Konten Terkait]

    O --> P[Lihat di Peta]
    O --> Q[Buka Provinsi]
    O --> R[Simpan ke Favorit]
    O --> S[Suggest Correction]
    O --> T[Tanya RANI]

    P --> U[Nusa Map]
    Q --> V[Detail Provinsi]
    T --> W[RANI AI Guide]
```

---

# 8. Flowchart NusaRasa Atlas Kuliner

```mermaid
flowchart TD
    A[User Membuka NusaRasa] --> B[Atlas Kuliner Nusantara]
    B --> C{Pilih Mode Eksplorasi Kuliner}

    C --> C1[Peta Kuliner]
    C --> C2[Filter Rasa]
    C --> C3[Food Story]
    C --> C4[Food Battle]
    C --> C5[Jalur Rempah Kuliner]
    C --> C6[Hidden Food Gems]

    C1 --> D[Peta Indonesia dengan Pin Kuliner]
    D --> E[Klik Pin Kuliner]
    E --> F[Panel Detail Kuliner]

    C2 --> G{Filter Rasa}
    G --> G1[Pedas]
    G --> G2[Gurih]
    G --> G3[Manis]
    G --> G4[Asam]
    G --> G5[Rempah Kuat]
    G --> G6[Laut]
    G --> G7[Tradisional]
    G --> G8[Modern]
    G1 --> H[Grid Kuliner Terfilter]
    G2 --> H
    G3 --> H
    G4 --> H
    G5 --> H
    G6 --> H
    G7 --> H
    G8 --> H

    C3 --> I[Artikel Cerita Kuliner]
    C4 --> J[Pilih Dua Kuliner]
    J --> K[Bandingkan Rasa]
    K --> L[Bandingkan Asal]
    L --> M[Bandingkan Cerita]
    M --> N[Rekomendasi Coba]

    C5 --> O[Peta Jalur Rempah Kuliner]
    O --> P[Rempah dan Pengaruhnya]
    P --> Q[Koneksi ke Jalur Rempah]

    C6 --> R[Daftar Kuliner Tersembunyi]

    F --> S{Aksi Lanjutan}
    H --> S
    I --> S
    N --> S
    R --> S

    S --> S1[Buka Provinsi Asal]
    S --> S2[Simpan ke Passport]
    S --> S3[Tanya RANI]
    S --> S4[Masukkan ke Itinerary]

    S1 --> T[Detail Provinsi]
    S2 --> U[Nusa Passport]
    S3 --> V[RANI AI Guide]
    S4 --> W[Route Planner]
```

---

# 9. Flowchart Nusa Future

```mermaid
flowchart TD
    A[User Membuka Nusa Future] --> B[Halaman Masa Depan Nusantara]
    B --> C{Pilih Topik}

    C --> C1[IKN Nusantara]
    C --> C2[Smart City Indonesia]
    C --> C3[UMKM Digital]
    C --> C4[Ekonomi Kreatif]
    C --> C5[Desa Wisata Digital]
    C --> C6[Green Tourism]
    C --> C7[Startup Lokal]

    C1 --> D[Infografis IKN]
    D --> D1[Timeline Pembangunan]
    D --> D2[Konsep Kota Pintar]
    D --> D3[Konteks Budaya Kalimantan]
    D --> D4[Hubungan dengan Kaltim]

    C2 --> E[Peta Smart City]
    E --> E1[Surabaya]
    E --> E2[Bandung]
    E --> E3[Makassar]
    E --> E4[Denpasar]
    E --> E5[Kota Lain]

    C3 --> F[Katalog UMKM Digital]
    F --> F1[Tenun NTT]
    F --> F2[Songket Palembang]
    F --> F3[Batik Pekalongan]
    F --> F4[Kopi Gayo]
    F --> F5[Kopi Toraja]
    F --> F6[Noken Papua]

    C4 --> G[Peta Klaster Ekonomi Kreatif]
    G --> G1[Fashion]
    G --> G2[Craft]
    G --> G3[Kuliner]
    G --> G4[Film dan Animasi]
    G --> G5[Game dan Aplikasi]

    C5 --> H[Daftar Desa Wisata Digital]
    C6 --> I[Green Tourism dan Alam]
    C7 --> J[Startup dan Inovasi Lokal]

    D4 --> K[Detail Provinsi Kalimantan Timur]
    E --> L[Detail Kota atau Provinsi]
    F --> M[Detail Produk Lokal]
    G --> N[Detail Sub-sektor Kreatif]
    H --> O[Route Planner Desa Wisata]
    I --> P[Destinasi Alam]
    J --> Q[Potensi Modern Daerah]

    K --> R[Nusa Passport]
    L --> R
    M --> R
    O --> S[Route Planner]
```

---

# 10. Flowchart Bilingual dan Tourist Mode

```mermaid
flowchart TD
    A[User Membuka Website] --> B{Pilih Bahasa}

    B --> B1[Indonesia]
    B --> B2[English]

    B1 --> C{Pilih Mode}
    B2 --> D[Tourist Mode Direkomendasikan]

    C --> C1[Explore Mode]
    C --> C2[Learn Mode]
    C --> C3[Tourist Mode Lokal]

    D --> D1[English Tourist Mode]

    C1 --> E[Konten Eksplorasi Lengkap]
    C2 --> F[Konten Edukatif dengan Sumber]
    C3 --> G[Konten Praktis untuk Wisatawan Lokal]
    D1 --> H[Konten Praktis untuk Foreign Tourist]

    G --> G1[What to See]
    G --> G2[What to Eat]
    G --> G3[How to Get There]
    G --> G4[Best Time to Visit]
    G --> G5[Budget Range]

    H --> H1[What to See]
    H --> H2[What to Eat]
    H --> H3[How to Get There]
    H --> H4[Cultural Etiquette]
    H --> H5[Safety Tips]
    H --> H6[Best Time to Visit]

    E --> I[Nusa Map]
    F --> J[Nusa Archive]
    G --> K[Route Planner]
    H --> K

    B1 --> L[RANI Bahasa Indonesia]
    B2 --> M[RANI English]
```

---

# 11. Flowchart Aksara Lab

```mermaid
flowchart TD
    A[User Membuka Nusa Aksara Lab] --> B[Pilih Aksara]

    B --> B1[Aksara Jawa]
    B --> B2[Aksara Bali]
    B --> B3[Aksara Sunda]
    B --> B4[Aksara Lontara]
    B --> B5[Aksara Batak]
    B --> B6[Aksara Rejang]

    B1 --> C[Input Nama atau Kata Latin]
    B2 --> C
    B3 --> C
    B4 --> C
    B5 --> C
    B6 --> C

    C --> D[Proses Transliterasi]
    D --> E[Tampilkan Hasil Aksara]
    E --> F[Informasi Sejarah Aksara]
    F --> G[Animasi Stroke Penulisan]
    G --> H{Aksi User}

    H --> H1[Latihan Menebak Aksara]
    H --> H2[Download Kartu Nama]
    H --> H3[Share Hasil]
    H --> H4[Simpan Progress Passport]
    H --> H5[Tanya RANI tentang Aksara]

    H1 --> I[Quiz Aksara]
    I --> J[Skor Latihan]
    J --> K[Nusa Passport]

    H2 --> L[Export PNG]
    H3 --> M[Share Card]
    H4 --> K
    H5 --> N[RANI AI Guide]
```

---

# 12. Flowchart Soundscape

```mermaid
flowchart TD
    A[User Membuka Halaman Provinsi atau Wilayah] --> B{Apakah Soundscape Tersedia?}

    B -->|Ya| C[Tampilkan Tombol Nyalakan Suasana]
    B -->|Tidak| D[Tidak Menampilkan Audio Control]

    C --> E{User Menekan Tombol Audio?}

    E -->|Ya| F[Audio Soundscape Diputar]
    E -->|Tidak| G[Audio Tetap OFF]

    F --> H[User Mengatur Volume]
    F --> I[User Pause Audio]
    F --> J[User Berpindah Halaman]

    H --> F
    I --> K[Audio Berhenti]
    J --> L{Halaman Baru Punya Soundscape?}

    L -->|Ya| M[Tawarkan Soundscape Baru]
    L -->|Tidak| K

    F --> N[Catat Progress Soundscape Listener]
    N --> O[Nusa Passport]

    M --> C
```

---

# 13. Flowchart Event Calendar

```mermaid
flowchart TD
    A[User Membuka Event Calendar] --> B[Kalender Festival Nusantara]
    B --> C{User Melakukan Filter}

    C --> C1[Filter Bulan]
    C --> C2[Filter Wilayah]
    C --> C3[Filter Kategori]
    C --> C4[Search Event]

    C1 --> D[Daftar Event Terfilter]
    C2 --> D
    C3 --> D
    C4 --> D

    D --> E[User Memilih Event]
    E --> F[Detail Event]

    F --> F1[Nama Event]
    F --> F2[Lokasi]
    F --> F3[Tanggal]
    F --> F4[Deskripsi]
    F --> F5[Budaya Terkait]
    F --> F6[Peta Lokasi]
    F --> F7[Tips Mengunjungi]

    F --> G{Aksi User}

    G --> G1[Simpan ke Itinerary]
    G --> G2[Buka Provinsi]
    G --> G3[Tanya RANI]
    G --> G4[Tambah ke Passport]

    G1 --> H[Route Planner]
    G2 --> I[Detail Provinsi]
    G3 --> J[RANI AI Guide]
    G4 --> K[Nusa Passport]
```

---

# 14. Flowchart Data dan Konten

```mermaid
flowchart TD
    A[Sumber Data Tepercaya] --> B[Kurasi Konten]
    B --> C[Validasi Budaya dan Sensitivitas]
    C --> D[Masukkan ke Dataset Terstruktur]

    A --> A1[Situs Pariwisata Resmi]
    A --> A2[Kemendikbud]
    A --> A3[Pemerintah Daerah]
    A --> A4[Museum atau Lembaga Budaya]
    A --> A5[Buku dan Referensi Budaya]
    A --> A6[Dokumentasi Event]

    D --> E[province.json]
    D --> F[cultureArchive.json]
    D --> G[culinary.json]
    D --> H[routes.json]
    D --> I[events.json]
    D --> J[future.json]
    D --> K[languageScript.json]

    E --> L[Nusa Map]
    E --> M[Detail Provinsi]
    F --> N[Nusa Archive]
    G --> O[NusaRasa]
    H --> P[Route Planner]
    I --> Q[Event Calendar]
    J --> R[Nusa Future]
    K --> S[Aksara Lab]

    L --> T[RANI Dataset]
    M --> T
    N --> T
    O --> T
    P --> T
    Q --> T
    R --> T
    S --> T

    T --> U[RANI AI Guide]
    T --> V[Fallback Lokal Jika API Gagal]
```

---

# 15. Flowchart Demo Juri 10 Menit

```mermaid
flowchart TD
    A([Mulai Presentasi]) --> B[Home Cinematic]
    B --> C[Tampilkan Tagline: Satu Peta Ribuan Cerita]
    C --> D[Klik Mulai Jelajah]
    D --> E[Nusa Map 38 Provinsi]

    E --> F[Pilih Provinsi Flagship]
    F --> G[Panel Ringkasan Provinsi]
    G --> H[Masuk Detail Provinsi]

    H --> I[Tunjukkan Sejarah]
    I --> J[Tunjukkan Budaya dan Tradisi]
    J --> K[Tunjukkan Kuliner]
    K --> L[Tunjukkan Destinasi]
    L --> M[Tunjukkan Potensi Modern]

    M --> N[Buka Route Planner]
    N --> O[Generate Itinerary 5 Hari]
    O --> P[Tampilkan Rute dan Tips]

    P --> Q[Buka RANI AI Guide]
    Q --> R[Tanya Rekomendasi atau Etika Budaya]
    R --> S[RANI Menjawab dan Mengarahkan]

    S --> T[Jawab Quiz Mini]
    T --> U[Dapat Stempel Passport]
    U --> V[Buka Dashboard Passport]

    V --> W[Buka Nusa Future]
    W --> X[Tunjukkan IKN, Smart City, UMKM Digital]

    X --> Y[Aktifkan English Tourist Mode]
    Y --> Z[Tampilkan Konten Turis Internasional]

    Z --> AA[Closing Pitch]
    AA --> AB([Selesai])
```

---

# 16. Flowchart Roadmap Pengembangan

```mermaid
flowchart TD
    A[Mulai Development NUSANTARAYA] --> B[Fase 0 - Fondasi]
    B --> B1[Setup Project]
    B --> B2[Design System]
    B --> B3[Skema Data JSON]
    B --> B4[Routing dan Layout]
    B --> B5[Komponen UI Utama]

    B5 --> C[Fase 1 - MVP Inti]
    C --> C1[Home Cinematic]
    C --> C2[Nusa Map]
    C --> C3[Detail Provinsi]
    C --> C4[Nusa Archive]
    C --> C5[NusaRasa]
    C --> C6[Route Planner Preset]
    C --> C7[Nusa Passport]
    C --> C8[Bilingual Dasar]

    C8 --> D[Fase 2 - Pembeda Kuat]
    D --> D1[RANI AI Guide]
    D --> D2[Nusa Future]
    D --> D3[Nusa Soundscape]
    D --> D4[Aksara Lab]
    D --> D5[Jalur Rempah]
    D --> D6[Quiz Mini]
    D --> D7[Event Calendar]

    D7 --> E[Fase 3 - Polish Premium]
    E --> E1[Nusa Lens]
    E --> E2[3D Gallery]
    E --> E3[Digital Batik Canvas]
    E --> E4[Sertifikat Digital]
    E --> E5[Animasi Cinematic]
    E --> E6[Optimasi Performance]
    E --> E7[Accessibility Audit]

    E7 --> F[Fase 4 - Demo Prep]
    F --> F1[Isi 8 Provinsi Flagship]
    F --> F2[Siapkan Fallback AI]
    F --> F3[Latih Demo Path]
    F --> F4[Audit Mobile]
    F --> F5[Fix Bug]
    F --> F6[Lighthouse Check]
    F --> F7[Deploy Final]

    F7 --> G([Siap Presentasi Lomba])
```

---

# 17. Flowchart Arsitektur Teknis

```mermaid
flowchart TD
    A[Frontend Web App] --> B[Next.js atau React]
    B --> C[Routing Pages]
    B --> D[Reusable Components]
    B --> E[State Management]
    B --> F[Animation Layer]
    B --> G[Internationalization]

    C --> C1[Home]
    C --> C2[Explore Map]
    C --> C3[Province Detail]
    C --> C4[Route Planner]
    C --> C5[Archive]
    C --> C6[NusaRasa]
    C --> C7[Passport]
    C --> C8[Future]

    D --> D1[Card]
    D --> D2[Button]
    D --> D3[Modal]
    D --> D4[Bottom Sheet]
    D --> D5[Map Panel]
    D --> D6[Badge]
    D --> D7[Timeline]
    D --> D8[Search Filter]

    E --> E1[localStorage Passport]
    E --> E2[User Mode]
    E --> E3[Language State]
    E --> E4[Saved Routes]
    E --> E5[Audio State]

    F --> F1[Framer Motion]
    F --> F2[GSAP]
    F --> F3[Scroll Reveal]
    F --> F4[Map Hover Animation]

    G --> G1[ID Content]
    G --> G2[EN Content]
    G --> G3[Tourist Mode Content]

    A --> H[Data Layer]
    H --> H1[province.json]
    H --> H2[cultureArchive.json]
    H --> H3[culinary.json]
    H --> H4[routes.json]
    H --> H5[events.json]
    H --> H6[future.json]
    H --> H7[aksara.json]

    A --> I[Map Layer]
    I --> I1[SVG Indonesia Map]
    I --> I2[Leaflet atau Mapbox Mini Map]

    A --> J[AI Layer]
    J --> J1[RANI UI]
    J --> J2[LLM API]
    J --> J3[RAG Dataset]
    J --> J4[Fallback Local Answer]

    A --> K[Media Layer]
    K --> K1[Optimized Images]
    K --> K2[Soundscape Audio]
    K --> K3[3D Model Lazy Load]
    K --> K4[OpenGraph Assets]

    A --> L[Deployment]
    L --> L1[Vercel atau Netlify]
    L --> L2[Domain .ID]
    L --> L3[SEO Sitemap]
```

---

# 18. Flowchart Error Handling dan Fallback

```mermaid
flowchart TD
    A[User Mengakses Fitur] --> B{Fitur Butuh Data atau API?}

    B -->|Data Lokal| C[Ambil dari JSON]
    B -->|API AI| D[Cek Koneksi API]
    B -->|Map API| E[Cek Map Service]
    B -->|Media Berat| F[Cek Asset Loaded]

    D -->|Berhasil| G[Tampilkan Jawaban AI]
    D -->|Gagal| H[Gunakan Fallback Dataset Lokal]

    E -->|Berhasil| I[Tampilkan Peta Kecil]
    E -->|Gagal| J[Tampilkan Static Map atau Info Lokasi]

    F -->|Berhasil| K[Tampilkan Audio atau 3D]
    F -->|Gagal| L[Tampilkan Gambar atau Teks Alternatif]

    C --> M[Tampilkan Konten]
    G --> M
    H --> M
    I --> M
    J --> M
    K --> M
    L --> M

    M --> N{User Masih Bisa Melanjutkan?}
    N -->|Ya| O[Berikan CTA Alternatif]
    N -->|Tidak| P[Tampilkan Pesan Error Ramah]

    O --> Q[User Lanjut Eksplorasi]
    P --> R[Arahkan ke Home atau Fitur Terkait]
```

---

# 19. Flowchart Keterhubungan 7 Pilar NUSANTARAYA

```mermaid
flowchart TD
    A[NUSANTARAYA] --> B[Navigasi Utama]
    B --> C[Nusa Map 38 Provinsi]

    C --> D[S - Sejarah]
    C --> E[A - Aksara]
    C --> F[N - Narasi]
    C --> G[T - Tradisi]
    C --> H[A - Alam]
    C --> I[R - Rasa]
    C --> J[Y - Yatra]

    D --> D1[Timeline Provinsi]
    D --> D2[Jalur Rempah]
    D --> D3[Tokoh Daerah]
    D --> D4[Situs Warisan]

    E --> E1[Aksara Lab]
    E --> E2[Bahasa Lokal]
    E --> E3[Audio Pengucapan]
    E --> E4[Transliterasi]

    F --> F1[NUSANTARAYA Stories]
    F --> F2[Cerita Rakyat]
    F --> F3[Micro Story]
    F --> F4[Narasi Daerah]

    G --> G1[Rumah Adat]
    G --> G2[Tarian]
    G --> G3[Alat Musik]
    G --> G4[Festival]
    G --> G5[Soundscape]

    H --> H1[Destinasi Alam]
    H --> H2[Hidden Gems]
    H --> H3[Green Tourism]
    H --> H4[Desa Wisata]

    I --> I1[NusaRasa]
    I --> I2[Peta Kuliner]
    I --> I3[Food Battle]
    I --> I4[Bumbu Nusantara]

    J --> J1[Route Planner]
    J --> J2[Nusa Passport]
    J --> J3[RANI AI Guide]
    J --> J4[Nusa Future]
```

---

# 20. Ringkasan Alur Produk

NUSANTARAYA dimulai dari **Home Cinematic** sebagai pintu masuk emosional. User kemudian memilih mode eksplorasi sesuai kebutuhan: Explore Mode, Tourist Mode, atau Learn Mode. Dari sana, pusat pengalaman diarahkan ke **Nusa Map**, yaitu peta interaktif 38 provinsi yang menghubungkan seluruh fitur.

Setiap provinsi memiliki halaman detail yang menampilkan sejarah, budaya, aksara, kuliner, destinasi, cerita, potensi modern, itinerary, dan quiz. Aktivitas user di dalam web akan masuk ke **Nusa Passport**, sehingga eksplorasi terasa seperti perjalanan digital yang punya progress.

Untuk kebutuhan perjalanan nyata, user dapat menggunakan **Route Planner** dan dibantu oleh **RANI AI Guide**. Untuk eksplorasi edukatif, user dapat membuka **Nusa Archive**, **Nusa Aksara Lab**, dan **Nusa Jalur Rempah**. Untuk pengalaman visual dan emosional, user dapat menikmati **NusaRasa**, **Soundscape**, **3D Gallery**, dan **Digital Batik Canvas**. Untuk menjawab tema Digital City, web menyediakan **Nusa Future** yang membahas IKN, smart city, UMKM digital, ekonomi kreatif, dan desa wisata digital.

Dengan alur ini, NUSANTARAYA tidak hanya menjadi website informasi, tetapi menjadi ekosistem eksplorasi digital Indonesia yang lengkap, imersif, dan siap dipresentasikan sebagai produk lomba yang menargetkan Juara 1.

---
