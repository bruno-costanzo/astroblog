---
name: UolDT
summary: Una nueva versión de UOL DT, el juego argentino de manager de fútbol que se jugaba en el navegador entre 2003 y 2006. Los partidos se escuchan como en la radio, en vivo.
client: Quienes jugaban UOL DT y quienes nunca lo conocieron
year: 2026
role: Producto propio. Diseño y desarrollo
stack: [Rust, Loco, PostgreSQL, htmx, WebAssembly, iOS y Android, Kamal]
order: 4
cover: ../../assets/cases/uoldt/live-desktop.webp
coverAlt: Partido en vivo de UolDT con la cancha, el gráfico de dominio y el relato de la radio
coverMobile: ../../assets/cases/uoldt/live-mobile.webp
before: "UOL DT cerró en 2006. En marzo de 2004 ya tenía 26.000 equipos."
video:
  desktop: /cases/uoldt/demo-desktop.mp4
  mobile: /cases/uoldt/demo-mobile.mp4
  label: Del inicio del club al partido en vivo, con la cancha y el relato. En la demo el partido corre más rápido; en el juego dura 15 minutos reales.
features:
  - title: El partido, relatado como en la radio
    body: >-
      Cada partido se juega en vivo durante 15 minutos reales. Un relator y un comentarista lo cuentan
      jugada a jugada, con una cancha dibujada y un gráfico de quién domina. Cualquiera puede mirarlo.
    desktop: ../../assets/cases/uoldt/live-desktop.webp
    mobile: ../../assets/cases/uoldt/live-mobile.webp
    alt: Partido en vivo con el relato minuto a minuto
  - title: La formación y la táctica
    body: >-
      Nueve formaciones y un rol para cada puesto. El técnico elige estilo, ataque, defensa, capitán y
      premio por ganar. «Mejor 11» arma el equipo con un toque. La formación se cierra 15 minutos antes
      del partido.
    desktop: ../../assets/cases/uoldt/lineup-desktop.webp
    mobile: ../../assets/cases/uoldt/lineup-mobile.webp
    alt: Selector de formación y cancha con los once titulares
  - title: Unos minutos por día
    body: >-
      El inicio muestra lo que hay que hacer hoy: el próximo partido, entrevistas, situaciones del
      vestuario, el diario y la posición en la tabla. Está pensado para jugar unos minutos por día.
    desktop: ../../assets/cases/uoldt/dashboard-desktop.webp
    mobile: ../../assets/cases/uoldt/dashboard-mobile.webp
    alt: Inicio del club con el próximo partido y las tareas del día
  - title: Torneos de ocho, con ascensos y descensos
    body: >-
      Cada torneo tiene ocho clubes y catorce fechas. Los dos primeros suben de nivel y los dos últimos
      bajan. Cada club tiene su rival de clásico.
    desktop: ../../assets/cases/uoldt/league-desktop.webp
    mobile: ../../assets/cases/uoldt/league-mobile.webp
    alt: Tabla de posiciones de un torneo de ocho clubes
  - title: El diario de cada fecha
    body: >-
      «El Tablón» cuenta cada fecha con titulares, crónicas y fotos dibujadas. Lo escribe una IA con un
      presupuesto diario fijo. Si la IA falla o se termina el presupuesto, lo escriben plantillas.
    desktop: ../../assets/cases/uoldt/diario-desktop.webp
    mobile: ../../assets/cases/uoldt/diario-mobile.webp
    alt: Tapa del diario El Tablón con la crónica de un clásico
  - title: El mercado de pases
    body: >-
      Ofertas, contraofertas, intercambio de jugadores, negociación con representantes y ventanas de
      pases.
    desktop: ../../assets/cases/uoldt/market-desktop.webp
    mobile: ../../assets/cases/uoldt/market-mobile.webp
    alt: Búsqueda de jugadores en el mercado de pases
---

## La idea

UOL DT era un juego argentino de manager de fútbol que se jugaba en el navegador. Salió en 2003 y cerró en 2006. En marzo de 2004 tenía 26.000 equipos.

UolDT es una versión nueva que estoy haciendo yo. No tiene relación con UOL ni con la empresa original. Junté lo que se sabe de las reglas del juego original y anoté, regla por regla, cuál viene del original y cuál es nueva.

## Cómo funciona

Cada técnico tiene un club con 13 jugadores y 5 juveniles. Arma la formación, entrena, compra, vende y juega torneos. Un reloj en el servidor arranca los torneos, juega los partidos y corre el entrenamiento de cada día.

El motor de partidos está escrito en Rust y no depende de la base de datos ni del reloj. Con las mismas formaciones y la misma semilla, el partido sale siempre igual. Así lo puedo probar y ajustar con miles de partidos simulados.

El juego está en castellano de Argentina y en inglés, y anda en la web, en iPhone y en Android.

## Cómo está hoy

Está en desarrollo y todavía no tiene una dirección pública.
