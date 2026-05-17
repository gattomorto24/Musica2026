/**
 * CRONOSOUND - SMART MULTI-ARTIST MATCHER
 * File: album-mapper.js
 * Database completo con 107 brani ufficiali e funzione intelligente di riconoscimento.
 */

const musicDatabase = {
    // ERNIA - GEMELLI
    "DI NOTTE": { artista: "Ernia, Sfera Ebbasta, Carl Brave", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2021 },
    "LEWANDOWSKI VII": { artista: "Ernia", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "DISSING": { artista: "Ernia, 2Rari, Night Skinny", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "PARAFULMINI": { artista: "Ernia, Bresh, Fabri Fibra", album: "IO NON HO PAURA", genere: "Trap/Hip-Hop", anno: 2019 },
    "ACQUA TONICA": { artista: "Ernia, Geolier, Junior K", album: "IO NON HO PAURA", genere: "Trap/Hip-Hop", anno: 2019 },
    "LEWANDOWSKI X": { artista: "Ernia", album: "IO NON HO PAURA", genere: "Trap/Hip-Hop", anno: 2019 },
    "BELLA FREGATURA": { artista: "Ernia", album: "IO NON HO PAURA", genere: "Trap/Hip-Hop", anno: 2019 },
    "BERLINO": { artista: "Ernia", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "FELLINI": { artista: "Ernia, Kid Yugi", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "PER TE": { artista: "Ernia", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "FIGLIO DI": { artista: "Ernia, Club Dogo", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "DA DENUNCIA": { artista: "Ernia, Marracash", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "PER SOLDI E PER AMORE": { artista: "Ernia", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "PERCHÉ": { artista: "Ernia, Madame", album: "PER SOLDI E PER AMORE", genere: "Trap/Hip-Hop", anno: 2020 },
    "SUPERCLASSICO": { artista: "Ernia", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "NON ME NE FREGA UN CAZZO": { artista: "Ernia, Fabri Fibra", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "PURO SINALOA": { artista: "Ernia, Tedua, Rkomi, Lazza", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "MERYXSEMPRE": { artista: "Ernia, Shiva", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "PENSAVO DI UCCIDERTI": { artista: "Ernia, Luchè", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },
    "FERMA A GUARDARE": { artista: "Ernia, Pinguini Tattici Nucleari", album: "Gemelli", genere: "Trap/Hip-Hop", anno: 2018 },

    // COLLABORAZIONI ERNIA
    "FIGLIO UNICO": { artista: "Irama, Rkomi, Ernia, Kid Yugi", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2019 },
    "LUMIERE": { artista: "MACE, Izi, Ernia, Tony Boy, Astro", album: "MAYA", genere: "Trap/Hip-Hop", anno: 2018 },
    "SIRENA": { artista: "MACE, Ernia, Samurai Jay, DARRN", album: "OBE", genere: "Trap/Hip-Hop", anno: 2020 },

    // SFERA EBBASTA
    "DAMME 'NA MANO": { artista: "Tony Effe", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2023 },
    "RICCHI X SEMPRE": { artista: "Sfera Ebbasta", album: "Rockstar", genere: "Trap/Hip-Hop", anno: 2016 },
    "TRAN TRAN": { artista: "Sfera Ebbasta", album: "Rockstar", genere: "Trap/Hip-Hop", anno: 2016 },
    "CUPIDO": { artista: "Sfera Ebbasta, Quavo", album: "Rockstar", genere: "Trap/Hip-Hop", anno: 2016 },
    "SERPENTI A SONAGLI": { artista: "Sfera Ebbasta", album: "Rockstar", genere: "Trap/Hip-Hop", anno: 2016 },
    "ROCKSTAR": { artista: "Sfera Ebbasta", album: "Rockstar", genere: "Trap/Hip-Hop", anno: 2016 },
    "GIOVANI RE": { artista: "Sfera Ebbasta", album: "Famoso", genere: "Trap/Hip-Hop", anno: 2017 },
    "UHLALA": { artista: "Sfera Ebbasta", album: "Famoso", genere: "Trap/Hip-Hop", anno: 2017 },
    "BABY": { artista: "Sfera Ebbasta, J Balvin", album: "Famoso", genere: "Trap/Hip-Hop", anno: 2017 },
    "BOTTIGLIE PRIVÈ": { artista: "Sfera Ebbasta", album: "Famoso", genere: "Trap/Hip-Hop", anno: 2017 },
    "15 PIANI": { artista: "Sfera Ebbasta, Marracash", album: "X2VR", genere: "Trap/Hip-Hop", anno: 2019 },
    "G63": { artista: "Sfera Ebbasta, Lazza, Shiva", album: "X2VR", genere: "Trap/Hip-Hop", anno: 2019 },
    "ANCHE STASERA": { artista: "Sfera Ebbasta, Elodie", album: "X2VR", genere: "Trap/Hip-Hop", anno: 2019 },
    "YAKUZA": { artista: "Elodie, Sfera Ebbasta, Rvssian", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2020 },
    "NEON": { artista: "Sfera Ebbasta, Shiva", album: "X2VR", genere: "Trap/Hip-Hop", anno: 2019 },
    "CALIPSO": { artista: "Charlie Charles, Sfera Ebbasta, Mahmood, Fabri Fibra", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2018 },
    "MI FAI IMPAZZIRE": { artista: "BLANCO, Sfera Ebbasta", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2022 },

    // KID YUGI
    "PUSH IT": { artista: "Kid Yugi, ANNA", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "JOLLY": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "AMELIE": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "DAVIDE E GOLIA": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "LA VIOLENZA NECESSARIA": { artista: "Kid Yugi, Shiva", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "GILGAMESH": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "L'ULTIMO A CADERE": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "EROINA": { artista: "Kid Yugi, Tutti Fenomeni", album: "Anche gli Eroi Muoiono", genere: "Trap/Hip-Hop", anno: 2019 },
    "NEMICO": { artista: "Kid Yugi, Ernia", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "TERR1": { artista: "Kid Yugi, Geolier", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "EVA": { artista: "Kid Yugi, Tedua, Junior K", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "LILITH": { artista: "Kid Yugi", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "EX ANGELO": { artista: "Kid Yugi, Sfera Ebbasta, Shablo", album: "I Nomi del Diavolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "BIANCA": { artista: "RRARI DAL TACCO, Kid Yugi", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2021 },

    // LAZZA
    "FENTANYL": { artista: "Lazza, Sfera Ebbasta", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "BUIO DAVANTI": { artista: "Lazza", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "VERDI NEI VIOLA": { artista: "Lazza", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "ZERI IN PIÙ (LOCURA)": { artista: "Lazza, Laura Pausini", album: "LOCURA", genere: "Trap/Pop", anno: 2021 },
    "MEZZE VERITÀ": { artista: "Lazza, Kid Yugi", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "OUVERFOURE": { artista: "Lazza", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "DOLCEVITA": { artista: "Lazza", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "CANZONE D'ODIO": { artista: "Lazza, Lil Baby", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "100 MESSAGGI": { artista: "Lazza", album: "LOCURA", genere: "Trap/Hip-Hop", anno: 2021 },
    "PIOVE": { artista: "Lazza, Sfera Ebbasta", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "MOLOTOV": { artista: "Lazza", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "OUV3RTURE": { artista: "Lazza", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "USCITO DI GALERA": { artista: "Lazza", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "SENZA RUMORE": { artista: "Lazza", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "TOPBOY": { artista: "Lazza, Noyz Narcos", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "PANICO": { artista: "Lazza, Takagi & Ketra", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "CENERE": { artista: "Lazza", album: "SIRIO", genere: "Trap/Hip-Hop", anno: 2022 },
    "GIGOLÒ": { artista: "Lazza, Sfera Ebbasta, Capo Plaza", album: "Re Mida (Aurum)", genere: "Trap/Hip-Hop", anno: 2023 },
    "FRIO": { artista: "Lazza", album: "Re Mida (Aurum)", genere: "Trap/Hip-Hop", anno: 2023 },
    "RE MIDA (PIANO SOLO)": { artista: "Lazza", album: "Re Mida (Aurum)", genere: "Trap/Hip-Hop", anno: 2023 },
    "MORTO MAI (PIANO SOLO)": { artista: "Lazza", album: "Re Mida (Aurum)", genere: "Trap/Hip-Hop", anno: 2023 },
    "MONEY RAIN": { artista: "Capo Plaza, Lazza", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2023 },

    // SHIVA
    "TAKE 6": { artista: "Shiva", album: "Vangelo", genere: "Trap/Hip-Hop", anno: 2020 },
    "MAYDAY": { artista: "Shiva, Lazza, Sfera Ebbasta", album: "Vangelo", genere: "Trap/Hip-Hop", anno: 2020 },
    "POLVERE ROSA": { artista: "Shiva", album: "Vangelo", genere: "Trap/Hip-Hop", anno: 2020 },
    "BABYFACE": { artista: "Shiva, Kid Yugi", album: "Vangelo", genere: "Trap/Hip-Hop", anno: 2020 },
    "BACIO DI GIUDA": { artista: "Shiva, Tiziano Ferro", album: "Vangelo", genere: "Trap/Pop", anno: 2020 },
    "BAD BAD BAD": { artista: "Shiva, Geolier", album: "Vangelo", genere: "Trap/Hip-Hop", anno: 2020 },

    // TEDUA
    "PARADISO ARTIFICIALE": { artista: "Tedua, Baby Gang, Kid Yugi", album: "La Divina Commedia", genere: "Trap/Hip-Hop", anno: 2021 },
    "VOLGARE": { artista: "Tedua, Lazza", album: "La Divina Commedia", genere: "Trap/Hip-Hop", anno: 2021 },
    "HOE": { artista: "Tedua, Sfera Ebbasta", album: "La Divina Commedia", genere: "Trap/Hip-Hop", anno: 2021 },
    "ANIME LIBERE": { artista: "Tedua, Rkomi, Bresh", album: "La Divina Commedia", genere: "Trap/Hip-Hop", anno: 2021 },
    "DILUVIO A LUGLIO": { artista: "Tedua, Marracash", album: "La Divina Commedia", genere: "Trap/Hip-Hop", anno: 2021 },

    // VARIE
    "TU MI PIACI TANTO": { artista: "Sayf", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2023 },
    "AVVOLTOI": { artista: "Eddie Brock", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2023 },
    "POESIE CLANDESTINE": { artista: "LDA, Aka 7even", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "OSSESSIONE": { artista: "Samurai Jay, Vito Salamanca", album: "Singolo", genere: "Trap/Hip-Hop", anno: 2021 },
    "STUPIDA SFORTUNA": { artista: "Fulminacci", album: "Singolo", genere: "Indie/Singer-Songwriter", anno: 2020 },
    "MALE NECESSARIO": { artista: "Fedez, Marco Masini", album: "Singolo", genere: "Hip-Hop/Pop", anno: 2018 },
    "CHE GUSTO C'È": { artista: "Fabri Fibra, Tredici Pietro", album: "Singolo", genere: "Hip-Hop/Trap", anno: 2018 },
    "OLIVER TWIST": { artista: "ArrDee", album: "Singolo", genere: "Hip-Hop/Grime", anno: 2022 },

    // BRUNO MARS
    "DIE WITH A SMILE": { artista: "Lady Gaga, Bruno Mars", album: "Singolo", genere: "Pop/Soul", anno: 2024 },
    "NOTHIN' ON YOU": { artista: "B.o.B, Bruno Mars", album: "Singolo", genere: "Hip-Hop/Pop", anno: 2010 },
    "UPTOWN FUNK": { artista: "Mark Ronson, Bruno Mars", album: "Uptown Special", genere: "Funk/Pop", anno: 2014 },
    "APT.": { artista: "ROSÉ, Bruno Mars", album: "Singolo", genere: "Pop/R&B", anno: 2021 },
    "WAKE UP IN THE SKY": { artista: "Gucci Mane, Bruno Mars, Kodak Black", album: "Singolo", genere: "Hip-Hop", anno: 2018 },
    "24K MAGIC": { artista: "Bruno Mars", album: "24K Magic", genere: "Pop/Funk", anno: 2016 },
    "I JUST MIGHT": { artista: "Bruno Mars", album: "Singolo", genere: "Pop/R&B", anno: 2016 },
    "DANCE WITH ME": { artista: "Bruno Mars", album: "Singolo", genere: "Pop", anno: 2014 },
    "THE LAZY SONG": { artista: "Bruno Mars", album: "Doo-Wops & Hooligans", genere: "Pop/Reggae", anno: 2010 },
    "TALKING TO THE MOON": { artista: "Bruno Mars", album: "Doo-Wops & Hooligans", genere: "Pop/Soul", anno: 2010 },

    // ED SHEERAN & PASSENGER
    "PERFECT": { artista: "Ed Sheeran", album: "Divide", genere: "Pop/Ballad", anno: 2017 },
    "LET HER GO": { artista: "Passenger", album: "All the Little Lights", genere: "Pop/Folk", anno: 2012 }
};

/**
 * SMART MULTI-ARTIST MATCHER - CRONOSOUND ENGINE
 * Funzione intelligente che riconosce canzoni attraverso tre fasi:
 * 1. Sanitizzazione Input (UPPERCASE)
 * 2. Fuzzy Recognition (Root Keyword matching con normalizazione CAPS)
 * 3. Auto-Formatting Output (Sempre CAPS)
 */
function smartMultiArtistMatcher(input) {
    // FASE 1: SANITIZZAZIONE INPUT
    if (!input || typeof input !== 'string') {
        return { titolo: "INPUT NON VALIDO", artista: "N/A", album: "N/A" };
    }

    // Converti SEMPRE in UPPERCASE
    let sanitized = input.toUpperCase();

    // Rimuovi simboli extra (parentesi, trattini, punteggiatura)
    sanitized = sanitized.replace(/[\(\)\[\]\{\}\-\+\=\*\^\$\|\?\.\,\:\;\!\"\'\\\/]/g, ' ');

    // Rimuovi spazi multipli e trim
    sanitized = sanitized.replace(/\s+/g, ' ').trim();

    // FASE 2: FUZZY RECOGNITION
    // Cerca la Root Keyword nel database con normalizzazione CAPS garantita
    const databaseKeys = Object.keys(musicDatabase);
    let bestMatch = null;
    let bestScore = 0;

    for (const key of databaseKeys) {
        // Normalizza SEMPRE la chiave in CAPS (anche se già lo è)
        const normalizedKey = key.toUpperCase();
        
        // Rimuovi simboli dalla chiave normalizzata per confronto pulito
        const cleanKey = normalizedKey.replace(/[\(\)\[\]\{\}\-\+\=\*\^\$\|\?\.\,\:\;\!\"\'\\\/]/g, ' ').replace(/\s+/g, ' ').trim();

        // Verifica se la chiave pulita è contenuta nell'input sanitizzato
        if (sanitized.includes(cleanKey) || cleanKey.includes(sanitized)) {
            // Calcola punteggio basato sulla lunghezza del match
            const score = Math.min(cleanKey.length, sanitized.length);
            if (score > bestScore) {
                bestMatch = key;
                bestScore = score;
            }
        }

        // Se l'input contiene esattamente la chiave (match perfetto in CAPS)
        if (sanitized === cleanKey) {
            bestMatch = key;
            break;
        }
    }

    // FASE 3: AUTO-FORMATTING OUTPUT
    if (bestMatch) {
        const data = musicDatabase[bestMatch];
        // Restituisci SEMPRE il titolo in CAPS
        const titleInCaps = bestMatch.toUpperCase();
        return {
            titolo: titleInCaps, // Titolo ufficiale in CAPS GARANTITO
            artista: data.artista,
            album: data.album
        };
    }

    // Nessun match trovato
    return {
        titolo: "CANZONE NON RICONOSCIUTA",
        artista: "Artista non in database",
        album: "Album non disponibile"
    };
}

/**
 * LEGACY FUNCTION - MANTIENI COMPATIBILITÀ
 * Utilizza ora il nuovo Smart Multi-Artist Matcher
 */
function getSongInfo(title) {
    const result = smartMultiArtistMatcher(title);
    return {
        artista: result.artista,
        album: result.album
    };
}

/**
 * DYNAMIC METADATA MODAL - LOOKUP COMPLETO
 * Restituisce TUTTI i dati della canzone per il modal interattivo
 */
function getFullMetadata(title) {
    const result = smartMultiArtistMatcher(title);
    
    if (result.titolo === "CANZONE NON RICONOSCIUTA") {
        return {
            titolo: "Canzone Sconosciuta",
            artista: "N/A",
            album: "N/A",
            genere: "N/A",
            anno: "N/A",
            status: "not_found"
        };
    }
    
    // Lookup nel database per ottenere genere e anno
    const dbEntry = musicDatabase[result.titolo];
    
    return {
        titolo: result.titolo,
        artista: result.artista,
        album: result.album,
        genere: dbEntry ? dbEntry.genere : "N/A",
        anno: dbEntry ? dbEntry.anno : "N/A",
        status: "found"
    };
}

// Esponi le funzioni globalmente
window.smartMultiArtistMatcher = smartMultiArtistMatcher;
window.getSongInfo = getSongInfo;
window.getFullMetadata = getFullMetadata;
