/**
 * ⚡ CRONOSOUND ULTIMATE REFORMATTER v2.0
 * Script di sincronizzazione intelligente tra Classifica e Metadati.
 * Sistema a Triplo Fallback per la massima resilienza.
 */

const CONFIG = {
    REFRESH_INTERVAL: 30000, // 30 secondi
    DEBUG_MODE: true,
    SELECTORS: {
        ROWS: '.song-row, .ranking-item, tr', // Cerca righe in div o tabelle
        TITLE: '.song-title, .title, .name',
        ARTIST: '.song-artist, .artist',
        ALBUM: '.song-album, .album'
    }
};

/**
 * MOTORE DI RIFORMATTAZIONE
 */
function runCronoSync() {
    if (CONFIG.DEBUG_MODE) console.log("%c[CronoSync] Avvio scansione metadati...", "color: #00f2ff; font-weight: bold;");

    const rows = document.querySelectorAll(CONFIG.SELECTORS.ROWS);
    
    if (rows.length === 0) {
        console.warn("[CronoSync] Nessuna riga trovata. Controlla le classi HTML!");
        return;
    }

    rows.forEach((row, index) => {
        const titleNode = row.querySelector(CONFIG.SELECTORS.TITLE);
        if (!titleNode) return;

        const rawTitle = titleNode.innerText.trim();
        
        // --- FALLBACK 1: Ricerca Diretta nel Mapper ---
        let info = null;
        if (typeof window.getSongInfo === 'function') {
            info = window.getSongInfo(rawTitle);
        } else {
            console.error("[CronoSync] Errore: album-mapper.js non caricato!");
            return;
        }

        // --- FALLBACK 2: Se l'artista è "Sconosciuto", prova una pulizia più aggressiva ---
        if (info.artista === "Artista non specificato") {
            const ultraClean = rawTitle.replace(/[^a-zA-Z0-9 ]/g, " ").replace(/\s+/g, " ");
            info = window.getSongInfo(ultraClean);
        }

        // --- FALLBACK 3: Correzione Automatica Formato ---
        // Se troviamo i dati, iniettiamoli con precisione 1:1
        if (info && info.artista !== "Artista non specificato") {
            applyMetadataToRow(row, info);
        }
    });
}

/**
 * APPLICAZIONE DATI 1:1
 */
function applyMetadataToRow(row, info) {
    const artistNode = row.querySelector(CONFIG.SELECTORS.ARTIST);
    const albumNode = row.querySelector(CONFIG.SELECTORS.ALBUM);

    if (artistNode && artistNode.innerText !== info.artista) {
        artistNode.innerText = info.artista;
        artistNode.style.transition = "color 0.5s";
        artistNode.style.color = "var(--accent)"; // Feedback visivo del cambio
        setTimeout(() => artistNode.style.color = "inherit", 2000);
    }

    if (albumNode && albumNode.innerText !== info.album) {
        albumNode.innerText = info.album;
    }
}

/**
 * SISTEMA DI AVVIO MULTIPLO (FAIL-SAFE)
 */

// MODO 1: All'avvio del DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log("[CronoSync] Metodo 1: Avvio su DOMContentLoaded");
    runCronoSync();
});

// MODO 2: Quando tutti i file (incluso album-mapper.js) sono caricati
window.onload = () => {
    console.log("[CronoSync] Metodo 2: Avvio su window.onload (Full Assets)");
    runCronoSync();
};

// MODO 3: Loop Infinito ogni 30 secondi
const syncInterval = setInterval(() => {
    runCronoSync();
}, CONFIG.REFRESH_INTERVAL);

// MODO 4: Fallback di emergenza se il database viene caricato in ritardo
setTimeout(() => {
    if (document.querySelectorAll('.song-artist:empty').length > 5) {
        console.log("[CronoSync] Metodo 3: Rilevati campi vuoti, forzo aggiornamento...");
        runCronoSync();
    }
}, 5000);

// Esponi per debug manuale in console
window.forceCronoSync = runCronoSync;
