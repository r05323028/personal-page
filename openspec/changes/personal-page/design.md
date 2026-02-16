## Context

Building a personal portfolio website using Astro 5 with bold GSAP animations. The site needs to showcase projects in a masonry grid, include a blog system, and have a dedicated resume page. Content will be managed via Markdown files for easy updates.

Current state: Fresh Astro project with minimal setup. Need to add Tailwind CSS, GSAP animations, and content collections.

## Goals / Non-Goals

**Goals:**
- Implement bold scroll-triggered animations using GSAP ScrollTrigger
- Create responsive masonry grid for project showcase with hover effects
- Set up Markdown-based content system for projects and blog posts
- Build dedicated resume page with timeline layout
- Ensure mobile-responsive design with proper touch interactions
- Support prefers-reduced-motion for accessibility
- Achieve 60fps animation performance

**Non-Goals:**
- CMS integration (keeping it Markdown-based)
- Backend/API functionality (static site only)
- Comments system for blog
- Search functionality
- Multi-language support
- Dark mode toggle (design is monochrome-focused)

## Decisions

### Animation Library: GSAP + ScrollTrigger
**Rationale:** GSAP is the industry standard for scroll animations. ScrollTrigger provides excellent performance and precise control over scroll-linked animations. Works seamlessly with Astro's static generation and can be hydrated on client only.

**Alternative considered:** Framer Motion - rejected due to heavier bundle size and React dependency overhead.

### Styling: Tailwind CSS with Custom Configuration
**Rationale:** Tailwind provides rapid development and consistent spacing. Custom config will define design system colors (primary: #18181B, accent: #2563EB, background: #FAFAFA) and font families (Archivo, Space Grotesk).

### Content Management: Astro Content Collections
**Rationale:** Native Astro feature for type-safe Markdown content. Provides schema validation, automatic slug generation, and clean separation of content from presentation.

**Schema design:**
- Projects: title, description, date, cover, tags, category, featured, links
- Blog: title, description, date, updated, tags, featured

### Masonry Implementation: CSS Columns + JS Enhancement
**Rationale:** CSS columns provide native masonry with minimal JS. Will enhance with GSAP for entrance animations. Fallback to standard grid if CSS columns unsupported.

### Component Architecture
- **Astro components** for static sections (Hero, Footer, Timeline)
- **React components** only where state needed (MobileMenu, Animation wrappers)
- **Islands architecture** - hydrate animations on client only

### Image Strategy
Use Astro's built-in Image component for optimization. Store images in `public/` for static assets, `src/assets/` for processed images.

## Risks / Trade-offs

**[Risk] Animation performance on mobile** → Mitigation: Use `matchMedia` to disable complex animations on mobile. Implement `prefers-reduced-motion`. Test on actual devices.

**[Risk] SEO with heavy JavaScript animations** → Mitigation: Ensure all content renders in HTML (no client-only content). Use proper meta tags and structured data.

**[Risk] Content updates require code changes** → Mitigation: Markdown in `src/content/` is easy to edit. Consider setting up GitHub CMS later if needed.

**[Trade-off] Bold animations vs. accessibility** → Decision: Provide reduced-motion support but keep bold animations as default for modern browsers.

## Migration Plan

N/A - this is a new project, no migration needed.

## Open Questions

1. Exact number of projects to showcase (recommendation: 4-6)
2. Profile photo specifications (size, format, circular crop)
3. Resume data format preference (JSON vs YAML)
4. Blog post cadence expectations
