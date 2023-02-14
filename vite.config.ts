import vercel from 'solid-start-vercel';
import solid from 'solid-start/vite';
import unpluginIcons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig(() => {
  return {
    plugins: [
      solid({
        ssr: true,
        adapter: vercel({ edge: false }),
      }),
      eslintPlugin({
        cache: true,
      }),
      unpluginIcons({
        compiler: 'solid',
      }),
    ],
  };
});
