# VARITRIX website & launch package

A fast bilingual Arabic/English marketing site for VARITRIX, a technology solutions company serving Sadat City and Egypt.

## Included

- Responsive Arabic-first / English toggle, accessible navigation and contact form
- Company profile and services: ERP, IoT, custom software, websites and mobile apps
- SEO metadata, Open Graph fields and LocalBusiness JSON-LD
- Vercel serverless lead endpoint with validation, origin checks, time trap, honeypot and per-instance rate limiting; it sends validated leads to a private Google Apps Script receiver server-to-server
- Facebook route, launch copy and a social-banner brief in `launch/`

## Local preview

Open `index.html` for the page design. To test lead submission locally, run `npx vercel dev` after installing the Vercel CLI and create a local `.env` from `.env.example`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import `ahmdnasser/VARITRIX` in Vercel; Framework Preset: **Other**.
3. Deploy the approved Google Apps Script receiver as a web app that runs as its owner. It must require a long shared secret and append only to the approved `Customer Requests` tab.
4. Add `GOOGLE_APPS_SCRIPT_URL` and `APPS_SCRIPT_SHARED_SECRET` from `.env.example` in Vercel Project Settings → Environment Variables.
5. Deploy and submit a real test lead. The API appends it to `Customer Requests!A:M`, shows success, then opens WhatsApp to `+20 122 495 0653` with a prefilled message.
6. Replace the canonical URL in `index.html` with your production domain if it changes, and verify the form, Facebook link, mobile menu and Arabic/English switch.

The form never exposes Google credentials or the Apps Script secret to the browser. Until the two Vercel environment variables are configured, it intentionally returns an error instead of losing enquiries.

## Brand assets and launch readiness

The supplied VARITRIX responsive asset kit is included under `assets/backgrounds/` and `assets/icons/`, while the original typographic wordmark remains intact. Navy `#0E1B2F`, Blue `#2FACEF`, Slate `#53657B`, Pale `#EDF7FE`, and White `#FFFFFF` are preserved.

Before launch, replace or confirm the Facebook URL, official email/phone, privacy policy, legal entity details, domain canonical URL and lead webhook. Do not add client, certification or incorporation claims without evidence.

## GitHub

```bash
git add .
git commit -m "Build VARITRIX bilingual launch website"
git push origin main
```

See `launch/facebook-launch-copy.md` and `launch/social-banner-brief.md`. Create or publish a Facebook Page only after an authorized business administrator confirms ownership and approves the final content.
