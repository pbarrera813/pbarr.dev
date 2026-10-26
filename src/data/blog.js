import { getCollection } from "astro:content";

// One entry per post: the Spanish entry plus its English twin when there is one, newest first.
export async function entradas() {
  const en = new Map((await getCollection("blogEn")).map((p) => [p.id, p]));
  return (await getCollection("blog", ({ data }) => !data.borrador))
    .map((es) => ({
      id: es.id,
      fecha: es.data.fecha,
      proyecto: es.data.proyecto,
      es,
      en: en.get(es.id) ?? null,
      titulo: { es: es.data.titulo, en: en.get(es.id)?.data.titulo ?? es.data.titulo },
      resumen: { es: es.data.resumen, en: en.get(es.id)?.data.resumen ?? es.data.resumen },
    }))
    .sort((a, b) => b.fecha.valueOf() - a.fecha.valueOf());
}
