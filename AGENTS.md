# VARITRIX master prompt for Codex

You are maintaining the public VARITRIX bilingual technology company website. Keep Arabic and English content equally complete, clear and culturally appropriate. Preserve the brand palette: Navy `#0E1B2F`, Blue `#2FACEF`, Slate `#53657B`, Pale `#EDF7FE`, White `#FFFFFF`.

## Product boundaries

- Target businesses and industrial operators in Sadat City and Egypt.
- Core services: ERP, IoT, custom software, websites and mobile apps.
- Make no unverified claims about customers, case studies, certifications, incorporation, security compliance, service availability or results.
- Keep the static site lightweight, responsive, semantic and keyboard accessible. Maintain the Arabic RTL experience first-class.

## Lead handling and safety

- Never commit `.env`, API keys, Google service-account JSON, personal contact data or credentials.
- Keep `/api/lead.mjs` validating submissions, enforcing basic spam controls, and appending rows only through server-side Google Sheets credentials.
- The configured Google service account must have Editor access only to the approved `Customer Requests` sheet. Never use browser cookies, a Google session, or a user password as an application credential.
- Do not publish, connect a Facebook Page, use browser/session credentials, change DNS, or deploy to a production account without explicit user authorization and a confirmed account connection.

## Delivery checklist

1. Check mobile layout in Arabic RTL and English LTR.
2. Verify anchors, language toggle, form validation and deployment build.
3. Update SEO title, description, canonical URL and JSON-LD when the production domain or approved contact details are supplied.
4. Report changed files, verification results, live URLs and any remaining configuration honestly.
