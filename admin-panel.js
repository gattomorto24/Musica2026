// admin-panel.js
// Funzioni semplici per la scheda Modifica e Notizie

window.initAdmin = function() {
    renderAdminSongSelect();
    renderAlbumControls();
    renderNewsList();
};

function renderAlbumControls() {
    renderAlbumSelect();
    renderAlbumSongSelect();
    populateAlbumDetails();
}

function renderAdminSongSelect() {
    const sel = document.getElementById('admin-song-select');
    if (!sel || !state || !state.songs) return;
    const items = Object.entries(state.songs).sort((a,b) => b[1].pts - a[1].pts);
    sel.innerHTML = '<option value="" disabled selected>Seleziona una canzone...</option>' + items.map(([name, d]) => `<option value="${escapeHtml(name)}">${name} — ${d.pts} pts</option>`).join('');
}

async function addNewSong() {
    const nameInput = document.getElementById('admin-new-name');
    const ptsInput = document.getElementById('admin-new-pts');
    const leagueSelect = document.getElementById('admin-new-league');
    if (!nameInput || !ptsInput || !leagueSelect) return;
    const name = (nameInput.value || '').trim();
    const pts = parseInt(ptsInput.value || '0', 10) || 0;
    const league = (leagueSelect.value || 'C').toUpperCase();
    const coverUrlInput = document.getElementById('admin-new-cover');
    const coverUrl = (coverUrlInput && coverUrlInput.value || '').trim();
    if (!name) return alert('Inserisci il nome della canzone');
    if (state.songs[name]) return alert('La canzone esiste già');

    state.songs[name] = { pts: pts, l: league, lastPos: 99, likes: 0, likedBy: [], positiveStreak: 0, negativeStreak: 0, cover: coverUrl };
    pushNews({ type: 'add', by: window.currentUserEmail || 'owner', song: name, msg: `Aggiunta canzone: ${name} (${pts} pts, Serie ${league})` });
    nameInput.value = '';
    ptsInput.value = '0';
    leagueSelect.value = 'C';
    if (coverUrlInput) coverUrlInput.value = '';
    await saveState();
}

function escapeHtml(s){
    return (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function applyPointChange(direction) {
    const sel = document.getElementById('admin-song-select');
    const amtInput = document.getElementById('admin-pts-amount');
    if (!sel || !amtInput) return;
    const name = sel.value;
    const raw = parseInt(amtInput.value || '0', 10);
    if (!name || isNaN(raw) || raw === 0) return alert('Inserisci una quantità diversa da 0');
    const delta = raw * direction;
    if (!state.songs[name]) return alert('Canzone non trovata');

    state.songs[name].pts = (state.songs[name].pts || 0) + delta;
    pushNews({
        type: 'pts',
        song: name,
        change: delta,
        by: window.currentUserEmail || 'owner',
        msg: `${delta>0?'+':''}${delta} punti su ${name}`
    });
    await saveState();
}

async function applyPenaltyOrReward(isReward) {
    const sel = document.getElementById('admin-song-select');
    const desc = document.getElementById('admin-penalty-desc');
    const amt = document.getElementById('admin-penalty-amt');
    if (!sel || !desc || !amt) return;
    const name = sel.value;
    const amount = parseInt(amt.value || '0', 10);
    if (!name || isNaN(amount) || amount === 0) return alert('Inserisci un importo valido');
    const delta = isReward ? Math.abs(amount) : -Math.abs(amount);
    if (!state.songs[name]) return alert('Canzone non trovata');

    state.songs[name].pts = (state.songs[name].pts || 0) + delta;
    pushNews({
        type: isReward ? 'reward' : 'penalty',
        song: name,
        change: delta,
        by: window.currentUserEmail || 'owner',
        msg: `${isReward? 'Premio':'Penalità'} ${delta>0?'+':''}${delta} a ${name} — ${desc.value || ''}`
    });
    await saveState();
}

async function renameSelectedSong() {
    const sel = document.getElementById('admin-song-select');
    const input = document.getElementById('admin-rename-input');
    if (!sel || !input) return;
    const oldName = sel.value;
    const newName = (input.value || '').trim();
    if (!oldName || !newName) return alert('Seleziona una canzone e inserisci il nuovo nome');
    if (state.songs[newName]) return alert('Esiste già una canzone con quel nome');

    const data = state.songs[oldName];
    state.songs[newName] = data;
    delete state.songs[oldName];

    // Aggiorna storico
    if (state.history && state.history.length) {
        state.history.forEach(entry => {
            entry.data.forEach(item => {
                if (item.n === oldName) item.n = newName;
            });
        });
    }

    pushNews({ type: 'rename', by: window.currentUserEmail || 'owner', song: newName, msg: `Rinominata "${oldName}" → "${newName}"` });
    await saveState();
}

async function moveSelectedSong(dir) {
    const sel = document.getElementById('admin-song-select');
    if (!sel) return;
    const name = sel.value;
    const list = Object.entries(state.songs).sort((a,b) => b[1].pts - a[1].pts).map(([n]) => n);
    const idx = list.indexOf(name);
    if (idx === -1) return;
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= list.length) return;

    const a = list[idx], b = list[swapIdx];
    const tmp = state.songs[a].pts || 0;
    state.songs[a].pts = state.songs[b].pts || 0;
    state.songs[b].pts = tmp;

    pushNews({ type: 'move', by: window.currentUserEmail || 'owner', msg: `Scambiata posizione ${a} ↔ ${b}` });
    await saveState();
}

function populateSongDetails() {
    const sel = document.getElementById('admin-song-select');
    if (!sel) return;
    const name = sel.value;
    const coverInput = document.getElementById('admin-cover-url');
    if (!coverInput) return;
    if (state.songs[name] && state.songs[name].cover) {
        coverInput.value = state.songs[name].cover;
    } else {
        coverInput.value = '';
    }
}

async function updateSongCover() {
    const sel = document.getElementById('admin-song-select');
    const coverInput = document.getElementById('admin-cover-url');
    if (!sel || !coverInput) return;
    const name = sel.value;
    const coverUrl = (coverInput.value || '').trim();
    if (!name) return alert('Seleziona una canzone prima di aggiornare la copertina');
    if (!state.songs[name]) return alert('Canzone non trovata');

    state.songs[name].cover = coverUrl;
    pushNews({ type: 'cover', by: window.currentUserEmail || 'owner', song: name, msg: `Aggiornata copertina per ${name}` });
    await saveState();
}

function renderAlbumSelect() {
    const sel = document.getElementById('admin-album-select');
    if (!sel || !state) return;
    const albums = state.albums || {};
    const items = Object.entries(albums);
    sel.innerHTML = '<option value="" disabled selected>Seleziona un album...</option>' + items.map(([id, album]) => {
        const label = `${album.name || 'Album senza nome'}${album.artist ? ' — ' + album.artist : ''}`;
        return `<option value="${escapeHtml(id)}">${escapeHtml(label)}</option>`;
    }).join('');
}

function renderAlbumSongSelect() {
    const sel = document.getElementById('admin-album-song-select');
    const multiSel = document.getElementById('admin-album-multi-select');
    if (!sel || !state) return;
    const currentAlbumId = document.getElementById('admin-album-select')?.value;
    const album = state.albums?.[currentAlbumId] || { songs: [] };
    const assigned = new Set(album.songs || []);
    const available = Object.keys(state.songs || {}).filter(name => !assigned.has(name));
    sel.innerHTML = '<option value="" disabled selected>Seleziona una canzone...</option>' + available.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    
    // Render multi-select
    if (multiSel) {
        multiSel.innerHTML = available.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
    }
}

function renderAlbumSongList(albumId) {
    const container = document.getElementById('admin-album-song-list');
    if (!container || !state) return;
    const album = state.albums?.[albumId];
    if (!album) {
        container.innerHTML = '<p>Nessun album selezionato.</p>';
        document.getElementById('admin-album-points').innerText = '0';
        return;
    }
    const rows = (album.songs || []).map(name => {
        const pts = state.songs?.[name]?.pts || 0;
        return `<div class="album-song-row"><span>${escapeHtml(name)} (${pts} pts)</span><button class="system-alert-btn cancel" data-song="${escapeHtml(name)}" onclick="removeSongFromAlbum(this.getAttribute('data-song'))">Rimuovi</button></div>`;
    });
    container.innerHTML = rows.length ? rows.join('') : '<p>Nessuna canzone nell\'album.</p>';
    document.getElementById('admin-album-points').innerText = getAlbumPoints(albumId);
}

function getAlbumPoints(albumId) {
    const album = state.albums?.[albumId];
    if (!album || !Array.isArray(album.songs)) return 0;
    return album.songs.reduce((sum, name) => sum + ((state.songs?.[name]?.pts || 0)), 0);
}

function populateAlbumDetails() {
    const sel = document.getElementById('admin-album-select');
    const nameInput = document.getElementById('admin-album-name');
    const artistInput = document.getElementById('admin-album-artist');
    const coverInput = document.getElementById('admin-album-cover');
    if (!sel || !nameInput || !artistInput || !coverInput) return;
    const album = state.albums?.[sel.value];
    if (!album) {
        nameInput.value = '';
        artistInput.value = '';
        coverInput.value = '';
        renderAlbumSongList();
        renderAlbumSongSelect();
        return;
    }
    nameInput.value = album.name || '';
    artistInput.value = album.artist || '';
    coverInput.value = album.cover || '';
    renderAlbumSongList(sel.value);
    renderAlbumSongSelect();
}

async function saveAlbumDetails() {
    const sel = document.getElementById('admin-album-select');
    const nameInput = document.getElementById('admin-album-name');
    const artistInput = document.getElementById('admin-album-artist');
    const coverInput = document.getElementById('admin-album-cover');
    if (!sel || !nameInput || !artistInput || !coverInput) return;
    const albumId = sel.value;
    if (!albumId) return alert('Seleziona un album prima di salvarne i dettagli');
    if (!state.albums?.[albumId]) return alert('Album non trovato');
    state.albums[albumId].name = (nameInput.value || '').trim() || 'Album senza nome';
    state.albums[albumId].artist = (artistInput.value || '').trim();
    state.albums[albumId].cover = (coverInput.value || '').trim();
    pushNews({ type: 'album', by: window.currentUserEmail || 'owner', msg: `Aggiornati dettagli album: ${state.albums[albumId].name}` });
    await saveState();
}

async function createNewAlbum() {
    if (!state.albums) state.albums = {};
    const id = 'album_' + Date.now();
    state.albums[id] = { name: 'Nuovo Album', artist: '', cover: '', songs: [] };
    await saveState();
    renderAlbumControls();
    document.getElementById('admin-album-select').value = id;
    populateAlbumDetails();
}

async function deleteCurrentAlbum() {
    const sel = document.getElementById('admin-album-select');
    if (!sel) return;
    const albumId = sel.value;
    if (!albumId || !state.albums?.[albumId]) return alert('Seleziona un album da eliminare');
    const album = state.albums[albumId];
    if (!confirm(`Eliminare l'album "${album.name || 'Album'}" e rimuovere l'associazione dalle canzoni?`)) return;
    (album.songs || []).forEach(name => {
        if (state.songs?.[name] && state.songs[name].albumId === albumId) {
            delete state.songs[name].albumId;
        }
    });
    delete state.albums[albumId];
    pushNews({ type: 'album', by: window.currentUserEmail || 'owner', msg: `Eliminato album: ${album.name}` });
    await saveState();
    renderAlbumControls();
}

async function addSongToAlbum() {
    const albumSelect = document.getElementById('admin-album-select');
    const songSelect = document.getElementById('admin-album-song-select');
    if (!albumSelect || !songSelect) return;
    const albumId = albumSelect.value;
    const songName = songSelect.value;
    if (!albumId || !songName) return alert('Seleziona un album e una canzone da aggiungere');
    const album = state.albums?.[albumId];
    if (!album) return alert('Album non trovato');
    if (!Array.isArray(album.songs)) album.songs = [];
    if (album.songs.includes(songName)) return alert('La canzone è già presente nell\'album');
    album.songs.push(songName);
    if (state.songs?.[songName]) state.songs[songName].albumId = albumId;
    pushNews({ type: 'album', by: window.currentUserEmail || 'owner', msg: `Aggiunta ${songName} all'album ${album.name}` });
    await saveState();
    populateAlbumDetails();
}

async function addMultipleSongsToAlbum() {
    const albumSelect = document.getElementById('admin-album-select');
    const multiSelect = document.getElementById('admin-album-multi-select');
    if (!albumSelect || !multiSelect) return;
    const albumId = albumSelect.value;
    if (!albumId) return alert('Seleziona un album prima di aggiungere le canzoni');
    
    const album = state.albums?.[albumId];
    if (!album) return alert('Album non trovato');
    if (!Array.isArray(album.songs)) album.songs = [];
    
    const selectedOptions = Array.from(multiSelect.selectedOptions);
    if (selectedOptions.length === 0) return alert('Seleziona almeno una canzone da aggiungere');
    
    let addedCount = 0;
    const songsToAdd = [];
    
    selectedOptions.forEach(option => {
        const songName = option.value;
        if (songName && !album.songs.includes(songName)) {
            album.songs.push(songName);
            if (state.songs?.[songName]) state.songs[songName].albumId = albumId;
            songsToAdd.push(songName);
            addedCount++;
        }
    });
    
    if (addedCount > 0) {
        pushNews({ type: 'album', by: window.currentUserEmail || 'owner', msg: `Aggiunte ${addedCount} canzione/i all'album ${album.name}: ${songsToAdd.join(', ')}` });
        await saveState();
        populateAlbumDetails();
    } else {
        alert('Nessuna canzone nuova è stata aggiunta (potrebbero essere già presenti nell\'album)');
    }
}

async function removeSongFromAlbum(songName) {
    const albumSelect = document.getElementById('admin-album-select');
    if (!albumSelect) return;
    const albumId = albumSelect.value;
    const album = state.albums?.[albumId];
    if (!album) return;
    album.songs = (album.songs || []).filter(name => name !== songName);
    if (state.songs?.[songName] && state.songs[songName].albumId === albumId) {
        delete state.songs[songName].albumId;
    }
    pushNews({ type: 'album', by: window.currentUserEmail || 'owner', msg: `Rimossa ${songName} dall'album ${album.name}` });
    await saveState();
    populateAlbumDetails();
}

function addManualNews() {
    const ta = document.getElementById('admin-news-input');
    if (!ta) return;
    const txt = (ta.value || '').trim();
    if (!txt) return alert('Inserisci il testo della notizia');
    pushNews({ type: 'manual', by: window.currentUserEmail || 'owner', msg: txt });
    ta.value = '';
    saveState();
}

function pushNews(entry) {
    if (!state.news) state.news = [];
    const e = Object.assign({ ts: Date.now() }, entry);
    state.news.push(e);
    renderNewsList();
}

function renderNewsList() {
    const out = document.getElementById('news-list');
    if (!out) return;
    if (!state.news) state.news = [];
    // mostra ordine cronologico inverso
    out.innerHTML = state.news.slice().reverse().map(n => {
        const date = new Date(n.ts).toLocaleString();
        const who = n.by || 'system';
        return `<div class=\"news-item\" style=\"padding:8px;border-radius:6px;background:rgba(255,255,255,0.02);\"><div style=\"font-size:0.8rem;color:var(--accent);\">${date} — ${who}</div><div style=\"margin-top:6px;\">${escapeHtml(n.msg)}</div></div>`;
    }).join('');
}

async function saveState() {
    try {
        const currentAlbumId = document.getElementById('admin-album-select')?.value;
        await supabaseClient.from('classifiche').insert([{ data_json: state }]);
        refreshUI();
        renderAdminSongSelect();
        renderAlbumControls();
        if (currentAlbumId) {
            const albumSel = document.getElementById('admin-album-select');
            if (albumSel) albumSel.value = currentAlbumId;
            populateAlbumDetails();
        }
        renderNewsList();
    } catch (err) {
        console.error('Errore salvataggio state', err);
        alert('Errore nel salvataggio: ' + (err.message || err));
    }
}

// Esporta funzioni principali nello scope globale per essere invocate dall'HTML
window.applyPointChange = applyPointChange;
window.applyPenaltyOrReward = applyPenaltyOrReward;
window.renameSelectedSong = renameSelectedSong;
window.moveSelectedSong = moveSelectedSong;
window.populateSongDetails = populateSongDetails;
window.updateSongCover = updateSongCover;
window.addManualNews = addManualNews;
window.renderAdminSongSelect = renderAdminSongSelect;
window.renderNewsList = renderNewsList;
window.addNewSong = addNewSong;
window.createNewAlbum = createNewAlbum;
window.deleteCurrentAlbum = deleteCurrentAlbum;
window.saveAlbumDetails = saveAlbumDetails;
window.addSongToAlbum = addSongToAlbum;
window.addMultipleSongsToAlbum = addMultipleSongsToAlbum;
window.removeSongFromAlbum = removeSongFromAlbum;
window.populateAlbumDetails = populateAlbumDetails;
