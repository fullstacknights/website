<div align="center">

<img src="src/images/logo.png" alt="Fullstack Nights" width="320" />

**Charlas sobre tecnología y diseño en un ambiente informal.**

[![CI](https://github.com/fullstacknights/website/actions/workflows/ci.yml/badge.svg)](https://github.com/fullstacknights/website/actions/workflows/ci.yml)
[![Discord](https://img.shields.io/discord/1521687604586614926?label=Discord&logo=discord&logoColor=white&color=5865F2)](https://discord.gg/aeKTqu6A)
[![License: MIT](https://img.shields.io/github/license/fullstacknights/website?color=blue)](LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A522-339933?logo=node.js&logoColor=white)](.nvmrc)
[![Gatsby](https://img.shields.io/badge/Gatsby-5-663399?logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)

</div>

The marketing site for [Fullstack Nights](https://fullstacknights.com) — a Puerto Rico
tech and design community. Built with Gatsby 5, React 18, and Tailwind 3.

## Quick start

```sh
nvm use            # picks up Node version from .nvmrc
npm install
npm run develop    # http://localhost:8000
```

## Scripts

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run develop` | Start the Gatsby dev server (alias: `npm start`) |
| `npm run build`   | Production build into `public/`                  |
| `npm run serve`   | Serve the production build                       |
| `npm run lint`    | `oxlint` over `src/`                             |
| `npm run format`  | Prettier over `**/*.{js,jsx,json,md}`            |
| `npm run clean`   | `gatsby clean` (clears the Gatsby cache)         |

## Project layout

```
src/
  components/   Shared React components (barrel export via index.js)
  pages/        Filesystem routes (about.js → /about/)
  locales/      i18n strings — en.json / es.json, kept in sync
  config.js     CONFIG.activeEvent toggles event-related UI
static/         Copied to site root verbatim (photos, assets)
netlify/        Serverless functions (form submissions)
```

## Deployment

The site deploys to [Netlify](https://www.netlify.com/) on every push to `main`
(see `netlify.toml`). CI (`.github/workflows/ci.yml`) runs lint, format check,
build, and a Percy visual snapshot on each pull request.

## Community

- Join us on [Discord](https://discord.gg/aeKTqu6A)
- Read the [Code of Conduct](CODE_OF_CONDUCT.md) ([español](https://fullstacknights.com/code-of-conduct/))

## Contributing

Contributions are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## License

[MIT](LICENSE)
