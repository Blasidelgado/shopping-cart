import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
// https://vitest.dev/config/
export default defineConfig({
	plugins: [
		react(),
		istanbul({
			cypress: true,
			requireEnv: false,
		}),
	],
	server: {
		host: true,
		port: process.env.PORT ? +process.env.PORT : 5173,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test.setup.ts',
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'html', 'clover', 'json', 'lcov'],
			reportsDirectory: './coverage/vitest',
		},
	},
});
