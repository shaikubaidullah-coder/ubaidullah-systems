# MASTER PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Shaik Ubaidullah — Personal Portfolio Redesign & Rebuild

**Document Version:** 1.0.0  
**Status:** DRAFT // PENDING OWNER APPROVAL  
**Author:** Senior Product Strategist, UX Architect & Design Systems Lead  
**Target Workspace:** `ubaidullah-portfolio-redesign/`  
**File Location:** `ubaidullah-portfolio-redesign/02-prd/PORTFOLIO_REDESIGN_PRD.md`  
**Research Source of Truth:** `ubaidullah-portfolio-redesign/01-research/PORTFOLIO_CONTEXT_EXTRACTION.md`  
**Target Domain:** `https://shaikubaidullah.com`  
**Primary Tech Stack Baseline:** Vanilla HTML5, CSS3 (Custom Design Tokens), Modern ES Modules, Vite 5.x

---

## 1. Executive Summary

### 1.1 Problem Statement
The current portfolio of **Shaik Ubaidullah** succeeds in documenting his core offerings (AI agents, Voice AI, and workflow automation), but its visual execution relies on common AI-generated tropes: a generic centered hero, dark-teal tinted glow boxes, uncalibrated particle canvas animations, an inaccessible custom cursor, duplicate section content (Skills vs. Services), and drawn UI chrome with mock traffic-light window dots.

Crucially, the website suffers from three critical technical and credibility vulnerabilities:
1. **Credibility Disconnect:** SEO metadata claims *"Senior AI Automation Engineer and Systems Builder... mathematical precision"*, directly contradicting the visible learning timeline (*"Started learning Q1 2025"*).
2. **Non-Functional Conversion Funnel:** The contact form executes only a browser `console.log()` and shows a fake success notification; visitor inquiries are permanently lost.
3. **Broken & Discordant Project Artifacts:** Project 1 and Project 2 lack live links or repositories. Furthermore, Project 2 ("AI Voice Receptionist") displays a vector semantic-search mockup rather than a voice interface. The 404 error page is deleted, causing silent routing failures.

### 1.2 Redesign Mission & Core Vision
Transform Shaik Ubaidullah's portfolio from a generic, template-like AI landing page into a **high-agency, tactile, editorial engineering portfolio**. The redesign will present him as a modern **AI Automation Engineer & Systems Builder** who designs resilient, production-grade workflows. 

The aesthetic will blend the **Swiss typographic rigor of Hiroto Sato**, the **tactile data-density of Feather Computer**, the **numbered exhibit curation of Janus Tiu**, and the **warm editorial restraint of Vauliys**, governed strictly by the anti-AI-slop principles of **Hallmark**, **Design-Taste-Frontend**, and **Apple Design**.

### 1.3 Key Measurable Outcomes
- **Zero False Claims:** 100% transparent distinction between working prototypes, client implementations, and architectural concepts.
- **Flawless Conversion Flow:** Working contact dispatch pipeline (via verified API/webhook) with instant fallback and confirmed email delivery.
- **Architectural Streamlining:** Consolidation of 8 overlapping virtual routes into a tight, authoritative 4-part information architecture (`Work`, `Systems & Services`, `About & Journey`, `Contact`).
- **High-Standard Performance & Accessibility:** 100/100 Lighthouse Performance, 100 Accessibility (WCAG 2.1 AA), zero layout shifts (`CLS = 0`), and total responsiveness from 320px to 1440px+.

---

## 2. Project Background and Current State

### 2.1 Existing Asset & Context Baseline
According to the baseline audit in `PORTFOLIO_CONTEXT_EXTRACTION.md`:
- **Owner:** Shaik Ubaidullah.
- **Location:** Andhra Pradesh, India (available remote worldwide).
- **Contact:** `shaikubaidullah689@gmail.com`.
- **Profiles:** GitHub (`shaikubaidullah-coder`), LinkedIn (`shaik-ubaidullah-610284394`).
- **Core Visual Assets:** High-resolution portrait photograph (`profile.jpg`, 1024×1024), brand mark (`logo.png`, 180×180), multi-resolution favicons.
- **Target Tech Ecosystem:** n8n, OpenAI API, Claude API, Vapi, Retell AI, Supabase, Webhooks.

### 2.2 What Must Be Preserved (Non-Negotiable)
- Shaik Ubaidullah's core identity, location, contact channels, and professional links.
- The 4 core commercial capabilities: **Custom AI Agents**, **Workflow Automation**, **Voice AI Assistants**, and **Custom AI Integrations**.
- The 5-stage engineering delivery methodology: **Discover ➔ Plan ➔ Build ➔ Launch ➔ Improve**.
- The honest educational narrative (n8n Academy, DeepLearning.AI, hands-on experimentation).
- The operating quote: *"Every automation should solve a real business problem—not create unnecessary complexity."*

### 2.3 What Must Be Fixed or Eliminated
- **Eliminate:** The custom JavaScript cursor (violates accessibility and mobile UX; banned by `design-taste-frontend`).
- **Eliminate:** The generic background floating particle canvas (high CPU cost, clichéd AI aesthetic).
- **Eliminate:** Fake window chrome with drawn traffic light dots (banned by `hallmark` Gate 47).
- **Eliminate:** Overlapping, redundant sections (merge Skills and Services; integrate Process into Systems).
- **Fix:** Wire the contact form to a verified backend endpoint.
- **Fix:** Restore the deleted `404.html` with clean routing recovery.
- **Fix:** Create a dedicated, high-resolution OpenGraph social preview asset (`social-share-preview.png`).
- **Fix:** Align the visual mockup of Project 2 to an authentic Voice AI call simulator.

---

## 3. Goals and Non-Goals

### 3.1 Primary Goals
1. **Position as an Authentic, High-Agency AI Engineer:** Highlight rapid execution, deep workflow orchestration knowledge, and practical business ROI without inflated corporate seniority titles.
2. **Elevate Visual & Interaction Taste:** Implement an editorial layout featuring distinctive typography (e.g. `Cabinet Grotesk` or `Geist` paired with `Instrument Serif` or `Newsreader`), calibrated neutral backgrounds with high-contrast accents, and tactile spring physics.
3. **Show Concrete Technical Competency:** Transform project presentations from static cards into rich, interactive technical blueprints (showing node workflows, payload schemas, and simulated voice call states).
4. **Deliver Guaranteed Inquiry Capture:** Ensure potential clients can reach Shaik with zero friction via a functional form, direct email copy action, and booking link.

### 3.2 Non-Goals
1. **No Backend Over-Engineering:** We will not introduce heavy backend servers, microservices, or complex database infrastructures when a static JAMstack build with headless form handling serves the user better.
2. **No Fabricated Social Proof:** We will NOT invent client testimonials, fake revenue metrics, or fictional case-study adoption numbers ("+400% revenue", "trusted by 500+ enterprises").
3. **No Flamboyant 3D or Heavy Canvas Graphics:** We will avoid resource-heavy Three.js canvases or WebGL shaders that drain mobile batteries or delay initial page render.
4. **No Framework Churn:** Unless explicitly required, we will preserve the lightning-fast, zero-dependency vanilla ES module + Vite architecture rather than adding React/Next.js overhead solely for a personal portfolio.

---

## 4. Target Audiences and Primary User Journeys

### 4.1 Audience Prioritization Matrix

| Audience Tier | Persona Description | What They Care About | Conversion Goal |
| :--- | :--- | :--- | :--- |
| **Tier 1 (Primary: 60%)** | **Startups, Agencies & Small Business Founders** | "Can this person automate my repetitive tasks, stop lead leakage, and save my team 15+ hours a week without breaking things?" | **Book a discovery call / Submit project brief** |
| **Tier 2 (Secondary: 25%)** | **Technical Hiring Managers & AI Agency Recruiters** | "Does he truly understand webhooks, LLM schema parsing, tool calling, and API rate limits, or is he just wrapping Zapier?" | **Review GitHub, inspect project architecture, connect on LinkedIn** |
| **Tier 3 (Tertiary: 15%)** | **AI Peer Builders & Collaborators** | "What tools is he using? How is he orchestrating n8n and Vapi? Is he open to building together?" | **Follow on GitHub / Social channels** |

### 4.2 Key User Journeys
1. **The Time-Starved Founder (Primary Conversion):**  
   Arrives via LinkedIn ➔ Scans asymmetric Hero (understands offering in 3 seconds) ➔ Glances at verified Lead Qualification flow diagram ➔ Reviews fixed-scope service offerings ➔ Clicks "Let's Talk" ➔ Submits 3-field project brief ➔ Receives instant success receipt with calendar scheduling link.
2. **The Skeptical Technical Auditor (Validation Journey):**  
   Arrives via GitHub ➔ Inspects "AI Voice Receptionist" architecture blueprint ➔ Examines data payload schemas, latency numbers (<1s delay), and webhook routing ➔ Reads honest 2025 learning journey and self-directed academy projects ➔ Verifies zero inflated claims ➔ Reaches out for engineering collaboration.

---

## 5. Positioning and Credibility Requirements

### 5.1 Harmonizing Title & Timeline (The Truth Anchor)
- **The Core Conflict:** The old metadata claimed *"Senior AI Automation Engineer and Systems Builder"* while the timeline showed learning began in 2025.
- **Approved Redesign Positioning:**  
  **"AI Automation Engineer & Systems Builder"**  
  *Tagline:* "Engineering autonomous AI agents, voice systems, and resilient workflow pipelines that eliminate operational drag."
- **Narrative Framing:** Frame Shaik as a **modern, agile AI native** who builds with today’s bleeding-edge agentic ecosystem (n8n, Vapi, MCP, Claude API) with rapid development velocity, clean system logic, and zero legacy baggage.

### 5.2 Evidence & Transparency Tiers
Every project or case study displayed MUST carry an explicit status tag:

| Tag Level | Definition | Visual Indicator | Required Evidence |
| :--- | :--- | :--- | :--- |
| **Production Deployment** | Active client or live public tool with real users | Solid Green Pill (`#00E676`) | Public URL, live endpoint, or video walkthrough |
| **Working Prototype** | Functional end-to-end build running in sandbox/staging | Amber Pill (`#FFB300`) | Interactive simulator, demo video, or GitHub repo |
| **Architectural Concept** | Validated system design with mocked data & schemas | Slate Blue Pill (`#32E0C4`) | Full node pipeline diagram, JSON schemas, logic spec |

---

## 6. Reference Website Research and Comparison Matrix

During Phase 2 research, all four reference sites were inspected live via Playwright browser automation and computed DOM evaluation.

### 6.1 Reference Analysis Breakdown

#### Reference 1: Vauliys (`https://vauliys.com/`)
- **Visual Identity:** Warm editorial, bookish, intimate, handcrafted paper aesthetic (`#fdfdf5` cream background with `#282828` charcoal typography).
- **Typography:** Custom serif font "Henriette", literary quotes, conversational micro-copy (*"Reading for the details, doodling in the margins."*).
- **Interaction Highlights:** Email quick-copy button with visual confirmation; "Send a letter" contact metaphor with "Post" action.
- **Key Takeaway for Ubaidullah:** Warm off-white/charcoal palette alternative, tangible personal voice, and humane interactive buttons.
- **What to Avoid:** Whimsical doodle aesthetic and bookmark metaphors (inappropriate for B2B business automation).

#### Reference 2: Feather Computer (`https://feather.computer/`)
- **Visual Identity:** Hyper-tactile software canvas displaying living application controls and dense data tables.
- **Typography:** Sophisticated multi-font system pairing `Literata` (serif) with `IBM Plex Mono` / `Geist Mono` and `Gerstner Programm`.
- **Interaction Highlights:** Monospace table views (`0/42 Rows`, `Status`, `Sources`), interactive widget cards, tactile button toggles.
- **Key Takeaway for Ubaidullah:** Presenting AI automations not as vague marketing cards, but as **living software data displays** with monospace telemetry.
- **What to Avoid:** Unbounded draggable canvas (can cause navigation confusion on mobile).

#### Reference 3: Hiroto Sato (`https://hirotos.com/`)
- **Visual Identity:** Swiss International Typographic Style, stark black-and-white architectural minimalism (`#ffffff` canvas, `#10100f` text).
- **Typography:** Uppercase metadata labeling (`BASE: TOKYO, JAPAN`, `FOCUS: CREATIVE DEVELOPMENT / MOTION / 3D MODELING`, `INDEX: PORTFOLIO 2026`).
- **Interaction Highlights:** Extremely clean 4-link uppercase navigation (`HOME`, `PROJECTS`, `ABOUT`, `CONTACT`), zero fluff, rigid structural grid.
- **Key Takeaway for Ubaidullah:** High-authority metadata grid labels (`SYS.LOC`, `SYS.STATUS`, `SYS.SPEC`), high-contrast clarity, and disciplined negative space.
- **What to Avoid:** Pure 3D WebGL focus without business context; lack of client ROI explanation.

#### Reference 4: Janus Tiu (`https://portfolio.janustiu.com/`)
- **Visual Identity:** Curated exhibition / keepsake box ("After Hours: 8 exhibits · Mixed media") on a muted slate-blue atmosphere (`rgb(179, 207, 236)`).
- **Typography:** "Instrument Serif" headline paired with "DM Sans" clean body copy.
- **Interaction Highlights:** Projects framed as physical "Exhibits" (Exhibit 01, Exhibit 02...) with video screen recordings, explicit tool partnerships (*"In partnership with Cursor"*, *"In partnership with Anthropic"*), direct external links with arrow glyphs (`↗`).
- **Key Takeaway for Ubaidullah:** Numbered exhibit framing (`SYSTEM 01`, `SYSTEM 02`), explicit ecosystem badges (`BUILT WITH N8N + CLAUDE`), and direct demonstration video/interactive loops.
- **What to Avoid:** Ambient audio soundtracks ("Sound on") and playful toy physics.

### 6.2 Reference Comparison Matrix

| Reference | Palette / Tone | Typography | Hero Structure | Project Presentation | Key Pattern to Adopt |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Vauliys** | Warm cream `#fdfdf5` + Charcoal | Editorial Serif ("Henriette") | Asymmetric left-aligned + live email copy button | Visual grid with category filter tags | Distinctive personal micro-copy & tactile form buttons |
| **Feather** | Crisp white + Software slate | `Literata` + `IBM Plex Mono` + `Geist Mono` | Tactile OS interface preview | Dense interactive tables & live status cards | Monospace technical telemetry & schema data density |
| **Hiroto Sato** | Stark Swiss monochrome (`#fff` / `#101010`) | `helvetica-neue-lt-pro` (All caps) | Signal pole headline + architectural metadata | Numbered list index with technical specs | Uppercase metadata labeling (`SYS.SPEC`, `LOC`) & grid rigor |
| **Janus Tiu** | Atmospheric slate-blue (`#b3cfec`) | `Instrument Serif` + `DM Sans` | Editorial headline + curated box metaphor | Numbered "Exhibits" with screen recording reels | Numbered systems (`SYSTEM 01`), tool attribution badges |
| **Shaik Ubaidullah (Redesign)** | **Tactile Architectural Dark Slate** (`#090D0E` deep graphite base, `#F3F5F6` text, `#00E676` emerald, `#32E0C4` cyan) | **`Cabinet Grotesk` or `Geist` (Display) + `Inter`/`Geist` (Body) + `JetBrains Mono` (Data)** | **Asymmetric split: Authority statement + Live system telemetry node** | **Curated Numbered Systems with live interactive simulators & schemas** | **Synthesizes Hiroto's metadata rigor, Janus's exhibit framing, and Feather's data density** |

---

## 7. Recommended Creative Direction

### 7.1 "The Tactical Systems Atelier" Direction
Rejecting both the generic purple-glow "AI landing page" and cold corporate agency templates, the redesign adopts **The Tactical Systems Atelier** direction:
- **Concept:** An engineer’s live workbench. It feels like stepping into the personal engineering terminal of an automation specialist who builds high-reliability software pipelines.
- **Mood & Atmosphere:** Disciplined, technical, quiet, tactile, and mathematically precise.
- **Palette Architecture:**
  - **Base Canvas:** Deep Charcoal Slate (`#0B0F10`), preventing the harshness of pure `#000000`.
  - **Surface Elevation:** Tinted Graphite (`#12181A`) with hairline borders (`rgba(255, 255, 255, 0.08)`).
  - **Typography:** Crisp Off-White (`#F4F6F8`) for primary text; Muted Steel (`#8C9BA0`) for body/secondary text.
  - **Precision Accents:** Electric Emerald (`#00E676`) for active system states, and Cold Ice Cyan (`#32E0C4`) for data routing and links.
- **Typography Pairing:**
  - *Headings:* `Geist` or `Cabinet Grotesk` (weights 600, 700) — clean, modern, architectural.
  - *Accent/Editorial Moments:* `Instrument Serif` (italic or roman) used strictly for subtle editorial emphasis.
  - *Body Text:* `Geist` or `Inter` (weights 400, 500) capped at `65ch` measure.
  - *Telemetry & Code:* `JetBrains Mono` or `Geist Mono` for all dates, system tags, schemas, and metrics.

---

## 8. Sitemap and Information Architecture

### 8.1 Route Consolidation Strategy
The existing website has 8 virtual routes that cause duplicate content and dilute focus. We will consolidate into a streamlined **4-Core Navigation Architecture**:

```text
CURRENT ARCHITECTURE (8 ROUTES - DILUTED)
/  ──►  /about  ──►  /skills  ──►  /services  ──►  /projects  ──►  /process  ──►  /faq  ──►  /contact

STREAMLINED REDESIGN ARCHITECTURE (4 CORE SECTIONS)
├── 1. Overview & Systems (Hero + Featured Work / Architectural Blueprints)
├── 2. Solutions & Methodology (Combined Services + 5-Stage Process + Tooling Matrix)
├── 3. About & Verification (Philosophy + Journey Timeline + Education + FAQ)
└── 4. Direct Terminal (Direct Channels + Validated Contact Dispatch)
```

### 8.2 Clean URL Structure & Fallbacks
- `/` ➔ Primary unified application view.
- `/work` ➔ Direct scroll/filter anchor to Featured Systems & Blueprints.
- `/services` ➔ Direct scroll anchor to Solutions, Pricing/Scope Models, and Methodology.
- `/about` ➔ Direct scroll anchor to Background, Learning Timeline, and FAQ.
- `/contact` ➔ Direct scroll anchor to Inquiry Form and Communication Channels.
- `/404` ➔ Dedicated, beautifully styled fallback page with "Return to Systems Overview" button.

---

## 9. Page-by-Page Content Requirements

### 9.1 Section 1: Hero & Real-Time Status (`#overview`)
- **Metadata Bar (Hiroto Sato inspired):**
  - `LOCATION: ANDHRA PRADESH, INDIA [AVAILABLE WORLDWIDE]`
  - `FOCUS: AI AGENTS // VOICE AI // WORKFLOW AUTOMATION`
  - `STATUS: AVAILABLE FOR NEW CLIENT PROJECTS (Q4 2026)`
- **Hero Statement (Asymmetric Left-Aligned):**
  - **H1:** "Engineering custom AI agents and voice systems that run business operations on autopilot."
  - **Lead Copy:** "I build resilient, webhook-driven automations and conversational voice bots that eliminate manual tasks, connect your software stack, and save growing teams 20+ hours every week."
- **Primary CTAs:**
  - Primary Button: `Explore Systems [Work]`
  - Secondary Button: `Book Discovery Call` / `Direct Email Copy`
- **Right Column / Hero Artifact (Feather inspired):**
  - Instead of a static portrait or empty canvas, an interactive **Live Automation Telemetry Card**:
    - Displays a live-ticking system uptime indicator.
    - Demonstrates a visual 3-node mock workflow (`Webhook Ingest` ➔ `Claude Schema Parse` ➔ `CRM Update`).
    - Gives immediate visual proof of technical capability within 3 seconds of landing.

### 9.2 Section 2: Featured Systems & Architectural Blueprints (`#work`)
- **Header:** `SYSTEMS ARCHITECTURE // 02` — "Engineered Automation Case Studies"
- **System 01: Lead Qualification & CRM Orchestration Pipeline**
  - *Status Badge:* `Working Prototype // Staging Verified`
  - *Problem:* Inbound web signups sit for hours without response; sales teams waste 60% of their day manually sorting unqualified spam.
  - *Engineered Solution:* An n8n automation pipeline triggered by webhooks. Claude API evaluates incoming lead data against strict custom JSON schemas, updates Supabase records, and instantly delivers calendar booking invitations to qualified buyers.
  - *Technical Artifact:* Interactive workflow diagram with toggleable node payload inspect (`Input JSON` ➔ `LLM Prompt Schema` ➔ `Output Payload`).
  - *Tools Used:* `n8n`, `Claude 3.5 Sonnet`, `Supabase`, `Webhooks`.
  - *Proof Link:* Direct link to GitHub repository or workflow JSON file.
- **System 02: 24/7 AI Voice Receptionist & Calendar Dispatch**
  - *Status Badge:* `Interactive Prototype // Audio Sandbox`
  - *Problem:* Small businesses miss incoming customer calls after hours and during peak volume, losing qualified prospects.
  - *Engineered Solution:* A low-latency conversational voice agent built on Vapi and Retell AI. Greets callers naturally, answers business FAQs from a structured knowledge base, checks real-time calendar availability, and books appointments directly.
  - *Technical Artifact (Fixing the RAG Anomaly):* An **Interactive Voice Simulator** widget. Visitors can play actual audio clips of the voice agent in action (inbound call, qualification question, appointment booking confirmation) with live transcript scrolling.
  - *Tools Used:* `Vapi`, `Retell AI`, `OpenAI Realtime / Claude`, `Google Calendar API`.
  - *Proof Link:* Demo audio recording walkthrough.

### 9.3 Section 3: Solutions & Methodology (`#solutions`)
- **Consolidated Capabilities Grid (No redundant cards):**
  - **01. Custom AI Agents:** Autonomous task executors for inbox triaging, document summarization, and data extraction.
  - **02. Autonomous Voice Assistants:** Conversational phone agents for 24/7 call answering, inbound screening, and appointment scheduling.
  - **03. End-to-End Workflow Automation:** Connecting SaaS apps (CRM, Slack, Gmail, Notion, Stripe) to eliminate copy-paste data entry.
  - **04. Custom API & Database Integrations:** Connecting internal software with LLM models via webhooks, Supabase, and vector search.
- **5-Stage Engineering Methodology:**
  1. *01 / Audit & Discover:* Mapping current operational bottlenecks.
  2. *02 / Architecture & Logic:* Designing workflow maps and data schemas before writing code.
  3. *03 / Build & Integrate:* Constructing agents in n8n/Vapi with strict error fallbacks.
  4. *04 / Stress Testing:* Running edge-case payloads to ensure 99.9% uptime.
  5. *05 / Deploy & Monitor:* Production launch with telemetry and continuous optimization.
- **Ecosystem Matrix (Verified Tools Only):** Clean typography badge grid of tools actively utilized: `OpenAI API`, `Claude API`, `n8n`, `Vapi`, `Retell AI`, `Supabase`, `Cursor`, `Git`.

### 9.4 Section 4: About, Learning Journey & FAQ (`#about`)
- **Personal Background & Portrait:**
  - Modern, framed portrait (`profile.jpg`) with natural lighting and minimal hairline border.
  - Honest bio: Shaik's transition into full-time AI automation engineering, his engineering principles, and his focus on solving real operational problems rather than generating AI hype.
- **Chronological Builder Journey (Honest Transparency):**
  - `2025 // Q1`: Fundamentals of AI automation, webhook architectures, and first n8n workflows.
  - `2025 // Q2`: Multi-step business automations, CRM synchronization, and LLM structured data parsing.
  - `2025 // Q3`: Voice AI engineering with Vapi & Retell AI; building real-time conversational agents.
  - `2025 – Present`: Delivering custom client automation solutions and exploring Model Context Protocol (MCP) integrations.
- **Structured FAQ (Accordion):**
  - 1. *What specific problems can you automate for my business?*
  - 2. *Do I need to replace my existing software tools?*
  - 3. *How long does a typical automation project take to build and deploy?*
  - 4. *How do you ensure the AI doesn't hallucinate or make errors?*
  - 5. *What are your engagement terms and project pricing models?*

### 9.5 Section 5: Inquiry Terminal & Footer (`#contact`)
- **Direct Communication Cards:**
  - Direct Email: `shaikubaidullah689@gmail.com` with 1-click clipboard copy.
  - Networks: LinkedIn and GitHub with clean external arrow glyphs (`↗`).
  - Timezone & Availability: "Based in India (IST / UTC+5:30) · Operating with global clients across US, UK & APAC".
- **Functional Inquiry Form:**
  - Fields: Name, Work Email, Company/Role, Project Category (Dropdown), Workflow Description.
  - **Real Backend Dispatch Pipeline:** Wired to Formspree, Resend API, or a dedicated n8n webhook.
  - Feedback States: Instant inline validation, loading spinner state on submit button, clear error handling, and a verified success banner with calendar invite link.
- **Minimalist Footer (Hiroto Sato inspired):**
  - Brand mark + Shaik Ubaidullah.
  - Tagline: "Autonomous Systems & AI Workflow Architecture".
  - Copyright: `© 2026 Shaik Ubaidullah. All rights reserved.`
  - Back to Top anchor.

---

## 10. Visual Design Requirements

### 10.1 Design Token System (`tokens.css`)

```css
:root {
  /* Surface & Canvas Tokens (Tactical Dark Slate) */
  --surface-canvas: #090D0E;
  --surface-panel: #111719;
  --surface-elevated: #182023;
  --surface-hairline: rgba(255, 255, 255, 0.08);
  --surface-hairline-hover: rgba(50, 224, 196, 0.3);

  /* Typography Colors */
  --text-display: #F4F6F8;
  --text-body: #B0BEC5;
  --text-muted: #607D8B;
  --text-accent: #32E0C4;

  /* Functional Accents */
  --accent-cyan: #32E0C4;
  --accent-emerald: #00E676;
  --accent-amber: #FFB300;
  --accent-danger: #FF5252;

  /* Typography Families */
  --font-display: 'Cabinet Grotesk', 'Geist', -apple-system, sans-serif;
  --font-body: 'Geist', 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Geist Mono', monospace;

  /* 8-Point Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;

  /* Geometry & Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
  --radius-pill: 9999px;
}
```

### 10.2 Anti-Slop Visual Rules (Governed by Hallmark & Design-Taste-Frontend)
1. **NO Neon Outer Glows:** Outer `box-shadow` glows and diffuse blur effects are banned. Depth will be achieved via 1px inner hairline borders (`rgba(255, 255, 255, 0.08)`) and high-contrast negative space.
2. **NO Centered Hero Sections:** The hero layout must be strictly asymmetric (left-aligned typography paired with an interactive technical artifact on the right).
3. **NO Generic 3-Column Feature Cards:** Services and projects must use staggered 2-column or list-detail architectures.
4. **NO Custom Mouse Cursor:** Custom cursor DOM elements are removed to preserve accessibility, performance, and native browser responsiveness.
5. **NO Emojis as UI Icons:** All icons must be clean, 1.5px stroke SVGs (Phosphor or Radix style). Emojis are strictly banned.
6. **NO Italic Headers:** Heading and display typography must remain roman (`font-style: normal`). Emphasis will be expressed through font weight or accent color.

---

## 11. Interaction and Motion Principles

Governed by the **Apple Design** and **Design-Taste-Frontend** skills:
1. **Spring Physics Over Durations:** State transitions (drawers, modal reveals, accordion expansions) must utilize natural spring-like easing curves (`cubic-bezier(0.16, 1, 0.3, 1)`) rather than linear delays.
2. **Tactile Micro-Feedback:**
   - On `:hover`, cards and interactive elements elevate subtly (`translateY(-2px)`) with hairline border highlights.
   - On `:active`, buttons compress slightly (`transform: scale(0.98)`) to communicate mechanical activation.
3. **Hardware Acceleration:** Animations are strictly limited to `transform` and `opacity`. Never animate layout-triggering properties (`width`, `height`, `top`, `left`, `margin`).
4. **Accessible Reduced-Motion Hard Floor:** If `prefers-reduced-motion: reduce` is detected:
   - All transition durations drop to `0.001ms`.
   - All reveals render at full opacity instantly.
   - All parallax or auto-ticking loops are disabled.

---

## 12. Functional Requirements with Priorities

### P0 — Essential for Launch (Must-Have)
- **FR-01 (Working Contact Form):** Form submissions must deliver data to a reliable email endpoint (Formspree/Resend API) with error handling, loading spinner, and success feedback.
- **FR-02 (Mobile Responsiveness):** Flawless layout rendering at 320px, 375px, 414px, 768px, 1024px, and 1440px without horizontal overflow (`overflow-x: clip`).
- **FR-03 (Working 404 Recovery):** Dedicated `404.html` page that renders properly on broken routes and provides a single-click return path to `/`.
- **FR-04 (Accurate Project Artifacts):** Project 1 and Project 2 must have transparent status labels, technical architecture diagrams, and working links (or clearly marked sandbox simulations).
- **FR-05 (SEO & Social Sharing):** Correct OpenGraph tags with an existing, high-resolution preview image (`/assets/social-share-preview.png`).
- **FR-06 (Keyboard & Screen Reader Accessibility):** Focusable controls, `:focus-visible` indicators, semantic heading hierarchy, and skip-to-content link.

### P1 — Important (Launch Polish)
- **FR-07 (Interactive Audio Simulator):** Interactive audio player in Project 2 demonstrating voice agent call recordings with synchronized transcript highlighting.
- **FR-08 (1-Click Email Copy):** Direct email button copies `shaikubaidullah689@gmail.com` to the clipboard with an animated "Copied to clipboard!" badge.
- **FR-09 (Keyboard Shortcuts Dialog):** Retaining the quick-navigation shortcut overlay (`?` to view, `g` + `w` for work, `g` + `c` for contact).

### P2 — Optional Enhancements (Post-Launch)
- **FR-10 (Interactive Workflow Node Inspector):** Ability for users to click individual nodes in the Lead Qualification pipeline to inspect mock JSON inputs and outputs.
- **FR-11 (Light/Dark Mode Toggle):** Allowing users to toggle between Tactical Dark Slate and Warm Editorial Light (Vauliys inspired).

---

## 13. Project Presentation and Case Study Requirements

### 13.1 Presentation Standard per Project Entry
Every project entry in the redesigned portfolio must contain:
1. **System Name & Monospace Index:** (e.g. `SYSTEM 01 // LEAD-TRIAGE-PIPELINE`).
2. **Verification & Status Pill:** (e.g. `Working Prototype`, `Architectural Concept`).
3. **Core Problem Statement:** Quantified operational bottleneck (e.g., "Inbound leads wait 12+ hours for review").
4. **Engineered Solution:** Concrete architectural explanation of how tools interact.
5. **Technical Blueprint:** Visual node map or interface simulator.
6. **Ecosystem Badges:** Exactly which tools were used (e.g., `n8n`, `Claude 3.5`, `Supabase`, `Webhooks`).
7. **Transparent Outward Links:** Direct link to GitHub repository, workflow JSON download, or demo recording.

### 13.2 Resolution of Project 2 Discrepancy
- The existing portfolio displayed a RAG document search query for a Voice Receptionist project.
- **Required Fix:** Replace the search bar and cosine distance mockup with a **Voice Call Telemetry Interface**:
  - Displays caller waveform / audio visualizer.
  - Shows live call state: `INCOMING CALL ➔ VAPI WEBSOCKET CONNECTED ➔ INTENT: APPOINTMENT_BOOKING ➔ GOOGLE CALENDAR SYNCED`.
  - Includes sample audio playback buttons: *"Listen to Inbound Greeting"*, *"Listen to Qualification Dialogue"*, *"Listen to Appointment Confirmation"*.

---

## 14. Technical Constraints and Existing-System Considerations

1. **Stack Discipline:** Preserve the existing lightweight stack (Vanilla HTML5, CSS3 Custom Properties, Modern ES Modules, Vite 5.x). No React or Next.js migrations will be introduced unless explicitly requested by the owner.
2. **Build Pipeline:** Retain the sanitized build script (`node sanitize-build.js`) to ensure output files can run in preview, production CDN, or offline testing environments.
3. **Zero Phantom Dependencies:** Do not install unvetted third-party npm libraries. Maximize native Web APIs (`IntersectionObserver`, `Canvas`, `Clipboard API`, `Web Audio API`).
4. **Git Hygiene:** All redesign work will be committed incrementally with clear semantic commit messages and zero accidental deletions.

---

## 15. Accessibility, Responsiveness, SEO, and Performance

### 15.1 Accessibility (WCAG 2.1 AA Standards)
- **Color Contrast:** All text must meet a minimum contrast ratio of `4.5:1` for normal text and `3:1` for large display text.
- **Semantic HTML:** `<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`, `<figure>`, `<article>`. No nested `<div>` soup.
- **Focus States:** Every interactive button and input must display a sharp, high-visibility focus ring (`2px solid var(--accent-cyan)` with `4px offset`).

### 15.2 Mobile Viewport Stability
- Viewport unit rule: Use `min-h-[100dvh]` rather than `100vh` to eliminate mobile Safari address bar jumping.
- No horizontal scrolling: Root `html, body { overflow-x: clip; }`.
- Click targets: Minimum touch target size of `44 × 44px` for all buttons, links, and form inputs.

### 15.3 SEO and Metadata
- Complete OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
- Structured Schema.org JSON-LD markup declaring Shaik Ubaidullah as a `Person` and `ProfessionalService` specialist.
- Valid `sitemap.xml` and `robots.txt`.

### 15.4 Performance Budgets
- **Lighthouse Performance Score:** `≥ 98/100`.
- **First Contentful Paint (FCP):** `< 0.8s`.
- **Largest Contentful Paint (LCP):** `< 1.2s`.
- **Cumulative Layout Shift (CLS):** `0.000`.

---

## 16. MCP and Skill Usage Plan

### 16.1 Skill Roles Across Phases

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ SKILL ORCHESTRATION PIPELINE                                                │
├─────────────────────┬───────────────────────────────────────────────────────┤
│ Phase 1: Research   │ hallmark (audit), PORTFOLIO_CONTEXT_EXTRACTION        │
├─────────────────────┼───────────────────────────────────────────────────────┤
│ Phase 2: PRD        │ design-taste-frontend, apple-design, hallmark         │
├─────────────────────┼───────────────────────────────────────────────────────┤
│ Phase 3: Design     │ prototype (multi-variant exploration), design-md      │
├─────────────────────┼───────────────────────────────────────────────────────┤
│ Phase 4: Build      │ cc-skill-frontend-patterns, apple-design, tokens.css  │
├─────────────────────┼───────────────────────────────────────────────────────┤
│ Phase 5: QA/Launch  │ design-system-compliance, Playwright MCP              │
└─────────────────────┴───────────────────────────────────────────────────────┘
```

1. **`hallmark`:** Enforces anti-AI-slop rules, bans fake metrics, ensures macrostructure diversity, and prevents mid-render token improvisation.
2. **`design-taste-frontend`:** Controls layout variance, typography choices (`Geist`/`Cabinet Grotesk`), removes custom cursors, and enforces mobile fallback rules.
3. **`apple-design`:** Guides tactile micro-interactions, natural spring physics, and high-contrast accessibility.
4. **`prototype`:** Used in Phase 3 to generate 2–3 distinct layout directions before committing to production code.
5. **`design-system-compliance`:** Used during QA to inspect rendered computed styles against declared design tokens.
6. **`cc-skill-frontend-patterns`:** Enforces clean component composition, state isolation, and DOM cleanliness.

### 16.2 MCP Tool Capabilities
- **Playwright MCP:** Used for multi-viewport visual testing (320px, 375px, 768px, 1280px), link verification, console log audits, and keyboard event testing.
- **StitchMCP:** Available for generating semantic design tokens into `DESIGN.md` if external design exploration is requested.
- **Chrome DevTools MCP:** Used for performance profiling, network request inspection, and Lighthouse scoring.

---

## 17. Acceptance Criteria and Testing Matrix

### 17.1 Test Matrix

| Test ID | Category | Test Description | Target / Pass Condition | Verification Tool |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Visual | Check for AI slop anti-patterns (no purple gradients, no fake traffic light chrome, no custom cursor) | Zero violations detected | Hallmark Audit |
| **TC-02** | Visual | Verify typography hierarchy and absence of italic headers | All headings `font-style: normal` | Computed Style Test |
| **TC-03** | Functional | Submit contact form with valid inputs | Success banner displayed + email payload delivered | Playwright MCP + Webhook |
| **TC-04** | Functional | Submit contact form with empty/invalid inputs | Clear inline validation errors; no payload fired | Playwright MCP |
| **TC-05** | Functional | Navigate to `/nonexistent-route` | Custom 404 page rendered with recovery CTA | Playwright MCP |
| **TC-06** | Responsive | Test viewport at 320px, 375px, 768px, 1280px | Zero horizontal scroll (`scrollWidth === innerWidth`); single-column stack on mobile | Playwright MCP |
| **TC-07** | Performance | Run Lighthouse audit on production bundle | Performance `≥ 95`, Accessibility `≥ 98`, Best Practices `≥ 95` | Chrome DevTools MCP |
| **TC-08** | Accessibility | Keyboard navigation test (`Tab` through all interactive controls) | Focus indicator visible on all elements; skip link working | Playwright MCP |
| **TC-09** | Asset Check | Verify `og:image` resolution | Image loads with status 200; dimensions `1200×630px` | Playwright MCP |

---

## 18. Known Issues and Risk Register

| Risk ID | Identified Risk | Impact | Planned Mitigation in Redesign |
| :--- | :--- | :--- | :--- |
| **RSK-01** | **Email delivery failure:** Contact form payload is lost if third-party form handler goes down. | High | Implement dual-path conversion: form dispatches via Formspree/Resend, plus an instant 1-click `Copy Email` button and clear direct `mailto:` link. |
| **RSK-02** | **Project credibility skepticism:** Visitors doubt demo functionality without live code links. | Medium | Add public GitHub links to workflow exports (or sanitized JSON pipelines) and record interactive audio clips for the Voice Agent. |
| **RSK-03** | **Working tree merge conflict:** Existing workspace has unstaged file deletions (`404.html`, build assets). | Medium | Keep redesign isolated in `ubaidullah-portfolio-redesign/` until final approval; resolve root git status cleanly before deployment. |
| **RSK-04** | **Typography performance overhead:** Multiple external web fonts could cause FOIT/FOUT. | Low | Self-host font files or preload critical font subsets with `font-display: swap`. |

---

## 19. Open Questions Requiring Owner Decisions

Before implementing the design phase, the owner should confirm:

1. **Form Handling Preference:** Which service do you prefer for receiving form inquiries?
   - *Option A (Recommended):* Formspree (Free tier, instant setup, reliable email routing).
   - *Option B:* Resend API (Direct programmatic email delivery).
   - *Option C:* Custom n8n webhook (Routes form submissions directly into your own automation workflow).
2. **Project Code Repositories:** Do you want to publish the workflow JSON for the Lead Qualification pipeline and Voice Receptionist on your public GitHub (`shaikubaidullah-coder`), or should we present them as interactive sandbox demos on the website?
3. **Voice Agent Audio Demo:** Can you record or provide a 30-second audio sample of your Voice AI agent handling a simulated call, or should we synthesize realistic call audio using ElevenLabs?
4. **Primary Aesthetic Stance:** Between the **Tactical Dark Slate** (Hiroto Sato / Feather inspired) and **Warm Editorial Paper** (Vauliys inspired), does the dark tactical atelier feel like the natural fit for your personality and client base?

---

## 20. Proposed Next-Phase Workflow

Upon approval of this PRD, the project will advance through the following sequence:

1. **Phase 3: Design Exploration (`03-design/`):**
   - Synthesize `DESIGN.md` defining typography scales, color tokens, and layout wireframes.
   - Using the `prototype` skill, construct **2 distinct visual direction prototypes** (e.g. Direction A: Tactical Systems Terminal; Direction B: Swiss Editorial Atelier) for owner review and selection.
2. **Phase 4: Component Engineering & Build (`04-development/`):**
   - Implement the selected design system and responsive sections.
   - Wire the functional form dispatch and interactive voice simulator.
3. **Phase 5: Verification & Launch (`06-testing-and-launch/`):**
   - Execute the 9-part Playwright testing matrix.
   - Run design-system compliance and Lighthouse audits.
   - Final review and production deployment.

---
*End of PRD. Awaiting owner review and sign-off.*
