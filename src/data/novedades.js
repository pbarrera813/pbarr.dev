import { getCollection } from "astro:content";
import { proyectos } from "./projectData.js";

// Entradas escritas a mano; las de blog y las de proyectos con `fecha` se agregan solas.
const manual = [
  {
    fecha: "2026-10-22",
    texto: "Hostra Dashboard ya es público: el código y el instalador están en GitHub.",
    href: "/proyectos/hostra/",
  },
  {
    fecha: "2026-10-17",
    texto:
      "Nuevo en desarrollo: Hostra, un dashboard para Linux/Debian que permite mantener el control de tu servidor casero, con una app móvil complementaria.",
  },
  {
    fecha: "2026-10-16",
    texto:
      "Soy el desarrollador de Svg-App, la app de Android en Flutter para SimpleVoice-Geyser.",
  },
  {
    fecha: "2026-10-13",
    texto:
      "Colaboro activamente en SimpleVoice-Geyser, el plugin que lleva el chat de voz de Minecraft a Bedrock.",
  },
];

const dia = (d) => new Date(d).toISOString().slice(0, 10);

export async function novedades() {
  const posts = (await getCollection("blog", ({ data }) => !data.borrador)).map((p) => ({
    fecha: dia(p.data.fecha),
    texto: `Nuevo en el blog: ${p.data.titulo}`,
    href: `/blog/${p.id}/`,
  }));
  const nuevos = proyectos
    .filter((p) => p.fecha)
    .map((p) => ({
      fecha: p.fecha,
      texto: `Nuevo proyecto: ${p.titulo}`,
      href: p.caso ? `/proyectos/${p.slug}/` : "/proyectos",
    }));
  return [...manual, ...posts, ...nuevos].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 10);
}
