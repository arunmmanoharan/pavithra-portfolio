# Claude Project Instructions

## Scroll Design References

For homepage redesigns, immersive frontend work, and scroll-driven experiences, first read:

- `.claude/reference/scroll-craft/`
- `.claude/reference/scroll-experience/SKILL.md`

Use **Scroll Craft** for:
- creative direction
- page grammar
- storytelling
- visual hierarchy
- hero composition
- signature interactions
- engineered visual peaks
- uniqueness and overall design quality

Use **Scroll Experience** for:
- parallax
- sticky/pinned sections
- scrubbed timelines
- horizontal sequences
- scroll-linked typography
- GSAP / Framer Motion / CSS implementation guidance
- performance
- mobile motion patterns

When their guidance overlaps:

- Scroll Craft decides **WHY and WHERE** an interaction exists.
- Scroll Experience helps decide **HOW** to implement it.

These files are local reference documents only.

Do not attempt to install Claude Code plugins.
Do not run plugin installation commands.
Do not modify enterprise Claude configuration.

## Existing Site Rules

This is an existing production website.

Do not rebuild the site from scratch unless explicitly instructed.

Preserve existing:

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

Do not fabricate testimonials, statistics, customers, awards, integrations, product claims, or other factual business content.

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
