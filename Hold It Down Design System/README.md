# HOLD IT DOWN — Design System

> *"Control my crazy chaotic ADHD anxiety depression brain."*
> — the whole project, in one line.

**Hold It Down (HID)** is a personal brand and product ecosystem rooted in **UK garage / soundsystem culture, brutalist architecture, 90s rave-flyer print aesthetics, and xerox / sketched lo-fi mark-making**. Founded by Johnboy. Manchester · 0161.

It's the container for a few things at once:

- **BuJo App** — a shipped bullet-journal-meets-ADHD app
- **holditdown.lol** — Field Manual + second brain + BuJo, one URL
- **HID Brand** — the design system you're reading
- **HID Playlist** — the soundtrack to the build (Spotify)
- **Substack** — the writing arm, in progress

The through-line of the aesthetic is **raw + elevated**. Underground culture taking heritage and recontextualising it. Brutalism next to Ivy League. Concrete next to Milan. Lo-fi craft next to high concept.

---

## INDEX

| File / Folder | What's in it |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens — color, type, spacing, shadow, texture. |
| `SKILL.md` | Agent skill manifest. Lets Claude / Claude Code use this system for prototypes and production. |
| `assets/` | Logos, mascot, posters, photo references, flyers. **Copy from here, do not redraw.** |
| `preview/` | Card-sized HTML specimens that render in the Design System tab. |
| `ui_kits/website/` | UI kit recreating the live `holditdown.lol` Field Manual site as a click-thru prototype. |

> **Caveats / open questions** — see end of file.

---

## SOURCES

- **GitHub:** `johnboykeano/holditdown` (main) — the live `holditdown.lol` Field Manual site. `index.html` was read in full and is the source of truth for tokens, components, and the website UI kit.
- **Uploaded image references:**
  - Logotype variants — cream-on-white, cream-on-black, cream textured, HID monogram, photocopier-rendered HID
  - HID Vinyl Mascot — angry record-with-arms-and-legs, rubber-hose 1930s cartoon style, halftone-textured
  - Brutalist building drip-letter poster
  - "Dropping Soon" flyer (Dress 2 Sweat — Secret Location — Call 0161 115 3007)
  - Two flyer-wall montages (multi-color rave-flyer pinboard)
  - Mike Skinner / The Streets *Original Pirate Material* — referenced as a mood/influence
  - Manchester at-night photos — billboard with sunset stripe, "Iconic Warcs" with neon-pink UFO

> **All assets are copied into `assets/`** with descriptive names. The `uploads/` folder is the original drop and should not be referenced from production files.

---

## CONTENT FUNDAMENTALS

The voice is **first-person, plainspoken, slightly streetwise, dry**. It's a guy talking to himself in a notebook, then printing it on a poster. UK garage MC cadence — tight, end-stopped, declarative. Read the Field Manual once and you can hear the rhythm.

### Casing

- **All-caps for labels, stickers, eyebrows, build-numbers, footers** — anything structural.
- **Sentence case for body copy** — never title case.
- **Display headlines are uppercase italic**, set in the Anton/condensed display face.
- **Mid-line emphasis** uses `<strong>` rendered as ALL-CAPS at 0.9em (see `card-body strong` in the Field Manual).

### Person

- **First person, mostly singular ("I", "my brain", "my schedule")** when describing the maker's process.
- **Second person ("you", "your")** is reserved for taglines and direct address: *"Unblur Your Head."*
- **Imperatives** are common in calls-to-action: *"Hold it down."* *"Capture fast. Park the branch. Come back."*

### Tone

- **Declarative, end-stopped, rhythmic.** Sentences are short. Periods do work. Don't dress it up.
- **Vernacular is welcome** — *"the build,"* *"the drip,"* *"low-lyf,"* *"dropping soon,"* *"big up,"* *"ones and twos."*
- **Self-aware about chaos** — ADHD, anxiety, sleep, mid-day lows are named directly, not euphemised.
- **Confidence without polish.** Things "ship," "fire," "drop." Things are "load-bearing," not "important."

### Things to copy verbatim (cadence references)

> *"Music. A person nearby. Mornings and evenings. Mid-day is the low — build the schedule around this, not against it."*
>
> *"New ideas feel like relief, not distraction. The sidequest circuit is the reset circuit."*
>
> *"A good playlist is infrastructure, not background."*
>
> *"Sleep — Poor. Load-bearing. Not a character flaw."*
>
> *"DRESS 2 SWEAT — SECRET LOCATION — CALL 0161 115 3007 FOR DETAILS"*

### Numbering & dating

- **Build items numbered `01`, `02`, `03`** with a leading zero. Always 2 digits.
- **Catalog meta uses `Vol.1`, `Mind`, `Manual`** style — record-label / fanzine voicing.
- **Phone numbers spell out the area code** (Manchester `0161`).
- **Year stamps** look like *"© 2026 a hold it down productions dub"* — a Studio One / dub-record signoff.

### Punctuation marks with personality

- **`·` (middle dot)** separates meta phrases: *"Manchester · 0161"*, *"Vol.1 · holditdown.lol"*.
- **`★` (filled star)** wraps urgent labels: *"★ Right Now ★"*.
- **`—` (em dash)** is used liberally in the cadence.
- **`+`** between concepts: *"Brutalism + Ivy League"*, *"Clark's + Jamaica"*.

### Emoji

**No emoji.** The system uses unicode glyphs (`★`, `·`, `—`, `+`, `▶`, `↓`) and PNG/SVG mascots in their place. Emoji break the xerox/print illusion.

---

## VISUAL FOUNDATIONS

The visual system is a **printed object**, not a screen object. Every surface should feel like it could be photocopied, fly-posted to a wall, and survive. Hard edges, hard shadows, paper grain, halftone, no soft gradients, no soft shadows.

### Color

- **Two-tone ground.** Warm cream paper (`--paper #efe4c4`, `--paper-2 #f9f0d6`, `--paper-3 #fdf6e0`) and a deep near-black ink (`--ink #14110d`). Never pure white, never pure black. Inverse surfaces flip this.
- **Six rave-flyer accents** — `pink #ff4488`, `cyan #5ec8db`, `yellow #ffd633`, `green #a8d836`, `purple #c98aff`, `orange #ff8a3d`. Used as **sticker / chip / poster fills**, not as text colors. Pink is the primary accent.
- **Color is loud but the system is monochrome by default.** A page is mostly cream + ink, punctuated by 1–3 sticker hits. Colors don't blend, never appear next to each other in gradients, and never sit on each other (always separated by ink stroke).
- **No gradients** except on rare full-bleed photo surfaces (e.g. the Manchester sunset reference). UI gradients are forbidden.

### Type

- **Display: Anton** (Google Fonts substitute for the custom HOLD IT DOWN logotype — heavy, condensed, italic). Always uppercase. Used for headlines and the logotype.
- **Body: Inter** (substitute for Helvetica Neue — Swiss neutral grotesque). 400 for body, 800–900 for emphasis labels.
- **Mono: Space Mono** — utilitarian / technical / numeric. Used for IDs, callsigns, footer fine print.
- **Tracking** is generous in caps labels (`0.18em`–`0.24em`), tight in display (`-0.01em`).

> ⚠ **Font substitution flagged.** The HOLD IT DOWN logotype is a **custom drawn / bespoke** condensed italic display face — Anton is the closest free Google Fonts approximation. If you have the actual font file (or want a paid alternative like *Compacta Black*, *Inserat*, or *Antonio*), drop it in `fonts/` and update `colors_and_type.css`. **Until then, all display headlines use Anton + the cream paper logotype PNG for hero placements.**

### Spacing

- Standard 4px grid: `--sp-1` (4px) through `--sp-24` (96px).
- Card internal padding is large and asymmetric (28px top, 22px sides, 20px bottom) so stickers can hang off the edge.
- Sections separated by `--sp-12` (48px) — generous horizontal rules.

### Background

- **Default ground is concrete.** `--concrete-1` (board-marked) with vertical formwork-seam lines and aggregate grit. Page bodies live on this — not on cream paper.
- **Cards are paper pasted onto concrete.** A card is a `--paper-2` rectangle with a `2.5px solid var(--ink)` border and a hard `5px 5px 0 var(--ink)` stamp shadow — it should look like it was wheat-pasted on, not embedded.
- **Inverse surfaces use `--ink`** with cream text and the same grain overlay. The Big Quote pattern is canonical: ink ground, cream type, pink stamp shadow.
- **Full-bleed photography** is allowed for hero / cover surfaces — use the *Pirate Material* tower-block photo or the Manchester-at-night photos. Photos are never tinted or filtered cute; they read warm-streetlight, b&w-halftone, or saturated-night.

### Animation

- **Minimal.** This is print pretending to be a website. The system does not bounce, fade in, or slide.
- **Allowed:** instant state changes; a 60–80ms hover transition on background-color or transform; a single tactile press (1–2px translate to mimic the stamp shadow collapsing).
- **Forbidden:** parallax, scroll-triggered fades, spring eases, skeuomorphic ripples, animated gradients, lottie, motion that requires `transition: all`.

### Hover states

- **Background-color flip OR translate-to-shadow.** Two flavors:
  1. **Inverse flip** — cream button → ink button, ink text → cream text.
  2. **Stamp-press** — `translate(2px, 2px)` and shadow shrinks `5px 5px → 3px 3px` (mimics the rubber stamp pressing harder).
- **Links** underline thicker (1.5px → 2.5px) and shift to `--pink` or `--ink` depending on the surface.

### Press / active states

- **`translate(4px, 4px)` and shadow becomes `1px 1px 0 var(--ink)`.** The stamp finally hits the page. No scale, no opacity dimming.

### Borders

- **Hard. Always.** Default border is `2.5px solid var(--ink)` (`--border-w-3`).
- Hairline dividers inside cards use `1.5px solid rgba(20,17,13,0.18)`.
- Borders never round more than 4px. The system is **brutalist / right-angle by default**.

### Shadow system

- **Hard offset block shadows only.** `2px 2px 0`, `5px 5px 0`, `8px 8px 0` — same color as the ink stroke.
- **Colored block shadows** (e.g. `5px 5px 0 var(--pink)`) are reserved for hero / quote elements, never on every card.
- **Soft / blurry shadows are forbidden.** No `0 4px 12px rgba(0,0,0,0.1)` anywhere. If you find one, delete it.

### Capsules / pills vs protection gradients

- **No protection gradients.** If a card sits on a photo, it sits inside an **opaque cream rectangle with ink border + block shadow**, not under a fade-to-dark gradient.
- **Pills are reserved for stickers** — small rotated tags that hang off the top-left of a card. Body content never lives in a pill.

### Layout rules

- **Max content width 760px on phones/tablets, 960px on desktop.** This is print column width — the brand resists wide hero sections.
- **Stickers hang OFF the card edge** (`top: -13px; left: 14px`) at a `-2°` rotation. They're literal stickers slapped on the card.
- **Cards stack vertically.** Two-col grids appear only for paired cards ("What Lights Me Up / What's Hard"), and collapse on mobile.
- **Off-grid rotation is intentional.** A `-1.5°` to `-2°` rotation on stickers, stamps, and the occasional poster sells the photocopied/handmade vibe. Never rotate an entire card; rotate elements within it.

### Transparency & blur

- **Almost none.** The system is opaque by default. The two exceptions:
  - Hairline dividers (`rgba(20,17,13,0.10)`–`rgba(20,17,13,0.18)`).
  - The grain texture (`opacity: 0.07; mix-blend-mode: multiply`).
- **No backdrop-filter.** No glassmorphism. No frosted anything.

### Imagery vibe

**Architectural DNA — three reference estates.** When you draw, photograph, or specify a building for HID, it should belong to this lineage:

- **Barbican Estate, London** *(Chamberlin, Powell & Bon, 1965–76)* — board-marked concrete towers + low podium walks, Highwalks, repeated balcony chevrons, pick-hammered finish. Use for: dense vertical compositions, cream-paper-on-rough-concrete contrasts, lattice-window rhythms.
- **Trellick Tower, London** *(Ernő Goldfinger, 1972)* — separated service tower joined by sky-bridges to the slab block, full vertical fin, asymmetric silhouette. Use for: iconic single-tower comps, the "service tower + slab" shape that reads as Hold-It-Down even at thumbnail.
- **Hulme Crescents, Manchester** *(Hunt Thompson, 1972, demolished 1994)* — deck-access curved slabs that became the rave/squat heartland of late-80s/early-90s Manchester. Use as the **ghost** reference: the Crescents are gone, so depict via xerox photocopies, found photographs, halftone fragments — never as a clean render.

**Treatment rules:**
- **Manchester at night** — sodium-vapour orange, brick red, deep ink, cream sky, occasional neon-pink intrusion. *(See `imagery-pirate-tower.png` — the canonical sodium plate.)*
- **Brutalist concrete** — daylight, high-contrast, rendered as halftone xerox or full ink-on-cream drawing. *(See `imagery-xerox-tower.png` — the canonical day plate.)*
- **Mascot / character** — rubber-hose 1930s cartoon style, b&w with cream highlights, halftone textures, hand-drawn outlines.
- **Color photos when used** are saturated and **warm**. B&W photos are **high-contrast halftone with white margins** (real bad-xerox, not a grain overlay on top of grey). Never desaturated-cool / corporate-blue.
- **Flyer-archive collage** — paste flyers loose on `--wall` grey, no frames, no shadows, off-axis rotations, uneven scales. Reference: `imagery-flyer-archive-1..4.png`.

### Corner radii

| Element | Radius |
|---|---|
| Card | `0` |
| Button | `0` |
| Chip | `0` |
| Input | `0` |
| Sticker | `0` (rectangular, rotated) |
| Mascot frame | `0` |
| Pill (rare) | `999px` |

The default is `0`. If you find yourself reaching for `border-radius: 8px`, you're not making this system.

### What cards look like

- **Background:** `--paper-2`.
- **Border:** `2.5px solid var(--ink)`.
- **Shadow:** `5px 5px 0 var(--ink)` (the "stamp shadow").
- **Padding:** `28px 20px 22px`.
- **Always opaque, hard-edged, rectangular.** Often has a sticker hanging off the top-left.

---

## ICONOGRAPHY

The system **does not use a CDN icon font** (no Lucide, Heroicons, Material). Iconography is split across three levels:

1. **Brand marks (PNG / SVG, in `assets/`)** — the HID monogram, the HID vinyl mascot, the HOLD IT DOWN logotype variants. These are **the icon system at hero scale**. Use them as full-bleed character moments, never as 16px UI affordances.

2. **Unicode glyphs as functional icons** — `★ · — + ↓ ↑ → ← ▶ ◀ ●`. These appear inside stickers, in the logotype's "DOWN" arrow descender, in section labels (`★ Right Now ★`). They're set in the body type face at the same size as surrounding text, never in a separate icon-font size.

3. **No emoji.** Ever. (See Content Fundamentals.)

### When you actually need a small UI affordance

If you're building a settings panel and absolutely need a 16px gear icon, **substitute** with a CDN icon set that matches the brand's stroke weight — **2px, hard-edged, no rounded line caps**. Closest match on CDN: **Lucide** at `stroke-width="2.5"` and `stroke-linecap="square"`. Document the substitution in your component file. **Flag it in any handoff** — the brand should eventually have its own hand-drawn / xeroxed icon set, but doesn't yet.

### Logo usage

| Asset | Use |
|---|---|
| `assets/holditdown-logo-clean.png` | Default header logotype on cream backgrounds. **Crisp, no halftone.** |
| `assets/logo-textured-light.png` | Hero / poster logotype. Black halftone texture on cream, scratchy. |
| `assets/logo-cream-on-black.png` | Inverse — cream halftone logotype on `--ink` ground. |
| `assets/logo-cream.png` | Cream logotype with subtle paper texture, on white/transparent. |
| `assets/HID-monogram-clean.png` | Square HID monogram. Use at 32–96px as favicon / app icon / sticker mascot. |
| `assets/HID-monogram.png` | Cream textured HID monogram. Use larger, on photos / colored fields. |
| `assets/mascot-vinyl.png` | The Vinyl Mascot. Hero illustration. Don't crop, don't recolor. |
| `assets/poster-brutalist-drip.png` | Drip-letter poster with brutalist building. Reference for poster comps. |
| `assets/flyer-dropping-soon.png` | Reference flyer with mascot, "DROPPING SOON" copy, callsign. |
| `assets/flyer-wall-1/2.png` | Multi-color flyer wall. Reference for paper-color rotation. |
| `assets/photo-billboard-sunset.jpg` | Manchester billboard / sunset stripe. Hero photo. |
| `assets/photo-iconic-warcs-ufo.jpg` | Manchester at night with UFO. Hero photo, mood/cover. |
| `assets/album-pirate-material.png` | The Streets — *Original Pirate Material*. **Reference only**, do not ship. |

### Favicon

`favicon.svg` is a 100×100 rounded-square ink tile with the cream "HID" set in italic Impact. Imported from the live site.

---

*See `colors_and_type.css` for the canonical token list and `preview/` for visual specimens.*

---

## CAVEATS — please review

- **Display font is a substitution.** The HOLD IT DOWN logotype is a custom drawn / bespoke condensed italic. I'm using **Anton** (Google Fonts) as the closest free match. Drop a real font file into `fonts/` and update `colors_and_type.css` if you have one (Compacta Black, Inserat, or Antonio are paid-but-closer alternatives).
- **Body font is Inter, used as a Helvetica Neue substitute.** If the brand owns Helvetica Neue licenses, swap it in `colors_and_type.css`.
- **No icon set yet.** Iconography uses unicode glyphs + brand PNGs only. If/when small UI icons are needed, the recommended substitute is Lucide at `stroke-width="2.5"` `stroke-linecap="square"` — flagged in handoff. A bespoke xeroxed icon set would suit the brand much better.
- **BuJo App UI kit not yet built.** The Field Manual website kit is complete; the BuJo app at `turnthepage.holditdown.lol` is documented but not yet recreated as components — it requires the source repo (it appears to be a separate codebase).
- **Stock photography is referenced from the uploads.** For production use replace with rights-cleared UK urban-night / brutalist photography in the same warm-sodium / b&w-halftone direction.
