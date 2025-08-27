import { defineCollection, z, image } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    published: z.boolean().default(true),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updated: z.string().optional(),
    canonical: z.string().optional(),
  }),
});

const guide = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: image().optional(), // <-- typed image
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { post, guide };
