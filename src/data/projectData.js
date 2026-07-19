import crossWord from "../assets/img-projects/crossWord.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import snakeGame from "../assets/img-projects/snakeGame.png";
import checkout from "../assets/img-projects/checkout.png";
import mcPanel from "../assets/img-projects/mcPanel.png";
import playerping from "../assets/img-projects/playerping.png";
export const proyectos = [
  
  {
    titulo: "Sopa de letras",
    descripcion:
      "Generador moderno y responsivo de sopa de letras con modo oscuro/claro integrado, con cualquier serie de palabras que ingrese el usuario el programa genera la sopa de letras, se puede imprimir, resolver, o contestar dentro de la misma pagina.",
    imagen: crossWord.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://pbarr.dev/sopa/",
    codigo: "https://github.com/pbarrera813/Word-Search-Puzzle",
    categoria: "Frontend",
    destacado: true,
  },
  {
    titulo: "Recreacion Pac-man Arcade",
    descripcion:
      "Recreación juego Pac-man con la meta de una fidelidad a la version arcade, haciendo uso de sonidos y sprites mediante libreria SDL2 para la obtención de estas funciones, con el fin de una fidelidad completa a la version arcade.",
    imagen: pacmanGame.src,
    tecnologias: ["Cpp"],
    demo: "https://pbarr.dev/pacman/",
    codigo: "https://github.com/pbarrera813/Pacman-Game/",
    categoria: "Desarrollo",
    destacado: true,
  },
  {
    titulo: "Servidor NAS",
    descripcion:
      "Servidor NAS hosteado en subpath del servidor para usuarios con carpetas personalizadas y vista previa de archivos, sin necesidad de convivir con otros archivos, usuarios o sus carpetas, unicamente los asignados a los respectivos usuarios.",
    imagen: nasCloud.src,
    tecnologias: ["Linux", "Docker"],
    demo: "https://pbarr.dev/cloud/",
    codigo: "https://filebrowser.org/index.html",
    categoria: "Backend,Desarrollo",
    destacado: true,
  },
  {
    titulo: "Recreacion juego Snake",
    descripcion:
      "Recreación de juego Snake clásico hecho con HTML, CSS Y JavaScript, compatible con computadora mediante las flechas del teclado, y mediante dispositivos moviles manejable mediante los botones en la interfaz de la página, igualmente botones de navegacion para volver a la pantalla inicial o al otro juego disponible.",
    imagen: snakeGame.src,
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
    imagen: checkout.src,
    tecnologias: ["Java"],
    demo:"",
    codigo: "https://github.com/pbarrera813/self-checkout",
    categoria: "FullStack,Desarrollo",
    destacado: false,
    },
    {
        titulo: "Orexa Panel",
        descripcion:
        "Panel de administracion para servidores de minecraft con soporte para multiples tipos de servidores, con explorador de archivos capaz de leer archivos de texto, pagina de manejo y control de plugins/mods, compatible con Docker para un mas facil acceso.",
        imagen: mcPanel.src,
        tecnologias: ["TypeScript", "Go", "HTML"],
        demo: "https://pbarr.dev/panel-demo/",
        codigo: "https://github.com/pbarrera813/MC-AdPanel",
        categoria: "FullStack,Frontend,Backend",
        destacado: true,
    },
    {
	      titulo: "PlayerPing-mod",
	      descripcion: "Mod para minecraft java que obtiene el ping de un usuario, mostrando con indicador de colores si es excelente, bueno, regular, malo o terrible.",
	      imagen: playerping.src,
	      tecnologias: ["Java"],
	      demo:"",
	      codigo: "https://github.com/pbarrera813/PingPlayer",
	      categoria: "Desarrollo",
        destacado: false,
    },
 ];
