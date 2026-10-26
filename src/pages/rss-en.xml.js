import rss from "@astrojs/rss";
import { entradas } from "../data/blog.js";

// Only the posts that have an English twin.
export async function GET(context) {
  const posts = (await entradas()).filter((p) => p.en);
  return rss({
    title: "Pablo Barrera: blog (English)",
    description: "Development notes by Pablo Barrera.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.titulo.en,
      pubDate: p.fecha,
      description: p.resumen.en,
      link: `/blog/${p.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
