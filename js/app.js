(function () {
    'use strict';

    // Game manifest: id, name, icon, category, players. Injected at build
    // time and sorted alphabetically for the library grid and pager.
    const GAMES = [{"id":"baloot","name":"Baloot (Saudi Arabia)","icon":"🇸🇦","category":"trick-taking","players":"4"},
        {"id":"batak","name":"Batak (Turkey)","icon":"🇹🇷","category":"trick-taking","players":"4"},
        {"id":"belote","name":"Belote (France)","icon":"🇫🇷","category":"trick-taking","players":"4"},
        {"id":"big_two","name":"Big Two (China)","icon":"🇨🇳","category":"shedding","players":"4"},
        {"id":"bisca","name":"Bisca (Portugal)","icon":"🇵🇹","category":"trick-taking","players":"2-4"},
        {"id":"blackjack","name":"Blackjack (21)","icon":"🎰","category":"casino","players":"2-7"},
        {"id":"briscola","name":"Briscola (Italy)","icon":"🏛️","category":"trick-taking","players":"2-4"},
        {"id":"buraco","name":"Buraco (Brazil)","icon":"🇧🇷","category":"matching","players":"2-4"},
        {"id":"cabo","name":"Cabo","icon":"🎯","category":"matching","players":"2-4"},
        {"id":"cheat","name":"Cheat (BS)","icon":"🤥","category":"bluffing","players":"3-10"},
        {"id":"clock","name":"Clock Patience","icon":"🕐","category":"solitaire","players":"1"},
        {"id":"concentration","name":"Concentration (Memory)","icon":"🧠","category":"matching","players":"1-4"},
        {"id":"conquian","name":"Conquian (Mexico)","icon":"🇲🇽","category":"matching","players":"2"},
        {"id":"coup","name":"Coup","icon":"🎭","category":"bluffing","players":"2-6"},
        {"id":"crazy_eights","name":"Crazy Eights","icon":"🎱","category":"shedding","players":"2-7"},
        {"id":"cribbage","name":"Cribbage","icon":"🎯","category":"matching","players":"2"},
        {"id":"cucumber","name":"Cucumber (Scandinavia)","icon":"🥒","category":"trick-taking","players":"2-7"},
        {"id":"daifugo","name":"Daifugō (Japan)","icon":"🇯🇵","category":"shedding","players":"3-8"},
        {"id":"diloti","name":"Diloti (Greece)","icon":"🇬🇷","category":"trick-taking","players":"4"},
        {"id":"durak","name":"Durak","icon":"⚔️","category":"combat","players":"2-6"},
        {"id":"ers","name":"Egyptian Rat Screw","icon":"👋","category":"combat","players":"2-8"},
        {"id":"euchre","name":"Euchre","icon":"🎺","category":"trick-taking","players":"4"},
        {"id":"fox_forest","name":"Fox in the Forest","icon":"🦊","category":"trick-taking","players":"2"},
        {"id":"freecell","name":"FreeCell","icon":"🗂️","category":"solitaire","players":"1"},
        {"id":"garbage","name":"Garbage (Trash)","icon":"🗑️","category":"matching","players":"2-4"},
        {"id":"german_whist","name":"German Whist","icon":"🎩","category":"trick-taking","players":"2"},
        {"id":"gin_rummy","name":"Gin Rummy","icon":"🥃","category":"matching","players":"2"},
        {"id":"go_fish","name":"Go Fish","icon":"🐟","category":"matching","players":"2-6"},
        {"id":"golf","name":"Golf","icon":"⛳","category":"matching","players":"2-6"},
        {"id":"hearts","name":"Hearts","icon":"❤️","category":"trick-taking","players":"4"},
        {"id":"idiot","name":"Idiot/Palace","icon":"🏰","category":"shedding","players":"2-6"},
        {"id":"jass","name":"Jass (Switzerland)","icon":"🇨🇭","category":"trick-taking","players":"4"},
        {"id":"kalooki","name":"Kalooki (Jamaica)","icon":"🏝️","category":"matching","players":"2-4"},
        {"id":"kemps","name":"Kemps","icon":"🤝","category":"matching","players":"4+"},
        {"id":"kings_corner","name":"Kings Corner","icon":"👑","category":"shedding","players":"2-4"},
        {"id":"klondike","name":"Klondike Solitaire","icon":"♠️","category":"solitaire","players":"1"},
        {"id":"mus","name":"Mus (Spain)","icon":"🇪🇸","category":"bluffing","players":"4"},
        {"id":"nerts","name":"Nerts/Pounce","icon":"⚡","category":"shedding","players":"2-6"},
        {"id":"oh_hell","name":"Oh Hell!","icon":"😈","category":"trick-taking","players":"3-7"},
        {"id":"old_maid","name":"Old Maid","icon":"👵","category":"matching","players":"2-8"},
        {"id":"phase10","name":"Phase 10","icon":"🔟","category":"matching","players":"2-6"},
        {"id":"preferans","name":"Preferans (Russia)","icon":"🇷🇺","category":"trick-taking","players":"3"},
        {"id":"president","name":"President","icon":"👑","category":"shedding","players":"4-8"},
        {"id":"pusoy_dos","name":"Pusoy Dos (Philippines)","icon":"🇵🇭","category":"shedding","players":"4"},
        {"id":"pyramid","name":"Pyramid Solitaire","icon":"🔺","category":"solitaire","players":"1"},
        {"id":"rummy500","name":"Rummy 500","icon":"💯","category":"matching","players":"2-8"},
        {"id":"schnapsen","name":"Schnapsen (Austria)","icon":"🇦🇹","category":"trick-taking","players":"2"},
        {"id":"scopa","name":"Scopa (Italy)","icon":"🇮🇹","category":"trick-taking","players":"2-4"},
        {"id":"spades","name":"Spades","icon":"♠️","category":"trick-taking","players":"4"},
        {"id":"spar","name":"Spar (Ghana)","icon":"🌍","category":"combat","players":"2"},
        {"id":"speed","name":"Speed","icon":"⚡","category":"shedding","players":"2"},
        {"id":"spider","name":"Spider Solitaire","icon":"🕷️","category":"solitaire","players":"1"},
        {"id":"spit","name":"Spit","icon":"💨","category":"shedding","players":"2"},
        {"id":"tarneeb","name":"Tarneeb (Middle East)","icon":"🕌","category":"trick-taking","players":"4"},
        {"id":"teen_patti","name":"Teen Patti (India)","icon":"🇮🇳","category":"casino","players":"3-6"},
        {"id":"holdem","name":"Texas Hold'em","icon":"🤠","category":"casino","players":"2-10"},
        {"id":"tien_len","name":"Tien Len (Vietnam)","icon":"🇻🇳","category":"shedding","players":"4"},
        {"id":"truco","name":"Truco (Argentina)","icon":"🇦🇷","category":"trick-taking","players":"2-6"},
        {"id":"tysiac","name":"Tysiąc/1000 (Poland)","icon":"🇵🇱","category":"trick-taking","players":"3"},
        {"id":"war","name":"War","icon":"⚔️","category":"combat","players":"2"},
        {"id":"yaniv","name":"Yaniv","icon":"🎲","category":"shedding","players":"2-8"}];

    const CATEGORY_LABELS = {
        'trick-taking': 'Trick-Taking',
        'shedding': 'Shedding',
        'matching': 'Matching',
        'combat': 'Combat',
        'casino': 'Casino',
        'solitaire': 'Solitaire',
        'bluffing': 'Bluffing'
    };

    const gameSections = Array.from(document.querySelectorAll('.game-section'));
    const categoryTabs = Array.from(document.querySelectorAll('.category-tab'));
    const playerFilters = Array.from(document.querySelectorAll('.player-filter'));
    const grid = document.getElementById('game-grid');
    const searchInput = document.getElementById('game-search');
    const homeButton = document.getElementById('toolbar-home');
    const themeToggle = document.getElementById('theme-toggle');

    const sectionCache = new Map();
    gameSections.forEach(section => sectionCache.set(section.id, section));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------------
     * Theme toggle: auto -> light -> dark, persisted in localStorage.
     * ------------------------------------------------------------- */
    const THEME_META = {
        auto: { icon: '🌗', label: 'Theme: auto (follows your system)' },
        light: { icon: '☀️', label: 'Theme: light' },
        dark: { icon: '🌙', label: 'Theme: dark' }
    };

    function applyTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            document.documentElement.setAttribute('data-theme', theme);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        if (themeToggle) {
            themeToggle.textContent = THEME_META[theme].icon;
            themeToggle.setAttribute('aria-label', THEME_META[theme].label);
            themeToggle.title = THEME_META[theme].label;
        }
    }

    let currentTheme = 'auto';
    try {
        const stored = localStorage.getItem('cgc-theme');
        if (stored === 'light' || stored === 'dark') currentTheme = stored;
    } catch (e) { /* private browsing */ }
    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'auto' ? 'light' : currentTheme === 'light' ? 'dark' : 'auto';
            try {
                if (currentTheme === 'auto') localStorage.removeItem('cgc-theme');
                else localStorage.setItem('cgc-theme', currentTheme);
            } catch (e) { /* ignore */ }
            applyTheme(currentTheme);
        });
    }

    /* ---------------------------------------------------------------
     * Collapsible rules sections (details/summary built from h2 blocks).
     * ------------------------------------------------------------- */
    function buildCollapsibles(section) {
        const nodes = Array.from(section.children);
        let body = null;
        let isFirst = true;

        nodes.forEach(node => {
            if (node.tagName === 'H2') {
                const details = document.createElement('details');
                details.className = 'rules-section';
                if (isFirst) {
                    details.open = true;
                    isFirst = false;
                }
                const summary = document.createElement('summary');
                section.insertBefore(details, node);
                summary.appendChild(node);
                details.appendChild(summary);
                body = document.createElement('div');
                body.className = 'rules-body';
                details.appendChild(body);
            } else if (body) {
                body.appendChild(node);
            }
        });

        const firstRules = section.querySelector('.rules-section');
        if (!firstRules) return;

        const toolbar = document.createElement('div');
        toolbar.className = 'section-toolbar';
        const makeButton = (label, open) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', () => {
                section.querySelectorAll('.rules-section').forEach(d => { d.open = open; });
            });
            return button;
        };
        toolbar.appendChild(makeButton('Expand all', true));
        toolbar.appendChild(makeButton('Collapse all', false));
        section.insertBefore(toolbar, firstRules);
    }

    gameSections.forEach(buildCollapsibles);

    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('.rules-section').forEach(d => { d.open = true; });
    });

    /* ---------------------------------------------------------------
     * The game library grid: one card per game plus a basics card,
     * filtered by category, player count, and search text.
     * ------------------------------------------------------------- */
    const FILTER_RANGES = {
        '1': { min: 1, max: 1 },
        '2': { min: 2, max: 2 },
        '3-4': { min: 3, max: 4 },
        '5+': { min: 5, max: Infinity }
    };

    let currentCategory = 'all';
    let currentPlayers = 'all';
    let query = '';

    function parseRange(value) {
        if (!value || value === 'all') return null;
        const match = /^(\d+)(?:-(\d+))?(\+)?$/.exec(value.trim());
        if (!match) return null;
        const min = parseInt(match[1], 10);
        const max = match[2] ? parseInt(match[2], 10) : (match[3] ? Infinity : min);
        return { min, max };
    }

    function makeCard(game) {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'game-card';
        card.dataset.game = game.id;

        const icon = document.createElement('span');
        icon.className = 'game-card-icon';
        icon.textContent = game.icon;
        icon.setAttribute('aria-hidden', 'true');

        const name = document.createElement('span');
        name.className = 'game-card-name';
        name.textContent = game.name;

        const meta = document.createElement('span');
        meta.className = 'game-card-meta';
        meta.textContent = game.meta;

        card.append(icon, name, meta);
        card.addEventListener('click', () => navigateToGame(game.id));
        return card;
    }

    const cards = [];
    if (grid) {
        const basicsCard = makeCard({
            id: 'basics',
            name: 'Learn the Basics',
            icon: '📚',
            meta: 'Start here — concepts every game uses'
        });
        basicsCard.classList.add('game-card-featured');
        grid.appendChild(basicsCard);
        cards.push({ game: { id: 'basics', name: 'learn the basics', category: 'all', players: 'all' }, el: basicsCard });

        GAMES.forEach(game => {
            const range = parseRange(game.players);
            const playerText = game.players === '1' ? 'Solo'
                : range && range.max === Infinity ? game.players.replace('+', '+ players')
                : game.players + ' players';
            const card = makeCard({
                ...game,
                meta: playerText + ' · ' + (CATEGORY_LABELS[game.category] || game.category)
            });
            grid.appendChild(card);
            cards.push({ game, el: card });
        });
    }

    function applyFilters() {
        const q = query.trim().toLowerCase();
        cards.forEach(({ game, el }) => {
            const matchesCategory = currentCategory === 'all' || game.category === 'all' || game.category === currentCategory;
            const range = parseRange(game.players);
            const filter = FILTER_RANGES[currentPlayers];
            const matchesPlayers = !filter || !range || (range.min <= filter.max && range.max >= filter.min);
            const matchesQuery = !q || game.name.toLowerCase().includes(q) || game.id.includes(q);
            el.hidden = !(matchesCategory && matchesPlayers && matchesQuery);
        });
    }

    function setPressed(group, activeElement) {
        group.forEach(element => {
            const on = element === activeElement;
            element.classList.toggle('active', on);
            element.setAttribute('aria-pressed', String(on));
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.category;
            setPressed(categoryTabs, tab);
            applyFilters();
        });
    });

    playerFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            currentPlayers = filter.dataset.players;
            setPressed(playerFilters, filter);
            applyFilters();
        });
    });

    /* ---------------------------------------------------------------
     * Search: filters the grid; Enter opens the first match;
     * "/" focuses the box from anywhere.
     * ------------------------------------------------------------- */
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            query = searchInput.value;
            if (query && !sectionCache.get('home').classList.contains('active')) {
                navigateToGame('home', false);
            }
            applyFilters();
        });

        searchInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                const first = cards.find(c => !c.el.hidden && c.game.id !== 'basics') || cards.find(c => !c.el.hidden);
                if (first) {
                    navigateToGame(first.game.id);
                    searchInput.value = '';
                    query = '';
                    applyFilters();
                    searchInput.blur();
                }
            } else if (event.key === 'Escape') {
                searchInput.value = '';
                query = '';
                applyFilters();
                searchInput.blur();
            }
        });

        document.addEventListener('keydown', event => {
            if (event.key === '/' && document.activeElement !== searchInput &&
                !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
                event.preventDefault();
                searchInput.focus();
            }
        });
    }

    /* ---------------------------------------------------------------
     * Prev / next pager at the bottom of every game page.
     * ------------------------------------------------------------- */
    GAMES.forEach((game, index) => {
        const section = sectionCache.get(game.id);
        if (!section) return;

        const pager = document.createElement('nav');
        pager.className = 'game-pager';
        pager.setAttribute('aria-label', 'More games');

        const prev = GAMES[(index - 1 + GAMES.length) % GAMES.length];
        const next = GAMES[(index + 1) % GAMES.length];

        const makeLink = (label, target, cls) => {
            const a = document.createElement('a');
            a.href = '#' + target;
            a.className = cls;
            a.textContent = label;
            a.addEventListener('click', event => {
                event.preventDefault();
                navigateToGame(target);
            });
            return a;
        };

        pager.appendChild(makeLink('← ' + prev.name, prev.id, 'pager-prev'));
        pager.appendChild(makeLink('All games', 'home', 'pager-home'));
        pager.appendChild(makeLink(next.name + ' →', next.id, 'pager-next'));
        section.appendChild(pager);
    });

    const basicsSection = sectionCache.get('basics');
    if (basicsSection) {
        const pager = document.createElement('nav');
        pager.className = 'game-pager';
        pager.setAttribute('aria-label', 'More games');
        const back = document.createElement('a');
        back.href = '#home';
        back.className = 'pager-home';
        back.textContent = 'Browse all games';
        back.addEventListener('click', event => {
            event.preventDefault();
            navigateToGame('home');
        });
        pager.appendChild(back);
        basicsSection.appendChild(pager);
    }

    /* ---------------------------------------------------------------
     * Navigation and history.
     * ------------------------------------------------------------- */
    function navigateToGame(gameId, updateHistory = true) {
        if (!sectionCache.has(gameId)) return;

        gameSections.forEach(section => {
            section.classList.toggle('active', section.id === gameId);
        });

        const onHome = gameId === 'home';
        document.body.classList.toggle('on-home', onHome);
        if (homeButton) homeButton.setAttribute('aria-current', onHome ? 'page' : 'false');

        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

        if (updateHistory) {
            const target = onHome ? window.location.pathname + window.location.search : '#' + gameId;
            if (!onHome && window.location.hash === '#' + gameId) return;
            history.pushState({ game: gameId }, '', target);
        }
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => navigateToGame('home'));
    }

    window.addEventListener('popstate', event => {
        const gameId = (event.state && event.state.game) || window.location.hash.slice(1) || 'home';
        if (sectionCache.has(gameId)) {
            navigateToGame(gameId, false);
        }
    });

    // Initial view: honor a #hash deep link, defaulting to the game library.
    const initialHash = window.location.hash.slice(1);
    const startId = sectionCache.has(initialHash) ? initialHash : 'home';
    navigateToGame(startId, false);
    history.replaceState({ game: startId }, '');
    applyFilters();
})();
