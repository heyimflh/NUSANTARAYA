# Planning Master Lengkap — Halaman Nusa Archive NUSANTARAYA

<aside>
🏛️

**NUSA ARCHIVE — THE LIVING MEMORY HOUSE OF NUSANTARA**

**Creative Direction:** Living Museum Editorial × Curator’s Cabinet × Contemporary Indonesian Cultural Journal

**Route utama:** `/archive`

**Status:** Master planning UI/UX, product flow, data, frontend, integration, dan quality assurance

**Aturan visual mutlak:** **JANGAN menggunakan navy, dark navy, blue-black, atau turunannya di seluruh halaman Nusa Archive.**

</aside>

## 0. Dokumen Acuan dan Kedudukan Planning

Planning ini menerjemahkan visi Nusa Archive pada [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21) menjadi rancangan halaman yang production-ready. Bahasa visualnya diselaraskan dengan kualitas editorial, asimetris, image-led, dan art-directed yang telah dikembangkan pada Nusa Route dan Nusa Explore—terutama prinsip redesign premium pada [Prompt Master — Redesign Premium Section 7 Nusa Journey Composer NUSANTARAYA](https://app.notion.com/p/Prompt-Master-Redesign-Premium-Section-7-Nusa-Journey-Composer-NUSANTARAYA-185f8037981f41d58a740cd1f6ba393a?pvs=21)—tanpa menyalin layout halaman tersebut.

**Urutan prioritas saat implementasi:**

1. Integritas budaya dan kejelasan informasi.
2. Discovery yang cepat dan tidak membingungkan.
3. Storytelling visual yang berkarakter.
4. Integrasi nyata ke seluruh ekosistem NUSANTARAYA.
5. Responsiveness, accessibility, performance, dan fallback.
6. Polish visual dan motion.

---

## 1. Ringkasan Eksekutif

Nusa Archive adalah pusat pengetahuan budaya NUSANTARAYA: tempat pengguna menemukan, membandingkan, memahami, menyimpan, dan melanjutkan eksplorasi terhadap rumah adat, tarian, alat musik, pakaian, upacara, cerita rakyat, aksara, senjata, kerajinan, motif kain, tokoh, dan kosmologi lokal.

Halaman ini **bukan grid artikel**, **bukan katalog museum generik**, dan **bukan dashboard filter**. Pengalaman harus terasa seperti memasuki rumah ingatan Nusantara yang hidup: pengguna membuka “laci kurator”, menyusuri koleksi, melihat hubungan antarwilayah, lalu berpindah secara natural ke Peta, Atlas Provinsi, NusaRasa, Aksara Lab, Jalur Rempah, Passport, Route Planner, atau RANI.

### North Star Experience

> Dalam 10 detik pengguna memahami apa yang dapat ditemukan. Dalam 30 detik pengguna menemukan koleksi relevan. Dalam 2–3 menit pengguna membuka item, memahami konteksnya, melihat sumber, dan melanjutkan ke eksplorasi lain tanpa jalan buntu.
> 

### Nilai utama

- **Discover:** pencarian dan filter yang cepat.
- **Understand:** konteks, makna, sejarah, dan sumber.
- **Connect:** hubungan item dengan provinsi, cerita, rasa, aksara, dan perjalanan.
- **Preserve:** koreksi dan kontribusi yang bertanggung jawab.
- **Continue:** handoff ke fitur NUSANTARAYA lain.

---

## 2. Sasaran Produk dan KPI

### 2.1 Sasaran

1. Menjadikan budaya Indonesia mudah ditemukan tanpa mereduksinya menjadi daftar objek.
2. Membuat pengguna memahami **asal, konteks, fungsi, makna, dan status saat ini** dari setiap item.
3. Memberikan pengalaman eksplorasi yang sama kuatnya untuk Explore, Tourist, dan Learn Mode.
4. Menghubungkan Archive ke Map, Province Atlas, Stories, NusaRasa, Aksara Lab, Jalur Rempah, Route Planner, Passport, dan RANI.
5. Menjadi bukti bagi juri bahwa NUSANTARAYA memiliki sistem pengetahuan, bukan hanya visual cantik.

### 2.2 KPI demo dan MVP

| Area | Metrik | Target |
| --- | --- | --- |
| Discovery | Waktu menemukan item relevan | ≤ 30 detik |
| Engagement | Item dibuka per sesi Archive | ≥ 3 |
| Depth | Pengguna membuka sumber/konteks terkait | ≥ 35% |
| Cross-navigation | Handoff ke fitur lain | ≥ 25% |
| Save | Item disimpan ke koleksi/Passport | ≥ 15% |
| Search | Query menghasilkan respons UI | ≤ 100 ms untuk data lokal |
| Accessibility | Lighthouse Accessibility | ≥ 90 |
| Performance | LCP | &lt; 2,5 detik |

---

## 3. Pengguna dan Jobs to Be Done

### Explorer

“Bantu saya menemukan budaya baru secara visual tanpa harus tahu kata kunci yang tepat.”

### Pelajar dan mahasiswa

“Bantu saya memahami konteks dan sumber, lalu menemukan materi terkait.”

### Guru dan peneliti

“Bantu saya menelusuri item secara terstruktur, bersumber, dan dapat dibandingkan.”

### Turis

“Bantu saya memahami budaya yang akan saya jumpai serta etika yang perlu dihormati.”

### Juri

“Tunjukkan bahwa data budaya dikelola secara matang, terhubung, dan benar-benar berguna.”

---

## 4. Prinsip Produk Non-Negotiable

1. **Context before spectacle.** Visual tidak boleh mengalahkan makna.
2. **Culture is living, not frozen.** Hindari bahasa yang memperlakukan budaya sebagai benda masa lalu semata.
3. **One canonical source.** Card, detail, search, province page, dan RANI membaca ID item yang sama.
4. **No dead ends.** Setiap item memiliki minimal satu jalur lanjut yang valid.
5. **Explainable discovery.** Rekomendasi menjelaskan alasan, bukan skor kecocokan palsu.
6. **Progressive disclosure.** Card ringkas; konteks mendalam muncul saat dibutuhkan.
7. **Search is a tool, not the hero.** Halaman tetap menginspirasi pengguna yang belum punya query.
8. **No navy.** Gunakan espresso/warm charcoal sebagai warna gelap utama.
9. **No fake facts.** Tidak mengarang tahun, status UNESCO, komunitas, ritual, atau klaim kepemilikan budaya.
10. **Accessible by design.** Keyboard, screen reader, zoom, reduced motion, dan touch bukan tahap akhir.

### Non-goals MVP

- Marketplace atau transaksi.
- Sistem akademik sitasi otomatis lengkap.
- Upload publik langsung tayang.
- Social feed dan komentar terbuka.
- Peta interaktif kedua di Archive.
- AI generatif sebagai satu-satunya search/recommendation engine.
- 3D untuk seluruh item.

---

## 5. Creative Direction Final

### Nama konsep

**THE LIVING MEMORY HOUSE**

### Formula visual

Contemporary Indonesian Cultural Editorial  

× Museum Archive Room  

× Curator’s Field Notes  

× Tactile Paper and Material Library  

× Cinematic Knowledge Journey

### Karakter

- Asimetris dan berirama.
- Image-led, tetapi tidak seperti Pinterest.
- Tactile: kertas, label arsip, cap katalog, margin note.
- Editorial: tipografi kuat, whitespace terarah, nomor koleksi, caption.
- Modern: search, filter, state, URL, dan handoff terasa cepat.
- Tenang dan berwibawa, bukan ramai seperti bazar ornamen.

### Hal yang dilarang

- Grid 3×4 berisi card identik dari atas sampai bawah.
- Hero generik berupa heading center + search bar besar + blob gradient.
- Semua elemen dibungkus card rounded 24 px.
- Glassmorphism, neon glow, 3D tilt, confetti, infinite pulse.
- Motif batik ditempel acak sebagai dekorasi.
- Dashboard statistik gelap.
- Card putih bertumpuk dengan outline tipis yang sama.
- Navy, blue-black, gradient ke navy, shadow navy, atau focus ring navy.

---

## 6. Palet Warna Lokal — Tanpa Navy

Gunakan semantic token lokal agar tidak memengaruhi halaman lain.

```css
--archive-canvas: #F3EBDD;
--archive-paper: #FFF9F0;
--archive-paper-deep: #E7DAC5;
--archive-ink: #2A211A;
--archive-charcoal: #3A332D;
--archive-muted: #75695D;
--archive-line: #CFC0AA;
--archive-oxblood: #7A342E;
--archive-terracotta: #B65D43;
--archive-saffron: #D0A331;
--archive-sage: #6F7D62;
--archive-teal: #34776C;
--archive-plum: #75586D;
--archive-clay-soft: #EAD5C8;
--archive-sage-soft: #DDE3D5;
--archive-saffron-soft: #F2E5B8;
--archive-error: #9B3E32;
--archive-success: #527057;
```

### Aturan penggunaan

- 70–80% area: parchment, ivory, warm paper.
- 15–20%: espresso, charcoal, divider, typography.
- 5–10%: satu aksen aktif berdasarkan kategori/koleksi.
- Saffron hanya untuk highlight, marker, atau CTA utama terpilih.
- Selected state menggunakan kombinasi outline, icon/check, typography, dan tint—bukan warna saja.
- Focus ring menggunakan saffron/terracotta kontras tinggi.

---

## 7. Tipografi, Grid, dan Material

### Tipografi

- Display: Playfair Display/Cormorant Garamond atau serif existing.
- UI/body: Inter atau sans existing.
- Display headline desktop: 64–88 px; tablet 48–64 px; mobile 38–48 px.
- H2 section: 44–60 px desktop; 32–42 px mobile.
- Body: 16–18 px; minimum 15 px mobile.
- Eyebrow: sans uppercase, tracking ringan; jangan memakai uppercase serif untuk semua label.
- Panjang baris body: 55–75 karakter.

### Grid

- Desktop: 12 kolom, max-width mengikuti halaman Route/Explore, target 1280–1440 px.
- Gutter desktop: 32–48 px; tablet 24–32 px; mobile 20–24 px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Gunakan komposisi 7/5, 8/4, atau 5/7 untuk menciptakan ritme; jangan selalu 6/6.

### Surface

- Radius utama 8–16 px; hanya visual frame tertentu boleh 20–24 px.
- Border tidak digunakan pada setiap elemen.
- Gunakan divider, perubahan tone, offset paper, dan whitespace sebelum shadow.
- Shadow ringan dan hangat, tanpa tint biru.
- Texture/grain maksimal 2–3% opacity dan tidak mengganggu teks.

---

## 8. Arsitektur Informasi Halaman

1. Archive Threshold — Hero editorial.
2. Discovery Desk — Search, mode, dan filter context.
3. Curator’s Selection — koleksi utama yang berubah sesuai konteks.
4. Cabinet of Categories — dua belas kategori sebagai ruang koleksi.
5. Archive Mosaic — hasil eksplorasi dan daftar item.
6. Regional Memory Index — jelajah berdasarkan tujuh wilayah.
7. Story Threads — jalur tematik lintas item.
8. Item Detail Experience — quick view dan deep detail.
9. Source & Learning Desk — sumber, metodologi, dan Learn Mode.
10. Continue the Journey — integrasi lintas fitur.
11. Correction & Contribution — pelaporan dan kontribusi terkurasi.
12. Personal Shelf — recently viewed dan saved items.
13. Final Handoff — CTA editorial ke Peta/Passport.

---

# 9. Rancangan Detail Setiap Section

## Section 1 — Archive Threshold / Hero Editorial

### Tujuan

Memperkenalkan Archive sebagai “rumah ingatan yang hidup”, bukan database kering.

### Copy direction

- Eyebrow: **Nusa Archive · Arsip Budaya Indonesia**
- Heading: **“Ingatan Nusantara, dibuka kembali untuk dijelajahi.”**
- Supporting copy: “Temukan tradisi, aksara, cerita, bunyi, bentuk, dan pengetahuan dari berbagai wilayah Indonesia—lengkap dengan konteks, sumber, dan jalur eksplorasi berikutnya.”
- Primary CTA: **Mulai Menjelajah Arsip**
- Secondary CTA: **Buka Koleksi Pilihan**
- Trust line: **Bersumber · Terhubung ke 38 provinsi · Diperbarui secara terkurasi**

### Layout desktop

- Kiri 5 kolom: index “ARCHIVE / 01”, heading besar, copy, CTA.
- Kanan 7 kolom: **Memory Collage** dari 3–4 aset nyata dengan ritme tidak simetris: satu hero portrait, satu crop material/motif, satu object detail.
- Di atas collage: nomor katalog, garis anotasi, dan caption kecil; bukan badge melayang generik.
- Satu “archive drawer tab” di tepi visual berisi teaser: `120+ item · 12 kategori · 38 provinsi`—angka harus derived dari data.

### Mobile

Heading → copy → CTA → satu hero crop terbaik → statistik ringkas. Collage sekunder disembunyikan bila membuat layar padat.

### Motion

- Heading reveal 12 px + opacity.
- Collage masuk dengan clip sederhana, bukan parallax.
- Caption muncul 60–90 ms setelah image.
- Reduced motion: seluruhnya statis atau fade ≤120 ms.

### Acceptance criteria

- Pengguna memahami fungsi halaman dalam 10 detik.
- Tidak ada hero kosong atau background dekoratif abstrak tanpa makna.
- LCP image memiliki aspect ratio dan focal point jelas.

---

## Section 2 — Discovery Desk / Search and Context Controls

### Konsep

Bukan search bar raksasa. Bentuknya seperti meja kurator: satu query field utama, diikuti kontrol konteks yang ringan dan selalu dapat di-reset.

### Komponen

1. Search field: “Cari budaya, provinsi, kategori, tokoh, atau kata kunci…”
2. Mode switch: Explore / Tourist / Learn.
3. Category filter.
4. Region/province filter.
5. Era filter bila data valid.
6. Status filter opsional: masih dipraktikkan, historis, revitalisasi—hanya jika sumber mendukung.
7. Sort: Relevansi, Nama, Terbaru diperbarui.
8. Active-filter summary dan tombol Reset.
9. Result count live.

### UX rules

- Search mendukung nama, alias/ejaan, provinsi, komunitas, dan keyword terkurasi.
- Debounce 150–250 ms untuk UI lokal.
- Query, mode, dan filter tersinkron ke URL menggunakan allowlist.
- `replace` untuk perubahan filter; `push` untuk membuka detail canonical.
- Search kosong menampilkan curated discovery, bukan blank state.
- Zero-result selalu memberi recovery: koreksi ejaan, hapus filter, kategori terdekat, atau tanya RANI.

### Visual

- Field utama berada di atas garis panjang seperti catalog ledger.
- Filter primer berupa tabs/chips terukur; filter lanjutan berada dalam disclosure “Filter lebih rinci”.
- Jangan menjadikan semua kontrol pill.
- Active filter memakai label seperti potongan katalog, bukan chip warna-warni.

### Accessibility

Combobox/search memiliki label, clear button, Escape behavior, result count `aria-live="polite"`, dan focus tidak berpindah saat hasil diperbarui.

---

## Section 3 — Curator’s Selection / Featured Collection

### Tujuan

Memberi satu pintu masuk visual bagi pengguna yang belum tahu harus mencari apa.

### Layout

Komposisi 7/5 asimetris:

- Area 7 kolom: image-led collection stage dengan satu hero item dan 2 detail crops.
- Area 5 kolom: Curator Note berisi nama koleksi, alasan dipilih, 3–5 item, dan CTA.
- Ticket sedikit overlap 32–48 px pada desktop; tidak overlap pada mobile.

### Koleksi awal MVP

- Jejak Aksara Nusantara.
- Rumah yang Menyimpan Kosmologi.
- Bunyi dari Kepulauan.
- Kain, Motif, dan Identitas.
- Jalur Rempah dalam Benda dan Rasa.
- Tradisi Maritim Nusantara.

### Behavior

Koleksi berubah secara deterministik berdasarkan mode/layer/provinsi aktif, tetapi tidak mengganti ketika pengguna sedang membaca. Tampilkan prompt ringan bila konteks berubah.

### CTA

- **Buka Koleksi** → menerapkan collection filter dan scroll ke hasil.
- **Lihat di Peta** → mengirim province/item context ke Nusa Map.
- **Simpan Jalur** → explicit action ke Personal Shelf/Passport; tidak memberi completion stamp.

---

## Section 4 — Cabinet of Categories / Dua Belas Ruang Koleksi

### Tujuan

Menampilkan kategori dengan personality berbeda tanpa menjadi grid dua belas card identik.

### Kategori canonical

1. Rumah adat.
2. Tarian tradisional.
3. Alat musik.
4. Pakaian adat.
5. Upacara adat.
6. Cerita rakyat.
7. Bahasa dan aksara.
8. Senjata tradisional.
9. Kerajinan tangan.
10. Batik, tenun, songket, dan motif.
11. Tokoh daerah.
12. Kepercayaan dan kosmologi lokal.

### Komposisi desktop

- Satu category “open drawer” besar 6 kolom.
- Dua kategori medium stacked 3 kolom.
- Tiga kategori compact berbentuk index strip.
- Sisa kategori muncul sebagai ordered archive ledger.
- Saat kategori dipilih, komposisi menjaga posisi dan memperbarui focal drawer; jangan seluruh section remount.

### Anatomy category

- Nomor indeks.
- Nama kategori.
- Short promise satu kalimat.
- Item count derived.
- 1–2 representative assets.
- Region coverage.
- CTA “Buka laci”.

### Mobile

Horizontal category index di atas, satu active drawer penuh, lalu ordered list seluruh kategori. Semua tetap bisa diakses tanpa drag.

### Larangan

Tidak memakai icon random sebagai pengganti visual budaya. Jangan mengasumsikan satu objek mewakili seluruh kategori atau wilayah.

---

## Section 5 — Archive Mosaic / Search Result Experience

### Tujuan

Menjadi area kerja utama setelah filter, tetapi tetap memiliki art direction.

### Layout desktop

- Header hasil: query/context, count, sort, view switch.
- Default **Editorial Mosaic**: kombinasi 1 featured item, 4 standard cards, dan compact catalog rows.
- Alternative **Compact Index** untuk Learn/peneliti: list padat dengan thumbnail, asal, kategori, updated/source status.
- Jangan memakai masonry yang mengubah urutan semantik.

### Card anatomy

- Visual dengan rasio stabil.
- Catalog number.
- Nama item.
- Asal provinsi/komunitas bila tervalidasi.
- Kategori.
- One-line context, bukan slogan kosong.
- Source status indicator.
- Action: Quick View, Detail, Save.

### Interaction

- Hover hanya enhancement: image scale maksimal 1.02, underline reveal.
- Keyboard focus membuka action yang sama.
- Card tidak seluruhnya clickable jika memiliki beberapa action.
- Pagination/load more lebih disarankan daripada infinite scroll tak berujung.
- Saat kembali dari detail, posisi scroll dan filter dipulihkan.

### Loading/error/empty

- Skeleton mengikuti komposisi final.
- Invalid item di-skip aman dan dicatat di development.
- Image failure memakai category fallback yang elegan, bukan broken icon.
- Partial data tetap menampilkan title, category, origin, dan source status yang valid.

---

## Section 6 — Regional Memory Index / Tujuh Wilayah

### Tujuan

Mengizinkan pengguna melihat keragaman tanpa membangun peta kedua.

### Tujuh region

Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, Papua.

### Visual

- Desktop: vertical region index 01–07 di kiri; active regional dossier di tengah; province/item constellation di kanan/bawah.
- Region accent hanya 8–12% area.
- Active region menunjukkan jumlah provinsi, kategori dominan yang tersedia, flagship items, dan source completeness—semua derived.
- Tidak ada ranking “wilayah paling kaya”.

### Handoff

- **Tampilkan di Peta** → `/explore` dengan region + active layer Archive.
- **Buka Provinsi** → canonical Province Atlas.
- **Rancang Perjalanan Budaya** → `/routes` dengan region dan interests `budaya,sejarah` tanpa auto-submit.
- **Bandingkan wilayah** opsional maksimal dua region dan hanya memakai dimensi yang valid.

### Sensitivitas

Jangan memperlakukan satu etnis atau provinsi sebagai representasi tunggal region. Gunakan bahasa “mencakup”, “memperlihatkan keragaman”, dan “salah satu pintu masuk”.

---

## Section 7 — Story Threads / Jalur Tematik

### Tujuan

Mengubah arsip menjadi narasi lintas item, provinsi, dan fitur.

### Bentuk

Satu Story Thread besar + maksimal tiga alternatif asimetris, mengikuti ritme editorial filmstrip—bukan empat card seragam.

### Contoh thread

- Dari Serat Menjadi Identitas: Tenun dan Kain Nusantara.
- Suara yang Menyebrangi Laut: Alat Musik Maritim.
- Aksara sebagai Rumah Ingatan.
- Rempah, Dapur, dan Perdagangan.
- Rumah, Ruang, dan Kosmologi.
- Cerita Rakyat tentang Alam dan Etika.

### Thread contract

- ID stabil.
- Title dan promise.
- 3–7 item IDs terurut.
- Province IDs.
- Primary pillar/layer.
- Kind: explore trail / learning path / tourist context.
- Reason codes.
- Primary/secondary CTA.
- Source completeness.

### Route ribbon

Gunakan numbered editorial chapters, bukan peta geografis palsu. Connector dekoratif `aria-hidden`; ordered list tetap semantik.

---

## Section 8 — Item Detail Experience

Detail memiliki dua tingkat agar discovery tidak kehilangan konteks.

### A. Quick View Drawer

Desktop slide-in dari kanan; mobile full-screen sheet.

Isi minimum:

- Hero image atau fallback.
- Nama dan catalog ID.
- Asal dan kategori.
- Ringkasan 80–140 kata.
- 3 fakta terstruktur.
- Source status.
- Related items.
- CTA Detail Lengkap, Lihat di Peta, Simpan.

Quick View tidak mengubah URL menjadi state palsu; jika perlu gunakan query allowlist `item=` dan restore Back dengan benar.

### B. Deep Detail Route

Rekomendasi canonical route: `/archive/[slug]`.

Urutan detail:

1. Hero editorial.
2. Identity ledger: nama, alias, asal, komunitas, kategori, era/status.
3. Makna dan fungsi.
4. Sejarah dan perubahan.
5. Material, proses, bunyi, atau bentuk sesuai kategori.
6. Context of use dan etiquette.
7. Media gallery dengan caption.
8. Source notes dan updated date.
9. Related collection/thread.
10. Province/Map/Nusa feature handoff.
11. Suggest correction.

### Mode adaptation

- Explore: cerita + hubungan visual.
- Tourist: etiquette, where encountered, dan disclosure availability.
- Learn: sumber, istilah, kronologi, dan related materials lebih dominan.

### Trust language

Gunakan “berkaitan dengan”, “dikenal dalam konteks”, atau “dipraktikkan oleh” jika kepemilikan budaya kompleks. Hindari klaim tunggal yang tidak bersumber.

---

## Section 9 — Source & Learning Desk

### Tujuan

Menjadikan kredibilitas terlihat tanpa membuat UI seperti jurnal akademik.

### Isi

- Metodologi kurasi.
- Source types.
- Updated/reviewed status.
- Glosarium istilah.
- Learn collections.
- Download/citation hanya bila benar-benar tersedia.
- Disclosure jika data masih ringkas atau belum diverifikasi mendalam.

### Visual

Bentuknya seperti bibliography desk: ordered references, margin notes, dan status stamp. Tidak memakai card untuk setiap sumber.

### CTA

- Buka Learn Mode.
- Lihat semua item bersumber lengkap.
- Baca metodologi.

---

## Section 10 — Continue the Journey / Ecosystem Handoff

Gunakan komposisi editorial radial/constellation, bukan grid menu.

### Integrasi wajib

| Tujuan | Context yang dikirim | Behavior |
| --- | --- | --- |
| Nusa Map / Explore | itemId, provinceId, category/layer | Fokus wilayah dan buka summary yang relevan |
| Province Atlas | provinceId, related item | Buka section budaya provinsi |
| NusaRasa | culinary/spice IDs | Buka kuliner atau jalur rasa terkait |
| Aksara Lab | scriptId, source item | Buka aksara yang didukung tanpa transliterasi palsu |
| Jalur Rempah | spice/thread/port IDs | Buka chapter historis terkait |
| Nusa Route | provinceIds, interests, source=archive | Prefill planner, tidak auto-submit |
| Passport | savedItemId/threadId, status=saved | Simpan explicit; bukan completed |
| RANI | canonical item IDs + locale + mode | Jawab dari source terkurasi atau fallback jujur |
| Nusa Future | craft/creative economy links | Tunjukkan kesinambungan warisan dan inovasi |

### Aturan

- Jangan mengirim DOM text ke fitur lain.
- Semua handoff memakai typed payload dan canonical IDs.
- CTA disembunyikan atau diganti fallback jujur jika integrasi belum tersedia.
- Browser Back memulihkan filter, item, dan scroll.

---

## Section 11 — Correction & Contribution

### Tujuan

Memberi mekanisme tanggung jawab tanpa menjadikan Archive forum publik.

### Actions

- Laporkan kesalahan.
- Sarankan sumber tambahan.
- Ajukan cerita/foto lokal.
- Laporkan isu sensitivitas atau lisensi.

### Flow

1. Pilih tipe kontribusi.
2. Form context otomatis membawa item ID.
3. Pengguna mengisi penjelasan dan sumber.
4. Preview consent/privacy.
5. Submit ke moderation queue.
6. Status jujur: “Terkirim untuk ditinjau”, bukan “langsung diperbarui”.

### Non-negotiable

Tidak ada kontribusi langsung tayang. Jangan meminta data pribadi yang tidak perlu.

---

## Section 12 — Personal Shelf

### Isi

- Recently viewed.
- Saved items.
- Saved story threads.
- Continue reading.
- Passport-linked province progress jika schema mendukung.

### Behavior

- Local-first untuk MVP.
- Hydration-safe dan versioned.
- Save idempotent.
- Clear history tersedia.
- Membuka item tidak memberi stamp.
- Stamp hanya mengikuti action/criteria Passport yang sah.

### Visual

Seperti rak referensi horizontal dengan satu buku/kartu dominan dan item compact—bukan carousel autoplay.

---

## Section 13 — Final Editorial Handoff

Copy direction:

**“Arsip bukan akhir dari cerita. Pilih satu jejak, lalu lihat bagaimana ia hidup di peta Nusantara.”**

CTA utama: **Lanjutkan ke Peta**  

CTA sekunder: **Lihat Koleksi Tersimpan**

Gunakan divider visual, satu image crop kuat, dan route glyph kecil. Jangan membuat card CTA raksasa.

---

## 10. Flow Utama Pengguna

### 10.1 Explorer

Home → Nusa Archive → Curator’s Selection → Quick View → Story Thread → Map/Passport.

### 10.2 Search-led

Archive → ketik query → filter → hasil → Quick View → Detail → related item → kembali dengan state utuh.

### 10.3 Pelajar/Learn

Archive → Learn Mode → kategori → Compact Index → Detail → Source Desk → related learning path.

### 10.4 Turis

Archive → Tourist Mode → pilih provinsi → item budaya → etiquette/context → Province Atlas → Route Planner prefill.

### 10.5 Aksara

Archive → Bahasa & Aksara → detail aksara → Aksara Lab → kembali ke item/source.

### 10.6 Kuliner dan rempah

Archive → Story Thread rempah → item tradisi/bahan → NusaRasa/Jalur Rempah → Route Planner.

### 10.7 Koreksi

Item Detail → Suggest Correction → form dengan item context → submit moderation → kembali ke detail.

### 10.8 Demo juri 90 detik

Hero → search “aksara” → buka Curator’s Selection → Quick View → Detail bersumber → Lihat di Peta → simpan ke Passport → kembali ke Story Thread.

---

## 11. Search, Filter, Ranking, dan URL Contract

### Ranking deterministik

1. Exact title/alias.
2. Exact category/province.
3. Keyword/tag match.
4. Active mode relevance.
5. Source completeness.
6. Editorial priority.
7. Stable ID tie-break.

Jangan random. Jangan tampilkan skor persentase palsu.

### Query proposal

`/archive?q=aksara&category=bahasa-aksara&region=jawa&mode=learn&sort=relevance`

### Rules

- Semua enum di-allowlist.
- Query invalid diabaikan tanpa crash.
- URL filter memakai `replace`.
- Detail canonical memakai `push`.
- Back memulihkan state dan scroll.
- Query sensitif tidak masuk analytics secara mentah; map ke intent/category.

---

## 12. State Matrix

- **Default:** curated collection + categories + discovery mosaic.
- **Searching:** result count dan query highlight.
- **Filtered:** active context ledger.
- **No result:** recovery suggestions.
- **Loading:** stable skeleton.
- **Partial:** tampilkan data valid dan disclosure.
- **Error:** retry + curated fallback.
- **Offline:** local canonical dataset dan saved shelf tetap bekerja.
- **Saved:** explicit visual state + `aria-pressed`.
- **Context changed:** prompt ringan, tidak auto-replace saat membaca.
- **Broken asset:** category fallback composition.
- **Invalid item URL:** 404 editorial + suggested items.
- **Reduced motion:** static layout tanpa kehilangan informasi.

---

## 13. Data Model Canonical

```tsx
type ArchiveCategoryId =
  | 'rumah-adat'
  | 'tarian'
  | 'alat-musik'
  | 'pakaian-adat'
  | 'upacara-adat'
  | 'cerita-rakyat'
  | 'bahasa-aksara'
  | 'senjata-tradisional'
  | 'kerajinan'
  | 'motif-kain'
  | 'tokoh-daerah'
  | 'kosmologi';

type ArchiveItem = {
  id: string;
  slug: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  categoryId: ArchiveCategoryId;
  provinceIds: string[];
  communityIds?: string[];
  localeContent: {
    id: ArchiveItemLocale;
    en?: ArchiveItemLocale;
  };
  aliases: string[];
  period?: ArchivePeriod;
  livingStatus?: 'living' | 'revitalized' | 'historical' | 'unknown';
  media: ArchiveMedia[];
  sourceRefs: string[];
  relatedItemIds: string[];
  relatedFeatureRefs: ArchiveFeatureRef[];
  sensitivity?: ArchiveSensitivity;
  updatedAt: string;
  reviewedAt?: string;
};
```

### Validation minimum

- ID dan slug unik.
- Category/province/source valid.
- Published item memiliki title, summary, origin, minimal satu source, dan visual/fallback.
- Alias unik per item.
- Related IDs tidak self-reference dan tidak duplikat.
- Image memiliki alt, credit/license bila diperlukan, dimensions, dan focal point.
- English content wajib jika item dipublikasikan dalam mode bilingual penuh.
- Sensitive content memiliki disclosure/policy.

### Target MVP

- Minimal 120 item.
- Dua belas kategori terwakili.
- Tujuh region terwakili.
- Delapan provinsi flagship memiliki kedalaman tertinggi.
- Jangan mengejar count dengan item tipis; kualitas dan sumber lebih penting.

---

## 14. Component Architecture Rekomendasi

```
src/components/archive/
  archive-hero/
  discovery-desk/
  curator-selection/
  category-cabinet/
  archive-mosaic/
  regional-memory-index/
  story-threads/
  item-quick-view/
  source-learning-desk/
  ecosystem-handoff/
  personal-shelf/
  contribution/

src/data/archive/
  items.ts|json
  categories.ts
  collections.ts
  storyThreads.ts
  sourceRegistry.ts
  archiveAssetManifest.ts

src/lib/archive/
  archiveSchema.ts
  searchArchive.ts
  filterArchive.ts
  rankArchiveItems.ts
  mapArchiveItemToViewModel.ts
  parseArchiveQuery.ts
  resolveArchiveRelations.ts
  validateArchiveData.ts

src/types/archive.ts
src/hooks/useArchiveDiscovery.ts
src/hooks/useArchiveShelf.ts
```

### Rules

- Audit repository sebelum menentukan path final.
- Reuse container, button, image, motion, locale, analytics, focus, dan persistence utilities existing.
- Pisahkan data/schema/ranking dari JSX.
- Card menerima ViewModel; jangan membaca banyak global store langsung.
- Jangan membuat source item kedua untuk Province Atlas atau RANI.
- Gunakan strict TypeScript; hindari `any`.

---

## 15. Responsive Blueprint

### Desktop ≥1280 px

- Hero 5/7.
- Discovery Desk dapat sticky ringan setelah hero, tetapi tidak menutup navbar.
- Curator selection 7/5 dengan overlap terkendali.
- Archive Mosaic 12-column editorial composition.
- Regional Index rail + dossier.
- Quick View 420–520 px.

### Laptop 1024–1279 px

- Kurangi heading/padding.
- Pertahankan asimetri, tetapi hindari panel terlalu sempit.
- Mosaic 2–3 kolom berdasarkan content width.

### Tablet 768–1023 px

- Hero stacked.
- Discovery controls wrap atau disclosure.
- Category index horizontal.
- Curator Ticket berada setelah visual.
- Mosaic dua kolom.
- Quick View 60–70vw atau full-height drawer.

### Mobile ≤767 px

Reading order:

1. Hero copy.
2. Hero image.
3. Search.
4. Mode + primary filters.
5. Curator selection.
6. Category index.
7. Results.
8. Region.
9. Story threads.
10. Source desk.
11. Personal shelf.
12. Final handoff.

Rules:

- Gutter 20–24 px.
- Touch target ≥44×44 px.
- No horizontal page overflow.
- Chips wrap; nonessential filters masuk disclosure.
- Mosaic menjadi satu featured item + compact rows.
- Quick View full screen.
- Sticky action aman dari bottom nav dan `safe-area-inset-bottom`.
- Tidak ada info penting yang hanya muncul pada hover.

### Viewport QA minimum

360×800, 375×667, 390×844, 430×932, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080.

---

## 16. Motion Choreography

### Signature motion

- Hero collage reveal satu kali.
- Catalog line/underline draw singkat.
- Drawer category bergeser 8–12 px dan crossfade.
- Result filter crossfade tanpa layout jump.
- Quick View slide 220–300 ms.
- Story Thread nodes reveal 40–70 ms.
- CTA arrow bergeser 3–4 px.

### Batasan

- UI motion 150–300 ms.
- Hanya transform/opacity/clip sederhana.
- Tidak ada parallax besar, autoplay, infinite pulse, bounce, dan 3D tilt.
- Jangan menunda data dengan loading palsu.
- Reduced motion menonaktifkan draw, stagger, slide besar, dan smooth scroll.

---

## 17. Accessibility

- Semantic `<main>`, `<section>`, heading hierarchy H1/H2/H3.
- Search menggunakan form dan label nyata.
- Filter memakai fieldset/legend atau tabs/button group yang benar.
- Category selector mendukung arrow/Home/End jika memakai tabs.
- Result berupa list semantik; urutan DOM sama dengan urutan visual.
- Quick View focus trap, Escape close, dan restore focus.
- Save menggunakan `aria-pressed`.
- Result count/status menggunakan live region ringkas.
- Decorative collage/route line `aria-hidden`.
- Image alt spesifik dan tidak mengulang caption.
- Contrast WCAG AA.
- Focus ring saffron/terracotta 2–3 px, bukan navy.
- Zoom 200% tetap usable.
- Forced colors tetap menunjukkan selected/active state.
- Semua gesture drag memiliki alternatif tombol/keyboard.

---

## 18. Performance, SEO, Security, dan Privacy

### Performance

- Data summary lokal atau server-rendered.
- Jangan bundle full deep-detail content ke landing Archive.
- Lazy-load Quick View media, Story Threads di bawah fold, dan source panel berat.
- Featured/LCP image teroptimasi; card images lazy.
- Explicit dimensions/aspect ratio dan responsive sizes.
- Tidak memuat Map engine pada halaman Archive.
- Search lokal ideal <50 ms; feedback UI <100 ms.
- Hindari long task >200 ms.

### SEO

- Canonical `/archive` dan `/archive/[slug]`.
- Metadata item, OpenGraph, breadcrumb, dan structured data sesuai jenis konten jika valid.
- Filter URL tertentu `noindex` bila menghasilkan duplikasi besar.
- Sitemap hanya untuk published items.

### Security/privacy

- Allowlist query dan item IDs.
- Jangan render raw HTML.
- Source URL disanitasi.
- Contribution form memiliki rate limit/moderation bila backend tersedia.
- Jangan meminta lokasi real-time.
- Analytics tidak mengirim query mentah, data pribadi, atau isi kontribusi.

---

## 19. Analytics Events

Gunakan adapter existing; jangan memasang platform baru hanya untuk Archive.

- archive_page_viewed
- archive_search_started
- archive_search_submitted
- archive_filter_changed
- archive_zero_result
- archive_category_selected
- archive_collection_opened
- archive_item_quick_viewed
- archive_item_opened
- archive_item_saved
- archive_item_unsaved
- archive_source_opened
- archive_thread_opened
- archive_map_handoff
- archive_atlas_handoff
- archive_route_handoff
- archive_rani_opened
- archive_correction_started
- archive_correction_submitted
- archive_asset_failed

Properties aman: itemId, categoryId, provinceId, regionId, mode, resultCount bucket, source, locale. Jangan kirim raw query atau free-text correction.

---

## 20. Cultural Integrity dan Editorial Governance

1. Setiap published item memiliki source registry.
2. Klaim ownership budaya tidak disederhanakan.
3. Komunitas disebut dengan istilah yang benar dan terbaru.
4. Ritual/situs sakral tidak dipromosikan sebagai atraksi otomatis.
5. Event tidak diklaim selalu tersedia.
6. Istilah “primitif”, “eksotis”, “belum tersentuh”, dan “autentik” tanpa konteks dilarang.
7. Foto manusia memerlukan source/license/context yang layak.
8. Sensitive item dapat membatasi media atau menampilkan content note.
9. Correction masuk moderation queue.
10. Updated/reviewed status terlihat di deep detail.

---

## 21. Testing Strategy

### Unit/data

- IDs/slugs unik.
- Dua belas kategori valid.
- Province/region mapping valid.
- Published item memiliki source dan alt/fallback.
- Search alias dan normalization benar.
- Filter AND/OR behavior benar.
- Ranking deterministik.
- Related item tidak self-reference.
- URL parser menolak enum invalid.
- Corrupted local shelf tidak crash.

### Component

- Search dan clear keyboard-friendly.
- Filter selected state benar.
- Result count live tidak verbose.
- Category tabs keyboard lengkap.
- Quick View focus trap/restore.
- Save/unsave idempotent.
- Empty/error/fallback state dapat dipulihkan.
- Image fallback tampil tanpa broken icon.

### Integration/E2E

1. Direct entry → curated discovery → item detail.
2. Search → filter → quick view → Back state restored.
3. Learn Mode → source desk.
4. Tourist Mode → etiquette → Route Planner prefill.
5. Item → Map → Back.
6. Item → Aksara Lab/NusaRasa/Jalur Rempah.
7. Save item → refresh → shelf restored.
8. Offline → local items/shelf usable.
9. Invalid query/item → safe recovery.
10. Contribution → moderation confirmation.

---

## 22. Visual QA Checklist Wajib

Capture dan lihat satu per satu pada viewport target.

- Tidak ada navy atau blue-black.
- Tidak ada blok kosong besar.
- Tidak ada overlap/overflow.
- Hero collage memiliki focal point.
- Heading dan body memiliki ruang napas.
- Curator Ticket tidak menutupi objek penting.
- Category Cabinet tidak terlihat seperti grid SaaS.
- Archive Mosaic tetap berurutan dan mudah dipindai.
- Filter tidak mendominasi halaman.
- Quick View nyaman desktop/mobile.
- Image crop kuat dan tidak pecah.
- Motion tenang dan tidak menyebabkan CLS.
- English copy tidak overflow.
- Focus terlihat.
- CTA aman dari bottom navigation.
- Hasil terasa sengaja di-art-direct, bukan template AI.

---

## 23. Fase Implementasi

### Fase 0 — Audit dan fondasi

- Audit repository, route, shared state, design tokens, assets, data, dan integrations.
- Baseline lint/typecheck/test/build.
- Tetapkan canonical IDs, schema, dan asset manifest.

### Fase 1 — Data dan discovery core

- Archive schema + validator.
- Search/filter/ranking/URL.
- Dataset minimum berkualitas.
- Hero, Discovery Desk, Category Cabinet, Archive Mosaic.

### Fase 2 — Detail dan trust

- Quick View.
- Deep detail route.
- Source Desk.
- Related item resolver.
- Cultural sensitivity states.

### Fase 3 — Ecosystem integration

- Map, Atlas, Route, Passport, RANI, NusaRasa, Aksara, Jalur Rempah.
- Back/restore behavior.
- Personal Shelf.

### Fase 4 — Editorial depth

- Curator collections.
- Story Threads.
- Regional Memory Index.
- Contribution/correction.

### Fase 5 — Polish dan QA

- Motion.
- Responsive refinement.
- Accessibility audit.
- Performance/image optimization.
- Visual QA semua viewport.
- Production build dan demo rehearsal.

---

## 24. Prioritas Konten MVP

### P0 — wajib demo

- 120 item minimum tervalidasi.
- Search, category, province, mode.
- 6 featured collections.
- 12 category profiles.
- 8 flagship province coverage mendalam.
- Quick View + minimal 12 deep detail showcase.
- Source status.
- Map/Atlas/Passport handoff.

### P1 — pembeda kuat

- Story Threads.
- Regional Memory Index.
- Learn Mode detail.
- Aksara/NusaRasa/Jalur Rempah integration.
- Correction flow.

### P2 — premium enhancement

- Advanced compare.
- Rich media/audio.
- Download citation.
- RANI contextual explanation.
- Community contribution dashboard.

---

## 25. Acceptance Criteria

### Product

- Pengguna dapat mencari, memfilter, membuka, menyimpan, dan melanjutkan eksplorasi.
- Semua state memiliki recovery.
- Tidak ada dead CTA.
- Mode Explore/Tourist/Learn menghasilkan emphasis berbeda.

### Data

- Satu canonical item source.
- Semua published item tervalidasi.
- Source status terlihat.
- Tidak ada fakta budaya palsu.

### UI/UX

- Halaman image-led, editorial, asimetris, dan unik.
- Bukan dashboard, marketplace, atau grid card generik.
- Tidak ada navy.
- Layout sejalan dengan kualitas Nusa Route/Explore tanpa menduplikasinya.

### Integration

- Map, Atlas, Route, Passport, RANI, dan feature-specific handoff memakai typed context.
- Back/refresh memulihkan state.
- Save explicit dan tidak memberi completion palsu.

### Quality

- Responsive tanpa horizontal overflow.
- WCAG AA.
- Reduced motion.
- Search cepat.
- Images optimized.
- Lint, typecheck, tests, validator, dan production build lulus atau baseline error terdokumentasi.

---

## 26. Definition of Done

- [ ]  Route `/archive` tersedia dan stabil.
- [ ]  Creative direction **The Living Memory House** diterapkan.
- [ ]  Tidak ada navy, dark navy, blue-black, gradient navy, shadow navy, atau focus navy.
- [ ]  Hero editorial menggunakan aset nyata/fallback art-directed.
- [ ]  Discovery Desk berfungsi dengan search, mode, filter, sort, reset, dan URL state.
- [ ]  Dua belas kategori tersedia dan tidak ditampilkan sebagai grid identik.
- [ ]  Archive Mosaic memiliki editorial dan compact view.
- [ ]  Quick View dan deep detail dapat dipakai keyboard.
- [ ]  Source status dan cultural context terlihat.
- [ ]  Curator’s Selection dan Story Threads memiliki data canonical.
- [ ]  Tujuh region terwakili tanpa ranking atau stereotip.
- [ ]  Map/Atlas/Route/Passport/RANI/NusaRasa/Aksara/Jalur Rempah handoff aman.
- [ ]  Browser Back, refresh, dan offline fallback masuk akal.
- [ ]  Personal Shelf hydration-safe dan idempotent.
- [ ]  Contribution masuk moderation, bukan publish langsung.
- [ ]  Empty/loading/error/partial/asset-failure state selesai didesain.
- [ ]  Desktop, tablet, mobile, zoom 200%, keyboard, dan reduced motion diuji.
- [ ]  Tidak ada overlap, overflow, broken image, broken link, atau dead CTA.
- [ ]  Visual QA dilakukan pada seluruh viewport target.
- [ ]  Production build berhasil.
- [ ]  Demo juri 90 detik dapat diulang secara stabil.

---

## 27. Guardrail Terakhir untuk Implementasi

<aside>
🧭

**Nusa Archive harus terasa seperti ruang budaya yang dikurasi oleh editor, peneliti, dan desainer terbaik—bukan halaman yang dibuat dengan menumpuk komponen UI.** Setiap visual harus punya alasan, setiap data harus punya sumber, setiap interaksi harus memiliki tujuan, dan setiap jalan harus membawa pengguna lebih dekat pada cerita Nusantara.

</aside>