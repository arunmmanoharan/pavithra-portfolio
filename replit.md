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
- **Framework**: Express 5 on Node.js with TypeScript — minimal server for email sending
- **API**: `POST /api/contact` — validates form data, renders react-email template, sends via Resend
- **Email**: react-email for HTML email templates (`server/emails/contact-email.tsx`), Resend SDK for delivery
- **Contact Form**: Submits to `/api/contact` which sends a formatted email to `pavithrapriyadarshini.s@gmail.com`
- **Dev Server**: Vite dev server middleware integrated into Express for HMR
- **Build**: Custom `script/build.ts` uses Vite for client and esbuild for server, outputting to `dist/`

### Key Design Decisions
1. **Server-rendered email**: Contact form POSTs to `/api/contact`, which uses react-email + Resend to deliver messages directly to inbox.
2. **Single-page portfolio**: All content sections (hero, about, experience, skills, education, publications, contact) are rendered on one page with smooth scroll navigation.
3. **Resend for email delivery**: Free tier (100 emails/day). Currently using `onboarding@resend.dev` as sender — can be upgraded with a verified custom domain.

## External Dependencies

- **Google Fonts**: Loaded via CDN — Plus Jakarta Sans, Playfair Display, JetBrains Mono, DM Sans, Fira Code, Geist Mono, Architects Daughter
- **Framer Motion**: Animation library for scroll-triggered effects
- **react-email + @react-email/render**: React components for building email templates (server-side)
- **Resend**: Email sending API (requires `RESEND_API_KEY` secret)
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner` (dev only)
- **react-icons**: Used for social media icons (LinkedIn via `SiLinkedin`)
- **Recharts**: Charting library available but not currently used in the portfolio