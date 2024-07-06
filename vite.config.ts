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
	// build: {
	// 	emptyOutDir: true,
	// 	rollupOptions: {
	// 		input: {
	// 			main: resolve(__dirname, 'index.html'),
	// 			about: resolve(__dirname, 'src/about/index.html')
	// 		}
	// 	}
	// }
  };
});