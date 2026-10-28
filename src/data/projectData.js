import crossWord from "../assets/img-projects/crossWord.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import snakeGame from "../assets/img-projects/snakeGame.png";
import checkout from "../assets/img-projects/checkout.png";
import mcPanel from "../assets/img-projects/mcPanel.png";
import playerping from "../assets/img-projects/playerping.png";
import nitori from "../assets/img-projects/nitori-discord.png";
import svgApp from "../assets/img-projects/svg-app.jpg";
import hostra from "../assets/img-projects/hostra.png";
import hostraCompanion from "../assets/img-projects/hostra-companion.png";
import en from "./projectData.en.js";

const base = [
  
  {
    titulo: "Sopa de letras",
    slug: "sopa-de-letras",
    caso: [
      {
        titulo: "El problema",
        texto:
          "Maestros y padres que quieren una actividad rápida suelen perder tiempo armando sopas de letras a mano, o terminan con generadores llenos de opciones que no necesitan.",
      },
      {
        titulo: "La idea",
        texto:
          "Un creador de sopas de letras simple: escribes las palabras que quieres, y puedes imprimir el resultado o resolverlo directamente en el sitio. Sirve para pasar un rato divertido con niños pequeños o para generar actividades de clase en minutos, con palabras de cualquier tema escolar.",
      },
      {
        titulo: "Qué hace",
        lista: [
          "Genera la sopa de letras con cualquier lista de palabras que ingreses.",
          "Se puede imprimir, o resolver y comprobar la respuesta dentro de la misma página.",
          "Funciona en el navegador, sin instalar nada, en computadora o celular.",
          "Tiene modo claro y oscuro.",
        ],
      },
      {
        titulo: "Cómo está hecho",
        texto:
          "HTML, CSS y JavaScript sin servidor. La lógica para colocar las palabras en la cuadrícula y manejar el juego parte de las librerías wordfind.js, wordfindgame.js y tag-it.js de bunkat, con cambios propios para este proyecto: la interfaz, los modos claro y oscuro y la impresión.",
      },
      {
        titulo: "Lo que aprendí",
        lista: [
          "Entender mejor cómo funcionan las funciones de JavaScript. Por eso partí del generador de bunkat: analizarlo me ayudó a ver cómo se comporta el lenguaje.",
          "La primera versión fue mi proyecto final de la escuela: solo HTML, CSS y JavaScript con una interfaz muy sencilla. El enfoque fue parecido al del juego Snake: practicar esos tres lenguajes.",
          "El diseño actual me ayudó a familiarizarme con las interfaces responsivas y con el cambio entre tema claro y oscuro.",
        ],
      },
      {
        titulo: "Créditos",
        texto:
          "La base del generador es trabajo de bunkat. Este proyecto la adapta y le agrega su propia interfaz.",
        enlaces: [{ texto: "Repositorio de bunkat en GitHub", href: "https://github.com/bunkat" }],
      },
    ],
    descripcion:
      "Generador moderno y responsivo de sopa de letras con modo oscuro/claro integrado, con cualquier serie de palabras que ingrese el usuario el programa genera la sopa de letras, se puede imprimir, resolver, o contestar dentro de la misma pagina.",
    imagen: crossWord,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://pbarr.dev/sopa/",
    codigo: "https://github.com/pbarrera813/Word-Search-Puzzle",
    categoria: "Frontend",
    destacado: false,
  },
  {
    titulo: "Recreacion Pac-man Arcade",
    slug: "pacman",
    caso: [
      {
        titulo: "La meta",
        texto:
          "Recrear Pac-Man (1980) lo más fiel posible a la versión arcade, usando C++ y la librería SDL2 para gráficos, sonido y entrada.",
      },
      {
        titulo: "Qué incluye",
        lista: [
          "Los cuatro fantasmas (Blinky, Pinky, Inky y Clyde) con sus modos Scatter y Chase, y animaciones por dirección.",
          "Estado asustado con parpadeo de advertencia, ojos que regresan a casa y puntaje de 200 a 1600 por fantasma consecutivo.",
          "Animación de muerte de 12 cuadros y ocho frutas distintas según el nivel, de la cereza a la llave.",
          "Sirena que se acelera cuando quedan pocos puntos, high score, pausa, reinicio y control de volumen (100, 50, 25 o silencio).",
        ],
      },
      {
        titulo: "Cómo está hecho",
        texto:
          "C++ con SDL2, organizado por clases (Game, Ghost, GhostAI, AudioManager) y compilable con CMake o Makefile. Todos los sprites y sonidos viven en una carpeta de assets, separados del código.",
      },
      {
        titulo: "Un bug interesante",
        texto:
          "En la versión 1.1, Blinky y Pinky se quedaban atrapados en bucles en las esquinas durante el modo Chase. La causa: al cambiar entre Scatter y Chase los fantasmas no invertían su dirección, algo que el arcade original sí hace. La solución fue llamar a reverseDirection() dentro de Ghost::setMode() en cada transición.",
      },
      {
        titulo: "Lo que aprendí",
        lista: [
          "Entender cómo funciona C++ en los videojuegos, algo que nunca había tocado: antes solo había usado C++ y su lógica en proyectos de la escuela.",
          "Con ayuda de la librería SDL2, entender cómo se manejan los recursos, los sonidos y todo lo que interviene en un juego.",
        ],
      },
    ],
    descripcion:
      "Recreación juego Pac-man con la meta de una fidelidad a la version arcade, haciendo uso de sonidos y sprites mediante libreria SDL2 para la obtención de estas funciones, con el fin de una fidelidad completa a la version arcade.",
    imagen: pacmanGame,
    tecnologias: ["C++", "SDL2"],
    demo: "https://pbarr.dev/pacman/",
    codigo: "https://github.com/pbarrera813/Pacman-Game/",
    categoria: "Desarrollo",
    destacado: false,
  },
  {
    titulo: "NexuDrive",
    slug: "nexudrive",
    caso: [
      {
        titulo: "El problema",
        texto:
          "Las aplicaciones tipo NAS suelen quedarse en uno de dos extremos. Filebrowser tiene una interfaz simple, pero le falta compatibilidad con documentos de Office. Otras sí ofrecen Office, pero vienen con muchas funciones que casi nadie usa y se vuelven pesadas y complicadas de manejar. Además, pocas ofrecen varios idiomas sin ese mismo exceso.",
      },
      {
        titulo: "La idea",
        texto:
          "Tomar lo mejor de cada una: un NAS que se instala con Docker de forma sencilla, con varios usuarios y un administrador que lo gestiona todo, compatibilidad con Office y con muchos tipos de archivo, y varios idiomas, sin el exceso de funciones.",
      },
      {
        titulo: "Qué hace",
        lista: [
          "Usuarios con carpetas propias y un administrador con control total.",
          "Explorador de archivos con vista previa de imágenes, audio, video y documentos, y edición de archivos de texto.",
          "Búsqueda dentro del espacio de cada usuario.",
          "Subidas reanudables y descarga de carpetas como zip o tar.",
          "Edición de documentos de Office, con un modo de respaldo que los convierte a PDF.",
          "Interfaz disponible en varios idiomas.",
        ],
      },
      {
        titulo: "Cómo está hecho",
        texto:
          "Backend en Go y frontend en React con TypeScript, empaquetado con Docker. Para Office usa el protocolo WOPI, compatible con servidores de edición como Collabora, y LibreOffice como alternativa de conversión.",
      },
      {
        titulo: "Estado actual",
        texto:
          "Está en desarrollo y todavía no está abierto al público, por eso no hay demo ni repositorio público.",
      },
    ],
    descripcion:
      "Servidor NAS propio con inicio de sesión, usuarios con carpetas personalizadas, explorador de archivos con vista previa, subidas reanudables y descarga de archivos comprimidos. En desarrollo: pendiente de una revisión de seguridad antes de abrirse a internet.",
    imagen: nasCloud,
    tecnologias: ["Go", "React", "Docker"],
    demo: "",
    codigo: "",
    categoria: "FullStack,Frontend,Backend",
    estado: "En desarrollo",
    ahora: "En desarrollo activo; todavía no está abierto al público.",
    destacado: false,
  },
  {
    titulo: "Recreacion juego Snake",
    slug: "snake",
    caso: [
      {
        titulo: "Por qué lo hice",
        texto:
          "Lo hice para estudiar y aprender mejor HTML, CSS y JavaScript. Es un proyecto de práctica y no tiene más trasfondo que ese.",
      },
      {
        titulo: "Qué hace",
        lista: [
          "Recrea el clásico juego Snake de Nokia.",
          "En computadora se juega con las flechas del teclado.",
          "En el celular se juega con los botones de la pantalla.",
          "Tiene botones para volver a la pantalla inicial o al otro juego disponible.",
        ],
      },
      {
        titulo: "Cómo está hecho",
        texto: "HTML para la estructura, CSS para el aspecto y JavaScript para la lógica del juego.",
      },
    ],
    descripcion:
      "Recreación de juego Snake clásico hecho con HTML, CSS Y JavaScript, compatible con computadora mediante las flechas del teclado, y mediante dispositivos moviles manejable mediante los botones en la interfaz de la página, igualmente botones de navegacion para volver a la pantalla inicial o al otro juego disponible.",
    imagen: snakeGame,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://pbarr.dev/snake/",
    codigo: "https://github.com/pbarrera813/Snake-Game/tree/main",
    categoria: "Frontend",
    destacado: false,
  },
    {
    titulo: "Self-checkout items",
    slug: "self-checkout",
    caso: [
      {
        titulo: "El problema",
        texto:
          "Durante mis prácticas profesionales en John Deere, conseguir un accesorio de TI era un proceso lento. Cada paso dependía de una persona distinta.",
        lista: [
          "Se abría un ticket en la plataforma interna de tickets.",
          "El ticket llegaba al equipo global y de ahí pasaba al equipo local.",
          "Un integrante de TI revisaba el ticket manualmente y contactaba a la persona.",
          "Ambos acordaban una hora para verse y entregar el accesorio.",
          "Al entregarlo, TI cerraba el ticket.",
        ],
      },
      {
        titulo: "Resultado",
        destacada: true,
        texto:
          "Una app hecha en Microsoft PowerApps redujo ese proceso de entre 1 y 2 semanas a unos 10 segundos en promedio.",
        cifras: [
          { valor: "1–2 semanas", etiqueta: "con el proceso por tickets" },
          { valor: "~10 segundos", etiqueta: "con la app, en promedio" },
        ],
      },
      {
        titulo: "Cómo funcionaba",
        texto:
          "La persona se identificaba con su gafete, la app consultaba una base de datos SQL interna de empleados y registraba la entrega del accesorio, sin tickets ni citas de por medio. Del lado administrativo, la base de datos permitía llevar el control de los artículos entregados.",
      },
      {
        titulo: "La versión en Java",
        texto:
          "Más adelante recreé la aplicación, principalmente en Java, para un proyecto universitario. Esta versión tiene inicio de sesión con correo organizacional y el mismo objetivo. Fue creada solo como ejemplo, así que su base de datos ya no funciona y no se va a restaurar; por eso no tiene demo.",
      },
      {
        titulo: "Lo que aprendí",
        lista: [
          "Con la app original aprendí cómo funciona PowerApps, porque era la primera vez que lo usaba, y también tuve contacto con Visual Basic.",
          "La base de datos interna me dio mi primer contacto e interacción con SQL.",
          "Recrear la app en Android me ayudó a entender Java, un lenguaje que solo conocía de forma superficial.",
        ],
      },
    ],
    descripcion:
    "Aplicación móvil con inicio de sesión mediante correo organizacional, tiene el fin de entrega de accesorios a empleados, y del lado administrativo mediante la base de datos se puede mantener un control de los ítems obtenidos.",
    imagen: checkout,
    tecnologias: ["Java"],
    demo:"",
    codigo: "https://github.com/pbarrera813/self-checkout",
    categoria: "Backend,Desarrollo",
    destacado: false,
    },
    {
        titulo: "Orexa Panel",
        slug: "orexa-panel",
        caso: [
          {
            titulo: "El problema",
            texto:
              "Los paneles para servidores de Minecraft suelen caer en uno de dos extremos: vienen cargados de funciones que un servidor propio no necesita (multiusuario, permisos por rol y otras capas de administración), o se quedan cortos en algo básico.",
          },
          {
            titulo: "La idea",
            texto:
              "Instalarlo debe ser trivial: clonas el repositorio, ejecutas un solo comando, inicias sesión y empiezas a crear servidores. Sin planes de pago y sin configuración previa.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Crea y controla varios servidores (Vanilla, Paper, Spigot, Purpur, Folia, Fabric, Forge, NeoForge y Velocity) y permite importar o clonar uno existente.",
              "Consola en vivo por WebSocket y métricas de CPU y RAM.",
              "Explorador de archivos con búsqueda, edición, subida y descarga.",
              "Gestión de plugins y mods: subir, habilitar o deshabilitar y buscar actualizaciones.",
              "Respaldos programados con restauración, además de registros y reportes de fallas.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Backend en Go con una API REST y WebSocket, frontend en React con TypeScript, y un contenedor Docker que incluye JDK 17, 21 y 25, elegido automáticamente según el tipo y la versión del servidor.",
          },
          {
            titulo: "Decisiones",
            lista: [
              "Funciona con valores por defecto; la configuración avanzada es opcional mediante variables de entorno.",
              "Mientras la contraseña por defecto siga activa, las acciones protegidas permanecen bloqueadas hasta cambiarla.",
              "Contraseñas con Argon2id, protección CSRF y rutas de archivos contenidas dentro de cada servidor.",
              "Borrar archivos, respaldos o registros pide confirmación y deja 3 segundos para deshacer.",
            ],
          },
        ],
        descripcion:
        "Panel de administracion para servidores de minecraft con soporte para multiples tipos de servidores, con explorador de archivos capaz de leer archivos de texto, pagina de manejo y control de plugins/mods, compatible con Docker para un mas facil acceso.",
        imagen: mcPanel,
        tecnologias: ["Go", "TypeScript", "React", "Docker"],
        demo: "https://pbarr.dev/panel-demo/",
        codigo: "https://github.com/pbarrera813/MC-AdPanel",
        categoria: "FullStack,Frontend,Backend",
        destacado: true,
    },
    {
        titulo: "Nitori",
        slug: "nitori",
        caso: [
          {
            titulo: "El problema",
            texto:
              "Una comunidad de Discord suele terminar juntando varios bots, cada uno con funciones de pago bloqueadas, solo para moderar, conversar, traducir y consultar datos.",
          },
          {
            titulo: "La idea",
            texto:
              "Un solo bot, sin funciones premium: lo agregas a tu servidor (o lo ejecutas tú), usas /setup y listo. La IA es una puerta de entrada en lenguaje natural, no un reemplazo de los comandos: todo sigue funcionando con slash y prefijo, y al pedirlo con palabras la IA ejecuta las mismas funciones, incluso varios pasos en un solo mensaje.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Moderación de mensajes, usuarios, canales y roles, también pidiéndola en lenguaje natural si tienes el permiso correspondiente.",
              "Conversación con IA, generación, edición y análisis de imágenes, y mensajes de voz nativos de Discord cuando se piden.",
              "Información de fútbol basada en API-Football, en tarjetas de imagen con menús y botones para navegar: equipos, jugadores, partidos, posiciones, goleadores, lesiones, alineaciones, cuotas, predicciones y seguimiento en vivo.",
              "Lectura de enlaces: resumir, explicar, comparar o verificar su contenido.",
              "Traducción a cualquier idioma, ejecución de código, recordatorios, memes, estado de servidores de Minecraft, cumpleaños y aniversarios.",
              "Memoria estructurada por servidor, con reglas de estilo que solo administradores de confianza pueden cambiar.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Python 3.11 o superior con SQLite. Un modelo actúa como router: devuelve un plan tipado con las funciones a ejecutar, sus datos y su orden. El código valida autorización, identidad, alcance y dependencias con el estado real de Discord antes de ejecutar nada; si rechaza el plan, el router tiene una oportunidad de corregirlo. La respuesta final se escribe únicamente a partir de resultados confiables. El código de los usuarios se ejecuta en un runner propio, y las páginas con mucho JavaScript se leen con Playwright, de forma opcional.",
          },
          {
            titulo: "Decisiones",
            lista: [
              "Los permisos salen del estado real de Discord, nunca de lo que diga un mensaje.",
              "Todo lo que cambia el servidor necesita el permiso real, se valida completo antes de ejecutarse y nunca se reintenta ni se revierte automáticamente.",
              "Las respuestas de fútbol se validan contra API-Football en lugar de dejar que el modelo adivine.",
              "No escucha todo el canal: responde solo si lo mencionan, si se responde a un mensaje suyo o si continúa una conversación reciente del mismo usuario.",
              "La búsqueda web viene desactivada y solo se usa cuando la pregunta necesita información actual.",
            ],
          },
          {
            titulo: "Dato curioso",
            destacada: true,
            texto: [
              "Cada mensaje pasa primero por el router, una llamada al modelo con unos 15,000 tokens de instrucciones fijas. Al inicio esa llamada leía solo 128 tokens de caché. Reordené la petición para que lo fijo vaya primero y lo que cambia por mensaje al final, y agregué llaves de caché.",
              "Con la caché caliente, la mayor parte de esa entrada se lee desde caché y la llamada cuesta cerca de un tercio. El ahorro no es inmediato: después de un rato sin uso o de un reinicio, los primeros mensajes pagan el precio completo. Las cifras son de registros reales con el precio actual del modelo.",
            ],
            cifras: [
              { valor: "~15,000", etiqueta: "tokens por llamada del router" },
              { valor: "~91%", etiqueta: "de la entrada leída desde caché" },
              { valor: "0.022 → 0.007 USD", etiqueta: "costo de una llamada del router" },
            ],
            enlaces: [
              { texto: "El cambio en GitHub", href: "https://github.com/pbarrera813/Discord-bot/commit/07868f8" },
              { texto: "Las pruebas de caché", href: "https://github.com/pbarrera813/Discord-bot/blob/main/tests/test_xai_cache_usage.py" },
            ],
          },
          {
            titulo: "Estado actual",
            texto:
              "El rediseño de la IA ya está en la rama principal desde el 28 de octubre de 2026, junto con la nueva sección de fútbol. Pasa sus 484 pruebas automáticas, que usan datos simulados y no consultan a los proveedores reales. El código es público bajo licencia MIT.",
            enlaces: [
              { texto: "Nitori en GitHub", href: "https://github.com/pbarrera813/Discord-bot" },
              { texto: "El cambio que lo integró", href: "https://github.com/pbarrera813/Discord-bot/pull/1" },
            ],
          },
        ],
        imagen: nitori,
        descripcion:
        "Bot de Discord todo en uno y sin funciones de pago. Entiende lenguaje natural: un router de IA propone un plan tipado y el código lo valida con el estado real de Discord antes de ejecutarlo. Incluye moderación, fútbol, imágenes, lectura de enlaces, recordatorios y más.",
        tecnologias: ["Python"],
        demo: null,
        codigo: "https://github.com/pbarrera813/Discord-bot",
        categoria: "Backend,Desarrollo",
        destacado: true,
    },
    {
        titulo: "Simple Voice App",
        slug: "simple-voice-app",
        caso: [
          {
            titulo: "El problema",
            texto:
              "Los jugadores de Minecraft Bedrock, en su gran mayoría en consola, solo podían entrar al chat de voz de SimpleVoice-Geyser desde su interfaz web. Eso obligaba a elegir entre abrirla en el navegador del celular o usar una laptop o computadora aparte. Para una sesión larga de juego en consola, ninguna de las dos opciones es cómoda.",
          },
          {
            titulo: "Cómo nació",
            texto:
              "Como ya había contribuido al plugin, empecé a pensar en desarrollar una app oficial. Cuando vi en el foro del plugin a un usuario pidiendo una app oficial, decidí tomar la iniciativa y empezar a construirla yo.",
          },
          {
            titulo: "La idea",
            texto:
              "Una app de Android que se conecta directo al servidor y funciona como una llamada: ingresas servidor, usuario y contraseña, y hablas con micrófono abierto, silenciado o push-to-talk.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Captura y reproducción de audio nativas de Android, con opción de salida por auricular o altavoz.",
              "Notificación de llamada en primer plano con controles para silenciar, cambiar a altavoz, colgar y responder al chat.",
              "Pestañas de voz y chat, prueba de audio local y un panel de diagnóstico de conexión.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Interfaz en Flutter y Dart con audio nativo de Android por debajo. Se conecta por websocket directamente a la ruta /ws de SimpleVoice-Geyser, que la app calcula a partir del campo de servidor y que funciona con subrutas y puertos.",
          },
          {
            titulo: "Decisiones",
            lista: [
              "Para que la app funcionara también modifiqué el plugin: soporte de protocolo para clientes Android (PR #64).",
              "También aporté soporte de subruta para reverse proxy, audio espacial y autenticación persistente (PR #45).",
            ],
          },
        ],
        imagen: svgApp,
        descripcion:
        "App de Android hecha con Flutter para jugadores de Minecraft Bedrock: permite unirse al chat de voz y al chat del servidor de SimpleVoice-Geyser sin usar el navegador. Soy su desarrollador principal.",
        tecnologias: ["Flutter", "Dart"],
        demo: null,
        codigo: "https://github.com/TheodoreMeyer/Svg-App",
        categoria: "Desarrollo",
        estado: "En desarrollo",
        ahora: "Versión 1.1.0 en la rama dev: interfaz de Minecraft e idiomas.",
        destacado: false,
    },
    {
        titulo: "Hostra Dashboard",
        slug: "hostra",
        caso: [
          {
            titulo: "El problema",
            texto:
              "Cuando eres el único dueño de un servidor casero, para saber qué está pasando adentro normalmente tienes dos opciones: conectarle un monitor, un teclado y un mouse directamente, o conectarte por SSH desde otra computadora y escribir comandos para averiguarlo.",
          },
          {
            titulo: "La idea",
            texto:
              "Hostra convierte lo que normalmente se averigua a base de comandos en un panel claro y en vivo. Desde el navegador o desde la app en tu celular ves de un vistazo cómo está tu servidor, qué falla y qué hacer al respecto y, solo si tú lo permites, actúas sobre él, sin conectarte por SSH ni escribir comandos para cada revisión.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Muestra el CPU, la memoria, el almacenamiento (con un pronóstico de cuándo se llenará cada volumen) y la salud de los discos.",
              "Muestra la red y los puertos con su dueño, los servicios de systemd con sus registros, los contenedores de Docker y un resumen del tráfico de Zoraxy, el reverse proxy.",
              "Sus alertas dicen qué pasó, muestran la evidencia y señalan qué hacer al respecto.",
              "Solo si tú lo permites, puede iniciar, detener y reiniciar servicios y contenedores, y hacer limpiezas seguras de espacio.",
              "La app de Android, Hostra Companion, ofrece lo mismo desde el celular, con notificaciones de alertas y una terminal.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto: [
              "Un agente en Go corre como usuario normal en el servidor Linux con systemd y sirve el dashboard, hecho con React y TypeScript, que ya viene integrado: no hay nada más que ejecutar. El estado se guarda en SQLite.",
              "Lo poco que necesita permisos de root lo hacen cinco programas diminutos y separados: salud de los discos, limpieza, política, dueño de los puertos y terminal. systemd inicia cada uno solo cuando llega una petición, desde un socket que únicamente puede usar la cuenta del agente, y cada uno acepta un solo tipo de petición.",
            ],
          },
          {
            titulo: "Decisiones",
            lista: [
              "Por defecto el dashboard solo observa: ninguna acción sobre el servidor está permitida hasta que tú la habilites.",
              "Lo que Hostra puede hacer lo define un archivo de política que solo root puede escribir. El instalador crea uno que no permite nada; los permisos se conceden en Ajustes y las acciones sensibles piden escribir el nombre antes.",
              "Está pensado para un solo dueño y un solo servidor, no para flotas: cada navegador o teléfono se empareja una vez con un código.",
              "El instalador explica lo que va a hacer y pregunta antes de cambiar algo, y permite revisar los pasos sin ejecutarlos.",
              "La terminal es para revisiones rápidas, no para reemplazar a SSH: corre en su propia unidad de systemd como un usuario desechable, sin grupos ni sudo, con el sistema en solo lectura y límites de memoria y de tiempo.",
            ],
          },
          {
            titulo: "Estado actual",
            texto:
              "Versión 1.0.0, con el código público en GitHub bajo licencia MIT. No hay binarios para descargar: se compila en el propio servidor con el instalador. La app de Android es un proyecto aparte, Hostra Companion.",
            enlaces: [
              { texto: "Hostra Dashboard en GitHub", href: "https://github.com/pbarrera813/Hostra-Dashboard" },
              { texto: "Hostra Companion, la app de Android", href: "/proyectos/hostra-companion" },
              { texto: "Zoraxy, el reverse proxy que Hostra resume", href: "https://github.com/tobychui/zoraxy" },
            ],
          },
        ],
        descripcion:
        "Dashboard para mantener el control de un servidor Linux casero: CPU, memoria, almacenamiento y salud de los discos, red y puertos, servicios de systemd y contenedores de Docker, con alertas que dicen qué está mal y qué hacer. Pensado para un solo dueño y un solo servidor; la app de Android se publica aparte como Hostra Companion.",
        tecnologias: ["Go", "React", "TypeScript"],
        demo: null,
        imagen: hostra,
        codigo: "https://github.com/pbarrera813/Hostra-Dashboard",
        categoria: "FullStack,Frontend,Backend",
        destacado: true,
    },
    {
        titulo: "Hostra Companion",
        slug: "hostra-companion",
        fecha: "2026-10-22",
        caso: [
          {
            titulo: "El problema",
            texto:
              "El dashboard de Hostra vive en la red de tu casa a propósito: es HTTP sencillo y solo se abre desde ahí. Eso deja un hueco cuando no estás en casa y algo falla en el servidor.",
          },
          {
            titulo: "La idea",
            texto:
              "Hostra Companion lleva el dashboard al bolsillo: muestra lo que hace tu servidor, te dice con palabras claras cuando algo está mal y, solo si lo permites, te deja actuar: reiniciar un servicio, pausar un contenedor, liberar espacio o abrir una terminal. Es una app para un solo dueño y su propio servidor: no hay cuenta, ni servicio en la nube, ni descarga ya compilada.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Resumen: salud, CPU, memoria, almacenamiento, red, sensores, servicios favoritos y las alertas más recientes.",
              "Servicios de systemd con búsqueda y filtros, y detalle con estado, memoria y registro; si lo permites, iniciarlos, detenerlos o reiniciarlos.",
              "Contenedores de Docker: reiniciar, pausar, reanudar o detener, con su imagen, tiempo activo, memoria y salud.",
              "Almacenamiento con historial de uso, análisis del disco y una guía para liberar espacio; red y puertos, con quién es dueño de cada puerto.",
              "Alertas con la evidencia, filtros por gravedad e historial, y notificaciones en el teléfono.",
              "Una terminal real en el servidor, protegida con tu huella o el bloqueo de pantalla.",
              "Administración desde el teléfono (dispositivos, política de control, revisiones de configuración y registro de actividad), apagada por defecto.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto: [
              "Está hecha con Flutter y Dart para Android. Nunca habla directo con el servidor por internet: el teléfono llama a un nombre público en Cloudflare, Cloudflare revisa el certificado de cliente del teléfono (TLS mutuo) y un Cloudflare Tunnel lleva la petición al servicio de Hostra, que solo escucha en la propia máquina.",
              "Las notificaciones pasan por Firebase de Google, en un proyecto tuyo. Google puede leer el título y el detalle de cada alerta en tránsito, y la app lo explica antes de activarlas.",
            ],
          },
          {
            titulo: "Decisiones",
            lista: [
              "Dos cerraduras: un certificado de cliente (Cloudflare) y un token de dispositivo que solo existe después de emparejar el teléfono con un código de un solo uso. Quitar un teléfono en el dashboard cierra su sesión en segundos, incluso con una terminal abierta.",
              "La llave del certificado se crea en el Android Keystore y no puede exportarse. Si borras los datos de la app o la desinstalas, la llave se borra y te registras de nuevo.",
              "La app recuerda la identidad del servidor y se niega a conectarse si la dirección responde con otra.",
              "Todo lo que cambia el servidor empieza apagado. Los dos interruptores del teléfono (administrar y terminal) solo se cambian desde el dashboard en tu red de casa, nunca desde el propio teléfono.",
              "Cada acción se envía una sola vez y no se repite sola después de un resultado incierto; lo que se hizo y desde qué teléfono queda en Actividad reciente.",
              "No hay descarga ya compilada a propósito: las notificaciones y la conexión segura dependen de tu proyecto de Firebase y de tu certificado, así que cada quien compila la suya.",
            ],
          },
          {
            titulo: "Límites",
            lista: [
              "Android 11 o superior, arm64 y servicios de Google Play. Un solo servidor emparejado por app.",
              "Cada teléfono necesita su propio certificado y su propia huella en la regla de Cloudflare.",
              "La terminal permite una sesión por teléfono y dos en total, termina tras 10 minutos sin actividad y a los 60 como máximo.",
              "No hay versión web, ni app para iOS, ni ficha en una tienda.",
            ],
          },
          {
            titulo: "Cómo instalarla",
            texto:
              "Hay dos caminos que llevan al mismo resultado: seguir la guía SETUP.md paso a paso, o abrir el repositorio con un asistente de código y pedirle que lea AGENTS.md. El asistente te guía, pregunta antes de tocar tu servidor, tu dominio o tu cuenta de Firebase y nunca pide tus secretos.",
          },
          {
            titulo: "Estado actual",
            texto:
              "Versión 1.0.0, con el código público en GitHub bajo licencia MIT. Es la app complementaria de Hostra Dashboard.",
            enlaces: [
              { texto: "Hostra Companion en GitHub", href: "https://github.com/pbarrera813/Hostra-Companion" },
              { texto: "Hostra Dashboard, el dashboard que controla", href: "/proyectos/hostra" },
            ],
          },
        ],
        descripcion:
        "App de Android hecha con Flutter para vigilar y administrar desde el celular un servidor Linux con Hostra: servicios, contenedores, almacenamiento, red, alertas con notificaciones y una terminal, con la conexión protegida por un certificado de cliente y un código de emparejamiento.",
        tecnologias: ["Flutter", "Dart"],
        demo: null,
        imagen: hostraCompanion,
        codigo: "https://github.com/pbarrera813/Hostra-Companion",
        categoria: "Desarrollo",
        destacado: false,
    },
    {
        titulo: "Digimon Rumble Arena 2 Recomp",
        slug: "dra2-recomp",
        fecha: "2026-10-28",
        caso: [
          {
            titulo: "Cómo nació",
            texto:
              "De niño jugaba este juego con amigos y familia. Quise revivir esos días y pensé: ¿por qué no hacer un port nativo de un juego de Xbox? Además, me daría una comprensión mucho mejor del código de bajo nivel, algo muy importante en el desarrollo en C y C++.",
          },
          {
            titulo: "La idea",
            texto:
              "Llevar la versión original de Xbox de Digimon Rumble Arena 2 a una versión nativa de Windows de 64 bits, que corre de forma nativa. Solo necesitas tu propia copia legal del disco.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "El juego completo: menús, combates y multijugador local de hasta cuatro jugadores, con su música, voces y efectos.",
              "Pantalla completa sin bordes a 1080p, 1440p o 2160p y 60 fps fijos, ensanchada para llenar pantallas 16:9 sin estirar la imagen (o en el 4:3 original).",
              "Hasta cuatro controles con vibración, probados en equipo real: DualSense, Xbox Series X|S y Switch 2 Pro.",
              "Un menú que se abre desde el propio control para cambiar resolución, pantalla ancha, pantalla completa o monitor, sin necesidad de teclado.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto: [
              "Es una recompilación estática. XboxRecomp, la herramienta de sp00nznet en la que se apoya, traduce el código x86 del juego a C; ese C se compila con MSVC y corre sobre un núcleo de Xbox reimplementado, con la GPU NV2A dibujada en Direct3D 11 y los controles a través de SDL3. Son unas 20,000 funciones traducidas.",
              "Mi parte son los parches a esa herramienta (traductor, tiempo de ejecución y renderizador), las funciones que la herramienta no detectaba por sí sola, el script de reconstrucción y el registro de ingeniería. El código es C y Python.",
            ],
          },
          {
            titulo: "Decisiones",
            lista: [
              "Antes de compilar se comprueba que los 2,863 archivos de tu copia coincidan con una copia limpia, y lo que se genera no se debe compartir.",
              "No se modifica el código del juego: cada defecto se corrige en la capa donde nace, ya sea el traductor, el detector de funciones o el tiempo de ejecución.",
              "El resultado se comparó contra la consola real usando el emulador xemu y su depurador. Un hallazgo solo contaba si se cumplía en las dos direcciones: la consola hace X, el port hacía Y, y el arreglo hace que el port haga X.",
              "SDL3 se compila con libusb porque la SDL3.dll oficial no trae el controlador del Switch 2 Pro.",
              "Todo defecto encontrado queda documentado, del síntoma a la causa, en ENGINEERING.md.",
            ],
          },
          {
            titulo: "Dato curioso",
            destacada: true,
            texto: [
              "En el nivel RubberTree Falls, un acantilado junto a la cascada salía como un hueco negro. La primera sospecha fue el recorte de escena del propio juego, pero compararlo con xemu la descartó: los 39 objetos grandes del escenario tenían las mismas cajas en ambos.",
              "Contar los índices de cada dibujo dio la respuesta: el terreno manda 12,391 en un solo dibujo y el ejecutor conservaba como máximo 4,096 por lote, descartando el resto sin avisar. Dos tercios del acantilado nunca llegaban a la GPU. Ahora el límite es de 65,536 y un aviso nombra cualquier juego que lo supere.",
            ],
            cifras: [
              { valor: "12,391", etiqueta: "índices en un solo dibujo del terreno" },
              { valor: "4,096 → 65,536", etiqueta: "límite de índices por lote" },
            ],
            enlaces: [
              { texto: "El registro de ingeniería", href: "https://github.com/pbarrera813/DRA2-Recomp/blob/main/ENGINEERING.md" },
            ],
          },
          {
            titulo: "Límites",
            lista: [
              "Solo funciona con la versión de Estados Unidos del juego. Las versiones europea y japonesa necesitarían trabajo adicional.",
              "Windows 10 u 11 de 64 bits, con Visual Studio, CMake y Python para compilarlo. La primera compilación tarda un buen rato.",
              "No hay descarga ya compilada: cada quien la reconstruye con su propia copia del juego.",
            ],
          },
          {
            titulo: "Cómo reconstruirlo",
            texto:
              "Hay dos caminos: seguir los pasos del README y ejecutar python reproduce.py con la ruta de tu copia del disco, o abrir el repositorio con un asistente de código y pedirle que lea AGENTS.md. El asistente revisa tus herramientas, ejecuta el script y te explica cualquier error.",
          },
          {
            titulo: "Créditos y aviso",
            texto:
              "Está construido sobre XboxRecomp (licencia MIT), que incluye código derivado de xemu, y usa SDL3 y libusb. Digimon Rumble Arena 2 es propiedad de sus titulares; este proyecto no está afiliado ni respaldado por ellos.",
            enlaces: [{ texto: "XboxRecomp, de sp00nznet", href: "https://github.com/sp00nznet/xboxrecomp" }],
          },
          {
            titulo: "Estado actual",
            texto:
              "El código está disponible en GitHub para construir el juego a partir de tu propia copia del disco.",
            enlaces: [{ texto: "DRA2-Recomp en GitHub", href: "https://github.com/pbarrera813/DRA2-Recomp" }],
          },
        ],
        descripcion:
        "Port nativo a Windows de Digimon Rumble Arena 2 (Xbox, 2004) por recompilación estática: el código del juego se traduce a C y corre con Direct3D 11 hasta 2160p a 60 fps y controles por SDL3. No incluye nada del juego: se reconstruye desde tu propia copia.",
        tecnologias: ["C", "Python"],
        demo: null,
        codigo: "https://github.com/pbarrera813/DRA2-Recomp",
        categoria: "Desarrollo",
        destacado: true,
    },
    {
	      titulo: "PlayerPing-mod",
        slug: "playerping",
        caso: [
          {
            titulo: "El problema",
            texto:
              "PingPlayer, el plugin original de HoneyBerries, solo funcionaba en servidores basados en plugins. Los servidores con mods no podían usarlo.",
          },
          {
            titulo: "La idea",
            texto:
              "Llevar esa misma funcionalidad a los servidores con mods. La idea original es de HoneyBerries; mi aporte es el port a Fabric y NeoForge.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Comando /ping para ver la latencia, y /ping con un jugador para los administradores.",
              "Comando /ip para ver tu propia IP pública, y /ip con un jugador solo para administradores.",
              "Indicador de colores en los comandos y en la lista de jugadores: excelente, bueno, regular, malo o terrible.",
              "Umbrales editables con validación de traslapes, aplicados al instante.",
              "Modo de depuración y generación de reportes de diagnóstico.",
              "Funciona solo del lado del servidor: los jugadores no necesitan instalar nada.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Java, con un proyecto para Fabric y otro para NeoForge. Se validó en Minecraft 1.21 y 1.21.11, y reconoce como administradores a los operadores de Minecraft, a quienes tengan el permiso playerping.admin y a los roles de LuckPerms con peso suficiente.",
          },
          {
            titulo: "Créditos",
            texto:
              "El plugin original es obra de HoneyBerries. Este proyecto es un port a mods y no existiría sin esa idea.",
            enlaces: [
              { texto: "PingPlayer original, de HoneyBerries", href: "https://github.com/HoneyBerries/PingPlayer" },
            ],
          },
        ],
	      descripcion: "Mod para minecraft java que obtiene el ping de un usuario, mostrando con indicador de colores si es excelente, bueno, regular, malo o terrible.",
	      imagen: playerping,
	      tecnologias: ["Java"],
	      demo:"",
	      codigo: "https://github.com/pbarrera813/PingPlayer",
	      categoria: "Desarrollo",
        destacado: false,
    },
 ];

// Every text field becomes { es, en }. A missing or reshaped English twin stops the build.
function par(es, tr, path) {
  if (typeof es === "string") {
    if (typeof tr !== "string" || !tr.trim()) throw new Error(`projectData.en.js: missing English text at ${path}`);
    return { es, en: tr };
  }
  if (Array.isArray(es)) {
    if (!Array.isArray(tr) || tr.length !== es.length) throw new Error(`projectData.en.js: different list length at ${path}`);
    return es.map((v, i) => par(v, tr[i], `${path}[${i}]`));
  }
  if (es && typeof es === "object") {
    return Object.fromEntries(
      Object.entries(es).map(([k, v]) => [k, k === "href" || typeof v === "boolean" ? v : par(v, tr?.[k], `${path}.${k}`)])
    );
  }
  return es;
}

export const proyectos = base.map((p) => {
  const tr = en[p.slug];
  if (!tr) throw new Error(`projectData.en.js: no English text for "${p.slug}"`);
  return {
    ...p,
    descripcion: par(p.descripcion, tr.descripcion, `${p.slug}.descripcion`),
    caso: p.caso && par(p.caso, tr.caso, `${p.slug}.caso`),
    ahora: p.ahora && par(p.ahora, tr.ahora, `${p.slug}.ahora`),
  };
});
