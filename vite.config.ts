import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			tsconfigPath: './tsconfig.app.json',
			exclude: ['**/*.stories.ts', '**/*.test.ts'],
		}),
		tailwindcss(),
	],
	build: {
		lib: {
			entry: 'src/index',
			name: 'sat-ui',
			formats: ['es', 'cjs', 'umd'],
			fileName: format => `sat-ui.${format}.js`,
		},
	},
})
