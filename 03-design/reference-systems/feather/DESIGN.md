# DESIGN SYSTEM — FEATHER (Reference 2)
**Source URL:** https://feather.computer/  
**Extracted At:** 2026-10-24T09:58:28.232Z  
**Extractor Engine:** dembrandt / Playwright Headless Chromium  

---

## 1. Visual Identity & Philosophy
Feather embodies extreme software precision, modernist typographic discipline, and dense tabular ledgers. Instead of floating consumer SaaS cards or playful bubbles, Feather presents tools and systems like high-end Swiss architectural or scientific instrumentation. The UI is calm, rigorous, and surgical.

- **Vibe:** Modernist software ledger, Swiss technical precision, architectural, uncompromising craft.
- **Surface Materiality:** Pure crisp matte white base (`#FFFFFF`), deep neutral dark gray ink (`#333333`), secondary muted silver-gray (`#777777`).
- **Spatial Rhythm:** Tight, calibrated micro-spacing (2px, 3px, 4px, 6px, 10px, 12px) paired with macro rhythm (21.6px, 32.4px, 40px).

---

## 2. Color System
Extracted from rendered DOM and computed CSS:

| Token | Computed Value | Normalized Hex | Usage / Role |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `rgb(255, 255, 255)` | `#FFFFFF` | Crisp pure white canvas |
| `--text-primary` | `rgb(51, 51, 51)` | `#333333` | Dense neutral dark gray body and headline text (126 elements) |
| `--text-secondary` | `rgb(119, 119, 119)` | `#777777` | Technical descriptors, subheaders, and metadata (77 elements) |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | `#00000014` | Surgical 1px ledger grid lines and dividers |

---

## 3. Typography Scale & Hierarchy
- **Primary Typeface:** `Gerstner Programm` (Iconic Swiss Neo-Grotesque typeface designed by Karl Gerstner, renowned for its mathematical proportions and structural clarity).
- **Secondary / Supporting Typefaces:** `Literata` (Book serif used for long-form reading passages) and `IBM Plex Mono` / `Geist Mono` for code, schema, and technical data columns.
- **Headings & Ledger Labels:**
  - Scale: Display H1 36px–48px, Section H2 20px–24px, Ledger headers 12px–14px.
  - Font weight: 500 (Medium) for active buttons and interactive nodes; 400 for structural text.
  - Letter-spacing: Strict `-0.02em` on sans headlines, neutral `0em` on monospaced labels.

---

## 4. Spacing, Borders & Radius Scale
Observed spacing scale:
- `2px`, `3px`, `4px`, `6px`, `10px`, `12px`, `13.44px`, `21.6px`, `32.4px`, `40px`
- **Border Radius:** Minimal, surgical radius (`2px` to `4px` on interactive buttons; `0px` on layout containers).
- **Box Shadows:** `none` (Feather avoids heavy drop shadows; depth is created exclusively via crisp 1px borders and high-contrast typographic hierarchy).

---

## 5. Component Primitives & Interaction Patterns
- **Ledger Tables & Data Rows:**
  - Structured multi-column rows with 1px border-top and border-bottom.
  - Monospaced numerical indices (`01`, `02`) aligning with description columns and status tags.
- **Buttons / Actions:**
  - `.Landing1Room_viewBtn`: Font size 16px, font-weight 500, hairline 1px border, subtle background shift on hover.
  - Tactile precision without bouncy elastic animations.

---

## 6. Strict Do's & Don'ts
- **DO:**
  - Use dense tabular data structures and 1px dividers to organize complex information.
  - Pair clean neo-grotesque sans with crisp technical monospace.
  - Keep borders surgical and hairline thin.
- **DON'T:**
  - Do NOT use heavy box shadows, colored glows, or gradients.
  - Do NOT use saturated bright accent colors for background panels.
  - Do NOT hide essential information inside nested modals when it can be presented in a clean ledger.
