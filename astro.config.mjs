// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://malcolmbastien.github.io',
	base: '/',
	markdown: {
		remarkPlugins: [remarkCallouts],
	},
	vite: {
		plugins: [tailwindcss()]
	}
});
