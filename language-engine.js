/**
 * CRONOSOUND LANGUAGE ENGINE 3
 * Runtime i18n for static pages, injected fragments and accessible UI labels.
 * Languages: Italiano (it), English (en), Español (es)
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
            'publish': 'Pubblica nel Cloud',
            'format_db': 'Formatta Database',
            'send': 'Invia',
            'logout': 'Logout',

            // Export Modal
            'export_options': 'OPZIONI ESPORTAZIONE',
            'position': 'Posizione (#1, #2...)',
            'total_points': 'Punti Totali',

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
            'rules': '⚖️ Regolamento & Protocolli',
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
            'publish': 'Publish to Cloud',
            'format_db': 'Format Database',
            'send': 'Send',
            'logout': 'Logout',

            // Export Modal
            'export_options': 'EXPORT OPTIONS',
            'position': 'Position (#1, #2...)',
            'total_points': 'Total Points',

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
            'rules': '⚖️ Rules & Protocols',
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

    Object.assign(translations.it, {
        professional_cloud_os: 'Sistema cloud professionale', navigation: 'Navigazione', quick_actions: 'Azioni rapide', settings: 'Impostazioni',
        open_menu: 'Apri menu', user_profile: 'Profilo utente', return_to_ranking: 'Torna alla classifica generale',
        edit: 'Modifica', news: 'Notizie', add: 'Aggiungi', search: 'Cerca', search_songs_albums: 'Cerca per canzone, artista o album…',
        export_ranking: 'Esporta classifica', weekly_archive: 'Archivio settimanale', previous_week: 'Settimana precedente', next_week: 'Settimana successiva',
        sort_ranking: 'Ordina classifica', sort_description: 'Scegli come visualizzare la classifica.', by_points: 'Punti', by_name: 'Nome', by_series: 'Serie',
        backup: 'Backup', emergency_backup: 'Backup di emergenza', general_ranking_short: 'Classifica', system_menu: 'Menu sistema',
        theme_menu_title: 'Scegli tema', theme_menu_description: 'Scegli una palette coerente con il nuovo design CronoSound.',
        archive_current: 'Archivio: settimana', full_archive: 'Archivio completo', navigate: 'naviga', export_txt: 'Esporta TXT', export_csv: 'Esporta CSV',
        backup_summary: 'Backup salvati: {count}. Ultimo backup fino alla settimana {week}.', backup_none: 'Nessun backup salvato. Usa Backup per creare un salvataggio di emergenza.',
        backup_empty: 'Nessun salvataggio di emergenza creato.', backup_created_at: 'Creato:', backup_until_week: 'Fino alla settimana:', backup_created: 'Backup di emergenza creato e scaricato.',
        theme_dark: 'Dark', theme_dark_desc: 'Notte classica', theme_light: 'Light', theme_light_desc: 'Chiaro e pulito',
        theme_red: 'Red', theme_red_desc: 'Energia rossa', theme_glass: 'Glass', theme_glass_desc: 'Vetro e luce',
        theme_blue: 'Blue', theme_blue_desc: 'Profondità blu', theme_gold: 'Gold', theme_gold_desc: 'Calore dorato',
        settings_universal: 'Impostazioni universali', settings_title: 'Personalizza CronoSound', settings_intro: 'Le modifiche vengono applicate immediatamente a tutto il sito.',
        settings_typography: 'Testo e leggibilità', settings_typography_desc: 'Regola peso, dimensione e contrasto.', settings_bold: 'Testo in grassetto', settings_bold_desc: 'Rende più marcati tutti i testi.', settings_text_size: 'Dimensione testo', settings_contrast: 'Contrasto elevato', settings_contrast_desc: 'Aumenta separazione e leggibilità.', settings_large_targets: 'Controlli più grandi', settings_large_targets_desc: 'Aumenta l’area di pulsanti e controlli.',
        settings_appearance: 'Frost e superfici', settings_appearance_desc: 'Controlla trasparenza, profondità e sfondo.', settings_ambient: 'Luci ambientali', settings_ambient_desc: 'Mostra le sfumature animate dello sfondo.', settings_shadows: 'Ombre e profondità', settings_shadows_desc: 'Mantiene sollevati pannelli e pulsanti.', settings_compact: 'Layout compatto', settings_compact_desc: 'Riduce spazi e padding delle schede.',
        settings_custom_theme: 'Tema personalizzato', settings_custom_theme_desc: 'Crea una palette universale scegliendo quattro colori.', settings_enable_custom_theme: 'Usa palette personalizzata', settings_color_background: 'Sfondo', settings_color_primary: 'Primario', settings_color_secondary: 'Secondario', settings_color_elements: 'Elementi e testo',
        settings_motion: 'Movimento e navigazione', settings_motion_desc: 'Semplifica animazioni, header e tab bar.', settings_animations: 'Animazioni', settings_animations_desc: 'Transizioni, aperture e movimenti dell’interfaccia.', settings_header_collapse: 'Animazione header durante lo scroll', settings_header_collapse_desc: 'Compatta l’header mentre scorri.', settings_simple_mode: 'Modalità semplice', settings_simple_mode_desc: 'Tab bar statica e ricerca sempre visibile sopra la barra.', settings_reset: 'Ripristina impostazioni', settings_reset_confirm: 'Vuoi ripristinare tutte le impostazioni predefinite?',
        language_engine_name: 'Language Engine 3'
    });
    Object.assign(translations.en, {
        professional_cloud_os: 'Professional Cloud OS', navigation: 'Navigation', quick_actions: 'Quick actions', settings: 'Settings',
        open_menu: 'Open menu', user_profile: 'User profile', return_to_ranking: 'Return to general ranking',
        edit: 'Edit', news: 'News', add: 'Add', search: 'Search', search_songs_albums: 'Search by song, artist or album…',
        export_ranking: 'Export ranking', weekly_archive: 'Weekly archive', previous_week: 'Previous week', next_week: 'Next week',
        sort_ranking: 'Sort ranking', sort_description: 'Choose how to display the ranking.', by_points: 'Points', by_name: 'Name', by_series: 'Series',
        backup: 'Backup', emergency_backup: 'Emergency backup', general_ranking_short: 'Ranking', system_menu: 'System menu',
        theme_menu_title: 'Choose theme', theme_menu_description: 'Choose a palette designed for the new CronoSound interface.',
        archive_current: 'Archive: week', full_archive: 'Full archive', navigate: 'navigate', export_txt: 'Export TXT', export_csv: 'Export CSV',
        backup_summary: 'Saved backups: {count}. Latest backup includes week {week}.', backup_none: 'No backups saved yet. Use Backup to create an emergency copy.',
        backup_empty: 'No emergency backup has been created.', backup_created_at: 'Created:', backup_until_week: 'Through week:', backup_created: 'Emergency backup created and downloaded.',
        theme_dark: 'Dark', theme_dark_desc: 'Classic night', theme_light: 'Light', theme_light_desc: 'Bright and clean',
        theme_red: 'Red', theme_red_desc: 'Red energy', theme_glass: 'Glass', theme_glass_desc: 'Glass and light',
        theme_blue: 'Blue', theme_blue_desc: 'Blue depth', theme_gold: 'Gold', theme_gold_desc: 'Golden warmth',
        settings_universal: 'Universal settings', settings_title: 'Customize CronoSound', settings_intro: 'Changes are applied instantly across the entire site.',
        settings_typography: 'Text and readability', settings_typography_desc: 'Adjust weight, size and contrast.', settings_bold: 'Bold text', settings_bold_desc: 'Makes all text more pronounced.', settings_text_size: 'Text size', settings_contrast: 'High contrast', settings_contrast_desc: 'Improves separation and readability.', settings_large_targets: 'Larger controls', settings_large_targets_desc: 'Increases buttons and control hit areas.',
        settings_appearance: 'Frost and surfaces', settings_appearance_desc: 'Control transparency, depth and background.', settings_ambient: 'Ambient lights', settings_ambient_desc: 'Show animated background gradients.', settings_shadows: 'Shadows and depth', settings_shadows_desc: 'Keeps panels and buttons elevated.', settings_compact: 'Compact layout', settings_compact_desc: 'Reduces card spacing and padding.',
        settings_custom_theme: 'Custom theme', settings_custom_theme_desc: 'Build a universal palette with four colors.', settings_enable_custom_theme: 'Use custom palette', settings_color_background: 'Background', settings_color_primary: 'Primary', settings_color_secondary: 'Secondary', settings_color_elements: 'Elements and text',
        settings_motion: 'Motion and navigation', settings_motion_desc: 'Simplify animations, header and tab bar.', settings_animations: 'Animations', settings_animations_desc: 'Interface transitions, openings and movement.', settings_header_collapse: 'Header scroll animation', settings_header_collapse_desc: 'Collapses the header while scrolling.', settings_simple_mode: 'Simple mode', settings_simple_mode_desc: 'Static tab bar with search always visible above it.', settings_reset: 'Reset settings', settings_reset_confirm: 'Reset every setting to its default value?',
        language_engine_name: 'Language Engine 3'
    });
    Object.assign(translations.es, {
        professional_cloud_os: 'Sistema cloud profesional', navigation: 'Navegación', quick_actions: 'Acciones rápidas', settings: 'Ajustes',
        open_menu: 'Abrir menú', user_profile: 'Perfil de usuario', return_to_ranking: 'Volver a la clasificación general',
        edit: 'Editar', news: 'Noticias', add: 'Añadir', search: 'Buscar', search_songs_albums: 'Buscar por canción, artista o álbum…',
        export_ranking: 'Exportar clasificación', weekly_archive: 'Archivo semanal', previous_week: 'Semana anterior', next_week: 'Semana siguiente',
        sort_ranking: 'Ordenar clasificación', sort_description: 'Elige cómo mostrar la clasificación.', by_points: 'Puntos', by_name: 'Nombre', by_series: 'Serie',
        backup: 'Copia de seguridad', emergency_backup: 'Copia de emergencia', general_ranking_short: 'Clasificación', system_menu: 'Menú del sistema',
        theme_menu_title: 'Elegir tema', theme_menu_description: 'Elige una paleta diseñada para la nueva interfaz de CronoSound.',
        archive_current: 'Archivo: semana', full_archive: 'Archivo completo', navigate: 'navegar', export_txt: 'Exportar TXT', export_csv: 'Exportar CSV',
        backup_summary: 'Copias guardadas: {count}. La última incluye la semana {week}.', backup_none: 'Aún no hay copias. Usa Copia de seguridad para crear una copia de emergencia.',
        backup_empty: 'No se ha creado ninguna copia de emergencia.', backup_created_at: 'Creada:', backup_until_week: 'Hasta la semana:', backup_created: 'Copia de emergencia creada y descargada.',
        theme_dark: 'Dark', theme_dark_desc: 'Noche clásica', theme_light: 'Light', theme_light_desc: 'Claro y limpio',
        theme_red: 'Red', theme_red_desc: 'Energía roja', theme_glass: 'Glass', theme_glass_desc: 'Cristal y luz',
        theme_blue: 'Blue', theme_blue_desc: 'Profundidad azul', theme_gold: 'Gold', theme_gold_desc: 'Calidez dorada',
        settings_universal: 'Ajustes universales', settings_title: 'Personaliza CronoSound', settings_intro: 'Los cambios se aplican inmediatamente en todo el sitio.',
        settings_typography: 'Texto y legibilidad', settings_typography_desc: 'Ajusta peso, tamaño y contraste.', settings_bold: 'Texto en negrita', settings_bold_desc: 'Hace que todos los textos sean más marcados.', settings_text_size: 'Tamaño del texto', settings_contrast: 'Contraste alto', settings_contrast_desc: 'Mejora la separación y la legibilidad.', settings_large_targets: 'Controles más grandes', settings_large_targets_desc: 'Aumenta el área de botones y controles.',
        settings_appearance: 'Frost y superficies', settings_appearance_desc: 'Controla transparencia, profundidad y fondo.', settings_ambient: 'Luces ambientales', settings_ambient_desc: 'Muestra los degradados animados del fondo.', settings_shadows: 'Sombras y profundidad', settings_shadows_desc: 'Mantiene elevados paneles y botones.', settings_compact: 'Diseño compacto', settings_compact_desc: 'Reduce espacios y relleno de las tarjetas.',
        settings_custom_theme: 'Tema personalizado', settings_custom_theme_desc: 'Crea una paleta universal con cuatro colores.', settings_enable_custom_theme: 'Usar paleta personalizada', settings_color_background: 'Fondo', settings_color_primary: 'Primario', settings_color_secondary: 'Secundario', settings_color_elements: 'Elementos y texto',
        settings_motion: 'Movimiento y navegación', settings_motion_desc: 'Simplifica animaciones, header y barra de pestañas.', settings_animations: 'Animaciones', settings_animations_desc: 'Transiciones, aperturas y movimientos de la interfaz.', settings_header_collapse: 'Animación del header al desplazarse', settings_header_collapse_desc: 'Compacta el header durante el desplazamiento.', settings_simple_mode: 'Modo simple', settings_simple_mode_desc: 'Barra estática y búsqueda siempre visible encima.', settings_reset: 'Restablecer ajustes', settings_reset_confirm: '¿Restablecer todos los ajustes predeterminados?',
        language_engine_name: 'Language Engine 3'
    });

    const ENGINE_VERSION = 3;
    const STORAGE_KEY = 'cronosound-language';
    const SUPPORTED_LANGUAGES = Object.freeze(['it', 'en', 'es']);
    const isSupported = (lang) => SUPPORTED_LANGUAGES.includes(lang);
    const readSavedLanguage = () => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return isSupported(saved) ? saved : DEFAULT_LANGUAGE;
        } catch (_) {
            return DEFAULT_LANGUAGE;
        }
    };
    const interpolate = (value, params = {}) => String(value).replace(/\{(\w+)\}/g, (match, name) => (
        Object.prototype.hasOwnProperty.call(params, name) ? params[name] : match
    ));

    window.currentLanguage = readSavedLanguage();
    document.documentElement.lang = window.currentLanguage;

    window.t = function(key, params) {
        const lang = isSupported(window.currentLanguage) ? window.currentLanguage : DEFAULT_LANGUAGE;
        const value = translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? translations.en?.[key] ?? key;
        return interpolate(value, params);
    };

    const translateElement = (element) => {
        if (!(element instanceof Element)) return;
        const textKey = element.dataset.i18n;
        if (textKey) {
            const value = window.t(textKey);
            if (element.matches('input, textarea')) {
                if (element.placeholder !== value) element.placeholder = value;
            } else if (element.textContent !== value) {
                element.textContent = value;
            }
        }
        const bindings = [
            ['i18nPlaceholder', 'placeholder'], ['i18nTitle', 'title'], ['i18nAriaLabel', 'aria-label'], ['i18nAlt', 'alt']
        ];
        bindings.forEach(([datasetKey, attribute]) => {
            const key = element.dataset[datasetKey];
            if (key) element.setAttribute(attribute, window.t(key));
        });
    };

    window.applyTranslations = function(root = document) {
        if (root instanceof Element) translateElement(root);
        root.querySelectorAll?.('[data-i18n], [data-i18n-placeholder], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]')
            .forEach(translateElement);
        document.documentElement.lang = window.currentLanguage;
    };

    const updateLanguageSelection = (lang) => {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay || !isSupported(lang)) return;
        overlay.dataset.selected = lang;
        const label = document.getElementById('language-confirm-selected');
        if (label) label.textContent = `${window.t('language_confirm_text')} ${window.t(`language_option_${lang}`)}`;
        overlay.querySelectorAll('.language-option').forEach((button) => {
            button.classList.toggle('selected', button.dataset.lang === lang);
        });
    };

    window.changeLanguage = function(lang) {
        const nextLanguage = isSupported(lang)
            ? lang
            : SUPPORTED_LANGUAGES[(SUPPORTED_LANGUAGES.indexOf(window.currentLanguage) + 1) % SUPPORTED_LANGUAGES.length];
        window.currentLanguage = nextLanguage;
        try { localStorage.setItem(STORAGE_KEY, nextLanguage); } catch (_) {}
        window.applyTranslations();
        updateLanguageSelection(nextLanguage);
        document.dispatchEvent(new CustomEvent('cronosound:languagechange', { detail: { language: nextLanguage } }));
        return nextLanguage;
    };

    window.showLanguageConfirm = function() {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay) return;
        updateLanguageSelection(window.currentLanguage);
        overlay.classList.add('active');
    };
    window.setLanguageSelection = updateLanguageSelection;
    window.confirmLanguageChange = function() {
        const overlay = document.getElementById('language-confirm-overlay');
        if (!overlay) return;
        const selected = overlay.dataset.selected || window.currentLanguage;
        overlay.classList.remove('active');
        window.changeLanguage(selected);
    };
    window.closeLanguageConfirm = function() {
        document.getElementById('language-confirm-overlay')?.classList.remove('active');
    };
    window.cycleLanguage = window.showLanguageConfirm;

    window.showSystemAlert = function(title, message, okText, cancelText, onConfirm) {
        const overlay = document.getElementById('system-alert-overlay');
        if (!overlay) return;
        overlay.querySelector('#system-alert-title').textContent = title || '';
        overlay.querySelector('#system-alert-message').textContent = message || '';
        const okButton = overlay.querySelector('.system-alert-btn.ok');
        const cancelButton = overlay.querySelector('.system-alert-btn.cancel');
        okButton.textContent = okText || window.t('ok');
        cancelButton.textContent = cancelText || window.t('cancel');
        cancelButton.style.display = cancelText ? 'inline-flex' : 'none';
        window._systemAlertCallback = typeof onConfirm === 'function' ? onConfirm : null;
        overlay.classList.add('active');
    };
    window.confirmSystemAlert = function() {
        const callback = window._systemAlertCallback;
        window.hideSystemAlert();
        if (callback) callback();
    };
    window.hideSystemAlert = function() {
        document.getElementById('system-alert-overlay')?.classList.remove('active');
        window._systemAlertCallback = null;
    };

    const injectEngineUI = () => {
        if (!document.getElementById('language-confirm-overlay')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="language-confirm-overlay" class="language-confirm-overlay">
                    <div class="language-confirm-card">
                        <h3 data-i18n="language_confirm_title"></h3>
                        <p id="language-confirm-selected"></p>
                        <div class="language-confirm-options">
                            ${SUPPORTED_LANGUAGES.map((lang) => `<button class="language-option" data-lang="${lang}" onclick="window.setLanguageSelection('${lang}')" data-i18n="language_option_${lang}"></button>`).join('')}
                        </div>
                        <div class="language-confirm-actions">
                            <button class="confirm-btn cancel" onclick="window.closeLanguageConfirm()" data-i18n="cancel"></button>
                            <button class="confirm-btn ok" onclick="window.confirmLanguageChange()" data-i18n="ok"></button>
                        </div>
                    </div>
                </div>`);
        }
        if (!document.getElementById('system-alert-overlay')) {
            document.body.insertAdjacentHTML('beforeend', `
                <div id="system-alert-overlay" class="system-alert-overlay">
                    <div class="system-alert-card">
                        <h3 id="system-alert-title"></h3><p id="system-alert-message"></p>
                        <div class="system-alert-actions">
                            <button class="system-alert-btn cancel" onclick="window.hideSystemAlert()" data-i18n="cancel"></button>
                            <button class="system-alert-btn ok" onclick="window.confirmSystemAlert()" data-i18n="ok"></button>
                        </div>
                    </div>
                </div>`);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        injectEngineUI();
        window.applyTranslations();
        updateLanguageSelection(window.currentLanguage);
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE) window.applyTranslations(node);
            }));
        });
        observer.observe(document.body, { childList: true, subtree: true });
        window.LanguageEngine3.observer = observer;
    });

    window.translations = translations;
    window.LanguageEngine3 = {
        version: ENGINE_VERSION,
        languages: SUPPORTED_LANGUAGES,
        get language() { return window.currentLanguage; },
        translate: window.t,
        apply: window.applyTranslations,
        setLanguage: window.changeLanguage,
        observer: null
    };

})();
