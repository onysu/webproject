// Organizational Chart using Primitives.js
$(document).ready(function () {
  const chartContainer = $('#orgChart');

  // Define organizational structure
  const items = [
    {
      id: "1",
      parent: null,
      title: "Dr. Ahmad Santoso, M.Si",
      description: "Kepala Kantor"
    },
    {
      id: "2",
      parent: "1",
      title: "Siti Nurhaliza, S.Kom",
      description: "Sekretaris"
    },
    {
      id: "3",
      parent: "2",
      title: "Budi Hartono, S.E",
      description: "Kepala Bagian Keuangan"
    },
    {
      id: "4",
      parent: "2",
      title: "Dewi Lestari, M.Pd",
      description: "Kepala Bagian SDM"
    },
    {
      id: "5",
      parent: "2",
      title: "Indra Gunawan, S.Sos",
      description: "Kepala Bagian Umum"
    },
    {
      id: "6",
      parent: "3",
      title: "Rini Supriyanto",
      description: "Staff Keuangan - Analis"
    },
    {
      id: "7",
      parent: "3",
      title: "Hendra Wijaya",
      description: "Staff Keuangan - Bendahara"
    },
    {
      id: "8",
      parent: "4",
      title: "Tina Marlina",
      description: "Staff SDM - Rekrutmen"
    },
    {
      id: "9",
      parent: "4",
      title: "Wito Prasetyo",
      description: "Staff SDM - Pelatihan"
    },
    {
      id: "10",
      parent: "5",
      title: "Maya Kusuma",
      description: "Staff Umum - Administrasi"
    },
    {
      id: "11",
      parent: "5",
      title: "Bambang Setiadi",
      description: "Staff Umum - Logistik"
    }
  ];

  // Get current theme
  const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
  const isDark = currentTheme === 'dark';

  if (chartContainer.length) {
    try {
      // Initialize the org diagram
      chartContainer.orgDiagram({
        items: items,
        cursorItem: 1,
        hasSelectorCheckbox: false,
        normalLevelShift: 30,
        dotLevelShift: 30,
        lineLevelShift: 30,
        normalItemsInterval: 30,
        linesColor: isDark ? "#666" : "#999",
        linesWidth: 2,
        enablePanning: true,
        pageFitMode: "AutoSize",
        autoSizeMinimum: { width: 800, height: 600 },
        templateName: "defaultTemplate"
      });

      console.log("✓ Organizational chart initialized successfully");

    } catch (error) {
      console.error("✗ Error initializing chart:", error);
      showFallback("Error loading chart. Please refresh the page.");
    }
  } else {
    console.warn("Chart container not found");
  }

  function showFallback(message) {
    chartContainer.html(`
      <div class="alert alert-warning m-5">
        <i class="bi bi-exclamation-triangle me-2"></i>${message}
      </div>
    `);
  }

  // Listen for theme changes
  document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('[data-bs-theme-value]');
    themeButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        setTimeout(() => location.reload(), 300);
      });
    });
  });
});
