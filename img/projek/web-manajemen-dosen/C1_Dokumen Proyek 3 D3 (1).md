## **LAPORAN DOKUMENTASI TEKNIS APLIKASI MANAJEMEN** 

## **DOKUMEN DOSEN (SIDORA)** 

## **Anggota Kelompok :** 

Azkha Nazzala Prasadha Dies (241511069) Dzakir Tsabit Asy Syafiq (241511071) Ibnu Hilmi Athaillah (241511079) Rahma Attaya Tamimah (241511088) Zahra Aldila (241511094) 

**PROGRAM STUDI D3 TEKNIK INFORMATIKA JURUSAN TEKNIK KOMPUTER DAN INFORMATIKA POLITEKNIK NEGERI BANDUNG** 

**2025** 

## **DAFTAR ISI** 

|BAB I PENJELASAN SPESIFIKASI FITUR SIDORA .......................................................... 6|
|---|
|1.1<br>DEFINISI FITUR ...................................................................................................... 6|
|1.1.1<br>Fitur Autentikasi dan Manajemen Pengguna ..................................................... 6|
|1.1.2<br>Upload dan Pengelolaan Dokumen .................................................................... 6|
|1.1.3<br>Manajemen Hak Akses Dokumen (Access Control) ......................................... 6|
|1.1.4<br>Versioning Dokumen ......................................................................................... 7|
|1.1.5<br>Evaluasi Dokumen oleh Kaprodi ....................................................................... 7|
|1.1.6<br>Kategori Dokumen ............................................................................................. 7|
|1.1.7<br>Profil Dosen ....................................................................................................... 8|
|1.1.8<br>Komentar Dokumen ........................................................................................... 8|
|1.1.9<br>Dashboard Berbasis Role ................................................................................... 8|
|1.2 OPERASI FITUR ............................................................................................................ 9|
|1.2.1 Operasi Fitur – Login Pengguna ............................................................................... 9|
|1.2.2 Operasi Fitur – Dahboard Pengguna ....................................................................... 10|
|1.2.3 Operasi Fitur – Upload Dokumen ........................................................................... 13|
|1.2.4 Operasi Fitur – Monitoring Dokumen (Tata Usaha) ............................................... 15|
|1.2.5 Operasi Fitur – Dokumen Saya ............................................................................... 18|
|1.2.6 Operasi Fitur – Hak Akses Dokumen ..................................................................... 21|
|1.2.7 Operasi Fitur – Detail Dokumen ............................................................................. 23|
|1.2.8 Operasi Fitur – Versioning Dokumen ..................................................................... 27|
|1.2.9 Operasi Fitur – Riwayat Upload ............................................................................. 30|
|1.2.10 Operasi Fitur – Notifikasi ..................................................................................... 33|
|BAB II PENJELASAN RANCANGAN ................................................................................. 37|
|2.1 ANTARMUKA .............................................................................................................. 37|
|2.1.1<br>Antarmuka Role Dosen .................................................................................... 37|



|2.1.2<br>Antarmuka Role Tata Usaha (TU) ................................................................... 40|
|---|
|2.1.3<br>Antarmuka Role Kaprodi ................................................................................. 42|
|2.1.4<br>Alur Navigasi Aplikasi ..................................................................................... 42|
|2.2 DATABASE ................................................................................................................... 44|
|2.2.1 Conseptual Data Model (CDM) .............................................................................. 44|
|2.2.2 Physical Data Model (PDM):.................................................................................. 47|
|2.3 END POINT................................................................................................................... 50|
|BAB III HASIL IMPLEMENTASI ......................................................................................... 51|
|3.1 CAPAIAN PENGEMBANGAN.................................................................................... 51|
|3.1.1 Halaman Login........................................................................................................ 51|
|3.1.2 Halaman Dashboard ................................................................................................ 53|
|3.2 SARAN PENGEMBANGAN SELANJUTNYA .......................................................... 67|
|3.3 KENDALA DAN KONSTRIBUSI ANGGOTA ........................................................... 68|
|3.3.1 Kendala ................................................................................................................... 68|
|3.3.2 Kontribusi Anggota ................................................................................................. 68|



## **DAFTAR  GAMBAR** 

Gambar 2.2. 1 Conceptual Data Model SiDoRa ...................................................................... 45 Gambar 2.2. 2 Physical Data Model SiDoRa .......................................................................... 48 

## **DAFTAR TABEL** 

Tabel 1. 1 Rendering Konten Berdasarkan Role ...................................................................... 12 Tabel 1. 2 Daftar Tabel Baru ke Access Control ...................................................................... 24 Tabel 1. 3 Aksi pengelolaan versi dokumen berdasarkan peran pengguna .............................. 28 Tabel 3.  1 Summary Pengujian Halaman Login ..................................................................... 54 Tabel 3.  2 Daftar Bug Halaman Login .................................................................................... 55 Tabel 3.  3 Summary Pengujian Halaman Dashboard ............................................................. 57 Tabel 3.  4 Daftar Bug Halaman Dashboard ............................................................................ 57 Tabel 3.  5 Summary Pengujian Halaman Dokumen Saya ...................................................... 59 Tabel 3.  6 Daftar Bug Halaman Dokumen Saya ..................................................................... 59 Tabel 3.  7 Summary Pengujian Halaman Dokumen Saya ...................................................... 60 Tabel 3.  8 Daftar Bug Halaman Dokumen Saya ..................................................................... 61 Tabel 3.  9 Sunnary Pengujian Halaman Riwayat Upload Dosen Saya ................................... 62 Tabel 3.  10 Daftar Bug Halaman Riwayat Upload Dokumen (Dosen) ................................... 62 Tabel 3.  11 Daftar Bug Halaman Upload Dokumen ............................................................... 64 Tabel 3.  12 Summary Pengujian Monitoring Dokumen (TU) ................................................ 66 Tabel 3.  13 Summary Pengujian Halaman Riwayat Upload (TU) .......................................... 68 Tabel 3.  14 Summary Pengujian Halaman Daftar Dokumen (Kaprodi) ................................. 70 Tabel 3.  15 Daftar Bug Halaman Daftar Dokumen (Kaprodi) ................................................ 70 Tabel 3.  16 Summary Pengujian Halaman Portofolio............................................................. 72 Tabel 3.  17 Daftar Bug Halaman Portofolio & Integrasi PDDikti .......................................... 72 Tabel 3.  18 Summary Pengujian Halaman Manajemen Pengguna ......................................... 75 Tabel 3.  19 Daftar Bug Halaman Manajemen Pengguna ........................................................ 75 Tabel 3.  20 Summary Pengujian Halaman Notifikasi ............................................................. 77 Tabel 3.  21 Daftar Bug Halaman Notifikasi ........................................................................... 78 Tabel 3.  22 Kendala ................................................................................................................ 79 Tabel 3.  23 Kontribusi Anggota .............................................................................................. 79 

## **BAB I** 

## **PENJELASAN SPESIFIKASI FITUR SIDORA** 

## **1.1 DEFINISI FITUR** 

## **1.1.1 Fitur Autentikasi dan Manajemen Pengguna** 

Fitur autentikasi digunakan untuk memastikan bahwa hanya pengguna yang berhak yang dapat mengakses aplikasi. 

Operasi yang tersedia: 

- Login menggunakan email dan password. 

- Pengelolaan akun oleh admin (create, update, delete). 

- Penentuan role pengguna: Admin, TU, Dosen, Kaprodi. 

- Akses dashboard sesuai role masing-masing. 

## Tujuan: 

Menjamin keamanan akses aplikasi dan mengatur hak pengguna berdasarkan perannya. 

## **1.1.2 Upload dan Pengelolaan Dokumen** 

Fitur ini digunakan oleh dosen dan TU untuk mengunggah dokumen administrasi. 

Pemisahan berdasarkan role: 

- Dokumen yang diunggah oleh Dosen: RPS, BKD, SKP, Bukti Pengajaran, Portofolio. 

- Dokumen yang diunggah oleh TU: SK, Surat Tugas. 

Operasi yang tersedia: 

- Upload file dan mengisi metadata dokumen (judul, deskripsi, kategori). 

- Melihat daftar dokumen yang telah diunggah. 

- Mengedit informasi dokumen (judul, deskripsi). 

- Melihat detail dokumen. 

## Tujuan: 

Menyediakan sistem penyimpanan dokumen yang terstruktur dan mudah diakses. 

## **1.1.3 Manajemen Hak Akses Dokumen (Access Control)** 

Fitur ini mengatur siapa saja yang boleh melihat dokumen tertentu. 

## Operasi: 

- TU dapat memilih dosen tertentu yang boleh mengakses SK/Surat Tugas. 

- Dosen dapat mengatur hak akses dokumen pribadinya untuk: 

   - TU 

   - Kaprodi 

- Sistem mencatat pemberi akses dan penerima akses. 

Tujuan: 

Menjamin keamanan dan kerahasiaan dokumen sesuai kebutuhan masing-masing pengguna. 

## **1.1.4 Versioning Dokumen** 

Setiap kali pengguna mengunggah dokumen revisi atau memperbarui file, sistem membuat versi baru. 

Operasi: 

- Sistem otomatis membuat versi baru untuk file yang diperbarui. 

- Menyimpan histori versi sebelumnya, termasuk catatan perubahan (opsional) untuk mendeskripsikan alasan revisi. 

- Menampilkan riwayat versi dokumen, beserta catatan perubahan jika ada. 

Tujuan: 

Memudahkan pelacakan perubahan dokumen dari waktu ke waktu tanpa menghapus versi lama, dengan tambahan catatan untuk transparansi revisi. 

- **1.1.5 Evaluasi Dokumen oleh Kaprodi** 

Kaprodi memiliki fitur untuk melakukan review dan memberikan evaluasi pada 

dokumen dosen. 

Operasi: 

- Melihat dokumen yang diberikan akses oleh dosen. 

- Memberikan komentar/feedback pada dokumen. 

- Memberikan status evaluasi seperti: 

   - Valid 

   - Perlu revisi 

   - Ditolak 

Tujuan: 

Mendukung proses penilaian dan verifikasi dokumen administrasi dosen. 

## **1.1.6 Kategori Dokumen** 

Fitur ini digunakan untuk mengelompokkan dokumen berdasarkan jenisnya. 

Operasi: 

- Admin/TU mengelola kategori dokumen. 

- Dosen memilih kategori ketika mengunggah dokumen. 

- Sistem menampilkan dokumen berdasarkan kategori. 

Tujuan: 

Memudahkan klasifikasi, pencarian, dan pengelompokan dokumen. 

## **1.1.7 Profil Dosen** 

Fitur ini menampilkan data profil dosen yang tersimpan dalam sistem. 

Operasi: 

- Menampilkan foto profil, biodata, dan kontak dosen. 

- Menyimpan URL referensi profil (misalnya dari PDDikti). 

- Menyimpan informasi riwayat pengajaran (jika diunggah TU). 

## Tujuan: 

Menjadi pusat data pribadi dosen yang berkaitan dengan administrasi akademik. 

## **1.1.8 Komentar Dokumen** 

Fitur yang memungkinkan Kaprodi memberikan komentar pada dokumen untuk tujuan 

evaluasi. 

Operasi: 

- Menambahkan komentar. 

- Melihat daftar komentar pada dokumen. 

- Menyertakan tanggal komentar dan status evaluasi. 

## Tujuan: 

Mendukung proses komunikasi antara Kaprodi dan dosen terkait perbaikan dokumen. 

## **1.1.9 Dashboard Berbasis Role** 

Setiap role memiliki tampilan dashboard berbeda. 

TU: 

- Dokumen SK & Surat Tugas 

- Riwayat Pengajaran 

- Pengelolaan dosen yang diberi akses 

## Dosen: 

- Dokumen pribadi (RPS, BKD, SKP, dll) 

- Akses dokumen dari TU 

- Riwayat versi dokumen 

## Kaprodi: 

- Dokumen dosen yang diberikan akses 

- Fitur evaluasi & komentar 

## Admin: 

- Manajemen pengguna 

- Manajemen kategori 

Tujuan: 

Menyediakan antarmuka yang relevan dengan kebutuhan setiap role. 

## **1.2 OPERASI FITUR** 

## **1.2.1 Operasi Fitur – Login Pengguna** 

## **1. Deskripsi Operasi** 

Fitur login digunakan untuk memverifikasi identitas pengguna sebelum masuk ke dalam sistem SiDoRa. Setiap pengguna (Admin, TU, Dosen, Kaprodi) harus melakukan login menggunakan email dan password yang terdaftar. 

## **2. Input** 

- Email 

- Password 

## **3. Proses & Validasi** 

## a. Validasi Input 

- Email tidak boleh kosong. 

- Email harus sesuai format (contoh: user@example.com). 

- Password tidak boleh kosong. 

- Password minimal 6 karakter (opsional, sesuai aturan sistem). 

Jika ada validasi yang gagal → sistem menampilkan pesan kesalahan. 

## b. Proses Autentikasi 

1. Sistem mencocokkan email dengan data pada tabel users. 

2. Jika email ditemukan, sistem melakukan verifikasi kecocokan password melalui hashing. 

3. Jika password cocok: 

   - Sistem membuat sesi login. 

   - Sistem mengambil data role dari user. 

   - Sistem mengarahkan pengguna ke dashboard sesuai role: 

      - Admin → dashboard admin 

      - TU → dashboard TU 

      - Dosen → dashboard dosen 

      - Kaprodi → dashboard kaprodi 

4. Jika password tidak cocok: 

   - Sistem menampilkan pesan “Email atau password salah”. 

- c. Validasi Status Akun 

Sebelum login berhasil dilakukan, sistem juga memeriksa: 

- Apakah akun berstatus aktif atau nonaktif. 

- Jika akun nonaktif → menampilkan pesan "Akun tidak aktif, hubungi admin". 

## **4. Output** 

- Berhasil: 

   - Pengguna diarahkan ke halaman dashboard sesuai perannya. 

   - Sistem membuat session/auth token. 

   - Sistem menampilkan pesan “Login berhasil”. 

- Gagal: 

   - Pesan kesalahan seperti: 

      - “Email tidak ditemukan” 

      - “Password salah” 

      - “Akun tidak aktif” 

      - “Format email tidak valid” 

      - “Field tidak boleh kosong” 

## **5. Target Output / Dampak** 

- Pengguna berhasil masuk dan dapat mengakses fitur sesuai role. 

- Sistem memastikan bahwa hanya pengguna yang valid dan berotorisasi yang bisa mengakses aplikasi. 

- Dashboard dan menu akan beradaptasi berdasarkan role pengguna. 

## **1.2.2 Operasi Fitur – Dahboard Pengguna** 

## **1. Deskripsi Operasi** 

Dashboard Pengguna adalah halaman utama yang ditampilkan setelah pengguna berhasil melakukan login. Dashboard digunakan untuk memberikan informasi ringkas mengenai aktivitas dan data penting berdasarkan peran masing-masing pengguna. 

Fitur dashboard bersifat role-based, artinya konten akan menyesuaikan dengan role pengguna di sistem SiDoRa, yaitu: 

- Admin 

- Tata Usaha (TU) 

- Dosen 

- Kaprodi 

Dashboard membantu pengguna memantau aktivitas terkini secara cepat dan mengakses fitur lain dengan mudah. 

## **2. Input** 

Dashboard tidak menerima input langsung dari pengguna, namun membutuhkan data 

dari sistem berdasarkan: 

- ID pengguna yang sedang login 

- Role pengguna 

- Data dokumen (jumlah, kategori, status) 

- Riwayat aktivitas unggah 

- Data profil pengguna 

- Notifikasi (jika tersedia) 

## **3. Proses & Validasi** 

## **a. Validasi Akses** 

- Sistem mengecek session untuk memastikan pengguna sudah login. 

- Sistem membaca role pengguna dari database: 

   - admin 

   - tu 

   - dosen 

   - kaprodi 

- Jika role tidak valid → alihkan ke halaman login. 

## **b. Pengambilan Data Statistik (Role Based)** 

## **1. Untuk Dosen** 

- Total Dokumen RPS 

- Total Dokumen SKP 

- Total Dokumen BKD 

- Riwayat upload dokumen 

- Grafik aktivitas unggahan 

## **2. Untuk Tata Usaha** 

- Jumlah SK yang diunggah 

- Jumlah Surat Tugas 

## **3. Untuk Kaprodi** 

- Jumlah dokumen dosen yang sedang menunggu evaluasi 

- Jumlah dokumen valid / revisi 

## **4. Untuk Admin** 

- Total pengguna 

- Total kategori dokumen 

- Log aktivitas sistem 

Sistem akan mengambil data dari tabel: users, dokumen, access_control, 

komentar, versi_dokumen. 

## **c. Pengolahan Data** 

Sistem melakukan: 

- Perhitungan jumlah dokumen per kategori. 

- Perhitungan total upload per hari/bulan untuk grafik. 

- Penyusunan dataset untuk chart. 

- Mengambil profil & nama role untuk menampilkan sapaan personal. 

## **d. Rendering Konten Berdasarkan Role** 

Frontend menampilkan elemen UI berbeda berdasarkan role: 

Tabel 1. 1 Rendering Konten Berdasarkan Role 

|**Role**|**Yang ditampilkan**|
|---|---|
|Dosen|Statistik RPS/SKP/BKD, grafik unggah, tombol Upload Cepat|
|TU|Statistik SK, Surat Tugas, dokumen terbaru, akses kontrol|
|Koordinator|Dokumen menunggu verifikasi, ringkasan evaluasi|
|Administrator|Statistik user, kategori, aktivitas sistem|



## **e. Validasi Output** 

Jika data kosong: 

- Menampilkan nilai **0** untuk statistik. 

- Grafik menampilkan “Tidak ada aktivitas”. 

- Tidak terjadi error pada tampilan UI. 

## **4. Output** 

Dashboard akan menghasilkan: 

- Card Statistik Dokumen (menyesuaikan role) 

- Grafik Aktivitas Unggah Dokumen (jika role membutuhkan) 

- Daftar aktivitas terbaru 

- Menu navigasi (Dashboard, Dokumen Saya, Upload, Riwayat, Portofolio, Admin Panel) 

- Profil pengguna + role 

- Notifikasi (jika tersedia) 

Semua output telah difilter agar sesuai dengan hak akses dan peran pengguna. 

## **5. Target Output / Dampak** 

- Pengguna dapat melihat ringkasan aktivitas secara cepat. 

- Dashboard menjadi pusat navigasi untuk fitur lainnya. 

- Data yang ditampilkan lebih relevan sesuai role. 

- Memudahkan pengguna memahami status dokumen dan aktivitas terkini tanpa harus membuka halaman lain. 

## **1.2.3 Operasi Fitur - Portofolio & Integrasi PDDikti (Dosen)** 

## **1. Deskripsi Operasi Fitur Portofolio & Integrasi PDDikti** 

Memungkinkan dosen untuk menghubungkan akun SiDoRa mereka dengan data resmi yang tercatat di Pangkalan Data Pendidikan Tinggi (PDDikti) Kemdikbud. Fitur ini menggunakan teknologi _web scraping_ untuk menarik data biodata, riwayat pendidikan, serta statistik tridharma (penelitian, publikasi, pengabdian) secara otomatis, sehingga dosen tidak perlu menginput data secara manual. 

## **2. Input** 

- Pencarian: Nama Lengkap Dosen (sesuai data PDDikti). 

- Konfirmasi Import: Memilih profil yang tepat dari hasil pencarian. 

- Update Manual: Foto Profil, Bio Singkat, Bidang Keahlian, No. Telepon, Email Institusi. 

- Trigger Refresh: Tombol untuk memperbarui data (re-scrape). 

## **3. Proses & Validasi** 

- a. Proses Pencarian (Scraping Strategy) 

Sistem menggunakan PddiktiScraperService dengan strategi pencarian bertingkat untuk memastikan data ditemukan: 

   **1.** Strategi 1 (Web Search): Mencari langsung melalui halaman pencarian web PDDikti dan mem-parsing hasil HTML. 

   **2.** Strategi 2 (API Fallback): Jika web search gagal, sistem mencoba mengakses endpoint API publik PDDikti. 

   **3.** Caching: Hasil pencarian disimpan dalam cache (Redis/File) selama 1 jam untuk mempercepat pencarian berulang. 

- b. Proses Import & Parsing Data Setelah dosen memilih profil: 

- Sistem mengakses URL detail dosen. 

- _DOM Crawler_ mengekstrak data spesifik: NIDN, Jabatan Fungsional, Kepangkatan, Riwayat Pendidikan, dan Statistik Tridharma. 

- Data disimpan ke tabel profil_dosen. 

## **c. Validasi & Verifikasi** 

- Validasi Nama: Input pencarian minimal 3 karakter. 

- Verifikasi Profil: Profil yang baru diimpor berstatus _Unverified_ hingga dosen atau admin memverifikasinya. 

- Rate Limiting: Mencegah request berlebihan ke server PDDikti. 

## **4. Output** 

- Halaman Portofolio: Menampilkan kartu nama digital, statistik tridharma, dan riwayat pendidikan. 

- Data Tersimpan: NIDN, NIP, Jabatan Fungsional, dan data akademik lainnya tersimpan di database lokal. 

- Status Sinkronisasi: Menampilkan waktu terakhir data diambil ( _Last Scraped At_ ). 

## **5. Target Output / Dampak** 

- Meminimalisir kesalahan input data manual oleh dosen. 

- Memastikan data di SiDoRa sinkron dengan data nasional (PDDikti). 

- Menyediakan portofolio dosen yang lengkap secara instan. 

## **1.2.4 Operasi Fitur – Upload Dokumen** 

## **1. Deskripsi Operasi** 

Fitur Upload Dokumen memungkinkan pengguna (Dosen dan TU) untuk mengunggah dokumen baru ke dalam sistem SiDoRa. Dokumen yang diunggah dapat berupa RPS, BKD, SKP, SK, Surat Tugas, portofolio, maupun dokumen lainnya yang didukung oleh aplikasi. Pengguna mengisi form yang telah disediakan, kemudian sistem menyimpan file beserta metadata ke database, serta membuat hak akses dokumen sesuai pilihan pengguna. 

## **2. Input** 

Form Upload menyediakan beberapa field input berikut: 

1. Judul Dokumen (required) 

2. Nomor Dokumen (opsional, khusus dokumen resmi) 

3. Tanggal Terbit (required) 

4. Kategori Dokumen (required) 

5. Deskripsi Dokumen (required) 

6. Upload File 

Format yang diperbolehkan: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG Maksimal ukuran: 20 MB 

7. Hak Akses 

   - Daftar pengguna yang diperbolehkan membaca dokumen 

   - Minimal memilih 1 pengguna (untuk Dosen → TU/Kaprodi, untuk TU → Dosen) 

## **3. Proses & Validasi** 

## **a. Validasi Input** 

Sistem melakukan validasi sebagai berikut: 

- Judul wajib diisi. 

- Tanggal terbit wajib diisi dan harus berformat tanggal yang valid. 

- Kategori dokumen wajib dipilih. 

- File wajib dipilih. 

- Format file harus sesuai dengan tipe yang diperbolehkan. 

- Ukuran file tidak boleh melebihi 20 MB. 

- Hak akses harus berisi minimal 1 pengguna. 

- Jika nomor dokumen diisi, formatnya harus teks yang valid (tidak boleh karakter aneh). 

Jika salah satu validasi gagal → sistem menampilkan pesan error. 

## **b. Proses Penyimpanan Dokumen** 

Jika semua input valid, sistem akan: 

1. Menyimpan file ke storage lokal atau cloud (sesuai konfigurasi). 

2. Membuat entri baru pada tabel dokumen: 

   - judul 

   - nomor_dokumen 

   - tanggal_terbit 

   - kategori_id 

   - file_path 

   - deskripsi 

   - created_by (pengupload) 

   - owner_user_id (pemilik dokumen) 

   - status (draft/default) 

3. Sistem membuat entri versi awal di tabel versi_dokumen dengan: 

   - nomor_versi = 1 

   - file_path versi 

   - timestamp upload 

## **c. Proses Penyimpanan Hak Akses** 

Setelah dokumen tersimpan: 

1. Sistem menyimpan daftar pengguna yang dipilih pada tabel access_control: 

   - document_id 

   - grantee_user_id 

   - perm/can_read (default: read) 

   - created_by 

2. Sistem hanya menambahkan akses yang memang dipilih oleh pengguna. Contoh: 

   - Dosen → memberikan akses ke Kaprodi dan/atau TU 

   - TU → memberikan akses ke dosen tertentu 

## **d. Feedback Kepada Pengguna** 

Jika proses sukses: 

- Sistem menampilkan pesan “Dokumen berhasil diunggah.” 

- Pengguna diarahkan ke halaman Dokumen Saya atau menampilkan form kosong untuk upload baru. 

Jika gagal: 

- Menampilkan pesan error validasi atau error terkait penyimpanan file. 

## **4. Output** 

Output dari fitur Upload Dokumen berupa: 

- Dokumen baru tercatat di database. 

- File tersimpan pada storage. 

- Riwayat versi pertama terbuat. 

- Hak akses tercatat pada tabel access_control. 

- Dokumen muncul pada halaman Dokumen Saya milik pengupload. 

- Penerima akses dapat melihat dokumen pada halaman mereka (jika role mengizinkan). 

## **5. Target Output / Dampak** 

Fitur upload dokumen memastikan bahwa: 

- Dokumen dosen dapat tersimpan secara aman di sistem. 

- Dokumen resmi (SK/Surat Tugas) didistribusikan oleh TU ke dosen yang berhak. 

- Hak akses dokumen dikelola dengan benar sesuai kebutuhan. 

- Dokumen dapat digunakan untuk keperluan evaluasi, arsip, dan portofolio dosen. 

## **1.2.5 Operasi Fitur – Monitoring Dokumen (Tata Usaha)** 

## **1. Deskripsi Operasi** 

Fitur Monitoring Dokumen digunakan oleh Tata Usaha (TU) untuk memantau seluruh 

dokumen yang telah diunggah oleh dosen dalam sistem SiDoRa. TU dapat melihat: 

- Daftar dokumen milik semua dosen 

- Filter dokumen berdasarkan kategori (SK, Surat Tugas, RPS, SKP, BKD, Bukti Pengajaran, dll) 

- Informasi pemilik dokumen 

- Tanggal upload 

- Versi dokumen 

- Status akses 

Fitur ini diperlukan untuk mengelola dokumen resmi serta memantau kelengkapan administrasi dosen. 

## **2. Input** 

Fitur ini menerima beberapa input berupa: 

1. Filter kategori dokumen 

2. Keyword pencarian nama dokumen / nama dosen 

3. Pagination (halaman 1, 2, dst) 

4. Role = TU (Menentukan UI dan data yang diambil) 

5. Optional: Filter berdasarkan pemilik dokumen (nama dosen) 

## **3. Proses & Validasi** 

## **a. Pengambilan Data Dokumen** 

Sistem mengambil dokumen dari database: 

- Semua dokumen yang boleh dilihat oleh TU 

- Termasuk dokumen: 

   - SK & Surat Tugas (dibuat oleh TU) 

`o` Dokumen dari dosen yang memberi akses ke TU 

Proses: 

1. Join tabel dokumen → users (untuk nama pemilik dokumen) 

2. Filter berdasarkan hak akses (access_control) 

3. Ambil kategori dokumen 

4. Ambil versi terbaru dari versi_dokumen 

## **b. Filter Berdasarkan Kategori** 

Jika TU memilih kategori tertentu: 

- Sistem hanya menampilkan dokumen yang cocok. 

Contoh: 

- “RPS” → semua dokumen kategori RPS dari seluruh dosen. 

- “SK” → khusus dokumen SK yang diunggah TU. 

- “Bukti Pengajaran” → dokumen bukti ajar. 

Validasi: 

- Jika kategori tidak ada → tampilkan pesan “Tidak ada dokumen pada kategori ini”. 

## **c. Pencarian Dokumen** 

Kolom pencarian memungkinkan TU mencari berdasarkan: 

- Judul dokumen 

- Nomor dokumen 

- Nama dosen 

Contoh: 

- Input “komp” → “RPS Komputer Grafik” 

- Input “Andi” → dokumen milik dosen Andi 

Validasi: 

- Jika tidak ada hasil → tampilkan “Dokumen tidak ditemukan”. 

## **d. Menampilkan Versi Terbaru** 

- Sistem mengambil versi terakhir dari tabel versi_dokumen. 

- Ditampilkan dalam bentuk badge (misal: v1, v2, v4). 

## **e. Aksi pada Dokumen** 

Setiap baris menyediakan beberapa aksi: 

1. Detail 

   - Melihat detail dokumen 

   - Melihat versi, metadata, kategori, file 

2. Hak Akses (opsional) 

   - Hanya muncul pada SK atau Surat Tugas 

   - TU dapat menambah/menghapus dosen yang diizinkan membaca dokumen tersebut 

3. Riwayat Versi 

   - Menampilkan daftar versi dokumen 

## **f. Pagination** 

- Sistem membatasi dokumen per halaman (misal 5 dokumen). 

- Navigasi halaman tetap mempertahankan filter/pencarian aktif. 

## **4. Output** 

Fitur Monitoring Dokumen menghasilkan tampilan: 

- Tabel semua dokumen yang dapat diakses TU 

- Kolom: 

   - Nomor urut 

   - Nama dokumen 

   - Versi terbaru 

   - Kategori 

   - Nama pemilik dokumen (dosen) 

   - Tanggal upload 

   - Aksi (Detail / Hak Akses / Riwayat) 

- Total dokumen di bagian bawah 

- Pagination 

- Tab filter kategori 

- Kolom pencarian 

- Informasi lengkap mengenai pemilik dokumen 

## **5. Target Output / Dampak** 

Fitur ini memudahkan TU untuk: 

- Mengawasi dokumen milik dosen 

- Memastikan dokumen administrasi lengkap dan terarsip dengan baik 

- Mengatur hak akses untuk dokumen resmi seperti SK dan Surat Tugas 

- Melakukan monitoring tanpa mengubah dokumen dosen 

- Menjadi pusat kontrol dokumen yang berhubungan dengan TU 

## **1.2.6 Operasi Fitur – Dokumen Saya** 

## **1. Deskripsi Operasi** 

Fitur Dokumen Saya memungkinkan dosen untuk melihat, mengelola, dan memantau seluruh dokumen yang telah mereka unggah ke dalam sistem SiDoRa. Halaman ini berfungsi sebagai pusat pengelolaan dokumen pribadi dosen dengan menyediakan: 

- Daftar seluruh dokumen yang pernah diunggah 

- Filter dokumen berdasarkan kategori (RPS, SKP, BKD, Bukti Pengajaran, dll) 

- Fitur pencarian dokumen 

- Tampilan versi terbaru dari dokumen 

- Aksi untuk mengatur hak akses 

- Aksi untuk membuka halaman detail dokumen 

- Pagination jika dokumen sudah banyak 

## **2. Input** 

Meskipun tidak mengisi form, fitur ini menerima input dari pengguna melalui: 

1. Filter kategori dokumen 

   - Semua 

   - Bukti Pengajaran 

   - BKD 

   - RPS 

   - SKP 

2. Keyword pencarian nama dokumen 

3. Klik aksi (Hak Akses / Detail) 

4. Pagination 

Sistem juga membutuhkan input internal berupa: 

- ID pengguna (dosen) 

- Role = dosen 

## **3. Proses & Validasi** 

## **a. Pengambilan Data Dokumen** 

Sistem mengambil dokumen dari tabel dokumen dengan kondisi: 

- owner_user_id = ID dosen yang sedang login 

Proses meliputi: 

- Join ke tabel kategori untuk mendapatkan nama kategori 

- Join ke tabel versi_dokumen untuk mengambil versi terbaru 

- Urutkan berdasarkan tanggal upload (paling baru di atas) 

## **b. Filter Berdasarkan Kategori** 

Ketika pengguna memilih salah satu kategori: 

- Sistem menampilkan hanya dokumen yang sesuai dengan kategori tersebut. 

- Validasi: 

   - Jika kategori dipilih tetapi kosong → tampilkan pesan “Tidak ada dokumen pada kategori ini”. 

## **c. Pencarian Dokumen** 

Ketika pengguna mengetik pada kolom pencarian: 

- Sistem melakukan pencarian berdasarkan judul dokumen. 

- Pencarian bersifat partial match ( _contains_ ). 

Validasi: 

- Jika pencarian tidak menemukan dokumen → tampilkan “Dokumen tidak ditemukan”. 

## **d. Menampilkan Versi Dokumen** 

Untuk setiap dokumen, sistem mengambil: 

- versi terbaru (max nomor_versi) 

- Menampilkan badge seperti: v1, v2, v4 

## **e. Menampilkan Aksi Dokumen** 

Setiap dokumen memiliki dua menu aksi: 

## **1. Hak Akses** 

- Mengarahkan dosen untuk mengatur akses kepada TU dan/atau Kaprodi 

- Sistem membawa dokumen_id ke halaman berikutnya 

## **2. Detail** 

- Menampilkan halaman rinci berisi: 

   - Metadata dokumen 

   - File dokumen 

   - Riwayat versi 

   - Kategori 

   - Tanggal upload 

   - Pengguna yang diberi akses 

## **f. Pagination** 

- Ketika dokumen sudah banyak, sistem menampilkan pagination (halaman 1 → 

   - 2 → 3). 

- Pagination mempertahankan filter dan pencarian yang aktif. 

## **4. Output** 

Setelah semua proses, halaman menampilkan: 

- Daftar dokumen yang diunggah dosen 

- Kolom tabel: 

   - Nomor 

   - Nama dokumen 

   - Badge versi (v1, v2, …) 

   - Kategori 

   - Tanggal upload 

   - Aksi (Hak Akses / Detail) 

- Tab filter kategori 

- Kolom pencarian dokumen 

- Total jumlah dokumen di bagian bawah 

- Navigasi pagination 

Jika tidak ada dokumen: 

- Halaman akan menampilkan pesan "Belum ada dokumen". 

## **5. Target Output / Dampak** 

Fitur Dokumen Saya memastikan bahwa: 

- Dosen dapat mengelola dokumen pribadinya secara mandiri 

- Dosen dapat memantau kelengkapan administrasi mereka 

- Dosen dapat mengatur hak akses dokumen mereka ke TU dan Kaprodi 

- Sistem menyediakan daftar dokumen yang terorganisir dan mudah dicari 

- Dosen dapat membuka informasi detail dokumen dengan cepat 

## **1.2.7 Operasi Fitur – Hak Akses Dokumen** 

## **1. Deskripsi Operasi** 

Fitur Hak Akses Dokumen memungkinkan pengguna untuk mengatur siapa saja yang 

dapat melihat dokumen tertentu. Fitur ini digunakan oleh dua role utama: 

## **1) Dosen** 

- Mengatur akses dokumen pribadi 

- Memberikan izin ke: 

   - TU 

   - Kaprodi 

- Setiap dokumen wajib memiliki minimal 1 penerima akses (selain dirinya sendiri) 

## **2) Tata Usaha (TU)** 

- Mengatur akses dokumen SK & Surat Tugas 

- Memilih dosen mana yang berhak menerima dokumen tersebut 

- Bisa menambah atau mencabut akses dosen kapan saja 

Fitur ini mengandalkan tabel access_control sebagai penyimpanan daftar pengguna 

yang diizinkan mengakses dokumen. 

## **2. Input** 

Fitur ini menerima input dari form berikut: 

1. Document ID (otomatis, dari tombol Hak Akses) 

2. Daftar pengguna yang dipilih (checkbox / dropdown multiselect) 

3. User ID pemberi akses (otomatis) 

4. Jenis izin akses (default: read / tidak editable) 

5. Catatan opsional (jika ada) 

## **3. Proses & Validasi** 

## **a. Validasi Hak Pengguna** 

Sistem memastikan: 

- Dosen hanya dapat mengatur akses dokumen miliknya sendiri 

- TU hanya dapat mengatur akses untuk dokumen kategori SK & Surat Tugas 

- Kaprodi dan Admin tidak bisa mengubah hak akses 

Jika tidak sesuai → sistem menolak dan menampilkan notifikasi “Anda tidak 

memiliki izin untuk mengatur hak akses dokumen ini.” 

## **b. Validasi Input Pilihan Pengguna** 

Sistem melakukan validasi: 

- Minimal harus memilih 1 pengguna (selain pemilik dokumen) 

- Tidak boleh memberikan akses kepada dirinya sendiri (karena otomatis sudah punya akses) 

- Pengguna yang sama tidak boleh dipilih dua kali 

Jika gagal → sistem menampilkan pesan error seperti: 

- “Pilih minimal 1 pengguna untuk diberikan akses.” 

- “Pengguna sudah memiliki akses.” 

## **c. Proses Penyimpanan Hak Akses** 

Jika validasi berhasil: 

1. Sistem menghapus daftar hak akses lama (untuk dokumen tersebut) 

2. Sistem menyimpan daftar baru ke tabel access_control: 

Tabel 1. 2 Daftar Tabel Baru ke Access Control 

|**Field**|**Isi**|
|---|---|
|document_id|ID dokumen yang diatur|
|grantee_user_id|ID pengguna yang diberi akses|
|perm|read|
|created_by|user yang mengatur hak|



3. Sistem mencatat waktu perubahan (timestamp) 

## **d. Feedback Kepada Pengguna** 

Jika proses berhasil: 

- Menampilkan pesan “Hak akses berhasil diperbarui.” 

- Mengembalikan pengguna ke halaman “Dokumen Saya” atau “Monitoring Dokumen” 

Jika gagal: 

- Menampilkan pesan error sesuai validasi 

## **4. Output** 

Setelah hak akses diatur, sistem menghasilkan: 

- Daftar baru pengguna yang dapat mengakses dokumen 

- Pembaruan tabel access_control 

- Dokumen tampil pada halaman: 

   - Dokumen Saya (untuk dosen pemilik) 

   - Monitoring Dokumen (untuk TU) 

   - Dokumen Dosen (untuk Kaprodi) 

- Perubahan hak akses langsung berlaku tanpa reload server 

## **5. Target Output / Dampak** 

Fitur ini memastikan bahwa: 

- Dokumen hanya dapat diakses oleh pihak yang berhak 

- Dosen memiliki kontrol penuh atas dokumen pribadi mereka 

- TU dapat mendistribusikan SK/Surat Tugas ke dosen yang tepat 

- Akses dokumen bersifat fleksibel dan bisa diubah kapan saja 

- Keamanan dan privasi dokumen tetap terjaga 

- Sistem dapat melakukan filtering dokumen berdasarkan per-role dengan benar 

## **1.2.8 Operasi Fitur – Detail Dokumen** 

## **1. Deskripsi Operasi** 

Fitur Detail Dokumen digunakan untuk menampilkan informasi lengkap dari sebuah 

dokumen yang telah diunggah oleh pengguna. 

Halaman ini menampilkan: 

- Nomor dokumen 

- Judul dokumen 

- Deskripsi 

- Kategori 

- Tanggal upload 

- Status dokumen (Pending, Valid, Perlu Revisi, dll) 

- Versi dokumen terbaru 

- Riwayat versi 

- Tombol download file / preview file 

- Tombol upload versi baru 

Fitur ini dapat diakses oleh: 

- Dosen (pemilik dokumen atau penerima akses) 

- TU (dokumen SK atau dokumen dosen yang memberi akses) 

- Kaprodi (untuk keperluan evaluasi) 

Halaman detail ini juga berfungsi sebagai pusat kontrol dokumen, termasuk untuk 

keperluan versioning. 

## **2. Input** 

Sistem menerima beberapa input: 

1. document_id 

Dikirim dari halaman Dokumen Saya / Monitoring Dokumen. 

2. ID pengguna yang login 

Diperlukan untuk validasi akses. 

3. Role pengguna 

Untuk menentukan fitur apa saja yang ditampilkan: 

- Dosen → upload versi baru 

- Kaprodi → evaluasi (jika ada) 

- TU → lihat detail dokumen resmi 

## **3. Proses & Validasi** 

## **a. Validasi Akses** 

Sistem memeriksa apakah pengguna memiliki hak untuk membuka dokumen: 

- Pemilik dokumen 

- Pengguna yang terdaftar di tabel access_control 

- TU untuk dokumen SK / Surat Tugas 

- Admin (jika ada role admin panel) 

Jika tidak memenuhi: 

Sistem menampilkan error “Anda tidak memiliki akses untuk melihat dokumen ini.” 

## **b. Mengambil Informasi Dokumen** 

Sistem mengambil data dari tabel dokumen: 

- nomor_dokumen 

- judul 

- deskripsi 

- kategori 

- tanggal_upload 

- status dokumen 

- file_path 

- created_by 

- owner_user_id 

## **c. Menampilkan Kategori Dokumen** 

Ditampilkan dalam bentuk badge seperti: 

- RPS 

- SKP 

- BKD 

- Bukti Pengajaran 

Dll sesuai kategori dalam database. 

## **d. Menampilkan Status Dokumen** 

Status dapat berupa: 

- Pending 

- Valid 

- Perlu Revisi 

- Ditolak 

Status ini diambil dari kolom status pada tabel dokumen. 

## **e. Mengambil dan Menampilkan Versi Terbaru** 

Sistem mengambil versi terbaru dari tabel versi_dokumen: 

- nomor_versi 

- file versi 

- tanggal upload versi 

Ditampilkan sebagai: 

**v1** , **v2** , **v3** , dst. 

Jika file versi tidak tersedia: 

Muncul notifikasi “File Belum Tersedia”. 

## **f. Menampilkan Riwayat Versi** 

Semua versi ditampilkan lengkap dengan: 

- Nomor versi 

- Tanggal upload 

- Tombol download file versi tersebut 

Biasanya ditampilkan dalam bentuk list vertical seperti yang ada di tampilan. 

## **g. Tombol Upload Versi Baru (Role: Dosen)** 

Jika pengguna adalah pemilik dokumen (role dosen): 

Ditampilkan tombol 

## **“Upload Versi Baru”** 

Ketika ditekan: 

- Mengarahkan ke halaman upload versi 

- Sistem otomatis meningkatkan nomor versi 

- Menyimpan file sebagai versi baru 

Validasi: 

- File wajib dipilih 

- Format sesuai 

- Ukuran ≤ batas maksimal sistem 

## **h. Tombol Download File** 

Jika file tersedia, tombol download muncul. 

Jika file hilang: 

Sistem menampilkan “File Belum Tersedia”. 

## **4. Output** 

Halaman Detail Dokumen akan menampilkan: 

## **Informasi Utama Dokumen** 

- Nomor dokumen 

- Judul dokumen 

- Deskripsi 

- Tanggal upload 

- Kategori 

- Status dokumen 

## **Versi Dokumen** 

- Versi terbaru (v1, v2, …) 

- Tombol download / preview 

## **Riwayat Versi** 

- List semua versi sebelumnya 

- Tombol download versi lama 

Tabel 1. 3 Aksi pengelolaan versi dokumen berdasarkan peran pengguna 

|**Role**|**Aksi**|
|---|---|
|Dosen|Upload versi baru|
|TU|Lihat detail dokumen & versi|
|Koordinator|Evaluasi dokumen (jika ada fitur evaluasi)|
|Administrator|Mengelola user|



## **5. Target Output / Dampak** 

Fitur ini memastikan bahwa: 

- Pengguna dapat memeriksa informasi lengkap dokumen dengan mudah 

- Dosen dapat mengunggah revisi dokumen melalui versioning 

- Kaprodi dapat mengevaluasi dokumen setelah membukanya 

- TU dapat mengakses dokumen resmi (SK/Surat Tugas) yang mereka unggah 

- Riwayat versi dapat ditelusuri untuk kebutuhan audit 

Fitur ini juga menjadi dasar untuk fitur lain seperti: 

- Evaluasi Dokumen 

- Versioning 

- Hak Akses Dokumen 

## **1.2.9 Operasi Fitur – Versioning Dokumen** 

## **1. Deskripsi Operasi** 

Fitur Versioning Dokumen memungkinkan pengguna (khususnya dosen) untuk mengunggah versi terbaru dari dokumen yang sudah ada sebelumnya. Fitur ini digunakan untuk mencatat perubahan, revisi, atau pembaruan dokumen tanpa menghapus versi lama. 

Dengan versioning: 

- Versi lama tetap disimpan sebagai arsip 

- Versi baru ditambahkan sebagai versi berikutnya (v1 → v2 → v3 → dst) 

- Riwayat perubahan dokumen dapat ditelusuri kapan saja 

Versioning hanya dapat dilakukan oleh pemilik dokumen, bukan TU atau Kaprodi. 

## **2. Input** 

Fitur ini menerima input dari form upload versi, yaitu: 

1. document_id (otomatis) 

2. Version aktif (v1, v2, dst) – tampil otomatis 

3. Versi baru (v2, v3, dst) – ditentukan otomatis oleh sistem 

4. File versi baru (required) Format yang diperbolehkan: 

   - PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (maksimal 20 MB) 

5. Catatan perubahan (opsional) 

Contoh: “Revisi sesuai arahan kaprodi 02/BKD/25”. 

## **3. Proses & Validasi** 

## **a. Validasi Hak Akses** 

Sistem memastikan: 

- Hanya pemilik dokumen yang boleh mengunggah versi baru 

- Pengguna lain (TU/Kaprodi) tidak boleh mengubah versi dokumen 

Jika bukan pemilik: 

Tampilkan pesan: “Anda tidak memiliki izin untuk memperbarui versi dokumen ini.” 

## **b. Validasi File Upload** 

Sistem melakukan: 

- File wajib diunggah 

- Format harus valid 

- Ukuran ≤ 20 MB 

- File tidak boleh kosong atau corrupted 

Jika gagal: 

Sistem menampilkan pesan error yang sesuai. 

## **c. Menentukan Versi Baru** 

Sistem membaca versi terakhir dari tabel versi_dokumen, misalnya: 

- versi aktif: v1 

- versi baru: v2 

## **d. Penyimpanan Versioning** 

Jika validasi berhasil: 

1. Sistem menyimpan file versi baru ke storage 

2. Sistem membuat entri baru pada versi_dokumen, berisi: 

   - dokumen_id 

   - nomor_versi (misal: 2) 

   - file_path versi baru 

   - tanggal upload 

   - upload_by (ID dosen pemilik) 

   - catatan perubahan (opsional) 

3. Sistem mengupdate informasi versi terbaru pada halaman detail dokumen. 

## **e. Dampak ke Dokumen Utama** 

Sistem tidak mengubah versi lama, semua versi tetap ada. 

Versi baru menjadi versi aktif dan muncul di: 

- Halaman Detail Dokumen 

- Riwayat Versi Dokumen 

## **f. Feedback kepada Pengguna** 

Jika berhasil: 

- Menampilkan pesan sukses: “Versi baru dokumen berhasil ditambahkan.” 

- Modal upload tertutup 

- Halaman detail dokumen diperbarui otomatis (menampilkan versi baru) 

Jika gagal: 

- Menampilkan pesan error sesuai validasi 

## **4. Output** 

Setelah proses versioning selesai: 

Output ke Database 

- Tabel versi_dokumen mendapat entri baru (v2, v3, dst) 

Output ke Pengguna 

- Versi dokumen aktif berubah 

- Riwayat versi bertambah satu item 

- Tombol download versi baru aktif 

- Catatan perubahan (jika ada) tampil pada riwayat versi 

## **5. Target Output / Dampak** 

Fitur versioning memastikan bahwa: 

- Riwayat dokumen tersimpan dengan baik 

- Tidak ada file yang hilang karena replaced tanpa record 

- Dosen bisa melakukan revisi kapan saja 

- Kaprodi dapat melihat versi revisi untuk evaluasi 

- Sistem memiliki audit trail untuk setiap perubahan dokumen 

Versioning menjadi bagian penting dalam: 

- RPS 

- SKP 

- BKD 

- Bukti pengajaran 

- SK / Surat Tugas (jika perlu revisi) 

## **1.2.10 Operasi Fitur – Riwayat Upload** 

## **1. Deskripsi Operasi** 

Fitur Riwayat Upload digunakan oleh dosen untuk melihat seluruh dokumen yang 

pernah mereka unggah ke dalam aplikasi SiDoRa, sejak pertama kali menggunakan sistem. 

Halaman ini membantu dosen melacak: 

- Semua jenis dokumen yang pernah diupload 

- Kategori dokumen 

- Tanggal upload 

- Aksi untuk melihat detail 

- Filter berdasarkan jenis dokumen 

- Filter berdasarkan periode (bulan/tahun) 

- Pencarian berdasarkan nama dokumen 

Fitur ini berfungsi sebagai arsip pribadi yang menampilkan seluruh riwayat kegiatan 

unggah file oleh dosen. 

## **2. Input** 

Pengguna dapat memberikan input melalui elemen-elemen berikut: 

## 1. **Filter jenis dokumen** 

- Semua dokumen 

- Bukti Pengajaran 

- RPS 

- SKP 

- BKD 

- dll 

## 2. **Filter periode** 

- All 

- Bulan ini 

- Berdasarkan tahun 

## 3. **Keyword pencarian** 

- Berdasarkan judul dokumen 

## 4. **Aksi “Detail”** 

- Membuka informasi lengkap dokumen yang dipilih 

## 5. **Role pengguna** 

`o` Hanya dosen dapat membuka halaman ini 

## **3. Proses & Validasi** 

## **a. Validasi Akses** 

Sebelum menampilkan data, sistem memeriksa: 

- Pengguna memiliki role dosen 

Jika bukan dosen: 

Dialihkan ke halaman sesuai perannya 

## **b. Pengambilan Data Dokumen** 

Sistem mengambil seluruh dokumen yang memenuhi kondisi: 

- owner_user_id = ID dosen yang sedang login 

- Tidak dibatasi oleh status dokumen 

- Diurutkan berdasarkan tanggal upload terbaru 

Data diambil dari tabel: 

- dokumen 

- kategori (melalui relasi kategori_id) 

## **c. Filter Berdasarkan Jenis Dokumen** 

Ketika pengguna memilih kategori: 

- Sistem hanya menampilkan dokumen yang sesuai kategori 

- Contoh: pilih “RPS” → hanya dokumen RPS yang muncul 

Validasi: 

- Jika tidak ada dokumen pada kategori → tampilkan pesan kosong 

## **d. Filter Berdasarkan Periode Waktu** 

Jika pengguna memilih: 

- Hari ini: tampilkan dokumen dengan tanggal upload = today 

- Minggu ini: tanggal upload sesuai minggu berjalan 

- Bulan ini: tanggal bulan berjalan 

- Tahun tertentu: filter berdasarkan tahun upload 

System menggunakan data timestamp created_at. 

## **e. Pencarian Nama Dokumen** 

Kolom pencarian memfilter dokumen berdasarkan: 

- Judul dokumen (contains search) 

Jika tidak ditemukan:  “Dokumen tidak ditemukan.” 

## **f. Aksi Detail Dokumen** 

Ketika tombol Detail ditekan: 

- Sistem membuka halaman Detail Dokumen 

- document_id dikirim ke route detail 

- Pengguna dapat melihat: 

   - versi 

   - file 

   - deskripsi 

   - status 

   - metadata 

## **g. Validasi Tampilan** 

- Jika data kosong → sistem menampilkan tampilan kosong yang ramah pengguna 

- Jika filter di-reset → kembali ke mode “Semua Dokumen” 

## **4. Output** 

Halaman Riwayat Upload akan menampilkan: 

- Daftar semua dokumen yang pernah diupload dosen 

- Nomor dokumen 

- Nama dokumen 

- Kategori (badge warna) 

- Tanggal upload 

- Tombol Detail 

- Dropdown filter jenis dokumen 

- Dropdown filter periode 

- Kolom pencarian 

- Tombol Terapkan untuk menerapkan filter 

Output akhir berupa daftar riwayat upload yang rapi dan terurut. 

## **5. Target Output / Dampak** 

Fitur Riwayat Upload memberikan manfaat: 

- Membantu dosen melihat rekam jejak seluruh aktivitas unggah dokumen 

- Mempermudah pencarian dokumen lama 

- Memudahkan pengelompokkan berdasarkan jenis dan periode dokumen 

- Mendukung audit internal (jika diperlukan) 

- Memberikan gambaran menyeluruh mengenai kelengkapan administrasi akademik dosen 

Fitur ini berguna terutama saat dosen ingin menelusuri: 

- Dokumen apa saja yang sudah diupload 

- Dokumen yang diupload dalam periode tertentu 

- Kategori dokumen yang paling sering diupload 

- Membandingkan versi sebelumnya dari dokumen tertentu 

## **1.2.11 Operasi Fitur – Notifikasi** 

## **1. Deskripsi Operasi** 

Fitur Notifikasi digunakan untuk menampilkan pesan-pesan sistem yang berkaitan dengan aktivitas dokumen. 

Notifikasi berfungsi untuk menginformasikan pengguna mengenai: 

- Dokumen baru yang diberikan akses kepada pengguna 

- TU memberikan akses dokumen resmi (SK, Surat Tugas) 

- Dosen memberikan akses ke Kaprodi atau TU 

- Pembaruan pada hak akses dokumen 

- Revisi versi baru (jika diimplementasikan) 

- Evaluasi dokumen oleh Kaprodi (opsional) 

Halaman ini berisi daftar notifikasi terurut berdasarkan waktu, lengkap dengan pengirim, nama dokumen, dan timestamp terjadinya notifikasi. 

## **2. Input** 

Fitur Notifikasi tidak menerima input form, tetapi menerima input berupa: 

1. User ID yang login 

Untuk mengambil notifikasi yang ditujukan kepada pengguna tersebut. 

2. Pagination (halaman 1, 2, 3, dst) 

Jika jumlah notifikasi sangat banyak. 

3. Role pengguna 

(Dosen mendapatkan notifikasi khusus dokumen dosen, TU dapat menerima 

notifikasi tertentu jika diimplementasikan) 

## **3. Proses & Validasi** 

## **a. Validasi Hak Akses** 

Sistem mengecek: 

- Pengguna sudah login 

- Role pengguna sesuai dengan halaman notifikasi 

Jika tidak valid: 

Sistem redirect ke halaman dashboard sesuai role. 

## **b. Mengambil Notifikasi dari Database** 

Sistem mengambil data notifikasi dari tabel notifikasi (atau tabel log yang kamu 

gunakan), berdasarkan: 

- notifikasi.target_user_id = user yang login 

Data yang ditampilkan mencakup: 

- Nama pengirim 

- Jenis notifikasi (memberi akses, update akses, dll) 

- Nama dokumen 

- Timestamp (waktu notifikasi terjadi) 

Data diurutkan berdasarkan: 

- waktu terbaru → teratas 

## **c. Pengolahan Data Waktu (Timestamp)** 

Sistem menampilkan waktu dalam dua format: 

1. Format tanggal lengkap 

Contoh: 29 November 2025, 05:34 

2. Format waktu relative 

Contoh: 

`o` “16 jam yang lalu” 

`o` “1 hari yang lalu” 

Backend atau frontend melakukan perhitungan selisih waktu current_time – created_at. 

## **d. Pagination** 

Jika notifikasi lebih dari 10–20 data, sistem menampilkan pagination: 

- Halaman 1 

- Halaman 2 

- … 

- Halaman terakhir 

Pagination mempertahankan query notifikasi yang sama. 

## **e. Aksi pada Notifikasi** 

Setiap notifikasi memiliki: 

- Nama dokumen yang bisa diklik → membuka halaman Detail Dokumen 

- Nama pengirim (Dosen/TU) 

- Icon (bell/notification) 

Tidak ada aksi delete atau mark as read (optional jika tidak dibuat). 

## **f. Validasi Data Kosong** 

Jika pengguna belum memiliki notifikasi: Sistem menampilkan pesan “Belum 

ada notifikasi.” 

## **4. Output** 

Halaman notifikasi akan menampilkan: 

- Daftar notifikasi lengkap 

- Nama pengirim 

- Jenis aktivitas (contoh: “Memberi akses ke dokumen: …”) 

- Nama dokumen yang bisa diklik 

- Waktu kejadian dalam format dua gaya (tanggal & “berapa jam lalu”) 

- Navigasi pagination 

## **5. Target Output / Dampak** 

Fitur notifikasi mempermudah pengguna untuk: 

- Mengetahui dokumen apa yang baru diberikan akses kepada mereka 

- Melihat aktivitas terbaru dari orang lain yang terkait dokumen mereka 

- Selalu update terhadap informasi administrasi 

Secara keseluruhan, fitur ini meningkatkan: 

- Transparansi aktivitas dokumen 

- Kolaborasi antar dosen–TU–kaprodi 

- Pengawasan dan kontrol dokumen 

## **1.2.12 Operasi Fitur – Kelola Pengguna (Administrator)** 

## **1. Deskripsi Operasi** 

Fitur Manajemen Pengguna adalah fitur eksklusif untuk role Administrator. Fitur ini memungkinkan admin untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap akun pengguna dalam sistem SiDoRa. Tujuannya adalah untuk mengelola siapa saja yang berhak mengakses sistem, menentukan peran (role) mereka (apakah Dosen, TU, atau Kaprodi), serta mengelola status aktif/nonaktif akun demi keamanan sistem. 

## **2. Input** 

Admin memberikan input melalui form Tambah/Edit Pengguna: 

- Nama Lengkap (Wajib) 

- Email (Wajib, format email valid, unik/tidak boleh duplikat) 

- Password (Wajib saat create, opsional saat update) 

- Konfirmasi Password 

- Role (Pilihan: Dosen, TU, Kaprodi, Administrator) 

- Status Akun (Aktif / Nonaktif) 

## **3. Proses & Validasi** 

## **a. Validasi Input** 

- Email harus menggunakan domain institusi (jika diwajibkan) dan belum terdaftar di database. 

- Password minimal 8 karakter. 

- Nama tidak boleh kosong. 

## **b. Proses Create (Tambah User)** 

- Sistem melakukan hashing pada password menggunakan _Bcrypt_ . 

- Sistem menyimpan data ke tabel `users` . 

- Jika role adalah Dosen, sistem menyiapkan entri kosong pada tabel `profil_dosen` (opsional, tergantung implementasi trigger). 

## **c. Proses Read (Lihat Daftar)** 

- Sistem mengambil seluruh data dari tabel `users` kecuali user yang sedang login (untuk mencegah penghapusan diri sendiri). 

- Data ditampilkan dalam tabel dengan fitur pencarian dan filter berdasarkan role. 

## **d. Proses Update (Edit User)** 

- Admin dapat mengubah Nama, Role, dan Status. 

- Password hanya diubah jika kolom password diisi (jika kosong, gunakan password lama). 

- Validasi keunikan email (abaikan email milik user itu sendiri). 

## **e. Proses Delete (Hapus User)** 

- Sistem menghapus data user dari tabel `users` . 

- Validasi Integritas Data: Sistem mengecek apakah user memiliki dokumen penting. Jika ya, penghapusan mungkin diblokir atau dialihkan kepemilikannya (tergantung kebijakan), namun secara default sistem melakukan _soft delete_ atau penghapusan permanen sesuai konfigurasi. 

## **4. Output** 

- Pesan Sukses: "Pengguna berhasil ditambahkan/diperbarui/dihapus." 

- Pesan Gagal: Tampilan error validasi pada form. 

- Daftar Pengguna: Tabel yang diperbarui dengan data user terbaru. 

## **5. Target Output / Dampak** 

- Sentralisasi pengelolaan akun. 

- Kemudahan dalam mereset password pengguna yang lupa kredensial. 

- Kontrol penuh terhadap akses masuk aplikasi. 

## **BAB II** 

## **PENJELASAN RANCANGAN** 

## **2.1 ANTARMUKA** 

Antarmuka pengguna ( _User Interface_ ) pada aplikasi _SiDoRa_ dirancang dengan pendekatan modern, minimalis, dan konsisten antar-role. Tujuan utama desain UI adalah untuk memastikan kemudahan navigasi, pengalaman penggunaan yang nyaman, serta mendukung proses manajemen dokumen secara cepat, aman, dan transparan. 

Setiap halaman menggunakan struktur dasar yang sama, yaitu: 

- Sidebar navigasi di sisi kiri 

- Top bar berisi tombol kembali, kolom pencarian, ikon notifikasi, dan profil 

- Area konten utama yang menampilkan fungsi spesifik tiap role 

UI dibedakan berdasarkan tiga role pengguna: 

1. Dosen 

2. Tata Usaha (TU) 

3. Kepala Program Studi (Kaprodi) 

Berikut merupakan penjelasan lengkap antarmuka setiap role. 

## **2.1.1 Antarmuka Umum** 

- a. Halaman Login 

   - Halaman Login merupakan halaman awal yang diakses oleh seluruh jenis pengguna, yaitu Dosen, Tata Usaha, dan Kaprodi. 

Pada halaman ini tersedia: 

   - Form autentikasi yang terdiri dari input _Email_ dan _Password_ 

   - Tombol Log In untuk masuk menggunakan akun sistem 

   - Tombol Log In dengan Google sebagai opsi masuk alternatif 

   - Desain antarmuka yang bersih dan modern, menggunakan tampilan dua kolom (informasi dan formulir login) 

   - Validasi dasar yang memastikan pengguna mengisi seluruh field wajib 

- b. Halaman Notifikasi 

Halaman ini dapat diakses oleh semua role dan berfungsi untuk menampilkan notifikasi terbaru yang berkaitan dengan aktivitas pengelolaan dokumen. 

- c. Top Bar dan Side Bar 

Beberapa elemen navigasi dibuat seragam untuk semua role, yaitu: 

- Top bar, yang memuat tombol kembali, kolom pencarian, ikon notifikasi, serta informasi profil pengguna 

- Sidebar, yang menampilkan menu sesuai role masing-masing, tetapi tetap menggunakan tampilan dan struktur yang konsisten 

## **2.1.2 Antarmuka Role Dosen** 

Role Dosen berfokus pada proses unggah dokumen, pengelolaan dokumen pribadi, dan 

pengaturan hak akses. 

- a. Dashboard Dosen 

Dashboard menampilkan ringkasan aktivitas dosen: 

- Total dokumen (RPS, SKP, BKD) 

- Grafik aktivitas unggah dokumen 

- Notifikasi terbaru 

- Shortcut untuk melakukan upload dokumen 

Tujuan dashboard: memberi gambaran cepat terkait aktivitas dosen. 

- b. Halaman Dokumen Saya 

Berisi daftar seluruh dokumen milik dosen dengan kolom: 

- Nama dokumen 

- Kategori 

- Tanggal upload 

- Aksi (Hak Akses, Detail) 

Terdapat filter kategori (Bukti Pengajaran, RPS, SKP, BKD) dan pagination. 

- c. Halaman Detail Dokumen 

Menampilkan detail metadata dokumen seperti: 

- Nomor dokumen 

- Judul 

- Tanggal upload 

- Kategori 

- Deskripsi 

- Versi dokumen 

- Status dokumen 

Dosen dapat mengunggah versi terbaru pada halaman ini. 

- d. Edit Hak Akses Dokumen 

Popup untuk menambah atau menghapus penerima akses dokumen, misalnya TU atau Kaprodi. Setelah disimpan, muncul popup konfirmasi “Hak Akses Berhasil Diperbarui”. 

- e. Upload Versi Dokumen Terbaru 

Popup unggah versi baru berisi: 

- Judul dokumen 

- Tombol pilih file 

- Tombol submit 

Terdapat popup sukses ketika versi berhasil ditambahkan. 

- f. Upload Dokumen Baru 

Role Dosen dapat mengunggah dokumen baru dalam empat kategori: 

- RPS 

- SKP 

- BKD 

- Bukti Pengajaran 

Semua form memiliki struktur: 

- Judul dokumen 

- Nomor dokumen (jika ada) 

- Tanggal terbit 

- File upload 

- Deskripsi 

- Hak akses default 

Muncul popup sukses setelah dokumen berhasil diunggah. 

- g. Portofolio Dosen 

   - Header Profil: Foto profil, Nama Lengkap, NIDN, dan Jabatan Fungsional. 

   - Statistik Card: Tiga kartu berwarna (Biru, Hijau, Ungu) yang menampilkan jumlah Penelitian, Publikasi, dan Pengabdian. 

   - Data Pribadi: Tampilan biodata yang rapi (Tempat Lahir, Homebase, Status Aktivitas). 

   - Tombol Aksi: "Edit Bio & Foto" untuk data lokal, dan "Refresh PDDikti" untuk sinkronisasi ulang. 

- h. Halaman Pencarian & Koneksi PDDikti 

   - Form Pencarian: Input nama dengan indikator _loading_ interaktif. 

   - Daftar Hasil: Menampilkan kartu hasil pencarian yang berisi Nama, Perguruan 

      - Tinggi, dan Prodi untuk membedakan nama yang sama. 

   - Aksi Pilih: Tombol untuk memulai proses _scraping_ detail data. 

- i. Riwayat Upload 

Menampilkan daftar seluruh dokumen yang pernah diupload, lengkap dengan: 

- Search 

- Filter kategori 

- Filter periode 

- Aksi detail 

Memudahkan dosen melakukan tracking file. 

## **2.1.3 Antarmuka Role Tata Usaha (TU)** 

Role TU berfokus pada pengelolaan dokumen resmi, seperti Surat Keputusan (SK), Surat 

Tugas, dan Riwayat Pengajaran, serta monitoring dokumen dosen. 

- a. Dashboard TU 

Menampilkan: 

   - Total Surat Keputusan 

   - Total Surat Tugas 

   - Total Riwayat Pengajaran 

   - Grafik aktivitas unggah dokumen 

   - Notifikasi terbaru 

   - Tombol cepat untuk upload dokumen 

- b. Monitoring Dokumen 

Halaman utama TU untuk memantau dokumen dosen. 

Fitur: 

   - Tabel dokumen (nama dokumen, kategori, tanggal upload, aksi) 

   - Filter kategori (Semua, Surat Keputusan, Surat Tugas, Riwayat Pengajaran) 

   - Aksi (Hak Akses / Detail) 

   - Pagination 

- c. Detail Dokumen 

Halaman detail dokumen menampilkan: 

- Nomor dokumen 

- Judul 

- Tanggal upload 

- Kategori 

- Deskripsi 

- Versi dokumen 

Dokumen dapat diunduh atau diatur hak aksesnya (jika dokumen milik TU). 

- d. Edit Hak Akses Dokumen 

Popup overlay berisi: 

- Penerima akses yang sudah ada 

- Input tambah akses 

- Tombol selesai 

Popup “Hak Akses Berhasil Diperbarui” muncul setelah disimpan. 

- e. Upload Dokumen TU 

TU dapat mengunggah tiga jenis dokumen: 

1. Surat Keputusan 

2. Surat Tugas 

3. Riwayat Pengajaran 

Setiap form memiliki: 

- Judul dokumen 

- File dokumen 

- Hak akses default 

- Tombol submit 

Muncul popup “Dokumen Berhasil Diunggah” setelah selesai. 

- f. Riwayat Upload TU 

Menampilkan riwayat unggah dokumen oleh TU: 

Kolom tabel: 

- Nama dokumen 

- Kategori 

- Tanggal upload 

- Dosen penerima 

- Aksi (Detail) 

Memudahkan TU melacak semua dokumen yang telah mereka terbitkan. 

## **2.1.4 Antarmuka Role Kaprodi** 

Role Kaprodi digunakan untuk evaluasi dan verifikasi dokumen dosen, serta memantau 

status dokumen di program studi. 

- a. Dashboard Kaprodi 

Menampilkan ringkasan status dokumen: 

- Menunggu Review 

- Dokumen Valid 

- Perlu Revisi 

Membantu Kaprodi mengetahui prioritas dokumen yang perlu diproses. 

- b. Daftar Dokumen 

Halaman untuk melihat seluruh dokumen dosen secara keseluruhan. 

Fitur: 

- Filter untuk kategori, status, tanggal, dan nama dosen 

- Tabel lengkap 

- Aksi detail 

Berfungsi sebagai repositori pusat bagi Kaprodi untuk memantau dokumen akademik. 

- c. Navigasi Role Kaprodi 

Sidebar berisi: 

- Dashboard 

- Daftar Dokumen 

- Logout 

Layout ini konsisten dengan role lainnya untuk mempermudah pembelajaran. 

## **2.1.5 Antarmuka Role Administrator** 

Role Administrator memiliki antarmuka yang berfokus pada pengelolaan data master 

dan manajemen pengguna sistem. Administrator tidak terlibat langsung dalam alur pengajuan dokumen akademik, melainkan memastikan sistem dapat diakses oleh pengguna yang tepat. 

Dashboard Administrator menampilkan ringkasan statistik sistem: 

- Total Pengguna: Jumlah keseluruhan akun terdaftar. 

- Statistik per Role: Jumlah Dosen, TU, dan Kaprodi. 

- Grafik Pertumbuhan Pengguna: (Opsional) Tren penambahan akun baru. 

- Aktivitas Login Terakhir: Log aktivitas sistem. 

Kelola Pengguna (User Management) : Halaman ini adalah pusat kontrol CRUD pengguna. 

- Tabel Pengguna: Menampilkan kolom Nama, Email, Role, Status (Aktif/Nonaktif), dan Aksi. 

- Fitur Pencarian & Filter: Admin dapat mencari user berdasarkan nama atau email, serta memfilter tampilan berdasarkan role. 

- Tombol Tambah Pengguna: Membuka form untuk mendaftarkan akun baru. 

- Aksi Edit & Hapus: Ikon pada setiap baris user untuk mengubah data atau menghapus akun. 

Form Tambah/Edit Pengguna Form ini dirancang sederhana namun aman: 

- Input data diri (Nama, Email). 

- Dropdown pemilihan Role. 

- Input Password dengan fitur _toggle visibility_ 

- Toggle Status Akun (Aktif/Nonaktif). 

## **2.1.6 Alur Navigasi Aplikasi** 

Alur navigasi pada aplikasi SiDoRa dirancang agar setiap pengguna dapat berpindah halaman dengan mudah dan memahami urutan penggunaan fitur tanpa kebingungan. Setiap role memiliki akses navigasi yang berbeda sesuai kebutuhan tugasnya, namun seluruhnya menggunakan struktur yang konsisten, yaitu melalui sidebar di sisi kiri dan tombol aksi pada setiap halaman. 

- a. Alur Navigasi Role Dosen 

Pengguna pertama kali masuk ke sistem melalui halaman Login, kemudian diarahkan menuju Dashboard Dosen. Pada dashboard, dosen dapat mengakses ringkasan aktivitas, grafik unggahan, serta notifikasi. 

Dari sidebar, dosen dapat membuka halaman Dokumen Saya untuk melihat seluruh dokumen yang dimilikinya. Pada halaman tersebut, dosen dapat memilih salah satu dokumen untuk membuka Detail Dokumen, melakukan pengecekan status, mengunduh dokumen, serta menambahkan versi terbaru. 

Jika dosen ingin mengunggah dokumen baru, ia dapat memilih menu Upload Dokumen dan memilih kategori dokumen yang ingin diunggah (RPS, SKP, BKD, atau Bukti Pengajaran). Setelah memilih kategori, sistem akan menampilkan form unggah hingga dokumen berhasil tersimpan. 

Untuk melihat riwayat unggahan, dosen dapat membuka Riwayat Upload, lalu memilih dokumen tertentu untuk melihat detailnya kembali. 

- b. Alur Navigasi Role Tata Usaha (TU) 

Setelah login, TU diarahkan ke Dashboard TU yang menampilkan statistik dokumen dan aktivitas unggahan. Navigasi utama dilakukan melalui sidebar. 

Untuk memantau dokumen yang diajukan oleh dosen, TU dapat memilih menu Monitoring Dokumen, yang menampilkan daftar lengkap dokumen beserta aksi seperti melihat detail atau mengatur hak akses. Pada halaman detail, TU dapat meninjau isi dokumen serta menambahkan atau mengubah akses pengguna jika diperlukan. 

Jika TU ingin menambahkan dokumen resmi seperti Surat Keputusan, Surat Tugas, atau Riwayat Pengajaran, TU dapat membuka menu Upload Dokumen, memilih jenis dokumen yang ingin diunggah, kemudian mengisi form yang tersedia hingga unggahan berhasil dilakukan. 

Seluruh dokumen yang pernah diunggah TU dapat dilihat pada menu Riwayat Upload, dimana TU dapat meninjau kembali dokumen serta identitas dosen penerima. c. Alur Navigasi Role Kaprodi 

Kaprodi masuk melalui halaman Login dan diarahkan ke Dashboard Kaprodi yang menampilkan jumlah dokumen yang menunggu review, jumlah dokumen valid, dan dokumen yang memerlukan revisi. 

Untuk melakukan evaluasi, Kaprodi membuka menu Review Dokumen. Pada halaman ini, Kaprodi dapat memilih salah satu dokumen dari daftar untuk membuka Detail Dokumen, membaca isinya, mengunduh file, kemudian membuka form Verifikasi Dokumen. Dalam proses verifikasi, Kaprodi dapat memberikan status valid atau belum valid serta menambahkan komentar sebelum menyimpan. 

Selain dokumen yang perlu direview, Kaprodi juga dapat mengakses seluruh dokumen akademik melalui menu Daftar Dokumen, yang menampilkan daftar lengkap dokumen dosen beserta filter kategori, status, tanggal, dan nama dosen. 

d. Alur Navigasi Role Administrator 

Setelah login, Administrator diarahkan ke Dashboard Admin. Dari sidebar, admin dapat memilih menu Manajemen Pengguna. Pada halaman ini, Admin melihat daftar seluruh pengguna. 

1. Create: Admin menekan tombol "Tambah Pengguna", mengisi form, dan menyimpan. Sistem akan memvalidasi dan mengembalikan ke daftar pengguna. 

2. Update: Admin menekan tombol "Edit" pada salah satu user, mengubah detail (misalnya reset password), dan menyimpan. 

3. Delete: Admin menekan tombol "Hapus", menyetujui konfirmasi peringatan, dan data pengguna dihapus. Admin juga memiliki akses ke menu Profil untuk mengubah data dirinya sendiri. 

Link Figma: 

_https://www.figma.com/proto/dpHUKBg5zU4L2GjzZo9er3/Proyek-3?node-id=13&t=o4BRl1MzeSApZXIT-1&scaling=contain&content-scaling=fixed&pageid=0%3A1&starting-point-node-id=1%3A3&show-proto-sidebar=1_ 

## **2.2 DATABASE** 

Perancangan basis data pada aplikasi SiDoRa dilakukan melalui dua tahapan utama, yaitu Conceptual Data Model (CDM) dan Physical Data Model (PDM). CDM digunakan untuk memodelkan entitas dan hubungan antar entitas secara konseptual, sedangkan PDM merepresentasikan implementasi model tersebut dalam bentuk tabel-tabel fisik pada basis data PostgreSQL. 

## **2.2.1 Conceptual Data Model (CDM)** 

Conceptual Data Model menggambarkan hubungan antar entitas utama yang terlibat dalam proses pengelolaan dokumen pada aplikasi SiDoRa. Entitas yang dimodelkan meliputi Users, Dokumen, Versi_dokumen, Access_control, Komentar, Kategori, dan Profil_dosen. Hubungan antar entitas divisualisasikan pada Gambar 2.2.1 (Conceptual Data Model SiDoRa) dan dijelaskan sebagai berikut. 

Gambar 2.2. 1 Conceptual Data Model SiDoRa 

## **1. Relasi antara Users dan Dokumen** 

- Label Relasi: "creates" (Users creates Dokumen), "owns" (Users owns Dokumen). 

- Kardinalitas: 

   - 1) Users ke Dokumen (via creates): 1:N (Satu user dapat membuat banyak dokumen, tapi satu dokumen hanya dibuat oleh satu user. Ini sesuai field created_by di tabel dokumen). 

   - 2) Users ke Dokumen (via owns): 1:N (Satu user dapat memiliki banyak dokumen sebagai owner, tapi satu dokumen biasanya dimiliki oleh satu owner utama. Ini sesuai field owner_user_id). 

- Penjelasan: Seorang user (misalnya dosen) bisa upload dan own multiple dokumen (RPS, SKP, dll.), tapi setiap dokumen punya satu creator/owner primer untuk akuntabilitas. 

## **2. Relasi antara Dokumen dan Versi_dokumen** 

- Label Relasi: "has_version" (Dokumen has_version Versi_dokumen), "uploads_version" (Users uploads_version Versi_dokumen, tapi indirect via Dokumen). 

- Kardinalitas: 1:N (Satu dokumen dapat memiliki banyak versi, tapi satu versi hanya milik satu dokumen). 

- Penjelasan: Mendukung versioning; setiap update dokumen buat entri baru di versi_dokumen (misalnya v1, v2). User upload versi baru, tapi relasi primer adalah dokumen ke versinya untuk tracking perubahan. 

## **3. Relasi antara Dokumen dan Access_control** 

- Label Relasi: "has_access" (Dokumen has_access Access_control). 

- Kardinalitas: 1:N (Satu dokumen dapat memiliki banyak hak akses, tapi satu hak akses hanya untuk satu dokumen). 

- Penjelasan: Setiap dokumen bisa diberi akses ke multiple user (misalnya READ untuk dosen tertentu). Relasi ini via document_id di access_control. 

## **4. Relasi antara Users dan Access_control** 

- Label Relasi: "grants" (Users grants Access_control), "receives" (Users receives Access_control). 

- Kardinalitas: 

   - 1) Users ke Access_control (via grants): 1:N (Satu user dapat memberikan banyak hak akses, tapi satu hak akses diberikan oleh satu user. Ini sesuai created_by). 

   - 2) Users ke Access_control (via receives): 1:N (Satu user dapat menerima banyak hak akses, tapi satu hak akses diterima oleh satu user. Ini sesuai grantee_user_id). 

- Penjelasan: User (misalnya TU) grant akses ke user lain (dosen); ini seperti N:M indirect antara users via access_control untuk kontrol izin (READ/OWNER). 

## **5. Relasi antara Dokumen dan Komentar** 

- Label Relasi: "receives_comment" (Dokumen receives_comment Komentar). 

- Kardinalitas: 1:N (Satu dokumen dapat menerima banyak komentar, tapi satu komentar hanya untuk satu dokumen). 

- Penjelasan: Mendukung review/revisi; komentar terkait dokumen spesifik via dokumen_id. 

## **6. Relasi antara Users dan Komentar** 

- Label Relasi: "writes_comment" (Users writes_comment Komentar). 

- Kardinalitas: 1:N (Satu user dapat menulis banyak komentar, tapi satu komentar ditulis oleh satu user). 

- Penjelasan: User (misalnya Kaprodi) beri komentar pada dokumen; via id_user di komentar. 

## **7. Relasi antara Dokumen dan Kategori** 

- Label Relasi: "categorizes" (Kategori categorizes Dokumen). 

- Kardinalitas: 1:N (Satu kategori dapat mengelompokkan banyak dokumen, tapi satu dokumen biasanya milik satu kategori utama). 

- Penjelasan: Dokumen diklasifikasi (misalnya RPS, SKP) via kategori_id; ini oneto-many karena satu kategori seperti "Surat Tugas" bisa punya banyak dokumen. 

## **8. Relasi antara Users dan Profil_dosen** 

- **Label Relasi** : "has" (Users has Profil_dosen). 

- **Kardinalitas** : 1:1 (Satu user memiliki satu profil dosen, dan satu profil milik satu user). 

- **Penjelasan** : Profil terkait user spesifik (misalnya dosen); via id_user. Ini optional untuk role dosen, sesuai integrasi PDDikti. 

Berdasarkan relasi-relasi tersebut, alur pengelolaan dokumen secara konseptual dalam SiDoRa dapat diringkas sebagai berikut: pengguna (dosen/TU) mengunggah dokumen dan membentuk riwayat versi; dokumen dikategorikan ke dalam jenis tertentu; hak akses terhadap dokumen diberikan kepada user lain melalui Access_control; pihak terkait dapat memberikan komentar sebagai bagian dari proses review; serta seluruh aktivitas tersebut tercatat dan dapat ditelusuri kembali melalui entitas-entitas yang ada. 

## **2.2.2 Physical Data Model (PDM):** 

Physical Data Model merepresentasikan implementasi CDM ke dalam struktur basis data PostgreSQL. PDM mendefinisikan tabel, atribut, tipe data, primary key (PK), dan foreign key (FK) yang digunakan pada aplikasi SiDoRa. Struktur PDM divisualisasikan pada Gambar 2.2.2. (Physical Data Model SiDoRa). Secara garis besar, tabel-tabel utama yang digunakan adalah sebagai berikut. 

Gambar 2.2. 2 Physical Data Model SiDoRa 

## 1. **Tabel users** 

Tabel users menyimpan data seluruh pengguna aplikasi, seperti nama lengkap, email, password, peran (role), serta status akun. Kolom id_user bertipe integer berfungsi sebagai primary key dan menggunakan auto-increment. Atribut role digunakan untuk membedakan jenis pengguna (dosen, TU, koordinator, administrator). Tabel ini menjadi pusat referensi bagi beberapa tabel lain melalui foreign key, antara lain dokumen.created_by, dokumen.owner_user_id, profil_dosen.id_user, komentar.id_user, versi_dokumen.upload_by, dan access_control.created_by serta access_control.grantee_user_id. 

## 2. **Tabel profil_dosen** 

Tabel profil_dosen menyimpan informasi keprofilan dosen, seperti URL PDDIKTI, foto profil, biodata singkat, nomor telepon, serta waktu terakhir data di- _scrape_ . Primary key tabel ini adalah profil_id (bigint). Kolom id_user bertipe bigint dan didefinisikan sebagai kombinasi foreign key ke users.id_user sekaligus unique, sehingga membentuk relasi satu-ke-satu antara users dan profil_dosen. 

## 3. **Tabel kategori** 

Tabel kategori menyimpan daftar kategori dokumen, misalnya RPS, SKP, BKD, atau kategori lain sesuai kebutuhan program studi. Primary key tabel ini adalah kategori_id (integer). Atribut utama yang disimpan antara lain nama_kategori dan deskripsi. Kolom kategori_id direferensikan oleh tabel dokumen melalui foreign key dokumen.kategori_id. 

## 4. **Tabel dokumen** 

Tabel dokumen merupakan tabel inti yang menyimpan data utama dokumen. Primary key tabel ini adalah dokumen_id (integer). Atribut yang disimpan meliputi judul, nomor_dokumen, tanggal_terbit, file_path, deskripsi, status (misalnya draft, publik, arsip), serta timestamp created_at dan updated_at. Terdapat beberapa foreign key, yaitu kategori_id yang mengarah ke kategori.kategori_id, created_by yang mengarah ke users.id_user, dan owner_user_id yang juga mengarah ke users.id_user. Dengan demikian, tabel dokumen berperan sebagai penghubung antara data pengguna, kategori, dan versi dokumen. 

## 5. **Tabel versi_dokumen** 

Tabel versi_dokumen digunakan untuk menyimpan histori versi dari setiap dokumen. Primary key-nya adalah versi_id (integer). Atribut penting meliputi dokumen_id, nomor_versi, file_path, tanggal_dokumen, upload_by, dan catatan_perubahan. Kolom dokumen_id merupakan foreign key ke dokumen.dokumen_id, sedangkan upload_by merupakan foreign key ke users.id_user. Melalui struktur ini, sistem dapat melacak siapa yang mengunggah suatu versi dokumen dan kapan versi tersebut dibuat. 

## 6. **Tabel komentar** 

Tabel komentar menyimpan komentar atau catatan review terhadap dokumen. Primary key-nya adalah komentar_id (integer). Atribut yang disimpan antara lain id_user 

(penulis komentar), dokumen_id (dokumen yang dikomentari), isi_komentar, tanggal_komentar, dan status komentar (misalnya acc, revisi, pending, ditolak). Kolom id_user merupakan foreign key ke users.id_user, dan dokumen_id merupakan foreign key ke dokumen.dokumen_id. Relasi ini mendukung proses review dokumen secara terstruktur. 

## 7. **Tabel access_control** 

Tabel access_control menyimpan pengaturan hak akses dokumen bagi masing-masing user. Primary key tabel ini adalah id (bigint). Atribut yang didefinisikan antara lain document_id, grantee_user_id, perm, status, expires_at, created_at, created_by, dan catatan. Kolom document_id merupakan foreign key ke dokumen.dokumen_id, sedangkan grantee_user_id dan created_by merupakan foreign key ke users.id_user. Atribut perm digunakan untuk menyimpan jenis hak akses (READ, COMMENT, EDIT, OWNER), sementara atribut status menyimpan status persetujuan (PENDING, REVISI, ACC, TOLAK). Melalui tabel ini, mekanisme otorisasi dan workflow persetujuan dokumen dapat diimplementasikan secara fleksibel. 

## 8. **Tabel migrations** 

Tabel migrations merupakan tabel bawaan kerangka kerja (framework) yang digunakan untuk melacak riwayat eksekusi berkas migrasi basis data. Primary key tabel ini adalah id (integer), dengan atribut migration dan batch. Tabel ini bersifat internal dan tidak terlibat langsung dalam proses bisnis pengelolaan dokumen, namun penting untuk pengelolaan versi skema basis data selama pengembangan aplikasi. 

## **BAB III HASIL IMPLEMENTASI** 

## **3.1 CAPAIAN PENGEMBANGAN** 

Link Github : https://github.com/C1-Proyek3-Apk-Manajemen-Adm-Dosen 

Pada tahap pengembangan aplikasi Sistem Manajemen Dokumen, beberapa fitur inti telah berhasil diselesaikan dan dapat berfungsi dengan baik. Pengembangan saat ini berfokus pada pembuatan fitur autentikasi pengguna sebagai fondasi awal aplikasi. Berikut capaian pengembangan sementara: 

Fitur yang Sudah Berhasil Dikembangkan 

## **3.1.1 Halaman Login** 

- A. Capaian Pengembangan 

Fitur yang berhasil: 

- Input email & password berfungsi 

- Validasi input kosong berjalan baik 

- Toggle show/hide password berfungsi 

- Tekan Enter untuk login berfungsi 

- UI responsif 

- Autentikasi berjalan normal 

Fitur yang belum berhasil: 

   - Validasi email terlalu panjang tidak muncul 

   - Validasi password terlalu pendek tidak muncul 

   - Validasi password salah tidak muncul 

   - Email dengan spasi dianggap valid 

- B. Summary Pengujian Halaman Login 

Tabel 3.  1 Summary Pengujian Halaman Login 

|**Keterangan**|**Jumlah**|
|---|---|
|Kasus diuji|9|
|PASS|5|
|FAIL|4|
|Bug ditemukan|4|



||Bug diperbaiki|4 (Seluruh Bug<br>Berhasil<br>Diperbaiki)|
|---|---|---|



Tidak ada fitur yang belum berhasil 

Semua temuan bug sudah diperbaiki pada tahap pengembangan ini. 

C. Daftar Bug Halaman Login 

Tabel 3.  2 Daftar Bug Halaman Login 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>LOGIN-<br>01|Validasi<br>email<br>terlalu<br>panjang<br>tidak<br>muncul|1. Isi field email<br>dengan lebih dari<br>200 karakter2. Isi<br>password valid3.<br>Klik tombol<br>Login|Sistem<br>menampilkan<br>pesan<br>validasi:<br>“Email tidak<br>valid / terlalu<br>panjang”|Sistem kembali<br>ke halaman login<br>tanpa pesan<br>validasi|Medium|
|BUG-<br>LOGIN-<br>02|Validasi<br>password<br>terlalu<br>pendek<br>tidak<br>muncul|1. Isi email valid2.<br>Isi password<br>“12”3. Klik Login|Sistem<br>menampilkan<br>pesan<br>validasi:<br>“Password<br>terlalu<br>pendek”|Tidak ada pesan<br>validasi, hanya<br>kembali ke<br>halaman login|Medium|
|BUG-<br>LOGIN-<br>03|Tidak ada<br>pesan<br>error saat<br>password<br>salah|1. Isi email valid2.<br>Isi password yang<br>salah3. Klik<br>Login|Sistem<br>menampilkan<br>pesan: “Email<br>atau password<br>salah”|Sistem kembali<br>ke halaman login<br>tanpa pesan apa<br>pun|High|
|BUG-<br>LOGIN-<br>04|Login<br>tetap<br>berhasil<br>meski ada<br>spasi di|1. Isi email<br>dengan spasi di<br>awal/akhir<br>(contoh: "<br>user@gmail.com|Sistem<br>menolak input<br>&<br>menampilkan|Sistem<br>memperbolehkan<br>login meskipun<br>email tidak sesuai<br>format|Low /<br>Medium|



depan & ")2. Isi password pesan validasi belakang valid3. Klik Login email email 

Status Perbaikan: 

Semua bug di atas telah diperbaiki dan fitur Login kini berfungsi dengan baik. 

## **3.1.2 Halaman Dashboard** 

- A. Capaian Pengembangan 

Pada tahap ini, halaman Dashboard untuk seluruh role (Dosen, Tata Usaha, dan Kaprodi) telah berhasil dikembangkan dan menampilkan informasi utama yang diperlukan pengguna. Dashboard dirancang untuk memberikan ringkasan aktivitas dokumen dan notifikasi terbaru secara cepat dan jelas. 

Fitur yang berhasil dikembangkan 

1. Dashboard tampil sesuai role pengguna 

Dosen, TU, dan Kaprodi memiliki dashboard yang berbeda dan sesuai kebutuhan masing-masing. 

2. Tampilan nama pengguna (greeting user) 

Nama pengguna tampil di pojok kanan atas halaman. 

3. Card total dokumen 

Menampilkan jumlah dokumen berdasarkan kategori (RPS, SKP, BKD, dan lainnya). 

4. Grafik aktivitas unggah dokumen 

Grafik berhasil ditampilkan dan nilai yang muncul sesuai data. 

5. Menu sidebar 

Menu sesuai role muncul dengan benar (Dashboard, Dokumen Saya, Monitoring, Upload, Riwayat Upload, dll). 

6. Card “Upload Dokumen” 

Ketika di-klik, dialihkan ke halaman Upload Dokumen. 

7. Tombol “Lihat Riwayat” 

Berfungsi dengan baik untuk membuka halaman Riwayat Upload. 

8. Notifikasi terbaru 

Daftar notifikasi ditampilkan dan dapat dibaca. 

9. Ikon lonceng notifikasi 

Menampilkan daftar notifikasi aktif ketika diklik. 

10. Navigasi antar menu 

Semua navigasi berjalan dengan baik dan akurat. 

11. Responsivitas UI 

Tampilan dashboard tetap rapi ketika window di-resize. 

12. Fitur logout 

Tombol logout memunculkan modal konfirmasi dan berhasil mengeluarkan 

pengguna. 

Fitur yang belum berfungsi atau masih perlu pengembangan 

1. Search Bar pada Dashboard tidak berfungsi 

   - Tidak melakukan pencarian ketika pengguna mengetik dan menekan Enter. 

   - Tidak muncul hasil apa pun. 

2. Belum ada handling hasil pencarian 

Sistem belum menampilkan hasil pencarian Ketika pengguna mengetik di search 

bar 

- B. Summary Pengujian Halaman Dashboard 

Tabel 3.  3 Summary Pengujian Halaman Dashboard 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|15 kasus|
|PASS|14|
|FAIL|1|
|Bug ditemukan|1 bug|
|Bug diperbaiki|0 (menunggu tahap fixing)|



Semua skenario berjalan baik kecuali search bar, yang menjadi satu-satunya bug pada pengujian dashboard. 

- C. Daftar Bug Halaman Dashboard 

Tabel 3.  4 Daftar Bug Halaman Dashboard 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>DASH-<br>01|Search bar<br>tidak<br>berfungsi|1. Login sebagai<br>salah satu role2.<br>Masuk ke|Sistem<br>menampilkan<br>hasil pencarian|Search bar tidak<br>merespon dan<br>tidak|Medium|



||||halaman<br>Dashboard3.<br>Ketik kata kunci<br>pada search bar<br>dan tekan Enter|atau<br>mengarahkan ke<br>halaman<br>pencarian|memunculkan<br>hasil apa pun||
|---|---|---|---|---|---|---|



## **3.1.3 Halaman Dokumen Saya (Dosen)** 

- A. Capaian Pengembangan 

Fitur Dokumen Saya merupakan halaman utama bagi dosen untuk mengelola berbagai dokumen akademik, termasuk melihat daftar dokumen, memfilter kategori, mengatur hak akses, melihat detail dokumen, mengunduh, serta menghasilkan tautan berbagi. 

Pada tahap ini, fitur Dokumen Saya telah mencapai beberapa keberhasilan: 

Fitur yang Berhasil Dikembangkan: 

1. Tampilan daftar dokumen 

   - Menampilkan data dokumen sesuai database: nama, kategori, tanggal upload, status, dan versi dokumen. 

2. Filter kategori dokumen 

Tab _Semua_ , _Bukti Pengajaran_ , _BKD_ , _RPS_ , dan _SKP_ berfungsi dengan benar. 

3. Search bar dokumen 

Search bar menampilkan dokumen sesuai keyword pencarian. 

4. Pagination 

Pagination ditampilkan dan mampu berpindah halaman tanpa error. 

5. Aksi pada dokumen 

   - Hak Akses: modal pengaturan akses berjalan dengan baik (tambah, hapus, validasi). 

   - Detail Dokumen: halaman detail tampil lengkap berisi semua informasi dokumen. 

   - Download dokumen: file dapat terunduh dengan baik. 

   - Share Document: modal berbagi link muncul, link dapat digenerate dan tersalin. 

6. Responsivitas halaman 

Tampilan tetap rapi pada ukuran layar berbeda. 

Fitur yang Belum Sempurna / Gagal Berfungsi: 

## 1. Link Sharing tidak valid saat diakses 

Ketika link hasil generate ditempel di browser, dokumen tidak dapat diakses. Hal ini dapat terjadi karena: 

   - Minio masih local sehingga file yang mempunya akses link tidak dapat di akses oleh orang lain 

- B. Summary Pengujian Halaman Dokumen Saya 

Berikut hasil pengujian menggunakan metode _Exploratory Testing_ : 

Tabel 3.  5 Summary Pengujian Halaman Dokumen Saya 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|21 kasus (13 sebelumnya + 8 tambahan Hak Akses, Detail,<br>Share)|
|PASS|20|
|FAIL|1|
|Bug ditemukan|1|
|Bug diperbaiki|0 (menunggu tahap perbaikan)|



- C. Daftar Bug Halaman Dokumen Saya 

Tabel 3.  6 Daftar Bug Halaman Dokumen Saya 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>DOKS-<br>01|Link<br>dokumen<br>hasil<br>generate<br>tidak dapat<br>diakses|1. Buka halaman<br>detail dokumen2.<br>Klik tombol tiga<br>titik (⋮) → Share<br>Document3. Salin<br>link dokumen4.<br>Paste ke tab<br>browser baru|Link<br>menampilkan<br>dokumen atau<br>halaman izin<br>akses|Link tidak<br>dapat diakses /<br>tidak<br>menampilkan<br>dokumen|High|



## **3.1.4 Halaman Upload Dokumen (Dosen)** 

- A. Capaian Pengembangan 

Fitur upload dokumen untuk peran Dosen telah berhasil dikembangkan dan berfungsi dengan baik untuk sebagian besar skenario. Validasi input, keamanan file, dan proses upload secara umum sudah stabil. 

Fitur yang berhasil dikembangkan: 

   1. Form upload lengkap (judul, nomor dokumen opsional, tanggal, kategori, deskripsi, hak akses, file) 

   2. Validasi field wajib, ukuran file ≤ 20 MB, tipe file yang tidak sesuai diblokir 

   3. Proteksi XSS, pencegahan double submit, PRG pattern 

   4. Pemberian hak akses langsung saat upload 

   5. Responsif desktop & mobile 

   6. Penyimpanan file ke MinIO dengan nama unik (UUID) dan path tersimpan di database 

   7. Notifikasi sukses menggunakan SweetAlert2 setelah upload berhasil 

   8. Redirect otomatis ke halaman “Dokumen Saya” setelah upload selesai 

   9. Preview nama file yang dipilih sebelum submit 

   10. Tombol “Batal” berfungsi mengembalikan ke halaman sebelumnya tanpa menyimpan data 

   11. Loading spinner saat proses upload berlangsung 

   12. Date picker untuk tanggal terbit dengan format yang benar 

   13. Multi-select penerima hak akses (bisa pilih lebih dari satu TU/Kaprodi sekaligus) 

   14. Hak akses langsung tercatat di tabel access_controls saat upload berhasil 

- B. Summary Pengujian Halaman Dokumen Saya 

Tabel 3.  7 Summary Pengujian Halaman Dokumen Saya 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|22 kasus|
|PASS|19|
|FAIL|2|
|Bug ditemukan|2|
|Bug diperbaiki|2|



C. Daftar Bug Halaman Dokumen Saya 

Tabel 3.  8 Daftar Bug Halaman Dokumen Saya 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>UPLOAD-<br>01|Judul<br>dokumen<br>sangat<br>panjang (>200<br>karakter) tidak<br>tersimpan ke<br>database|1. Masuk ke<br>halaman<br>Upload<br>Dokumen<br>2. Isi judul<br>dengan<br>201<br>karakter atau<br>lebih<br>3. Isi semua<br>field<br>lain<br>secara valid 4.<br>Submit|Judul tersimpan<br>utuh atau<br>dipotong rapi|Judul tidak<br>tersimpan<br>kosong / tidak<br>masuk<br>database sama<br>sekali|Medium|
|BUG-<br>UPLOAD-<br>02|Preview nama<br>file di area<br>upload<br>overflow dan<br>terpotong<br>(tidak wrap)|1. Pilih file<br>dengan nama<br>Panjang<br>2. Lihat area<br>preview di<br>form upload|Nama file wrap<br>ke baris baru<br>atau dipotong<br>dengan ellipsis<br>di area preview|Nama file<br>terpotong<br>kasar dan<br>overflow<br>(keluar<br>kotak), tidak<br>wrap atau<br>ellipsis|Low|



## **3.1.5 Halaman Portofolio (Dosen)** 

- A. Capaian Pengembangan 

- B. Summary Pengujian Halaman Dokumen Saya 

- C. Daftar Bug Halaman Dokumen Saya 

## **3.1.6 Halaman Riwayat Upload (Dosen)** 

- A. Capaian Pengembangan 

Fitur Riwayat Upload dan Detail Dokumen Dosen telah berhasil dikembangkan dengan sangat baik dan stabil. Semua fungsi pencarian, filter, pagination, versioning, serta proteksi akses sudah berjalan sesuai desain dan aman. 

Fitur yang berhasil dikembangkan: 

   1. Pencarian full-text (judul, nomor dokumen, kategori) – case-insensitive 

   2. Filter kategori dan periode (30 hari / 1 tahun / semua) 

   3. Kombinasi search + filter + pagination dengan query string dipertahankan 

   4. Pagination dengan Next/Previous dan query tetap setelah refresh/back 

   5. Halaman detail dokumen lengkap: judul, nomor dokumen (tombol copy), tanggal, kategori, deskripsi, daftar versi 

   6. Tombol download file dengan nama asli 

   7. Empty state & pesan “belum ada unggahan dokumen” 

   8. Loading skeleton saat fetch data 

   9. Proteksi akses: unauthorized → redirect login, URL manipulasi → 404/403 

   10. Responsif penuh di desktop, tablet, dan mobile (375px) 

   11. Navigasi Back/Refresh tetap mempertahankan filter & halaman 

- B. Summary Pengujian Halaman Riwayat Upload Dosen Saya 

Tabel 3.  9 Sunnary Pengujian Halaman Riwayat Upload Dosen Saya 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|42|
|PASS||
|FAIL||
|Bug ditemukan||
|Bug diperbaiki|0 (akan diperbaiki pada<br>iterasi berikutnya)|



- C. Daftar Bug Halaman Riwayat Upload Dokumen (Dosen) 

Tabel 3.  10 Daftar Bug Halaman Riwayat Upload Dokumen (Dosen) 

||**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|---|



|BUG-<br>RIWAYAT-<br>01|Tidak ada<br>daftar<br>riwayat versi<br>dokumen|1. Upload 3–5<br>versi dari<br>dokumen<br>yang sama<br>2. Buka<br>halaman detail|Muncul<br>tabel/card<br>daftar semua<br>versi (versi 1,<br>2, 3, dst)|Hanya<br>menampilkan<br>card versi<br>terbaru saja|Medium|
|---|---|---|---|---|---|
|BUG-<br>RIWAYAT-<br>02|Tidak ada<br>fitur<br>scroll/tabel<br>untuk<br>banyak versi<br>(>5)|1. Upload 10+<br>versi dari 1<br>dokumen 2.<br>Buka detail|Ada tabel<br>atau list yang<br>bisa di-scroll|Tetap hanya<br>card versi<br>terbaru, tidak<br>ada riwayat<br>versi lain|Medium|



## **3.1.7 Halaman Upload Dokumen (TU)** 

A. Capaian Pengembangan 

Fitur upload dokumen untuk perihal Tata Usaha (TU) telah berhasil dikembangkan menggunakan controller dan logika yang sama dengan peran Dosen, sehingga memiliki tingkat stabilitas dan keamanan yang setara. 

Fitur yang berhasil dikembangkan: 

1. Form upload lengkap (judul, nomor dokumen opsional, tanggal, kategori, deskripsi, hak akses, file) 

2. Validasi field wajib, ukuran file ≤ 20 MB, tipe file yang tidak sesuai diblokir 

3. Proteksi XSS, pencegahan double submit, PRG pattern 

4. Pemberian hak akses langsung ke dosen-dosen tertentu saat upload 

5. Responsif desktop & mobile 

6. Penyimpanan file ke MinIO dengan nama unik (UUID) dan path tersimpan di database 

   7. Notifikasi sukses menggunakan SweetAlert2 setelah upload berhasil 

   8. Redirect otomatis ke halaman “Riwayat Upload” setelah upload selesai 

   9. Preview nama file yang dipilih sebelum submit 

   10. Tombol “Batal” berfungsi mengembalikan ke halaman sebelumnya tanpa menyimpan data 

   11. Loading spinner saat proses upload berlangsung 

   12. Date picker untuk tanggal terbit dengan format yang benar 

   13. Multi-select penerima hak akses (bisa pilih banyak dosen sekaligus) 

   14. Hak akses langsung tercatat di tabel access_controls saat upload berhasil 

- B. Summary Pengujian Halaman Upload Dokumen 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|22 kasus|
|PASS|19|
|FAIL|2|
|Bug ditemukan|2|
|Bug diperbaiki|2|



- C. Daftar Bug Halaman Upload Dokumen 

Tabel 3.  11 Daftar Bug Halaman Upload Dokumen 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>UPLOAD-<br>01|Judul<br>dokumen<br>sangat<br>panjang (>200<br>karakter) tidak<br>tersimpan ke<br>database|1. Masuk ke<br>halaman<br>Upload<br>Dokumen<br>2. Isi judul<br>dengan<br>201<br>karakter atau<br>lebih|Judul tersimpan<br>utuh atau<br>dipotong rapi|Judul tidak<br>tersimpan<br>kosong / tidak<br>masuk<br>database sama<br>sekali|Medium|



|||3. Isi semua<br>field<br>lain<br>secara valid 4.<br>Submit||||
|---|---|---|---|---|---|
|BUG-<br>UPLOAD-<br>02|Preview nama<br>file di area<br>upload<br>overflow dan<br>terpotong<br>(tidak wrap)|1. Pilih file<br>dengan nama<br>Panjang<br>2. Lihat area<br>preview di<br>form upload|Nama file wrap<br>ke baris baru<br>atau dipotong<br>dengan ellipsis<br>di area preview|Nama file<br>terpotong<br>kasar dan<br>overflow<br>(keluar<br>kotak), tidak<br>wrap atau<br>ellipsis|Low|



## **3.1.8 Halaman Monitoring Dokumen (TU)** 

- A. Capaian Pengembangan 

Pada tahap ini, fitur Monitoring Dokumen (TU) telah berhasil dikembangkan dan dapat digunakan untuk memantau seluruh dokumen dosen. Sebagian besar fungsi utama berjalan sesuai kebutuhan dan lulus pengujian. 

Fitur yang telah berhasil dikembangkan: 

1. Tabel daftar dokumen tampil sesuai data 

2. Filter tab kategori (Semua, SK, ST, Riwayat Pengajaran) berfungsi 

3. Fitur pencarian bekerja normal 

4. Pagination berjalan 

5. Halaman detail dokumen dapat ditampilkan 

6. Fitur unduh file berfungsi pada sebagian besar dokumen 

7. Popup Edit Hak Akses muncul dan berfungsi untuk menambahkan penerima akses 

8. Navigasi antar tab dan halaman stabil 

9. Tampilan responsif 

Fitur yang masih perlu pengembangan: 

1. Fitur mengubah permission user pada Hak Akses belum tersedia, sehingga permission tidak dapat diedit. 

2. Link Sharing tidak valid saat diakses 

   - Ketika link hasil generate ditempel di browser, dokumen tidak dapat diakses. Hal ini dapat terjadi karena: 

   - Minio masih local sehingga file yang mempunya akses link tidak dapat di akses oleh orang lain 

- B. Summary Pengujian Monitoring Dokumen (TU) 

Tabel 3.  12 Summary Pengujian Monitoring Dokumen (TU) 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|51|
|PASS|49|
|FAIL|2|
|Bug ditemukan|2|
|Bug diperbaiki|0 (akan diperbaiki pada<br>iterasi berikutnya)|



- D. Daftar Bug Halaman Monitoring Dokumen (TU) 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>MON-<br>TU-01|Fitur<br>mengubah<br>permission<br>user pada<br>Hak Akses<br>tidak<br>berfungsi|"1. Login<br>sebagai TU||BUG-MON-<br>TU-01|Fitur<br>mengubah<br>permission<br>user pada<br>Hak Akses<br>tidak<br>berfungsi|
|BUG-<br>MON-<br>TU-02|Link<br>dokumen<br>hasil|1. Buka halaman<br>detail<br>dokumen2. Klik|Link<br>menampilkan<br>dokumen atau|Link tidak<br>dapat diakses /<br>tidak|High|



||generate<br>tidak dapat<br>diakses|tombol tiga titik<br>(⋮)→Share<br>Document3.<br>Salin link<br>dokumen4.<br>Paste ke tab<br>browser baru|halaman izin<br>akses|menampilkan<br>dokumen||
|---|---|---|---|---|---|



## **3.1.9 Halaman Riwayat Upload (TU)** 

- A. Capaian Pengembangan 

Pada tahap ini, fitur Riwayat Upload untuk role Tata Usaha (TU) telah berhasil dikembangkan dan berfungsi sesuai kebutuhan. Halaman ini menampilkan seluruh dokumen yang pernah diunggah oleh TU, lengkap dengan kategori, dosen penerima, serta tanggal unggah. Sebagian besar fungsi utama telah berjalan dengan baik berdasarkan hasil pengujian. 

Fitur yang berhasil dikembangkan: 

1. Tabel riwayat upload menampilkan data lengkap, termasuk nama dokumen, kategori, dosen penerima, dan tanggal unggah. 

2. Search bar bekerja baik untuk pencarian judul dokumen. 

3. Filter kategori (ST, SK, RP, All) berfungsi dan menampilkan data sesuai pilihan. 

4. Filter periode (30 hari, 90 hari, 365 hari, All) menampilkan data sesuai kondisi database. 

5. Kombinasi filter dan search berjalan tanpa konflik. 

6. Pagination berfungsi normal, termasuk tombol Next, Previous, dan nomor halaman. 

7. Tombol Detail dapat digunakan dan mengarah ke halaman detail dokumen. 

8. Handling data kosong berjalan baik tanpa menimbulkan error. 

9. Navigasi halaman stabil, termasuk pada refresh dan perubahan filter. 

10. Tampilan UI konsisten dan tidak ditemukan masalah layout di desktop. 

Fitur yang masih perlu pengembangan: 

Seluruh skenario telah dilakukan, dan hanya satu bug ditemukan, yaitu gagalnya proses unduh dokumen. Bug ini sudah diperbaiki dan fungsi unduh kini berjalan normal. 

- B. Summary Pengujian Halaman Riwayat Upload (TU) 

Tabel 3.  13 Summary Pengujian Halaman Riwayat Upload (TU) 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|46|
|PASS|45|
|FAIL|1|
|Bug ditemukan|1|
|Bug diperbaiki|1 (bug telah diperbaiki<br>dan fungsi unduh file<br>sudah berjalan normal)|



- C. Daftar Bug Halaman Riwayat Upload (TU) 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>RIWAYAT-<br>TU-01|File dokumen<br>gagal diunduh<br>pada halaman<br>Riwayat<br>Upload|1. Login<br>sebagai TU<br>2. Buka<br>Riwayat<br>Upload<br>3. Klik<br>Detail<br>dokumen<br>4. Klik<br>tombol<br>Unduh|File berhasil<br>diunduh<br>tanpa error|Sistem<br>menampilkan<br>halaman_Not_<br>_Found_dan file<br>tidak terunduh|High|



## **3.1.10 Halaman Daftar Dokumen (Kaprodi)** 

- A. Capaian Pengembangan 

Pada tahap ini, fitur Daftar Dokumen (Kaprodi) telah berhasil dikembangkan dan menampilkan seluruh dokumen dosen dalam program studi. Kaprodi dapat melakukan filter, pencarian, pagination, membuka detail dokumen, dan meninjau status dokumen dengan baik. 

Sebagian besar fungsi utama telah berjalan normal berdasarkan hasil pengujian, dengan beberapa masalah kecil pada tampilan responsif serta satu bug terkait proses download yang telah diperbaiki. 

Fitur yang berhasil dikembangkan 

1. Tabel daftar dokumen tampil lengkap menampilkan nama dokumen, kategori, tanggal upload, dosen pengunggah, dan status. 

2. Fungsi pencarian berjalan baik dan mampu mendeteksi judul, kategori, dosen, dan nomor dokumen. 

3. Filter kategori bekerja sesuai data (BKD, RPS, SK, ST). 

4. Filter periode (30/90/365 hari) menghasilkan data sesuai kondisi database. 

5. Filter dosen bekerja normal dan menampilkan dokumen milik dosen tertentu. 

6. Kombinasi filter dan search dapat digunakan tanpa konflik. 

7. Pagination bekerja pada seluruh skenario uji. 

8. Tombol Detail berfungsi dan membuka halaman detail dokumen. 

9. Handling data kosong berjalan baik dan tidak menampilkan error. 

10. UI tampil stabil di desktop, tanpa masalah mayor. 

Fitur yang belum berfungsi atau perlu pengembangan 

Berdasarkan pengujian, terdapat beberapa masalah UI responsif dan dropdown filter yang perlu perbaikan: 

1. Dropdown filter terlalu besar pada tampilan mobile, menutupi sebagian besar layar. 

2. Layout tabel tidak responsif pada tablet, kolom tidak sejajar ketika layar diperkecil. 

3. Chip kategori (RPS/BKD/SK/ST) tidak responsif, turun posisi atau keluar alignment pada ukuran layar tertentu. 

4. Bug unduhan file yang sebelumnya gagal (Not Found) telah diperbaiki dan fungsi unduh kini bekerja normal. 

- B. Summary Pengujian Halaman Daftar Dokumen (Kaprodi) 

Tabel 3.  14 Summary Pengujian Halaman Daftar Dokumen (Kaprodi) 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|42|
|PASS|39|
|FAIL|3|
|Bug ditemukan|4 (termasuk bug<br>download)|
|Bug diperbaiki|1 (bug download file)|



- C. Daftar Bug Halaman Daftar Dokumen (Kaprodi) 

Tabel 3.  15 Daftar Bug Halaman Daftar Dokumen (Kaprodi) 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-KAP-<br>DOWNLOAD-<br>01|File<br>dokumen<br>gagal<br>diunduh<br>(Not Found)|1. Buka Daftar<br>Dokumen<br>Kaprodi<br>2. Klik Detail<br>3. Klik Unduh|File<br>berhasil<br>diunduh|Muncul<br>halaman_Not_<br>_Found_|High|
|BUG-KAP-<br>FLTR-02|Dropdown<br>filter terlalu<br>besar<br>pada<br>tampilan<br>mobile|1. Buka<br>Daftar<br>Dokumen<br>Kaprodi<br>2. Ubah<br>tampilan ke<br>mobile<br>3. Klik<br>dropdown|Dropdown<br>tampil<br>proporsional<br>dan tidak<br>menutupi<br>layar|Dropdown<br>terlalu besar<br>dan<br>menutupi<br>hampir<br>seluruh layar|Medium|



|BUG-KAP-<br>LYT-03|Layout tabel<br>tidak<br>responsif<br>pada tablet|1. Buka<br>halaman<br>Daftar<br>Dokumen<br>Kaprodi<br>2. Resize<br>layar ke<br>ukuran tablet<br>3. Amati<br>posisi kolom<br>dan teks|Layout harus<br>tetap rapi &<br>sejajar|Kolom tidak<br>rapi, layout<br>bergeser,<br>elemen tidak<br>sejajar|Medium|
|---|---|---|---|---|---|
|BUG-KAP-<br>CHIP-04|Chip<br>kategori<br>tidak<br>responsif<br>pada layar<br>kecil|1. Resize<br>browser ke<br>mobile/tablet<br>2. Lihat<br>kolom<br>kategori|Chip tetap<br>pada posisi<br>sejajar|Chip turun<br>posisi,<br>keluar<br>alignment<br>tabel|Medium|



## **3.1.11 Fitur Portofolio & Scraper PDDikti** 

## **A. Capaian Pengembangan** 

Fitur Portofolio dan Integrasi PDDikti dirancang untuk memudahkan dosen dalam melengkapi data profil mereka secara otomatis melalui sinkronisasi dengan database PDDikti Kemdikbud. 

Fitur yang berhasil dikembangkan secara antarmuka (UI) dan struktur dasar: 

- Halaman Pencarian PDDikti: Form pencarian nama dosen dengan validasi input (minimal 3 karakter) dan pencegahan _SQL Injection_ serta _XSS_ . 

- Struktur Backend Service: Pembuatan kelas `PddiktiScraperService` untuk menangani logika koneksi ke eksternal. 

- Halaman Profil: Tata letak (layout) halaman portofolio yang menampilkan foto, biodata, dan statistik (Penelitian, Publikasi, Pengabdian). 

- Keamanan Dasar: Mekanisme _caching_ untuk pencarian berulang dan _timeout handling_ untuk koneksi eksternal. 

Namun, berdasarkan hasil pengujian tahap akhir, fungsi inti _scraping_ (pengambilan data) mengalami kendala teknis akibat ketidaksesuaian struktur _selector_ HTML dengan tampilan web PDDikti saat ini. 

## **B. Summary Pengujian Halaman Portofolio** 

Berdasarkan sesi _Exploratory Testing_ yang dilakukan pada tanggal 22 November 2025, berikut adalah ringkasan hasil pengujian: 

Tabel 3.  16 Summary Pengujian Halaman Portofolio 

|||
|---|---|
|**Keterangan**|**Jumlah**|
|||
|Total kasus diuji|45 Skenario|
|PASS (Berhasil)|10 (Validasi input, keamanan dasar, navigasi awal)|
|FAIL (Gagal)|27 (Fungsi scraping, import data, edit modal)|
|NEED TEST|8 (Skenario timeout & data spesifik)|
|Bug Ditemukan|5 (2 Critical, 1 High, 2 Medium)|
|Status Fitur|Perlu Perbaikan (Under Maintenance)|



## **C. Daftar Bug Halaman Portofolio & Integrasi PDDikti** 

Pengujian menemukan beberapa _bug_ kritis yang menghambat fungsi utama aplikasi, terutama pada logika pengambilan data dari pihak ketiga (PDDikti) dan interaksi antarmuka pengguna. 

Tabel 3.  17 Daftar Bug Halaman Portofolio & Integrasi PDDikti 

|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severi**<br>**ty**|
|---|---|---|---|---|---|
|BUG-PDD-<br>001|Pencarian<br>PDDikti<br>tidak<br>mengembali<br>kan hasil|1. Buka form<br>pencarian2.<br>Ketik nama<br>dosen valid<br>3. Klik Cari|Muncul<br>daftar dosen<br>yang sesuai|Sistem<br>menampilkan empty<br>state "Tidak<br>Ditemukan"<br>meskipun data ada|CRITI<br>CAL|



||(Array<br>Kosong)|||||
|---|---|---|---|---|---|
|BUG-PDD-<br>002|Parsing<br>HTML<br>PDDikti<br>gagal<br>(Selector<br>mismatch)|1. Cek log<br>server saat<br>search<br>2. Lihat<br>debug<br>HTML<br>Length|HTML ter-<br>parse dan<br>data diambil|Selector CSS di<br>backend tidak cocok<br>dengan struktur<br>HTML PDDikti<br>terbaru|CRITI<br>CAL|
|BUG-PDD-<br>003|Modal "Edit<br>Bio & Foto"<br>tidak<br>muncul|1. Buka<br>halaman<br>portofolio2.<br>Klik tombol<br>"Edit Bio &<br>Foto"|Modal form<br>edit terbuka|Tidak ada respon,<br>console error:<br>openEditModal()<br>undefined|HIGH|
|BUG-PDD-<br>004|Pesan error<br>tidak<br>spesifik|1. Putuskan<br>koneksi<br>internet<br>2. Lakukan<br>pencarian|Muncul<br>pesan<br>"Koneksi<br>Timeout"|Hanya muncul<br>pesan general<br>"Terjadi kesalahan"|MEDI<br>UM|
|BUG-PDD-<br>005|Loading<br>state tidak<br>konsisten|1. Submit<br>pencarian2.<br>Perhatikan<br>tombol cari|Tombol<br>disabled +<br>Spinner +<br>Teks<br>"Mencari..."|Terkadang hanya<br>spinner yang<br>muncul tanpa teks,<br>atau sebaliknya|MEDI<br>UM|



## B. **Tindak Lanjut Perbaikan** 

Berdasarkan temuan di atas, prioritas perbaikan yang akan dilakukan pada iterasi pengembangan selanjutnya adalah: 

1. Update Scraper Logic: Menyesuaikan kembali _CSS Selector_ pada `PddiktiScraperService.php` agar sesuai dengan struktur HTML website PDDikti yang terbaru. 

2. Implementasi JavaScript: Memperbaiki fungsi `openEditModal()` yang hilang pada file blade untuk fitur edit profil manual. 

3. Perbaikan Error Handling: Menambahkan blok _try-catch_ yang lebih spesifik untuk membedakan error koneksi, error parsing, dan error data kosong. 

## **3.1.12 Halaman Manajemen Pengguna (Administrator)** 

## **A. Capaian Pengembangan** 

Fitur Manajemen Pengguna untuk role Administrator telah berhasil dikembangkan sebagai fondasi keamanan aplikasi SiDoRa. Fitur ini memungkinkan admin untuk mengontrol penuh siapa saja yang memiliki akses ke dalam sistem. 

Fitur yang berhasil dikembangkan: 

- CRUD Pengguna Lengkap: 

   - Create: Berhasil menambahkan user baru dengan role (Dosen/TU/Kaprodi) dan hashing password otomatis. 

   - Read: Menampilkan daftar user dengan _server-side pagination_ untuk performa yang baik. 

   - Update: Berhasil mengedit profil user, termasuk fitur ganti password (jika diisi) dan ubah status aktif/nonaktif. 

   - Delete: Berhasil menghapus user dengan konfirmasi keamanan (SweetAlert). 

- Validasi Real-time: Mencegah input email duplikat dan format email yang salah. 

- Proteksi Self-Delete: Logika backend mencegah Administrator menghapus akunnya sendiri yang sedang login. 

- Search & Filter: Pencarian user berdasarkan nama/email dan filter role berfungsi dengan cepat. 

- Indikator Status: Visualisasi status akun (Aktif/Nonaktif) menggunakan badge warna (Hijau/Merah). 

Fitur yang belum berfungsi maksimal: 

- Belum ada log aktivitas (audit trail) yang mencatat siapa admin yang mengubah data user tertentu. 

## **B. Summary Pengujian Halaman Manajemen Pengguna** 

Tabel 3.  18 Summary Pengujian Halaman Manajemen Pengguna 

**==> picture [224 x 203] intentionally omitted <==**

**----- Start of picture text -----**<br>
Keterangan Jumlah<br>Total kasus diuji 18 kasus<br>PASS 17<br>FAIL 1<br>Bug ditemukan 1<br>Bug diperbaiki 1 (Sudah diperbaiki)<br>**----- End of picture text -----**<br>


## **C. Daftar Bug Halaman Manajemen Pengguna** 

Tabel 3.  19 Daftar Bug Halaman Manajemen Pengguna 

|||||||
|---|---|---|---|---|---|
|**ID**|**Deskripsi**<br>**Bug**|**Langkah**<br>**Reproduksi**|**Ekspektasi**|**Realita**|**Severity**|
|||||||



|BUG-<br>ADM-<br>USER-<br>01|BUG-<br>ADM-<br>USER-<br>01||||||
|---|---|---|---|---|---|---|
||BUG-<br>ADM-<br>USER-<br>01|Admin bisa<br>menghapus<br>akun sendiri<br>via URL|1.<br>Login<br>sebagai<br>Admin<br>2.<br>Inspeksi<br>elemen<br>tombol hapus<br>user<br>lain<br>untuk dapat<br>URL delete<br>3. Ganti ID<br>di<br>URL<br>dengan<br>ID<br>sendiri<br>4.<br>Akses<br>URL|Sistem<br>menolak<br>akses<br>dan<br>menampilkan<br>pesan<br>error<br>"Tidak dapat<br>menghapus<br>akun sendiri"|Sistem<br>menghapus<br>akun<br>admin<br>yang sedang<br>login,<br>menyebabkan<br>error sesi|High|



## **3.1.13 Halaman Notifikasi** 

- A. Capaian Pengembangan 

Pada tahap ini, fitur notifikasi untuk role Kaprodi telah berhasil dikembangkan dan menampilkan informasi aktivitas dokumen secara real-time. Fitur ini mencakup ikon notifikasi di topbar, dropdown notifikasi, serta halaman “Semua Notifikasi” yang menampilkan seluruh riwayat notifikasi dengan pagination. 

Fitur yang berhasil dikembangkan 

1. Ikon notifikasi muncul di topbar dan dapat diklik oleh pengguna. 

2. Dropdown notifikasi tampil dengan benar, menampilkan daftar notifikasi terbaru. 

3. Interaksi dropdown berjalan normal, termasuk klik di luar area untuk menutup dropdown. 

4. Notifikasi dalam jumlah sedikit maupun banyak tampil sesuai data, beserta scroll vertical. 

5. Urutan notifikasi tampil dari terbaru ke lama sesuai timestamp. 

6. Teks notifikasi panjang ditampilkan dengan baik, tidak terpotong. 

7. Tombol “Lihat Semua” berfungsi, mengarahkan pengguna ke halaman semua notifikasi. 

8. Halaman semua notifikasi berhasil menampilkan daftar lengkap sesuai data. 

9. Pagination berfungsi normal, termasuk tombol Next, Prev, dan klik nomor halaman. 

10. Halaman tetap tampil ketika data sedikit, banyak, atau kosong, tanpa error. 

11. Tampilan mobile menunjukkan dropdown notifikasi muncul dengan benar. 

Fitur yang belum berfungsi atau perlu pengembangan 

1. Layout halaman notifikasi di tablet dan mobile belum responsif 

   - Timestamp tidak sejajar ketika judul notifikasi panjang. 

- B. Summary Pengujian Halaman Notifikasi 

Tabel 3.  20 Summary Pengujian Halaman Notifikasi 

|**Keterangan**|**Jumlah**|
|---|---|
|Total kasus diuji|34|
|PASS|32|
|FAIL|2|
|Bug ditemukan|2|
|Bug diperbaiki|0 (akan diperbaiki pada<br>iterasi berikutnya)|



Seluruh fungsionalitas utama berjalan baik, kecuali dua kasus terkait tampilan responsif pada ukuran layar tablet dan mobile, khususnya pada notifikasi dengan judul panjang. 

- C. Daftar Bug Halaman Notifikasi 

Tabel 3.  21 Daftar Bug Halaman Notifikasi 

|**ID**|**Deskripsi Bug**|**Langkah**<br>**Reproduksi **|**Ekspektasi**|**Realita**|**Severity**|
|---|---|---|---|---|---|
|BUG-<br>NOTIF-<br>01|Dropdown<br>notifikasi tidak<br>responsif pada<br>mobile|1. Buka halaman<br>dashboard sebagai<br>Kaprodi2. Buka<br>DevTools → pilih<br>iPhone/mobile3.<br>Klik ikon notifikasi|Dropdown<br>tampil<br>proporsional|Dropdown<br>terlalu besar<br>dan melebihi<br>viewport|Medium|
|BUG-<br>NOTIF-<br>02|Timestamp<br>tidak sejajar<br>pada tampilan<br>tablet/mobile<br>ketika judul<br>panjang|1. Masuk ke<br>halaman “Semua<br>Notifikasi”<br>2. Resize browser<br>ke ukuran<br>tablet/mobile<br>3. Temukan<br>notifikasi dengan<br>judul panjang|Timestamp<br>tetap sejajar<br>dengan item<br>lain|Timestamp<br>bergeser ke<br>kanan/bawah<br>dan tidak<br>sejajar|Medium|



## **3.2 SARAN PENGEMBANGAN SELANJUTNYA** 

1. Pengembangan integrasi data PDDikti/SINTA 

   - Pengembangan ke depan dapat diarahkan pada penyempurnaan proses pengambilan data dosen melalui PDDikti, baik dengan melanjutkan mekanisme _scrapping_ yang sudah dibangun maupun beralih menggunakan API resmi PDDikti atau SINTA jika akses tersedia. Integrasi ini diharapkan memberikan informasi portofolio dosen yang lebih akurat, lengkap, dan otomatis pada halaman profil. 

2. Penambahan fitur dan pengelolaan pada role Administrator 

   - Aplikasi dapat dikembangkan dengan menambahkan menu dan fitur khusus pada role Administrator, sehingga admin dapat mengelola dan mengakses seluruh fitur dari berbagai role seperti Tata Usaha, Dosen, dan Koordinator. Dengan demikian, Administrator dapat menjalankan fungsi supervisi dan pengelolaan sistem dengan lebih efektif. 

3. Dukungan untuk satu akun dengan multi-role 

Dalam kondisi nyata, satu individu sering kali memiliki lebih dari satu peran, misalnya seorang dosen yang juga bertugas sebagai Tata Usaha atau seorang Kaprodi yang juga berstatus dosen. Oleh karena itu, sistem dapat ditingkatkan agar satu akun mampu memuat dan menjalankan lebih dari satu role sekaligus, dengan mekanisme pemilihan role saat login atau _switch role_ di dalam aplikasi. 

4. Peningkatan performa pencarian (searching) 

Pencarian data pada aplikasi dapat ditingkatkan dengan menambahkan mekanisme pencarian yang lebih fleksibel dan toleran terhadap variasi penulisan, misalnya mampu menemukan hasil yang sama meskipun pengguna mengetik nama dengan huruf kecil (e.g. _dzakir tsabit_ ), huruf kapital ( _DZAKIR TSABIT_ ), atau variasi lainnya. Optimalisasi ini akan mempercepat proses pencarian dan meningkatkan kenyamanan pengguna. 

5. Generate link : dpaat diatur siapa saja yang dapat melihat dokumen 

6. Minio di hosting supaya lbih fleksibel 

7. Peningkatan performa tampilan dan interaksi antarmuka (UX Performance) Untuk meningkatkan kecepatan aplikasi dalam berpindah halaman dan melakukan tindakan tertentu, aplikasi dapat ditingkatkan menggunakan pendekatan _dynamic rendering_ seperti manipulasi DOM tanpa perlu me-refresh seluruh halaman (misalnya dengan AJAX, Livewire, atau SPA). Dengan demikian, komponen yang tidak relevan tidak akan dimuat ulang sehingga aplikasi terasa lebih cepat, responsif, dan efisien. 

## **3.3 KENDALA DAN KONSTRIBUSI ANGGOTA** 

## **3.3.1 Kendala** 

Selama pengembangan aplikasi SiDoRa, kelompok menghadapi beberapa kendala teknis, yaitu: 

Tabel 3.  22 Kendala 

|||Tabel 3.  22 Kendala||
|---|---|---|---|
|**No.**|**Kendala**|**Deskripsi/Dampak**|**Solusi yang Diambil**|
|1|Konflik Merge GitHub|Sering terjadi konflik saat<br>beberapa<br>anggota<br>mengerjakan fitur yang<br>sama<br>(terutama<br>di<br>controller & routes)|Menggunakan<br>GitHub<br>Pull<br>Request + review minimal 1<br>orang|



|2|Konsistensi Database|Pada<br>tahap<br>awal<br>pengembangan, database<br>masih<br>menggunakan<br>PostgreSQL<br>lokal<br>sehingga<br>setiap<br>perubahan skema atau<br>data<br>mengharuskan<br>pengiriman<br>ulang<br>file<br>SQL ke seluruh anggota<br>tim. Hal ini menyebabkan<br>proses<br>sinkronisasi<br>menjadi tidak efisien dan<br>berpotensi menimbulkan<br>perbedaan versi database<br>antar anggota.|Mengganti penggunaan database<br>PostgreSQL<br>lokal<br>dengan<br>Supabase<br>sebagai<br>database<br>terpusat,<br>sehingga<br>setiap<br>perubahan<br>dapat<br>langsung<br>tersinkronisasi<br>tanpa<br>perlu<br>mengirim<br>file<br>SQL<br>secara<br>manual.|
|---|---|---|---|
|3|Hosting MinIO|Proses hosting MinIO<br>memiliki<br>tingkat<br>kompleksitas yang cukup<br>tinggi<br>karena<br>memerlukan konfigurasi<br>lanjutan,<br>seperti<br>penggunaan<br>Docker,<br>pengaturan environment,<br>serta<br>penyesuaian<br>jaringan<br>dan<br>storage.<br>Kendala<br>ini<br>menyebabkan<br>MinIO<br>tidak<br>dapat<br>berjalan<br>secara<br>optimal<br>pada<br>server yang digunakan<br>dan menghambat proses<br>integrasi<br>fitur<br>penyimpanan objek.|Melakukan beberapa percobaan<br>deployment<br>menggunakan<br>Docker<br>serta<br>mempelajari<br>dokumentasi<br>resmi<br>MinIO.<br>Namun,<br>karena<br>keterbatasan<br>waktu<br>dan<br>kompleksitas<br>konfigurasi,<br>proses<br>hosting<br>MinIO<br>belum<br>berhasil<br>sepenuhnya sehingga fitur terkait<br>belum dapat diimplementasikan<br>pada tahap ini.|



|4|Pertama<br>Kali<br>Menggunakan<br>Framework (Laravel)|Belum familiar dengan<br>framework<br>Laravel<br>sehingga<br>proses<br>memahami<br>struktur<br>project (MVC, routes,<br>blade,<br>migration)<br>memerlukan waktu lebih<br>lama dan memperlambat<br>progres<br>awal<br>pengembangan.|Melakukan eksplorasi mandiri<br>serta berdiskusi dengan teman<br>yang<br>lebih<br>paham<br>untuk<br>menyelesaikan<br>kendala<br>yang<br>muncul.|
|---|---|---|---|
|5|Login with google|Proses<br>implementasi<br>Login<br>with<br>Google<br>memerlukan konfigurasi<br>yang cukup kompleks,<br>mulai dari pengaturan<br>OAuth, integrasi dengan<br>sistem autentikasi yang<br>sudah<br>ada,<br>hingga<br>penyesuaian alur login<br>pengguna.<br>Meskipun<br>fitur<br>berhasil<br>diimplementasikan,<br>masih<br>ditemukan<br>beberapa<br>bug<br>pada<br>kondisi<br>tertentu<br>yang<br>memengaruhi kestabilan<br>proses login.|Melakukan konfigurasi OAuth<br>secara<br>bertahap<br>serta<br>menyesuaikan alur autentikasi<br>agar terintegrasi dengan sistem<br>login yang sudah ada. Fitur Login<br>with<br>Google<br>telah<br>berhasil<br>dijalankan, dan perbaikan bug<br>dilakukan<br>secara<br>bertahap<br>melalui pengujian dan debugging<br>lanjutan.|



## **3.3.2 Kontribusi Anggota** 

Tabel 3.  23 Kontribusi Anggota 

|**Nama**|**Bidang Fokus**|**Kontribusi**|
|---|---|---|
|Azkha<br>Nazzala<br>Prasadha Dies|Fullstack<br>Template<br>Web<br>&<br>Dashboard|Mengembangkan template web keseluruhan<br>dengan desain responsif dan modern,|



||(TU, Dosen, Kaprodi)<br>+<br>Generate<br>Link,<br>Notifikasi pada user<br>(TU, Dosen, Kaprodi)<br>dan<br>integrasi<br>login<br>(autentikasi) dan juga<br>login<br>menggunakan<br>google|termasuk layout dasar, ikon, serta efek<br>transisi. Implementasi dashboard role-based:<br>Statistik dan grafik aktivitas untuk TU (total<br>dokumen<br>per<br>kategori),<br>Dosen<br>(total<br>RPS/SKP/BKD dengan notifikasi), dan<br>Kaprodi (status pending/acc/revisi). Tambah<br>fitur generate link share dokumen dengan<br>copy clipboard dan konfirmasi modal. Selain<br>itu berkontribusi dalam membuat autentikasi<br>per role (Login per role) dan juga<br>mengimplementasikan login with google|
|---|---|---|
|Dzakir Tsabit Asy<br>Syafiq|Database<br>Query<br>&<br>Integrasi PDDikti|Menangani query database kompleks untuk<br>statistik, filter, dan pencarian multi-kolom di<br>berbagai bagian aplikasi. Integrasi PDDikti:<br>Scraper untuk search/impor/refresh biodata<br>dosen (seperti nama, jabatan, pangkat),<br>dengan validasi input dan handle error.<br>Optimasi<br>relasi<br>data<br>untuk<br>efisiensi,<br>termasuk grouping dan ordering untuk<br>grafik/riwayat.<br>Melakukan<br>integrasi<br>terhadap kode kode yang telah di kerjakan<br>anggota lain serta menjaga agar tidak ada<br>konflik dalam code tersebut.  Mengelola dan<br>konsultasi tentang alur/flow requirement,.<br>Fokus pada backend query dan API internal<br>untuk profil dosen.serta membuat dashboard<br>dan<br>juga<br>CRUD<br>user<br>untuk<br>role<br>administrator, user dengan role administrator<br>ini di kategorikan dapat membuat dengan<br>role<br>TU,DOSEN,KOODINATOR<br>tidak<br>dapat<br>membuat<br>akun<br>dengan<br>role<br>administrator lagi|



|Ibnu<br>Hilmi<br>Athaillah|Fullstack<br>Hosting<br>MinIO<br>&<br>Upload<br>Dokumen<br>(TU<br>&<br>Dosen)|Fullstack<br>hosting<br>MinIO:<br>Konfigurasi<br>storage untuk simpan file aman dengan nama<br>unik dan ekstensi original. Upload dokumen<br>dosen:<br>Form<br>kategori<br>terbatas<br>(RPS/BKD/SKP/Bukti Pengajaran), validasi<br>input<br>unik/hak<br>akses,<br>proses<br>simpan<br>dokumen/versi awal/akses control dengan<br>transaksi aman dan log error. Upload TU:<br>Proses<br>versi<br>baru<br>dengan<br>validasi<br>file/catatan, integrasi storage untuk SK/Surat<br>Tugas. Fokus pada backend upload atomic<br>dan handle exception.|
|---|---|---|
|Rahma<br>Attaya<br>Tamimah|Fullstack<br>Dokumen<br>Saya<br>(Dosen)<br>&<br>Monitoring Dokumen<br>(TU)|Fullstack untuk Dokumen Saya di dosen:<br>Query filter tab/kategori/search, paginasi<br>daftar dokumen dengan versi/aksi (hak<br>akses/detail),<br>desain<br>view<br>dengan<br>tabs/search form/tabel responsif, dan JS<br>untuk<br>switch<br>tab.<br>Untuk<br>Monitoring<br>Dokumen di TU: Query filter tab/search,<br>tampilan tabel dengan badge kategori/aksi<br>(edit akses/upload versi), desain view<br>dengan pagination custom dan konfirmasi<br>delete. Fokus pada filtering UI dan interaksi<br>backend untuk edit akses/versioning.|
|Zahra Aldila|Fullstack<br>Riwayat<br>Upload<br>&<br>Daftar<br>Dokumen (TU, Dosen,<br>Kaprodi)|Fullstack riwayat dosen: Query search<br>multi/filter kategori/period, paginasi daftar<br>dengan detail versi, desain view dengan<br>select/form/tabel/pagination<br>custom,<br>JS<br>untuk submit filter. Riwayat TU: Query join<br>recipients/search/filter, view tabel dengan<br>daftar penerima/aksi detail. Daftar Dokumen<br>Kaprodi:<br>Query<br>filter<br>multi<br>(kategori/status/period/dosen), view dengan|



select options/paginasi. Fokus pada query agregat dan handle data kosong di UI. 

