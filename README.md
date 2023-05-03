# History Of Ghibli API
Project API ghibli

Pengenalan
Project ini adalah API yang digunakan untuk mengetahui informasi terkait sejarah studio ghibli. API ini dibangun dengan menggunakan bahasa pemrograman javascript dengan penggunaan nodejs

# Daftar Isi
- Pengenalan
- Daftar Isi
- Instalasi
- Cara Penggunaan
- Endpoint
- Folder Struktur
- Kontribusi
Untuk menjalankan API ini, Anda memerlukan beberapa software yang harus diinstal terlebih dahulu.

## Prasyarat
1. Node.js [versi 10 ke atas]
2. npm
## Langkah-langkah Instalasi
1. Clone repository ini dengan menjalankan perintah berikut di terminal:
-- bash : git clone https://github.com/username/nama-repo.git
2. Masuk ke folder project dengan menjalankan perintah berikut di terminal:
-- bash : cd nama-repo
3. Instal dependencies dengan menjalankan perintah berikut di terminal:
-- bash : npm install

# Cara Penggunaan
1. Setelah menjalankan langkah-langkah instalasi diatas, jalankan API dengan menjalankan perintah berikut di terminal:
-- bash : npm start
2. Buka aplikasi [contoh: Postman] dan kirimkan permintaan ke endpoint yang tersedia (lihat di bagian Endpoint).
### Endpoint
Daftar endpoint yang tersedia pada API ini adalah:

`GET /api/cariquery
`GET /api/demort
`GET /api/filterfeedmanga
`GET /api/filtertag
`GET /api/mangaratingstats
`GET /api/read
`GET /api/tambahfeedmanga
`GET /api/updatemangact
`POST /api/buatsession
`POST /api/refreshsession
`POST /api/tm-daftarcustom
`POST /api/tm-daftarmengikuti

## Folder Struktur
Berikut adalah struktur folder untuk API ini:

~ bash :
├── CALLAPI-GET
│   ├── cariquery.js
│   ├── demort.js
│   ├── filterfeedmanga.js
│   ├── filtertag.js
│   ├── mangaratingstats.js
│   ├── read.js
│   ├── tambahfeedmanga.js
│   └── updatemangact.js
├── CALLAPI-POST
│   ├── buatsession.js
│   ├── refreshsession.js
│   ├── tm-daftarcustom.js
│   └── tm-daftarmengikuti.js
├── index.js
├── package-lock.json
└── package.json

# Kontribusi
Jika Anda ingin berkontribusi pada project ini, silakan kirimkan permintaan pull dan kita akan membahasnya bersama-sama.
