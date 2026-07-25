(function () {
    'use strict';

    const navButtons = Array.from(document.querySelectorAll('.nav-btn'));
    const gameSections = Array.from(document.querySelectorAll('.game-section'));
    const categoryTabs = Array.from(document.querySelectorAll('.category-tab'));
    const playerFilters = Array.from(document.querySelectorAll('.player-filter'));
    const nav = document.querySelector('.nav');

    const sectionCache = new Map();
    gameSections.forEach(section => sectionCache.set(section.id, section));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------------------------------------------------------------
     * Collapsible rules sections
     * Each <h2> inside a game section becomes the summary of a
     * <details> element containing everything up to the next <h2>.
     * Native details/summary gives keyboard and screen-reader support
     * for free; the heading is preserved inside the summary.
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

    // Printing should always show the full rules.
    window.addEventListener('beforeprint', () => {
        document.querySelectorAll('.rules-section').forEach(d => { d.open = true; });
    });

    /* ---------------------------------------------------------------
     * Category and player-count filters
     * Player counts are parsed as numeric ranges ("2-6", "4+", "3")
     * and matched by interval overlap, so e.g. the 3-4 player filter
     * correctly includes a 2-7 player game.
     * ------------------------------------------------------------- */
    const FILTER_RANGES = {
        '1': { min: 1, max: 1 },
        '2': { min: 2, max: 2 },
        '3-4': { min: 3, max: 4 },
        '5+': { min: 5, max: Infinity }
    };

    let currentCategory = 'all';
    let currentPlayers = 'all';

    function parseRange(value) {
        if (!value || value === 'all') return null;
        const match = /^(\d+)(?:-(\d+))?(\+)?$/.exec(value.trim());
        if (!match) return null;
        const min = parseInt(match[1], 10);
        const max = match[2] ? parseInt(match[2], 10) : (match[3] ? Infinity : min);
        return { min, max };
    }

    function buttonMatches(button) {
        // Buttons tagged "all" (the basics page) always stay visible.
        const category = button.dataset.category;
        const matchesCategory = currentCategory === 'all' || category === 'all' || category === currentCategory;

        const range = parseRange(button.dataset.players);
        const filter = FILTER_RANGES[currentPlayers];
        const matchesPlayers = !filter || !range || (range.min <= filter.max && range.max >= filter.min);

        return matchesCategory && matchesPlayers;
    }

    function applyFilters() {
        let firstVisible = null;
        navButtons.forEach(button => {
            const show = buttonMatches(button);
            button.hidden = !show;
            if (show && !firstVisible) firstVisible = button;
        });

        const active = navButtons.find(button => button.classList.contains('active'));
        if (active && active.hidden && firstVisible) {
            navigateToGame(firstVisible.dataset.game);
        }
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
     * Navigation and history
     * popstate and initial load call navigateToGame with
     * updateHistory=false so the back button is never re-pushed.
     * ------------------------------------------------------------- */
    function navigateToGame(gameId, updateHistory = true) {
        if (!sectionCache.has(gameId)) return;

        navButtons.forEach(button => {
            const on = button.dataset.game === gameId;
            button.classList.toggle('active', on);
            if (on) {
                button.setAttribute('aria-current', 'page');
            } else {
                button.removeAttribute('aria-current');
            }
        });

        gameSections.forEach(section => {
            section.classList.toggle('active', section.id === gameId);
        });

        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });

        if (updateHistory && window.location.hash !== '#' + gameId) {
            history.pushState({ game: gameId }, '', '#' + gameId);
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => navigateToGame(button.dataset.game));
    });

    window.addEventListener('popstate', event => {
        const gameId = (event.state && event.state.game) || window.location.hash.slice(1) || 'basics';
        if (sectionCache.has(gameId)) {
            navigateToGame(gameId, false);
        }
    });

    // Arrow-key navigation, scoped to the game list so the keys still
    // scroll the page everywhere else.
    if (nav) {
        nav.addEventListener('keydown', event => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            const visible = navButtons.filter(button => !button.hidden);
            const index = visible.indexOf(document.activeElement);
            if (index === -1) return;
            event.preventDefault();
            const next = event.key === 'ArrowLeft'
                ? visible[(index - 1 + visible.length) % visible.length]
                : visible[(index + 1) % visible.length];
            next.focus();
            navigateToGame(next.dataset.game);
        });
    }

    // Initial view: honor a #hash deep link, defaulting to the basics page.
    const initialHash = window.location.hash.slice(1);
    const startId = sectionCache.has(initialHash) ? initialHash : 'basics';
    navigateToGame(startId, false);
    history.replaceState({ game: startId }, '');
})();
