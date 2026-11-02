---
name: Milprep
summary: Planifica las comidas de la semana de una casa. Todos comen el mismo plato, cada uno en su versión y con su porción, y la lista del súper sale sola.
client: Casas donde cada uno come distinto
year: 2026
role: Producto propio. Diseño y desarrollo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, iOS y Android, Kamal]
url: https://milprep.club
order: 3
cover: ../../assets/cases/milprep/semana-desktop.webp
coverAlt: Plan semanal de Milprep con las porciones de cada persona
coverMobile: ../../assets/cases/milprep/semana-mobile.webp
before: "Cada uno come distinto, y decidir qué cocinar, cuánto y qué comprar era la tarea de todos los domingos."
video:
  desktop: /cases/milprep/demo-desktop.mp4
  mobile: /cases/milprep/demo-mobile.mp4
  label: Anotar lo que se comió en texto libre, ver la semana, una receta y la lista del súper. Datos de prueba. En la demo, la respuesta de la IA está simulada.
features:
  - title: Un plato, varias versiones
    body: >-
      Todos comen el mismo plato. Si alguien es vegetariano, come la versión con lentejas o con soja de
      la misma comida. Se cocina una vez y se compra una vez.
    desktop: ../../assets/cases/milprep/semana-desktop.webp
    mobile: ../../assets/cases/milprep/semana-mobile.webp
    alt: Plan de la semana con la versión y la porción de cada persona
  - title: La porción justa para cada uno
    body: >-
      Cada persona carga una vez su edad, peso, actividad, objetivo y gustos. Con eso tiene un objetivo
      diario de calorías, proteínas y verduras, y las porciones se ajustan solas. Nadie cuenta calorías.
    desktop: ../../assets/cases/milprep/casa-desktop.webp
    mobile: ../../assets/cases/milprep/casa-mobile.webp
    alt: Integrantes de la casa con su dieta, objetivo y metas diarias
  - title: La lista del súper sale del plan
    body: >-
      La lista suma todas las recetas y versiones, redondea a unidades que se pueden comprar y agrupa por
      sector. Los tildes se comparten en la casa y la lista se manda por WhatsApp.
    desktop: ../../assets/cases/milprep/super-desktop.webp
    mobile: ../../assets/cases/milprep/super-mobile.webp
    alt: Lista del súper agrupada por sector, con cantidades y tildes
  - title: Lo que se comió de verdad, en una frase
    body: >-
      «Martín salió y comió pizza.» Con eso alcanza. La app marca quién no siguió el plan y anota lo que
      comió, con una estimación de sus nutrientes.
    desktop: ../../assets/cases/milprep/registro-desktop.webp
    mobile: ../../assets/cases/milprep/registro-mobile.webp
    alt: Cena registrada en texto libre en lugar del plato planificado
  - title: Hoy, para cada uno
    body: >-
      Cada persona ve lo que tenía planeado y lo que comió, en barras contra su objetivo del día.
    desktop: ../../assets/cases/milprep/hoy-desktop.webp
    mobile: ../../assets/cases/milprep/hoy-mobile.webp
    alt: Pantalla Hoy con las metas de cada persona y las comidas del día
  - title: Recetas para cocinar paso a paso
    body: >-
      Cada receta tiene tiempo, dificultad y nutrientes por versión. El modo cocina muestra un paso por
      pantalla, con temporizadores, y no deja que la pantalla se apague.
    desktop: ../../assets/cases/milprep/receta-desktop.webp
    mobile: ../../assets/cases/milprep/receta-mobile.webp
    alt: Receta de pollo grillado con arroz integral y brócoli
---

## El problema

En muchas casas cada uno come distinto. Uno es vegetariano, otro quiere bajar de peso, otro entrena y necesita más proteína. Pensar qué cocinar en la semana, cuánto y qué comprar lleva un buen rato cada domingo.

Las apps de dieta están pensadas para una persona. Las de recetas no saben quién come en tu casa.

## Qué hice

Milprep arma los almuerzos y las cenas de la semana para toda la casa, con recetas que la casa ya conoce. Todos comen el mismo plato, y cada uno tiene su versión y su porción.

La IA propone el plan con una sola llamada. Las porciones, los nutrientes y la lista del súper se calculan con fórmulas, sin IA.

Si algo cambia, se escribe en una frase, como «no tengo fideos» o «el sábado vienen dos amigos», y el plan se ajusta. Funciona en la web, en iPhone y en Android.

## Cómo está hoy

Está en [milprep.club](https://milprep.club). Por ahora se entra con invitación o desde la lista de espera.
