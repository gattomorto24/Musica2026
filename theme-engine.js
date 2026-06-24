/**
 * CRONOSOUND THEME ENGINE v1.5
 * Power-User Edition for Tony Executive Systems
 * --------------------------------------------
 * Gestisce: Persistenza, Anti-Flash, Auto-Injection, Multi-Tab Sync
 */

(function() {
    const THEME_CLASSES = ['dark-mode', 'light-mode', 'red-mode', 'glass-mode', 'blue-mode', 'gold-mode'];
    const THEME_COLORS = {
        'dark-mode': '#020308',
        'light-mode': '#f2f2f7',
        'red-mode': '#170809',
        'glass-mode': '#eaf5fb',
        'blue-mode': '#07111f',
        'gold-mode': '#140f05'
    };

    // --- 1. LOGICA PRE-RENDER (Eseguita prima del caricamento della pagina) ---
    const getSavedTheme = () => {
        const savedTheme = localStorage.getItem('cronosound-theme');
        return THEME_CLASSES.includes(savedTheme) ? savedTheme : 'dark-mode';
    };
    const applyTheme = (theme) => {
        const safeTheme = THEME_CLASSES.includes(theme) ? theme : 'dark-mode';
        [document.documentElement, document.body].filter(Boolean).forEach((element) => {
            element.classList.remove(...THEME_CLASSES);
            element.classList.add(safeTheme);
        });

        const themeColor = document.querySelector('meta[name="theme-color"]');
        if (themeColor) themeColor.setAttribute('content', THEME_COLORS[safeTheme]);
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
                const nextTheme = THEME_CLASSES.includes(e.newValue) ? e.newValue : 'dark-mode';
                applyTheme(nextTheme);
                updateIcons(nextTheme);
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
        title.dataset.i18n = 'theme_menu_title';
        title.textContent = window.t ? window.t('theme_menu_title') : 'Scegli tema';
        content.appendChild(title);

        const subtitle = document.createElement('p');
        subtitle.dataset.i18n = 'theme_menu_description';
        subtitle.textContent = window.t ? window.t('theme_menu_description') : 'Scegli una palette per CronoSound.';
        content.appendChild(subtitle);

        const options = document.createElement('div');
        options.className = 'theme-options';

        const themes = [
            { titleKey: 'theme_dark', emoji: '🌓', descriptionKey: 'theme_dark_desc', class: 'dark-mode' },
            { titleKey: 'theme_light', emoji: '☀️', descriptionKey: 'theme_light_desc', class: 'light-mode' },
            { titleKey: 'theme_red', emoji: '🔴', descriptionKey: 'theme_red_desc', class: 'red-mode' },
            { titleKey: 'theme_glass', emoji: '💎', descriptionKey: 'theme_glass_desc', class: 'glass-mode' },
            { titleKey: 'theme_blue', emoji: '🔵', descriptionKey: 'theme_blue_desc', class: 'blue-mode' },
            { titleKey: 'theme_gold', emoji: '🟡', descriptionKey: 'theme_gold_desc', class: 'gold-mode' }
        ];

        themes.forEach(({ titleKey, emoji, descriptionKey, class: themeClass }) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'theme-option';
            button.dataset.theme = themeClass;
            button.innerHTML = `<strong>${emoji} <span data-i18n="${titleKey}">${window.t ? window.t(titleKey) : titleKey}</span></strong><span data-i18n="${descriptionKey}">${window.t ? window.t(descriptionKey) : descriptionKey}</span>`;
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
