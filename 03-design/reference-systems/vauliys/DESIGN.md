# DESIGN SYSTEM — VAULIYS (Reference 1)
**Source URL:** https://vauliys.com/  
**Extracted At:** 2026-10-24T09:54:17.589Z  
**Extractor Engine:** dembrandt / Playwright Headless Chromium  

---

## 1. Visual Identity & Philosophy
Vauliys embodies an archival editorial atmosphere with warm literary sensibility. Rather than a modern glossy tech landing page or dark dashboard, it evokes a finely printed letterpress monograph or literary magazine. Whitespace is expansive, generous, and asymmetrical, allowing headings to breathe and establishing a quiet, authoritative presence.

- **Vibe:** Archival editorial, quiet luxury, literary, warm humanist.
- **Surface Materiality:** Flat tactile cream paper (`#FDFDF5`), warm charcoal ink (`#282828`).
- **Spatial Rhythm:** Extreme vertical whitespace with jumps from 32px up to 192px and 208px between narrative movements.

---

## 2. Color System
Extracted from rendered DOM and computed CSS:

| Token | Computed Value | Normalized Hex | Usage / Role |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `rgb(253, 253, 245)` | `#FDFDF5` | Archival cream paper base background |
| `--text-primary` | `rgb(40, 40, 40)` | `#282828` | Deep warm charcoal ink for all editorial copy |
| `--text-muted` | `rgba(40, 40, 40, 0.65)` | `#282828a6` | Subdued metadata, folios, footnotes |
| `--border-subtle` | `rgba(40, 40, 40, 0.12)` | `#2828281f` | Hairline editorial dividers and rule lines |

---

## 3. Typography Scale & Hierarchy
- **Primary Typeface:** `Henriette` (Editorial Serif with strong humanist personality, sturdy bracketed serifs, and high stroke contrast).
- **Fallback Stack:** `Henriette, Garamond, "Times New Roman", serif`
- **Headings:**
  - H1 Display: Fluid clamp, ~48px–72px, normal style (strictly roman, not italic), line-height 1.15, generous letter-spacing.
  - H2 Section: 32px–40px, editorial serif, tight tracking.
  - Body: 16px–19px, line-height 1.6, comfortable reading measure (max 65ch).
  - Micro-metadata: 11px–13px uppercase with wide tracking (+0.08em).

---

## 4. Spacing, Borders & Radius Scale
Observed spacing scale:
- `4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `192px`, `208px`
- **Border Radius:** `0px` (Strictly non-rounded, sharp rectilinear editorial layout). No pill shapes, no 12px bubbly cards.
- **Box Shadows:** `none` (Elevation is expressed through pure spatial grouping and 1px hairlines).

---

## 5. Component Primitives & Interaction Patterns
- **Buttons / Actions:**
  - Understated text links with subtle animated underlines or minimal border-bottom.
  - Humane direct interactions: 1-click email copy action (`hello@vauliys.com`) with instant, discreet inline feedback.
- **Narrative Framing:**
  - Quotes and statements float freely in whitespace without rounded card containers.
  - Asymmetric multi-column editorial broadsheets rather than standard 3-card feature grids.

---

## 6. Strict Do's & Don'ts
- **DO:**
  - Use high-contrast, warm charcoal typography on warm cream paper.
  - Allow large asymmetrical whitespace margins around key statements.
  - Keep borders razor-sharp (0px radius) and hairline thin (1px).
- **DON'T:**
  - Do NOT use floating drop shadows, neon glow effects, or purple/cyan accents.
  - Do NOT wrap quotes or services in rounded card boxes.
  - Do NOT use generic sans-serif for major editorial headlines.
