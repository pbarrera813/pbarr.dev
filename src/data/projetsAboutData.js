import crossWord from "../assets/img-projects/crossWord.png";
import nasCloud from "../assets/img-projects/nasCloud.png";
import pacmanGame from "../assets/img-projects/pacmanGame.png";
import mcPanel from "../assets/img-projects/mcPanel.png";

export const proyectos = [
  {
    titulo: "Generador de Sopa de Letras",
    imagen: crossWord.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    demo: "https://pbarr.dev/sopa/",
    codigo: "https://github.com/pbarrera813/Word-Search-Puzzle",
  },
  {
    titulo: "Recreacion juego Pacman",
    imagen: pacmanGame.src,
    tecnologias: ["Cpp"],
    demo: "https://pbarr.dev/pacman/",
    codigo: "https://github.com/pbarrera813/Pacman-Game/",
  },
  {
    titulo: "Servidor NAS",
    imagen: nasCloud.src,
    tecnologias: ["Docker", "Linux"],
    demo: "https://pbarr.dev/cloud/",
    codigo: "https://filebrowser.org/index.html",
  },
  {
    titulo: "Orexa Panel",
    imagen: mcPanel.src,
    tecnologias: ["TypeScript", "Go", "HTML"],
    demo: "https://pbarr.dev/panel-demo/",
    codigo: "https://github.com/pbarrera813/MC-AdPanel",
    },
];
