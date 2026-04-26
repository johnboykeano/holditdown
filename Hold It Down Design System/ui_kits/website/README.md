# HID Website UI Kit — `holditdown.lol`

A click-thru recreation of the Field Manual single-page site, broken into
reusable JSX components.

**Source of truth:** `johnboykeano/holditdown` repo, `index.html` (read in full).

## Components

| File | What it is |
|---|---|
| `Brand.jsx` | Header logo + tagline + meta + flyer thumb |
| `Sticker.jsx` | Off-axis sticker tag (pink/cyan/yellow/green/purple/orange) |
| `Card.jsx` | Default card surface with optional sticker + title |
| `Chip.jsx` | Tag chip with color variants |
| `BuildList.jsx` | Numbered build-item list (`01` `02` `03`...) |
| `BrainRow.jsx` | Label + body row, divided by hairline |
| `BigQuote.jsx` | Inverse italic slab with pink stamp |
| `Footer.jsx` | Three-column callsign footer with rotated stamp |
| `index.html` | Demo composition — drop-in version of the live site |

The kit is opinionated about typography, spacing, and shadow — see
`../../colors_and_type.css` and the visual foundations in `../../README.md`.
