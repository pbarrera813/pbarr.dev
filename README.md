# Personal Portfolio - Pablo Barrera

Portafolio personal auto-hospedado en [pbarr.dev](https://pbarr.dev), construido con Astro y componentes React puntuales, con un tema visual propio. Presenta trabajo terminado y en curso, con un blog de notas de desarrollo, el estado en vivo de las demos y animaciones cuidadas. Todo el contenido esta en espanol.

## Caracteristicas principales

### Paginas

- **Inicio**: encabezado con disponibilidad y texto que se escribe solo, tira de tecnologias, tira de cifras (proyectos, en desarrollo, pull requests fusionados), `Sobre Mi`, proyectos destacados, `En desarrollo ahora`, `Actividad reciente` de GitHub, preguntas frecuentes y banner de contacto
- **Proyectos** (`/proyectos`): tarjetas con estado (`En desarrollo`), demo opcional y codigo opcional; filtros `Todos`, `Full Stack`, `Frontend`, `Backend`, `Desarrollo` y boton `Ver mas`
- **Detras del proyecto** (`/proyectos/[slug]`): una pagina por proyecto con problema, idea, funciones, arquitectura, decisiones, cifras, estado actual, `Lo que aprendi`, creditos y enlaces a los articulos del blog relacionados. Indice lateral de secciones (pantallas anchas) y linea de progreso de lectura
- **Blog** (`/blog`): articulos en Markdown enlazados con su proyecto, feed RSS (`/rss.xml`), pagina para suscribirse (`/blog/suscribirse`) y un recuadro `Sigue el blog` al final de cada articulo (copiar la direccion del feed, abrirlo en Feedly o Inoreader y enlaces a GitHub y LinkedIn)
- **Laboratorio**: como esta montado el servidor en cuatro pasos (Visitante, Cloudflare, Servidor Debian 12, Proxy inverso) que se pueden seleccionar para ver que hace, por que se eligio y que pasa si falla; estado en vivo de las demos (lo comprueba el navegador de quien visita) y proyectos en curso
- **Sobre mi**: biografia, experiencia con pestanas (trabajo y colaboracion en codigo abierto), seccion `Que hago` con seis areas enlazadas a un proyecto como evidencia, tecnologias, preguntas frecuentes y banner de GitHub
- **Contacto**: correo con boton de copiar, LinkedIn y GitHub
- **404** con enlace de regreso al inicio

### En todo el sitio

- Navbar fijo que cambia de fondo al hacer scroll, con menu lateral en movil, toggle de tema claro/oscuro persistido en `localStorage`, y campana de `Novedades` con contador de no leidas y enlaces a articulos
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
|   |-- content/blog/             # Articulos del blog en Markdown
|   |-- content.config.ts         # Esquema de la coleccion del blog
|   |-- data/
|   |   |-- projectData.js        # Proyectos y paginas Detras del proyecto
|   |   |-- jobsData.js           # Experiencia
|   |   |-- faqData.js            # Preguntas frecuentes
|   |   |-- novedades.js          # Entradas de la campana
|   |   |-- github.js             # Consulta a la API de GitHub durante el build
|   |-- layouts/Layout.astro      # Meta, SEO, tema, ClientRouter, saltar al contenido
|   |-- pages/                    # index, proyectos, proyectos/[slug], blog, blog/[slug], blog/suscribirse, rss.xml, laboratorio, about, contact, 404
|   |-- scripts/                  # motion (revelados), tokens (tiempos), experienceTabs, faq, caso (paginas de proyecto)
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

- **Proyectos** (`src/data/projectData.js`): cada proyecto tiene `titulo`, `descripcion`, `imagen` (opcional), `tecnologias`, `demo`, `codigo`, `categoria` (separada por comas), `destacado` y, opcionalmente, `estado` y `ahora`.
  - `demo` con una URL muestra el boton `Pruebalo`; `demo: ""` muestra el boton con un aviso de que aun no hay demo; `demo: null` oculta el boton.
  - `codigo: ""` oculta el boton de codigo.
  - Sin `imagen`, la tarjeta muestra un panel con el titulo.
  - `destacado: true` lo incluye en la pagina principal (maximo 4).
  - `estado: "En desarrollo"` agrega la etiqueta a la tarjeta y lo incluye en `En desarrollo ahora` (Inicio) y en el `Laboratorio`. `ahora` es la linea de estado que se muestra ahi.
- **Pagina `Detras del proyecto`**: agrega `slug` y `caso` al proyecto; la pagina `/proyectos/[slug]` y el enlace se generan solos. `caso` es una lista de secciones con `titulo` y, segun el caso:
  - `texto` (un parrafo o una lista de parrafos) y `lista` (vinetas);
  - `cifras` (`{ valor, etiqueta }`) para una tira de numeros; los numeros se animan solos al aparecer;
  - `enlaces` (`{ texto, href }`) para creditos y fuentes;
  - `destacada: true` para resaltar la seccion con una barra de acento.
  - El indice lateral se genera con los titulos de las secciones, asi que no requiere configuracion.
- **Blog**: un archivo `.md` en `src/content/blog/` con `titulo`, `fecha`, `resumen` y, opcionalmente, `proyecto` (el `slug` de un proyecto). Aparece en `/blog`, en el feed y en la pagina de ese proyecto.
- **Experiencia**: `src/data/jobsData.js`. **Preguntas frecuentes**: `src/data/faqData.js`. **Que hago**: lista `areas` en `src/components/about/features.astro`.
- **Novedades**: `src/data/novedades.js`, con la mas reciente primero y `href` opcional. El contador cuenta las entradas posteriores a la ultima fecha vista por el visitante.
- **Pasos del Laboratorio**: lista `pasos` en `src/pages/laboratorio.astro`; cada paso tiene `titulo`, `texto` (linea de la tarjeta) y `que`, `porque` y `falla` (detalle al seleccionarlo).
- **Actividad de GitHub y pull requests fusionados**: no requieren cambios. Se renderizan en el build y el navegador los actualiza en vivo (cache de 15 minutos).
- **Estado de las demos**: la pagina `Laboratorio` revisa en el navegador cada proyecto cuya `demo` apunte a `https://pbarr.dev/`.

## Animaciones

- Los tiempos y curvas viven en un solo lugar: `--dur-fast`, `--dur-base`, `--dur-slow`, `--ease-out` y `--ease-in-out` en `src/styles/global.css`. `src/scripts/tokens.js` los lee para GSAP (`seconds()`), porque el minificador reescribe `800ms` como `.8s`.
- Para revelar un elemento al hacer scroll basta con `data-reveal`; `src/scripts/motion.js` lo anima una vez y devuelve el control al CSS (para que los efectos de `hover` sigan funcionando).
- Tarjetas con `class="lift"` suben al pasar el cursor; si no tienen fondo propio agrega `lift-flat` (si no, la sombra duplica su contenido).
- Al agregar un script nuevo, ejecutalo en `astro:page-load` (o con un listener delegado); con `ClientRouter` la pagina no se recarga. Un script `is:inline` no debe usar selectores que coincidan con elementos de otras paginas.
- El tema se aplica tambien al documento entrante (`astro:before-swap`) para evitar un parpadeo del navbar al cambiar de pagina.
- Las animaciones no se pueden verificar con capturas estaticas; se probaron en Firefox y Edge muestreando estilos por cuadro.

## Despliegue

El sitio es estatico: `npm ci` y `npm run build` generan `dist/`, que se sirve con `npm run preview`. Despues de cambiar archivos fuente hay que volver a ejecutar el build. `node_modules/` y `dist/` no se versionan, asi que en un servidor nuevo hay que ejecutar ambos comandos. Tras agregar dependencias (como `gsap`) se necesita `npm ci` antes del build.

Durante el build se consulta la API de GitHub. Si no esta disponible, el build termina igual: la seccion de actividad se genera oculta y el navegador la completa al cargar la pagina. La variable opcional `GITHUB_TOKEN` solo sirve para aumentar el limite de peticiones del build.
