import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import remarkBreaks from 'remark-breaks';

const projectsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md", 
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    gallery: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    caseStudy: z.string().optional(),
    tags: z.array(z.string()),
    category: z.enum(['web', 'mobile', 'design', 'other']),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    client: z.string().optional(),
    duration: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.md", 
    base: "./src/content/blog",
    generateId: ({ entry, data }) => data.slug || entry,
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
    slug: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
