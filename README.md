# Mohammadreza Ghamari — Portfolio

> A résumé that scrolls, animates, and respects your color scheme.

[![Next.js](https://img.shields.io/badge/Next.js-15-000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-EF4444?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222?logo=github)](https://mrghamari.github.io/portfolio/)
[![License](https://img.shields.io/badge/License-MIT-green)](#-license)

A statically-exported, fully-typed personal site that reads like a résumé and behaves like a product. Built with the Next.js App Router, Tailwind CSS 4, and Framer Motion — and deployed to GitHub Pages as plain HTML and JS.

---

## ✨ Highlights

- **Single source of truth for content.** Every section — Hero, Skills, Experience, Education, Contact — renders from one typed `data/resume.ts` module. Update your résumé, ship the site.
- **Hero-aware navigation.** The header stays hidden while you're in the hero, then slides in once you scroll into the content — driven by `IntersectionObserver`, not scroll listeners.
- **Motion that earns its place.** Letter-by-letter name reveal, typewriter title, animated underline that uses `layoutId` to morph between active nav links, spring-smoothed scroll progress bar.
- **Light/dark with no flash.** `next-themes` with `attribute="class"` and `suppressHydrationWarning` for a hydration-safe theme toggle.
- **Static export, zero server.** `output: 'export'` ships pure HTML/CSS/JS — no Node runtime in production, just a CDN.

---

## 🖼️ Preview

<!-- TODO: drop a screenshot or short GIF here. Suggested: hero + scrolled-state in light & dark. -->

![Light mode preview](./public/preview-light.png)
![Dark mode preview](./public/preview-dark.png)

Live: **https://mrghamari.github.io/portfolio/**

---

## 🚀 Quick Start

**Prerequisites**

- Node.js `>=20`
- npm `>=10` (works with pnpm/yarn — lockfile is npm)

**Get it running**

```bash
git clone https://github.com/mrGhamari/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open <http://localhost:3000>.

> No `.env` file is required. The only env var the project reads is `NEXT_PUBLIC_BASE_PATH`, which is injected automatically by `next.config.mjs` during a production build.

---

## 🏗️ Project Structure

```
my-app/
├── app/                          # Next.js App Router entry
│   ├── layout.tsx                # Root layout, metadata, skip-to-content link
│   ├── page.tsx                  # Single-page composition of all sections
│   └── globals.css               # Tailwind 4 entry + theme tokens (CSS variables)
│
├── components/
│   ├── providers.tsx             # next-themes wrapper (dark by default)
│   ├── sections/                 # One file per page section
│   │   ├── Nav.tsx               # Hero-aware sliding header + mobile menu
│   │   ├── Hero.tsx              # Animated name + typewriter title
│   │   ├── Summary.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Languages.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                       # Small, reusable primitives
│       ├── AnimatedCard.tsx
│       ├── Container.tsx
│       ├── ContactCard.tsx
│       ├── ContactPill.tsx
│       ├── DownloadButton.tsx
│       ├── FloatingDownloadButton.tsx
│       ├── Reveal.tsx            # Scroll-triggered fade/slide-in wrapper
│       ├── ScrollProgress.tsx    # Spring-smoothed top progress bar
│       ├── SectionHeading.tsx
│       ├── SkillBadge.tsx
│       ├── SkillLevelDots.tsx
│       ├── ThemeToggle.tsx
│       ├── TimelineItem.tsx
│       └── icons/LinkedinIcon.tsx
│
├── data/
│   └── resume.ts                 # Typed source of truth: PERSONAL, SKILLS, EXPERIENCE…
│
├── lib/
│   └── utils.ts                  # cn() — clsx + tailwind-merge
│
├── public/
│   └── Resume.pdf                # Downloadable résumé
│
├── .github/workflows/
│   └── jekyll-gh-pages.yml       # Build + deploy to GitHub Pages
│
├── next.config.mjs               # Static export + basePath for /portfolio/
├── postcss.config.mjs            # @tailwindcss/postcss
├── tsconfig.json                 # strict mode, @/* path alias
└── package.json
```

---

## 🛠️ Tech Stack

| Technology       | Purpose                            | Why chosen                                                                                  |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------- |
| **Next.js 15**   | App Router + static export         | `output: 'export'` gives a single-page experience with zero server, deployable to Pages.   |
| **React 19**     | UI rendering                       | Latest concurrent features, first-class with Next 15.                                       |
| **TypeScript 5** | Type safety                        | `strict: true` everywhere; the résumé data is fully typed so a typo can't sneak past CI.    |
| **Tailwind 4**   | Styling                            | CSS-variable based theme tokens in `globals.css` — no `tailwind.config.js` needed.          |
| **Framer Motion**| Animations                         | `layoutId` underline, spring scroll progress, AnimatePresence for the mobile menu.          |
| **next-themes**  | Light/dark mode                    | Handles class toggling and SSR mismatch without a flash of wrong theme.                     |
| **lucide-react** | Icons                              | Tree-shakeable, consistent stroke weight, matches the minimal aesthetic.                    |
| **clsx + tailwind-merge** | Conditional classes       | `cn()` collapses conflicting Tailwind classes — last-write-wins for utilities.              |
| **GitHub Pages** | Hosting                            | Free static hosting that pairs naturally with `next export`.                                |

---

## 📁 Key Features

### A résumé that's also an app
- **Hero** — animated name reveal (per-letter motion), typewriter job title, contact pills with mail/tel/maps links and a one-click resume download.
- **Skills** — grouped categories with 1–5 level indicators (`SkillLevelDots`) and badge chips.
- **Experience** — timeline view with reveal-on-scroll items.
- **Education & Languages** — compact cards driven by the same data shape.
- **Contact** — actionable cards for email, phone, and LinkedIn.

### Navigation that gets out of the way
- The header hides while the hero is in the viewport and slides in on scroll — implemented with two `IntersectionObserver` instances (one for active-section tracking, one for hero visibility).
- The active nav link gets an underline that morphs between items using Framer Motion's `layoutId`.

### Built for accessibility
- Skip-to-content link in the root layout.
- All interactive surfaces have visible focus states and ARIA labels.
- Theme honors `prefers-color-scheme` and exposes a manual toggle.

### Built for the open web
- Full metadata in `app/layout.tsx`: canonical URL, robots directives, Open Graph profile + Twitter card with a 1200×630 image (`public/og-image.png`).
- JSON-LD (`ProfilePage` + `Person` + `WebSite`) generated from `data/resume.ts` in `components/seo/StructuredData.tsx`.
- `sitemap.xml`, `robots.txt` and `manifest.webmanifest` from `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`; PNG favicons and an Apple touch icon in `public/`.
- A `noindex` 404 page (`app/not-found.tsx`).
- Themed `themeColor` for both light and dark UA chrome.

#### Search Console setup
1. In [Google Search Console](https://search.google.com/search-console), add a **URL prefix** property for `https://mrghamari.github.io/portfolio/` and pick the **HTML tag** method.
2. The token is set in `app/layout.tsx` (it is public anyway: it ships in the page's `<head>`). To use a different one without a code change, set a repository variable named `GOOGLE_SITE_VERIFICATION` (Settings → Secrets and variables → Actions → Variables) and re-run the deploy workflow.
3. Verify, then submit `sitemap.xml` under **Sitemaps**. Keep the tag in place afterwards: Google re-checks it periodically.

> Crawlers only read `robots.txt` from a domain root, so it is ignored while the site lives under `/portfolio/`. It starts working once the site is served from a custom domain or a `<user>.github.io` repository.

---

## 🧩 Component Architecture

```
app/page.tsx
└── <Providers>                 # next-themes
    ├── <ScrollProgress />      # fixed, top, spring-smoothed
    ├── <Nav />                 # hero-aware sliding header
    ├── <main>
    │   ├── <Hero />
    │   ├── <Summary />
    │   ├── <Skills />          ── uses <SkillBadge>, <SkillLevelDots>
    │   ├── <Experience />      ── uses <TimelineItem>, <Reveal>
    │   ├── <Education />
    │   └── <Contact />         ── uses <ContactCard>, <ContactPill>
    ├── <Footer />
    └── <FloatingDownloadButton />
```

**Patterns in use**

- **Data-driven sections.** Sections don't hard-code content; they iterate over typed arrays from `data/resume.ts`. Adding a job is a one-line diff.
- **Primitive + composition.** `ui/` holds dumb visual primitives (`Container`, `SectionHeading`, `Reveal`); `sections/` composes them. No deep prop drilling.
- **`'use client'` only where it's needed.** Sections that need motion or state opt in; the rest stay server-rendered for the static export.
- **`cn()` everywhere conditional.** `lib/utils.ts:cn` merges Tailwind classes so variants stack cleanly.

---

## 📜 Available Scripts

| Script           | What it does                                                                  |
| ---------------- | ----------------------------------------------------------------------------- |
| `npm run dev`    | Start the Next.js dev server at <http://localhost:3000>.                      |
| `npm run build`  | Static-export the site to `./out/` with `basePath=/portfolio` in production.  |
| `npm run start`  | Serve a production build (rarely needed — this site exports static HTML).     |
| `npm run lint`   | Run `next lint` with the `next/core-web-vitals` ruleset.                      |
| `npm run deploy` | Build + push `./out/` to the `gh-pages` branch via `gh-pages` CLI.            |

> CI uses `.github/workflows/jekyll-gh-pages.yml` to build and publish on every push to `master`. A `.nojekyll` is added during the workflow so GitHub Pages serves the `_next/` directory verbatim.

---

## 🤝 Contributing

This is a personal portfolio, but PRs that fix bugs, improve accessibility, or sharpen the motion are welcome.

**House style**

- ESLint config: `next/core-web-vitals` (`.eslintrc.json`).
- TypeScript: `strict: true`, no implicit `any`, path alias `@/*` points at the repo root.
- Tailwind: prefer utility classes; if you reach for `cn()`, you're probably doing the right thing.
- Keep `data/resume.ts` the only place résumé content lives — sections should read from it.

**Workflow**

```bash
git checkout -b fix/short-description
npm run lint
npm run build         # must pass before opening a PR
```

---

## 💡 Did you know?

- **No `tailwind.config.js`.** Tailwind 4 is configured entirely from `app/globals.css` using `@theme { … }` CSS variables. The accent palette, font, and easing curve all live there.
- **The header doesn't listen to scroll events.** Both "active section" and "is hero visible" are wired through `IntersectionObserver` — cheaper, smoother, and never out of sync with layout.
- **`basePath` is build-time conditional.** `next.config.mjs` only sets `basePath: '/portfolio'` when `NODE_ENV === 'production'`, so `npm run dev` stays at `/` and links don't break locally.
- **The animated nav underline uses `layoutId`.** One element, morphed between sections — that's why it slides instead of cross-fading.
- **The Bunny Fonts CDN** serves Inter (privacy-friendlier than Google Fonts), pulled in directly from `globals.css`.

---

## 📄 License

MIT — do whatever you'd like with the code. The résumé content (text, photo, work history) is © Mohammadreza Ghamari; please write your own.

---

```
        _
   __ _| |__   __ _ _ __ ___   __ _ _ __(_)
  / _` | '_ \ / _` | '_ ` _ \ / _` | '__| |
 | (_| | | | | (_| | | | | | | (_| | |  | |
  \__, |_| |_|\__,_|_| |_| |_|\__,_|_|  |_|
  |___/
```

If this repo gave you an idea, **⭐ star it** — it's free, and it makes the commit graph a little prouder.
