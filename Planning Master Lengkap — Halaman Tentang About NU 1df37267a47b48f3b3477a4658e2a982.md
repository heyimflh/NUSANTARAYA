# Planning Master Lengkap — Halaman Tentang / About NUSANTARAYA

<aside>
🧭

**NUSANTARAYA ABOUT — THE LIVING MANIFESTO OF AN ARCHIPELAGO**

**Creative Direction:** Living Brand Manifesto × Cartographic Editorial × Cultural Field Journal × Product Ecosystem Atlas

**Route utama:** `/about`

**Status:** Master planning UI/UX, content strategy, frontend architecture, ecosystem flow, motion, accessibility, performance, testing, dan quality assurance

**Aturan visual mutlak:** **JANGAN menggunakan navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, tombol navy, teks navy, icon navy, atau focus ring navy di seluruh frontend halaman About.**

</aside>

## 0. Kedudukan Dokumen dan Acuan

Planning ini menerjemahkan identitas, visi, 7 pilar, misi, dan arsitektur ekosistem pada [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21) serta alur produk pada [FLOWCHART NUSANTARAYA WEB](https://app.notion.com/p/FLOWCHART-NUSANTARAYA-WEB-d9e098210a3c82ef846c01b2b673e84f?pvs=21) menjadi rancangan halaman `/about` yang production-ready.

Bahasa desain harus satu keluarga dengan kualitas art direction, responsive craft, dan kedalaman interaksi Nusa Route dan Nusa Explore, serta menjaga standar editorial-asimetris pada [Planning Master Lengkap — Halaman Nusa Archive NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-Nusa-Archive-NUSANTARAYA-6c687c37cd3f4ca287505b98c5caf92a?pvs=21), [Planning Master Lengkap — Halaman NusaRasa NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-NusaRasa-NUSANTARAYA-c5a9ff6023d14ad397c5924657b23d17?pvs=21), dan [Planning Master Lengkap — Halaman Nusa Future NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-Nusa-Future-NUSANTARAYA-965081afe7cc4aa3a9a10d420d1d9a91?pvs=21)—tanpa menyalin struktur layout halaman mana pun.

### Urutan prioritas implementasi

1. Menjelaskan apa, mengapa, untuk siapa, dan bagaimana NUSANTARAYA bekerja dalam waktu singkat.
2. Membuktikan bahwa NUSANTARAYA adalah satu ekosistem produk, bukan kumpulan fitur atau landing page cantik.
3. Membawa pengguna dari narasi brand menuju eksplorasi nyata tanpa dead end.
4. Menampilkan identitas Indonesia secara modern, hormat, dan tidak dekoratif.
5. Menjaga visual unik, editorial, asimetris, image-led, dan tidak generic AI.
6. Menggunakan aset nyata, data derived, canonical IDs, dan route yang benar.
7. Menjamin mobile, accessibility, performance, bilingual, fallback, dan build stability.
8. Menambahkan motion hanya setelah hierarki, konten, dan fungsi stabil.

---

## 1. Ringkasan Eksekutif

Halaman About adalah **living manifesto** NUSANTARAYA: halaman yang menjelaskan alasan produk ini ada, problem yang diselesaikan, filosofi “Satu Peta, Ribuan Cerita”, tujuh pilar, cara seluruh fitur saling terhubung, prinsip data dan budaya, orang di balik produk, serta arah pengembangannya.

Halaman ini **bukan company profile generik**, **bukan daftar visi–misi dalam card**, **bukan timeline startup**, dan **bukan tempat menumpuk logo fitur**. Pengalaman harus terasa seperti membuka manifesto visual sebuah produk nasional: pengguna masuk melalui panorama kepulauan, menemukan masalah yang dipecahkan, mengikuti benang perjalanan dari peta menuju cerita, memahami 7 pilar, melihat sistem produk bekerja, memeriksa komitmen integritas, lalu memilih pintu masuk eksplorasi yang paling relevan.

### North Star Experience

> Dalam 10 detik pengguna memahami bahwa NUSANTARAYA adalah web app eksplorasi digital Indonesia. Dalam 30 detik pengguna memahami nilai “Satu Peta, Ribuan Cerita”. Dalam 2–3 menit pengguna mengenali tujuh pilar, melihat hubungan antarfitur, memahami komitmen budaya dan data, lalu berpindah ke halaman produk yang tepat.
> 

### Peran strategis halaman

- **Brand clarity:** menjawab “Apa itu NUSANTARAYA?” secara tajam.
- **Narrative bridge:** menghubungkan warisan, masa kini, dan masa depan.
- **Product proof:** memperlihatkan cara Map, Atlas, Archive, Rasa, Route, Passport, Future, dan RANI membentuk satu sistem.
- **Trust layer:** menjelaskan sumber, metodologi, keterbatasan, dan koreksi.
- **Conversion hub:** mengarahkan persona berbeda menuju flow yang relevan.
- **Competition story:** menjadi halaman yang bisa dipakai untuk pitch singkat kepada juri.

---

## 2. Sasaran Produk dan Success Signals

### 2.1 Sasaran utama

1. Menjelaskan proposisi NUSANTARAYA dengan bahasa yang ringkas tetapi berkesan.
2. Menampilkan tujuh pilar sebagai fondasi informasi, bukan tujuh kartu dekoratif.
3. Memvisualkan ekosistem halaman dan alur lintas fitur secara mudah dipahami.
4. Menunjukkan bahwa produk berguna bagi explorer, turis, pelajar, pendidik, peneliti, komunitas, dan juri.
5. Menjadikan kepercayaan, sumber, sensitivitas budaya, aksesibilitas, dan fallback sebagai bagian dari desain.
6. Menghasilkan minimal satu aksi lanjutan yang relevan bagi setiap persona.
7. Menjaga pengalaman tetap bermakna tanpa animasi, JavaScript berat, atau layanan eksternal.

### 2.2 KPI MVP

| Area | Metrik | Target |
| --- | --- | --- |
| --- | ---: | ---: |
| Comprehension | Proposisi produk dipahami | ≤ 10 detik |
| Narrative depth | Section bermakna dilihat per sesi | ≥ 4 |
| Ecosystem discovery | Pengguna membuka satu detail fitur | ≥ 35% |
| Cross-navigation | Handoff ke fitur utama | ≥ 30% |
| Trust | Metodologi/sumber dibuka | ≥ 20% |
| Persona routing | Pilihan journey digunakan | ≥ 20% |
| Reliability | Core page tanpa API | 100% |
| Performance | LCP mobile | < 2,5 detik |
| Accessibility | Lighthouse Accessibility | ≥ 90 |

### 2.3 Pertanyaan yang harus terjawab

- Apa itu NUSANTARAYA?
- Masalah apa yang ingin diselesaikan?
- Mengapa peta menjadi navigasi utama?
- Apa arti tujuh pilar S-A-N-T-A-R-Y?
- Apa bedanya dari situs budaya atau wisata biasa?
- Bagaimana seluruh fitur saling terhubung?
- Dari mana data dan cerita berasal?
- Bagaimana budaya, privasi, dan aksesibilitas dijaga?
- Siapa yang cocok memakai produk ini?
- Ke mana pengguna harus pergi setelah membaca About?

---

## 3. Persona dan Jobs to Be Done

### Explorer umum

“Bantu saya memahami produk ini dan tunjukkan pintu masuk paling menarik.”

### Turis lokal/mancanegara

“Bantu saya mengetahui apakah NUSANTARAYA dapat memberi konteks budaya dan perjalanan yang praktis.”

### Pelajar/mahasiswa

“Bantu saya menemukan hubungan antara sejarah, budaya, peta, dan sumber belajar.”

### Guru/peneliti

“Bantu saya memahami metodologi, sumber, cakupan, dan batasan informasi.”

### Komunitas/pelaku budaya

“Bantu saya melihat apakah representasi daerah diperlakukan dengan hormat dan dapat dikoreksi.”

### Juri/pemangku kepentingan

“Tunjukkan visi, inovasi, kegunaan, kualitas UI/UX, integrasi sistem, dan relevansi Digital City secara meyakinkan.”

---

## 4. Prinsip Produk Non-Negotiable

1. **Manifesto before marketing.** Jelaskan keyakinan dan kegunaan, bukan slogan kosong.
2. **Show the system.** Setiap klaim produk harus memiliki contoh fitur atau alur nyata.
3. **One archipelago, many perspectives.** Jangan mereduksi Indonesia menjadi satu citra, satu daerah, atau satu narasi.
4. **Culture is living.** Budaya ditampilkan sebagai praktik hidup, bukan benda masa lalu yang dibekukan.
5. **Map is the backbone.** Peta adalah penghubung tujuh pilar, bukan ornamen hero.
6. **No dead ends.** Setiap chapter memiliki minimal satu next action valid.
7. **No fake numbers.** Statistik harus derived dari registry/data nyata atau tidak ditampilkan.
8. **No fake team story.** Jangan membuat anggota, mitra, kutipan, penghargaan, atau testimonial fiktif.
9. **Trust is visible.** Sumber, updated date, coverage, dan correction tidak disembunyikan.
10. **No navy.** Warna gelap memakai espresso, volcanic charcoal, atau warm black.
11. **Accessible without spectacle.** Informasi tidak bergantung pada hover, warna, scroll-jacking, atau motion.
12. **Progressive disclosure.** Narasi utama singkat; detail metodologi dapat dibuka saat dibutuhkan.
13. **Bilingual by structure.** Semua copy disusun siap ID/EN, bukan ditambal setelah desain selesai.
14. **Local-first reliability.** Halaman dan navigasi inti tetap bekerja tanpa AI dan API eksternal.

### Non-goals MVP

- Halaman rekrutmen.
- Daftar investor/mitra yang belum nyata.
- Press kit lengkap.
- Blog perusahaan.
- Social feed atau komentar publik.
- Counter animasi palsu.
- Peta interaktif kedua yang meniru `/explore`.
- Timeline roadmap dengan janji tanggal yang belum pasti.
- Video autoplay berat.

---

## 5. Creative Direction Final

### Nama konsep

**THE LIVING MANIFESTO OF AN ARCHIPELAGO**

### Formula visual

Living Brand Manifesto  

× Cartographic Editorial  

× Contemporary Indonesian Cultural Journal  

× Product Ecosystem Atlas  

× Expedition Field Notes

### Karakter visual

- Editorial, sinematik, hangat, dan berwibawa.
- Asimetris tetapi memiliki alur baca kuat.
- Image-led dengan lanskap, manusia, material, peta, dan objek budaya yang relevan.
- Menggunakan nomor chapter, margin notes, coordinates, route thread, folio marks, dan caption rail.
- Mempunyai ritme: panorama → manifesto → sistem → manusia → trust → aksi.
- Terasa dibuat oleh brand designer, editorial designer, product designer, dan cultural researcher terbaik.
- Tidak seperti SaaS landing page, portfolio agency, atau template AI.

### Signature visual

**The Golden Thread of Nusantara**: satu garis perjalanan hangat berwarna saffron/terracotta yang muncul dari hero, berubah fungsi sepanjang halaman, lalu menghubungkan problem → 7 pilar → ecosystem map → persona journeys → final CTA.

Benang ini:

- tidak harus kontinu secara literal di seluruh DOM;
- selalu memiliki fungsi naratif;
- dekoratif secara visual tetapi didukung ordered content semantik;
- tidak boleh menyerupai rute geografis akurat bila hanya bersifat editorial;
- dimatikan atau disederhanakan pada reduced motion dan layar kecil.

### Hal yang dilarang

- Hero center dengan blob gradient, orb 3D, atau teks “revolutionizing culture with AI”.
- Background navy/hitam dengan neon cyan.
- Grid 3 kolom identik untuk visi, misi, nilai, fitur, dan tim.
- Card rounded 24–32 px pada semua section.
- Glassmorphism, bento SaaS generik, 3D tilt, cursor glow, particle field.
- Infinite marquee logo atau statistik.
- Motif budaya ditempel acak tanpa konteks.
- Peta Indonesia hanya sebagai watermark dekoratif.
- Foto stok rapat/perkantoran generik.
- Testimonial, partner, penghargaan, atau angka yang tidak nyata.

---

## 6. Palet Lokal About — Tanpa Navy

Gunakan semantic tokens lokal agar token global yang bernuansa navy tidak bocor.

```css
--about-canvas: #F4EEE2;
--about-paper: #FFF9EF;
--about-paper-deep: #E6D8C2;
--about-ink: #292119;
--about-charcoal: #38312A;
--about-muted: #74695E;
--about-line: #CDBDA7;
--about-saffron: #D2A12E;
--about-saffron-soft: #F1E2AE;
--about-terracotta: #B95B40;
--about-terracotta-soft: #E9C7B8;
--about-oxblood: #7B352F;
--about-forest: #586C52;
--about-sage: #7B876E;
--about-teal: #34766B;
--about-clay: #A67555;
--about-plum: #76596B;
--about-success: #527058;
--about-warning: #956B25;
--about-error: #973D32;
```

### Aturan komposisi

- 65–75% parchment, ivory, dan warm paper.
- 15–20% espresso/charcoal untuk teks, divider, dan kontrol.
- 8–12% saffron, terracotta, forest, teal hijau, atau plum sebagai accent aktif.
- Satu section maksimal memiliki satu accent dominan dan satu accent pendamping.
- Primary CTA: saffron + espresso, terracotta + ivory, atau espresso + ivory.
- Focus ring: saffron/terracotta 2–3 px dengan offset jelas.
- Shadow: warm brown transparan; tidak ada tint biru.
- Teal harus terbaca hijau; jika terlihat biru gelap, jangan digunakan.
- **Audit wajib:** tidak ada hex/token/global class yang menghasilkan navy, blue-black, atau dark blue.

### Sistem Background Halaman — Fixed seperti halaman NUSANTARAYA lainnya

- Background utama halaman `/about` harus **fixed dan konsisten sepanjang halaman**, bukan berganti warna dasar pada setiap section.
- Gunakan `--about-canvas: #F4EEE2` sebagai warna dasar global dari awal hingga footer. Seluruh section berada di atas canvas yang sama.
- Implementasi desktop dapat memakai `background-attachment: fixed` hanya untuk **lapisan tekstur/dekoratif yang sangat ringan**, bukan untuk gambar hero besar. Pastikan tidak menimbulkan repaint berat.
- Lapisan fixed yang diperbolehkan: warm paper grain 2–3%, old-map texture 2–4%, silhouette kepulauan sangat tipis, dan soft saffron/terracotta radial wash tanpa warna navy.
- Konten, image frame, paper panel, tracing sheet, dan editorial fragments tetap ikut bergerak saat scroll; hanya canvas/texture atmosfer yang fixed.
- Jangan mengganti background dasar menjadi warna berbeda antarsection. Ritme section dibangun melalui whitespace, divider, crop media, paper surface, accent kecil, dan perubahan komposisi—bukan pergantian blok background.
- Pada mobile dan perangkat yang bermasalah dengan `background-attachment: fixed`, gunakan fallback `background-attachment: scroll` dengan visual yang tetap identik. Jangan memakai JavaScript scroll listener untuk meniru fixed background.
- Fixed background tidak boleh mengurangi kontras, mengganggu keterbacaan, menyebabkan banding, flicker, CLS, atau menurunkan performa scroll.
- `prefers-reduced-motion` tetap memakai background statis tanpa pergerakan parallax.
- Footer tetap menyatu dengan canvas utama atau memakai warm-paper tone yang sangat dekat; jangan berubah menjadi footer navy/dark blue.

---

## 7. Tipografi, Grid, Spacing, dan Material

### Tipografi

- Display/editorial: Playfair Display, Cormorant Garamond, atau serif existing.
- Body/UI: Inter atau sans existing.
- Hero: 72–104 px desktop; 52–72 px tablet; 40–54 px mobile.
- H2: 46–64 px desktop; 34–44 px mobile.
- H3: 26–36 px desktop; 23–30 px mobile.
- Body: 16–18 px; minimum 15 px mobile.
- Chapter label: sans 11–13 px, uppercase ringan, tracking 0,08–0,12 em.
- Panjang baris utama: 55–75 karakter.
- Angka besar digunakan sebagai chapter marker, bukan vanity statistic.

### Grid

- Desktop: 12 kolom, max-width 1280–1440 px mengikuti Route/Explore.
- Gutter desktop 32–48 px; tablet 24–32 px; mobile 20–24 px.
- Gunakan komposisi 5/7, 7/5, 8/4, 4/8, dan 3/6/3 bergantian.
- Hindari 6/6 berulang.
- DOM order harus tetap logis walau visual memakai offset.

### Spacing

Gunakan 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 144. Section utama 96–144 px desktop dan 64–88 px mobile.

### Material

- Warm paper, map texture, tracing sheet, brass/saffron line, ink stamp, photographic matte.
- Radius 8–16 px; media focal maksimal 20 px.
- Gunakan whitespace, crop, divider, dan offset sebelum border/shadow.
- Grain maksimal 2–3% dan tidak menyentuh keterbacaan teks.
- Hindari container di dalam container tanpa fungsi.

---

## 8. Arsitektur Informasi Halaman

1. **The Archipelago Threshold** — Hero/brand proposition.
2. **Why NUSANTARAYA Exists** — problem dan opportunity.
3. **A Living Manifesto** — visi, misi, brand promise, nilai.
4. **One Map, Seven Ways to Read Indonesia** — tujuh pilar.
5. **The NUSANTARAYA Ecosystem Atlas** — hubungan seluruh fitur.
6. **From Curiosity to Journey** — demo alur produk.
7. **Three Ways to Explore** — Explore, Tourist, Learn.
8. **Built for Many People** — persona journey selector.
9. **From Heritage to Digital Future** — masa lalu, kini, masa depan.
10. **Trust, Sources, and Cultural Integrity** — metodologi dan governance.
11. **Accessible and Resilient by Design** — aksesibilitas, performance, fallback.
12. **Behind the Work** — owner/team/contributor yang benar-benar ada.
13. **Roadmap as Horizons** — arah pengembangan tanpa janji palsu.
14. **Open the Ecosystem** — handoff lintas semua halaman.
15. **Final Manifesto** — penutup emosional dan CTA.

---

# 9. Rancangan Detail Setiap Section

## Section 1 — The Archipelago Threshold / Hero

### Tujuan

Membuat pengguna memahami proposisi produk dalam satu viewport dan merasakan skala nasional tanpa hero yang generik.

### Copy direction

- Eyebrow: **Tentang NUSANTARAYA · Digital Twin Nusantara**
- Heading: **“Satu peta untuk membaca ribuan cerita Indonesia.”**
- Supporting copy: “NUSANTARAYA menyatukan peta, budaya, rasa, perjalanan, pembelajaran, dan masa depan digital dalam satu pengalaman eksplorasi yang hidup.”
- Primary CTA: **Lihat Cara Kerjanya** → `#ecosystem-atlas`
- Secondary CTA: **Mulai dari Nusa Map** → `/explore?source=about`
- Trust line: **38 provinsi · 7 pilar · Satu ekosistem eksplorasi**—semua angka derived dari registry.

### Layout desktop

- Kiri 5 kolom: `ABOUT / 01`, heading, supporting copy, CTA, trust line.
- Kanan 7 kolom: **Archipelago Aperture**, bukan collage card biasa.
- Satu landscape Indonesia menjadi focal media.
- Siluet kepulauan atau map outline muncul sebagai cut-out/tracing layer.
- Tiga crop sekunder mewakili warisan, perjalanan, dan masa depan; masing-masing memiliki caption, bukan badge.
- Golden Thread muncul dari arah barat, melintasi focal media, lalu berakhir pada chapter marker berikutnya.
- Wordmark kecil dan tagline ditempatkan seperti folio mark, bukan logo raksasa kedua.

### Mobile

Heading → copy → CTA → focal image 4:5/3:4 → map silhouette → stats ringkas. Crop sekunder maksimal satu. Golden Thread menjadi divider vertikal sederhana.

### Motion

- Heading fade-up 12 px.
- Media clip reveal 450–700 ms setelah LCP stabil.
- Map outline draw satu kali.
- Golden Thread draw satu kali, bukan loop.
- Reduced motion: statis atau fade ≤120 ms.

### Acceptance

- Tujuan produk dipahami dalam 10 detik.
- Tidak ada navy, overlay gelap biru, glow, atau visual abstrak tanpa arti.
- LCP memakai aset nyata, dimensions, `sizes`, dan focal point.
- Hero tetap utuh tanpa JavaScript.

---

## Section 2 — Why NUSANTARAYA Exists / The Fragmented Archipelago

### Tujuan

Menjelaskan problem tanpa membuat section seperti tiga problem cards.

### Narasi

Informasi tentang budaya, wisata, sejarah, kuliner, bahasa, dan masa depan daerah tersebar, sering statis, sulit dihubungkan, serta terlalu banyak berpusat pada beberapa destinasi populer. NUSANTARAYA merancang satu pintu masuk yang menyatukan konteks, eksplorasi, dan tindakan.

### Layout

Bentuk **Fragmented Knowledge Table**:

- Kiri 4 kolom: statement besar “Indonesia terlalu kaya untuk dibaca sebagai daftar.”
- Tengah 5 kolom: tiga fragmen editorial tidak seragam—potongan artikel, peta, itinerary, dan catatan budaya—yang menunjukkan fragmentasi.
- Kanan 3 kolom: problem ledger berurutan, bukan card.
- Saat scroll, Golden Thread “menjahit” fragmen menjadi satu diagram ringkas.

### Problem chapters

1. Informasi tersebar.
2. Website budaya terlalu statis.
3. Perencanaan perjalanan masih terpisah dari konteks budaya.
4. Banyak wilayah belum mendapat panggung digital setara.
5. Warisan dan masa depan jarang dibaca sebagai satu cerita.

### Interaction

Klik problem membuka “response note” singkat yang menunjukkan fitur penjawab: Map, Archive, Rasa, Route, Future, Passport, atau RANI. Jangan membuka modal besar.

### Guardrail

Tidak menggunakan angka problem tanpa sumber. Hindari framing bahwa teknologi “menyelamatkan” budaya.

---

## Section 3 — A Living Manifesto / Vision, Mission, and Values

### Tujuan

Menampilkan visi, misi, brand promise, dan nilai sebagai manifesto yang dapat dibaca, bukan card company profile.

### Komposisi

Bentuk **Manifesto Pages**:

- Satu kalimat visi besar spanning 8 kolom.
- Margin rail 4 kolom berisi brand promise dan chapter index.
- Lima nilai muncul sebagai editorial clauses dengan typographic hierarchy berbeda.
- Satu image manusia/komunitas ditempatkan di antara dua clause, bukan sebagai background penuh.

### Copy inti

- **Visi:** menjadi pintu gerbang digital Indonesia yang komprehensif, imersif, dan bermanfaat.
- **Misi:** menyajikan budaya secara interaktif; membantu perjalanan bermakna; menarik generasi muda; menghubungkan budaya dengan ekonomi kreatif; memperlihatkan kontinuitas menuju masa depan digital.
- **Nilai:** Indonesia-First, Trustworthy, Immersive, Useful, Accessible, Living Platform.

### Visual treatment

- “Indonesia-First” menjadi lead clause.
- Nilai lain mengikuti seperti anotasi manifesto.
- Active clause memiliki saffron underline + numeral; tidak memakai icon-card.
- Supporting description maksimal 2–3 kalimat per nilai.

### Motion

Clause reveal berurutan hanya saat pertama masuk viewport. Tidak ada text-scramble atau typing effect.

---

## Section 4 — One Map, Seven Ways to Read Indonesia / 7 Pilar

### Tujuan

Menjelaskan S-A-N-T-A-R-Y sebagai fondasi arsitektur informasi dan pengalaman.

### Pilar canonical

1. **S — Sejarah:** timeline, Jalur Rempah, tokoh, situs warisan.
2. **A — Aksara:** bahasa, tulisan, transliterasi, audio.
3. **N — Narasi:** cerita rakyat, micro story, pengalaman daerah.
4. **T — Tradisi:** rumah adat, seni, ritual, craft, soundscape.
5. **A — Alam:** destinasi, hidden gems, green tourism.
6. **R — Rasa:** kuliner, rempah, food story, tasting trail.
7. **Y — Yatra:** Route, Passport, RANI, dan masa depan perjalanan.

### Creative layout

Bentuk **Seven-Lens Cartographic Instrument**, bukan tujuh card:

- Tengah: silhouette/schematic Indonesia.
- Di sekelilingnya: tujuh lens labels dalam orbit editorial yang tidak simetris.
- Kiri: vertical index S–A–N–T–A–R–Y.
- Kanan: active pillar dossier berisi makna, contoh fitur, connected pages, dan CTA.
- Map tidak melakukan interaksi geografis penuh; hanya menegaskan peta sebagai backbone.

### Interaction

- Hover/focus/click mengaktifkan pillar.
- Keyboard: arrow/Home/End bila memakai tabs; alternatif ordered list selalu ada.
- Active pillar mengganti satu image/crop dan route targets tanpa full remount.
- CTA contoh: `Jelajahi Sejarah di Archive`, `Temukan Rasa`, `Susun Yatra`.

### Mobile

Index horizontal dengan prev/next; active dossier full width; seluruh tujuh pilar tetap tersedia dalam ordered accordion/list tanpa swipe wajib.

### Guardrail

- Jangan menggunakan tujuh warna besar yang membuat halaman seperti pelangi.
- Warna hanya accent 8–12%.
- Jangan menyebut tujuh pilar sebagai tujuh filter peta.

---

## Section 5 — The NUSANTARAYA Ecosystem Atlas

### Tujuan

Membuktikan bahwa produk adalah sistem terintegrasi.

### Creative layout

Bentuk **Ecosystem Atlas Foldout**:

- Center spine: Nusa Map.
- Empat domain mengelilinginya: Understand, Experience, Journey, Future.
- Feature nodes: Province Atlas, Archive, NusaRasa, Aksara, Jalur Rempah, Route, Passport, RANI, Events, Future.
- Connector hanya muncul jika hubungan memiliki contract nyata.
- Satu side panel menampilkan “What moves between pages”: provinceId, regionId, itemId, dishId, routeId, signalId, mode, locale.

### Domain mapping

- **Understand:** Map, Province Atlas, Archive, Aksara, Stories.
- **Experience:** NusaRasa, Soundscape, Events, Jalur Rempah.
- **Journey:** Route, Passport, RANI.
- **Future:** Nusa Future, modern potential, creative economy.

### Interaction

- Pilih node → tampilkan purpose, input, output, connected pages, dan CTA.
- Pilih connector → tampilkan contoh handoff dalam bahasa pengguna, bukan kode.
- Tombol `Coba alur ini` memulai flow yang benar-benar tersedia.
- Jangan membuat graph yang hanya dekoratif.

### Accessibility

Diagram memiliki ordered list/table alternatif. Connector dekoratif `aria-hidden`. Focus order mengikuti daftar, bukan posisi visual.

### Acceptance

- Pengguna dapat menjelaskan hubungan minimal tiga fitur setelah melihat section.
- Tidak ada dead node atau route palsu.

---

## Section 6 — From Curiosity to Journey / How It Works

### Tujuan

Menunjukkan satu perjalanan end-to-end dalam 60–90 detik.

### Alur utama

1. Buka Nusa Map.
2. Pilih provinsi.
3. Pahami identitas melalui Province Atlas.
4. Buka budaya di Archive atau kuliner di NusaRasa.
5. Susun perjalanan di Route.
6. Simpan jejak di Passport.
7. Tanya RANI untuk konteks lanjutan.
8. Lihat kesinambungan di Nusa Future.

### Layout

Bentuk **Expedition Storyboard**:

- Satu mockup/visual aktif besar 8 kolom.
- Chapter rail 4 kolom.
- Golden Thread menjadi numbered route 01–08.
- Setiap chapter memiliki “what user learns”, “what user does”, dan “where next”.
- Jangan tampilkan delapan screenshot card sekaligus.

### Behavior

- User dapat autoplay? **Tidak.** Perpindahan manual melalui chapter buttons.
- Deep link anchor opsional per chapter.
- State aktif tidak mengubah URL kecuali diperlukan.
- CTA `Mulai alur ini` menuju `/explore?source=about&journey=core`.

### Mobile

Visual → chapter title → summary → action → prev/next. Daftar 01–08 tetap terlihat sebagai overview.

---

## Section 7 — Three Ways to Explore / Modes

### Tujuan

Menjelaskan adaptasi pengalaman tanpa membuat tiga pricing cards.

### Mode

- **Explore:** pengalaman visual dan discovery penuh.
- **Tourist:** konteks praktis, itinerary, etika, bahasa, dan perjalanan.
- **Learn:** sumber, struktur pengetahuan, timeline, dan istilah.

### Layout

Bentuk **Triptych of Intent**:

- Tiga vertical scenes dengan lebar 5/4/3 pada state default.
- Active mode melebar menjadi 6 kolom; yang lain menjadi caption rails.
- Setiap scene memakai aset dan copy yang berbeda, bukan hanya warna.
- Di bawahnya ada satu shared journey yang menunjukkan bagaimana halaman yang sama mengubah emphasis.

### Interaction

Mode preview lokal tidak harus mengubah global mode tanpa explicit action. Tombol `Gunakan mode ini` baru mengubah shared state dan menuju destination.

### Guardrail

Mode bukan persona eksklusif. Pengguna dapat berganti kapan saja. Jangan menyimpan mode sebagai identitas permanen.

---

## Section 8 — Built for Many People / Persona Journey Selector

### Tujuan

Mengubah halaman About menjadi pintu masuk yang relevan untuk kebutuhan berbeda.

### Persona paths

- Explorer → Nusa Map / recommended journey.
- Turis → Route / Tourist Mode / etiquette.
- Pelajar → Archive / Learn Mode / Aksara.
- Pendidik/peneliti → Archive / sources / methodology.
- Pecinta kuliner → NusaRasa / tasting trail.
- Pencinta masa depan → Nusa Future / modern potential.

### Layout

Bentuk **Journey Tickets on a Shared Table**:

- Satu persona aktif tampil sebagai itinerary strip panjang.
- Persona lain menjadi indexed tabs/labels, bukan card.
- Output berisi starting point, three-step journey, expected value, dan CTA.
- Tidak menggunakan foto avatar stok atau nama persona fiktif di UI utama.

### Behavior

Pilihan dapat mengikuti `mode` existing sebagai default, tetapi tidak mengunci. CTA mengirim `source=about` dan intent allowlisted.

---

## Section 9 — From Heritage to Digital Future

### Tujuan

Menunjukkan narasi besar NUSANTARAYA: masa lalu yang kaya, masa kini yang hidup, dan masa depan yang sedang dibangun.

### Layout

Bentuk **Three-Horizon Panorama**:

- Horizontal editorial sequence: Warisan → Hari Ini → Masa Depan.
- Bukan tiga card; gunakan satu panorama dengan tiga focal windows.
- Golden Thread berubah menjadi horizon line.
- Setiap fase memiliki 3–4 feature links.

### Mapping

- **Warisan:** Sejarah, Archive, Aksara, Jalur Rempah.
- **Hari Ini:** Map, Province, NusaRasa, Events, Route.
- **Masa Depan:** Future, Passport, creative economy, digital villages.

### CTA

- Warisan → `/archive?source=about`
- Hari Ini → `/explore?source=about`
- Masa Depan → `/future?source=about`

### Guardrail

Masa lalu tidak boleh digambarkan tertinggal; masa depan tidak boleh digambarkan menggantikan tradisi.

---

## Section 10 — Trust, Sources, and Cultural Integrity

### Tujuan

Menjadikan kredibilitas sebagai bagian utama desain.

### Isi

- Jenis sumber: pemerintah, lembaga budaya, museum, buku, dokumentasi resmi, dan sumber kredibel.
- Status data: draft, review, published, archived.
- Updated/reviewed date.
- Prinsip klaim budaya dan multi-region context.
- Sensitivitas ritual, situs sakral, foto manusia, dan istilah lokal.
- Correction/contribution flow.
- Coverage disclosure dan keterbatasan.

### Layout

Bentuk **Source & Stewardship Desk**:

- Kiri: methodology statement besar.
- Tengah: source registry excerpt seperti bibliography.
- Kanan: trust stamps dan correction flow.
- Disclosure dibuka dengan details/accordion semantik.
- Tidak memakai card untuk setiap sumber.

### Correction flow

1. Pilih jenis isu.
2. Context membawa canonical page/item ID.
3. Isi penjelasan dan sumber tambahan.
4. Consent/privacy preview.
5. Kirim ke moderation queue.
6. Status: “Terkirim untuk ditinjau”, bukan “langsung diperbarui”.

### Guardrail

Jangan menulis “100% akurat”. Gunakan “terkurasi”, “bersumber”, “diperbarui”, dan “terbuka untuk koreksi”.

---

## Section 11 — Accessible and Resilient by Design

### Tujuan

Menunjukkan bahwa kualitas produk tidak hanya visual.

### Isi

- Keyboard dan screen reader.
- WCAG AA, zoom 200%, forced colors.
- Reduced motion.
- Mobile-first dan touch targets.
- Image optimization, local data, offline fallback.
- RANI fallback dan Route preset.
- Audio default OFF.
- Bilingual readiness.
- Privacy-minimal analytics.

### Layout

Bentuk **Design Commitments Ledger**:

- Satu large statement: “Pengalaman yang indah harus tetap dapat digunakan.”
- Komitmen muncul sebagai numbered clauses dengan contoh UI kecil yang nyata.
- Hindari metric cards atau checklist marketing.

### Proof links

Jika tersedia, tautkan ke methodology, accessibility statement, source desk, atau demo feature. Jangan membuat sertifikasi palsu.

---

## Section 12 — Behind the Work

### Tujuan

Menampilkan orang, disiplin, dan proses secara jujur tanpa halaman tim generik.

### Data minimum

- Nama/owner yang benar-benar ada.
- Peran nyata.
- Kontribusi nyata.
- Foto/identitas hanya jika tersedia dan disetujui.
- Link kontak/social yang benar-benar aktif.

### Layout

Bentuk **Studio Field Notes**:

- Satu portrait/workspace/process visual dominan.
- Side notes berisi peran: product, research, design, frontend, content, accessibility.
- Jika proyek dikerjakan solo, tampilkan dengan percaya diri sebagai “independent multidisciplinary build”; jangan membuat tim fiktif.
- Tampilkan proses: research → architecture → design → build → validate → refine.

### Empty policy

Jika data tim belum siap, ganti dengan “How the work is made”, bukan placeholder avatar.

---

## Section 13 — Roadmap as Horizons

### Tujuan

Menjelaskan arah perkembangan tanpa timeline startup generik atau janji tanggal palsu.

### Horizons

- **Now / Foundation:** Home, Map, Province, Archive, Rasa, Route, Passport, bilingual dasar.
- **Next / Strong Differentiators:** RANI, Future, Soundscape, Aksara, Jalur Rempah, Events.
- **Later / Premium Experiments:** Lens, 3D Gallery, Batik Canvas, contribution, advanced sharing.

### Layout

Bentuk **Navigational Horizons**:

- Satu horizon landscape.
- Tiga depth planes, bukan tiga cards.
- Status nyata: available, in progress, planned, exploring.
- Setiap feature memiliki status label dan tidak clickable jika route belum tersedia.

### Guardrail

- Tidak menampilkan progress percentage tanpa basis.
- Tidak menulis release date yang belum diputuskan.
- Fitur planned tidak boleh terlihat selesai.

---

## Section 14 — Open the Ecosystem / Contextual Handoff

### Tujuan

Membawa pengguna dari pemahaman menuju tindakan.

### Bentuk visual

Gunakan **Radial Expedition Index** atau constellation editorial—bukan grid menu fitur.

| Tujuan | Context dari About | Behavior |
| --- | --- | --- |
| Home | `source=about` | Kembali ke narasi utama tanpa kehilangan locale/mode |
| Nusa Map | intent/persona, layer opsional | Buka pengalaman eksplorasi utama |
| Province Atlas | provinceId bila dipilih | Buka identitas provinsi relevan |
| Nusa Archive | pillar/category/mode | Buka koleksi budaya terkait |
| NusaRasa | region/flavor intent | Buka atlas rasa dengan context |
| Nusa Route | persona, region, interests | Prefill planner, tidak auto-submit |
| Nusa Passport | saved journey context | Buka progres; tidak memberi stamp otomatis |
| Nusa Future | theme/province | Buka observatorium masa depan |
| RANI | intent, locale, mode | Buka prompt preset berbasis context |
| Aksara/Jalur Rempah/Events | pillar/topic | Buka route jika tersedia; fallback jujur jika belum |

### Rules

- Typed payload dan canonical IDs.
- Jangan mengirim DOM text.
- Semua enum di-allowlist.
- CTA disembunyikan atau diberi fallback bila route belum tersedia.
- Browser Back memulihkan section dan scroll About.

---

## Section 15 — Final Manifesto / Closing

### Copy direction

**“Nusantara bukan satu cerita yang selesai ditulis. Ia adalah ribuan jejak yang terus hidup, saling terhubung, dan menunggu untuk dijelajahi.”**

Supporting copy: “Mulailah dari satu provinsi, satu rasa, satu aksara, atau satu perjalanan—lalu biarkan NUSANTARAYA menunjukkan hubungan di antaranya.”

### CTA

- Primary: **Mulai dari Nusa Map**.
- Secondary: **Susun Perjalanan**.
- Tertiary text link: **Buka Nusa Archive**.

### Layout

- Satu image crop landscape kuat.
- Manifesto text 7 kolom.
- CTA dan small ecosystem index 5 kolom.
- Golden Thread berakhir sebagai compass mark/wordmark.
- Jangan membuat giant rounded CTA card.

### Footer handoff

Gunakan footer global yang konsisten. About tidak membuat footer kedua.

---

## 10. Flow Utama Pengguna

### 10.1 First-time visitor

Home/Nav → About Hero → Why → 7 Pilar → Ecosystem Atlas → How It Works → Nusa Map.

### 10.2 Juri

About Hero → Problem → Manifesto → Ecosystem Atlas → Demo Journey → Trust → Future → CTA Map/Route.

### 10.3 Turis

About → Persona “Turis” → Tourist Mode preview → Nusa Map/Route → etiquette → Passport.

### 10.4 Pelajar

About → Learn Mode → 7 Pilar → Archive/Aksara → Source Desk → Province Atlas.

### 10.5 Cultural trust flow

About → Cultural Integrity → methodology → Archive item/source → Suggest Correction → kembali ke About/Archive.

### 10.6 Product ecosystem flow

About → Ecosystem Atlas → pilih NusaRasa → dish → Route prefill → Passport → Back memulihkan ecosystem node.

### 10.7 Future flow

About → Three Horizons → Future → signal → Province → Route → Passport.

### 10.8 Demo juri 90 detik

1. Hero dan tagline.
2. Tunjukkan problem fragments.
3. Aktifkan dua dari tujuh pilar.
4. Buka Ecosystem Atlas dan pilih Map → Archive → Route.
5. Jalankan storyboard 3–4 chapter.
6. Tunjukkan Source & Stewardship Desk.
7. Pilih persona turis/pelajar.
8. Tutup dengan Final Manifesto dan CTA Nusa Map.

---

## 11. Route, URL, dan Anchor Contract

### Canonical route

- Landing: `/about`

### Anchor canonical

- `#why`
- `#manifesto`
- `#seven-pillars`
- `#ecosystem-atlas`
- `#how-it-works`
- `#modes`
- `#for-everyone`
- `#heritage-future`
- `#trust`
- `#accessibility`
- `#behind-the-work`
- `#roadmap`
- `#open-ecosystem`

### Query proposal

`/about?mode=learn&persona=student&pillar=aksara&source=archive#seven-pillars`

### Rules

- `mode`, `persona`, `pillar`, dan `source` di-allowlist.
- Invalid query diabaikan tanpa crash.
- Perubahan preview lokal memakai `replace` bila perlu.
- Navigasi halaman bermakna memakai `push`.
- Anchor offsets memperhitungkan sticky navbar.
- Back mengembalikan active node/chapter dan scroll bila memungkinkan.
- Tidak menyimpan free text atau data sensitif di URL.

---

## 12. Copywriting System

### Tone of voice

- Hangat, cerdas, dan jelas.
- Nasionalis tanpa hiperbola.
- Puitis pada headline; konkret pada supporting copy.
- Menghormati keragaman dan komunitas.
- Tidak menggunakan jargon startup tanpa isi.
- Tidak mengklaim “terbaik”, “nomor satu”, “revolusioner”, atau “sempurna”.

### Formula copy

- Headline: 5–12 kata, satu gagasan kuat.
- Supporting paragraph: 1–3 kalimat.
- Caption: menyebut apa dan mengapa, bukan mengulang visual.
- CTA: kata kerja + tujuan jelas.
- Trust language: status, sumber, dan batasan terlihat.

### Contoh microcopy

- “Mulai dari satu jejak.”
- “Lihat bagaimana fitur ini terhubung.”
- “Dibaca dari tujuh sudut.”
- “Data terkurasi, terbuka untuk koreksi.”
- “Prefill tersedia; kamu tetap memegang kendali.”
- “Fitur ini sedang dikembangkan.”

---

## 13. State Matrix

- **Default:** hero + manifesto nasional.
- **Pillar active:** dossier dan related routes sinkron.
- **Ecosystem node active:** relationship panel terbuka.
- **Journey chapter active:** visual dan next action berubah.
- **Mode preview active:** emphasis berubah tanpa global mutation otomatis.
- **Persona selected:** journey ticket diperbarui.
- **Loading:** stable skeleton hanya pada media/interactive island yang diperlukan.
- **Partial data:** tampilkan fakta valid + disclosure.
- **Error:** static narrative dan fallback links tetap tersedia.
- **Offline:** seluruh copy, pilar, ecosystem summary, dan core links tetap bekerja.
- **Broken asset:** map/typographic fallback art-directed.
- **Route unavailable:** label “sedang dikembangkan” + alternative route.
- **Reduced motion:** static composition.
- **English:** copy panjang tidak overflow.
- **No-JS:** seluruh narasi utama dan link canonical tetap dapat digunakan.

---

## 14. Data Contract Canonical

```tsx
type AboutPillarId =
  | 'sejarah'
  | 'aksara'
  | 'narasi'
  | 'tradisi'
  | 'alam'
  | 'rasa'
  | 'yatra';

type AboutPersonaId =
  | 'explorer'
  | 'tourist'
  | 'student'
  | 'educator-researcher'
  | 'culture-enthusiast'
  | 'future-explorer';

type FeatureStatus = 'available' | 'in-progress' | 'planned' | 'exploring';

type AboutFeatureNode = {
  id: string;
  route?: string;
  status: FeatureStatus;
  pillarIds: AboutPillarId[];
  localeContent: {
    id: { title: string; summary: string; promise: string };
    en?: { title: string; summary: string; promise: string };
  };
  inputContextKeys: string[];
  outputContextKeys: string[];
  connectedFeatureIds: string[];
  assetRef?: string;
  fallbackType: 'image' | 'map' | 'typographic';
};

type AboutJourney = {
  id: string;
  personaIds: AboutPersonaId[];
  mode: 'explore' | 'tourist' | 'learn';
  stepFeatureIds: string[];
  primaryAction: AboutAction;
  fallbackAction: AboutAction;
};
```

### Validation minimum

- Pillar ID tepat tujuh dan unik.
- Feature node ID unik.
- Route hanya clickable jika tersedia.
- Connected feature IDs valid dan tidak self-reference.
- Journey memiliki 3–8 langkah dan minimal satu fallback.
- Angka/statistik derived dari registry.
- Aset memiliki dimensions, alt, focal point, credit/license, dan fallback.
- English content hanya ditandai siap jika direview.
- Team/contributor data tidak boleh placeholder/fiktif.

---

## 15. Component Architecture Rekomendasi

```
src/app/about/
  page.tsx
  loading.tsx
  error.tsx

src/components/about/
  about-hero/
  why-nusantaraya/
  living-manifesto/
  seven-pillar-instrument/
  ecosystem-atlas/
  product-journey/
  exploration-modes/
  persona-journeys/
  heritage-future-panorama/
  trust-stewardship-desk/
  design-commitments/
  behind-the-work/
  roadmap-horizons/
  ecosystem-handoff/
  final-manifesto/

src/data/about/
  manifesto.ts
  pillars.ts
  featureNodes.ts
  featureConnections.ts
  journeys.ts
  personas.ts
  principles.ts
  roadmap.ts
  sourceMethodology.ts
  aboutAssetManifest.ts

src/lib/about/
  aboutSchema.ts
  parseAboutQuery.ts
  resolveAboutJourney.ts
  resolveFeatureConnections.ts
  mapAboutViewModel.ts
  validateAboutData.ts
  checkRouteAvailability.ts

src/types/about.ts
src/hooks/useAboutPillar.ts
src/hooks/useEcosystemAtlas.ts
src/hooks/useAboutJourney.ts
```

### Engineering rules

- Audit repository nyata sebelum menetapkan path final.
- Reuse navbar, footer, container, button, image, motion, locale, mode, analytics, focus, route registry, region/province registry, dan reduced-motion utilities existing.
- Server component menangani metadata dan narrative shell; client islands hanya untuk pilar, graph, mode preview, dan journey.
- Jangan mengubah seluruh page menjadi client component.
- Jangan membuat feature registry, province registry, atau route registry kedua.
- Data dan hubungan tidak ditulis hardcoded di JSX.
- Komponen menerima ViewModel.
- Strict TypeScript; tidak ada `any` baru.
- Jangan menambah library graph/map/animation jika SVG/CSS/Framer existing cukup.

---

## 16. Frontend State Architecture

### Layers

1. **Canonical content:** manifesto, pillars, feature nodes, journeys, methodology.
2. **URL state:** active pillar, persona, mode, source, anchor.
3. **Local UI:** active ecosystem node, active journey chapter, disclosure.
4. **Shared app:** locale, mode, Passport summary, route availability.
5. **Persisted state:** tidak diperlukan kecuali last active About context untuk Back restore.

### Rules

- URL valid mengalahkan default lokal.
- Global mode tidak diubah oleh preview sebelum user menekan explicit action.
- Active node tidak disimpan sebagai object penuh.
- Derived counts tidak disimpan ulang.
- Context perubahan tidak mengganti chapter yang sedang dibaca secara tiba-tiba.
- Hydration tidak boleh mengubah layout hero.
- No-JS narrative tetap lengkap.

---

## 17. Responsive Blueprint

### Desktop ≥1280 px

- Hero 5/7.
- Problem table 4/5/3.
- Manifesto 8/4.
- Pillar instrument map-centered.
- Ecosystem Atlas full 12-column foldout.
- Storyboard 8/4.
- Mode triptych 5/4/3.
- Trust desk 4/5/3.

### Laptop 1024–1279 px

- Heading dan gap diperkecil.
- Pertahankan asimetri, tetapi jangan membuat rail <280 px.
- Ecosystem graph menyederhanakan connector sekunder.
- Overlap dikurangi 30–50%.

### Tablet 768–1023 px

- Hero stacked.
- Pillar map full width + dossier di bawah.
- Ecosystem graph menjadi domain groups + active detail.
- Storyboard visual → chapter rail.
- Triptych berubah menjadi active panel + index.
- Trust desk stacked 2 bagian.

### Mobile ≤767 px

Reading order:

1. Hero copy.
2. Hero media.
3. Why.
4. Manifesto.
5. Seven Pillars.
6. Ecosystem Atlas.
7. How It Works.
8. Modes.
9. Persona journeys.
10. Heritage–Future.
11. Trust.
12. Accessibility/resilience.
13. Behind the Work.
14. Roadmap.
15. Ecosystem handoff.
16. Final Manifesto.

Rules:

- Gutter 20–24 px.
- Touch target ≥44×44 px.
- Tidak ada horizontal page overflow.
- Tidak ada compulsory drag/swipe.
- Pillars dan ecosystem menyediakan ordered list.
- Diagram disederhanakan, bukan dikecilkan sampai tidak terbaca.
- Sticky action aman dari bottom navigation dan safe area.
- Tidak ada informasi hover-only.
- Golden Thread menjadi divider/step line sederhana.

### Viewport QA

360×800, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080.

---

## 18. Motion Choreography

### Signature motion

- Hero media clip reveal.
- Map outline dan Golden Thread draw satu kali.
- Problem fragments converge 8–16 px.
- Manifesto underline reveal.
- Pillar lens crossfade 180–240 ms.
- Ecosystem node reveal 40–70 ms dan connector draw satu kali.
- Journey chapter slide 8–12 px.
- Mode panel width transition yang halus dan tidak menggeser focus.
- Horizon clip reveal.
- CTA arrow shift 3–4 px.

### Batasan

- UI motion 150–300 ms.
- Cinematic reveal 450–700 ms hanya untuk hero/panorama.
- Transform, opacity, dan clip sederhana.
- Tidak ada scroll-jacking, parallax besar, infinite pulse, bounce, 3D tilt, cursor glow, text scramble, atau autoplay carousel.
- Jangan membuat loading palsu.
- Motion tidak boleh menyebabkan CLS.
- Reduced motion menonaktifkan draw, stagger, width morph, smooth scroll, dan transition besar.
- Animasi tidak boleh menghalangi link atau keyboard focus.

---

## 19. Accessibility

- Semantic `<main>`, `<section>`, `<nav>`, dan hierarchy H1/H2/H3.
- Skip link menuju konten utama.
- Pillar selector memakai tabs atau button list dengan semantik penuh.
- Ecosystem graph memiliki list/table alternatif.
- Journey steps menggunakan ordered list.
- Decorative map/thread/connectors `aria-hidden`.
- Active/selected state tidak dibedakan oleh warna saja.
- `aria-current`, `aria-selected`, atau `aria-pressed` digunakan sesuai pola.
- Focus tidak hilang saat panel berubah.
- Deep links memindahkan focus secara aman ke heading target.
- Contrast WCAG AA.
- Focus ring saffron/terracotta, bukan navy.
- Zoom 200% tetap usable.
- Forced colors menunjukkan state.
- Alt image spesifik dan tidak mengulang caption.
- Tidak ada audio autoplay.
- Reduced motion dan no-JS tetap memiliki seluruh informasi.
- Touch target minimal 44×44 px.

---

## 20. Performance, SEO, Security, dan Privacy

### Performance

- Narrative shell server-rendered.
- Jangan bundle seluruh data feature/detail ke About.
- Ecosystem graph lazy-hydrate ketika mendekati viewport.
- Hero image optimized, explicit dimensions, priority, `sizes`, dan focal point.
- Below-fold image lazy.
- Gunakan SVG/schematic; jangan memuat map engine.
- Hindari long task >200 ms.
- Tidak ada preload video/audio berat.
- Motion transform/opacity/clip saja.

### SEO

- Canonical `/about`.
- Title: **Tentang NUSANTARAYA — Satu Peta, Ribuan Cerita**.
- Description menjelaskan Digital Twin Nusantara, 38 provinsi, 7 pilar, peta, budaya, perjalanan, dan masa depan digital.
- OpenGraph memakai social asset khusus atau hero yang sesuai.
- Organization/WebSite structured data hanya dengan fakta valid.
- Breadcrumb valid.
- Sitemap memasukkan `/about`.
- ID/EN memakai canonical/hreflang sesuai arsitektur existing.

### Security/privacy

- Allowlist query dan context IDs.
- Jangan render raw HTML dari data.
- Sanitasi external URLs.
- Correction/contact dimoderasi dan rate-limited bila backend tersedia.
- Jangan meminta geolocation.
- Analytics tidak mengirim raw free text atau data pribadi.
- Team contact hanya ditampilkan dengan persetujuan.

---

## 21. Analytics Events

Gunakan adapter existing; jangan menambah platform baru hanya untuk About.

- about_page_viewed
- about_primary_cta_clicked
- about_problem_opened
- about_manifesto_value_opened
- about_pillar_selected
- about_pillar_handoff
- about_ecosystem_node_selected
- about_ecosystem_connection_opened
- about_journey_chapter_changed
- about_journey_started
- about_mode_previewed
- about_mode_applied
- about_persona_selected
- about_persona_journey_started
- about_trust_opened
- about_methodology_opened
- about_correction_started
- about_roadmap_status_opened
- about_feature_handoff
- about_asset_failed

Properties aman: pillarId, featureId, connectionId, chapterId, personaId, mode, locale, source, targetRoute, featureStatus. Jangan kirim raw query atau correction text.

---

## 22. Error, Partial, Offline, dan Fallback Strategy

### Broken hero/media

Hero image → regional/brand landscape → art-directed map silhouette + typographic composition.

### Ecosystem data invalid

Tampilkan domain groups dan canonical links; jangan tampilkan graph rusak.

### Route belum tersedia

Label status + penjelasan singkat + CTA ke nearest valid feature.

### Partial team/roadmap data

Tampilkan proses dan horizon yang tervalidasi; sembunyikan item kosong.

### Offline

Manifesto, pilar, ecosystem summary, trust, roadmap, dan link internal tetap tersedia dari bundle lokal.

### Invalid query

Normalisasi ke default dan pertahankan anchor valid.

### Client island gagal

Server-rendered list dan links tetap usable.

### English belum lengkap

Gunakan fallback locale sesuai kebijakan app; jangan menampilkan campuran setengah jadi tanpa label.

---

## 23. Content Governance dan Cultural Integrity

1. Seluruh klaim utama berasal dari PRD/registry yang aktif.
2. Angka cakupan derived dari data, bukan ditulis manual di banyak file.
3. Istilah komunitas dan daerah mengikuti ejaan terbaru yang tervalidasi.
4. Hindari generalisasi satu budaya sebagai representasi seluruh region.
5. Jangan menggunakan “primitif”, “eksotis”, “belum tersentuh”, atau “autentik” tanpa konteks.
6. Budaya sakral tidak dijadikan dekorasi atau CTA wisata otomatis.
7. Foto manusia memiliki sumber, izin, dan konteks yang layak.
8. Team, partner, quote, award, user count, dan impact tidak boleh fiktif.
9. Roadmap membedakan available, in progress, planned, dan exploring.
10. Correction masuk moderation queue.
11. Updated date dan methodology mudah ditemukan.
12. English copy direview, bukan generic machine translation.

---

## 24. Strategi Aset

### Folder rekomendasi

```
public/assets/about/
  hero/
  manifesto/
  pillars/
  ecosystem/
  journeys/
  people-process/
  trust/
  roadmap/
  fallbacks/
```

### Asset manifest minimum

Setiap aset memiliki path, width, height, aspect ratio, focal point per breakpoint, alt ID/EN, caption, credit, license, usage limit, dan fallback.

### Prinsip pemilihan

- Utamakan aset existing yang konsisten dengan Route/Explore.
- Hero: lanskap, kepulauan, atau manusia-tempat yang konkret.
- Pilar: visual representatif yang tidak mengklaim satu objek mewakili seluruh Indonesia.
- Ecosystem: SVG schematic custom, bukan screenshot blur.
- Team/process: aset nyata atau diagram proses; jangan gunakan avatar stok.
- Satu aset tidak dipakai sebagai focal image pada lebih dari dua section.
- Motif/texture maksimal 2–4% dan tidak mengganggu teks.

---

## 25. Testing Strategy

### Unit/data

- Tepat tujuh pillar IDs.
- Feature IDs/routes/status valid.
- Connector tidak self-reference.
- Journey steps valid dan memiliki fallback.
- Persona/mode mapping valid.
- Statistik derived konsisten.
- Query parser menolak enum invalid.
- Asset manifest valid.
- Tidak ada forbidden navy tokens pada scope About.

### Component

- Pillar selector keyboard lengkap.
- Ecosystem node selection mempertahankan focus.
- Journey chapter prev/next aman.
- Mode preview tidak mengubah global mode tanpa aksi.
- Persona selector state benar.
- Details/accordion trust berfungsi.
- Broken image fallback tampil.
- Deep link anchor focus/offset benar.

### Integration/E2E

1. Direct `/about` → hero → Map CTA.
2. Pillar Aksara → Aksara/Archive handoff → Back restore.
3. Ecosystem Map → Province → Route flow.
4. Persona Tourist → Tourist Mode → Route prefill.
5. Persona Student → Learn Mode → Archive.
6. Trust → methodology → correction flow.
7. Feature planned → fallback route.
8. English layout → no overflow.
9. Mobile → no horizontal overflow.
10. Keyboard-only → semua interactive sections selesai.
11. Reduced motion → no information loss.
12. No-JS → narrative dan links usable.
13. Offline → core page usable.

### Quality gate

Validator About + route registry + foundation IDs + asset manifest + lint + typecheck + unit/component tests + production build + E2E desktop/mobile.

---

## 26. Visual QA Checklist Wajib

- Tidak ada navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, text navy, button navy, icon navy, atau focus navy.
- Tidak ada orb 3D, neon glow, glassmorphism, atau generic AI gradient.
- Hero memiliki focal point dan tujuan jelas.
- Tidak ada area kosong besar tanpa fungsi.
- Tidak ada overlap, overflow, broken image, atau CLS.
- Problem section bukan tiga card generik.
- Manifesto bukan kumpulan value cards.
- Seven Pillars bukan tujuh tiles identik.
- Ecosystem Atlas dapat dipahami dan bukan graph dekoratif.
- Journey Storyboard bukan carousel autoplay.
- Modes bukan pricing cards.
- Persona journeys tidak memakai avatar stok.
- Trust dan methodology mudah ditemukan.
- Roadmap tidak menyamarkan planned sebagai available.
- Foto, caption, dan map layers konsisten.
- English copy tidak overflow.
- Mobile reading order benar.
- Focus terlihat.
- CTA aman dari bottom navigation.
- Hasil terasa sengaja di-art-direct oleh desainer senior, bukan template AI.

---

## 27. Fase Implementasi

### Fase 0 — Audit dan kontrak

- Audit `/about`, navbar/footer, Route/Explore, feature registry, mode, locale, Passport, assets, metadata, dan analytics.
- Baseline lint/typecheck/test/build.
- Kunci route/anchor contract, data schema, forbidden color list, dan asset manifest.

### Fase 1 — Foundation dan narrative shell

- Route `/about`, loading/error, metadata.
- Local About tokens tanpa navy.
- Hero, Why, Manifesto.
- Server-rendered copy dan canonical links.

### Fase 2 — Identity dan ecosystem

- Seven Pillars instrument.
- Ecosystem Atlas.
- Typed connections dan route availability.
- Fallback ordered lists.

### Fase 3 — Journey dan personalization

- How It Works storyboard.
- Explore/Tourist/Learn preview.
- Persona Journey Selector.
- Back/restore behavior.

### Fase 4 — Trust dan continuity

- Heritage–Future panorama.
- Source & Stewardship Desk.
- Accessibility/resilience ledger.
- Behind the Work.
- Roadmap Horizons.

### Fase 5 — Handoff dan polish

- Ecosystem handoff.
- Final Manifesto.
- Motion choreography.
- Responsive refinement.
- Bilingual review.

### Fase 6 — QA dan demo

- Accessibility audit.
- Performance/image optimization.
- Forbidden navy audit.
- Visual QA semua viewport.
- Production build.
- Demo rehearsal 90 detik dan 3 menit.

---

## 28. Prioritas MVP

### P0 — wajib demo

- `/about` stabil.
- Hero, Why, Manifesto.
- Seven Pillars lengkap.
- Ecosystem Atlas dengan route valid.
- One core journey storyboard.
- Trust/source methodology.
- Map, Archive, Rasa, Route, Passport, Future handoff.
- Mobile/no-JS/reduced-motion fallback.
- Tidak ada navy.

### P1 — pembeda kuat

- Persona journeys.
- Three modes preview.
- Heritage–Future panorama.
- Accessibility/resilience ledger.
- Behind the Work.
- Roadmap Horizons.
- Bilingual demo path.

### P2 — premium

- Rich ecosystem transitions.
- Deep methodology route.
- Shareable manifesto chapter.
- Moderated contribution/correction.
- Additional persona paths.

### Jangan dikerjakan sebelum P0 hijau

- Video hero berat.
- 3D globe/map.
- New graph library.
- Live counters.
- Partner carousel.
- Complex CMS migration.
- Custom cursor.

---

## 29. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti company profile | Generic dan lemah | Living manifesto + product proof + real handoff |
| Semua section menjadi card grid | Generic AI | Varied editorial compositions dan chapter rhythm |
| Navy bocor dari token global | Melanggar arahan | Local tokens + code/visual audit |
| Terlalu banyak teks | Fatigue | Progressive disclosure, short lead copy, visual proof |
| Graph ekosistem membingungkan | Value tidak dipahami | Domain grouping + active dossier + list fallback |
| Peta menjadi dekorasi | Brand backbone lemah | Map selalu menghubungkan pilar/flow |
| Klaim/tim/statistik palsu | Trust rusak | Canonical data, derived count, hide unknown |
| Motion terlalu berat | Jank mobile | Transform/opacity/clip + reduced motion |
| Route mati | Flow terputus | Route registry + status + nearest fallback |
| About tidak mengonversi | User berhenti membaca | Persona routing + contextual CTA setiap chapter |
| Visual budaya stereotip | Integritas turun | Context, source, asset review, multi-region framing |
| Mobile terlalu panjang | Drop-off | Strong anchors, compact lists, progressive disclosure |

---

## 30. Acceptance Criteria

### Product

- Pengguna memahami apa, mengapa, dan bagaimana NUSANTARAYA bekerja.
- Tujuh pilar dan ekosistem dapat dijelajahi.
- Setiap persona memiliki jalur lanjut yang valid.
- Tidak ada dead CTA.
- Available/planned dibedakan jelas.

### Content/data

- Klaim sesuai sumber produk aktif.
- Statistik derived.
- Team/partner/award tidak fiktif.
- Methodology, updated status, dan correction terlihat.

### UI/UX

- Editorial, asimetris, image-led, unik, dan cohesive dengan Route/Explore.
- Tidak menyalin layout halaman lain.
- Tidak berupa SaaS landing page, bento generik, atau card wall.
- Tidak menggunakan navy dalam bentuk apa pun.
- Setiap section memiliki focal point dan ritme berbeda.

### Integration

- Map, Province, Archive, Rasa, Route, Passport, Future, RANI, dan fitur terkait memakai typed context.
- Back/refresh/anchor memulihkan context secara wajar.
- Mode preview tidak membuat perubahan tak disengaja.

### Quality

- Responsive tanpa horizontal overflow.
- WCAG AA, zoom 200%, keyboard, screen reader, forced colors, dan reduced motion.
- LCP <2,5 detik pada target mobile yang realistis.
- No-JS dan offline fallback masuk akal.
- Validator, lint, typecheck, tests, dan build lulus atau baseline terdokumentasi.

---

## 31. Definition of Done

- [ ]  Route `/about` tersedia dan stabil.
- [ ]  Creative direction **The Living Manifesto of an Archipelago** diterapkan.
- [ ]  Tidak ada navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, button navy, text navy, icon navy, atau focus navy.
- [ ]  Background utama `/about` fixed dan konsisten dari hero sampai footer, memakai warm canvas yang sama seperti halaman NUSANTARAYA lainnya.
- [ ]  Fixed texture memiliki fallback mobile, tidak memakai JavaScript scroll listener, dan tidak menyebabkan jank, flicker, CLS, atau penurunan kontras.
- [ ]  Hero menjelaskan proposisi dalam 10 detik.
- [ ]  Why section menjelaskan problem tanpa generic cards.
- [ ]  Manifesto memuat visi, misi, promise, dan nilai secara editorial.
- [ ]  Tepat tujuh pilar tersedia dengan dossier dan handoff valid.
- [ ]  Ecosystem Atlas memiliki node/connection nyata dan fallback list.
- [ ]  Product journey memiliki langkah, visual, dan CTA yang benar.
- [ ]  Explore/Tourist/Learn dijelaskan dan dapat diterapkan secara eksplisit.
- [ ]  Persona journey mengarah ke route valid.
- [ ]  Heritage–Future narrative terhubung ke Archive/Explore/Future.
- [ ]  Trust, source, cultural integrity, updated status, dan correction terlihat.
- [ ]  Accessibility dan fallback commitments dibuktikan, bukan hanya diklaim.
- [ ]  Team/process hanya memakai data nyata.
- [ ]  Roadmap membedakan status available/in-progress/planned/exploring.
- [ ]  Semua ecosystem CTA memakai canonical IDs/typed context.
- [ ]  Browser Back, refresh, deep links, dan anchors bekerja.
- [ ]  No-JS, offline, broken asset, invalid query, dan unavailable route memiliki recovery.
- [ ]  Desktop, tablet, mobile, keyboard, screen reader, zoom 200%, English, dan reduced motion diuji.
- [ ]  Tidak ada overlap, overflow, broken image, broken link, dead CTA, fake metric, atau fake content.
- [ ]  Visual QA dilakukan pada semua viewport target.
- [ ]  Production build berhasil.
- [ ]  Demo About 90 detik dan 3 menit dapat diulang stabil.

---

## 32. Demo Path Rekomendasi

### Demo 90 detik

1. Buka hero “Satu peta untuk membaca ribuan cerita Indonesia.”
2. Scroll ke Why dan tunjukkan fragmentasi yang dijahit Golden Thread.
3. Aktifkan pilar Sejarah, Rasa, dan Yatra.
4. Buka Ecosystem Atlas; pilih Map → Archive → Route.
5. Tampilkan tiga chapter How It Works.
6. Buka Trust Desk dan source status.
7. Pilih persona Turis atau Pelajar.
8. Tutup dengan CTA Nusa Map.

### Demo 3 menit

1. Hero dan proposisi.
2. Problem + manifesto.
3. Tujuh pilar dan peran peta.
4. Ecosystem Atlas lengkap.
5. Journey end-to-end.
6. Three Modes.
7. Heritage → Today → Future.
8. Trust/accessibility.
9. Roadmap status.
10. Final Manifesto → Nusa Map/Route.

---

## 33. Guardrail Terakhir

<aside>
🏆

**Halaman About NUSANTARAYA harus terasa seperti manifesto hidup sebuah produk nasional yang dikurasi oleh brand strategist, editorial designer, cartographer, cultural researcher, UX architect, dan frontend engineer terbaik—bukan halaman “About Us” hasil template AI.** Setiap gambar harus membawa konteks, setiap garis harus menghubungkan gagasan, setiap klaim harus dapat dipertanggungjawabkan, dan setiap chapter harus membawa pengguna dari pemahaman menuju eksplorasi nyata.

</aside>