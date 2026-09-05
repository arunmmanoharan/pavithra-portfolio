# Claude Project Instructions

## Reference library

For homepage redesigns, immersive frontend work, scroll-driven experiences,
and premium visual polish, first read the vendored references in
`.claude/reference/`:

- `.claude/reference/scroll-craft/`
- `.claude/reference/scroll-experience/SKILL.md`
- `.claude/reference/frontend-design/SKILL.md`
- `.claude/reference/ui-design-system/SKILL.md`
- `.claude/reference/accessibility/SKILL.md`
- `.claude/reference/senior-frontend/SKILL.md`

These files are local reference documents only. See
`.claude/reference/ATTRIBUTION.md` for upstream sources and licenses.

Do not attempt to install Claude Code plugins.
Do not run plugin installation commands.
Do not modify enterprise Claude configuration.
Do not depend on external plugin resolution at runtime.

## Authority hierarchy

These references are NOT equal authorities. Apply them in these roles:

### Creative direction: Scroll Craft + Frontend Design

Use these to decide what the page should feel like, visual identity,
editorial composition, typography, hierarchy, section differentiation,
signature visual decisions, anti-template quality, and where visual emphasis
belongs.

Scroll Craft remains authoritative for: page grammar, storytelling, the
engineered peak, scroll narrative, the signature interaction, and uniqueness.

Frontend Design complements Scroll Craft for: premium visual polish, static
composition, typography, bespoke layout, art direction, and removing generic
component-library aesthetics.

### System consistency: UI Design System

Use for design-token discipline, spacing, type scale, color roles, component
consistency, the responsive system, and interaction consistency.

Important: do NOT automatically replace the existing MUI theme or generate an
entirely new design system. Evolve the current system instead.

### Motion: Scroll Experience

Use for scroll-linked implementation mechanics, parallax, sticky/pinned
behavior, scrubbed timelines, horizontal sequences where appropriate,
Framer Motion/CSS implementation, reduced-motion behavior, and scroll
performance.

Do not add another animation framework merely because a skill mentions one.

### Engineering: Senior Frontend

Use for React + TypeScript quality, component architecture, performance,
bundle discipline, maintainability, and regression prevention.

It is NOT permission to refactor working architecture unnecessarily.

### Quality gate: Accessibility

Use as a verification authority for keyboard navigation, semantic structure,
focus states, contrast, reduced motion, touch targets, screen-reader
considerations, and accessible interactive behavior.

Do not allow visual polish to override accessibility.

## Overlap rule

When the references overlap:

- Scroll Craft decides WHY and WHERE major visual/scroll decisions belong.
- Frontend Design decides HOW the static visual language should feel.
- UI Design System keeps those decisions coherent.
- Scroll Experience decides HOW scroll-linked motion is implemented.
- Senior Frontend keeps the implementation technically sound.
- Accessibility acts as a non-negotiable quality gate.

## Design and motion rules

- Do not add animation simply because motion guidance exists.
- Do not add visual elements simply because a design skill suggests them.
- Removing visual clutter is allowed when justified.
- Static composition must work before motion enhancement.
- Experience remains the single engineered visual peak unless explicitly
  redesigned in a future task.
- The current research journey interaction should not be displaced by a
  competing signature effect.
- Mobile should be art-directed independently where necessary rather than
  treated as compressed desktop.
- Reduced-motion behavior must remain first-class.

## Existing Site Rules

This is an existing production website.

Do not rebuild the site from scratch unless explicitly instructed.

Existing application behavior, routes, content, SEO, accessibility,
analytics, forms, APIs, and business logic must be preserved unless
explicitly requested otherwise. Preserve existing:

- content
- branding
- routes
- URLs
- forms
- API integrations
- authentication
- analytics
- SEO
- metadata
- structured data
- accessibility
- business logic

Prefer the project's existing dependencies and architecture.

Do not fabricate testimonials, statistics, customers, awards, integrations,
product claims, or other factual business content.

## Implementation Quality

For implementation tasks:

- inspect the existing codebase before making changes
- use complete production-ready code
- do not use pseudocode
- do not leave TODO placeholders
- do not introduce unnecessary dependencies
- preserve existing functionality
- support responsive layouts
- support `prefers-reduced-motion`
- run applicable lint, typecheck, tests, and production build after implementation
- fix errors caused by your changes before considering the task complete
