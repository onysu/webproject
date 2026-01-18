// ==================== Sample Data ====================
const newsData = [
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
  }
];

const photoGalleryData = [
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
  }
];

const videoGalleryData = [
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
  }
];

// ==================== Clock and Day Update ====================
function updateDateTime() {
  const now = new Date();

  // Format day
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const dayName = days[now.getDay()];

  // Format time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Update DOM
  document.getElementById('current-day').textContent = dayName;
  document.getElementById('current-time').textContent = timeString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call

// ==================== Header Scroll Behavior ====================
let lastScrollTop = 0;
const header1 = document.getElementById('header-1');
const header2 = document.getElementById('header-2');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Hide/show header-1 on scroll
  if (scrollTop > 37) {
    header1.classList.add('hidden');
    header2.classList.add('sticky');
  } else {
    header1.classList.remove('hidden');
    header2.classList.remove('sticky');
  }

  lastScrollTop = scrollTop;
});

// ==================== Dark/Light Mode Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-bs-theme', currentTheme);
updateThemeIcon(currentTheme);

function toggleTheme() {
  const currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  html.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = theme === 'light' ? 'bi-moon-fill' : 'bi-sun-fill';
  const buttons = [themeToggle, themeToggleMobile];

  buttons.forEach(button => {
    if (button) {
      const iconElement = button.querySelector('i');
      iconElement.className = `bi ${icon}`;
    }
  });
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// ==================== Swiper Initialization ====================
// Hero Background Slider
const heroBgSwiper = new Swiper('.hero-bg-slider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
});

// Employee Slider
const employeeSwiper = new Swiper('.employee-slider', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
});

// ==================== Load Content Functions ====================
function loadNews() {
  const newsContainer = document.getElementById('newsContainer');

  newsData.forEach((news, index) => {
    const newsCard = `
            <div class="col-md-6 col-lg-4 mb-4 fade-in-up" style="animation-delay: ${index * 0.1}s">
                <div class="card news-card">
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
    newsContainer.innerHTML += newsCard;
  });
}

function loadPhotoGallery() {
  const photoContainer = document.getElementById('photoGalleryContainer');

  photoGalleryData.forEach((photo, index) => {
    const photoCard = `
            <div class="col-md-6 col-lg-4 fade-in-up" style="animation-delay: ${index * 0.1}s">
                <div class="gallery-card">
                    <img src="${photo.image}" alt="${photo.title}">
                    <div class="gallery-overlay">
                        <h5>${photo.title}</h5>
                        <p><i class="bi bi-camera me-1"></i> ${photo.description}</p>
                    </div>
                </div>
            </div>
        `;
    photoContainer.innerHTML += photoCard;
  });
}

function loadVideoGallery() {
  const videoContainer = document.getElementById('videoGalleryContainer');

  videoGalleryData.forEach((video, index) => {
    const videoCard = `
            <div class="col-md-6 col-lg-4 fade-in-up" style="animation-delay: ${index * 0.1}s">
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
    videoContainer.innerHTML += videoCard;
  });
}

// ==================== Initialize on Page Load ====================
document.addEventListener('DOMContentLoaded', function () {
  loadNews();
  loadPhotoGallery();
  loadVideoGallery();

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 118; // header1 + header2 height
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarCollapse.classList.remove('show');
        }
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
