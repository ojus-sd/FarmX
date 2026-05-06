# FarmX

FarmX is a polished direct-to-market agricultural marketplace built with React and Vite. It helps farmers publish crop inventory and lets buyers discover fresh produce by crop name or region without middlemen.

## Live Demo

[Open FarmX on GitHub Pages](https://ojus-sd.github.io/FarmX/)

[Open FarmX HTML Presentation](https://ojus-sd.github.io/FarmX/presentation.html)

## Features

- Farmer portal for adding validated produce listings.
- Buyer marketplace with region filtering and crop/location search.
- Persistent local dashboard state across browser refreshes.
- Responsive dashboard shell with mobile-friendly controls.
- GitHub Pages deployment through GitHub Actions.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- GitHub Actions

## Getting Started

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

The app is configured for the `/FarmX/` GitHub Pages base path. Pushing to `main` runs `.github/workflows/deploy.yml`, builds the app, and publishes the `dist` artifact to GitHub Pages.

## Repository Topics

`react`, `vite`, `tailwindcss`, `agritech`, `marketplace`, `farmers`, `github-pages`
