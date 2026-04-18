/**
 * CRONOSOUND ALBUM MAPPER v1.0
 * Gestisce l'associazione automatica Titolo -> Album
 */

const albumDatabase = {
    // ERNIA
    "Gemelli (ascendente Milano)": [
        "Di Notte", "Lewandowski VII", "Dissing", "Superclassico", 
        "Non Me Ne Frega Un Cazzo", "Puro Sinaloa", "MeryXSempre", 
        "Pensavo Di Ucciderti", "Ferma A Guardare"
    ],
    "IO NON HO PAURA": [
        "PARAFULMINI", "ACQUA TONICA", "LEWANDOWSKI X", "BELLA FREGATURA"
    ],
    "PER SOLDI E PER AMORE": [
        "BERLINO", "FELLINI", "PER TE", "FIGLIO DI", "DA DENUNCIA", 
        "PER SOLDI E PER AMORE", "PERCHÉ"
    ],

    // SFERA EBBASTA
    "Rockstar": [
        "Ricchi x Sempre", "Tran Tran", "Cupido", "Serpenti A Sonagli", "Rockstar"
    ],
    "Famoso": [
        "Giovani Re", "UHLALA", "Baby", "Bottiglie Privè"
    ],
    "X2VR": [
        "15 Piani", "G63", "Anche Stasera"
    ],

    // KID YUGI
    "Anche gli Eroi Muoiono": [
        "Jolly", "Amelie", "Davide e Golia", "La violenza Necessaria", 
        "Gilgamesh", "L'ultimo a Cadere", "Eroina"
    ],
    "I Nomi del Diavolo": [
        "Nemico", "Terr1", "Eva", "Lilith", "Ex Angelo"
    ],

    // LAZZA
    "LOCURA": [
        "FENTANYL", "BUIO DAVANTI", "VERDI NEI VIOLA", "ZERI IN PIÙ", 
        "MEZZE VERITÀ", "OuverFOURe", "DOLCEVITA", "CANZONE D'ODIO", "100 MESSAGGI"
    ],
    "SIRIO": [
        "PIOVE", "OUV3RTURE", "USCITO DI GALERA", "SENZA RUMORE", 
        "TOPBOY", "PANICO", "CENERE"
    ],
    "Re Mida (Aurum)": [
        "Gigolò", "Frio", "Re Mida", "Morto Mai"
    ],

    // SHIVA
    "Vangelo": [
        "Take 6", "Mayday", "Polvere Rosa", "Babyface", "Bad Bad Bad"
    ],

    // TEDUA
    "La Divina Commedia": [
        "Paradiso Artificiale", "Volgare", "Hoe", "Anime Libere", "Diluvio A Luglio"
    ],

    // INTERNATIONAL / SPECIAL
    "MĀYĀ": ["LUMIERE"],
    "OBE": ["SIRENA"],
    "Doo-Wops & Hooligans": ["The Lazy Song", "Talking to the Moon"]
};

/**
 * Funzione Core per trovare l'album
 * @param {string} songTitle - Il titolo della canzone da cercare
 * @returns {string} - Il nome dell'album o "Singolo / N.A."
 */
function getAlbumBySong(songTitle) {
    if (!songTitle) return "N.A.";
    
    // Pulizia input: togliamo parentesi (feat...) e simboli strani per il match
    const cleanInput = songTitle.toLowerCase()
        .split('(')[0]
        .split('feat')[0]
        .replace(/[^\w\s]/gi, '')
        .trim();

    for (const [album, songs] of Object.entries(albumDatabase)) {
        const found = songs.some(song => {
            const cleanSong = song.toLowerCase().replace(/[^\w\s]/gi, '').trim();
            return cleanSong === cleanInput || cleanInput.includes(cleanSong);
        });
        
        if (found) return album;
    }

    return "Singolo / N.A.";
}

// ESEMPIO DI UTILIZZO:
// console.log(getAlbumBySong("DI NOTTE (feat. Sfera)")); // Ritorna: Gemelli (ascendente Milano)
// console.log(getAlbumBySong("fentanyl")); // Ritorna: LOCURA
