# Standard Deck Card Games

A single-page **Card Game Compendium**: rules for 61 card games from around the
world — all playable with standard 52-card decks — plus a "Learn the Basics"
primer on trick-taking, melding, shedding, and bidding concepts.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell and all game rule content |
| `css/styles.css` | Liquid-glass design system, light/dark themes, print styles |
| `js/app.js` | Game library grid, search, navigation, theme toggle, collapsibles |
| `fonts/` | Self-hosted Crimson Text and Inter (woff2) |

No build step — open `index.html` in a browser, or serve the folder with any
static file server.

## Features

- **61 games + basics**, every game formatted to the same instruction template
  (Object → Contents → Setup → Let's Play! → Scoring → Winning the Game →
  Variations)
- **Collapsible rule sections** with per-game Expand all / Collapse all
  controls, built on native `<details>`/`<summary>` for keyboard and
  screen-reader support
- **Game library home page** — a searchable card grid of every game, filtered
  by category (trick-taking, shedding, matching, combat, casino, solitaire,
  bluffing) and player count, with numeric range matching; press `/` to search
- **Theme toggle** (auto / light / dark, remembered between visits) and
  prev/next links to browse from game to game
- **Liquid-glass UI** — translucent, blurred surfaces over a soft gradient,
  in both light and dark color schemes
- **Accessibility**: skip link, ARIA states on filters and navigation,
  `prefers-reduced-motion` support, visible focus styles
- **Deep links** — every game has a `#hash` URL, and browser back/forward
  work as expected
- **Print-friendly** — sections auto-expand and chrome is hidden when printing
