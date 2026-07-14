# Planning Lengkap — Section 10 RANI Map Assistant NUSANTARAYA

<aside>
🤖

**Dokumen source of truth untuk Section 10 — RANI Map Assistant pada halaman `/explore` / Nusa Map Full Page NUSANTARAYA.** Section ini mengubah seluruh konteks eksplorasi—Map, layer, mode, provinsi, journey, wilayah, dan Passport—menjadi bantuan percakapan yang relevan, dapat dijelaskan, aman, dan tetap berfungsi tanpa API.

</aside>

---

## 1. Ringkasan Eksekutif

**RANI Map Assistant** adalah section kesepuluh halaman Nusa Map Full Page `/explore`, ditempatkan setelah **Nusa Passport Progress** dan sebelum **Final CTA**.

Section ini menjawab pertanyaan utama:

> “Berdasarkan apa yang sedang saya jelajahi dan progress saya, apa langkah terbaik berikutnya—dan mengapa?”
> 

Konsep final:

```
Contextual Nusantara Guide
```

Versi pengalaman:

```
RANI memahami peta, minat, dan jejak perjalananmu—lalu membantu menemukan langkah berikutnya.
```

RANI Map Assistant **bukan chatbot customer service generik**, **bukan kotak AI kosong**, dan **bukan pengganti halaman `/rani`**. Section harus menjadi pengalaman contextual assistant yang ringkas namun nyata: membaca state halaman, menjelaskan rekomendasi, menerima pertanyaan terarah, dan memberi CTA yang benar-benar terhubung ke Map, Atlas, Route Planner, Archive, NusaRasa, Passport, atau halaman RANI lengkap.

<aside>
🎯

**Formula UX final:** pahami konteks → pilih kebutuhan → terima jawaban bersumber → pahami alasannya → lakukan tindakan berikutnya.

</aside>

### 1.1 Keputusan utama

1. RANI menggunakan pendekatan **local-first hybrid AI**.
2. Dataset lokal, intent router, preset, dan template response adalah fondasi wajib.
3. API/LLM hanya enhancement; kegagalan API tidak boleh merusak section.
4. RANI membaca shared state existing; tidak membuat Map, mode, layer, province, journey, atau Passport state baru.
5. Jawaban harus berbasis dataset terkurasi dan menampilkan sumber ketika membahas fakta budaya.
6. Setiap rekomendasi memiliki alasan yang dapat dijelaskan.
7. Section menampilkan satu rekomendasi proaktif, quick prompts, satu conversation stage, dan CTA kontekstual.
8. Section tidak memuat seluruh pengalaman chat panjang; histori lengkap tetap di `/rani` jika route tersedia.
9. RANI tidak mengklaim pengguna pernah mengunjungi lokasi fisik berdasarkan progress digital.
10. Tourist Mode memprioritaskan informasi praktis, etika, dan keselamatan tanpa klaim real-time.
11. Learn Mode memprioritaskan penjelasan, glosarium, dan sumber.
12. Explore Mode memprioritaskan discovery, hubungan antarkonten, dan langkah berikutnya.
13. Jawaban lokal harus stabil, cepat, dan deterministik.
14. CTA tidak boleh broken; gunakan fallback menuju Map jika target khusus belum tersedia.
15. Input, output, loading, error, empty, offline, timeout, dan out-of-scope state wajib dirancang.
16. Section harus usable dengan keyboard, screen reader, touch, zoom 200%, dan reduced motion.
17. Tidak ada data sensitif, lokasi real-time, login, atau penyimpanan percakapan ke server pada MVP.
18. RANI tidak memberikan reward Passport hanya karena chat dibuka atau prompt dikirim.
19. Jika badge RANI Companion dipakai, requirement harus berupa interaksi bermakna dan idempotent.
20. Section harus tetap meyakinkan saat didemokan sepenuhnya offline.

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
8. Regional Explorer
9. Nusa Passport Progress
10. RANI Map Assistant ← SECTION INI
11. Final CTA
```

### 2.1 Peran section yang berdekatan

- Section 8 menjawab: **Bagaimana karakter antarkawasan dapat dibandingkan?**
- Section 9 menjawab: **Seberapa jauh perjalanan digital saya sudah berkembang?**
- Section 10 menjawab: **Dengan konteks ini, apa yang dapat RANI bantu sekarang?**
- Section 11 menjawab: **Aksi utama apa yang akan saya ambil untuk melanjutkan perjalanan?**

### 2.2 Handoff dari Nusa Passport Progress

Input minimum:

```tsx
{
  completedProvinceIds,
  plannedProvinceIds,
  startedProvinceIds,
  latestAchievement,
  nextMilestone,
  highlightedRegionId,
  activeLayer,
  activeMode,
}
```

Microcopy transisi:

```
Belum yakin harus melanjutkan ke mana?
Tanya RANI untuk menemukan langkah berikutnya berdasarkan Passport-mu.
```

Jika pengguna menekan `Tanya RANI` dari Section 9:

1. Scroll ke `#rani-map-assistant`.
2. Fokus ke heading section.
3. `entrySource = "passport-progress"`.
4. RANI membuat context summary dari progress aktual.
5. Prompt awal dipilih dari `nextMilestone`.
6. Tidak ada reward atau perubahan Passport otomatis.
7. Screen reader mengumumkan: `RANI siap membantu berdasarkan progress Passport-mu.`

### 2.3 Handoff ke Final CTA

RANI mengirim outcome minimum:

```tsx
{
  lastIntent,
  recommendedProvinceId,
  recommendedAction,
  activeLayer,
  activeMode,
  selectedProvinceId,
}
```

Microcopy transisi:

```
Sudah menemukan langkah berikutnya?
Mulai dari peta, lanjutkan journey, atau buka Passport lengkapmu.
```

### 2.4 Anchor wajib

```
#rani-map-assistant
```

---

## 3. Tujuan Produk dan UX

### 3.1 Tujuan pengguna

Pengguna dapat:

1. Memahami konteks yang sedang dibaca RANI.
2. Meminta rekomendasi provinsi berdasarkan minat/layer.
3. Meminta langkah berikutnya berdasarkan progress Passport.
4. Meminta penjelasan budaya atau sejarah yang bersumber.
5. Meminta rekomendasi kuliner berdasarkan provinsi/wilayah.
6. Meminta bantuan menyusun atau menyesuaikan journey.
7. Meminta etika budaya dan tips turis.
8. Meminta kosakata atau terjemahan dasar ID/EN.
9. Membuka Map dengan state yang tetap terjaga.
10. Membuka Province Summary atau Atlas yang relevan.
11. Membuka Route Planner dengan draft context.
12. Membuka Archive, NusaRasa, Passport, atau RANI lengkap.
13. Mengetahui apakah jawaban berasal dari dataset lokal atau layanan AI.
14. Mengetahui sumber fakta penting.
15. Tetap mendapat jawaban ketika offline/API gagal.

### 3.2 Tujuan emosional

```
RANI terasa memahami perjalanan saya, bukan sekadar menunggu pertanyaan.
Saya tahu mengapa sebuah provinsi atau aksi direkomendasikan.
Saya merasa ditemani, bukan diarahkan secara memaksa.
Saya percaya jawaban budaya karena sumber dan batasannya jelas.
Indonesia terasa luas, tetapi langkah berikutnya tetap mudah dipahami.
```

### 3.3 Tujuan kompetisi/demo

- Membuktikan shared state lintas Map, Passport, Journey, dan AI Guide.
- Menunjukkan AI yang berguna, bukan gimmick.
- Menunjukkan fallback lokal anti-gagal.
- Menunjukkan respons berbasis sumber dan anti-halusinasi.
- Memperlihatkan mode Explore/Tourist/Learn yang benar-benar mengubah jawaban.
- Menghasilkan aksi nyata ke Map, Atlas, Route Planner, dan Passport.
- Menjadi wow moment terakhir sebelum Final CTA.

### 3.4 KPI yang disarankan

Events utama:

- `rani_section_viewed`
- `rani_context_inspected`
- `rani_prompt_selected`
- `rani_question_submitted`
- `rani_answer_rendered`
- `rani_source_opened`
- `rani_action_clicked`
- `rani_fallback_used`
- `rani_full_opened`
- `rani_out_of_scope`

Target awal:

- ≥35% pengguna yang mencapai section memilih satu prompt atau CTA.
- ≥20% menjalankan satu aksi Map/Atlas/Planner/Passport.
- ≥15% membuka atau memeriksa sumber pada jawaban faktual.
- 100% preset demo bekerja tanpa API.
- Jawaban lokal tampil idealnya <300ms setelah feedback awal.
- Tidak ada dead-end setelah jawaban.

---

## 4. Scope dan Batas Tanggung Jawab

### 4.1 Termasuk

- Context summary dari shared state.
- Proactive recommendation berdasarkan konteks.
- Quick prompt chips mode-aware.
- Input pertanyaan singkat.
- Intent classification lokal.
- Rule-based recommendation.
- Template response terkurasi.
- Optional API enhancement berbasis dataset.
- Source chips untuk fakta budaya.
- CTA Map, Province, Atlas, Planner, Archive, NusaRasa, Passport, dan RANI full.
- Offline/API fallback.
- Loading, timeout, empty, invalid input, out-of-scope, dan error states.
- Bilingual ID/EN.
- Accessibility, analytics, privacy, performance, dan testing.

### 4.2 Tidak termasuk

- Chat bebas tanpa batas domain.
- Browsing web real-time.
- Informasi harga, cuaca, jadwal, visa, keamanan, atau transportasi real-time tanpa integrasi terverifikasi.
- Booking, pembayaran, reservasi, atau transaksi.
- Diagnosis medis, hukum, keuangan, atau layanan darurat.
- Penyimpanan percakapan cloud.
- Profil personal kompleks.
- Lokasi GPS real-time.
- Voice assistant penuh.
- Upload gambar/Nusa Lens.
- Seluruh histori chat panjang di section.
- AI yang boleh menulis langsung ke Passport tanpa aksi eksplisit pengguna.

### 4.3 Pembagian tanggung jawab

```
Map menyediakan konteks geografis dan pilihan.
Atlas menyediakan detail dan sumber.
Journey menyediakan urutan eksplorasi.
Route Planner menyediakan itinerary terstruktur.
Passport menyediakan progress dan milestone.
RANI memahami konteks, menjelaskan, dan mengarahkan.
Final CTA mengubah hasil menjadi aksi penutup.
```

---

## 5. Prinsip Produk RANI

1. **Context before conversation** — tampilkan apa yang dipahami RANI.
2. **Local-first, API-optional** — pengalaman inti tidak bergantung API.
3. **Explainable recommendation** — rekomendasi selalu memiliki alasan.
4. **Sources over confidence theater** — fakta budaya lebih baik bersumber daripada terdengar yakin.
5. **Actionable answers** — setiap jawaban idealnya punya satu langkah berikutnya.
6. **Mode-aware** — Explore, Tourist, dan Learn menghasilkan fokus berbeda.
7. **No fake personalization** — jangan mengklaim memahami preferensi yang tidak tersedia.
8. **No physical-travel assumption** — progress digital bukan bukti kunjungan nyata.
9. **Respect cultural nuance** — hindari ranking budaya dan generalisasi berlebihan.
10. **Graceful uncertainty** — RANI boleh mengatakan data belum tersedia.
11. **User control** — navigasi dan perubahan state terjadi lewat aksi eksplisit.
12. **Stable demo** — preset penting harus selalu bisa diulang.
13. **Progress without manipulation** — tidak ada urgency, streak, atau guilt copy palsu.
14. **Minimal data** — kirim context seperlunya, bukan seluruh histori pengguna.
15. **Useful without typing** — prompt chips dan rekomendasi awal harus cukup membantu.

---

## 6. Persona dan Mode Behavior

### 6.1 Explore Mode

Prioritas:

- rekomendasi provinsi;
- hubungan budaya, kuliner, alam, sejarah, rempah, dan masa depan;
- hidden gems editorial;
- next discovery;
- Map/Atlas actions.

Gaya jawaban:

```
hangat, eksploratif, ringkas, penuh rasa ingin tahu
```

### 6.2 Tourist Mode

Prioritas:

- what to see/eat;
- cultural etiquette;
- suggested duration;
- itinerary handoff;
- practical preparation;
- safe limitation untuk data non-real-time.

Gaya jawaban:

```
praktis, jelas, bilingual-ready, tidak mengklaim kondisi real-time
```

Wajib disclaimer bila relevan:

```
Informasi ini bersifat panduan umum. Periksa sumber resmi untuk jadwal, harga, akses, dan kondisi terbaru.
```

### 6.3 Learn Mode

Prioritas:

- penjelasan budaya/sejarah;
- istilah dan glosarium;
- perbandingan yang hati-hati;
- sumber;
- Archive/Atlas actions;
- pertanyaan lanjutan edukatif.

Gaya jawaban:

```
terstruktur, netral, bersumber, tidak menyederhanakan budaya secara berlebihan
```

### 6.4 Locale

- `id` menggunakan Bahasa Indonesia sebagai default.
- `en` menggunakan English yang natural, bukan terjemahan literal.
- Nama budaya, tempat, dan istilah lokal dipertahankan; beri penjelasan singkat.
- Perubahan bahasa tidak menghapus context atau percakapan aktif.

---

## 7. Konsep Pengalaman Final

### 7.1 Creative direction

```
Digital Cultural Guide × Context Console × Editorial Conversation Stage
```

### 7.2 Formula visual

```
Heritage Futuristic Light
+ digital blue intelligence accent
+ warm ivory editorial canvas
+ navy conversation surface
+ gold action hierarchy
```

### 7.3 Komposisi informasi

1. Eyebrow dan heading.
2. Trust/local-first note.
3. Context ribbon.
4. RANI visual/avatar.
5. Proactive recommendation.
6. Explainable reason.
7. Quick prompts.
8. Conversation stage.
9. Source chips.
10. Contextual action buttons.
11. Input composer.
12. Link ke RANI lengkap.
13. Handoff ke Final CTA.

### 7.4 Yang harus dihindari

- Kotak chat generik berwarna putih tanpa identitas.
- Section penuh bubble panjang.
- Prompt kosong `Tanyakan apa saja` tanpa arah.
- Klaim “AI memahami semuanya”.
- Typing animation terlalu lama.
- Jawaban tanpa CTA.
- Jawaban faktual tanpa sumber ketika sumber tersedia.
- Label “online” palsu.
- Avatar terlalu besar hingga mengalahkan fungsi.
- Chat panel dengan nested scroll tinggi di mobile.
- Semua respons bergantung API.
- Rekomendasi random setiap render.
- Auto-submit saat section masuk viewport.

---

## 8. Anatomi Section

### 8.1 Header editorial

Berisi:

- index `10` subtle;
- eyebrow;
- heading;
- subheading;
- local-first trust note;
- optional status `Dataset lokal siap`.

### 8.2 Context ribbon

Menjelaskan state yang sedang digunakan:

```
Mode: Explore · Layer: Jalur Rempah · Wilayah: Maluku · Passport: 1/2 wilayah
```

Aturan:

- maksimal 4–5 context chips;
- jangan menampilkan data kosong;
- context dapat diperiksa tetapi tidak diedit diam-diam;
- tombol `Ubah di Peta` membawa ke kontrol/Map;
- context decorative bukan satu-satunya cara memahami rekomendasi.

### 8.3 Proactive recommendation

Satu rekomendasi utama yang dapat dihasilkan tanpa user mengetik.

Contoh:

```
Rekomendasi RANI: Lanjutkan ke Maluku Utara
Satu provinsi lagi akan melengkapi milestone wilayah Maluku, dan pilihan ini melanjutkan konteks Jalur Rempah yang sedang aktif.
```

### 8.4 Quick prompts

Maksimal 4 prompt utama terlihat, 2–4 tambahan dalam `Lihat lainnya`.

### 8.5 Conversation stage

Menampilkan:

- avatar RANI;
- user query terakhir;
- answer blocks;
- sources;
- action row;
- feedback optional;
- input composer.

Batasi preview section menjadi maksimal 2 exchange. Jika lebih panjang, arahkan ke `/rani` atau buka panel penuh.

### 8.6 Action row

Satu primary action dan maksimal tiga secondary actions.

### 8.7 Trust footer

```
RANI menggunakan data terkurasi NUSANTARAYA. Jawaban tertentu dapat memakai AI sebagai peningkatan, tetapi fallback lokal tetap tersedia.
```

---

## 9. Copywriting Final

### Eyebrow

```
RANI Map Assistant
```

### Heading

```
Temukan Langkah Berikutnya Bersama RANI
```

Alternatif:

- `Belum Yakin Harus Melanjutkan ke Mana?`
- `Peta Sudah Terbuka. RANI Membantu Membaca Arahnya.`
- `Tanya, Pahami, Lalu Lanjutkan Perjalananmu.`

### Subheading

```
RANI membaca pilihan peta, minat, mode jelajah, dan progress Passport-mu untuk memberi rekomendasi yang relevan, dapat dijelaskan, dan langsung bisa ditindaklanjuti.
```

### Supporting microcopy

```
Berbasis dataset lokal terkurasi, dengan AI sebagai peningkatan opsional.
```

### Input placeholder

Explore:

```
Tanyakan provinsi, budaya, rasa, atau perjalanan berikutnya…
```

Tourist:

```
Tanyakan destinasi, kuliner, etika, atau itinerary…
```

Learn:

```
Tanyakan sejarah, budaya, istilah, atau sumber pembelajaran…
```

### Primary CTA dinamis

- `Jelajahi Maluku Utara`
- `Lanjutkan di Peta`
- `Buka Atlas Provinsi`
- `Susun Rute Ini`
- `Lengkapi Milestone Passport`
- `Pelajari di Nusa Archive`

### Secondary CTA

- `Buka RANI Lengkap`
- `Lihat Sumber`
- `Tanya Lagi`
- `Ubah Konteks di Peta`
- `Simpan sebagai Journey`

### Empty context copy

```
Mulai dari satu minat atau provinsi. RANI akan membantu menyusun arah eksplorasimu.
```

### Offline copy

```
RANI sedang menggunakan panduan lokal NUSANTARAYA. Kamu tetap dapat bertanya dan melanjutkan eksplorasi tanpa koneksi AI.
```

---

## 10. Quick Prompt System

### 10.1 Prompt Explore Mode

- `Ke mana saya harus lanjut?`
- `Cari provinsi sesuai layer ini`
- `Apa hubungan budaya wilayah ini?`
- `Tunjukkan hidden gem editorial`
- `Buat journey dari pilihan ini`
- `Apa yang baru untuk Passport saya?`

### 10.2 Prompt Tourist Mode

- `Apa yang sebaiknya saya lihat?`
- `Apa kuliner yang patut dicoba?`
- `Apa etika budaya yang perlu diketahui?`
- `Buat rencana perjalanan ringkas`
- `Berapa lama durasi yang disarankan?`
- `Buka Route Planner dengan konteks ini`

### 10.3 Prompt Learn Mode

- `Jelaskan budaya wilayah ini`
- `Apa konteks sejarahnya?`
- `Bandingkan tanpa menentukan yang terbaik`
- `Tampilkan istilah penting`
- `Buka sumber pembelajaran`
- `Beri pertanyaan lanjutan untuk belajar`

### 10.4 Prompt Passport-aware

- `Apa milestone berikutnya?`
- `Provinsi mana yang perlu saya lanjutkan?`
- `Bagaimana melengkapi wilayah ini?`
- `Apa yang belum pernah saya eksplorasi?`

### 10.5 Prompt selection rules

1. Prompt berasal dari mode + context.
2. Jangan menampilkan prompt yang target datanya kosong.
3. Maksimal satu prompt Passport jika Passport kosong; gunakan prompt starter.
4. Tourist prompt tidak boleh menjanjikan data real-time.
5. Learn prompt menampilkan source action.
6. Prompt order stabil selama context tidak berubah.
7. Prompt dapat diakses keyboard dan memiliki label lengkap.

---

## 11. State Contract

```tsx
export type RaniMapContext = {
  locale: "id" | "en";
  activeMode: "explore" | "tourist" | "learn";
  activeLayer:
    | "all"
    | "budaya"
    | "kuliner"
    | "alam"
    | "sejarah"
    | "rempah"
    | "future";
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  activeRegionId: string | null;
  highlightedRegionId: string | null;
  compareRegionId: string | null;
  activeJourneyId: string | null;
  journeyProvinceIds: string[];
  plannedProvinceIds: string[];
  startedProvinceIds: string[];
  completedProvinceIds: string[];
  latestAchievementId: string | null;
  nextMilestone: RaniMilestoneContext | null;
  entrySource: RaniEntrySource;
};
```

```tsx
export type RaniEntrySource =
  | "section-scroll"
  | "map"
  | "province-summary"
  | "province-atlas"
  | "recommended-journey"
  | "regional-explorer"
  | "passport-progress"
  | "route-planner"
  | "direct";
```

### 11.1 Aturan ownership

- Semua field dibaca dari source existing.
- Section tidak membuat duplicate store.
- Derived context boleh di-memoize.
- Perubahan Map hanya melalui adapter/action existing.
- Percakapan UI boleh local component state.
- Histori section disimpan session-only, bukan localStorage, kecuali arsitektur RANI existing sudah menetapkan sebaliknya.

### 11.2 Context priority

```
1. Explicit user question
2. Selected province
3. Next Passport milestone
4. Active journey
5. Highlighted/active region
6. Active layer
7. Search intent
8. Mode
9. Editorial fallback
```

### 11.3 Context summary example

```tsx
{
  primarySubject: "maluku-utara",
  activeIntentHint: "next-step",
  reasonCodes: ["COMPLETES_REGION_BADGE", "MATCHES_ACTIVE_LAYER"],
  displayChips: ["Jalur Rempah", "Maluku", "1 provinsi lagi"],
}
```

---

## 12. Intent Taxonomy

```tsx
export type RaniIntent =
  | "NEXT_STEP"
  | "RECOMMEND_PROVINCE"
  | "EXPLAIN_PROVINCE"
  | "EXPLAIN_CULTURE"
  | "RECOMMEND_CULINARY"
  | "CREATE_JOURNEY"
  | "ADJUST_JOURNEY"
  | "CREATE_ITINERARY"
  | "CULTURAL_ETIQUETTE"
  | "TRAVEL_TIPS"
  | "TRANSLATE_TERM"
  | "PASSPORT_PROGRESS"
  | "COMPARE_REGIONS"
  | "FIND_SOURCE"
  | "OPEN_FEATURE"
  | "OUT_OF_SCOPE"
  | "UNKNOWN";
```

### 12.1 Intent examples

| Intent | Contoh | Data utama | Action utama |
| --- | --- | --- | --- |
| NEXT_STEP | Ke mana saya lanjut? | Map + Passport + Journey | Map/Atlas |
| RECOMMEND_PROVINCE | Provinsi alam untuk saya? | Province + layer | Map |
| EXPLAIN_CULTURE | Jelaskan tradisi ini | Archive + sources | Archive/Atlas |
| RECOMMEND_CULINARY | Apa kuliner khasnya? | Culinary | NusaRasa |
| CREATE_ITINERARY | Buat rute 5 hari | Routes + province | Route Planner |
| CULTURAL_ETIQUETTE | Etika saat berkunjung? | Tourist dataset | Tourist guide |
| PASSPORT_PROGRESS | Apa milestone saya? | Passport summary | Map/Passport |
| FIND_SOURCE | Apa sumber informasi ini? | Source registry | Source detail |

### 12.2 Intent routing

```
Normalize query
→ detect locale
→ match explicit command/feature
→ keyword + synonym scoring
→ apply context boost
→ check required data
→ choose intent
→ choose local handler
→ optional API enhancement
→ validate output
→ render response + actions
```

### 12.3 Confidence bands

- `high`: explicit quick prompt atau strong match.
- `medium`: keyword match + context.
- `low`: ambiguous query.

Low confidence response:

```
Saya menangkap dua kemungkinan. Apakah kamu ingin rekomendasi provinsi atau penjelasan budaya?
```

Gunakan clarification chips; jangan menebak berlebihan.

---

## 13. Recommendation Engine

### 13.1 Prinsip

- Deterministik.
- Explainable.
- Tidak random pada setiap render.
- Menggunakan dataset canonical.
- Memprioritaskan progress nyata.
- Tidak membuat ranking budaya.

### 13.2 Bobot awal

```
Explicit query match          35
Selected province             20
Active layer                  20
Active mode                   10
Passport milestone            20
Active/highlighted region     15
Journey continuity            15
Search intent                 10
Flagship content depth         5
Novelty for Passport           5
Source completeness           10
```

Bobot boleh dinormalisasi; hindari double-count berlebihan.

### 13.3 Reason codes

```tsx
export type RaniReasonCode =
  | "MATCHES_EXPLICIT_QUERY"
  | "MATCHES_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_LAYER"
  | "MATCHES_ACTIVE_MODE"
  | "MATCHES_ACTIVE_REGION"
  | "CONTINUES_ACTIVE_JOURNEY"
  | "CONTINUES_STARTED_PROVINCE"
  | "COMPLETES_REGION_BADGE"
  | "ADVANCES_NEXT_LEVEL"
  | "NEW_FOR_PASSPORT"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "SOURCE_COMPLETE"
  | "EDITORIAL_FALLBACK";
```

### 13.4 Explainable copy

- `Direkomendasikan karena sesuai layer Jalur Rempah yang sedang aktif.`
- `Satu provinsi lagi akan melengkapi milestone wilayah Maluku.`
- `Provinsi ini melanjutkan journey yang sudah kamu simpan.`
- `Materi Atlas dan sumber untuk provinsi ini paling lengkap.`
- `Pilihan ini menambah wilayah baru ke Passport digitalmu.`

### 13.5 Tie-break

```
score tertinggi
→ source completeness
→ active region
→ flagship depth
→ canonical editorial priority
→ province ID alphabetical sebagai stabilizer terakhir
```

---

## 14. Local-First Hybrid AI Architecture

### 14.1 Lapisan sistem

```
Layer 1 — Context Builder
Layer 2 — Intent Router
Layer 3 — Local Knowledge Retrieval
Layer 4 — Deterministic Recommendation
Layer 5 — Template Response Composer
Layer 6 — Optional AI Enhancement
Layer 7 — Output Validator
Layer 8 — Action Resolver
```

### 14.2 Urutan eksekusi

```
User query/context
→ sanitize + normalize
→ classify intent
→ retrieve local records
→ build grounded draft
→ if API enabled and healthy: enhance draft with constrained context
→ validate factual entities/actions/sources
→ fallback to local draft if validation fails
→ render
```

### 14.3 API circuit breaker

API tidak dipakai jika:

- offline;
- timeout sebelumnya;
- quota/rate limit;
- invalid response;
- source grounding gagal;
- user memilih mode hemat data;
- preset demo sedang aktif.

Suggested policy:

```
Timeout 4–6 detik maksimum
1 retry hanya untuk network transient
Setelah 2 kegagalan sesi → local-only selama sesi
```

### 14.4 Response provenance

```tsx
export type RaniGeneratedBy =
  | "local-template"
  | "local-recommendation"
  | "hybrid-ai"
  | "editorial-preset";
```

Label UI tidak perlu teknis. Gunakan:

- `Panduan lokal NUSANTARAYA`
- `Ditingkatkan dengan AI`
- `Preset demo terkurasi`

---

## 15. Dataset dan Knowledge Layer

### 15.1 Sumber data internal

- `province.json`
- `cultureArchive.json`
- `culinary.json`
- `routes.json`
- `events.json`
- `future.json`
- `languageScript.json`
- source registry
- tourist etiquette dataset
- curated FAQ/presets

### 15.2 Struktur record RANI

```tsx
export type RaniKnowledgeRecord = {
  id: string;
  type:
    | "province"
    | "culture"
    | "culinary"
    | "route"
    | "etiquette"
    | "language"
    | "future"
    | "event";
  title: string;
  summary: string;
  locale: "id" | "en";
  provinceIds: string[];
  regionIds: string[];
  layerIds: string[];
  modeTags: Array<"explore" | "tourist" | "learn">;
  keywords: string[];
  sourceIds: string[];
  actionTargets: RaniActionTarget[];
  updatedAt?: string;
  isDemoPreset?: boolean;
};
```

### 15.3 Source registry

```tsx
export type RaniSource = {
  id: string;
  label: string;
  publisher: string;
  url?: string;
  sourceType: "government" | "academic" | "museum" | "official-tourism" | "editorial";
  accessedAt?: string;
  relatedRecordIds: string[];
};
```

### 15.4 Validation

- Semua province ID valid.
- Semua source ID valid.
- Tidak ada action target ke route tidak tersedia.
- Record fakta budaya minimal memiliki satu source.
- Record Tourist dengan data time-sensitive ditandai.
- English copy tersedia atau fallback yang jujur.
- Tidak ada duplicate knowledge ID.
- Keywords tidak mengandung data sensitif.

---

## 16. Response Model

```tsx
export type RaniResponse = {
  id: string;
  intent: RaniIntent;
  title?: string;
  summary: string;
  bodyBlocks: RaniResponseBlock[];
  reasonCodes: RaniReasonCode[];
  sourceIds: string[];
  primaryAction: RaniAction | null;
  secondaryActions: RaniAction[];
  followUpPrompts: RaniPrompt[];
  generatedBy: RaniGeneratedBy;
  confidence: "high" | "medium" | "low";
  limitations?: string[];
};
```

```tsx
export type RaniResponseBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "highlight"; label: string; value: string }
  | { type: "warning"; text: string }
  | { type: "glossary"; term: string; definition: string };
```

### 16.1 Jawaban ideal

1. Kesimpulan langsung.
2. Alasan berbasis context.
3. 2–4 detail yang relevan.
4. Source chips jika faktual.
5. Satu tindakan utama.
6. 2–3 follow-up prompts.

### 16.2 Batas panjang

- Proactive answer: 60–120 kata.
- Jawaban quick prompt: 80–180 kata.
- Jawaban Learn: maksimal 250 kata di section.
- Jawaban panjang dialihkan ke `/rani` atau detail feature.

---

## 17. Action Contract dan Integrasi

```tsx
export type RaniActionType =
  | "APPLY_MAP_CONTEXT"
  | "OPEN_PROVINCE_SUMMARY"
  | "OPEN_PROVINCE_ATLAS"
  | "OPEN_ROUTE_PLANNER"
  | "OPEN_ARCHIVE"
  | "OPEN_NUSARASA"
  | "OPEN_PASSPORT"
  | "OPEN_RANI_FULL"
  | "SCROLL_SECTION"
  | "COPY_TERM";
```

```tsx
export type RaniAction = {
  id: string;
  type: RaniActionType;
  label: string;
  target?: string;
  payload?: Record<string, unknown>;
  analyticsSource: string;
  fallbackAction?: RaniActionType;
};
```

### 17.1 Map action

```
Klik Jelajahi Maluku Utara
→ validate province ID
→ set selectedProvinceId
→ preserve activeLayer dan activeMode
→ optionally set activeRegionId
→ scroll #interactive-map
→ focus map status/summary heading
→ announce perubahan
```

### 17.2 Atlas action

```
Klik Buka Atlas Provinsi
→ simpan explore snapshot
→ route /provinsi/[slug]
→ Browser Back memulihkan context + scroll RANI bila sesuai
```

### 17.3 Route Planner action

Payload minimum:

```tsx
{
  source: "rani-map-assistant",
  provinceIds,
  regionId,
  interestLayer: activeLayer,
  travelerMode: activeMode,
  suggestedDuration?: number,
  promptSummary?: string,
}
```

### 17.4 Passport action

- RANI tidak menandai provinsi completed.
- RANI boleh membuka `/passport` atau scroll ke progress.
- RANI boleh mengusulkan planned province hanya setelah user menekan aksi eksplisit.
- Upsert harus idempotent.

### 17.5 Archive/NusaRasa

- Gunakan filter query yang valid.
- Jangan membuat URL tebakan jika contract belum tersedia.
- Fallback ke halaman root feature dengan search/filter context yang aman.

---

## 18. Proactive Recommendation States

### 18.1 Context kosong

```
RANI belum melihat pilihan khusus. Mulai dari minat, provinsi flagship, atau pertanyaan pertama.
```

Primary action: `Pilih Minat di Peta`.

### 18.2 Selected province

RANI menjelaskan provinsi terpilih dan menawarkan Atlas/Journey.

### 18.3 Active layer tanpa province

RANI memilih provinsi berdasarkan layer + source completeness.

### 18.4 Started province

Prioritaskan penyelesaian eksplorasi yang sudah dimulai.

### 18.5 Planned journey

Prioritaskan stop berikutnya yang belum started/completed.

### 18.6 Satu provinsi menuju badge

Tampilkan alasan milestone dengan jelas tanpa tekanan.

### 18.7 Passport lengkap

Jangan merekomendasikan “menambah progress”. Fokus pada:

- eksplorasi tema baru;
- deep Atlas;
- Learn Mode;
- membuat journey;
- melihat koleksi lengkap.

### 18.8 Context conflict

Contoh: selected province Jawa, highlighted region Maluku.

Prioritas selected province untuk jawaban langsung; tampilkan chip bahwa region berbeda masih aktif dan beri opsi `Gunakan konteks Maluku`.

---

## 19. Conversation Flow

### 19.1 Entry

```
Section terlihat
→ context builder berjalan lokal
→ proactive recommendation dirender
→ tidak ada API call otomatis
```

### 19.2 Quick prompt

```
Klik prompt
→ prompt masuk ke conversation
→ local intent router
→ feedback loading singkat
→ response lokal
→ optional enhancement jika diperlukan
→ actions tampil
```

### 19.3 Free input

```
Submit
→ trim + length validation
→ sanitize
→ intent classification
→ clarification jika ambiguous
→ retrieve
→ compose
→ validate
→ render
```

### 19.4 Follow-up

Section menyimpan maksimal context dua exchange. Follow-up ketiga dapat:

- tetap diproses jika ringan;
- atau menawarkan `Lanjutkan di RANI Lengkap`.

### 19.5 Reset

Tombol `Mulai percakapan baru`:

- menghapus conversation local state;
- tidak menghapus Map/Passport state;
- proactive recommendation dihitung ulang dari context terkini.

---

## 20. Loading, Empty, Error, dan Fallback States

### 20.1 Hydration/context loading

```
RANI sedang membaca konteks jelajahmu…
```

Skeleton:

- avatar;
- 3 context chips;
- recommendation title;
- two-line answer;
- action row.

### 20.2 Answer loading

- Tampilkan `rani-berpikir.png` atau typing indicator.
- Minimum 150ms untuk mencegah flicker.
- Maksimum visible waiting sebelum fallback: 4–6 detik.
- Jangan membuat typing palsu 10+ detik.

### 20.3 Offline/local mode

```
Koneksi AI tidak tersedia. RANI menggunakan panduan lokal terkurasi dan tetap dapat membantu.
```

### 20.4 API timeout

- Gunakan local response yang sudah disiapkan.
- Tampilkan nonblocking note.
- Jangan menghilangkan jawaban.

### 20.5 Data tidak tersedia

```
Data terkurasi untuk pertanyaan ini belum cukup. Saya dapat membantumu membuka provinsi, Archive, atau sumber terkait.
```

### 20.6 Out of scope

```
RANI berfokus pada eksplorasi budaya, provinsi, kuliner, perjalanan, dan fitur NUSANTARAYA. Untuk informasi terkini seperti jadwal, harga, atau kondisi perjalanan, periksa sumber resmi.
```

### 20.7 Invalid input

- Empty: jangan submit.
- Terlalu pendek: arahkan dengan chips bila perlu.
- Terlalu panjang: batas 500 karakter untuk section.
- Hanya karakter aneh: minta ulang.
- Repeated rapid submit: throttle ringan.

### 20.8 Broken action

Fallback hierarchy:

```
Specific target
→ feature root
→ Interactive Map
→ no-op dengan pesan jujur
```

---

## 21. Trust, Safety, dan Cultural Integrity

### 21.1 Cultural accuracy

- Fakta budaya berasal dari dataset terkurasi.
- Hindari klaim asal-usul tunggal jika ada variasi.
- Gunakan frasa `berkaitan dengan`, `dikenal dalam`, atau `menurut sumber` bila tepat.
- Jangan membandingkan budaya sebagai lebih unggul.
- Jangan menyederhanakan kelompok budaya menjadi stereotip.
- Tampilkan sumber pada Learn Mode dan jawaban sensitif.

### 21.2 Travel safety

- Jangan mengklaim kondisi aman/tidak aman real-time.
- Jangan memberi jadwal/harga sebagai fakta terkini tanpa data.
- Gunakan disclaimer dan sumber resmi.
- Untuk keadaan darurat, arahkan ke layanan resmi; jangan bertindak sebagai emergency assistant.

### 21.3 Privacy

- Tidak meminta nama, nomor telepon, email, lokasi GPS, paspor, atau detail pembayaran.
- Tidak mengirim full Passport history ke API.
- Context API, jika dipakai, harus berupa summary minimal.
- Jangan simpan raw conversation di analytics.
- Jangan menyimpan prompt sensitif.

### 21.4 Prompt injection/data trust

- Dataset/record diperlakukan sebagai konten, bukan instruksi sistem.
- Abaikan teks dalam data yang mencoba mengubah perilaku RANI.
- API prompt memisahkan instructions, context records, dan user query.
- Output action hanya boleh berasal dari action registry canonical.

### 21.5 Honest AI labeling

RANI tidak boleh mengklaim:

- selalu benar;
- online jika local-only;
- mengetahui lokasi pengguna;
- mengetahui preferensi di luar context;
- mewakili pemerintah atau lembaga budaya.

---

## 22. Visual Design System

### 22.1 Brand base

```
Ivory Background       #FFFDF8
Warm Canvas            #F8F4EA
Navy Ink               #0D1B2A
Flagship Gold          #C9A84C
Warm Border            #E8E0CE
Muted Text             #5E6570
```

### 22.2 RANI-specific tokens

```
RANI Digital Blue      #2D6BE4
RANI Deep Blue         #173B70
Assistant Surface      #F2F6FF
Conversation Navy      #10233A
Insight Cyan           #62B6CB
Source Green           #2D6A4F
Warning Amber          #B7791F
Error                   #A33A3A
```

### 22.3 Color rules

- Ivory/warm canvas tetap dominan.
- Digital blue menandai intelligence/context, bukan seluruh background.
- Gold untuk CTA utama dan detail premium.
- Source menggunakan icon + label, bukan warna saja.
- RANI response dan user bubble memiliki kontras jelas.
- Jangan memakai neon cyberpunk.

### 22.4 Surface

```css
background: rgba(255, 253, 248, 0.98);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 28px 90px rgba(13, 27, 42, 0.12);
```

Conversation surface:

```css
background: linear-gradient(145deg, #10233A 0%, #173B70 100%);
color: #FFFDF8;
border: 1px solid rgba(201, 168, 76, 0.24);
```

### 22.5 Typography

- Heading: Playfair Display 52–72px desktop.
- Recommendation title: Playfair/Inter 28–38px.
- Body: Inter 15–17px, line-height 1.65.
- Context chip: Inter Medium 12–13px.
- Source chip: Inter Medium 12px.
- Input: Inter 15–16px.

---

## 23. Arsitektur Visual Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ 10 · RANI MAP ASSISTANT                                      [Local-first]  │
│ Temukan Langkah Berikutnya Bersama RANI                                     │
│ Subheading                                                                  │
├──────────────────────────────────────────────────────────────────────────────┤
│ [Explore] [Jalur Rempah] [Maluku] [Passport 1/2]       [Ubah di Peta]       │
├──────────────────────────────┬───────────────────────────────────────────────┤
│ RANI PRESENCE               │ CONTEXTUAL CONVERSATION                       │
│ [RANI visual/avatar]        │ Rekomendasi: Maluku Utara                     │
│                             │ Alasan + source note                           │
│ Quick prompts               │ [Jelajahi] [Atlas] [Buat Rute]                │
│ Trust/local note            │                                               │
│                             │ User/RANI exchange preview                    │
│                             │ [input..............................] [Kirim]  │
├──────────────────────────────┴───────────────────────────────────────────────┤
│ Sumber terkait · Buka RANI Lengkap · Handoff Final CTA                      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 23.1 Rasio desktop

- Outer max width: 1280–1440px.
- RANI presence: 32–38%.
- Conversation: 62–68%.
- Min height stage: 580–720px.
- Context ribbon full width.
- Input selalu terlihat tanpa nested scroll awal.

### 23.2 Hierarki visual

1. Recommendation title.
2. RANI visual/identity.
3. Primary action.
4. Context ribbon.
5. Answer body.
6. Quick prompts.
7. Source/trust note.

---

## 24. Blueprint Tablet

```
Header
Context ribbon wrap
RANI compact presence
Proactive recommendation
Quick prompt grid 2 columns
Conversation stage
Action row
Input composer
Trust footer
```

Aturan:

- Jangan memaksakan split sempit.
- Avatar/pose menjadi landscape compact card.
- Quick prompts 2 kolom atau horizontal snap.
- Input tidak tertutup bottom navigation.
- Source chips wrap.

---

## 25. Blueprint Mobile

```
Eyebrow + local-first badge
Heading
Subheading
Context horizontal rail
RANI avatar + greeting
Recommendation card
Primary action full width
Quick prompt snap rail
Conversation preview
Source chips
Input composer
Open full RANI
```

### 25.1 Mobile rules

- Padding 20–24px.
- Heading 36–44px.
- Avatar 64–88px; pose besar optional di atas fold kedua.
- Tidak ada chat panel fixed-height dengan nested scroll.
- Maksimal dua exchange terlihat.
- Prompt rail native scroll + snap.
- Primary CTA full width.
- Input dapat berkembang hingga 4 baris.
- Kirim memiliki label accessible.
- Touch target minimal 44×44px.
- Bottom navigation safe-area diperhitungkan.

### 25.2 Mobile kecil ≤390px

- Context chips dipendekkan tetapi punya accessible label penuh.
- Recommendation title maksimal 3–4 baris.
- Secondary actions masuk menu `Aksi lain` jika lebih dari dua.
- Source label wrap, tidak ellipsis tanpa akses detail.
- Avatar pose dekoratif boleh disembunyikan.

---

## 26. Asset Strategy

### 26.1 Aset RANI

```
public/assets/rani/
  rani-sapa.png
  rani-jelaskan.png
  rani-berpikir.png
  rani-avatar.webp
  rani-typing.json
  rani-idle.json
  icons/
    cap-rekomendasi.svg
    cap-itinerary.svg
    cap-terjemah.svg
    cap-etika.svg
```

### 26.2 Penggunaan

- `rani-sapa.png`: empty/initial state.
- `rani-jelaskan.png`: proactive recommendation/answer.
- `rani-berpikir.png`: processing/fallback.
- `rani-avatar.webp`: bubble, mobile, compact UI.
- `rani-typing.json`: loading singkat, lazy-load.
- Quick icons: prompt chips.

### 26.3 Fallback

Jika pose gagal:

- avatar circular;
- monogram `R`;
- gradient orb;
- text label `RANI`.

Jangan menampilkan broken image.

### 26.4 Budget

- Avatar <50KB.
- Setiap pose ideal <180KB.
- Lottie <80KB.
- Icon total <40KB.
- Jangan memuat semua pose di initial viewport; load pose sesuai state.

---

## 27. Motion dan Feedback

### 27.1 Entrance

1. Header fade-up.
2. Context ribbon reveal.
3. RANI presence fade/scale ringan.
4. Recommendation card muncul.
5. Quick prompts stagger halus.
6. Input composer terakhir.

### 27.2 Interaction

- Prompt click: chip press 100–150ms.
- RANI thinking: 300–800ms untuk lokal jika diperlukan sebagai feedback.
- Answer: crossfade + slight translate.
- Action hover: arrow shift 2–4px.
- Context change: highlight ring satu kali.

### 27.3 Reduced motion

- Tidak ada idle float, parallax, stagger, atau route drawing.
- Jawaban tampil instan/crossfade ≤100ms.
- Scroll tidak dipaksa smooth.
- Typing Lottie diganti teks status statis.

### 27.4 No fake waiting

Response lokal tidak perlu ditahan lama agar terlihat seperti AI. Kecepatan adalah nilai produk.

---

## 28. Accessibility

### 28.1 Semantik

```html
<section id="rani-map-assistant" aria-labelledby="rani-map-assistant-heading">
```

- H2 untuk section.
- H3 untuk recommendation dan conversation topic.
- Prompt chips berupa button.
- Navigasi ke route berupa link.
- Form memiliki label.
- Response baru memakai `aria-live="polite"`.

### 28.2 Keyboard

- Tab order: context → prompts → conversation actions → input → submit.
- Enter submit input; Shift+Enter newline.
- Escape menutup source popover/menu.
- Focus kembali ke trigger.
- Setelah jawaban tampil, jangan memindahkan fokus otomatis; sediakan status live.
- `Skip to answer` optional untuk jawaban panjang.

### 28.3 Screen reader

- Avatar/ornamen dekoratif `aria-hidden`.
- Nama RANI tetap tersedia sebagai teks.
- Context summary dibaca dalam satu kalimat.
- Source chip memiliki publisher dan judul.
- Loading diumumkan sekali.
- Error/fallback diumumkan tanpa mengulang seluruh answer.

### 28.4 Contrast dan zoom

- Body ≥4.5:1.
- Large text ≥3:1.
- Focus indicator ≥3:1.
- Zoom 200% tidak memotong input/actions.
- Status tidak hanya warna.
- Target sentuh ≥44×44px.

---

## 29. Performance Budget

### 29.1 Target

- Context derive <50ms.
- Intent routing lokal <30ms.
- Retrieval lokal <100ms untuk dataset MVP.
- Feedback interaksi <100ms.
- Local answer ideal <300ms.
- Tidak ada long task >200ms.
- Initial RANI assets <300KB.
- No significant CLS.

### 29.2 Teknik

- Index keywords saat build.
- Gunakan Map/Set untuk entity lookup.
- Memoize context summary dan recommendation.
- Lazy-load pose/typing asset.
- Dynamic import API client, bukan UI dasar.
- Abort request saat context/query berubah.
- Cache response preset per query + context key.
- Batasi conversation state.
- Jangan mengirim seluruh dataset ke client API request.

### 29.3 Payload principle

```
Load the context, not the whole app state.
Retrieve the records, not the entire archive.
Render one useful answer, not an endless transcript.
```

---

## 30. Privacy dan Security

1. Input disanitasi sebelum render.
2. Render plain structured blocks, bukan raw HTML dari model.
3. URL action berasal dari registry canonical.
4. Jangan `eval` atau menjalankan code dari response.
5. API key hanya server-side.
6. Rate limit optional pada endpoint AI.
7. Jangan log raw prompt secara default.
8. Analytics memakai intent dan metadata minimal.
9. Jangan kirim full Passport history.
10. Session conversation hilang saat refresh pada MVP, kecuali keputusan produk lain sudah ada.
11. Tombol clear conversation tersedia.
12. Jelaskan mode local-first secara singkat.

---

## 31. Analytics Contract

```tsx
export type RaniAnalyticsPayload = {
  intent?: RaniIntent;
  activeMode: "explore" | "tourist" | "learn";
  activeLayer: string;
  selectedProvinceId?: string | null;
  activeRegionId?: string | null;
  entrySource: RaniEntrySource;
  generatedBy?: RaniGeneratedBy;
  confidence?: "high" | "medium" | "low";
  actionType?: RaniActionType;
  fallbackReason?: "offline" | "timeout" | "rate-limit" | "invalid-output" | "local-only";
  viewport: "desktop" | "tablet" | "mobile";
};
```

Events:

```
rani_section_viewed
rani_context_inspected
rani_prompt_selected
rani_question_submitted
rani_intent_classified
rani_answer_rendered
rani_source_opened
rani_action_clicked
rani_map_applied
rani_route_draft_opened
rani_passport_opened
rani_full_opened
rani_fallback_used
rani_clarification_requested
rani_out_of_scope
rani_asset_failed
rani_error
```

Aturan:

- Jangan kirim raw prompt.
- Jangan kirim full answer.
- Jangan kirim daftar lengkap Passport.
- Jangan duplicate view karena re-render.
- Jangan menganggap local fallback sebagai error jika bekerja sesuai desain.

---

## 32. SEO dan Content Semantics

- Copy umum RANI dapat server-rendered.
- Percakapan personal tidak diindeks.
- Jangan memasukkan prompt/answer ke metadata.
- Link internal yang valid membantu discovery route.
- Gunakan heading natural: RANI, peta, eksplorasi Nusantara.
- Halaman `/rani` menjadi canonical untuk pengalaman AI Guide penuh jika tersedia.
- Section tidak membutuhkan structured data ChatBot palsu.

---

## 33. Component Architecture

```
src/components/explore/rani-map-assistant/
  RaniMapAssistantSection.tsx
  RaniSectionHeader.tsx
  RaniContextRibbon.tsx
  RaniPresenceCard.tsx
  RaniProactiveRecommendation.tsx
  RaniQuickPrompts.tsx
  RaniConversationStage.tsx
  RaniMessage.tsx
  RaniAnswerBlocks.tsx
  RaniSourceChips.tsx
  RaniActionRow.tsx
  RaniInputComposer.tsx
  RaniTrustNote.tsx
  RaniLoadingState.tsx
  RaniOfflineState.tsx
  RaniErrorState.tsx
  RaniOutOfScopeState.tsx
  index.ts

src/data/rani/
  prompts.ts
  presets.ts
  knowledge.ts
  sources.ts
  synonyms.ts
  intentPatterns.ts

src/lib/rani/
  buildRaniContext.ts
  classifyRaniIntent.ts
  retrieveRaniKnowledge.ts
  rankRaniRecommendations.ts
  composeLocalRaniResponse.ts
  validateRaniResponse.ts
  resolveRaniActions.ts
  raniApiClient.ts
  raniCircuitBreaker.ts

src/hooks/
  useRaniMapContext.ts
  useRaniConversation.ts
  useRaniLocalAnswer.ts
  useRaniHybridAnswer.ts
  useRaniActions.ts

src/types/
  rani.ts
```

### 33.1 Tanggung jawab

**`RaniMapAssistantSection.tsx`**

- Compose section.
- Membaca shared context.
- Tidak menyimpan Map/Passport duplikat.

**`buildRaniContext.ts`**

- Membuat summary minimal dan stabil.

**`classifyRaniIntent.ts`**

- Local deterministic routing.

**`retrieveRaniKnowledge.ts`**

- Mengambil record berdasarkan entity, layer, mode, dan keywords.

**`composeLocalRaniResponse.ts`**

- Membuat answer lokal siap render.

**`validateRaniResponse.ts`**

- Memastikan entity, source, dan action valid.

**`raniApiClient.ts`**

- Optional enhancement dengan timeout/abort.

**`resolveRaniActions.ts`**

- Memetakan action ke route/state adapter canonical.

---

## 34. Hook dan Service API Rekomendasi

```tsx
export type UseRaniConversationReturn = {
  messages: RaniMessage[];
  status: "idle" | "thinking" | "ready" | "fallback" | "error";
  submit: (query: string, source: "input" | "quick-prompt") => Promise<void>;
  selectPrompt: (promptId: string) => Promise<void>;
  clear: () => void;
  retry: () => Promise<void>;
};
```

```tsx
export type RaniService = {
  buildContext: (input: RaniMapContext) => RaniDerivedContext;
  classify: (query: string, context: RaniDerivedContext) => RaniIntentResult;
  retrieve: (intent: RaniIntent, context: RaniDerivedContext) => RaniKnowledgeRecord[];
  composeLocal: (input: RaniComposeInput) => RaniResponse;
  enhance?: (input: RaniEnhanceInput, signal: AbortSignal) => Promise<RaniResponse>;
  validate: (response: RaniResponse) => RaniResponseValidation;
};
```

### 34.1 Transaction order

```
Validate query
→ build latest context
→ classify
→ retrieve
→ compose local draft
→ show local draft or thinking feedback
→ optional enhance
→ validate enhancement
→ use valid enhanced response OR retain local draft
→ resolve actions
→ analytics
```

---

## 35. Responsive Matrix

| Viewport | Main Stage | Prompts | Conversation |
| --- | --- | --- | --- |
| ≥1280px | Presence 4/12 + conversation 8/12 | Vertical/2-col compact | Full preview |
| 1024–1279px | Presence 4/12 + conversation 8/12 compact | 2 columns | Full preview |
| 768–1023px | Stacked | 2 columns/snap | Full width |
| 430–767px | Single column | Horizontal snap | 2 exchanges max |
| ≤390px | Compact avatar + cards | Compact snap | Actions collapsed |

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

## 36. Testing Plan

### 36.1 Data tests

- Unique knowledge IDs.
- Valid province/region/source/action IDs.
- All required preset queries have responses.
- All factual culture records have sources.
- No broken route targets.
- ID/EN copy coverage.
- Keyword/synonym normalization.

### 36.2 Intent tests

- Setiap intent utama.
- Ambiguous query.
- Typo ringan.
- Query bilingual.
- Empty query.
- Out-of-scope.
- Prompt dengan nama provinsi.
- Prompt dengan istilah budaya.
- Prompt Passport-aware.

### 36.3 Recommendation tests

- Context kosong.
- Selected province.
- Active layer.
- Active region.
- Started province.
- Planned journey.
- One-to-badge.
- Passport complete.
- Tie-break stabil.
- No random change on rerender.

### 36.4 Fallback tests

- Offline before submit.
- API timeout.
- 429/rate limit.
- Invalid JSON/output.
- Hallucinated province ID.
- Hallucinated route/action.
- Source missing.
- API slow then abort.
- Local-only mode.

### 36.5 Functional tests

- Handoff Section 9 → RANI.
- Quick prompt submit.
- Free input.
- Clarification flow.
- Source open/close.
- Map action preserves layer/mode.
- Atlas action and Browser Back.
- Route Planner draft.
- Passport action does not auto-complete.
- Full RANI route.
- Clear conversation.
- Context updates after Map change.

### 36.6 Responsive tests

- Long heading.
- Long Indonesian/English answer.
- Long source publisher.
- Context rail.
- Prompt rail.
- Textarea 4 lines.
- Keyboard mobile.
- Safe area bottom nav.
- No horizontal page overflow.

### 36.7 Accessibility tests

- Keyboard-only.
- Screen reader context and new answer.
- Focus remains predictable.
- Error/fallback live region.
- Source popover focus trap/return jika modal.
- Contrast.
- Reduced motion.
- Zoom 200%.
- Touch targets.

### 36.8 Performance tests

- Cold load.
- Large knowledge index.
- Rapid prompt switching.
- Abort request.
- Low-end mobile.
- Asset decode.
- Lottie lazy-load.
- No CLS.

### 36.9 Build validation

```
lint
type-check
knowledge validator
source registry validator
action target validator
intent tests
recommendation tests
fallback tests
accessibility tests
production build
```

---

## 37. Acceptance Criteria

### Functional

- [ ]  Section berada setelah Nusa Passport Progress.
- [ ]  Anchor `#rani-map-assistant` tersedia.
- [ ]  Shared state dibaca tanpa duplikasi.
- [ ]  Context summary akurat.
- [ ]  Proactive recommendation tersedia.
- [ ]  Quick prompts mode-aware.
- [ ]  Free input bekerja.
- [ ]  Intent router lokal bekerja.
- [ ]  Jawaban lokal tersedia tanpa API.
- [ ]  API enhancement tidak menjadi dependency.
- [ ]  Source chips tampil untuk fakta budaya.
- [ ]  Primary action relevan dan valid.
- [ ]  Map action mempertahankan layer/mode.
- [ ]  Route Planner menerima draft context.
- [ ]  Passport tidak berubah tanpa aksi eksplisit.
- [ ]  Out-of-scope dan fallback state tersedia.
- [ ]  Browser Back memulihkan context yang relevan.

### Visual

- [ ]  Terlihat seperti contextual cultural guide, bukan chatbot generik.
- [ ]  Identitas RANI jelas.
- [ ]  Heritage Futuristic Light tetap dominan.
- [ ]  Digital blue hanya aksen intelligence.
- [ ]  Recommendation menjadi focal point.
- [ ]  Avatar tidak mengalahkan fungsi.
- [ ]  Conversation tidak menjadi panel gelap berat yang terpisah dari halaman.
- [ ]  Source dan trust note terbaca.

### Responsive

- [ ]  Desktop split proporsional.
- [ ]  Tablet stacked nyaman.
- [ ]  Mobile tidak memakai nested vertical scroll.
- [ ]  Input tidak tertutup navigation/keyboard.
- [ ]  Prompt rail usable.
- [ ]  Long answer/action/source aman.
- [ ]  Touch target ≥44px.
- [ ]  Tidak ada horizontal overflow.

### Accessibility

- [ ]  Semantic section/form/buttons/links.
- [ ]  Context summary accessible.
- [ ]  New answer diumumkan satu kali.
- [ ]  Focus behavior stabil.
- [ ]  Keyboard complete.
- [ ]  Reduced motion bekerja.
- [ ]  Contrast WCAG AA.
- [ ]  Zoom 200% aman.

### Trust dan safety

- [ ]  Tidak ada klaim real-time tanpa data.
- [ ]  Tidak ada asumsi kunjungan fisik.
- [ ]  Tidak ada ranking budaya.
- [ ]  Fakta sensitif bersumber.
- [ ]  API output divalidasi.
- [ ]  Raw HTML tidak dirender.
- [ ]  Data sensitif tidak diminta/disimpan.
- [ ]  Local-first labeling jujur.

### Performance

- [ ]  Context/intent lokal cepat.
- [ ]  Assets RANI ringan/lazy.
- [ ]  API memiliki timeout dan abort.
- [ ]  Local fallback segera tersedia.
- [ ]  Tidak ada long task/CLS besar.

---

## 38. Tahapan Implementasi

### Fase 1 — Audit existing RANI dan shared state

1. Temukan RANI UI/floating button/route existing.
2. Audit `activeLayer`, `activeMode`, selected province, region, journey, Passport.
3. Audit route/action adapters.
4. Audit ID/EN system.
5. Audit assets RANI.
6. Audit data/source registry.
7. Audit API client jika ada.
8. Catat baseline lint/type/build.

### Fase 2 — Data dan contracts

1. Finalisasi types.
2. Buat knowledge record schema.
3. Buat source registry.
4. Buat intent taxonomy.
5. Buat reason codes.
6. Buat action registry.
7. Buat validators.
8. Buat presets demo.

### Fase 3 — Local engine

1. Context builder.
2. Query normalizer.
3. Intent router.
4. Local retrieval.
5. Recommendation scoring.
6. Template composer.
7. Response validator.
8. Action resolver.

### Fase 4 — Desktop static UI

1. Header.
2. Context ribbon.
3. RANI presence.
4. Recommendation card.
5. Quick prompts.
6. Conversation stage.
7. Sources.
8. Actions.
9. Input composer.
10. Trust note.

### Fase 5 — Interaction dan integrations

1. Prompt submit.
2. Free input.
3. Clarification.
4. Map action.
5. Atlas action.
6. Route Planner handoff.
7. Passport handoff.
8. Archive/NusaRasa handoff.
9. Browser Back restore.

### Fase 6 — Hybrid enhancement

1. Optional API endpoint.
2. Minimal grounded payload.
3. Timeout/abort.
4. Circuit breaker.
5. Output validation.
6. Fallback telemetry.
7. Local-only option.

### Fase 7 — Tablet/mobile

1. Stacked stage.
2. Context rail.
3. Prompt snap.
4. Compact avatar.
5. Input safe-area.
6. Action collapsing.
7. Small-screen QA.

### Fase 8 — Accessibility, performance, dan QA

1. Semantics/live region.
2. Keyboard/focus.
3. Contrast/zoom.
4. Reduced motion.
5. Asset optimization.
6. Intent/recommendation tests.
7. Offline/API failure tests.
8. Production build.
9. Demo rehearsal.

---

## 39. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit state, route, data, dan aset | 4–7 jam |
| Schema, intent, source, action registry | 5–9 jam |
| Local engine dan validator | 7–12 jam |
| Desktop UI | 7–11 jam |
| Integrasi Map/Atlas/Planner/Passport | 5–9 jam |
| Hybrid API + circuit breaker | 4–8 jam |
| Tablet/mobile | 4–7 jam |
| Accessibility/performance/testing | 5–9 jam |

Total realistis:

```
41–72 jam kerja efektif
```

Versi demo recommended:

```
Context + 8–12 preset + local intent + sources + Map/Planner actions + offline fallback
24–38 jam
```

MVP minimum:

```
Proactive recommendation + 6 quick prompts + local responses + Map action + fallback
12–20 jam
```

---

## 40. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| API gagal saat demo | Wow moment hilang | Local-first + preset + circuit breaker |
| Jawaban halusinasi | Kredibilitas budaya turun | Grounded records + output validator + sources |
| RANI terasa chatbot generik | Tidak menyatu dengan Map | Context ribbon + proactive recommendation + actions |
| Context tidak sinkron | Rekomendasi salah | Shared state existing + context builder tunggal |
| Action broken | Dead-end | Canonical action registry + fallback Map |
| Chat terlalu panjang | Section berat | 2 exchange preview + full RANI handoff |
| Data budaya tanpa sumber | Trust rendah | Source validation wajib |
| Tourist info dianggap real-time | Misleading | Limitation copy + official source redirect |
| Avatar terlalu dominan | Fungsi kalah | Recommendation/action tetap focal |
| Input tertutup di mobile | Unusable | Safe-area + no fixed nested panel |
| Prompt injection dari data | Output/action tidak aman | Data as content + action allowlist |
| Analytics menyimpan prompt | Privacy risk | Intent metadata only |
| Rekomendasi berubah acak | User bingung | Deterministic scoring + stable tie-break |
| Scope membesar menjadi full AI app | Deadline terlewat | Section snapshot + route `/rani` untuk pengalaman penuh |

---

## 41. Strategi Demo Juri

Flow 60–90 detik:

```
1. Masuk dari Passport Progress dengan Maluku aktif dan progress 1/2.
2. RANI Context Ribbon menampilkan Explore · Jalur Rempah · Maluku · 1 provinsi lagi.
3. RANI merekomendasikan Maluku Utara.
4. Jelaskan alasan: melengkapi milestone + sesuai layer.
5. Buka source chip singkat untuk menunjukkan grounding.
6. Klik prompt “Apa etika budaya yang perlu diketahui?”
7. RANI menjawab dari preset lokal terkurasi.
8. Putuskan/simulasikan API offline—jawaban tetap berjalan.
9. Klik “Jelajahi Maluku Utara”.
10. Map aktif dengan layer/mode tetap terjaga.
11. Kembali ke RANI atau buka Route Planner draft.
12. Tutup dengan Final CTA.
```

Nilai yang terlihat:

- shared state nyata;
- AI yang explainable;
- sumber budaya;
- offline fallback;
- action lintas fitur;
- mode-aware behavior;
- produk bukan landing page statis.

### 41.1 Preset demo wajib

1. `Ke mana saya harus lanjut?`
2. `Apa milestone Passport berikutnya?`
3. `Jelaskan Jalur Rempah Maluku.`
4. `Apa etika budaya yang perlu diketahui?`
5. `Buat rencana perjalanan 5 hari.`
6. `Apa kuliner khas wilayah ini?`
7. `Bandingkan dua wilayah tanpa menentukan yang terbaik.`
8. `Tampilkan sumber informasi.`

### 41.2 Demo fallback

Jika API enhancement tidak stabil:

```
Gunakan local-only mode secara default.
Tampilkan badge “Panduan lokal NUSANTARAYA”.
Jangan meminta maaf berlebihan; fallback adalah fitur desain, bukan kegagalan.
```

---

## 42. Checklist Handoff

### Desain

- [ ]  Desktop split stage.
- [ ]  Tablet stacked.
- [ ]  Mobile compact.
- [ ]  Context kosong/aktif/conflict.
- [ ]  Recommendation states.
- [ ]  Loading/offline/error/out-of-scope.
- [ ]  Source popover/detail.
- [ ]  Focus/reduced-motion states.

### Konten

- [ ]  Header copy ID/EN.
- [ ]  Quick prompts per mode.
- [ ]  8–12 preset demo.
- [ ]  Fallback copy.
- [ ]  Limitation copy.
- [ ]  Source labels.
- [ ]  Clarification prompts.
- [ ]  Action labels.

### Data

- [ ]  Province/region mapping.
- [ ]  Knowledge records.
- [ ]  Source registry.
- [ ]  Intent patterns/synonyms.
- [ ]  Recommendation reason codes.
- [ ]  Action registry.
- [ ]  Route availability map.
- [ ]  Validators.

### Engineering

- [ ]  Shared state adapter.
- [ ]  Context builder.
- [ ]  Local intent router.
- [ ]  Retrieval/composer.
- [ ]  Output validation.
- [ ]  Optional API/circuit breaker.
- [ ]  Abort/timeout.
- [ ]  Analytics.
- [ ]  Tests.
- [ ]  Production build.

---

## 43. Definition of Done

RANI Map Assistant selesai jika:

1. Section tampil di posisi ke-10 `/explore`.
2. Handoff dari Passport Progress bekerja.
3. Context Map/Passport/Journey terbaca akurat.
4. Tidak ada duplicate state.
5. Proactive recommendation deterministik tersedia.
6. Reason codes diterjemahkan menjadi alasan yang jelas.
7. Prompt Explore/Tourist/Learn berbeda dan relevan.
8. Free input memiliki validasi dan intent routing.
9. Local response bekerja penuh tanpa API.
10. API enhancement memiliki timeout, abort, circuit breaker, dan validator.
11. Fakta budaya memiliki sumber.
12. Unknown/out-of-scope dijawab jujur.
13. Tidak ada klaim real-time atau kunjungan fisik palsu.
14. Map action mempertahankan activeLayer/activeMode.
15. Atlas dan Browser Back bekerja.
16. Route Planner menerima payload yang valid.
17. Passport tidak berubah tanpa aksi eksplisit.
18. Action target tidak broken dan memiliki fallback.
19. Empty/loading/offline/timeout/error states tersedia.
20. Section tidak menjadi full chat app yang berat.
21. Desktop, tablet, dan mobile nyaman.
22. Keyboard, screen reader, focus, contrast, zoom, dan reduced motion bekerja.
23. Assets ringan dan tidak menyebabkan CLS besar.
24. Analytics tidak menyimpan raw prompt/answer.
25. Preset demo dapat diulang stabil.
26. Production build dan seluruh validator/test utama lulus.
27. Handoff menuju Final CTA terasa natural.
28. Pengguna selalu memperoleh satu langkah berikutnya yang jelas.

---

## 44. Dokumen Terkait

- [Planning Lengkap — Section 9 Nusa Passport Progress NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-9-Nusa-Passport-Progress-NUSANTARAYA-b75c374d3e40411da8345aa3d894a0bb?pvs=21)
- [Planning Lengkap — Section 7 Recommended Journey / Smart Suggestions NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-7-Recommended-Journey-Smart-Suggestions-NUSANTARAYA-089f6287462940a48452cf4298e6a706?pvs=21)
- [Planning Lengkap — Section 8 Regional Explorer NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-8-Regional-Explorer-NUSANTARAYA-4a47555d65e449e5a19452074a9215f7?pvs=21)
- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [PRD — NUSANTARAYA: Digital Twin Nusantara](https://app.notion.com/p/PRD-NUSANTARAYA-Digital-Twin-Nusantara-3ba098210a3c82d3ba94815e97897510?pvs=21)
- [FLOWCHART NUSANTARAYA WEB](https://app.notion.com/p/FLOWCHART-NUSANTARAYA-WEB-d9e098210a3c82ef846c01b2b673e84f?pvs=21)
- [Roadmap & Workflow Pengembangan NUSANTARAYA](https://app.notion.com/p/Roadmap-Workflow-Pengembangan-NUSANTARAYA-02a098210a3c83dfb7688147846399f4?pvs=21)
- [Panduan Aset & Struktur Folder NUSANTARAYA](https://app.notion.com/p/Panduan-Aset-Struktur-Folder-NUSANTARAYA-47e098210a3c82b78399014954613af2?pvs=21)
- [Planning Final CTA + Footer NUSANTARAYA](https://app.notion.com/p/Planning-Final-CTA-Footer-NUSANTARAYA-4b9098210a3c821396f4018b77b902b7?pvs=21)

<aside>
🏆

**Target akhir:** RANI Map Assistant harus membuat pengguna merasa bahwa NUSANTARAYA memahami konteks perjalanan digital mereka, mampu menjelaskan rekomendasi dengan sumber dan alasan yang jelas, tetap dapat diandalkan tanpa API, dan selalu mengubah percakapan menjadi tindakan nyata di dalam ekosistem Map, Province, Journey, Passport, Route Planner, Archive, dan NusaRasa.

</aside>