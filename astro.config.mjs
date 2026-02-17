// @ts-check
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  site: 'https://r05323028.github.io',
  integrations: [],
  markdown: {
    remarkPlugins: [
      remarkBreaks
    ]
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
