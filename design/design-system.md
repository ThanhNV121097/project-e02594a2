# Design System — Nhà hàng Mây

> Source of truth: approved React application in `code/frontend/` (`src/theme.css`, `src/content.json`, `src/App.tsx`, `src/components/`).
> Every value below is extracted from it. Changing a value here without changing approved design is defect.

Last updated: 2026-09-30

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Source token | Value | Used for |
|---|---|---|---|
| `--color-page-background` | `--ground` | `#F6F2EA` | Page background |
| `--color-surface` | `--surface` | `#FFFFFF` | Hero figure card, elevated surface |
| `--color-text-primary` | `--ink` | `#1B1917` | Body text, headings, menu prices |
| `--color-text-muted` | `--ink-soft` | `#5E5954` | Secondary text, captions, details, hours, footer |
| `--color-brand-action` | `--accent` | `#B8412E` | Primary CTA, booking panel, decorative food/map accents |
| `--color-on-brand` | `--accent-ink` | `#FFFFFF` | Text on brand action/background |
| `--color-divider` | `--line` | `rgba(27, 25, 23, 0.12)` | Borders and section dividers |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text-primary` `#1B1917` | `--color-page-background` `#F6F2EA` | `15.4:1` | AA |
| `--color-text-muted` `#5E5954` | `--color-page-background` `#F6F2EA` | `6.5:1` | AA |
| `--color-text-primary` `#1B1917` | `--color-surface` `#FFFFFF` | `17.4:1` | AA |
| `--color-text-muted` `#5E5954` | `--color-surface` `#FFFFFF` | `7.3:1` | AA |
| `--color-on-brand` `#FFFFFF` | `--color-brand-action` `#B8412E` | `5.2:1` | AA |
| `--color-brand-action` `#B8412E` | `--color-on-brand` `#FFFFFF` | `5.2:1` | AA |
| `--color-divider` `rgba(27, 25, 23, 0.12)` | `--color-page-background` `#F6F2EA` | `1.2:1` | FAIL for UI border |
| `--color-divider` `rgba(27, 25, 23, 0.12)` | `--color-surface` `#FFFFFF` | `1.2:1` | FAIL for UI border |

### 1.2 Spacing

Base unit: `4px`. Margins, padding, gaps, and section rhythm use these values plus responsive `--gutter`.

| Token | Value | Source usage |
|---|---|---|
| `--space-2` | `8px` | Menu item internal gap, menu detail offset |
| `--space-4` | `16px` | Hero figure padding, caption top padding, booking contact spacing |
| `--space-5` | `20px` | Minimum responsive gutter |
| `--space-6` | `24px` | Small CTA horizontal padding, link vertical rhythm |
| `--space-7` | `28px` | Hero CTA horizontal padding |
| `--space-8` | `32px` | Booking panel mobile horizontal padding, directions grid gap, menu list gap |
| `--space-10` | `40px` | Hero CTA top margin, booking grid gap, directions section gap |
| `--space-12` | `48px` | Booking panel mobile vertical padding, menu section grid gap |
| `--space-14` | `56px` | Booking panel desktop horizontal padding |
| `--space-16` | `64px` | Booking panel desktop vertical padding |
| `--space-18` | `72px` | Maximum responsive gutter, map grid size |
| `--space-20` | `80px` | Mobile section vertical padding |
| `--space-28` | `112px` | Desktop section vertical padding |

### 1.3 Typography

Font families are declared in `src/theme.css`; loading source is outside approved design files.

- Body: `Inter`
- Headings: `Fraunces`

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-caption` | `14px` | browser default | browser default | Hero figure caption |
| `--text-body` | `16px` | browser default | browser default | Body copy, menu note, hours |
| `--text-action` | `16px` | browser default | `600` | Primary CTA |
| `--text-large` | `18px` | browser default | browser default / `600` on booking contact | Booking body and contact rows |
| `--text-xl` | `20px` | browser default | browser default | Hero subcopy mobile, menu price |
| `--text-2xl` | `24px` | `1.375` where `leading-snug` used | browser default | Hero subcopy desktop, directions address, menu item name |
| `--text-section-heading` | `clamp(42px, 6vw, 82px)` | browser default | `500` | Menu and directions h2 |
| `--text-booking-heading` | `clamp(42px, 6vw, 86px)` | browser default | `500` | Booking h2 |
| `--text-hero` | `clamp(60px, 9vw, 132px)` | browser default | `500` | Hero h1 |

Heading levels are used in order inside content areas: h1, h2, h3.

Weight and letter-spacing tokens:

| Token | Value | Used for |
|---|---|---|
| `--font-weight-body` | browser default | Running text |
| `--font-weight-action` | `600` | CTAs and booking contact link |
| `--font-weight-heading` | `500` | Display headings via `--weight-display` |
| `--tracking-display` | `-0.02em` | Display headings via `--tracking-display` |
| `--tracking-normal` | browser default / `tracking-normal` | Menu item h3 |

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-base` | `12px` | Map panel and image artwork |
| `--radius-card` | `calc(var(--radius) * 1.4)` = `16.8px` | Hero figure card |
| `--radius-panel` | `calc(var(--radius) * 1.5)` = `18px` | Booking panel |
| `--radius-pill` | `9999px` | CTAs and booking contact links |
| `--border-width` | `1px` | Section dividers, menu dividers, secondary CTAs |
| `--shadow-hero-card` | `0 28px 80px color-mix(in srgb, var(--ink) 10%, transparent)` | Hero figure card |

Motion respects static approved design: no animation or transition tokens are drawn.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `sm` | Tailwind default `640px` | `--page: 1160px` | Menu item switches to content + price | `--gutter: clamp(20px, 5.5vw, 72px)` |
| `md` | Tailwind default `768px` | `--page: 1160px` | Hero, menu, booking, directions switch to two-column layouts | `--gutter: clamp(20px, 5.5vw, 72px)` |

Z-index scale is not used by approved design.

## 2. Components

### 2.1 Page shell

**Purpose** — Full-page static restaurant shell; use once as site root, not as nested layout.

**Anatomy** — `[page background] [content container] [sections]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default shell | `--color-page-background`, `--color-text-primary`, `--page`, `--gutter` | Whole site |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `min-h-screen` | `px: --gutter` on container, section padding per section | `--text-body` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Warm page background, dark text, constrained content width | `--color-page-background`, `--color-text-primary`, `--page`, `--gutter` |

**Accessibility** — Root content uses semantic sections from child components. No keyboard behavior.

### 2.2 Hero

**Purpose** — First impression for restaurant positioning and primary booking action; use once at top of homepage.

**Anatomy** — `[headline] [subcopy] [booking CTA] [food artwork card] [caption]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default hero | `--text-hero`, `--color-brand-action`, `--color-on-brand`, `--radius-pill`, `--radius-card`, `--shadow-hero-card` | Homepage opening |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | `min-height: 72vh` | `py: 80px`, `112px` at `md`; CTA `28px 16px`; card `16px` | `--text-hero`, `--text-xl`, `--text-2xl`, `--text-action` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Two-column editorial layout at `md`, single-column mobile, brand-filled CTA | `--color-brand-action`, `--color-on-brand`, `--radius-pill` |

**Accessibility** — CTA is anchor to `#book`; minimum hit target exceeds 44×44px. Artwork is decorative CSS inside figure; visible caption names it for sighted users.

### 2.3 Menu section

**Purpose** — Show signature dishes with details and prices; use for short static menu list.

**Anatomy** — `[section heading] [menu item list] [note]`; each item is `[name] [detail] [price]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default menu | `--color-divider`, `--color-text-primary`, `--color-text-muted`, `--text-section-heading` | Menu preview |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | Section `py: 80px`, `112px` at `md`; item `pb: 32px`; list gap `32px` | `--text-section-heading`, `--text-2xl`, `--text-xl`, `--text-body` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Top divider, item bottom dividers, muted details | `--color-divider`, `--color-text-muted` |

**Accessibility** — Uses heading hierarchy h2 then h3. Prices are text, not hidden metadata. No keyboard behavior.

### 2.4 Booking section

**Purpose** — Convert guests to table booking by phone or email; use as primary reservation block.

**Anatomy** — `[brand panel] [heading] [body] [phone link] [email link]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Brand panel | `--color-brand-action`, `--color-on-brand`, `--radius-panel` | Reservation callout |
| Filled contact link | `--color-on-brand`, `--color-brand-action`, `--radius-pill` | Preferred phone action |
| Outline contact link | `--color-on-brand`, `--radius-pill`, `--border-width` | Secondary email action |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | Section `py: 80px`, `112px` at `md`; panel `32px 48px`, `56px 64px` at `md`; links `24px 16px` | `--text-booking-heading`, `--text-large` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Brand background, white text, phone link inverted, email link outlined | `--color-brand-action`, `--color-on-brand`, `--radius-pill` |

**Accessibility** — Phone uses `tel:` and strips spaces for dial target; email uses `mailto:`. Link hit targets exceed 44×44px.

### 2.5 Directions section

**Purpose** — Show address, hours, map link, and decorative neighborhood map panel.

**Anatomy** — `[heading] [address] [hours] [Google Maps link] [map illustration]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default directions | `--color-divider`, `--color-text-primary`, `--color-text-muted`, `--radius-base`, `--color-brand-action` | Location block |
| Outline map link | `--color-divider`, `--radius-pill`, `--font-weight-action` | External directions action |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | map `min-height: 256px` | Section `py: 80px`, `112px` at `md`; link `24px 12px`; grid gap `32px`/`40px` | `--text-section-heading`, `--text-2xl`, `--text-body` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Section top divider, two-column layout at `md`, outline map link, CSS map grid | `--color-divider`, `--radius-base`, `--color-brand-action` |

**Accessibility** — Google Maps link is normal anchor and must describe destination in visible label. Map illustration is decorative and non-interactive.

### 2.6 Text token component

**Purpose** — Render editable content from `content.json`; use when copy must remain owner-editable.

**Anatomy** — `[content value from key]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| As element | Typography and color tokens from caller classes | Any editable text rendered as chosen semantic element |
| As link | Typography, color, radius, spacing tokens from caller classes | Editable label inside anchor |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Caller-defined | Caller-defined | Caller-defined | Caller-defined |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Renders content key with caller styles | Caller-defined |

**Accessibility** — Caller chooses semantic element with `as`. Link callers provide `href`.

## 3. Content and formatting

- Voice and tone: warm, modern, concise restaurant copy focused on Vietnamese food, booking, and District 3 directions.
- Locale: English-language UI with Saigon place names; phone displayed as local Vietnamese number when content provides it; prices shown as menu text from content.
- Capitalization: headings use title/editorial case from content; buttons and labels use sentence/title case as written in `content.json`.
- Empty-state and error-message wording pattern: no empty or error states are drawn because approved site is static content.

## 4. Known deviations

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| `--color-divider` | Divider contrast is about `1.2:1`, below 3:1 UI boundary guidance. | Approved design uses subtle editorial dividers. | Raise only if borders must carry critical affordance. |
| Interactive anchors | Approved files draw default state only; no explicit hover, focus, active, or disabled styles are present. | Static approved design does not include interaction states beyond default browser behavior. | Add visible focus/hover tokens if stakeholder requests interaction polish. |
| `content.json` | Current approved content file still contains scaffold placeholder copy (`Your business`, District 1). | Task names React app as source of truth, including current content file. | Replace content in product story if scope requires real restaurant copy. |
| Hero and directions artwork | Decorative gradients are used. | They create food/map illustrations, not generic violet/blue decoration. | Keep brand-grounded; avoid extra decorative gradients. |
| Hero figure shadow | One large resting card shadow (`0 28px 80px ...`) exceeds light-shadow guidance. | Approved hero artwork uses it as primary visual depth. | Do not reuse heavy shadow for normal cards. |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-09-30 | Initial design system extracted from approved React design. | N/A |
