import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

import mkcert from 'vite-plugin-mkcert';
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation';

export default defineConfig({
  plugins: [sveltekit(), mkcert(), crossOriginIsolation()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  server: {
    https: true,
    proxy: {},
    port: 5173
  },
  worker: {
    format: 'es'
  }
});
