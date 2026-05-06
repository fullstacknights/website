# Contributing

Thanks for your interest in Fullstack Nights! This project welcomes contributions from the community.

## Setup

```sh
nvm use            # picks up Node version from .nvmrc
npm install
npm run develop    # http://localhost:8000
```

## Workflow

1. Fork the repo and create a topic branch from `main`.
2. Make your changes. Keep commits scoped and use [conventional commit](https://www.conventionalcommits.org/) prefixes (`feat:`, `fix:`, `docs:`, `chore:`, …).
3. Run `npm run lint` and `npm run format` before pushing.
4. Open a pull request — the [template](.github/PULL_REQUEST_TEMPLATE.md) will guide you through the rest.

## Translations

User-facing strings live in `src/locales/en.json` and `src/locales/es.json`. Keep both files in sync; pages render via `useTranslation()` from `react-i18next`.

## Code of Conduct

By participating you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md) ([español](https://fullstacknights.com/code-of-conduct/)).
