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
        showThemeMenu();
    };

    // --- 4. MENU POPUP DEI TEMI ---
    function showThemeMenu() {
        const existingMenu = document.getElementById('theme-menu-popup');
        if (existingMenu) {
            existingMenu.remove();
            return;
        }

        const menu = document.createElement('div');
        menu.id = 'theme-menu-popup';
        menu.className = 'theme-menu-overlay active';
        menu.onclick = () => window.closeThemeMenu();

        const content = document.createElement('div');
        content.className = 'theme-menu-card';
        content.onclick = (e) => e.stopPropagation();

        const closeBtn = document.createElement('button');
        closeBtn.className = 'theme-close-btn';
        closeBtn.innerText = '✕';
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            window.closeThemeMenu();
        };
        content.appendChild(closeBtn);

        const title = document.createElement('h3');
        title.textContent = 'Scegli Tema';
        content.appendChild(title);

        const subtitle = document.createElement('p');
        subtitle.textContent = 'Usa un tema rapido e coerente con lo stile CronoSound 1.8.';
        content.appendChild(subtitle);

        const options = document.createElement('div');
        options.className = 'theme-options';

        const themes = [
            { title: 'Dark', emoji: '🌓', description: 'Notte classica', class: 'dark-mode' },
            { title: 'Light', emoji: '☀️', description: 'Chiaro e pulito', class: 'light-mode' },
            { title: 'Red', emoji: '🔴', description: 'Energia rossa', class: 'red-mode' },
            { title: 'Glass', emoji: '💎', description: 'Vetro e luce', class: 'glass-mode' },
            { title: 'Blue', emoji: '🔵', description: 'Profondità blu', class: 'blue-mode' },
            { title: 'Gold', emoji: '🟡', description: 'Nuovo tema gold', class: 'gold-mode' }
        ];

        themes.forEach(({ title, emoji, description, class: themeClass }) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'theme-option';
            button.dataset.theme = themeClass;
            button.innerHTML = `<strong>${emoji} ${title}</strong><span>${description}</span>`;
            button.onclick = () => {
                applyTheme(themeClass);
                localStorage.setItem('cronosound-theme', themeClass);
                updateIcons(themeClass);
                window.closeThemeMenu();
            };
            options.appendChild(button);
        });

        content.appendChild(options);
        menu.appendChild(content);

        const currentTheme = getSavedTheme();
        const currentBtn = options.querySelector(`[data-theme="${currentTheme}"]`);
        if (currentBtn) {
            currentBtn.classList.add('active');
        }

        document.body.appendChild(menu);
    }

    window.closeThemeMenu = function() {
        const menu = document.getElementById('theme-menu-popup');
        if (menu) {
            menu.remove();
        }
    };

    // --- 5. UTILITIES ---
    function updateIcons(theme) {
        const icons = [
            document.getElementById('theme-toggle-desk'),
            document.getElementById('theme-toggle-mobile')
        ];
        
        let symbol;
        if (theme === 'light-mode') {
            symbol = '☀️';
        } else if (theme === 'red-mode') {
            symbol = '🔴';
        } else if (theme === 'glass-mode') {
            symbol = '💎';
        } else if (theme === 'blue-mode') {
            symbol = '🔵';
        } else if (theme === 'gold-mode') {
            symbol = '🟡';
        } else {
            symbol = '🌓'; // dark-mode
        }
        
        icons.forEach(icon => {
            if (icon) {
                if (icon.tagName === 'BUTTON' || icon.tagName === 'DIV') {
                    icon.innerText = symbol;
                }
            }
        });
    }

})();
