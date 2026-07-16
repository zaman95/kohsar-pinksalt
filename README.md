# Kohsar Saltworks

Wholesale Himalayan pink salt manufacturer & exporter site — Next.js 15 (App Router), TypeScript, Tailwind CSS, Sanity CMS, and Resend-powered forms.

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 15 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | Sanity (embedded Studio at `/studio`) |
| Forms | React Hook Form + Zod + Resend (Server Actions) |
| Images | `next/image` on Sanity's CDN, AVIF/WebP |
| Analytics | Google Analytics 4, Microsoft Clarity |
| SEO | Metadata API, JSON-LD, dynamic sitemap/robots, canonical URLs |
| Hosting | Vercel |

## 1. Install

```bash
npm install
```

## 2. Environment variables

Copy the example file and fill in real values:

```bash
cp .env.local.example .env.local
```

| Variable | Required for | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | canonical URLs, sitemap, JSON-LD | your production domain |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | all content | [sanity.io/manage](https://sanity.io/manage) → create project |
| `NEXT_PUBLIC_SANITY_DATASET` | all content | usually `production` |
| `SANITY_API_WRITE_TOKEN` | running `npm run seed` | Sanity project → API → Tokens → **Editor** permission |
| `RESEND_API_KEY` | quote/contact emails | [resend.com/api-keys](https://resend.com/api-keys) |
| `RESEND_FROM_EMAIL` | quote/contact emails | a sender address on a domain verified in Resend |
| `SALES_INBOX_EMAIL` | quote/contact emails | inbox that should receive form submissions |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | GA4 property → Admin → Data Streams |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Microsoft Clarity | clarity.microsoft.com → project settings |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Search Console | Search Console → Settings → Ownership verification → HTML tag (copy just the `content` value) |

Without Sanity configured the site still builds and runs with full real content — every query in `src/lib/queries.ts` falls back to the local starter content in `src/lib/fallbackContent.ts` (same catalog/blog/FAQs/certs/testimonials as the original design) instead of shipping an empty page. The moment Sanity has real documents, those take over automatically. Without `RESEND_API_KEY` set, form submissions are logged to the server console instead of emailed, so you can test the full form flow before wiring up Resend.

## 3. Set up Sanity

1. Create a project at [sanity.io/manage](https://sanity.io/manage) (or run `npx sanity init` from this folder and let it create one).
2. Put the project ID and dataset name into `.env.local`.
3. In the Sanity project's **API** settings, add both `http://localhost:3000` and your production domain to **CORS Origins** (with credentials allowed) — otherwise the embedded Studio at `/studio` will fail to authenticate.
4. Create an API token with **Editor** permission (API → Tokens) and put it in `SANITY_API_WRITE_TOKEN`.
5. Seed the studio with the site's original copy (categories, products, blog posts, FAQs, certifications, testimonials, site settings):

   ```bash
   npm run seed
   ```

   Safe to re-run — every document has a deterministic ID and is upserted.
6. Open `/studio` and add real product/category/blog photography — every image slot on the site falls back to a branded placeholder until a real Sanity image is attached.

## 4. Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`. The Studio lives at `http://localhost:3000/studio`.

## 5. Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run seed` | Push starter content into Sanity (needs `SANITY_API_WRITE_TOKEN`) |

## 6. Project structure

```
src/
  app/
    (site)/            marketing pages — Header/Footer layout, 18 routes
    studio/[[...tool]] embedded Sanity Studio (no site chrome)
    actions.ts          Server Actions: quote/contact form → Resend
    sitemap.ts, robots.ts, opengraph-image.tsx
  components/           Header, Footer, cards, forms, SanityImage, ui/Button
  lib/
    constants.ts         static brand content (nav, process steps, etc.)
    queries.ts            typed GROQ fetchers, fall back to fallbackContent.ts
    fallbackContent.ts      local starter catalog/blog/FAQs/certs/testimonials
    stockImages.ts          slug → local stock photo map (public/images/stock)
    validations.ts         Zod schemas shared by forms + Server Actions
    jsonld.tsx              structured-data builders
  sanity/
    schemaTypes/       category, product, blogPost, faq, certification, testimonial, siteSettings
    client.ts, image.ts, structure.ts
scripts/seed.ts          one-time content migration into Sanity
public/images/stock/      free-licensed (Unsplash) placeholder photography
```

Content split: product catalog, blog, FAQs, certifications and testimonials live in Sanity (things a non-developer should be able to edit) — until it's configured, `fallbackContent.ts` serves the same content locally. Structural/rarely-changing copy (nav labels, process steps, Incoterms, container-loading guide, etc.) stays in `src/lib/constants.ts` — editing that requires a code change and redeploy.

### Images

Every image slot resolves in this order: **real Sanity image → local stock photo (`stockImages.ts`) → branded gradient placeholder**. The stock photos are free-license (Unsplash, no attribution required) generic photography, not real product photos — replace them in Studio once you have your own. Leadership portraits, the contact page map, and the catalog PDF cover are intentionally left as placeholders since a stock photo would misrepresent a real person or a real location.

## 7. Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel.
3. Add every variable from `.env.local` to the Vercel project's Environment Variables (Production **and** Preview).
4. Add the Vercel deployment URL (and your final custom domain once attached) to Sanity's CORS origins, same as step 3 above.
5. Deploy. `next-sanity`'s image loader and `next.config.ts` are already configured for `cdn.sanity.io`.
