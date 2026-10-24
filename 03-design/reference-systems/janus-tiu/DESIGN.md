# DESIGN SYSTEM — JANUS TIU (Reference 4)
**Source URL:** https://portfolio.janustiu.com/  
**Extracted At:** 2026-10-24T10:02:00.736Z  
**Extractor Engine:** dembrandt / Playwright Headless Chromium  

---

## 1. Visual Identity & Philosophy
Janus Tiu presents work as a curated, museum-grade exhibition archive. Rather than an aggressive sales pitch or generic tech resume, the portfolio creates an aura of contemplative craftsmanship. Projects are framed as numbered "Exhibits" with genuine artifacts, clear problem narratives, and thoughtful technical provenance.

- **Vibe:** Museum-grade exhibition archive, archival scholarship, calm curation.
- **Surface Materiality:** Warm oat/cream paper ground (`#FBFAF6` / `rgba(251, 250, 246, 0.88)`), bespoke deep archival navy ink (`#0F2C56` / `rgb(15, 44, 86)` with 1,360 occurrences), subtle archival steel/sky blue accent (`#9CBBE0`).
- **Spatial Rhythm:** Calibrated multi-tier spacing from 1px up to 110px.

---

## 2. Color System
Extracted from rendered DOM and computed CSS:

| Token | Computed Value | Normalized Hex | Usage / Role |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `rgba(251, 250, 246, 0.88)`| `#FBFAF6` | Warm tactile oat/cream paper canvas |
| `--text-ink` | `rgb(15, 44, 86)` | `#0F2C56` | Deep archival navy ink (1,360 text instances) |
| `--accent-sky` | `rgb(156, 187, 224)` | `#9CBBE0` | Archival steel/sky blue accent (favicons & highlights) |
| `--surface-hover`| `rgba(15, 44, 86, 0.07)` | `#0f2c5612` | Soft translucent navy wash on interactive hover |
| `--border-subtle` | `rgba(15, 44, 86, 0.14)` | `#0f2c5624` | 1px archival exhibition borders and frames |

---

## 3. Typography Scale & Hierarchy
- **Primary Display Typeface:** `Instrument Serif` (Contemporary, razor-sharp editorial serif with tall x-height, refined proportions, and distinctive classic character).
- **Secondary / Supporting Typeface:** `Inter` or `Geist` for crisp body copy and technical tags.
- **Hierarchy:**
  - Display Titles: Large, poised editorial serif (42px–64px), upright roman, generous breathing room.
  - Exhibit Numbers: Monospaced or uppercase serif numerals (`EXHIBIT 01`, `EXHIBIT 02`).
  - Narrative Prose: 16px–18px, relaxed line-height 1.65, dark navy ink on warm cream.

---

## 4. Spacing, Borders & Radius Scale
Observed spacing scale:
- `1px`, `3px`, `4px`, `6px`, `8px`, `10px`, `11px`, `14px`, `15px`, `18px`, `20px`, `36px`, `56px`, `96px`, `110px`
- **Border Radius:** Minimal architectural framing (`4px` to `6px` on subtle image wrappers; `0px` on main section grids).
- **Box Shadows:** Clean, featherweight inner or hairline borders; no muddy black drop shadows.

---

## 5. Component Primitives & Interaction Patterns
- **Exhibition Framing:**
  - Projects presented as self-contained exhibits with provenance metadata (Year, Role, Tools, Artifacts).
  - Authentic demonstration loops and structural diagrams rather than buzzword marketing.
- **Tactile Interactive Buttons:**
  - Refined button states with subtle navy tint shift on hover (`rgba(15, 44, 86, 0.07)`).
  - Clear, accessible focus rings and micro-interactions.

---

## 6. Strict Do's & Don'ts
- **DO:**
  - Use deep archival navy ink (`#0F2C56`) on warm cream paper (`#FBFAF6`) for an elevated, memorable contrast.
  - Frame case studies as numbered engineering exhibits with genuine technical narratives.
  - Pair sharp editorial serif display with clean, legibly tracked body copy.
- **DON'T:**
  - Do NOT use generic black-and-white or generic cyan/purple SaaS palettes.
  - Do NOT use exaggerated floating cards with giant blur glows.
  - Do NOT claim fabricated production numbers or fake metrics.
