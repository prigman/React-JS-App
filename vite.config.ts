// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(() => {
  return {
    plugins: [
		checker({
			typescript: true,
		}),
		ViteImageOptimizer({
		/* pass your config */
		}),
		Inspect(),
		react()
    ],
  };
});