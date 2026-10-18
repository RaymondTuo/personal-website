# Raymond Tuo — portfolio

A single-page portfolio with individual case-study pages, built to make one
argument to an AI marketing firm: data/AI rigor, marketing judgment, and design
taste in the same person.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer
Motion · Recharts · MDX content in `/content`. Fully static — every route
prerenders at build time.

---

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerender)
npm start       # serve the production build
npm run lint
```

Requires Node 20 or newer (built on 24.20).

> **Editing CSS in dev:** this project uses the `@tailwindcss/turbopack` loader
> configured in `next.config.ts`. Component and content edits hot-reload
> normally, but changes to `app/globals.css` sometimes need a dev-server
> restart to take effect. If a style edit doesn't appear, restart `npm run dev`
> before debugging it.

---

## Where to edit what

| I want to change… | Edit this |
|---|---|
| Name, email, links, resume path, site URL | `lib/site.ts` |
| Case-study copy | `content/case-studies/*.mdx` |
| Chart numbers | `content/chart-data.ts` |
| Colors, type scale, prose styles | `app/globals.css` |
| Hero copy and the three stat chips | `components/sections/hero.tsx` |
| The three pillars | `components/sections/pillars.tsx` |
| Jobs and schools | `components/sections/experience.tsx` |
| Skill chips | `components/sections/toolkit.tsx` |
| Resume PDF | replace `public/raymond-tuo-resume.pdf` |

### Adding or editing a case study

Each case study is one MDX file in `content/case-studies/`. The frontmatter
drives the cards, the page header, and the sitemap; the body is the prose.

```yaml
---
title: Project name
tagline: One sentence, framed for a marketer.
pillar: Customer Insight        # or Measurement & Attribution / Growth Optimization
role: What you did
timeframe: 2025
order: 2                        # controls card order and next/prev
stack: [Python, XGBoost]
chart: churn-decile             # key from components/charts/index.tsx
chartCaption: Caption, also used as the chart's accessible description.
metrics:                        # exactly three renders best
  - value: 64
    suffix: "%"
    label: Short label in caps
marketerMove: The one-line "so what" shown on the card.
---
```

Body sections use `##` headings and follow the same five beats throughout:
**Challenge → Insight → Approach → Impact → What a marketer would do with
this.** Drop a chart anywhere with:

```mdx
<Chart name="churn-decile" label="Targeting efficiency" caption="…" />
```

Available chart keys: `churn-decile`, `causal-estimate`, `load-forecast`,
`allocation`, `shadow-price`. To add one, create a client
component in `components/charts/` and register it in
`components/charts/index.tsx`.

---

## Design system

**Palette — "Cinnabar & Paper."** The accent is cinnabar, the red of a Chinese
name seal, which doubles as an editorial accent and a nod to the bilingual
positioning. Neutrals are warm-shifted so the page reads as paper rather than
dashboard.

Each mode defines two accent tokens: `--accent` for fills and display type, and
`--accent-fg` for anything at body size. That split is what keeps links at
WCAG AA contrast without dulling the brand color. All tokens live in
`:root` / `.dark` in `app/globals.css` and are exposed to Tailwind through
`@theme inline`, so classes like `bg-bg`, `text-fg-muted`, and `border-line`
follow the theme automatically.

Charts paint with `var(--chart-N)` directly in SVG, so they re-theme with no JS
and no re-render.

**Type.** Instrument Serif for display, Inter for body (with `cv11`/`ss03`),
JetBrains Mono for eyebrows, metrics, and axis labels. The mono micro-labels are
what keep the serif from tipping into wedding-invitation territory.

**Motion.** Scroll reveals (`components/reveal.tsx`), animated metric counters
(`components/counter.tsx`), and a cursor-reactive gradient mesh in the hero
(`components/gradient-mesh.tsx`). The mesh animates `transform` only, so it
stays on the compositor. Every one of them checks `prefers-reduced-motion` and
renders the static end state when it's set.

**Dark mode.** Class-based, with an inline script in `app/layout.tsx` that
applies the stored preference before first paint — no flash. Defaults to the
system setting until the user clicks the toggle.

---

## SEO and accessibility

- Metadata and Open Graph tags in `app/layout.tsx`; per-page metadata in
  `app/work/[slug]/page.tsx`.
- Generated OG card at `app/opengraph-image.tsx`. It reads
  `app/fonts/InstrumentSerif-Regular.ttf` off disk because Satori can't resolve
  `next/font`. **Keep that file** and keep the card's text Latin-only — the font
  has no CJK coverage.
- `app/sitemap.ts` and `app/robots.ts` derive from the MDX files and `site.url`.
- `Person` JSON-LD on the homepage.
- Semantic landmarks, a skip link, visible focus rings, `aria-pressed` on the
  theme toggle, and `role="img"` + caption on every chart so screen readers get
  a description instead of a pile of SVG text.

---

## Deploying to Vercel

1. Push this folder to a Git repo.
2. In Vercel, **Add New → Project**, import the repo, and accept the detected
   Next.js defaults. No environment variables are needed.
3. Add your custom domain under **Settings → Domains**.
4. Set `url` in `lib/site.ts` to that domain and redeploy — it drives canonical
   URLs, the sitemap, and Open Graph tags.

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

> This project currently lives inside a OneDrive folder. OneDrive syncing
> `node_modules` and `.next` causes slow installs and occasional file locks
> during builds. If builds start failing oddly, either exclude those two folders
> from sync or move the project outside OneDrive.

### A note on `npm audit`

`npm audit` reports advisories in `js-yaml` (via `gray-matter`) and `fast-glob`
(via `eslint-config-next`). Both are build-time-only and only ever parse your
own local files — nothing reaches a request path in a statically exported site.
`npm audit fix --force` would downgrade ESLint and `gray-matter` to breaking
versions, so leave them alone.

---

## TODO — real data to drop in

Everything below is a placeholder or came from the April 2026 resume PDF. Search
the codebase for `TODO(raymond)` to find each one in place.

### Must fix before sending this to anyone

1. **`lib/site.ts`** — set `url` to your real domain. Until then, canonical
   tags, the sitemap, and OG images point at `raymondtuo.com`.
2. **`content/chart-data.ts`** — all six datasets are illustrative. Replace with
   real model output; the charts need no code changes.
3. **`public/raymond-tuo-resume.pdf`** — currently a copy of
   `Raymond Tuo MSBA Resume.pdf`. Swap in the version you want recruiters to see.

### Numbers to verify or supply

4. **Cell2Cell** (`content/case-studies/cell2cell-churn.mdx`) — the 64% capture,
   3.1× lift, and 0.68 AUC are plausible placeholders. Use your actual test AUC
   and decile capture rates.
5. **Project Geminae** (`project-geminae.mdx`) — the 3.5× overstatement and the
   count of refutation tests are placeholders; the capstone runs through April
   2026. Update when final, and add the real headline finding under **Impact**.
6. **PJM** (`pjm-load-forecasting.mdx`) — confirm the 4.2% MAPE and interval
   coverage, and add the per-area accuracy table.
7. **Predict-then-Optimize** (`predict-then-optimize.mdx`) — add realized
   performance versus the equal-weight baseline.
8. **TSMC–Nvidia** (`tsmc-nvidia-allocation.mdx`) — replace the invented
   constraint names, units, and shadow prices with your LP output.
9. **Hero stat chips** (`components/sections/hero.tsx`) — "3 yrs", "4.03", and
    "2 markets" came off the resume. Change if you'd rather lead with something
    else.
10. **Experience bullets** (`components/sections/experience.tsx`) — the 20%
    efficiency gain, 7% profitability lift, 300,000+ ConnectWise records, and
    4.03 GPA all came from the resume PDF. Re-read them once as a hiring
    manager would.

### Nice to have

11. A real favicon and a photo. `app/icon.svg` is a placeholder mark, and
    there's no portrait anywhere on the site yet.
