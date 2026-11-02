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
    description: z.object({ es: z.string(), en: z.string(), it: z.string() }),
    year: z.number(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

// Client work told as a case: the problem, what was built, and screens of it working.
// Spanish cases live in src/content/cases/, English and Italian ones in src/content/cases/en/ and it/ with the same file name.
const cases = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/cases" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      summary: z.string(),
      client: z.string(),
      year: z.number(),
      role: z.string(),
      stack: z.array(z.string()),
      url: z.string().url().optional(),
      order: z.number(),
      cover: image(),
      coverAlt: z.string(),
      // Phone screenshot shown next to the cover on the home page.
      coverMobile: image().optional(),
      // One sentence: how things worked before the product.
      before: z.string().optional(),
      video: z.object({
        desktop: z.string(),
        mobile: z.string().optional(),
        label: z.string(),
      }),
      features: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
          desktop: image().optional(),
          mobile: image().optional(),
          alt: z.string(),
        }),
      ),
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

export const collections = { blog, projects, cases, opensource };
