/**
 * CRONOSOUND THEME ENGINE - Professional Cloud OS
 * Gestione persistenza e iniezione dinamica del toggle
 */

(function() {
    // 1. LOGICA DI CARICAMENTO IMMEDIATO (Anti-Flash)
    const savedTheme = localStorage.getItem('cronosound-theme') || 'dark-mode';
    document.documentElement.className = savedTheme;
    document.body.className = savedTheme;

    // 2. FUNZIONE DI SWITCH
    window.toggleTheme = function() {
        const isLight = document.body.classList.contains('light-mode');
        const newTheme = isLight ? 'dark-mode' : 'light-mode';
        
        document.body.className = newTheme;
        document.documentElement.className = newTheme;
        localStorage.setItem('cronosound-theme', newTheme);
        
        // Aggiorna l'icona se il tasto esiste
        updateToggleIcons(newTheme);
    };

    function updateToggleIcons(theme) {
        const btnDesk = document.getElementById('theme-toggle-desk');
        if (btnDesk) {
            btnDesk.innerText = theme === 'light-mode' ? '☀️' : '🌓';
        }
    }

    // 3. INIEZIONE AUTOMATICA (Per info.html e simili)
    document.addEventListener('DOMContentLoaded', () => {
        // Se non trova il toggle desktop, lo crea (utile per info.html)
        if (!document.getElementById('theme-toggle-desk') && !document.querySelector('.no-auto-theme')) {
            const nav = document.querySelector('.nav') || document.body;
            const btn = document.createElement('button');
            btn.id = 'theme-toggle-desk';
            btn.innerHTML = (localStorage.getItem('cronosound-theme') === 'light-mode') ? '☀️' : '🌓';
            btn.style.cssText = "position:fixed; top:20px; right:80px; z-index:9999; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:50%; width:45px; height:45px; cursor:pointer; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(10px); color:inherit;";
            btn.onclick = window.toggleTheme;
            nav.appendChild(btn);
        }
        
        // Sincronizza lo stato iniziale dell'icona
        updateToggleIcons(localStorage.getItem('cronosound-theme') || 'dark-mode');
    });
})();
