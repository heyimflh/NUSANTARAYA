# Planning Lengkap — Explore Control Bar NUSANTARAYA

<aside>
🧭

**Dokumen planning detail untuk Section 2 halaman Nusa Map Full Page NUSANTARAYA.** Explore Control Bar berfungsi sebagai jembatan natural dari Hero Section menuju Interactive Indonesia Map: premium, app-like, fungsional, dan terasa seperti command center untuk menjelajahi Nusantara.

</aside>

---

## 1. Ringkasan Eksekutif

**Explore Control Bar** adalah section kedua setelah Map Hero / Page Header pada halaman `/explore`. Section ini bukan sekadar search form atau filter biasa, melainkan **Premium Exploration Control Deck**: panel kendali utama yang membantu user menentukan cara menjelajah Indonesia sebelum masuk ke peta interaktif.

Jika Hero Section menjawab:

> “Apa itu Nusa Map?”
> 

Maka Explore Control Bar menjawab:

> “Bagaimana saya mulai menjelajah Nusantara?”
> 

Section ini harus membuat pengalaman Nusa Map terasa:

- **Bisa digunakan**, bukan hanya visual.
- **Interaktif**, karena user dapat mencari, memilih layer, mengubah mode, dan melihat state aktif.
- **Premium**, menyatu dengan hero cinematic yang sudah ada.
- **App-like**, terasa seperti control deck untuk peta digital.
- **Siap menjadi state controller** untuk Interactive Indonesia Map dan section berikutnya.

---

## 2. Identitas Section

### 2.1 Nama teknis

```
ExploreControlBar
```

Digunakan untuk nama komponen internal, folder, export, dan dokumentasi teknis.

### 2.2 Nama visual di UI

Rekomendasi utama:

```
Pusat Kendali Jelajah
```

Versi lebih ringan untuk heading/eyebrow:

```
Mulai Eksplorasi
```

### 2.3 Nama alternatif

```
Search & Filter Navigation
Nusa Map Control Deck
Explore Command Bar
Panel Kendali Nusa Map
Jelajah Control Center
Premium Exploration Control Deck
```

### 2.4 Rekomendasi final

| Kebutuhan | Nama final |
| --- | --- |
| Nama komponen | `ExploreControlBar` |
| Nama folder | `src/components/explore/control-bar/` |
| Nama visual premium | `Pusat Kendali Jelajah` |
| Nama visual ringan | `Mulai Eksplorasi` |
| Konsep besar | `Premium Exploration Control Deck` |

---

## 3. Posisi dalam Struktur Halaman

Explore Control Bar muncul **tepat setelah hero section** dan sebelum Interactive Indonesia Map.

Urutan halaman Nusa Map Full Page:

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Detail Panel / Bottom Sheet
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey
8. Regional Explorer
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 3.1 Peran transisi dari Hero ke Map

Hero Section sudah memiliki arah visual:

- Cinematic.
- Clean.
- Light premium.
- Navbar glass.
- Background landscape besar.
- Heading editorial.
- CTA jelas.
- Transisi wave putih ke section berikutnya.

Karena itu Explore Control Bar harus muncul di area **white / ivory** setelah wave, dengan card yang sedikit overlap secara halus agar terasa seperti lanjutan natural dari hero.

Rekomendasi positioning:

```css
margin-top: -32px; /* desktop */
margin-top: -20px; /* mobile */
z-index: 20;
```

Catatan: overlap jangan terlalu tinggi agar tidak menutupi hero. Tujuannya adalah memberi rasa “floating deck” yang muncul dari transisi wave.

---

## 4. Konsep Besar

### 4.1 Konsep final

```
Premium Exploration Control Deck
```

Artinya: section ini adalah **panel kendali premium** yang membantu user memilih cara menjelajahi Indonesia melalui search, mode, layer, quick actions, dan summary aktif.

### 4.2 Prinsip desain

Section ini harus terasa:

- Lebih **functional** dibanding hero.
- Lebih **app-like** daripada editorial section biasa.
- Tetap **premium** dan tidak terasa seperti filter form generik.
- Ringan, clean, dan tidak terlalu ramai.
- Punya glassmorphism lembut.
- Menyambung dengan palet hero: gold, navy, ivory.
- Terasa seperti “control deck” sebelum user masuk ke peta.

### 4.3 Kalimat arahan visual

```
A premium glass command deck that helps users start their journey across Nusantara.
```

Versi Indonesia:

```
Panel kendali premium untuk memulai jelajah Nusantara berdasarkan provinsi, minat, dan mode eksplorasi.
```

---

## 5. Fungsi Utama Section

Explore Control Bar adalah alat kontrol utama sebelum user masuk ke Interactive Indonesia Map.

Section ini harus membuat user bisa:

1. Mencari provinsi, budaya, kuliner, destinasi, atau keyword.
2. Memilih layer eksplorasi.
3. Memilih mode user.
4. Menyorot 8 provinsi flagship.
5. Reset peta.
6. Melihat ringkasan filter aktif.
7. Menyiapkan state untuk Interactive Indonesia Map.
8. Memberikan konteks interaksi untuk Province Detail Panel.
9. Menjadi dasar personalisasi untuk Recommended Journey.
10. Menjadi jembatan ke Passport dan RANI Assistant.

---

## 6. Tujuan UX

### 6.1 Tujuan user

Setelah melihat section ini, user harus paham:

```
Saya bisa mencari provinsi.
Saya bisa filter berdasarkan budaya, kuliner, alam, sejarah, rempah, atau kota masa depan.
Saya bisa memilih mode Explore, Tourist, atau Learn.
Saya bisa langsung menyorot provinsi flagship.
Saya bisa reset dan mulai ulang eksplorasi.
Saya bisa masuk ke peta dengan konteks yang sudah saya pilih.
```

### 6.2 Tujuan emosional

User harus merasa:

```
Website ini bukan hanya visual, tapi bisa digunakan.
Saya punya kontrol.
Saya bisa menjelajah sesuai minat saya.
Peta ini terasa hidup dan interaktif.
Saya sedang masuk ke pengalaman digital premium, bukan halaman statis.
```

### 6.3 Tujuan produk

Explore Control Bar menjadi **state controller** yang dapat dipakai oleh:

- Interactive Indonesia Map.
- Province Detail Panel / Bottom Sheet.
- Flagship Provinces.
- Explore by Layer.
- Recommended Journey.
- Passport Progress.
- RANI Map Assistant.

---

## 7. Target Experience

### 7.1 Sebelum user berinteraksi

User melihat card kaca premium dengan search besar, mode selector, layer chips, quick actions, dan summary.

Default state:

```
Mode Explore · Layer Semua · Menampilkan semua provinsi dan 8 flagship utama.
```

### 7.2 Saat user mencari

Contoh input:

```
gudeg
```

Output dropdown:

```
DI Yogyakarta
Jawa · Keraton · Batik · Gudeg
```

State berubah:

```
selectedProvinceId = "di-yogyakarta"
searchQuery = "DI Yogyakarta"
```

### 7.3 Saat user memilih layer

Contoh klik:

```
Kuliner
```

State berubah:

```
activeLayer = "kuliner"
```

Summary berubah:

```
Layer Kuliner aktif — temukan rasa khas dari berbagai daerah.
```

### 7.4 Saat user memilih mode

Contoh klik:

```
Tourist
```

State berubah:

```
activeMode = "tourist"
```

Summary berubah:

```
Mode Tourist aktif — fokus pada destinasi, kuliner, itinerary, dan etika wisata.
```

### 7.5 Saat user klik flagship

State berubah:

```
showFlagshipOnly = true
activeLayer = "all"
```

Summary berubah:

```
Menyorot 8 provinsi flagship dengan konten terdalam.
```

---

## 8. Struktur Konten Section

Explore Control Bar terdiri dari 6 elemen utama:

```
1. Section Header kecil
2. Search Bar
3. Mode Selector
4. Layer Filter Chips
5. Quick Actions
6. Active Summary / Result Info
```

Untuk versi premium / recommended, tambahkan:

```
7. Suggested Keywords
8. Popular Search Chips
9. Mini Status Badge
```

### 8.1 Prioritas elemen

| Prioritas | Elemen | Alasan |
| --- | --- | --- |
| 1 | Search Bar | Entry point paling jelas untuk user |
| 2 | Layer Filter Chips | Membantu eksplorasi berdasarkan minat |
| 3 | Mode Selector | Memberi personalisasi pengalaman |
| 4 | Active Summary | Membuat state terasa nyata |
| 5 | Quick Actions | Mempercepat kontrol peta |
| 6 | Suggested Keywords | Memperkuat discoverability |

---

## 9. Layout Section

### 9.1 Desktop Layout — rekomendasi dasar

```
┌──────────────────────────────────────────────────────────────┐
│                     Pusat Kendali Jelajah                    │
│       Cari provinsi, pilih layer, dan tentukan mode.          │
├──────────────────────────────────────────────────────────────┤
│ [ Search bar panjang...................................... ] │
│                                                              │
│ [Explore] [Tourist] [Learn]        [Reset] [Flagship]        │
│                                                              │
│ [Semua] [Budaya] [Kuliner] [Alam] [Sejarah] [Rempah] [Future]│
│                                                              │
│ Mode Explore · Layer Semua · Menampilkan 38 provinsi         │
└──────────────────────────────────────────────────────────────┘
```

### 9.2 Desktop Premium Layout — final recommended

```
┌──────────────────────────────────────────────────────────────┐
│  [Icon Compass] Mulai Eksplorasi                             │
│  Cari cerita Nusantara berdasarkan provinsi, rasa, budaya...  │
├──────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ 🔍 Cari provinsi, budaya, kuliner, atau destinasi...      │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│ Mode Jelajah                                                 │
│ [Explore Mode] [Tourist Mode] [Learn Mode]                   │
│                                                              │
│ Pilih Layer                                                  │
│ [Semua] [Budaya] [Kuliner] [Alam] [Sejarah] [Rempah] [Future]│
│                                                              │
│ [Reset Peta] [Tampilkan Flagship] [Buka Passport]            │
│                                                              │
│ Menampilkan semua provinsi dan 8 flagship utama.             │
└──────────────────────────────────────────────────────────────┘
```

### 9.3 Tablet Layout

```
Section title
Search full width
Mode selector full width
Filter chips horizontal wrap
Quick actions row
Summary
```

### 9.4 Mobile Layout

```
Mulai Eksplorasi

[Search bar]

Mode Jelajah
[Explore] [Tourist] [Learn] → horizontal segmented

Pilih Layer
[Semua] [Budaya] [Kuliner] [Alam] ... → horizontal scroll

[Reset] [Flagship]

Summary kecil
```

### 9.5 Mobile constraints

Mobile harus memenuhi:

- Tidak overflow.
- Touch target minimal 44px.
- Chips horizontal scroll dengan snap / smooth.
- Search tetap besar dan mudah diklik.
- Passport button boleh disembunyikan atau diberi badge “Soon”.
- Summary ringkas, tidak terlalu panjang.

---

## 10. Copywriting UI

### 10.1 Header kecil

Eyebrow:

```
Mulai Eksplorasi
```

Heading:

```
Temukan Jalur Jelajahmu
```

Subheading:

```
Cari provinsi, pilih layer, dan sesuaikan mode eksplorasi sebelum masuk ke peta interaktif.
```

Versi lebih pendek:

```
Cari provinsi, pilih layer, lalu mulai jelajah dari peta.
```

### 10.2 Label area

| Area | Copy |
| --- | --- |
| Mode selector label | `Mode Jelajah` |
| Layer label | `Pilih Layer` |
| Quick action label optional | `Aksi Cepat` |
| Suggested keyword label | `Coba jelajahi` |
| Search dropdown title | `Hasil Pencarian` |
| Empty state | `Belum ditemukan. Coba kata kunci lain seperti “Bali”, “Rendang”, atau “IKN”.` |

### 10.3 Search placeholder

Final:

```
Cari provinsi, budaya, kuliner, atau destinasi...
```

Alternatif:

```
Coba cari: Bali, Gudeg, Keraton, IKN, Raja Ampat...
```

```
Cari “Rendang”, “Jalur Rempah”, atau “DI Yogyakarta”...
```

### 10.4 Active summary copy

Default:

```
Menampilkan semua provinsi dan 8 flagship utama NUSANTARAYA.
```

Saat layer aktif:

```
Layer Kuliner aktif — temukan rasa khas dari berbagai daerah.
```

Saat mode aktif:

```
Mode Tourist aktif — fokus pada destinasi, kuliner, itinerary, dan etika wisata.
```

Saat search aktif:

```
Mencari “gudeg” di provinsi, budaya, kuliner, dan destinasi.
```

Saat flagship aktif:

```
Menyorot 8 provinsi flagship dengan konten terdalam.
```

Kombinasi summary:

```
Mode Learn · Layer Sejarah · 3 provinsi ditemukan
```

---

## 11. Detail Elemen — Section Header

### 11.1 Fungsi

Section header memberi konteks bahwa area ini adalah panel kontrol, bukan section editorial biasa.

### 11.2 Komposisi

```
Eyebrow kecil
Heading ringkas
Subheading satu kalimat
Mini badge optional
```

### 11.3 Style

```
Eyebrow: gold, uppercase, tracking lebar
Heading: serif/navy, 28–40px
Subheading: Inter, navy/60
```

### 11.4 Catatan penting

Header section tidak boleh terlalu besar karena hero sebelumnya sudah menjadi visual utama. Explore Control Bar harus terasa sebagai interface yang siap digunakan, bukan hero kedua.

---

## 12. Detail Elemen — Search Bar

### 12.1 Fungsi

Search bar adalah elemen paling penting dalam control bar.

User bisa mencari:

- Provinsi.
- Region.
- Ibu kota.
- Budaya.
- Kuliner.
- Destinasi.
- Keyword.
- Pilar eksplorasi.

### 12.2 Search target MVP

Search harus membaca field berikut:

```
province.name
province.region
province.capital
province.highlights
province.categories
province.keywords
```

### 12.3 Contoh hasil search

| Input | Result |
| --- | --- |
| `gudeg` | DI Yogyakarta |
| `IKN` | Kalimantan Timur |
| `rendang` | Sumatera Barat |
| `raja ampat` | Papua Barat Daya |
| `rempah` | Maluku |
| `komodo` | Nusa Tenggara Timur |
| `pinisi` | Sulawesi Selatan |
| `subak` | Bali |

### 12.4 Search UI desktop

```
┌─────────────────────────────────────────────────────────────┐
│ 🔍  Cari provinsi, budaya, kuliner, atau destinasi...         │
└─────────────────────────────────────────────────────────────┘
```

### 12.5 Search UI mobile

```
┌─────────────────────────────┐
│ 🔍 Cari provinsi...          │
└─────────────────────────────┘
```

### 12.6 Search dropdown

Untuk recommended version, dropdown harus ada.

Contoh dropdown:

```
Hasil Pencarian

DI Yogyakarta
Jawa · Keraton · Batik · Gudeg

Kalimantan Timur
Kalimantan · IKN · Hutan · Mahakam
```

### 12.7 Search empty state

```
Belum ditemukan. Coba kata kunci lain seperti “Bali”, “Rendang”, atau “IKN”.
```

### 12.8 Search selected behavior

Saat user klik hasil:

```
selectedProvinceId = "di-yogyakarta"
searchQuery = "DI Yogyakarta"
scroll / highlight map
summary update
```

### 12.9 Keyboard behavior

Search harus mendukung:

- Arrow Down: pindah ke result berikutnya.
- Arrow Up: pindah ke result sebelumnya.
- Enter: pilih result aktif.
- Escape: tutup dropdown.
- Tab: tetap mengikuti flow aksesibilitas normal.
- Clear button: reset `searchQuery` dan `selectedProvinceId`.

---

## 13. Detail Elemen — Mode Selector

### 13.1 Fungsi

Mode selector membuat halaman terasa personal dan intelligent. User dapat memilih gaya eksplorasi berdasarkan niat mereka.

Mode wajib:

```
Explore
Tourist
Learn
```

### 13.2 Mode 1 — Explore Mode

Label:

```
Explore
```

Title:

```
Explore Mode
```

Deskripsi:

```
Eksplorasi bebas budaya, rasa, destinasi, dan masa depan.
```

Fokus:

- Semua kategori seimbang.
- Default mode.
- Cocok untuk user umum.
- Menonjolkan discovery.

Icon rekomendasi:

```
Compass
```

### 13.3 Mode 2 — Tourist Mode

Label:

```
Tourist
```

Title:

```
Tourist Mode
```

Deskripsi:

```
Fokus destinasi, itinerary, kuliner, dan etika wisata.
```

Fokus:

- Destinasi.
- Route planner.
- Kuliner.
- Best time to visit.
- Cultural etiquette.

Icon rekomendasi:

```
MapPin / Luggage / Navigation
```

### 13.4 Mode 3 — Learn Mode

Label:

```
Learn
```

Title:

```
Learn Mode
```

Deskripsi:

```
Fokus sejarah, budaya, arsip, aksara, dan sumber data.
```

Fokus:

- Nusa Archive.
- Sejarah.
- Budaya.
- Aksara.
- Sumber tepercaya.

Icon rekomendasi:

```
BookOpen
```

### 13.5 UI bentuk mode selector

Gunakan segmented control:

```
[ Explore ] [ Tourist ] [ Learn ]
```

### 13.6 Active state

Opsi active state 1:

```css
background: #0D1B2A;
color: white;
icon: #C9A84C;
```

Opsi active state 2:

```css
background: #C9A84C;
color: #0D1B2A;
```

Default:

```
Explore
```

---

## 14. Detail Elemen — Layer Filter Chips

### 14.1 Fungsi

Layer filter adalah cara user menjelajah berdasarkan minat.

Layer wajib:

```
Semua
Budaya
Kuliner
Alam
Sejarah
Jalur Rempah
Kota Masa Depan
```

### 14.2 Layer Semua

Label:

```
Semua
```

Deskripsi:

```
Tampilkan semua provinsi dan cerita Nusantara.
```

Icon:

```
/assets/ui/icons/icon-map.svg
```

Default active:

```
true
```

### 14.3 Layer Budaya

Label:

```
Budaya
```

Deskripsi:

```
Rumah adat, tarian, festival, upacara, dan tradisi daerah.
```

Icon:

```
/assets/map/pins/pin-budaya-nusantara.svg
```

Provinsi contoh:

- DI Yogyakarta.
- Bali.
- Sulawesi Selatan.
- Nusa Tenggara Timur.
- Papua Barat Daya.

### 14.4 Layer Kuliner

Label:

```
Kuliner
```

Deskripsi:

```
Makanan khas, rempah, food story, dan peta rasa daerah.
```

Icon:

```
/assets/map/pins/pin-kuliner-nusantara.svg
```

Provinsi contoh:

- Sumatera Barat.
- DI Yogyakarta.
- Sulawesi Selatan.
- Bali.

### 14.5 Layer Alam

Label:

```
Alam
```

Deskripsi:

```
Gunung, laut, hutan, desa wisata, dan hidden gems.
```

Icon:

```
/assets/map/pins/pin-alam-nusantara.svg
```

Provinsi contoh:

- Bali.
- Nusa Tenggara Timur.
- Papua Barat Daya.
- Kalimantan Timur.

### 14.6 Layer Sejarah

Label:

```
Sejarah
```

Deskripsi:

```
Kerajaan, situs warisan, tokoh daerah, dan timeline masa lalu.
```

Icon:

```
/assets/map/pins/pin-sejarah-nusantara.svg
```

Provinsi contoh:

- DI Yogyakarta.
- Maluku.
- Sumatera Barat.

### 14.7 Layer Jalur Rempah

Label:

```
Jalur Rempah
```

Short label mobile:

```
Rempah
```

Deskripsi:

```
Pala, cengkeh, pelabuhan, maritim, dan perdagangan Nusantara.
```

Icon:

```
/assets/map/pins/pin-rempah-nusantara.svg
```

Provinsi contoh:

- Maluku.
- Sulawesi Selatan.
- Nusa Tenggara Timur.

### 14.8 Layer Kota Masa Depan

Label:

```
Kota Masa Depan
```

Short label mobile:

```
Future
```

Deskripsi:

```
IKN, smart city, UMKM digital, dan ekonomi kreatif daerah.
```

Icon:

```
/assets/map/pins/pin-kota-nusantara.svg
```

Provinsi contoh:

- Kalimantan Timur.
- DKI Jakarta.
- Jawa Barat jika nanti ditambahkan.

---

## 15. Detail Elemen — Quick Actions

### 15.1 Fungsi

Quick actions membantu user mengontrol peta dengan cepat tanpa harus melakukan banyak klik.

Action recommended:

```
Reset Peta
Tampilkan Flagship
Buka Passport
```

### 15.2 Reset Peta

Label:

```
Reset Peta
```

Icon:

```
RotateCcw
```

Fungsi:

```tsx
searchQuery = "";
activeLayer = "all";
activeMode = "explore";
selectedProvinceId = null;
showFlagshipOnly = false;
```

### 15.3 Tampilkan Flagship

Label desktop:

```
Tampilkan Flagship
```

Label mobile:

```
Flagship
```

Icon:

```
Sparkles / Star
```

Fungsi:

```tsx
showFlagshipOnly = true;
activeLayer = "all";
```

Efek nanti di map:

- 8 provinsi flagship lebih menonjol.
- Provinsi lain diredupkan.
- Summary berubah.
- Province card / panel bisa menampilkan badge “Flagship”.

### 15.4 Buka Passport

Label:

```
Buka Passport
```

Icon:

```
/assets/ui/icons/icon-passport.svg
```

Target:

```
/passport
```

Jika route belum jadi:

- Disabled.
- Atau beri badge “Soon”.
- Jangan membuat user merasa fitur rusak.

---

## 16. Detail Elemen — Active Summary

### 16.1 Fungsi

Active Summary menampilkan state aktif agar user tahu apa yang sedang terjadi. Detail kecil ini membuat UI terasa seperti aplikasi nyata.

### 16.2 Default state

```
Menampilkan semua provinsi dan 8 flagship utama NUSANTARAYA.
```

### 16.3 State per layer

```
Layer Budaya aktif — jelajahi tradisi, tarian, rumah adat, dan festival daerah.
Layer Kuliner aktif — temukan rasa khas dari berbagai daerah.
Layer Alam aktif — temukan gunung, laut, hutan, desa wisata, dan hidden gems.
Layer Sejarah aktif — telusuri kerajaan, situs warisan, tokoh, dan timeline masa lalu.
Layer Jalur Rempah aktif — ikuti jejak pala, cengkeh, pelabuhan, dan perdagangan maritim.
Layer Kota Masa Depan aktif — jelajahi IKN, smart city, UMKM digital, dan ekonomi kreatif.
```

### 16.4 State per mode

```
Mode Explore aktif — eksplorasi bebas budaya, rasa, destinasi, dan masa depan.
Mode Tourist aktif — fokus pada destinasi, kuliner, itinerary, dan etika wisata.
Mode Learn aktif — fokus pada sejarah, budaya, arsip, aksara, dan sumber data.
```

### 16.5 State search

```
Mencari “gudeg” di provinsi, budaya, kuliner, dan destinasi.
```

### 16.6 State flagship

```
Menyorot 8 provinsi flagship dengan konten terdalam.
```

### 16.7 State kombinasi

```
Mode Learn · Layer Sejarah · 3 provinsi ditemukan
```

---

## 17. Visual Design Detail

### 17.1 Background section

Base:

```css
background: #FFFDF8;
```

Alternatif:

```css
background: #F8F4EA;
```

Glow halus:

```css
background:
  radial-gradient(circle at 15% 15%, rgba(201,168,76,0.14), transparent 32%),
  radial-gradient(circle at 85% 65%, rgba(45,107,228,0.08), transparent 34%),
  #FFFDF8;
```

Pattern optional:

```
ornamen-batik.svg opacity 0.025
```

### 17.2 Container / glass panel

```css
background: rgba(255,255,255,0.74);
backdrop-filter: blur(24px);
border: 1px solid rgba(232,224,206,0.85);
border-radius: 32px;
box-shadow: 0 24px 80px rgba(13,27,42,0.08);
```

### 17.3 Search bar style

Desktop:

```css
height: 60px;
border-radius: 999px;
padding: 0 20px;
background: #FFFFFF;
border: 1px solid rgba(201,168,76,0.25);
box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
```

Mobile:

```css
height: 52px;
border-radius: 24px;
padding: 0 16px;
```

Focus state:

```css
border-color: rgba(201,168,76,0.75);
box-shadow: 0 0 0 4px rgba(201,168,76,0.18);
```

### 17.4 Layer chip style

Default:

```css
background: rgba(255,255,255,0.72);
border: 1px solid rgba(201,168,76,0.22);
color: rgba(13,27,42,0.72);
```

Hover:

```css
background: white;
border-color: rgba(201,168,76,0.40);
transform: translateY(-1px);
```

Active:

```css
background: #0D1B2A;
color: white;
border-color: #0D1B2A;
box-shadow: 0 12px 28px rgba(13,27,42,0.18);
```

Active icon:

```css
filter: drop-shadow(0 0 8px rgba(201,168,76,0.5));
transform: scale(1.08);
```

### 17.5 Mode selector style

Segmented container:

```css
background: rgba(13,27,42,0.06);
border-radius: 999px;
padding: 4px;
```

Inactive:

```css
color: rgba(13,27,42,0.60);
```

Active option:

```css
background: white;
color: #0D1B2A;
box-shadow: 0 8px 24px rgba(13,27,42,0.10);
```

Alternative active:

```css
background: #C9A84C;
color: #0D1B2A;
```

### 17.6 Quick action style

Quick action buttons harus secondary, tidak lebih dominan daripada search dan layer chips.

```css
border-radius: 999px;
border: 1px solid rgba(13,27,42,0.10);
background: rgba(255,255,255,0.60);
color: #0D1B2A;
```

Hover:

```css
border-color: rgba(201,168,76,0.45);
background: rgba(255,255,255,0.90);
```

Button hierarchy:

| Button | Style |
| --- | --- |
| Reset Peta | Subtle / secondary |
| Tampilkan Flagship | Gold-accented |
| Buka Passport | Navy / dark atau disabled with Soon |

---

## 18. Design Tokens

### 18.1 Color palette

| Token | Value | Penggunaan |
| --- | --- | --- |
| `nusaNavy` | `#0D1B2A` | Text utama, active chip |
| `nusaGold` | `#C9A84C` | Accent, focus, badge, icon highlight |
| `nusaIvory` | `#FFFDF8` | Background section |
| `nusaWarm` | `#F8F4EA` | Alternatif background |
| `nusaBorder` | `#E8E0CE` | Border glass card |
| `nusaBlue` | `#2D6BE4` | Glow subtle / future layer |

### 18.2 Spacing

| Area | Desktop | Mobile |
| --- | --- | --- |
| Section padding | `py-16` / `py-20` | `py-10` / `py-12` |
| Card padding | `p-8` / `p-10` | `p-5` |
| Gap utama | `gap-6` | `gap-4` |
| Search height | `60–64px` | `52–56px` |
| Touch target | `44px minimum` | `44px minimum` |

### 18.3 Radius

| Elemen | Radius |
| --- | --- |
| Main card | `32px` |
| Search desktop | `999px` |
| Search mobile | `24px` |
| Chips | `999px` |
| Dropdown | `24px` |
| Summary pill | `20px` |

---

## 19. Aset yang Harus Disiapkan

### 19.1 Aset wajib

```
public/assets/ui/icons/icon-map.svg

public/assets/map/pins/pin-budaya-nusantara.svg
public/assets/map/pins/pin-kuliner-nusantara.svg
public/assets/map/pins/pin-alam-nusantara.svg
public/assets/map/pins/pin-sejarah-nusantara.svg
public/assets/map/pins/pin-rempah-nusantara.svg
public/assets/map/pins/pin-kota-nusantara.svg

public/assets/ui/icons/icon-passport.svg
```

### 19.2 Aset dari lucide-react

Karena project sudah memakai `lucide-react`, gunakan icon dari library ini untuk mengurangi aset tambahan:

```
Search
Compass
MapPin
BookOpen
RotateCcw
Sparkles
Filter
X
ChevronDown
SlidersHorizontal
Star
Navigation
```

### 19.3 Aset optional

```
public/assets/branding/ornamen-batik.svg
public/assets/branding/ornamen-divider.svg
```

Gunakan sangat halus agar tidak membuat card terlalu ramai.

### 19.4 Aset yang tidak diperlukan

Untuk section ini, jangan pakai:

```
video
foto besar
map texture besar
province thumbnail
background image berat
```

Alasan: section ini harus ringan, cepat, dan fungsional.

---

## 20. Data yang Harus Disiapkan

### 20.1 File `src/data/exploreControls.ts`

```tsx
export type ExploreLayerId =
  | "all"
  | "budaya"
  | "kuliner"
  | "alam"
  | "sejarah"
  | "rempah"
  | "future";

export type ExploreModeId = "explore" | "tourist" | "learn";

export const exploreLayers = [
  {
    id: "all",
    label: "Semua",
    shortLabel: "Semua",
    description: "Tampilkan semua provinsi dan cerita Nusantara.",
    icon: "/assets/ui/icons/icon-map.svg",
  },
  {
    id: "budaya",
    label: "Budaya",
    shortLabel: "Budaya",
    description: "Rumah adat, tarian, festival, upacara, dan tradisi daerah.",
    icon: "/assets/map/pins/pin-budaya-nusantara.svg",
  },
  {
    id: "kuliner",
    label: "Kuliner",
    shortLabel: "Kuliner",
    description: "Makanan khas, rempah, food story, dan peta rasa daerah.",
    icon: "/assets/map/pins/pin-kuliner-nusantara.svg",
  },
  {
    id: "alam",
    label: "Alam",
    shortLabel: "Alam",
    description: "Gunung, laut, hutan, desa wisata, dan hidden gems.",
    icon: "/assets/map/pins/pin-alam-nusantara.svg",
  },
  {
    id: "sejarah",
    label: "Sejarah",
    shortLabel: "Sejarah",
    description: "Kerajaan, situs warisan, tokoh daerah, dan timeline masa lalu.",
    icon: "/assets/map/pins/pin-sejarah-nusantara.svg",
  },
  {
    id: "rempah",
    label: "Jalur Rempah",
    shortLabel: "Rempah",
    description: "Pala, cengkeh, pelabuhan, maritim, dan perdagangan Nusantara.",
    icon: "/assets/map/pins/pin-rempah-nusantara.svg",
  },
  {
    id: "future",
    label: "Kota Masa Depan",
    shortLabel: "Future",
    description: "IKN, smart city, UMKM digital, dan ekonomi kreatif daerah.",
    icon: "/assets/map/pins/pin-kota-nusantara.svg",
  },
] as const;

export const exploreModes = [
  {
    id: "explore",
    label: "Explore",
    title: "Explore Mode",
    description: "Eksplorasi bebas budaya, rasa, destinasi, dan masa depan.",
    icon: "Compass",
  },
  {
    id: "tourist",
    label: "Tourist",
    title: "Tourist Mode",
    description: "Fokus destinasi, itinerary, kuliner, dan etika wisata.",
    icon: "MapPin",
  },
  {
    id: "learn",
    label: "Learn",
    title: "Learn Mode",
    description: "Fokus sejarah, budaya, arsip, aksara, dan sumber data.",
    icon: "BookOpen",
  },
] as const;
```

### 20.2 File `src/data/provinceSearchData.ts`

```tsx
export type ProvinceSearchItem = {
  id: string;
  name: string;
  region: string;
  capital: string;
  tier: "deep" | "standard";
  categories: string[];
  highlights: string[];
  keywords: string[];
};

export const provinceSearchData: ProvinceSearchItem[] = [
  {
    id: "sumatera-barat",
    name: "Sumatera Barat",
    region: "Sumatera",
    capital: "Padang",
    tier: "deep",
    categories: ["kuliner", "budaya", "alam"],
    highlights: ["Rendang", "Rumah Gadang", "Jam Gadang"],
    keywords: ["rendang", "minang", "rumah gadang", "jam gadang", "padang"],
  },
  {
    id: "di-yogyakarta",
    name: "DI Yogyakarta",
    region: "Jawa",
    capital: "Yogyakarta",
    tier: "deep",
    categories: ["budaya", "sejarah", "kuliner"],
    highlights: ["Keraton", "Batik", "Gudeg"],
    keywords: ["keraton", "batik", "gudeg", "malioboro", "prambanan"],
  },
  {
    id: "bali",
    name: "Bali",
    region: "Bali & Nusa Tenggara",
    capital: "Denpasar",
    tier: "deep",
    categories: ["budaya", "alam", "kuliner"],
    highlights: ["Pura", "Tari Bali", "Subak"],
    keywords: ["pura", "subak", "tari kecak", "ubud", "denpasar"],
  },
  {
    id: "kalimantan-timur",
    name: "Kalimantan Timur",
    region: "Kalimantan",
    capital: "Samarinda",
    tier: "deep",
    categories: ["future", "alam"],
    highlights: ["IKN", "Hutan", "Mahakam"],
    keywords: ["ikn", "nusantara", "mahakam", "samarinda", "smart city"],
  },
  {
    id: "sulawesi-selatan",
    name: "Sulawesi Selatan",
    region: "Sulawesi",
    capital: "Makassar",
    tier: "deep",
    categories: ["budaya", "kuliner", "rempah"],
    highlights: ["Pinisi", "Toraja", "Coto"],
    keywords: ["pinisi", "toraja", "coto", "makassar", "maritim"],
  },
  {
    id: "nusa-tenggara-timur",
    name: "Nusa Tenggara Timur",
    region: "Bali & Nusa Tenggara",
    capital: "Kupang",
    tier: "deep",
    categories: ["alam", "budaya"],
    highlights: ["Komodo", "Labuan Bajo", "Tenun"],
    keywords: ["komodo", "labuan bajo", "tenun", "kupang", "savana"],
  },
  {
    id: "maluku",
    name: "Maluku",
    region: "Maluku",
    capital: "Ambon",
    tier: "deep",
    categories: ["rempah", "sejarah", "alam"],
    highlights: ["Pala", "Banda Neira", "Cengkeh"],
    keywords: ["pala", "cengkeh", "banda", "ambon", "jalur rempah"],
  },
  {
    id: "papua-barat-daya",
    name: "Papua Barat Daya",
    region: "Papua",
    capital: "Sorong",
    tier: "deep",
    categories: ["alam", "budaya"],
    highlights: ["Raja Ampat", "Tifa", "Biodiversitas"],
    keywords: ["raja ampat", "sorong", "tifa", "laut", "biodiversitas"],
  },
];
```

---

## 21. Komponen yang Harus Dibuat

Buat folder:

```
src/components/explore/control-bar/
```

Isi folder:

```
ExploreControlBar.tsx
ProvinceSearch.tsx
LayerFilterChips.tsx
ExploreModeSelector.tsx
ExploreQuickActions.tsx
ExploreActiveSummary.tsx
SearchResultDropdown.tsx
index.ts
```

### 21.1 `ExploreControlBar.tsx`

Wrapper utama.

Tugas:

- Menerima state dari page.
- Menampilkan header kecil.
- Menampilkan search.
- Menampilkan mode selector.
- Menampilkan layer chips.
- Menampilkan quick actions.
- Menampilkan active summary.
- Menjadi satu entry point komponen untuk section 2.

Props:

```tsx
type ExploreControlBarProps = {
  searchQuery: string;
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  showFlagshipOnly: boolean;
  resultCount: number;
  onSearchChange: (value: string) => void;
  onLayerChange: (layer: ExploreLayerId) => void;
  onModeChange: (mode: ExploreModeId) => void;
  onProvinceSelect: (provinceId: string) => void;
  onReset: () => void;
  onShowFlagship: () => void;
};
```

### 21.2 `ProvinceSearch.tsx`

Tugas:

- Render input.
- Filter `provinceSearchData`.
- Render dropdown result.
- Handle clear query.
- Handle keyboard navigation.
- Menutup dropdown saat click outside / Escape.

Features:

- Search icon.
- Clear button `X`.
- Keyboard support.
- Result dropdown.
- Empty state.
- Maksimal 5–6 hasil agar dropdown tidak terlalu panjang.

### 21.3 `SearchResultDropdown.tsx`

Tugas:

- Render list hasil search.
- Tampilkan province name.
- Tampilkan region.
- Tampilkan highlights.
- Tampilkan tier badge.

Example item:

```
DI Yogyakarta
Jawa · Keraton · Batik · Gudeg
```

### 21.4 `LayerFilterChips.tsx`

Tugas:

- Render `exploreLayers`.
- Active state.
- Icon per layer.
- Short label di mobile.
- Horizontal scroll di mobile.
- Button dengan `aria-pressed`.

### 21.5 `ExploreModeSelector.tsx`

Tugas:

- Render segmented control.
- Active mode.
- Icon.
- Optional description / tooltip.
- Button dengan `aria-pressed`.

### 21.6 `ExploreQuickActions.tsx`

Tugas:

- Render Reset Peta.
- Render Tampilkan Flagship.
- Render Buka Passport.
- Hide atau disabled Passport jika route belum siap.

### 21.7 `ExploreActiveSummary.tsx`

Tugas:

- Menampilkan state aktif.
- Memakai `aria-live="polite"`.
- Menghasilkan summary dinamis berdasarkan search, mode, layer, flagship, dan resultCount.

Contoh:

```
Mode Explore · Layer Semua · Menampilkan 38 provinsi
```

### 21.8 `index.ts`

Tugas:

- Export semua komponen utama.
- Minimal export:

```tsx
export { ExploreControlBar } from "./ExploreControlBar";
```

Optional export:

```tsx
export { ProvinceSearch } from "./ProvinceSearch";
export { LayerFilterChips } from "./LayerFilterChips";
export { ExploreModeSelector } from "./ExploreModeSelector";
export { ExploreQuickActions } from "./ExploreQuickActions";
export { ExploreActiveSummary } from "./ExploreActiveSummary";
export { SearchResultDropdown } from "./SearchResultDropdown";
```

---

## 22. State Management

Di page `/explore`, siapkan state:

```tsx
const [searchQuery, setSearchQuery] = useState("");
const [activeLayer, setActiveLayer] = useState<ExploreLayerId>("all");
const [activeMode, setActiveMode] = useState<ExploreModeId>("explore");
const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(null);
const [showFlagshipOnly, setShowFlagshipOnly] = useState(false);
```

### 22.1 Handler reset

```tsx
const handleReset = () => {
  setSearchQuery("");
  setActiveLayer("all");
  setActiveMode("explore");
  setSelectedProvinceId(null);
  setShowFlagshipOnly(false);
};
```

### 22.2 Handler flagship

```tsx
const handleShowFlagship = () => {
  setShowFlagshipOnly(true);
  setActiveLayer("all");
};
```

### 22.3 Handler province select

```tsx
const handleProvinceSelect = (provinceId: string) => {
  const province = provinceSearchData.find((item) => item.id === provinceId);

  setSelectedProvinceId(provinceId);

  if (province) {
    setSearchQuery(province.name);
  }
};
```

### 22.4 Derived result count

```tsx
const filteredProvinceCount = useMemo(() => {
  return provinceSearchData.filter((province) => {
    const matchesLayer =
      activeLayer === "all" || province.categories.includes(activeLayer);

    const matchesFlagship = showFlagshipOnly ? province.tier === "deep" : true;

    const query = searchQuery.trim().toLowerCase();

    const searchableText = [
      province.name,
      province.region,
      province.capital,
      ...province.categories,
      ...province.highlights,
      ...province.keywords,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = query ? searchableText.includes(query) : true;

    return matchesLayer && matchesFlagship && matchesSearch;
  }).length;
}, [activeLayer, searchQuery, showFlagshipOnly]);
```

---

## 23. Interaction Flow

### 23.1 Search Flow

```
User mengetik “gudeg”
↓
Dropdown muncul
↓
Result: DI Yogyakarta
↓
User klik result
↓
selectedProvinceId = "di-yogyakarta"
↓
searchQuery = "DI Yogyakarta"
↓
Summary berubah
↓
Interactive map nanti highlight DI Yogyakarta
```

### 23.2 Layer Flow

```
User klik “Kuliner”
↓
activeLayer = "kuliner"
↓
Summary: Layer Kuliner aktif
↓
Map nanti menonjolkan pin kuliner
```

### 23.3 Mode Flow

```
User klik “Tourist”
↓
activeMode = "tourist"
↓
Summary: Mode Tourist aktif
↓
Panel provinsi nanti menonjolkan destinasi, itinerary, dan etika wisata
```

### 23.4 Reset Flow

```
User klik Reset
↓
searchQuery = ""
activeLayer = "all"
activeMode = "explore"
selectedProvinceId = null
showFlagshipOnly = false
↓
Summary kembali default
```

### 23.5 Flagship Flow

```
User klik Tampilkan Flagship
↓
showFlagshipOnly = true
activeLayer = "all"
↓
Map nanti menyorot 8 provinsi flagship
↓
Summary: Menyorot 8 provinsi flagship dengan konten terdalam
```

---

## 24. Responsive Behavior

### 24.1 Desktop

```
- Control bar dalam glass card besar.
- Search full width di row pertama.
- Mode dan quick actions di row kedua.
- Layer chips di row ketiga.
- Summary di bawah.
```

### 24.2 Tablet

```
- Search full width.
- Mode selector wrap.
- Quick actions wrap.
- Layer chips horizontal / wrap.
- Summary tetap terbaca.
```

### 24.3 Mobile

```
- Search full width.
- Mode selector horizontal segmented.
- Layer chips horizontal scroll.
- Quick actions 2 tombol utama.
- Passport bisa hide atau masuk menu.
- Summary text ringkas.
```

### 24.4 Mobile priority

Urutan prioritas mobile:

```
1. Search
2. Layer chips
3. Mode selector
4. Reset / Flagship
5. Summary
```

### 24.5 Mobile behavior detail

- Layer chips memakai `overflow-x-auto`.
- Gunakan `scrollbar-hide` jika tersedia.
- Jangan memaksakan semua chips wrap terlalu banyak karena bisa membuat section tinggi.
- Search dropdown harus tidak keluar viewport.
- Dropdown mobile bisa full width.
- Touch target minimum 44px.
- Text label boleh memakai `shortLabel`.

---

## 25. Motion Plan

### 25.1 Entrance motion

- Control card fade-up.
- Search appears first.
- Mode selector fade-up.
- Layer chips stagger.
- Summary fade-in.

Contoh konsep:

```
Card: opacity 0 → 1, y 28 → 0
Search: delay 0.10s
Mode selector: delay 0.18s
Layer chips: stagger 0.04s
Summary: delay 0.32s
```

### 25.2 Interaction motion

- Chip active transition via layout animation.
- Search dropdown fade / scale.
- Reset button rotate icon slightly on hover.
- Flagship button sparkle / pulse subtle.
- Active summary fade when copy changes.

### 25.3 Reduced motion

Jika reduced motion aktif:

- Disable stagger.
- Disable pulse.
- Disable translate-heavy animation.
- Keep simple opacity transition.

Implementation note:

```tsx
const shouldReduceMotion = useReducedMotion();
```

---

## 26. Accessibility Plan

### 26.1 Search

Search input harus punya label:

```
Cari provinsi, budaya, kuliner, atau destinasi
```

Implementation:

```tsx
<label htmlFor="province-search" className="sr-only">
  Cari provinsi, budaya, kuliner, atau destinasi
</label>
```

### 26.2 Dropdown

Dropdown harus:

- Memiliki role listbox bila keyboard navigation kompleks.
- Item bisa dipilih dengan keyboard.
- Active item punya style visual jelas.
- Escape menutup dropdown.
- Empty state terbaca.

### 26.3 Chips

Gunakan button:

```tsx
<button aria-pressed={activeLayer === layer.id}>
```

### 26.4 Mode

Gunakan button:

```tsx
<button aria-pressed={activeMode === mode.id}>
```

### 26.5 Summary

Gunakan:

```tsx
<p aria-live="polite">
```

Agar screen reader tahu state berubah.

### 26.6 Focus

Semua interactive element harus punya focus ring gold:

```css
focus-visible:outline-none
focus-visible:ring-4
focus-visible:ring-[#C9A84C]/25
```

---

## 27. Performance Plan

Section ini harus ringan.

Yang perlu dijaga:

- Jangan import gambar besar.
- Gunakan SVG kecil untuk pin / icon.
- Gunakan lucide-react untuk ikon umum.
- Dropdown result maksimal 5–6 item.
- Search filter pakai `useMemo` jika data bertambah banyak.
- Tidak perlu fetch API.
- Tidak perlu server action.
- Hindari layout shift dengan height search yang konsisten.
- Jangan render map di dalam control bar.
- Jangan meletakkan asset video atau background image besar.

---

## 28. Rekomendasi Implementasi Versi

### 28.1 MVP

Isi:

```
- Search bar
- Layer chips
- Mode selector
- Reset button
- Summary
```

Estimasi:

```
2–3 jam
```

### 28.2 Recommended

Isi:

```
- Semua MVP
- Search dropdown
- Quick action Flagship
- Passport button
- Better responsive
- Motion
```

Estimasi:

```
4–6 jam
```

### 28.3 Premium

Isi:

```
- Semua Recommended
- Suggested keywords
- Search keyboard navigation
- Sticky control on scroll
- Result count
- Animated active chip
```

Estimasi:

```
6–8 jam
```

### 28.4 Rekomendasi final

Gunakan **Recommended Version** terlebih dahulu.

Alasan:

- Sudah cukup premium.
- Sudah fungsional.
- Tidak terlalu lama untuk dibangun.
- Search terasa nyata karena ada dropdown.
- State sudah siap dikirim ke Interactive Indonesia Map.
- Masih bisa ditingkatkan ke Premium tanpa refactor besar.

---

## 29. Acceptance Criteria

### 29.1 Functional

- [ ]  Search input tampil.
- [ ]  User bisa mengetik search.
- [ ]  Search result muncul untuk 8 flagship.
- [ ]  Klik result memilih province.
- [ ]  Clear search bekerja.
- [ ]  Layer chips tampil.
- [ ]  Layer active berubah saat klik.
- [ ]  Mode selector tampil.
- [ ]  Mode active berubah saat klik.
- [ ]  Reset mengembalikan state default.
- [ ]  Flagship action mengaktifkan `showFlagshipOnly`.
- [ ]  Passport action tampil sebagai link atau disabled dengan badge “Soon”.
- [ ]  Summary berubah sesuai state.
- [ ]  `resultCount` tampil atau siap dikirim ke summary.

### 29.2 Visual

- [ ]  Control bar terlihat premium.
- [ ]  Menyatu dengan hero section.
- [ ]  Tidak terlalu ramai.
- [ ]  Search menjadi elemen dominan.
- [ ]  Chips mudah dibaca.
- [ ]  Mode selector jelas.
- [ ]  Quick actions tidak terlalu dominan.
- [ ]  Style sesuai Heritage Futuristic.
- [ ]  Background ivory / warm white terasa konsisten.
- [ ]  Glass panel terlihat lembut, bukan terlalu transparan.

### 29.3 Responsive

- [ ]  Desktop rapi.
- [ ]  Tablet rapi.
- [ ]  Mobile tidak overflow.
- [ ]  Chips horizontal scroll nyaman.
- [ ]  Touch target minimal 44px.
- [ ]  Search dropdown tidak keluar viewport.
- [ ]  Passport button mobile tidak merusak layout.

### 29.4 Accessibility

- [ ]  Search punya label.
- [ ]  Button chips punya `aria-pressed`.
- [ ]  Mode button punya `aria-pressed`.
- [ ]  Summary pakai `aria-live`.
- [ ]  Focus ring terlihat.
- [ ]  Keyboard usable.
- [ ]  Contrast teks cukup.
- [ ]  Icon tidak menjadi satu-satunya informasi.

### 29.5 Performance

- [ ]  Tidak memakai asset berat.
- [ ]  Tidak ada video.
- [ ]  Tidak ada layout shift besar.
- [ ]  Search tetap ringan.
- [ ]  Dropdown dibatasi maksimal 5–6 item.
- [ ]  Komponen tidak melakukan fetch yang tidak perlu.

---

## 30. Risiko dan Mitigasi

### 30.1 Risiko 1 — Terlalu banyak kontrol

Dampak:

```
User bingung.
```

Mitigasi:

```
Search paling dominan.
Mode dan action dibuat lebih kecil.
Layer chips dibuat jelas.
Summary dibuat ringkas.
```

### 30.2 Risiko 2 — Mobile overflow

Dampak:

```
UI terasa rusak di HP.
```

Mitigasi:

```
Gunakan horizontal scroll untuk chips.
Gunakan 2 quick actions utama di mobile.
Gunakan shortLabel untuk layer panjang.
```

### 30.3 Risiko 3 — Filter belum terhubung ke map

Dampak:

```
User klik filter tapi tidak terasa bekerja.
```

Mitigasi:

```
Tampilkan active summary dulu.
Nanti sambungkan ke Interactive Map.
Gunakan resultCount agar perubahan state terasa.
```

### 30.4 Risiko 4 — Search terasa palsu

Dampak:

```
Produk terasa belum nyata.
```

Mitigasi:

```
Minimal search 8 flagship + keyword bekerja.
Tampilkan dropdown result.
Tampilkan empty state yang membantu.
```

### 30.5 Risiko 5 — Visual terlalu seperti form biasa

Dampak:

```
Section tidak terasa premium dan tidak menyatu dengan hero.
```

Mitigasi:

```
Gunakan floating glass panel.
Tambahkan microcopy “Mulai Eksplorasi”.
Gunakan gold accent.
Gunakan layout command deck, bukan form vertical biasa.
```

---

## 31. Urutan Implementasi

```
1. Buat src/data/exploreControls.ts
2. Buat src/data/provinceSearchData.ts
3. Buat folder src/components/explore/control-bar/
4. Buat ExploreControlBar.tsx
5. Buat ProvinceSearch.tsx
6. Buat SearchResultDropdown.tsx
7. Buat LayerFilterChips.tsx
8. Buat ExploreModeSelector.tsx
9. Buat ExploreQuickActions.tsx
10. Buat ExploreActiveSummary.tsx
11. Buat index.ts
12. Tambahkan state di /explore/page.tsx
13. Sambungkan props ke ExploreControlBar
14. Styling desktop
15. Styling tablet
16. Styling mobile
17. Tambahkan motion
18. QA interaksi
19. QA aksesibilitas
20. QA responsive
```

---

## 32. Struktur File Final

```
src/
  data/
    exploreControls.ts
    provinceSearchData.ts

  components/
    explore/
      control-bar/
        ExploreControlBar.tsx
        ProvinceSearch.tsx
        SearchResultDropdown.tsx
        LayerFilterChips.tsx
        ExploreModeSelector.tsx
        ExploreQuickActions.tsx
        ExploreActiveSummary.tsx
        index.ts

  app/
    explore/
      page.tsx
```

---

## 33. Penyempurnaan Final Planning

Bagian ini menggantikan prompt coding siap pakai agar dokumen planning lebih bersih, lebih operasional, dan tidak terasa seperti instruksi sekali pakai. Fokus penyempurnaan adalah memperjelas **scope**, **kontrak state**, **prioritas implementasi**, **edge case**, dan **kualitas akhir**.

### 33.1 Scope final yang direkomendasikan

Gunakan **Recommended Version** sebagai target utama.

Isi final:

- Search bar dengan dropdown hasil.
- Mode selector: Explore, Tourist, Learn.
- Layer chips: Semua, Budaya, Kuliner, Alam, Sejarah, Jalur Rempah, Kota Masa Depan.
- Quick actions: Reset Peta, Tampilkan Flagship, Buka Passport.
- Active summary dinamis.
- Responsive desktop, tablet, dan mobile.
- Aksesibilitas dasar lengkap.
- Motion ringan dengan reduced motion support.

Yang ditunda ke fase berikutnya:

- Sticky control saat scroll.
- Suggested keyword otomatis berbasis analytics.
- Integrasi penuh ke Interactive Indonesia Map.
- Integrasi Passport real-time.
- Integrasi RANI Assistant.

### 33.2 Kontrak state antar section

Explore Control Bar harus menjadi sumber state utama untuk section peta berikutnya.

State minimum:

```tsx
searchQuery: string;
activeLayer: ExploreLayerId;
activeMode: ExploreModeId;
selectedProvinceId: string | null;
showFlagshipOnly: boolean;
resultCount: number;
```

Output state yang harus siap dikirim ke Interactive Indonesia Map:

```tsx
{
  searchQuery,
  activeLayer,
  activeMode,
  selectedProvinceId,
  showFlagshipOnly,
  resultCount
}
```

Aturan integrasi:

- `selectedProvinceId` dipakai untuk highlight provinsi di map.
- `activeLayer` dipakai untuk menentukan pin / layer visual yang aktif.
- `activeMode` dipakai untuk mengubah fokus konten panel provinsi.
- `showFlagshipOnly` dipakai untuk menonjolkan 8 provinsi flagship.
- `resultCount` dipakai untuk memberi feedback langsung pada user.

### 33.3 Prioritas implementasi yang lebih rapi

Urutan kerja disarankan dibuat lebih aman agar komponen cepat bisa diuji:

1. Buat data layer dan mode.
2. Buat data 8 provinsi flagship.
3. Buat komponen stateless kecil.
4. Buat wrapper `ExploreControlBar`.
5. Pasang state di `/explore/page.tsx`.
6. Sambungkan search, layer, mode, reset, dan flagship.
7. Tambahkan active summary.
8. Tambahkan responsive layout.
9. Tambahkan keyboard support search.
10. Tambahkan motion ringan.
11. QA desktop, tablet, mobile.
12. QA aksesibilitas.
13. Baru sambungkan ke Interactive Indonesia Map.

### 33.4 Edge case yang wajib ditangani

| Kasus | Perilaku yang diharapkan |
| --- | --- |
| Search kosong | Dropdown tidak perlu muncul, summary kembali default. |
| Search tidak ditemukan | Tampilkan empty state dengan contoh kata kunci. |
| User memilih layer saat search aktif | Layer berubah, search tetap dipertahankan, result count ikut berubah. |
| User klik flagship saat layer aktif | `showFlagshipOnly = true` dan `activeLayer = "all"`. |
| User klik reset | Semua state kembali ke default. |
| Mobile viewport kecil | Chips horizontal scroll dan tidak membuat layout overflow. |
| Passport belum tersedia | Tampilkan disabled state atau badge `Soon`, bukan link rusak. |

### 33.5 Default state final

```tsx
const defaultExploreControlState = {
  searchQuery: "",
  activeLayer: "all",
  activeMode: "explore",
  selectedProvinceId: null,
  showFlagshipOnly: false,
};
```

Default summary:

```
Mode Explore · Layer Semua · Menampilkan semua provinsi dan 8 flagship utama.
```

### 33.6 Microcopy final yang dipakai

| Elemen | Copy final |
| --- | --- |
| Eyebrow | `Mulai Eksplorasi` |
| Heading | `Temukan Jalur Jelajahmu` |
| Subheading | `Cari provinsi, pilih layer, dan sesuaikan mode eksplorasi sebelum masuk ke peta interaktif.` |
| Search placeholder | `Cari provinsi, budaya, kuliner, atau destinasi...` |
| Empty search | `Belum ditemukan. Coba kata kunci lain seperti “Bali”, “Rendang”, atau “IKN”.` |
| Reset | `Reset Peta` |
| Flagship | `Tampilkan Flagship` |
| Passport | `Buka Passport` atau `Passport Soon` |

### 33.7 Standar visual final

Explore Control Bar harus terasa sebagai **floating command deck**, bukan form biasa.

Keputusan visual final:

- Background section: ivory / warm white.
- Main card: glass white dengan blur halus.
- Search: elemen paling dominan.
- Mode selector: segmented dan compact.
- Layer chips: rounded, jelas, mobile scroll.
- Quick actions: secondary, tidak lebih dominan dari search.
- Summary: kecil namun informatif.
- Accent gold hanya untuk highlight, focus, badge, dan emphasis.

Hindari:

- Terlalu banyak shadow berat.
- Terlalu banyak ornamen batik.
- Background image besar.
- Button yang semuanya terlihat primary.
- Copy yang terlalu panjang di mobile.

### 33.8 Kriteria kualitas sebelum lanjut ke Interactive Map

Sebelum masuk ke Section 3, pastikan:

- User bisa memahami cara mulai menjelajah dalam 3 detik.
- Search terasa nyata karena dropdown dan keyword bekerja.
- Setiap klik menghasilkan perubahan state yang terlihat.
- Mobile tetap terasa ringan dan tidak penuh sesak.
- Komponen sudah siap mengirim state ke map tanpa refactor besar.
- Tidak ada dependency berat yang memperlambat halaman.
- Semua control bisa digunakan dengan keyboard.

### 33.9 Catatan handoff desain-ke-dev

Untuk developer, dokumen ini harus diperlakukan sebagai **source of truth planning**, bukan prompt. Implementasi dapat dimulai dari struktur file, data shape, state contract, dan acceptance criteria yang sudah dijelaskan di bagian sebelumnya.

Prioritas utama saat coding:

1. Buat pengalaman dasar berfungsi dulu.
2. Pastikan responsive aman.
3. Baru tambahkan polish visual dan motion.
4. Jangan sambungkan fitur ke map sebelum state control stabil.

---

## 34. Definition of Done

Section dianggap selesai jika:

- Komponen `ExploreControlBar` sudah bisa dirender di `/explore`.
- Semua data layer dan mode sudah terpisah di file data.
- Search 8 flagship bekerja.
- Dropdown search tampil.
- State bisa berubah dari search, layer, mode, reset, dan flagship.
- Summary berubah berdasarkan state.
- Tampilan desktop, tablet, dan mobile sudah rapi.
- Semua button accessible.
- Visual terasa premium dan menyambung dengan Hero Section.
- Komponen siap mengirim state ke Interactive Indonesia Map.

---

## 35. Kesimpulan Final

Section setelah hero yang paling tepat adalah:

```
Explore Control Bar / Search & Filter Navigation
```

Section ini wajib karena membuat Nusa Map terasa:

- Bisa digunakan.
- Punya kontrol.
- Punya search.
- Punya filter.
- Punya mode.
- Punya state aktif.
- Bukan sekadar visual.

Aset yang dibutuhkan ringan:

```
pin icons
icon-map
icon-passport
lucide icons
data search province
data layer
data mode
```

Setelah section ini selesai, lanjut ke:

```
Section 3 — Interactive Indonesia Map
```

Karena semua state dari Explore Control Bar akan mengatur map utama.