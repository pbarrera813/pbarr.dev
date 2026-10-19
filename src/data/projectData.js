import crossWord from "../assets/img-projects/crossWord.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import snakeGame from "../assets/img-projects/snakeGame.png";
import checkout from "../assets/img-projects/checkout.png";
import mcPanel from "../assets/img-projects/mcPanel.png";
import playerping from "../assets/img-projects/playerping.png";
import nitori from "../assets/img-projects/nitori-discord.png";
import svgApp from "../assets/img-projects/svg-app.jpg";
export const proyectos = [
  
  {
    titulo: "Sopa de letras",
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
    descripcion:
      "Servidor NAS propio con inicio de sesión, usuarios con carpetas personalizadas, explorador de archivos con vista previa, subidas reanudables y descarga de archivos comprimidos. En desarrollo: pendiente de una revisión de seguridad antes de abrirse a internet.",
    imagen: nasCloud,
    tecnologias: ["Go", "React", "Docker"],
    demo: "",
    codigo: "",
    categoria: "FullStack,Backend,Desarrollo",
    estado: "En desarrollo",
    destacado: true,
  },
  {
    titulo: "Recreacion juego Snake",
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
              "Un solo bot, sin funciones premium: lo agregas a tu servidor (o lo ejecutas tú), usas /setup y listo. La IA se usa solo donde hace falta; la moderación y las consultas a APIs son lógica nativa de los comandos.",
          },
          {
            titulo: "Qué hace",
            lista: [
              "Moderación de mensajes, usuarios, canales y roles, con panel de roles de color.",
              "Conversación con IA, análisis, generación y edición de imágenes, y mensajes de voz nativos de Discord cuando se piden.",
              "Información de fútbol basada en API-Football: equipos, jugadores, partidos, posiciones, goleadores, lesiones y seguimiento en vivo.",
              "Traducción a ocho idiomas, ejecución de código, recordatorios, memes y consulta del estado de servidores de Minecraft.",
              "Bienvenidas y despedidas configurables, cumpleaños y aniversarios.",
            ],
          },
          {
            titulo: "Cómo está hecho",
            texto:
              "Python 3.11 o superior, con ajustes por servidor (prefijo, idioma, canales donde se permite la IA y canal de moderación). Integra xAI para el lenguaje, API-Football, Glot para ejecutar código y API Ninjas.",
          },
          {
            titulo: "Decisiones",
            lista: [
              "Las respuestas de fútbol se validan contra API-Football en lugar de dejar que el modelo adivine.",
              "No escucha todo el canal: responde solo si lo mencionan, si se responde a un mensaje suyo o si continúa una conversación reciente del mismo usuario.",
              "La búsqueda web está desactivada por defecto y no se usa en conversaciones normales.",
              "Quién puede cambiar las reglas del servidor se verifica con el estado real de Discord, no con lo que diga el mensaje.",
            ],
          },
        ],
        imagen: nitori,
        descripcion:
        "Bot de Discord todo en uno y sin funciones de pago: moderación, conversación con IA, información y estadísticas de fútbol, ejecución de código, recordatorios, cumpleaños y más.",
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
        destacado: false,
    },
    {
	      titulo: "PlayerPing-mod",
	      descripcion: "Mod para minecraft java que obtiene el ping de un usuario, mostrando con indicador de colores si es excelente, bueno, regular, malo o terrible.",
	      imagen: playerping,
	      tecnologias: ["Java"],
	      demo:"",
	      codigo: "https://github.com/pbarrera813/PingPlayer",
	      categoria: "Desarrollo",
        destacado: false,
    },
 ];
