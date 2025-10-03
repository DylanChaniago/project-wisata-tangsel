// ===== MAIN APPLICATION INITIALIZATION =====

class App {
    constructor() {
        this.isInitialized = false;
        this.currentSection = 'home';
        this.init();
    }

    async init() {
        try {
            console.log('🚀 Starting Wisata Tangerang Selatan application...');
            
            // Show loading state
            this.showLoading();
            
            // Initialize core modules first
            await this.initializeCoreModules();
            
            // Initialize additional features
            this.initializeAdditionalFeatures();
            
            // Set up event listeners
            this.bindGlobalEvents();
            
            // Initialize responsive features
            this.initializeResponsiveFeatures();
            
            // Show welcome experience
            setTimeout(() => {
                this.showWelcomeExperience();
            }, 100);
            
            // Mark as initialized
            this.isInitialized = true;
            
            // Hide loading
            setTimeout(() => {
                this.hideLoading();
            }, 800);
            
            console.log('🎉 Aplikasi Wisata Tangerang Selatan berhasil diinisialisasi');
            
        } catch (error) {
            console.error('❌ Gagal menginisialisasi aplikasi:', error);
            this.handleInitializationError(error);
        }
    }

    async initializeCoreModules() {
        console.log('🔄 Menginisialisasi modul inti...');
        
        // Initialize utilities first
        if (typeof initModal === 'function') {
            initModal();
        }
        
        await this.delay(50);
        
        // Initialize theme manager
        if (typeof ThemeManager !== 'undefined') {
            try {
                window.themeManager = new ThemeManager();
                console.log('✅ Manajer tema diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi tema:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize navigation
        if (typeof NavigationManager !== 'undefined') {
            try {
                window.navigationManager = new NavigationManager();
                console.log('✅ Manajer navigasi diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi navigasi:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize search functionality
        if (typeof SearchManager !== 'undefined') {
            try {
                window.searchManager = new SearchManager();
                console.log('✅ Manajer pencarian diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi pencarian:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize favorites manager
        if (typeof FavoritesManager !== 'undefined') {
            try {
                window.favoritesManager = new FavoritesManager();
                console.log('✅ Manajer favorit diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi favorit:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize mobile navigation
        if (typeof MobileNavigation !== 'undefined') {
            try {
                window.mobileNavigation = new MobileNavigation();
                console.log('✅ Navigasi mobile diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi navigasi mobile:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize render manager
        if (typeof RenderManager !== 'undefined') {
            try {
                window.renderManager = new RenderManager();
                console.log('✅ Manajer render diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi render:', error);
            }
        }
        
        await this.delay(50);
        
        // Initialize statistics
        if (typeof StatisticsManager !== 'undefined') {
            try {
                window.statisticsManager = new StatisticsManager();
                console.log('✅ Statistik diinisialisasi');
            } catch (error) {
                console.error('❌ Gagal menginisialisasi statistik:', error);
            }
        }
        
        console.log('✅ Semua modul inti berhasil diinisialisasi');
    }

    initializeAdditionalFeatures() {
        console.log('🔧 Menginisialisasi fitur tambahan...');
        
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                this.initializeNonCriticalFeatures();
            });
        } else {
            setTimeout(() => {
                this.initializeNonCriticalFeatures();
            }, 2000);
        }
    }

    initializeNonCriticalFeatures() {
        // Initialize PWA features
        if (typeof PWAManager !== 'undefined') {
            try {
                window.pwaManager = new PWAManager();
                console.log('✅ Fitur PWA diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi PWA:', error);
            }
        }
        
        // Initialize analytics
        if (typeof AnalyticsManager !== 'undefined') {
            try {
                window.analyticsManager = new AnalyticsManager();
                console.log('✅ Analytics diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi analytics:', error);
            }
        }
        
        // Initialize SEO features
        if (typeof SEOManager !== 'undefined') {
            try {
                window.seoManager = new SEOManager();
                console.log('✅ SEO diinisialisasi');
            } catch (error) {
                console.warn('⚠️ Gagal menginisialisasi SEO:', error);
            }
        }
    }

    bindGlobalEvents() {
        console.log('🔗 Mengatur event listener global...');
        
        this.setupErrorHandling();
        this.setupConnectivityMonitoring();
        this.setupPerformanceMonitoring();
        this.setupBackToTop();
        this.setupKeyboardShortcuts();
        this.setupVisibilityHandler();
        this.setupResizeHandler();
        
        console.log('✅ Event listener global berhasil diatur');
    }

    initializeResponsiveFeatures() {
        console.log('📱 Menginisialisasi fitur responsif...');
        
        if (typeof optimizeForTouch === 'function') {
            optimizeForTouch();
        } else {
            this.fallbackTouchOptimization();
        }
        
        if (typeof handleOrientation === 'function') {
            handleOrientation();
        } else {
            this.fallbackOrientationHandler();
        }
        
        if (typeof loadResponsiveImages === 'function') {
            setTimeout(() => {
                loadResponsiveImages();
            }, 500);
        } else {
            this.fallbackLazyLoading();
        }
    }

    showWelcomeExperience() {
        const firstVisit = !localStorage.getItem('hasVisited');
        if (firstVisit) {
            setTimeout(() => {
                if (typeof showToast === 'function') {
                    showToast('🎉 Selamat datang di Wisata Tangerang Selatan!');
                }
                localStorage.setItem('hasVisited', 'true');
            }, 1500);
        }
        
        setTimeout(() => {
            if (typeof updateStatistics === 'function') {
                updateStatistics();
            }
        }, 300);
        
        if (window.favoritesManager) {
            window.favoritesManager.updateFavoriteCounts();
        }
        
        if (typeof updateCategoryCountsDisplay === 'function') {
            updateCategoryCountsDisplay();
        }
    }

    setupPerformanceMonitoring() {
        if (this.isDevelopment()) return;

        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.duration > 100) {
                            console.warn('🐌 Task lama terdeteksi:', {
                                duration: Math.round(entry.duration),
                                name: entry.name
                            });
                        }
                    }
                });
                observer.observe({ entryTypes: ['longtask'] });
            } catch (error) {
                console.warn('⚠️ PerformanceObserver tidak didukung');
            }
        }
    }

    setupErrorHandling() {
        window.addEventListener('error', (e) => {
            console.error('🚨 Error global:', e.error);
            this.logError('Global Error', e.error);
            
            if (typeof showToast === 'function') {
                showToast('⚠️ Terjadi kesalahan. Silakan refresh halaman.');
            }
        });

        window.addEventListener('unhandledrejection', (e) => {
            console.error('🚨 Promise rejection tidak tertangani:', e.reason);
            this.logError('Unhandled Promise Rejection', e.reason);
        });
    }

    setupConnectivityMonitoring() {
        window.addEventListener('online', () => {
            console.log('🌐 Koneksi internet tersedia');
            
            if (typeof showToast === 'function') {
                showToast('✅ Koneksi internet tersedia', 2000);
            }
            
            if (this.isInitialized) {
                this.refreshData();
            }
        });

        window.addEventListener('offline', () => {
            console.log('📴 Koneksi internet terputus');
            
            if (typeof showToast === 'function') {
                showToast('📶 Anda sedang offline', 3000);
            }
        });
    }

    setupBackToTop() {
        const backToTopButton = document.getElementById('backToTop');
        
        if (backToTopButton) {
            let scrollTimeout;
            const scrollHandler = () => {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                
                scrollTimeout = setTimeout(() => {
                    const scrollY = window.pageYOffset;
                    const viewportHeight = window.innerHeight;
                    
                    if (scrollY > viewportHeight) {
                        backToTopButton.classList.add('visible');
                    } else {
                        backToTopButton.classList.remove('visible');
                    }
                }, 100);
            };
            
            window.addEventListener('scroll', scrollHandler, { passive: true });
            
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            if (e.key === 'Escape') {
                if (window.mobileNavigation && window.mobileNavigation.isOpen) {
                    window.mobileNavigation.closeMenu();
                    e.preventDefault();
                } else if (typeof hideModal === 'function') {
                    hideModal();
                }
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 't') {
                e.preventDefault();
                if (typeof toggleTheme === 'function') {
                    toggleTheme();
                }
            }
        });
    }

    setupVisibilityHandler() {
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.onTabActive();
            } else {
                this.onTabInactive();
            }
        });
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.onWindowResize();
            }, 250);
        });
    }

    fallbackTouchOptimization() {
        if (this.isTouchDevice()) {
            const touchElements = document.querySelectorAll('button, .action-btn, .filter-btn');
            touchElements.forEach(element => {
                element.style.minHeight = '44px';
                element.style.minWidth = '44px';
            });
        }
    }

    fallbackOrientationHandler() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                if (window.renderManager) {
                    window.renderManager.renderHomePage();
                }
            }, 300);
        });
    }

    fallbackLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    lazyImageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => lazyImageObserver.observe(img));
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    isDevelopment() {
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1';
    }

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }

    onTabActive() {
        console.log('👀 Tab aktif');
        if (this.isInitialized) {
            this.refreshData();
        }
    }

    onTabInactive() {
        console.log('😴 Tab tidak aktif');
    }

    onWindowResize() {
        console.log('📐 Ukuran window berubah');
        if (window.renderManager) {
            window.renderManager.renderHomePage();
        }
    }

    showLoading() {
        if (typeof showLoading === 'function') {
            showLoading();
        } else {
            const spinner = document.getElementById('loadingSpinner');
            if (spinner) {
                spinner.style.display = 'flex';
            }
        }
    }

    hideLoading() {
        if (typeof hideLoading === 'function') {
            hideLoading();
        } else {
            const spinner = document.getElementById('loadingSpinner');
            if (spinner) {
                spinner.style.display = 'none';
            }
        }
    }

    logError(type, error) {
        const errorData = {
            type: type,
            message: error?.message || error?.toString(),
            timestamp: new Date().toISOString(),
            url: window.location.href
        };
        
        console.error('📝 Error logged:', errorData);
    }

    handleInitializationError(error) {
        console.error('💥 Gagal inisialisasi aplikasi:', error);
        
        if (typeof showToast === 'function') {
            showToast('❌ Gagal memuat aplikasi. Silakan refresh halaman.');
        }
        
        this.hideLoading();
    }

    refreshData() {
        console.log('🔄 Memperbarui data...');
        
        if (typeof updateStatistics === 'function') {
            updateStatistics();
        }
        
        if (window.renderManager) {
            window.renderManager.renderHomePage();
        }
        
        if (window.favoritesManager) {
            window.favoritesManager.updateFavoriteCounts();
        }
    }

    getStatus() {
        return {
            initialized: this.isInitialized,
            currentSection: this.currentSection,
            online: navigator.onLine,
            theme: localStorage.getItem('theme') || 'dark',
            favoritesCount: window.favoritesManager ? window.favoritesManager.getFavorites().length : 0
        };
    }
}

async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            setTimeout(async () => {
                const registration = await navigator.serviceWorker.register('/sw.js');
                console.log('✅ Service Worker terdaftar');
            }, 3000);
        } catch (error) {
            console.error('❌ Gagal mendaftarkan Service Worker:', error);
        }
    }
}

async function bootstrapApplication() {
    console.log('🚀 Memulai aplikasi Wisata Tangerang Selatan...');
    
    registerServiceWorker();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                window.app = new App();
            }, 100);
        });
    } else {
        setTimeout(() => {
            window.app = new App();
        }, 100);
    }
}

window.addEventListener('error', (e) => {
    console.error('💥 Error bootstrap:', e.error);
});

bootstrapApplication().catch(error => {
    console.error('💥 Bootstrap gagal:', error);
});

window.getAppStatus = () => {
    return window.app ? window.app.getStatus() : { error: 'Aplikasi belum diinisialisasi' };
};