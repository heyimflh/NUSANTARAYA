# Planning Lengkap — Section 7 Recommended Journey / Smart Suggestions NUSANTARAYA

<aside>
🧭

**Dokumen source of truth untuk Section 7 — Recommended Journey / Smart Suggestions pada halaman `/explore`.** Section ini menerjemahkan konteks eksplorasi pengguna—layer, mode, provinsi terpilih, pencarian, dan progres Passport—menjadi satu perjalanan utama yang relevan, beberapa saran cerdas, serta jalur langsung menuju Map, Atlas, Route Planner, dan Passport.

</aside>

---

## 1. Ringkasan Eksekutif

**Recommended Journey / Smart Suggestions** adalah section ketujuh halaman `/explore`, ditempatkan setelah **Explore by Layer** dan sebelum **Regional Explorer**. Section sebelumnya membantu pengguna memilih lensa; section ini menjawab pertanyaan berikutnya:

> “Dengan minat dan konteks yang sudah saya pilih, perjalanan apa yang paling masuk akal untuk dilakukan sekarang?”
> 

Konsep final:

```
Nusa Journey Composer
```

Versi pengalaman:

```
Satu rekomendasi utama yang terasa personal, dengan alasan yang dapat dipahami dan pilihan lanjutan yang tetap berada di bawah kendali pengguna.
```

Section ini **bukan carousel destinasi**, **bukan kumpulan kartu populer**, dan **bukan AI chat terselubung**. Ia harus terasa seperti sebuah **journey composer**: sistem membaca konteks yang sudah tersedia, menyusun jalur yang relevan, menjelaskan alasan rekomendasi, lalu memberi tindakan konkret.

<aside>
🎯

**Formula UX final:** Baca konteks → susun rekomendasi → jelaskan alasan → tampilkan urutan perjalanan → beri kontrol penyesuaian → kirim ke Map, Atlas, Route Planner, atau Passport.

</aside>

### 1.1 Keputusan utama

1. Satu **Primary Recommended Journey** menjadi focal point.
2. Maksimal tiga **Smart Suggestions** sekunder; jangan membuat grid rekomendasi tanpa hierarki.
3. Sistem memakai **hybrid recommendation**: aturan deterministik sebagai fondasi, personalisasi ringan sebagai peningkatan, dan RANI/AI hanya opsional.
4. Semua rekomendasi harus memiliki **reason code** yang dapat diterjemahkan menjadi alasan manusiawi.
5. Section membaca shared state existing; tidak membuat state layer, mode, provinsi, atau Passport baru.
6. `activeLayer`, `activeMode`, `selectedProvinceId`, `searchQuery`, dan `passportProvinceIds` menjadi input utama.
7. Output dibedakan menurut mode: **Explore Trail**, **Tourist Itinerary**, atau **Learn Path**.
8. Rekomendasi tidak boleh mengklaim “AI personal” jika hanya memakai preset.
9. Rute wisata fisik harus realistis; perjalanan tematik/virtual harus diberi label jelas.
10. CTA utama menuju tindakan paling relevan, bukan selalu Route Planner.
11. Pengguna dapat memilih alternatif, mengubah durasi/intensitas, menyimpan, atau meminta rekomendasi ulang.
12. Tanpa login dan tanpa API, section tetap harus bekerja penuh melalui data lokal dan fallback terkurasi.

---

## 2. Posisi dalam Halaman `/explore`

```
1. Map Hero / Page Header
2. Explore Control Bar
3. Interactive Indonesia Map
4. Province Summary Panel + Deep Province Atlas
5. Flagship Provinces
6. Explore by Layer
7. Recommended Journey / Smart Suggestions ← SECTION INI
8. Regional Explorer
9. Passport Progress
10. RANI Map Assistant
11. Final CTA
```

### 2.1 Pertanyaan yang dijawab setiap section

- Section 3: **Di mana cerita itu berada?**
- Section 4: **Apa yang perlu saya ketahui tentang provinsi ini?**
- Section 5: **Provinsi unggulan mana yang layak menjadi gerbang pertama?**
- Section 6: **Tema apa yang paling menarik bagi saya?**
- Section 7: **Jalur apa yang sebaiknya saya ikuti berikutnya?**
- Section 8: **Bagaimana saya membandingkan wilayah Indonesia secara lebih luas?**

### 2.2 Handoff dari Section 6

Microcopy penutup Section 6:

```
Lensa pilihanmu sudah siap.
Sekarang biarkan NUSANTARAYA menyusun perjalanan berikutnya.
```

Data handoff:

```tsx
{
  activeLayer,
  activeMode,
  selectedProvinceId,
  searchQuery,
  showFlagshipOnly,
  passportProvinceIds,
}
```

### 2.3 Handoff ke Section 8

Section 7 menutup dengan transisi:

```
Ingin melihat pilihan dari sudut wilayah?
Bandingkan karakter Sumatera, Jawa, Kalimantan, Sulawesi, Bali–Nusa Tenggara, Maluku, dan Papua.
```

Section 8 tidak boleh mengulang journey cards. Regional Explorer berfokus pada perbandingan wilayah; Section 7 berfokus pada urutan perjalanan yang direkomendasikan.

### 2.4 Anchor wajib

```
#recommended-journey
```

---

## 3. Quality Gate Sebelum Implementasi

- [ ]  Shared `activeLayer` bekerja pada Control Bar, Map, dan Explore by Layer.
- [ ]  `activeMode` konsisten: `explore`, `tourist`, `learn`.
- [ ]  `selectedProvinceId` dapat berasal dari Map, Search, Summary, atau Flagship.
- [ ]  Province IDs dan canonical route valid.
- [ ]  Data region, categories, tier, dan asset manifest tersedia.
- [ ]  Passport store/localStorage stabil dan idempotent.
- [ ]  Minimal enam journey preset terkurasi tersedia.
- [ ]  Route Planner memiliki route/preset yang dapat dibuka atau menerima draft.
- [ ]  Tidak ada broken CTA menuju fitur yang belum siap.
- [ ]  Lint, type-check, validator, dan production build lulus.

Jika Route Planner belum siap, CTA utama harus berubah menjadi **Lihat Jalur di Peta** atau **Jelajahi Provinsi Pertama**, bukan link rusak.

---

## 4. Tujuan Produk dan UX

### 4.1 Tujuan pengguna

Pengguna dapat:

1. Mendapat rekomendasi tanpa mengisi form panjang.
2. Memahami mengapa perjalanan tersebut cocok.
3. Melihat urutan provinsi/stop secara cepat.
4. Mengetahui jenis perjalanan: virtual, wisata, atau belajar.
5. Menyesuaikan durasi atau intensitas secara ringan.
6. Membuka perjalanan pada Map.
7. Membuka Atlas provinsi pertama.
8. Mengirim perjalanan wisata ke Route Planner.
9. Menyimpan journey ke Passport.
10. Memilih alternatif tanpa kehilangan konteks.
11. Meminta rekomendasi baru tanpa hasil acak yang membingungkan.
12. Tetap mendapat pengalaman berguna saat data personal masih minim.

### 4.2 Tujuan emosional

```
NUSANTARAYA memahami arah minat saya.
Rekomendasi ini terasa masuk akal, bukan acak.
Saya tahu mengapa jalur ini dipilih.
Saya tetap dapat mengubah keputusan.
Saya ingin melanjutkan eksplorasi, bukan berhenti membaca.
```

### 4.3 Tujuan kompetisi/demo

- Membuktikan bahwa state antarsection saling terhubung.
- Menunjukkan rekomendasi yang explainable, bukan label AI kosong.
- Menghubungkan peta, layer, mode, Passport, Atlas, dan Route Planner.
- Membuat “wow moment” personalisasi tanpa ketergantungan API.
- Menunjukkan kecocokan tema Nusantara Digital City melalui sistem cerdas yang berguna.
- Menghindari risiko demo AI gagal dengan local deterministic fallback.

### 4.4 KPI yang disarankan

- `journey_section_viewed`.
- `journey_primary_opened`.
- `journey_suggestion_selected`.
- `journey_reason_expanded`.
- `journey_duration_changed`.
- `journey_map_opened`.
- `journey_route_planner_opened`.
- `journey_passport_saved`.
- `journey_regenerated`.
- `journey_feedback_submitted`.

Target awal:

- ≥35% pengguna yang mencapai section membuka primary journey.
- ≥15% menyimpan atau mengirim journey ke fitur lanjutan.
- ≥60% rekomendasi dapat ditampilkan dari local engine tanpa loading API.

---

## 5. Scope dan Batas Tanggung Jawab

### 5.1 Termasuk

- Satu rekomendasi utama.
- Dua hingga tiga saran alternatif.
- Reason/explanation layer.
- Sequence preview provinsi atau chapter.
- Variant berdasarkan Explore/Tourist/Learn.
- Penyesuaian ringan durasi/intensitas.
- Integrasi Map, Summary/Atlas, Passport, Route Planner, dan RANI.
- Local recommendation engine.
- Loading, partial, empty, dan error fallback.
- Analytics, accessibility, responsive, dan performance budget.

### 5.2 Tidak termasuk

- Booking transportasi/hotel.
- Estimasi harga real-time.
- Navigasi jalan atau jadwal transportasi langsung.
- Model machine learning khusus.
- Profil sensitif atau pelacakan lintas perangkat.
- Form itinerary lengkap—itu tanggung jawab Route Planner.
- Chat AI penuh—itu tanggung jawab RANI.
- Seluruh detail tiap provinsi—itu tanggung jawab Atlas.

### 5.3 Prinsip scope

```
Section 7 memilih dan menjelaskan jalur.
Map memvisualkan jalur.
Atlas memperdalam setiap stop.
Route Planner mengubahnya menjadi itinerary.
Passport menyimpan progres.
RANI membantu memodifikasi.
```

---

## 6. Konsep Pengalaman Final

### 6.1 Creative direction

```
Editorial Journey Composer × Intelligent Cultural Guide × Premium Route Dossier
```

Section tampil sebagai satu **Journey Dossier** besar dengan route ribbon/map abstraction, alasan rekomendasi, urutan stop, dan actions. Smart Suggestions berada sebagai **alternative briefs**, bukan kartu besar yang bersaing.

### 6.2 Formula informasi

1. Context summary.
2. Journey label/type.
3. Journey title.
4. Promise/tagline.
5. Why recommended.
6. Sequence/chapters.
7. Time/intensity estimate.
8. Content signals.
9. Primary CTA.
10. Secondary actions.
11. Alternative suggestions.
12. Feedback/control.

### 6.3 Yang harus dihindari

- Grid `3 × 2` kartu rekomendasi identik.
- Carousel destinasi populer tanpa alasan.
- Badge “AI Powered” besar tanpa fungsi nyata.
- Rekomendasi yang berubah setiap render.
- Rute wisata lintas pulau yang tidak realistis tanpa label virtual.
- Skor persentase palsu seperti `98% cocok`.
- Terlalu banyak filter baru.
- Map engine kedua yang kompleks.
- Autoplay mengganti rekomendasi.
- Copy “karena kamu menyukai...” jika belum ada interaksi yang mendukung.
- Dark dashboard yang tidak konsisten dengan Heritage Futuristic Light.

---

## 7. Tiga Jenis Journey Berdasarkan Mode

### 7.1 Explore Mode — Thematic Discovery Trail

Tujuan: eksplorasi bebas dan inspiratif.

Output:

- 3–5 provinsi atau objek terhubung.
- Dapat bersifat virtual/tematik.
- Fokus pada variasi cerita dan discovery.
- CTA utama: `Lihat Jalur di Peta`.
- CTA sekunder: `Buka Cerita Pertama`.

Label wajib:

```
Jalur Eksplorasi Digital
```

### 7.2 Tourist Mode — Practical Travel Itinerary

Tujuan: jalur perjalanan yang lebih realistis.

Output:

- 1–3 provinsi berdekatan atau terkoneksi secara wajar.
- Durasi 3/5/7/10 hari.
- Menampilkan travel note dan cultural etiquette summary.
- CTA utama: `Buka di Route Planner`.
- CTA sekunder: `Lihat Rute di Peta`.

Label wajib:

```
Rencana Perjalanan
```

Aturan: jangan menyebut estimasi biaya, waktu tempuh, atau akses transportasi sebagai fakta jika data belum tersedia/terverifikasi.

### 7.3 Learn Mode — Guided Learning Path

Tujuan: alur belajar yang runtut dan bersumber.

Output:

- 3–5 chapter berdasarkan tema/provinsi.
- Menekankan Archive, sejarah, aksara, sumber, dan quiz.
- CTA utama: `Mulai Jalur Belajar`.
- CTA sekunder: `Buka Sumber Pertama`.

Label wajib:

```
Jalur Belajar Terarah
```

---

## 8. Arketipe Journey Final

Minimal enam arketipe harus tersedia sebagai local fallback.

### 8.1 Jejak Budaya Jawa–Bali

- **Layer:** Budaya.
- **Mode terbaik:** Explore / Learn.
- **Stop utama:** DI Yogyakarta → Bali.
- **Extension:** Jawa Tengah bila data siap.
- **Promise:** Dari ruang keraton menuju tradisi hidup dalam lanskap Bali.
- **Signals:** Keraton · Batik · Subak · Ritual.
- **CTA:** `Jelajahi Jejak Budaya`.

### 8.2 Rasa Minangkabau hingga Jawa

- **Layer:** Kuliner.
- **Mode terbaik:** Explore.
- **Stop utama:** Sumatera Barat → DI Yogyakarta.
- **Jenis:** Jalur eksplorasi digital, bukan itinerary fisik otomatis.
- **Promise:** Membaca identitas daerah melalui dapur, bahan, dan tradisi makan.
- **Signals:** Rendang · Rempah · Gudeg · Cerita Rasa.
- **CTA:** `Buka Jalur Rasa`.

### 8.3 Ekspedisi Alam Indonesia Timur

- **Layer:** Alam.
- **Mode terbaik:** Explore / Tourist.
- **Explore stops:** Nusa Tenggara Timur → Papua Barat Daya.
- **Tourist rule:** Pilih satu cluster terlebih dahulu; jangan otomatis menggabungkan perjalanan nyata antarpulau tanpa data logistik.
- **Promise:** Dari lanskap kering dan pulau vulkanik menuju biodiversitas laut.
- **Signals:** Komodo · Pulau · Raja Ampat · Konservasi.
- **CTA:** `Lihat Ekspedisi Alam`.

### 8.4 Jejak Sejarah Maritim

- **Layer:** Sejarah.
- **Mode terbaik:** Explore / Learn.
- **Stop:** Sulawesi Selatan → Maluku.
- **Promise:** Menelusuri pelaut, pelabuhan, aksara, dan jaringan dunia timur Nusantara.
- **Signals:** Pinisi · Lontara · Banda · Benteng.
- **CTA:** `Telusuri Jejak Sejarah`.

### 8.5 Jalur Rempah Maluku

- **Layer:** Rempah.
- **Mode terbaik:** Semua mode.
- **Stop inti:** Maluku → Maluku Utara jika data siap.
- **Explore:** jalur sejarah virtual.
- **Tourist:** itinerary lokal/cluster yang tervalidasi.
- **Learn:** chapter pala, cengkeh, pelabuhan, perdagangan.
- **Promise:** Mengikuti rempah dari kepulauan asal menuju jaringan dunia.
- **Signals:** Pala · Cengkeh · Banda · Jalur Maritim.
- **CTA:** `Ikuti Jalur Rempah`.

### 8.6 Nusantara Masa Depan

- **Layer:** Future.
- **Mode terbaik:** Explore / Learn.
- **Anchor:** Kalimantan Timur.
- **Extension:** kota/provinsi lain hanya jika future data tersedia.
- **Promise:** Melihat bagaimana daerah menghubungkan warisan, IKN, kota pintar, dan ekonomi kreatif.
- **Signals:** IKN · Smart City · UMKM Digital · Green Tourism.
- **CTA:** `Lihat Masa Depan Indonesia`.

### 8.7 Flagship Grand Tour

- **Trigger:** `showFlagshipOnly = true` atau tidak ada konteks kuat.
- **Mode:** Explore.
- **Stop:** 3 dari 8 flagship, dipilih untuk variasi wilayah dan konten.
- **Promise:** Tiga gerbang terkurasi untuk memahami Indonesia dari sudut berbeda.
- **CTA:** `Mulai dari Flagship`.

### 8.8 Lanjutkan Passport

- **Trigger:** Passport memiliki progres.
- **Mode:** Semua.
- **Output:** provinsi baru yang melengkapi wilayah/layer yang belum dijelajahi.
- **Promise:** Melanjutkan perjalanan tanpa mengulang provinsi yang sudah tersimpan.
- **CTA:** `Lanjutkan Passport`.

---

## 9. Smart Suggestions

Smart Suggestions bukan sekadar “journey lain”. Setiap saran harus mewakili strategi berbeda.

### 9.1 Tipe saran

1. **Continue** — lanjutkan dari provinsi terpilih.
2. **Contrast** — pilih tema/wilayah berbeda agar discovery lebih kaya.
3. **Complete** — lengkapi Passport atau badge.
4. **Deepen** — masuk lebih dalam ke Atlas provinsi aktif.
5. **Nearby** — rekomendasi regional/tetangga, khusus data yang valid.
6. **Mode Shift** — ubah journey yang sama menjadi Tourist/Learn.
7. **Popular Preset** — fallback jika konteks kosong.

### 9.2 Prioritas tampilan

Maksimal tiga:

```
1. Continue atau Deepen
2. Complete atau Nearby
3. Contrast atau Popular Preset
```

### 9.3 Anatomi suggestion

- Label tipe.
- Judul maksimal 2 baris.
- Alasan satu kalimat.
- 2–3 stop/signal.
- Satu CTA.
- Optional badge `Baru untuk Passport`.

### 9.4 Contoh

```
LANJUTKAN DARI MALUKU
Menuju Sulawesi Selatan
Karena layer Jalur Rempah aktif dan kedua wilayah terhubung oleh narasi maritim.
Maluku → Sulawesi Selatan
[Lihat Saran]
```

---

## 10. Personalisasi dan Hierarki Input

### 10.1 Input utama

Urutan bobot awal:

1. `activeLayer` — 30%.
2. `activeMode` — 20%.
3. `selectedProvinceId` — 20%.
4. Passport novelty/progress — 15%.
5. Search intent — 10%.
6. Flagship preference — 5%.

Bobot adalah arahan implementasi awal, bukan kebenaran statistik.

### 10.2 Aturan prioritas

- Layer non-`all` menjadi sinyal tema terkuat.
- Selected province menjadi anchor jika relevan dengan layer.
- Tourist Mode membatasi rute pada cluster realistis.
- Learn Mode memprioritaskan source completeness.
- Passport mengurangi skor provinsi yang sudah disimpan, kecuali journey bertipe `continue`.
- `showFlagshipOnly` memberi boost flagship, bukan menghapus semua non-flagship.
- Search query hanya digunakan jika berhasil dipetakan ke province/category/keyword.

### 10.3 Context confidence

```tsx
type RecommendationConfidence = "strong" | "moderate" | "fallback";
```

- `strong`: layer + mode + selected province selaras.
- `moderate`: hanya satu atau dua sinyal jelas.
- `fallback`: belum ada interaksi bermakna.

Jangan tampilkan persentase kecocokan. Gunakan copy:

```
Disusun dari layer Kuliner dan pilihan Sumatera Barat.
Disarankan berdasarkan Mode Learn.
Pilihan awal untuk memulai eksplorasi.
```

---

## 11. Explainability dan Alasan Rekomendasi

### 11.1 Reason codes

```tsx
export type JourneyReasonCode =
  | "MATCHES_ACTIVE_LAYER"
  | "STARTS_FROM_SELECTED_PROVINCE"
  | "MATCHES_ACTIVE_MODE"
  | "NEW_FOR_PASSPORT"
  | "COMPLETES_REGION_BADGE"
  | "FLAGSHIP_CONTENT_DEPTH"
  | "REGIONAL_CONTINUITY"
  | "THEMATIC_CONTINUITY"
  | "SOURCE_COMPLETENESS"
  | "POPULAR_STARTER";
```

### 11.2 Human-readable reasons

- `MATCHES_ACTIVE_LAYER` → `Sesuai dengan layer Kuliner yang kamu pilih.`
- `STARTS_FROM_SELECTED_PROVINCE` → `Dimulai dari Maluku yang sedang aktif di peta.`
- `NEW_FOR_PASSPORT` → `Memperkenalkan provinsi yang belum tersimpan di Passport.`
- `REGIONAL_CONTINUITY` → `Menjaga perjalanan dalam satu kawasan agar lebih mudah diikuti.`
- `SOURCE_COMPLETENESS` → `Memiliki materi belajar dan sumber yang lebih lengkap.`
- `POPULAR_STARTER` → `Jalur terkurasi yang cocok untuk memulai.`

### 11.3 Aturan copy

- Tampilkan 1 alasan utama, maksimal 2 alasan sekunder.
- Jangan menyebut data personal yang tidak dikumpulkan.
- Jangan mengklaim memahami preferensi permanen dari satu klik.
- Gunakan `pilihanmu saat ini`, bukan `kepribadianmu`.
- Alasan harus dapat ditelusuri ke state atau data yang nyata.

---

## 12. Recommendation Engine

### 12.1 Arsitektur hybrid

```
Layer 1 — Eligibility filter
Layer 2 — Deterministic scoring
Layer 3 — Diversity and safety rules
Layer 4 — Presentation composer
Layer 5 — Optional RANI enhancement
```

### 12.2 Eligibility filter

Journey hanya eligible jika:

- Semua required province IDs valid.
- Minimal satu stop memiliki content yang dapat dibuka.
- Route/Atlas href valid atau memiliki fallback.
- Asset cover tersedia atau fallback visual tersedia.
- Mode didukung.
- Tourist itinerary telah ditandai `travelValidated: true` bila mengandung klaim perjalanan nyata.

### 12.3 Scoring awal

```tsx
score =
  layerMatch * 30 +
  modeMatch * 20 +
  selectedProvinceMatch * 20 +
  passportNovelty * 15 +
  searchIntentMatch * 10 +
  flagshipDepth * 5;
```

Tambahkan adjustment:

```
+ regional diversity untuk Explore/Learn
+ regional continuity untuk Tourist
+ source completeness untuk Learn
- duplicate journey yang baru dilihat
- broken/missing content
- terlalu banyak stop
```

### 12.4 Tie-breaker

1. Data completeness.
2. Journey belum pernah dipilih pada sesi ini.
3. Variasi wilayah.
4. Urutan editorial tetap.

Jangan memakai random murni karena hasil demo harus dapat diulang.

### 12.5 Regenerate

`Beri Saran Lain` tidak mengacak seluruh hasil. Ia memilih kandidat eligible berikutnya berdasarkan ranking dan session history.

---

## 13. Data Model

```tsx
export type JourneyMode = "explore" | "tourist" | "learn";
export type JourneyLayer =
  | "budaya"
  | "kuliner"
  | "alam"
  | "sejarah"
  | "rempah"
  | "future"
  | "mixed";

export type JourneyStop = {
  id: string;
  provinceId?: string;
  contentId?: string;
  label: string;
  shortReason: string;
  sequence: number;
  href: string;
  asset?: string;
  coordinates?: [number, number];
  chapterType?: "province" | "story" | "archive" | "food" | "future";
};

export type RecommendedJourney = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  promise: string;
  modes: JourneyMode[];
  primaryLayer: JourneyLayer;
  secondaryLayers?: JourneyLayer[];
  kind: "digital-trail" | "travel-itinerary" | "learning-path";
  stopIds: string[];
  stops: JourneyStop[];
  durationLabel?: string;
  durationDays?: number[];
  intensity?: "ringan" | "seimbang" | "mendalam";
  signals: [string, string, string];
  coverAsset: string;
  routeOverlay?: string;
  accentColor: string;
  primaryAction: JourneyAction;
  secondaryActions: JourneyAction[];
  reasonCodes: JourneyReasonCode[];
  requiredDataIds: string[];
  travelValidated?: boolean;
  sourceIds?: string[];
  isDemoPreset?: boolean;
};

export type JourneyAction = {
  type: "map" | "atlas" | "route-planner" | "passport" | "rani" | "learn";
  label: string;
  href?: string;
};
```

### 13.1 Context model

```tsx
export type JourneyRecommendationContext = {
  activeLayer: ExploreLayerId;
  activeMode: ExploreModeId;
  selectedProvinceId: string | null;
  searchQuery: string;
  showFlagshipOnly: boolean;
  passportProvinceIds: string[];
  viewedJourneyIds: string[];
  locale: "id" | "en";
};
```

### 13.2 Result model

```tsx
export type JourneyRecommendationResult = {
  primary: RecommendedJourney;
  alternatives: RecommendedJourney[];
  confidence: RecommendationConfidence;
  reasons: JourneyReasonCode[];
  generatedBy: "local-rules" | "rani-enhanced" | "fallback";
};
```

### 13.3 Validasi data

- ID dan slug unik.
- Minimal 6 fallback journey.
- Primary layer valid.
- Setiap stop memiliki href valid.
- Sequence tidak duplikat.
- Maksimal 5 stop untuk preview.
- Signals tepat tiga.
- Cover asset/fallback tersedia.
- Tourist journey yang tampil sebagai itinerary harus `travelValidated`.
- Reason code valid.
- Tidak ada province ID yang hilang dari source data.
- Tidak ada klaim durasi jika `durationDays` kosong.

---

## 14. State Contract

```tsx
type RecommendedJourneySectionState = {
  activeJourneyId: string;
  selectedDuration: number | null;
  selectedIntensity: "ringan" | "seimbang" | "mendalam";
  viewedJourneyIds: string[];
  isReasonExpanded: boolean;
  isSaved: boolean;
  interactionSource:
    | "auto-context"
    | "suggestion"
    | "regenerate"
    | "mode-change"
    | "duration-change";
};
```

### 14.1 Ownership

- Shared state tetap dimiliki parent `/explore` atau store existing.
- Section 7 memiliki state presentasi lokal.
- Jangan menyimpan recommendation result permanen jika dapat dihitung ulang dari context.
- Journey yang disimpan ke Passport menggunakan Passport store existing.
- `activeJourneyId` dapat dimasukkan ke URL hanya ketika pengguna membuka journey penuh.

### 14.2 Recompute policy

Rekomendasi dihitung ulang jika:

- `activeLayer` berubah.
- `activeMode` berubah.
- `selectedProvinceId` berubah secara bermakna.
- Passport berubah dan section belum sedang digunakan.

Jangan mengganti journey aktif saat pengguna sedang membaca hanya karena background state kecil berubah. Gunakan indikator:

```
Pilihanmu berubah. Perbarui rekomendasi?
```

### 14.3 URL optional

```
/explore?layer=rempah&mode=learn&journey=jalur-rempah-maluku#recommended-journey
```

Gunakan `replace` untuk perubahan preview; `push` hanya saat membuka journey/Route Planner.

---

## 15. Copywriting Final Section

### Eyebrow

```
Disusun untuk Jelajahmu
```

### Heading

```
Perjalanan Berikutnya, Lebih Terarah
```

### Subheading

```
NUSANTARAYA menghubungkan minat, mode jelajah, provinsi pilihan, dan progres Passport menjadi satu jalur yang relevan—lengkap dengan alasan dan langkah berikutnya.
```

### Supporting microcopy

```
Rekomendasi mengikuti pilihanmu saat ini dan dapat diubah kapan saja.
```

### Context summary examples

```
Mode Explore · Layer Jalur Rempah · Dimulai dari Maluku
Mode Learn · Layer Sejarah · Materi bersumber diprioritaskan
Mode Tourist · 5 hari · Fokus perjalanan yang lebih praktis
Belum memilih minat · Menampilkan jalur awal terkurasi
```

### Labels

- `Rekomendasi Utama`.
- `Mengapa dipilih`.
- `Urutan perjalanan`.
- `Yang akan kamu temukan`.
- `Saran cerdas lainnya`.
- `Baru untuk Passport`.
- `Jalur virtual`.
- `Rencana perjalanan`.
- `Jalur belajar`.

### CTA

- `Lihat Jalur di Peta`.
- `Buka di Route Planner`.
- `Mulai Jalur Belajar`.
- `Jelajahi Provinsi Pertama`.
- `Simpan ke Passport`.
- `Tanya RANI untuk Menyesuaikan`.
- `Beri Saran Lain`.

---

## 16. Blueprint Desktop

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ DISUSUN UNTUK JELAJAHMU                                                     │
│ Perjalanan Berikutnya, Lebih Terarah                                        │
│ Subheading                                           [Context summary]       │
├───────────────────────────────────────────────┬──────────────────────────────┤
│ ROUTE VISUAL / COVER                          │ REKOMENDASI UTAMA            │
│                                               │ Jalur Rempah Maluku          │
│  [Maluku] ─── [Maluku Utara] ─── [Sulsel]    │ Promise                      │
│  abstract Indonesia route ribbon              │ Description                  │
│                                               │                              │
│                                               │ Mengapa dipilih              │
│                                               │ • Layer Rempah aktif         │
│                                               │ • Dimulai dari Maluku        │
│                                               │                              │
│                                               │ [Signals] [Duration/Type]    │
│                                               │ [CTA utama] [Simpan]         │
├───────────────────────────────────────────────┴──────────────────────────────┤
│ URUTAN PERJALANAN                                                          │
│ 01 Maluku ── 02 Maluku Utara ── 03 Sulawesi Selatan                       │
├──────────────────────────────────────────────────────────────────────────────┤
│ SARAN CERDAS LAINNYA                                                       │
│ [Continue brief]       [Complete brief]       [Contrast brief]              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 16.1 Rasio

- Outer max width: 1280–1440px.
- Primary visual: 54–60%.
- Editorial panel: 40–46%.
- Primary stage minimum height: 560–680px.
- Suggestion briefs: full-width row, tiga kolom maksimal.

### 16.2 Route visual

Boleh menggunakan:

- Siluet Indonesia abstrak.
- Garis route editorial.
- 3–5 node stop.
- Satu cover photo dengan cartographic overlay.
- Timeline ribbon.

Tidak boleh:

- Menyalin Interactive Map lengkap.
- Menampilkan navigasi jalan real-time.
- Menaruh 38 label provinsi.
- Menggunakan garis geografis seolah akurat bila hanya ilustratif; beri label `visual jalur`.

---

## 17. Blueprint Tablet

```
Header + context summary
Primary visual full width
Journey identity + reasons
Sequence horizontal
Actions
Suggestion horizontal rail
```

Aturan:

- Stage stacked, bukan dua kolom sempit.
- Route nodes maksimal 4 terlihat sekaligus.
- Reason dan signals dapat menjadi dua kolom.
- Suggestions menampilkan 2.2–2.6 brief.
- Tidak ada nested vertical scroll.
- CTA utama tetap terlihat sebelum suggestion rail.

---

## 18. Blueprint Mobile

```
Eyebrow
Heading
Subheading
Context summary pill

Journey type + title
Cover / route visual 4:3
Promise
Why recommended
Journey sequence vertical/compact horizontal
Signals
Duration/intensity control
Primary CTA full width
Save + RANI actions

Smart Suggestions snap rail
Feedback + regenerate
```

### 18.1 Mobile rules

- Padding horizontal 20–24px.
- Cover ratio 4:3 atau 5:4.
- Route sequence maksimal 3 stop utama; sisanya `+2 stop`.
- Reason default satu kalimat; detail dapat ditoggle.
- CTA utama full-width.
- Secondary actions maksimal dua per row.
- Suggestion card minimal 220–260px.
- Native horizontal scroll + snap.
- Tidak ada hover-only information.
- Tidak ada horizontal page overflow.

### 18.2 Mobile kecil ≤390px

- Heading 34–40px.
- Promise maksimal 3 baris.
- Description maksimal 5–6 baris.
- Signals wrap.
- Sequence berubah menjadi list vertikal compact.
- Duration control tidak memaksa semua opsi dalam satu row.
- Sembunyikan decorative map labels yang tidak penting.

---

## 19. Visual Design System

### 19.1 Brand base

```
Ivory Background  #FFFDF8
Warm Canvas       #F8F4EA
Navy Ink          #0D1B2A
Flagship Gold     #C9A84C
Warm Border       #E8E0CE
Muted Text        #5E6570
```

### 19.2 Accent berdasarkan journey

```
Budaya   #B85C38
Kuliner  #C58A2A
Alam     #2D5A27
Sejarah  #2B4C8C
Rempah   #1B7A7A
Future   #6B3FA0
Mixed    #C9A84C
```

### 19.3 Surface

```css
background: rgba(255, 253, 248, 0.97);
border: 1px solid #E8E0CE;
border-radius: 32px;
box-shadow: 0 30px 100px rgba(13, 27, 42, 0.10);
```

### 19.4 Tipografi

- Section heading: Playfair Display 52–72px desktop.
- Journey title: Playfair Display 44–64px desktop.
- Eyebrow/type: Inter Semibold 11–12px uppercase.
- Promise: Inter Medium 17–20px.
- Body: Inter 15–17px, line-height 1.65.
- Stop index: Playfair/Inter Semibold 18–24px.
- Reason: Inter 13–15px.

### 19.5 Aturan visual

- Ivory/navy tetap dominan.
- Accent maksimal 12–15% area.
- Gold dipakai untuk focal marker, CTA detail, dan Passport.
- Satu outer dossier; hindari card di dalam card berulang.
- Pattern Nusantara maksimal opacity 2–3%.
- Route line tidak boleh lebih dominan daripada journey title.

---

## 20. Duration dan Intensity Controls

### 20.1 Tujuan

Memberi rasa personal tanpa mengubah section menjadi form Route Planner.

### 20.2 Explore

```
Ringkas · Seimbang · Mendalam
```

Dampak:

- Ringkas: 2–3 stop.
- Seimbang: 3–4 stop.
- Mendalam: 4–5 stop.

### 20.3 Tourist

```
3 hari · 5 hari · 7 hari
```

Hanya tampilkan opsi yang didukung preset/data. Jangan memalsukan itinerary dinamis.

### 20.4 Learn

```
15 menit · 30 menit · 60 menit
```

Hanya jika jumlah chapter dan estimated reading time tersedia. Jika belum, gunakan `Ringkas · Seimbang · Mendalam`.

### 20.5 Behavior

- Perubahan control memperbarui stop list dan summary.
- Jangan auto-scroll.
- Jangan menghapus layer atau mode.
- Announce perubahan melalui live region.
- Default berasal dari mode, bukan local time atau data sensitif.

---

## 21. Interaction Flows

### 21.1 Entry tanpa konteks

```
activeLayer = all
selectedProvinceId = null
passport kosong
→ tampilkan Flagship Grand Tour
→ label: Pilihan awal terkurasi
→ suggestions: Budaya, Rempah, Future
```

### 21.2 Entry dari Explore by Layer

```
activeLayer = rempah
→ rank journey Rempah
→ Jalur Rempah Maluku menjadi primary
→ alasan: layer aktif
→ CTA: Lihat Jalur di Peta
```

### 21.3 Entry dengan provinsi terpilih

```
selectedProvinceId = maluku
activeLayer = rempah
→ journey dimulai dari Maluku
→ reason includes STARTS_FROM_SELECTED_PROVINCE
→ Map route menjaga Maluku sebagai active anchor
```

### 21.4 Tourist Mode

```
activeMode = tourist
→ filter journey travelValidated
→ tampilkan duration options valid
→ CTA utama ke Route Planner
→ alternative virtual journey tetap boleh ada, tetapi diberi label
```

### 21.5 Learn Mode

```
activeMode = learn
→ boost source completeness
→ stop berubah menjadi chapter belajar
→ CTA ke Archive/Atlas/quiz
```

### 21.6 Simpan ke Passport

```
Klik Simpan ke Passport
→ upsert journey ID pada store existing
→ simpan stop/province IDs yang relevan sebagai planned, bukan completed
→ update label menjadi Tersimpan di Passport ✓
→ announce hasil
```

Jangan langsung memberi stempel selesai hanya karena journey disimpan.

### 21.7 Beri saran lain

```
Klik Beri Saran Lain
→ pilih ranked eligible journey berikutnya
→ simpan viewedJourneyIds pada session
→ crossfade content
→ focus tetap pada control
```

### 21.8 Feedback

```
Apakah saran ini membantu? [Ya] [Belum]
```

Feedback optional dan tidak boleh menghalangi CTA.

---

## 22. Integrasi dengan Interactive Map

### 22.1 CTA Map

```
Klik Lihat Jalur di Peta
→ set journey overlay/preview state
→ selectedProvinceId = stop pertama
→ pertahankan activeLayer dan activeMode
→ scroll ke #interactive-map
→ focus map status
→ announce jumlah stop
```

### 22.2 Overlay

- Gunakan route polyline/abstract connector yang ringan.
- Jika coordinates tidak akurat, gunakan node-to-node visual yang diberi label ilustratif.
- Stop aktif memiliki nomor 1–5.
- Provinsi nonjourney tetap terlihat tetapi dimmed lembut.
- Tombol `Keluar dari jalur` mengembalikan map filter sebelumnya.

### 22.3 Jangan merusak state

- Search tetap dipertahankan kecuali tidak cocok dan pengguna menyetujui perubahan.
- `activeLayer` mengikuti primary layer journey.
- Browser Back mengembalikan state sebelum journey preview.

---

## 23. Integrasi dengan Atlas, Route Planner, Passport, dan RANI

### 23.1 Province Atlas

`Jelajahi Provinsi Pertama` membuka route canonical stop pertama. Simpan explore snapshot agar Browser Back kembali ke section dan state yang sama.

### 23.2 Route Planner

Payload yang disarankan:

```tsx
{
  source: "recommended-journey",
  journeyId,
  provinceIds,
  interests: [primaryLayer, ...secondaryLayers],
  durationDays,
  travelerMode: activeMode,
}
```

Route Planner bertanggung jawab memvalidasi itinerary detail.

### 23.3 Passport

Simpan:

- `plannedJourneyIds`.
- `plannedProvinceIds`.
- `savedAt`.
- Optional progress per stop.

Pisahkan status:

```
planned → started → completed
```

### 23.4 RANI

CTA:

```
Tanya RANI untuk Menyesuaikan
```

Prompt context internal:

```
Ubah journey ini berdasarkan kebutuhan pengguna tanpa mengubah fakta budaya yang tidak terverifikasi. Gunakan preset/data internal sebagai sumber utama.
```

Fallback jika RANI/API gagal:

- Tampilkan adjustment preset: lebih singkat, lebih banyak alam, lebih edukatif, fokus satu wilayah.
- Jangan membuat section gagal total.

---

## 24. Asset Strategy

### 24.1 Reuse prioritas

- Province `hero.webp` atau `thumb.webp`.
- Layer covers dari Section 6.
- Map silhouette existing.
- Pin/icon existing.
- Spice route overlay existing.
- Future city overlay existing.
- Passport icon existing.

### 24.2 Dedicated assets optional

```
/assets/explore/journeys/budaya-jawa-bali.webp
/assets/explore/journeys/rasa-nusantara.webp
/assets/explore/journeys/alam-indonesia-timur.webp
/assets/explore/journeys/sejarah-maritim.webp
/assets/explore/journeys/jalur-rempah-maluku.webp
/assets/explore/journeys/nusantara-future.webp
```

### 24.3 Loading

```
Initial: primary cover + visible icons
Near viewport: first visible suggestion thumbnails
On hover/focus: preload selected alternative cover
On selection: load next cover
Never: preload all province Atlas assets
```

### 24.4 Fallback visual

- Regional gradient.
- Indonesia silhouette.
- Route nodes.
- Journey title.
- Accent pattern ringan.

Jangan menampilkan broken image icon.

### 24.5 Credits

Setiap cover harus memiliki sumber, lisensi, alt text, focal point, dan catatan crop.

---

## 25. Motion System

### 25.1 Entrance

1. Header fade-up.
2. Context summary muncul.
3. Dossier shell opacity/scale ringan.
4. Route line reveal satu kali.
5. Stops muncul berurutan 40–70ms.
6. Editorial content muncul terakhir.

### 25.2 Journey change

- Cover crossfade 280–420ms.
- Route nodes crossfade/reposition 220–360ms.
- Title fade-up 8–10px.
- Reasons dan signals stagger ringan.
- Tinggi stage tetap stabil.

### 25.3 Interaction

- Stop hover/focus menyorot node dan brief.
- CTA arrow shift 3–4px.
- Save icon berubah satu kali, tanpa confetti berlebihan.
- Suggestion brief lift 1–2px.

### 25.4 Reduced motion

- Matikan route draw, stagger, parallax, dan scale.
- Crossfade maksimal 100–120ms.
- Scroll instan.
- Semua fungsi tetap tersedia.

### 25.5 Autoplay

Tidak ada autoplay untuk recommendation atau route.

---

## 26. Accessibility

### 26.1 Semantik

```html
<section id="recommended-journey" aria-labelledby="recommended-journey-heading">
```

- Satu H2 untuk section.
- Journey title menjadi H3.
- Sequence memakai ordered list.
- Suggestion memakai list.
- Primary navigation action berupa link jika berpindah route.
- Map/state action berupa button.
- Save memakai toggle button dengan `aria-pressed`.

### 26.2 Keyboard

- Tab menuju journey controls.
- Arrow keys untuk segmented duration/intensity.
- Stop list tidak memerlukan roving tabindex jika setiap item bukan action.
- Suggestion rail dapat dinavigasi tanpa drag.
- Focus tidak hilang saat recommendation berubah.
- Escape menutup reason detail/popover.

### 26.3 Screen reader

- Announce journey aktif, tipe, dan jumlah stop.
- `aria-live="polite"` untuk perubahan hasil.
- Jangan mengumumkan seluruh deskripsi setiap regenerate.
- Decorative route map `aria-hidden`.
- Alt text cover menjelaskan konteks, bukan mengulang judul.

### 26.4 Contrast dan touch

- Body 4.5:1.
- Large text 3:1.
- Accent tidak dipakai sendirian untuk status.
- Touch target minimal 44×44px.
- Active state memiliki icon/border/label.
- Zoom 200% tidak memotong CTA.

---

## 27. Performance Budget

### 27.1 Target

- Recommendation compute lokal <50ms untuk dataset kecil.
- Feedback interaksi <100ms.
- Tidak ada long task >200ms.
- Tidak ada layout shift besar.
- Primary visual di bawah 250 KB ideal.
- Section tidak mengimpor full Atlas/Archive/Route Planner dataset.

### 27.2 Teknik

- Precompute journey eligibility.
- Memoize scoring berdasarkan context key.
- Simpan metadata ringan di bundle.
- Dynamic import untuk RANI enhancement.
- Lazy-load section bila jauh di bawah fold.
- Gunakan image `sizes`, width, dan height eksplisit.
- Gunakan transform/opacity untuk motion.
- Hindari blur besar dan SVG route berlebihan.

### 27.3 Payload principle

```
Load the recommendation, not the whole itinerary.
Load the route preview, not the entire map engine.
Load reasons, not hidden user profiles.
```

---

## 28. Privacy, Trust, dan Etika Rekomendasi

1. Jangan mengumpulkan lokasi real-time tanpa kebutuhan dan consent.
2. Jangan menyimpulkan agama, etnis, kondisi ekonomi, atau karakter pengguna.
3. Gunakan state sesi dan Passport lokal yang transparan.
4. Jelaskan bahwa rekomendasi mengikuti pilihan saat ini.
5. Sediakan reset/clear personalization.
6. Jangan mempromosikan wilayah hanya berdasarkan popularitas terus-menerus.
7. Terapkan regional diversity agar provinsi nonpopuler tetap mendapat ruang.
8. Klaim budaya/sejarah harus berasal dari source terkurasi.
9. Rute wisata harus dibedakan dari eksplorasi virtual.
10. Jangan menyebut “terdekat” tanpa data geografis/adjacency yang valid.
11. Jangan menyebut “aman”, “murah”, atau “terbaik” tanpa sumber dan konteks.

Copy transparansi:

```
Saran ini disusun dari layer, mode, provinsi aktif, dan progres Passport di perangkat ini.
```

---

## 29. Loading, Empty, Partial, dan Error States

### 29.1 Loading

```
Menyusun jalur dari pilihanmu…
```

Gunakan skeleton stage stabil. Jangan menampilkan spinner panjang untuk local compute.

### 29.2 No context

```
Belum ada pilihan khusus. Mulai dari jalur terkurasi yang memperkenalkan beberapa wajah Nusantara.
```

### 29.3 Partial data

- Tampilkan stop yang valid.
- Kurangi jumlah stop.
- Jangan menduplikasi stop.
- Ubah CTA ke Map/Atlas jika Route Planner payload belum lengkap.

### 29.4 No eligible journey

```
Kami belum dapat menyusun jalur dari kombinasi ini. Coba lihat semua layer atau mulai dari provinsi unggulan.
```

Actions:

- `Reset ke Semua Layer`.
- `Lihat Flagship`.

### 29.5 Asset error

Gradient + route nodes + title.

### 29.6 RANI/API error

```
Penyesuaian otomatis sedang tidak tersedia. Gunakan pilihan durasi dan mode lokal di bawah.
```

### 29.7 Passport error

Tampilkan feedback nonblocking dan pertahankan journey aktif.

---

## 30. Component Architecture

```
src/components/explore/recommended-journey/
  RecommendedJourneySection.tsx
  JourneySectionHeader.tsx
  JourneyContextSummary.tsx
  JourneyDossier.tsx
  JourneyVisualStage.tsx
  JourneyRouteRibbon.tsx
  JourneyIdentity.tsx
  JourneyReasons.tsx
  JourneySignals.tsx
  JourneySequence.tsx
  JourneyStopItem.tsx
  JourneyControls.tsx
  JourneyActions.tsx
  JourneySaveButton.tsx
  SmartSuggestions.tsx
  SmartSuggestionCard.tsx
  JourneyFeedback.tsx
  JourneySkeleton.tsx
  JourneyEmptyState.tsx
  JourneyErrorState.tsx
  index.ts

src/data/journeys/
  journeyPresets.ts
  journeyEditorial.ts
  journeyStops.ts
  journeyReasonCopy.ts
  journeyAssetManifest.ts

src/lib/recommendation/
  getEligibleJourneys.ts
  scoreJourneys.ts
  diversifySuggestions.ts
  composeRecommendation.ts
  validateJourney.ts

src/hooks/
  useRecommendedJourney.ts
  useJourneySessionHistory.ts
  useJourneyAssetPreload.ts
  useJourneyPassport.ts

src/types/
  journey.ts

src/animations/
  journeyMotion.ts
```

### 30.1 Tanggung jawab

**`RecommendedJourneySection.tsx`**

- Compose section.
- Membaca shared context.
- Tidak memuat logic scoring besar di JSX.

**`JourneyDossier.tsx`**

- Primary visual dan editorial content.
- Menjaga layout stabil.

**`JourneyRouteRibbon.tsx`**

- Visual sequence saja.
- Tidak menjadi peta kedua.

**`JourneyReasons.tsx`**

- Menerjemahkan reason codes.
- Tidak membuat alasan dari copy bebas.

**`SmartSuggestions.tsx`**

- Maksimal tiga alternatif terdiversifikasi.

**`composeRecommendation.ts`**

- Eligibility, scoring, tie-break, dan output.

---

## 31. Analytics Plan

### 31.1 Events

```tsx
journey_section_viewed
journey_primary_impression
journey_primary_opened
journey_suggestion_selected
journey_reason_expanded
journey_control_changed
journey_map_opened
journey_route_planner_opened
journey_atlas_opened
journey_passport_saved
journey_regenerated
journey_feedback_submitted
```

### 31.2 Properties aman

- `journeyId`.
- `activeLayer`.
- `activeMode`.
- `confidence`.
- `reasonCodes`.
- `stopCount`.
- `actionType`.
- `generatedBy`.

Jangan mengirim raw search query jika dapat mengandung informasi pribadi. Gunakan mapped intent/category bila tersedia.

### 31.3 Success indicators

- Primary CTR.
- Save-to-Passport rate.
- Route Planner handoff.
- Map handoff.
- Suggestion switch rate.
- Negative feedback rate.
- Fallback frequency.

---

## 32. Testing Plan

### 32.1 Unit/data

- Preset IDs unik.
- Eligibility benar.
- Score deterministik.
- Tie-break stabil.
- Tourist filter menolak journey nonvalidated.
- Reason codes sesuai input.
- Passport novelty tidak menghasilkan duplikat.
- Max tiga suggestions.
- No broken stop href.

### 32.2 Functional

- Context kosong.
- Setiap layer.
- Ketiga mode.
- Selected flagship dan non-flagship.
- Search intent valid/tidak valid.
- Passport kosong/penuh/partial.
- Duration/intensity change.
- Regenerate berulang.
- Save/unsave.
- Map/Atlas/Planner/RANI handoff.
- Browser Back restore.

### 32.3 Responsive

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

- Tidak ada overflow.
- Suggestion snap nyaman.
- Stop labels panjang aman.
- CTA tidak terpotong.
- Cover crop aman.

### 32.4 Accessibility

- Keyboard-only.
- Screen reader flow.
- Live region.
- Focus persistence setelah regenerate.
- Reduced motion.
- Contrast.
- Touch target.
- Browser zoom 200%.

### 32.5 Performance

- CPU/network throttling.
- Compute dengan seluruh preset.
- Image loading.
- Rapid layer/mode switching.
- Memory setelah banyak regenerate.
- Pastikan tidak mengimpor full datasets.

### 32.6 Build

```
lint
type-check
journey data validator
asset manifest check
broken-link check
production build
```

---

## 33. Acceptance Criteria

### Functional

- [ ]  Satu primary journey selalu tersedia atau fallback jelas.
- [ ]  Maksimal tiga smart suggestions.
- [ ]  Rekomendasi berubah sesuai layer/mode/provinsi.
- [ ]  Hasil deterministik untuk context yang sama.
- [ ]  Reason dapat dijelaskan dari reason code.
- [ ]  Tourist journey tervalidasi.
- [ ]  Explore/Learn virtual trail diberi label jelas.
- [ ]  CTA Map, Atlas, Planner, Passport, dan RANI aman.
- [ ]  Regenerate tidak acak tanpa kontrol.
- [ ]  Passport planned tidak dianggap completed.
- [ ]  Context tidak hilang saat handoff.
- [ ]  Fallback lokal bekerja tanpa API.

### Visual

- [ ]  Primary journey menjadi focal point.
- [ ]  Tidak terlihat seperti grid destinasi template.
- [ ]  Route visual tidak menyaingi Interactive Map.
- [ ]  Ivory/navy dominan; accent terkontrol.
- [ ]  Layout stabil saat journey berubah.
- [ ]  Reasons mudah ditemukan.
- [ ]  Suggestion briefs jelas tetapi sekunder.

### Responsive

- [ ]  Desktop dossier seimbang.
- [ ]  Tablet stacked nyaman.
- [ ]  Mobile sequence dan CTA mudah digunakan.
- [ ]  Rail memiliki partial next item.
- [ ]  Tidak ada horizontal page overflow.
- [ ]  Touch target minimal 44px.

### Accessibility

- [ ]  Heading dan list semantic.
- [ ]  Semua actions reachable.
- [ ]  Focus tidak hilang.
- [ ]  Live region ringkas.
- [ ]  Active state tidak hanya warna.
- [ ]  Reduced motion bekerja.
- [ ]  Contrast WCAG AA.

### Performance/trust

- [ ]  Compute cepat dan deterministik.
- [ ]  Tidak memuat full datasets.
- [ ]  Tidak ada broken assets/links.
- [ ]  Tidak ada klaim AI berlebihan.
- [ ]  Tidak ada klaim perjalanan tidak terverifikasi.
- [ ]  Copy transparansi tersedia.
- [ ]  Production build lulus.

---

## 34. Tahapan Implementasi

### Fase 1 — Audit contract dan data

1. Audit shared explore state.
2. Audit province/region/category data.
3. Audit Passport store.
4. Audit Route Planner payload.
5. Audit RANI fallback.
6. Definisikan journey types.
7. Buat validator.

### Fase 2 — Preset dan engine lokal

1. Buat minimal enam journey presets.
2. Buat reason codes/copy.
3. Implement eligibility.
4. Implement scoring.
5. Implement tie-break.
6. Implement suggestion diversity.
7. Unit test hasil deterministik.

### Fase 3 — Desktop static dossier

1. Header dan context summary.
2. Primary visual stage.
3. Journey identity.
4. Reasons.
5. Sequence.
6. Signals.
7. Actions.
8. Suggestion briefs.

### Fase 4 — Shared state integration

1. Layer.
2. Mode.
3. Selected province.
4. Search intent.
5. Flagship.
6. Passport novelty.
7. Recompute policy.

### Fase 5 — Product handoff

1. Map overlay.
2. Atlas route.
3. Route Planner payload.
4. Passport planned state.
5. RANI adjustment/fallback.
6. Browser history restore.

### Fase 6 — Tablet dan mobile

1. Stacked layout.
2. Compact sequence.
3. Snap suggestions.
4. Controls responsive.
5. Touch target.
6. Long-copy QA.

### Fase 7 — Motion dan accessibility

1. Route reveal/crossfade.
2. Reduced motion.
3. Keyboard.
4. Focus management.
5. Live region.
6. Contrast/zoom.

### Fase 8 — Analytics, QA, dan polish

1. Events.
2. Data/asset validator.
3. Responsive QA.
4. Performance profiling.
5. Cultural/travel content review.
6. Lint/type-check/build.
7. Demo rehearsal.

---

## 35. Estimasi Pengerjaan

| Fase | Estimasi |
| --- | --- |
| Audit state, data, dan integration contract | 3–5 jam |
| Journey presets dan validator | 4–7 jam |
| Recommendation engine lokal | 5–9 jam |
| Desktop dossier UI | 6–10 jam |
| Map/Atlas/Planner/Passport integration | 6–10 jam |
| Tablet dan mobile | 4–7 jam |
| Motion dan accessibility | 4–7 jam |
| Analytics, QA, dan polish | 5–8 jam |

Total realistis:

```
37–63 jam kerja efektif
```

Versi demo prioritas:

```
6 preset + local scoring + primary dossier + 3 suggestions + Map/Passport handoff + mobile core
22–34 jam
```

Versi minimum aman:

```
6 preset + context layer/mode + CTA Map/Atlas + fallback lokal
14–22 jam
```

---

## 36. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Terlihat seperti rekomendasi acak | Trust turun | Reason codes dan hasil deterministik |
| Label AI tanpa fungsi | Produk terasa gimmick | Hybrid engine transparan; RANI optional |
| Rute wisata tidak realistis | Kredibilitas turun | `travelValidated` dan label virtual |
| Terlalu banyak kartu | Hierarki hilang | Satu primary + maksimal tiga briefs |
| State berubah saat dibaca | UX membingungkan | Recompute guard dan update prompt |
| Passport memberi reward terlalu cepat | Gamifikasi rusak | Status planned, started, completed |
| Data belum lengkap | Stop/link kosong | Eligibility filter dan partial fallback |
| API RANI gagal | Demo berhenti | Local engine dan adjustment preset |
| Map kedua terlalu berat | Performa turun | Route ribbon abstrak saja |
| Popularitas mengalahkan keragaman | Provinsi lain tak terlihat | Diversity rule dan Passport novelty |
| Copy terlalu panjang mobile | CTA tenggelam | Content budget dan progressive disclosure |
| Tracking berlebihan | Privacy/trust turun | Local context, no sensitive inference |

---

## 37. Strategi Demo Juri

Flow 60–90 detik:

```
1. Dari Explore by Layer, pilih Jalur Rempah.
2. Section 7 otomatis menampilkan Jalur Rempah Maluku.
3. Tunjukkan context summary: layer, mode, provinsi.
4. Buka Mengapa dipilih.
5. Tunjukkan urutan Maluku dan stop terkait.
6. Klik Lihat Jalur di Peta.
7. Map menampilkan numbered route nodes.
8. Kembali dan ubah Mode ke Learn.
9. Journey berubah menjadi learning path dengan sumber/chapter.
10. Simpan ke Passport sebagai planned journey.
11. Pilih Smart Suggestion Future untuk menunjukkan diversity.
```

Nilai yang terlihat:

- State antarsection nyata.
- Explainable recommendation.
- Local fallback stabil.
- Map integration.
- Mode-aware experience.
- Passport lifecycle.
- Heritage dan future dalam satu sistem.

### 37.1 Demo anti-gagal

- Gunakan context preset yang diketahui hasilnya.
- Preload primary cover.
- Jangan bergantung pada RANI API.
- Pastikan route overlay untuk Rempah tersedia.
- Sediakan fallback static route ribbon.
- Rehearsal Browser Back dan state restore.

---

## 38. Checklist Handoff

### Desain

- [ ]  Desktop default dan seluruh journey type.
- [ ]  Context kuat/moderat/fallback.
- [ ]  Reason expanded/collapsed.
- [ ]  Saved/unsaved.
- [ ]  Loading/partial/error.
- [ ]  Tablet/mobile.
- [ ]  Reduced motion/focus.

### Konten

- [ ]  Minimal enam preset.
- [ ]  Promise dan description.
- [ ]  Stop reasons.
- [ ]  Reason copy.
- [ ]  Signals.
- [ ]  Mode-specific CTA.
- [ ]  Travel validation/source review.
- [ ]  Alt text dan credits.

### Data

- [ ]  Journey IDs/slugs.
- [ ]  Province IDs.
- [ ]  Stop order.
- [ ]  Layer/mode mapping.
- [ ]  Asset manifest.
- [ ]  Route Planner payload.
- [ ]  Passport lifecycle.
- [ ]  Validators.

### Engineering

- [ ]  Shared context ownership.
- [ ]  Eligibility/scoring.
- [ ]  Deterministic tie-break.
- [ ]  Recompute guard.
- [ ]  Map overlay contract.
- [ ]  Atlas navigation.
- [ ]  Route Planner handoff.
- [ ]  Passport save.
- [ ]  RANI fallback.
- [ ]  Analytics.
- [ ]  Browser history restore.

---

## 39. Definition of Done

Section 7 selesai jika:

1. Satu primary journey selalu tersedia dari context atau fallback.
2. Maksimal tiga smart suggestions memiliki strategi berbeda.
3. Layer, mode, selected province, search intent, dan Passport dapat memengaruhi ranking.
4. Hasil untuk context yang sama konsisten.
5. Setiap rekomendasi memiliki alasan yang dapat dijelaskan.
6. Explore, Tourist, dan Learn menghasilkan bentuk output berbeda.
7. Journey virtual dan itinerary nyata dilabeli dengan benar.
8. Tourist journey tidak membuat klaim yang belum tervalidasi.
9. CTA Map menampilkan route preview tanpa merusak state.
10. Atlas, Route Planner, Passport, dan RANI memiliki handoff/fallback aman.
11. Passport membedakan planned, started, dan completed.
12. Desktop, tablet, dan mobile nyaman.
13. Keyboard, focus, live region, contrast, dan reduced motion bekerja.
14. Tidak ada map engine kedua.
15. Tidak memuat full Atlas/Archive/Planner datasets.
16. Asset, href, province ID, dan preset tervalidasi.
17. RANI/API dapat gagal tanpa merusak section.
18. Copy personalisasi transparan dan tidak berlebihan.
19. Analytics tidak mengirim data sensitif/raw query.
20. Lint, type-check, validator, dan production build lulus.
21. Demo dapat diulang dengan hasil stabil.
22. Handoff ke Regional Explorer terasa natural.

---

## 40. Dokumen Terkait

- [Planning Lengkap — Explore Control Bar NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Explore-Control-Bar-NUSANTARAYA-cb9fbb2a52f64bbda42c7a41793fa05b?pvs=21)
- [Planning Lengkap — Interactive Indonesia Map NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Interactive-Indonesia-Map-NUSANTARAYA-a6aef2d2c0cf483a8def5e4df8a65ffb?pvs=21)
- [Planning Redesign — Province Summary Panel + Deep Province Atlas NUSANTARAYA](https://app.notion.com/p/Planning-Redesign-Province-Summary-Panel-Deep-Province-Atlas-NUSANTARAYA-4833d0e1ba3848d08945e053447efe92?pvs=21)
- [Planning Lengkap — Section 5 Flagship Provinces NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-5-Flagship-Provinces-NUSANTARAYA-1b71c64507ee424fbb85c2b21b1b91f0?pvs=21)
- [Planning Lengkap — Section 6 Explore by Layer NUSANTARAYA](https://app.notion.com/p/Planning-Lengkap-Section-6-Explore-by-Layer-NUSANTARAYA-5921ee97a90e49c6a5f7ef0d8da814ca?pvs=21)
- [PRD NUSANTARAYA FIX](https://app.notion.com/p/PRD-NUSANTARAYA-FIX-165098210a3c83fea99181f526f0367e?pvs=21)
- [Panduan Aset & Struktur Folder NUSANTARAYA](https://app.notion.com/p/Panduan-Aset-Struktur-Folder-NUSANTARAYA-47e098210a3c82b78399014954613af2?pvs=21)

---

## 41. Keputusan Final

<aside>
🏆

**Arah final yang dipilih:** Section 7 menjadi **Nusa Journey Composer** dengan satu journey dossier utama, route ribbon/visual ringan, alasan rekomendasi yang explainable, sequence stop, mode-aware controls, maksimal tiga Smart Suggestions, serta integrasi nyata ke Map, Atlas, Route Planner, Passport, dan RANI. Fondasi sistem adalah local deterministic recommendation; AI hanya enhancement, bukan dependency.

</aside>

Prinsip penutup:

```
Jangan hanya memberi daftar tempat.
Susun arah, jelaskan alasan, lalu bantu pengguna benar-benar melanjutkan perjalanan.
```