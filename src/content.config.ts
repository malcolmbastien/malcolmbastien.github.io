import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const notesCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		publishedDate: z.date().optional(),
		draft: z.boolean().optional(),
		tags: z.array(z.string()),
		summary: z.string().optional(),
		pinned: z.boolean().optional(),
		cover: image().optional(),
		coverImageAlt: z.string().optional(),
	}),
});

export const collections = {
	'notes': notesCollection,
};
