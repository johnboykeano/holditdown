# HOLD IT DOWN — Design References

> This document is the research layer the README doesn't have.
> Each named reference is broken down into: what it is, what it looks like,
> and what specific design decisions it should produce in this system.
> These are the source materials. The tokens in `colors_and_type.css` should
> trace back to something in here.

---

## ARCHITECTURE

---

### Barbican Estate, London
*Chamberlin, Powell and Bon — 1965–76*

**What it is.**
The largest brutalist residential complex in Europe. Three 40-storey towers (Cromwell, Shakespeare, Lauderdale) rising above a dense low-rise podium of terraces, lakes, and elevated walkways called the Highwalks. Built on a City of London bomb site. Conceived as a self-contained city within a city — homes, arts centre, school, shops, church, all woven together by a raised pedestrian network that never touches street level.

**What it looks like.**
The signature finish is pick-and-bush-hammered concrete — the formwork came off and labourers went over every surface with pneumatic hammers, exposing the aggregate and creating a deliberately rough, pitted texture. This is not smooth concrete. It catches light differently at every hour. Horizontal joint lines mark each pour. Balconies repeat in chevron rhythms — a geometric beat that runs the length of every terrace. At ground level: warm earth-tone brick pavers, large concrete planters, and the constant presence of water (the lake, the ornamental pools). The palette is raw concrete grey, earth-brick red-brown, water reflection, and planted green. The scale is overwhelming but the detail is fine.

**Design decisions it produces.**
- The board-marked formwork lines in `--concrete-1`'s background texture are a direct Barbican reference — vertical timber-plank shadows at 64px intervals.
- The aggregate grit dots in the concrete CSS (`radial-gradient 3px 3px`) simulate pick-hammered surface.
- The warm concrete colour (`#cfccc4`) — never cool grey, never blue-grey. The Barbican is warm.
- Elevated walkways as metaphor: navigation elements sit *above* the content field, not embedded in it. Sticky headers are high-walk headers.
- Repetitive geometric rhythm: chip rows, build-list items, and divider lines reference the chevron-balcony beat.
- No radii. The Barbican has no curves — every meeting of surfaces is a right angle or a chamfer.

**What to avoid.**
The Barbican is not grim. It's not dystopian. It was aspirational — arts-focused, expensive to build, genuinely luxurious inside many of the flats. Don't render it as oppressive. The HID concrete ground should feel solid and load-bearing, not cold or threatening.

---

### Trellick Tower, London
*Ernő Goldfinger — 1972*

**What it is.**
A 31-storey residential tower in North Kensington (W10), connected to a slender detached service tower by covered sky-bridges at every third floor. The service tower contains the lifts, rubbish chutes, and boiler — separated entirely from the living block to eliminate noise transmission. Built for the Greater London Council. Goldfinger lived in one of his own flats in a similar building (Balfron Tower, Poplar) to test his designs. Grade II* listed in 1998 after years of being vilified.

**What it looks like.**
The defining feature is the silhouette: two distinct vertical masses at different heights, joined by thin horizontal bridges. The main slab is 31 storeys. The service tower is taller, slender, and sits to one side. At thumbnail scale this silhouette is immediately recognisable — no other building in London has this profile. The concrete is board-marked (in-situ pour), rougher and more directional than the Barbican's hammered finish. Long horizontal balconies on the main block break up the vertical. The sky-bridges are exposed concrete ribs at intervals — structural moments that read as texture from a distance.

**Design decisions it produces.**
- The **two-mass silhouette** is the HID icon shape. Where possible, compositions should have a primary mass and a secondary slender element. The logo + flyer sticker on the Field Manual header is this composition.
- The detached service tower = the **secondary column** in two-column layouts. The main content is the slab; the sidebar or secondary card is the service tower.
- Sky-bridges = **divider elements** that connect but don't merge. The `divider-label` component (horizontal rule with floating label) is a sky-bridge.
- The sky-bridge interval rhythm (every third floor) is why spacing jumps coarsely: `--sp-4`, `--sp-8`, `--sp-12` — not `--sp-5`, `--sp-7`.
- Goldfinger insisted materials show themselves honestly — no cladding, no concealment. HID's equivalent: no soft shadows, no glassmorphism, no decorative gradients. Structure is ornament.

**What to avoid.**
Trellick is not wide. It's vertical and slender. Avoid wide, squat layouts in the HID system — they go against the grain of this reference.

---

### Hulme Crescents, Manchester
*Hugh Wilson and Lewis Womersley — built 1972, demolished 1994*

**What it is.**
Four curved deck-access housing slabs in Hulme, South Manchester, named after architects: Robert Adam Crescent, John Nash Crescent, Charles Barry Crescent, and William Kent Crescent. 923 dwellings. Intended to replace Victorian terraced slums and recreate a sense of street life at elevation — the decks were wide enough for milk floats to pass. Within ten years: structural failure, damp, rat infestation, council abandonment. Rent stopped being charged. The Crescents became a squat city — artists, musicians, anarchists, travellers. The Kitchen (three flats knocked into one) became the most important unofficial venue in Manchester. Outdoor parties, cellar raves, guerrilla clubs. Photographed obsessively by Al Baker before demolition in 1993–94. The Crescents are gone.

**What it looks like.**
Unlike the Barbican or Trellick, the Crescents exist now **only in documentation** — found photographs, xerox copies, local newspaper archives, and Al Baker's black and white prints. The visual register is therefore: grain, blur, bad reproduction, photocopied A4, fly-posted on a wall. No clean architectural renders exist as an HID reference point. The curved crescent plan — four massive arcing slabs — is recognisable from aerial photographs. At ground level it was a labyrinth of covered decks, satellite dishes, spray paint, and improvised structures. The scale of the decks was inhuman — wide enough to drive on but exposed to Manchester rain.

**Design decisions it produces.**
- **The ghost rule:** any image of the Hulme Crescents in HID materials must use the xerox/halftone treatment — heavy grain, high contrast B&W, white margins, bad-photocopy quality. Never a clean render. The building is gone; show it as a memory.
- **Curved elements** — the one place the HID system allows curves — are Hulme references. If a layout moment calls for an arc (e.g. a poster component, a collage shape), it comes from the crescent plan.
- **Deck-width = breathing room.** The decks were wide. Where components need internal space — card padding, section margins — err wide. This is the Hulme deck.
- **The squat/rave connection** is why the rave-flyer accents exist at full fluorescent saturation. The Kitchen didn't use pastel. Flyers had to be visible fly-posted on concrete in the dark.
- The **Hulme ghost palette:** `--concrete-4` (#4f4d46) + near-white (`--paper-3`) + pure black (`--ink`) — high contrast, no midtones. This is the xerox plate for Hulme-referenced layouts.

**What to avoid.**
Do not romanticise the Crescents as purely utopian. They were also cold, damp, and badly built. The rave culture happened *because* the council had given up — it was occupation, not invitation. Keep the edge in any Hulme-referencing material.

---

## MUSIC / RECORD LABELS

---

### Burial — *Burial* (Hyperdub, 2006)

**What it is.**
Debut album by William Bevan (Burial), released anonymously on Kode9's Hyperdub label. The music is south London at night: broken 2-step rhythms, garbled vocal samples, sub-bass and static. Recorded on Sound Forge. Bevan grew up in south London and made the record about the feeling of walking home alone after a club has closed — the city as an indifferent, beautiful void.

**What it looks like.**
The cover was made by Bevan himself from a satellite aerial photograph of South London near Wandsworth Prison — the intersection of Trinity Road and Windmill Road. Shot from directly above, at night. The city is a dark field punctuated by the orange-white points of streetlights and lit windows. No people are visible. The text — *BURIAL* — is set in a plain, almost system-font grotesque, white, lowercase, bottom-left. Minimal to the point of almost nothing. Bevan cited Nil By Mouth (Gary Oldman, 1997) as the visual reference: "It's the only film I've seen anyone get London properly in it — just distant lights, down the end of your road."

**Design decisions it produces.**
- **The night mode:** `--ink` (#14110d) as full ground, `--paper-3` as the only text colour. No accents. No stickers. The Burial mode is the inverse of the rave-flyer mode — both live in the system, neither contaminates the other.
- **Distant lights pattern:** small scattered radial gradients (`rgba(253,246,224,0.6)` — near cream) on an ink ground simulate the aerial-city plate. Use as a full-bleed background for night/atmospheric moments.
- **The anonymity principle:** Burial was anonymous for years. HID's equivalent is the monogram — `HID` instead of the full name in contexts where the brand needs to be present but quiet. The monogram on night surfaces, never the full wordmark.
- **Plain text as design:** the *Burial* typographic treatment (near-system, plain, no effort) is an option for captions, footnotes, and metadata — the anti-design move within an otherwise heavy-designed system.
- **Nil By Mouth as photo reference:** south London night photography in warm sodium light, shot realistically, not styled. Any HID night photography should look like a still from this film.

---

### Burial — *Untrue* (Hyperdub, 2007)

**What it is.**
Second album. Still anonymous. More melodic, more vocal, more direct emotional impact than the debut. Pitchfork's album of the year. The cover art is by Georgina Cook — a south London-based photographer known for gritty urban imagery.

**What it looks like.**
A blurred photograph of a figure in a public or semi-public space — the blur is not an artistic effect applied in post, it is motion blur from the photograph itself. The palette is near-monochrome: white, grey, and deep almost-black. No warm tones. The text is sparse — *Burial / Untrue* in plain type. For the 20th anniversary Hyperdub reissue, the cover was stripped back to Burial's own hand-drawn original image — further reducing the design to the most elemental mark possible.

**Design decisions it produces.**
- **The blur treatment:** for HID photography used in atmospheric/background contexts (not hero identity moments), motion blur is allowed — and is preferred over a grain overlay. It reads as presence-in-motion, not as Instagram filter.
- **The monochrome register:** on surfaces where all rave-flyer accents are stripped — ink ground, paper text, no stickers, no chips — this is *Untrue* mode. Use it for long-form reading surfaces, quiet states, error states, empty states.
- **Hand-drawn mark as override:** when the system needs to feel most human and least designed, Burial's principle applies — strip back to the drawn mark. In HID this means reaching for the mascot, the hand-lettered elements, or the xerox-poster treatment rather than the clean token system.
- **The Georgina Cook principle:** real photography of real places in available light. No styled shoots. No stock. If a photo goes into HID, it was taken somewhere, it looks like somewhere.

---

## ALSO IN THE REFERENCE PACK (brief entries)

---

### The "DROPPING SOON" Flyer (HID source asset)
*See `assets/flyer-dropping-soon.png` and `assets/flyer-wall-1/2.png`*

The canonical HID flyer format: heavy condensed wordmark at top, mascot in the middle, call-to-action copy at the bottom, all on a single solid accent-colour field. The flyer-wall shows the system in rotation across six paper colours — pink, yellow, cyan, purple, green, white/cream — each flyer identical in layout but distinguished only by paper stock. This is the **colour-mode system**: each accent colour is not just a chip fill, it is a complete background mode for the whole surface. A "yellow mode" flyer and a "pink mode" flyer are both valid, equal treatments.

**Design decision:** build a flyer-mode CSS class for each accent (`.hid-mode-yellow`, `.hid-mode-pink`, etc.) that flips the entire surface background. This is missing from the current design system and needs to be added.

---

### Drip / Gothic Logotype Variant
*See `assets/imagery-xerox-tower.png` for usage context*

The HOLD IT DOWN wordmark in the xerox-tower poster uses a **drip gothic / horror condensed** face — not Anton. The letters have ink-drip descenders and a gothic slab quality closer to a metal/horror typographer's hand than to a Swiss grotesque. This is **an alternative logo variant**, not the primary mark. The primary logotype is the cream-on-black halftone wordmark (`assets/holditdown-logo-clean.png`). The drip variant is for poster contexts, physical print, and moments where maximum visual aggression is needed.

**To add to asset list:**
| Asset | Use |
|---|---|
| `assets/imagery-xerox-tower.png` | Shows drip-logo in situ — use as reference for poster comps |
| *(drip font file not yet in system)* | When sourced: drop in `fonts/` and register in `colors_and_type.css` as `--font-display-alt` |

---

### Manchester at Night (HID photo register)
*See `assets/imagery-pirate-tower.png` and `assets/photo-iconic-warcs-ufo.jpg`*

The canonical HID night photograph: sodium-vapour orange through windows, dark brick, cream sky, occasional neon intrusion (the pink UFO in the Warcs photo). This is not blue-hour, not golden hour, not a styled shoot. It is the specific colour temperature of a Manchester night — the grid-window warmth of a tower block, the orange cast of the streetlight era. Reference also: the aerial view from Burial's self-titled — city as distant lights.

**Colour reference extracted from the pirate-tower photo:**
- Window warmth: approximately `#e8a04a` (amber-sodium)
- Dark sky: approximately `#1a1410` (near-ink, warm)
- Cream spill from lit windows: `--paper-bone` (#f0e8d8)
- The neon intrusion (UFO, signage): `--pink` (#ff2d7a) or `--magenta` (#ff1ea0)

These are not in the current token system as a named night-mode palette. They should be.

---

*Last updated: 2026-04-26*
*All asset references are relative to the `Hold It Down Design System/` folder.*
