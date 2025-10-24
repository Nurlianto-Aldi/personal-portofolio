# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 16, React 19, and TypeScript. Uses App Router architecture with server-side rendering and Tailwind CSS v4 for styling.

## Essential Commands

### Development
```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm start          # Run production server
npm run lint       # Run ESLint checks
```

### Type Checking
TypeScript strict mode is enabled. Run type checks with:
```bash
npx tsc --noEmit
```

## Architecture

### Routing Structure
- **App Router** (Next.js 16): All routes in `app/` directory
- **Pages:**
  - `/` - Home page with bio (app/page.tsx)
  - `/project` - Project list page fetching from JSONPlaceholder API
  - `/project/[slug]` - Dynamic project detail pages

### Component Organization
- `app/components/` - Reusable React components
  - `Header.tsx` - Client component with active route highlighting
  - `ProjectCard.tsx` - Display individual project cards
  - `DoDebug.tsx` - Debug utility component
- `app/database/` - Static data and TypeScript interfaces
  - `Project.ts` - Project list type definitions and data

### Styling Approach
- **Tailwind CSS v4** via PostCSS plugin
- Global styles in `app/globals.css` (single import statement)
- Inline Tailwind classes throughout components
- No custom CSS modules

### Key Patterns

**Client vs Server Components:**
- Server components by default (app/page.tsx, project pages)
- Client components marked with `"use client"` directive (Header.tsx)
- Use client components only when hooks like `usePathname()` are needed

**Data Fetching:**
- Server-side async/await in page components
- Separate `fetchData()` functions for reusability
- Error handling returns empty arrays/null to prevent crashes
- Dynamic routes use `{ cache: 'no-store' }` for fresh data

**Path Aliases:**
- `@/*` maps to project root (configured in tsconfig.json)
- Example: `import DoDebug from "@/app/components/DoDebug"`

## Configuration Files

- `next.config.ts` - Next.js configuration (minimal/default)
- `tsconfig.json` - TypeScript with strict mode, ES2017 target
- `eslint.config.mjs` - ESLint with Next.js TypeScript config
- `tailwind.css` in v4 uses PostCSS plugin, no separate config file needed

## Dependencies

**Core:**
- Next.js 16.0.0
- React 19.2.0
- TypeScript 5
- Tailwind CSS v4

**UI:**
- @iconify/react - Icon library (used for social media icons)

## Notes for Development

- TypeScript strict mode is enforced - all types must be defined
- The portfolio currently fetches demo data from JSONPlaceholder API
- Header navigation uses pathname matching for active link styling
- Project data structure in `app/database/Project.ts` is minimal and can be expanded
