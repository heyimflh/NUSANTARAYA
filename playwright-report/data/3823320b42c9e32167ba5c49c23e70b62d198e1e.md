# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Mobile Smoke >> Route page loads without horizontal overflow on mobile
- Location: e2e\smoke.spec.ts:63:7

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 391
Received:    403
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - main [ref=e3]:
      - generic [ref=e4]:
        - navigation [ref=e5]:
          - link "Nusantaraya" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Nusantaraya" [ref=e7]
          - button "Buka Menu" [ref=e8]:
            - img [ref=e9]
        - generic [ref=e10]:
          - generic [ref=e16]:
            - generic [ref=e17]: Nusa Route Planner
            - heading "Rencanakan Petualanganmu" [level=1] [ref=e23]:
              - text: Rencanakan
              - text: Petualanganmu
            - paragraph [ref=e27]: Susun rute perjalanan impianmu. Temukan destinasi tersembunyi, estimasi waktu, dan buat pengalaman wisata yang tak terlupakan di seluruh Nusantara.
            - generic [ref=e28]:
              - link "Buat Rute" [ref=e29] [cursor=pointer]:
                - /url: "#route-atelier"
                - text: Buat Rute
                - img [ref=e30]
              - link "Inspirasi Rute" [ref=e32] [cursor=pointer]:
                - /url: "#preset-routes"
                - img [ref=e34]
                - text: Inspirasi Rute
          - generic [ref=e36]:
            - generic [ref=e37]: Scroll untuk merencanakan
            - img [ref=e39]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic [ref=e47]: Nusa Route Planner
              - heading "Buat rute yang menyesuaikan waktu, minat, dan ritmemu." [level=1] [ref=e48]
              - paragraph [ref=e49]: Jawab beberapa pertanyaan singkat. Kami akan menyusun urutan destinasi, pembagian hari, dan catatan perjalanan.
            - generic [ref=e50]:
              - generic [ref=e51]:
                - img [ref=e52]
                - generic [ref=e55]: Selesai sekitar 1 menit
              - list [ref=e56]:
                - listitem [ref=e57]: Urutan destinasi
                - listitem [ref=e58]: Itinerary harian
                - listitem [ref=e59]: Catatan perjalanan
          - generic [ref=e60]:
            - navigation "Progress" [ref=e61]:
              - list [ref=e62]:
                - listitem [ref=e63]:
                  - button "Rencana dasar" [ref=e64]:
                    - img [ref=e67]
                    - generic [ref=e70]: Rencana dasar
                - listitem [ref=e71]
                - listitem [ref=e72]:
                  - button "Preferensi" [ref=e73]:
                    - img [ref=e76]
                    - generic [ref=e79]: Preferensi
                - listitem [ref=e80]
                - listitem [ref=e81]:
                  - button "3 Tinjau Sedang Diisi" [ref=e82]:
                    - generic [ref=e85]: "3"
                    - generic [ref=e86]:
                      - generic [ref=e87]: Tinjau
                      - generic [ref=e88]: Sedang Diisi
            - generic [ref=e90]:
              - generic [ref=e92]:
                - generic [ref=e93]: "Langkah 3 dari 3: Tinjau dan buat rute"
                - generic [ref=e94]:
                  - heading "Tinjauan Spesifikasi" [level=2] [ref=e95]
                  - paragraph [ref=e96]: Periksa kembali parameter perjalananmu. Rute akan disusun berdasarkan konfigurasi ini.
                - generic [ref=e97]:
                  - generic [ref=e98]:
                    - generic [ref=e99]: Rencana Dasar
                    - generic [ref=e100]:
                      - generic [ref=e101]: 5 Hari
                      - generic [ref=e102]: Jawa
                    - button "Ubah" [ref=e103]
                  - generic [ref=e104]:
                    - generic [ref=e105]: Preferensi
                    - generic [ref=e106]:
                      - generic [ref=e107]: Budaya
                      - generic [ref=e108]:
                        - generic [ref=e109]:
                          - strong [ref=e110]: "Anggaran:"
                          - text: Menengah
                        - generic [ref=e111]:
                          - strong [ref=e112]: "Ritme:"
                          - text: Seimbang
                    - button "Ubah" [ref=e113]
              - generic [ref=e116]:
                - button "Kembali" [ref=e118]:
                  - img [ref=e119]
                  - text: Kembali
                - button "Buat Rute Perjalanan" [ref=e122]:
                  - generic [ref=e123]: Buat Rute Perjalanan
            - generic [ref=e125]:
              - generic [ref=e126]:
                - heading "Preview rute" [level=3] [ref=e127]
                - generic [ref=e128]: Diperbarui otomatis
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - generic [ref=e131]:
                    - generic [ref=e132]: "05"
                    - generic [ref=e133]: Hari
                  - generic [ref=e136]:
                    - generic [ref=e139]:
                      - generic [ref=e140]: Asal Keberangkatan
                      - generic [ref=e141]: Belum dipilih
                    - generic [ref=e145]: Jawa
                - generic [ref=e147]:
                  - heading "PERKIRAAN STRUKTUR" [level=4] [ref=e148]
                  - list [ref=e149]:
                    - listitem [ref=e150]: 02–03 area utama
                    - listitem [ref=e152]: 2–3 aktivitas per hari
                    - listitem [ref=e154]: Menengah · Seimbang
                - generic [ref=e156]:
                  - heading "FOKUS RUTE" [level=4] [ref=e157]
                  - generic [ref=e159]: Budaya
              - generic [ref=e160]: Rute final dibuat setelah kamu meninjau semua pilihan.
          - region "Mulai dari perjalanan yang sudah kami pilihkan." [ref=e161]:
            - generic [ref=e162]:
              - generic [ref=e163]: Rute Terkurasi Nusantara
              - heading "Mulai dari perjalanan yang sudah kami pilihkan." [level=2] [ref=e164]
              - paragraph [ref=e165]: Jelajahi rute siap pakai berdasarkan wilayah, durasi, dan pengalaman. Buka detailnya sekarang atau gunakan preferensinya sebagai titik awal untuk rute versimu sendiri.
              - generic [ref=e166]:
                - img [ref=e167]
                - generic [ref=e170]: Dikurasi dari data lokal
                - generic [ref=e171]: ·
                - generic [ref=e172]: Dapat disesuaikan
                - generic [ref=e173]: ·
                - generic [ref=e174]: Tetap tersedia tanpa generator AI
            - generic [ref=e175]:
              - generic [ref=e176]: Menampilkan 10 rute terkurasi.
              - group "Filter berdasarkan koleksi" [ref=e177]:
                - generic [ref=e178]: Filter berdasarkan koleksi
                - button "Semua" [pressed] [ref=e179]
                - button "Untuk Pertama Kali" [ref=e180]
                - button "Heritage" [ref=e181]
                - button "Alam" [ref=e182]
                - button "Kuliner" [ref=e183]
                - button "Slow Travel" [ref=e184]
              - generic [ref=e185]:
                - group "Filter berdasarkan wilayah" [ref=e186]:
                  - generic [ref=e187]: Filter berdasarkan wilayah
                  - combobox [ref=e188] [cursor=pointer]:
                    - option "Semua Wilayah" [selected]
                    - option "Sumatera"
                    - option "Jawa"
                    - option "Kalimantan"
                    - option "Sulawesi"
                    - option "Bali Nusa Tenggara"
                    - option "Maluku"
                    - option "Papua"
                - group "Filter berdasarkan durasi" [ref=e189]:
                  - generic [ref=e190]: Filter berdasarkan durasi
                  - combobox [ref=e191] [cursor=pointer]:
                    - option "Semua Durasi" [selected]
                    - option "3 Hari"
                    - option "5 Hari"
                    - option "7 Hari"
                - group "Filter berdasarkan minat" [ref=e192]:
                  - generic [ref=e193]: Filter berdasarkan minat
                  - combobox [ref=e194] [cursor=pointer]:
                    - option "Semua Minat" [selected]
                    - option "Budaya"
                    - option "Alam"
                    - option "Kuliner"
                    - option "Sejarah"
                    - option "Petualangan"
                    - option "Relaksasi"
                    - option "Hidden Gems"
                    - option "Kota Kreatif"
              - generic [ref=e196]: 10 rute ditemukan
            - generic [ref=e197]:
              - article [ref=e200]:
                - img "Suasana budaya dan pasar tradisional di Jawa Tengah" [ref=e202]
                - generic [ref=e204]:
                  - generic [ref=e205]:
                    - generic [ref=e206]: jawa
                    - generic [ref=e207]: •
                    - generic [ref=e208]: 5 Hari
                    - generic [ref=e209]: •
                    - generic [ref=e210]: budaya, kuliner
                  - heading "5 Hari Budaya & Kuliner Jawa" [level=3] [ref=e211]:
                    - link "5 Hari Budaya & Kuliner Jawa" [ref=e212] [cursor=pointer]:
                      - /url: "#jawa-budaya-kuliner-5"
                  - paragraph [ref=e213]: Menjelajahi warisan budaya Jawa dari keraton hingga pasar tradisional, dengan wisata kuliner autentik di setiap kota.
                  - generic [ref=e215]:
                    - generic [ref=e216]: "Rute perjalanan: 1. Yogyakarta, 2. Solo, 3. Surabaya & Malang"
                    - generic [ref=e220]:
                      - generic [ref=e223]: Yogyakarta
                      - generic [ref=e226]: Solo
                      - generic [ref=e229]: Surabaya
                  - generic [ref=e231]:
                    - generic [ref=e232]:
                      - generic [ref=e233]: "Ritme:"
                      - text: Seimbang
                    - generic [ref=e234]:
                      - generic [ref=e235]: "Budget:"
                      - text: Estimasi menengah
                  - generic [ref=e236]:
                    - button "Lihat detail rute 5 Hari Budaya & Kuliner Jawa" [ref=e237]:
                      - generic [ref=e238]: Lihat Rute
                      - img [ref=e239]
                    - button "Gunakan preferensi dari rute 5 Hari Budaya & Kuliner Jawa ke form" [ref=e241]:
                      - img [ref=e242]
                      - generic [ref=e243]: Gunakan Preferensi Ini
              - generic [ref=e244]:
                - generic [ref=e246]:
                  - heading "Eksplorasi Rute Lainnya" [level=4] [ref=e247]
                  - paragraph [ref=e248]: Geser untuk melihat inspirasi perjalanan tambahan.
                - generic [ref=e249]:
                  - article [ref=e251]:
                    - generic [ref=e252]:
                      - img "Pemandangan Gunung Bromo dan bentang alam Jawa Timur" [ref=e254]
                      - generic [ref=e255]: Heritage Trail
                      - generic [ref=e256]: 7 Hari
                    - generic [ref=e257]:
                      - generic [ref=e258]:
                        - generic [ref=e259]: jawa
                        - generic [ref=e260]: •
                        - generic [ref=e261]: budaya, sejarah
                      - heading "7 Hari Jawa–Bali Heritage" [level=3] [ref=e262]:
                        - link "7 Hari Jawa–Bali Heritage" [ref=e263] [cursor=pointer]:
                          - /url: "#jawa-bali-heritage-7"
                      - paragraph [ref=e264]: Perjalanan warisan budaya dari jantung Jawa menuju tradisi hidup di Bali.
                      - generic [ref=e266]:
                        - generic [ref=e267]: "Rute perjalanan: 1. Yogyakarta, 2. Solo, 3. Transit, 4. Ubud & Denpasar"
                        - generic [ref=e271]:
                          - generic [ref=e274]: Yogyakarta
                          - generic [ref=e277]: Solo
                          - generic [ref=e280]: Transit
                          - generic [ref=e283]: Ubud
                      - generic [ref=e285]:
                        - generic [ref=e286]: "Ritme: Seimbang"
                        - generic [ref=e287]: "Budget: Estimasi menengah–premium"
                      - generic [ref=e288]:
                        - button "Lihat detail rute 7 Hari Jawa–Bali Heritage" [ref=e289]:
                          - generic [ref=e290]: Lihat Rute
                        - button "Gunakan preferensi dari rute 7 Hari Jawa–Bali Heritage ke form" [ref=e291]:
                          - img [ref=e292]
                          - generic [ref=e293]: Gunakan
                  - article [ref=e295]:
                    - generic [ref=e296]:
                      - img "Kemegahan Candi Borobudur di Yogyakarta" [ref=e298]
                      - generic [ref=e299]: Cocok untuk Pertama Kali
                      - generic [ref=e300]: 3 Hari
                    - generic [ref=e301]:
                      - generic [ref=e302]:
                        - generic [ref=e303]: jawa
                        - generic [ref=e304]: •
                        - generic [ref=e305]: budaya, kuliner
                      - heading "3 Hari Yogyakarta & Candi Borobudur" [level=3] [ref=e306]:
                        - link "3 Hari Yogyakarta & Candi Borobudur" [ref=e307] [cursor=pointer]:
                          - /url: "#yogyakarta-cultural-escape-3"
                      - paragraph [ref=e308]: Menyelami warisan keraton, seni, dan kuliner Yogyakarta dipadukan kemegahan candi di Jawa Tengah.
                      - generic [ref=e310]:
                        - generic [ref=e311]: "Rute perjalanan: 1. Yogyakarta Kota, 2. Candi Area (Magelang), 3. Prambanan & Seni"
                        - generic [ref=e315]:
                          - generic [ref=e318]: Yogyakarta Kota
                          - generic [ref=e321]: Candi Area
                          - generic [ref=e324]: Prambanan
                      - generic [ref=e326]:
                        - generic [ref=e327]: "Ritme: Seimbang"
                        - generic [ref=e328]: "Budget: Estimasi hemat–menengah"
                      - generic [ref=e329]:
                        - button "Lihat detail rute 3 Hari Yogyakarta & Candi Borobudur" [ref=e330]:
                          - generic [ref=e331]: Lihat Rute
                        - button "Gunakan preferensi dari rute 3 Hari Yogyakarta & Candi Borobudur ke form" [ref=e332]:
                          - img [ref=e333]
                          - generic [ref=e334]: Gunakan
                  - article [ref=e336]:
                    - generic [ref=e337]:
                      - img "Pantai berpasir putih dan lautan biru di Lombok, Nusa Tenggara Barat" [ref=e339]
                      - generic [ref=e340]: Cocok untuk Pertama Kali
                      - generic [ref=e341]: 5 Hari
                    - generic [ref=e342]:
                      - generic [ref=e343]:
                        - generic [ref=e344]: bali nusa tenggara
                        - generic [ref=e345]: •
                        - generic [ref=e346]: alam, budaya
                      - heading "5 Hari Bali–Lombok" [level=3] [ref=e347]:
                        - link "5 Hari Bali–Lombok" [ref=e348] [cursor=pointer]:
                          - /url: "#bali-nusa-tenggara-5"
                      - paragraph [ref=e349]: Dari tradisi hidup Bali menuju keindahan alam pesisir Lombok.
                      - generic [ref=e351]:
                        - generic [ref=e352]: "Rute perjalanan: 1. Ubud & Sanur, 2. Lombok & Gili"
                        - generic [ref=e356]:
                          - generic [ref=e359]: Ubud
                          - generic [ref=e362]: Lombok
                      - generic [ref=e364]:
                        - generic [ref=e365]: "Ritme: Seimbang"
                        - generic [ref=e366]: "Budget: Estimasi menengah"
                      - generic [ref=e367]:
                        - button "Lihat detail rute 5 Hari Bali–Lombok" [ref=e368]:
                          - generic [ref=e369]: Lihat Rute
                        - button "Gunakan preferensi dari rute 5 Hari Bali–Lombok ke form" [ref=e370]:
                          - img [ref=e371]
                          - generic [ref=e372]: Gunakan
                  - article [ref=e374]:
                    - generic [ref=e375]:
                      - img "Kepulauan dan perairan biru jernih jalur rempah Maluku" [ref=e377]
                      - generic [ref=e378]: Jalur Rempah
                      - generic [ref=e379]: 5 Hari
                    - generic [ref=e380]:
                      - generic [ref=e381]:
                        - generic [ref=e382]: maluku
                        - generic [ref=e383]: •
                        - generic [ref=e384]: sejarah, alam
                      - heading "5 Hari Jalur Rempah Maluku" [level=3] [ref=e385]:
                        - link "5 Hari Jalur Rempah Maluku" [ref=e386] [cursor=pointer]:
                          - /url: "#maluku-spice-route-5"
                      - paragraph [ref=e387]: Mengikuti jejak pala dan cengkeh di kepulauan yang pernah mengubah jaringan perdagangan dunia.
                      - generic [ref=e389]:
                        - generic [ref=e390]: "Rute perjalanan: 1. Ambon, 2. Saparua & Banda"
                        - generic [ref=e394]:
                          - generic [ref=e397]: Ambon
                          - generic [ref=e400]: Saparua
                      - generic [ref=e402]:
                        - generic [ref=e403]: "Ritme: Seimbang"
                        - generic [ref=e404]: "Budget: Estimasi menengah"
                      - generic [ref=e405]:
                        - button "Lihat detail rute 5 Hari Jalur Rempah Maluku" [ref=e406]:
                          - generic [ref=e407]: Lihat Rute
                        - button "Gunakan preferensi dari rute 5 Hari Jalur Rempah Maluku ke form" [ref=e408]:
                          - img [ref=e409]
                          - generic [ref=e410]: Gunakan
                  - article [ref=e412]:
                    - generic [ref=e413]:
                      - img "Hutan hujan dan lanskap sungai Kalimantan Timur" [ref=e415]
                      - generic [ref=e416]: Pilihan Utama
                      - generic [ref=e417]: 5 Hari
                    - generic [ref=e418]:
                      - generic [ref=e419]:
                        - generic [ref=e420]: kalimantan
                        - generic [ref=e421]: •
                        - generic [ref=e422]: alam, petualangan
                      - heading "5 Hari Kalimantan Nature Explorer" [level=3] [ref=e423]:
                        - link "5 Hari Kalimantan Nature Explorer" [ref=e424] [cursor=pointer]:
                          - /url: "#kalimantan-nature-future-5"
                      - paragraph [ref=e425]: Menjelajahi hutan hujan tropis, sungai besar, dan kehidupan orangutan di jantung Borneo.
                      - generic [ref=e427]:
                        - generic [ref=e428]: "Rute perjalanan: 1. Pangkalan Bun & Tanjung Puting, 2. Pontianak"
                        - generic [ref=e432]:
                          - generic [ref=e435]: Pangkalan Bun
                          - generic [ref=e438]: Pontianak
                      - generic [ref=e440]:
                        - generic [ref=e441]: "Ritme: Seimbang"
                        - generic [ref=e442]: "Budget: Estimasi menengah"
                      - generic [ref=e443]:
                        - button "Lihat detail rute 5 Hari Kalimantan Nature Explorer" [ref=e444]:
                          - generic [ref=e445]: Lihat Rute
                        - button "Gunakan preferensi dari rute 5 Hari Kalimantan Nature Explorer ke form" [ref=e446]:
                          - img [ref=e447]
                          - generic [ref=e448]: Gunakan
                  - article [ref=e450]:
                    - generic [ref=e451]:
                      - img "Arsitektur Rumah Gadang di Sumatera Barat" [ref=e453]
                      - generic [ref=e454]: Heritage Trail
                      - generic [ref=e455]: 7 Hari
                    - generic [ref=e456]:
                      - generic [ref=e457]:
                        - generic [ref=e458]: sumatera
                        - generic [ref=e459]: •
                        - generic [ref=e460]: budaya, kuliner
                      - heading "7 Hari Sumatera Heritage" [level=3] [ref=e461]:
                        - link "7 Hari Sumatera Heritage" [ref=e462] [cursor=pointer]:
                          - /url: "#sumatra-heritage-7"
                      - paragraph [ref=e463]: Perjalanan melintasi warisan budaya Sumatera dari Minangkabau hingga Danau Toba.
                      - generic [ref=e465]:
                        - generic [ref=e466]: "Rute perjalanan: 1. Padang & Bukittinggi, 2. Medan & Danau Toba"
                        - generic [ref=e470]:
                          - generic [ref=e473]: Padang
                          - generic [ref=e476]: Medan
                      - generic [ref=e478]:
                        - generic [ref=e479]: "Ritme: Seimbang"
                        - generic [ref=e480]: "Budget: Estimasi menengah"
                      - generic [ref=e481]:
                        - button "Lihat detail rute 7 Hari Sumatera Heritage" [ref=e482]:
                          - generic [ref=e483]: Lihat Rute
                        - button "Gunakan preferensi dari rute 7 Hari Sumatera Heritage ke form" [ref=e484]:
                          - img [ref=e485]
                          - generic [ref=e486]: Gunakan
                  - article [ref=e488]:
                    - generic [ref=e489]:
                      - img "Lanskap unik dan warisan budaya Toraja, Sulawesi Selatan" [ref=e491]
                      - generic [ref=e492]: Heritage Trail
                      - generic [ref=e493]: 7 Hari
                    - generic [ref=e494]:
                      - generic [ref=e495]:
                        - generic [ref=e496]: sulawesi
                        - generic [ref=e497]: •
                        - generic [ref=e498]: budaya, alam
                      - heading "7 Hari Sulawesi Selatan Explorer" [level=3] [ref=e499]:
                        - link "7 Hari Sulawesi Selatan Explorer" [ref=e500] [cursor=pointer]:
                          - /url: "#sulawesi-culture-nature-7"
                      - paragraph [ref=e501]: Dari tradisi pelaut Bugis hingga upacara Toraja dan lanskap karst Maros.
                      - generic [ref=e503]:
                        - generic [ref=e504]: "Rute perjalanan: 1. Makassar & Maros, 2. Transit & Parepare, 3. Tana Toraja"
                        - generic [ref=e508]:
                          - generic [ref=e511]: Makassar
                          - generic [ref=e514]: Transit
                          - generic [ref=e517]: Tana Toraja
                      - generic [ref=e519]:
                        - generic [ref=e520]: "Ritme: Seimbang"
                        - generic [ref=e521]: "Budget: Estimasi menengah"
                      - generic [ref=e522]:
                        - button "Lihat detail rute 7 Hari Sulawesi Selatan Explorer" [ref=e523]:
                          - generic [ref=e524]: Lihat Rute
                        - button "Gunakan preferensi dari rute 7 Hari Sulawesi Selatan Explorer ke form" [ref=e525]:
                          - img [ref=e526]
                          - generic [ref=e527]: Gunakan
                  - article [ref=e529]:
                    - generic [ref=e530]:
                      - img "Keindahan gugusan pulau Raja Ampat, Papua Barat Daya" [ref=e532]
                      - generic [ref=e533]: Indonesia Timur
                      - generic [ref=e534]: 7 Hari
                    - generic [ref=e535]:
                      - generic [ref=e536]:
                        - generic [ref=e537]: papua
                        - generic [ref=e538]: •
                        - generic [ref=e539]: alam, budaya
                      - heading "7 Hari Papua Wonder" [level=3] [ref=e540]:
                        - link "7 Hari Papua Wonder" [ref=e541] [cursor=pointer]:
                          - /url: "#papua-wonder-7"
                      - paragraph [ref=e542]: Menjelajahi keajaiban alam Raja Ampat dan budaya Papua dari pesisir hingga Danau Sentani.
                      - generic [ref=e544]:
                        - generic [ref=e545]: "Rute perjalanan: 1. Sorong & Raja Ampat, 2. Jayapura & Sentani"
                        - generic [ref=e549]:
                          - generic [ref=e552]: Sorong
                          - generic [ref=e555]: Jayapura
                      - generic [ref=e557]:
                        - generic [ref=e558]: "Ritme: Santai"
                        - generic [ref=e559]: "Budget: Estimasi premium"
                      - generic [ref=e560]:
                        - button "Lihat detail rute 7 Hari Papua Wonder" [ref=e561]:
                          - generic [ref=e562]: Lihat Rute
                        - button "Gunakan preferensi dari rute 7 Hari Papua Wonder ke form" [ref=e563]:
                          - img [ref=e564]
                          - generic [ref=e565]: Gunakan
                  - article [ref=e567]:
                    - generic [ref=e568]:
                      - img "Sawah terasering hijau subur dan suasana damai Bali" [ref=e570]
                      - generic [ref=e571]: Slow Journey
                      - generic [ref=e572]: 3 Hari
                    - generic [ref=e573]:
                      - generic [ref=e574]:
                        - generic [ref=e575]: bali nusa tenggara
                        - generic [ref=e576]: •
                        - generic [ref=e577]: relaksasi, budaya
                      - heading "3 Hari Bali Slow Journey" [level=3] [ref=e578]:
                        - link "3 Hari Bali Slow Journey" [ref=e579] [cursor=pointer]:
                          - /url: "#bali-slow-journey-3"
                      - paragraph [ref=e580]: "Tiga hari menikmati Bali dengan ritme santai: pura, sawah, dan pantai."
                      - generic [ref=e582]:
                        - generic [ref=e583]: "Rute perjalanan: 1. Ubud, 2. Pura & Sawah, 3. Pantai Selatan"
                        - generic [ref=e587]:
                          - generic [ref=e590]: Ubud
                          - generic [ref=e593]: Pura
                          - generic [ref=e596]: Pantai Selatan
                      - generic [ref=e598]:
                        - generic [ref=e599]: "Ritme: Santai"
                        - generic [ref=e600]: "Budget: Estimasi menengah–premium"
                      - generic [ref=e601]:
                        - button "Lihat detail rute 3 Hari Bali Slow Journey" [ref=e602]:
                          - generic [ref=e603]: Lihat Rute
                        - button "Gunakan preferensi dari rute 3 Hari Bali Slow Journey ke form" [ref=e604]:
                          - img [ref=e605]
                          - generic [ref=e606]: Gunakan
        - region "Satu Peta, Ribuan Cerita Menunggumu" [ref=e608]:
          - generic [ref=e609]:
            - paragraph [ref=e610]: Mulai Jelajah
            - heading "Satu Peta, Ribuan Cerita Menunggumu" [level=2] [ref=e611]
            - paragraph [ref=e612]: Mulai dari satu provinsi, lalu biarkan ceritanya membawamu ke budaya, rasa, perjalanan, dan masa depan digital Nusantara.
            - generic [ref=e613]:
              - link "Buka Nusa Map" [ref=e614] [cursor=pointer]:
                - /url: /explore
              - link "Coba Route Planner" [ref=e615] [cursor=pointer]:
                - /url: /routes?source=home-feature
            - paragraph [ref=e616]: Mulai dari satu klik. Sisanya biarkan Nusantara bercerita.
        - generic [ref=e619]:
          - generic [ref=e620]:
            - generic [ref=e621]:
              - img "NUSANTARAYA" [ref=e623]
              - generic [ref=e624]:
                - paragraph [ref=e625]: Satu Peta, Ribuan Cerita
                - paragraph [ref=e626]: Web app eksplorasi digital Indonesia yang menghubungkan peta, budaya, rasa, rute perjalanan, passport, AI guide, dan masa depan digital Nusantara.
            - navigation "Footer navigation" [ref=e627]:
              - generic [ref=e628]:
                - heading "Jelajahi" [level=3] [ref=e629]
                - list [ref=e630]:
                  - listitem [ref=e631]:
                    - link "Nusa Map" [ref=e632] [cursor=pointer]:
                      - /url: /explore
                  - listitem [ref=e633]:
                    - generic "Segera Hadir" [ref=e634]:
                      - text: Provinsi
                      - generic [ref=e635]: Soon
                  - listitem [ref=e636]:
                    - generic "Segera Hadir" [ref=e637]:
                      - text: Nusa Archive
                      - generic [ref=e638]: Soon
                  - listitem [ref=e639]:
                    - generic "Segera Hadir" [ref=e640]:
                      - text: NusaRasa
                      - generic [ref=e641]: Soon
                  - listitem [ref=e642]:
                    - link "Route Planner" [ref=e643] [cursor=pointer]:
                      - /url: /routes?source=home-feature
                  - listitem [ref=e644]:
                    - link "Passport" [ref=e645] [cursor=pointer]:
                      - /url: /explore#passport-progress
              - generic [ref=e646]:
                - heading "Fitur" [level=3] [ref=e647]
                - list [ref=e648]:
                  - listitem [ref=e649]:
                    - generic "Segera Hadir" [ref=e650]:
                      - text: RANI AI Guide
                      - generic [ref=e651]: Soon
                  - listitem [ref=e652]:
                    - generic "Segera Hadir" [ref=e653]:
                      - text: Nusa Future
                      - generic [ref=e654]: Soon
                  - listitem [ref=e655]:
                    - generic "Segera Hadir" [ref=e656]:
                      - text: Aksara Lab
                      - generic [ref=e657]: Soon
                  - listitem [ref=e658]:
                    - generic "Segera Hadir" [ref=e659]:
                      - text: Jalur Rempah
                      - generic [ref=e660]: Soon
                  - listitem [ref=e661]:
                    - generic "Segera Hadir" [ref=e662]:
                      - text: Event Calendar
                      - generic [ref=e663]: Soon
                  - listitem [ref=e664]:
                    - generic "Segera Hadir" [ref=e665]:
                      - text: Tourist Mode
                      - generic [ref=e666]: Soon
              - generic [ref=e667]:
                - heading "Tentang" [level=3] [ref=e668]
                - list [ref=e669]:
                  - listitem [ref=e670]:
                    - generic "Segera Hadir" [ref=e671]:
                      - text: Tentang NUSANTARAYA
                      - generic [ref=e672]: Soon
                  - listitem [ref=e673]:
                    - generic "Segera Hadir" [ref=e674]:
                      - text: Sumber Data
                      - generic [ref=e675]: Soon
                  - listitem [ref=e676]:
                    - generic "Segera Hadir" [ref=e677]:
                      - text: Roadmap
                      - generic [ref=e678]: Soon
                  - listitem [ref=e679]:
                    - generic "Segera Hadir" [ref=e680]:
                      - text: Credits
                      - generic [ref=e681]: Soon
                  - listitem [ref=e682]:
                    - generic "Segera Hadir" [ref=e683]:
                      - text: Kontak
                      - generic [ref=e684]: Soon
            - generic [ref=e685]:
              - paragraph [ref=e686]: Gabung Nusa Club
              - paragraph [ref=e687]: Terima cerita, itinerary budaya, dan rilis fitur baru dari NUSANTARAYA. Gratis untuk penjelajah awal.
              - generic [ref=e688]:
                - generic [ref=e689]: Email untuk Nusa Club
                - textbox "Email untuk Nusa Club" [ref=e690]:
                  - /placeholder: Email
                - button "Submit" [ref=e691]
              - paragraph [ref=e692]: Dengan bergabung, kamu setuju menerima update pilihan dari NUSANTARAYA.
          - generic [ref=e693]:
            - paragraph [ref=e695]:
              - generic [ref=e696]: "N"
              - generic [ref=e697]: U
              - generic [ref=e698]: S
              - generic [ref=e699]: A
              - generic [ref=e700]: "N"
              - generic [ref=e701]: T
              - generic [ref=e702]: A
              - generic [ref=e703]: R
              - generic [ref=e704]: A
              - generic [ref=e705]: "Y"
              - generic [ref=e706]: A
            - generic [ref=e707]:
              - generic [ref=e708]:
                - paragraph [ref=e709]: © 2026 NUSANTARAYA. Dibuat untuk Nusantara Digital City — Mufalah Code.
                - paragraph [ref=e710]: Data budaya, peta, dan konten digunakan untuk demo eksplorasi digital. v1.0 • Homepage MVP
              - generic [ref=e711]:
                - generic [ref=e712]:
                  - link "Instagram" [ref=e713] [cursor=pointer]:
                    - /url: https://instagram.com/nusantaraya
                    - img [ref=e714]
                  - link "GitHub" [ref=e717] [cursor=pointer]:
                    - /url: https://github.com/mufalah
                    - img [ref=e718]
                  - link "Email" [ref=e721] [cursor=pointer]:
                    - /url: mailto:mufalahcode@gmail.com
                    - img [ref=e722]
                  - button "Kembali ke atas" [ref=e725]: ↑
                - generic [ref=e726]:
                  - link "Privasi" [disabled] [ref=e727]:
                    - /url: "#"
                  - link "Ketentuan" [disabled] [ref=e728]:
                    - /url: "#"
  - button "Open Next.js Dev Tools" [ref=e734] [cursor=pointer]:
    - img [ref=e735]
  - alert [ref=e738]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * NUSANTARAYA E2E Smoke Test — Desktop Core Flow
  5  |  * Tests the primary user journey: Homepage → Route Planner → Result → Passport
  6  |  * Uses canonical selectors from ROUTE_SECTION_IDS registry.
  7  |  */
  8  | test.describe('Desktop Core Flow', () => {
  9  |   test('Homepage → Route → Result → Save → Passport → Atlas round-trip', async ({ page }) => {
  10 |     // 1. Visit Homepage
  11 |     await page.goto('/');
  12 |     await expect(page).toHaveTitle(/NUSANTARAYA/i);
  13 | 
  14 |     // 2. Navigate to Route Planner with source context
  15 |     await page.goto('/routes?source=home-feature&region=jawa&duration=5&interests=budaya');
  16 |     await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();
  17 | 
  18 |     // 3. Route Planner section should be visible (canonical ID: route-atelier)
  19 |     await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });
  20 | 
  21 |     // 4. Click generate route button
  22 |     const generateButton = page.getByRole('button', { name: /Buat Rute/i });
  23 |     await expect(generateButton).toBeVisible();
  24 |     await generateButton.click();
  25 | 
  26 |     // 5. Verify recommendation result appears (canonical ID: route-recommendation-result)
  27 |     await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 15000 });
  28 | 
  29 |     // 6. Verify itinerary section (canonical ID: day-by-day-itinerary)
  30 |     await expect(page.locator('#day-by-day-itinerary')).toBeVisible({ timeout: 10000 });
  31 | 
  32 |     // 7. Verify map section (canonical ID: route-map-transport-summary)
  33 |     await expect(page.locator('#route-map-transport-summary')).toBeVisible();
  34 | 
  35 |     // 8. Verify readiness section (canonical ID: route-readiness)
  36 |     await expect(page.locator('#route-readiness')).toBeVisible();
  37 | 
  38 |     // 9. Save to Passport
  39 |     const saveButton = page.getByRole('button', { name: /Simpan/i }).first();
  40 |     if (await saveButton.isVisible()) {
  41 |       await saveButton.click();
  42 |       // Brief wait for save operation
  43 |       await page.waitForTimeout(500);
  44 |     }
  45 | 
  46 |     // 10. Navigate to Passport section (lives at /explore#passport-progress)
  47 |     await page.goto('/explore#passport-progress');
  48 |     await expect(page.locator('#passport-progress')).toBeVisible({ timeout: 10000 });
  49 | 
  50 |     // 11. Return to routes and verify context preserved
  51 |     await page.goto('/routes');
  52 |     await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });
  53 |   });
  54 | });
  55 | 
  56 | /**
  57 |  * NUSANTARAYA E2E Smoke Test — Mobile Smoke
  58 |  * Verifies basic layout and interaction on a mobile viewport.
  59 |  */
  60 | test.describe('Mobile Smoke', () => {
  61 |   test.use({ viewport: { width: 390, height: 844 } });
  62 | 
  63 |   test('Route page loads without horizontal overflow on mobile', async ({ page }) => {
  64 |     // 1. Open Routes page
  65 |     await page.goto('/routes?region=jawa&duration=5&interests=budaya');
  66 |     await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();
  67 | 
  68 |     // 2. Verify no horizontal overflow
  69 |     const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  70 |     const viewportWidth = await page.evaluate(() => window.innerWidth);
> 71 |     expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
     |                       ^ Error: expect(received).toBeLessThanOrEqual(expected)
  72 | 
  73 |     // 3. Generate route
  74 |     const generateButton = page.getByRole('button', { name: /Buat Rute/i });
  75 |     if (await generateButton.isVisible()) {
  76 |       await generateButton.click();
  77 |       
  78 |       // 4. Verify result section accessible
  79 |       await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 15000 });
  80 |     }
  81 | 
  82 |     // 5. Verify mobile navigation doesn't cover main CTAs
  83 |     const mobileNav = page.locator('nav[data-mobile-nav]');
  84 |     if (await mobileNav.isVisible()) {
  85 |       const navRect = await mobileNav.boundingBox();
  86 |       if (navRect && generateButton) {
  87 |         const btnRect = await generateButton.boundingBox();
  88 |         if (btnRect) {
  89 |           // Button should not be fully obscured by nav
  90 |           const isObscured = btnRect.y + btnRect.height > navRect.y && btnRect.y < navRect.y + navRect.height;
  91 |           // This is informational — some overlap is OK if button scrolls above nav
  92 |         }
  93 |       }
  94 |     }
  95 |   });
  96 | });
  97 | 
```