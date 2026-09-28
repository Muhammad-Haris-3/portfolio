# Portfolio

The personal site of Muhammad Haris Khokhar: background, education, skills,
certificates, and the data projects, each with a chart of its actual finding.

**Live:** [muhammad-haris-khokhar-portfolio.vercel.app](https://muhammad-haris-khokhar-portfolio.vercel.app/)

## Stack

Next.js 16, React 19, TypeScript, Tailwind CSS 4, Recharts, lucide-react.
Deployed on Vercel.

## Where things live

| Path | |
|---|---|
| `src/content/portfolio.ts` | All site text: profile, education, certificates, projects, links |
| `src/app/components/Projects.tsx` | The project charts, keyed by project name. A project without an entry here renders as a card with no chart |
| `src/app/components/` | One component per section |

Every chart must set `isAnimationActive={false}` — see the comment above
`projectVisuals` in `Projects.tsx` for why the charts render empty without it.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. `npm run build` and `npm run lint` are what to
check before pushing.
