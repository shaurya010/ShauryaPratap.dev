import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, 'index.html'),
        cv: resolve(projectRoot, 'CV.html'),
        projects: resolve(projectRoot, 'Project.html'),
        publications: resolve(projectRoot, 'Publication.html'),
      },
    },
  },
});
