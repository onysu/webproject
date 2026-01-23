// Load all news for berita.html page
document.addEventListener('DOMContentLoaded', function () {
    const allNewsContainer = document.getElementById('allNewsContainer');

    if (allNewsContainer) {
        // Extended news data for full page
        const extendedNewsData = [
            {
                id: 1,
                title: "Peluncuran Program Pelayanan Digital Terpadu",
                excerpt: "Kantor resmi meluncurkan sistem pelayanan digital untuk meningkatkan efisiensi dan kualitas layanan kepada masyarakat.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600",
                date: "15 Januari 2024",
                category: "Teknologi"
            },
            {
                id: 2,
                title: "Sosialisasi Peraturan Baru Tahun 2024",
                excerpt: "Tim kantor mengadakan sosialisasi peraturan terbaru yang akan berlaku mulai bulan depan untuk meningkatkan transparansi.",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
                date: "12 Januari 2024",
                category: "Kebijakan"
            },
            {
                id: 3,
                title: "Kerjasama dengan Instansi Pemerintah Lainnya",
                excerpt: "Penandatanganan MoU dengan beberapa instansi untuk meningkatkan koordinasi dan sinergi program pembangunan.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600",
                date: "10 Januari 2024",
                category: "Partnership"
            },
            {
                id: 4,
                title: "Workshop Pengembangan SDM Aparatur",
                excerpt: "Pelatihan intensif untuk meningkatkan kompetensi dan profesionalisme aparatur sipil negara di lingkungan kantor.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
                date: "8 Januari 2024",
                category: "Pelatihan"
            },
            {
                id: 5,
                title: "Raih Penghargaan Pelayanan Publik Terbaik",
                excerpt: "Kantor meraih penghargaan sebagai instansi dengan pelayanan publik terbaik tingkat nasional tahun 2023.",
                image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600",
                date: "5 Januari 2024",
                category: "Prestasi"
            },
            {
                id: 6,
                title: "Implementasi Sistem E-Government",
                excerpt: "Penerapan sistem pemerintahan elektronik untuk meningkatkan efektivitas administrasi pemerintahan.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
                date: "3 Januari 2024",
                category: "Teknologi"
            },
            {
                id: 7,
                title: "Peningkatan Kapasitas Pelayanan Publik",
                excerpt: "Program peningkatan kualitas dan kapasitas dalam memberikan pelayanan kepada masyarakat.",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
                date: "1 Januari 2024",
                category: "Pelatihan"
            },
            {
                id: 8,
                title: "Launching Aplikasi Mobile Layanan Masyarakat",
                excerpt: "Aplikasi mobile untuk memudahkan masyarakat mengakses berbagai layanan pemerintah dari smartphone.",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600",
                date: "28 Desember 2023",
                category: "Teknologi"
            },
            {
                id: 9,
                title: "Program CSR untuk Masyarakat",
                excerpt: "Kegiatan tanggung jawab sosial perusahaan yang memberikan manfaat langsung kepada masyarakat sekitar.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600",
                date: "25 Desember 2023",
                category: "Partnership"
            }
        ];

        extendedNewsData.forEach((news, index) => {
            const newsCard = `
        <div class="col-md-6 mb-4 fade-in-up" style="animation-delay: ${index * 0.1}s">
          <div class="card news-card h-100">
            <div class="position-relative">
              <img src="${news.image}" class="card-img-top" alt="${news.title}">
              <span class="news-badge">${news.category}</span>
            </div>
            <div class="card-body">
              <div class="news-meta">
                <i class="bi bi-calendar3 me-1"></i> ${news.date}
              </div>
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">${news.excerpt}</p>
              <a href="#" class="read-more">
                Baca Selengkapnya <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      `;
            allNewsContainer.innerHTML += newsCard;
        });
    }
});
