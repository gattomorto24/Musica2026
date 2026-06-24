/**
 * CRONOSOUND INFO RUNTIME
 * Deferred entry point for info.html with dynamic changelog generation.
 */

// Load shared header and menu dynamically
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const [hResp, mResp] = await Promise.all([fetch('header.html'), fetch('menu.html')]);
        if (hResp.ok) document.getElementById('site-header').innerHTML = await hResp.text();
        if (mResp.ok) document.getElementById('site-menu').innerHTML = await mResp.text();
        if (window.setupSharedStickyHeader) window.setupSharedStickyHeader();
    } catch (err) {
        console.error('Error loading shared fragments', err);
    }

    // Apply translations to page
    applyTranslations();
    
    // Generate dynamic changelog based on current language
    generateDynamicChangelog();
});

// Listen for language changes to update changelog
document.addEventListener('cronosound:languagechange', generateDynamicChangelog);

// Generate dynamic changelog with translations
function generateDynamicChangelog() {
    const changelogContainer = document.getElementById('changelog-container');
    if (changelogContainer && window.generateChangelog) {
        changelogContainer.innerHTML = window.generateChangelog();
    }
}
