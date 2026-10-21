---
titulo: "Svg-App 1.1.0: una interfaz de Minecraft y cuatro idiomas"
fecha: 2026-10-20
resumen: "La próxima versión de Svg-App cambia cómo se ve la app y te deja elegir idioma, sin tocar lo que hace: conectarte al chat de voz. Esto es lo que ya hay en la rama dev."
proyecto: simple-voice-app
---

Svg-App, la app de Android para entrar al chat de voz de SimpleVoice-Geyser, está en la versión 1.0.2. La 1.1.0 todavía no se publica: vive en la rama `dev` y se está preparando para acompañar el lanzamiento 0.1.5 del plugin. Esto es lo que ya cambió.

## Lo que se ve: una interfaz de Minecraft

La app ahora luce como la interfaz web del plugin: fondos con textura, controles con bisel y las pestañas de **Voz** y **Chat** con el mismo estilo. Para lograrlo agregué un conjunto de componentes propios (`minecraft_widgets.dart`).

Funcionalmente no cambia nada para el jugador: la app sigue haciendo lo mismo, conectarte a un chat de voz. Lo que cambia es cómo se ve.

Las texturas de tierra y piedra salen de SimpleVoice-Geyser, bajo su licencia MIT, y la fuente es Press Start 2P, bajo la licencia SIL Open Font License. Ambas están atribuidas en un archivo `NOTICE.md` dentro de la app.

## Lo que se elige: cuatro idiomas

La app ahora está en **English, Español, Italiano y Polski**. De forma predeterminada sigue el idioma del dispositivo si está disponible; si no, puedes elegir uno de los cuatro desde la app.

Tampoco cambia nada en la función. Solo te da la opción de usar la app en tu idioma nativo, en uno que quieras aprender o simplemente en otro que prefieras. Los textos en inglés, polaco e italiano siguen los del plugin, y el español sale de mi traducción al plugin (PR #103).

## Lo que no se ve: compatibilidad y cambios de servidor

Lo más técnico está en el protocolo con el que la app habla con el plugin:

- **Versiones en orden.** La app intenta conectarse con la versión más nueva del protocolo (0.1.5). Si el servidor la rechaza por ser antigua, prueba con la 0.1.4 y después con la 0.1.3, así una misma app funciona con servidores que no se han actualizado.
- **Cada intento cuenta.** Cada intento de conexión tiene su propio límite de tiempo para autenticarse, y una conexión cancelada queda invalidada para que no afecte a la siguiente.
- **Cambios de servidor.** Cuando el servidor avisa que te está cambiando a otro (por ejemplo, en una red con proxy), la app espera a que termine el traslado antes de enviar nada y conserva el estado de la llamada.

## Pruebas

Los cambios llegan con pruebas nuevas de diseño, de accesibilidad del botón de presionar para hablar y de ajustes y notificaciones, además de más pruebas del protocolo para el orden de versiones y los tiempos de autenticación. En total, la rama `dev` suma unas 3,000 líneas nuevas en 41 archivos.

## Estado

La 1.1.0 es trabajo en progreso. Cuando se publique, la página del proyecto se actualiza con la nueva versión.

- [Todos los cambios de la rama dev](https://github.com/TheodoreMeyer/Svg-App/compare/main...dev)
- [El README de la rama dev](https://github.com/TheodoreMeyer/Svg-App/blob/dev/README.md)
