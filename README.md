# The Card Game Compendium

Rules for 61 card games playable with an ordinary 52-card deck — from Spades
and Cribbage to Belote, Truco and Daifugō — plus a primer on the fundamentals
every one of them is built from.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell and all game rule content |
| `css/styles.css` | The whole design system — paper, ink, rules, both schemes |
| `js/app.js` | Game manifest, index, search, navigation, collapsible sections |
| `fonts/` | Self-hosted Bodoni Moda and Spectral (woff2, latin) |

No build step, no dependencies. Open `index.html`, or serve the folder with any
static file server.

## Design

The page is set as a printed rulebook rather than a web app: warm paper stock,
ink-black text, and a single accent drawn from the subject itself — **card
red**. Structure comes from hairline rules and numbered sections instead of
boxes and shadows; there are no gradients, no translucency, and no icons.
Suit pips (♠ ♥ ♦ ♣) are the only ornament, used to mark the seven families of
game in the index.

Two typefaces do the work: **Bodoni Moda** for display and **Spectral** for
everything else. Night mode is not grey — it is the deep green of a card table
under a low lamp.

## Features

- **61 games + the basics**, every one written to the same template
  (Object → Contents → Setup → Let's Play! → Scoring → Winning the Game →
  Variations)
- **An index, not a menu** — games grouped by family, with origin and player
  count, the way a reference book lists its contents
- **Search** the whole compendium from the rule bar; press `/` from anywhere,
  `Enter` to open the first match
- **Filter** by family and by player count, with real numeric range matching
  (a 2–7 player game shows up under "three or four")
- **Numbered, collapsible rule sections** built on native `<details>`, with
  per-game expand and collapse
- **Day / night / auto** colour schemes, remembered between visits
- **Deep links** — every game has a `#hash` URL, with working back and forward
- **Accessible**: skip link, ARIA state on every control, visible focus,
  `prefers-reduced-motion` respected, no horizontal scroll at 360px
- **Print-friendly** — sections expand, chrome disappears, ink goes black
