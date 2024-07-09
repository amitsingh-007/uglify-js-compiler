import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths'; // Not working
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      tsconfigPaths(),
      eslintPlugin({
        cache: true,
      }),
    ],
  },
});
