# Haranath & Associates – Website

Vite + React + TypeScript + Tailwind CSS.

## Run locally
    npm install
    npm run dev

## Deploy on Vercel
- Framework preset: Vite
- Build command: npm run build
- Output directory: dist

## Images (put these in /public, names are case-sensitive on Vercel)
- original ca.png   (CA India emblem)
- hara1.jpeg        (About page photo)
- hara2.jpeg        (Home page photo)

## Careers form
`src/config/firmConfig.ts` -> `careersFormEndpoint`. Leave empty to open the applicant's email app
(resume must be attached manually). Paste a Formspree / Web3Forms endpoint there to receive
applications with the resume file directly.

## Where to edit content
- Contact details, offices, hours: `src/config/firmConfig.ts`
- Practice areas, notices, social links, knowledge bank data: `src/data/firmData.ts`
- Firm profile (partners, values, service lines): `src/components/FirmProfileSection.tsx`
- Compliance calendar rules: `src/utils/compliance.ts`
