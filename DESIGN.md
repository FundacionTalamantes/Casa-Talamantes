# Design System: Casa Talamantes

## 1. Visual Theme & Atmosphere

A warm, grounded editorial interface with confident asymmetric layouts and restrained spring-physics motion. The atmosphere is historical yet aspirational — like a well-preserved hacienda opened to the future. Generously spaced sections create breathing room that communicates trust and seriousness. The palette evokes adobe clay, dry Chihuahuan earth, and the green of irrigated valleys — never tropical, never corporate. Every typographic decision reinforces authority and humanity simultaneously.

- **Density:** 4 — Art Gallery Airy. White space is intentional, not empty.
- **Variance:** 6 — Offset Asymmetric. No centered hero. No equal-column feature rows. Split screens and staggered grid dominant.
- **Motion:** 5 — Fluid CSS. Subtle scroll reveals, spring-physics for interactive elements, no cinematic overload.

---

## 2. Color Palette & Roles

- **Hacienda Canvas** (#FAF7F2) — Primary background. Warm off-white with a subtle sand undertone. Never pure white.
- **Adobe Wall** (#8B4513) — Single accent color. Used exclusively for primary CTAs, active links, focus rings, and progress bars. Saturation 72% — restrained, never neon.
- **Charcoal Ink** (#1C1917) — Primary text. Stone-950 depth. Never pure black (#000000).
- **Muted Clay** (#78716C) — Secondary text, captions, metadata, helper copy. Stone-500.
- **Dust Border** (rgba(168, 162, 158, 0.3)) — Card borders, 1px structural dividers, section separators.
- **Ochre Warmth** (#D4A853) — Decorative accent only. Used for decorative rule lines, icon fills, and subtle highlights. Never as a CTA color.
- **Valley Green** (#2C5F2E) — Functional accent for success states, impact counters, and positive indicators only. Not a primary brand color.
- **Surface White** (#FFFFFF) — Card backgrounds and form fields only. Always with 1px Dust Border.

**Banned combinations:** Adobe Wall + Valley Green as neighboring colors. Pure white backgrounds. Cool gray tones (Slate, Zinc) — this palette is exclusively warm (Stone/Sand).

---

## 3. Typography Rules

- **Display / Hero:** `Fraunces` (Google Fonts) — Variable weight, optical size large. Track-tight at -0.02em. Weight 700–900 for headlines. Conveys editorial gravitas with warmth. Used only for H1 and pull quotes.
- **Section Headers:** `Outfit` — Weight 600–700. Letter-spacing -0.01em. Modern, clean, readable at all sizes. Used for H2, H3, card titles.
- **Body / Running Text:** `Outfit` — Weight 400. Line-height 1.7. Max 65 characters per line. Color: Charcoal Ink. Secondary body in Muted Clay.
- **Numeric / Data:** `Outfit` Weight 700 with tabular numbers enabled (`font-variant-numeric: tabular-nums`). Used for statistics, percentages, progress values.
- **Banned fonts:** `Inter`, `Roboto`, `Open Sans`, `Lato`, `Poppins`, `Times New Roman`, `Georgia`, `Garamond`, `Palatino`. These are explicitly forbidden.
- **Scale hierarchy:** 72px (clamp) → 48px → 32px → 24px → 18px → 16px → 14px. No intermediate values.
- **Minimum body size:** 16px (1rem) always. Never 14px for running paragraphs.

---

## 4. Component Stylings

**Buttons (Primary):**
Shape: Rectangular with 6px border-radius — never pill-shaped, never perfectly square.
Fill: Adobe Wall (#8B4513) solid.
Text: Hacienda Canvas (#FAF7F2), Outfit 600, 15px.
Hover: Darken 8% (`#7A3C10`). No glow, no shadow expansion.
Active: Translate -1px on Y axis. No outer glow. Tactile push feedback only.
Padding: 14px 28px minimum. Touch target 44px minimum height.

**Buttons (Ghost/Secondary):**
Shape: Same 6px radius. 1.5px border in Adobe Wall.
Text: Adobe Wall color.
Hover: Adobe Wall background at 8% opacity, text stays Adobe Wall.
Never use Ochre Warmth or Valley Green for button fills.

**Cards:**
Border-radius: 12px — generous but not bubbly.
Background: Surface White (#FFFFFF).
Border: 1px Dust Border.
Shadow: `0 2px 16px rgba(28, 25, 23, 0.06)` — diffused, warm-tinted. Never blue-tinted shadows.
Hover: Shadow deepens to `0 8px 32px rgba(28, 25, 23, 0.12)`. No transform scale.
Usage rule: Cards only when elevation communicates hierarchy. For feature lists or stat rows, use border-top dividers on Hacienda Canvas instead.

**Progress Bars:**
Track: rgba(139, 69, 19, 0.15) — Adobe Wall at 15% opacity.
Fill: Adobe Wall (#8B4513).
Height: 8px. Border-radius: 4px.
Animation: Expand from 0 to target width on viewport entry. Spring easing, 800ms.

**Form Inputs:**
Label: Above input always. Outfit 600, 14px, Charcoal Ink.
Input: 1px Dust Border, 10px border-radius, 14px 16px padding.
Focus: 2px Adobe Wall ring, no glow spread.
Error: Valley Green BANNED for errors. Use `#B91C1C` (deep red) with inline text below input.
No floating labels. No placeholder-as-label.

**Skeletal Loaders:**
Match exact dimensions of content being loaded.
Shimmer animation: horizontal gradient sweep from Hacienda Canvas to Surface White.
No circular spinners.

---

## 5. Layout Principles

**Grid architecture:** CSS Grid primary. `display: grid` with named template areas. Flexbox only for inline alignment (nav items, button contents). Never `calc()` percentage hacks.

**Max-width containment:** 1320px centered container. Inner content max-width 800px for running text blocks. Sections breathe: `padding-block: clamp(4rem, 10vw, 8rem)`.

**Hero section:** Left-aligned, split-screen layout. Text block occupies 55% left column. Visual element (geometric composition or contextual image) occupies 45% right. NEVER centered. NEVER full-width background text overlay.

**Feature/program rows:** Asymmetric 2-column zig-zag. First item: text left, visual right. Second item: visual left, text right. Third item reverts. BANNED: 3 equal-width cards in a horizontal row.

**Statistics block:** Full-width band in Adobe Wall background. Stats arranged in a 4-column grid with Hacienda Canvas text. Numbers in Fraunces 72px, label in Outfit 16px below.

**Section separators:** Use negative space (padding variation) or a single 1px Dust Border horizontal rule. Never decorative wave SVGs or diagonal cuts.

**Z-index discipline:** No overlapping elements. Every element occupies its own clean spatial zone. Absolute positioning only for decorative, non-interactive elements (background accents). Never position content text absolutely over other content.

---

## 6. Motion & Interaction

**Entry animations:**
All sections fade-in and translate-up 24px on viewport entry. Duration: 500ms. Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (spring-like deceleration).
Staggered list items: 80ms delay between each child. Never mount all at once.
Trigger: IntersectionObserver at 15% threshold.

**Spring physics for interactive elements:**
Button active state: `transform: translateY(-1px)` on hover, `translateY(0)` on active.
Card hover: `box-shadow` deepens. No transform scale (scale causes layout shift perception).
Transition: `transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1)` — slight spring overshoot.

**Perpetual micro-interactions:**
Progress bars in impact section: Animate fill once on entry, then hold static. No looping pulse.
CTA button: Subtle shimmer sweep (gradient animation) every 4 seconds at idle state.

**Performance rules:**
Animate ONLY `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`, `padding`, `margin`.
No JavaScript-driven frame loops for decorative effects. CSS animations only for perpetual states.
No `backdrop-filter: blur()` on mobile — performance catastrophic below 768px.

---

## 7. Anti-Patterns (Banned)

**Typography:**
- No `Inter`, `Roboto`, `Open Sans`, or any neutral grotesque font
- No generic serif fonts: `Times New Roman`, `Georgia`, `Garamond`, `Palatino`
- No gradient text effect on large headings (the `background-clip: text` webkit trick)
- No all-caps body text

**Color:**
- No pure black (`#000000`) anywhere
- No neon or outer glow shadows (`box-shadow` with spread > 0 and opacity > 0.3)
- No oversaturated accents (saturation > 80%)
- No AI purple/blue neon aesthetic — no `#6366F1`, `#8B5CF6`, `#3B82F6` tones
- No cool-toned grays (Slate, Zinc, Gray) — warm Stone palette exclusively

**Layout:**
- No 3-equal-column card grids for feature sections
- No centered Hero section
- No horizontal overflow on mobile
- No overlapping content elements
- No diagonal section cuts or wave SVG dividers

**Copy & Content:**
- No AI cliché verbs: "Elevate", "Unleash", "Seamless", "Next-Gen", "Cutting-edge", "Empower" (as noun-of-the-day)
- No fake round numbers: not `99.9%`, not `100%` for in-progress milestones
- No filler UI text: "Scroll to explore", "Swipe down", bouncing chevron arrows
- No custom mouse cursors

**Components:**
- No generic circular loading spinners
- No floating label inputs
- No pill-shaped buttons (border-radius > 50px)
- No tooltips triggered on hover for critical information (mobile has no hover)
- No infinite-scroll carousels without explicit navigation controls

**Images:**
- No broken Unsplash links
- No stock-photo-aesthetic imagery (generic smiling strangers, empty conference rooms)
- No low-resolution images upscaled via CSS

---

## 8. Contextual Notes for Stitch Prompts

When generating screens for Casa Talamantes, Stitch should understand:

1. **The subject is a historical hacienda** being restored as a community center. Visual language should evoke adobe, earth, and heritage — not tech, startup, or modernity.

2. **The audience is dual:** Corporate donors (FECHAC, foundations) who need credibility signals, AND individual community members who need warmth and accessibility.

3. **The location is rural Chihuahua, Mexico.** References to landscape, desert palettes, and regional architecture are appropriate. Urban sleekness is not.

4. **The cause is urgent.** Drug cartel recruitment of children is the core problem. The design must feel serious and committed — never playful, never whimsical, never shallow.

5. **The project is in progress.** The hacienda is 70% restored. The design language should reflect aspiration and momentum — not completed triumph.

6. **Primary conversion goal:** Attract aliados (strategic partners/donors). Every CTA and trust signal should serve this goal.
