import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    order: z.number(),
    updated: z.string(),
    verified: z.string(),
    keywords: z.array(z.string()),
    steps: z.array(z.object({
      title: z.string(),
      action: z.string(),
      result: z.string(),
      image: z.string(),
      alt: z.string(),
      note: z.string().optional(),
      value: z.string().optional(),
    })),
    changes: z.array(z.object({ date: z.string(), text: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { guides };
