// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        /* pass your config */
      }),
      Inspect(),
	  react()
    ],
  };
});