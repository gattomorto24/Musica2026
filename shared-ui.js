(function(){
    // Shared UI functions used by menu.html when fragments are injected
    window.toggleMenu = window.toggleMenu || function(forceOpen) {
        const m = document.getElementById('mobile-menu');
        if (!m) return;
        const isVisible = typeof forceOpen === 'boolean'
            ? forceOpen
            : !(getComputedStyle(m).display !== 'none' && m.style.display !== 'none');
        window.clearTimeout(window.mobileMenuCloseTimer);
        if (!isVisible) {
            m.classList.remove('active');
            m.classList.add('is-closing');
            window.mobileMenuCloseTimer = window.setTimeout(() => {
                m.classList.remove('is-closing');
                m.style.display = 'none';
            }, 280);
            document.body.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        } else {
            m.style.display = 'flex';
            m.classList.remove('is-closing');
            void m.offsetWidth;
            m.classList.add('active');
            document.body.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
        }
    };

    window.navigateToSection = window.navigateToSection || function(t) {
        const path = window.location.pathname;
        const onIndex = /(^|\/)index\.html$/.test(path) || path.endsWith('/');
        if (onIndex && typeof showTab === 'function') {
            showTab(t);
            window.location.hash = t;
            if (typeof toggleMenu === 'function') toggleMenu(false);
            return;
        }
        if (typeof toggleMenu === 'function') toggleMenu(false);
        window.location.href = 'index.html#' + encodeURIComponent(t);
    };

    window.mobileTab = window.mobileTab || function(t) {
        window.navigateToSection(t);
    };

    window.mobileNavigate = window.mobileNavigate || function(url) {
        if (typeof toggleMenu === 'function') toggleMenu(false);
        window.location.href = url;
    };

    // Small helpers used by the hero actions — safe no-op fallbacks
    window.toggleCoverVisibility = window.toggleCoverVisibility || function() {
        const btn = document.getElementById('hero-cover-toggle-btn');
        if (!btn) return;
        const label = btn.querySelector('.hero-action-label');
        if (label) label.textContent = label.textContent.includes('Disattiva') ? 'Attiva copertine' : 'Disattiva copertine';
    };

    window.openSortMenu = window.openSortMenu || function() {
        // fallback: simple alert for pages that don't implement sort UI
        try { if (typeof openSortOverlay === 'function') return openSortOverlay(); } catch (e){}
        console.log('openSortMenu: no-op fallback');
    };

    window.toggleExportOverlay = window.toggleExportOverlay || function() {
        try { if (typeof openExportOverlay === 'function') return openExportOverlay(); } catch (e){}
        console.log('toggleExportOverlay: no-op fallback');
    };

    window.logout = window.logout || function() {
        // best-effort redirect to account page logout section
        window.location.href = 'account.html#logout';
    };

    window.setupSharedStickyHeader = window.setupSharedStickyHeader || function() {
        const header = document.querySelector('.main-header');
        if (!header || header.dataset.compactScrollReady === 'true') return;
        header.dataset.compactScrollReady = 'true';
        let ticking = false;
        const updateHeader = () => {
            const scrolled = window.scrollY > 18;
            header.classList.toggle('compact', scrolled);
            document.body.classList.toggle('header-compact', scrolled);
        };
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                updateHeader();
                ticking = false;
            });
        }, { passive: true });
        updateHeader();
    };

    document.addEventListener('DOMContentLoaded', () => {
        window.setTimeout(() => window.setupSharedStickyHeader(), 0);
        window.setTimeout(() => window.setupSharedStickyHeader(), 250);
    });
})();
