import { defineCollection, reference } from "astro:content";

import { glob } from "astro/loaders";

import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    relatedBlogs: z.array(reference('blog')).optional(),
    publishedAt: z.date(),
    preview: z.string().optional(),
  }),
});

export const collections = { blog };
