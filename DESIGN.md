---
name: Benjamin Pasternak
description: A career portfolio set as a Swiss concert poster on one continuous off-white sheet.
colors:
  sheet-paper: "#f4f4f1"
  poster-ink: "#111111"
  graphite-ink: "#4d4d48"
  signal-red: "#e3241b"
  signal-red-text: "#c41d15"
  column-hairline: "#d9d9d4"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(64px, min(14.2vw, 20svh), 214px)"
    fontWeight: 850
    lineHeight: 0.82
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 70"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(64px, 10vw, 150px)"
    fontWeight: 850
    lineHeight: 0.85
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 70"
  numeral:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(56px, 6.4vw, 96px)"
    fontWeight: 850
    lineHeight: 0.85
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
    fontVariation: "'wdth' 75"
  statement:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(26px, 3vw, 44px)"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 90"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(22px, 2vw, 30px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 88"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.35
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  margin: "clamp(20px, 3.4vw, 48px)"
  gutter: "clamp(12px, 1.7vw, 24px)"
  row-pad: "18px"
  block: "28px"
  bar: "16px"
  section: "clamp(96px, 10vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.poster-ink}"
    textColor: "{colors.sheet-paper}"
    rounded: "{rounded.none}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-text}"
    textColor: "{colors.sheet-paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.poster-ink}"
    rounded: "{rounded.none}"
    padding: "6px 14px"
  button-outline-hover:
    backgroundColor: "{colors.poster-ink}"
    textColor: "{colors.sheet-paper}"
  nav:
    backgroundColor: "{colors.sheet-paper}"
    textColor: "{colors.poster-ink}"
    height: "56px"
  ruled-row:
    backgroundColor: "transparent"
    textColor: "{colors.poster-ink}"
    padding: "18px 0"
  red-bar:
    backgroundColor: "{colors.signal-red}"
    height: "{spacing.bar}"
---

# Design System: Benjamin Pasternak

Scope: this system governs the portfolio page only (`index.html`, `styles.css`, `main.js`, and the profile images). `sproutmark-privacy.html`, `lamplistener-privacy.html`, `.well-known/`, `.nojekyll` and the reserved `/v1/` path share no CSS or JS with it and are not part of this design system. Do not restyle them to match.

## Overview

**Creative North Star: "The Swiss Grid Poster"**

The page is one continuous off-white sheet printed like an International Typographic concert poster. A strict 12-column grid is visible: hairline grey column lines run behind the whole page, from the nav to the footer, and every section snaps its content to those same columns. Hierarchy comes from size, weight and grid position. There are no cards, boxes, shadows or rounded corners.

Type is the main material. One variable family, Archivo, does everything. It runs heavy and condensed (width 68–75, weight 850) for the name, section heads and numbers, and at normal width for reading text. Real, labeled numbers do the work that illustration would do on another page. They are set in signal red over a short black rule with their label beneath. One red diagonal crosses the upper right of the first viewport as the career trajectory, and it draws once on load.

The density is that of a poster: very large display type, generous vertical air between sections (96–160px), and tight, ruled lists inside them. Projects and roles are horizontal ruled lines, not tiles. The signature interaction is a ruled line that opens its detail in place.

**Key Characteristics:**
- One sheet, one visible 12-column grid (6 at tablet, 4 at phone) behind every section.
- One family, Archivo, at condensed heavy widths for display and normal width for text.
- Black ink, one signal red, off-white paper; red is reserved for bars, the diagonal, numbers and small markers.
- Flat, square and ruled: 1px and 2px ink rules carry all structure.
- The ruled line that opens in place is the signature component.
- Motion is limited to two moments: the diagonal draws once, and rows open with a short ease-out.

## Colors

A printed-poster palette: paper, ink, a graphite second ink, and one signal red in two strengths.

### Primary
- **Signal Red** (`signal-red`): the poster's one color. Used for the bleed bars above the hero and contact heads, the hero diagonal, the large labeled numbers, list-item dashes and the open/close cross. Only at large sizes or as non-text marks: it reaches 4.2:1 on the sheet, which passes only for large type.
- **Signal Red, Text Strength** (`signal-red-text`): the same red pulled darker for anything small. Hover color for links and nav, the open-source year label, copy-status text, the focus ring, text selection, and the primary button's hover fill behind paper text (5.4:1 both ways).

### Neutral
- **Sheet Paper** (`sheet-paper`): the single page background and the text color on ink fills. The nav uses this paper at 82–94% opacity with a 6px blur so the grid lines pass under it.
- **Poster Ink** (`poster-ink`): all headings, body text, every structural rule, and the primary button fill (17:1 on paper).
- **Graphite Ink** (`graphite-ink`): secondary text such as sublines, org lines, system results, stack lists, notes and the footer (7.7:1).
- **Column Hairline** (`column-hairline`): the visible grid's 1px column lines and nothing else. Decorative, never used for text or rules that carry meaning.

### Named Rules
**The Two-Reds Rule.** Red is one hue at two strengths. `signal-red` is for marks and type 40px and up. Anything smaller, and any fill behind light text, uses `signal-red-text`. Never set small text in `signal-red`.

**The Ink-Not-Grey Rule.** Structural rules (section heads, list rows, the nav border, the CTA divider) are drawn in poster ink. The hairline grey belongs only to the column grid, so structure and grid stay distinguishable.

## Typography

**Display Font:** Archivo variable (wdth 62–125, wght 100–900), with Helvetica Neue, Arial, sans-serif
**Body Font:** Archivo at width 100
**Label/Mono Font:** none; labels are Archivo bold with tabular numerals

**Character:** A single grotesk stretched between two voices. Condensed and very heavy, it reads as poster lettering. At normal width it is a plain, legible text face. The `wdth` axis, not a second family, creates the contrast.

### Hierarchy
- **Display** (850, wdth 70, `clamp(64px, min(14.2vw, 20svh), 214px)`, 0.82): the name in the first viewport, and the contact head "Email Benjamin." (wdth 68, up to 210px). Set as two stacked lines, flush left.
- **Headline** (850, wdth 70, `clamp(64px, 10vw, 150px)`, 0.85): section heads (Work, Systems) sitting on a 2px ink rule. A smaller step (`clamp(40px, 5vw, 72px)`) is used for minor sections such as Education.
- **Numeral** (850, wdth 75, `clamp(56px, 6.4vw, 96px)`, 0.85, tabular): the labeled results, in signal red. 40px on phones.
- **Statement** (650, wdth 90, `clamp(26px, 3vw, 44px)`, 1.3): the single first-person statement beside the photo. The hero title (750, wdth 85, `clamp(24px, 2.4vw, 36px)`, 1.08) sits between this and Title.
- **Title** (750, wdth 88, `clamp(22px, 2vw, 30px)`, 1.1): role names in work rows. System names use a fixed 19px at wdth 90.
- **Body** (400, 17px, 1.55; 16px on phones): reading text, capped at 46–70ch depending on column.
- **Label** (600–700, 13.5–15px, tabular numerals): dates, years, fact labels, nav links. Sentence case, no tracking, never uppercase.

### Named Rules
**The One Family Rule.** Archivo is the only typeface. Contrast comes from the width axis (68–100) and weight (400–850), never from a second family.

**The Width Means Rank Rule.** The narrower the width, the louder the role: 68–75 for display and numbers, 85–90 for titles and statements, 100 for reading text.

## Layout

The page is a single 12-column sheet. The maximum width is 1680px, the side margin is `clamp(20px, 3.4vw, 48px)` and the gutter is `clamp(12px, 1.7vw, 24px)`. A fixed layer of column lines is drawn on exactly that grid behind all content. Every section is a grid row with the same template, and nested rows (work entries, system lines) re-declare the same 12 columns so their content lands on the visible lines.

Recurring column assignments at desktop width:
- **Dates and years** take the first 2–3 columns, names and roles the next 3–7, and results and detail columns 6–11. The last column holds the open/close mark.
- **Hero:** the name block spans the sheet (at short viewports its glyphs fill about six columns). Title and positioning sit in columns 1–6 and the three labeled numbers in 7–12. A full-width ink rule above the CTA line closes the viewport.
- **About:** the photo takes columns 1–4 and the text 6–12, aligned to the bottom.
- **Red bars** bleed off the left edge of the sheet into the margin and stop on a column line (6 columns in the hero, 8 at contact).

Responsive: at 960px and below the grid becomes 6 columns, and at 600px and below 4. The visible column lines reduce to match. Content restacks onto the new columns instead of shrinking. The numbers drop under the lede, and on phones each number sits in an 80px column beside its label. Dates move above roles, and the primary button goes full width.

Vertical rhythm: sections are separated by `clamp(96px, 10vw, 160px)` (72–112px for minor sections and 120–200px before contact). Inside sections, rows use 18px top padding after a rule and 28–36px block gaps. The nav is a sticky 56px bar and anchors offset by the same height.

### Named Rules
**The Visible Grid Rule.** Anything placed on the page aligns to the visible column lines. If an element doesn't start and end on a column line, it isn't finished.

## Elevation & Depth

Flat by doctrine. There are no box shadows, no tonal surface layers and no raised containers anywhere. Depth is given by the sheet's own print materials: rule weight (2px ink for section and list starts, 1px ink between rows), scale contrast between display and text, and overlap. The red diagonal and the grid lines sit behind the type on the same plane. The one translucent element is the sticky nav: paper at 82% opacity with a 6px backdrop blur, falling back to 94% opacity, separated by a 1px ink rule.

### Named Rules
**The Printed Sheet Rule.** If it couldn't be printed on one flat sheet of paper, it doesn't belong. Use rules, scale and position, never shadows or lifted surfaces.

## Shapes

Square and linear. Every corner is 0px, including buttons, the photo, focus outlines and bars. The form vocabulary is limited to horizontal rules (1px and 2px ink), solid red bars (16px tall), short red dashes (12×2px) as list markers, a two-stroke red cross (16px, 2px strokes) that rotates into a minus when a row opens, and the single diagonal stroke (4px). The profile photo is cropped to 3:4 and rendered in grayscale with slightly raised contrast, so it prints in the same ink as the type.

## Components

### Buttons
Blunt and printed: a solid block of ink with no ornament.
- **Shape:** square (0px).
- **Primary:** poster ink fill, paper text, 17px weight 750, `15px 28px` padding. Used once per view for "Email Benjamin". Full width on phones.
- **Hover / Focus:** the fill shifts to text-strength red over 150ms. Pressed state drops 1px. Focus is the global 3px text-strength red outline at 3px offset.
- **Outline (utility):** a 2px ink border, 14px weight 750, `6px 14px`. Fills with ink on hover. Used for the Copy action beside the email address.

### Text Links
- **Style:** inherit ink, underlined with a 2px rule at a 4px offset, weight 650. Hover turns them text-strength red. Nav links and the nav name are not underlined and turn red on hover.

### Navigation
- **Style:** a sticky 56px bar on translucent paper over a 1px ink rule. The name is on the left at 15px weight 800, and Work / Systems / Contact are on the right at 15px weight 600 with 28px gaps (16px and 14px on phones). No active-state indicator, no hamburger. The three links stay visible at every width.

### Labeled Number
- **Style:** a signal-red numeral in the Numeral role, then a 2px ink rule, then a 13.5px weight-600 label with the context and source. Always three at most, always real figures, laid out in three equal columns.

### Ruled Row (Work entry)
- **Style:** a full-width row between 1px ink rules (the first rule after a section head is also ink). Dates are in columns 1–3 in bold tabular figures, and the role, organization and points are in columns 4–10. The points are marked with 12×2px red dashes and capped at 70ch.

### Opening Line (signature)
- **Style:** a native disclosure row on the 12-column grid. Years in columns 1–2, name in 3–5 (19px weight 750), one-line result in graphite in 6–11, and the red cross in column 12. The list begins with a 2px ink rule and each line ends with a 1px ink rule.
- **Behavior:** hovering turns the name text-strength red. Opening the row grows its height over 0.4s with `cubic-bezier(0.16, 1, 0.3, 1)` while the cross's vertical stroke rotates flat over 0.3s. The body text and stack list sit under the result column. Reduced motion removes both transitions.

### Red Bar and Diagonal
- **Bar:** a 16px signal-red block that bleeds left into the margin, placed above a display head (hero and contact only).
- **Diagonal:** one 4px signal-red line crossing the upper right of the first viewport behind the type, drawn once on load over 1.2s (after a 0.25s delay) with the ease-out curve. It is static under reduced motion. Only one per page.

## Do's and Don'ts

### Do:
- **Do** place every element on the visible 12-column grid (6 at 960px, 4 at 600px) and keep the column lines running behind the whole sheet.
- **Do** build hierarchy from Archivo's width and weight axes: wdth 68–75 at weight 850 for display and numbers, wdth 100 at weight 400 for text.
- **Do** use `signal-red` only for bars, the diagonal, numbers 40px and up, and small marks. Switch to `signal-red-text` for any red text under 40px and for fills behind paper text.
- **Do** separate items with 1px and 2px poster-ink rules, and present lists as ruled lines that open in place.
- **Do** keep motion to the diagonal draw and the row-open ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`), both disabled under reduced motion.
- **Do** render photographs in grayscale so they print in the sheet's ink.

### Don't:
- **Don't** use cards, boxes, tiles, tinted panels or any container with a background different from the sheet.
- **Don't** add box shadows, glows or lifted surfaces. The sheet is flat.
- **Don't** round any corner; the radius is 0px everywhere.
- **Don't** introduce a second typeface or a second accent hue, or bring back a dark theme. The system is one light sheet.
- **Don't** add small uppercase tracked labels above headings. Section heads stand alone on their rule.
- **Don't** draw more than one diagonal, or use red bars as general decoration. Each bar sits on a display head.
- **Don't** apply this system to the privacy pages, `.well-known/` or `/v1/`.
