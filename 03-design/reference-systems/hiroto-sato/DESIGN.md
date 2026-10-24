# DESIGN SYSTEM — HIROTO SATO (Reference 3)
**Source URL:** https://hirotos.com/  
**Extracted At:** 2026-10-24T09:59:36.524Z  
**Extractor Engine:** dembrandt / Playwright Headless Chromium  

---

## 1. Visual Identity & Philosophy
Hiroto Sato presents an uncompromising Swiss International Style portfolio. It treats the browser viewport as an architectural index and printing plate. Every pixel is locked to a strict grid. There is zero decorative fluff, zero illustrative filler, and zero marketing hype.

- **Vibe:** Swiss International Typographic Style, stark, monolithic, hyper-disciplined.
- **Surface Materiality:** Stark near-black dark canvas (`#10100F` / `rgb(16, 16, 15)`), pure stark white type (`#FFFFFF`), micro-translucent hover states (`rgba(11, 11, 10, 0.92)`).
- **Spatial Rhythm:** Highly compressed micro-units (2px, 3px, 7px, 10px) contrasted with broad architectural leaps (40px, 45px).

---

## 2. Color System
Extracted from rendered DOM and computed CSS:

| Token | Computed Value | Normalized Hex | Usage / Role |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `rgb(16, 16, 15)` | `#10100F` | Stark deep charcoal/black ground |
| `--text-primary` | `rgb(255, 255, 255)` | `#FFFFFF` | Stark white text and headline display |
| `--text-muted` | `rgba(255, 255, 255, 0.55)` | `#ffffff8c` | Micro architectural coordinates, labels, and indices |
| `--surface-hover`| `rgba(11, 11, 10, 0.92)` | `#0B0B0A` | Subtle tactile state shift on interactive triggers |
| `--border-subtle` | `rgba(255, 255, 255, 0.15)` | `#ffffff26` | 1px grid dividing lines and bounding boxes |

---

## 3. Typography Scale & Hierarchy
- **Primary Typeface:** `helvetica-neue-lt-pro` (The purest expression of the Swiss International Style; neutral, objective, and authoritative).
- **Secondary Typeface:** Technical Monospace for architectural metadata tags (`INDEX: 2026`, `COORDINATES: TOKYO`, `SYSTEM: DEV`).
- **Scale Contrast:**
  - Extreme contrast between massive display headlines and micro-monospace tags (10px–11px).
  - Headings are tight, bold, and strictly roman (normal weight, no italics).
  - Letter-spacing: Ultra-tight `-0.03em` on display type; expansive `+0.1em` on all-caps micro-metadata.

---

## 4. Spacing, Borders & Radius Scale
Observed spacing scale:
- `2px`, `3px`, `7px`, `10px`, `40px`, `45px`
- **Border Radius:** Strictly `0px` (sharp rectangular corners throughout; no rounding whatsoever).
- **Box Shadows:** `none` (Strictly flat; depth is achieved via solid contrast and stark hairline borders).

---

## 5. Component Primitives & Interaction Patterns
- **1-Line Architectural Masthead:**
  - Fixed or sticky metadata bar displaying live coordinates, operational role, and status in crisp monospaced caps.
- **Index Row / Catalog Grid:**
  - Projects and artifacts listed as clean horizontal index rows with columns for ID, Title, Category, Year, and Action link.
  - On hover: Entire row highlights cleanly with immediate typographic contrast shift.
- **Restrained Motion:**
  - Zero playful bouncing or rubber-band animations. Transitions are fast, linear or calibrated cubic-bezier (0.2s duration).

---

## 6. Strict Do's & Don'ts
- **DO:**
  - Maintain absolute typographic contrast (pure white on stark charcoal/black or vice versa).
  - Use micro-monospace architectural metadata tags for location, date, status, and system specs.
  - Keep all corners strictly square (0px radius).
- **DON'T:**
  - Do NOT use cheerful illustrations, cartoon icons, or playful gradients.
  - Do NOT use rounded pill buttons or bubbly cards.
  - Do NOT use italic display headers.
