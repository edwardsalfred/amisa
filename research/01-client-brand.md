# AmiSa — Client Brand Extraction

## Brand Snapshot
- **Company:** AmiSa - Interior Wall Design Company
- **Owner/Operator:** Solo operator (uses "I" in copy: "I specialize in...")
- **Location:** Houston, TX 77056
- **Website:** houstonaccentwalldesign.com
- **Instagram:** @amisa.interiordesign
- **Primary Color:** #7D6002 (gold/bronze)
- **Secondary Color:** #000000 (black) / #201913 (dark brown)
- **Background Colors:** #F8F8F8 (light gray), #fffef6 (warm cream), #222222 (dark gray)
- **Accent Color:** #7D6002 (gold — used on CTAs, borders, copyright bar)
- **Fonts:** Tajawal (primary, Arabic-friendly sans-serif), Roboto, Montserrat, Lato, Merriweather
- **Tone:** Professional, personal, bespoke
- **Core Message:** Custom accent wall designs and interior wall painting tailored to each client's preferences in Houston, TX

---

## Site Architecture (from sitemap.xml)
1. / — Home
2. /about
3. /services
4. /gallery
5. /testimonials
6. /contact
7. /accent-wall-designs (SEO page)
8. /interior-designs (SEO page)
9. /home-designs (SEO page)
10. /home-improvements (SEO page)
11. /interior-wall-painting-services (SEO page)

**Total: 11 URLs** — multi-page site with SEO landing pages

---

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Primary Brand | #7D6002 | CTAs, borders, icon hover, copyright bar, featured sections |
| Black | #000000 | Header, footer background, body text |
| Dark Brown | #201913 | Deep background sections |
| Dark Gray | #222222 | Section backgrounds |
| Light Gray | #F8F8F8 | Card backgrounds, alternating sections |
| Warm Cream | #fffef6 | Testimonial/content backgrounds |
| White | #ffffff | Text on dark backgrounds, card backgrounds |

---

## Typography
- **Primary:** Tajawal — Arabic-friendly, clean sans-serif (suggests owner may have Middle Eastern clientele or background)
- **Headings:** Merriweather or Montserrat (inferred from font stack)
- **Body:** Roboto / Lato
- All fonts loaded via Google Fonts

---

## Technical Stack
- **UI Framework:** UIKit 3.23.0
- **Features:** Lazy loading, carousel/sliders, lightbox for gallery, video placeholders, off-canvas mobile menu, sticky header, intersection observer animations
- **Built:** Custom (not Wix/Squarespace/Shopify)
- **Responsive:** Yes — breakpoints at 640px and 760px

---

## Page Structure (Home)
The homepage has 8+ distinct sections:
1. Sticky dark navigation header with hamburger mobile menu
2. Hero slider (715px height)
3. Section One — dark background, white text, key value prop
4. Section Two — cream background, gold card elements
5. Section Three — light gray, testimonial carousel
6. Section Four — dark background, icon buttons / service highlights
7. Section Five — white, tile content (likely service cards)
8. Section Six — light gray with gradient transition
9. Section Seven — gold container (#7D6002), featured content
10. Section Eight — light gray, white content cards
11. Dark footer with social icons and gold copyright bar

---

## Existing Copy (confirmed)
- Business name used consistently: **AmiSa**
- Self-description: "At AmiSa, I specialize in custom accent wall designs and interior wall painting services tailored to my client's preferences."
- Services referenced: accent wall designs, interior designs, home designs, home improvements, interior wall painting
- Location: Houston, TX 77056

---

## What's Missing / Needs Creation
- Compelling headline (the site has no confirmed visible tagline)
- Owner's name and story (about page content not extractable — JS-rendered)
- Pricing/packages
- Testimonials (page exists but content JS-rendered)
- Gallery categories (known from sitemap: accent walls, interior, home)
- Phone number, email — needs to be provided by client
- Instagram feed integration

---

## Instagram Content Strategy
- Handle: @amisa.interiordesign
- The gallery on Instagram shows recent project photos grouped by room type
- Room categories to build in gallery: **Bedrooms, Living Rooms, Accent Walls, Home Offices, Kids Rooms, Full Interiors**
- Auto-sync strategy: Embed live Instagram feed using Behold.so or Elfsight widget — updates automatically when owner posts
