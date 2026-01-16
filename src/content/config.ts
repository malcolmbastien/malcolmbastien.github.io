import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		publishedDate: z.date().optional(),
		stage: z.enum(['seed', 'sprout', 'evergreen']),
		draft: z.boolean().optional(),
		tags: z.array(z.string()),
		summary: z.string().optional(),
		featuredImage: image().optional(),
		featuredImageAlt: z.string().optional(),
		pinned: z.boolean().optional(),
		featured: z.boolean().optional(),
		cover: image().optional(),
	}),
});

export const collections = {
	'posts': postsCollection,
};
