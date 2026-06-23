(function(){
    // Shared UI functions used by menu.html when fragments are injected
    window.toggleMenu = window.toggleMenu || function() {
        const m = document.getElementById('mobile-menu');
        if (!m) return;
        const isVisible = getComputedStyle(m).display !== 'none' && m.style.display !== 'none';
        if (isVisible) {
            m.style.display = 'none';
            document.body.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        } else {
            m.style.display = 'flex';
            document.body.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
        }
    };

    window.mobileTab = window.mobileTab || function(t) {
        if (typeof showTab === 'function') showTab(t);
        if (typeof toggleMenu === 'function') toggleMenu();
    };

    window.mobileNavigate = window.mobileNavigate || function(url) {
        if (typeof toggleMenu === 'function') toggleMenu();
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
})();
