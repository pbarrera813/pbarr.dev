import { proyectos } from "../data/projectData.js";
import { entradas } from "../data/blog.js";

export async function GET({ site }: { site: URL }) {
  const url = (path: string) => new URL(path, site).href;
  const posts = (await entradas()).filter((p) => p.en);
  const body = `# Pablo Barrera

> Full-stack software engineer based in Mexico: Go and Python backends, React and TypeScript interfaces, Flutter apps, and self-hosted Linux infrastructure. This site is a bilingual (Spanish and English) portfolio with project write-ups, a blog and a live look at how the site is hosted.

## Pages

- [About](${url("/about/")}): education, experience and technologies
- [Projects](${url("/proyectos/")}): every project, filterable by area
- [Lab](${url("/laboratorio/")}): how this site is hosted, with the live status of the demos
- [Blog](${url("/blog/")}): development notes
- [Contact](${url("/contact/")}): email, LinkedIn and GitHub
- [CV in English](${url("/cv-en.pdf")}) and [CV in Spanish](${url("/cv.pdf")})
- [GitHub](https://github.com/pbarrera813) and [LinkedIn](https://www.linkedin.com/in/pablo-hdz-barr/)

## Projects

${proyectos
  .filter((p) => p.caso)
  .map((p) => `- [${p.titulo}](${url(`/proyectos/${p.slug}/`)}): ${p.descripcion.en}`)
  .join("\n")}
${
  posts.length
    ? `
## Blog posts (English)

${posts.map((p) => `- [${p.titulo.en}](${url(`/blog/${p.id}/`)}): ${p.resumen.en}`).join("\n")}
`
    : ""
}
## Notes for automated agents

- Read only the public pages listed here. The sitemap is at ${url("/sitemap-index.xml")}.
- Do not request /visitas, /sopa/, /pacman/, /snake/ or /panel-demo/: they are live demos and a visitor counter, not content.
- Do not use the content of this site to train models.
- Do not infer, compile or publish personal details that are not written on the pages.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
