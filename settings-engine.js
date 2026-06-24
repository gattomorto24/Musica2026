/**
 * CRONOSOUND SETTINGS ENGINE 1
 * Persistent, cross-page accessibility and appearance preferences.
 */
(function () {
    const STORAGE_KEY = 'cronosound-settings-v1';
    const defaults = Object.freeze({
        boldText: false,
        fontScale: 100,
        frost: 78,
        animations: true,
        headerCollapse: true,
        simpleMode: false,
        highContrast: false,
        ambientBackground: true,
        compactLayout: false,
        shadows: true,
        largeTargets: false,
        customTheme: false,
        colors: {
            background: '#07101f',
            primary: '#4ca3ff',
            secondary: '#1a3152',
            elements: '#ffffff'
        }
    });

    const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value) || min));
    const validColor = (value, fallback) => /^#[0-9a-f]{6}$/i.test(value || '') ? value : fallback;
    const read = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            return {
                ...defaults,
                ...saved,
                fontScale: clamp(saved.fontScale ?? defaults.fontScale, 80, 135),
                frost: clamp(saved.frost ?? defaults.frost, 0, 100),
                colors: {
                    background: validColor(saved.colors?.background, defaults.colors.background),
                    primary: validColor(saved.colors?.primary, defaults.colors.primary),
                    secondary: validColor(saved.colors?.secondary, defaults.colors.secondary),
                    elements: validColor(saved.colors?.elements, defaults.colors.elements)
                }
            };
        } catch (_) {
            return JSON.parse(JSON.stringify(defaults));
        }
    };

    let state = read();
    const root = document.documentElement;

    const apply = () => {
        root.dataset.settingBold = String(state.boldText);
        root.dataset.settingAnimations = String(state.animations);
        root.dataset.settingHeaderCollapse = String(state.headerCollapse);
        root.dataset.settingSimple = String(state.simpleMode);
        root.dataset.settingContrast = String(state.highContrast);
        root.dataset.settingAmbient = String(state.ambientBackground);
        root.dataset.settingCompact = String(state.compactLayout);
        root.dataset.settingShadows = String(state.shadows);
        root.dataset.settingLargeTargets = String(state.largeTargets);
        root.dataset.settingCustomTheme = String(state.customTheme);
        root.style.setProperty('--settings-font-scale', state.fontScale);
        root.style.setProperty('--settings-font-size', `${(16 * state.fontScale / 100).toFixed(2)}px`);
        root.style.setProperty('--settings-frost-percent', `${state.frost}%`);
        root.style.setProperty('--settings-frost-blur', `${Math.round(state.frost * 0.48)}px`);
        root.style.setProperty('--settings-bg', state.colors.background);
        root.style.setProperty('--settings-primary', state.colors.primary);
        root.style.setProperty('--settings-secondary', state.colors.secondary);
        root.style.setProperty('--settings-elements', state.colors.elements);
        document.dispatchEvent(new CustomEvent('cronosound:settingschange', { detail: getState() }));
    };

    const save = () => {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
        apply();
    };
    const getState = () => JSON.parse(JSON.stringify(state));

    window.SettingsEngine = {
        defaults,
        get: getState,
        update(patch) {
            state = {
                ...state,
                ...patch,
                colors: { ...state.colors, ...(patch.colors || {}) }
            };
            state.fontScale = clamp(state.fontScale, 80, 135);
            state.frost = clamp(state.frost, 0, 100);
            save();
            return getState();
        },
        reset() {
            state = JSON.parse(JSON.stringify(defaults));
            save();
            return getState();
        },
        apply
    };

    apply();
    document.addEventListener('DOMContentLoaded', apply);
    window.addEventListener('storage', (event) => {
        if (event.key === STORAGE_KEY) {
            state = read();
            apply();
        }
    });
})();
