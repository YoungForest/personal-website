# personal-website

[![Deploy to GitHub Pages](https://github.com/YoungForest/personal-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/YoungForest/personal-website/actions/workflows/deploy.yml)

Sen Yang's personal site — built with [VitePress](https://vitepress.dev/), deployed to **GitHub Pages** at <https://youngforest.me>.

## Local development

Requires **Node.js >= 20**.

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run build      # build static site to .vitepress/dist
npm run preview    # preview the production build locally
```

## Repository layout

```
.
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml      # build + deploy to GitHub Pages on push to main
│   │   └── pr-check.yml    # build-only check on PRs
│   └── dependabot.yml      # weekly npm + actions updates
├── .vitepress/
│   └── config.ts           # site configuration (nav, sidebar, social links, search, sitemap)
├── public/                 # static assets copied verbatim to site root
│   ├── CNAME               # custom-domain marker for GitHub Pages
│   ├── profile.jpeg        # avatar / og:image
│   └── icons/              # custom social-link SVG icons (LeetCode / Codeforces)
├── posts/                  # blog posts (one .md per post + index.md)
├── mock/                   # mock-interview videos page
├── index.md                # home page (uses VitePress home layout)
└── package.json
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which:

1. Checks out the repo with full history (needed for `lastUpdated` git timestamps).
2. Installs deps with `npm ci` and the npm cache.
3. Runs `npm run build`.
4. Uploads `.vitepress/dist` as a Pages artifact and deploys via `actions/deploy-pages@v4`.

### One-time GitHub setup

In the repo's **Settings → Pages**:

- **Source**: GitHub Actions
- **Custom domain**: `youngforest.me`
- Tick **Enforce HTTPS** once the certificate has been issued (a few minutes after DNS propagates).

### DNS records for `youngforest.me`

At your DNS registrar, replace the existing records (which still point to a defunct
Azure Web App) with:

| Type    | Host  | Value                                  |
| ------- | ----- | -------------------------------------- |
| `A`     | `@`   | `185.199.108.153`                      |
| `A`     | `@`   | `185.199.109.153`                      |
| `A`     | `@`   | `185.199.110.153`                      |
| `A`     | `@`   | `185.199.111.153`                      |
| `AAAA`  | `@`   | `2606:50c0:8000::153`                  |
| `AAAA`  | `@`   | `2606:50c0:8001::153`                  |
| `AAAA`  | `@`   | `2606:50c0:8002::153`                  |
| `AAAA`  | `@`   | `2606:50c0:8003::153`                  |
| `CNAME` | `www` | `youngforest.github.io.`               |

The `CNAME` file in `public/` ensures GitHub Pages keeps the custom domain
configured even after Actions-based deployments overwrite the gh-pages contents.

## Tech stack

- **Static-site generator**: [VitePress](https://vitepress.dev/) 1.x (Vue 3 + Vite)
- **Hosting**: GitHub Pages (free, with custom domain + HTTPS)
- **Search**: built-in local full-text search
- **Theme**: VitePress default (auto dark mode, mobile-friendly, accessible)

## License

MIT © Sen Yang
