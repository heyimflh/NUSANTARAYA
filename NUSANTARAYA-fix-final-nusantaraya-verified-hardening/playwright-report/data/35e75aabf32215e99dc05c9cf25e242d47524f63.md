# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Mobile Smoke >> Route page loads without horizontal overflow on mobile
- Location: e2e\smoke.spec.ts:66:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/routes?region=jawa&duration=5&interests=budaya", waiting until "load"

```

# Page snapshot

```yaml
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
          - paragraph [ref=e24]: Susun rute perjalanan impianmu. Temukan destinasi tersembunyi, estimasi waktu, dan buat pengalaman wisata yang tak terlupakan di seluruh Nusantara.
          - generic [ref=e25]:
            - link "Buat Rute" [ref=e26] [cursor=pointer]:
              - /url: "#route-atelier"
              - text: Buat Rute
              - img [ref=e27]
            - link "Inspirasi Rute" [ref=e29] [cursor=pointer]:
              - /url: "#preset-routes"
              - img [ref=e31]
              - text: Inspirasi Rute
        - generic [ref=e33]:
          - generic [ref=e34]: Scroll untuk merencanakan
          - img [ref=e36]
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - generic [ref=e44]: Nusa Route Planner
            - heading "Buat rute yang menyesuaikan waktu, minat, dan ritmemu." [level=1] [ref=e45]
            - paragraph [ref=e46]: Jawab beberapa pertanyaan singkat. Kami akan menyusun urutan destinasi, pembagian hari, dan catatan perjalanan.
          - generic [ref=e47]:
            - generic [ref=e48]:
              - img [ref=e49]
              - generic [ref=e52]: Selesai sekitar 1 menit
            - list [ref=e53]:
              - listitem [ref=e54]: Urutan destinasi
              - listitem [ref=e55]: Itinerary harian
              - listitem [ref=e56]: Catatan perjalanan
        - generic [ref=e57]:
          - navigation "Progress" [ref=e58]:
            - list [ref=e59]:
              - listitem [ref=e60]:
                - button "1 Rencana dasar Sedang Diisi" [ref=e61]:
                  - generic [ref=e64]: "1"
                  - generic [ref=e65]:
                    - generic [ref=e66]: Rencana dasar
                    - generic [ref=e67]: Sedang Diisi
              - listitem [ref=e68]
              - listitem [ref=e69]:
                - button "2 Preferensi" [disabled] [ref=e70]:
                  - generic [ref=e73]: "2"
                  - generic [ref=e75]: Preferensi
              - listitem [ref=e76]
              - listitem [ref=e77]:
                - button "3 Tinjau" [disabled] [ref=e78]:
                  - generic [ref=e81]: "3"
                  - generic [ref=e83]: Tinjau
          - generic [ref=e85]:
            - generic [ref=e87]:
              - generic [ref=e88]: "Langkah 1 dari 3: Rencana dasar"
              - group "Berapa lama perjalananmu?" [ref=e89]:
                - generic [ref=e90]: Berapa lama perjalananmu?
                - radiogroup "Pilih durasi perjalanan" [ref=e91]:
                  - radio "3 Hari Jelajah singkat" [ref=e92]:
                    - generic [ref=e93]:
                      - generic [ref=e95]:
                        - generic [ref=e96]: "3"
                        - generic [ref=e97]: Hari
                      - generic [ref=e99]: Jelajah singkat
                  - radio "5 Hari Ritme paling seimbang" [checked] [ref=e100]:
                    - generic [ref=e101]:
                      - generic [ref=e102]:
                        - generic [ref=e103]:
                          - generic [ref=e104]: "5"
                          - generic [ref=e105]: Hari
                        - img [ref=e107]
                      - generic [ref=e109]: Ritme paling seimbang
                  - radio "7 Hari Eksplorasi lebih mendalam" [ref=e110]:
                    - generic [ref=e111]:
                      - generic [ref=e113]:
                        - generic [ref=e114]: "7"
                        - generic [ref=e115]: Hari
                      - generic [ref=e117]: Eksplorasi lebih mendalam
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Kamu berangkat dari mana?
                  - generic [ref=e121]: Opsional. Ini membantu kami memilih titik masuk dan urutan destinasi yang lebih masuk akal.
                - generic [ref=e123]:
                  - combobox "Kamu berangkat dari mana?" [ref=e128]
                  - button "Buka daftar provinsi" [ref=e130]:
                    - img [ref=e131]
              - group "Wilayah mana yang ingin kamu jelajahi?" [ref=e133]:
                - generic [ref=e134]: Wilayah mana yang ingin kamu jelajahi?
                - radiogroup "Pilih wilayah" [ref=e135]:
                  - radio "Sumatera Aceh · Sumatera Barat · Lampung Tradisi, rasa, jalur maritim" [ref=e136]:
                    - generic [ref=e137]:
                      - generic [ref=e139]: Sumatera
                      - generic [ref=e141]: Aceh · Sumatera Barat · Lampung
                    - generic [ref=e142]: Tradisi, rasa, jalur maritim
                  - radio "Jawa Yogyakarta · Jawa Tengah · Jawa Timur Warisan, kota kreatif, kuliner, sejarah" [ref=e143]:
                    - generic [ref=e144]:
                      - generic [ref=e146]: Jawa
                      - generic [ref=e148]: Yogyakarta · Jawa Tengah · Jawa Timur
                    - generic [ref=e149]: Warisan, kota kreatif, kuliner, sejarah
                  - radio "Kalimantan Kalimantan Barat · Kalimantan Timur Hutan, sungai, komunitas, masa depan" [ref=e150]:
                    - generic [ref=e151]:
                      - generic [ref=e153]: Kalimantan
                      - generic [ref=e155]: Kalimantan Barat · Kalimantan Timur
                    - generic [ref=e156]: Hutan, sungai, komunitas, masa depan
                  - radio "Sulawesi Sulawesi Selatan · Sulawesi Utara Laut, aksara, pegunungan, pelaut" [ref=e157]:
                    - generic [ref=e158]:
                      - generic [ref=e160]: Sulawesi
                      - generic [ref=e162]: Sulawesi Selatan · Sulawesi Utara
                    - generic [ref=e163]: Laut, aksara, pegunungan, pelaut
                  - radio "Bali–Nusa Tenggara Bali · NTB · NTT Tradisi hidup, pulau, lanskap kontras" [ref=e164]:
                    - generic [ref=e165]:
                      - generic [ref=e167]: Bali–Nusa Tenggara
                      - generic [ref=e169]: Bali · NTB · NTT
                    - generic [ref=e170]: Tradisi hidup, pulau, lanskap kontras
                  - radio "Maluku Maluku · Maluku Utara Rempah, sejarah, kepulauan" [ref=e171]:
                    - generic [ref=e172]:
                      - generic [ref=e174]: Maluku
                      - generic [ref=e176]: Maluku · Maluku Utara
                    - generic [ref=e177]: Rempah, sejarah, kepulauan
                  - radio "Papua Papua · Papua Barat Daya Biodiversitas, komunitas, lanskap luas" [ref=e178]:
                    - generic [ref=e179]:
                      - generic [ref=e181]: Papua
                      - generic [ref=e183]: Papua · Papua Barat Daya
                    - generic [ref=e184]: Biodiversitas, komunitas, lanskap luas
            - generic [ref=e187]:
              - generic [ref=e191]: Langkah 1 dari 3
              - generic [ref=e192]:
                - alert [ref=e193]: Lengkapi wilayah tujuan untuk melanjutkan.
                - button "Lanjut" [disabled] [ref=e194]:
                  - text: Lanjut
                  - img [ref=e195]
          - generic [ref=e198]:
            - generic [ref=e199]:
              - heading "Preview rute" [level=3] [ref=e200]
              - generic [ref=e201]: Diperbarui otomatis
            - generic [ref=e203]:
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - generic [ref=e206]: "05"
                  - generic [ref=e207]: Hari
                - generic [ref=e210]:
                  - generic [ref=e213]:
                    - generic [ref=e214]: Asal Keberangkatan
                    - generic [ref=e215]: Belum dipilih
                  - generic [ref=e219]: Wilayah Tujuan
              - generic [ref=e221]:
                - heading "PERKIRAAN STRUKTUR" [level=4] [ref=e222]
                - list [ref=e223]:
                  - listitem [ref=e224]: 02–03 area utama
                  - listitem [ref=e226]: 2–3 aktivitas per hari
                  - listitem [ref=e228]: Menengah · Seimbang
            - generic [ref=e230]: Rute final dibuat setelah kamu meninjau semua pilihan.
        - region "Mulai dari perjalanan yang sudah kami pilihkan." [ref=e231]:
          - generic [ref=e232]:
            - generic [ref=e233]: Rute Terkurasi Nusantara
            - heading "Mulai dari perjalanan yang sudah kami pilihkan." [level=2] [ref=e234]
            - paragraph [ref=e235]: Jelajahi rute siap pakai berdasarkan wilayah, durasi, dan pengalaman. Buka detailnya sekarang atau gunakan preferensinya sebagai titik awal untuk rute versimu sendiri.
            - generic [ref=e236]:
              - img [ref=e237]
              - generic [ref=e240]: Dikurasi dari data lokal
              - generic [ref=e241]: ·
              - generic [ref=e242]: Dapat disesuaikan
              - generic [ref=e243]: ·
              - generic [ref=e244]: Tetap tersedia tanpa generator AI
          - generic [ref=e245]:
            - generic [ref=e246]: Menampilkan 10 rute terkurasi.
            - group "Filter berdasarkan koleksi" [ref=e247]:
              - generic [ref=e248]: Filter berdasarkan koleksi
              - button "Semua" [pressed] [ref=e249]
              - button "Untuk Pertama Kali" [ref=e250]
              - button "Heritage" [ref=e251]
              - button "Alam" [ref=e252]
              - button "Kuliner" [ref=e253]
              - button "Slow Travel" [ref=e254]
            - generic [ref=e255]:
              - group "Filter berdasarkan wilayah" [ref=e256]:
                - generic [ref=e257]: Filter berdasarkan wilayah
                - combobox [ref=e258] [cursor=pointer]:
                  - option "Semua Wilayah" [selected]
                  - option "Sumatera"
                  - option "Jawa"
                  - option "Kalimantan"
                  - option "Sulawesi"
                  - option "Bali Nusa Tenggara"
                  - option "Maluku"
                  - option "Papua"
              - group "Filter berdasarkan durasi" [ref=e259]:
                - generic [ref=e260]: Filter berdasarkan durasi
                - combobox [ref=e261] [cursor=pointer]:
                  - option "Semua Durasi" [selected]
                  - option "3 Hari"
                  - option "5 Hari"
                  - option "7 Hari"
              - group "Filter berdasarkan minat" [ref=e262]:
                - generic [ref=e263]: Filter berdasarkan minat
                - combobox [ref=e264] [cursor=pointer]:
                  - option "Semua Minat" [selected]
                  - option "Budaya"
                  - option "Alam"
                  - option "Kuliner"
                  - option "Sejarah"
                  - option "Petualangan"
                  - option "Relaksasi"
                  - option "Hidden Gems"
                  - option "Kota Kreatif"
            - generic [ref=e266]: 10 rute ditemukan
          - generic [ref=e267]:
            - article [ref=e270]:
              - img "Suasana budaya dan pasar tradisional di Jawa Tengah" [ref=e272]
              - generic [ref=e274]:
                - generic [ref=e275]:
                  - generic [ref=e276]: jawa
                  - generic [ref=e277]: •
                  - generic [ref=e278]: 5 Hari
                  - generic [ref=e279]: •
                  - generic [ref=e280]: budaya, kuliner
                - heading "5 Hari Budaya & Kuliner Jawa" [level=3] [ref=e281]:
                  - link "5 Hari Budaya & Kuliner Jawa" [ref=e282] [cursor=pointer]:
                    - /url: "#jawa-budaya-kuliner-5"
                - paragraph [ref=e283]: Menjelajahi warisan budaya Jawa dari keraton hingga pasar tradisional, dengan wisata kuliner autentik di setiap kota.
                - generic [ref=e285]:
                  - generic [ref=e286]: "Rute perjalanan: 1. Yogyakarta, 2. Solo, 3. Surabaya & Malang"
                  - generic [ref=e290]:
                    - generic [ref=e293]: Yogyakarta
                    - generic [ref=e296]: Solo
                    - generic [ref=e299]: Surabaya
                - generic [ref=e301]:
                  - generic [ref=e302]:
                    - generic [ref=e303]: "Ritme:"
                    - text: Seimbang
                  - generic [ref=e304]:
                    - generic [ref=e305]: "Budget:"
                    - text: Estimasi menengah
                - generic [ref=e306]:
                  - button "Lihat detail rute 5 Hari Budaya & Kuliner Jawa" [ref=e307]:
                    - generic [ref=e308]: Lihat Rute
                    - img [ref=e309]
                  - button "Gunakan preferensi dari rute 5 Hari Budaya & Kuliner Jawa ke form" [ref=e311]:
                    - img [ref=e312]
                    - generic [ref=e313]: Gunakan Preferensi Ini
            - generic [ref=e314]:
              - generic [ref=e316]:
                - heading "Eksplorasi Rute Lainnya" [level=4] [ref=e317]
                - paragraph [ref=e318]: Geser untuk melihat inspirasi perjalanan tambahan.
              - generic [ref=e319]:
                - article [ref=e321]:
                  - generic [ref=e322]:
                    - img "Pemandangan Gunung Bromo dan bentang alam Jawa Timur" [ref=e324]
                    - generic [ref=e325]: Heritage Trail
                    - generic [ref=e326]: 7 Hari
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]: jawa
                      - generic [ref=e330]: •
                      - generic [ref=e331]: budaya, sejarah
                    - heading "7 Hari Jawa–Bali Heritage" [level=3] [ref=e332]:
                      - link "7 Hari Jawa–Bali Heritage" [ref=e333] [cursor=pointer]:
                        - /url: "#jawa-bali-heritage-7"
                    - paragraph [ref=e334]: Perjalanan warisan budaya dari jantung Jawa menuju tradisi hidup di Bali.
                    - generic [ref=e336]:
                      - generic [ref=e337]: "Rute perjalanan: 1. Yogyakarta, 2. Solo, 3. Transit, 4. Ubud & Denpasar"
                      - generic [ref=e341]:
                        - generic [ref=e344]: Yogyakarta
                        - generic [ref=e347]: Solo
                        - generic [ref=e350]: Transit
                        - generic [ref=e353]: Ubud
                    - generic [ref=e355]:
                      - generic [ref=e356]: "Ritme: Seimbang"
                      - generic [ref=e357]: "Budget: Estimasi menengah–premium"
                    - generic [ref=e358]:
                      - button "Lihat detail rute 7 Hari Jawa–Bali Heritage" [ref=e359]:
                        - generic [ref=e360]: Lihat Rute
                      - button "Gunakan preferensi dari rute 7 Hari Jawa–Bali Heritage ke form" [ref=e361]:
                        - img [ref=e362]
                        - generic [ref=e363]: Gunakan
                - article [ref=e365]:
                  - generic [ref=e366]:
                    - img "Kepulauan dan perairan biru jernih jalur rempah Maluku" [ref=e368]
                    - generic [ref=e369]: Jalur Rempah
                    - generic [ref=e370]: 5 Hari
                  - generic [ref=e371]:
                    - generic [ref=e372]:
                      - generic [ref=e373]: maluku
                      - generic [ref=e374]: •
                      - generic [ref=e375]: sejarah, alam
                    - heading "5 Hari Jalur Rempah Maluku" [level=3] [ref=e376]:
                      - link "5 Hari Jalur Rempah Maluku" [ref=e377] [cursor=pointer]:
                        - /url: "#maluku-spice-route-5"
                    - paragraph [ref=e378]: Mengikuti jejak pala dan cengkeh di kepulauan yang pernah mengubah jaringan perdagangan dunia.
                    - generic [ref=e380]:
                      - generic [ref=e381]: "Rute perjalanan: 1. Ambon, 2. Saparua & Banda"
                      - generic [ref=e385]:
                        - generic [ref=e388]: Ambon
                        - generic [ref=e391]: Saparua
                    - generic [ref=e393]:
                      - generic [ref=e394]: "Ritme: Seimbang"
                      - generic [ref=e395]: "Budget: Estimasi menengah"
                    - generic [ref=e396]:
                      - button "Lihat detail rute 5 Hari Jalur Rempah Maluku" [ref=e397]:
                        - generic [ref=e398]: Lihat Rute
                      - button "Gunakan preferensi dari rute 5 Hari Jalur Rempah Maluku ke form" [ref=e399]:
                        - img [ref=e400]
                        - generic [ref=e401]: Gunakan
                - article [ref=e403]:
                  - generic [ref=e404]:
                    - img "Arsitektur Rumah Gadang di Sumatera Barat" [ref=e406]
                    - generic [ref=e407]: Heritage Trail
                    - generic [ref=e408]: 7 Hari
                  - generic [ref=e409]:
                    - generic [ref=e410]:
                      - generic [ref=e411]: sumatera
                      - generic [ref=e412]: •
                      - generic [ref=e413]: budaya, kuliner
                    - heading "7 Hari Sumatera Heritage" [level=3] [ref=e414]:
                      - link "7 Hari Sumatera Heritage" [ref=e415] [cursor=pointer]:
                        - /url: "#sumatra-heritage-7"
                    - paragraph [ref=e416]: Perjalanan melintasi warisan budaya Sumatera dari Minangkabau hingga Danau Toba.
                    - generic [ref=e418]:
                      - generic [ref=e419]: "Rute perjalanan: 1. Padang & Bukittinggi, 2. Medan & Danau Toba"
                      - generic [ref=e423]:
                        - generic [ref=e426]: Padang
                        - generic [ref=e429]: Medan
                    - generic [ref=e431]:
                      - generic [ref=e432]: "Ritme: Seimbang"
                      - generic [ref=e433]: "Budget: Estimasi menengah"
                    - generic [ref=e434]:
                      - button "Lihat detail rute 7 Hari Sumatera Heritage" [ref=e435]:
                        - generic [ref=e436]: Lihat Rute
                      - button "Gunakan preferensi dari rute 7 Hari Sumatera Heritage ke form" [ref=e437]:
                        - img [ref=e438]
                        - generic [ref=e439]: Gunakan
                - article [ref=e441]:
                  - generic [ref=e442]:
                    - img "Hutan hujan dan lanskap sungai Kalimantan Timur" [ref=e444]
                    - generic [ref=e445]: Pilihan Utama
                    - generic [ref=e446]: 5 Hari
                  - generic [ref=e447]:
                    - generic [ref=e448]:
                      - generic [ref=e449]: kalimantan
                      - generic [ref=e450]: •
                      - generic [ref=e451]: alam, petualangan
                    - heading "5 Hari Kalimantan Nature Explorer" [level=3] [ref=e452]:
                      - link "5 Hari Kalimantan Nature Explorer" [ref=e453] [cursor=pointer]:
                        - /url: "#kalimantan-nature-future-5"
                    - paragraph [ref=e454]: Menjelajahi hutan hujan tropis, sungai besar, dan kehidupan orangutan di jantung Borneo.
                    - generic [ref=e456]:
                      - generic [ref=e457]: "Rute perjalanan: 1. Pangkalan Bun & Tanjung Puting, 2. Pontianak"
                      - generic [ref=e461]:
                        - generic [ref=e464]: Pangkalan Bun
                        - generic [ref=e467]: Pontianak
                    - generic [ref=e469]:
                      - generic [ref=e470]: "Ritme: Seimbang"
                      - generic [ref=e471]: "Budget: Estimasi menengah"
                    - generic [ref=e472]:
                      - button "Lihat detail rute 5 Hari Kalimantan Nature Explorer" [ref=e473]:
                        - generic [ref=e474]: Lihat Rute
                      - button "Gunakan preferensi dari rute 5 Hari Kalimantan Nature Explorer ke form" [ref=e475]:
                        - img [ref=e476]
                        - generic [ref=e477]: Gunakan
                - article [ref=e479]:
                  - generic [ref=e480]:
                    - img "Lanskap unik dan warisan budaya Toraja, Sulawesi Selatan" [ref=e482]
                    - generic [ref=e483]: Heritage Trail
                    - generic [ref=e484]: 7 Hari
                  - generic [ref=e485]:
                    - generic [ref=e486]:
                      - generic [ref=e487]: sulawesi
                      - generic [ref=e488]: •
                      - generic [ref=e489]: budaya, alam
                    - heading "7 Hari Sulawesi Selatan Explorer" [level=3] [ref=e490]:
                      - link "7 Hari Sulawesi Selatan Explorer" [ref=e491] [cursor=pointer]:
                        - /url: "#sulawesi-culture-nature-7"
                    - paragraph [ref=e492]: Dari tradisi pelaut Bugis hingga upacara Toraja dan lanskap karst Maros.
                    - generic [ref=e494]:
                      - generic [ref=e495]: "Rute perjalanan: 1. Makassar & Maros, 2. Transit & Parepare, 3. Tana Toraja"
                      - generic [ref=e499]:
                        - generic [ref=e502]: Makassar
                        - generic [ref=e505]: Transit
                        - generic [ref=e508]: Tana Toraja
                    - generic [ref=e510]:
                      - generic [ref=e511]: "Ritme: Seimbang"
                      - generic [ref=e512]: "Budget: Estimasi menengah"
                    - generic [ref=e513]:
                      - button "Lihat detail rute 7 Hari Sulawesi Selatan Explorer" [ref=e514]:
                        - generic [ref=e515]: Lihat Rute
                      - button "Gunakan preferensi dari rute 7 Hari Sulawesi Selatan Explorer ke form" [ref=e516]:
                        - img [ref=e517]
                        - generic [ref=e518]: Gunakan
                - article [ref=e520]:
                  - generic [ref=e521]:
                    - img "Keindahan gugusan pulau Raja Ampat, Papua Barat Daya" [ref=e523]
                    - generic [ref=e524]: Indonesia Timur
                    - generic [ref=e525]: 7 Hari
                  - generic [ref=e526]:
                    - generic [ref=e527]:
                      - generic [ref=e528]: papua
                      - generic [ref=e529]: •
                      - generic [ref=e530]: alam, budaya
                    - heading "7 Hari Papua Wonder" [level=3] [ref=e531]:
                      - link "7 Hari Papua Wonder" [ref=e532] [cursor=pointer]:
                        - /url: "#papua-wonder-7"
                    - paragraph [ref=e533]: Menjelajahi keajaiban alam Raja Ampat dan budaya Papua dari pesisir hingga Danau Sentani.
                    - generic [ref=e535]:
                      - generic [ref=e536]: "Rute perjalanan: 1. Sorong & Raja Ampat, 2. Jayapura & Sentani"
                      - generic [ref=e540]:
                        - generic [ref=e543]: Sorong
                        - generic [ref=e546]: Jayapura
                    - generic [ref=e548]:
                      - generic [ref=e549]: "Ritme: Santai"
                      - generic [ref=e550]: "Budget: Estimasi premium"
                    - generic [ref=e551]:
                      - button "Lihat detail rute 7 Hari Papua Wonder" [ref=e552]:
                        - generic [ref=e553]: Lihat Rute
                      - button "Gunakan preferensi dari rute 7 Hari Papua Wonder ke form" [ref=e554]:
                        - img [ref=e555]
                        - generic [ref=e556]: Gunakan
                - article [ref=e558]:
                  - generic [ref=e559]:
                    - img "Pantai berpasir putih dan lautan biru di Lombok, Nusa Tenggara Barat" [ref=e561]
                    - generic [ref=e562]: Cocok untuk Pertama Kali
                    - generic [ref=e563]: 5 Hari
                  - generic [ref=e564]:
                    - generic [ref=e565]:
                      - generic [ref=e566]: bali nusa tenggara
                      - generic [ref=e567]: •
                      - generic [ref=e568]: alam, budaya
                    - heading "5 Hari Bali–Lombok" [level=3] [ref=e569]:
                      - link "5 Hari Bali–Lombok" [ref=e570] [cursor=pointer]:
                        - /url: "#bali-nusa-tenggara-5"
                    - paragraph [ref=e571]: Dari tradisi hidup Bali menuju keindahan alam pesisir Lombok.
                    - generic [ref=e573]:
                      - generic [ref=e574]: "Rute perjalanan: 1. Ubud & Sanur, 2. Lombok & Gili"
                      - generic [ref=e578]:
                        - generic [ref=e581]: Ubud
                        - generic [ref=e584]: Lombok
                    - generic [ref=e586]:
                      - generic [ref=e587]: "Ritme: Seimbang"
                      - generic [ref=e588]: "Budget: Estimasi menengah"
                    - generic [ref=e589]:
                      - button "Lihat detail rute 5 Hari Bali–Lombok" [ref=e590]:
                        - generic [ref=e591]: Lihat Rute
                      - button "Gunakan preferensi dari rute 5 Hari Bali–Lombok ke form" [ref=e592]:
                        - img [ref=e593]
                        - generic [ref=e594]: Gunakan
                - article [ref=e596]:
                  - generic [ref=e597]:
                    - img "Kemegahan Candi Borobudur di Yogyakarta" [ref=e599]
                    - generic [ref=e600]: Cocok untuk Pertama Kali
                    - generic [ref=e601]: 3 Hari
                  - generic [ref=e602]:
                    - generic [ref=e603]:
                      - generic [ref=e604]: jawa
                      - generic [ref=e605]: •
                      - generic [ref=e606]: budaya, kuliner
                    - heading "3 Hari Yogyakarta & Candi Borobudur" [level=3] [ref=e607]:
                      - link "3 Hari Yogyakarta & Candi Borobudur" [ref=e608] [cursor=pointer]:
                        - /url: "#yogyakarta-cultural-escape-3"
                    - paragraph [ref=e609]: Menyelami warisan keraton, seni, dan kuliner Yogyakarta dipadukan kemegahan candi di Jawa Tengah.
                    - generic [ref=e611]:
                      - generic [ref=e612]: "Rute perjalanan: 1. Yogyakarta Kota, 2. Candi Area (Magelang), 3. Prambanan & Seni"
                      - generic [ref=e616]:
                        - generic [ref=e619]: Yogyakarta Kota
                        - generic [ref=e622]: Candi Area
                        - generic [ref=e625]: Prambanan
                    - generic [ref=e627]:
                      - generic [ref=e628]: "Ritme: Seimbang"
                      - generic [ref=e629]: "Budget: Estimasi hemat–menengah"
                    - generic [ref=e630]:
                      - button "Lihat detail rute 3 Hari Yogyakarta & Candi Borobudur" [ref=e631]:
                        - generic [ref=e632]: Lihat Rute
                      - button "Gunakan preferensi dari rute 3 Hari Yogyakarta & Candi Borobudur ke form" [ref=e633]:
                        - img [ref=e634]
                        - generic [ref=e635]: Gunakan
                - article [ref=e637]:
                  - generic [ref=e638]:
                    - img "Sawah terasering hijau subur dan suasana damai Bali" [ref=e640]
                    - generic [ref=e641]: Slow Journey
                    - generic [ref=e642]: 3 Hari
                  - generic [ref=e643]:
                    - generic [ref=e644]:
                      - generic [ref=e645]: bali nusa tenggara
                      - generic [ref=e646]: •
                      - generic [ref=e647]: relaksasi, budaya
                    - heading "3 Hari Bali Slow Journey" [level=3] [ref=e648]:
                      - link "3 Hari Bali Slow Journey" [ref=e649] [cursor=pointer]:
                        - /url: "#bali-slow-journey-3"
                    - paragraph [ref=e650]: "Tiga hari menikmati Bali dengan ritme santai: pura, sawah, dan pantai."
                    - generic [ref=e652]:
                      - generic [ref=e653]: "Rute perjalanan: 1. Ubud, 2. Pura & Sawah, 3. Pantai Selatan"
                      - generic [ref=e657]:
                        - generic [ref=e660]: Ubud
                        - generic [ref=e663]: Pura
                        - generic [ref=e666]: Pantai Selatan
                    - generic [ref=e668]:
                      - generic [ref=e669]: "Ritme: Santai"
                      - generic [ref=e670]: "Budget: Estimasi menengah–premium"
                    - generic [ref=e671]:
                      - button "Lihat detail rute 3 Hari Bali Slow Journey" [ref=e672]:
                        - generic [ref=e673]: Lihat Rute
                      - button "Gunakan preferensi dari rute 3 Hari Bali Slow Journey ke form" [ref=e674]:
                        - img [ref=e675]
                        - generic [ref=e676]: Gunakan
      - region "Satu Peta, Ribuan Cerita Menunggumu" [ref=e678]:
        - generic [ref=e679]:
          - paragraph [ref=e680]: Mulai Jelajah
          - heading "Satu Peta, Ribuan Cerita Menunggumu" [level=2] [ref=e681]
          - paragraph [ref=e682]: Mulai dari satu provinsi, lalu biarkan ceritanya membawamu ke budaya, rasa, perjalanan, dan masa depan digital Nusantara.
          - generic [ref=e683]:
            - link "Buka Nusa Map" [ref=e684] [cursor=pointer]:
              - /url: /explore
            - link "Coba Route Planner" [ref=e685] [cursor=pointer]:
              - /url: /routes?source=home-feature
          - paragraph [ref=e686]: Mulai dari satu klik. Sisanya biarkan Nusantara bercerita.
      - generic [ref=e689]:
        - generic [ref=e690]:
          - generic [ref=e691]:
            - img "NUSANTARAYA" [ref=e693]
            - generic [ref=e694]:
              - paragraph [ref=e695]: Satu Peta, Ribuan Cerita
              - paragraph [ref=e696]: Web app eksplorasi digital Indonesia yang menghubungkan peta, budaya, rasa, rute perjalanan, passport, AI guide, dan masa depan digital Nusantara.
          - navigation "Footer navigation" [ref=e697]:
            - generic [ref=e698]:
              - heading "Jelajahi" [level=3] [ref=e699]
              - list [ref=e700]:
                - listitem [ref=e701]:
                  - link "Nusa Map" [ref=e702] [cursor=pointer]:
                    - /url: /explore
                - listitem [ref=e703]:
                  - generic "Segera Hadir" [ref=e704]:
                    - text: Provinsi
                    - generic [ref=e705]: Soon
                - listitem [ref=e706]:
                  - generic "Segera Hadir" [ref=e707]:
                    - text: Nusa Archive
                    - generic [ref=e708]: Soon
                - listitem [ref=e709]:
                  - generic "Segera Hadir" [ref=e710]:
                    - text: NusaRasa
                    - generic [ref=e711]: Soon
                - listitem [ref=e712]:
                  - link "Route Planner" [ref=e713] [cursor=pointer]:
                    - /url: /routes?source=home-feature
                - listitem [ref=e714]:
                  - link "Passport" [ref=e715] [cursor=pointer]:
                    - /url: /explore#passport-progress
            - generic [ref=e716]:
              - heading "Fitur" [level=3] [ref=e717]
              - list [ref=e718]:
                - listitem [ref=e719]:
                  - generic "Segera Hadir" [ref=e720]:
                    - text: RANI AI Guide
                    - generic [ref=e721]: Soon
                - listitem [ref=e722]:
                  - generic "Segera Hadir" [ref=e723]:
                    - text: Nusa Future
                    - generic [ref=e724]: Soon
                - listitem [ref=e725]:
                  - generic "Segera Hadir" [ref=e726]:
                    - text: Aksara Lab
                    - generic [ref=e727]: Soon
                - listitem [ref=e728]:
                  - generic "Segera Hadir" [ref=e729]:
                    - text: Jalur Rempah
                    - generic [ref=e730]: Soon
                - listitem [ref=e731]:
                  - generic "Segera Hadir" [ref=e732]:
                    - text: Event Calendar
                    - generic [ref=e733]: Soon
                - listitem [ref=e734]:
                  - generic "Segera Hadir" [ref=e735]:
                    - text: Tourist Mode
                    - generic [ref=e736]: Soon
            - generic [ref=e737]:
              - heading "Tentang" [level=3] [ref=e738]
              - list [ref=e739]:
                - listitem [ref=e740]:
                  - generic "Segera Hadir" [ref=e741]:
                    - text: Tentang NUSANTARAYA
                    - generic [ref=e742]: Soon
                - listitem [ref=e743]:
                  - generic "Segera Hadir" [ref=e744]:
                    - text: Sumber Data
                    - generic [ref=e745]: Soon
                - listitem [ref=e746]:
                  - generic "Segera Hadir" [ref=e747]:
                    - text: Roadmap
                    - generic [ref=e748]: Soon
                - listitem [ref=e749]:
                  - generic "Segera Hadir" [ref=e750]:
                    - text: Credits
                    - generic [ref=e751]: Soon
                - listitem [ref=e752]:
                  - generic "Segera Hadir" [ref=e753]:
                    - text: Kontak
                    - generic [ref=e754]: Soon
          - generic [ref=e755]:
            - paragraph [ref=e756]: Gabung Nusa Club
            - paragraph [ref=e757]: Terima cerita, itinerary budaya, dan rilis fitur baru dari NUSANTARAYA. Gratis untuk penjelajah awal.
            - generic [ref=e758]:
              - generic [ref=e759]: Email untuk Nusa Club
              - textbox "Email untuk Nusa Club" [ref=e760]:
                - /placeholder: Email
              - button "Submit" [ref=e761]
            - paragraph [ref=e762]: Dengan bergabung, kamu setuju menerima update pilihan dari NUSANTARAYA.
        - generic [ref=e763]:
          - paragraph [ref=e765]:
            - generic [ref=e766]: "N"
            - generic [ref=e767]: U
            - generic [ref=e768]: S
            - generic [ref=e769]: A
            - generic [ref=e770]: "N"
            - generic [ref=e771]: T
            - generic [ref=e772]: A
            - generic [ref=e773]: R
            - generic [ref=e774]: A
            - generic [ref=e775]: "Y"
            - generic [ref=e776]: A
          - generic [ref=e777]:
            - generic [ref=e778]:
              - paragraph [ref=e779]: © 2026 NUSANTARAYA. Dibuat untuk Nusantara Digital City — Mufalah Code.
              - paragraph [ref=e780]: Data budaya, peta, dan konten digunakan untuk demo eksplorasi digital. v1.0 • Homepage MVP
            - generic [ref=e781]:
              - generic [ref=e782]:
                - link "Instagram" [ref=e783] [cursor=pointer]:
                  - /url: https://instagram.com/nusantaraya
                  - img [ref=e784]
                - link "GitHub" [ref=e787] [cursor=pointer]:
                  - /url: https://github.com/mufalah
                  - img [ref=e788]
                - link "Email" [ref=e791] [cursor=pointer]:
                  - /url: mailto:mufalahcode@gmail.com
                  - img [ref=e792]
                - button "Kembali ke atas" [ref=e795]: ↑
              - generic [ref=e796]:
                - link "Privasi" [disabled] [ref=e797]:
                  - /url: "#"
                - link "Ketentuan" [disabled] [ref=e798]:
                  - /url: "#"
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
  10 |     test.setTimeout(60000); // Increase timeout for full flow
  11 |     
  12 |     // 1. Visit Homepage
  13 |     await page.goto('/');
  14 |     await expect(page).toHaveTitle(/NUSANTARAYA/i);
  15 | 
  16 |     // 2. Navigate to Route Planner with source context
  17 |     await page.goto('/routes?source=home-feature&region=jawa&duration=5&interests=budaya');
  18 |     await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();
  19 | 
  20 |     // 3. Route Planner section should be visible (canonical ID: route-atelier)
  21 |     await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });
  22 | 
  23 |     // 4. Click generate route button
  24 |     const generateButton = page.getByRole('button', { name: /Buat Rute/i });
  25 |     await expect(generateButton).toBeVisible();
  26 |     await generateButton.click({ force: true }); // Force click in case of overlay
  27 | 
  28 |     // 5. Verify recommendation result appears (canonical ID: route-recommendation-result)
  29 |     await expect(page.locator('#route-recommendation-result')).toBeVisible({ timeout: 20000 });
  30 | 
  31 |     // 6. Verify itinerary section (canonical ID: day-by-day-itinerary)
  32 |     await expect(page.locator('#day-by-day-itinerary')).toBeVisible({ timeout: 10000 });
  33 | 
  34 |     // 7. Verify map section (canonical ID: route-map-transport-summary)
  35 |     await expect(page.locator('#route-map-transport-summary')).toBeVisible({ timeout: 10000 });
  36 | 
  37 |     // 8. Verify readiness section (canonical ID: route-readiness)
  38 |     await expect(page.locator('#route-readiness')).toBeVisible({ timeout: 10000 });
  39 | 
  40 |     // 9. Save to Passport
  41 |     const saveButton = page.getByRole('button', { name: /Simpan/i }).first();
  42 |     await expect(saveButton).toBeVisible();
  43 |     await expect(saveButton).toBeEnabled();
  44 |     await saveButton.click();
  45 |     
  46 |     // Brief wait for save operation
  47 |     await page.waitForTimeout(1000);
  48 | 
  49 |     // 10. Navigate to Passport section (lives at /explore#passport-progress)
  50 |     await page.goto('/explore#passport-progress');
  51 |     await expect(page.locator('#passport-progress')).toBeVisible({ timeout: 10000 });
  52 | 
  53 |     // 11. Return to routes and verify context preserved
  54 |     await page.goto('/routes');
  55 |     await expect(page.locator('#route-atelier')).toBeVisible({ timeout: 10000 });
  56 |   });
  57 | });
  58 | 
  59 | /**
  60 |  * NUSANTARAYA E2E Smoke Test — Mobile Smoke
  61 |  * Verifies basic layout and interaction on a mobile viewport.
  62 |  */
  63 | test.describe('Mobile Smoke', () => {
  64 |   test.use({ viewport: { width: 390, height: 844 } });
  65 | 
  66 |   test('Route page loads without horizontal overflow on mobile', async ({ page }) => {
  67 |     // 1. Open Routes page
> 68 |     await page.goto('/routes?region=jawa&duration=5&interests=budaya');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  69 |     await expect(page.getByRole('heading', { name: /Rencanakan/i, level: 1 })).toBeVisible();
  70 | 
  71 |     // 2. Verify no horizontal overflow before Generate
  72 |     const bodyWidthBefore = await page.evaluate(() => document.body.scrollWidth);
  73 |     const htmlWidthBefore = await page.evaluate(() => document.documentElement.scrollWidth);
  74 |     const viewportWidth = await page.evaluate(() => window.innerWidth);
  75 |     
  76 |     expect(bodyWidthBefore).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
  77 |     expect(htmlWidthBefore).toBeLessThanOrEqual(viewportWidth + 1);
  78 | 
  79 |     // 3. Scroll down to preset routes section to ensure carousel is rendered
  80 |     await page.evaluate(() => {
  81 |       const presetSection = document.querySelector('#preset-routes');
  82 |       if (presetSection) {
  83 |         presetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
  84 |       }
  85 |     });
  86 |     
  87 |     // Wait for carousel to render
  88 |     await page.waitForTimeout(500);
  89 | 
  90 |     // 4. Verify no horizontal overflow after scrolling to carousel
  91 |     const bodyWidthAfterScroll = await page.evaluate(() => document.body.scrollWidth);
  92 |     const htmlWidthAfterScroll = await page.evaluate(() => document.documentElement.scrollWidth);
  93 |     
  94 |     expect(bodyWidthAfterScroll).toBeLessThanOrEqual(viewportWidth + 1);
  95 |     expect(htmlWidthAfterScroll).toBeLessThanOrEqual(viewportWidth + 1);
  96 |   });
  97 | });
  98 | 
```