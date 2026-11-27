import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pages = ['about', 'certificate', 'contact', 'experience', 'projects', 'skills'];

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        ...Object.fromEntries(
          pages.map((page) => [page, resolve(process.cwd(), 'page', `${page}.html`)]),
        ),
      },
    },
  },
});
