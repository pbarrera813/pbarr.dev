# Personal Portfolio - Pablo Barrera

Portafolio personal auto-hospedado en [pbarr.dev](https://pbarr.dev). Presenta el trabajo de un ingeniero de software full-stack (terminado y en curso), con un blog de notas de desarrollo, el estado en vivo de sus demos y un servidor propio explicado paso a paso. Esta hecho con Astro y componentes React puntuales, con un tema visual propio, y esta disponible en espanol e ingles en la misma direccion.

## Que contiene

- **Inicio**: presentacion con disponibilidad, tira de tecnologias, cifras (proyectos, en desarrollo, pull requests fusionados), proyectos destacados, lo que esta en desarrollo ahora, actividad reciente de GitHub y preguntas frecuentes
- **Proyectos**: tarjetas con filtros por categoria (`Full Stack`, `Frontend`, `Backend`, `Desarrollo`), demo y codigo cuando existen. Hoy son 11: Hostra Dashboard, Hostra Companion, Nitori, NexuDrive, Orexa Panel, Simple Voice App, PlayerPing, Self-checkout, Pac-Man, Snake y Sopa de letras
- **Detras del proyecto**: una pagina por proyecto con el problema, la idea, que hace, como esta hecho, decisiones, cifras, estado actual y lo que se aprendio, con un indice lateral y una linea de progreso de lectura
- **Blog**: notas de desarrollo en Markdown, ligadas a su proyecto, con un feed RSS por idioma y una pagina para suscribirse
- **Laboratorio**: como esta montado el servidor (visitante, Cloudflare, servidor Debian, proxy inverso) en pasos que se pueden abrir para ver que hace cada uno, por que se eligio y que pasa si falla, mas el estado en vivo de las demos
- **Sobre mi**: biografia, experiencia con pestanas, areas de trabajo enlazadas a un proyecto como evidencia, tecnologias y preguntas frecuentes
- **Contacto** con correo copiable, LinkedIn y GitHub, un CV descargable y una pagina 404

## Detalles del sitio

- **Español e ingles**: el globo del navbar cambia el idioma de todo el sitio al instante, sin recargar ni cambiar de direccion. Recuerda la eleccion o usa el idioma del navegador, y el boton de CV abre el CV del idioma activo. Los articulos del blog tienen su traduccion en un segundo archivo (`.en.md`) y, si falta, se muestran en espanol con un aviso
- **Modo nostalgia**: un easter egg en el pie de pagina muestra todo el sitio como un portal del año 2001, con barra lateral, cajas blancas, botones biselados, anuncios que parpadean y un contador real de visitantes unicos.
- **Campana de novedades**: se llena sola con los articulos nuevos del blog y los proyectos nuevos, mas avisos escritos a mano
- **Blog que se publica solo**: basta con subir un archivo `.md` (hay una plantilla en `src/content/blog/`); el servidor reconstruye el sitio y lo publica en segundos, y si algo falla conserva la version anterior
- **Estado en vivo**: el navegador comprueba las demos y la actividad de GitHub, con valores de respaldo generados en el build
- **Animaciones sobrias**: transiciones entre paginas, revelado al hacer scroll, cambio de tema con revelado circular, pestanas y preguntas frecuentes animadas, conteo de cifras y un recorrido animado en el Laboratorio. Con `prefers-reduced-motion` todo aparece sin movimiento
- **Tema** claro y oscuro con un gradiente propio (`#E4E7E4` a `#0A1647`), responsive para escritorio y movil
- **SEO y accesibilidad**: titulo y descripcion por pagina en ambos idiomas, Open Graph, datos estructurados, sitemap, enlace para saltar al contenido, foco visible y navegacion con teclado
- Imagenes optimizadas en el build; el texto no se puede seleccionar ni se arrastran imagenes, salvo en campos de formulario

## Tecnologias utilizadas

- Astro 5 (sitio estatico) con `ClientRouter` y React 19 para las partes interactivas
- Tailwind CSS 4 y GSAP para las animaciones
- `@astrojs/sitemap` y `@astrojs/rss`, `react-icons` y `typewriter-effect`
- JavaScript y TypeScript
- Un script de Node (`scripts/visitas.mjs`) para el contador y un servicio de systemd para el blog, ambos opcionales

## Estructura del proyecto

```text
/
|-- public/                       # CVs (espanol e ingles), iconos y favicon
|-- src/
|   |-- assets/                   # Imagenes generales y capturas de proyectos
|   |-- components/               # Secciones por pagina, navbar, footer, modo nostalgia
|   |-- content/blog/             # Articulos en Markdown (+ traduccion .en.md) y su plantilla
|   |-- data/                     # Proyectos (y su version en ingles), experiencia, FAQs, novedades, GitHub
|   |-- i18n/                     # Componente que muestra cada texto en los dos idiomas
|   |-- layouts/Layout.astro      # Meta, SEO, idioma, tema y modo nostalgia
|   |-- pages/                    # Inicio, proyectos, blog, laboratorio, sobre mi, contacto, 404 y feeds
|   |-- scripts/                  # Idioma, animaciones, pestanas, FAQ, modo nostalgia y contador
|   |-- styles/                   # Estilos globales, de seccion y del modo nostalgia
|-- scripts/                      # Publicacion automatica del blog, contador de visitas y revision de traducciones
|-- deploy/                       # Unidades de systemd para el servidor
|-- astro.config.mjs
|-- package.json
```

## Comandos

| Comando           | Accion                                                       |
|-------------------|--------------------------------------------------------------|
| `npm install`     | Instala dependencias                                         |
| `npm run dev`     | Servidor local en `localhost:4321`                           |
| `npm run build`   | Revisa las traducciones y genera el sitio estatico en `dist/` |
| `npm run preview` | Sirve `dist/` (requiere `npm run build`)                     |

## Despliegue

El sitio es estatico: `npm ci` y `npm run build` generan `dist/`, que se sirve con `npm run preview`. Los articulos del blog se publican solos al subir su archivo `.md`, y el contador del modo nostalgia es un servicio aparte; ambos se instalan con los archivos de `deploy/`.

Durante el build se consulta la API de GitHub. Si no esta disponible, el build termina igual: la seccion de actividad se genera oculta y el navegador la completa al cargar la pagina. La variable opcional `GITHUB_TOKEN` solo sirve para aumentar el limite de peticiones del build.
