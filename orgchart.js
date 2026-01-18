// Organizational Chart using Primitives.js jQuery plugin
$(document).ready(function () {
    const chartContainer = $('#orgChart');

    if (chartContainer.length && typeof $.fn.orgDiagram !== 'undefined') {
        // Check current theme
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const isDark = currentTheme === 'dark';

        // Define organizational structure - using simple array format
        const items = [
            {
                id: 1,
                parent: null,
                title: "Dr. Ahmad Santoso, M.Si",
                description: "Kepala Kantor",
                image: "https://randomuser.me/api/portraits/men/1.jpg"
            },
            {
                id: 2,
                parent: 1,
                title: "Siti Nurhaliza, S.Kom",
                description: "Sekretaris",
                image: "https://randomuser.me/api/portraits/women/2.jpg"
            },
            // Kepala Bagian
            {
                id: 3,
                parent: 2,
                title: "Budi Hartono, S.E",
                description: "Kepala Bagian Keuangan",
                image: "https://randomuser.me/api/portraits/men/3.jpg"
            },
            {
                id: 4,
                parent: 2,
                title: "Dewi Lestari, M.Pd",
                description: "Kepala Bagian SDM",
                image: "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                id: 5,
                parent: 2,
                title: "Indra Gunawan, S.Sos",
                description: "Kepala Bagian Umum",
                image: "https://randomuser.me/api/portraits/men/5.jpg"
            },
            // Staff Keuangan
            {
                id: 6,
                parent: 3,
                title: "Staff Keuangan 1",
                description: "Analis Keuangan",
                image: "https://randomuser.me/api/portraits/women/10.jpg"
            },
            {
                id: 7,
                parent: 3,
                title: "Staff Keuangan 2",
                description: "Bendahara",
                image: "https://randomuser.me/api/portraits/men/11.jpg"
            },
            // Staff SDM
            {
                id: 8,
                parent: 4,
                title: "Staff SDM 1",
                description: "Rekrutmen",
                image: "https://randomuser.me/api/portraits/women/12.jpg"
            },
            {
                id: 9,
                parent: 4,
                title: "Staff SDM 2",
                description: "Pelatihan",
                image: "https://randomuser.me/api/portraits/men/13.jpg"
            },
            // Staff Umum
            {
                id: 10,
                parent: 5,
                title: "Staff Umum 1",
                description: "Administrasi",
                image: "https://randomuser.me/api/portraits/women/14.jpg"
            },
            {
                id: 11,
                parent: 5,
                title: "Staff Umum 2",
                description: "Logistik",
                image: "https://randomuser.me/api/portraits/men/15.jpg"
            }
        ];

        try {
            // jQuery plugin configuration - using jQuery plugin syntax
            chartContainer.orgDiagram({
                items: items,
                cursorItem: 1,
                hasSelectorCheckbox: 0, // primitives.common.Enabled.False
                normalLevelShift: 20,
                dotLevelShift: 20,
                lineLevelShift: 20,
                normalItemsInterval: 20,
                linesColor: isDark ? "#6c757d" : "#dee2e6",
                linesWidth: 2,
                pageFitMode: 3, // primitives.common.PageFitMode.AutoSize
                autoSizeMinimum: { width: 800, height: 600 }
            });

            console.log("Organizational chart initialized successfully");
        } catch (error) {
            console.error("Error initializing organizational chart:", error);
            // Fallback: Show message if library fails
            chartContainer.html('<div class="text-center p-5"><p class="text-muted">Mohon refresh halaman untuk melihat bagan organisasi</p></div>');
        }
    } else if (chartContainer.length) {
        // Library not loaded - show loading or fallback
        chartContainer.html('<div class="text-center p-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-3 text-muted">Memuat bagan organisasi...</p></div>');

        // Retry after a delay
        setTimeout(function () {
            if (typeof $.fn.orgDiagram !== 'undefined') {
                // If library loaded late, reload the script
                location.reload();
            } else {
                chartContainer.html('<div class="text-center p-5"><p class="text-danger">Gagal memuat library. Silakan refresh halaman.</p></div>');
            }
        }, 3000);
    }
});
