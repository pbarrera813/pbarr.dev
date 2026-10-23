# Personal Portfolio - Pablo Barrera

Portafolio personal auto-hospedado en [pbarr.dev](https://pbarr.dev), construido con Astro y componentes React puntuales, con un tema visual propio. Presenta trabajo terminado y en curso, con un blog de notas de desarrollo, el estado en vivo de las demos y animaciones cuidadas. Todo el contenido esta en espanol.

## Caracteristicas principales

### Paginas

- **Inicio**: encabezado con disponibilidad y texto que se escribe solo, tira de tecnologias, tira de cifras (proyectos, en desarrollo, pull requests fusionados), `Sobre Mi`, proyectos destacados, `En desarrollo ahora`, `Actividad reciente` de GitHub, preguntas frecuentes y banner de contacto
- **Proyectos** (`/proyectos`): tarjetas con estado (`En desarrollo`), demo opcional y codigo opcional; filtros `Todos`, `Full Stack`, `Frontend`, `Backend`, `Desarrollo` y boton `Ver mas`
- **Detras del proyecto** (`/proyectos/[slug]`): una pagina por proyecto con problema, idea, funciones, arquitectura, decisiones, cifras, estado actual, `Lo que aprendi`, creditos y enlaces a los articulos del blog relacionados. Indice lateral de secciones (pantallas anchas) y linea de progreso de lectura
- **Blog** (`/blog`): articulos en Markdown enlazados con su proyecto, feed RSS (`/rss.xml`), pagina para suscribirse (`/blog/suscribirse`) y un recuadro `Sigue el blog` al final de cada articulo (copiar la direccion del feed, abrirlo en Feedly o Inoreader y enlaces a GitHub y LinkedIn). Para escribir un blog, copia la plantilla `src/content/blog/Blogs-template.md` y modifica la copia con lo que quieras mostrar.
- **Laboratorio**: como esta montado el servidor en cuatro pasos (Visitante, Cloudflare, Servidor Debian 12, Proxy inverso) que se pueden seleccionar para ver que hace, por que se eligio y que pasa si falla; estado en vivo de las demos (lo comprueba el navegador de quien visita) y proyectos en curso
- **Sobre mi**: biografia, experiencia con pestanas (trabajo y colaboracion en codigo abierto), seccion `Que hago` con seis areas enlazadas a un proyecto como evidencia, tecnologias, preguntas frecuentes y banner de GitHub
- **Contacto**: correo con boton de copiar, LinkedIn y GitHub
- **404** con enlace de regreso al inicio

### En todo el sitio

- Navbar fijo que cambia de fondo al hacer scroll, con menu lateral en movil, toggle de tema claro/oscuro persistido en `localStorage`, y campana de `Novedades` con contador de no leidas, que se llena sola con los articulos nuevos del blog y los proyectos nuevos
- Tema visual con gradiente personalizado:
  `#E4E7E4 -> #C0C4CA -> #9BA1B0 -> #777F96 -> #535C7B -> #2E3961 -> #0A1647`
- Diseno responsive para desktop y mobile; barras de desplazamiento con el estilo del tema
- Aviso emergente en las tarjetas cuya demo aun no existe
- CV propio en `/cv.pdf`
- El texto no se puede seleccionar ni se arrastran imagenes ni enlaces; solo los campos de formulario siguen siendo seleccionables
- SEO: titulo y descripcion por pagina, canonical, Open Graph, datos estructurados `Person`, `lang="es"`, sitemap y enlace al feed
- Accesibilidad: enlace para saltar al contenido, foco visible, menu movil operable con teclado, pasos del Laboratorio y preguntas frecuentes operables con teclado, y soporte de `prefers-reduced-motion`
- Imagenes optimizadas con `astro:assets` (WebP redimensionado en el build)

### Animaciones

- Transiciones entre paginas con `ClientRouter` de Astro; el navbar persiste y la imagen de una tarjeta de proyecto se transforma en la de su pagina
- Revelado al hacer scroll, con escalonado, y efecto de elevacion al pasar el cursor sobre las tarjetas
- Cambio de tema con revelado circular desde el boton
- Pestanas de experiencia con indicador deslizante, fundido y ajuste de altura; preguntas frecuentes con apertura animada
- Paginas `Detras del proyecto`: aparicion escalonada de listas, conteo animado de cifras, indice lateral con seccion activa y linea de progreso
- Laboratorio: los pasos se encienden en orden, al elegir un paso se repite el recorrido hasta el y se abre su detalle, y las comprobaciones de las demos arrancan al llegar a la tarjeta
- Con `prefers-reduced-motion` todo aparece sin movimiento

## Tecnologias utilizadas

- Astro 5 (sitio estatico) con `ClientRouter` y React 19 para islas interactivas
- Tailwind CSS 4
- GSAP (revelados, pestanas, preguntas frecuentes, conteo de cifras)
- `@astrojs/sitemap` y `@astrojs/rss`
- `react-icons` y `typewriter-effect`
- JavaScript y TypeScript (esquema del blog y scripts de pagina)

## Estructura del proyecto

```text
/
|-- public/
|   |-- cv.pdf                    # CV descargable
|   |-- svg/                      # Iconos de tecnologias
|-- src/
|   |-- assets/
|   |   |-- img/                  # Imagenes generales (foto, logo del navbar)
|   |   |-- img-projects/         # Capturas de proyectos
|   |-- components/
|   |   |-- about/                # Sobre mi: bio, experiencia, que hago, tecnologias, banner de GitHub
|   |   |-- blog/                 # Recuadro "Sigue el blog"
|   |   |-- commons/              # Navbar, footer, hero, banner, FAQs, iconos sociales
|   |   |-- home/                 # Header, tira de tecnologias, cifras, proyectos destacados, en desarrollo, actividad de GitHub
|   |   |-- links/                # Boton para copiar el correo
|   |   |-- project/              # Tarjeta de proyecto (compartida por Inicio y Proyectos)
|   |-- content/blog/             # Articulos del blog en Markdown y su plantilla
|   |-- content.config.ts         # Esquema de la coleccion del blog
|   |-- data/
|   |   |-- projectData.js        # Proyectos y paginas Detras del proyecto
|   |   |-- jobsData.js           # Experiencia
|   |   |-- faqData.js            # Preguntas frecuentes
|   |   |-- novedades.js          # Campana: entradas a mano + articulos y proyectos nuevos (automatico)
|   |   |-- github.js             # Consulta a la API de GitHub durante el build
|   |-- layouts/Layout.astro      # Meta, SEO, tema, ClientRouter, saltar al contenido
|   |-- pages/                    # index, proyectos, proyectos/[slug], blog, blog/[slug], blog/suscribirse, rss.xml, laboratorio, about, contact, 404
|   |-- scripts/                  # motion (revelados), tokens (tiempos), experienceTabs, faq, caso (paginas de proyecto)
|   |-- styles/                   # Estilos globales y por seccion
|-- scripts/publicar-blog.sh      # Reconstruye el sitio cuando cambia un articulo
|-- deploy/                       # Unidades de systemd (service y timer) para el script anterior
|-- astro.config.mjs
|-- package.json
```

## Comandos

| Comando           | Accion                                    |
|-------------------|-------------------------------------------|
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor local en `localhost:4321`        |
| `npm run build`   | Genera el sitio estatico en `dist/`       |
| `npm run preview` | Sirve `dist/` (requiere `npm run build`)  |

## Animaciones

- Los tiempos y curvas estan en un solo lugar: las variables `--dur-*` y `--ease-*` de `src/styles/global.css`.
- Para animar la aparicion de un elemento al hacer scroll basta con `data-reveal`.
- Las tarjetas con la clase `lift` suben al pasar el cursor; si no tienen fondo propio, usa tambien `lift-flat`.
- Con `ClientRouter` la pagina no se recarga, asi que los scripts nuevos deben ejecutarse en `astro:page-load`.

## Despliegue

El sitio es estatico: `npm ci` y `npm run build` generan `dist/`, que se sirve con `npm run preview`. Despues de cambiar archivos fuente hay que volver a ejecutar el build. Los articulos del blog se publican solos: basta con subir su archivo `.md`.

Durante el build se consulta la API de GitHub. Si no esta disponible, el build termina igual: la seccion de actividad se genera oculta y el navegador la completa al cargar la pagina. La variable opcional `GITHUB_TOKEN` solo sirve para aumentar el limite de peticiones del build.
