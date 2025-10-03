// ===== THEME MANAGEMENT =====

class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle');
    this.body = document.body;
    this.init();
  }

  init() {
    this.loadTheme();
    this.bindEvents();
  }

  bindEvents() {
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  toggleTheme() {
    const currentTheme = this.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    
    // Show toast notification
    if (typeof showToast === 'function') {
      showToast(`Mode ${newTheme === 'light' ? 'terang' : 'gelap'} diaktifkan`);
    }
  }

  setTheme(theme) {
    this.body.setAttribute('data-theme', theme);
    
    // Update icon
    if (this.themeToggle) {
      const icon = this.themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.setTheme(savedTheme);
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});

// Global function for theme toggle
function toggleTheme() {
  if (window.themeManager) {
    window.themeManager.toggleTheme();
  }
}