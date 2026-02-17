// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://r05323028.github.io',
  integrations: [],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
