import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: served from https://stagnofran.github.io/ig-analyzer-site/
export default defineConfig({
  plugins: [react()],
  base: '/ig-analyzer-site/',
});
