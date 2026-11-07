# Ayodele John Olatunji — Portfolio

The personal site of Ayodele John Olatunji, an AI data evaluation specialist and
front-end developer based in Akure, Nigeria.

**Live:** _add the Vercel URL here once deployed_

---

## About

The site argues one idea: that evaluating AI output and building the interfaces
around it are the same job seen from two ends. Ayodele rates and audits what
language models produce under strict quality guidelines, and separately designs
and ships the front ends that put that output in front of people. The portfolio
is arranged to make that connection legible rather than to list two unrelated
careers side by side.

It covers the work (five builds, three original and two front-end recreations),
the events organised at FUTA — including the 5th African Symposium on Big Data,
Analytics and Machine Intelligence — the certificates held, and the three
courses currently in progress.

## Stack

Vite, React 18, and hand-written CSS. Lenis provides smooth scrolling;
scroll reveals use `IntersectionObserver`. There is no UI framework and no
component library — the entire design system is one stylesheet.

Deployed on Vercel as a static build.

## Design

**Palette.** Ink `#0A0A0B`, bone `#F1ECE2`, amber `#E0A94A`. The amber is
pulled from the warm wall in the hero photograph, which is why the site reads as
one object rather than a template with a photo dropped into it.

**Type.** Instrument Serif for display, Inter Tight for body, JetBrains Mono for
labels and metadata. The serif carries the editorial voice; the mono keeps the
technical register honest.

**Motion.** One signature moment — the hero headline rising line by line from
behind a mask — followed by restrained scroll reveals. Everything is disabled
under `prefers-reduced-motion`.

**Left out deliberately.** Chrome gradient text, glassmorphism, a preloader with
a percentage counter, and a custom cursor. They date quickly, cost performance,
and a portfolio that loads instantly reads as more competent than one that makes
a visitor wait.

## Running locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Structure

```
index.html            page shell, fonts, meta tags
vite.config.js        Vite + React plugin
src/
  main.jsx            React entry point
  App.jsx             page composition and Lenis setup
  styles.css          the design system
  data/content.js     all site copy
  hooks/useReveal.js  scroll reveals via IntersectionObserver
  components/         one file per section
public/img/           photographs and project screenshots
```

All copy is held in `src/data/content.js` as plain objects, so the components
stay free of text and the site can be reworded without touching JSX.

## Contact

- Email — johnolatunji772@gmail.com
- LinkedIn — [john-olatunji-ayodele](https://www.linkedin.com/in/john-olatunji-ayodele-402361446)
- GitHub — [@Johnny1hunt](https://github.com/Johnny1hunt)
