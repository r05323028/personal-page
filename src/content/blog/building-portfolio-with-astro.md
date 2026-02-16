---
title: "Building My Portfolio with Astro"
description: "A deep dive into how I built this portfolio site using Astro, Tailwind CSS, and GSAP animations."
date: 2024-01-15
tags: ["Astro", "Web Development", "Tutorial"]
featured: true
---

## Why Astro?

After trying various frameworks like Next.js, Gatsby, and vanilla HTML, I decided to build my portfolio with [Astro](https://astro.build). Here's why:

### Performance First

Astro's zero-JS-by-default approach means my site loads incredibly fast. Only the interactive components ship JavaScript to the browser.

### Content Collections

The built-in content collections with Zod schema validation make managing my blog posts and projects a breeze. Type-safe Markdown is a game-changer.

### Framework Agnostic

I can use React components where I need interactivity (like the mobile menu) while keeping everything else as static HTML.

## The Tech Stack

- **Astro** - Static site generation
- **Tailwind CSS** - Utility-first styling
- **GSAP** - Smooth scroll animations
- **TypeScript** - Type safety throughout

## Key Features

### Bold Animations

I wanted my portfolio to stand out with scroll-triggered animations. GSAP's ScrollTrigger plugin made this possible:

```javascript
// Staggered entrance for project cards
gsap.to('.project-card', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: 'power3.out'
});
```

### Responsive Masonry Grid

The projects section uses a CSS columns-based masonry layout that adapts beautifully across screen sizes.

### Accessibility

I made sure to respect `prefers-reduced-motion` for users who prefer less animation.

## Lessons Learned

1. **Start with content** - Design around your actual content, not placeholders
2. **Performance matters** - Astro's partial hydration is perfect for portfolios
3. **Animations should enhance** - Not distract from the content

## What's Next?

I'm planning to add:
- Dark mode toggle
- More interactive project case studies
- RSS feed for the blog

Thanks for reading!
