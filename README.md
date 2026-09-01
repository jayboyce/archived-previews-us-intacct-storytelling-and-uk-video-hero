# Archived previews — US Intacct storytelling & UK video hero

**This repo contains no source code.** It is built output only — the deploy
target that `optimizely-us-intacct-storytelling-and-uk-video-hero` published to
so stakeholders and user-research participants could open a build in a browser.

Most commits are named `Deploy: <hash>`, where the hash is the source commit in
the active repo that produced the build.

## Status

The GitHub Pages site was removed on 2026-09-01 and this repo is now private, so
nothing here is served any more. Its old URL no longer resolves.

Re-publishing would need a rebuild, not just re-enabling Pages: the repo name is
baked into every asset path in the built files (`/<repo-name>/assets/…`), and
the repo has since been renamed.

## What is in here

| Path | What it shows |
|---|---|
| `/` | US Intacct landing page launcher (v1 / v2 / v3 prototypes) |
| `uk-video-hero/` | UK video hero |
| `uk-video-hero-v3/` | UK hero — persona clip, no card micro-UI |
| `uk-video-hero-pn17/` | UK hero — PN17 cards, glossy UI at the bottom |
| `uk-hero-optimizely/` | UK Optimizely bundle preview |
| `peekaboo-animation/` | GSAP + SVG hero animation |

Roughly 60 deploys between 2026-07-15 and 2026-08-24.

## Where the source lives

- **`optimizely-us-intacct-storytelling-and-uk-video-hero`** — active work: US
  Optimizely handover bundle and the UK video hero variants.
- **`UR-prototype-us-intacct-storytelling`** — the US React landing page built
  for user research.
