/**
 * CRONOSOUND ACCOUNT RUNTIME
 * Deferred entry point for account.html.
 */

// Configurazione Supabase
    const SB_URL = 'https://hsizmfcdgisfxoeqptyb.supabase.co';
    const SB_KEY = 'sb_publishable_B54wNo9XyP6k5lDZIdarvA_NiHQ5Wk4';
    const OWNER_EMAIL = 'stranoanto79@gmail.com';
    const OWNER_CONTACT_EMAIL = 'stranoanto79@gmail.com';
    const supabaseClient = supabase.createClient(SB_URL, SB_KEY);

    let currentUser = null;
    let resetUserData = null; // Per salvare i dati dell'utente durante il reset
    let isOwner = false;

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
            setupAccountStickyHeader();
        } catch (err) {
            console.error('Error loading shared fragments', err);
        }
    });

    function setupAccountStickyHeader() {
        const header = document.querySelector('.main-header');
        if (!header || header.dataset.compactScrollReady === 'true') return;
        header.dataset.compactScrollReady = 'true';
        let ticking = false;
        const updateHeader = () => {
            const scrolled = window.scrollY > 18;
            header.classList.toggle('compact', scrolled);
            document.body.classList.toggle('header-compact', scrolled);
        };
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                updateHeader();
                ticking = false;
            });
        }, { passive: true });
        updateHeader();
    }

    // Funzione per mostrare le sezioni
    function showTab(tab) {
        let showErrorAfter = null;
        if (tab === 'profile' && !currentUser) {
            showErrorAfter = ['login-error', 'Devi accedere prima di vedere il profilo.'];
            tab = 'login';
        }
        const sections = ['login', 'signup', 'reset', 'profile'];
        sections.forEach(s => {
            document.getElementById('section-' + s).style.display = 'none';
            const btn = document.getElementById('tab-' + s);
            if(btn) btn.classList.toggle('active', s === tab);
        });
        // Nascondi sezione profilo owner quando non è owner
        document.getElementById('section-profile-owner').style.display = 'none';

        // Mostra la sezione appropriata
        if (tab === 'profile' && isOwner) {
            document.getElementById('section-profile-owner').style.display = 'block';
            document.getElementById('tab-profile').classList.add('active');
        } else if (tab === 'profile') {
            document.getElementById('section-profile').style.display = 'block';
            document.getElementById('tab-profile').classList.add('active');
        } else {
            document.getElementById('section-' + tab).style.display = 'block';
        }
        // Nasconde messaggi di errore/successo quando si cambia tab
        hideMessages();
        if (showErrorAfter) {
            showError(showErrorAfter[0], showErrorAfter[1]);
        }
    }

    // Handle navigation pills: update active state and show section
    function switchAccountTab(section) {
        // Update pill active states
        document.querySelectorAll('.account-pill').forEach(pill => {
            pill.classList.toggle('active', pill.dataset.section === section);
        });
        // Show the section
        showTab(section);
    }

    function toggleOwnerEdit() {
        const isChecked = document.getElementById('owner-edit-toggle').checked;
        document.getElementById('owner-edit-section').style.display = isChecked ? 'block' : 'none';
        if (isChecked) {
            // Popola i campi con i dati attuali
            document.getElementById('owner-edit-nome').value = document.getElementById('owner-profile-nome').innerText;
            document.getElementById('owner-edit-email').value = document.getElementById('owner-profile-email').innerText;
        }
    }

    function cancelOwnerEdit() {
        document.getElementById('owner-edit-toggle').checked = false;
        document.getElementById('owner-edit-section').style.display = 'none';
    }

    async function saveOwnerSensitiveData() {
        const newNome = document.getElementById('owner-edit-nome').value.trim();
        const newEmail = document.getElementById('owner-edit-email').value.trim();

        if (!newNome || !newEmail) {
            showError('profile-owner-error', 'Nome ed email sono obbligatori.');
            return;
        }

        if (!newEmail.includes('@')) {
            showError('profile-owner-error', 'Email non valida.');
            return;
        }

        try {
            // Aggiorna il profilo nel database
            const { error } = await supabaseClient
                .from('profiles')
                .update({
                    nome: newNome,
                    email: newEmail
                })
                .eq('user_id', currentUser.id);

            if (error) {
                showError('profile-owner-error', 'Errore nell\'aggiornamento: ' + error.message);
                return;
            }

            // Aggiorna i dati visualizzati
            document.getElementById('owner-profile-nome').innerText = newNome;
            document.getElementById('owner-profile-email').innerText = newEmail;

            showSuccess('profile-owner-success', 'Dati aggiornati con successo!');

            // Chiudi la sezione edit
            setTimeout(() => {
                cancelOwnerEdit();
            }, 1500);
        } catch (err) {
            console.error('Errore:', err);
            showError('profile-owner-error', 'Errore inaspettato nel salvataggio.');
        }
    }

    // Funzione per nascondere messaggi
    function hideMessages() {
        const msgs = ['login-error', 'signup-error', 'signup-success', 'reset-error', 'reset-success', 'profile-error', 'profile-success', 'profile-owner-error', 'profile-owner-success'];
        msgs.forEach(id => {
            document.getElementById(id).style.display = 'none';
        });
    }

    // Funzione per mostrare errore
    function showError(id, msg) {
        const el = document.getElementById(id);
        el.innerText = msg;
        el.style.display = 'block';
    }

    function showErrorHTML(id, html) {
        const el = document.getElementById(id);
        el.innerHTML = html;
        el.style.display = 'block';
    }

    // Funzione per mostrare successo
    function showSuccess(id, msg) {
        const el = document.getElementById(id);
        el.innerText = msg;
        el.style.display = 'block';
    }

    function toggleMenu(forceOpen) {
        const m = document.getElementById('mobile-menu');
        if (!m) return;
        const isOpen = typeof forceOpen === 'boolean' ? forceOpen : m.style.display !== 'flex';
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

    function mobileTab(tab) {
        if (['login', 'signup', 'reset', 'profile'].includes(tab)) {
            showTab(tab);
            toggleMenu(false);
            return;
        }
        navigateToSection(tab);
    }

    function navigateToSection(tab) {
        toggleMenu(false);
        window.location.href = 'index.html#' + encodeURIComponent(tab);
    }

    function mobileNavigate(url) {
        toggleMenu(false);
        if (url === 'account.html#profile' || url === '#profile') {
            showTab('profile');
            window.location.hash = 'profile';
            return;
        }
        window.location.href = url;
    }

    // Carica tema salvato
    if (localStorage.getItem('cronosound-theme') === 'light-mode') {
        document.body.classList.add('light-mode');
    }

    // Controllo sessione all'avvio
    async function checkSession() {
        // Controlla prima sessionStorage (da login custom)
        const savedUser = sessionStorage.getItem('currentUser');
        const savedIsOwner = sessionStorage.getItem('isOwner');

        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            isOwner = savedIsOwner === 'true';
            loadProfile();
            if (window.location.hash === '#profile') {
                showTab('profile');
            } else {
                showTab('profile');
            }
            return;
        }

        // Fallback a Supabase Auth
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            currentUser = session.user;
            isOwner = currentUser.email && currentUser.email.toLowerCase() === OWNER_EMAIL.toLowerCase();
            loadProfile();
            if (window.location.hash === '#profile') {
                showTab('profile');
            } else {
                showTab('profile');
            }
        } else {
            showTab('login');
        }
    }

    // Login utente - Custom login from accounts table (bypasses Supabase Auth rate limit)
    async function loginUser() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        if (!email || !password) {
            showError('login-error', 'Inserisci email e password.');
            return;
        }

        try {
            // Try custom login from accounts table first
            const { data: accountData, error: accountError } = await supabaseClient
                .from('accounts')
                .select('*')
                .eq('email', email)
                .single();

            if (!accountError && accountData) {
                // If the accounts table contains a password column, verify it (plaintext comparison)
                if (typeof accountData.password !== 'undefined') {
                    if (accountData.password !== password) {
                        showError('login-error', 'Credenziali non valide.');
                        return;
                    }
                }
                // Account found in database - simulate login
                currentUser = {
                    id: accountData.id,
                    email: accountData.email,
                    user_metadata: {
                        nome: accountData.nome
                    }
                };
                // Carica is_owner dal database
                isOwner = accountData.is_owner === true;
                // Salva in sessionStorage prima del redirect
                sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
                sessionStorage.setItem('isOwner', isOwner ? 'true' : 'false');
                loadProfile();
                showSuccess('login-error', 'Login effettuato con successo!');
                setTimeout(() => window.location.href = 'index.html', 1500);
                return;
            }
        } catch (e) {
            console.log('Custom login attempt failed, trying Supabase Auth');
        }

        // Fallback to Supabase Auth if account not found in custom database
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });
        if (error) {
            const lower = error.message.toLowerCase();
            if (lower.includes('invalid') || lower.includes('not found') || lower.includes('user')) {
                showErrorHTML('login-error', `${error.message} <span class="link" onclick="showTab('signup')">Vuoi creare un account?</span>`);
            } else {
                showError('login-error', error.message);
            }
        } else {
            currentUser = data.user;
            isOwner = data.user.email === OWNER_EMAIL;
            // Salva in sessionStorage prima del redirect
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
            sessionStorage.setItem('isOwner', isOwner ? 'true' : 'false');
            loadProfile();
            window.location.href = 'index.html'; // Reindirizza a index.html dopo login
        }
    }

    // Login as temporary guest (client-side only)
    function loginAsGuest() {
        currentUser = {
            id: 'guest',
            email: 'guest@local',
            user_metadata: { nome: 'Guest' }
        };
        isOwner = false;
        // Save to sessionStorage so other pages pick up the temporary session
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        sessionStorage.setItem('isOwner', 'false');
        showSuccess('login-error', 'Accesso come Guest effettuato.');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 800);
    }

    // Registrazione utente
    async function signupUser() {
        const nome = document.getElementById('signup-nome').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const telefono = document.getElementById('signup-telefono').value;
        const dataNascita = document.getElementById('signup-data').value;
        if (!nome || !email || !password || !telefono || !dataNascita) {
            showError('signup-error', 'Tutti i campi sono obbligatori.');
            return;
        }
        const { data, error } = await supabaseClient.auth.signUp({
            email: email,
            password: password
        });
        if (error) {
            showError('signup-error', error.message);
        } else {
            const userId = data?.user?.id;
            if (!userId) {
                showError('signup-error', 'Registrazione riuscita, ma non è stato possibile salvare il profilo. Riprova più tardi.');
                return;
            }

            // Attendi e poi prova a fare login
            await new Promise(r => setTimeout(r, 500));
            const { error: loginError } = await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (loginError) {
                console.warn('Auto-login dopo signup:', loginError);
            }

            // Attendi un altro momento per assicurare sessione attiva
            await new Promise(r => setTimeout(r, 1000));

            // Salva dati extra in accounts con retry
            let profileError = null;
            for (let attempt = 0; attempt < 3; attempt++) {
                const { error: err } = await supabaseClient
                    .from('accounts')
                    .insert([{
                        email: email,
                        nome: nome,
                        telefono: telefono,
                        data_nascita: dataNascita,
                        password: password
                    }]);

                if (!err) {
                    profileError = null;
                    break;
                }
                profileError = err;
                if (attempt < 2) await new Promise(r => setTimeout(r, 500));
            }

            if (profileError) {
                showError('signup-error', 'Errore nel salvare il profilo: ' + profileError.message + ' (assicurati che il RLS sia disabilitato su profiles o che la policy sia corretta)');
            } else {
                showSignupPopup();
                document.getElementById('signup-nome').value = '';
                document.getElementById('signup-email').value = '';
                document.getElementById('signup-password').value = '';
                document.getElementById('signup-telefono').value = '';
                document.getElementById('signup-data').value = '';
            }
        }
    }

    function showSignupPopup() {
        document.getElementById('signup-popup').style.display = 'flex';
        setTimeout(() => {
            hideSignupPopup();
            showTab('login');
        }, 4500);
    }

    function hideSignupPopup() {
        document.getElementById('signup-popup').style.display = 'none';
    }

    // Verifica email per reset (step 1)
    async function verifyEmailForReset() {
        const email = document.getElementById('reset-email').value;
        if (!email) {
            showError('reset-error', 'Inserisci la tua email.');
            return;
        }
        // Nota: Per trovare il profilo, assumo che la tabella profiles abbia una colonna 'email' aggiunta per query.
        // In Supabase, profiles è collegata via user_id, ma per client-side, non possiamo query auth.users.
        // Per questo esempio, aggiungo una colonna email in profiles per permettere la query.
        const { data, error } = await supabaseClient
            .from('profiles')
            .select('*')
            .eq('email', email); // Assumo colonna email in profiles
        if (error || !data || data.length === 0) {
            showError('reset-error', 'Email non trovata nel sistema.');
            return;
        }
        resetUserData = data[0];
        document.getElementById('reset-step1').style.display = 'none';
        document.getElementById('reset-step2').style.display = 'block';
    }

    // Conferma dato e reset (step 2)
    async function confirmAndReset() {
        const confirm = document.getElementById('reset-confirm').value;
        if (!confirm) {
            showError('reset-error', 'Inserisci il dato di conferma.');
            return;
        }
        // Controlla se corrisponde a nome o telefono
        if (confirm.toLowerCase() === resetUserData.nome.toLowerCase() || confirm === resetUserData.telefono) {
            const { error } = await supabaseClient.auth.resetPasswordForEmail(resetUserData.email, {
                redirectTo: window.location.origin + '/account.html' // Reindirizza qui dopo reset
            });
            if (error) {
                showError('reset-error', error.message);
            } else {
                showSuccess('reset-success', 'Email di reset inviata! Controlla la tua casella.');
                // Reset form
                document.getElementById('reset-email').value = '';
                document.getElementById('reset-confirm').value = '';
                document.getElementById('reset-step2').style.display = 'none';
                document.getElementById('reset-step1').style.display = 'block';
            }
        } else {
            showError('reset-error', 'Dato di conferma non corretto.');
        }
    }

    // Torna a step 1 reset
    function backToResetStep1() {
        document.getElementById('reset-step2').style.display = 'none';
        document.getElementById('reset-step1').style.display = 'block';
        hideMessages();
    }

    function requestManagerStatus() {
        if (!currentUser) {
            showError('profile-error', 'Devi essere loggato per richiedere lo status.');
            return;
        }
        const subject = encodeURIComponent('Richiesta manager CRONOSOUND');
        const body = encodeURIComponent(`Ciao,

richiedo lo status manager per il mio account CRONOSOUND.

Nome: ${document.getElementById('profile-nome').value}
Email: ${document.getElementById('profile-email').value}
Telefono: ${document.getElementById('profile-telefono').value}
Data di nascita: ${document.getElementById('profile-data').value}

Grazie.`);
        window.location.href = `mailto:${OWNER_CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }

    // Carica profilo
    async function loadProfile() {
        if (!currentUser) return;
        try {
            const { data, error } = await supabaseClient
                .from('accounts')
                .select('*')
                .eq('email', currentUser.email);

            if (error) {
                console.error('Errore query profilo:', error);
                if (isOwner) {
                    showError('profile-owner-error', 'Errore nel caricamento del profilo: ' + error.message);
                } else {
                    showError('profile-error', 'Errore nel caricamento del profilo: ' + error.message);
                }
                return;
            }

            if (!data || data.length === 0) {
                const errorMsg = 'Profilo non trovato. Contatta l\'amministratore.';
                if (isOwner) {
                    showError('profile-owner-error', errorMsg);
                } else {
                    showError('profile-error', errorMsg);
                }
                return;
            }

            const profileData = data[0];
            // Aggiorna isOwner dal database
            isOwner = profileData.is_owner === true;

            if (isOwner) {
                // Profilo Owner
                document.getElementById('section-profile-owner').style.display = 'block';
                document.getElementById('section-profile').style.display = 'none';
                document.getElementById('owner-profile-nome').innerText = profileData.nome || 'Owner';
                document.getElementById('owner-profile-email').innerText = profileData.email || currentUser.email;
                document.getElementById('owner-last-login').innerText = 'Ultimo accesso: ' + new Date().toLocaleString('it-IT');
            } else {
                // Profilo Standard
                document.getElementById('section-profile-owner').style.display = 'none';
                document.getElementById('section-profile').style.display = 'block';
                document.getElementById('profile-nome').value = profileData.nome || '';
                document.getElementById('profile-email').value = profileData.email || '';
                document.getElementById('profile-password').value = '';
                document.getElementById('profile-telefono').value = profileData.telefono || '';
                document.getElementById('profile-data').value = profileData.data_nascita || '';
                const roleLabel = document.getElementById('profile-role');
                roleLabel.innerText = 'Utente standard • Richiedi status manager con il pulsante qui sotto';
                roleLabel.style.color = 'var(--accent)';
                document.getElementById('manager-request-btn').style.display = 'block';
            }
        } catch (err) {
            console.error('Errore caricamento profilo:', err);
            if (isOwner) {
                showError('profile-owner-error', 'Errore inaspettato nel caricamento del profilo.');
            } else {
                showError('profile-error', 'Errore inaspettato nel caricamento del profilo.');
            }
        }
    }

    // Aggiorna profilo
    async function updateProfile() {
        const nome = document.getElementById('profile-nome').value;
        const email = document.getElementById('profile-email').value;
        const password = document.getElementById('profile-password').value;
        const telefono = document.getElementById('profile-telefono').value;
        const dataNascita = document.getElementById('profile-data').value;
        if (!nome || !email || !telefono || !dataNascita) {
            showError('profile-error', 'Nome, email, telefono e data di nascita sono obbligatori.');
            return;
        }

        const updateData = {
            nome: nome,
            email: email,
            telefono: telefono,
            data_nascita: dataNascita
        };
        if (password) {
            updateData.password = password;
        }

        const { error } = await supabaseClient
            .from('accounts')
            .update(updateData)
            .eq('email', currentUser.email);
        if (error) {
            showError('profile-error', error.message);
            return;
        }

        currentUser.email = email;
        if (currentUser.user_metadata) {
            currentUser.user_metadata.nome = nome;
        }
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        sessionStorage.setItem('isOwner', isOwner ? 'true' : 'false');

        showSuccess('profile-success', 'Profilo aggiornato con successo!');
        document.getElementById('profile-password').value = '';
    }

    // Logout
    async function logoutUser() {
        // Clear custom session state first
        currentUser = null;
        isOwner = false;
        sessionStorage.removeItem('currentUser');
        sessionStorage.removeItem('isOwner');

        // Try to sign out any Supabase auth session if present
        try {
            const { error } = await supabaseClient.auth.signOut();
            if (error) {
                console.warn('Supabase logout error:', error.message);
            }
        } catch (err) {
            console.warn('Supabase logout failed:', err);
        }

        window.location.href = 'account.html';
    }

    // Temporary function to delete all accounts (for resetting the database architecture)
    async function deleteAllAccounts() {
        try {
            // Delete all accounts from the accounts table
            const { data: accounts, error: fetchError } = await supabaseClient
                .from('accounts')
                .select('email');

            if (fetchError) {
                showError('profile-owner-error', 'Errore nel caricamento account: ' + fetchError.message);
                return;
            }

            // Delete from accounts table
            const { error: deleteError } = await supabaseClient
                .from('accounts')
                .delete()
                .neq('email', '');

            if (deleteError) {
                showError('profile-owner-error', 'Errore nell\'eliminazione: ' + deleteError.message);
                return;
            }

            if (accounts && accounts.length > 0) {
                console.log('Eliminati ' + accounts.length + ' account dal database.');
            }

            showSuccess('profile-owner-success', 'Tutti gli account sono stati eliminati dal database.');
            setTimeout(() => window.location.href = 'account.html', 2000);
        } catch (err) {
            showError('profile-owner-error', 'Errore durante l\'eliminazione: ' + err.message);
        }
    }



    // Inizializza
    checkSession();
    applyTranslations();
