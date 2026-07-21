# Planning Master Lengkap — Halaman Nusa Future NUSANTARAYA

<aside>
🌱

**NUSA FUTURE — THE REGENERATIVE ARCHIPELAGO OBSERVATORY**

**Creative Direction:** Civic Futures Editorial × Regenerative Archipelago Atlas × Eco-Technology Field Journal × Contemporary Indonesian Innovation Exhibition

**Route utama:** `/future`

**Status:** Master planning UI/UX, product strategy, content, data, frontend, ecosystem flow, motion, accessibility, performance, testing, dan quality assurance

**Aturan visual mutlak:** **JANGAN menggunakan navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, button navy, text navy, atau focus ring navy di seluruh frontend Nusa Future.**

</aside>

## 0. Kedudukan Dokumen dan Acuan

Planning ini menerjemahkan visi Nusa Future pada [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21) menjadi halaman `/future` yang production-ready dan secara eksplisit menjawab tema **Nusantara Digital City**. Bahasa desainnya harus satu keluarga dengan kualitas art direction, kedalaman interaksi, responsive craft, dan sistem lintas fitur pada Nusa Explore, Nusa Route, [Planning Master — Halaman Nusa Passport /passport NUSANTARAYA](https://app.notion.com/p/Planning-Master-Halaman-Nusa-Passport-passport-NUSANTARAYA-a132afebedb046afbbd63c6c1356c74b?pvs=21), [Planning Master Lengkap — Halaman Nusa Archive NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-Nusa-Archive-NUSANTARAYA-6c687c37cd3f4ca287505b98c5caf92a?pvs=21), dan [Planning Master Lengkap — Halaman NusaRasa NUSANTARAYA](https://app.notion.com/p/Planning-Master-Lengkap-Halaman-NusaRasa-NUSANTARAYA-c5a9ff6023d14ad397c5924657b23d17?pvs=21)—tanpa menyalin struktur layout halaman mana pun.

### Urutan prioritas implementasi

1. Menjawab tema Digital City secara jelas, konkret, dan mudah dipresentasikan.
2. Menghubungkan warisan, kebutuhan hari ini, dan masa depan Indonesia sebagai satu narasi.
3. Menampilkan inovasi yang manusiawi, inklusif, bersumber, dan tidak techno-utopian.
4. Menciptakan flow nyata ke Map, Province Atlas, Route, Passport, Archive, NusaRasa, dan RANI.
5. Memakai aset existing dari `public/` secara art-directed dan terukur.
6. Menjamin accessibility, responsiveness, performance, local fallback, dan build stability.
7. Menambahkan motion dan polish hanya setelah fungsi dan data stabil.

---

## 1. Ringkasan Eksekutif

**Nusa Future** adalah observatorium masa depan Indonesia di dalam ekosistem NUSANTARAYA. Halaman ini memperlihatkan bagaimana kota, desa, pulau, komunitas, budaya, ekonomi kreatif, mobilitas, energi, pangan, lingkungan, dan layanan publik dapat berkembang tanpa memutus hubungan dengan identitas lokal.

Halaman ini **bukan galeri gedung futuristik**, **bukan dashboard smart city generik**, **bukan kumpulan angka tanpa konteks**, dan **bukan halaman promosi IKN semata**. Pengalaman harus terasa seperti memasuki pameran masa depan Indonesia yang hidup: pengguna melihat sinyal perubahan, membuka wilayah, memahami tantangan, menelusuri solusi, membandingkan skenario, menyusun “future journey”, lalu melanjutkan ke provinsi, rute, Passport, Archive, NusaRasa, atau RANI.

### North Star Experience

> Dalam 10 detik pengguna memahami bahwa masa depan Nusantara dibangun dari hubungan antara manusia, tempat, budaya, dan teknologi. Dalam 30 detik pengguna menemukan satu bidang masa depan yang relevan. Dalam 2–3 menit pengguna memahami satu tantangan, satu solusi, satu dampak yang diharapkan, sumbernya, dan jalur untuk melanjutkan eksplorasi.
> 

### Nilai utama

- **See:** melihat sinyal masa depan di berbagai wilayah Indonesia.
- **Understand:** memahami masalah, intervensi, dampak, trade-off, dan sumber.
- **Connect:** menghubungkan warisan dengan inovasi dan kebutuhan warga.
- **Imagine:** menjelajahi skenario masa depan yang explainable, bukan prediksi palsu.
- **Act:** mengubah rasa ingin tahu menjadi rute belajar, perjalanan, atau koleksi Passport.
- **Trust:** membedakan fakta saat ini, target resmi, eksperimen, dan spekulasi editorial.

---

## 2. Sasaran Produk, KPI, dan Success Signals

### 2.1 Sasaran produk

1. Menjawab tema Nusantara Digital City dengan narasi yang terlihat dan dapat didemokan.
2. Menampilkan IKN sebagai salah satu laboratorium masa depan, bukan satu-satunya pusat cerita.
3. Memperlihatkan contoh inovasi dari kota besar, kota menengah, desa, wilayah pesisir, dan kepulauan.
4. Menjelaskan bahwa teknologi hanyalah alat; kualitas hidup, inklusi, budaya, dan keberlanjutan adalah tujuan.
5. Menghubungkan Nusa Future dengan seluruh ekosistem NUSANTARAYA melalui canonical IDs dan typed handoff.
6. Tetap berfungsi tanpa API eksternal melalui dataset lokal dan skenario terkurasi.

### 2.2 KPI MVP

| Area | Metrik | Target |
| --- | --- | --- |
| Comprehension | Pengguna memahami proposisi Nusa Future | ≤ 10 detik |
| Discovery | Waktu membuka satu future signal | ≤ 30 detik |
| Depth | Signal/chapter dibuka per sesi | ≥ 3 |
| Trust | Pengguna membuka source/evidence note | ≥ 25% |
| Cross-navigation | Handoff ke Map/Province/Route/Archive | ≥ 25% |
| Utility | Future journey disusun atau disimpan | ≥ 15% |
| Reliability | Core flow berjalan tanpa API | 100% |
| Performance | LCP mobile | &lt; 2,5 detik |
| Accessibility | Lighthouse Accessibility | ≥ 90 |

---

## 3. Persona dan Jobs to Be Done

### Warga dan explorer

“Bantu saya melihat bagaimana inovasi dapat memperbaiki hidup tanpa menghilangkan identitas daerah.”

### Pelajar/mahasiswa

“Bantu saya memahami smart city, IKN, ekonomi kreatif, energi, dan desa digital melalui contoh yang terstruktur.”

### Turis

“Bantu saya menemukan kota, desa, dan destinasi yang mengembangkan perjalanan lebih hijau, mudah, dan bertanggung jawab.”

### Pelaku kreatif/UMKM

“Bantu saya melihat hubungan budaya lokal, produk kreatif, teknologi, dan akses pasar.”

### Peneliti/guru

“Bantu saya membedakan fakta, target, eksperimen, dan skenario serta membuka sumbernya.”

### Juri

“Tunjukkan bahwa NUSANTARAYA tidak hanya merayakan masa lalu, tetapi menawarkan visi Digital City yang berguna, inklusif, dan terintegrasi.”

---

## 4. Prinsip Produk Non-Negotiable

1. **Human future before smart technology.** Kualitas hidup warga adalah tujuan; sensor, AI, dan aplikasi hanyalah alat.
2. **Many centers, not one center.** IKN penting, tetapi masa depan Indonesia tumbuh dari banyak kota, desa, pulau, dan komunitas.
3. **Heritage is an active input.** Tradisi, pengetahuan lokal, material, dan praktik komunitas dapat membentuk inovasi.
4. **Evidence before spectacle.** Visual futuristik tidak boleh menggantikan data, sumber, atau status fakta.
5. **No fake certainty.** Pisahkan kondisi saat ini, program berjalan, target resmi, prototipe, dan skenario editorial.
6. **No fake metrics.** Jangan membuat persentase efisiensi, emisi, kesiapan, atau impact score tanpa sumber.
7. **No city ranking.** Jangan menobatkan “kota terpintar” atau “wilayah paling maju” dari dataset parsial.
8. **Explain trade-offs.** Setiap solusi dapat memiliki biaya, risiko, kelompok terdampak, dan kebutuhan tata kelola.
9. **One canonical source.** Signal, province, organization, source, theme, dan route IDs dipakai bersama oleh seluruh fitur.
10. **No dead ends.** Setiap signal memiliki minimal satu next action valid.
11. **Local-first reliability.** Discovery, filtering, scenario, dan journey inti bekerja dari data lokal.
12. **No navy.** Seluruh warna gelap memakai espresso, volcanic charcoal, forest, atau deep teal hijau—bukan biru gelap.
13. **Accessible without motion.** Informasi tidak bergantung pada hover, parallax, color, drag, atau animasi.

### Non-goals MVP

- Digital twin real-time dengan data sensor langsung.
- Prediksi AI tentang kondisi kota.
- Marketplace, investasi, tender, atau transaksi.
- Klaim resmi mewakili pemerintah.
- Peta navigasi real-time kedua.
- Carbon calculator tanpa metodologi.
- Ranking smart city.
- Login, akun, leaderboard, atau social feed.
- Visualisasi 3D kota yang berat.

---

## 5. Creative Direction Final

### Nama konsep

**THE REGENERATIVE ARCHIPELAGO OBSERVATORY**

### Formula visual

Civic Futures Editorial  

× Regenerative Archipelago Atlas  

× Eco-Technology Field Journal  

× Contemporary Indonesian Innovation Exhibition  

× Solar-Punk Restraint, bukan neon sci-fi

### Karakter visual

- Hangat, optimistis, terarah, dan terasa manusiawi.
- Editorial dan asimetris seperti majalah arsitektur/kota kelas dunia.
- Menggabungkan citra lanskap, kota, manusia, material, dan sistem—bukan gedung kaca saja.
- Garis jaringan dipakai untuk menjelaskan hubungan, bukan dekorasi kosong.
- Menggunakan numbered signals, source tags, field notes, dan status evidence.
- Setiap section memiliki komposisi berbeda agar halaman memiliki ritme sinematik.
- Masa depan terasa dapat dihuni, bukan seperti antarmuka pesawat luar angkasa.

### Signature visual

**Living Future Constellation:** jaringan editorial yang menghubungkan `place → challenge → response → people → impact → next journey`. Node tidak menjadi graph ilmiah palsu; setiap hubungan harus dapat dijelaskan dari data.

### Hal yang dilarang

- Background navy/hitam dengan neon cyan.
- Hero centered dengan orb 3D, blob gradient, dan slogan AI generik.
- Grid 3 kolom card identik dari atas sampai bawah.
- Dashboard smart city penuh gauge, score, dan chart tanpa sumber.
- Glassmorphism berlebihan.
- Gedung futuristik generik yang tidak berhubungan dengan Indonesia.
- Peta dengan puluhan pin tanpa hierarchy.
- Semua section dibungkus rounded card 24–32 px.
- Infinite marquee, floating cards, 3D tilt, cursor glow, dan infinite pulse.
- Menggunakan AI sebagai dekorasi pada setiap solusi.
- Menempel motif tradisional tanpa konteks budaya.

---

## 6. Palet Lokal Nusa Future — Tanpa Navy

Gunakan semantic tokens lokal; jangan mengubah token halaman lain.

```css
--future-canvas: #F3EFE4;
--future-paper: #FFFDF6;
--future-paper-deep: #E6DDC9;
--future-ink: #29231D;
--future-charcoal: #37332C;
--future-muted: #766F63;
--future-line: #CEC3AE;
--future-solar: #D6A62E;
--future-solar-soft: #F3E4AE;
--future-terracotta: #B75B3E;
--future-coral: #D26F56;
--future-forest: #536B51;
--future-moss: #75836A;
--future-teal: #33766B;
--future-teal-soft: #D8E7DF;
--future-clay: #A77856;
--future-plum: #76596B;
--future-success: #4F6F54;
--future-warning: #9A6D22;
--future-error: #983F34;
```

### Aturan komposisi

- 65–75% parchment, ivory, warm paper.
- 15–20% espresso/charcoal untuk teks dan struktur.
- 8–12% solar, terracotta, forest, atau teal sebagai accent aktif.
- Deep teal hanya boleh bernuansa hijau yang jelas; jangan bergeser menjadi navy.
- Primary CTA: solar dengan text espresso, terracotta dengan ivory, atau espresso dengan ivory.
- Focus ring: solar/terracotta 2–3 px.
- Shadow: warm brown/charcoal transparan; tidak ada shadow biru.
- Selected state memakai icon, label, outline, dan tint—bukan warna saja.

---

## 7. Tipografi, Grid, Spacing, dan Material

### Tipografi

- Display/editorial: Playfair Display atau serif existing.
- Body/UI: Inter atau sans existing.
- Accent label: Montserrat/Outfit existing, bukan font baru.
- Hero title: 68–96 px desktop; 48–68 px tablet; 40–52 px mobile.
- H2: 46–64 px desktop; 34–44 px mobile.
- Body: 16–18 px; minimum 15 px mobile.
- Signal code: sans 11–13 px, uppercase ringan, tracking 0,08–0,12 em.
- Panjang baris body: 55–75 karakter.

### Grid

- Desktop: 12 kolom, max-width 1280–1440 px mengikuti Route/Explore.
- Gutter desktop 32–48 px; tablet 24–32 px; mobile 20–24 px.
- Gunakan 5/7, 7/5, 8/4, 4/8, dan 3/6/3 secara bergantian.
- Hindari komposisi 6/6 yang berulang.

### Spacing

4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 144. Section utama 96–144 px desktop dan 64–88 px mobile.

### Material

- Paper, map texture, translucent tracing sheet, editorial labels, dan route thread.
- Radius 8–16 px; focal media frame maksimal 20 px.
- Gunakan divider, crop, offset layers, dan whitespace sebelum shadow.
- Grain maksimal 2–3% opacity.
- Jangan membungkus setiap informasi dalam card.

---

## 8. Arsitektur Informasi Halaman

1. **Future Threshold** — Hero dan positioning.
2. **Future Signal Desk** — Search, mode, theme, dan context controls.
3. **Living Archipelago Observatory** — Peta/schematic sinyal masa depan.
4. **IKN: A City Within a Forest** — Dossier utama Kalimantan Timur.
5. **Seven Systems of Tomorrow** — Tujuh bidang masa depan.
6. **Civic Innovation Network** — Contoh lintas kota dan provinsi.
7. **Village Futures** — Desa digital, layanan dasar, dan ekonomi lokal.
8. **Creative Economy Engine** — UMKM, craft, kuliner, dan creator economy.
9. **Green & Blue Archipelago** — Energi, iklim, hutan, laut, dan circularity.
10. **Mobility & Connected Islands** — Transportasi, logistik, dan konektivitas.
11. **Future Scenario Studio** — Composer skenario explainable.
12. **People Behind the Future** — Human stories dan community lens.
13. **Evidence & Trade-off Desk** — Sumber, status, metodologi, risiko.
14. **RANI Future Guide** — Tanya jawab kontekstual lokal.
15. **Continue Across NUSANTARAYA** — Handoff lintas fitur.
16. **Future Passport & Saved Signals** — Koleksi personal.
17. **Final Future Handoff** — Penutup dan CTA.

---

# 9. Rancangan Detail Tiap Section

## Section 1 — Future Threshold / Hero

### Tujuan

Dalam satu viewport, menjelaskan bahwa Nusa Future adalah observatorium masa depan Indonesia yang manusiawi dan berakar pada tempat.

### Copy direction

- Eyebrow: **Nusa Future · Observatorium Masa Depan Nusantara**
- Heading utama: **“Masa depan Indonesia tidak lahir dari satu kota.”**
- Supporting copy: “Ia tumbuh dari banyak pulau, komunitas, kota, desa, pengetahuan lokal, dan teknologi yang bekerja untuk kehidupan yang lebih baik.”
- Primary CTA: **Buka Observatorium**
- Secondary CTA: **Jelajahi IKN dan Kalimantan Timur**
- Trust line: **Sinyal terkurasi · 7 sistem masa depan · Terhubung ke 38 provinsi**—angka harus derived dari data.

### Layout desktop

- Kiri 5 kolom: `FUTURE / 01`, heading, copy, CTA, trust line.
- Kanan 7 kolom: **Future Triptych** dari tiga fase `warisan → masa kini → masa depan`.
- `masa-depan.webp` menjadi focal portrait; `masa-kini.webp` dan `warisan.webp` muncul sebagai crop sekunder.
- `digital-nodes.svg` digunakan sebagai tracing overlay yang menghubungkan ketiga fase.
- Gunakan satu map-texture sebagai lapisan sangat halus, bukan background penuh.
- Caption rail menjelaskan bahwa kesinambungan budaya adalah sumber inovasi.

### Aset pilihan

- `/assets/heritage-future/masa-depan.webp` — focal hero.
- `/assets/heritage-future/masa-kini.webp` — secondary vertical crop.
- `/assets/heritage-future/warisan.webp` — contextual crop.
- `/assets/heritage-future/digital-nodes.svg` — network overlay.
- `/assets/heritage-future/old-map-texture.webp` — 2–4% texture.
- `/assets/ui/icons/icon-future.svg` — section mark.

### Mobile

Heading → copy → CTA → focal `masa-depan.webp` 4:5 → phase strip tiga label. Secondary image hanya dua agar layar tidak padat.

### Motion

- Heading fade-up 12 px.
- Triptych clip reveal 450–700 ms.
- Node line draw satu kali setelah media stabil.
- Phase labels reveal 60 ms stagger.
- Reduced motion: statis/fade ≤120 ms.

### Acceptance

- Tidak ada navy atau sci-fi glow.
- LCP media memiliki dimensions dan responsive `sizes`.
- Proposisi dipahami dalam 10 detik.

---

## Section 2 — Future Signal Desk / Discovery Controls

### Tujuan

Membantu pengguna memulai dari wilayah, sistem, tantangan, atau kata kunci tanpa mengubah halaman menjadi dashboard filter.

### Kontrol

1. Search: “Cari kota, provinsi, program, tantangan, atau inovasi…”
2. Mode: Explore / Tourist / Learn.
3. Future theme: Kota & layanan, desa digital, ekonomi kreatif, energi, iklim, mobilitas, pangan, konektivitas.
4. Region/province.
5. Signal status: current, in-progress, target, prototype, editorial scenario.
6. Scale: community, village, city, regional, national.
7. Sort: relevansi, terbaru diperbarui, source completeness.
8. Active context summary, result count, Reset.

### Visual

- Search berada pada garis observatory ledger, bukan kotak raksasa.
- Theme selector berupa **system tabs** dengan icon sederhana dan number code.
- Filter lanjutan berada di disclosure.
- Active filters menyerupai field labels/tracing tags.
- Satu sticky ringan setelah hero diperbolehkan, tetapi tidak menutup navbar.

### Behavior

- Search lokal dengan alias dan canonical IDs.
- Debounce 150–250 ms.
- URL state memakai allowlist.
- Query kosong menampilkan curated signals.
- Zero result menawarkan hapus filter, theme terkait, wilayah lain, atau RANI.
- Jangan menampilkan AI-generated percentage match.

### Accessibility

Form/label nyata, result count `aria-live="polite"`, clear button, Escape behavior, dan focus tidak lompat saat hasil berubah.

---

## Section 3 — Living Archipelago Observatory

### Tujuan

Menunjukkan bahwa masa depan Indonesia tersebar di seluruh kepulauan tanpa membuat map engine kedua.

### Bentuk visual

- Gunakan siluet/schematic Indonesia yang ringan.
- Signal dikelompokkan per region dan theme; hindari pin berlebihan.
- `digital-nodes.svg` menjadi connector network yang mengikuti active region.
- `pin-kota-nusantara.svg` dipakai khusus untuk IKN, bukan sebagai pin universal.
- Side dossier menjelaskan active region: challenges, current signals, people/sector, dan next action.

### Layout desktop

- 8 kolom observatory canvas.
- 4 kolom Active Region Dossier.
- Bagian bawah: compact signal ledger 3–5 item.

### Interaction

- Hover/focus menyorot region; click mengaktifkan.
- Search/theme mengubah signal count dan dossier.
- Klik signal membuka Quick View.
- CTA “Lihat semua sinyal wilayah” menerapkan filter dan scroll ke Civic Network.
- CTA “Buka di Nusa Map” mengirim `layer=future` dan region/province context.

### Aset

- `/assets/explore/layers/future.webp` sebagai optional contextual visual, bukan full background.
- `/assets/heritage-future/digital-nodes.svg`.
- `/assets/map/pins/pin-kota-nusantara.svg`.
- Province `modern.webp` sebagai preview dossier.

### Mobile

Region index 01–07 → active dossier → schematic map → signal list. Semua dapat dioperasikan tanpa drag.

### Guardrail

- Ukuran node tidak boleh mengesankan ranking jika hanya merepresentasikan jumlah data.
- Coverage parsial wajib diberi disclosure.

---

## Section 4 — IKN: A City Within a Forest

### Tujuan

Membuat IKN menjadi anchor demo yang kuat, tetapi tetap kritis, manusiawi, dan terhubung ke Kalimantan Timur.

### Narasi

Bukan “kota sempurna masa depan”. Gunakan struktur:

1. **Place:** Kalimantan Timur, lanskap, dan komunitas.
2. **Promise:** visi kota, konektivitas, layanan, dan keberlanjutan.
3. **Systems:** transportasi, energi, air, ruang hijau, layanan digital.
4. **People:** warga, pekerja, komunitas lokal, pengunjung.
5. **Trade-offs:** ekologi, pembiayaan, inklusi, perpindahan, tata kelola.
6. **Evidence:** status saat ini, target resmi, dan sumber.

### Layout desktop

- 7 kolom cinematic landscape menggunakan `modern.webp` Kalimantan Timur.
- 5 kolom **IKN Field Dossier** seperti lembar arsitek/editorial.
- Hero image tidak diberi overlay gelap navy; gunakan warm gradient transparent ke parchment jika teks berada di tepi.
- Di bawah: five-system route line dengan numbered chapters.
- `pin-kota-nusantara.svg` menjadi brass marker.

### Aset

- `/assets/province/kalimantan-timur/modern.webp` — utama.
- `/assets/province/kalimantan-timur/hero.webp` — contextual landscape.
- `/assets/province/kalimantan-timur/destination.webp` — secondary frame.
- `/assets/map/pins/pin-kota-nusantara.svg` — location mark.
- `/assets/passport/badges/themes/future-city-explorer.png` — reward preview, bukan dekorasi hero.

### CTA

- **Buka Atlas Kalimantan Timur**.
- **Susun Rute Warisan–IKN**.
- **Tanya RANI tentang IKN**.
- **Lihat Sumber dan Trade-off**.

### Motion

Chapter indicator dan image crossfade 180–240 ms. Tidak ada drone parallax atau zoom tak berujung.

### Content guardrail

- Status proyek harus menyebut tanggal `updatedAt`.
- Target resmi tidak ditampilkan sebagai hasil yang sudah tercapai.
- Hindari propaganda maupun penolakan simplistik; tampilkan konteks dan trade-off.

---

## Section 5 — Seven Systems of Tomorrow

### Tujuan

Mengorganisasi masa depan sebagai sistem kehidupan, bukan daftar teknologi.

### Tujuh sistem

1. **Civic Life** — layanan publik, kesehatan, pendidikan, partisipasi.
2. **Connected Mobility** — transportasi, logistik, antarpulau.
3. **Regenerative Environment** — hutan, air, energi, limbah, iklim.
4. **Creative Economy** — UMKM, craft, kuliner, creator ecosystem.
5. **Digital Villages** — akses, literasi, layanan, ekonomi lokal.
6. **Resilient Food & Ocean** — pangan, pesisir, perikanan, agroforestry.
7. **Living Heritage** — budaya, bahasa, material, dan pengetahuan lokal dalam inovasi.

### Komposisi

- Bukan tujuh card identik.
- Satu active system menjadi **open observatory plate** 7 kolom.
- Dua sistem medium stacked di sisi kanan.
- Empat sisanya menjadi ordered signal index.
- Saat sistem dipilih, update media, challenge, signals, dan linked provinces tanpa full remount.

### Card/plate anatomy

- System number.
- Human need.
- Challenge statement.
- 2–4 response patterns.
- Linked province signals.
- Evidence status.
- CTA “Buka sistem”.

### Mobile

Horizontal index 01–07 dengan tombol prev/next; active plate full width; ordered list tetap tersedia tanpa swipe.

---

## Section 6 — Civic Innovation Network

### Tujuan

Menampilkan contoh lintas kota/provinsi secara terstruktur dan tidak ranking-oriented.

### Isi

Contoh signals dapat berasal dari:

- layanan publik digital,
- transportasi rendah emisi,
- ruang publik dan walkability,
- pengelolaan sampah,
- mitigasi banjir,
- pendidikan/telemedicine,
- keterbukaan data,
- creative hubs,
- energi terbarukan,
- konservasi berbasis komunitas.

Semua harus bersumber dan diberi status.

### Layout

**Editorial Signal Field**, bukan card grid:

- Satu featured signal 6 kolom.
- Dua standard signal 3 kolom.
- Compact evidence rows di bawah.
- Province `modern.webp` dipakai dengan crop konsisten dan focal point.

### Signal anatomy

- Signal ID dan title.
- Place/province.
- Theme/system.
- Problem addressed.
- Response/intervention.
- Who benefits.
- Status.
- Source completeness.
- Risks/trade-offs.
- Quick View, Province, Save.

### Filter behavior

Sinkron dengan Future Signal Desk. Load More lebih disarankan daripada infinite scroll.

---

## Section 7 — Village Futures / Desa yang Tetap Menjadi Rumah

### Tujuan

Menghindari narasi bahwa masa depan hanya milik kota besar.

### Fokus

- Akses internet dan literasi digital.
- Layanan pendidikan/kesehatan jarak jauh.
- Pemasaran produk lokal.
- Pariwisata berbasis komunitas.
- Pengelolaan air/energi skala lokal.
- Pemetaan partisipatif.
- Pelestarian bahasa dan pengetahuan lokal.
- Logistik wilayah terpencil.

### Creative layout

- Bentuk **Field Journal Spread** 5/7.
- Kiri: human story dan handwritten-style field annotations yang tetap terbaca.
- Kanan: landscape/modern asset + system diagram sederhana.
- Tiga “what changed” rows; bukan metric cards.

### Flow

Village signal → Province Atlas → Archive craft/story → NusaRasa product → Route responsible tourism → Passport save.

### Guardrail

Jangan menggunakan bahasa “desa tertinggal yang diselamatkan teknologi”. Tonjolkan agency, kebutuhan lokal, dan co-design.

---

## Section 8 — Creative Economy Engine

### Tujuan

Menghubungkan budaya hidup dengan UMKM, kuliner, craft, desain, dan distribusi digital.

### Subthemes

- Craft dan material innovation.
- Kuliner dan traceability.
- Creator economy dan storytelling.
- Digital storefront/logistics sebagai enabler, bukan marketplace di NUSANTARAYA.
- Creative hubs dan education.
- IP, attribution, dan benefit sharing.

### Layout

Bentuk **Material-to-Market Ribbon**:

`heritage knowledge → maker/community → contemporary adaptation → distribution → visitor/learner → reinvestment`.

Gunakan image crops dari Archive, NusaRasa, dan province modern sebagai satu alur, bukan product grid.

### CTA

- Buka item Archive terkait.
- Buka hidangan NusaRasa.
- Buka Province Atlas.
- Susun creative journey di Route.
- Tanya RANI tentang konteks budaya.

### Integrity

Tidak menampilkan harga, transaksi, atau klaim pendapatan tanpa sumber. Attribution dan cultural sensitivity harus terlihat.

---

## Section 9 — Green & Blue Archipelago

### Tujuan

Menempatkan hutan, laut, air, energi, dan ketahanan iklim sebagai infrastruktur masa depan.

### Struktur

1. Challenge landscape.
2. Current/verified signals.
3. Community/ecosystem role.
4. Future target atau scenario.
5. Trade-offs.
6. Related regions dan route.

### Layout

- Full-width breathing section dengan image-led horizontal landscape.
- Floating overlay dilarang; gunakan caption dock di bawah media.
- Four ecosystem lenses sebagai vertical index: Forest, Water, Energy, Ocean.
- Active lens memperbarui field notes.

### Aset

Gunakan `modern.webp` dan destination assets daerah yang relevan, bukan stok panel surya generik jika aset lokal tersedia.

### Motion

Slow clip reveal saat masuk viewport; lens crossfade 180–240 ms. Tidak ada particle hijau atau looping leaves.

---

## Section 10 — Mobility & Connected Islands

### Tujuan

Menjelaskan konektivitas sebagai perjalanan antarpulau, akses, logistik, dan mobilitas manusia—bukan sekadar kendaraan futuristik.

### Visual

- Gunakan `/assets/heritage-future/route-connector.svg` sebagai route thread.
- Schematic archipelago route menghubungkan 3–5 nodes.
- Setiap node memiliki transport/connection mode, purpose, dan uncertainty label.
- Jangan menggambar rute geografis presisi jika datanya editorial.

### Isi

- Urban public transport.
- Ferry dan konektivitas pulau.
- Last-mile/logistics.
- Digital connectivity.
- Accessible mobility.
- Walking/cycling/public realm.

### Integration

CTA ke Nusa Route mengirim constraints yang benar; tidak membuat estimasi durasi/biaya palsu.

---

## Section 11 — Future Scenario Studio

### Tujuan

Menjadi signature interactive feature dan wow moment utility halaman.

### Prinsip

Composer bukan ramalan AI. Ia menyusun **skenario editorial explainable** dari blok data terkurasi.

### Input

- Place: region/province.
- Priority maksimal 3: layanan, mobilitas, ekonomi kreatif, lingkungan, desa, pangan, budaya.
- Time horizon: 2030 / 2045 / “next decade”—hanya sebagai framing.
- Perspective: citizen, traveler, learner, maker.
- Constraint: low connectivity, archipelago logistics, climate risk, heritage sensitivity.

### Output

**Future Expedition Dossier**:

- Scenario title.
- Place and priorities.
- Current context.
- 3–5 signals/responses.
- Who benefits.
- Risks/trade-offs.
- Evidence status.
- Related Province/Archive/Rasa/Route.
- CTA Save, Open Map, Build Route, Ask RANI.

### Layout desktop

Composer 5 kolom; live dossier 7 kolom seperti tracing-paper blueprint di atas warm paper. Dossier tidak memakai dashboard cards.

### Rules

- Deterministik dan versioned.
- Tidak menampilkan confidence percentage.
- Semua sentences berasal dari curated templates/data.
- Status `scenario` terlihat jelas.
- Save tidak memberi completed stamp.
- Route handoff prefill, tidak auto-submit.

### Mobile

Step-by-step disclosure; live preview setelah minimal input valid; sticky action aman dari bottom navigation.

---

## Section 12 — People Behind the Future

### Tujuan

Mencegah halaman menjadi katalog infrastruktur tanpa manusia.

### Bentuk

- Satu human story utama dengan 3–5 chapters.
- Maksimal tiga alternative story strips.
- Story roles: maker, teacher, health worker, mobility user, fisher/farmer, local researcher, community organizer.
- Gunakan composite/editorial profile hanya jika tidak mengklaim orang nyata; beri label jelas.

### Chapters

Context → Challenge → Local knowledge → Tool/response → Change/trade-off → Next need.

### Guardrail

Tidak membuat kutipan palsu. Gunakan narasi editorial atau sumber wawancara nyata dengan izin.

---

## Section 13 — Evidence & Trade-off Desk

### Tujuan

Menjadikan trust sebagai bagian visual utama, bukan footnote tersembunyi.

### Isi

- Methodology.
- Source registry.
- Status taxonomy.
- Updated/reviewed date.
- Coverage disclosure.
- Risks dan trade-offs.
- Glossary smart city/digital twin/regenerative city.
- Suggest correction.

### Status taxonomy

- `current` — kondisi/program terdokumentasi.
- `in-progress` — sedang berjalan.
- `official-target` — target resmi, belum tentu tercapai.
- `prototype` — eksperimen/pilot.
- `editorial-scenario` — skenario NUSANTARAYA, bukan prediksi.

### Visual

Bibliography + tracing notes + status stamps. Jangan memakai chart dashboard gelap.

---

## Section 14 — RANI Future Guide

### Tujuan

Membantu pengguna memahami signal dan trade-off dengan fallback lokal.

### Quick prompts

- “Apa hubungan IKN dengan Kalimantan Timur?”
- “Bagaimana budaya lokal dapat membentuk kota masa depan?”
- “Apa contoh masa depan desa digital?”
- “Bandingkan mobilitas dan ekonomi kreatif tanpa menentukan pemenang.”
- “Buat future journey 5 hari untuk belajar kota dan budaya.”
- “Tampilkan sumber untuk signal ini.”

### Context minimum

locale, mode, activeTheme, signalId, provinceId, scenarioId, sourceRefs.

### Rules

- RANI tidak mengarang statistik atau status proyek.
- Jika data kurang, jawab jujur dan arahkan ke Source Desk.
- Action harus membuka route yang benar-benar tersedia.
- Core answer berasal dari local knowledge/presets.

---

## Section 15 — Continue Across NUSANTARAYA

Gunakan constellation/radial editorial handoff, bukan grid feature cards.

| Tujuan | Context dikirim | Behavior |
| --- | --- | --- |
| Nusa Map | signalId, provinceId, regionId, layer=future | Fokus wilayah dan summary relevan |
| Province Atlas | provinceId, futureSignalId | Buka chapter Potensi Modern |
| Nusa Route | provinceIds, interests, scenarioId | Prefill planner, tidak auto-submit |
| Nusa Passport | savedSignalId/scenarioId, status=saved | Simpan eksplisit, bukan completed |
| Nusa Archive | heritage/craft/material refs | Buka item budaya terkait |
| NusaRasa | food/UMKM/traceability refs | Buka kuliner dan konteks kreatif |
| RANI | canonical IDs + sourceRefs | Penjelasan lokal dan bersumber |
| Explore Recommended Journey | mode, region, theme, signal | Buat journey context yang dapat diedit |

### Rules

- Typed payload dan canonical IDs.
- Jangan mengirim DOM text.
- CTA disembunyikan atau memakai fallback jujur jika target belum tersedia.
- Browser Back memulihkan theme, region, signal, scenario, dan scroll.

---

## Section 16 — Future Passport & Saved Signals

### Isi

- Recently viewed signals.
- Saved signals.
- Saved scenarios.
- Future City Explorer badge progress.
- Continue learning.

### Behavior

- Local-first, versioned, hydration-safe.
- Save idempotent.
- Simpan IDs, bukan object penuh.
- Membuka/simpan signal tidak otomatis memberi stamp.
- Badge hanya terbuka dari criteria yang eksplisit dan diuji.

### Visual

Seperti tray observatory: satu saved scenario dominan, signal compact di sisi, badge sebagai foil seal—bukan carousel autoplay.

---

## Section 17 — Final Future Handoff

### Copy

**“Masa depan Nusantara bukan satu gambar yang sudah selesai. Ia adalah perjalanan yang kita pelajari, rancang, dan jaga bersama.”**

### CTA

- Primary: **Susun Future Journey**.
- Secondary: **Buka Nusa Map**.
- Tertiary: **Lihat Sumber dan Metodologi**.

Gunakan satu image crop kuat dari `future-preview-v2.webp`, route connector kecil, dan whitespace luas. Jangan membuat giant CTA card.

---

## 10. Flow Pengguna Utama

### 10.1 Explorer

Home → Nusa Future → Hero → Observatory → pilih wilayah → signal → Province Atlas/Map.

### 10.2 IKN flow

Home/Feature Preview → `/future#ikn` → IKN Dossier → evidence/trade-off → Kalimantan Timur Atlas → Route Warisan–IKN → Passport.

### 10.3 Student/Learn

Future → Learn Mode → Seven Systems → signal → Source Desk → Archive/Province related → save learning scenario.

### 10.4 Tourist

Tourist Mode → Green & Blue/Mobility → province signal → Route Planner → etiquette/context → Passport.

### 10.5 Maker/creative economy

Archive craft atau NusaRasa → Future Creative Economy → maker ecosystem → Province Atlas → future journey.

### 10.6 Village future

Observatory → Digital Villages → human story → province → RANI → Route/Archive.

### 10.7 Scenario flow

Future → Scenario Studio → pilih place/priorities → live dossier → save → prefill Route → Passport.

### 10.8 Demo juri 90 detik

Hero → Observatory → pilih Kalimantan Timur → IKN Dossier → Seven Systems → buka Creative Economy/Green signal → Scenario Studio → Route prefill → save ke Passport → English/Tourist quick switch.

---

## 11. Route dan URL Contract

### Canonical routes

- Landing: `/future`
- Optional deep signal: `/future/[slug]` hanya jika konten cukup.

### Query proposal

`/future?q=ikn&theme=regenerative-environment&region=kalimantan&status=in-progress&mode=learn`

### Anchor canonical

- `#observatory`
- `#ikn`
- `#systems`
- `#civic-network`
- `#village-futures`
- `#creative-economy`
- `#green-blue`
- `#mobility`
- `#scenario-studio`
- `#people`
- `#evidence`
- `#rani-future`
- `#saved-future`

### Handoff proposal

- Future → Map: `/explore?source=future&layer=future&province=kalimantan-timur`
- Future → Route: `/routes?source=future&region=kalimantan&interests=modern,history&scenario=...`
- Province → Future: `/future?source=province-atlas&province=kalimantan-timur`
- Archive → Future: `/future?source=archive&theme=creative-economy&item=...`
- NusaRasa → Future: `/future?source=nusarasa&theme=creative-economy&dish=...`

### Rules

- Semua IDs dan enums di-allowlist.
- Invalid query diabaikan tanpa crash.
- Filter memakai `replace`; deep navigation memakai `push`.
- Back memulihkan state dan scroll.
- Jangan menyimpan free-text sensitif di URL.

---

## 12. Search, Filter, dan Ranking Deterministik

### Ranking

1. Exact title/alias.
2. Exact place/province/theme.
3. Challenge/response keyword match.
4. Active mode relevance.
5. Evidence/source completeness.
6. Editorial priority.
7. Stable ID tie-break.

### Aturan

- Tidak random.
- Tidak menampilkan match score.
- Search tidak menyimpulkan impact dari keyword.
- Status filter harus membaca field canonical.
- Analytics tidak mengirim raw query.

---

## 13. State Matrix

- **Default:** curated national signals + IKN feature.
- **Searching:** query, highlight, result count.
- **Filtered:** active Future Signal Desk context.
- **Region active:** Observatory dossier sinkron.
- **Signal active:** Quick View/open dossier.
- **Scenario composing:** draft lokal dan valid.
- **Scenario generated:** result explainable dan versioned.
- **No result:** recovery suggestions.
- **Loading:** stable skeleton.
- **Partial data:** valid fields + disclosure.
- **Error:** retry + curated fallback.
- **Offline:** local signals/scenarios/shelf tetap usable.
- **Saved:** `aria-pressed` + idempotent state.
- **Context changed:** prompt ringan; tidak auto-replace bacaan.
- **Broken asset:** layered fallback.
- **Invalid slug/query:** safe editorial recovery.
- **Reduced motion:** static composition.

---

## 14. Data Model Canonical

```tsx
type FutureThemeId =
  | 'civic-life'
  | 'connected-mobility'
  | 'regenerative-environment'
  | 'creative-economy'
  | 'digital-villages'
  | 'food-ocean-resilience'
  | 'living-heritage';

type FutureSignalStatus =
  | 'current'
  | 'in-progress'
  | 'official-target'
  | 'prototype'
  | 'editorial-scenario';

type FutureSignal = {
  id: string;
  slug: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  signalStatus: FutureSignalStatus;
  themeIds: FutureThemeId[];
  provinceIds: string[];
  regionIds: string[];
  scale: 'community' | 'village' | 'city' | 'regional' | 'national';
  localeContent: {
    id: FutureSignalLocale;
    en?: FutureSignalLocale;
  };
  aliases: string[];
  challengeIds: string[];
  responseIds: string[];
  beneficiaryIds?: string[];
  tradeOffIds: string[];
  media: FutureMedia[];
  sourceRefs: string[];
  relatedSignalIds: string[];
  relatedFeatureRefs: FutureFeatureRef[];
  evidenceDate?: string;
  updatedAt: string;
  reviewedAt?: string;
};

type FutureScenario = {
  id: string;
  version: string;
  provinceId?: string;
  regionId?: string;
  priorityThemeIds: FutureThemeId[];
  perspective: 'citizen' | 'traveler' | 'learner' | 'maker';
  horizon: '2030' | '2045' | 'next-decade';
  constraintIds: string[];
  signalIds: string[];
  tradeOffIds: string[];
  generatedBy: 'local-rule-engine';
  createdAt: string;
};
```

### Validation minimum

- ID/slug unik.
- Province/region/theme/status/source valid.
- Published signal memiliki title, summary, challenge, response, status, source, dan visual/fallback.
- Official target memiliki source dan date.
- Editorial scenario diberi label jelas.
- Related IDs valid dan tidak self-reference.
- Media memiliki alt, dimensions, focal point, credit/license.
- English content hanya dianggap siap jika benar-benar ditulis/review.
- Trade-off wajib untuk signal berdampak besar.

### Target MVP

- 28–42 signals berkualitas.
- Tujuh future systems terwakili.
- Tujuh region terwakili.
- 8–12 deep showcase.
- IKN dossier lengkap.
- 6 human/community stories.
- 6 curated scenario templates.
- Kualitas dan sumber lebih penting daripada jumlah.

---

## 15. Strategi Aset Existing

### Aset hero dan narrative

- `/assets/heritage-future/masa-depan.webp` — focal hero.
- `/assets/heritage-future/masa-kini.webp` — phase transition.
- `/assets/heritage-future/warisan.webp` — heritage anchor.
- `/assets/heritage-future/digital-nodes.svg` — Living Future Constellation.
- `/assets/heritage-future/route-connector.svg` — mobility dan handoff.
- `/assets/heritage-future/old-map-texture.webp` dan varian — texture maksimal 2–4%.

### Aset IKN/Kalimantan Timur

- `/assets/province/kalimantan-timur/modern.webp`.
- `/assets/province/kalimantan-timur/hero.webp`.
- `/assets/province/kalimantan-timur/destination.webp`.
- `/assets/province/kalimantan-timur/thumb.webp`.
- `/assets/map/pins/pin-kota-nusantara.svg`.
- `/assets/passport/stamps/kalimantan-timur.png`.
- `/assets/passport/badges/themes/future-city-explorer.png`.

### Aset network dan regional

- `/assets/explore/layers/future.webp`.
- `/assets/explore/journeys/journey-future.webp`.
- `/assets/features/future-preview-v2.webp`.
- `/assets/province/[province]/modern.webp` untuk civic/regional signals.

### Aset UI

- `/assets/ui/icons/icon-future.svg` diutamakan daripada PNG.

### Aturan pemakaian

1. Jangan memakai satu aset pada lebih dari dua focal section.
2. Hero menggunakan `priority`; aset below-fold lazy.
3. Gunakan focal point dan crop per breakpoint.
4. SVG dekoratif `aria-hidden`; informasi tetap tersedia dalam teks.
5. Old-map texture tidak boleh menurunkan contrast.
6. Province modern asset harus sesuai konteks signal; jangan dipakai sebagai bukti program.
7. Badge/stamp hanya muncul saat Passport context relevan.
8. Buat asset manifest dengan width, height, ratio, focal point, alt ID/EN, credit, license, dan fallback.

### Fallback hierarchy

signal image → province `modern.webp` → explore future image → art-directed paper + icon + node line.

---

## 16. Component Architecture Rekomendasi

```
src/app/future/
  page.tsx
  loading.tsx
  error.tsx

src/components/future/
  future-hero/
  future-signal-desk/
  archipelago-observatory/
  ikn-dossier/
  future-systems/
  civic-network/
  village-futures/
  creative-economy/
  green-blue-archipelago/
  mobility-network/
  scenario-studio/
  people-stories/
  evidence-desk/
  rani-future/
  ecosystem-handoff/
  future-shelf/

src/data/future/
  signals.ts|json
  themes.ts
  challenges.ts
  responses.ts
  tradeOffs.ts
  scenarios.ts
  humanStories.ts
  sourceRegistry.ts
  futureAssetManifest.ts

src/lib/future/
  futureSchema.ts
  searchFutureSignals.ts
  filterFutureSignals.ts
  rankFutureSignals.ts
  buildFutureScenario.ts
  parseFutureQuery.ts
  resolveFutureRelations.ts
  mapFutureSignalToViewModel.ts
  validateFutureData.ts

src/types/future.ts
src/hooks/useFutureDiscovery.ts
src/hooks/useFutureScenario.ts
src/hooks/useFutureShelf.ts
```

### Engineering rules

- Audit existing repository sebelum menetapkan path final.
- Reuse container, navbar, mode, locale, motion, image, analytics, focus, error, persistence, province, dan region utilities.
- Jangan membuat province/region registry kedua.
- Pisahkan schema/ranking/scenario dari JSX.
- Komponen menerima ViewModel.
- Server page menangani metadata/static shell; client islands menangani state interaktif.
- Strict TypeScript; tidak ada `any` baru.
- Jangan menambah library map, chart, atau animation jika SVG/CSS/Framer existing cukup.

---

## 17. Frontend State Architecture

### Layers

1. Canonical data: signals/themes/challenges/sources.
2. URL state: query, region, province, theme, status, mode, active signal.
3. Local UI: active chapter, disclosure, Quick View.
4. Scenario draft: versioned local state.
5. Persisted state: saved signals/scenarios/recently viewed.
6. Shared app: locale, mode, Passport, selected province context.

### Rules

- URL/context lebih tinggi dari local default.
- Invalid state dinormalisasi aman.
- Derived counts tidak disimpan ulang.
- LocalStorage hanya IDs, version, dan timestamps.
- Quick View tidak membuat history spam.
- Context change tidak mengganti content yang sedang dibaca tanpa konfirmasi.

---

## 18. Responsive Blueprint

### Desktop ≥1280 px

- Hero 5/7 triptych.
- Signal Desk sticky ringan.
- Observatory 8/4.
- IKN dossier 7/5.
- Systems open plate + index.
- Civic Network editorial 12 kolom.
- Scenario Studio 5/7.

### Laptop 1024–1279 px

- Heading/padding diperkecil.
- Pertahankan asimetri tanpa panel sempit.
- Civic Network 2–3 column editorial composition.

### Tablet 768–1023 px

- Hero stacked.
- Controls wrap/disclosure.
- Observatory full width + dossier di bawah.
- IKN image → dossier.
- Systems active plate full width.
- Scenario composer stacked dengan preview di bawah.

### Mobile ≤767 px

Reading order:

1. Hero copy.
2. Hero media.
3. Signal Desk.
4. Observatory.
5. IKN.
6. Seven Systems.
7. Civic Network.
8. Village Futures.
9. Creative Economy.
10. Green & Blue.
11. Mobility.
12. Scenario Studio.
13. People.
14. Evidence.
15. RANI.
16. Saved Future.
17. Final CTA.

Rules:

- Gutter 20–24 px.
- Touch target ≥44×44 px.
- Tidak ada horizontal page overflow.
- Secondary filters masuk disclosure.
- Schematic map menjadi region selector.
- Quick View full-screen.
- Sticky CTA aman dari bottom navigation.
- Tidak ada informasi hover-only.

### Viewport QA

360×800, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080.

---

## 19. Motion Choreography

### Signature motion

- Hero triptych clip reveal satu kali.
- Digital nodes line draw 450–700 ms.
- Observatory node reveal 40–70 ms.
- Region dossier crossfade 180–240 ms.
- IKN chapter line draw satu kali.
- Systems plate shift 8–12 px.
- Signal image crossfade.
- Mobility connector draw.
- Scenario dossier paper reveal.
- Quick View slide 220–300 ms.
- CTA arrow shift 3–4 px.

### Batasan

- UI motion 150–300 ms.
- Transform, opacity, dan clip sederhana.
- Tidak ada parallax besar, particle field, infinite pulse, 3D tilt, cursor glow, atau autoplay carousel.
- Jangan membuat loading palsu.
- Reduced motion menonaktifkan draw, stagger, slide besar, smooth scroll, dan morph.
- Motion tidak boleh menyebabkan CLS.

---

## 20. Accessibility

- Semantic `<main>`, `<section>`, dan hierarchy H1/H2/H3.
- Search memakai `<form>` dan label nyata.
- Filters menggunakan fieldset/legend, tabs, checkbox, atau radio semantics yang benar.
- Observatory memiliki list/button alternatif untuk seluruh region/signal.
- Decorative node/connector `aria-hidden`.
- Result berupa list; DOM order sama dengan visual order.
- Quick View focus trap, Escape, dan restore focus.
- Save memakai `aria-pressed`.
- Status signal tidak dibedakan dengan warna saja.
- Scenario result diumumkan melalui live region ringkas.
- Alt image spesifik dan tidak mengulang caption.
- Contrast WCAG AA.
- Focus ring solar/terracotta, bukan navy.
- Zoom 200% tetap usable.
- Forced colors menunjukkan selected state.
- Semua drag/scroll mempunyai tombol alternatif.

---

## 21. Performance, SEO, Security, dan Privacy

### Performance

- Summary data lokal/server-rendered.
- Jangan bundle deep content semua signal ke landing.
- Lazy-load Civic Network lanjutan, People media, RANI, dan Scenario extras.
- LCP image optimized; explicit dimensions dan `sizes`.
- Gunakan SVG/schematic; jangan memuat map engine berat.
- Search lokal ideal &lt;50 ms; feedback &lt;100 ms.
- Hindari long task &gt;200 ms.
- Jangan preload seluruh province modern assets.

### SEO

- Canonical `/future`.
- Metadata: **Nusa Future — Dari Warisan Menuju Nusantara Digital**.
- Description menjelaskan IKN, smart city, desa digital, ekonomi kreatif, mobilitas, dan lingkungan.
- OpenGraph memakai `future-preview-v2.webp` atau social asset khusus bila tersedia.
- Breadcrumb dan structured data hanya jika valid.
- Filter URL besar `noindex` bila perlu.
- Sitemap hanya route dan published deep signal jika dibuat.

### Security/privacy

- Allowlist query dan IDs.
- Jangan render raw HTML.
- Sanitasi source URLs.
- Scenario tidak menyimpan data pribadi.
- Jangan meminta geolocation.
- AI/RANI payload hanya canonical IDs dan context minimum.
- Correction dimoderasi.

---

## 22. Analytics Events

Gunakan adapter existing.

- future_page_viewed
- future_search_started
- future_search_submitted
- future_filter_changed
- future_zero_result
- future_region_selected
- future_signal_quick_viewed
- future_signal_opened
- future_signal_saved
- future_signal_unsaved
- future_ikn_chapter_opened
- future_system_selected
- future_village_story_opened
- future_creative_handoff
- future_green_blue_lens_selected
- future_mobility_node_selected
- future_scenario_started
- future_scenario_generated
- future_scenario_saved
- future_map_handoff
- future_atlas_handoff
- future_route_handoff
- future_archive_handoff
- future_rasa_handoff
- future_rani_opened
- future_source_opened
- future_asset_failed
- future_correction_submitted

Properties aman: signalId, themeIds, provinceId, regionId, status, mode, locale, source, resultCount bucket. Jangan kirim raw query, scenario free text, atau correction text.

---

## 23. Error, Empty, Partial, dan Offline Strategy

### Zero result

- Koreksi ejaan.
- Hapus satu filter.
- Tawarkan theme/region terdekat.
- Buka curated national signals.
- Tanya RANI dengan context aman.

### Partial data

Tampilkan data valid dan label “Dampak/status belum terdokumentasi lengkap”. Jangan menyimpulkan sendiri.

### Broken asset

Signal image → province modern → future layer asset → art-directed fallback.

### Incomplete source

Signal tetap dapat tampil sebagai preview bila label `review` jelas; tidak masuk deep showcase/demo utama.

### Scenario failure

Gunakan curated scenario preset; jangan blank atau membuat output random.

### Offline

Search, filters, IKN summary, systems, curated signals, scenario presets, dan saved shelf tetap bekerja.

### Invalid query/slug

Tampilkan safe recovery editorial.

---

## 24. Content Governance dan Integrity

1. Setiap published signal memiliki source registry.
2. Program berjalan dan target resmi dibedakan secara eksplisit.
3. Jangan membuat impact claim dari visual atau aspirasi.
4. Tanggal evidence dan updated date terlihat.
5. Hindari jargon “AI-powered”, “revolutionary”, dan “world-class” tanpa isi.
6. Jangan menggambarkan teknologi sebagai solusi tunggal.
7. Komunitas lokal tidak diposisikan sebagai objek pasif.
8. Trade-off dan risiko tidak disembunyikan.
9. Visual gedung tidak dianggap bukti smart city.
10. Correction masuk moderation queue.
11. English copy direview, bukan generic translation.
12. Aset memiliki credit/license.

---

## 25. Testing Strategy

### Unit/data

- IDs/slugs unik.
- Theme/province/region/status/source valid.
- Published signal memiliki source dan visual/fallback.
- Official target memiliki date/source.
- Scenario ranking deterministik.
- Related IDs tidak self-reference.
- Query parser menolak enum invalid.
- Corrupted shelf tidak crash.
- Asset manifest valid.

### Component

- Search/clear keyboard-friendly.
- Theme tabs keyboard lengkap.
- Region selector accessible.
- Quick View focus trap/restore.
- Save/unsave idempotent.
- IKN chapters tidak kehilangan focus.
- Scenario validation benar.
- Empty/error/fallback dapat pulih.

### Integration/E2E

1. Direct entry → Observatory → signal detail.
2. Search → filter → Quick View → Back restore.
3. IKN → Kalimantan Timur Atlas → Back.
4. Signal → Route prefill → save Passport.
5. Archive/NusaRasa → Creative Economy context.
6. Tourist Mode → Green/Mobility → Route.
7. Learn Mode → Source Desk.
8. Scenario generate → save → refresh restore.
9. Offline → local discovery/scenario usable.
10. Invalid query/slug → safe recovery.
11. RANI action menggunakan route/IDs benar.
12. Mobile tanpa horizontal overflow.

### Quality gate

Validator future + foundation + regions + atlas + assets + Passport + route tests + lint + typecheck + build + E2E desktop/mobile.

---

## 26. Visual QA Checklist Wajib

- Tidak ada navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, button navy, text navy, atau focus navy.
- Tidak ada neon sci-fi, orb 3D, dan generic AI glow.
- Hero triptych memiliki focal point dan hierarchy.
- Map texture tidak menurunkan contrast.
- Signal Desk tidak terlihat seperti dashboard SaaS.
- Observatory bukan map engine kedua.
- IKN Dossier terlihat editorial, bukan propaganda atau real-estate page.
- Seven Systems bukan tujuh card identik.
- Civic Network tidak menjadi card wall.
- Village Futures tidak memakai framing paternalistik.
- Creative Economy bukan marketplace.
- Green & Blue tidak memakai particle hijau generik.
- Scenario Studio menjelaskan status editorial.
- Source dan trade-off mudah ditemukan.
- Mobile reading order benar.
- English copy tidak overflow.
- Focus terlihat.
- CTA aman dari bottom navigation.
- Tidak ada overlap, broken image, atau CLS.
- Hasil terasa sengaja di-art-direct oleh desainer senior, bukan hasil template AI.

---

## 27. Fase Implementasi

### Fase 0 — Audit dan kontrak

- Audit Route/Explore/Passport/Archive/Rasa/Province/RANI, state, assets, metadata, dan navigation.
- Baseline lint/typecheck/test/build.
- Kunci schema, canonical IDs, source status, URL contract, dan asset manifest.

### Fase 1 — Foundation dan discovery core

- Route `/future`, loading/error, metadata.
- Data schema + validator.
- Search/filter/ranking/URL.
- Hero, Signal Desk, Observatory.

### Fase 2 — IKN dan Seven Systems

- IKN Dossier.
- Kalimantan Timur integration.
- Seven Systems open plate.
- Source/trade-off dasar.

### Fase 3 — National signal network

- Civic Innovation Network.
- Village Futures.
- Creative Economy.
- Green & Blue.
- Mobility.

### Fase 4 — Signature utility

- Scenario Studio.
- Saved Future shelf.
- Passport criteria.
- RANI local presets.

### Fase 5 — Ecosystem integration

- Map, Province, Route, Passport, Archive, NusaRasa, Explore Journey.
- Browser Back/restore.
- Route availability/nav/footer/sitemap.

### Fase 6 — Polish dan QA

- Motion.
- Responsive refinement.
- Accessibility audit.
- Image/performance optimization.
- Visual QA seluruh viewport.
- Production build dan demo rehearsal.

---

## 28. Prioritas MVP

### P0 — Wajib demo

- `/future` stabil.
- Hero + Future Signal Desk.
- Observatory tujuh region.
- IKN Dossier lengkap dan bersumber.
- Seven Systems.
- Minimal 14 published signals berkualitas.
- Scenario Studio dengan minimal 3 preset.
- Map/Province/Route/Passport handoff.
- Evidence/status labels.
- Offline/local fallback.
- Tidak ada navy.

### P1 — Pembeda kuat

- 28–42 signals.
- Village Futures.
- Creative Economy Engine.
- Green & Blue.
- Mobility.
- 6 human stories.
- 6 scenario templates.
- RANI Future Guide.
- Bilingual demo path.

### P2 — Premium

- Deep signal routes.
- Rich data visualization yang benar-benar bersumber.
- Share future scenario.
- Moderated correction/contribution.
- More regional narratives.

### Jangan dikerjakan sebelum P0 hijau

- Real-time APIs.
- 3D city.
- Sensor dashboard.
- Carbon calculator.
- Ranking city.
- Login/cloud sync.
- New animation/map framework.

---

## 29. Estimasi Pengerjaan

| Fase | Estimasi | Prioritas |
| --- | --- | --- |
| Audit, contract, asset manifest | 2–4 jam | P0 |
| Data/schema/validator | 4–8 jam | P0 |
| Route, shell, hero, controls | 5–8 jam | P0 |
| Observatory | 6–10 jam | P0 |
| IKN Dossier | 5–8 jam | P0 |
| Seven Systems + signals | 6–10 jam | P0/P1 |
| Village/Creative/Green/Mobility | 10–18 jam | P1 |
| Scenario Studio | 6–12 jam | P0/P1 |
| Ecosystem integration | 5–9 jam | P0 |
| Responsive, a11y, motion | 6–10 jam | P0/P1 |
| Testing, optimization, demo | 5–9 jam | P0 |

**Competition MVP realistis:** 28–45 jam dengan 14 signal berkualitas dan reuse maksimal.  

**Versi polished lengkap:** 60–100 jam, bergantung pada penelitian dan kualitas konten.

---

## 30. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti smart-city dashboard | Generic dan dingin | Editorial observatory, human stories, no score wall |
| Visual menjadi neon/navy | Melanggar direction | Local tokens + forbidden palette audit |
| IKN menjadi propaganda | Trust turun | Status, date, source, trade-off, multi-center narrative |
| Data impact palsu | Kredibilitas rusak | No fake metrics; evidence taxonomy |
| Scope terlalu besar | Deadline gagal | P0 14 signals + IKN + scenario + flow |
| Map terlalu berat | LCP/interaksi buruk | SVG schematic, no second map engine |
| Semua section jadi card grid | Generic AI | Varied editorial compositions |
| Scenario dianggap prediksi | Misleading | Label editorial scenario + deterministic templates |
| Village framing paternalistik | Sensitivitas sosial | Agency, co-design, local knowledge |
| Integrasi CTA mati | Flow terputus | Typed adapters + route availability |
| Aset diulang berlebihan | Visual terasa murah | Asset manifest + focal usage limits |
| Motion berat | Jank mobile | Transform/opacity/clip only |

---

## 31. Acceptance Criteria

### Product

- Pengguna dapat menemukan, membuka, memahami, menyimpan, dan melanjutkan signal masa depan.
- IKN disajikan dengan place, systems, people, evidence, dan trade-off.
- Scenario Studio menghasilkan output lokal yang explainable.
- Semua state memiliki recovery.
- Tidak ada dead CTA.

### Data

- Satu canonical Future Signal source.
- Published signals tervalidasi.
- Status dan source terlihat.
- Tidak ada klaim impact, ranking, atau certainty palsu.

### UI/UX

- Editorial, asimetris, image-led, dan unik.
- Bukan dashboard, crypto landing page, atau city-tech template.
- Tidak menggunakan navy dalam bentuk apa pun.
- Selaras dengan kualitas Route/Explore/Archive/Rasa tanpa menyalin layout.
- Setiap section mempunyai rhythm dan focal point berbeda.

### Integration

- Map, Province, Route, Passport, Archive, Rasa, dan RANI memakai typed context.
- Back/refresh memulihkan state.
- Save tidak memberi completion palsu.

### Quality

- Responsive tanpa horizontal overflow.
- WCAG AA dan reduced motion.
- Images optimized.
- Validator, lint, typecheck, tests, dan build lulus atau baseline terdokumentasi.

---

## 32. Definition of Done

- [ ]  Route `/future` tersedia dan stabil.
- [ ]  Creative direction **The Regenerative Archipelago Observatory** diterapkan.
- [ ]  Tidak ada navy, dark navy, blue-black, midnight blue, gradient navy, shadow navy, button navy, text navy, atau focus navy.
- [ ]  Hero memakai aset existing dan tidak menjadi sci-fi generik.
- [ ]  Signal Desk memiliki search, mode, theme, region, status, reset, dan URL state.
- [ ]  Observatory menampilkan tujuh region tanpa menjadi map engine kedua.
- [ ]  IKN Dossier lengkap, bersumber, dated, dan memiliki trade-off.
- [ ]  Seven Systems tidak berupa tujuh card identik.
- [ ]  Minimal 14 signal demo berkualitas dan tervalidasi.
- [ ]  Civic/Village/Creative/Green/Mobility memiliki hierarchy jelas sesuai prioritas.
- [ ]  Scenario Studio deterministik, versioned, dan berlabel editorial.
- [ ]  Evidence Desk dan source status terlihat.
- [ ]  RANI menggunakan local fallback dan canonical IDs.
- [ ]  Map/Province/Route/Passport/Archive/Rasa handoff aman.
- [ ]  Browser Back, refresh, dan offline fallback masuk akal.
- [ ]  Saved Future hydration-safe dan idempotent.
- [ ]  Empty/loading/error/partial/broken-asset states selesai.
- [ ]  Desktop, tablet, mobile, zoom 200%, keyboard, screen reader, dan reduced motion diuji.
- [ ]  Tidak ada overlap, overflow, broken image, broken link, dead CTA, atau fake metric.
- [ ]  Aset existing memiliki manifest, credit/license, dimensions, alt, focal point, dan fallback.
- [ ]  Visual QA dilakukan pada semua viewport target.
- [ ]  Production build berhasil.
- [ ]  Demo juri 90 detik dapat diulang tanpa jaringan eksternal.

---

## 33. Demo Path Rekomendasi

1. Buka `/future`; tampilkan hero “Masa depan Indonesia tidak lahir dari satu kota.”
2. Scroll ke Observatory dan pilih Kalimantan Timur.
3. Buka IKN Dossier; tunjukkan status, systems, source, dan trade-off.
4. Pilih **Creative Economy** atau **Regenerative Environment** pada Seven Systems.
5. Buka satu signal dari provinsi lain untuk membuktikan narasi multi-center.
6. Masuk Future Scenario Studio.
7. Pilih place, tiga prioritas, perspective, dan constraint.
8. Generate dossier lokal dan jelaskan bahwa ini skenario editorial, bukan prediksi.
9. Kirim context ke Route Planner.
10. Simpan signal/scenario ke Passport.
11. Ubah ke English/Tourist Mode pada satu bagian demo.
12. Tutup dengan Final Future Handoff dan tagline NUSANTARAYA.

---

## 34. Guardrail Terakhir

<aside>
🏆

**Nusa Future harus terasa seperti observatorium masa depan Indonesia yang dikurasi oleh urban designer, climate researcher, cultural editor, service designer, cartographer, dan product designer terbaik—bukan halaman AI yang menumpuk gedung futuristik dan card teknologi.** Setiap visual harus menjelaskan hubungan, setiap signal harus memiliki status dan sumber, setiap skenario harus jujur, dan setiap interaksi harus membawa pengguna dari masa depan yang abstrak menuju tempat, manusia, budaya, serta perjalanan yang nyata.

</aside>