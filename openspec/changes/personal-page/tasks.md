## 1. Project Setup and Dependencies

- [x] 1.1 Install Tailwind CSS and configure tailwind.config.mjs with design system colors and fonts
- [x] 1.2 Install GSAP and ScrollTrigger plugin for animations
- [x] 1.3 Install Lucide React for icons
- [x] 1.4 Configure Astro Content Collections in src/content/config.ts with schemas for projects and blog
- [x] 1.5 Create global CSS file with font imports and base styles
- [x] 1.6 Update astro.config.mjs with site configuration

## 2. Layout and Navigation

- [x] 2.1 Create base Layout.astro with HTML structure, meta tags, and font loading
- [x] 2.2 Build Navigation.astro component with responsive menu (desktop + mobile)
- [x] 2.3 Implement glassmorphism effect on navbar with scroll-based background
- [x] 2.4 Create Footer.astro with social links and contact information
- [x] 2.5 Add smooth scroll behavior and scroll-to-top functionality

## 3. Hero Section

- [x] 3.1 Build Hero.astro with gradient background (monochrome to blue)
- [x] 3.2 Add profile photo component with circular styling
- [x] 3.3 Implement hero text with staggered GSAP entrance animation
- [x] 3.4 Create CTA buttons with hover effects
- [x] 3.5 Add animated scroll indicator at bottom of hero

## 4. Projects Section

- [x] 4.1 Create ProjectCard.astro component with hover overlay
- [x] 4.2 Implement Projects.astro section with masonry grid layout
- [x] 4.3 Add GSAP ScrollTrigger animations for card entrance (staggered)
- [x] 4.4 Create category filter component (All, Web, Mobile, Design)
- [x] 4.5 Add sample project Markdown files in src/content/projects/
- [x] 4.6 Implement parallax effect on project cards

## 5. Skills Section

- [x] 5.1 Create SkillIcon.astro component with icon and label
- [x] 5.2 Build Skills.astro section with categorized grid (Frontend, Backend, Tools, Languages)
- [x] 5.3 Implement GSAP scroll-triggered icon animations (fade + scale)
- [x] 5.4 Add skill data structure (JSON or inline)

## 6. Experience Timeline

- [x] 6.1 Create TimelineItem.astro component for individual entries
- [x] 6.2 Build Experience.astro section with vertical timeline layout
- [x] 6.3 Implement alternating left/right layout for desktop
- [x] 6.4 Add GSAP animations for timeline items (slide in from sides)
- [x] 6.5 Create resume data file (JSON format)
- [x] 6.6 Add education subsection

## 7. Blog Section (Homepage)

- [x] 7.1 Create BlogCard.astro component with hover scale effect
- [x] 7.2 Build BlogPreview.astro section showing latest 3 posts
- [x] 7.3 Add "View All Posts" link to /blog page
- [x] 7.4 Create sample blog posts in src/content/blog/
- [x] 7.5 Implement GSAP entrance animations for blog cards

## 8. Blog System Pages

- [x] 8.1 Create /blog page with full post listing
- [x] 8.2 Build /blog/[slug].astro dynamic route for individual posts
- [x] 8.3 Add post layout with title, date, tags, and content rendering
- [x] 8.4 Implement reading time calculation
- [x] 8.5 Add previous/next post navigation

## 9. Resume Page

- [x] 9.1 Create /resume page with print-friendly layout
- [x] 9.2 Implement full experience timeline display
- [x] 9.3 Add skills visualization section
- [x] 9.4 Include education and contact sections
- [x] 9.5 Add "Download PDF" button (optional)

## 10. Animation Polish

- [x] 10.1 Implement prefers-reduced-motion media query support
- [x] 10.2 Add mobile-specific animation adjustments (simplify/reduce)
- [x] 10.3 Ensure 60fps performance on scroll animations
- [x] 10.4 Add page transition animations (optional)
- [x] 10.5 Test all hover states and interactions

## 11. Content and Assets

- [x] 11.1 Create 4-6 sample project Markdown files with proper frontmatter
- [x] 11.2 Write 2 sample blog posts
- [x] 11.3 Add placeholder project images to public/ or src/assets/
- [x] 11.4 Add profile photo
- [x] 11.5 Create favicon and app icons

## 12. Responsive and Testing

- [x] 12.1 Test responsive layout at 375px, 768px, 1024px, and 1440px
- [x] 12.2 Fix any mobile navigation issues
- [x] 12.3 Ensure touch-friendly interactions on mobile
- [x] 12.4 Test in multiple browsers (Chrome, Firefox, Safari)
- [x] 12.5 Verify all links and navigation work correctly

## 13. SEO and Performance

- [x] 13.1 Add meta tags (title, description, Open Graph) to all pages
- [x] 13.2 Implement structured data (JSON-LD) for resume/projects
- [x] 13.3 Optimize images with Astro Image component
- [x] 13.4 Add sitemap.xml generation
- [x] 13.5 Verify Core Web Vitals (LCP, FID, CLS)

## 14. Final Polish

- [x] 14.1 Review all text content for typos
- [x] 14.2 Ensure consistent spacing and typography
- [x] 14.3 Verify all animations respect reduced-motion preference
- [x] 14.4 Test site build with `npm run build`
- [x] 14.5 Preview production build with `npm run preview`
