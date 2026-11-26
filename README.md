# Sivaraj R — Portfolio

A responsive personal portfolio built with React and Vite. It presents selected projects, technical skills, education, internship experience, and contact links.

## Features

- Responsive layout with a keyboard-accessible mobile navigation menu
- Project cards with source code and live demo links
- Résumé download from the contact-ready portfolio site
- Reduced-motion and visible keyboard-focus support

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React and React Icons

## Run locally

Use Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Do not open `index.html` directly as a `file://` URL; the app uses JavaScript modules that need to be served over HTTP.

## Build and preview

```sh
npm run build
npm run preview
```

## Lint

```sh
npm run lint
```

## Update portfolio content

Edit `src/data/portfolio.js` to update personal details, skills, projects, education, and experience. The downloadable résumé is stored at `public/resume.pdf`.

## Deployment

Build output is generated in `dist/`. Deploy the contents of that folder to a static hosting provider that supports single-page Vite sites. Configure the deployment base path if hosting under a repository subpath.
