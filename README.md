# text-cleaner-demo

A polished demo site for [**jiya-npm**](https://www.npmjs.com/package/jiya-npm) — a lightweight, zero-dependency npm package for capitalizing text and removing extra spaces.

🔗 **npm:** <https://www.npmjs.com/package/jiya-npm>
🔗 **GitHub:** <https://github.com/JiyaSrivas/jiya-npm>

## Features

- **Live Demo** — Type messy text, pick an action, see the result instantly
- **API route** — `POST /api/clean` with `{ text, action }` powered by `jiya-npm`
- **Dark / Light mode** — Toggle with one click
- **Responsive** — Looks great on mobile, tablet, and desktop
- **Copy-to-clipboard** — Copy results & code snippets
- **History** — See your last 5 transformations

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [jiya-npm](https://www.npmjs.com/package/jiya-npm)

## Getting Started

```bash
# Clone the repo
git clone <your-repo-url>
cd text-cleaner-demo

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is Vercel-ready — no environment variables required.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

## API

### `POST /api/clean`

| Field    | Type   | Description                                           |
| -------- | ------ | ----------------------------------------------------- |
| `text`   | string | The text to clean                                     |
| `action` | string | `"capitalize"`, `"removeExtraSpaces"`, or `"both"`    |

**Response:** `{ "result": "..." }`

## Author

**Jiya Srivas** — [GitHub](https://github.com/JiyaSrivas)

## License

MIT
