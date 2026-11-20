# Design System — Yassine Benazzou Portfolio

This document is the single source of truth for the visual design, typography, spacing, components, and motion behavior across all pages of `yassine-benazzou.vercel.app`.

---

## 1. Aesthetic Direction

**Dark Emerald & Neon Vault Studio** — an obsidian dark-mode digital studio pairing restrained architectural surfaces (`1px` hairline borders, high-contrast typography, generous vertical breathing room) with interactive 3D neon canvas energy (`TubesBackground`) in the hero and tactile hover lift on project showcases.

---

## 2. Color Palette & Roles

| Token | Value | Role |
| --- | --- | --- |
| `--background` / `--bg-dark` | `#07080b` | Primary page canvas |
| `--surface` | `#0e1117` | Card & accordion surface |
| `--surface-elevated` | `#141923` | Elevated card gradient top |
| Alt band surface | `#0b0d12` | Alternating section background |
| `--foreground` | `#f8fafc` | Headings and primary labels |
| `--body` | `#cbd5e1` | Body copy (WCAG AAA contrast on `#07080b`) |
| `--muted` | `#94a3b8` | Secondary metadata & captions |
| `--accent-emerald` | `#34d399` | Primary CTA fill (`slate-950` text), active accents |
| `--accent-cyan` | `#22d3ee` | Secondary technical/concept indicator |
| `--neon-cyan` | `#00ff88` | Neon Vault 3D tubes & hover glow border |
| `--neon-pink` | `#ff006e` | Neon Vault accent palette & nav underline |
| `--neon-purple` | `#7700ff` | Neon Vault accent palette & nav underline |
| `--neon-orange` | `#ff8800` | Neon Vault accent palette & nav underline |
| Border default | `rgba(255, 255, 255, 0.1)` | Crisp `1px solid` hairline framing |

---

## 3. Typography

Loaded locally via `next/font/google` in `src/app/layout.tsx`:

- **Display (`--font-display`)**: `Bricolage Grotesque` (`600`, `700`, `800`) — tight tracking (`-0.035em` to `-0.04em`), used for `h1`, `h2`, `h3`, and `.font-display`.
- **Body & UI Labels (`--font-sans`)**: `Plus Jakarta Sans` (`400`, `500`, `600`, `700`) — clean readability (`leading-relaxed`) and sentence-case section labels.
- **Technical Monospace (`--font-mono`)**: `JetBrains Mono` (`400`, `500`, `600`) — reserved strictly for technology stack pills and URLs/codes, never for decorative section eyebrows or numeric counters.

---

## 4. Layout & Spacing Rhythm

- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Padding**: `py-24 sm:py-28 lg:py-32` on homepage sections; `py-20 sm:py-24` on secondary pages.
- **Grid Philosophy**: Avoid uniform 3-column card grids. Alternate between:
  - Asymmetrical 2-column hero (`1.1fr / 0.9fr`)
  - 12-column Bento grids (`md:col-span-7` + `md:col-span-5`)
  - 6-column responsive showcase grid (`2 + 3` on desktop, `2 + 2 + 1` on tablet, `1` col on mobile)
  - Sticky split editorial lists (`0.42fr / 0.58fr`)
  - 2-tier editorial footer (asymmetric contact/studio intro + grouped directory links)
- **Horizontal Overflow**: Protected via `overflow-x: clip` (preserving `position: sticky`).

---

## 5. Component Contracts

- **Navbar (`src/components/navbar.tsx`)**: Fixed translucent header, BrandLogo (`/`), 4 navigation links (`Work`, `Services`, `Process`, `FAQ`) with multi-color expanding hover underlines (`NAV_UNDERLINE_COLORS`), `EN / FR` switcher, and 1 primary CTA button (`Book a Project Call`), plus mobile drawer (`min-h-12`).
- **TubesBackground (`src/components/TubesBackground/index.tsx`)**: Client-only 3D WebGL tubes canvas (`z-0`) with click-to-randomize neon palette, error boundary, `prefers-reduced-motion` guard, and ambient radial gradient fallback.
- **ProjectCard (`src/components/project-card.tsx`)**: Memoized card with real project screenshot (`loading="lazy"`), `.neon-card-lift` hover lift (desktop pointer only), grayscale-to-color transition, image zoom, dark overlay, and animated `Eye` + `"View Live Website"` opening the live URL in a new tab, paired with a secondary case-study link.
- **Buttons & Touch Targets**: All interactive controls meet `min-h-11` / `min-h-12` (`44px–48px+`) with explicit `focus-visible:ring-2 focus-visible:ring-emerald-400`. Internal CTAs avoid redundant decorative arrows; `ExternalLink`, `Eye`, `MessageCircle`, `Mail`, and `Send` are used only where functionally meaningful.
- **Icons**: Unboxed inline Lucide icons paired cleanly with copy (no repetitive icon-in-rounded-square boxes).

---

## 6. Motion & SSR Rules

- **SSR Visibility (`src/components/reveal.tsx`)**: All content renders at `opacity: 1` on the server (`initial={false}`), never hidden at `opacity: 0` before hydration.
- **Reduced Motion**: All CSS keyframes (`.animate-neon-float`, `.animate-scroll-bounce`) and Framer Motion transforms respect `prefers-reduced-motion: reduce`.
