# CashFlow — Telegram Transaction Notifier

Aset utama: `img/projek/cashflow-telegram/output-chat-tele.jpg` (screenshot Telegram asli).
Arsip aset demo: `.dist/unused-assets/cashflow-20261015/` (diabaikan Git, bukan aset publik).
Folder `new-1` sudah dikosongkan dan dihapus setelah foto dipindahkan.
Halaman detail: `project.html?id=cashflow_telegram`.
Kategori: Otomasi. Jenis: Proyek Client (berbayar, menurut pemilik).

## Deskripsi singkat

Bot untuk client yang mengirim notifikasi pembayaran QRIS masuk dan pencairan
saldo GoPay Merchant ke Telegram. Dilengkapi penyimpanan SQLite, pencegahan
notifikasi duplikat, dan penanganan pengiriman ulang. Stack: Python, Node.js,
SQLite, Telegram Bot API, Docker.

## Aset yang disiapkan

Sesuai revisi pemilik, thumbnail, preview, dan gambar utama detail sekarang
menggunakan screenshot Telegram asli. Diagram dan gambar laporan demo berikut
tetap disimpan sebagai arsip, tetapi sudah dilepas dari halaman portfolio:

- `overview.svg`: diagram ringkas sumber → watcher → outbox → Telegram;
  ilustrasi arsitektur, bukan screenshot aplikasi.
- `demo-normal.png`: screenshot laporan HTML asli dari demo offline bawaan proyek.
- `demo-failures.png`: screenshot laporan skenario kegagalan dari demo yang sama.

Generator demo historis: `.dist/generate-cashflow-demo.py`. QA halaman terkini:
`.dist/check-project-assets.mjs`. Database demo terpisah berada di `.dist/` dan tidak
dipublikasikan. Jaringan diblokir selama generator demo dijalankan. Tidak membaca
`.env`, data transaksi client, atau menjalankan watcher/runner bot.

Screenshot memperlihatkan label SIMULASI dan memakai data fiktif. SENT berarti
sender simulasi, bukan bukti terkirim ke Telegram. Kedua skenario diuji ulang
dengan database sama: nol pemanggilan sender tambahan. Refund dan transfer lain
di laporan hanya skenario simulasi; cakupan integrasi yang ditampilkan di
portfolio adalah QRIS masuk dan pencairan saldo. Disclaimer integrasi lama di
laporan tetap dipertahankan agar screenshot tidak mengubah bukti asli demo.

## Screenshot lain yang layak ditampilkan

1. **Chat Telegram uang masuk + pencairan.** Gunakan salinan yang disensor:
   tutup referensi transaksi, nama/foto client, username, nama grup, ID akun,
   serta saldo/nominal bila tidak disetujui client. File asli
   `img/projek/cashflow-telegram/output-chat-tele.jpg` kini dipakai sesuai
   permintaan pemilik, tanpa penyensoran, dan tersedia untuk deployment berbasis Git.
2. **Ringkasan event/outbox.** Dua screenshot laporan offline sudah disiapkan;
   ini aman untuk menunjukkan normal flow dan recovery, tanpa database real.
3. **Deployment (opsional).** Screenshot status container dengan nama generik;
   sembunyikan IP server, hostname, volume path pribadi, dan konfigurasi secret.
   Jangan screenshot `.env`, token, QR login, OTP, atau sesi merchant.

Tidak perlu menampilkan halaman GoPay Merchant asli atau tabel transaksi real.
Screenshot yang dipilih masih memuat referensi transaksi asli.
Pastikan tampilan materi client sesuai izin/perjanjian sebelum publikasi.

## Dasar teknis

Ringkasan diverifikasi dari README, docs/02-architecture.md,
docs/11-payout-testing.md, sea_notifier/gopay_watch.py, demo.py, report.py,
dan output demo offline proyek sumber pada 15 Oktober 2026.
Tidak ada perubahan pada proyek bot sumber atau layanan client.
