/**
 * CRONOSOUND APPLICATION RUNTIME
 * Deferred entry point for index.html.
 */

// Load shared header and menu dynamically
        document.addEventListener('DOMContentLoaded', async () => {
            try {
                const [hResp, mResp] = await Promise.all([fetch('header.html'), fetch('menu.html')]);
                if (hResp.ok) {
                    document.getElementById('site-header').innerHTML = await hResp.text();
                } else {
                    console.error('Failed to load header.html', hResp.status);
                }
                if (mResp.ok) {
                    document.getElementById('site-menu').innerHTML = await mResp.text();
                } else {
                    console.error('Failed to load menu.html', mResp.status);
                }
                if (window.setupSharedStickyHeader) window.setupSharedStickyHeader();
            } catch (err) {
                console.error('Error loading shared fragments', err);
            }
        });

// Database e funzioni caricate da album-mapper.js
    // getFullMetadata, smartMultiArtistMatcher, getSongInfo disponibili globalmente

    const SB_URL = 'https://pncoijuwnpjotuhaadnm.supabase.co';
    const SB_KEY = 'sb_publishable_N18u9kZBONU3rohS7XoYOQ_UJPaTSUe';
    const OWNER_EMAIL = 'stranoanto79@gmail.com';
    let isOwner = false;
    const supabaseClient = window.supabaseClient = supabase.createClient(SB_URL, SB_KEY);

    let state = { week: 1, songs: {}, history: [], hIdx: 0, news: [], albums: {}, backups: [], showCovers: true };
    window.currentSortMethod = 'pts';

    async function enforceAuthAndOwner() {
        // Controlla prima sessionStorage (da login custom in account.html)
        const savedUser = sessionStorage.getItem('currentUser');
        const savedIsOwner = sessionStorage.getItem('isOwner');

        if (savedUser) {
            const userObj = JSON.parse(savedUser);
            window.currentUserId = userObj.id;
            window.currentUserEmail = userObj.email;
            isOwner = savedIsOwner === 'true';

            // Prova a caricare il nome dalla tabella accounts del nuovo Supabase project.
            // Non bloccare l'inizializzazione se la request fallisce (CORS, rete, ecc.).
            try {
                const newSBClient = supabase.createClient('https://hsizmfcdgisfxoeqptyb.supabase.co', 'sb_publishable_B54wNo9XyP6k5lDZIdarvA_NiHQ5Wk4');
                const { data: accountData, error: accountError } = await newSBClient
                    .from('accounts')
                    .select('nome')
                    .eq('email', userObj.email)
                    .single();
                if (accountError) console.warn('accounts fetch failed:', accountError.message || accountError);
                if (accountData) {
                    const el = document.getElementById('user-name');
                    if (el) el.innerText = 'Benvenuto, ' + accountData.nome;
                }
            } catch (err) {
                console.warn('Failed to fetch account name from new supabase:', err);
            }

            return;
        }

        // Fallback a Supabase Auth (vecchio project)
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            window.location.href = 'account.html';
            return;
        }

        isOwner = session.user.email && session.user.email.toLowerCase() === OWNER_EMAIL.toLowerCase();

        const { data, error } = await supabaseClient
            .from('profiles')
            .select('nome')
            .eq('user_id', session.user.id)
            .single();

        if (data) {
            document.getElementById('user-name').innerText = 'Benvenuto, ' + data.nome;
        }
        window.currentUserId = session.user.id;
        window.currentUserEmail = session.user.email;

        const navUpdate = document.getElementById('nav-upd');
        const mobileUpdate = document.getElementById('mobile-upd-btn');
        const resetBtn = document.querySelector('.reset-btn');
        const backupBtn = document.querySelector('.backup-btn');
        const navMod = document.getElementById('nav-mod');
        const navAlbum = document.getElementById('nav-album');
        const navNews = document.getElementById('nav-news');
        const mobileMod = document.getElementById('mobile-mod-btn');
        const mobileAlbum = document.getElementById('mobile-album-btn');
        const mobileNews = document.getElementById('mobile-news-btn');

        if (!isOwner) {
            // Nascondi solo le azioni sensibili agli owner
            if (navUpdate) navUpdate.style.display = 'none';
            if (mobileUpdate) mobileUpdate.style.display = 'none';
            if (resetBtn) resetBtn.style.display = 'none';
            if (backupBtn) backupBtn.style.display = 'none';
        } else {
            if (navUpdate) navUpdate.style.display = '';
            if (mobileUpdate) mobileUpdate.style.display = '';
            if (resetBtn) resetBtn.style.display = '';
            if (backupBtn) backupBtn.style.display = '';
        }
        // Notizie tab: visibile a tutti per lettura; mobile as well
        if (navNews) navNews.style.display = '';
        if (mobileNews) mobileNews.style.display = '';
    }

    async function loadData() {
        const { data, error } = await supabaseClient
            .from('classifiche')
            .select('data_json')
            .order('id', { ascending: false })
            .limit(1);

        if (data && data.length > 0) {
            state = data[0].data_json;
            if(!state.history) state.history = [];
            if(!state.news) state.news = [];
            if(!state.albums) state.albums = {};
            if(!state.backups) state.backups = [];
            if (typeof state.showCovers === 'undefined') state.showCovers = true;
            state.hIdx = state.history.length > 0 ? state.history.length - 1 : 0;
            const statusNode = document.getElementById('db-status');
            statusNode.dataset.i18n = 'system_online';
            statusNode.innerText = window.t('system_online');
        }
        refreshUI();
        hideLoader();
    }

    function refreshUI() {
        renderLive();
        document.getElementById('next-week-id').innerText = state.week;
        const weekNodes = [
            document.getElementById('ranking-week-display'),
            document.getElementById('hero-week-display')
        ];
        weekNodes.forEach(node => { if (node) node.innerText = state.week; });
        const songsCount = document.getElementById('metric-songs-count');
        if (songsCount) songsCount.innerText = Object.keys(state.songs || {}).length;
        updateBackupPanel();
    }

    function renderLive(filter = "") {
        const body = document.getElementById('live-body');
        let sorted = Object.entries(state.songs);
        if (window.currentSortMethod === 'name') {
            sorted = sorted.sort((a, b) => a[0].localeCompare(b[0]));
        } else if (window.currentSortMethod === 'serie') {
            const order = { A: 0, B: 1, C: 2 };
            sorted = sorted.sort((a, b) => {
                const aL = (a[1].l || 'C').toUpperCase();
                const bL = (b[1].l || 'C').toUpperCase();
                const diff = (order[aL] ?? 3) - (order[bL] ?? 3);
                if (diff !== 0) return diff;
                return (b[1].pts || 0) - (a[1].pts || 0);
            });
        } else {
            sorted = sorted.sort((a, b) => (b[1].pts || 0) - (a[1].pts || 0));
        }

        if (filter) {
            const query = filter.toLowerCase();
            sorted = sorted.filter(([name, d]) => {
                const album = d.albumId ? state.albums?.[d.albumId] : null;
                return name.toLowerCase().includes(query)
                    || (album?.name || '').toLowerCase().includes(query)
                    || (album?.artist || '').toLowerCase().includes(query);
            });
        }

        body.innerHTML = sorted.map(([name, d], i) => {
            const safeName = name.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
            const coverUrl = d.cover || (d.albumId && state.albums?.[d.albumId]?.cover) || 'https://brucecoughlin.com/data/default_artwork/music_ph.png';
            return `
                <div class="ranking-card">
                    <div class="ranking-card-main">
                        <div class="pos-pill">${i+1}</div>
                        <div class="song-card-meta">
                            <div class="song-cover-wrapper" style="display: ${state.showCovers ? 'grid' : 'none'};">
                                <img class="song-cover" src="${coverUrl}" alt="Copertina ${name}" onerror="this.src='https://brucecoughlin.com/data/default_artwork/music_ph.png'">
                            </div>
                            <div>
                                <div class="song-name">${name}</div>
                                <div class="song-subtitle">Serie ${d.l || 'C'} • <span class="song-points">${d.pts} pts</span></div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="button-mobile-action-btn" onclick="openInfo('${safeName}')" aria-label="Informazioni ${name}">
                        <span class="material-symbols-outlined">info</span>
                    </button>
                </div>
            `;
        }).join('');
    }

    function filterData() {
        renderLive(document.getElementById('global-search').value);
    }

    function openInfo(fullName) {
        const data = state.songs[fullName];
        const parts = fullName.split(' - ');
        const searchTitle = parts.length > 1 ? parts[1] : parts[0];

        // Usa getFullMetadata per ottenere TUTTI i dati (anche genere e anno)
        let fullMeta;
        if (typeof window.getFullMetadata === 'function') {
            fullMeta = window.getFullMetadata(searchTitle);
        } else {
            fullMeta = { titolo: searchTitle, artista: "N/A", album: "N/A", genere: "N/A", anno: "N/A" };
        }

        // Popola il modal con tutti i dati
        document.getElementById('info-title').innerText = fullMeta.titolo;
        document.getElementById('info-artist').innerText = fullMeta.artista;
        document.getElementById('info-album').innerText = fullMeta.album;
        document.getElementById('info-genre').innerText = fullMeta.genere;
        document.getElementById('info-year').innerText = fullMeta.anno;

        // Dati dalla classifica (se disponibili)
        const hasLiked = window.currentUserId && data && data.likedBy && data.likedBy.includes(window.currentUserId);
        if (data) {
            document.getElementById('info-lega').innerText = "SERIE " + data.l;
            document.getElementById('info-pts').innerText = data.pts;
        } else {
            document.getElementById('info-lega').innerText = "-";
            document.getElementById('info-pts').innerText = "-";
        }

        const infoOverlay = document.getElementById('info-popup-overlay');
        infoOverlay.dataset.song = fullName;
        const infoLikeButton = document.getElementById('info-like-button');
        if (infoLikeButton) {
            infoLikeButton.disabled = hasLiked;
            infoLikeButton.innerText = hasLiked ? '❤️ Già apprezzata' : '❤️ Mi piace';
            infoLikeButton.style.opacity = hasLiked ? '0.65' : '1';
        }
        document.getElementById('info-popup-overlay').style.display = 'flex';
    }

    function closeInfoPopup() {
        document.getElementById('info-popup-overlay').style.display = 'none';
    }

    function likeSongFromModal() {
        const infoOverlay = document.getElementById('info-popup-overlay');
        const songName = infoOverlay.dataset.song;
        if (songName) {
            likeSong(songName);
        }
    }

    async function likeSong(songName) {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (!session) {
            window.showSystemAlert(window.t('login_required_title'), window.t('login_required_text'), window.t('ok'), window.t('cancel'), () => window.location.href = 'account.html');
            return;
        }

        const userId = session.user.id;
        const song = state.songs[songName];
        if (!song) return;
        if (!song.likedBy) song.likedBy = [];
        if (song.likedBy.includes(userId)) {
            window.showSystemAlert(window.t('already_liked_title'), window.t('already_liked_text'), window.t('ok'));
            return;
        }

        song.likedBy.push(userId);
        song.likes = (song.likes || 0) + 1;
        song.pts += 5;

        const { error } = await supabaseClient.from('classifiche').insert([{ data_json: state }]);
        if (error) {
            window.showSystemAlert(window.t('error_message'), error.message, window.t('ok'));
            return;
        }

        refreshUI();
    }

    async function processUpdate() {
        const raw = document.getElementById('input-raw').value;
        if (!raw) return alert(window.t('insert_data'));

        const lines = raw.split('\n').map(l => l.trim()).filter(l => l !== "");
        let weekSnapshot = [];

        const processedList = lines.map((line, index) => {
            let name = line.replace(/^\d+\.\s*/, '').split('(')[0].trim();
            return { name, pos: index + 1 };
        });

        processedList.forEach(item => {
            if (!state.songs[item.name]) state.songs[item.name] = { pts: 0, l: 'C', lastPos: 99, likes: 0, likedBy: [], positiveStreak: 0, negativeStreak: 0 };
            const s = state.songs[item.name];
            const newLega = item.pos <= 20 ? 'A' : (item.pos <= 50 ? 'B' : 'C');
            let ptsAdded = (newLega === 'A') ? (item.pos === 1 ? 35 : (item.pos <= 5 ? 25 : 20)) : (newLega === 'B' ? 10 : 2);

            const previousPos = s.lastPos || 99;
            const improved = item.pos < previousPos;
            const declined = item.pos > previousPos;

            if (improved) {
                s.positiveStreak = (s.positiveStreak || 0) + 1;
                s.negativeStreak = 0;
            } else if (declined) {
                s.negativeStreak = (s.negativeStreak || 0) + 1;
                s.positiveStreak = 0;
            } else {
                s.positiveStreak = 0;
                s.negativeStreak = 0;
            }

            let multiplier = 1;
            if (s.positiveStreak >= 3) {
                multiplier += 0.20 + 0.05 * Math.max(0, s.positiveStreak - 3);
            }
            if (s.negativeStreak >= 2) {
                multiplier -= Math.min(0.35, 0.1 * (s.negativeStreak - 1));
            }

            ptsAdded = Math.max(1, Math.round(ptsAdded * multiplier));
            s.pts += ptsAdded;
            s.l = newLega;
            s.lastPos = item.pos;
            weekSnapshot.push({ n: item.name, p: ptsAdded, streak: improved ? `+${Math.round((multiplier - 1) * 100)}%` : (declined && s.negativeStreak >= 2 ? `-${Math.round((1 - multiplier) * 100)}%` : '0%') });
        });

        state.history.push({ week: state.week, data: weekSnapshot });
        await createBackup(false);
        state.week++;

        const { error } = await supabaseClient.from('classifiche').insert([{ data_json: state }]);
        if (error) alert(error.message); else location.reload();
    }

    async function createBackup(download = false) {
        if (!state.backups) state.backups = [];
        const backupSnapshot = {
            createdAt: new Date().toISOString(),
            week: state.week,
            songs: JSON.parse(JSON.stringify(state.songs)),
            history: JSON.parse(JSON.stringify(state.history)),
            albums: JSON.parse(JSON.stringify(state.albums)),
            news: JSON.parse(JSON.stringify(state.news)),
            showCovers: state.showCovers
        };
        state.backups.push(backupSnapshot);

        const { error } = await supabaseClient.from('classifiche').insert([{ data_json: state }]);
        if (error) {
            alert('Errore durante il backup: ' + error.message);
            return;
        }

        if (download) {
            const blob = new Blob([JSON.stringify(backupSnapshot, null, 2)], { type: 'application/json' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `CRONOSOUND_BACKUP_WEEK_${state.week}.json`;
            a.click();
            alert(window.t('backup_created'));
        }
        refreshUI();
    }

    function formatBackupDate(isoString) {
        try {
            const locale = { it: 'it-IT', en: 'en-US', es: 'es-ES' }[window.currentLanguage] || 'it-IT';
            return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(isoString));
        } catch (e) {
            return isoString;
        }
    }

    function updateBackupPanel() {
        const summary = document.getElementById('backup-summary');
        const list = document.getElementById('backup-list');
        if (!summary || !list) return;

        const backups = state.backups || [];
        const count = backups.length;
        summary.textContent = count > 0
            ? window.t('backup_summary', { count, week: backups[count - 1].week })
            : window.t('backup_none');

        if (count === 0) {
            list.innerHTML = `<div class="backup-empty">${window.t('backup_empty')}</div>`;
            return;
        }

        list.innerHTML = backups.slice().reverse().map((backup, idx) => {
            return `<div class="backup-item">
                <div class="backup-title">Backup ${count - idx}</div>
                <div class="backup-meta"><span>${window.t('backup_created_at')}</span> ${formatBackupDate(backup.createdAt)}</div>
                <div class="backup-meta"><span>${window.t('backup_until_week')}</span> ${backup.week}</div>
            </div>`;
        }).join('');
    }

    function openSortMenu() {
        showTab('live');
        const overlay = document.getElementById('sort-overlay');
        if (!overlay) return;
        overlay.style.display = 'flex';
    }

    function closeSortMenu() {
        const overlay = document.getElementById('sort-overlay');
        if (!overlay) return;
        overlay.style.display = 'none';
    }

    function applySort(method) {
        window.currentSortMethod = method;
        closeSortMenu();
        const query = document.getElementById('global-search')?.value || '';
        renderLive(query);
    }

    function showTab(t) {
        if ((t === 'upd' || t === 'mod' || t === 'album') && !isOwner) {
            alert('Solo l\'Owner può accedere a questa sezione. Richiedi lo status manager su account.html.');
            return;
        }
        ['live', 'upd', 'hist', 'mod', 'album', 'news'].forEach(id => {
            const section = document.getElementById('tab-' + id);
            if (section) section.classList.toggle('active', t === id);
        });
        document.querySelectorAll('.mobile-action-btn[data-mobile-tab]').forEach(button => {
            button.classList.toggle('active', button.dataset.mobileTab === t);
        });
        if (t === 'hist') renderArchive();
    }

    function renderArchive() {
        if (!state.history || state.history.length === 0) return;
        const entry = state.history[state.hIdx];
        document.getElementById('archive-title').innerText = `${window.t('week_label')} ${entry.week}`;
        document.getElementById('archive-body').innerHTML = entry.data.map((item, i) => `
            <tr>
                <td>${i+1}</td>
                <td><span class="song-name">${item.n}</span></td>
                <td style="color:var(--accent)">+${item.p}</td>
            </tr>
        `).join('');
        document.getElementById('prev-btn').disabled = (state.hIdx === 0);
        document.getElementById('next-btn').disabled = (state.hIdx === state.history.length - 1);
    }

    function changeArchive(dir) {
        state.hIdx = Math.max(0, Math.min(state.history.length - 1, state.hIdx + dir));
        renderArchive();
    }

    function toggleMenu(forceOpen) {
        const m = document.getElementById('mobile-menu');
        if (!m) return;
        const isOpen = typeof forceOpen === 'boolean' ? forceOpen : !m.classList.contains('active');
        window.clearTimeout(window.mobileMenuCloseTimer);
        if (isOpen) {
            m.style.display = 'flex';
            m.classList.remove('is-closing');
            void m.offsetWidth;
            m.classList.add('active');
        } else {
            m.classList.remove('active');
            m.classList.add('is-closing');
            window.mobileMenuCloseTimer = window.setTimeout(() => {
                m.classList.remove('is-closing');
                m.style.display = 'none';
            }, 280);
        }
        document.body.classList.toggle('mobile-menu-open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function navigateToSection(t) {
        showTab(t);
        window.location.hash = t;
        toggleMenu(false);
    }

    function mobileTab(t) { navigateToSection(t); }

    function mobileNavigate(url) {
        toggleMenu(false);
        window.location.href = url;
    }

    function hideLoader() {
        const l = document.getElementById('loader-overlay');
        l.style.opacity = '0';
        setTimeout(() => l.style.display = 'none', 500);
    }

    function toggleExportOverlay() {
        const o = document.getElementById('export-overlay');
        if (!o) return;
        o.classList.toggle('active');
        if (o.classList.contains('active')) {
            updateExportWeekDisplay();
        }
    }

    function openArchiveExport() {
        const mode = document.querySelector('input[name="export-mode"][value="archive_current"]');
        if (mode) mode.checked = true;
        if (!document.getElementById('export-overlay')) return;
        document.getElementById('export-overlay').classList.add('active');
        updateExportWeekDisplay();
    }

    function updateExportWeekDisplay() {
        if (!state.history || state.history.length === 0) return;
        const entry = state.history[state.hIdx];
        document.getElementById('export-week-display').innerText = entry.week;
        const btns = document.querySelectorAll('.export-week-nav-btn');
        if (btns && btns.length >= 2) {
            const upBtn = btns[0];
            const downBtn = btns[1];
            upBtn.disabled = (state.hIdx === 0);
            downBtn.disabled = (state.hIdx === state.history.length - 1);
        }
    }

    function changeExportWeek(dir, evt) {
        if (evt && evt.stopPropagation) evt.stopPropagation();

        if (!state.history || state.history.length === 0) return;
        const newIdx = Math.max(0, Math.min(state.history.length - 1, state.hIdx + dir));
        if (newIdx !== state.hIdx) {
            state.hIdx = newIdx;
            updateExportWeekDisplay();
        }
        // Ensure the archive_current radio is selected when navigating weeks
        const radio = document.getElementById('export-mode-archive-current');
        if (radio) radio.checked = true;
    }

    function getSelectedExportMode() {
        const selected = document.querySelector('input[name="export-mode"]:checked');
        return selected ? selected.value : 'general';
    }

    function exportData(format) {
        const mode = getSelectedExportMode();
        const includePos = document.getElementById('chk-pos').checked;
        const includePts = document.getElementById('chk-pts').checked;
        const includeLega = document.getElementById('chk-lega').checked;

        let content = '';
        let filename = `CRONOSOUND_EXPORT.${format}`;

        if (mode === 'general') {
            const sorted = Object.entries(state.songs).sort((a,b) => b[1].pts - a[1].pts);
            if (format === 'csv') {
                content = 'Posizione,Canzone,Serie,Punti Totali\n' + sorted.map(([name, data], index) => {
                    return `${includePos?index+1:''},"${name}",${includeLega?data.l:''},${includePts?data.pts:''}`;
                }).join('\n');
            } else {
                content = sorted.map(([name, data], index) => `${includePos?index+1+'. ':''}${name}${includeLega?` [Serie ${data.l}]`:''}${includePts?` (${data.pts} pts)`:''}`).join('\n');
            }
            filename = `CRONOSOUND_CLASSIFICA_GENERALE.${format}`;
        } else if (mode === 'archive_current') {
            if (!state.history || state.history.length === 0) {
                alert(window.t('no_archive_export'));
                return;
            }
            const entry = state.history[state.hIdx] || state.history[state.history.length - 1];
            const title = `Settimana ${entry.week}`;
            if (format === 'csv') {
                content = 'Settimana,Posizione,Canzone,Serie,Punti Totali\n' + entry.data.map((item, index) => {
                    return `${entry.week},${includePos?index+1:''},"${item.n}",${includeLega?item.l:''},${includePts?item.p:''}`;
                }).join('\n');
            } else {
                content = `${title}\n` + entry.data.map((item, index) => `${includePos?index+1+'. ':''}${item.n}${includeLega?` [Serie ${item.l}]`:''}${includePts?` (${item.p} pts)`:''}`).join('\n');
            }
            filename = `CRONOSOUND_ARCHIVIO_SETTIMANA_${entry.week}.${format}`;
        } else if (mode === 'archive_all') {
            if (!state.history || state.history.length === 0) {
                alert(window.t('no_archive_export'));
                return;
            }
            if (format === 'csv') {
                content = 'Settimana,Posizione,Canzone,Serie,Punti Totali\n' + state.history.map((entry) => {
                    return entry.data.map((item, index) => `${entry.week},${includePos?index+1:''},"${item.n}",${includeLega?item.l:''},${includePts?item.p:''}`);
                }).flat().join('\n');
            } else {
                content = state.history.map((entry) => {
                    const lines = entry.data.map((item, index) => `${includePos?index+1+'. ':''}${item.n}${includeLega?` [Serie ${item.l}]`:''}${includePts?` (${item.p} pts)`:''}`);
                    return `Settimana ${entry.week}\n` + lines.join('\n');
                }).join('\n\n');
            }
            filename = `CRONOSOUND_ARCHIVIO_COMPLETO.${format}`;
        }

        const blob = new Blob([content], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        toggleExportOverlay();
    }

    async function hardReset() {
        const password = prompt('Inserisci la password per formattare il database:');
        if (password !== 'coccott44') {
            alert('Password errata. Formattazione annullata.');
            return;
        }
        if (confirm(window.t('confirm_reset'))) {
            state = { week: 1, songs: {}, history: [], hIdx: 0 };
            await supabaseClient.from('classifiche').insert([{ data_json: state }]);
            location.reload();
        }
    }

    function toggleCoverVisibility() {
        state.showCovers = !state.showCovers;
        const sectionCoverButton = document.querySelector('.caps-btn .btn-text');
        if (sectionCoverButton) {
            sectionCoverButton.innerText = state.showCovers ? 'Disattiva Copertine' : 'Attiva Copertine';
        }
        const heroCoverButton = document.getElementById('hero-cover-toggle-btn');
        if (heroCoverButton) {
            heroCoverButton.innerText = state.showCovers ? 'Disattiva copertine' : 'Attiva copertine';
        }
        refreshUI();
    }

    async function logout() {
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('isOwner');
        window.currentUserId = null;
        window.currentUserEmail = null;

        try {
            await supabaseClient.auth.signOut();
        } catch (error) {
            console.warn('Supabase sign-out failed; local session was cleared.', error);
        } finally {
            window.location.replace('account.html');
        }
    }

    async function init() {
        await enforceAuthAndOwner();
        await loadData();
        applyTranslations();
        if (window.initAdmin) window.initAdmin();
        // If arrived with a hash (e.g. index.html#mod) open the corresponding tab
        try {
            const h = window.location.hash.replace('#', '');
            if (h && typeof showTab === 'function') showTab(h);
        } catch (err) {
            console.warn('Error applying initial hash tab:', err);
        }
    }

    document.addEventListener('cronosound:languagechange', () => {
        refreshUI();
        if (state.history?.length) renderArchive();
    });

    init();
    const resetButton = document.querySelector('.reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', async (event) => {
            event.preventDefault();
            await hardReset();
        });
    }

    // Mobile bottom search toggles
    let mobileSearchAnimationTimer;
    let mobileSearchDetachTimer;

    function showMobileSearch() {
        const mobileBottom = document.querySelector('.mobile-bottom');
        const mobileSearch = document.getElementById('mobile-bottom-search');
        window.clearTimeout(mobileSearchAnimationTimer);
        window.clearTimeout(mobileSearchDetachTimer);
        if (mobileSearch) {
            mobileSearch.style.display = 'flex';
            mobileSearch.classList.remove('is-closing', 'is-open');
            void mobileSearch.offsetWidth;
            mobileSearch.classList.add('is-opening');
            mobileSearchDetachTimer = window.setTimeout(() => {
                if (mobileSearch.classList.contains('is-opening')) {
                    mobileSearch.classList.add('is-open');
                }
            }, 520);
        }
        if (mobileBottom) {
            mobileBottom.classList.remove('is-returning');
            mobileBottom.classList.add('is-searching');
        }
        window.setTimeout(() => {
            const input = document.getElementById('mobile-search-input');
            if (input) input.focus();
        }, 280);
    }

    function closeMobileSearch() {
        const mobileBottom = document.querySelector('.mobile-bottom');
        const mobileSearch = document.getElementById('mobile-bottom-search');
        window.clearTimeout(mobileSearchAnimationTimer);
        window.clearTimeout(mobileSearchDetachTimer);
        if (mobileSearch) {
            mobileSearch.classList.remove('is-opening', 'is-open');
            mobileSearch.classList.add('is-closing');
        }
        if (mobileBottom) {
            mobileBottom.classList.remove('is-searching');
            mobileBottom.classList.add('is-returning');
        }
        mobileSearchAnimationTimer = window.setTimeout(() => {
            if (mobileSearch) {
                mobileSearch.style.display = 'none';
                mobileSearch.classList.remove('is-closing');
            }
            if (mobileBottom) mobileBottom.classList.remove('is-returning');
        }, 540);
        const input = document.getElementById('mobile-search-input');
        if (input) input.value = '';
        // refresh full list when closing
        filterData();
    }
