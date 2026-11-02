---
name: Lacaniosa
summary: El consultorio digital para la comunidad de psicólogos de Lacaniosa. Agenda, pacientes, notas de sesión, cobros y gastos en un solo lugar, pensado para los diez minutos entre un paciente y el siguiente.
client: Lacaniosa, comunidad de psicólogos en redes sociales
year: 2026
role: Producto, diseño y desarrollo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, Kamal]
url: https://lacaniosa.com
order: 2
cover: ../../assets/cases/lacaniosa/semana-desktop.webp
coverAlt: Vista semanal de la agenda de Lacaniosa con los turnos de cada día
coverMobile: ../../assets/cases/lacaniosa/agenda-mobile.webp
before: "Turnos en una agenda de papel, notas en un cuaderno, cobros en una planilla y arreglos con los pacientes en WhatsApp."
video:
  desktop: /cases/lacaniosa/demo-desktop.mp4
  mobile: /cases/lacaniosa/demo-mobile.mp4
  label: Un día de trabajo. La agenda, la semana, la ficha de una paciente, una nota de sesión y el resumen del mes. Todos los pacientes son de prueba.
features:
  - title: La agenda se arma sola
    body: >-
      Cada paciente tiene su día y horario habitual, cada semana o cada dos. La agenda crea los turnos.
      La vista del día muestra la próxima sesión, una línea con la hora actual y los cobros pendientes.
      La semana y el mes sirven para planificar. Cada paciente recibe un recordatorio por email un día
      antes.
    desktop: ../../assets/cases/lacaniosa/semana-desktop.webp
    mobile: ../../assets/cases/lacaniosa/agenda-mobile.webp
    alt: Agenda semanal en la computadora y agenda del día en el teléfono
  - title: Todo el paciente en una pantalla
    body: >-
      Datos de contacto, honorario, historia clínica con los campos que cada profesional necesita, saldo,
      últimos pagos, notas y sesiones. Para registrar un pago alcanza con un botón.
    desktop: ../../assets/cases/lacaniosa/paciente-desktop.webp
    mobile: ../../assets/cases/lacaniosa/paciente-mobile.webp
    alt: Ficha de una paciente con historia clínica, saldo y pagos
  - title: La nota de sesión, escrita o hablada
    body: >-
      La nota se abre desde el turno, apenas termina la sesión. Se escribe o se graba con el botón
      Grabar. El audio se transcribe y el texto se suma a la nota.
    desktop: ../../assets/cases/lacaniosa/nota-desktop.webp
    mobile: ../../assets/cases/lacaniosa/nota-mobile.webp
    alt: Pantalla de nota de sesión con el botón para grabar
  - title: Las cuentas del mes, sin planilla
    body: >-
      Ingresos, egresos y balance del mes. Los gastos que se repiten, como la supervisión, aparecen como
      vencimientos para confirmar. Abajo está quién debe sesiones y quién tiene saldo a favor.
    desktop: ../../assets/cases/lacaniosa/gestion-desktop.webp
    mobile: ../../assets/cases/lacaniosa/gestion-mobile.webp
    alt: Resumen del mes con ingresos, egresos, vencimientos y saldos de pacientes
  - title: Una tarjeta para compartir
    body: >-
      Una tarjeta profesional con nombre, foto y contacto, en varios diseños y colores. Se comparte con
      un link público o con un QR.
    desktop: ../../assets/cases/lacaniosa/tarjeta-desktop.webp
    mobile: ../../assets/cases/lacaniosa/tarjeta-mobile.webp
    alt: Editor de la tarjeta profesional con diseños y vista previa
---

## El problema

Lacaniosa es una comunidad de psicólogos que empezó en redes sociales. Querían darles a sus miembros algo útil para el trabajo de todos los días, además del contenido.

Un psicólogo con consultorio propio no suele tener secretaria. Los turnos estaban en una agenda de papel, las notas en un cuaderno, los arreglos con los pacientes en WhatsApp y las cuentas en una planilla.

Entre un paciente y el siguiente hay cinco o diez minutos. En ese rato hay que anotar lo que pasó en la sesión, ver quién viene o mover un turno, casi siempre desde el teléfono. La semana y las cuentas se revisan después, en la computadora.

Las notas, además, hablan de pacientes. Tienen que estar bien guardadas y no pueden quedar a la vista de cualquiera.

## Qué hicimos

Una app en español que anda igual en el teléfono y en la computadora. En el teléfono, lo que se hace seguido está a uno o dos toques. En la computadora se ve la semana entera y el balance del mes.

Los turnos se crean solos a partir del horario de cada paciente. Las notas se escriben o se graban, y quedan junto a la sesión. Cada paciente tiene su saldo, y el mes muestra ingresos, gastos y deudas. También hay un espacio para que los colegas se consulten entre ellos.

Las notas, las transcripciones y la historia clínica se guardan cifradas. Los audios solo los escucha quien los grabó. Todos los días se hace una copia de seguridad.

## Cómo está hoy

La app está en [lacaniosa.com](https://lacaniosa.com).
