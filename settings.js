/** CRONOSOUND SETTINGS PAGE */
(function () {
    const updateRangeVisual = (input) => {
        const min = Number(input.min) || 0;
        const max = Number(input.max) || 100;
        const progress = ((Number(input.value) - min) / (max - min)) * 100;
        input.style.setProperty('--range-progress', `${progress}%`);
        const output = document.querySelector(`[data-output="${input.dataset.setting}"]`);
        if (output) output.value = `${input.value}%`;
    };

    const render = () => {
        const state = window.SettingsEngine.get();
        document.querySelectorAll('[data-setting]').forEach((input) => {
            const key = input.dataset.setting;
            if (input.type === 'checkbox') input.checked = Boolean(state[key]);
            else input.value = state[key];
            if (input.type === 'range') updateRangeVisual(input);
        });
        document.querySelectorAll('[data-color-setting]').forEach((input) => {
            input.value = state.colors[input.dataset.colorSetting];
        });
        const preview = document.querySelector('.settings-palette-preview');
        if (preview) {
            preview.style.setProperty('--preview-bg', state.colors.background);
            preview.style.setProperty('--preview-primary', state.colors.primary);
            preview.style.setProperty('--preview-secondary', state.colors.secondary);
            preview.style.setProperty('--preview-elements', state.colors.elements);
        }
    };

    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const [headerResponse, menuResponse] = await Promise.all([fetch('header.html'), fetch('menu.html')]);
            if (headerResponse.ok) document.getElementById('site-header').innerHTML = await headerResponse.text();
            if (menuResponse.ok) document.getElementById('site-menu').innerHTML = await menuResponse.text();
            window.setupSharedStickyHeader?.();
        } catch (error) {
            console.error('Unable to load shared settings navigation', error);
        }

        render();
        document.querySelectorAll('[data-setting]').forEach((input) => {
            const eventName = input.type === 'range' ? 'input' : 'change';
            input.addEventListener(eventName, () => {
                const value = input.type === 'checkbox' ? input.checked : Number(input.value);
                window.SettingsEngine.update({ [input.dataset.setting]: value });
                if (input.type === 'range') updateRangeVisual(input);
            });
        });
        document.querySelectorAll('[data-color-setting]').forEach((input) => {
            input.addEventListener('input', () => {
                window.SettingsEngine.update({ colors: { [input.dataset.colorSetting]: input.value } });
                render();
            });
        });
        document.getElementById('settings-reset')?.addEventListener('click', () => {
            const reset = () => { window.SettingsEngine.reset(); render(); };
            if (window.showSystemAlert) {
                window.showSystemAlert(window.t('settings_reset'), window.t('settings_reset_confirm'), window.t('ok'), window.t('cancel'), reset);
            } else if (window.confirm(window.t('settings_reset_confirm'))) reset();
        });
        window.applyTranslations?.();
    });

    document.addEventListener('cronosound:settingschange', render);
})();
