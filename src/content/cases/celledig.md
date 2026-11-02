---
name: Celledig Store
summary: Una vidriera web para un local de tecnología de Viedma. Los precios en pesos se recalculan solos con el dólar del día, y los pedidos siguen llegando por WhatsApp.
client: Celledig, local de tecnología en Viedma
year: 2026
role: Diseño, desarrollo y operación, solo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, Kamal]
url: https://celledigstore.com.ar
order: 1
cover: ../../assets/cases/celledig/home-desktop.webp
coverAlt: Portada de celledigstore.com.ar con los equipos destacados
coverMobile: ../../assets/cases/celledig/home-mobile.webp
before: "La lista de precios era un Excel de 130 equipos que se mandaba por WhatsApp y había que rehacer cada vez que se movía el dólar."
video:
  desktop: /cases/celledig/demo-desktop.mp4
  mobile: /cases/celledig/demo-mobile.mp4
  label: Del catálogo al pedido. Elegir un iPhone, completar los datos y elegir entrega y forma de pago. El pedido sale por WhatsApp.
features:
  - title: Un catálogo con filtros por tipo de equipo
    body: >-
      Cada categoría tiene sus propios filtros. En celulares: marca, almacenamiento, color, precio y
      estado. En consolas no aparece la RAM. Si hay ofertas, un aviso arriba dice cuántas son y deja ver
      solo esas.
    desktop: ../../assets/cases/celledig/celulares-desktop.webp
    mobile: ../../assets/cases/celledig/celulares-mobile.webp
    alt: Listado de celulares con filtros y aviso de ofertas
  - title: La ficha con los tres precios
    body: >-
      Color, capacidad y RAM se eligen en la misma ficha. Debajo del precio en dólares están el precio en
      efectivo y el precio con transferencia, al dólar del día. En los usados se ven la batería, la
      garantía que le queda y fotos del equipo real.
    desktop: ../../assets/cases/celledig/modelo-desktop.webp
    mobile: ../../assets/cases/celledig/modelo-mobile.webp
    alt: Ficha del iPhone 17 Pro Max con variantes y precios en dólares y pesos
  - title: El pedido llega armado por WhatsApp
    body: >-
      No hay pago online ni carrito, y es a propósito. El formulario pide lo justo: nombre, email, DNI,
      entrega y, si quiere, cómo paga. Al enviarlo se abre WhatsApp con el pedido escrito, listo para que
      el local conteste.
    desktop: ../../assets/cases/celledig/comprar-desktop.webp
    mobile: ../../assets/cases/celledig/comprar-mobile.webp
    alt: Formulario de compra con el resumen del equipo elegido
  - title: Un cotizador para entregar el iPhone usado
    body: >-
      Quien quiere entregar su iPhone completa el modelo y el estado, y recibe un código. Una persona
      del local le pone precio desde el panel y le contesta por WhatsApp. Ese valor después se descuenta
      de la compra.
    desktop: ../../assets/cases/celledig/cotizador-desktop.webp
    mobile: ../../assets/cases/celledig/cotizador-mobile.webp
    alt: Formulario del cotizador de iPhones usados
  - title: Cargar un equipo nuevo con un link
    body: >-
      En el panel se pega el link de la página oficial o se escribe el nombre del equipo. En uno o dos
      minutos llega un borrador con la ficha técnica, la descripción y las fotos de cada color. Cada dato
      dice de qué página salió. Lo que no se pudo confirmar queda en una caja «Para revisar», y nada se
      publica sin que alguien lo mire.
    desktop: ../../assets/cases/celledig/ia-desktop.webp
    mobile: ../../assets/cases/celledig/ia-mobile.webp
    alt: Borrador de un equipo generado desde la página del fabricante, con notas para revisar
  - title: Muchos precios en una sola tabla
    body: >-
      Para cambiar precios en bloque: se filtra por tipo de equipo, se editan los valores en la tabla y
      se guardan todos con un botón.
    desktop: ../../assets/cases/celledig/precios-desktop.webp
    mobile: ../../assets/cases/celledig/precios-mobile.webp
    alt: Tabla de edición de precios por variante
  - title: La vidriera en la tele del local
    body: >-
      Una página que queda abierta en una pantalla del local. Rota los equipos con el precio del día y
      un QR para comprarlos desde el teléfono. Se actualiza sola cada diez minutos.
    desktop: ../../assets/cases/celledig/vidriera-desktop.webp
    alt: Pantalla de la vidriera con un iPhone, su precio en dólares y pesos y un QR
---

## El problema

Celledig es un local de Viedma que vende celulares, notebooks, consolas y cámaras, nuevos y usados. La lista de precios estaba en un Excel con unos 130 equipos. Cuando alguien preguntaba por WhatsApp, le mandaban el Excel.

Cada equipo tenía un precio en dólares, uno en pesos al dólar del día y otro con transferencia. Cuando se movía el dólar, había que rehacer la lista. La planilla tampoco decía cuánta batería le quedaba a un usado o si tenía caja, así que esas preguntas llegaban todo el día.

El dueño no quería vender online. Quería seguir cerrando las ventas en el local o por chat.

## Qué hicimos

Una web donde la gente busca el equipo desde el teléfono, mira las fotos y la ficha, y toca Comprar. Se abre un formulario corto, y al enviarlo el pedido completo llega al WhatsApp del local.

Cada modelo, por ejemplo «iPhone 15 128GB», se carga una vez. Después se suman las unidades que hay en el local. Los usados tienen sus propias fotos, su batería y su garantía. Cuando se vende una unidad, el stock baja.

El dueño carga el dólar del día y los precios en pesos se recalculan. Para no cargar 130 equipos a mano, al principio importamos el Excel. El inventario y las ventas se pueden volver a bajar en Excel cuando haga falta.

## Cómo está hoy

La web está en [celledigstore.com.ar](https://celledigstore.com.ar). El local carga equipos, precios y ofertas desde su panel, en la computadora o en el teléfono.
