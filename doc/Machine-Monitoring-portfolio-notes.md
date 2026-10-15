# Machine Monitoring Dashboard — portfolio

- Folder aset: `img/projek/machine-monitoring/`.
- Halaman: `project.html?id=machine_monitoring`.
- Kategori: Web. Status: WORKING — masih dalam pengembangan, belum selesai.
- Posisi: setelah CashFlow dan OCR, sebelum Bloxantara.
- Tidak menampilkan link Git, repository, atau source code.

## Screenshot

Tambahan dari pemilik: `foto-laporan-xlxs.jpg`, screenshot laporan Excel Mesin
Demo bertanggal 13 Oktober 2026. Ditampilkan setelah dialog ekspor, dengan link
ukuran asli dan keterangan ID/EN. File JPG tidak diubah; bukan unduhan workbook.
Gambar ini memuat identitas perusahaan pada laporan dari pemilik dan tidak
memakai banner capture yang digunakan pada lima screenshot antarmuka di bawah.

Lima PNG ditangkap sendiri dari frontend asli proyek: dashboard, status/grafik/
riwayat, form pengingat, pilihan ekspor, dan halaman login. Gambar tidak
direkonstruksi dengan AI atau diganti dengan desain dashboard baru.

Skrip `.dist/capture-machine-monitoring.mjs` membaca dashboard.html, login.html,
dan dashboard-reminders.js dari proyek sumber tanpa mengubahnya. Server preview
terpisah hanya menyediakan file frontend tersebut dan respons API fixture di
memori. Tidak menjalankan src/server.js, migrasi, database, SMTP, atau perangkat.
Tidak membaca `.env`, data operasional, atau profil browser pengguna.

Data, nama mesin, lokasi, email `operator@example.test`, waktu tampilan
15 Oktober 2026 15:30 WIB, dan pengingat adalah contoh. Setiap screenshot
memuat label SIMULASI PORTFOLIO / DATA FIKTIF. Timestamp dibekukan dan animasi
Chart.js dimatikan hanya pada harness screenshot agar hasil konsisten.
Library CDN asli frontend di-cache lokal di `.dist/machine-preview-vendor/`;
request browser ke internet diblokir saat capture, font memakai fallback lokal.

Ekspor hanya ditampilkan sebagai dialog pilihan format; tidak mengklaim download
backend, autentikasi OTP/PIN, atau pengiriman email telah diuji pada sesi ini.

## Dasar deskripsi

README.md, package.json, docs/preview-1-oktober-2026.md, dashboard.html,
dashboard-reminders.js, login.html, serta pembacaan reportFormats.js pada
15 Oktober 2026. Source memuat Node.js/Fastify/PostgreSQL, klasifikasi status,
rekap WIB, laporan Excel/PDF/CSV/TXT, pengingat runtime/komponen, dan alur akses
email–OTP–PIN. Integrasi fisik Kinco/M-IoT, satuan sensor, dan kalibrasi masih
memerlukan verifikasi. Lima screenshot buatan harness tidak memakai data client;
screenshot Excel tambahan ditampilkan sebagaimana diberikan pemilik.

Pemeriksaan tampilan portfolio: `.dist/check-project-assets.mjs`.
