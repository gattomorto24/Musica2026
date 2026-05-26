/**
 * CRONOSOUND LANGUAGE ENGINE v1.0
 * Multi-language Support System
 * Supporta: Italiano (it), English (en)
 */

(function() {
    const DEFAULT_LANGUAGE = 'it';
    
    const translations = {
        it: {
            // Header & Navigation
            'welcome': 'Benvenuto, Utente',
            'ranking': 'Ranking',
            'update': 'Aggiorna',
            'archive': 'Archivio',
            'general_ranking': 'Classifica Generale',
            
            // Buttons
            'caps': 'CAPS',
            'export': 'Esporta',
            'close': 'CHIUDI',
            'cancel': 'Annulla',
            'publish': 'Pubblica nel Cloud',
            'format_db': 'Formatta Database',
            'send': 'Invia',
            'save': 'Salva',
            'logout': 'Logout',
            
            // Export Modal
            'export_options': 'OPZIONI ESPORTAZIONE',
            'position': 'Posizione (#1, #2...)',
            'total_points': 'Punti Totali',
            'series': 'Serie (A, B, C)',
            
            // Info Popup
            'music_metadata': '🎵 Music Metadata',
            'song_title': 'Titolo Canzone',
            'artist_name': 'Nome Artista',
            'album': 'Album',
            'genre': 'Genere',
            'year': 'Anno',
            'current_league': 'Lega Attuale',
            'total_points_label': 'Punti Totali',
            
            // Search & Input
            'search_placeholder': 'Cerca canzoni per titolo...',
            'week_label': 'Settimana',
            'week_placeholder': '1. Canzone A\n2. Canzone B...\n\nIncolla qui la classifica settimanale',
            
            // Mobile Menu
            'system_menu': 'MENU SISTEMA',
            'general_ranking_menu': 'Classifica Generale',
            'new_week': 'Nuova Settimana',
            'archive_menu': 'Archivio',
            'info': 'Info',
            'profile': 'Profilo',
            'theme': 'Tema',
            
            // Table Headers
            'position_header': 'Pos',
            'song_series': 'Canzone / Serie',
            'points_header': 'Punti Totali',
            'song': 'Canzone',
            'points_gained': 'Punti Guadagnati',
            
            // Messages & Alerts
            'secure_connection': 'SECURE CONNECTION: PENDING',
            'system_online': 'SYSTEM ONLINE: CLOUD SYNCHRONIZED',
            'initializing': 'INITIALIZING CLOUD CORE',
            'insert_data': 'Tony, inserisci i dati!',
            'confirm_caps': 'Converti TUTTI i titoli (attuali + archivio) a CAPS e salva in Supabase?',
            'confirm_reset': 'Tony, pialliamo tutto?',
            'confirm_convert': 'Converti TUTTI i titoli a CAPS',
            'error_message': 'Errore nel salvataggio: ',
            'conversion_complete': '✅ Tutti i titoli convertiti a CAPS e salvati in Supabase!',
            'owner_only': 'Solo l\'Owner può aggiornare la classifica. Richiedi lo status manager su account.html.',
            'title_caps': 'Converte tutti i titoli a CAPS',
            'title_export': 'Apri le opzioni di esportazione',
            'export_week': 'Esporta Settimana',
            'like_song_button': 'Metti un like a questa canzone',
            'scoring_system': 'Sistema Punteggi',
            'scoring_rule_1': 'Bonus streak per miglioramenti consecutivi: +20% dal terzo ciclo.',
            'scoring_rule_2': 'Malus per cali continui: riduzione progressiva dei punti se la canzone scende più settimane di seguito.',
            'scoring_rule_3': 'Like sulle canzoni: ogni like aggiunge +5 punti alla classifica globale.',
            'scoring_rule_4': 'Archivio esportabile: esporta ogni settimana direttamente dalla sezione Archivio.',
            'no_archive_export': 'Nessuna settimana dell\'archivio disponibile per l\'esportazione.',
            'language_confirm_title': 'Conferma Lingua',
            'language_confirm_text': 'Vuoi cambiare la lingua in:',
            'language_option_it': 'Italiano',
            'language_option_en': 'English',
            'language_option_es': 'Español',
            'ok': 'Ok',
            'cancel': 'Annulla',
            'login_required_title': 'Accesso richiesto',
            'login_required_text': 'Devi accedere per mettere like.',
            'already_liked_title': 'Like già inviato',
            'already_liked_text': 'Hai già messo like a questa canzone.',
            
            // Account Page
            'login': 'Accedi',
            'register': 'Registrati',
            'email': 'Email',
            'password': 'Password',
            'name': 'Nome',
            'phone': 'Telefono',
            'birthdate': 'Data di Nascita',
            'profile_edit': 'Modifica Profilo',
            'request_manager': 'Richiedi Status Manager',
            'password_recovery': 'Recupero Password',
            'back_to_command': 'Torna al Terminale',
            
            // Info Page
            'documentation': 'DOCUMENTAZIONE & REGOLAMENTO',
            'official': 'Documentazione & Regolamento Ufficiale',
            'changelog': 'Changelog Storico',
            'rules': '⚖️ Regolamento & Protocolli',
            'point_attribution': 'Attribuzione Punti',
            'series': 'Serie',
            'series_a': 'Serie A (Posizioni 1-20)',
            'series_b': 'Serie B (Posizioni 21-50)',
            'series_c': 'Serie C (Posizioni 51+)',
            
            // Language
            'language': 'Lingua',
            'italian': 'Italiano',
            'english': 'English',
            
            // Account Page Additional
            'account_management': 'Account Management System',
            'account_menu': 'MENU ACCOUNT',
            'home': 'Home',
            'registration': 'Registrazione',
            'recovery': 'Recupero',
            'login_to_system': 'Accedi al Sistema',
            'create_account': 'Crea Nuovo Account',
            'full_name': 'Nome Completo',
            'phone_number': 'Numero di Telefono',
            'birthdate_label': 'Data di Nascita',
            'already_account': 'Hai già un account?',
            'forgot_password': 'Password dimenticata?',
            'password_recovery_title': 'Recupero Password',
            'enter_email': 'Inserisci la tua Email',
            'verify_email': 'Verifica Email',
            'confirm_data': 'Per sicurezza, conferma uno dei tuoi dati salvati:',
            'name_or_phone': 'Nome o Telefono',
            'confirm_and_send': 'Conferma e Invia Reset',
            'back': 'Indietro',
            'remember_password': 'Ricordi la password?',
            'your_profile': 'Il Tuo Profilo',
            'update_profile': 'Aggiorna Profilo',
            'request_manager_status': 'Richiedi status Manager',
            'owner_panel': 'Pannello Owner',
            'status': 'Stato',
            'edit_sensitive': 'Modifica Dati Sensibili',
            'save': 'Salva',
            'cancel': 'Annulla',
            'owner_privileges': 'Privilegi Owner',
            'full_ranking_access': 'Accesso completo alla classifica',
            'weekly_update': 'Aggiornamento settimanale dati',
            'manager_requests': 'Gestione manager requests',
            'archive_access': 'Accesso archivio storico',
            'db_reset': 'Reset database',
            'last_logins': 'Ultimi Accessi',
            'system_initialized': 'Sistema inizializzato',
            'registration_sent': 'Registrazione Inviata',
            'account_created': 'Il tuo account è stato creato con successo. Controlla la tua casella di posta per confermare l\'email prima dell\'accesso.',
            'go_to_login': 'Vai al Login',
            
            // Info Page Additional
            'documentation_title': 'DOCUMENTAZIONE & REGOLAMENTO',
            'official_docs': 'Documentazione & Regolamento Ufficiale',
            'back_link': '← Indietro',
            'changelog': 'Changelog Storico',
            'version': 'Versione',
            'latest': 'LATEST',
            'complete_redesign': 'Completo Redesign Totale',
            'ui_cleanup': 'UI Cleanup',
            'export_modal': 'Export Modal Redesign',
            'export_button': 'Export Button Restoration',
            'toggle_system': 'Class-Based Toggle System',
            'modal_overlay': 'Modal Overlay Styling',
            'responsive_design': 'Responsive Design Enhancements',
            'codebase_optimization': 'Codebase Optimization',
            'bug_fixes': 'Bug Fixes',
            'ui_changes': 'Cambio UI minimo',
            'rules_protocols': '⚖️ Regolamento & Protocolli',
            'point_attribution': 'Attribuzione Punti',
            'first_place': '1° Posto',
            'top_5': 'Top 5',
            'top_20': 'Top 20',
            'series_b_points': 'Serie B',
            'series_c_points': 'Serie C',
            'notary_restrictions': 'Restrizioni Notaio',
            'top_15_restrict': 'Le canzoni in Top 15 non possono scendere in Serie B nella stessa settimana.',
            'series_a_permanent': 'Le promozioni in Serie A sono permanenti fino alla fine del ciclo settimanale.',
            'manual_update': 'Il database viene aggiornato manualmente per garantire l\'integrità dei dati.',
            'system_params': '⚙️ Parametri di Sistema',
            'architecture': 'Architettura',
            'database': 'Database',
            'authorizations': 'Autorizzazioni',
            'supabase_desc': 'Supabase Cloud con persistenza locale via Theme Engine 1.5. Autenticazione SSL standard per tutti i transiti dati.',
            'database_desc': 'Tabella profiles con RLS policies per protezione dati utente. Ogni utente accede solo al proprio profilo.',
            'auth_desc': 'Owner ha accesso completo a tutte le funzioni (Aggiorna, Reset). Utenti standard hanno accesso in sola lettura con opzione di richiedere status manager.',
            'doc_version': 'TONY EXECUTIVE SYSTEMS — DOCUMENT VERSION 2.0.2'
        },
        en: {
            // Header & Navigation
            'welcome': 'Welcome, User',
            'ranking': 'Ranking',
            'update': 'Update',
            'archive': 'Archive',
            'general_ranking': 'General Ranking',
            
            // Buttons
            'caps': 'CAPS',
            'export': 'Export',
            'close': 'CLOSE',
            'cancel': 'Cancel',
            'publish': 'Publish to Cloud',
            'format_db': 'Format Database',
            'send': 'Send',
            'save': 'Save',
            'logout': 'Logout',
            
            // Export Modal
            'export_options': 'EXPORT OPTIONS',
            'position': 'Position (#1, #2...)',
            'total_points': 'Total Points',
            'series': 'Series (A, B, C)',
            
            // Info Popup
            'music_metadata': '🎵 Music Metadata',
            'song_title': 'Song Title',
            'artist_name': 'Artist Name',
            'album': 'Album',
            'genre': 'Genre',
            'year': 'Year',
            'current_league': 'Current League',
            'total_points_label': 'Total Points',
            
            // Search & Input
            'search_placeholder': 'Search songs by title...',
            'week_label': 'Week',
            'week_placeholder': '1. Song A\n2. Song B...\n\nPaste the weekly ranking here',
            
            // Mobile Menu
            'system_menu': 'SYSTEM MENU',
            'general_ranking_menu': 'General Ranking',
            'new_week': 'New Week',
            'archive_menu': 'Archive',
            'info': 'Info',
            'profile': 'Profile',
            'theme': 'Theme',
            
            // Table Headers
            'position_header': 'Pos',
            'song_series': 'Song / Series',
            'points_header': 'Total Points',
            'song': 'Song',
            'points_gained': 'Points Gained',
            
            // Messages & Alerts
            'secure_connection': 'SECURE CONNECTION: PENDING',
            'system_online': 'SYSTEM ONLINE: CLOUD SYNCHRONIZED',
            'initializing': 'INITIALIZING CLOUD CORE',
            'insert_data': 'Tony, enter the data!',
            'confirm_caps': 'Convert ALL titles (current + archive) to CAPS and save in Supabase?',
            'confirm_reset': 'Tony, reset everything?',
            'confirm_convert': 'Convert ALL titles to CAPS',
            'error_message': 'Error saving: ',
            'conversion_complete': '✅ All titles converted to CAPS and saved in Supabase!',
            'owner_only': 'Only the Owner can update the ranking. Request manager status at account.html.',
            'title_caps': 'Convert all titles to CAPS',
            'title_export': 'Open export options',
            'export_week': 'Export Week',
            'like_song_button': 'Like this song',
            'scoring_system': 'Scoring System',
            'scoring_rule_1': 'Streak bonus for consecutive improvements: +20% from the third cycle.',
            'scoring_rule_2': 'Malus for continuous drops: progressive reduction when a song falls multiple weeks in a row.',
            'scoring_rule_3': 'Song likes: each like adds +5 points to the global ranking.',
            'scoring_rule_4': 'Archive exportable: export every week directly from the Archive section.',
            'no_archive_export': 'No archive weeks available to export.',
            'language_confirm_title': 'Language Confirmation',
            'language_confirm_text': 'Do you want to change the language to:',
            'language_option_it': 'Italiano',
            'language_option_en': 'English',
            'language_option_es': 'Español',
            'ok': 'Ok',
            'cancel': 'Cancel',
            'login_required_title': 'Login Required',
            'login_required_text': 'You need to log in to like songs.',
            'already_liked_title': 'Already Liked',
            'already_liked_text': 'You have already liked this song.',
            
            // Account Page
            'login': 'Login',
            'register': 'Register',
            'email': 'Email',
            'password': 'Password',
            'name': 'Name',
            'phone': 'Phone',
            'birthdate': 'Birth Date',
            'profile_edit': 'Edit Profile',
            'request_manager': 'Request Manager Status',
            'password_recovery': 'Password Recovery',
            'back_to_command': 'Back to Terminal',
            
            // Info Page
            'documentation': 'DOCUMENTATION & RULES',
            'official': 'Official Documentation & Rules',
            'changelog': 'Historical Changelog',
            'rules': '⚖️ Rules & Protocols',
            'point_attribution': 'Point Attribution',
            'series': 'Series',
            'series_a': 'Series A (Positions 1-20)',
            'series_b': 'Series B (Positions 21-50)',
            'series_c': 'Series C (Positions 51+)',
            
            // Language
            'language': 'Language',
            'italian': 'Italiano',
            'english': 'English',
            
            // Account Page Additional
            'account_management': 'Account Management System',
            'account_menu': 'ACCOUNT MENU',
            'home': 'Home',
            'registration': 'Registration',
            'recovery': 'Recovery',
            'login_to_system': 'Login to the System',
            'create_account': 'Create New Account',
            'full_name': 'Full Name',
            'phone_number': 'Phone Number',
            'birthdate_label': 'Birth Date',
            'already_account': 'Already have an account?',
            'forgot_password': 'Forgot password?',
            'password_recovery_title': 'Password Recovery',
            'enter_email': 'Enter your Email',
            'verify_email': 'Verify Email',
            'confirm_data': 'For security, confirm one of your saved data:',
            'name_or_phone': 'Name or Phone',
            'confirm_and_send': 'Confirm and Send Reset',
            'back': 'Back',
            'remember_password': 'Remember your password?',
            'your_profile': 'Your Profile',
            'update_profile': 'Update Profile',
            'request_manager_status': 'Request Manager Status',
            'owner_panel': 'Owner Panel',
            'status': 'Status',
            'edit_sensitive': 'Edit Sensitive Data',
            'save': 'Save',
            'cancel': 'Cancel',
            'owner_privileges': 'Owner Privileges',
            'full_ranking_access': 'Full ranking access',
            'weekly_update': 'Weekly data update',
            'manager_requests': 'Manage manager requests',
            'archive_access': 'Archive history access',
            'db_reset': 'Database reset',
            'last_logins': 'Last Logins',
            'system_initialized': 'System initialized',
            'registration_sent': 'Registration Sent',
            'account_created': 'Your account has been created successfully. Check your email to confirm before logging in.',
            'go_to_login': 'Go to Login',
            
            // Info Page Additional
            'documentation_title': 'DOCUMENTATION & RULES',
            'official_docs': 'Official Documentation & Rules',
            'back_link': '← Back',
            'changelog': 'Historical Changelog',
            'version': 'Version',
            'latest': 'LATEST',
            'complete_redesign': 'Complete Total Redesign',
            'ui_cleanup': 'UI Cleanup',
            'export_modal': 'Export Modal Redesign',
            'export_button': 'Export Button Restoration',
            'toggle_system': 'Class-Based Toggle System',
            'modal_overlay': 'Modal Overlay Styling',
            'responsive_design': 'Responsive Design Enhancements',
            'codebase_optimization': 'Codebase Optimization',
            'bug_fixes': 'Bug Fixes',
            'ui_changes': 'Minimal UI Changes',
            'rules_protocols': '⚖️ Rules & Protocols',
            'point_attribution': 'Point Attribution',
            'first_place': '1st Place',
            'top_5': 'Top 5',
            'top_20': 'Top 20',
            'series_b_points': 'Series B',
            'series_c_points': 'Series C',
            'notary_restrictions': 'Notary Restrictions',
            'top_15_restrict': 'Songs in Top 15 cannot drop to Series B in the same week.',
            'series_a_permanent': 'Promotions to Series A are permanent until the end of the weekly cycle.',
            'manual_update': 'The database is updated manually to ensure data integrity.',
            'system_params': '⚙️ System Parameters',
            'architecture': 'Architecture',
            'database': 'Database',
            'authorizations': 'Authorizations',
            'supabase_desc': 'Supabase Cloud with local persistence via Theme Engine 1.5. Standard SSL authentication for all data transits.',
            'database_desc': 'Profiles table with RLS policies to protect user data. Each user accesses only their own profile.',
            'auth_desc': 'Owner has full access to all functions (Update, Reset). Standard users have read-only access with option to request manager status.',
            'doc_version': 'TONY EXECUTIVE SYSTEMS — DOCUMENT VERSION 2.0.2'
        }
    };

    // Spanish translations extend English with localized overrides
    translations.es = Object.assign({}, translations.en, {
        'welcome': 'Bienvenido, Usuario',
        'ranking': 'Ranking',
        'update': 'Actualizar',
        'archive': 'Archivo',
        'general_ranking': 'Clasificación General',
        'caps': 'MAYÚSCULAS',
        'export': 'Exportar',
        'close': 'CERRAR',
        'cancel': 'Cancelar',
        'publish': 'Publicar en la Nube',
        'format_db': 'Formatear Base de Datos',
        'send': 'Enviar',
        'save': 'Guardar',
        'logout': 'Cerrar Sesión',
        'export_options': 'OPCIONES DE EXPORTACIÓN',
        'position': 'Posición (#1, #2...)',
        'total_points': 'Puntos Totales',
        'series': 'Serie (A, B, C)',
        'music_metadata': '🎵 Metadatos Musicales',
        'song_title': 'Título de la Canción',
        'artist_name': 'Nombre del Artista',
        'album': 'Álbum',
        'genre': 'Género',
        'year': 'Año',
        'current_league': 'Liga Actual',
        'total_points_label': 'Puntos Totales',
        'search_placeholder': 'Buscar canciones por título...',
        'week_label': 'Semana',
        'week_placeholder': '1. Canción A\n2. Canción B...\n\nPega aquí la clasificación semanal',
        'system_menu': 'MENÚ DEL SISTEMA',
        'general_ranking_menu': 'Clasificación General',
        'new_week': 'Nueva Semana',
        'archive_menu': 'Archivo',
        'info': 'Info',
        'profile': 'Perfil',
        'theme': 'Tema',
        'position_header': 'Pos',
        'song_series': 'Canción / Serie',
        'points_header': 'Puntos Totales',
        'song': 'Canción',
        'points_gained': 'Puntos Ganados',
        'secure_connection': 'CONEXIÓN SEGURA: EN ESPERA',
        'system_online': 'SISTEMA EN LÍNEA: NUBE SINCRONIZADA',
        'initializing': 'INICIALIZANDO NÚCLEO DE LA NUBE',
        'insert_data': 'Tony, ingresa los datos!',
        'confirm_caps': '¿Convertir TODOS los títulos (actual + archivo) a MAYÚSCULAS y guardar en Supabase?',
        'confirm_reset': 'Tony, ¿reiniciamos todo?',
        'confirm_convert': 'Convertir TODOS los títulos a MAYÚSCULAS',
        'error_message': 'Error al guardar: ',
        'conversion_complete': '✅ ¡Todos los títulos convertidos a MAYÚSCULAS y guardados en Supabase!',
        'owner_only': 'Solo el Owner puede actualizar la clasificación. Solicita el estado de manager en account.html.',
        'title_caps': 'Convertir todos los títulos a MAYÚSCULAS',
        'title_export': 'Abrir opciones de exportación',
        'documentation': 'DOCUMENTACIÓN Y REGLAMENTO',
        'official': 'Documentación y Reglamento Oficial',
        'changelog': 'Registro de Cambios Histórico',
        'rules': '⚖️ Reglamento y Protocolos',
        'point_attribution': 'Asignación de Puntos',
        'series': 'Serie',
        'series_a': 'Serie A (Posiciones 1-20)',
        'series_b': 'Serie B (Posiciones 21-50)',
        'series_c': 'Serie C (Posiciones 51+)',
        'language': 'Idioma',
        'italian': 'Italiano',
        'english': 'Inglés',
        'documentation_title': 'DOCUMENTACIÓN Y REGLAMENTO',
        'official_docs': 'Documentación y Reglamento Oficial',
        'back_link': '← Volver',
        'version': 'Versión',
        'latest': 'ÚLTIMO',
        'complete_redesign': 'Rediseño Total Completo',
        'ui_cleanup': 'Limpieza de UI',
        'export_modal': 'Rediseño del Modal de Exportación',
        'export_button': 'Restauración del Botón Exportar',
        'toggle_system': 'Sistema de Alternancia Basado en Clases',
        'modal_overlay': 'Estilo de Overlay de Modal',
        'responsive_design': 'Mejoras de Diseño Responsable',
        'codebase_optimization': 'Optimización de Código',
        'bug_fixes': 'Corrección de Errores',
        'ui_changes': 'Cambios UI Mínimos',
        'rules_protocols': '⚖️ Reglas y Protocolos',
        'first_place': '1er Lugar',
        'top_5': 'Top 5',
        'top_20': 'Top 20',
        'series_b_points': 'Serie B',
        'series_c_points': 'Serie C',
        'notary_restrictions': 'Restricciones de Notario',
        'top_15_restrict': 'Las canciones en Top 15 no pueden bajar a Serie B en la misma semana.',
        'series_a_permanent': 'Las promociones a Serie A son permanentes hasta el final del ciclo semanal.',
        'manual_update': 'La base de datos se actualiza manualmente para garantizar la integridad de los datos.',
        'system_params': '⚙️ Parámetros del Sistema',
        'architecture': 'Arquitectura',
        'database': 'Base de Datos',
        'authorizations': 'Autorizaciones',
        'supabase_desc': 'Supabase Cloud con persistencia local a través de Theme Engine 1.5. Autenticación SSL estándar para todos los datos.',
        'database_desc': 'Tabla profiles con políticas RLS para proteger los datos de los usuarios. Cada usuario accede solo a su propio perfil.',
        'auth_desc': 'El Owner tiene acceso completo a todas las funciones (Actualizar, Reset). Los usuarios estándar tienen acceso de solo lectura con opción de solicitar estado manager.',
        'doc_version': 'TONY EXECUTIVE SYSTEMS — VERSIÓN DE DOCUMENTO 2.0.2'
    });

    // Get saved language or default
    const getSavedLanguage = () => localStorage.getItem('cronosound-language') || DEFAULT_LANGUAGE;
    
    // Set current language
    const savedLanguage = getSavedLanguage();
    window.currentLanguage = translations[savedLanguage] ? savedLanguage : DEFAULT_LANGUAGE;
    document.documentElement.lang = window.currentLanguage;

    // Translation function with fallback to English
    window.t = function(key) {
        const lang = window.currentLanguage || DEFAULT_LANGUAGE;
        return (translations[lang] && translations[lang][key]) || translations.en[key] || key;
    };

    // Change language function
    window.changeLanguage = function(lang) {
        if (lang && translations[lang]) {
            window.currentLanguage = lang;
        } else {
            const available = Object.keys(translations);
            const currentIndex = available.indexOf(window.currentLanguage);
            const nextIndex = (currentIndex + 1) % available.length;
            window.currentLanguage = available[nextIndex] || DEFAULT_LANGUAGE;
        }
        localStorage.setItem('cronosound-language', window.currentLanguage);
        document.documentElement.lang = window.currentLanguage;
        location.reload();
    };

    window.showLanguageConfirm = function() {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay) return;
        overlay.classList.add('active');
        const defaultLang = window.currentLanguage || DEFAULT_LANGUAGE;
        const selected = overlay.dataset.selected || defaultLang;
        setLanguageSelection(selected);
    };

    window.setLanguageSelection = function(lang) {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay) return;
        overlay.dataset.selected = lang;
        const label = document.getElementById('language-confirm-selected');
        if (label) {
            label.textContent = `${window.t('language_confirm_text')} ${window.t('language_option_' + lang)}`;
        }
        overlay.querySelectorAll('.language-option').forEach(el => {
            el.classList.toggle('selected', el.dataset.lang === lang);
        });
    };

    window.confirmLanguageChange = function() {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay) return;
        const selected = overlay.dataset.selected || window.currentLanguage;
        overlay.classList.remove('active');
        if (translations[selected] && selected !== window.currentLanguage) {
            window.changeLanguage(selected);
        }
    };

    window.closeLanguageConfirm = function() {
        const overlay = document.getElementById('language-confirm-overlay');
        if (overlay) overlay.classList.remove('active');
    };

    window.showSystemAlert = function(title, message, okText, cancelText, onConfirm) {
        const overlay = document.getElementById('system-alert-overlay');
        if (!overlay) return;
        const titleNode = document.getElementById('system-alert-title');
        const messageNode = document.getElementById('system-alert-message');
        const okButton = overlay.querySelector('.system-alert-btn.ok');
        const cancelButton = overlay.querySelector('.system-alert-btn.cancel');

        titleNode.innerText = title || '';
        messageNode.innerText = message || '';
        okButton.innerText = okText || window.t('ok');
        if (cancelText) {
            cancelButton.style.display = 'inline-flex';
            cancelButton.innerText = cancelText;
        } else {
            cancelButton.style.display = 'none';
        }

        window._systemAlertCallback = onConfirm || null;
        overlay.classList.add('active');
    };

    window.confirmSystemAlert = function() {
        const callback = window._systemAlertCallback;
        if (typeof callback === 'function') callback();
        window.hideSystemAlert();
    };

    window.hideSystemAlert = function() {
        const overlay = document.getElementById('system-alert-overlay');
        if (overlay) overlay.classList.remove('active');
        window._systemAlertCallback = null;
    };

    window.cycleLanguage = function() {
        window.showLanguageConfirm();
    };

    // Update page content with translations
    window.applyTranslations = function() {
        const lang = window.currentLanguage || DEFAULT_LANGUAGE;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = window.t(key);
                } else {
                    el.textContent = window.t(key);
                }
            }
        });

        // Update all elements with data-i18n-title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (key) {
                el.title = window.t(key);
            }
        });
    };

    // Inject language confirm overlay and apply translations on DOM ready
    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations();
        if (!document.getElementById('language-confirm-overlay')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="language-confirm-overlay" class="language-confirm-overlay">
                    <div class="language-confirm-card">
                        <h3>${window.t('language_confirm_title')}</h3>
                        <p id="language-confirm-selected">${window.t('language_confirm_text')} ${window.t('language_option_en')}</p>
                        <div class="language-confirm-options">
                            <button class="language-option" data-lang="it" onclick="window.setLanguageSelection('it')">${window.t('language_option_it')}</button>
                            <button class="language-option" data-lang="en" onclick="window.setLanguageSelection('en')">${window.t('language_option_en')}</button>
                            <button class="language-option" data-lang="es" onclick="window.setLanguageSelection('es')">${window.t('language_option_es')}</button>
                        </div>
                        <div class="language-confirm-actions">
                            <button class="confirm-btn cancel" onclick="window.closeLanguageConfirm()">${window.t('cancel')}</button>
                            <button class="confirm-btn ok" onclick="window.confirmLanguageChange()">${window.t('ok')}</button>
                        </div>
                    </div>
                </div>
            `);
        }

        if (!document.getElementById('system-alert-overlay')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="system-alert-overlay" class="system-alert-overlay">
                    <div class="system-alert-card">
                        <h3 id="system-alert-title"></h3>
                        <p id="system-alert-message"></p>
                        <div class="system-alert-actions">
                            <button class="system-alert-btn cancel" onclick="window.hideSystemAlert()">${window.t('cancel')}</button>
                            <button class="system-alert-btn ok" onclick="window.confirmSystemAlert()">${window.t('ok')}</button>
                        </div>
                    </div>
                </div>
            `);
        }
    });

    // Make available globally
    window.translations = translations;

    // Changelog data structure
    const changelogs = {
        it: [
            {
                version: 'v1.9.1',
                date: '26 MAGGIO 2026',
                latest: true,
                items: [
                    { title: 'Accesso tab Update', desc: 'Aggiunto il collegamento al tab Update anche dal menu mobile hamburger per i proprietari.' },
                    { title: 'Header compatto appiccicoso', desc: 'Introdotto header sticky ridotto con titolo centrale e transizioni di scroll per la navigazione mobile/desktop.' },
                    { title: 'Tema chiaro iOS-style', desc: 'Rifinito il look light mode con superfici glassy, blur, e contrasto morbido per un aspetto più moderno.' },
                    { title: 'Menu mobile migliorato', desc: 'Sottomenù mobile riorganizzato con nav hamburger più chiara e accesso rapido alle utility.' },
                    { title: 'Backup e reset amministratore', desc: 'Aggiunte utility di backup settimanali/manuali e reset database protetto da password per maggiore sicurezza.' },
                    { title: 'Log changelog e versioning', desc: 'Log delle modifiche aggiornato con la voce v1.9.5 per documentare le modifiche più recenti.' }
                ]
            },
            {
                version: 'v1.9',
                date: '25 MAGGIO 2026',
                latest: false,
                items: [
                    { title: 'Gestione Album Owner', desc: 'Introdotto tab album con creazione, modifica, eliminazione e associazione canzoni ad album.' },
                    { title: 'Artista Album', desc: 'Aggiunto campo artista nella creazione/modifica album per una migliore catalogazione.' },
                    { title: 'Ricerca per Album/Artista', desc: 'La barra globale ora filtra anche per nome album e artista associato alle canzoni.' },
                    { title: 'Fallback Copertina Album', desc: 'Le canzoni senza cover usano la cover dell\'album associato per coerenza visiva.' },
                    { title: 'Alert-style Theme Menu', desc: 'Convertito il menu cambio tema in overlay stile alert-card (`.theme-menu-card`) per coerenza visiva.' },
                    { title: 'Export: nuove modalità e formati', desc: 'Aggiunte modalità di esportazione `general`, `archive_current`, `archive_all` e formati `TXT` e `CSV` con logica client-side in `exportData(format)`.' },
                    { title: 'Export Modal restyling', desc: 'Rifatto il modale di esportazione come `system-alert-card export-card` con stile frosted glass e azioni dedicate.' },
                    { title: 'Archivio: navigazione settimana', desc: 'Visualizzazione settimana attiva con due freccette (▲/▼) e funzione `changeExportWeek(dir, evt)` che usa `evt.stopPropagation()` e seleziona correttamente l\'opzione radio.' },
                    { title: 'Barra di ricerca: frosted blur consolidato', desc: 'Rimosse regole duplicate e creato un unico blocco `.search-container .search-wrapper` con `backdrop-filter: blur(25px)` e compatibilità `-webkit-backdrop-filter`.' },
                    { title: 'Search UI refinements', desc: 'Ridotta altezza barra, icona di ricerca posizionata a destra, padding e font ottimizzati per layout compatto.' },
                    { title: 'Utility .sfocata', desc: 'Aggiunta la classe `.sfocata { filter: blur(5px); }` come utility richiesta per effetti locali.' },
                    { title: 'Fix CSS parsing & overlays', desc: 'Corrette regole CSS corrotte (`#loader-overlay`, `.language-confirm-overlay`) e rimosse proprietà non avvolte che rompevano il parsing.' },
                    { title: 'Event & interaction fixes', desc: 'Risolti conflitti di selettori e comportamento eventi (nav settimane non attivano radio per errore).'}
                ]
            },
            {
                version: 'v1.8',
                date: '18 MAGGIO 2026',
                latest: false,
                items: [
                    { title: 'Alert-style Theme Menu', desc: 'Convertito il menu cambio tema in overlay stile alert-card (`.theme-menu-card`) per coerenza visiva.' },
                    { title: 'Export: nuove modalità e formati', desc: 'Aggiunte modalità di esportazione `general`, `archive_current`, `archive_all` e formati `TXT` e `CSV` con logica client-side in `exportData(format)`.' },
                    { title: 'Export Modal restyling', desc: 'Rifatto il modale di esportazione come `system-alert-card export-card` con stile frosted glass e azioni dedicate.' },
                    { title: 'Archivio: navigazione settimana', desc: 'Visualizzazione settimana attiva con due freccette (▲/▼) e funzione `changeExportWeek(dir, evt)` che usa `evt.stopPropagation()` e seleziona correttamente l\'opzione radio.' },
                    { title: 'Barra di ricerca: frosted blur consolidato', desc: 'Rimosse regole duplicate e creato un unico blocco `.search-container .search-wrapper` con `backdrop-filter: blur(25px)` e compatibilità `-webkit-backdrop-filter`.' },
                    { title: 'Search UI refinements', desc: 'Ridotta altezza barra, icona di ricerca posizionata a destra, padding e font ottimizzati per layout compatto.' },
                    { title: 'Utility .sfocata', desc: 'Aggiunta la classe `.sfocata { filter: blur(5px); }` come utility richiesta per effetti locali.' },
                    { title: 'Fix CSS parsing & overlays', desc: 'Corrette regole CSS corrotte (`#loader-overlay`, `.language-confirm-overlay`) e rimosse proprietà non avvolte che rompevano il parsing.' },
                    { title: 'Event & interaction fixes', desc: 'Risolti conflitti di selettori e comportamento eventi (nav settimane non attivano radio per errore).'}
                ]
            },
            {
                version: 'v1.7',
                date: '9 MAGGIO 2026',
                latest: false,
                items: [
                    { title: 'Completo Redesign Totale', desc: 'Rinnovato l\'intero design dell\'applicazione con un approccio moderno e più intuitivo.' },
                    { title: 'UI Cleanup - Desktop Theme Toggle Removed', desc: 'Eliminato il pulsante toggle tema automatico dal desktop per un\'interfaccia più pulita. L\'accesso al menu tema rimane disponibile dal menu mobile.' },
                    { title: 'Export Modal Redesign', desc: 'Implementato sistema dinamico per il modale di esportazione - ora nascosto di default e visibile solo al click del pulsante "Esporta".' },
                    { title: 'Export Button Restoration', desc: 'Ripristinato pulsante "Esporta" desktop nella sezione "Classifica Generale" con icona 📊 per accesso rapido alle opzioni di esportazione.' },
                    { title: 'Class-Based Toggle System', desc: 'Migrazione dalla manipolazione diretta dello stile inline a sistema di classList per il toggle dell\'overlay - migliore gestione CSS e performance.' },
                    { title: 'Modal Overlay Styling', desc: 'Aggiunto stile fullscreen con backdrop blur per il modale di esportazione con transizioni fluide e posizionamento centrato.' },
                    { title: 'Responsive Design Enhancements', desc: 'Miglioramenti significativi alla responsività dell\'applicazione per garantire un\'esperienza utente ottimale su tutti i dispositivi.' },
                    { title: 'Codebase Optimization', desc: 'Refactoring del codice per migliorare la manutenibilità e le performance complessive dell\'applicazione.' },
                    { title: 'Bug Fixes', desc: 'Risolti vari bug minori segnalati dagli utenti per migliorare la stabilità dell\'applicazione.' },
                    { title: 'Cambio UI minimo', desc: 'Piccoli cambiamenti estetici per migliorare l\'esperienza utente.' },
                    { title: 'Changelog Dinamico', desc: 'Introdotto sistema di changelog dinamico per documentare tutte le modifiche in modo chiaro e accessibile.' },
                    { title: 'Supporto multi-lingua per il changelog', desc: 'Aggiunto il supporto multilingua con descrizioni dettagliate per ogni versione.' },
                    { title: 'Interfaccia tradotta', desc: 'Supporto traduzione per l\'intera interfaccia, compresi modali e notifiche.' }
                ]
            },
            {
                version: 'v1.6',
                date: '25 APRILE 2026',
                items: [
                    { title: 'Complete Authentication System', desc: 'Implementato account.html con Supabase Auth integrato.' },
                    { title: 'User Registration & Profile Management', desc: 'Nuovo sistema di registrazione con profili utente persistenti su Supabase Cloud.' },
                    { title: 'Role-Based Access Control', desc: 'Sistema di ruoli con distinzione Owner vs Utenti Standard.' },
                    { title: 'Password Recovery Protocol', desc: 'Flusso di recupero password a due step con verifiche di sicurezza.' },
                    { title: 'Session Protection', desc: 'Protezione della pagina index.html con controllo sessione automatico e reindirizzamento a login.' },
                    { title: 'Profile Editing', desc: 'Interfaccia completa per la modifica profilo.' },
                    { title: 'Manager Request System', desc: 'Sistema di richiesta status manager con email automatica.' },
                    { title: 'Theme Persistence', desc: 'Integrazione con theme-engine.js per sincronizzazione tema tra tutte le pagine.' },
                    { title: 'RLS Security Policies', desc: 'Implementate Row Level Security policies in Supabase per proteggere i dati utente.' },
                    { title: 'Ultimate Metadata Mapper', desc: 'Introdotto album-mapper.js con database centralizzato per artisti e album.' },
                    { title: 'CronoSync Engine', desc: 'Implementato ranking-engine.js per la formattazione automatica dei dati in classifica.' },
                    { title: 'Triple-Fallback System', desc: 'Sistema di recupero metadati a tre livelli per garantire la coerenza visiva.' },
                    { title: 'Real-time Injection', desc: 'Sincronizzazione automatica dei dati ogni 30 secondi con feedback visivo.' }
                ]
            },
            {
                version: 'v1.5',
                date: '11 APRILE 2026',
                items: [
                    { title: 'Persistent Theme Engine', desc: 'Implementato theme-engine.js per la gestione universale del tema.' },
                    { title: 'Navy Blue Contrast', desc: 'Ottimizzazione leggibilità Light Mode per i dati numerici e i punti.' },
                    { title: 'Advanced Exporting', desc: 'Modulo di esportazione potenziato con selettori di colonna dinamici.' }
                ]
            },
            {
                version: 'v1.4',
                date: '05 APRILE 2026',
                items: [
                    { title: 'Protocollo Il Notaio', desc: 'Sistema di controllo coerenza per le oscillazioni drastiche in classifica.' },
                    { title: 'Performance Update', desc: 'Ottimizzazione del caricamento dei dati da Supabase Cloud.' }
                ]
            },
            {
                version: 'v1.3',
                date: '28 MARZO 2026',
                items: [
                    { title: 'Rebranding', desc: 'Transizione ufficiale del brand in CRONOSOUND.' },
                    { title: 'Mobile First', desc: 'Integrazione Hamburger Menu fullscreen per dispositivi piccoli.' }
                ]
            },
            {
                version: 'v1.2',
                date: '15 MARZO 2026',
                items: [
                    { title: 'Archivio Storico', desc: 'Sistema di consultazione delle settimane precedenti.' },
                    { title: 'Design Refresh', desc: 'Passaggio allo stile Glassmorphism con Plus Jakarta Sans.' }
                ]
            },
            {
                version: 'v1.0',
                date: '01 MARZO 2026',
                items: [
                    { title: 'Genesis', desc: 'Lancio della prima versione alpha del sistema.' }
                ]
            }
        ],
        en: [
            {
                version: 'v1.9.1',
                date: 'MAY 26, 2026',
                latest: true,
                items: [
                    { title: 'Update Tab Access', desc: 'Added Update tab access from the mobile hamburger menu for owners.' },
                    { title: 'Sticky Compact Header', desc: 'Introduced a reduced sticky header with centered title and scroll-aware transitions for mobile and desktop.' },
                    { title: 'iOS-style Light Theme', desc: 'Refined the light-mode interface with glassy blur surfaces and soft contrast for a modern look.' },
                    { title: 'Improved Mobile Submenu', desc: 'Reorganized the mobile submenu for clearer navigation and faster access to utilities.' },
                    { title: 'Admin Backup & Reset', desc: 'Added weekly/manual backup utilities and password-protected database reset for safer admin workflows.' },
                    { title: 'Changelog Version Logging', desc: 'Updated the changelog with a new v1.9.5 entry to document the latest releases clearly.' }
                ]
            },
            {
                version: 'v1.9',
                date: 'MAY 25, 2026',
                latest: false,
                items: [
                    { title: 'Album Owner Management', desc: 'Added album tab with create/edit/delete album flows and song-to-album assignment.' },
                    { title: 'Album Artist Field', desc: 'Added artist field to album creation/edit UI for better album metadata.' },
                    { title: 'Album/Artist search', desc: 'Global search now filters by album name and associated album artist.' },
                    { title: 'Album cover fallback', desc: 'Songs without their own cover now fallback to the associated album cover.' },
                    { title: 'Alert-style Theme Menu', desc: 'Converted theme menu to alert-card overlay (`.theme-menu-card`) for visual consistency.' },
                    { title: 'Export: new modes & formats', desc: 'Added export modes `general`, `archive_current`, `archive_all` and formats `TXT`/`CSV` with client-side `exportData(format)` logic.' },
                    { title: 'Export Modal restyling', desc: 'Reworked export modal into `system-alert-card export-card` with frosted glass styling and dedicated actions.' },
                    { title: 'Archive week navigation', desc: 'Added week display with up/down arrows and `changeExportWeek(dir, evt)` using `evt.stopPropagation()` and correct radio selection.' },
                    { title: 'Search bar: consolidated frosted blur', desc: 'Removed duplicate rules and added single `.search-container .search-wrapper` block with `backdrop-filter: blur(25px)` and `-webkit-backdrop-filter`.' },
                    { title: 'Search UI refinements', desc: 'Thinner search bar, search icon aligned to the right, adjusted padding and font-size for compact layout.' },
                    { title: 'Utility .sfocata', desc: 'Added `.sfocata { filter: blur(5px); }` utility class.' },
                    { title: 'CSS parsing & overlay fixes', desc: 'Fixed broken CSS blocks (`#loader-overlay`, `.language-confirm-overlay`) and removed stray properties that broke parsing.' },
                    { title: 'Interaction fixes', desc: 'Fixed event handling so week nav buttons don\'t unintentionally toggle radios; improved selector overrides and responsive behavior.' }
                ]
            },
            {
                version: 'v1.8',
                date: 'MAY 18, 2026',
                latest: false,
                items: [
                    { title: 'Alert-style Theme Menu', desc: 'Converted theme menu to alert-card overlay (`.theme-menu-card`) for visual consistency.' },
                    { title: 'Export: new modes & formats', desc: 'Added export modes `general`, `archive_current`, `archive_all` and formats `TXT`/`CSV` with client-side `exportData(format)` logic.' },
                    { title: 'Export Modal restyling', desc: 'Reworked export modal into `system-alert-card export-card` with frosted glass styling and dedicated actions.' },
                    { title: 'Archive week navigation', desc: 'Added week display with up/down arrows and `changeExportWeek(dir, evt)` using `evt.stopPropagation()` and correct radio selection.' },
                    { title: 'Search bar: consolidated frosted blur', desc: 'Removed duplicate rules and added single `.search-container .search-wrapper` block with `backdrop-filter: blur(25px)` and `-webkit-backdrop-filter`.' },
                    { title: 'Search UI refinements', desc: 'Thinner search bar, search icon aligned to the right, adjusted padding and font-size for compact layout.' },
                    { title: 'Utility .sfocata', desc: 'Added `.sfocata { filter: blur(5px); }` utility class.' },
                    { title: 'CSS parsing & overlay fixes', desc: 'Fixed broken CSS blocks (`#loader-overlay`, `.language-confirm-overlay`) and removed stray properties that broke parsing.' },
                    { title: 'Interaction fixes', desc: 'Fixed event handling so week nav buttons don\'t unintentionally toggle radios; improved selector overrides and responsive behavior.' }
                ]
            },
            {
                version: 'v1.7',
                date: 'MAY 9, 2026',
                latest: false,
                items: [
                    { title: 'Complete Total Redesign', desc: 'Completely redesigned the application with a modern and intuitive approach.' },
                    { title: 'UI Cleanup - Desktop Theme Toggle Removed', desc: 'Removed automatic theme toggle button from desktop for a cleaner interface. Theme menu access remains available from mobile menu.' },
                    { title: 'Export Modal Redesign', desc: 'Implemented dynamic system for export modal - now hidden by default and visible only on "Export" button click.' },
                    { title: 'Export Button Restoration', desc: 'Restored "Export" button on desktop in "General Ranking" section with 📊 icon for quick access to export options.' },
                    { title: 'Class-Based Toggle System', desc: 'Migration from direct inline style manipulation to classList system for overlay toggle - better CSS management and performance.' },
                    { title: 'Modal Overlay Styling', desc: 'Added fullscreen style with backdrop blur for export modal with smooth transitions and centered positioning.' },
                    { title: 'Responsive Design Enhancements', desc: 'Significant improvements to application responsiveness for optimal user experience on all devices.' },
                    { title: 'Codebase Optimization', desc: 'Code refactoring to improve maintainability and overall application performance.' },
                    { title: 'Bug Fixes', desc: 'Fixed various minor bugs reported by users to improve application stability.' },
                    { title: 'Minimal UI Changes', desc: 'Small aesthetic changes to improve user experience.' },
                    { title: 'Dynamic Changelog', desc: 'Introduced dynamic changelog system to document all changes clearly and accessibly.' },
                    { title: 'Multi-language changelog support', desc: 'Added multi-language support to the changelog with detailed descriptions for each version.' },
                    { title: 'Interface translation support', desc: 'Full interface translation support across the platform, including modals and notifications.' }
                ]
            },
            {
                version: 'v1.6',
                date: 'APRIL 25, 2026',
                items: [
                    { title: 'Complete Authentication System', desc: 'Implemented account.html with integrated Supabase Auth.' },
                    { title: 'User Registration & Profile Management', desc: 'New registration system with persistent user profiles on Supabase Cloud.' },
                    { title: 'Role-Based Access Control', desc: 'Role system with distinction between Owner and Standard Users.' },
                    { title: 'Password Recovery Protocol', desc: 'Two-step password recovery flow with security checks.' },
                    { title: 'Session Protection', desc: 'Protection of index.html page with automatic session check and login redirection.' },
                    { title: 'Profile Editing', desc: 'Complete interface for profile modification.' },
                    { title: 'Manager Request System', desc: 'Manager status request system with automatic email.' },
                    { title: 'Theme Persistence', desc: 'Integration with theme-engine.js for theme synchronization across all pages.' },
                    { title: 'RLS Security Policies', desc: 'Implemented Row Level Security policies in Supabase to protect user data.' },
                    { title: 'Ultimate Metadata Mapper', desc: 'Introduced album-mapper.js with centralized database for artists and albums.' },
                    { title: 'CronoSync Engine', desc: 'Implemented ranking-engine.js for automatic formatting of ranking data.' },
                    { title: 'Triple-Fallback System', desc: 'Three-level metadata recovery system to ensure visual consistency.' },
                    { title: 'Real-time Injection', desc: 'Automatic data synchronization every 30 seconds with visual feedback.' }
                ]
            },
            {
                version: 'v1.5',
                date: 'APRIL 11, 2026',
                items: [
                    { title: 'Persistent Theme Engine', desc: 'Implemented theme-engine.js for universal theme management.' },
                    { title: 'Navy Blue Contrast', desc: 'Optimized Light Mode readability for numeric data and points.' },
                    { title: 'Advanced Exporting', desc: 'Enhanced export module with dynamic column selectors.' }
                ]
            },
            {
                version: 'v1.4',
                date: 'APRIL 5, 2026',
                items: [
                    { title: 'Notary Protocol', desc: 'Coherence control system for drastic ranking fluctuations.' },
                    { title: 'Performance Update', desc: 'Optimization of data loading from Supabase Cloud.' }
                ]
            },
            {
                version: 'v1.3',
                date: 'MARCH 28, 2026',
                items: [
                    { title: 'Rebranding', desc: 'Official brand transition to CRONOSOUND.' },
                    { title: 'Mobile First', desc: 'Integration of fullscreen Hamburger Menu for small devices.' }
                ]
            },
            {
                version: 'v1.2',
                date: 'MARCH 15, 2026',
                items: [
                    { title: 'Historical Archive', desc: 'System for consulting previous weeks.' },
                    { title: 'Design Refresh', desc: 'Transition to Glassmorphism style with Plus Jakarta Sans.' }
                ]
            },
            {
                version: 'v1.0',
                date: 'MARCH 1, 2026',
                items: [
                    { title: 'Genesis', desc: 'Launch of the first alpha version of the system.' }
                ]
            }
        ]
    };

    // Spanish changelog (localized)
    changelogs.es = [
        {
            version: 'v1.9.1',
            date: '26 MAYO 2026',
            latest: true,
            items: [
                { title: 'Acceso al tab Update', desc: 'Añadido el enlace al tab Update desde el menú móvil hamburger para los dueños.' },
                { title: 'Header sticky compacto', desc: 'Introducido header sticky reducido con título centrado y transiciones de scroll para móvil y escritorio.' },
                { title: 'Tema claro estilo iOS', desc: 'Refinado el aspecto light mode con superficies glassy, blur y contraste suave para un look moderno.' },
                { title: 'Submenú móvil mejorado', desc: 'Reorganizado el submenú móvil para una navegación más clara y acceso rápido a las utilidades.' },
                { title: 'Backup y reset admin', desc: 'Añadidas utilidades de backup semanal/manual y reset de base de datos protegido por contraseña.' },
                { title: 'Registro de changelog y versiones', desc: 'Actualizado el changelog con la nueva entrada v1.9.5 para documentar los cambios más recientes.' }
            ]
        }
    ].concat(changelogs.en.slice(1));

    // Function to generate changelog HTML
    window.generateChangelog = function() {
        const lang = window.currentLanguage || DEFAULT_LANGUAGE;
        const logs = changelogs[lang] || changelogs[DEFAULT_LANGUAGE];
        
        return logs.map(entry => `
            <div class="log-entry">
                <div class="log-header">
                    <span class="version-tag ${entry.latest ? 'latest' : ''}">${entry.version}${entry.latest ? ' - LATEST' : ''}</span>
                    <span class="log-date">${entry.date}</span>
                </div>
                <ul>
                    ${entry.items.map(item => `<li><b>${item.title}:</b> ${item.desc}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    };

    // Make changelog available globally
})();
