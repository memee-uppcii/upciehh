# Portofolio Pribadi Meme (Zaescia Putrisuta Rizkiillahi) — SMK Telkom Malang

Website portofolio resmi berbasis **HTML statis murni** untuk **Zaescia Putrisuta Rizkiillahi (MEME)**, siswi usia 16 tahun dari SMK Telkom Malang jurusan Teknik Komputer dan Jaringan (TKJ) yang mencintai seni tari cerita rakyat dan telah berpengalaman selama 3 tahun mengukir ragam prestasi.

---

## 📋 Realisasi 8 Kebutuhan Proyek

| No | Kebutuhan | Realisasi Teknis Berbasis HTML |
|---|---|---|
| **1** | **Halaman Utama: Selamat Datang Aku Meme** | [`index.html`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/index.html) — Menampilkan judul utama *"Selamat Datang, Aku Meme!"*, menyandingkan **foto asli Meme berbusana tari tradisional nusantara**, mengulas perpaduan dunia teknologi jaringan komputer (TKJ) SMK Telkom Malang dengan seni tari cerita rakyat. |
| **2** | **Halaman Profil** | [`profil.html`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/profil.html) — Menampilkan narasi autentik:<br>• *"Hai guyss selamat datang diprofil aku, perkenalkan nama aku Zaescia Putrisuta Rizkiillahi kalian bisa panggil aku MEME salam kenaall. Aku dari SK Telkom Malang jurusan TKJ atau Teknik Komputer dan Jaringan, umur aku sekarang 16 tahuunn. Salam kenal semuanyaaa!!!"*<br>• Filosofi mendalam seni tari: *"tari itu bukan hanya olah tubuh saja tapi juga menggambarkan sebuah cerita rakyat yang dimainkan dengan manusia. aku sudah 3 tahun belajar menari dengan menari aku bisa mendapatkan beberapa prestasi."* |
| **3** | **Halaman Kontak** | [`kontak.html`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/kontak.html) — Menampilkan kutipan kontak resmi:<br>• *"Kalau mau tau kegiatanku bisa langsung buka IG:@suguuuss_1201 TikTok:@permensuguss1"*<br>• Tautan langsung ke **Instagram:** [`@suguuuss_1201`](https://instagram.com/suguuuss_1201) dan **TikTok:** [`@permensuguss1`](https://tiktok.com/@permensuguss1).<br>• Formulir pesan langsung interaktif dengan pop-up konfirmasi. |
| **4** | **Konsep Warna: Biru Navy & Biru Langit / Biru Muda** | Mengusung estetika cerah (*light theme*) dengan perpaduan **Biru Navy** pekat (`#0F2547` & `#1E3A8A`) dan **Biru Langit / Muda** (`#38BDF8`, `#0284C7`, & `#E0F2FE`), latar belakang bersih nyaman dibaca. |
| **5** | **Gaya Bahasa: Semi Formal** | Bahasa Indonesia semi-formal yang santun, ramah, komunikatif, dan terstruktur rapi. |
| **6** | **Image: Foto & Gambar Ilustrasi** | • **Foto Asli:** Foto Meme berbusana tari tradisional ([`foto-meme.jpg`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/assets/images/foto-meme.jpg)).<br>• **Gambar Ilustrasi:** Ilustrasi vektor seni tari & jaringan komputer ([`tari-illustration.svg`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/assets/images/tari-illustration.svg)) dan ilustrasi perpesanan digital ([`contact-illustration.svg`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/assets/images/contact-illustration.svg)). |
| **7** | **Pengecualian Data Kontak Pribadi** | **Sesuai instruksi: 100% Bebas dari nomor handphone/WhatsApp, alamat rumah/sekolah, dan alamat email.** |
| **8** | **Optimasi Vercel (Berbasis HTML)** | Dilengkapi berkas konfigurasi resmi [`vercel.json`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/vercel.json) (*cleanUrls: true*, *security headers*, *cache control*), siap aktif (*live*) dalam hitungan detik. |

---

## 📁 Struktur Direktori Berkas

```text
web-profil-modern/
├── assets/
│   ├── css/
│   │   └── style.css                 # Tipografi & tema Biru Navy & Biru Langit
│   ├── js/
│   │   └── main.js                   # Validasi pesan, menu mobile & popup sukses
│   └── images/
│       ├── foto-meme.jpg             # Foto Asli Meme (Busana Tari Tradisional)
│       ├── tari-illustration.svg     # Ilustrasi Seni Tari & Jaringan TKJ
│       └── contact-illustration.svg  # Ilustrasi Komunikasi Biru Navy & Langit
├── index.html                        # 1. Halaman Utama: Selamat Datang Aku Meme
├── profil.html                       # 2. Halaman Profil: Zaescia Putrisuta R. (16 Th, TKJ)
├── kontak.html                       # 3. Halaman Kontak: IG @suguuuss_1201 & TikTok @permensuguss1
├── vercel.json                       # 8. Konfigurasi Vercel (Clean URLs & Headers)
├── package.json                      # Deskriptor proyek
└── README.md                         # Panduan lengkap
```

---

## 🚀 Cara Menjalankan & Upload ke Vercel

### 1. Menjalankan di Komputer Lokal
- Buka folder `C:\Users\USER\.gemini\antigravity\scratch\web-profil-modern`
- Klik ganda pada [`index.html`](file:///C:/Users/USER/.gemini/antigravity/scratch/web-profil-modern/index.html) untuk langsung membuka situs di peramban (Chrome, Edge, Firefox).

### 2. Upload ke Vercel via CLI
```bash
cd "C:\Users\USER\.gemini\antigravity\scratch\web-profil-modern"
npx vercel
```
Tekan `Enter` untuk opsi default. Website Anda akan langsung online dengan domain gratis dari Vercel.
