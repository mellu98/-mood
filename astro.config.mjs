// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://moodbeautylab.it',
  vite: {
    // @ts-ignore — Plugin type mismatch between tailwindcss/vite and astro's bundled vite
    plugins: [tailwindcss()],
  },
});
