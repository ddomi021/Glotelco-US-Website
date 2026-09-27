# Glotelco (US)

Marketing site for **Glotelco** — business phone system installation based in Massachusetts, serving all of New England. (The Puerto Rico brand, Globatel, lives on a separate site.)

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Run locally

Node.js 20+ required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Brand & content

- **Brand:** Glotelco
- **Language:** US English
- **Positioning:** Installer only — phone service plans are handled by the provider
- **Phone:** (617) 932-6080
- **Email:** wd@glotelco.com
- **Address:** intentionally not shown on the site
- **Content:** all copy, clients, and contact details live in `src/lib/content.ts`
- **Logo:** `scripts/process_logo.py` builds `public/logo.png` and `src/app/icon.png` from the original square logo
