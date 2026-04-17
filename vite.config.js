import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let viteConfig;
try {
	// custom assets
	const textures = require('./public/BJimages/textures')

	// https://vitejs.dev/config/
	viteConfig = defineConfig({
	  plugins: [react()],
	  build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	  },
	  customAsset: textures,
	});
} catch (error) {
  console.error(error);
}

export default viteConfig
