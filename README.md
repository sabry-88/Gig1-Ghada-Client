# Ghada Gaber Abdelnazer — Personal Portfolio

Personal portfolio website built with React + TypeScript for Ghada Gaber Abdelnazer, a Customer Relations & Sales Professional based in Giza, Egypt.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **CSS Variables** — full theming system (no CSS framework)
- **Google Fonts** — Cormorant Garamond, DM Sans, DM Mono

---

## Project Structure

```
ghada-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── types/
    │   └── index.ts           # Shared TypeScript types
    ├── data/
    │   └── index.ts           # All portfolio content (CV data)
    ├── hooks/
    │   ├── useTheme.ts        # Light/dark mode toggle + localStorage
    │   └── useReveal.ts       # Scroll-triggered reveal animations
    ├── styles/
    │   ├── globals.css        # Design system, tokens, base styles
    │   └── responsive.css     # Breakpoints (900px, 600px, 380px)
    └── components/
        ├── layout/
        │   ├── Navbar.tsx     # Fixed nav, mobile menu, theme toggle
        │   └── Footer.tsx     # Links, copyright, back-to-top
        └── sections/
            ├── Hero.tsx       # Full-screen intro + CTA
            ├── About.tsx      # Summary, stats, tags
            ├── Experience.tsx # Timeline — 3 roles
            ├── Skills.tsx     # Technical, Soft, Language cards
            ├── Education.tsx  # Cairo University
            ├── LinkedIn.tsx   # LinkedIn CTA section
            └── Contact.tsx    # Email, phone, location, LinkedIn cards
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy.

### Preview production build locally

```bash
npm run preview
```

---

## Deployment

### Netlify

1. Run `npm run build`
2. Drag and drop the `/dist` folder into [netlify.com/drop](https://app.netlify.com/drop)

Or connect your GitHub repo and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Vercel

```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages

Set `base: './'` in `vite.config.ts` (already configured), then push `/dist` to the `gh-pages` branch.

---

## Design System

### Color Palette

| Token | Dark Mode | Light Mode | Role |
|---|---|---|---|
| `--bg-primary` | `#111318` | `#F9FAFB` | Page background |
| `--bg-secondary` | `#1C1F26` | `#F3F4F6` | Alternate sections |
| `--bg-card` | `#22262E` | `#FFFFFF` | Cards |
| `--text-primary` | `#F3F4F6` | `#111318` | Headings |
| `--text-secondary` | `#D1D5DB` | `#374151` | Body text |
| `--text-muted` | `#9CA3AF` | `#6B7280` | Labels, captions |
| `--accent` | `#D1D5DB` | `#374151` | Interactive accent |
| `--border` | `rgba(156,163,175,0.15)` | `rgba(107,114,128,0.12)` | Subtle borders |

Palette source: greyscale image provided by client — Slate → Silver → Pearl → White.

### Typography

| Role | Font | Usage |
|---|---|---|
| Display | Cormorant Garamond | Section headings, hero name, large titles |
| Body | DM Sans | Paragraphs, buttons, nav links |
| Mono | DM Mono | Labels, eyebrows, contact info, tags |

---

## Features

- **Light / Dark mode** — toggle in navbar, saved to `localStorage`, respects `prefers-color-scheme` on first visit
- **Scroll reveal animations** — each section fades in on scroll via `IntersectionObserver`
- **Fully responsive** — tested at 1200px, 900px, 600px, 380px
- **Accessible** — keyboard focus styles, `aria-label` on icon buttons, semantic HTML
- **Reduced motion** — animations disabled when `prefers-reduced-motion: reduce` is set
- **SEO-ready** — meta description and keywords in `index.html`
- **Performance** — no runtime CSS-in-JS, no heavy dependencies, 54 KB gzipped JS

---

## Updating Content

All portfolio content lives in one file: `src/data/index.ts`

To update:
- **Personal info** (name, email, phone, LinkedIn) → `personalInfo` object
- **Work experience** → `experiences` array
- **Skills** → `skills` array
- **Education** → `education` object
- **Navigation items** → `navItems` array

---

## Client Information

| Field | Value |
|---|---|
| Client | Ghada Gaber Abdelnazer |
| Email | ghadagaber768@gmail.com |
| Phone | +20 115 802 4947 |
| Location | Giza, Egypt |
| LinkedIn | [ghada-gaber-3111441b6](https://www.linkedin.com/in/ghada-gaber-3111441b6) |

---

## License

Built for Ghada Gaber Abdelnazer. All rights reserved.
