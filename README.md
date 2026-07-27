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
| `favicon.svg` / `.ico` / `apple-touch-icon.png` | Site mark — a spade in ink and cream |

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
- **Print-friendly** — sections expand, chrome disappears, ink goes black

## Accessibility

The page targets **WCAG 2.2 Level AA**, the standard referenced by EN 301 549
(EU), Section 508 (US), and ISO/IEC 40500. Verified with axe-core across six
states — index and game pages, light and dark, filtered, searching, and with the
theme forced against the system preference — with **zero violations**, plus
manual checks of the criteria automated tools cannot judge:

| Criterion | Result |
| --- | --- |
| 1.4.3 Contrast (Minimum) | All text ≥ 4.5:1 in both schemes; lowest is 4.9:1 |
| 1.4.11 Non-text Contrast | Field borders and focus rings ≥ 3:1 |
| 1.4.10 Reflow | No horizontal scroll at 320 px |
| 1.4.4 Resize Text | No loss at 200% |
| 1.4.12 Text Spacing | No clipping or overflow under the required spacing |
| 2.1.4 Character Key Shortcuts | The `/` shortcut can be switched off (colophon) |
| 2.4.11 Focus Not Obscured | `scroll-padding` keeps focus clear of the sticky bar |
| 2.5.8 Target Size (Minimum) | Every control ≥ 24 × 24 px |
| 1.3.1 / 4.1.2 Structure & Roles | Landmarks, ARIA state on every control, native `<details>` |

Colour is never the only signal — active filters carry an underline as well as a
colour change — and decorative glyphs (suit pips, the `+`/`−` markers, the `·`
separators) are given empty alternative text so screen readers skip them.

One judgment call worth recording: WCAG 3.1.2 (Language of Parts) is treated as
satisfied by the proper-noun and technical-term exemption. Game names and terms
of art — *Daifugō*, *Weis*, *Envido*, *Sette Bello* — function as vocabulary of
the surrounding English text. A handful of quoted foreign phrases are the
residual grey area.
