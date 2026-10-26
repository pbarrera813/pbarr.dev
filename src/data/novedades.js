import { proyectos } from "./projectData.js";
import { entradas } from "./blog.js";

// Entradas escritas a mano; las de blog y las de proyectos con `fecha` se agregan solas.
const manual = [
  {
    fecha: "2026-10-22",
    texto: {
      es: "Hostra Dashboard ya es público: el código y el instalador están en GitHub.",
      en: "Hostra Dashboard is now public: the code and the installer are on GitHub.",
    },
    href: "/proyectos/hostra/",
  },
  {
    fecha: "2026-10-17",
    texto: {
      es: "Nuevo en desarrollo: Hostra, un dashboard para Linux/Debian que permite mantener el control de tu servidor casero, con una app móvil complementaria.",
      en: "New in development: Hostra, a dashboard for Linux/Debian that lets you keep control of your home server, with a companion mobile app.",
    },
  },
  {
    fecha: "2026-10-16",
    texto: {
      es: "Soy el desarrollador de Svg-App, la app de Android en Flutter para SimpleVoice-Geyser.",
      en: "I'm the developer of Svg-App, the Flutter Android app for SimpleVoice-Geyser.",
    },
  },
  {
    fecha: "2026-10-13",
    texto: {
      es: "Colaboro activamente en SimpleVoice-Geyser, el plugin que lleva el chat de voz de Minecraft a Bedrock.",
      en: "I actively contribute to SimpleVoice-Geyser, the plugin that brings Minecraft voice chat to Bedrock.",
    },
  },
];

const dia = (d) => new Date(d).toISOString().slice(0, 10);

export async function novedades() {
  const posts = (await entradas()).map((p) => ({
    fecha: dia(p.fecha),
    texto: { es: `Nuevo en el blog: ${p.titulo.es}`, en: `New on the blog: ${p.titulo.en}` },
    href: `/blog/${p.id}/`,
  }));
  const nuevos = proyectos
    .filter((p) => p.fecha)
    .map((p) => ({
      fecha: p.fecha,
      texto: { es: `Nuevo proyecto: ${p.titulo}`, en: `New project: ${p.titulo}` },
      href: p.caso ? `/proyectos/${p.slug}/` : "/proyectos",
    }));
  return [...manual, ...posts, ...nuevos].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 10);
}
