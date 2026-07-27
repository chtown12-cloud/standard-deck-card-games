(function () {
    'use strict';

    // Injected at build time: {id, name, origin, category, players, ages}
    const GAMES = [{"id":"baloot","name":"Baloot","category":"trick-taking","players":"4","origin":"Saudi Arabia","ages":"12+"},
        {"id":"batak","name":"Batak","category":"trick-taking","players":"4","origin":"Turkey","ages":"10+"},
        {"id":"belote","name":"Belote","category":"trick-taking","players":"4","origin":"France","ages":"10+"},
        {"id":"big_two","name":"Big Two","category":"shedding","players":"4","origin":"China","ages":"8+"},
        {"id":"bisca","name":"Bisca","category":"trick-taking","players":"2-4","origin":"Portugal","ages":"8+"},
        {"id":"blackjack","name":"Blackjack (21)","category":"casino","players":"2-7","ages":"12+"},
        {"id":"briscola","name":"Briscola","category":"trick-taking","players":"2-4","origin":"Italy","ages":"8+"},
        {"id":"buraco","name":"Buraco","category":"matching","players":"2-4","origin":"Brazil","ages":"10+"},
        {"id":"cabo","name":"Cabo","category":"matching","players":"2-4","ages":"8+"},
        {"id":"cheat","name":"Cheat (BS)","category":"bluffing","players":"3-10","ages":"8+"},
        {"id":"clock","name":"Clock Patience","category":"solitaire","players":"1","ages":"6+"},
        {"id":"concentration","name":"Concentration (Memory)","category":"matching","players":"1-4","ages":"4+"},
        {"id":"conquian","name":"Conquian","category":"matching","players":"2","origin":"Mexico","ages":"8+"},
        {"id":"coup","name":"Coup","category":"bluffing","players":"2-6","ages":"10+"},
        {"id":"crazy_eights","name":"Crazy Eights","category":"shedding","players":"2-7","ages":"5+"},
        {"id":"cribbage","name":"Cribbage","category":"matching","players":"2","ages":"10+"},
        {"id":"cucumber","name":"Cucumber","category":"trick-taking","players":"2-7","origin":"Scandinavia","ages":"8+"},
        {"id":"daifugo","name":"Daifugō","category":"shedding","players":"3-8","origin":"Japan","ages":"8+"},
        {"id":"diloti","name":"Diloti","category":"trick-taking","players":"4","origin":"Greece","ages":"12+"},
        {"id":"durak","name":"Durak","category":"combat","players":"2-6","ages":"8+"},
        {"id":"ers","name":"Egyptian Rat Screw","category":"combat","players":"2-8","ages":"6+"},
        {"id":"euchre","name":"Euchre","category":"trick-taking","players":"4","ages":"10+"},
        {"id":"fox_forest","name":"Fox in the Forest","category":"trick-taking","players":"2","ages":"10+"},
        {"id":"freecell","name":"FreeCell","category":"solitaire","players":"1","ages":"8+"},
        {"id":"garbage","name":"Garbage (Trash)","category":"matching","players":"2-4","ages":"5+"},
        {"id":"german_whist","name":"German Whist","category":"trick-taking","players":"2","ages":"10+"},
        {"id":"gin_rummy","name":"Gin Rummy","category":"matching","players":"2","ages":"8+"},
        {"id":"go_fish","name":"Go Fish","category":"matching","players":"2-6","ages":"4+"},
        {"id":"golf","name":"Golf","category":"matching","players":"2-6","ages":"8+"},
        {"id":"hearts","name":"Hearts","category":"trick-taking","players":"4","ages":"10+"},
        {"id":"idiot","name":"Idiot/Palace","category":"shedding","players":"2-6","ages":"8+"},
        {"id":"jass","name":"Jass","category":"trick-taking","players":"4","origin":"Switzerland","ages":"12+"},
        {"id":"kalooki","name":"Kalooki","category":"matching","players":"2-4","origin":"Jamaica","ages":"10+"},
        {"id":"kemps","name":"Kemps","category":"matching","players":"4+","ages":"8+"},
        {"id":"kings_corner","name":"Kings Corner","category":"shedding","players":"2-4","ages":"8+"},
        {"id":"klondike","name":"Klondike Solitaire","category":"solitaire","players":"1","ages":"8+"},
        {"id":"mus","name":"Mus","category":"bluffing","players":"4","origin":"Spain","ages":"12+"},
        {"id":"nerts","name":"Nerts/Pounce","category":"shedding","players":"2-6","ages":"10+"},
        {"id":"oh_hell","name":"Oh Hell!","category":"trick-taking","players":"3-7","ages":"10+"},
        {"id":"old_maid","name":"Old Maid","category":"matching","players":"2-8","ages":"4+"},
        {"id":"phase10","name":"Phase 10","category":"matching","players":"2-6","ages":"7+"},
        {"id":"preferans","name":"Preferans","category":"trick-taking","players":"3","origin":"Russia","ages":"14+"},
        {"id":"president","name":"President","category":"shedding","players":"4-8","ages":"8+"},
        {"id":"pusoy_dos","name":"Pusoy Dos","category":"shedding","players":"4","origin":"Philippines","ages":"8+"},
        {"id":"pyramid","name":"Pyramid Solitaire","category":"solitaire","players":"1","ages":"8+"},
        {"id":"rummy500","name":"Rummy 500","category":"matching","players":"2-8","ages":"8+"},
        {"id":"schnapsen","name":"Schnapsen","category":"trick-taking","players":"2","origin":"Austria","ages":"10+"},
        {"id":"scopa","name":"Scopa","category":"trick-taking","players":"2-4","origin":"Italy","ages":"8+"},
        {"id":"spades","name":"Spades","category":"trick-taking","players":"4","ages":"10+"},
        {"id":"spar","name":"Spar","category":"combat","players":"2","origin":"Ghana","ages":"6+"},
        {"id":"speed","name":"Speed","category":"shedding","players":"2","ages":"8+"},
        {"id":"spider","name":"Spider Solitaire","category":"solitaire","players":"1","ages":"10+"},
        {"id":"spit","name":"Spit","category":"shedding","players":"2","ages":"8+"},
        {"id":"tarneeb","name":"Tarneeb","category":"trick-taking","players":"4","origin":"Middle East","ages":"10+"},
        {"id":"teen_patti","name":"Teen Patti","category":"casino","players":"3-6","origin":"India","ages":"12+"},
        {"id":"holdem","name":"Texas Hold'em","category":"casino","players":"2-10","ages":"12+"},
        {"id":"tien_len","name":"Tien Len","category":"shedding","players":"4","origin":"Vietnam","ages":"8+"},
        {"id":"truco","name":"Truco","category":"trick-taking","players":"2-6","origin":"Argentina","ages":"10+"},
        {"id":"tysiac","name":"Tysiąc/1000","category":"trick-taking","players":"3","origin":"Poland","ages":"12+"},
        {"id":"war","name":"War","category":"combat","players":"2","ages":"4+"},
        {"id":"yaniv","name":"Yaniv","category":"shedding","players":"2-8","ages":"7+"}];

    // Categories in reading order, each with the pip that marks it in the
    // index. Repeats are fine — there are four suits and seven families.
    const CATEGORIES = [
        { key: 'trick-taking', label: 'Trick-Taking', pip: '♠' },
        { key: 'shedding', label: 'Shedding', pip: '♥', red: true },
        { key: 'matching', label: 'Matching & Melding', pip: '♦', red: true },
        { key: 'combat', label: 'Combat & Speed', pip: '♣' },
        { key: 'casino', label: 'Casino & Betting', pip: '♠' },
        { key: 'bluffing', label: 'Bluffing', pip: '♥', red: true },
        { key: 'solitaire', label: 'Solitaire', pip: '♦', red: true }
    ];

    const gameSections = Array.from(document.querySelectorAll('.game-section'));
    const indexEl = document.getElementById('game-index');
    const searchInput = document.getElementById('game-search');
    const homeButton = document.getElementById('toolbar-index');
    const themeToggle = document.getElementById('theme-toggle');

    const sectionCache = new Map();
    gameSections.forEach(section => sectionCache.set(section.id, section));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Theme: auto → day → night, remembered ──────────────────── */
    const THEMES = ['auto', 'light', 'dark'];
    const THEME_LABEL = { auto: 'Auto', light: 'Day', dark: 'Night' };

    function applyTheme(theme) {
        if (theme === 'auto') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        if (themeToggle) {
            themeToggle.textContent = THEME_LABEL[theme];
            themeToggle.setAttribute('aria-label', 'Colour scheme: ' + THEME_LABEL[theme] + '. Click to change.');
        }
    }

    let theme = 'auto';
    try {
        const stored = localStorage.getItem('cgc-theme');
        if (THEMES.includes(stored)) theme = stored;
    } catch (e) { /* storage unavailable */ }
    applyTheme(theme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            theme = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length];
            try {
                if (theme === 'auto') localStorage.removeItem('cgc-theme');
                else localStorage.setItem('cgc-theme', theme);
            } catch (e) { /* ignore */ }
            applyTheme(theme);
        });
    }

    /* ── Per-game furniture: eyebrow line and collapsible rules ─── */
    function describe(game) {
        const parts = [];
        const cat = CATEGORIES.find(c => c.key === game.category);
        if (cat) parts.push(cat.label);
        if (game.origin) parts.push(game.origin);
        parts.push(playerLabel(game.players));
        if (game.ages) parts.push('Ages ' + game.ages);
        return parts.join(' · ');
    }

    function playerLabel(players) {
        if (players === '1') return 'Solitaire';
        if (/\+$/.test(players)) return players.replace('+', '+ players');
        return players + ' players';
    }

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

        const bar = document.createElement('div');
        bar.className = 'section-toolbar';
        const makeButton = (label, open) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = label;
            button.addEventListener('click', () => {
                section.querySelectorAll('.rules-section').forEach(d => { d.open = open; });
            });
            return button;
        };
        bar.appendChild(makeButton('Expand all', true));
        bar.appendChild(makeButton('Collapse all', false));
        section.insertBefore(bar, firstRules);
    }

    // Wide tables need their own scroll container so the page never does.
    function wrapTables(section) {
        section.querySelectorAll('table').forEach(table => {
            const wrap = document.createElement('div');
            wrap.className = 'table-scroll';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        });
    }

    const gamesById = new Map(GAMES.map(g => [g.id, g]));

    gameSections.forEach(section => {
        if (section.id === 'home') return;
        const game = gamesById.get(section.id);
        const title = section.querySelector('.game-title');
        if (game && title) {
            const eyebrow = document.createElement('p');
            eyebrow.className = 'eyebrow';
            eyebrow.textContent = describe(game);
            section.insertBefore(eyebrow, title);
        }
        buildCollapsibles(section);
        wrapTables(section);
    });

    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('.rules-section').forEach(d => { d.open = true; });
    });

    /* ── The index: games grouped by family, like a book's contents ─ */
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
        const match = /^(\d+)(?:-(\d+))?(\+)?$/.exec(String(value).trim());
        if (!match) return null;
        const min = parseInt(match[1], 10);
        const max = match[2] ? parseInt(match[2], 10) : (match[3] ? Infinity : min);
        return { min, max };
    }

    const rows = [];
    const groups = [];

    if (indexEl) {
        // "Learn the basics" sits above the index as its own entry.
        const lede = document.createElement('button');
        lede.type = 'button';
        lede.className = 'index-lede';
        lede.innerHTML = '<span class="lede-title">Learn the Basics</span>' +
            '<span class="lede-sub">Tricks, trumps, melds and bidding — the ideas every game below is built from.</span>';
        lede.addEventListener('click', () => navigateTo('basics'));
        indexEl.appendChild(lede);

        CATEGORIES.forEach(cat => {
            const members = GAMES.filter(g => g.category === cat.key);
            if (!members.length) return;

            const group = document.createElement('section');
            group.className = 'cat-group';

            const head = document.createElement('h2');
            head.className = 'cat-head';
            const pip = document.createElement('span');
            pip.className = 'pip' + (cat.red ? ' red' : '');
            pip.textContent = cat.pip;
            pip.setAttribute('aria-hidden', 'true');
            const count = document.createElement('span');
            count.className = 'cat-count';
            count.textContent = members.length + ' games';
            head.append(pip, document.createTextNode(cat.label), count);
            group.appendChild(head);

            members.forEach(game => {
                const row = document.createElement('button');
                row.type = 'button';
                row.className = 'index-row';

                const name = document.createElement('span');
                name.className = 'row-name';
                name.textContent = game.name;

                const players = document.createElement('span');
                players.className = 'row-players';
                players.textContent = playerLabel(game.players);

                row.append(name, players);

                if (game.origin) {
                    const origin = document.createElement('span');
                    origin.className = 'row-origin';
                    origin.textContent = game.origin;
                    row.insertBefore(origin, players);
                }

                row.addEventListener('click', () => navigateTo(game.id));
                group.appendChild(row);
                rows.push({ game, el: row, group });
            });

            indexEl.appendChild(group);
            groups.push(group);
        });

        const empty = document.createElement('p');
        empty.className = 'index-empty';
        empty.hidden = true;
        empty.textContent = 'No games match those filters.';
        indexEl.appendChild(empty);
        groups.emptyNotice = empty;
    }

    function applyFilters() {
        const q = query.trim().toLowerCase();
        let visible = 0;

        rows.forEach(({ game, el }) => {
            const matchesCategory = currentCategory === 'all' || game.category === currentCategory;
            const range = parseRange(game.players);
            const filter = FILTER_RANGES[currentPlayers];
            const matchesPlayers = !filter || !range || (range.min <= filter.max && range.max >= filter.min);
            const haystack = (game.name + ' ' + (game.origin || '')).toLowerCase();
            const matchesQuery = !q || haystack.includes(q) || game.id.includes(q);
            const show = matchesCategory && matchesPlayers && matchesQuery;
            el.hidden = !show;
            if (show) visible += 1;
        });

        groups.forEach(group => {
            group.hidden = !group.querySelector('.index-row:not([hidden])');
        });

        if (groups.emptyNotice) groups.emptyNotice.hidden = visible > 0;
    }

    function bindFilterRow(selector, onPick) {
        const buttons = Array.from(document.querySelectorAll(selector));
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(b => {
                    const on = b === button;
                    b.classList.toggle('active', on);
                    b.setAttribute('aria-pressed', String(on));
                });
                onPick(button.dataset);
                applyFilters();
            });
        });
    }

    bindFilterRow('.category-filter', data => { currentCategory = data.category; });
    bindFilterRow('.player-filter', data => { currentPlayers = data.players; });

    /* ── Search ─────────────────────────────────────────────────── */
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            query = searchInput.value;
            if (query && !sectionCache.get('home').classList.contains('active')) {
                navigateTo('home', false);
            }
            applyFilters();
        });

        searchInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                const first = rows.find(r => !r.el.hidden);
                if (first) {
                    navigateTo(first.game.id);
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

    /* ── Pager ──────────────────────────────────────────────────── */
    function makeLink(label, target, cls) {
        const a = document.createElement('a');
        a.href = '#' + target;
        a.className = cls;
        a.textContent = label;
        a.addEventListener('click', event => {
            event.preventDefault();
            navigateTo(target);
        });
        return a;
    }

    GAMES.forEach((game, i) => {
        const section = sectionCache.get(game.id);
        if (!section) return;
        const prev = GAMES[(i - 1 + GAMES.length) % GAMES.length];
        const next = GAMES[(i + 1) % GAMES.length];
        const pager = document.createElement('nav');
        pager.className = 'game-pager';
        pager.setAttribute('aria-label', 'More games');
        pager.append(
            makeLink('← ' + prev.name, prev.id, 'pager-prev'),
            makeLink('Index', 'home', 'pager-home'),
            makeLink(next.name + ' →', next.id, 'pager-next')
        );
        section.appendChild(pager);
    });

    const basics = sectionCache.get('basics');
    if (basics) {
        const pager = document.createElement('nav');
        pager.className = 'game-pager';
        pager.setAttribute('aria-label', 'More games');
        pager.appendChild(makeLink('Index', 'home', 'pager-home'));
        basics.appendChild(pager);
    }

    /* ── Navigation ─────────────────────────────────────────────── */
    function navigateTo(id, updateHistory = true) {
        if (!sectionCache.has(id)) return;

        gameSections.forEach(section => {
            section.classList.toggle('active', section.id === id);
        });

        const onHome = id === 'home';
        document.body.classList.toggle('on-home', onHome);
        if (homeButton) homeButton.setAttribute('aria-current', onHome ? 'page' : 'false');

        const game = gamesById.get(id);
        document.title = game ? game.name + ' — The Card Game Compendium'
            : id === 'basics' ? 'Learn the Basics — The Card Game Compendium'
            : 'The Card Game Compendium';

        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

        if (updateHistory) {
            if (onHome) {
                history.pushState({ game: id }, '', window.location.pathname + window.location.search);
            } else if (window.location.hash !== '#' + id) {
                history.pushState({ game: id }, '', '#' + id);
            }
        }
    }

    if (homeButton) {
        homeButton.addEventListener('click', () => navigateTo('home'));
    }

    window.addEventListener('popstate', event => {
        const id = (event.state && event.state.game) || window.location.hash.slice(1) || 'home';
        if (sectionCache.has(id)) navigateTo(id, false);
    });

    const initialHash = window.location.hash.slice(1);
    const startId = sectionCache.has(initialHash) ? initialHash : 'home';
    navigateTo(startId, false);
    history.replaceState({ game: startId }, '');
    applyFilters();

    // A #hash link makes the browser scroll to the section once we reveal it,
    // tucking the title under the sticky bar. Land at the top of the page.
    if (initialHash) {
        window.scrollTo(0, 0);
        requestAnimationFrame(() => window.scrollTo(0, 0));
        window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
    }
})();
