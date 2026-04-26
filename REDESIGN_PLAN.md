# CentryAI Website — UI Redesign Plan

## Problem
Website looks decent but doesn't match the app's premium "Financial Editorial" design language. Generic Tailwind blue, no icons on feature cards, weak animations, and missing sections (pricing, social proof).

---

## 1. Color Palette — Align with App Brand

**Current:** `--brand-blue: #3b82f6` (generic Tailwind blue-500)
**Proposed:** Migrate to app's indigo system

```css
:root {
  /* Primary — match app gradient */
  --brand: #4D41DF;
  --brand-light: #675DF9;
  --brand-gradient: linear-gradient(135deg, #4D41DF, #675DF9);
  
  /* Secondary — teal accent (already exists, keep) */
  --teal: #38bdf8;
  
  /* Accent glow — updated to indigo */
  --accent: #675DF9;
  --accent-glow: rgba(101, 93, 249, 0.15);
  --accent-dim: rgba(101, 93, 249, 0.09);
  
  /* Success/Warning/Error — for pricing & badges */
  --success: #34D399;
  --warning: #FBBF24;
  --error: #F87171;
}
```

**Light mode:** Update `[data-theme="light"]` accordingly — softer indigo tints instead of blue.

---

## 2. Icons — Lucide Icons Library

Add [Lucide](https://lucide.dev) (tree-shakeable, MIT, same icons as the app's style).

**Load via CDN (no build step needed):**
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Feature card icons (inline SVG for performance):**

| Feature | Icon | Lucide name |
|---------|------|-------------|
| Smart Detection | `Scan` | scan |
| Zombie Score | `Ghost` | ghost |
| Cancel in 1 Tap | `XCircle` | x-circle |
| Renewal Calendar | `CalendarDays` | calendar-days |
| AI Email Scanner | `Mail` or `Brain` | mail / brain |
| Multi-Currency | `Coins` | coins |
| Analytics | `TrendingUp` | trending-up |
| Secure & Private | `ShieldCheck` | shield-check |

**Icon style:** 
- 48×48px container with gradient background (`--brand-gradient` at 10% opacity)
- 24×24 stroke icon inside, `stroke-width: 1.75`, color `var(--accent)`
- Subtle hover: icon container scales 1.05 + glow

---

## 3. Buttons — Gradient CTAs

**Primary CTA (Download, Subscribe):**
```css
.btn-primary {
  background: linear-gradient(135deg, #4D41DF, #675DF9);
  color: white;
  box-shadow: 0 4px 20px rgba(77, 65, 223, 0.35);
  border: none;
  transition: all 0.25s ease;
}
.btn-primary:hover {
  box-shadow: 0 8px 32px rgba(77, 65, 223, 0.5);
  transform: translateY(-2px);
}
```

**Secondary/Ghost button:**
```css
.btn-secondary {
  background: transparent;
  border: 1.5px solid var(--border2);
  color: var(--fg);
  backdrop-filter: blur(8px);
}
.btn-secondary:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}
```

**Store buttons — modernize:**
- Add subtle gradient border (not fill) around the store button
- Hover: slight lift + glow shadow
- Dark mode: keep current dark bg; Light mode: white bg with dark text

---

## 4. Typography — Dual System

**Add Inter for body text (matching app):**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600&family=Manrope:wght@300;400;500;600;700;800&display=swap');

body { font-family: 'Inter', sans-serif; }
h1, h2, h3, h4, .section-title, .hero-badge, .nav-logo, .btn {
  font-family: 'Manrope', sans-serif;
}
```

**Hierarchy improvements:**
- Hero h1: `clamp(2.8rem, 5vw, 4.2rem)` (bolder, bigger)
- Section titles: Add thin `<span class="text-gradient">` on key words
- Body text: Inter 16px/1.7 (more readable than Manrope for paragraphs)
- Feature card titles: Manrope 700, 1.1rem
- Feature card descriptions: Inter 450, 0.9rem, `var(--fg2)`

**Text gradient for emphasis:**
```css
.text-gradient {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Usage: `Stop paying for apps you've <em class="text-gradient">forgotten about.</em>`

---

## 5. Feature Cards — Visual Upgrade

**Current:** Plain surface cards, no icons, text only.
**Proposed:**

```
┌─────────────────────────────┐
│  ┌──────┐                   │
│  │ icon │  ← gradient bg    │
│  └──────┘                   │
│                             │
│  Smart Detection            │  ← Manrope 700
│  Automatically finds every  │  ← Inter 450, fg2
│  subscription from your     │
│  email inbox using AI.      │
│                             │
│  Learn more →               │  ← accent link
└─────────────────────────────┘
```

**Card hover effect:**
```css
.feature-card:hover {
  background: var(--surface2);
  /* Top-line gradient accent */
}
.feature-card:hover .feature-icon {
  transform: scale(1.08);
  box-shadow: 0 0 24px var(--accent-glow);
}
```

**Consider a bento grid layout** instead of uniform 2×2:
- One large card (2 cols) for the hero feature (AI Email Scanner)
- 4 smaller cards (1 col each) for secondary features
- Creates visual hierarchy and breaks monotony

---

## 6. Animations — Scroll-Triggered

**Add IntersectionObserver-based reveal:**
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

**Animation classes:**
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger children */
.stagger-children .animate-on-scroll:nth-child(1) { transition-delay: 0s; }
.stagger-children .animate-on-scroll:nth-child(2) { transition-delay: 0.1s; }
.stagger-children .animate-on-scroll:nth-child(3) { transition-delay: 0.15s; }
.stagger-children .animate-on-scroll:nth-child(4) { transition-delay: 0.2s; }
```

**Feature cards:** Staggered fade-up on scroll  
**Stats bar:** Counter animation triggered on scroll (already exists, verify)  
**Phone mockup:** Subtle parallax or float animation  
**How it works steps:** Sequential reveal left-to-right  

---

## 7. New Sections

### 7a. Pricing Section (before CTA)

```
┌─────────────────────────────────────────────────┐
│              Choose Your Plan                     │
│                                                   │
│  ┌─────────────┐     ┌─────────────────────┐     │
│  │    Free      │     │   Pro  ✦ Popular    │     │
│  │              │     │                     │     │
│  │  $0/forever  │     │  $3.99/mo           │     │
│  │              │     │  $29.99/yr (save 37%)│     │
│  │  ✓ 5 subs   │     │                     │     │
│  │  ✓ Manual    │     │  ✓ Unlimited subs   │     │
│  │    add       │     │  ✓ AI Email Scanner │     │
│  │  ✓ Calendar  │     │  ✓ Cancel Finder    │     │
│  │              │     │  ✓ Zombie Detection │     │
│  │  [Get Free]  │     │  ✓ Analytics        │     │
│  │              │     │  ✓ Renewal Alerts   │     │
│  └─────────────┘     │                     │     │
│                       │  [Start Free Trial] │     │
│                       └─────────────────────┘     │
└─────────────────────────────────────────────────┘
```

- Pro card slightly elevated with gradient border
- "Popular" badge with brand gradient
- Annual toggle switch at top

### 7b. Testimonials Upgrade

- Real-looking cards with avatar, name, role
- Star rating per card
- Horizontal auto-scroll (marquee style) or 3-col grid
- Quote marks as decorative element

---

## 8. Micro-Interactions & Polish

- **Nav CTA button pulse:** Subtle glow animation on the "Download Free" button
- **Store buttons:** On hover, the icon (Apple/Play logo) gets a slight color shift
- **Scroll indicator:** Small animated chevron below hero
- **Back to top:** Floating button appears after scrolling past hero
- **Cursor:** Consider custom cursor on CTAs (pointer with slight scale)
- **Loading:** Add a brief branded loading shimmer on page load

---

## 9. Mobile Responsive Fixes

- Nav: Add hamburger menu with slide-in drawer (currently `display: none` hides links)
- Feature grid: 1 column on mobile (already done, verify spacing)
- Pricing: Stack cards vertically
- Store buttons: Full width on mobile
- Footer: Single column with accordion sections

---

## 10. Performance

- Replace Babel standalone (runtime JSX compilation) with pre-built JS in the future
- Lazy-load phone mockup images (`loading="lazy"`)
- Preload hero video poster frame
- Font subsetting: Only load weights actually used

---

## Implementation Order

1. **Colors** — Update CSS variables (30 min, biggest visual impact)
2. **Icons on feature cards** — Add Lucide SVGs (30 min)
3. **Buttons** — Gradient primary, ghost secondary (20 min)
4. **Typography** — Add Inter, update hierarchy (20 min)
5. **Scroll animations** — IntersectionObserver (30 min)
6. **Feature card bento layout** — Restructure grid (45 min)
7. **Pricing section** — New section (1 hr)
8. **Mobile hamburger menu** — Drawer nav (30 min)
9. **Testimonials upgrade** — Card redesign (30 min)
10. **Polish** — Micro-interactions, loading, back-to-top (30 min)

Total estimated: ~5 hours
