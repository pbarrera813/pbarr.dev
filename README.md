# Personal Portfolio - Pablo Barrera

Portafolio personal auto-hospedado en [pbarr.dev](https://pbarr.dev), construido con Astro y componentes React puntuales, con un tema visual propio.

## Caracteristicas principales

- Paginas: Inicio, Proyectos, Laboratorio, Sobre mi, Contacto y 404
- Tema visual con gradiente personalizado:
  `#E4E7E4 -> #C0C4CA -> #9BA1B0 -> #777F96 -> #535C7B -> #2E3961 -> #0A1647`
- Modo claro/oscuro con toggle en el navbar, persistido en `localStorage`
- Diseno responsive para desktop y mobile
- Filtrado de proyectos por categoria: `Todos`, `Full Stack`, `Frontend`, `Backend`, `Desarrollo`
- Paginas `Detras del proyecto` (`/proyectos/[slug]`): problema, idea, funciones, arquitectura y decisiones
- Actividad reciente de GitHub en la pagina principal, actualizada en vivo desde el navegador
- Pagina `Laboratorio`: como esta montado el servidor y estado en vivo de las demos
- Campana de `Novedades` en el navbar, con contador de no leidas
- Tarjetas de proyecto con estado (`En desarrollo`), demo opcional y codigo opcional
- Experiencia con pestanas (trabajo y colaboracion en codigo abierto) y preguntas frecuentes con `<details>` nativo
- CV propio en `/cv.pdf`
- SEO: titulo y descripcion por pagina, canonical, Open Graph, datos estructurados `Person`, `lang="es"` y sitemap
- Accesibilidad: enlace para saltar al contenido, foco visible, menu movil operable con teclado y soporte de `prefers-reduced-motion`
- Imagenes optimizadas con `astro:assets` (WebP redimensionado en el build)

## Tecnologias utilizadas

- Astro 5 (sitio estatico) y React 19 para islas interactivas
- Tailwind CSS 4
- `@astrojs/sitemap`
- `react-icons` y `typewriter-effect`
- JavaScript

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
|   |   |-- about/                # Sobre mi: bio, experiencia, servicios, tecnologias
|   |   |-- commons/              # Navbar, footer, hero, banner, FAQs, iconos sociales
|   |   |-- home/                 # Header, slider, proyectos destacados, actividad de GitHub
|   |   |-- project/              # Tarjeta de proyecto (compartida por Inicio y Proyectos)
|   |-- data/
|   |   |-- projectData.js        # Proyectos y paginas de caso
|   |   |-- jobsData.js           # Experiencia
|   |   |-- faqData.js            # Preguntas frecuentes
|   |   |-- novedades.js          # Entradas de la campana
|   |   |-- github.js             # Consulta a la API de GitHub durante el build
|   |-- layouts/Layout.astro      # Meta, SEO, saltar al contenido
|   |-- pages/                    # index, proyectos, proyectos/[slug], laboratorio, about, contact, 404
|   |-- scripts/                  # Pestanas de experiencia
|   |-- styles/                   # Estilos globales y por seccion
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

## Como actualizar el contenido

- **Proyectos** (`src/data/projectData.js`): cada proyecto tiene `titulo`, `descripcion`, `imagen` (opcional), `tecnologias`, `demo`, `codigo`, `categoria` (separada por comas), `destacado` y, opcionalmente, `estado`.
  - `demo` con una URL muestra el boton `Pruebalo`; `demo: ""` muestra el boton con un aviso de que aun no hay demo; `demo: null` oculta el boton.
  - `codigo: ""` oculta el boton de codigo.
  - Sin `imagen`, la tarjeta muestra un panel con el titulo.
  - `destacado: true` lo incluye en la pagina principal (maximo 4).
- **Pagina `Detras del proyecto`**: agrega `slug` y `caso` al proyecto. `caso` es una lista de secciones `{ titulo, texto }` o `{ titulo, lista }`. La pagina `/proyectos/[slug]` y el enlace `Detras del proyecto` se generan solos.
- **Experiencia**: `src/data/jobsData.js`. **Preguntas frecuentes**: `src/data/faqData.js`.
- **Novedades**: `src/data/novedades.js`, con la mas reciente primero. El contador cuenta las entradas posteriores a la ultima fecha vista por el visitante.
- **Actividad de GitHub**: no requiere cambios. Se renderiza en el build y el navegador la actualiza en vivo (cache de 15 minutos).
- **Estado de las demos**: la pagina `Laboratorio` revisa en el navegador cada proyecto cuya `demo` apunte a `https://pbarr.dev/`.

## Despliegue

El sitio es estatico: `npm ci` y `npm run build` generan `dist/`, que se sirve con `npm run preview`. Despues de cambiar archivos fuente hay que volver a ejecutar el build.

Durante el build se consulta la API de GitHub. Si no esta disponible, el build termina igual: la seccion de actividad se genera oculta y el navegador la completa al cargar la pagina. La variable opcional `GITHUB_TOKEN` solo sirve para aumentar el limite de peticiones del build.
