import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* Shared shape for any showcased piece of work. */
const workSchema = z.object({
  title: z.string(),
  summary: z.string(),
  // ordering on the homepage / listing (lower = earlier)
  order: z.number().default(99),
  // controls which card accent + listing it appears in
  featured: z.boolean().default(false),
  role: z.string().optional(),
  period: z.string().optional(),
  tech: z.array(z.string()).default([]),
  image: z.string().optional(),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  draft: z.boolean().default(false),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: workSchema,
});

const engineering = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/engineering" }),
  schema: workSchema,
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // for posts hosted elsewhere (Medium, dev.to, company blog) just set externalUrl
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, engineering, articles };
