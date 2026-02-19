# Replit MD

## Overview

This is a personal portfolio website for Pavithra Priyadarshini Selvakumar, a Postdoctoral Research Scientist at Columbia Climate School. The site is a purely static single-page application designed for CDN hosting — no server or database required. It showcases her research background, experience, education, publications, skills, and contact information. The contact form opens the user's email client via mailto:. The portfolio features animated sections, a particle background, smooth scroll navigation, and a responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side router) — single page at `/` renders the portfolio, with a 404 catch-all
- **UI Library**: Material UI (MUI) v6 with Emotion for styling — migrated from shadcn/ui + Tailwind CSS
- **Theme**: Custom MUI theme in `client/src/lib/theme.ts` with climate-inspired green/blue palette
- **Animations**: Framer Motion for scroll-triggered section animations, custom canvas-based particle background
- **State Management**: Local React state only (no server state management needed)
- **UI Components**: MUI components (Box, Card, Typography, Button, Chip, TextField, Avatar, AppBar, Drawer, LinearProgress, Snackbar/Alert). Legacy shadcn/ui files still exist in `client/src/components/ui/` but are no longer used by active components.
- **Custom Hooks**: `useInView` (intersection observer for scroll animations), `useSnackbar` (MUI Snackbar toast system in `client/src/hooks/use-snackbar.tsx`)
- **Custom CSS Effects**: Gradient text, glass-card with glow borders, morphing blobs, floating particles, typing cursor — defined in `client/src/index.css`
- **Data**: Portfolio content is hardcoded in `client/src/lib/portfolio-data.ts` — not fetched from a database
- **Build**: Vite with React plugin, outputs to `dist/public`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **None** — This is a purely static site. The Express server in `server/` is only used during development to serve Vite HMR. No API routes are active.
- **Contact Form**: Opens the user's email client via `mailto:` — no server-side processing needed.
- **Build**: Run `vite build` to generate static files in `dist/public` for CDN deployment.

### Key Design Decisions
1. **Static site for CDN**: No server or database required. All content is hardcoded in `client/src/lib/portfolio-data.ts`.
2. **Single-page portfolio**: All content sections (hero, about, experience, skills, education, publications, contact) are rendered on one page with smooth scroll navigation.
3. **Contact via mailto**: The contact form composes an email and opens the user's email client instead of posting to a backend API.

## External Dependencies

- **Google Fonts**: Loaded via CDN — Plus Jakarta Sans, Playfair Display, JetBrains Mono, DM Sans, Fira Code, Geist Mono, Architects Daughter
- **Framer Motion**: Animation library for scroll-triggered effects
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **react-icons**: Used for social media icons (LinkedIn via `SiLinkedin`)
- **Recharts**: Charting library available but not currently used in the portfolio