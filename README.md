# Tomas Martinovic Website

Professional research website for Tomáš Martinovič.

## Stack

- Astro
- TypeScript
- Static output

The generated `dist/` folder can be deployed to GitHub Pages or served by any static web server.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production site is generated in `dist/`.

## CV Source And Exports

The editable CV source lives in `src/content/cv.md`. The website CV page and the print-specific route at `/cv/print/` both render from this Markdown file.

Use `cv-entry` blocks for dated entries that should render as a two-column CV row:

```md
:::cv-entry{date="2015-2018"}
**Ph.D., Computational Sciences**, VSB - Technical University of Ostrava.

Thesis title: *Tools for time series analysis of nonlinear dynamical systems*.
:::
```

Generate a fresh PDF from the Markdown-backed print route:

```bash
npm run cv:pdf
```

This writes `CV_Tomas_Martinovic_English_Full.pdf` to both `public/` and `dist/`. The GitHub Pages workflow generates the PDF after the site build, so the deployed PDF stays in sync with `src/content/cv.md`.

An editable DOCX export is available when Pandoc is installed:

```bash
npm run cv:docx
```

## GitHub Pages

The included GitHub Actions workflow builds the site and publishes `dist/` to GitHub Pages when changes are pushed to `main`.

For a GitHub profile page, use the repository name `Nithador.github.io`. If you publish from another repository, set the correct `site` and `base` values in `astro.config.mjs`.

## Self-hosting

Build the site and serve the `dist/` directory with any static server, for example Caddy, Nginx, Apache, or a small container image.
