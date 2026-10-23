import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!Blogs-template.md"], base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    proyecto: z.string().optional(),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { blog };
