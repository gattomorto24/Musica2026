/**
 * CRONOSOUND - DATABASE METADATI (CASE INSENSITIVE)
 * File: album-mapper.js
 * Gestisce i metadati ignorando maiuscole/minuscole e pulendo i titoli.
 */

const musicDatabase = {
    // ERNIA
    "DI NOTTE": { artista: "Ernia, Sfera Ebbasta, Carl Brave", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "LEWANDOWSKI VII": { artista: "Ernia", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "DISSING": { artista: "Ernia, 2Rari, Night Skinny", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "SUPERCLASSICO": { artista: "Ernia", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "NON ME NE FREGA UN CAZZO": { artista: "Ernia, Fabri Fibra", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "PURO SINALOA": { artista: "Ernia, Tedua, Rkomi, Lazza", album: "Gemelli (ascendente Milano)" }, [cite: 1]
    "MERYXSEMPRE": { artista: "Ernia, Shiva", album: "Gemelli (ascendente Milano)" }, [cite: 1, 2]
    "PENSAVO DI UCCIDERTI": { artista: "Ernia, Luchè", album: "Gemelli (ascendente Milano)" }, [cite: 2]
    "FERMA A GUARDARE": { artista: "Ernia, Pinguini Tattici Nucleari", album: "Gemelli (ascendente Milano)" }, [cite: 2]
    "PARAFULMINI": { artista: "Ernia, Bresh, Fabri Fibra", album: "IO NON HO PAURA" }, [cite: 1]
    "ACQUA TONICA": { artista: "Ernia, Geolier, Junior K", album: "IO NON HO PAURA" }, [cite: 1]
    "LEWANDOWSKI X": { artista: "Ernia", album: "IO NON HO PAURA" }, [cite: 1]
    "BELLA FREGATURA": { artista: "Ernia", album: "IO NON HO PAURA" }, [cite: 1]
    "BERLINO": { artista: "Ernia", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "FELLINI": { artista: "Ernia, Kid Yugi", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "PER TE": { artista: "Ernia", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "FIGLIO DI": { artista: "Ernia, Club Dogo", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "DA DENUNCIA": { artista: "Ernia, Marracash", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "PER SOLDI E PER AMORE": { artista: "Ernia", album: "PER SOLDI E PER AMORE" }, [cite: 1]
    "PERCHE": { artista: "Ernia, Madame", album: "PER SOLDI E PER AMORE" }, [cite: 1]

    // LAZZA
    "FENTANYL": { artista: "Lazza, Sfera Ebbasta", album: "LOCURA" }, [cite: 5]
    "BUIO DAVANTI": { artista: "Lazza", album: "LOCURA" }, [cite: 5]
    "VERDI NEI VIOLA": { artista: "Lazza", album: "LOCURA" }, [cite: 5]
    "ZERI IN PIU": { artista: "Lazza, Laura Pausini", album: "LOCURA" }, [cite: 5]
    "MEZZE VERITA": { artista: "Lazza, Kid Yugi", album: "LOCURA" }, [cite: 5]
    "OUVERFOURE": { artista: "Lazza", album: "LOCURA" }, [cite: 5]
    "DOLCEVITA": { artista: "Lazza", album: "LOCURA" }, [cite: 5]
    "CANZONE DODIO": { artista: "Lazza, Lil Baby", album: "LOCURA" }, [cite: 5]
    "100 MESSAGGI": { artista: "Lazza", album: "LOCURA" }, [cite: 5]
    "PIOVE": { artista: "Lazza, Sfera Ebbasta", album: "SIRIO" }, [cite: 5]
    "OUV3RTURE": { artista: "Lazza", album: "SIRIO" }, [cite: 5]
    "USCITO DI GALERA": { artista: "Lazza", album: "SIRIO" }, [cite: 5]
    "SENZA RUMORE": { artista: "Lazza", album: "SIRIO" }, [cite: 5]
    "TOPBOY": { artista: "Lazza, Noyz Narcos", album: "SIRIO" }, [cite: 5]
    "PANICO": { artista: "Lazza, Takagi & Ketra", album: "Lazza - Locura" }, [cite: 6]
    "CENERE": { artista: "Lazza", album: "SIRIO" }, [cite: 6]
    "GIGOLO": { artista: "Lazza, Sfera Ebbasta, Capo Plaza", album: "Re Mida (Aurum)" }, [cite: 6]
    "FRIO": { artista: "Lazza", album: "Re Mida (Aurum)" }, [cite: 6]
    "RE MIDA": { artista: "Lazza", album: "Re Mida (Aurum)" }, [cite: 5]
    "MORTO MAI": { artista: "Lazza", album: "Re Mida (Aurum)" }, [cite: 6]

    // SFERA EBBASTA
    "RICCHI X SEMPRE": { artista: "Sfera Ebbasta", album: "Rockstar" }, [cite: 2]
    "TRAN TRAN": { artista: "Sfera Ebbasta", album: "Rockstar" }, [cite: 2]
    "CUPIDO": { artista: "Sfera Ebbasta, Quavo", album: "Rockstar" }, [cite: 2, 3]
    "SERPENTI A SONAGLI": { artista: "Sfera Ebbasta", album: "Rockstar" }, [cite: 3]
    "ROCKSTAR": { artista: "Sfera Ebbasta", album: "Rockstar" }, [cite: 3]
    "GIOVANI RE": { artista: "Sfera Ebbasta", album: "Famoso" }, [cite: 3]
    "UHLALA": { artista: "Sfera Ebbasta", album: "Famoso" }, [cite: 3]
    "BABY": { artista: "Sfera Ebbasta, J Balvin", album: "Famoso" }, [cite: 3]
    "BOTTIGLIE PRIVE": { artista: "Sfera Ebbasta", album: "Famoso" }, [cite: 3]
    "15 PIANI": { artista: "Sfera Ebbasta, Marracash", album: "X2VR" }, [cite: 3]
    "G63": { artista: "Sfera Ebbasta, Lazza, Shiva", album: "X2VR" }, [cite: 3]
    "ANCHE STASERA": { artista: "Sfera Ebbasta, Elodie", album: "X2VR" }, [cite: 3]
    "NEON": { artista: "Sfera Ebbasta, Shiva", album: "X2VR" }, [cite: 3]

    // KID YUGI
    "JOLLY": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono" }, [cite: 3]
    "AMELIE": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "DAVIDE E GOLIA": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "LA VIOLENZA NECESSARIA": { artista: "Kid Yugi, Shiva", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "GILGAMESH": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "LULTIMO A CADERE": { artista: "Kid Yugi", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "EROINA": { artista: "Kid Yugi, Tutti Fenomeni", album: "Anche gli Eroi Muoiono" }, [cite: 4]
    "NEMICO": { artista: "Kid Yugi, Ernia", album: "I Nomi del Diavolo" }, [cite: 4]
    "TERR1": { artista: "Kid Yugi, Geolier", album: "I Nomi del Diavolo" }, [cite: 4]
    "EVA": { artista: "Kid Yugi, Tedua, Junior K", album: "I Nomi del Diavolo" }, [cite: 4]
    "LILITH": { artista: "Kid Yugi", album: "I Nomi del Diavolo" }, [cite: 4]
    "EX ANGELO": { artista: "Kid Yugi, Sfera Ebbasta, Shablo", album: "I Nomi del Diavolo" }, [cite: 4, 5]
    "PUSH IT": { artista: "Kid Yugi, ANNA", album: "I Nomi del Diavolo" }, [cite: 3]

    // SHIVA & TEDUA
    "TAKE 6": { artista: "Shiva", album: "Vangelo" }, [cite: 6]
    "MAYDAY": { artista: "Shiva, Lazza, Sfera Ebbasta", album: "Vangelo" }, [cite: 6]
    "POLVERE ROSA": { artista: "Shiva", album: "Vangelo" }, [cite: 6]
    "BABYFACE": { artista: "Shiva, Kid Yugi", album: "Vangelo" }, [cite: 6]
    "BAD BAD BAD": { artista: "Shiva, Geolier", album: "Vangelo" }, [cite: 6]
    "PARADISO ARTIFICIALE": { artista: "Tedua, Baby Gang, Kid Yugi", album: "La Divina Commedia" }, [cite: 6, 7]
    "VOLGARE": { artista: "Tedua, Lazza", album: "La Divina Commedia" }, [cite: 7]
    "HOE": { artista: "Tedua, Sfera Ebbasta", album: "La Divina Commedia" }, [cite: 7]
    "ANIME LIBERE": { artista: "Tedua, Rkomi, Bresh", album: "La Divina Commedia" }, [cite: 7]
    "DILUVIO A LUGLIO": { artista: "Tedua, Marracash", album: "La Divina Commedia" }, [cite: 7]

    // VARIE
    "LUMIERE": { artista: "MACE, Izi, Ernia, Tony Boy, Astro", album: "MAYA" }, [cite: 2]
    "SIRENA": { artista: "MACE, Ernia, Samurai Jay, DARRN", album: "OBE" }, [cite: 2]
    "DIE WITH A SMILE": { artista: "Lady Gaga, Bruno Mars", album: "Singolo" }, [cite: 7]
    "APT": { artista: "ROSE, Bruno Mars", album: "Singolo" }, [cite: 7]
    "24K MAGIC": { artista: "Bruno Mars", album: "24K Magic" }, [cite: 8]
    "THE LAZY SONG": { artista: "Bruno Mars", album: "Doo-Wops & Hooligans" }, [cite: 8]
    "TALKING TO THE MOON": { artista: "Bruno Mars", album: "Doo-Wops & Hooligans" }, [cite: 8]
    "UPTOWN FUNK": { artista: "Mark Ronson, Bruno Mars", album: "Uptown Special" }, [cite: 7]
    "PERFECT": { artista: "Ed Sheeran", album: "Divide" }, [cite: 8]
    "LET HER GO": { artista: "Passenger", album: "All the Little Lights" } [cite: 8]
};

/**
 * LOGICA "TONY-PROOF": Trova la canzone ignorando MAIUSCOLE/minuscole,
 * spazi extra e caratteri speciali nei titoli passati.
 */
function getSongInfo(title) {
    if (!title) return { artista: "N/A", album: "N/A" };

    // 1. Porta tutto in MAIUSCOLO
    // 2. Rimuove parentesi e contenuto (es: (feat...))
    // 3. Rimuove tutto ciò che non è lettera o numero per evitare problemi di punteggiatura
    const cleanTitle = title.toUpperCase()
                            .split('(')[0]
                            .replace(/[^\w\s]/gi, '')
                            .trim();

    const info = musicDatabase[cleanTitle];

    if (info) {
        return info;
    } else {
        // Se non trova il match perfetto, prova a cercare se il titolo è contenuto in una chiave
        // (Esempio: cerchi "Cenere" e trova "CENERE")
        const partialMatch = Object.keys(musicDatabase).find(key => cleanTitle.includes(key) || key.includes(cleanTitle));
        return partialMatch ? musicDatabase[partialMatch] : { artista: "Artista non specificato", album: "Singolo / N.A." };
    }
}

// Rendiamo la funzione accessibile ovunque
window.getSongInfo = getSongInfo;
