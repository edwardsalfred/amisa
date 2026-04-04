# AmiSa — Quality Audit

## SEO Audit

### Meta Tags
- [x] `<title>` — unique per page, includes keyword + location
- [x] `<meta name="description">` — unique per page, under 160 chars
- [x] `<link rel="canonical">` — set on all pages
- [x] Open Graph `og:title`, `og:description`, `og:type` — set on homepage
- [ ] `og:image` — placeholder commented out; needs actual photo to enable
- [x] Schema markup — `LocalBusiness` JSON-LD on homepage with phone, email, address, Instagram

### Heading Hierarchy
- [x] Single `<h1>` per page
- [x] Logical `<h2>` → `<h3>` hierarchy throughout
- [x] No skipped heading levels

### Images
- [x] All `<img>` tags have `alt` attributes (placeholder text where images pending)
- [x] `loading="lazy"` on all below-fold images
- [x] `loading="eager"` on hero image
- [ ] Actual images not yet provided — owner needs to drop photos into `assets/`

### Site Structure
- [x] 6 main pages built + research
- [x] 5 SEO landing pages referenced in sitemap (existing pages preserved)
- [x] Footer links cover all key pages
- [x] Sitemap exists (from original site — to be regenerated after migration)

---

## Accessibility Audit

### Color Contrast
- [x] Primary text on dark backgrounds: white on #1a1714 — passes WCAG AA (ratio 14:1+)
- [x] Gold (#7D6002) on white — borderline; only used on eyebrow labels, not critical body text
- [x] CTA buttons: white on #7D6002 — passes AA for large text
- [x] Soft text (rgba 0.52) — used for decorative captions only, not critical content

### Keyboard Navigation
- [x] All navigation links are `<a>` tags — keyboard accessible
- [x] CTA buttons are `<a>` or `<button>` — keyboard accessible
- [x] Mobile menu burger is a `<button>` with proper `aria-label`
- [x] Form fields have associated `<label>` elements with `for`/`id` pairs
- [x] Gallery tabs are `<button>` with `role="tab"` and `aria-selected`

### ARIA & Semantics
- [x] `<nav>` with `role="navigation"` and `aria-label`
- [x] `<footer>` with `aria-label`
- [x] Sections with `aria-labelledby` pointing to heading IDs
- [x] SVG icons have `aria-hidden="true"` where decorative
- [x] Social links have `aria-label`
- [x] `role="tablist"` and `role="tab"` on gallery tabs

### Reduced Motion
- [x] `@media (prefers-reduced-motion: reduce)` rule in CSS disables all transforms and transitions
- [x] GSAP animations check `prefers-reduced-motion` and exit early if set

---

## Performance Audit

### Loading Strategy
- [x] GSAP loaded with `defer` — non-blocking
- [x] Google Fonts loaded with `preconnect` hints
- [x] Images use `loading="lazy"` below fold
- [x] CSS is a single file — no render-blocking split

### Animations
- [x] `will-change` not over-applied — GSAP handles this internally
- [x] Hero parallax uses `transform: translateY` (GPU-accelerated)
- [x] No layout shift from animations (opacity + transform only)

### Images (Pending Owner Action)
- [ ] Owner to provide WebP-format photos for best performance
- [ ] Hero image: aim for < 300KB compressed
- [ ] Service photos: aim for < 150KB each

---

## Client-Ready Checklist

### Placeholders Clearly Marked
- [x] `<!-- REPLACE -->` comments on every placeholder element
- [x] `<!-- PASTE YOUR BEHOLD.SO EMBED CODE HERE -->` clearly labeled in gallery.html
- [x] `<!-- 3D SCROLL ASSET placeholder not needed — not applicable for this site type -->` N/A
- [x] Photo placeholder divs show filename path (`assets/hero.jpg` etc.)

### Contact Info
- [x] Phone: 408-516-5793 — in nav overlay, footer, CTA sections, contact page
- [x] Email: amisa.interiordesign70@gmail.com — in nav overlay, footer, contact page
- [x] All phone numbers are `<a href="tel:...">` links — tap to call on mobile
- [x] All emails are `<a href="mailto:...">` links

### Forms
- [x] Contact form with Netlify Forms integration (works automatically on Netlify)
- [x] Honeypot spam protection field included
- [x] Form fields: Name (required), Phone (required), Email, Room Type, Service, Message
- [x] Submit button has loading state via JavaScript

### Mobile Experience
- [x] Sticky bottom bar: [Call Now] + [Get Quote] visible on all pages
- [x] Hamburger menu → full-screen overlay
- [x] All text readable at 320px width
- [x] Buttons tap-target size ≥ 44px
- [x] `body { padding-bottom: 70px }` prevents content hiding behind mobile bar

### Favicon
- [ ] `assets/favicon.ico` — placeholder referenced, owner needs to provide

### 404 Page
- [ ] Not yet built — optional but recommended
  Add a simple `404.html` with nav + "Page not found" message + link home

---

## Behold.so Integration Status

- [x] Placeholder divs in place for all 6 gallery tabs
- [x] Setup instructions in gallery.html HTML comments
- [x] Setup instructions in README.md
- [x] Instagram hashtag protocol documented
- [ ] Actual Behold embed codes — awaiting owner setup at behold.so

---

## Outstanding Items (Owner Action Required)

| Priority | Item | Where |
|----------|------|--------|
| 🔴 High | Drop hero photo into `assets/hero.jpg` | index.html hero |
| 🔴 High | Drop owner photo into `assets/owner.jpg` | about.html |
| 🔴 High | Set up Behold.so and paste embed codes | gallery.html |
| 🔴 High | Replace placeholder testimonials with real reviews | testimonials.html |
| 🔴 High | Update stats numbers (rooms, clients) | index.html, about.html |
| 🟡 Medium | Fill in About page bio text | about.html |
| 🟡 Medium | Add service photos | services.html |
| 🟡 Medium | Add Google Business review link | testimonials.html |
| 🟡 Medium | Add OG image for social sharing | index.html |
| 🟢 Low | Create favicon | assets/favicon.ico |
| 🟢 Low | Build 404 page | 404.html |
| 🟢 Low | Add Facebook link to footer (if applicable) | All pages |

---

## Audit Result: PASS — Ready for Deployment

The site is structurally complete and ready to deploy. All critical functionality is in place. Outstanding items are content placeholders that only the owner can fill (photos, real testimonials, Behold embed codes).

**Recommended deploy order:**
1. Deploy to Netlify now (even with placeholders visible)
2. Set up Behold.so → paste embed codes → redeploy
3. Drop in hero photo + owner photo → redeploy
4. Replace testimonial placeholders with real reviews → redeploy
