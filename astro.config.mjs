// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { remarkCallouts } from './src/lib/remark-callouts.mjs';
import { remarkDraftContainer } from './src/lib/remark-draft.mjs';
import { remarkWikiLinks } from './src/lib/remark-wiki-links.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://malcolmbastien.github.io',
	base: '/',
	integrations: [sitemap()],
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover'
	},
	markdown: {
		remarkPlugins: [remarkDirective, remarkDraftContainer, remarkCallouts, remarkWikiLinks],
	},
	vite: {
		plugins: [tailwindcss()]
	},
	build: {
		format: 'directory'
	}
});
