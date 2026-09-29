# CampusFlow — Tailwind CSS migration (week01-tailwind)

Vanilla JS + Vite + Tailwind CSS v4 version of the CampusFlow dashboard, migrated from the original hand-written `styles.css`.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## What changed vs. the original

- **Styling**: almost all visual styling now lives directly in Tailwind utility classes on the markup in `index.html`, instead of in a separate `styles.css`.
- **Tailwind setup**: Tailwind CSS v4 with the official `@tailwindcss/vite` plugin (no `tailwind.config.js`, no PostCSS config — configuration is done in CSS via `@theme`, per the current Tailwind docs).
- **`src/style.css`**: imports Tailwind and defines the theme tokens (`--color-primary`, `--color-muted`, etc.) that mirror the original CSS custom properties, so colors like `bg-primary` or `text-muted` are available as utilities. It also holds the small amount of hand-written CSS that isn't practical as inline utilities: the two radial-gradient hero glows, the frosted-glass hero panel, and a `.container-cf` helper (repeated on every section).
- **`src/main.js`**: the mobile nav toggle and project filter logic (unchanged in behavior from the original inline expectations), plus logic for the new dismissible banner.
- **Responsive breakpoints**: the original CSS used custom breakpoints at 960px and 640px. This version uses Tailwind's standard scale (`sm` = 640px, `md` = 768px) instead of reproducing those exact pixel values — an intentional, idiomatic choice when adopting Tailwind, and visually equivalent at the sizes that matter (phone / tablet / desktop).

## Task 6 checklist

- **6.1** Project cards: 1 column on mobile, 2 on `sm:`, 3 on `lg:` (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`).
- **6.2** Hover effect: project cards lift and gain a shadow on hover/focus-within.
- **6.3** Focus styles: buttons and nav links all have a visible `focus-visible:outline` in the primary color.
- **6.4** Individual design improvement: each stat card icon now has its own accent color instead of one repeated purple tint, and the profile avatar has a soft focus ring.
- **6.5** New Tailwind-only component: the dismissible "New" announcement banner at the top of the page (`#updateBanner`).

## Before submitting

- [ ] `npm install` runs clean
- [ ] `npm run dev` starts the project
- [ ] Tailwind classes are rendering (no unstyled page)
- [ ] Resize to mobile / tablet / desktop and check layout
- [ ] Mobile nav (hamburger) opens and closes
- [ ] Project filter buttons (All / Active / Done) work
- [ ] No errors in the browser console
