# Replit MD

## Overview

This is a personal portfolio website for Pavithra Priyadarshini Selvakumar, a Postdoctoral Research Scientist at Columbia Climate School. The site is a single-page application showcasing her research background, experience, education, publications, skills, and contact information. It includes a contact form that submits messages to the backend. The portfolio features animated sections, a particle background, smooth scroll navigation, and a responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router) — single page at `/` renders the portfolio, with a 404 catch-all
- **UI Library**: Material UI (MUI) v6 with Emotion for styling — migrated from shadcn/ui + Tailwind CSS
- **Theme**: Custom MUI theme in `client/src/lib/theme.ts` with climate-inspired green/blue palette
- **Animations**: Framer Motion for scroll-triggered section animations, custom canvas-based particle background
- **State Management**: TanStack React Query for server state (contact form submission)
- **UI Components**: MUI components (Box, Card, Typography, Button, Chip, TextField, Avatar, AppBar, Drawer, LinearProgress, Snackbar/Alert). Legacy shadcn/ui files still exist in `client/src/components/ui/` but are no longer used by active components.
- **Custom Hooks**: `useInView` (intersection observer for scroll animations), `useSnackbar` (MUI Snackbar toast system in `client/src/hooks/use-snackbar.tsx`)
- **Custom CSS Effects**: Gradient text, glass-card with glow borders, morphing blobs, floating particles, typing cursor — defined in `client/src/index.css`
- **Data**: Portfolio content is hardcoded in `client/src/lib/portfolio-data.ts` — not fetched from a database
- **Build**: Vite with React plugin, outputs to `dist/public`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (compiled via tsx in dev, esbuild for production)
- **API**: Minimal REST API — just `POST /api/contact` and `GET /api/contact` for contact form messages
- **Storage**: Currently uses **in-memory storage** (`MemStorage` class in `server/storage.ts`) with a `Map`-based implementation. The `IStorage` interface is defined for future database migration.
- **Dev Server**: Vite dev server middleware is integrated into Express for HMR during development
- **Production**: Static files served from `dist/public` with SPA fallback to `index.html`
- **Build Script**: Custom `script/build.ts` uses Vite for client and esbuild for server, outputting to `dist/`

### Database Schema (Drizzle + PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema** (`shared/schema.ts`): Two tables defined:
  - `users` — `id` (UUID primary key), `username` (unique text), `password` (text)
  - `contact_messages` — `id` (UUID primary key), `name`, `email`, `message` (all text), `created_at` (timestamp)
- **Validation**: Zod schemas generated via `drizzle-zod` for insert operations
- **Migration**: `drizzle-kit push` via `npm run db:push`, config in `drizzle.config.ts`
- **Important Note**: The schema is defined but the server currently uses in-memory storage, NOT the database. The storage layer needs to be connected to PostgreSQL via Drizzle when a database is provisioned.

### Key Design Decisions
1. **In-memory storage vs database**: The `IStorage` interface abstracts storage so switching from `MemStorage` to a Drizzle-backed `DatabaseStorage` is straightforward. When PostgreSQL is available, implement `DatabaseStorage` using the Drizzle schema and swap it in.
2. **Shared schema**: The `shared/` directory contains schema definitions used by both client and server, enabling type safety across the stack.
3. **Single-page portfolio**: All content sections (hero, about, experience, skills, education, publications, contact) are rendered on one page with smooth scroll navigation.
4. **Session support**: `connect-pg-simple` is listed as a dependency for PostgreSQL-backed sessions, though sessions aren't currently used.

## External Dependencies

- **PostgreSQL**: Required for persistent data storage (via `DATABASE_URL` environment variable). Drizzle ORM is configured for PostgreSQL. Currently the app runs without it using in-memory storage.
- **Google Fonts**: Loaded via CDN — Plus Jakarta Sans, Playfair Display, JetBrains Mono, DM Sans, Fira Code, Geist Mono, Architects Daughter
- **Framer Motion**: Animation library for scroll-triggered effects
- **TanStack React Query**: Server state management for API calls
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **react-icons**: Used for social media icons (LinkedIn via `SiLinkedin`)
- **Recharts**: Charting library available but not currently used in the portfolio