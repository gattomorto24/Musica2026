/**
 * CRONOSOUND THEME ENGINE v1.5
 * Power-User Edition for Tony Executive Systems
 * --------------------------------------------
 * Gestisce: Persistenza, Anti-Flash, Auto-Injection, Multi-Tab Sync
 */

(function() {
    // --- 1. LOGICA PRE-RENDER (Eseguita prima del caricamento della pagina) ---
    const getSavedTheme = () => localStorage.getItem('cronosound-theme') || 'dark-mode';
    const applyTheme = (theme) => {
        document.documentElement.className = theme;
        if (document.body) document.body.className = theme;
    };

    // Applica subito all'elemento root per evitare il flash bianco
    applyTheme(getSavedTheme());

    // --- 2. GESTIONE DOM (Eseguita al caricamento del documento) ---
    document.addEventListener('DOMContentLoaded', () => {
        const currentTheme = getSavedTheme();
        applyTheme(currentTheme); // Riapplica al body per sicurezza
        
        // Iniezione automatica del toggle se manca (es. in info.html)
        injectToggleIfNeeded();
        
        // Sincronizza lo stato delle icone
        updateIcons(currentTheme);

        // Listener per cambiamenti da altre schede/finestre
        window.addEventListener('storage', (e) => {
            if (e.key === 'cronosound-theme') {
                applyTheme(e.newValue);
                updateIcons(e.newValue);
            }
        });
    });

    // --- 3. FUNZIONE CORE DI SWITCH ---
    window.toggleTheme = function() {
        const current = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const next = current === 'light-mode' ? 'dark-mode' : 'light-mode';
        
        applyTheme(next);
        localStorage.setItem('cronosound-theme', next);
        updateIcons(next);
        
        console.log(`[SYSTEM] Theme switched to: ${next.toUpperCase()}`);
    };

    // --- 4. UTILITIES ---
    function updateIcons(theme) {
        const icons = [
            document.getElementById('theme-toggle-desk'),
            document.getElementById('theme-toggle-mobile')
        ];
        
        const symbol = theme === 'light-mode' ? '☀️' : '🌓';
        
        icons.forEach(icon => {
            if (icon) {
                if (icon.tagName === 'BUTTON' || icon.tagName === 'DIV') {
                    icon.innerText = symbol;
                }
            }
        });
    }

    function injectToggleIfNeeded() {
        // Se non esiste un toggle desktop e non siamo in una pagina che lo vieta esplicitamente
        if (!document.getElementById('theme-toggle-desk')) {
            const header = document.querySelector('header');
            if (header) {
                const autoBtn = document.createElement('button');
                autoBtn.id = 'theme-toggle-desk';
                autoBtn.onclick = window.toggleTheme;
                autoBtn.title = "Cambia Visualizzazione";
                
                // Styling dinamico per pagine senza CSS specifico
                autoBtn.style.cssText = `
                    position: fixed;
                    top: 25px;
                    right: 25px;
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background: var(--glass);
                    border: 1px solid var(--glass-border);
                    color: var(--text);
                    cursor: pointer;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(15px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    font-size: 1.2rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                `;

                // Effetto hover via JS
                autoBtn.onmouseover = () => { autoBtn.style.transform = "scale(1.1) rotate(15deg)"; autoBtn.style.borderColor = "var(--accent)"; };
                autoBtn.onmouseout = () => { autoBtn.style.transform = "scale(1) rotate(0deg)"; autoBtn.style.borderColor = "var(--glass-border)"; };

                document.body.appendChild(autoBtn);
                updateIcons(getSavedTheme());
            }
        }
    }
})();
