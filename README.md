# Angel Augustine Prasetya — Portfolio

Personal portfolio for Angel Augustine Prasetya, a Business Administration student at President University. Single-page site built with React, Vite, Tailwind CSS and Framer Motion, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the Vite dev server          |
| `npm run build`   | Production build to `dist/`        |
| `npm run preview` | Serve the production build locally |

Node 18 or newer is required (see `.nvmrc`).

### Optional: linting and formatting

ESLint and Prettier configs are included (`eslint.config.js`, `.prettierrc`) but the packages are not part of the default install to keep it lean. Enable them with:

```bash
npm i -D eslint @eslint/js globals eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh prettier prettier-plugin-tailwindcss
```

Then run `npx eslint .` and `npx prettier --write .`.

## Project structure

```
src/
├── assets/images/     Optimised WebP portraits
├── components/
│   ├── layout/        Navbar, Footer
│   ├── sections/      Hero, OrgMarquee, Highlights, About, Experience, Skills, Contact
│   └── ui/            Reusable primitives (Button, Badge, Section, SectionHeading, ...)
├── data/              All content lives here — edit these, not the components
│   ├── profile.js     Name, contact details, bio, CV link
│   ├── experiences.js Roles with YYYY-MM dates (durations are computed)
│   ├── skills.js      Core skills, soft skills, interests
│   └── navigation.js  Nav items / section ids
├── hooks/             useActiveSection, useScrolled, useLockBodyScroll
└── lib/               dates, motion variants, accent colour maps, cn()
```

## Updating content

- **Personal details, bio, availability line** → `src/data/profile.js`
- **Add a role** → append an entry to `src/data/experiences.js`. Use `end: null` for ongoing roles; the period label, duration and the stat cards update automatically.
- **Skills** → `src/data/skills.js`
- **Download CV button** → put the PDF in `public/` and set `cvUrl: '/cv.pdf'` in `profile.js`
- **Photos** → replace the files in `src/assets/images/` (keep them under ~400 KB; WebP recommended)

## Deployment

The site deploys on Vercel with zero configuration (`vercel.json` only adds long-lived caching for hashed assets). Once the production domain is known, replace the relative `og:image` URL in `index.html` with the absolute one so link previews work everywhere.

## Contact form

There is no backend. Submitting the form composes a `mailto:` link so the visitor's email client opens with the message pre-filled. Swap `handleSubmit` in `src/components/sections/Contact.jsx` for a Formspree / Resend call if a hosted inbox is preferred.
