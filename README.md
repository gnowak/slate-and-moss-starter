# Slate & Moss — Astro Starter

Stack: **Astro v5 + Tailwind + MDX/Content Collections**, deploy on **Cloudflare Pages**, optional analytics (**Plausible/Umami**), optional **Decap CMS**, and **/go/:slug** affiliate redirects via Pages Functions.

## Quickstart
```bash
# 1) Install deps
npm i

# 2) Dev
npm run dev

# 3) Build
npm run build

# 4) Preview
npm run preview
```

## Deploy to Cloudflare Pages
- Set "Build command": `npm run build`
- "Build output directory": `dist`
- Functions: `/functions` directory is auto-detected.
- `_redirects` file provides simple redirects; `/functions/go/[slug].ts` adds dynamic slugs.

## Analytics
- Plausible: uncomment script in `BaseLayout.astro` and set your domain.
- Umami: uncomment script and set `data-website-id`.

## CMS (optional)
- Decap CMS served at `/admin`. Configure `backend` for your Git provider (GitHub/GitLab/Bitbucket) or use Netlify Identity / Git Gateway.
- Content lives in `src/content` and is validated via Content Collections (Zod).

## Affiliate Links
- Add slugs to `functions/_shared/links.json` and link to `/go/<slug>` in content.
- Always mark outbound affiliate links as `rel="sponsored nofollow"` if you link directly.

## Notes
- Replace the placeholder post with real content before affiliate applications.
- Update `site` in `astro.config.mjs` for proper sitemaps/OG URLs.
