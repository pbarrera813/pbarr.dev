import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const base = "./src/content/blog";

// post.md is the Spanish post; post.en.md (same folder) is its English twin.
const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/*.en.md", "!Blogs-template.md"], base }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    proyecto: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.en.md", base, generateId: ({ entry }) => entry.replace(/\.en\.md$/, "") }),
  schema: z.object({ titulo: z.string(), resumen: z.string() }),
});

export const collections = { blog, blogEn };
