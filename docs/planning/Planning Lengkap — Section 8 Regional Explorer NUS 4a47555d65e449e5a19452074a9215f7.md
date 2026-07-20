# Planning Lengkap — Section 8 Regional Explorer NUSANTARAYA

<aside>
🧭

**Dokumen source of truth untuk Section 8 — Regional Explorer pada halaman `/explore` NUSANTARAYA.** Section ini membantu pengguna membandingkan tujuh wilayah besar Indonesia, memahami karakter tiap kawasan, lalu memilih wilayah atau provinsi untuk diterapkan kembali ke Nusa Map, dibuka di Atlas, dijadikan titik awal perjalanan, atau dilanjutkan ke Passport.

</aside>

---

## 1. Ringkasan Eksekutif

**Regional Explorer** adalah section kedelapan halaman Nusa Map full page `/explore`, ditempatkan setelah **Recommended Journey / Smart Suggestions** dan sebelum **Passport Progress**.

Section ini menjawab pertanyaan:

> “Jika saya melihat Indonesia dari sudut wilayah, apa perbedaan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua—dan wilayah mana yang paling relevan untuk saya jelajahi?”
> 

Konsep final:

```
Regional Portraits of Indonesia
```

Versi pengalaman:

```
Tujuh wilayah, tujuh potret Nusantara, satu sistem eksplorasi yang saling terhubung.
```

Regional Explorer **bukan** daftar pulau, **bukan** grid tujuh kartu wisata, dan **bukan** pengulangan peta utama. Pengalaman harus terasa seperti **atlas perbandingan regional**: satu wilayah aktif menjadi focal point, enam wilayah lain tetap terlihat sebagai navigasi, sementara profil regional, provinsi, pilar dominan, jejak tematik, snapshot Passport, dan tindakan lanjutan berubah dalam satu stage yang konsisten.

<aside>
🎯

**Formula UX final:** Pilih wilayah → pahami identitas regional → bandingkan karakter → lihat provinsi penyusun → terapkan ke Map atau buka Atlas → lanjutkan eksplorasi dan Passport.

</aside>

### 1.1 Keputusan utama

1. Tepat **tujuh kelompok wilayah** digunakan secara konsisten di seluruh produk.
2. Hanya satu wilayah menjadi active region pada satu waktu.
3. Region memakai daftar provinsi sebagai source of truth; jangan menduplikasi data provinsi.
4. Desktop memakai **regional navigation rail + active regional portrait + province constellation**.
5. Tablet memakai selector horizontal dan stage stacked.
6. Mobile memakai regional chips/rail, satu portrait card, dan province snap rail.
7. Region selection boleh langsung memperbarui preview section, tetapi Map hanya di-scroll saat CTA ditekan.
8. Section membaca `activeLayer`, `activeMode`, `selectedProvinceId`, journey aktif, dan Passport progress.
9. Section tidak membuat Map engine kedua.
10. Perbandingan maksimal dua wilayah pada desktop/tablet; mobile memakai sequential comparison.
11. Angka dan coverage harus dihitung dari data, bukan hardcoded.
12. Tidak ada ranking “wilayah terbaik”.
13. Region color hanya menjadi aksen; ivory, navy, dan gold tetap dominan.
14. Semua klaim budaya, sejarah, alam, dan pariwisata harus bersumber.
15. Section tetap berguna tanpa API, login, dan data personal.

---

## 2. Posisi dalam Halaman `/explore`

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey / Smart Suggestions
8. Regional Explorer ← SECTION INI
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Pertanyaan yang dijawab setiap section

- Section 3: **Di mana cerita itu berada?**
- Section 4: **Apa yang perlu saya ketahui tentang provinsi ini?**
- Section 5: **Provinsi unggulan mana yang dapat menjadi gerbang pertama?**
- Section 6: **Tema apa yang ingin saya jelajahi?**
- Section 7: **Jalur apa yang sebaiknya saya ikuti?**
- Section 8: **Bagaimana karakter antarkawasan dapat dibandingkan?**
- Section 9: **Seberapa jauh perjalanan saya sudah berkembang?**

### 2.2 Handoff dari Section 7

Microcopy penutup Section 7:

```
Ingin melihat pilihan dari sudut wilayah?
Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua.
```

Data yang diterima:

```tsx
{
  activeLayer,
  activeMode,
  selectedProvinceId,
  activeJourneyId,
  journeyProvinceIds,
  passportProvinceIds,
}
```

Jika journey aktif hanya berada dalam satu region, region tersebut dapat menjadi default. Jika journey melintasi beberapa region, gunakan stop pertama sebagai active region dan tampilkan badge `Lintas Wilayah`.

### 2.3 Handoff ke Section 9

Microcopy penutup:

```
Sudah menemukan wilayah yang ingin dijelajahi?
Lihat bagaimana pilihanmu melengkapi peta dan Passport Nusantara.
```

Section 9 menerima:

```tsx
{
  activeRegionId,
  selectedProvinceId,
  passportProvinceIds,
  plannedProvinceIds,
}
```

### 2.4 Anchor wajib

```
#regional-explorer
```

---

## 3. Quality Gate Sebelum Implementasi

- [ ]  Data 38 provinsi valid dan memiliki `regionId` canonical.
- [ ]  Tujuh region ID telah dipakai konsisten di Map, Flagship, Passport, dan Route Planner.
- [ ]  `activeLayer` dan `activeMode` shared state stabil.
- [ ]  Selected province dapat dipetakan ke region tanpa ambiguity.
- [ ]  CTA Map dapat mempertahankan layer dan mode.
- [ ]  Province Atlas route canonical tersedia atau memiliki fallback aman.
- [ ]  Passport membedakan `planned`, `started`, dan `completed` bila fitur tersebut sudah tersedia.
- [ ]  Region color tokens telah didefinisikan satu kali.
- [ ]  Province adjacency dan regional grouping telah divalidasi.
- [ ]  Asset manifest memiliki fallback regional.
- [ ]  Count dapat dihitung dari source data.
- [ ]  Tidak ada broken route, image, icon, atau province ID.
- [ ]  Lint, type-check, validator, test, dan production build lulus.

Jika data coverage belum lengkap, sembunyikan metrik tersebut atau gunakan copy kualitatif. Jangan mengarang angka untuk membuat section terlihat penuh.

---

## 4. Tujuan Produk dan UX

### 4.1 Tujuan pengguna

Pengguna dapat:

1. Melihat Indonesia sebagai tujuh kawasan besar yang tetap terhubung.
2. Memahami identitas setiap region dalam beberapa detik.
3. Mengetahui provinsi penyusun tiap region.
4. Membandingkan dua region tanpa kehilangan konteks.
5. Melihat pilar, layer, dan content signals dominan.
6. Mengetahui provinsi flagship dan entry point terbaik pada setiap region.
7. Menemukan region yang sesuai dengan mode Explore, Tourist, atau Learn.
8. Mengirim pilihan region ke Interactive Map.
9. Membuka Summary Panel atau Atlas provinsi.
10. Membuat regional journey atau mengirim region ke Route Planner.
11. Melihat progress Passport per wilayah.
12. Menggunakan section melalui mouse, touch, keyboard, dan screen reader.

### 4.2 Tujuan emosional

```
Indonesia terasa luas, tetapi tidak membingungkan.
Setiap kawasan memiliki karakter yang berbeda tanpa dipersempit menjadi stereotip.
Saya dapat membandingkan wilayah dan memilih jalan eksplorasi saya sendiri.
Perjalanan saya di NUSANTARAYA terasa semakin utuh.
```

### 4.3 Tujuan kompetisi/demo

- Memperlihatkan cakupan nasional dengan arsitektur data yang jelas.
- Membuktikan bahwa 38 provinsi tidak ditampilkan sebagai daftar acak.
- Menunjukkan shared state dari Journey → Region → Map → Passport.
- Menampilkan hubungan warisan, alam, perjalanan, dan Digital City.
- Memberi wow moment visual tanpa membuat peta kedua.
- Menunjukkan sensitivitas: tidak ada “region terbaik” atau penyederhanaan budaya.
- Menjadi jembatan kuat menuju gamifikasi Passport.

### 4.4 KPI yang disarankan

Events utama:

- `region_section_viewed`.
- `region_selected`.
- `region_compare_started`.
- `region_compare_changed`.
- `region_map_opened`.
- `region_province_opened`.
- `region_atlas_opened`.
- `region_journey_started`.
- `region_route_planner_opened`.
- `region_passport_viewed`.

Target awal:

- ≥35% pengguna yang mencapai section memilih region.
- ≥20% membuka Map, Summary, Atlas, atau Journey dari section.
- ≥10% memulai perbandingan region.
- Interaction feedback terasa kurang dari 100ms untuk data lokal.

---

## 5. Scope dan Batas Tanggung Jawab

### 5.1 Termasuk

- Tujuh regional profiles.
- Region selector/navigation.
- Active regional portrait.
- Daftar/constellation provinsi.
- Pilar dan layer signals.
- Flagship/featured entry points.
- Progress Passport per region.
- Optional compare mode dua region.
- Integrasi Map, Summary, Atlas, Journey, Route Planner, dan Passport.
- Loading, partial, empty, dan error states.
- Responsive, accessibility, analytics, dan performance budget.

### 5.2 Tidak termasuk

- Peta geospasial baru dengan seluruh 38 path.
- Detail artikel tiap provinsi.
- Booking atau jadwal transportasi.
- Ranking kualitas region.
- Klaim biaya, keamanan, atau aksesibilitas perjalanan real-time.
- Seluruh itinerary regional; itu tanggung jawab Route Planner.
- Rekomendasi AI penuh; itu tanggung jawab RANI/Section 7.
- Metrik ekonomi/populasi real-time tanpa source pipeline.

### 5.3 Prinsip pembagian tanggung jawab

```
Regional Explorer membandingkan kawasan.
Interactive Map menunjukkan lokasi dan selection.
Atlas menjelaskan provinsi secara mendalam.
Recommended Journey menyusun urutan.
Route Planner membuat itinerary.
Passport menyimpan progres.
```

---

## 6. Model Regional Final

Gunakan tujuh region canonical berikut:

| ID | Label | Warna Aksen | Jumlah Provinsi |
| --- | --- | --- | --- |
| `sumatera` | Sumatera | `#B85C38` | 10 |
| `jawa` | Jawa | `#2B4C8C` | 6 |
| `kalimantan` | Kalimantan | `#1A5C3A` | 5 |
| `sulawesi` | Sulawesi | `#D4691E` | 6 |
| `bali-nusa-tenggara` | Bali–Nusa Tenggara | `#6B3FA0` | 3 |
| `maluku` | Maluku | `#1B7A7A` | 2 |
| `papua` | Papua | `#1A4A7A` | 6 |

Total harus selalu:

```
10 + 6 + 5 + 6 + 3 + 2 + 6 = 38 provinsi
```

### 6.1 Mapping provinsi

**Sumatera — 10**

- Aceh
- Sumatera Utara
- Sumatera Barat
- Riau
- Kepulauan Riau
- Jambi
- Sumatera Selatan
- Bengkulu
- Lampung
- Kepulauan Bangka Belitung

**Jawa — 6**

- Banten
- DKI Jakarta
- Jawa Barat
- Jawa Tengah
- DI Yogyakarta
- Jawa Timur

**Kalimantan — 5**

- Kalimantan Barat
- Kalimantan Tengah
- Kalimantan Selatan
- Kalimantan Timur
- Kalimantan Utara

**Sulawesi — 6**

- Sulawesi Utara
- Gorontalo
- Sulawesi Tengah
- Sulawesi Barat
- Sulawesi Selatan
- Sulawesi Tenggara

**Bali–Nusa Tenggara — 3**

- Bali
- Nusa Tenggara Barat
- Nusa Tenggara Timur

**Maluku — 2**

- Maluku
- Maluku Utara

**Papua — 6**

- Papua
- Papua Barat
- Papua Barat Daya
- Papua Tengah
- Papua Pegunungan
- Papua Selatan

### 6.2 Aturan grouping

- Grouping ini adalah grouping pengalaman produk, bukan pengganti klasifikasi administratif resmi.
- Label `Bali–Nusa Tenggara` digunakan sebagai satu unit navigasi karena kebutuhan informasi dan skala UI.
- Semua konten tetap menjaga identitas provinsi dan komunitas masing-masing.
- Jangan menyebut seluruh masyarakat di suatu region sebagai satu budaya tunggal.
- Region profile harus memakai bahasa `mencakup`, `menghubungkan`, atau `memperlihatkan keragaman`, bukan `memiliki satu identitas`.

---

## 7. Konsep Pengalaman Final

### 7.1 Creative direction

```
Editorial Regional Atlas × Comparative Cultural Observatory × Premium Travel Dossier
```

### 7.2 Formula informasi region aktif

1. Region index `01–07`.
2. Region name.
3. Short regional promise.
4. Editorial description.
5. Jumlah provinsi.
6. Pilar/layer signals.
7. Province constellation.
8. Flagship anchors.
9. Passport snapshot.
10. Context note dari layer/mode/journey.
11. CTA ke Map.
12. CTA ke regional journey/Route Planner.
13. Optional compare action.

### 7.3 Yang harus dihindari

- Grid tujuh kartu identik.
- Seluruh region berwarna penuh seperti pelangi.
- Ranking `paling indah`, `terbaik`, atau `paling autentik`.
- Satu ikon budaya untuk mewakili seluruh region.
- Mengulang Interactive Map lengkap.
- Statistik palsu.
- Dashboard padat angka tanpa narasi.
- Autoplay mengganti region.
- Tooltip penting yang hanya tersedia lewat hover.
- CTA yang menuju route belum tersedia.
- Terlalu banyak nested card.

---

## 8. Copywriting Final Section

### Eyebrow

```
Jelajah Per Wilayah
```

### Heading

```
Tujuh Wilayah, Beragam Wajah Nusantara
```

### Subheading

```
Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua—lalu pilih provinsi, jalur, atau cerita yang ingin kamu jelajahi berikutnya.
```

### Supporting microcopy

```
Setiap wilayah adalah pintu masuk, bukan batas cerita.
```

### Label UI

- `Wilayah aktif`.
- `Provinsi dalam wilayah`.
- `Jejak utama`.
- `Pilar dominan`.
- `Provinsi unggulan`.
- `Progress Passport`.
- `Cocok untuk mode ini`.
- `Bandingkan wilayah`.
- `Terapkan ke peta`.

### CTA utama

```
Lihat Wilayah Ini di Peta
```

### CTA dinamis

- `Jelajahi Sumatera di Peta`.
- `Jelajahi Jawa di Peta`.
- `Jelajahi Kalimantan di Peta`.
- `Jelajahi Sulawesi di Peta`.
- `Jelajahi Bali–Nusa Tenggara di Peta`.
- `Jelajahi Maluku di Peta`.
- `Jelajahi Papua di Peta`.

### CTA sekunder

- `Buat Perjalanan Wilayah`.
- `Bandingkan dengan Wilayah Lain`.
- `Buka Provinsi Unggulan`.
- `Lihat Progress Passport`.

---

## 9. Editorial Direction per Region

<aside>
⚠️

Copy berikut adalah arahan presentasi. Fakta, contoh budaya, sejarah, destinasi, dan angka harus berasal dari data terkurasi serta melewati review sensitivitas budaya.

</aside>

### 9.1 Sumatera

- **Promise:** Jalur barat yang kaya rasa, tradisi, dan jaringan maritim.
- **Description:** Menjelajahi keragaman dari Aceh hingga Lampung, termasuk lanskap pegunungan, kota pelabuhan, budaya pesisir dan pedalaman, kuliner berbumbu kuat, serta jejak perdagangan yang menghubungkan pulau ini dengan dunia.
- **Signals:** Tradisi · Rasa · Maritim.
- **Flagship anchor:** Sumatera Barat.
- **Supporting entry points:** Aceh, Sumatera Utara, Kepulauan Riau, Lampung.
- **Visual direction:** Rumah Gadang dalam konteks lanskap, danau/pegunungan, pesisir, pasar rempah, atau jalur barat abstrak.
- **Avoid:** Menjadikan seluruh Sumatera identik dengan satu budaya Minangkabau.

### 9.2 Jawa

- **Promise:** Lapisan sejarah, kota, kreativitas, dan tradisi yang terus hidup.
- **Description:** Menghubungkan pusat pemerintahan, kota kreatif, warisan kerajaan, pendidikan, industri, kuliner, seni, dan kehidupan urban dalam kawasan dengan kepadatan cerita yang sangat tinggi.
- **Signals:** Sejarah · Kreativitas · Kota.
- **Flagship anchor:** DI Yogyakarta.
- **Supporting entry points:** Jawa Tengah, Jawa Timur, Jawa Barat, DKI Jakarta.
- **Visual direction:** Sumbu budaya, arsitektur heritage, kota modern, relief, batik, atau landscape vulkanik.
- **Avoid:** Menganggap budaya Jawa sebagai satu-satunya identitas seluruh region.

### 9.3 Kalimantan

- **Promise:** Hutan, sungai, komunitas, dan gerbang masa depan Indonesia.
- **Description:** Mempertemukan sistem sungai, hutan tropis, pengetahuan lokal, masyarakat pesisir dan pedalaman, kota-kota berkembang, konservasi, serta pembangunan IKN dan ekonomi digital.
- **Signals:** Alam · Sungai · Masa Depan.
- **Flagship anchor:** Kalimantan Timur.
- **Supporting entry points:** Kalimantan Barat, Kalimantan Tengah, Kalimantan Selatan.
- **Visual direction:** Sungai Mahakam, kanopi hutan, pola jaringan sungai, atau transisi warisan–IKN yang terkendali.
- **Avoid:** Memperlakukan hutan sebagai ruang kosong tanpa komunitas.

### 9.4 Sulawesi

- **Promise:** Laut, aksara, pegunungan, dan budaya pelaut yang beragam.
- **Description:** Menghubungkan tradisi maritim, kota pelabuhan, aksara, perahu, dataran tinggi, biodiversitas, kuliner, dan jaringan perjalanan Indonesia timur.
- **Signals:** Maritim · Aksara · Pegunungan.
- **Flagship anchor:** Sulawesi Selatan.
- **Supporting entry points:** Sulawesi Utara, Sulawesi Tengah, Sulawesi Tenggara.
- **Visual direction:** Pinisi, garis pantai, pegunungan, Lontara sebagai motif kecil, atau jaringan pelabuhan.
- **Avoid:** Menggabungkan Bugis, Makassar, Toraja, Minahasa, Gorontalo, dan komunitas lain menjadi satu identitas.

### 9.5 Bali–Nusa Tenggara

- **Promise:** Tradisi hidup, pulau-pulau, dan lanskap perjalanan yang kontras.
- **Description:** Memperlihatkan hubungan ritual, seni, lanskap pertanian, kepulauan kering, konservasi, tenun, desa adat, wisata, dan perjalanan antarpulau.
- **Signals:** Tradisi · Alam · Yatra.
- **Flagship anchors:** Bali dan Nusa Tenggara Timur.
- **Supporting entry point:** Nusa Tenggara Barat.
- **Visual direction:** Subak, komposisi pulau, tenun, savana, laut, dan route ribbon ringan.
- **Avoid:** Membiarkan Bali menutupi identitas NTB dan NTT.

### 9.6 Maluku

- **Promise:** Kepulauan rempah yang menghubungkan Nusantara dan dunia.
- **Description:** Menelusuri pala, cengkeh, pelabuhan, benteng, pelayaran, musik, pengetahuan kepulauan, dan kehidupan antarpulau dalam salah satu simpul sejarah global terpenting di Nusantara.
- **Signals:** Rempah · Sejarah · Kepulauan.
- **Flagship anchor:** Maluku.
- **Supporting entry point:** Maluku Utara.
- **Visual direction:** Banda, pala/cengkeh, sea-route overlay, pulau, atau cartographic texture.
- **Avoid:** Mereduksi Maluku hanya menjadi kolonialisme dan rempah.

### 9.7 Papua

- **Promise:** Pegunungan, sungai, hutan, pesisir, dan biodiversitas dalam bentang yang luas.
- **Description:** Menghadirkan keragaman kawasan pesisir, kepulauan, dataran rendah, pegunungan, pengetahuan lokal, seni, konservasi, dan potensi masa depan di enam provinsi Papua.
- **Signals:** Biodiversitas · Komunitas · Lanskap.
- **Flagship anchor:** Papua Barat Daya.
- **Supporting entry points:** Papua, Papua Pegunungan, Papua Selatan, Papua Barat.
- **Visual direction:** Raja Ampat dengan konteks komunitas pesisir, pegunungan, sungai, hutan, dan pola visual yang tidak eksotis berlebihan.
- **Avoid:** Stereotip primitif, homogenisasi komunitas, atau penggunaan visual tanpa konteks.

---

## 10. Arsitektur Visual Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ JELAJAH PER WILAYAH                                                         │
│ Tujuh Wilayah, Beragam Wajah Nusantara                                      │
│ Subheading                                           [Context pill]          │
├───────────────────┬───────────────────────────────────────┬──────────────────┤
│ 01 Sumatera       │ ACTIVE REGIONAL PORTRAIT              │ REGION DOSSIER   │
│ 02 Jawa           │                                       │ 10 provinsi      │
│ 03 Kalimantan     │ [regional image / abstract map]       │ 3 jejak utama    │
│ 04 Sulawesi       │                                       │ Mode match       │
│ 05 Bali–Nusa      │ SUMATERA                              │ Passport 3/10    │
│ 06 Maluku         │ Promise + editorial description      │                  │
│ 07 Papua          │                                       │ [Bandingkan]     │
│                   │ [Jelajahi di Peta] [Buat Perjalanan] │                  │
├───────────────────┴───────────────────────────────────────┴──────────────────┤
│ PROVINSI DALAM WILAYAH                                                      │
│ [Aceh] [Sumut] [Sumbar] [Riau] [...]                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│ OPTIONAL COMPARE TRAY — Sumatera ↔ Jawa                                     │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 10.1 Rasio desktop

- Outer max width: 1280–1440px.
- Region rail: 18–22%.
- Active portrait: 52–58%.
- Dossier: 22–28%.
- Minimum stage height: 620–760px.
- Province strip: full width.
- Compare tray muncul hanya setelah pengguna memulai compare.

### 10.2 Regional visual

Boleh menggunakan:

- Siluet/crop region sederhana.
- One active regional image.
- Mosaic maksimal 2–3 aset.
- Province node constellation.
- Route line ilustratif.
- Layer texture yang mengikuti activeLayer.

Tidak boleh:

- Peta 38 provinsi kedua dengan seluruh event handler.
- Seluruh label provinsi pada visual utama.
- Jalur ilustratif yang diklaim sebagai rute geografis akurat.

### 10.3 Hierarki visual

1. Nama dan promise region.
2. Visual portrait.
3. CTA utama.
4. Region signals dan count.
5. Province strip.
6. Compare action.
7. Decorative pattern.

---

## 11. Blueprint Tablet

```
Section header
Horizontal region selector
Regional visual full width
Identity + description
Signals + Passport snapshot
Primary and secondary actions
Province horizontal rail
Optional compare drawer
```

Aturan:

- Selector dapat di-scroll horizontal.
- Active region selalu terlihat setelah selection.
- Stage stacked; jangan memaksa tiga kolom sempit.
- Signals dapat menjadi grid 2×2 atau row tiga item.
- Province rail menampilkan 2.5–4 card.
- Compare panel menggunakan stacked columns.
- Tidak ada nested vertical scroll.

---

## 12. Blueprint Mobile

```
Eyebrow
Heading
Subheading
Context pill

Horizontal region chips
01 / 07 · Active region
Regional visual 4:3
Region name
Promise
Description
Signals
Province count + Passport progress
Primary CTA full width
Journey / Compare secondary actions

Province snap rail
Compare sequential view
```

### 12.1 Mobile rules

- Horizontal padding 20–24px.
- Region selector minimum tinggi 44px.
- Active region name maksimal dua baris.
- Description maksimal 5–7 baris sebelum optional expand.
- CTA Map full-width.
- Secondary actions maksimal dua per row.
- Province card minimal 160–200px.
- Native horizontal scroll + CSS snap.
- Tampilkan partial next item untuk affordance.
- Tidak ada hover-only content.
- Tidak ada page-level horizontal overflow.

### 12.2 Mobile kecil ≤390px

- Heading 34–40px.
- Region selector memakai short label jika diperlukan: `Bali–Nusa`.
- Signals wrap vertikal.
- Passport progress menjadi satu bar compact.
- Compare mode tidak menampilkan dua kolom; pengguna berpindah `A` dan `B` melalui segmented control.
- Decorative node dan label dikurangi.

---

## 13. Region Navigation System

### 13.1 Desktop rail item

Isi:

- Nomor `01–07`.
- Nama region.
- Jumlah provinsi.
- Short signal satu baris.
- Active indicator.
- Optional Passport progress dot.

### 13.2 Selection behavior

```
Klik Kalimantan
→ activeRegionId = kalimantan
→ stage memperbarui visual dan copy
→ province list memperbarui data
→ context layer/mode dipertahankan
→ tidak auto-scroll ke Map
→ focus tetap pada selector
```

### 13.3 Active state

- Shape/indicator + typography, bukan warna saja.
- Gold hairline atau compass marker.
- Regional color hanya sebagai accent kecil.
- Gunakan `aria-current` atau `aria-selected` sesuai pattern.

### 13.4 Keyboard

Jika memakai tabs:

- Arrow Up/Down desktop.
- Arrow Left/Right tablet/mobile.
- Home/End.
- Enter/Space bila activation manual.
- Focus tidak hilang saat content swap.

Jika memakai buttons/list, jangan menerapkan ARIA tabs setengah-setengah.

---

## 14. Province Constellation dan Province Rail

### 14.1 Tujuan

- Menunjukkan bahwa region adalah kumpulan provinsi nyata.
- Memberi entry point langsung ke Summary/Atlas.
- Memperlihatkan coverage tanpa membuat grid panjang.

### 14.2 Province item

Setiap item berisi:

- Nama provinsi.
- Flagship badge jika relevan.
- 1–2 matching signals berdasarkan activeLayer.
- Thumbnail existing.
- Passport state.
- CTA tunggal yang jelas.

### 14.3 Ranking default

```
selected province match
+ journey stop match
+ flagship depth
+ active layer relevance
+ data completeness
+ Passport novelty
```

### 14.4 Aturan urutan

- Default dapat mengikuti urutan geografis/editorial yang stabil.
- Jangan mengacak setiap render.
- Selected province boleh dinaikkan ke posisi pertama secara visual tanpa mengubah source array permanen.
- Jangan hanya menampilkan flagship; provinsi non-flagship tetap mendapat ruang.

### 14.5 Interaction

Klik province card:

```
set selectedProvinceId
→ pertahankan activeRegionId
→ pertahankan activeLayer dan activeMode
→ scroll ke #interactive-map
→ buka Summary Panel
```

Secondary link `Buka Atlas` hanya ditampilkan jika route valid.

---

## 15. Compare Mode

### 15.1 Tujuan

Membantu pengguna memahami perbedaan tanpa memaksa ranking atau penilaian absolut.

### 15.2 Batas

- Maksimal dua region.
- Tidak ada tabel tujuh region penuh pada UI utama.
- Hanya atribut yang datanya tersedia dan comparable.
- Tidak menampilkan `lebih baik` atau `lebih buruk`.

### 15.3 Dimensi perbandingan

- Jumlah provinsi.
- Pilar dominan.
- Layer coverage.
- Flagship anchors.
- Journey types tersedia.
- Passport progress.
- Content depth/completeness.
- Travel note hanya jika tervalidasi.

### 15.4 Blueprint desktop

```
BANDINGKAN WILAYAH
┌────────────────────────────┬────────────────────────────┐
│ SUMATERA                   │ SULAWESI                   │
│ Promise                    │ Promise                    │
│ 10 provinsi                │ 6 provinsi                 │
│ Tradisi · Rasa · Maritim   │ Maritim · Aksara · Alam    │
│ Flagship: Sumatera Barat   │ Flagship: Sulawesi Selatan │
│ Passport: 3/10             │ Passport: 1/6              │
│ [Jelajahi]                 │ [Jelajahi]                 │
└────────────────────────────┴────────────────────────────┘
```

### 15.5 Flow

```
Klik Bandingkan
→ region aktif menjadi Region A
→ pilih Region B
→ compare tray terbuka
→ focus ke heading compare
→ user dapat swap, replace, atau close
```

### 15.6 Copy aman

Gunakan:

- `Berbeda dalam fokus cerita`.
- `Lebih banyak materi tersedia` bila count valid.
- `Cocok untuk layer yang sedang aktif`.

Hindari:

- `Paling lengkap`.
- `Lebih menarik`.
- `Lebih autentik`.
- `Lebih aman`.
- `Lebih murah`.

---

## 16. Context-Aware Adaptation

### 16.1 Active layer

Region profile tidak berubah total, tetapi prioritas signals dan province ranking menyesuaikan:

- Budaya → Archive/tradition signals.
- Kuliner → food/rasa signals.
- Alam → biodiversity/destination signals.
- Sejarah → timeline/site signals.
- Rempah → Maluku/Sumatera/Sulawesi continuity bila data mendukung.
- Future → Kalimantan Timur/urban/creative economy signals.

### 16.2 Active mode

**Explore**

- Discovery dan variasi provinsi.
- CTA `Jelajahi di Peta`.

**Tourist**

- Provinsi dengan data perjalanan tervalidasi diprioritaskan.
- CTA `Buat Perjalanan Wilayah`.
- Jangan menampilkan biaya/waktu tanpa sumber.

**Learn**

- Source completeness, Archive, sejarah, aksara, dan chapter belajar diprioritaskan.
- CTA `Mulai Jelajah Belajar` atau `Buka Atlas Bersumber`.

### 16.3 Selected province

Jika selected province ada:

- Region yang sesuai menjadi default jika pengguna belum berinteraksi dengan Section 8.
- Province item diberi state `Sedang dipilih`.
- Region description dapat memiliki context note: `DI Yogyakarta berada di wilayah Jawa.`

### 16.4 Journey aktif

- Journey satu region → aktifkan region tersebut.
- Journey lintas region → tampilkan `Lintas Wilayah` dan node region yang terkait.
- Jangan mengubah journey ketika region selection berubah kecuali pengguna memilih CTA khusus.

### 16.5 Passport

- Tampilkan progress regional.
- `planned` tidak dihitung sebagai `completed`.
- Region belum dijelajahi tidak diberi label negatif; gunakan `Belum dimulai`.
- CTA `Lengkapi wilayah` hanya jika ada definisi badge/progress yang valid.

---

## 17. Data Model

```tsx
export type RegionId =
  | "sumatera"
  | "jawa"
  | "kalimantan"
  | "sulawesi"
  | "bali-nusa-tenggara"
  | "maluku"
  | "papua";

export type RegionalProfile = {
  id: RegionId;
  index: number;
  label: string;
  shortLabel: string;
  promise: string;
  description: string;
  provinceIds: string[];
  flagshipProvinceIds: string[];
  signals: [string, string, string];
  dominantPillarIds: string[];
  supportedLayerIds: ExploreLayerId[];
  accentColor: string;
  visualAsset?: string;
  fallbackAsset?: string;
  visualAlt: string;
  ctaLabel: string;
  journeyPresetIds?: string[];
  sourceIds?: string[];
};

export type RegionalProvincePreview = {
  provinceId: string;
  regionId: RegionId;
  isFlagship: boolean;
  isSelected: boolean;
  isPassportPlanned: boolean;
  isPassportCompleted: boolean;
  matchingSignals: string[];
  thumbnail: string;
  summaryHref?: string;
  atlasHref?: string;
};

export type RegionalProgress = {
  regionId: RegionId;
  totalProvinceCount: number;
  plannedProvinceCount: number;
  startedProvinceCount: number;
  completedProvinceCount: number;
  badgeUnlocked: boolean;
};
```

### 17.1 Source of truth

- Province name, slug, region, asset, tier, category, dan href berasal dari province source.
- Region page hanya menyimpan editorial metadata khusus region.
- Passport progress berasal dari store existing.
- Journey preset IDs berasal dari Section 7/Route Planner data.
- Counts dihitung melalui selector, bukan ditulis di komponen.

### 17.2 Validator

- Tepat tujuh region.
- Semua region ID unik.
- Setiap province ID muncul tepat satu kali.
- Total tepat 38.
- Tidak ada province ID asing.
- Semua flagship IDs valid dan berada dalam region yang benar.
- Signals tepat tiga.
- Accent color valid.
- Visual memiliki alt/fallback.
- CTA tersedia.
- Source IDs tersedia untuk klaim editorial bila sistem mendukung.

---

## 18. State Contract

```tsx
type RegionalExplorerState = {
  activeRegionId: RegionId;
  compareRegionId: RegionId | null;
  isCompareOpen: boolean;
  hasUserInteracted: boolean;
  interactionSource:
    | "initial"
    | "province-sync"
    | "journey-sync"
    | "region-selector"
    | "compare"
    | "passport";
};
```

### 18.1 Ownership

- Shared map state tetap dimiliki parent `/explore` atau store existing.
- Section 8 hanya memiliki region selection dan compare presentation state.
- Jangan membuat duplikat `activeLayer`, `activeMode`, atau `selectedProvinceId`.
- Jangan menyimpan region progress secara terpisah; derive dari Passport.

### 18.2 Default region priority

1. Region dari selected province.
2. Region stop pertama active journey.
3. Region dengan Passport action terbaru, jika kebijakan produk mengizinkan.
4. Fallback editorial: `sumatera` atau region pertama yang disepakati.

Rekomendasi demo: gunakan region dari context; jika kosong, default ke `sumatera` untuk alur barat-ke-timur yang natural.

### 18.3 Sync guard

- Sebelum user berinteraksi, selected province/journey dapat memperbarui region.
- Setelah user memilih region manual, background state tidak boleh mengganti region tiba-tiba.
- Tampilkan prompt nonblocking jika context berubah signifikan:

```
Pilihan di peta berubah ke Papua. Tampilkan wilayah Papua?
```

### 18.4 URL optional

```
/explore?region=maluku#regional-explorer
/explore?region=maluku&compare=sulawesi#regional-explorer
```

Gunakan `replace` untuk preview state. Gunakan `push` hanya untuk navigasi bermakna ke Atlas/Route Planner.

---

## 19. Interaction Flows

### 19.1 Entry tanpa context

```
selectedProvinceId = null
activeJourneyId = null
passport kosong
→ Sumatera menjadi default editorial
→ label: Mulai dari wilayah pertama
→ tidak mengubah Map
```

### 19.2 Entry dari selected province

```
selectedProvinceId = maluku
→ activeRegionId = maluku
→ Maluku card aktif
→ province rail menyorot Maluku
→ description/context note tampil
```

### 19.3 Entry dari journey

```
activeJourney = Jalur Rempah Maluku
→ activeRegionId = maluku
→ badge Journey aktif
→ Maluku dan Maluku Utara diprioritaskan
```

### 19.4 Select region

```
Klik Papua
→ activeRegionId = papua
→ visual/copy/signals/province rail crossfade
→ focus tetap pada selector
→ live region mengumumkan Papua, 6 provinsi
```

### 19.5 CTA Map

```
Klik Jelajahi Papua di Peta
→ set regionalFilter = papua atau derive provinceIds
→ pertahankan activeLayer dan activeMode
→ selectedProvinceId dipertahankan jika masih di Papua; jika tidak, jangan memilih otomatis
→ scroll ke #interactive-map
→ focus map status
→ announce 6 provinsi dalam wilayah
```

### 19.6 Province open

```
Klik Papua Barat Daya
→ set selectedProvinceId
→ scroll Map
→ buka Summary Panel
→ simpan explore snapshot
```

### 19.7 Start regional journey

```
Klik Buat Perjalanan Wilayah
→ pilih preset regional valid atau kirim payload ke Route Planner
→ jangan mengarang itinerary
→ pertahankan region/layer/mode sebagai context
```

Payload:

```tsx
{
  source: "regional-explorer",
  regionId,
  provinceIds,
  activeLayer,
  activeMode,
  selectedProvinceId,
}
```

### 19.8 Passport action

```
Klik Lihat Progress Passport
→ scroll ke #passport-progress
→ fokus ke ringkasan region yang sama
```

### 19.9 Compare

```
Klik Bandingkan dengan Wilayah Lain
→ activeRegion menjadi A
→ selector B terbuka
→ pilih region kedua
→ compare tray muncul
→ close mengembalikan focus ke trigger
```

---

## 20. Integrasi dengan Interactive Map

### 20.1 Regional filter

Jika Map belum memiliki `activeRegionId`, jangan membuat filter engine terpisah. Gunakan derived province set:

```tsx
const activeRegionProvinceIds = regionById[activeRegionId].provinceIds;
```

### 20.2 Visual state Map

Saat region diterapkan:

- Province dalam region: opacity 1.
- Province luar region: opacity 0.20–0.35.
- Selected province tetap memiliki prioritas visual.
- Active layer tetap memengaruhi fill/pin di dalam region.
- Bentuk Indonesia tetap terlihat penuh.

### 20.3 Exit regional view

Map menyediakan:

```
Keluar dari tampilan wilayah
```

Behavior:

- Hapus regionalFilter.
- Pertahankan activeLayer dan activeMode.
- Pertahankan selectedProvinceId kecuali pengguna reset penuh.

### 20.4 Browser Back

- Jika regional filter masuk URL/history, Back mengembalikan state sebelum filter.
- Jangan menambah history entry untuk setiap selector preview.

---

## 21. Integrasi dengan Atlas, Journey, Route Planner, Passport, dan RANI

### 21.1 Province Summary dan Atlas

- Province card membuka Summary lewat shared selection.
- `Buka Atlas` memakai canonical href.
- Simpan snapshot agar Back kembali ke Regional Explorer dengan state yang sama.

### 21.2 Recommended Journey

- Regional Explorer tidak menghitung recommendation engine baru.
- Gunakan preset/selector Section 7.
- CTA `Lihat Journey Wilayah` membuka journey yang eligible.
- Jika tidak ada preset, CTA berubah menjadi `Jelajahi Provinsi di Peta`.

### 21.3 Route Planner

- Tourist Mode dapat menonjolkan CTA Route Planner.
- Planner memvalidasi jumlah hari, urutan, transportasi, dan feasibility.
- Region section hanya mengirim context.

### 21.4 Passport

Tampilkan:

- Completed/total province count.
- Planned count optional.
- Badge wilayah bila ada.
- Next suggested province berdasarkan data, bukan random.

Jangan memberi stempel hanya karena region dibuka.

### 21.5 RANI

CTA optional:

```
Tanya RANI tentang wilayah ini
```

Context internal:

```tsx
{
  regionId,
  activeLayer,
  activeMode,
  selectedProvinceId,
  compareRegionId,
}
```

RANI harus mengarahkan ke data internal dan menghindari klaim perjalanan yang tidak terverifikasi.

---

## 22. Visual Design System

### 22.1 Brand base

```
Ivory Background  #FFFDF8
Warm Canvas       #F8F4EA
Navy Ink          #0D1B2A
Flagship Gold     #C9A84C
Warm Border       #E8E0CE
Muted Text        #5E6570
```

### 22.2 Regional accents

```
Sumatera           #B85C38
Jawa               #2B4C8C
Kalimantan         #1A5C3A
Sulawesi           #D4691E
Bali–Nusa Tenggara #6B3FA0
Maluku             #1B7A7A
Papua              #1A4A7A
```

### 22.3 Aturan warna

- Ivory/navy minimal 80% area.
- Regional accent maksimal 10–15%.
- Gold menandai active/focus/Passport, bukan semua border.
- Jangan memakai regional color untuk body text kecil sebelum contrast diuji.
- Active state harus memiliki shape, icon, atau border.

### 22.4 Surface

```css
background: rgba(255, 253, 248, 0.97);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 30px 100px rgba(13, 27, 42, 0.10);
```

### 22.5 Tipografi

- Section heading: Playfair Display 52–72px desktop.
- Region name: Playfair Display 48–68px.
- Promise: Inter Medium 17–20px.
- Body: Inter 15–17px, line-height 1.65.
- Selector: Inter Semibold 13–15px.
- Stats: Playfair/Inter Semibold 24–34px.
- Metadata: Inter Medium 12–13px.

### 22.6 Ornamen

- Motif Nusantara global maksimal opacity 2–3%.
- Jangan menentukan satu motif sebagai simbol seluruh region tanpa dasar.
- Ornamen tetap statis saat region berubah.
- Hindari tekstur tepat di belakang body copy.

---

## 23. Asset Strategy

### 23.1 Reuse prioritas

- Province `hero.webp` dan `thumb.webp`.
- Map silhouette existing.
- Flagship images.
- Layer covers.
- Route overlays.
- Branding ornaments.
- Passport regional badges.

### 23.2 Dedicated region assets optional

```
/assets/explore/regions/sumatera.webp
/assets/explore/regions/jawa.webp
/assets/explore/regions/kalimantan.webp
/assets/explore/regions/sulawesi.webp
/assets/explore/regions/bali-nusa-tenggara.webp
/assets/explore/regions/maluku.webp
/assets/explore/regions/papua.webp
```

### 23.3 Fallback visual

- Regional gradient.
- Region name besar.
- Province nodes.
- Indonesia silhouette crop.
- Three signals.

Jangan menampilkan broken image icon.

### 23.4 Loading strategy

```
Initial: active region visual + visible selector icons
Near viewport: visible province thumbnails
On hover/focus: preload target region visual
On compare open: load second region visual
Never: preload seluruh Atlas atau 228 province images
```

### 23.5 Credits

Setiap visual memiliki:

- Source.
- License.
- Creator/attribution bila diwajibkan.
- Alt text.
- Focal point.
- Crop/edit note.
- Cultural sensitivity note bila relevan.

---

## 24. Motion System

### 24.1 Entrance

1. Header fade-up.
2. Region selector muncul sebagai satu group.
3. Stage opacity/scale ringan.
4. Regional visual reveal.
5. Province nodes/rail masuk terakhir.

### 24.2 Region change

- Accent crossfade 220–320ms.
- Visual crossfade 300–450ms.
- Region title fade-up 8–10px.
- Signals stagger 30–50ms.
- Province rail opacity/translate ringan.
- Tinggi shell harus tetap stabil.

### 24.3 Compare

- Tray reveal 220–320ms.
- Tidak ada flip/rotation berat.
- Swap region memakai crossfade, bukan layout jump.

### 24.4 Hover/focus

- Selector lift maksimal 1–2px.
- Thumbnail scale maksimal 1.02.
- CTA arrow shift 3–4px.
- Tidak ada pulse terus-menerus.

### 24.5 Reduced motion

- Matikan stagger, route draw, parallax, dan scale.
- Crossfade maksimal 100–120ms atau instan.
- Scroll instan.
- Semua fungsi tetap tersedia.

### 24.6 Autoplay

Tidak ada autoplay region.

---

## 25. Accessibility

### 25.1 Semantik

```html
<section id="regional-explorer" aria-labelledby="regional-explorer-heading">
```

- Satu H2 untuk section.
- Active region name menjadi H3.
- Selector memakai tabs lengkap atau button list yang konsisten.
- Province list memakai list semantic.
- Compare memakai region/section dengan heading sendiri.
- CTA navigasi route berupa link.
- CTA yang mengubah state/scroll berupa button.

### 25.2 Keyboard

- Semua region reachable.
- Arrow navigation sesuai orientation.
- Home/End.
- Focus tetap setelah content swap.
- Compare selector dapat digunakan tanpa pointer.
- Escape menutup compare tray dan mengembalikan focus.
- Province rail tidak bergantung pada drag.

### 25.3 Screen reader

- Announce region name dan jumlah provinsi.
- Jangan mengumumkan seluruh description pada setiap arrow press.
- `aria-live="polite"` untuk region selection dan progress changes.
- Decorative regional map/route `aria-hidden`.
- Image alt menjelaskan isi visual, bukan nama file.

### 25.4 Contrast dan touch

- Body text 4.5:1.
- Large text 3:1.
- Focus ring jelas.
- Touch target minimal 44×44px.
- Informasi tidak bergantung pada warna.
- Zoom 200% tidak memotong CTA atau compare content.

### 25.5 Copy dan sensitivitas

- Gunakan bahasa nonhierarkis.
- Jangan menggeneralisasi budaya.
- Jangan memakai istilah eksotis/primitif.
- Sebut komunitas secara spesifik hanya jika data benar dan konteks cukup.

---

## 26. Performance Budget

### 26.1 Target

- Region selection feedback kurang dari 100ms.
- Data composition lokal kurang dari 50ms.
- Tidak ada long task lebih dari 200ms.
- Tidak ada layout shift besar.
- Active region image ideal di bawah 250KB.
- Compare hanya memuat aset region kedua setelah intent.

### 26.2 Teknik

- Precompute `provinceIdsByRegion`.
- Memoize active region selectors.
- Jangan mengimpor full Atlas/Archive data.
- Dynamic import compare enhancement jika berat.
- Lazy-load section jika jauh di bawah fold.
- Gunakan image dimensions dan `sizes` eksplisit.
- Gunakan transform/opacity untuk motion.
- Hindari blur besar dan node SVG berlebihan.

### 26.3 Payload principle

```
Load regional summary, not every province chapter.
Load one portrait, not seven full galleries.
Load progress counts, not the entire Passport history.
```

---

## 27. Privacy, Trust, dan Etika

1. Jangan meminta lokasi real-time untuk memilih region.
2. Jangan menyimpulkan asal, etnis, agama, atau identitas pengguna.
3. Passport progress lokal harus transparan.
4. Perbandingan region tidak boleh menjadi ranking budaya.
5. Regional recommendation harus menjelaskan input context.
6. Travel claims harus diverifikasi.
7. Klaim budaya/sejarah harus memiliki source.
8. Tampilkan mekanisme koreksi konten bila tersedia.
9. Hindari popularitas sebagai satu-satunya ranking.
10. Pastikan provinsi non-flagship tetap dapat ditemukan.

Copy transparansi:

```
Pilihan wilayah mengikuti provinsi, layer, mode, dan progres Passport yang aktif di perangkat ini.
```

---

## 28. Loading, Partial, Empty, dan Error States

### 28.1 Loading

```
Menyiapkan potret wilayah Nusantara…
```

- Skeleton menjaga tinggi final.
- Selector tetap usable jika metadata lokal tersedia.

### 28.2 Partial data

- Tampilkan region dan province list yang valid.
- Sembunyikan count/metric yang tidak tersedia.
- Jangan membuat placeholder province palsu.
- Gunakan generic CTA Map bila Journey/Atlas belum siap.

### 28.3 Empty province results karena filter

```
Belum ada provinsi yang cocok dengan layer dan pencarian ini di wilayah pilihan.
```

Actions:

- `Lihat Semua Layer di Wilayah Ini`.
- `Kembali ke Semua Wilayah`.

### 28.4 Asset error

- Regional gradient + title + province nodes.

### 28.5 Compare unavailable

```
Perbandingan belum dapat ditampilkan untuk data ini.
```

Tetap sediakan switch region biasa.

### 28.6 Total data failure

```
Profil wilayah belum dapat dimuat.
[Jelajahi melalui peta] [Coba Lagi]
```

Section tidak boleh kosong.

---

## 29. Analytics Contract

```tsx
type RegionalAnalyticsPayload = {
  regionId: RegionId;
  compareRegionId?: RegionId | null;
  source:
    | "selector"
    | "province-sync"
    | "journey-sync"
    | "map-action"
    | "compare"
    | "passport";
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId?: string | null;
  passportCompletedCount?: number;
  viewport: "desktop" | "tablet" | "mobile";
};
```

Events:

```
region_section_viewed
region_selected
region_compare_opened
region_compare_selected
region_compare_closed
region_map_clicked
region_province_clicked
region_atlas_clicked
region_journey_clicked
region_route_planner_clicked
region_passport_clicked
region_asset_failed
```

Aturan:

- Jangan kirim event selection saat hydration awal.
- Debounce scroll/rail events.
- Jangan kirim data sensitif.
- Jangan mengirim full Passport history.

---

## 30. SEO dan Content Semantics

- Heading section menyebut eksplorasi wilayah Indonesia secara natural.
- Semua tujuh region names tersedia di DOM.
- Province names dalam region aktif tersedia sebagai teks, bukan hanya image.
- Atlas links memakai canonical href.
- Jangan membuat route baru hanya untuk state section.
- Structured data tidak diperlukan khusus section; Province Atlas menangani metadata detail.
- Copy tidak keyword-stuffed.
- Region description harus informatif dan manusiawi.

---

## 31. Component Architecture

```
src/components/explore/regional-explorer/
  RegionalExplorerSection.tsx
  RegionalSectionHeader.tsx
  RegionSelector.tsx
  RegionSelectorItem.tsx
  RegionalPortraitStage.tsx
  RegionalVisual.tsx
  RegionalIdentity.tsx
  RegionalSignals.tsx
  RegionalContextNote.tsx
  RegionalDossier.tsx
  RegionalProvinceRail.tsx
  RegionalProvinceCard.tsx
  RegionalPassportProgress.tsx
  RegionalActions.tsx
  RegionCompareTrigger.tsx
  RegionCompareTray.tsx
  RegionCompareColumn.tsx
  RegionalVisualFallback.tsx
  index.ts

src/data/regions/
  regions.ts
  regionEditorial.ts
  regionProvinceMap.ts
  regionJourneyMap.ts

src/hooks/
  useRegionalExplorer.ts
  useRegionProvincePreviews.ts
  useRegionalPassportProgress.ts
  useRegionKeyboardNavigation.ts
  useRegionAssetPreload.ts
  useRegionCompare.ts

src/types/
  region.ts

src/animations/
  regionalMotion.ts
```

### 31.1 Tanggung jawab utama

**`RegionalExplorerSection.tsx`**

- Compose section.
- Membaca shared state.
- Menjaga ownership state tetap jelas.

**`RegionSelector.tsx`**

- Tujuh region.
- Keyboard/touch.
- Active indicator.

**`RegionalPortraitStage.tsx`**

- Visual, identity, signals, dossier, dan actions region aktif.
- Menjaga shell stabil.

**`RegionalProvinceRail.tsx`**

- Derived province previews.
- Tidak mengimpor full Atlas data.

**`RegionCompareTray.tsx`**

- Maksimal dua region.
- Hanya menampilkan dimensi yang datanya valid.

**`RegionalPassportProgress.tsx`**

- Derived progress.
- Tidak memberi completion reward.

---

## 32. Responsive Matrix

| Viewport | Selector | Portrait | Province List | Compare |
| --- | --- | --- | --- | --- |
| ≥1280px | Vertical rail | Center + dossier | Full-width row | 2 columns |
| 1024–1279px | Vertical compact | Center + compact dossier | Compact row | 2 columns |
| 768–1023px | Horizontal | Stacked | Horizontal rail | Stacked columns |
| 430–767px | Horizontal chips | Single column | Snap rail | Sequential |
| ≤390px | Compact scroll | Compact single | Compact snap | A/B toggle |

Viewport QA:

```
375×667
390×844
430×932
768×1024
1024×768
1280×800
1440×900
1920×1080
```

---

## 33. Testing Plan

### 33.1 Data tests

- Tepat tujuh region.
- Total provinsi 38.
- Setiap provinsi hanya ada di satu region.
- Semua flagship berada di region benar.
- Counts derived benar.
- Asset/href valid.
- Journey mapping valid.

### 33.2 Functional tests

- Pilih seluruh region.
- Sync selected province.
- Sync active journey.
- Apply region ke Map.
- Exit regional view.
- Open Summary dan Atlas.
- Passport progress.
- Start Journey/Route Planner.
- Compare seluruh kombinasi penting.
- Browser Back.
- URL optional.
- Rapid switching tanpa stale state.

### 33.3 Responsive tests

- Selector tidak terpotong.
- `Bali–Nusa Tenggara` aman.
- Province rail tidak overflow parent.
- Compare mobile usable.
- CTA tetap terlihat.
- Image crop aman.

### 33.4 Accessibility tests

- Keyboard-only.
- Screen reader basic flow.
- Focus visible dan tidak hilang.
- Live region tidak berlebihan.
- Contrast.
- Reduced motion.
- Zoom 200%.
- Touch targets.

### 33.5 Performance tests

- 4G dan CPU throttling.
- Region switching.
- Compare lazy loading.
- Pastikan full Atlas tidak termuat.
- Image decode.
- CLS dan memory.

### 33.6 Build validation

```
lint
type-check
region data validator
province coverage validator
asset manifest check
broken-link check
unit/integration test
production build
```

---

## 34. Acceptance Criteria

### Functional

- [ ]  Tepat tujuh region tersedia.
- [ ]  Seluruh 38 provinsi terpetakan tepat satu kali.
- [ ]  Selection region bekerja.
- [ ]  Selected province menentukan default region sebelum manual interaction.
- [ ]  Active layer dan mode tetap stabil.
- [ ]  CTA Map menerapkan region dengan benar.
- [ ]  Province card membuka Summary/Atlas yang benar.
- [ ]  Passport progress derived benar.
- [ ]  Compare maksimal dua region.
- [ ]  Browser Back memulihkan state.
- [ ]  Error/fallback tersedia.

### Visual

- [ ]  Tidak terlihat seperti grid tujuh feature cards.
- [ ]  Satu region menjadi focal point.
- [ ]  Section berbeda dari Explore by Layer dan Recommended Journey.
- [ ]  Regional color terkontrol.
- [ ]  Visual tidak menjadi Map kedua.
- [ ]  Whitespace dominan.
- [ ]  Content swap tidak menimbulkan layout shift besar.

### Responsive

- [ ]  Desktop tiga area seimbang.
- [ ]  Tablet stage nyaman.
- [ ]  Mobile chips dan province snap rail nyaman.
- [ ]  Compare mobile tidak memaksa dua kolom.
- [ ]  Tidak ada horizontal page overflow.
- [ ]  Touch target minimal 44px.

### Accessibility

- [ ]  Keyboard navigation lengkap.
- [ ]  Focus tidak hilang.
- [ ]  Active state tidak hanya warna.
- [ ]  Live region ringkas.
- [ ]  Reduced motion bekerja.
- [ ]  Contrast aman.
- [ ]  Copy tidak menggeneralisasi budaya.

### Performance dan data

- [ ]  Interaction kurang dari 100ms secara wajar.
- [ ]  Tidak memuat full Atlas/Archive.
- [ ]  Asset loading bertahap.
- [ ]  Semua counts berasal dari data.
- [ ]  Tidak ada broken image/link.
- [ ]  Production build lulus.

---

## 35. Tahapan Implementasi

### Fase 1 — Audit contract dan data

1. Audit region field pada 38 provinsi.
2. Normalisasi region IDs.
3. Validasi jumlah provinsi.
4. Audit flagship, Passport, journey, dan Map state.
5. Audit assets dan routes.
6. Buat validator.

### Fase 2 — Data composition

1. Buat regional editorial metadata.
2. Compose province IDs dan count.
3. Compose flagship anchors.
4. Compose layer/mode signals.
5. Compose Passport progress selector.
6. Compose journey mappings.

### Fase 3 — Desktop static

1. Section header.
2. Vertical selector.
3. Regional portrait shell.
4. Regional visual.
5. Dossier dan signals.
6. Province strip.
7. Actions.

### Fase 4 — Shared state integration

1. Sync selected province.
2. Sync journey.
3. Apply region ke Map.
4. Open Summary/Atlas.
5. Preserve layer/mode/search.
6. Passport progress.
7. Optional URL sync.

### Fase 5 — Compare mode

1. Trigger.
2. Region B selector.
3. Valid comparison dimensions.
4. Swap/replace/close.
5. Mobile sequential view.

### Fase 6 — Tablet dan mobile

1. Horizontal selector.
2. Stacked stage.
3. Province snap rail.
4. Mobile CTA hierarchy.
5. Compare A/B.
6. Touch behavior.

### Fase 7 — Motion dan accessibility

1. Region crossfade.
2. Active indicator.
3. Keyboard.
4. Focus management.
5. Live region.
6. Reduced motion.
7. Contrast dan zoom.

### Fase 8 — QA dan polish

1. Data validation.
2. Functional.
3. Responsive.
4. Accessibility.
5. Performance.
6. Sensitivity review.
7. Demo rehearsal.

---

## 36. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit state, data, region mapping, dan aset | 4–7 jam |
| Data composition dan validator | 4–7 jam |
| Desktop regional portrait | 7–12 jam |
| Map, Atlas, Journey, Passport integration | 6–10 jam |
| Compare mode | 4–8 jam |
| Tablet dan mobile | 5–8 jam |
| Motion dan accessibility | 4–7 jam |
| QA, sensitivity review, dan polish | 5–9 jam |

Total realistis:

```
39–68 jam kerja efektif
```

Versi demo recommended:

```
7 region + shared state + CTA Map + province rail + Passport snapshot + mobile core
24–38 jam
```

MVP minimum:

```
7 region selector + regional profile + apply to Map + responsive dasar
16–24 jam
```

---

## 37. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti grid region biasa | Generik | Satu active regional portrait |
| Membuat Map kedua | Berat dan duplikatif | Gunakan abstraction/constellation |
| Region IDs tidak konsisten | State dan count salah | Canonical union + validator |
| Provinsi terduplikasi/hilang | Cakupan tidak valid | Coverage test total 38 |
| Stereotip regional | Risiko budaya | Copy review dan multi-signal framing |
| Popularitas mendominasi | Provinsi lain tidak terlihat | Regional diversity ranking |
| Count palsu | Kredibilitas turun | Derived data atau sembunyikan |
| Compare terlalu padat | UX membingungkan | Maksimal dua region dan 5–7 dimensi |
| Regional color terlalu ramai | Brand melemah | Accent maksimal 15% |
| State berubah tiba-tiba | User kehilangan kontrol | Sync guard setelah manual interaction |
| Aset region tidak tersedia | Visual timpang | Reuse province assets + fallback |
| Payload terlalu besar | Loading lambat | Summary selectors dan lazy loading |
| CTA Route Planner rusak | Demo gagal | Fallback ke Map/Atlas |

---

## 38. Strategi Demo Juri

Flow 60–90 detik:

```
1. Masuk dari Recommended Journey dengan Jalur Rempah aktif.
2. Regional Explorer otomatis membuka Maluku.
3. Tunjukkan 2 provinsi, signals Rempah–Sejarah–Kepulauan, dan Passport snapshot.
4. Klik Bandingkan dengan Sulawesi.
5. Jelaskan hubungan maritim tanpa menyebut region terbaik.
6. Tutup compare.
7. Pilih Kalimantan untuk menunjukkan Alam + Masa Depan/IKN.
8. Klik Jelajahi Kalimantan di Peta.
9. Map meredupkan wilayah lain sambil mempertahankan active mode/layer.
10. Pilih Kalimantan Timur dan buka Summary singkat.
11. Kembali ke Regional Explorer atau lanjut ke Passport Progress.
```

Nilai yang terlihat:

- Shared state nyata.
- Cakupan nasional terstruktur.
- Heritage dan Digital City terhubung.
- Compare explainable.
- Integrasi Map, Atlas, Journey, dan Passport.
- UX responsif dan tidak bergantung API.

### 38.1 Demo fallback

Jika compare belum stabil:

```
Maluku → apply to Map → pilih Kalimantan → apply to Map → Passport Progress
```

Jangan mendemokan fitur setengah jadi.

---

## 39. Checklist Handoff

### Desain

- [ ]  Desktop active region state.
- [ ]  Tujuh region states.
- [ ]  Tablet/mobile.
- [ ]  Compare open/closed.
- [ ]  Loading/partial/error.
- [ ]  Focus/reduced motion.

### Konten

- [ ]  Promise dan description tujuh region.
- [ ]  Tiga signals per region.
- [ ]  Flagship anchors.
- [ ]  CTA labels.
- [ ]  Alt text dan credits.
- [ ]  Sensitivity review.

### Data

- [ ]  Canonical region IDs.
- [ ]  Province mapping 38/38.
- [ ]  Counts.
- [ ]  Layer/mode mappings.
- [ ]  Journey mappings.
- [ ]  Passport progress selector.
- [ ]  Asset manifest.

### Engineering

- [ ]  State ownership.
- [ ]  Sync selected province/journey.
- [ ]  Apply to Map.
- [ ]  Summary/Atlas actions.
- [ ]  Compare state.
- [ ]  URL policy.
- [ ]  Analytics.
- [ ]  Validators dan tests.

---

## 40. Definition of Done

Regional Explorer selesai jika:

1. Tujuh region canonical tersedia.
2. Seluruh 38 provinsi terpetakan tepat satu kali.
3. Satu active regional portrait menjadi focal point.
4. Selected province dan journey dapat menentukan default region dengan sync guard.
5. Layer, mode, dan search context tidak hilang.
6. CTA menerapkan region ke Interactive Map.
7. Province card membuka Summary/Atlas yang benar.
8. Passport progress berasal dari store existing.
9. Compare maksimal dua region dan tidak menggunakan ranking budaya.
10. Desktop, tablet, dan mobile nyaman.
11. Keyboard, focus, live region, contrast, zoom, dan reduced motion bekerja.
12. Tidak ada Map engine kedua.
13. Tidak memuat full datasets/deep assets.
14. Counts berasal dari data.
15. Tidak ada broken asset/link.
16. Copy telah melewati sensitivity review.
17. Analytics tidak mengirim data sensitif.
18. Lint, type-check, validator, tests, dan production build lulus.
19. Handoff dari Recommended Journey dan menuju Passport terasa natural.
20. Demo dapat diulang tanpa state rusak.

---

## 41. Dokumen Terkait

- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Lengkap — Section 5 Flagship Provinces NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Flagship-Provinces-NUSANTARAYA-1b71c64507ee424fbb85c2b21b1b91f0?pvs=21)
- [Planning Lengkap — Section 6 Explore by Layer NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-6-Explore-by-Layer-NUSANTARAYA-5921ee97a90e49c6a5f7ef0d8da814ca?pvs=21)
- [Planning Lengkap — Section 7 Recommended Journey / Smart Suggestions NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-7-Recommended-Journey-Smart-Suggestions-NUSANTARAYA-089f6287462940a48452cf4298e6a706?pvs=21)
- [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21)

<aside>
🏆

**Target akhir:** Regional Explorer harus membuat pengguna memahami bahwa NUSANTARAYA bukan sekadar peta 38 provinsi, tetapi sistem eksplorasi nasional yang mampu memperlihatkan perbedaan, keterhubungan, dan perjalanan antarkawasan dengan cara yang premium, berguna, inklusif, dan dapat dipertanggungjawabkan.

</aside>