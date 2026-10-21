---
titulo: "Cómo reduje a un tercio el costo de cada mensaje de Nitori"
fecha: 2026-10-20
resumen: "Cada mensaje que recibe Nitori pasa por una llamada de unos 15,000 tokens. Reordenar la petición y agregar llaves de caché bajó su costo de unos 0.022 a unos 0.007 USD."
proyecto: nitori
---

Nitori, mi bot de Discord, entiende lenguaje natural. Para lograrlo, cada mensaje que le toca atender pasa primero por un **router**: una llamada al modelo que decide qué funciones ejecutar. Esa llamada resultó ser la parte más cara de todo el sistema, y arreglarlo fue más sencillo de lo que esperaba.

## El problema

El router recibe un texto fijo de instrucciones largas y un esquema JSON (juntos, entre 13,000 y 15,000 tokens) y, al final, un JSON corto con los datos del mensaje. Devuelve un plan tipado: qué funciones correr, con qué datos y en qué orden. Después, una segunda llamada escribe la respuesta y una tercera, pequeña, decide si reaccionar con un emoji.

Medí el uso real de cada llamada. En el router, casi nada se estaba leyendo desde caché: **128 tokens de unos 15,000**, con un costo de **alrededor de 0.022 USD por llamada**.

## Qué aprendí

La caché de prompts funciona por prefijo, en bloques de 128 tokens. Un token de entrada leído desde caché cuesta bastante menos que uno nuevo (con el precio actual de grok-4.3, unos 0.20 USD por millón frente a 1.25 USD). Eso significa que lo que importa es **qué tan largo es el prefijo que no cambia entre mensajes**, y que lo que sí cambia por mensaje debe ir al final.

## Qué cambié

- **Orden estable primero.** En el router, el texto fijo y el esquema van antes; el JSON del mensaje va al final. En la llamada de reacción, la lista de emojis va primero; en la de respuesta, el bloque de memoria del servidor se renderiza al último.
- **Una llave de caché por rol.** Cada petición envía un `prompt_cache_key` (router, respuesta, reacción) para que se enrute a un servidor que ya tiene ese prefijo.
- **Medición en cada llamada.** Cada llamada deja una línea de registro con los tokens de entrada, los leídos desde caché y el costo, por ejemplo:

```text
AI xAI usage role=nitori-router input=15356 cached=13952 output=1077 reasoning=300 cost_usd=0.0072
```

- **Pruebas para que no se rompa.** Cinco pruebas comprueban que la llave se envía y que las partes por mensaje van al final.

## El resultado

Con la caché caliente, midiendo en el servidor real:

| Llamada | Antes (sin caché) | Después (caché caliente) |
|---|---|---|
| Router | unos 15,000 tokens, 128 en caché, ~0.022 USD | ~91% en caché, ~0.007 USD |
| Respuesta | ~0.0062 a 0.0068 USD | ~0.0032 a 0.0041 USD |
| Reacción | ~0.0027 a 0.0032 USD | ~0.0014 USD |
| **Mensaje completo** | **~0.03 USD** | **~0.012 a 0.014 USD** |

El router, la parte más cara, pasó a costar cerca de **un tercio**, y el mensaje completo cuesta entre 55% y 60% menos.

## La salvedad

El ahorro no es inmediato. Un prefijo escrito por una llamada tarda unos minutos en poder leerse: en los registros, llamadas hechas 27 segundos y unos 2 minutos después de la primera todavía leían solo 128 tokens, mientras que las hechas minutos después leían unos 14,000 de 15,000. En la práctica, los primeros mensajes después de un rato de inactividad o de un reinicio pagan el precio completo, y una conversación que continúa varios minutos paga el precio bajo. Todavía no medí cuánto tiempo se mantiene caliente un prefijo.

## Lo que no hice

El esquema del router todavía carga objetos de compatibilidad duplicados. Reducirlo recortaría aún más los tokens de salida, pero es un cambio más grande, así que lo dejé para después. El orden y las llaves eran cambios pequeños y seguros.

## Dónde ver el código

Estos cambios están en la rama `dev` de Nitori, que todavía es trabajo en progreso.

- [El commit con las llaves de caché y el nuevo orden](https://github.com/pbarrera813/Discord-bot/commit/07868f8)
- [El cliente de xAI](https://github.com/pbarrera813/Discord-bot/blob/dev/services/xai_client.py)
- [Las pruebas de caché](https://github.com/pbarrera813/Discord-bot/blob/dev/tests/test_xai_cache_usage.py)
