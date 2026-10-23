import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.borrador)).sort(
    (a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf()
  );
  return rss({
    title: "Pablo Barrera: blog",
    description: "Notas de desarrollo de Pablo Barrera.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.titulo,
      pubDate: post.data.fecha,
      description: post.data.resumen,
      link: `/blog/${post.id}/`,
    })),
    customData: "<language>es-mx</language>",
  });
}
