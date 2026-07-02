# Cassidy Brookland — Interview Portfolio & Product Demo

A two-tab interview portfolio for AI Technical PM roles, pairing a concise profile with an interactive product demo that shows PM thinking, not just UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)

## Site structure

### Tab 1 — Profile (default)

Background understood in under a minute:

- Short intro — who Cassidy is and the products she likes building (IoT, energy, AI-enhanced product management)
- Impact metrics and 2–3 featured projects that deep-link into the Product Demo tab
- Experience timeline (employer names intentionally omitted) and education
- Technical skills grouped by category (AI workflows, IoT/cloud, hardware, programming, DevOps, product management)
- CV button, LinkedIn, and email links
- Scannable "How I use AI" highlights — Cursor-native delivery with human verification

### Tab 2 — Product Demo

A fictional **GridPulse** energy-IoT product built entirely on synthetic data, split into three sections:

| Section | What it shows |
|---------|---------------|
| KPI dashboard | 4 headline KPIs — click any metric to see *why it matters*, *what I noticed*, and *the decision I'd make as PM* |
| Stakeholder views | Nested Customer Success / Sales / Marketing / Ops tabs with human-readable insights, charts, and tables |
| PM artifacts | Architecture diagram, user journey, API data flow, prioritisation matrix, quarterly roadmap, A/B test ideas, feature tradeoffs, risks & assumptions |

> **Note:** All site names, accounts, metrics, and scenarios in the Product Demo are synthetic. No real organisations or customers are represented. The Profile tab contains real contact details and career summary.

## CV file

The "View CV" button links to `/resume.html`, which now includes Cassidy's full CV content.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite** for fast dev/build
- **Tailwind CSS** for the glass/dark design system
- **Recharts** for trend visualisations

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build (type-checks first)
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) after running `npm run dev`.

## Deploy to GitHub Pages

This repo includes a workflow at `.github/workflows/deploy-pages.yml` that deploys on pushes to `main`.

1. Push this project to a GitHub repository.
2. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` again (or run the workflow manually from **Actions**).

After deployment, your site will be available at:

`https://<your-github-username>.github.io/<repo-name>/`

## Project structure

```
src/
├── components/     # UI components (nav, KPI dashboard, PM artifacts, charts, tables)
│   └── ui/         # Shared shell/header helpers
├── data/           # Profile data + synthetic GridPulse demo data
├── types/          # TypeScript interfaces
└── App.tsx         # App shell with Profile | Product Demo tabs
```

## About

Built by **Cassidy Brookland** — Product Manager · IoT & Energy · AI-Enhanced Product Leadership.

- [LinkedIn](https://www.linkedin.com/in/cassidy-brookland-596bb1210/)
- cassidybrookland2@gmail.com

Designed and built in Cursor — the same environment used for PRD drafting, persona agent review, and rapid stakeholder UI prototypes.

## License

MIT — free to use as a reference or starting point for your own portfolio work.
