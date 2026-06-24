/**
 * CRONOSOUND CHANGELOG DATA
 * Full history from v1.0 to v2.1 for IT, EN, ES.
 */
(function() {
    const DEFAULT_LANGUAGE = 'it';

    const changelogs = {
        it: [
            {
                version: 'v2.1', date: '25 GIUGNO 2026', latest: true,
                items: [
                    { title: 'Redesign Completo Temi', desc: 'Sistema di temi riadattato allo stile v2.0. Risolti definitivamente i problemi della v2.0.1.' },
                    { title: 'Performance Boost (+40%)', desc: 'Aumento significativo della fluidità, rimozione di 1200+ righe di CSS ridondante.' },
                    { title: 'Engine Evolution (v3)', desc: 'Nuovo Theme Engine 3 e Language Engine 3: traduzioni più precise e veloci.' },
                    { title: 'Animazioni UI Refined', desc: 'Ottimizzate le animazioni della tab bar e della ricerca (effetto "bolla" staccata).' },
                    { title: 'Smart Header Scrolling', desc: 'Header interattivo: i pulsanti si contraggono allo scroll verso il basso.' }
                ]
            },
            {
                version: 'v2.0.1', date: '24 GIUGNO 2026', latest: false,
                items: [
                    { title: 'Esperienza mobile ridisegnata', desc: 'Ottimizzate le card delle canzoni, l\'archivio e la disposizione dei contenuti per eliminare sbordamenti e migliorare respiro e leggibilità sugli schermi piccoli.' },
                    { title: 'Nuova tab bar mobile', desc: 'Introdotta una navigazione inferiore in stile iOS con tre sezioni principali e pulsante di ricerca circolare sempre adattivo.' },
                    { title: 'Ricerca con morph fluido', desc: 'La tab bar scivola lateralmente mentre la bolla di ricerca si espande verso sinistra trasformandosi nella barra; la chiusura riproduce il movimento al contrario.' },
                    { title: 'Superfici blur più leggibili', desc: 'Tab bar, bolla e barra di ricerca ora utilizzano fondi blu-notte quasi opachi con sfocatura profonda, eliminando l\'effetto eccessivamente trasparente.' },
                    { title: 'Interfaccia e sfondo', desc: 'Aggiunto lo sfondo nero dinamico con bagliori blu animati e uniformato il trattamento sfocato delle card.' },
                    { title: 'Classifica ed esportazione', desc: 'Spostato il comando Esporta accanto al titolo "Classifica Generale" e corretto il comportamento del logout.' }
                ]
            },
            {
                version: 'v2.0', date: '23 GIUGNO 2026', latest: false,
                items: [
                    { title: 'CronoFrost UI 1.0', desc: 'Interfaccia con tab bar centrale arrotondata e design moderno.' },
                    { title: 'Crono Account System 2.0', desc: 'Sistema account reingegnerizzato con login e profili persistenti.' },
                    { title: 'Ranking Engine 5', desc: 'Motore di classifica aggiornato per elaborazioni più rapide.' },
                    { title: 'Material You icons', desc: 'Introdotte icone Material You e pulsanti "pill".' },
                    { title: 'Mobile optimization', desc: 'Ottimizzazione mobile con larghezze dinamiche responsive.' },
                    { title: 'Blur e superfici glassy', desc: 'Effetti blur su header, menu e modali.' },
                    { title: 'Responsive dynamic width', desc: 'Layout adattivo in tempo reale.' },
                    { title: 'Contrast borders', desc: 'Rifinite le cornici per migliorare la leggibilità.' },
                    { title: 'Future theme support 2.1', desc: 'Preparazione per temi avanzati.' },
                    { title: 'Crono API roadmapped', desc: 'Pianificata la nuova API Crono.' }
                ]
            },
            {
                version: 'v1.9', date: '25 MAGGIO 2026', latest: false,
                items: [
                    { title: 'Gestione Album Owner', desc: 'Introdotto tab album con gestione completa canzoni.' },
                    { title: 'Artista Album', desc: 'Aggiunto campo artista per una migliore catalogazione.' },
                    { title: 'Ricerca per Album/Artista', desc: 'Filtri globali per album e artista.' },
                    { title: 'Fallback Copertina Album', desc: 'Gestione automatica copertine album.' },
                    { title: 'Alert-style Theme Menu', desc: 'Menu temi in stile alert-card.' },
                    { title: 'Export: nuove modalità', desc: 'Aggiunti formati TXT e CSV con logica client-side.' },
                    { title: 'Export Modal restyling', desc: 'Modale export con stile frosted glass.' },
                    { title: 'Archivio: navigazione settimana', desc: 'Navigazione veloce tra le settimane.' },
                    { title: 'Barra di ricerca: frosted blur', desc: 'Ottimizzazione blur della search bar.' },
                    { title: 'Utility .sfocata', desc: 'Classe utility per effetti blur locali.' },
                    { title: 'Fix CSS & overlays', desc: 'Correzioni parsing CSS e overlay.' }
                ]
            },
            {
                version: 'v1.8', date: '18 MAGGIO 2026', latest: false,
                items: [
                    { title: 'Alert-style Theme Menu', desc: 'Menu temi in stile alert-card.' },
                    { title: 'Export: nuove modalità', desc: 'Aggiunti formati TXT e CSV.' },
                    { title: 'Export Modal restyling', desc: 'Modale export frosted glass.' },
                    { title: 'Archivio: navigazione settimana', desc: 'Navigazione settimana migliorata.' },
                    { title: 'Barra di ricerca: frosted blur', desc: 'Consolidamento effetti blur.' },
                    { title: 'Search UI refinements', desc: 'UI search bar ottimizzata.' },
                    { title: 'Utility .sfocata', desc: 'Classe utility blur.' },
                    { title: 'Fix CSS & overlays', desc: 'Risoluzione bug overlay.' }
                ]
            },
            {
                version: 'v1.7', date: '9 MAGGIO 2026', latest: false,
                items: [
                    { title: 'Completo Redesign', desc: 'Rinnovamento totale dell\'UI.' },
                    { title: 'UI Cleanup', desc: 'Rimossa barra toggle desktop.' },
                    { title: 'Export Modal Redesign', desc: 'Modale esportazione dinamico.' },
                    { title: 'Export Button Restoration', desc: 'Ripristino pulsante esporta.' },
                    { title: 'Class-Based Toggle', desc: 'Migrazione a gestione classList.' },
                    { title: 'Modal Overlay Styling', desc: 'Stile fullscreen con blur.' },
                    { title: 'Responsive Design', desc: 'Ottimizzazioni per ogni dispositivo.' },
                    { title: 'Changelog Dinamico', desc: 'Sistema changelog multilingua.' }
                ]
            },
            {
                version: 'v1.6', date: '25 APRILE 2026', latest: false,
                items: [
                    { title: 'Auth System', desc: 'Supabase Auth integrato.' },
                    { title: 'User Profiles', desc: 'Profili persistenti.' },
                    { title: 'Access Control', desc: 'Ruoli Owner/Standard.' },
                    { title: 'Metadata Mapper', desc: 'Database centralizzato artisti/album.' },
                    { title: 'CronoSync Engine', desc: 'Sincronizzazione dati in tempo reale.' }
                ]
            },
            {
                version: 'v1.5', date: '11 APRILE 2026', latest: false,
                items: [
                    { title: 'Theme Engine', desc: 'Gestione temi universale.' },
                    { title: 'Navy Blue Contrast', desc: 'Ottimizzazione leggibilità Light Mode.' }
                ]
            },
            {
                version: 'v1.4', date: '05 APRILE 2026', latest: false,
                items: [
                    { title: 'Protocollo Notaio', desc: 'Controllo coerenza dati.' },
                    { title: 'Performance Update', desc: 'Caricamento dati ottimizzato.' }
                ]
            },
            {
                version: 'v1.3', date: '28 MARZO 2026', latest: false,
                items: [
                    { title: 'Rebranding', desc: 'Transizione a CRONOSOUND.' },
                    { title: 'Mobile First', desc: 'Hamburger Menu fullscreen.' }
                ]
            },
            {
                version: 'v1.2', date: '15 MARZO 2026', latest: false,
                items: [
                    { title: 'Archivio Storico', desc: 'Consultazione settimane precedenti.' },
                    { title: 'Design Refresh', desc: 'Stile Glassmorphism.' }
                ]
            },
            {
                version: 'v1.0', date: '01 MARZO 2026', latest: false,
                items: [
                    { title: 'Genesis', desc: 'Lancio prima versione alpha.' }
                ]
            }
        ],
        en: [
            {
                version: 'v2.1', date: 'JUNE 25, 2026', latest: true,
                items: [
                    { title: 'Complete Theme Redesign', desc: 'Themes system fully adapted to v2.0 style. Fixed v2.0.1 visual issues.' },
                    { title: 'Performance Boost (+40%)', desc: 'Significant fluidity increase, removed 1200+ lines of redundant CSS.' },
                    { title: 'Engine Evolution (v3)', desc: 'New Theme Engine 3 and Language Engine 3: faster, more precise.' },
                    { title: 'Refined UI Animations', desc: 'Optimized tab bar and search animations ("bubble" effect).' },
                    { title: 'Smart Header Scrolling', desc: 'Interactive header: buttons contract on scroll.' }
                ]
            },
            {
                version: 'v2.0.1', date: 'JUNE 24, 2026', latest: false,
                items: [
                    { title: 'Mobile Experience Redesigned', desc: 'Optimized song cards, archive, and content layout to eliminate overflow and improve breathing room and readability on small screens.' },
                    { title: 'New Mobile Tab Bar', desc: 'Introduced iOS-style bottom navigation with three main sections and always-adaptive circular search button.' },
                    { title: 'Fluid Search Morph', desc: 'Tab bar slides laterally while search bubble expands left, transforming into search bar; closing reverses the motion.' },
                    { title: 'More Readable Blur Surfaces', desc: 'Tab bar, bubble, and search bar now use near-opaque deep-blue night backgrounds with profound blur, eliminating excessive transparency effect.' },
                    { title: 'Interface & Background', desc: 'Added dynamic black background with animated blue glows and standardized blur treatment across cards.' },
                    { title: 'Ranking & Export', desc: 'Moved Export command next to "General Ranking" title and fixed logout behavior.' }
                ]
            },
            {
                version: 'v2.0', date: 'JUNE 23, 2026', latest: false,
                items: [
                    { title: 'CronoFrost UI 1.0', desc: 'Interface with rounded center tab bar and modern design.' },
                    { title: 'Crono Account System 2.0', desc: 'Rebuilt account system with persistent profiles.' },
                    { title: 'Ranking Engine 5', desc: 'Updated ranking engine for faster processing.' },
                    { title: 'Material You icons', desc: 'Added Material You icons and pill buttons.' },
                    { title: 'Mobile optimization', desc: 'Mobile optimization with responsive widths.' },
                    { title: 'Blurs & glassy surfaces', desc: 'Blur effects on headers and menus.' },
                    { title: 'Responsive dynamic width', desc: 'Real-time adaptive layout.' },
                    { title: 'Contrast borders', desc: 'Refined borders for better readability.' },
                    { title: 'Future theme support 2.1', desc: 'Preparation for advanced themes.' },
                    { title: 'Crono API roadmap', desc: 'Crono API planning.' }
                ]
            },
            {
                version: 'v1.9', date: 'MAY 25, 2026', latest: false,
                items: [
                    { title: 'Album Owner Management', desc: 'Album tab with full song management.' },
                    { title: 'Album Artist Field', desc: 'Artist field added for better metadata.' },
                    { title: 'Album/Artist Search', desc: 'Global search filters for album/artist.' },
                    { title: 'Album Cover Fallback', desc: 'Automatic cover management.' },
                    { title: 'Alert-style Theme Menu', desc: 'Alert-card style theme menu.' },
                    { title: 'Export: new modes', desc: 'TXT and CSV support.' },
                    { title: 'Export Modal Restyling', desc: 'Frosted glass export modal.' },
                    { title: 'Archive: Week Navigation', desc: 'Fast week-to-week navigation.' },
                    { title: 'Search Bar: Frosted Blur', desc: 'Search bar blur optimization.' },
                    { title: 'Utility .sfocata', desc: 'Blur utility class.' },
                    { title: 'Fix CSS & Overlays', desc: 'CSS parsing and overlay fixes.' }
                ]
            },
            {
                version: 'v1.8', date: 'MAY 18, 2026', latest: false,
                items: [
                    { title: 'Alert-style Theme Menu', desc: 'Alert-card style theme menu.' },
                    { title: 'Export: new modes', desc: 'Added TXT and CSV formats.' },
                    { title: 'Export Modal Restyling', desc: 'Frosted glass export modal.' },
                    { title: 'Archive: Week Navigation', desc: 'Improved week navigation.' },
                    { title: 'Search Bar: Frosted Blur', desc: 'Blur effect consolidation.' },
                    { title: 'Search UI Refinements', desc: 'Optimized UI for search bar.' },
                    { title: 'Utility .sfocata', desc: 'Blur utility class.' },
                    { title: 'Fix CSS & Overlays', desc: 'Overlay bug fixes.' }
                ]
            },
            {
                version: 'v1.7', date: 'MAY 9, 2026', latest: false,
                items: [
                    { title: 'Complete Redesign', desc: 'Total UI renewal.' },
                    { title: 'UI Cleanup', desc: 'Desktop toggle removed.' },
                    { title: 'Export Modal Redesign', desc: 'Dynamic export modal.' },
                    { title: 'Export Button Restoration', desc: 'Export button restored.' },
                    { title: 'Class-Based Toggle', desc: 'Migrated to classList.' },
                    { title: 'Modal Overlay Styling', desc: 'Fullscreen blur style.' },
                    { title: 'Responsive Design', desc: 'Responsive improvements.' },
                    { title: 'Dynamic Changelog', desc: 'Multi-language support system.' }
                ]
            },
            {
                version: 'v1.6', date: 'APRIL 25, 2026', latest: false,
                items: [
                    { title: 'Auth System', desc: 'Supabase Auth integrated.' },
                    { title: 'User Profiles', desc: 'Persistent profiles.' },
                    { title: 'Access Control', desc: 'Owner/Standard roles.' },
                    { title: 'Metadata Mapper', desc: 'Centralized artist/album database.' },
                    { title: 'CronoSync Engine', desc: 'Real-time data sync.' }
                ]
            },
            {
                version: 'v1.5', date: 'APRIL 11, 2026', latest: false,
                items: [
                    { title: 'Theme Engine', desc: 'Universal theme management.' },
                    { title: 'Navy Blue Contrast', desc: 'Light Mode readability optimization.' }
                ]
            },
            {
                version: 'v1.4', date: 'APRIL 5, 2026', latest: false,
                items: [
                    { title: 'Notary Protocol', desc: 'Data consistency control.' },
                    { title: 'Performance Update', desc: 'Optimized data loading.' }
                ]
            },
            {
                version: 'v1.3', date: 'MARCH 28, 2026', latest: false,
                items: [
                    { title: 'Rebranding', desc: 'Transition to CRONOSOUND.' },
                    { title: 'Mobile First', desc: 'Fullscreen Hamburger Menu.' }
                ]
            },
            {
                version: 'v1.2', date: 'MARCH 15, 2026', latest: false,
                items: [
                    { title: 'Historical Archive', desc: 'Previous weeks navigation.' },
                    { title: 'Design Refresh', desc: 'Glassmorphism style.' }
                ]
            },
            {
                version: 'v1.0', date: 'MARCH 1, 2026', latest: false,
                items: [
                    { title: 'Genesis', desc: 'First alpha version.' }
                ]
            }
        ],
        es: [
            {
                version: 'v2.1', date: '25 JUNIO 2026', latest: true,
                items: [
                    { title: 'Rediseño Completo de Temas', desc: 'Sistema de temas adaptado al estilo v2.0. Problemas de la v2.0.1 resueltos.' },
                    { title: 'Aumento de Rendimiento (+40%)', desc: 'Mayor fluidez, eliminación de 1200+ líneas de CSS redundante.' },
                    { title: 'Evolución del Motor (v3)', desc: 'Nuevo Theme Engine 3 y Language Engine 3: traducciones más precisas.' },
                    { title: 'Animaciones UI Refinadas', desc: 'Animaciones de tab bar y búsqueda optimizadas (efecto "burbuja").' },
                    { title: 'Scroll de Cabecera Inteligente', desc: 'Header interactivo: contracción dinámica al hacer scroll.' }
                ]
            },
            {
                version: 'v2.0.1', date: '24 JUNIO 2026', latest: false,
                items: [
                    { title: 'Experiencia Móvil Rediseñada', desc: 'Optimizadas tarjetas de canciones, archivo y distribución de contenido para eliminar desbordamientos y mejorar el respiro y legibilidad en pantallas pequeñas.' },
                    { title: 'Nueva Barra de Pestañas Móvil', desc: 'Introducida navegación inferior estilo iOS con tres secciones principales y botón de búsqueda circular siempre adaptativo.' },
                    { title: 'Búsqueda con Morph Fluido', desc: 'Barra de pestañas se desliza lateralmente mientras burbuja de búsqueda se expande hacia la izquierda transformándose en barra; el cierre reproduce el movimiento inverso.' },
                    { title: 'Superficies de Blur más Legibles', desc: 'Barra de pestañas, burbuja y barra de búsqueda ahora usan fondos azul noche casi opacos con desenfoque profundo, eliminando efecto de transparencia excesiva.' },
                    { title: 'Interfaz y Fondo', desc: 'Añadido fondo negro dinámico con destellos azules animados y tratamiento de desenfoque estandarizado en tarjetas.' },
                    { title: 'Ranking y Exportación', desc: 'Movido comando Exportar junto a título "Ranking General" y corregido comportamiento de cierre de sesión.' }
                ]
            },
            {
                version: 'v2.0', date: '23 JUNIO 2026', latest: false,
                items: [
                    { title: 'CronoFrost UI 1.0', desc: 'Interfaz con barra central redondeada y diseño moderno.' },
                    { title: 'Sistema de Cuentas Crono 2.0', desc: 'Sistema reestructurado con perfiles persistentes.' },
                    { title: 'Motor de Ranking 5', desc: 'Motor actualizado para procesamiento rápido.' },
                    { title: 'Iconos Material You', desc: 'Introducidos iconos Material You y botones tipo píldora.' },
                    { title: 'Optimización Móvil', desc: 'Anchos dinámicos responsive.' },
                    { title: 'Blur y superficies glassy', desc: 'Efectos blur en cabeceras y menús.' },
                    { title: 'Ancho dinámico responsive', desc: 'Layout adaptativo en tiempo real.' },
                    { title: 'Bordes de contraste', desc: 'Marcos refinados para mejor lectura.' },
                    { title: 'Soporte de temas 2.1', desc: 'Preparación para temas avanzados.' },
                    { title: 'Roadmap API Crono', desc: 'Planificación de la nueva API.' }
                ]
            },
            {
                version: 'v1.9', date: '25 MAYO 2026', latest: false,
                items: [
                    { title: 'Gestión de Álbumes', desc: 'Pestaña de álbumes con gestión completa.' },
                    { title: 'Artista de Álbum', desc: 'Campo de artista para mejores metadatos.' },
                    { title: 'Búsqueda Álbum/Artista', desc: 'Filtros globales de álbum y artista.' },
                    { title: 'Fallback de Portada', desc: 'Gestión automática de portadas.' },
                    { title: 'Menú de Temas Alert-style', desc: 'Menú con estilo alert-card.' },
                    { title: 'Exportación: nuevos modos', desc: 'Soporte TXT y CSV.' },
                    { title: 'Rediseño Modal Export', desc: 'Modal con estilo frosted glass.' },
                    { title: 'Navegación de Semana', desc: 'Navegación rápida entre semanas.' },
                    { title: 'Barra de búsqueda: Blur', desc: 'Optimización del blur en búsqueda.' },
                    { title: 'Utilidad .sfocata', desc: 'Clase de utilidad para blur.' },
                    { title: 'Corrección CSS & Overlays', desc: 'Correcciones de parsing y overlays.' }
                ]
            },
            {
                version: 'v1.8', date: '18 MAYO 2026', latest: false,
                items: [
                    { title: 'Menú de Temas Alert-style', desc: 'Menú con estilo alert-card.' },
                    { title: 'Exportación: nuevos modos', desc: 'Formatos TXT y CSV añadidos.' },
                    { title: 'Rediseño Modal Export', desc: 'Modal export frosted glass.' },
                    { title: 'Navegación de Semana', desc: 'Mejora en la navegación semanal.' },
                    { title: 'Barra de búsqueda: Blur', desc: 'Consolidación de efectos blur.' },
                    { title: 'Refinamiento UI Búsqueda', desc: 'UI de barra optimizada.' },
                    { title: 'Utilidad .sfocata', desc: 'Clase de utilidad blur.' },
                    { title: 'Corrección CSS & Overlays', desc: 'Correcciones de overlays.' }
                ]
            },
            {
                version: 'v1.7', date: '9 MAYO 2026', latest: false,
                items: [
                    { title: 'Rediseño Completo', desc: 'Renovación total de UI.' },
                    { title: 'Limpieza UI', desc: 'Toggle escritorio eliminado.' },
                    { title: 'Rediseño Modal Export', desc: 'Modal export dinámico.' },
                    { title: 'Restauración botón Export', desc: 'Botón de exportación restaurado.' },
                    { title: 'Toggle Basado en Clases', desc: 'Migración a classList.' },
                    { title: 'Estilo Overlay Modal', desc: 'Estilo fullscreen con blur.' },
                    { title: 'Diseño Responsive', desc: 'Mejoras en responsividad.' },
                    { title: 'Changelog Dinámico', desc: 'Sistema multilingüe.' }
                ]
            },
            {
                version: 'v1.6', date: '25 ABRIL 2026', latest: false,
                items: [
                    { title: 'Sistema de Autenticación', desc: 'Supabase Auth integrado.' },
                    { title: 'Perfiles de Usuario', desc: 'Perfiles persistentes.' },
                    { title: 'Control de Acceso', desc: 'Roles Owner/Standard.' },
                    { title: 'Metadata Mapper', desc: 'Base de datos artistas/álbumes.' },
                    { title: 'CronoSync Engine', desc: 'Sincronización en tiempo real.' }
                ]
            },
            {
                version: 'v1.5', date: '11 ABRIL 2026', latest: false,
                items: [
                    { title: 'Motor de Temas', desc: 'Gestión universal de temas.' },
                    { title: 'Contraste Navy Blue', desc: 'Legibilidad optimizada en Light Mode.' }
                ]
            },
            {
                version: 'v1.4', date: '05 ABRIL 2026', latest: false,
                items: [
                    { title: 'Protocolo Notario', desc: 'Control de consistencia de datos.' },
                    { title: 'Actualización Rendimiento', desc: 'Carga de datos optimizada.' }
                ]
            },
            {
                version: 'v1.3', date: '28 MARZO 2026', latest: false,
                items: [
                    { title: 'Rebranding', desc: 'Transición a CRONOSOUND.' },
                    { title: 'Mobile First', desc: 'Menú hamburguesa fullscreen.' }
                ]
            },
            {
                version: 'v1.2', date: '15 MARZO 2026', latest: false,
                items: [
                    { title: 'Archivo Histórico', desc: 'Consulta de semanas anteriores.' },
                    { title: 'Refresco de Diseño', desc: 'Estilo Glassmorphism.' }
                ]
            },
            {
                version: 'v1.0', date: '01 MARZO 2026', latest: false,
                items: [
                    { title: 'Genesis', desc: 'Lanzamiento versión alpha.' }
                ]
            }
        ]
    };

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
})();