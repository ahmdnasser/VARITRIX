# VARITRIX website & launch package

A fast bilingual Arabic/English marketing site for VARITRIX, a technology solutions company serving Sadat City and Egypt.

## Included

- Responsive Arabic-first / English toggle, accessible navigation and contact form
- Company profile and services: ERP, IoT, custom software, websites and mobile apps
- SEO metadata, Open Graph fields and LocalBusiness JSON-LD
- Vercel serverless lead endpoint with spam honeypot and validation
- Facebook route, launch copy and a social-banner brief in `launch/`

## Local preview

Open `index.html` for the page design. To test lead submission locally, run `npx vercel dev` after installing the Vercel CLI and create a local `.env` from `.env.example`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import `ahmdnasser/VARITRIX` in Vercel; Framework Preset: **Other**.
3. Add `LEAD_WEBHOOK_URL` in Vercel Project Settings → Environment Variables. It must be an approved HTTPS webhook that forwards leads to the company inbox or CRM.
4. Deploy and replace the canonical URL in `index.html` with your production domain.
5. Verify the form, Facebook link, mobile menu and Arabic/English switch on the deployed domain.

The site works without the environment variable, but the form intentionally reports that lead delivery is not configured rather than losing enquiries.

## Brand assets and launch readiness

The inherited repository identifies Navy `#0E1B2F`, Blue `#2FACEF`, Slate `#53657B`, Pale `#EDF7FE`, and White `#FFFFFF`; these are preserved. No original logo/image files or uploaded ZIP kits were available in this workspace or repository at build time. The site therefore uses a typographic wordmark and CSS hero instead of inventing brand artwork. Put approved files in `assets/` and update the markup before official launch.

Before launch, replace or confirm the Facebook URL, official email/phone, privacy policy, legal entity details, domain canonical URL and lead webhook. Do not add client, certification or incorporation claims without evidence.

## GitHub

```bash
git add .
git commit -m "Build VARITRIX bilingual launch website"
git push origin main
```

See `launch/facebook-launch-copy.md` and `launch/social-banner-brief.md`. Create or publish a Facebook Page only after an authorized business administrator confirms ownership and approves the final content.
