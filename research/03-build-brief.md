# AmiSa — Website Build Brief

**Client:** AmiSa Interior Wall Design  
**Location:** Houston, TX 77056  
**Instagram:** @amisa.interiordesign  
**Prepared:** April 2025  

---

## 1. Design Direction

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Deep Black | #0f0e0c | Primary backgrounds, nav |
| Rich Dark Brown | #1a1714 | Section backgrounds, footer |
| AmiSa Gold (brand) | #7D6002 | CTAs, borders, accents |
| Light Gold | #c9a84c | Hover states, highlights |
| Warm Cream | #f5f0e8 | Card backgrounds, light sections |
| Off-White | #fafaf8 | Page background for light sections |
| White | #ffffff | Text on dark, clean cards |

### Typography
- **Display/Hero:** Cormorant Garamond (Google Font) — editorial, luxury
- **Headings (H2/H3):** Cormorant Garamond Italic for emotional sections, Regular for structural
- **Body:** DM Sans — clean, modern, readable at all sizes
- **Brand accent:** Tajawal for any Arabic-language text or brand mark

### Photography Style
- Warm-toned editorial interiors
- Full-bleed room photography
- Before/after project pairs
- Owner in action shots (building trust)
- Natural light preferred
- Source: Instagram @amisa.interiordesign

### Animation Strategy
- **GSAP + ScrollTrigger** for all scroll animations
- Hero: parallax background image + text fade-in on load
- Section transitions: fade-up with 40px translate, staggered children
- Gallery: photo reveal on scroll
- Numbers/stats: count-up animation
- Hover: subtle scale on cards, gold underline on links
- Mobile: reduced motion, no parallax
- `prefers-reduced-motion`: all animations disabled

### What to Avoid
- Wix/Squarespace template aesthetic
- Auto-playing video with sound
- Cluttered multi-column layouts on mobile
- JS-blocked above-the-fold content
- Exaggerated claims (no "1 million customers")
- Generic stock photography

---

## 2. Site Architecture

### Pages to Build
| Page | Purpose | Primary CTA |
|------|---------|-------------|
| / (Home) | First impression, trust, conversion | Get Free Quote |
| /about | Owner story, credentials, personal brand | Book a Consultation |
| /services | Full service list with descriptions | Request Service |
| /gallery | Categorized project portfolio | Contact for Your Project |
| /testimonials | Social proof hub | Get Started |
| /contact | Lead capture | Send Message |
| /accent-wall-designs | SEO landing page | Get Accent Wall Quote |
| /interior-designs | SEO landing page | View Gallery |
| /home-designs | SEO landing page | View Gallery |
| /home-improvements | SEO landing page | Get Quote |
| /interior-wall-painting-services | SEO landing page | Book Consultation |

### Navigation Structure
```
Logo [left]         HOME  ABOUT  SERVICES  GALLERY  CONTACT  [Get Free Quote button, right]
```
- Sticky on scroll
- Mobile: hamburger → full-screen overlay menu
- Active page indicator: gold underline

---

## 3. Homepage Structure (Section by Section)

### Section 1 — Hero
- Full-viewport height
- Background: hero photo of a stunning accent wall (from Instagram)
- Overlay: dark gradient (bottom to top)
- **Headline:** "Where Walls Become Art" (or approved alternative — see options below)
- **Subheadline:** "Custom accent wall designs & interior wall painting in Houston, TX"
- **CTA:** [Get Your Free Quote] — gold button → links to /contact
- **Secondary CTA:** [See Our Work] — ghost button → links to /gallery
- Parallax scroll effect on background image
- Small stat bar: "50+ Rooms Transformed · Houston, TX · @amisa.interiordesign"

### Headline Options (3 formulas)
1. "Where Walls Become Art" — aspirational, memorable
2. "Your Home. Your Vision. Your Walls." — personal, possessive
3. "Houston's Custom Accent Wall Specialists" — direct, SEO-strong

### Section 2 — Services Overview
- Light cream background
- 4–6 service cards with icons:
  - Accent Wall Design
  - Interior Wall Painting
  - Home Improvement
  - Custom Mural / Texture Work
  - Full Interior Design
- Each card: icon + name + 2-line description + [Learn More] link
- GSAP stagger reveal on scroll

### Section 3 — Gallery Preview (Instagram Live Feed)
- Dark background section
- Header: "Recent Work"
- Embedded live Instagram feed (Behold.so widget)
- 6–8 recent posts shown in masonry/grid
- [View Full Gallery] button → /gallery
- Auto-updates when owner posts to Instagram

### Section 4 — How It Works (3-Step Process)
- Light cream/white background
- Step 1: Free Consultation — "We discuss your vision, style, and budget"
- Step 2: Custom Design — "We create a tailored plan just for your space"
- Step 3: Professional Installation — "We transform your walls with precision and care"
- GSAP count-up animation on step numbers
- Optional Step 4: "Love Your Home" — satisfaction/guarantee note

### Section 5 — Testimonials
- Dark background
- 3–5 client testimonials in a carousel/cards
- Format: Quote → Client name → Room type → Star rating
- Google Reviews badge if available
- Trust signal: "Trusted by Houston homeowners"

### Section 6 — About / Owner Introduction
- Split layout: photo left, text right
- Headline: "The Artist Behind the Walls"
- 2–3 paragraph owner story
- Credentials and experience
- Personal touch: why they started AmiSa
- CTA: [Meet the Team] → /about

### Section 7 — Stats Bar
- Dark gold background (#7D6002)
- 3–4 stats with GSAP count-up:
  - Rooms Completed: [number]+
  - Years Experience: [number]+
  - Happy Clients: [number]+
  - Houston Neighborhoods Served: [number]+
- *PLACEHOLDER — owner needs to provide actual numbers*

### Section 8 — Call to Action / Footer Top
- Full-width dark section
- Large headline: "Ready to Transform Your Space?"
- Subtext: "Get a free, no-commitment design consultation"
- [Schedule Free Consultation] button — gold, large
- Phone number prominently shown

### Footer
- 4-column: Logo + tagline | Quick Links | Services | Contact Info + Social
- Dark background, white text
- Gold copyright bar at bottom
- Social icons: Instagram (primary), Facebook

---

## 4. Gallery Page Structure

### Room Type Categories (Tabs / Filters)
- All Work
- Bedrooms
- Living Rooms
- Home Offices
- Kids Rooms
- Accent Walls
- Full Interiors

### Instagram Auto-Sync Strategy
**Option A (Recommended): Behold.so Embed**
- Embed Behold widget filtered by hashtag
- Owner tags Instagram posts with: #amisabedroom, #amisalivingroom, #amisaoffice, #amisakidsroom
- Gallery auto-updates on new posts
- No App Store approval needed for basic embed
- Free tier: up to 150 posts shown
- Cost: Free–$8/month

**Option B: Elfsight Instagram Feed**
- More styling options
- Cost: $5/month
- Requires Instagram Business account connected

**Option C: Behold API + Custom Build**
- Full control over design
- Requires Behold developer account
- Best long-term option for completely custom gallery look

### Recommendation
Start with **Behold.so free embed** — fastest to set up, auto-updates, minimal cost. If the owner wants a more custom gallery later, migrate to Behold API.

**Instagram Hashtag Protocol for Owner:**
When posting to Instagram, use room-type hashtags so the gallery auto-categorizes:
- Bedroom designs: `#amisabedroom`
- Living rooms: `#amisalivingroom`  
- Home offices: `#amisaoffice`
- Kids rooms: `#amisakids`
- General accent walls: `#amisawall`

---

## 5. Content Framework

### Confirmed Copy (from client site)
- Business name: **AmiSa**
- Location: Houston, TX 77056
- Self-description: "At AmiSa, I specialize in custom accent wall designs and interior wall painting services tailored to my client's preferences."
- Instagram: @amisa.interiordesign

### Content Placeholders (Owner Must Provide)
- [ ] Phone number
- [ ] Email address
- [ ] Full street address or service area description
- [ ] Owner's full name
- [ ] Owner's professional bio (3–5 sentences)
- [ ] Owner's professional headshot
- [ ] Stats: rooms completed, years experience, clients served
- [ ] Business hours
- [ ] Actual testimonials (names + quotes)
- [ ] Google Business profile link
- [ ] Facebook page link
- [ ] Starting price or price range (optional but recommended)

### SEO Targets Per Page
| Page | Primary Keyword | Secondary |
|------|----------------|-----------|
| Home | accent wall design Houston | interior wall design Houston TX |
| /accent-wall-designs | accent wall designs Houston | custom accent wall Houston |
| /interior-designs | interior designer Houston TX | interior design services Houston |
| /home-designs | home design Houston | home interior Houston |
| /home-improvements | home improvements Houston TX | wall improvement Houston |
| /interior-wall-painting-services | interior wall painting Houston | wall painting service Houston TX |

---

## 6. Conversion Playbook

### Primary Goal
**Phone call or form submission** → free consultation → booked project

### Mobile CTA
Sticky bottom bar on mobile: [📞 Call Now] [✉ Get Quote]

### Lead Capture Form (Simple)
- Name (required)
- Phone (required)  
- Room Type dropdown: Bedroom / Living Room / Office / Other
- Brief message (optional)
- "We respond within 24 hours" — sets expectations

### Social Proof Placement
1. Hero: stat bar ("50+ rooms transformed")
2. Section 5: testimonial carousel
3. Gallery: live Instagram feed proves recent active work
4. About page: credentials and story
5. Footer: Google review count

### Trust Signals Checklist
- [ ] Google Reviews embed or badge
- [ ] Number of completed projects
- [ ] "Houston Local" emphasis
- [ ] Owner photo and real name
- [ ] Instagram feed proves real, recent work
- [ ] Response time promise ("24-hour response")

---

## 7. Technical Requirements

### Stack
- HTML5 / CSS3 / Vanilla JS
- GSAP + ScrollTrigger (CDN)
- Cormorant Garamond + DM Sans (Google Fonts)
- Behold.so embed for Instagram gallery
- No frameworks — fast, portable, deployable anywhere

### Performance Targets
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Lazy load all images below the fold
- `prefers-reduced-motion` support
- Hero image: WebP format, compressed

### Deployment
- Static HTML — deployable to Netlify, Vercel, or any host
- README.md with step-by-step deploy instructions
- Behold.so embed setup instructions included

---

## Ready to Build?

This brief is complete. Once approved, Phase 5 begins immediately.

**Questions for the owner before build:**
1. Which headline do you prefer? "Where Walls Become Art" / "Your Home. Your Vision. Your Walls." / "Houston's Custom Accent Wall Specialists"
2. Can you provide: phone number, email, and your name for the About section?
3. Do you want to set up the Instagram auto-sync now, or have it ready as a placeholder?
4. Any rooms/project types you want to highlight most?
