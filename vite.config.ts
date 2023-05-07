import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

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
});
