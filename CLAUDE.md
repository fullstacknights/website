# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Node version is pinned via `.nvmrc` (currently `22.22.2`, lts/jod). Use `nvm use` before running anything.

- `npm run develop` — start the Gatsby dev server (`gatsby develop`); also aliased as `npm start`
- `npm run build` — production build into `public/`
- `npm run serve` — serve the production build
- `npm run clean` — `gatsby clean` (run this when you hit Gatsby cache weirdness)
- `npm run lint` — `oxlint src/` (zero-config; replaced ESLint)
- `npm run format` — Prettier 3 over `**/*.{js,jsx,json,md}`

There is no unit test runner — the `test` script is a placeholder. CI (`.github/workflows/ci.yml`) runs `lint`, `build`, and a Percy visual snapshot step against `public/` (requires `PERCY_TOKEN`).

## Architecture

Static marketing site for Fullstack Nights (a Puerto Rico tech/design community), built with **Gatsby 5 + React 18 + Tailwind 3 + PostCSS**.

### Active event toggle (`src/config.js`)

`CONFIG.activeEvent` is the single switch that drives event-related UI across the site:

- When `false`: the `/schedule/` route is filtered out of the nav (`getSections` in `src/constants.js`) and the homepage hides `<UpcomingEvent>`.
- When `true`: set `CONFIG.event` to `{ type, date, venue, participants }`. `type` is `"topic-tables"` or anything else (treated as Speakers). The homepage layout shifts (different spacing classes are applied).

When adding a new event, edit only `src/config.js` — no other files should hardcode event data.

### Internationalization (`src/i18n.js`, `src/locales/{en,es}.json`)

i18next is initialized in `gatsby-browser.js`. Languages are detected via `i18next-browser-languagedetector` with fallback `en`. The language switcher in `getLanguageSwitcher` toggles between `en-US` and `es-PR` specifically. All user-facing strings should go through `useTranslation()` and live in both `en.json` and `es.json` — keep the two files structurally in sync.

### Components (`src/components/`)

- Barrel re-export from `src/components/index.js` — import shared components from `"../components/index"`.
- Each component pairs `foo.js` with an optional `foo.module.css` (CSS Modules). Tailwind utility classes are used inline; `.module.css` is reserved for things Tailwind can't express.
- `Layout` wraps every page with `<Menu>` + `<main>` + `<Footer>`. Pages render inside `<Layout>` in the page body.

### SEO / `<head>` injection

This project uses **Gatsby's built-in [Head API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)** — `react-helmet` was removed. Each page in `src/pages/` exports a top-level `Head` component **at module scope**, not inside the page's JSX:

```js
export default function MyPage() { /* ... */ }
export const Head = () => <SEO title="My Page" />;
```

`src/components/seo.js` returns a fragment of plain `<title>`, `<meta>`, and `<html lang>` tags (no `<Helmet>` wrapper). It uses `useStaticQuery` to read site metadata. **Adding a new page means adding the `Head` export** — without it, that page silently loses its title and meta tags.

### SVG handling

`gatsby-plugin-react-svg` is configured (in `gatsby-config.js`) to inline-import only files matching `*.inline.svg`. Use the `.inline.svg` suffix when you need the SVG as a React component (e.g. `import RSS from "../assets/rss.inline.svg"`); use a normal `.svg` import for static `<img src>` usage.

### Static assets

`static/` is copied to the site root verbatim. Photos are organized by role: `static/{founders,organizers,moderators,past-speakers}/`. The `ORGANIZERS` / `FOUNDERS` arrays in `src/constants.js` and `src/past-speakers.js` / `src/past-moderators.js` reference these paths as absolute (`/founders/...`).

### Styling

- Tailwind config (`tailwind.config.js`) defines a custom design system: brand colors, custom `spacing` scale in 5px increments, custom `fontSize` scale (`xs`–`xl`, `h1`–`h4`). Prefer these tokens over arbitrary values.
- `postcss.config.js` runs `@fullhuman/postcss-purgecss` only in production against `./src/**/*.js`. Dynamic class names that aren't statically present in JS source can be purged — keep class strings literal.
- Global CSS is loaded via `gatsby-browser.js` (`src/styles/global.css`, `src/styles/typography.css`).

### Pages

Files in `src/pages/` map 1:1 to routes via Gatsby's filesystem routing: `about.js` → `/about/`, etc. `404.js` is the not-found page.
