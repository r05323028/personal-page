import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
