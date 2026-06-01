# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack (http://localhost:3000)
npm run build     # Production build
npm run lint      # ESLint check
npm run start     # Serve production build
```

There are no tests in this project.

## Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v3** + CSS custom properties for theming
- **Framer Motion / GSAP** for animations
- **shadcn/ui** component primitives (`components.json` config, `cn()` utility in `src/lib/utils.ts`)
- Custom self-hosted font: **Open Runde** (`/public/fonts/`)

## Architecture

Single-page portfolio with a fixed bottom dock nav (`DockNav` in `src/components/Navbar.tsx`). All routes are under `src/app/` following Next.js App Router conventions. The layout (`src/app/layout.tsx`) wraps every page with `DockNav` and loads Inter via `next/font`.

**Routing**: Four nav sections — `/` (About/Hero), `/projects`, `/experience`, `/blogs`. Routes not yet built should be created as `src/app/<route>/page.tsx`.

**Theming**: All colors, radii, and shadows are CSS custom properties defined in `src/app/globals.css` under `:root`. The mint accent (`--mint: #00D26A`) is the primary brand color. Never hardcode hex values that duplicate a CSS variable.

**Styling approach**: Inline `style` props for layout and one-off values; Tailwind utility classes for reusable atomic styles; scoped `<style>` blocks inside components for keyframe animations and pseudo-element rules (the pattern used in `Navbar.tsx` and `page.tsx`). The `cn()` helper is available but rarely needed — the project leans on inline styles over Tailwind classes.

**Animation patterns**:
- CSS `@keyframes` + `animation` for entrance effects (`reveal-up`, `dock-enter`, `pulse-mint`)
- GSAP via `PageTransition` component for staggered card entrances on `.glass-card` / `.glass-card-clip` / `.glass-card-sm` selectors
- WebGL (raw, no library) in `LiquidText.tsx` for the shader-based liquid text effect — uses a full-screen quad with a GLSL fragment shader driven by mouse position and `requestAnimationFrame`

**Card classes** (defined in `globals.css`):
- `.glass-card` — white card with lift-on-hover transform
- `.glass-card-clip` — same but `overflow: hidden`
- `.glass-card-sm` — smaller frosted variant
- `.hero-card-reveal` — bento grid card with CSS `reveal-up` entrance animation; set `animationDelay` inline per card
- `.section-card` — page-section white card

**Dock nav** (`DockNav`): Fixed bottom bar with 3D `.webp` icons that jiggle on click via a CSS animation class toggled by removing/re-adding it after forcing a reflow (`void img.offsetWidth`).
