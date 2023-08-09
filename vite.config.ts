/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  cacheDir: './node_modules/.vite/antd-demo',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: './',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(
          new URL('./src/shared/assets', import.meta.url)
        ),
      },
    ],
  },
});
