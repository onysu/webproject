// Load all gallery content for gallery.html page
document.addEventListener('DOMContentLoaded', function () {
    const allPhotosContainer = document.getElementById('allPhotosContainer');
    const allVideosContainer = document.getElementById('allVideosContainer');

    if (allPhotosContainer) {
        // Extended photo gallery data
        const extendedPhotoData = [
            {
                id: 1,
                title: "Upacara Bendera Rutin",
                description: "Upacara bendera setiap hari Senin",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600"
            },
            {
                id: 2,
                title: "Rapat Koordinasi Bulanan",
                description: "Rapat evaluasi dan perencanaan program",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600"
            },
            {
                id: 3,
                title: "Kegiatan Sosial Masyarakat",
                description: "Bakti sosial di lingkungan sekitar",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600"
            },
            {
                id: 4,
                title: "Pelatihan Teknologi Digital",
                description: "Workshop penggunaan aplikasi modern",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
            },
            {
                id: 5,
                title: "Acara Penerimaan Penghargaan",
                description: "Menerima penghargaan pelayanan terbaik",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600"
            },
            {
                id: 6,
                title: "Seminar Nasional",
                description: "Seminar tentang inovasi pelayanan publik",
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600"
            },
            {
                id: 7,
                title: "Kunjungan Kerja",
                description: "Kunjungan ke kantor cabang daerah",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
            },
            {
                id: 8,
                title: "Launching Aplikasi",
                description: "Peluncuran aplikasi layanan digital",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600"
            },
            {
                id: 9,
                title: "Hari Ulang Tahun Kantor",
                description: "Perayaan HUT kantor ke-25",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600"
            },
            {
                id: 10,
                title: "Kegiatan Olahraga Bersama",
                description: "Olahraga rutin pegawai setiap Jumat",
                image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600"
            },
            {
                id: 11,
                title: "Pertemuan Stakeholder",
                description: "Koordinasi dengan mitra strategis",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600"
            },
            {
                id: 12,
                title: "Penanaman Pohon",
                description: "Program penghijauan lingkungan kantor",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600"
            }
        ];

        extendedPhotoData.forEach((photo, index) => {
            const photoCard = `
        <div class="col-md-4 col-lg-3 fade-in-up" style="animation-delay: ${index * 0.05}s">
          <div class="gallery-card">
            <img src="${photo.image}" alt="${photo.title}">
            <div class="gallery-overlay">
              <h5>${photo.title}</h5>
              <p><i class="bi bi-camera me-1"></i> ${photo.description}</p>
            </div>
          </div>
        </div>
      `;
            allPhotosContainer.innerHTML += photoCard;
        });
    }

    if (allVideosContainer) {
        // Extended video gallery data
        const extendedVideoData = [
            {
                id: 1,
                title: "Profil Kantor Resmi 2024",
                description: "Video profil dan fasilitas kantor",
                thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
                duration: "5:30"
            },
            {
                id: 2,
                title: "Peluncuran Aplikasi Mobile",
                description: "Dokumentasi launching aplikasi",
                thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600",
                duration: "3:45"
            },
            {
                id: 3,
                title: "Kegiatan CSR Tahun 2023",
                description: "Rangkuman program tanggung jawab sosial",
                thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600",
                duration: "7:20"
            },
            {
                id: 4,
                title: "Workshop Pelayanan Prima",
                description: "Pelatihan peningkatan kualitas layanan",
                thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
                duration: "4:15"
            },
            {
                id: 5,
                title: "Testimoni Masyarakat",
                description: "Pengalaman masyarakat menggunakan layanan",
                thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600",
                duration: "6:00"
            },
            {
                id: 6,
                title: "Inovasi Pelayanan Digital",
                description: "Transformasi digital di kantor kami",
                thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
                duration: "8:10"
            },
            {
                id: 7,
                title: "Pelatihan SDM 2024",
                description: "Program pengembangan kapasitas pegawai",
                thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
                duration: "5:45"
            },
            {
                id: 8,
                title: "Sosialisasi Peraturan Baru",
                description: "Penjelasan kebijakan terbaru",
                thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
                duration: "4:30"
            }
        ];

        extendedVideoData.forEach((video, index) => {
            const videoCard = `
        <div class="col-md-4 col-lg-3 fade-in-up" style="animation-delay: ${index * 0.05}s">
          <div class="video-card">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-play-btn">
              <i class="bi bi-play-fill"></i>
            </div>
            <div class="video-info">
              <h5>${video.title}</h5>
              <p><i class="bi bi-clock me-1"></i> ${video.duration}</p>
            </div>
          </div>
        </div>
      `;
            allVideosContainer.innerHTML += videoCard;
        });
    }
});
