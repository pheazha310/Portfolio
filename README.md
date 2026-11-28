# Sophea Phal Portfolio

The portfolio uses React, TypeScript, and Vite. React components use `.tsx`,
and TypeScript modules use `.ts`. Its existing page URLs are preserved:

- `/` or `/index.html` — Home
- `/page/about.html`
- `/page/skills.html`
- `/page/certificate.html`
- `/page/projects.html`
- `/page/experience.html`
- `/page/contact.html`

## Source structure

The React source follows Feature-Sliced Design layers:

- `src/app/` — application entry point, composition, and global styles
- `src/pages/` — individual page slices and their page-specific source content
- `src/widgets/site-layout/` — shared navigation and footer layout
- `src/features/` — language/theme controls and site interactions
- `src/shared/` — reusable UI such as the HTML content renderer

There is no `entities/` layer because the current portfolio has no shared
domain entities that need to be modeled.

## Run locally

Install Node.js 20.19+ (or 22.12+) and npm, then run:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the production build and preview
it locally:

```sh
npm run build
npm run preview
```

`npm run build` runs `npm run typecheck` before creating the production bundle.
Run `npm run typecheck` separately when you only need TypeScript diagnostics.

The generated site is in `dist/`. Deploy the contents of that directory to a
static host that serves the included `.html` files and their relative assets.
All page entry files are included in the Vite build, so the existing `.html`
routes work without a server-side rewrite.

The contact form validates its fields and opens a prefilled email draft in the
visitor's email application. It does not send messages from the website; a
working email application is required to complete the send.

## Vercel deployment

The site is a static Vite build with explicit HTML entry points for the home
page and each existing `/page/*.html` route. In Vercel, select the project root
as the project directory, use `npm run build` as the build command, and `dist`
as the output directory. No environment variables are required. Connect the
GitHub repository to enable preview deployments; production deployment remains
manual and is not performed by this project setup.

The contact form validates the fields and opens a prefilled message in the
visitor's email application. It does not send email through a server, so there
is no mail service secret to configure.
