# Ride Manager

React + TypeScript starter for a transport company rides list.

## Requirements

- Node.js 20+ (or 22/24)
- npm

## Setup

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start local dev server   |
| `npm run build` | Typecheck and production build |
| `npm run preview` | Preview production build |

## What's included

- A rides list showing rider name, time, and status
- Static ride data under `src/data/rides.ts`
- A thin `fetchRides()` API in `src/api/ridesApi.ts`
