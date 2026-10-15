import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    translationKey: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.object({ es: z.string(), en: z.string() }),
    year: z.number(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const opensource = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/opensource" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["pr", "issue"]).default("pr"),
    repo: z.string(),
    url: z.string().url(),
    date: z.date(),
    // PRs: open or merged. Issues: open or fixed.
    status: z.enum(["merged", "open", "fixed"]),
  }),
});

export const collections = { blog, projects, opensource };
