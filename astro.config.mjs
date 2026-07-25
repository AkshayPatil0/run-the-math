// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Astro 7: output defaults to 'static'. Individual pages can opt-out
// of prerendering with `export const prerender = false`.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
