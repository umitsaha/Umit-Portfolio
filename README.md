# Umit Saha — Portfolio

Personal website for **Umit Saha**, Software Engineer at Samsung R&D Bangladesh.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Local development

You need Node.js 20+ (this project was started with Node 24 LTS).

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## How to update content

Almost everything you will change lives in one file:

`src/data/portfolio.ts`

Add GitHub, email, projects, or new roles there. Do not hardcode new facts inside components.

To show a resume, put a PDF at:

`public/resume.pdf`

## Notes

- Dark mode is the default. Theme preference is stored in `localStorage`.
- The contact form is **not** connected to a backend.
- Codeforces live stats are fetched from the public API and labeled separately from self-reported numbers. If the API is blocked by the browser, the page falls back to the profile file.
