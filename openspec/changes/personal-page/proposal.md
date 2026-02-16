## Why

Need a professional online presence to showcase work history, projects, and technical writing. A personal website serves as a centralized portfolio that combines resume, project showcases, and blog content in one cohesive experience. This establishes credibility and makes it easy for potential employers or clients to understand my capabilities.

## What Changes

- Create new Astro-based personal website with portfolio-first design
- Implement bold GSAP animations with scroll-triggered effects and parallax
- Build responsive masonry grid for project showcase with hover interactions
- Add dedicated resume page with professional timeline layout
- Set up Markdown-based content management for projects and blog posts
- Implement blog system with post listing and individual article pages
- Configure Tailwind CSS with custom design system (monochrome + blue accent)
- Add floating navigation with glassmorphism effect
- Include contact section with social links

## Capabilities

### New Capabilities

- `portfolio-website`: Core website structure, layout system, navigation, and global styling
- `project-showcase`: Masonry grid display with hover overlays, categorization, and filtering
- `blog-system`: Markdown-based blog with post listing, tags, and individual article rendering
- `resume-page`: Professional resume layout with experience timeline and skills visualization
- `animation-engine`: GSAP-powered scroll animations, parallax effects, and page transitions

### Modified Capabilities

- None (new project, no existing capabilities to modify)

## Impact

- **New Dependencies**: GSAP (animation), Tailwind CSS (styling), Lucide React (icons)
- **Build Output**: Static site generation to `dist/` directory
- **Content Structure**: New `src/content/` directory for Markdown-based projects and posts
- **Performance**: Animation-heavy design requires careful optimization for mobile devices
- **SEO**: Meta tags and structured data needed for discoverability
- **Accessibility**: Must ensure `prefers-reduced-motion` support for animations
