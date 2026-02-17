/// <reference types="astro/client" />

// Type definition for markdown files imported via import.meta.glob
declare module '*.md' {
  export const frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    featured?: boolean;
    cover?: string;
    updated?: string;
  };
  
  export const content: string;
  export const slug: string;
  export const readingTime: string;
}
