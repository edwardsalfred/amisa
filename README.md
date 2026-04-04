# AmiSa Interior Wall Design — Website

**Live site:** houstonaccentwalldesign.com  
**Phone:** 408-516-5793  
**Email:** amisa.interiordesign70@gmail.com  
**Instagram:** @amisa.interiordesign

---

## Files

```
site/
├── index.html          — Homepage
├── about.html          — About / Owner story
├── services.html       — Services detail
├── gallery.html        — Gallery with Instagram tabs
├── testimonials.html   — Client reviews
├── contact.html        — Contact form
├── css/style.css       — All styles
├── js/main.js          — GSAP animations, nav, gallery tabs
└── assets/             — Drop your photos here
    ├── hero.jpg        — Hero background (1920×1080, WebP)
    ├── owner.jpg       — Owner photo (portrait, 3:4 ratio)
    ├── service-accent-wall.jpg
    ├── service-painting.jpg
    ├── service-mural.jpg
    ├── service-improvements.jpg
    ├── service-consult.jpg
    └── favicon.ico
```

---

## 🚀 Deploy to Netlify (Free, Recommended)

1. Go to [netlify.com](https://netlify.com) → Create free account
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop the entire `site/` folder into the upload area
4. Netlify gives you a live URL instantly (e.g., `amisa.netlify.app`)
5. Go to **Domain Settings** → add your custom domain (`houstonaccentwalldesign.com`)

**To update the site later:** Just drag and drop the updated `site/` folder again.

---

## 🚀 Deploy to Vercel (Alternative)

1. Install Vercel CLI: `npm i -g vercel`
2. In terminal, `cd` to the `site/` folder
3. Run `vercel` and follow the prompts
4. Connect your domain in the Vercel dashboard

---

## 📸 Setting Up Behold.so (Instagram Auto-Sync Gallery)

This is what makes the gallery update automatically when you post to Instagram.

### Step 1 — Create Your Behold Account
1. Go to **[behold.so](https://behold.so)**
2. Sign up for a free account
3. Click **"New Gallery"**

### Step 2 — Connect Instagram
1. Select **"Instagram"** as your source
2. Log in with **@amisa.interiordesign** credentials
3. Authorize Behold to access your posts

### Step 3 — Create Your Galleries
You need to create **6 galleries** (one per tab in your gallery page):

| Gallery Name | Hashtag Filter | Tab |
|---|---|---|
| All Work | (no filter — show all) | All Work |
| Bedrooms | `#amisabedroom` | Bedrooms |
| Living Rooms | `#amisalivingroom` | Living Rooms |
| Accent Walls | `#amisawall` | Accent Walls |
| Home Offices | `#amisaoffice` | Home Offices |
| Kids Rooms | `#amisakids` | Kids Rooms |

> **Note:** Hashtag filtering requires Behold Pro ($8/month). The free tier shows all posts in one gallery. You can start with just "All Work" for free, then upgrade for the room tabs later.

### Step 4 — Get the Embed Code
For each gallery:
1. In your Behold dashboard, click the gallery
2. Click **"Embed"**
3. Copy the embed code (looks like):
```html
<div id="behold-widget-XXXXXXXX">
  <script src="https://w.behold.so/widget.js" type="module"></script>
</div>
```

### Step 5 — Add to Your Website
Open `site/gallery.html` and find each tab's placeholder section:
- Search for `<!-- PASTE YOUR BEHOLD.SO EMBED CODE HERE:`
- Replace the placeholder `<div class="behold-placeholder">...</div>` with your embed code
- Do this for each of the 6 tabs

Also open `site/index.html` and replace the preview section placeholder on the homepage.

---

## 📷 Instagram Hashtag Protocol

When posting new project photos to Instagram, **add these hashtags** to auto-categorize them in the gallery:

| Room Type | Hashtag to Add |
|---|---|
| Bedroom | `#amisabedroom` |
| Living Room | `#amisalivingroom` |
| Accent Wall | `#amisawall` |
| Home Office | `#amisaoffice` |
| Kids Room | `#amisakids` |

These hashtags don't need to be visible (you can put them in the first comment). Behold picks them up either way.

---

## ✏️ Content Placeholders to Fill In

Search the HTML files for `<!-- REPLACE` to find every placeholder. Key ones:

| Location | What to add |
|---|---|
| All pages — `assets/hero.jpg` | Hero background photo (1920×1080) |
| `about.html` — `assets/owner.jpg` | Your professional photo |
| `about.html` — "Meet the Mind Behind AmiSa" | Your actual bio |
| `services.html` — service images | Photos of each service type |
| `testimonials.html` — all 6 review cards | Your real client reviews |
| `index.html` — stats numbers | Actual counts (rooms, clients) |
| `testimonials.html` — Google review link | Your Google Business review URL |

---

## 📞 Contact Form

The contact form uses **Netlify Forms** (built into the HTML — no code needed).
- Works automatically when deployed to Netlify
- Submissions go to your Netlify dashboard
- Add your email in Netlify → **Forms → Notifications** to get email alerts

For other hosts, replace with [Formspree](https://formspree.io) (free tier available):
1. Sign up at formspree.io
2. Create a new form
3. Replace `action="/contact-success"` with your Formspree endpoint

---

## 🎨 Customization

### Colors
Edit `css/style.css`, lines 8–25 (`:root` variables):
- `--gold: #7D6002` — AmiSa's brand gold (keep this)
- `--black` / `--dark` — background shades

### Fonts
Currently: **Cormorant Garamond** (headings) + **DM Sans** (body)  
Change in `css/style.css` line 1 (Google Fonts import) and lines 34–35.

### Stats Numbers
In `index.html` and `about.html`, find `data-count="50"` and change the number.

---

## Need Help?

Contact the developer or reach out via the build documentation in `research/`.
