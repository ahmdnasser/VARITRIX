# VARITRIX website & launch package

A fast bilingual Arabic/English marketing site for VARITRIX, a technology solutions company serving Sadat City and Egypt.

## Included

- Responsive Arabic-first / English toggle, accessible navigation and contact form
- Company profile and services: ERP, IoT, custom software, websites and mobile apps
- SEO metadata, Open Graph fields and LocalBusiness JSON-LD
- Vercel serverless Google Sheets lead endpoint with validation, origin checks, time trap, honeypot and per-instance rate limiting
- Facebook route, launch copy and a social-banner brief in `launch/`

## Local preview

Open `index.html` for the page design. To test lead submission locally, run `npx vercel dev` after installing the Vercel CLI and create a local `.env` from `.env.example`.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import `ahmdnasser/VARITRIX` in Vercel; Framework Preset: **Other**.
3. In Google Cloud, create a dedicated service account, enable the Google Sheets API, and share the existing Customer Requests Sheet with its `client_email` as **Editor**. This step must be done by the account owner; do not use browser cookies or personal account passwords as server credentials.
4. Add `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_SHEET_ID`, and `GOOGLE_SHEET_TAB` from `.env.example` in Vercel Project Settings → Environment Variables.
5. Deploy and submit a real test lead. The API appends it to `Customer Requests!A:M`, shows success, then opens WhatsApp to `+20 122 495 0653` with a prefilled message.
6. Replace the canonical URL in `index.html` with your production domain if it changes, and verify the form, Facebook link, mobile menu and Arabic/English switch.

The form never exposes Google credentials to the browser. Until the three Vercel environment variables are configured, it intentionally returns an error instead of losing enquiries.

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
