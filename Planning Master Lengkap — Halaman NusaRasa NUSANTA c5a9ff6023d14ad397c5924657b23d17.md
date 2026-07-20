# Planning Master Lengkap — Halaman NusaRasa NUSANTARAYA

<aside>
🍲

**NUSARASA — THE EDIBLE ARCHIPELAGO**

**Creative Direction:** Culinary Cartography × Contemporary Indonesian Food Editorial × Spice Merchant Ledger × Living Table

**Route utama:** `/rasa`

**Status:** Master planning UI/UX, product flow, content, data, frontend, integration, motion, accessibility, testing, dan quality assurance

**Aturan visual mutlak:** **JANGAN menggunakan navy, dark navy, blue-black, gradient navy, shadow navy, tombol navy, atau focus ring navy di seluruh halaman NusaRasa.**

</aside>

## 0. Kedudukan Dokumen dan Acuan

Planning ini menerjemahkan visi NusaRasa pada [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21) menjadi rancangan halaman `/rasa` yang production-ready. Bahasa visualnya harus satu keluarga dengan kualitas editorial, asimetris, image-led, dan art-directed pada [Planning Master Lengkap — Halaman Nusa Archive NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-Nusa-Archive-NUSANTARAYA-6c687c37cd3f4ca287505b98c5caf92a?pvs=21), Nusa Route, dan pengalaman premium Explore—tanpa menyalin struktur layout halaman-halaman tersebut.

**Urutan prioritas implementasi:**

1. Keakuratan asal, konteks, bahan, dan cerita kuliner.
2. Discovery rasa yang cepat, menyenangkan, dan tidak membingungkan.
3. Food photography dan art direction yang kuat.
4. Flow lintas Nusa Map, Province Atlas, Archive, Jalur Rempah, Route, Passport, dan RANI.
5. Responsiveness, accessibility, performance, bilingual, dan fallback.
6. Motion serta polish visual.

---

## 1. Ringkasan Eksekutif

NusaRasa adalah atlas kuliner interaktif yang membantu pengguna menemukan makanan Indonesia melalui **rasa, daerah, bahan, teknik, cerita, rempah, dan perjalanan**. Halaman ini bukan daftar resep, marketplace, direktori restoran, atau grid foto makanan generik. Pengalaman harus terasa seperti membuka atlas rasa Indonesia yang hidup: pengguna memilih jejak rasa, melihat lanskap kuliner, membuka dossier hidangan, membandingkan dua makanan, mengikuti jalur rempah, menyimpan tasting trail, lalu melanjutkan ke provinsi, rute perjalanan, Passport, atau RANI.

### North Star Experience

> Dalam 10 detik pengguna memahami bahwa NusaRasa adalah atlas kuliner Indonesia. Dalam 30 detik pengguna menemukan hidangan yang menggugah rasa ingin tahu. Dalam 2–3 menit pengguna memahami asal dan konteksnya, membandingkan atau mengikuti cerita rasa, lalu mengambil tindakan nyata tanpa jalan buntu.
> 

### Nilai utama

- **Discover:** menemukan hidangan meski belum tahu namanya.
- **Understand:** memahami rasa, asal, bahan, konteks, dan cerita.
- **Compare:** membandingkan tanpa menyederhanakan budaya menjadi kompetisi dangkal.
- **Trace:** melihat hubungan bahan, rempah, pelabuhan, wilayah, dan sejarah.
- **Taste the journey:** mengubah penemuan kuliner menjadi rute perjalanan.
- **Remember:** menyimpan kuliner dan progres eksplorasi secara eksplisit.

---

## 2. Sasaran Produk, KPI, dan Success Signals

### 2.1 Sasaran

1. Menjadikan keragaman kuliner Indonesia mudah dijelajahi berdasarkan rasa dan konteks, bukan hanya nama daerah.
2. Menampilkan minimal 60 hidangan yang mewakili tujuh wilayah dan delapan provinsi flagship.
3. Menjelaskan asal dan hubungan budaya secara hati-hati, tanpa klaim tunggal yang tidak bersumber.
4. Menciptakan utility nyata melalui tasting trail, handoff ke Route Planner, Province Atlas, dan RANI.
5. Menjadi salah satu wow moment visual utama dalam demo kompetisi.

### 2.2 KPI

| Area | Metrik | Target MVP |
| --- | --- | --- |
| Discovery | Waktu menemukan hidangan relevan | ≤ 30 detik |
| Engagement | Hidangan dibuka per sesi NusaRasa | ≥ 3 |
| Depth | Pengguna membuka cerita/bahan/rempah | ≥ 35% |
| Comparison | Pengguna mencoba Food Battle | ≥ 20% |
| Cross-navigation | Handoff ke Province/Route/Map/Spice | ≥ 25% |
| Save | Hidangan atau tasting trail disimpan | ≥ 15% |
| Reliability | Discovery tetap bekerja tanpa API | 100% |
| Performance | LCP | &lt; 2,5 detik |
| Accessibility | Lighthouse Accessibility | ≥ 90 |

---

## 3. Persona dan Jobs to Be Done

### Explorer

“Bantu saya menemukan makanan yang belum pernah saya kenal melalui visual dan rasa.”

### Turis lokal

“Bantu saya menentukan apa yang patut dicoba dan memasukkannya ke perjalanan.”

### Turis mancanegara

“Bantu saya memahami rasa, bahan, tingkat kepedasan, konteks makan, dan etika dasar.”

### Pelajar

“Bantu saya memahami hubungan kuliner dengan geografi, sejarah, rempah, dan budaya.”

### Pecinta kuliner

“Bantu saya membandingkan hidangan, menemukan hidden gems, dan membuat daftar jelajah rasa.”

### Juri

“Tunjukkan pengalaman kuliner yang benar-benar interaktif, bersumber, unik, dan terintegrasi dengan produk.”

---

## 4. Prinsip Produk Non-Negotiable

1. **Food is culture, not content decoration.** Foto menggugah, tetapi konteks tetap utama.
2. **Taste before taxonomy.** Pengguna boleh mulai dari sensasi rasa, bukan dipaksa memahami kategori data.
3. **One canonical dish source.** Card, map, battle, province page, RANI, dan Route memakai ID hidangan yang sama.
4. **No dead ends.** Setiap hidangan memiliki minimal satu jalur lanjut valid.
5. **No fake precision.** Jangan menampilkan skor pedas, harga, popularitas, atau ranking nasional palsu.
6. **Comparison without declaring a winner.** Food Battle memperlihatkan perbedaan, bukan menentukan makanan “terbaik”.
7. **Regional nuance.** Satu hidangan dapat memiliki variasi, komunitas, atau hubungan lintas daerah.
8. **Progressive disclosure.** Card menggugah; detail menjelaskan.
9. **Local-first reliability.** Search, filter, battle, dan cerita inti tetap berfungsi tanpa AI.
10. **No navy.** Warna gelap utama adalah espresso, cacao, atau warm charcoal.
11. **Accessible by design.** Seluruh pengalaman tetap utuh tanpa hover, audio, atau animasi.

### Non-goals MVP

- Resep langkah demi langkah lengkap.
- Pemesanan restoran, delivery, marketplace, atau pembayaran.
- Klaim autentisitas restoran.
- Informasi harga atau ketersediaan real-time.
- Ranking “kuliner terbaik Indonesia”.
- Upload publik langsung tayang.
- Peta navigasi real-time kedua.
- AI sebagai satu-satunya recommendation engine.

---

## 5. Creative Direction Final

### Nama konsep

**THE EDIBLE ARCHIPELAGO**

### Formula visual

Contemporary Indonesian Food Editorial  

× Culinary Cartography  

× Spice Merchant Ledger  

× Tactile Dining Table  

× Museum-grade Ingredient Study

### Karakter visual

- Hangat, tactile, sensual, dan premium.
- Image-led dengan crop makanan yang berani dan terarah.
- Asimetris, tetapi alur baca tetap sangat jelas.
- Menggunakan label rasa, catatan bahan, nomor atlas, garis peta, dan anotasi editorial.
- Terasa seperti buku kuliner kolektor dan meja pencicipan kontemporer—bukan aplikasi delivery.
- Setiap section memiliki komposisi berbeda agar ritme halaman tidak monoton.

### Signature visual

**Flavor Constellation:** jaringan titik rasa, bahan, dan wilayah yang menghubungkan hidangan secara visual. Ia bukan chart ilmiah palsu dan bukan peta geografis kedua; fungsinya sebagai sistem navigasi tematik yang dapat dijelaskan.

### Hal yang dilarang

- Hero center dengan search bar besar dan blob gradient.
- Grid tiga kolom identik dari atas sampai bawah.
- Card putih rounded 24 px untuk semua isi.
- Layout marketplace, menu restoran, atau delivery app.
- Background hitam/navy dan foto makanan terlalu gelap.
- Glassmorphism, neon glow, 3D tilt, confetti, dan infinite pulse.
- Ornamen batik/rempah ditempel tanpa fungsi.
- Semua filter menjadi pill warna-warni.
- Food Battle seperti game voting yang merendahkan konteks.
- Pseudo-statistik seperti “98% cocok untukmu”.

---

## 6. Palet Lokal NusaRasa — Tanpa Navy

Gunakan semantic token lokal; jangan mengubah token global halaman lain.

```css
--rasa-canvas: #F6EBDD;
--rasa-paper: #FFF9F0;
--rasa-paper-deep: #E8D7BF;
--rasa-ink: #2A1E17;
--rasa-cacao: #3B2921;
--rasa-muted: #78685C;
--rasa-line: #D2BFA8;
--rasa-chili: #A83E2E;
--rasa-terracotta: #C26345;
--rasa-saffron: #D2A12D;
--rasa-tamarind: #8A5A32;
--rasa-leaf: #667455;
--rasa-pandan: #47735F;
--rasa-coconut: #F4E7CF;
--rasa-plum: #7A5666;
--rasa-sea: #3F756E;
--rasa-success: #557059;
--rasa-error: #973B30;
```

### Aturan komposisi warna

- 65–75% parchment, ivory, coconut, dan paper.
- 15–20% espresso/cacao untuk teks, garis, dan kontrol utama.
- 8–12% satu accent aktif: chili, saffron, pandan, sea, atau plum.
- Aksen rasa bukan kode universal ilmiah; selalu sertai label/ikon/tekstur.
- Primary CTA dapat memakai saffron dengan teks espresso, atau espresso dengan teks ivory.
- Focus ring saffron/chili 2–3 px dengan kontras cukup.
- **Tidak boleh ada navy dalam background, teks, border, shadow, focus, icon, gradient, atau state.**

---

## 7. Tipografi, Grid, Spacing, dan Material

### Tipografi

- Display/editorial: Playfair Display, Cormorant Garamond, atau serif existing.
- Body/UI: Inter atau sans existing.
- Hero title: 68–96 px desktop; 48–68 px tablet; 40–52 px mobile.
- H2: 46–64 px desktop; 34–44 px mobile.
- Dish title focal: 52–76 px desktop.
- Body: 16–18 px; minimum 15 px mobile.
- Catalog label: sans 11–13 px, uppercase ringan, tracking 0,08–0,12 em.
- Panjang baris body 55–75 karakter.

### Grid

- Desktop: 12 kolom, max-width mengikuti Route/Explore, target 1280–1440 px.
- Gutter desktop 32–48 px; tablet 24–32 px; mobile 20–24 px.
- Komposisi utama: 7/5, 8/4, 5/7, dan sesekali 3/6/3.
- Hindari 6/6 berulang di seluruh halaman.

### Spacing

Gunakan 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section utama 96–144 px desktop dan 64–88 px mobile.

### Material

- Radius utama 8–16 px; frame hero tertentu dapat 20 px.
- Gunakan divider, crop, offset paper, caption rail, dan whitespace sebelum border/shadow.
- Shadow tipis, hangat, dan tidak biru.
- Grain 2–3% maksimal.
- Jangan memakai border pada setiap elemen.

---

## 8. Arsitektur Informasi Halaman

1. **Rasa Threshold** — Hero editorial.
2. **Taste Compass** — Search, mode, dan flavor controls.
3. **Culinary Cartography** — Atlas/peta rasa nasional.
4. **Dish of the Moment** — Dossier hidangan unggulan.
5. **Flavor Atlas** — Discovery collection dan hasil eksplorasi.
6. **Seven Taste Trails** — Jelajah tujuh wilayah.
7. **Food Story Theatre** — Cerita kuliner utama.
8. **Food Battle Table** — Perbandingan dua hidangan.
9. **Spice Ledger** — Jalur rempah kuliner.
10. **Hidden Table** — Hidden food gems.
11. **Build a Tasting Trail** — Susun jalur rasa personal.
12. **Dish Detail Experience** — Quick view dan route detail.
13. **Source & Food Safety Desk** — Sumber, alergen, status data.
14. **Continue Across NUSANTARAYA** — Handoff lintas fitur.
15. **Personal Tasting Shelf** — Saved/recently viewed.
16. **Final Editorial Handoff** — Penutup.

---

# 9. Rancangan Detail Tiap Section

## Section 1 — Rasa Threshold / Hero Editorial

### Tujuan

Dalam satu viewport, memperkenalkan NusaRasa sebagai atlas kuliner nasional yang hidup—bukan katalog resep.

### Copy direction

- Eyebrow: **NusaRasa · Atlas Kuliner Nusantara**
- Heading: **“Indonesia, dibaca melalui rasa.”**
- Supporting copy: “Jelajahi hidangan, rempah, bahan, dan cerita dari berbagai wilayah—lalu ubah rasa ingin tahumu menjadi perjalanan.”
- Primary CTA: **Mulai Menjelajah Rasa**
- Secondary CTA: **Buka Peta Kuliner**
- Trust line: **60+ hidangan · 7 wilayah · Cerita dan sumber terkurasi**—semua angka derived dari data.

### Layout desktop

- Kiri 5 kolom: index `RASA / 01`, heading, copy, CTA, trust line.
- Kanan 7 kolom: **Culinary Still-Life Atlas** berisi satu hero dish crop, satu ingredient macro, satu archival spice illustration, dan caption rail.
- Foto utama boleh keluar sedikit dari grid, tetapi tidak menutupi heading.
- Satu garis tipis dari caption bahan menuju hero dish untuk membangun “ingredient annotation”.
- Nomor atlas dan province label ditempatkan seperti catatan editorial, bukan badge melayang.

### Mobile

Heading → copy → CTA → satu hero crop 4:5 → ingredient caption → stats ringkas. Secondary collage dihapus pada layar sempit.

### Motion

- Heading fade-up 12 px.
- Hero image reveal dengan clip sederhana.
- Ingredient annotation draw satu kali.
- Tidak ada floating animation kontinu.
- Reduced motion: statis/fade ≤120 ms.

### Acceptance

- Tujuan halaman dipahami dalam 10 detik.
- LCP memakai aset nyata, aspect ratio stabil, focal point jelas.
- Tidak ada blok dekoratif kosong.

---

## Section 2 — Taste Compass / Discovery Controls

### Konsep

Meja pencicipan digital yang membantu pengguna mulai dari nama, daerah, rasa, bahan, atau konteks makan.

### Komponen

1. Search: “Cari hidangan, daerah, bahan, atau rempah…”
2. Mode: Explore / Tourist / Learn.
3. Flavor filters: Pedas, Gurih, Manis, Asam, Rempah kuat.
4. Context filters: Laut, Tradisional, Modern, Vegetarian-friendly bila data valid.
5. Region/province filter.
6. Dish type: makanan utama, kudapan, minuman, sambal/pendamping.
7. Dietary/allergen filter hanya jika dataset tervalidasi.
8. Sort: Relevansi, Nama, Terbaru diperbarui.
9. Active context summary, result count, dan Reset.

### UX rules

- Search mendukung alias, ejaan, province, bahan, rasa, dan keyword terkurasi.
- Debounce 150–250 ms untuk data lokal.
- Query/filter tersinkron ke URL melalui allowlist.
- `replace` untuk filter; `push` untuk detail canonical.
- Query kosong tetap menampilkan discovery terkurasi.
- Zero-result menawarkan hapus filter, rasa terdekat, wilayah lain, atau Tanya RANI.
- Filter “vegetarian”, “halal”, “bebas kacang”, dan alergen tidak boleh ditebak.

### Visual

- Search berada pada garis ledger panjang, tidak dalam kotak hero raksasa.
- Flavor selector berupa **Taste Swatches** dengan ikon/label dan tekstur mikro—bukan sekadar pill.
- Filter lanjutan masuk disclosure.
- Active filters menyerupai label meja pencicipan, bukan chips dashboard.

### Accessibility

Combobox/search berlabel, clear button, Escape behavior, live result count, dan focus tetap stabil saat hasil berubah.

---

## Section 3 — Culinary Cartography / Peta Rasa Nasional

### Tujuan

Menunjukkan sebaran hidangan tanpa menduplikasi mesin Nusa Map.

### Bentuk visual

- Gunakan siluet Indonesia yang ringan atau schematic archipelago strips.
- Peta menampilkan **culinary clusters**, bukan puluhan pin yang saling menutupi.
- Tujuh region memiliki anchor; active region membuka **Flavor Dossier**.
- Legend menjelaskan layer: hidangan, rempah, seafood, fermentasi, kudapan, minuman.
- Peta bersifat editorial discovery, bukan navigasi geografis real-time.

### Layout desktop

- 8 kolom: atlas canvas.
- 4 kolom: active Flavor Dossier berisi region promise, 3–5 signature dishes, flavor signals, dan CTA.
- Dossier tidak menjadi card outline besar; gunakan paper panel dengan accent edge.

### Interaction

- Hover menyorot cluster; click/keyboard mengaktifkan region.
- Search/filter dari Section 2 memperbarui hasil dan count pada atlas.
- Klik hidangan membuka Quick View.
- CTA “Jelajahi wilayah ini” menerapkan filter dan scroll ke Flavor Atlas.
- CTA “Buka di Nusa Map” mengirim region/layer `kuliner`.

### Mobile

Region index 01–07 → active dossier → mini schematic map → dish list. Tidak ada gesture drag wajib.

### Guardrail

- Jangan memakai ranking wilayah.
- Jangan membuat ukuran cluster sebagai klaim popularitas bila hanya mewakili kelengkapan dataset.
- Jika coverage parsial, tampilkan disclosure.

---

## Section 4 — Dish of the Moment / Featured Culinary Dossier

### Tujuan

Menciptakan focal storytelling dan kualitas editorial setara majalah kuliner terbaik.

### Layout

Komposisi 7/5 asimetris:

- 7 kolom: hero food photography dengan satu ingredient macro inset.
- 5 kolom: dossier berisi nomor atlas, nama, asal, flavor notes, cerita singkat, source status, dan CTA.
- Dossier overlap 32–48 px pada desktop; stacked pada mobile.

### Isi

- Nama hidangan dan alias.
- Province/community context.
- One-line essence.
- Flavor notes maksimal 4.
- Key ingredients maksimal 5.
- Context: kapan/di mana biasa ditemui, hanya jika bersumber.
- “Mengapa dipilih” berbasis editorial reason code.
- CTA: **Buka Cerita Lengkap**, **Lihat di Provinsi**, **Simpan Rasa**.

### Behavior

Pilihan deterministik berdasarkan active mode, region, filters, dan history. Jangan mengganti otomatis ketika sedang dibaca.

### Motion

Image crossfade 180–240 ms; dossier translate 12 px; ingredient note fade. Tidak ada autoplay slideshow.

---

## Section 5 — Flavor Atlas / Discovery Collection

### Tujuan

Menjadi area kerja utama untuk menemukan hidangan, tetapi tetap art-directed.

### View

1. **Editorial Feast** — default Explore/Tourist.
2. **Compact Culinary Index** — Learn mode.

### Editorial Feast desktop

- Satu featured dish 6 kolom.
- Dua standard dishes stacked 3 kolom.
- Tiga compact catalog rows.
- Setelah setiap 6–8 item, sisipkan satu contextual ingredient note atau regional transition—bukan iklan palsu.
- DOM order tetap linear dan sama dengan reading order.

### Card anatomy

- Image ratio stabil dan focal point.
- Atlas number.
- Nama hidangan.
- Asal dan kategori.
- Flavor labels.
- One-line context.
- Source/allergen status bila tersedia.
- Quick View, Detail, Save.

### UX

- Card tidak seluruhnya clickable bila berisi beberapa action.
- Hover hanya enhancement: scale image maksimal 1.02 dan underline reveal.
- Load More/pagination lebih baik daripada infinite scroll.
- Back dari detail memulihkan query, filter, view, dan scroll.

### States

- Skeleton mengikuti komposisi final.
- Broken image memakai art-directed ingredient/category fallback.
- Partial item tetap menampilkan title, origin, flavor, dan trust status yang valid.
- Empty result memberi recovery nyata.

---

## Section 6 — Seven Taste Trails / Jelajah Tujuh Wilayah

### Tujuan

Memperlihatkan karakter wilayah tanpa mereduksinya menjadi stereotip.

### Tujuh region

Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, Papua.

### Visual

- Vertical region index 01–07 di kiri.
- Active **Regional Table Portrait** di tengah: satu foto utama + dua detail bahan/tekstur.
- Right ledger: province coverage, 3–5 dishes, available flavor signals, dan source completeness.
- Accent region hanya 8–12% area.

### CTA

- **Jelajahi rasa wilayah** → apply filter.
- **Lihat di Peta** → `/explore?region=...&layer=kuliner`.
- **Buat perjalanan kuliner** → `/routes?source=nusarasa&region=...&interests=kuliner` tanpa auto-submit.
- **Buka provinsi flagship** → Province Atlas.

### Copy guardrail

Gunakan “salah satu pintu masuk”, “menampilkan keragaman”, dan “mencakup”. Hindari “rasa Sumatera selalu…” atau generalisasi tunggal.

---

## Section 7 — Food Story Theatre

### Tujuan

Membuat pengguna mengingat manusia, tempat, dan perjalanan di balik hidangan.

### Bentuk

- Satu story utama besar seperti editorial theatre.
- Maksimal tiga story alternatif sebagai chapter strips dengan ukuran tidak seragam.
- Story utama memiliki 3–5 bab: Asal/Konteks → Bahan → Teknik → Makna/Perubahan → Jejak hari ini.

### Contoh cerita

- “Aku, Rendang: Waktu, Rempah, dan Perjalanan Minangkabau.”
- “Papeda dan Hutan Sagu.”
- “Gudeg: Kesabaran dari Dapur Yogyakarta.”
- “Coto Makassar dan Kota Pelabuhan.”
- “Pala Banda: Bahan Kecil yang Mengubah Dunia.”

### Layout

- Image stage 7 kolom.
- Story chapter rail 5 kolom.
- Active chapter memperbarui caption/media, bukan melakukan full remount.
- Progress berupa numbered chapter line, bukan progress bar aplikasi generik.

### Integrasi

Story dapat menuju Archive, Jalur Rempah, Province Atlas, atau RANI menggunakan canonical IDs.

---

## Section 8 — Food Battle Table

### Tujuan

Membandingkan dua hidangan secara edukatif, menyenangkan, dan hormat.

### Prinsip

**Tidak ada pemenang universal.** Nama “Battle” adalah framing interaktif; hasil akhirnya adalah “dua cerita, dua karakter rasa”.

### Pair awal

- Rendang vs Rawon.
- Papeda vs Kapurung.
- Pempek vs Tekwan.
- Gudeg vs Ayam Betutu.
- Mie Aceh vs Coto Makassar.

### Layout desktop

Bentuk **shared tasting table**, bukan dua card VS:

- Kiri: Dish A portrait.
- Tengah: comparison spine dengan dimensi.
- Kanan: Dish B portrait.
- Ingredient samples/caption menghubungkan kedua sisi.

### Dimensi valid

- Asal dan konteks.
- Flavor notes.
- Bahan utama.
- Teknik umum.
- Tekstur.
- Cara penyajian.
- Cerita atau fungsi sosial.

Semua field harus sourced; nilai kosong diberi “belum tersedia”, bukan ditebak.

### Interaction

- Pilih pasangan curated atau dua hidangan compatible.
- Swap side tidak mengubah makna.
- “Mana yang cocok untuk situasimu?” memakai rule-based explanation, bukan skor palsu.
- CTA: Detail A, Detail B, Tambahkan keduanya ke Tasting Trail, Tanya RANI.

### Mobile

Dish A → comparison dimension → Dish B, dengan sticky mini selector opsional. Tidak ada horizontal page overflow.

### Motion

Table reveal, ingredient line draw, dan crossfade saat pasangan berubah. Tidak ada efek benturan, api, atau confetti.

---

## Section 9 — Spice Ledger / Jalur Rempah Kuliner

### Tujuan

Menghubungkan rasa dengan sejarah, perdagangan, pelabuhan, bahan, dan Nusa Jalur Rempah.

### Rempah MVP

Pala, cengkeh, lada, kayu manis, kemiri, kunyit, serai, dan asam—hanya jika dataset/sumber siap.

### Layout

- Kiri: illustrated spice cabinet/ledger.
- Tengah: active spice specimen dengan macro image/illustration.
- Kanan: timeline/route chapters dan dishes related.
- Gunakan chapter route schematic, bukan peta sejarah presisi palsu.

### Isi active spice

- Nama lokal/umum.
- Daerah/jejak terkait.
- Flavor contribution.
- Related dishes.
- Historical note yang bersumber.
- Source status.

### CTA

- **Ikuti Jalur Rempah** → fitur Jalur Rempah dengan spice ID.
- **Temukan hidangan terkait** → filter Flavor Atlas.
- **Buat rute Maluku/rempah** → Route Planner prefill.
- **Buka arsip terkait** → Nusa Archive.

---

## Section 10 — Hidden Table / Hidden Food Gems

### Tujuan

Memberi panggung untuk kuliner kurang dikenal tanpa mendorong overtourism atau klaim “rahasia”.

### Terminologi

Gunakan “Kurang dikenal secara luas”, “Pilihan lokal”, atau “Di luar daftar populer”. Hindari “belum tersentuh” dan “rahasia lokal”.

### Komposisi

- Satu large portrait item.
- Dua vertical notes.
- Ordered list 4–6 item berikutnya.
- Bukan carousel autoplay dan bukan grid enam card.

### Data minimum

Origin, context, flavor, availability disclosure, source, dan one valid next action.

### Tourist safety

Jangan menjanjikan selalu tersedia. Jika bersifat musiman/upacara, jelaskan dan jangan mendorong akses yang tidak pantas.

---

## Section 11 — Build a Tasting Trail / Susun Jalur Rasa

### Tujuan

Mengubah discovery menjadi utility perjalanan yang konkret.

### Input ringan

- Region/province.
- Durasi 1, 3, 5, atau 7 hari.
- Flavor interests maksimal 3.
- Dietary/allergen needs hanya jika data mendukung.
- Pace: Santai, Seimbang, Eksploratif.
- Saved dishes optional.

### Output preview

- 3–7 dishes/food experiences.
- Province/city clusters.
- Day grouping sederhana.
- Cultural context/etiquette.
- Availability disclosure.
- CTA ke Route Planner untuk itinerary penuh.

### UX

Bukan form panjang kedua. Gunakan composer compact 7/5: pilihan di kiri, live tasting trail ticket di kanan. Tidak auto-submit ke Route Planner.

### Save behavior

- Simpan sebagai `savedTastingTrail`, bukan route completed.
- Passport dapat mencatat `NusaRasa Hunter` progress hanya berdasarkan kriteria eksplisit.
- Membuka atau menyimpan satu dish tidak otomatis memberi stempel provinsi.

---

## Section 12 — Dish Detail Experience

Detail memiliki dua tingkat.

### A. Quick View

Desktop drawer 420–520 px; mobile full-screen sheet.

Isi minimum:

- Hero image/fallback.
- Nama, atlas ID, origin, category.
- Summary 80–140 kata.
- Flavor notes.
- Key ingredients.
- Context dan source status.
- Allergen/dietary disclosure jika tervalidasi.
- Related dishes.
- CTA Detail, Province, Save, Add to Trail.

### B. Canonical Detail Route

Rekomendasi: `/rasa/[slug]`.

Urutan:

1. Hero editorial.
2. Identity ledger: nama, alias, provinsi, komunitas, kategori.
3. Rasa dan tekstur.
4. Bahan dan teknik umum.
5. Asal, cerita, dan perubahan.
6. Context of serving/eating.
7. Variasi regional—bila tervalidasi.
8. Ingredient gallery.
9. Allergy/dietary disclosure.
10. Sources dan updated date.
11. Related dish/story/spice.
12. Province/Route/Map/Passport/RANI handoff.
13. Suggest correction.

### Mode adaptation

- Explore: visual, story, related discoveries.
- Tourist: taste expectation, ingredients, etiquette, availability, allergy caution.
- Learn: source, glossary, historical/contextual notes, related materials.

---

## Section 13 — Source & Food Safety Desk

### Tujuan

Membuat kredibilitas dan kehati-hatian terlihat tanpa mengubah halaman menjadi dokumen medis.

### Isi

- Metodologi kurasi.
- Source types.
- Updated/reviewed status.
- Perbedaan “ingredient commonly used” dan “guaranteed ingredient”.
- Allergen disclosure policy.
- Halal/vegetarian policy: hanya klaim jika sumber/produk spesifik mendukung.
- Glosarium teknik dan bahan.
- Correction link.

### Guardrail penting

NusaRasa bukan pengganti saran medis. Variasi resep dapat mengubah bahan dan alergen; Tourist Mode wajib memakai bahasa “konfirmasi kepada penyaji”.

### Visual

Bibliography/ingredient ledger dengan ordered references dan margin notes; bukan card per sumber.

---

## Section 14 — Continue Across NUSANTARAYA

Gunakan constellation/radial editorial handoff, bukan grid feature cards.

| Tujuan | Context dikirim | Behavior |
| --- | --- | --- |
| Nusa Map | dishId, provinceId, layer=kuliner | Fokus wilayah dan summary relevan |
| Province Atlas | provinceId, dishId | Buka chapter NusaRasa provinsi |
| Nusa Archive | ingredient/spice/tradition refs | Buka item budaya terkait |
| Jalur Rempah | spiceId, port/region refs | Buka chapter historis terkait |
| Nusa Route | region/provinceIds, interests=kuliner, savedDishIds | Prefill, tidak auto-submit |
| Passport | savedDishId/trailId, status=saved | Simpan eksplisit; bukan completed |
| RANI | canonical dish IDs, locale, mode | Rekomendasi dari dataset/fallback jujur |
| Nusa Future | creative-economy/UMKM refs | Hubungkan tradisi kuliner dan inovasi |
| Events | dish/region/event refs | Tampilkan event relevan bila tanggal valid |

### Aturan

- Jangan mengirim DOM text.
- Handoff memakai typed payload dan canonical IDs.
- CTA disembunyikan atau diberi fallback jika target belum tersedia.
- Browser Back memulihkan filter, item, battle pair, dan scroll.

---

## Section 15 — Personal Tasting Shelf

### Isi

- Recently viewed.
- Saved dishes.
- Saved battle pair.
- Saved tasting trails.
- Continue story.
- Passport culinary progress bila schema mendukung.

### Behavior

- Local-first MVP, versioned, hydration-safe.
- Save idempotent.
- Clear history tersedia.
- Save/unsave memberi feedback visual dan screen-reader.
- Tidak ada autoplay carousel.

### Visual

Seperti rak bahan dan catatan pencicipan: satu saved trail dominan, item compact di samping, label tanggal/context secukupnya.

---

## Section 16 — Final Editorial Handoff

Copy:

**“Setiap rasa menunjuk ke sebuah tempat. Pilih satu hidangan, lalu ikuti jejaknya melintasi Nusantara.”**

CTA utama: **Buat Perjalanan Kuliner**  

CTA sekunder: **Buka Nusa Map**

Gunakan satu image crop kuat, divider seperti garis meja, dan flavor constellation kecil. Jangan membuat giant CTA card.

---

## 10. Flow Pengguna Utama

### 10.1 Explorer

Home → NusaRasa → Taste Compass → Culinary Cartography → Dish Quick View → Food Story → Save/Map.

### 10.2 Search-led

NusaRasa → search hidangan/bahan → filter → Flavor Atlas → Quick View → Detail → related dish → kembali dengan state utuh.

### 10.3 Tourist

Tourist Mode → pilih region → flavor/dietary context → Dish Detail → Province Atlas → Tasting Trail → Route Planner.

### 10.4 Learn

Learn Mode → Spice Ledger/Food Story → Dish Detail → Source Desk → Archive/Jalur Rempah.

### 10.5 Food Battle

NusaRasa → pilih curated pair → comparison → buka dua detail → simpan keduanya → Tasting Trail.

### 10.6 Province entry

Province Atlas → NusaRasa province section → `/rasa?province=...` → active regional dossier → dish → kembali ke province.

### 10.7 RANI

RANI → “Apa makanan gurih di Sulawesi?” → NusaRasa prefilled → dish detail → add to tasting trail → Route.

### 10.8 Demo juri 90 detik

Hero → pilih “Rempah kuat” → atlas fokus Maluku/Sumatera → buka featured dish → Food Battle → Spice Ledger → buat tasting trail → prefill Route Planner → simpan ke Passport.

---

## 11. Flow Lintas Halaman dan URL Contract

### Route canonical

- Landing: `/rasa`
- Dish detail: `/rasa/[slug]`

### Query proposal

`/rasa?q=papeda&region=papua&flavors=gurih&mode=learn&view=index`

### Handoff proposal

- NusaRasa → Map: `/explore?source=nusarasa&province=...&layer=kuliner`
- NusaRasa → Route: `/routes?source=nusarasa&region=maluku&interests=kuliner&dishIds=...`
- Province → NusaRasa: `/rasa?source=province-atlas&province=di-yogyakarta`
- Archive → NusaRasa: `/rasa?source=archive&spice=pala`

### Rules

- Semua enum dan IDs di-allowlist.
- Invalid query diabaikan tanpa crash.
- Filter/view state memakai `replace`.
- Detail meaningful navigation memakai `push`.
- Back memulihkan state dan scroll.
- URL tidak menyimpan free text sensitif atau data dietary pribadi.

---

## 12. Search, Filter, dan Ranking Deterministik

### Ranking

1. Exact title/alias.
2. Exact ingredient/province/category.
3. Keyword/flavor match.
4. Active mode relevance.
5. Source completeness.
6. Editorial priority.
7. Stable ID tie-break.

### Aturan

- Tidak random.
- Tidak menampilkan skor persentase.
- Normalisasi diakritik/ejaan dan alias terkurasi.
- Search tidak membuat klaim ingredient/dietary dari substring.
- Query analytics dipetakan ke intent/category; jangan kirim raw query.

---

## 13. State Matrix

- **Default:** curated atlas, featured dish, active national view.
- **Searching:** query highlight dan result count.
- **Filtered:** active taste ledger.
- **Region active:** regional dossier sinkron.
- **Battle active:** pair valid dan comparison complete/partial.
- **Trail composing:** draft terjaga.
- **No result:** recovery suggestions.
- **Loading:** stable skeleton.
- **Partial data:** valid fields + disclosure.
- **Error:** retry + local curated fallback.
- **Offline:** canonical local dataset, battle, dan shelf tetap usable.
- **Saved:** `aria-pressed` + idempotent state.
- **Context changed:** prompt ringan; tidak mengganti bacaan otomatis.
- **Broken asset:** culinary fallback composition.
- **Invalid dish URL:** 404 editorial + suggested dishes.
- **Reduced motion:** static composition.

---

## 14. Data Model Canonical

```tsx
type FlavorId =
  | 'pedas'
  | 'gurih'
  | 'manis'
  | 'asam'
  | 'rempah-kuat'
  | 'segar'
  | 'pahit'
  | 'smoky';

type DishCategoryId =
  | 'makanan-utama'
  | 'kudapan'
  | 'minuman'
  | 'sambal-pendamping'
  | 'hidangan-upacara';

type CulinaryDish = {
  id: string;
  slug: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  provinceIds: string[];
  regionIds: string[];
  communityIds?: string[];
  categoryId: DishCategoryId;
  localeContent: {
    id: DishLocale;
    en?: DishLocale;
  };
  aliases: string[];
  flavorIds: FlavorId[];
  ingredientIds: string[];
  spiceIds: string[];
  techniqueIds?: string[];
  textureIds?: string[];
  servingContextIds?: string[];
  dietaryClaims?: VerifiedDietaryClaim[];
  allergenNotes?: VerifiedAllergenNote[];
  media: CulinaryMedia[];
  sourceRefs: string[];
  relatedDishIds: string[];
  relatedStoryIds: string[];
  relatedFeatureRefs: CulinaryFeatureRef[];
  availability?: 'common' | 'seasonal' | 'ceremonial' | 'variable' | 'unknown';
  sensitivity?: CulinarySensitivity;
  updatedAt: string;
  reviewedAt?: string;
};
```

### Validation minimum

- ID dan slug unik.
- Province/region/category/flavor/source valid.
- Published dish memiliki title, summary, origin context, minimal satu source, dan visual/fallback.
- Flavor maksimal 5 dan tidak duplikat.
- Related IDs valid, tidak self-reference.
- Media memiliki alt, dimensions, focal point, credit/license.
- Dietary/allergen claims memiliki source dan scope.
- English content tersedia untuk published bilingual showcase.
- Battle pair hanya memakai dimension data yang tersedia.

### Target MVP

- Minimal 60 hidangan berkualitas.
- Tujuh region terwakili.
- Delapan flagship memiliki kedalaman tertinggi.
- Minimal 10 Food Battle pairs.
- Minimal 8 spices dengan relationship valid.
- Minimal 6 Food Stories.
- Kualitas dan sumber lebih penting daripada mengejar jumlah.

---

## 15. Content Governance dan Cultural Integrity

1. Satu hidangan dapat memiliki variasi dan hubungan lintas wilayah.
2. Hindari klaim “milik satu daerah” bila sejarahnya kompleks.
3. Gunakan istilah lokal dan ejaan yang tepat.
4. Ritual/ceremonial food tidak otomatis dipromosikan sebagai pengalaman turis.
5. Jangan menyebut makanan “aneh”, “ekstrem”, atau “eksotis”.
6. Jangan menjamin halal, vegetarian, bebas alergen, atau tingkat pedas tanpa sumber.
7. Foto harus sesuai hidangan dan dicatat lisensinya.
8. Cerita manusia/komunitas memerlukan konteks dan izin yang layak.
9. Correction masuk moderation queue.
10. Updated/reviewed status terlihat pada deep detail.

---

## 16. Component Architecture Rekomendasi

```
src/components/rasa/
  rasa-hero/
  taste-compass/
  culinary-cartography/
  featured-dish-dossier/
  flavor-atlas/
  regional-taste-trails/
  food-story-theatre/
  food-battle-table/
  spice-ledger/
  hidden-table/
  tasting-trail-composer/
  dish-quick-view/
  source-safety-desk/
  ecosystem-handoff/
  tasting-shelf/

src/data/rasa/
  dishes.ts|json
  flavors.ts
  ingredients.ts
  spices.ts
  battlePairs.ts
  foodStories.ts
  regionalProfiles.ts
  sourceRegistry.ts
  rasaAssetManifest.ts

src/lib/rasa/
  rasaSchema.ts
  searchDishes.ts
  filterDishes.ts
  rankDishes.ts
  buildBattleComparison.ts
  buildTastingTrail.ts
  parseRasaQuery.ts
  resolveDishRelations.ts
  mapDishToViewModel.ts
  validateRasaData.ts

src/types/rasa.ts
src/hooks/useRasaDiscovery.ts
src/hooks/useFoodBattle.ts
src/hooks/useTastingShelf.ts
```

### Engineering rules

- Audit repository sebelum menetapkan path final.
- Reuse container, image, motion, locale, analytics, focus, persistence, province/region registry existing.
- Pisahkan data/schema/ranking dari JSX.
- Jangan membuat data hidangan kedua untuk Province Atlas/RANI.
- Komponen menerima ViewModel, bukan membaca banyak global store.
- Strict TypeScript; hindari `any`.

---

## 17. Frontend Interaction dan State Architecture

### State layers

1. **Canonical data:** dish/ingredient/spice registry.
2. **URL state:** query, region, province, flavors, mode, view, dish quick-view ID.
3. **Local UI state:** active story chapter, battle tab, disclosure.
4. **Persisted user state:** saved dishes, saved trail, recently viewed.
5. **Shared app state:** locale, mode, Passport, active province context.

### Rules

- URL/context mengalahkan local draft.
- State invalid dinormalisasi aman.
- Jangan menyimpan full dish object di localStorage; simpan IDs dan version.
- Quick View tidak membuat history spam.
- Detail route canonical tetap shareable.
- Derived counts tidak disimpan terpisah.

---

## 18. Responsive Blueprint

### Desktop ≥1280 px

- Hero 5/7.
- Taste Compass dapat sticky ringan setelah hero.
- Cartography 8/4.
- Dossier 7/5 dengan overlap terkontrol.
- Flavor Atlas editorial 12 kolom.
- Battle table 5/2/5.
- Quick View 420–520 px.

### Laptop 1024–1279 px

- Heading dan padding diperkecil.
- Pertahankan asimetri tanpa panel sempit.
- Atlas 2–3 kolom berdasarkan content width.
- Battle comparison spine tetap terbaca.

### Tablet 768–1023 px

- Hero stacked.
- Controls wrap/disclosure.
- Peta full width, dossier di bawah.
- Featured Dossier stacked.
- Flavor Atlas dua kolom.
- Food Battle A/B dengan comparison tengah di bawah.

### Mobile ≤767 px

Reading order:

1. Hero copy.
2. Hero image.
3. Search.
4. Mode + flavor controls.
5. Culinary Cartography.
6. Featured Dossier.
7. Flavor Atlas.
8. Regional Trails.
9. Food Story.
10. Food Battle.
11. Spice Ledger.
12. Hidden Table.
13. Tasting Trail.
14. Source/Safety.
15. Shelf.
16. Final handoff.

Rules:

- Gutter 20–24 px.
- Touch target ≥44×44 px.
- Tidak ada horizontal page overflow.
- Filter non-esensial masuk disclosure.
- Peta menjadi region selector + schematic.
- Quick View full-screen.
- Sticky CTA aman dari bottom navigation dan safe area.
- Flavor labels wrap tanpa memotong teks.
- Tidak ada info penting yang hanya muncul saat hover.

### Viewport QA

360×800, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080.

---

## 19. Motion Choreography

### Signature motion

- Hero still-life reveal satu kali.
- Ingredient annotation line draw.
- Flavor Constellation node reveal 40–70 ms.
- Region dossier crossfade 180–240 ms.
- Featured dish image crossfade.
- Story chapter slide 8–12 px.
- Battle comparison line draw satu kali.
- Spice specimen crossfade.
- Quick View slide 220–300 ms.
- CTA arrow shift 3–4 px.

### Batasan

- UI motion 150–300 ms.
- Hanya transform, opacity, dan clip sederhana.
- Tidak ada parallax besar, autoplay, bounce, infinite pulse, 3D tilt, smoke/fire effect.
- Jangan membuat loading palsu.
- Reduced motion menonaktifkan draw, stagger, slide besar, smooth scroll, dan morph.

---

## 20. Accessibility

- Semantic `<main>`, `<section>`, heading hierarchy H1/H2/H3.
- Search memakai form dan label nyata.
- Filters memakai fieldset/legend, checkbox, radio, atau tabs semantics yang benar.
- Map region selector memiliki list/button alternatif.
- Visual constellation/map/lines `aria-hidden`; data tetap semantik.
- Result berupa list; DOM order sama dengan visual order.
- Quick View focus trap, Escape, dan restore focus.
- Save memakai `aria-pressed`.
- Battle comparison memakai heading/table/list yang masuk akal untuk screen reader.
- Live region untuk result/recommendation update.
- Alt image spesifik dan tidak mengulang caption.
- Kontras WCAG AA.
- Focus ring saffron/chili, bukan navy.
- Zoom 200% tetap usable.
- Forced colors menunjukkan selected/active state.
- Drag/scroll memiliki alternatif tombol.
- Sensasi rasa tidak dibedakan oleh warna saja.

---

## 21. Performance, SEO, Security, dan Privacy

### Performance

- Summary data lokal/server-rendered.
- Jangan bundle seluruh deep-detail content ke landing.
- Lazy-load battle, story media, spice ledger, dan below-fold images.
- LCP image optimized; explicit dimensions, sizes, focal point.
- Jangan memuat Leaflet/Mapbox untuk peta editorial bila SVG/schematic cukup.
- Search lokal ideal &lt;50 ms; feedback &lt;100 ms.
- Hindari long task &gt;200 ms.

### SEO

- Canonical `/rasa` dan `/rasa/[slug]`.
- Metadata hidangan, OpenGraph, breadcrumb, dan structured data hanya jika valid.
- Filter URL besar `noindex` bila perlu.
- Sitemap hanya published dishes.
- Jangan memakai Recipe schema jika tidak ada resep/instruksi lengkap.

### Security/privacy

- Allowlist query dan IDs.
- Jangan render raw HTML.
- Sanitasi source URLs.
- Dietary needs tidak dikirim ke analytics sebagai data sensitif.
- AI payload hanya IDs/context minimum.
- Contribution/correction dimoderasi.

---

## 22. Analytics Events

Gunakan adapter existing.

- rasa_page_viewed
- rasa_search_started
- rasa_search_submitted
- rasa_filter_changed
- rasa_zero_result
- rasa_region_selected
- rasa_map_dish_opened
- rasa_dish_quick_viewed
- rasa_dish_opened
- rasa_dish_saved
- rasa_dish_unsaved
- rasa_story_opened
- rasa_story_chapter_changed
- rasa_battle_started
- rasa_battle_pair_changed
- rasa_battle_dish_opened
- rasa_spice_selected
- rasa_spice_route_handoff
- rasa_tasting_trail_started
- rasa_tasting_trail_saved
- rasa_map_handoff
- rasa_atlas_handoff
- rasa_route_handoff
- rasa_rani_opened
- rasa_asset_failed
- rasa_correction_submitted

Properties aman: dishId, categoryId, provinceId, regionId, flavorIds, mode, locale, source, resultCount bucket. Jangan kirim raw query, dietary text, atau correction text.

---

## 23. Error, Empty, Partial, dan Offline Strategy

### Zero result

- Koreksi ejaan.
- Hapus satu filter.
- Tawarkan flavor/region terdekat.
- Buka curated collection.
- Tanya RANI dengan context aman.

### Partial data

Tampilkan data valid dan label “Informasi bahan/konteks belum lengkap”. Jangan menyembunyikan seluruh hidangan.

### Broken asset

Gunakan fallback berlapis: dish image → province culinary image → ingredient illustration → art-directed paper composition.

### Battle data incomplete

Tampilkan hanya dimensi yang valid. Jika kurang dari tiga dimensi, sarankan pair lain.

### Offline

Search, filters, featured, basic battle, saved shelf, dan preset tasting trails tetap bekerja dari data lokal.

### Invalid route/query

Tampilkan 404/recovery editorial; jangan crash atau blank.

---

## 24. Testing Strategy

### Unit/data

- IDs/slugs unik.
- Region/province mapping valid.
- Flavor/category/source valid.
- Published item memiliki source dan asset/fallback.
- Search alias/normalization benar.
- Filter behavior benar.
- Ranking deterministik.
- Battle pair tidak self-reference.
- Dietary/allergen claim tervalidasi.
- URL parser menolak enum invalid.
- Corrupted shelf tidak crash.

### Component

- Search/clear keyboard-friendly.
- Flavor selector state benar.
- Region selector keyboard lengkap.
- Quick View focus trap/restore.
- Save/unsave idempotent.
- Battle pair switching aman.
- Trail composer validation benar.
- Empty/error/fallback pulih.
- Broken image tidak menampilkan icon rusak.

### Integration/E2E

1. Direct entry → featured → dish detail.
2. Search → filter → Quick View → Back restore.
3. Map region → dish → Province Atlas → Back.
4. Tourist Mode → allergy disclosure → Route prefill.
5. Learn Mode → Food Story → Source Desk.
6. Food Battle → open both dishes → save trail.
7. Spice → Jalur Rempah → Back.
8. Save dish → refresh → shelf restored.
9. Offline → local discovery usable.
10. Invalid query/slug → safe recovery.
11. RANI handoff memakai IDs yang benar.
12. Passport save tidak memberi completion palsu.

---

## 25. Visual QA Checklist Wajib

- Tidak ada navy, dark navy, blue-black, gradient navy, shadow navy, atau focus navy.
- Tidak ada overlap/overflow.
- Tidak ada area kosong besar tanpa fungsi.
- Hero food crop tajam, hangat, dan menggugah.
- Foto tidak stretched/pecah dan tidak salah hidangan.
- Heading/body memiliki ruang napas.
- Taste Compass tidak terlihat seperti filter dashboard.
- Cartography tidak meniru map engine kedua.
- Flavor Atlas bukan grid SaaS/marketplace.
- Featured Dossier memiliki focal hierarchy.
- Food Battle bukan dua card generik dengan badge VS.
- Spice Ledger tidak terlihat seperti infografis template.
- Region dan flavor tidak dibedakan oleh warna saja.
- Mobile reading order benar.
- English copy tidak overflow.
- Focus terlihat.
- CTA aman dari bottom navigation.
- Motion tidak menyebabkan CLS.
- Hasil terasa sengaja di-art-direct, bukan generic AI.

---

## 26. Strategi Aset

### Folder prioritas

```
public/assets/culinary/
  dishes/
  ingredients/
  rempah/
  battle/
  stories/
  regions/
  fallbacks/
```

### Asset manifest minimum

Setiap aset memiliki path, width, height, aspect ratio, focal point, alt ID/EN, credit, license, dish/ingredient mapping, dan fallback.

### Foto makanan

- Cahaya hangat/natural; detail tekstur terlihat.
- Hindari background restoran generik yang ramai.
- Sediakan 4:3 untuk card, 4:5 untuk portrait, dan 16:10/3:2 untuk hero bila memungkinkan.
- Jangan menggunakan satu foto untuk hidangan berbeda.

### Illustration

- Rempah dapat memakai botanical illustration konsisten.
- Jangan mencampur lima gaya ilustrasi.
- Ornamen hanya dari ingredients/utensils yang relevan dan tidak stereotip.

---

## 27. Fase Implementasi

### Fase 0 — Audit dan kontrak

- Audit `/rasa`, shared layout, data, design tokens, assets, mode, locale, Passport, Route, Map, Province, RANI.
- Jalankan baseline lint/typecheck/test/build.
- Kunci canonical IDs, schema, URL, dan asset manifest.

### Fase 1 — Discovery core

- Schema/validator.
- Search/filter/ranking/URL.
- Hero, Taste Compass, Cartography, Featured Dossier, Flavor Atlas.

### Fase 2 — Detail dan trust

- Quick View.
- `/rasa/[slug]`.
- Source & Food Safety Desk.
- Related resolver.

### Fase 3 — Signature experiences

- Seven Taste Trails.
- Food Story Theatre.
- Food Battle Table.
- Spice Ledger.
- Hidden Table.

### Fase 4 — Utility dan ecosystem

- Tasting Trail.
- Map, Province, Archive, Spice, Route, Passport, RANI, Events, Future handoff.
- Browser Back/restore.
- Personal Shelf.

### Fase 5 — Polish dan QA

- Motion.
- Responsive refinement.
- Accessibility audit.
- Image/performance optimization.
- Visual QA seluruh viewport.
- Production build dan demo rehearsal.

---

## 28. Prioritas MVP

### P0 — wajib demo

- 60 hidangan tervalidasi.
- Search, flavor, region, province, mode.
- Hero, Cartography, Featured Dossier, Flavor Atlas.
- Minimal 12 deep-detail showcase.
- 5 curated Food Battle pairs.
- 4 spices pada Spice Ledger.
- Map/Province/Route/Passport handoff.
- Offline/local fallback.

### P1 — pembeda kuat

- 10 Food Battle pairs.
- 6 Food Stories.
- Seven Taste Trails.
- Tasting Trail composer.
- Learn/Tourist adaptation.
- Archive/Jalur Rempah/RANI integration.

### P2 — premium

- Rich ingredient media.
- More regional variants.
- Seasonal event links.
- Share tasting trail.
- Contextual RANI explanation.
- Moderated contribution flow.

---

## 29. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Tampilan seperti delivery app | Identitas lemah | Editorial atlas, asymmetric composition, no price/order UI |
| Foto tidak konsisten | Halaman terlihat murah | Asset manifest, crop rules, focal point, fallback |
| Asal kuliner diperdebatkan | Kredibilitas turun | Nuanced language, multi-region refs, sources |
| Alergen/dietary salah | Risiko keselamatan | Verified claims only + confirm-to-server disclosure |
| Food Battle merendahkan | Sensitivitas budaya | No universal winner, compare context |
| Peta terlalu berat | LCP/interaksi buruk | SVG/schematic, cluster, no heavy map engine |
| Grid terasa generik | Visual tidak premium | Editorial Feast composition dan varied rhythm |
| API/RANI gagal | Demo berhenti | Local search, presets, deterministic fallback |
| State lintas halaman rusak | Flow terputus | Typed adapters, canonical IDs, URL restore |
| Mobile terlalu panjang | Fatigue | Progressive disclosure, compact index, strong anchors |
| Navy masuk dari token global | Melanggar arah visual | Local rasa tokens + visual audit otomatis/manual |

---

## 30. Acceptance Criteria

### Product

- Pengguna dapat menemukan, memfilter, membuka, membandingkan, menyimpan, dan melanjutkan eksplorasi.
- Semua state memiliki recovery.
- Tidak ada dead CTA.
- Explore/Tourist/Learn memberi emphasis yang berbeda.

### Data

- Satu canonical dish source.
- Published dishes tervalidasi.
- Source/review status terlihat.
- Tidak ada klaim asal, ingredient, alergen, atau dietary palsu.

### UI/UX

- Image-led, editorial, asimetris, unik, dan tactile.
- Bukan dashboard, marketplace, delivery app, atau grid card generik.
- Tidak menggunakan navy dalam bentuk apa pun.
- Sejalan dengan kualitas Nusa Route, Archive, dan Explore tanpa menduplikasi layout.
- Setiap section memiliki ritme dan focal point berbeda.

### Integration

- Map, Province Atlas, Archive, Jalur Rempah, Route, Passport, RANI, Events, dan Future memakai typed context.
- Back/refresh memulihkan state.
- Save eksplisit dan tidak memberi completion palsu.

### Quality

- Responsive tanpa horizontal overflow.
- WCAG AA dan reduced motion.
- Search cepat.
- Images optimized.
- Validator, lint, typecheck, tests, dan build lulus atau baseline error terdokumentasi.

---

## 31. Definition of Done

- [ ]  Route `/rasa` stabil.
- [ ]  Creative direction **The Edible Archipelago** diterapkan.
- [ ]  Tidak ada navy, dark navy, blue-black, gradient navy, shadow navy, button navy, atau focus navy.
- [ ]  Hero memakai aset nyata/fallback art-directed.
- [ ]  Taste Compass memiliki search, mode, filter, sort, reset, URL state.
- [ ]  Culinary Cartography menampilkan tujuh wilayah tanpa menjadi map engine kedua.
- [ ]  Flavor Atlas tidak berupa grid identik.
- [ ]  Featured Dossier memiliki hierarchy editorial kuat.
- [ ]  Food Story Theatre memiliki chapter yang meaningful.
- [ ]  Food Battle membandingkan tanpa menentukan pemenang universal.
- [ ]  Spice Ledger terhubung ke Jalur Rempah dan dishes.
- [ ]  Hidden Table memakai bahasa etis dan availability disclosure.
- [ ]  Quick View dan deep detail keyboard-friendly.
- [ ]  Source, updated status, dan food-safety disclosure terlihat.
- [ ]  Tasting Trail dapat disimpan dan diprefill ke Route tanpa auto-submit.
- [ ]  Map/Province/Archive/Spice/Route/Passport/RANI handoff aman.
- [ ]  Browser Back, refresh, dan offline fallback masuk akal.
- [ ]  Personal Shelf hydration-safe dan idempotent.
- [ ]  Empty/loading/error/partial/broken-asset state selesai.
- [ ]  Desktop, tablet, mobile, zoom 200%, keyboard, screen reader, reduced motion diuji.
- [ ]  Tidak ada overlap, overflow, broken image, broken link, atau dead CTA.
- [ ]  Visual QA dilakukan untuk semua viewport target.
- [ ]  Production build berhasil.
- [ ]  Demo juri 90 detik dapat diulang tanpa jaringan eksternal.

---

## 32. Demo Path Rekomendasi

1. Buka `/rasa`; tampilkan hero “Indonesia, dibaca melalui rasa.”
2. Pilih flavor **Rempah kuat**.
3. Culinary Cartography menyorot cluster relevan.
4. Buka satu featured dish dari Maluku/Sumatera.
5. Tampilkan Quick View dan source status.
6. Masuk Food Story/Spice Ledger.
7. Buka Food Battle curated.
8. Tambahkan dua hidangan ke Tasting Trail.
9. Kirim context ke Route Planner.
10. Simpan trail ke Passport.
11. Ubah ke English Tourist Mode dan tampilkan ingredient/allergen caution.
12. Tutup dengan Final Editorial Handoff.

---

## 33. Guardrail Terakhir

<aside>
🏆

**NusaRasa harus terasa seperti atlas rasa Indonesia yang dikurasi oleh food editor, cultural researcher, cartographer, photographer, dan product designer terbaik—bukan halaman AI yang menumpuk card makanan.** Setiap foto harus menggugah, setiap label harus jujur, setiap perbandingan harus menghormati konteks, dan setiap interaksi harus membawa pengguna dari rasa menuju tempat, cerita, dan perjalanan.

</aside>