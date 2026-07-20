# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.ts >> Desktop Core Flow >> Homepage → Route → Result → Save → Passport → Atlas round-trip
- Location: e2e\smoke.spec.ts:9:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e4]:
      - link "Nusantaraya" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Nusantaraya" [ref=e6]
      - generic [ref=e7]:
        - link "Beranda" [ref=e8] [cursor=pointer]:
          - /url: /
        - link "Eksplorasi" [ref=e9] [cursor=pointer]:
          - /url: /explore
        - link "Rute" [ref=e10] [cursor=pointer]:
          - /url: "#"
        - link "Kuliner" [ref=e11] [cursor=pointer]:
          - /url: "#"
        - link "Tentang" [ref=e12] [cursor=pointer]:
          - /url: "#"
      - link "Mulai Jelajah" [ref=e13] [cursor=pointer]:
        - /url: "#explore"
        - generic [ref=e14]: Mulai Jelajah
        - img [ref=e16]
    - generic [ref=e27]:
      - generic:
        - generic:
          - generic:
            - heading "Nusantaraya" [level=1]
            - paragraph: Satu Peta, Ribuan Cerita
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]:
            - heading "Jelajahi Indonesia Secara Interaktif" [level=3] [ref=e31]
            - paragraph [ref=e32]: Mulai Petualanganmu
            - generic [ref=e33]:
              - generic [ref=e34]: Peta Interaktif
              - generic [ref=e35]: Rute Wisata
              - generic [ref=e36]: Cerita Budaya
            - paragraph [ref=e37]: Jelajahi keindahan budaya, sejarah, alam, dan kuliner Indonesia dalam satu sentuhan digital interaktif.
            - generic [ref=e38]:
              - button "Eksplorasi Peta" [ref=e39]
              - button "Lihat Rute" [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]: "01"
            - generic [ref=e43]: /05
        - generic [ref=e45]:
          - generic [ref=e53]:
            - generic [ref=e54]:
              - heading "Eksplorasi Gunung Rinjani" [level=4] [ref=e55]
              - paragraph [ref=e56]: Mendaki puncak Rinjani dan rasakan keindahan Danau Segara Anak dari ketinggian.
            - generic [ref=e57]: Nusa Tenggara
          - generic "Lihat Jelajah Borobudur" [ref=e58] [cursor=pointer]
          - generic "Lihat Keajaiban Raja Ampat" [ref=e62] [cursor=pointer]
    - img [ref=e68]
    - generic [ref=e69]:
      - img
      - generic [ref=e71]:
        - generic [ref=e72]:
          - generic [ref=e75]: Peta Interaktif
          - heading "Singkap Magisnya Nusantara dari Satu Peta." [level=2] [ref=e76]
          - paragraph [ref=e78]: Setiap titik di peta menyimpan cerita unik—merangkai rasa, tradisi, alam, aksara, hingga visi masa depan digital Nusantara.
          - generic [ref=e79]:
            - button "Mulai Penjelajahan" [ref=e80]
            - button "Lihat Unggulan" [ref=e81]:
              - text: Lihat Unggulan
              - img [ref=e82]
          - generic [ref=e84]:
            - heading "Kategori Eksplorasi" [level=5] [ref=e85]
            - generic [ref=e88]:
              - button "Semua" [ref=e89]:
                - generic [ref=e93]: Semua
              - button "Budaya" [ref=e94]:
                - generic [ref=e96]:
                  - img [ref=e97]
                  - generic [ref=e98]: Budaya
              - button "Kuliner" [ref=e99]:
                - generic [ref=e101]:
                  - img [ref=e102]
                  - generic [ref=e103]: Kuliner
              - button "Alam" [ref=e104]:
                - generic [ref=e106]:
                  - img [ref=e107]
                  - generic [ref=e108]: Alam
              - button "Sejarah" [ref=e109]:
                - generic [ref=e111]:
                  - img [ref=e112]
                  - generic [ref=e113]: Sejarah
              - button "Rempah" [ref=e114]:
                - generic [ref=e116]:
                  - img [ref=e117]
                  - generic [ref=e118]: Rempah
              - button "Kota Masa Depan" [ref=e119]:
                - generic [ref=e121]:
                  - img [ref=e122]
                  - generic [ref=e123]: Kota Masa Depan
        - generic [ref=e125]:
          - generic [ref=e128] [cursor=pointer]:
            - button "Sumatera Barat" [ref=e130]:
              - img "Sumatera Barat" [ref=e132]
            - button "DI Yogyakarta" [ref=e133]:
              - img "DI Yogyakarta" [ref=e135]
            - button "Bali" [ref=e136]:
              - img "Bali" [ref=e138]
            - button "Kalimantan Timur" [ref=e139]:
              - img "Kalimantan Timur" [ref=e141]
            - button "Sulawesi Selatan" [ref=e142]:
              - img "Sulawesi Selatan" [ref=e144]
            - button "Maluku" [ref=e145]:
              - img "Maluku" [ref=e147]
            - button "Nusa Tenggara Timur" [ref=e148]:
              - img "Nusa Tenggara Timur" [ref=e150]
            - button "Papua Barat Daya" [ref=e151]:
              - img "Papua Barat Daya" [ref=e153]
          - generic:
            - generic:
              - generic:
                - img "DI Yogyakarta"
              - generic:
                - heading "DI Yogyakarta" [level=4]
                - paragraph:
                  - generic: Keraton · Batik · Gudeg
          - generic [ref=e156]: 38 Provinsi
          - generic [ref=e157]:
            - heading "Kategori Highlight" [level=5] [ref=e158]
            - generic [ref=e159]:
              - generic [ref=e162]: Budaya
              - generic [ref=e165]: Kuliner
              - generic [ref=e168]: Alam
              - generic [ref=e171]: Sejarah
              - generic [ref=e174]: Rempah
              - generic [ref=e177]: Kota Masa Depan
    - generic [ref=e179]:
      - generic:
        - generic: Scroll to Explore
      - generic [ref=e180]:
        - generic [ref=e181]:
          - generic [ref=e182]:
            - generic [ref=e185]: Destinasi Pilihan
            - heading "Provinsi Flagship" [level=3] [ref=e186]
            - paragraph [ref=e187]: Jelajahi 8 provinsi unggulan dengan pilar cerita terdalam yang memukau.
          - button "Lihat Semua Provinsi" [ref=e188]:
            - text: Lihat Semua Provinsi
            - img [ref=e189]
        - generic [ref=e200]: 01 / 08
        - generic [ref=e201]:
          - generic [ref=e206]:
            - img "Sumatera Barat" [ref=e207]
            - generic:
              - generic:
                - generic: Sumatera
                - heading "Sumatera Barat" [level=4]
          - generic [ref=e208]:
            - generic [ref=e209]:
              - heading "Sumatera Barat" [level=4] [ref=e210]
              - generic:
                - paragraph [ref=e211]: Rasa Minangkabau dan Warisan Rumah Gadang
                - paragraph [ref=e212]: Menjadi saksi bisu kejayaan kuliner dan budaya Minangkabau. Dari megahnya Rumah Gadang yang kaya akan filosofi hingga kelezatan Rendang yang mendunia, Sumatera Barat menawarkan pesona alam yang dipadukan dengan warisan tradisi yang masih sangat kental.
                - generic [ref=e213]:
                  - generic [ref=e216]: Rendang
                  - generic [ref=e219]: Rumah Gadang
                  - generic [ref=e222]: Jam Gadang
                - link "Jelajahi Sumatera Barat" [ref=e224] [cursor=pointer]:
                  - /url: /provinsi/sumatera-barat
                  - generic [ref=e228]: Jelajahi Sumatera Barat
                  - img [ref=e229]
            - heading "DI Yogyakarta" [level=4] [ref=e232]
            - heading "Bali" [level=4] [ref=e234]
            - heading "Kalimantan Timur" [level=4] [ref=e236]
    - generic [ref=e238]:
      - generic [ref=e239]:
        - paragraph [ref=e241]: Skala Ekosistem
        - heading "Menyatukan kekayaan Nusantara dalam satu jendela digital." [level=3] [ref=e242]
      - generic [ref=e243]:
        - generic [ref=e244]:
          - generic [ref=e245]:
            - heading "38" [level=4] [ref=e246]
            - heading "38" [level=4] [ref=e247]
          - paragraph [ref=e249]: Provinsi
        - generic [ref=e250]:
          - generic [ref=e252]:
            - heading "7" [level=4] [ref=e253]
            - heading "7" [level=4] [ref=e254]
          - paragraph [ref=e256]: Pilar Eksplorasi
        - generic [ref=e257]:
          - generic [ref=e259]:
            - heading "8" [level=4] [ref=e260]
            - heading "8" [level=4] [ref=e261]
          - paragraph [ref=e263]: Flagship Content
        - generic [ref=e264]:
          - generic [ref=e266]:
            - heading "120+" [level=4] [ref=e267]
            - heading "120+" [level=4] [ref=e268]
          - paragraph [ref=e270]: Arsip Budaya
    - generic [ref=e272]:
      - generic [ref=e273]:
        - generic [ref=e274]: Tujuh Pilar Eksplorasi
        - heading "Satu Peta, Tujuh Cara Menjelajahi Nusantara" [level=2] [ref=e275]:
          - text: Satu Peta, Tujuh Cara
          - text: Menjelajahi Nusantara
      - generic [ref=e277]:
        - generic [ref=e278] [cursor=pointer]:
          - generic [ref=e280]:
            - generic [ref=e281]:
              - generic [ref=e282]:
                - img "Sejarah" [ref=e284]
                - generic [ref=e285]: Jejak masa lalu yang membentuk Nusantara.
              - heading "Sejarah" [level=3] [ref=e286]
            - generic:
              - paragraph [ref=e288]: Telusuri kerajaan, jalur rempah, tokoh daerah, situs warisan, dan timeline sejarah tiap provinsi.
              - generic [ref=e289]:
                - generic [ref=e290]: Timeline
                - generic [ref=e291]: Jalur Rempah
                - generic [ref=e292]: Situs Warisan
              - generic [ref=e293]:
                - text: Jelajahi Pilar
                - img [ref=e294]
          - generic: S
        - generic [ref=e296] [cursor=pointer]:
          - generic [ref=e298]:
            - generic [ref=e299]:
              - generic [ref=e300]:
                - img "Aksara" [ref=e302]
                - generic [ref=e303]: Bahasa dan tulisan daerah yang menjaga ingatan.
              - heading "Aksara" [level=3] [ref=e304]
            - generic:
              - paragraph [ref=e306]: Kenali aksara Jawa, Bali, Sunda, Lontara, Batak, Rejang, kosakata lokal, dan suara bahasa daerah.
              - generic [ref=e307]:
                - generic [ref=e308]: Aksara Lab
                - generic [ref=e309]: Kosakata
                - generic [ref=e310]: Audio
              - generic [ref=e311]:
                - text: Jelajahi Pilar
                - img [ref=e312]
          - generic: A
        - generic [ref=e314] [cursor=pointer]:
          - generic [ref=e316]:
            - generic [ref=e317]:
              - generic [ref=e318]:
                - img "Narasi" [ref=e320]
                - generic [ref=e321]: Cerita rakyat, legenda, dan suara daerah.
              - heading "Narasi" [level=3] [ref=e322]
            - generic:
              - paragraph [ref=e324]: Masuki cerita rakyat, micro-story, legenda lokal, dan kisah orang pertama dari benda, rasa, dan tempat Nusantara.
              - generic [ref=e325]:
                - generic [ref=e326]: Stories
                - generic [ref=e327]: Legenda
                - generic [ref=e328]: Micro Story
              - generic [ref=e329]:
                - text: Jelajahi Pilar
                - img [ref=e330]
          - generic: "N"
        - generic [ref=e332] [cursor=pointer]:
          - generic [ref=e334]:
            - generic [ref=e335]:
              - generic [ref=e336]:
                - img "Tradisi" [ref=e338]
                - generic [ref=e339]: Adat, seni, ritual, dan warisan yang tetap hidup.
              - heading "Tradisi" [level=3] [ref=e340]
            - generic [ref=e341]:
              - paragraph [ref=e343]: Jelajahi rumah adat, tarian, alat musik, pakaian adat, festival, upacara, dan kerajinan lokal.
              - generic [ref=e344]:
                - generic [ref=e345]: Rumah Adat
                - generic [ref=e346]: Festival
                - generic [ref=e347]: Soundscape
              - generic [ref=e348]:
                - text: Jelajahi Pilar
                - img [ref=e349]
          - generic: T
        - generic [ref=e351] [cursor=pointer]:
          - generic [ref=e353]:
            - generic [ref=e354]:
              - generic [ref=e355]:
                - img "Alam" [ref=e357]
                - generic [ref=e358]: Lanskap, destinasi, dan ruang hidup Nusantara.
              - heading "Alam" [level=3] [ref=e359]
            - generic:
              - paragraph [ref=e361]: Temukan gunung, laut, hutan, desa wisata, hidden gems, green tourism, dan destinasi alam tiap wilayah.
              - generic [ref=e362]:
                - generic [ref=e363]: Destinasi
                - generic [ref=e364]: Hidden Gems
                - generic [ref=e365]: Green Tourism
              - generic [ref=e366]:
                - text: Jelajahi Pilar
                - img [ref=e367]
          - generic: A
        - generic [ref=e369] [cursor=pointer]:
          - generic [ref=e371]:
            - generic [ref=e372]:
              - generic [ref=e373]:
                - img "Rasa" [ref=e375]
                - generic [ref=e376]: Kuliner sebagai cerita yang bisa dicicipi.
              - heading "Rasa" [level=3] [ref=e377]
            - generic:
              - paragraph [ref=e379]: Jelajahi atlas kuliner Nusantara, rempah, food story, food battle, dan peta rasa dari tiap provinsi.
              - generic [ref=e380]:
                - generic [ref=e381]: NusaRasa
                - generic [ref=e382]: Food Battle
                - generic [ref=e383]: Rempah
              - generic [ref=e384]:
                - text: Jelajahi Pilar
                - img [ref=e385]
          - generic: R
        - generic [ref=e387] [cursor=pointer]:
          - generic [ref=e389]:
            - generic [ref=e390]:
              - generic [ref=e391]:
                - img "Yatra" [ref=e393]
                - generic [ref=e394]: Perjalanan, rute, passport, dan masa depan.
              - heading "Yatra" [level=3] [ref=e395]
            - generic:
              - paragraph [ref=e397]: Rencanakan perjalanan, kumpulkan stempel, tanya RANI, dan lihat bagaimana Nusantara bergerak menuju masa depan digital.
              - generic [ref=e398]:
                - generic [ref=e399]: Route Planner
                - generic [ref=e400]: Passport
                - generic [ref=e401]: RANI
              - generic [ref=e402]:
                - text: Jelajahi Pilar
                - img [ref=e403]
          - generic: "Y"
      - generic [ref=e407]:
        - generic [ref=e408]:
          - generic [ref=e411]: Jelajahi Peta
          - heading "Semua pilar terhubung dalam satu pengalaman." [level=3] [ref=e412]
          - paragraph [ref=e413]: Dari peta, pengguna bisa masuk ke cerita, kuliner, destinasi, arsip budaya, rute perjalanan, hingga masa depan digital Nusantara.
        - generic [ref=e415] [cursor=pointer]:
          - img [ref=e417]
          - generic [ref=e419]: Mulai Jelajah
    - generic [ref=e421]:
      - generic [ref=e422]:
        - generic [ref=e423]: Ekosistem NUSANTARAYA
        - heading "Satu Platform, Banyak Cara Menjelajah Nusantara" [level=2] [ref=e424]
        - paragraph [ref=e425]: Dari peta interaktif, arsip budaya, atlas kuliner, itinerary, passport digital, hingga AI guide — semua terhubung dalam satu pengalaman eksplorasi Indonesia.
      - generic [ref=e426]:
        - generic [ref=e428]:
          - generic [ref=e429]:
            - generic [ref=e432]: Rancang Perjalanan
            - heading "Nusa Route Planner" [level=3] [ref=e433]
            - paragraph [ref=e434]: Susun itinerary lintas provinsi berdasarkan durasi, minat, wilayah, budget, dan gaya traveler.
            - generic [ref=e435]:
              - generic [ref=e436]: 3/5/7 Hari
              - generic [ref=e437]: Budget
              - generic [ref=e438]: Itinerary
            - link "Buat Rute" [ref=e440] [cursor=pointer]:
              - /url: /routes
              - text: Buat Rute
              - img [ref=e441]
          - img "Preview antarmuka Nusa Route Planner" [ref=e445]
        - link "Peta Interaktif Nusa Map Jelajahi 38 provinsi melalui peta interaktif dengan layer budaya, kuliner, alam, sejarah, dan masa depan. 38 Provinsi Layer Flagship Nusa Map" [ref=e447] [cursor=pointer]:
          - /url: /explore
          - generic [ref=e448]:
            - generic [ref=e451]: Peta Interaktif
            - heading "Nusa Map" [level=4] [ref=e452]
            - paragraph [ref=e453]: Jelajahi 38 provinsi melalui peta interaktif dengan layer budaya, kuliner, alam, sejarah, dan masa depan.
            - generic [ref=e454]:
              - generic [ref=e455]: 38 Provinsi
              - generic [ref=e456]: Layer
              - generic [ref=e457]: Flagship
          - img "Nusa Map" [ref=e460]
        - link "Ensiklopedia Budaya Nusa Archive Temukan rumah adat, tarian, alat musik, pakaian adat, aksara, cerita rakyat, dan sumber budaya terpercaya. Budaya Search Sumber Nusa Archive" [disabled] [ref=e462] [cursor=pointer]:
          - /url: /archive
          - generic [ref=e463]:
            - generic [ref=e466]: Ensiklopedia Budaya
            - heading "Nusa Archive" [level=4] [ref=e467]
            - paragraph [ref=e468]: Temukan rumah adat, tarian, alat musik, pakaian adat, aksara, cerita rakyat, dan sumber budaya terpercaya.
            - generic [ref=e469]:
              - generic [ref=e470]: Budaya
              - generic [ref=e471]: Search
              - generic [ref=e472]: Sumber
          - img "Nusa Archive" [ref=e475]
        - link "Atlas Kuliner NusaRasa Jelajahi kuliner Nusantara, rempah, food story, food battle, dan peta rasa dari berbagai provinsi. Kuliner Rempah Food Battle NusaRasa" [disabled] [ref=e477] [cursor=pointer]:
          - /url: /rasa
          - generic [ref=e478]:
            - generic [ref=e481]: Atlas Kuliner
            - heading "NusaRasa" [level=4] [ref=e482]
            - paragraph [ref=e483]: Jelajahi kuliner Nusantara, rempah, food story, food battle, dan peta rasa dari berbagai provinsi.
            - generic [ref=e484]:
              - generic [ref=e485]: Kuliner
              - generic [ref=e486]: Rempah
              - generic [ref=e487]: Food Battle
          - img "NusaRasa" [ref=e490]
        - link "Gamifikasi Nusa Passport Kumpulkan stempel provinsi, badge wilayah, dan level explorer saat menjelajahi Indonesia secara digital. Stempel Badge Level Nusa Passport" [ref=e492] [cursor=pointer]:
          - /url: /explore#passport-progress
          - generic [ref=e493]:
            - generic [ref=e496]: Gamifikasi
            - heading "Nusa Passport" [level=4] [ref=e497]
            - paragraph [ref=e498]: Kumpulkan stempel provinsi, badge wilayah, dan level explorer saat menjelajahi Indonesia secara digital.
            - generic [ref=e499]:
              - generic [ref=e500]: Stempel
              - generic [ref=e501]: Badge
              - generic [ref=e502]: Level
          - img "Nusa Passport" [ref=e505]
        - link "Pemandu Digital RANI AI Guide Tanya rekomendasi destinasi, etika budaya, itinerary, kuliner, dan tips perjalanan kepada RANI. AI Itinerary Etika RANI AI Guide RANI Avatar RANI Online" [disabled] [ref=e507] [cursor=pointer]:
          - /url: /rani
          - generic [ref=e508]:
            - generic [ref=e511]: Pemandu Digital
            - heading "RANI AI Guide" [level=4] [ref=e512]
            - paragraph [ref=e513]: Tanya rekomendasi destinasi, etika budaya, itinerary, kuliner, dan tips perjalanan kepada RANI.
            - generic [ref=e514]:
              - generic [ref=e515]: AI
              - generic [ref=e516]: Itinerary
              - generic [ref=e517]: Etika
          - generic [ref=e518]:
            - img "RANI AI Guide" [ref=e520]
            - generic [ref=e521]:
              - img "RANI Avatar" [ref=e523]
              - generic [ref=e524]: RANI Online
        - link "Digital City Nusa Future Lihat IKN, smart city, UMKM digital, ekonomi kreatif, desa wisata digital, dan green tourism Nusantara. IKN Smart City UMKM Nusa Future" [disabled] [ref=e527] [cursor=pointer]:
          - /url: /future
          - generic [ref=e528]:
            - generic [ref=e531]: Digital City
            - heading "Nusa Future" [level=4] [ref=e532]
            - paragraph [ref=e533]: Lihat IKN, smart city, UMKM digital, ekonomi kreatif, desa wisata digital, dan green tourism Nusantara.
            - generic [ref=e534]:
              - generic [ref=e535]: IKN
              - generic [ref=e536]: Smart City
              - generic [ref=e537]: UMKM
          - img "Nusa Future" [ref=e540]
        - generic [ref=e543]:
          - generic [ref=e544]:
            - generic [ref=e546]: Ecosystem Integration
            - heading "Satu alur eksplorasi. Tanpa hambatan." [level=3] [ref=e547]:
              - text: Satu alur eksplorasi.
              - text: Tanpa hambatan.
            - paragraph [ref=e548]: Pilih provinsi di Nusa Map, baca sejarahnya di Archive, cicipi lewat NusaRasa, rancang rute, kumpulkan stempel Passport, dan biarkan RANI memandu langkah Anda selanjutnya.
          - generic [ref=e549]:
            - generic [ref=e553] [cursor=pointer]:
              - img "Nusa Route Planner" [ref=e555]
              - generic [ref=e556]: Route Planner
            - generic [ref=e557] [cursor=pointer]:
              - img "Nusa Map" [ref=e559]
              - generic [ref=e560]: Map
            - generic [ref=e561] [cursor=pointer]:
              - img "Nusa Archive" [ref=e563]
              - generic [ref=e564]: Archive
            - generic [ref=e565] [cursor=pointer]:
              - img "NusaRasa" [ref=e567]
              - generic [ref=e568]: NusaRasa
            - generic [ref=e569] [cursor=pointer]:
              - img "Nusa Passport" [ref=e571]
              - generic [ref=e572]: Passport
            - generic [ref=e573] [cursor=pointer]:
              - img "RANI AI Guide" [ref=e575]
              - generic [ref=e576]: RANI AI
            - generic [ref=e577] [cursor=pointer]:
              - img "Nusa Future" [ref=e579]
              - generic [ref=e580]: Future
          - link "Lihat Alur Demo" [disabled] [ref=e581]:
            - /url: "#"
            - text: Lihat Alur Demo
            - img [ref=e582]
    - generic [ref=e591]:
      - generic [ref=e592]:
        - generic [ref=e593]: Narasi Besar NUSANTARAYA
        - heading "Dari Warisan Budaya ke Masa Depan Digital" [level=2] [ref=e594]:
          - text: Dari Warisan Budaya
          - text: ke Masa Depan Digital
        - paragraph [ref=e595]: "NUSANTARAYA menghubungkan sejarah, tradisi, wisata, kuliner, UMKM, dan kota digital dalam satu cerita besar Indonesia: dari masa lalu yang kaya menuju masa depan yang sedang dibangun."
      - generic [ref=e601]:
        - generic [ref=e602]:
          - generic [ref=e608]: "01"
          - generic [ref=e609]:
            - generic [ref=e610]:
              - generic [ref=e612]: WARISAN
              - heading "Warisan yang Dijaga" [level=3] [ref=e613]
              - paragraph [ref=e614]: NUSANTARAYA mengarsipkan sejarah, aksara, tradisi, cerita rakyat, rumah adat, jalur rempah, dan simbol budaya dari berbagai provinsi Indonesia.
              - generic [ref=e615]:
                - generic [ref=e616]: Nusa Archive
                - generic [ref=e617]: Aksara Lab
                - generic [ref=e618]: Jalur Rempah
                - generic [ref=e619]: Stories
            - img "Warisan yang Dijaga" [ref=e622]
        - generic [ref=e623]:
          - generic [ref=e629]: "02"
          - generic [ref=e630]:
            - generic [ref=e631]:
              - generic [ref=e633]: MASA KINI
              - heading "Kehidupan yang Dirasakan" [level=3] [ref=e634]
              - paragraph [ref=e635]: Budaya tidak hanya dibaca, tetapi dialami melalui destinasi wisata, kuliner, festival, desa wisata, UMKM, dan cerita lokal yang hidup hari ini.
              - generic [ref=e636]:
                - generic [ref=e637]: Nusa Map
                - generic [ref=e638]: NusaRasa
                - generic [ref=e639]: Route Planner
                - generic [ref=e640]: Event Calendar
            - img "Kehidupan yang Dirasakan" [ref=e643]
        - generic [ref=e644]:
          - generic [ref=e650]: "03"
          - generic [ref=e651]:
            - generic [ref=e652]:
              - generic [ref=e654]: MASA DEPAN
              - heading "Masa Depan yang Dibangun" [level=3] [ref=e655]
              - paragraph [ref=e656]: NUSANTARAYA memperlihatkan bagaimana identitas daerah terhubung dengan IKN, smart city, UMKM digital, ekonomi kreatif, green tourism, dan desa wisata digital.
              - generic [ref=e657]:
                - generic [ref=e658]: Nusa Future
                - generic [ref=e659]: RANI
                - generic [ref=e660]: Smart City
                - generic [ref=e661]: UMKM Digital
            - img "Masa Depan yang Dibangun" [ref=e664]
      - paragraph [ref=e666]: “Warisan menjadi akar. Teknologi menjadi jembatan. Nusantara menjadi pengalaman.”
    - region "Mulai dari Peta, Lanjutkan ke Cerita" [ref=e667]:
      - generic [ref=e668]:
        - generic [ref=e669]:
          - generic [ref=e670]: Demo Journey
          - heading "Mulai dari Peta, Lanjutkan ke Cerita" [level=2] [ref=e671]
          - paragraph [ref=e672]: "NUSANTARAYA dirancang sebagai perjalanan digital yang utuh: pilih provinsi di peta, masuk ke cerita daerah, jelajahi budaya dan kuliner, susun rute perjalanan, kumpulkan stempel, lalu lanjutkan eksplorasi bersama RANI."
        - generic [ref=e673]:
          - generic [ref=e675]:
            - 'button "Lihat langkah 01: Buka Nusa Map" [pressed] [ref=e677]':
              - generic [ref=e679]: "01"
              - generic [ref=e680]:
                - heading "Buka Nusa Map" [level=3] [ref=e681]
                - paragraph [ref=e683]: Mulai dari peta interaktif Indonesia dan lihat 38 provinsi sebagai pintu masuk eksplorasi.
            - 'button "Lihat langkah 02: Pilih Provinsi" [ref=e684]':
              - generic [ref=e685]: "02"
              - heading "Pilih Provinsi" [level=3] [ref=e687]
            - 'button "Lihat langkah 03: Baca Detail Provinsi" [ref=e688]':
              - generic [ref=e689]: "03"
              - heading "Baca Detail Provinsi" [level=3] [ref=e691]
            - 'button "Lihat langkah 04: Jelajahi Budaya & Rasa" [ref=e692]':
              - generic [ref=e693]: "04"
              - heading "Jelajahi Budaya & Rasa" [level=3] [ref=e695]
            - 'button "Lihat langkah 05: Buat Rute Perjalanan" [ref=e696]':
              - generic [ref=e697]: "05"
              - heading "Buat Rute Perjalanan" [level=3] [ref=e699]
            - 'button "Lihat langkah 06: Kumpulkan Passport" [ref=e700]':
              - generic [ref=e701]: "06"
              - heading "Kumpulkan Passport" [level=3] [ref=e703]
            - 'button "Lihat langkah 07: Tanya RANI" [ref=e704]':
              - generic [ref=e705]: "07"
              - heading "Tanya RANI" [level=3] [ref=e707]
          - generic [ref=e712]:
            - generic [ref=e713]:
              - generic [ref=e714]:
                - generic [ref=e715]: Step 01
                - generic [ref=e717]: Satu peta sebagai gerbang awal.
              - heading "Nusa Map" [level=3] [ref=e719]:
                - generic [ref=e720]: Nusa
                - generic [ref=e721]: Map
            - generic [ref=e722]:
              - img "Nusa Map Preview" [ref=e731]
              - generic:
                - generic:
                  - generic: Lihat
            - generic [ref=e733]:
              - generic [ref=e734] [cursor=pointer]: 38 Provinsi
              - generic [ref=e735] [cursor=pointer]: Layer
              - generic [ref=e736] [cursor=pointer]: Search
        - generic [ref=e737]:
          - heading "Siap mengikuti alurnya?" [level=3] [ref=e738]
          - paragraph [ref=e739]: Mulai dari Nusa Map dan biarkan setiap provinsi membawamu ke cerita, rasa, perjalanan, dan pengalaman baru.
          - generic [ref=e740]:
            - link "Mulai Jelajah" [ref=e741] [cursor=pointer]:
              - /url: /explore
              - text: Mulai Jelajah
              - img [ref=e742]
            - link "Lihat Peta Interaktif" [ref=e744] [cursor=pointer]:
              - /url: /explore
              - img [ref=e745]
              - text: Lihat Peta Interaktif
    - region "Satu Peta, Ribuan Cerita Menunggumu" [ref=e747]:
      - generic [ref=e748]:
        - paragraph [ref=e749]: Mulai Jelajah
        - heading "Satu Peta, Ribuan Cerita Menunggumu" [level=2] [ref=e750]
        - paragraph [ref=e751]: Mulai dari satu provinsi, lalu biarkan ceritanya membawamu ke budaya, rasa, perjalanan, dan masa depan digital Nusantara.
        - generic [ref=e752]:
          - link "Buka Nusa Map" [ref=e753] [cursor=pointer]:
            - /url: /explore
          - link "Coba Route Planner" [ref=e754] [cursor=pointer]:
            - /url: /routes?source=home-feature
        - paragraph [ref=e755]: Mulai dari satu klik. Sisanya biarkan Nusantara bercerita.
    - generic [ref=e758]:
      - generic [ref=e759]:
        - generic [ref=e760]:
          - img "NUSANTARAYA" [ref=e762]
          - generic [ref=e763]:
            - paragraph [ref=e764]: Satu Peta, Ribuan Cerita
            - paragraph [ref=e765]: Web app eksplorasi digital Indonesia yang menghubungkan peta, budaya, rasa, rute perjalanan, passport, AI guide, dan masa depan digital Nusantara.
        - navigation "Footer navigation" [ref=e766]:
          - generic [ref=e767]:
            - heading "Jelajahi" [level=3] [ref=e768]
            - list [ref=e769]:
              - listitem [ref=e770]:
                - link "Nusa Map" [ref=e771] [cursor=pointer]:
                  - /url: /explore
              - listitem [ref=e772]:
                - generic "Segera Hadir" [ref=e773]:
                  - text: Provinsi
                  - generic [ref=e774]: Soon
              - listitem [ref=e775]:
                - generic "Segera Hadir" [ref=e776]:
                  - text: Nusa Archive
                  - generic [ref=e777]: Soon
              - listitem [ref=e778]:
                - generic "Segera Hadir" [ref=e779]:
                  - text: NusaRasa
                  - generic [ref=e780]: Soon
              - listitem [ref=e781]:
                - link "Route Planner" [ref=e782] [cursor=pointer]:
                  - /url: /routes?source=home-feature
              - listitem [ref=e783]:
                - link "Passport" [ref=e784] [cursor=pointer]:
                  - /url: /explore#passport-progress
          - generic [ref=e785]:
            - heading "Fitur" [level=3] [ref=e786]
            - list [ref=e787]:
              - listitem [ref=e788]:
                - generic "Segera Hadir" [ref=e789]:
                  - text: RANI AI Guide
                  - generic [ref=e790]: Soon
              - listitem [ref=e791]:
                - generic "Segera Hadir" [ref=e792]:
                  - text: Nusa Future
                  - generic [ref=e793]: Soon
              - listitem [ref=e794]:
                - generic "Segera Hadir" [ref=e795]:
                  - text: Aksara Lab
                  - generic [ref=e796]: Soon
              - listitem [ref=e797]:
                - generic "Segera Hadir" [ref=e798]:
                  - text: Jalur Rempah
                  - generic [ref=e799]: Soon
              - listitem [ref=e800]:
                - generic "Segera Hadir" [ref=e801]:
                  - text: Event Calendar
                  - generic [ref=e802]: Soon
              - listitem [ref=e803]:
                - generic "Segera Hadir" [ref=e804]:
                  - text: Tourist Mode
                  - generic [ref=e805]: Soon
          - generic [ref=e806]:
            - heading "Tentang" [level=3] [ref=e807]
            - list [ref=e808]:
              - listitem [ref=e809]:
                - generic "Segera Hadir" [ref=e810]:
                  - text: Tentang NUSANTARAYA
                  - generic [ref=e811]: Soon
              - listitem [ref=e812]:
                - generic "Segera Hadir" [ref=e813]:
                  - text: Sumber Data
                  - generic [ref=e814]: Soon
              - listitem [ref=e815]:
                - generic "Segera Hadir" [ref=e816]:
                  - text: Roadmap
                  - generic [ref=e817]: Soon
              - listitem [ref=e818]:
                - generic "Segera Hadir" [ref=e819]:
                  - text: Credits
                  - generic [ref=e820]: Soon
              - listitem [ref=e821]:
                - generic "Segera Hadir" [ref=e822]:
                  - text: Kontak
                  - generic [ref=e823]: Soon
        - generic [ref=e824]:
          - paragraph [ref=e825]: Gabung Nusa Club
          - paragraph [ref=e826]: Terima cerita, itinerary budaya, dan rilis fitur baru dari NUSANTARAYA. Gratis untuk penjelajah awal.
          - generic [ref=e827]:
            - generic [ref=e828]: Email untuk Nusa Club
            - textbox "Email untuk Nusa Club" [ref=e829]:
              - /placeholder: Email
            - button "Submit" [ref=e830]
          - paragraph [ref=e831]: Dengan bergabung, kamu setuju menerima update pilihan dari NUSANTARAYA.
      - generic [ref=e832]:
        - paragraph [ref=e834]:
          - generic [ref=e835]: "N"
          - generic [ref=e836]: U
          - generic [ref=e837]: S
          - generic [ref=e838]: A
          - generic [ref=e839]: "N"
          - generic [ref=e840]: T
          - generic [ref=e841]: A
          - generic [ref=e842]: R
          - generic [ref=e843]: A
          - generic [ref=e844]: "Y"
          - generic [ref=e845]: A
        - generic [ref=e846]:
          - generic [ref=e847]:
            - paragraph [ref=e848]: © 2026 NUSANTARAYA. Dibuat untuk Nusantara Digital City — Mufalah Code.
            - paragraph [ref=e849]: Data budaya, peta, dan konten digunakan untuk demo eksplorasi digital. v1.0 • Homepage MVP
          - generic [ref=e850]:
            - generic [ref=e851]:
              - link "Instagram" [ref=e852] [cursor=pointer]:
                - /url: https://instagram.com/nusantaraya
                - img [ref=e853]
              - link "GitHub" [ref=e856] [cursor=pointer]:
                - /url: https://github.com/mufalah
                - img [ref=e857]
              - link "Email" [ref=e860] [cursor=pointer]:
                - /url: mailto:mufalahcode@gmail.com
                - img [ref=e861]
              - button "Kembali ke atas" [ref=e864]: ↑
            - generic [ref=e865]:
              - link "Privasi" [disabled] [ref=e866]:
                - /url: "#"
              - link "Ketentuan" [disabled] [ref=e867]:
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
> 13 |     await page.goto('/');
     |                ^ Error: page.goto: Test timeout of 60000ms exceeded.
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
  68 |     await page.goto('/routes?region=jawa&duration=5&interests=budaya');
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