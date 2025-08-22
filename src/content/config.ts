import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    published: z.boolean().default(true),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updated: z.string().optional(),
    canonical: z.string().optional()
  })
});

const guide = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    difficulty: z.enum(['Beginner','Intermediate','Advanced']).default('Beginner'),
    est_read: z.number().optional(),
    affiliate_blocks: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true)
  })
});

export const collections = { post, guide };
