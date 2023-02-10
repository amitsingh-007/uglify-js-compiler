import solid from 'solid-start/vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// @ts-expect-error No declaration file
// eslint-disable-next-line import/no-extraneous-dependencies
import vercel from 'solid-start-vercel';

export default defineConfig(() => {
  return {
    plugins: [
      solid({
        ssr: true,
        adapter: vercel({ edge: false }),
      }),
    ],
  };
});
