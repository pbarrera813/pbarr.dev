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
export const proyectos = [
  
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
    destacado: true,
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
    categoria: "FullStack,Backend,Desarrollo",
    estado: "En desarrollo",
    ahora: "En desarrollo activo; todavía no está abierto al público.",
    destacado: true,
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
    categoria: "FullStack,Desarrollo",
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
              "Información de fútbol basada en API-Football: equipos, jugadores, partidos, posiciones, goleadores, lesiones, alineaciones, cuotas, predicciones y seguimiento en vivo.",
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
              { texto: "Las pruebas de caché", href: "https://github.com/pbarrera813/Discord-bot/blob/dev/tests/test_xai_cache_usage.py" },
            ],
          },
          {
            titulo: "Estado actual",
            texto:
              "Este rediseño de la IA vive en la rama dev, que todavía es trabajo en progreso y no está en la rama principal.",
            enlaces: [{ texto: "Ver la rama dev", href: "https://github.com/pbarrera813/Discord-bot/tree/dev" }],
          },
        ],
        imagen: nitori,
        descripcion:
        "Bot de Discord todo en uno y sin funciones de pago. Entiende lenguaje natural: un router de IA propone un plan tipado y el código lo valida con el estado real de Discord antes de ejecutarlo. Incluye moderación, fútbol, imágenes, lectura de enlaces, recordatorios y más.",
        tecnologias: ["Python"],
        demo: null,
        codigo: "https://github.com/pbarrera813/Discord-bot/tree/dev",
        categoria: "Backend,Desarrollo",
        estado: "En desarrollo",
        ahora: "Rediseño de la IA (router con planes tipados y caché de prompts) en la rama dev.",
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
        titulo: "Hostra",
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
              "Muestra el CPU, la memoria, el almacenamiento y la salud de los discos.",
              "Muestra la red y los puertos, los servicios de systemd, los contenedores de Docker y un resumen del tráfico del reverse proxy.",
              "Genera alertas que dicen qué está mal y qué hacer al respecto.",
              "Solo si tú lo permites, puede iniciar, detener y reiniciar servicios y contenedores, y hacer algunas limpiezas seguras.",
              "La app de Android ofrece lo mismo desde el celular, con notificaciones de alertas y una terminal.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Un agente pequeño en Go corre en el servidor Linux con systemd y sirve el dashboard, hecho con React y TypeScript. La app complementaria está hecha con Flutter para Android.",
          },
          {
            titulo: "Decisiones",
            lista: [
              "Por defecto el dashboard solo observa: ninguna acción sobre el servidor está permitida hasta que tú la habilites.",
              "El instalador explica lo que va a hacer y pregunta antes de cambiar algo, y permite revisar los pasos sin ejecutarlos.",
            ],
          },
          {
            titulo: "Estado actual",
            texto:
              "El dashboard y la app de Android están en la versión 1.0.0. Los repositorios todavía no son públicos.",
          },
        ],
        descripcion:
        "Dashboard para mantener el control de un servidor Linux casero: CPU, memoria, almacenamiento y salud de los discos, red y puertos, servicios de systemd y contenedores de Docker, con alertas que dicen qué está mal y qué hacer. Incluye una app de Android hecha con Flutter para vigilarlo y administrarlo desde el celular.",
        tecnologias: ["Go", "React", "TypeScript", "Flutter"],
        demo: null,
        imagen: hostra,
        codigo: "",
        categoria: "FullStack,Backend,Desarrollo",
        estado: "En desarrollo",
        ahora: "Dashboard y app de Android en versión 1.0.0; los repositorios aún no son públicos.",
        destacado: false,
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
