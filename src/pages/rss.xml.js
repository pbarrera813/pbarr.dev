import rss from "@astrojs/rss";
import { entradas } from "../data/blog.js";

export async function GET(context) {
  const posts = await entradas();
  return rss({
    title: "Pablo Barrera: blog",
    description: "Notas de desarrollo de Pablo Barrera.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.titulo.es,
      pubDate: p.fecha,
      description: p.resumen.es,
      link: `/blog/${p.id}/`,
    })),
    customData: "<language>es-mx</language>",
  });
}
