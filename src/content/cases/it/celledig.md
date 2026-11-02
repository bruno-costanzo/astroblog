---
name: Celledig Store
summary: Una vetrina web per un negozio di tecnologia a Viedma, in Argentina. I prezzi in pesos si aggiornano da soli con il dollaro del giorno, e gli ordini arrivano ancora su WhatsApp.
client: Celledig, negozio di tecnologia a Viedma
year: 2026
role: Design, sviluppo e gestione, da solo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, Kamal]
url: https://celledigstore.com.ar
order: 1
cover: ../../../assets/cases/celledig/home-desktop.webp
coverAlt: La home di celledigstore.com.ar con i dispositivi in evidenza
coverMobile: ../../../assets/cases/celledig/home-mobile.webp
before: "Il listino prezzi era un Excel di 130 dispositivi, mandato su WhatsApp e da rifare ogni volta che il dollaro si muoveva."
video:
  desktop: /cases/celledig/demo-desktop.mp4
  mobile: /cases/celledig/demo-mobile.mp4
  label: Dal catalogo all'ordine. Scegli un iPhone, inserisci i tuoi dati, scegli consegna e pagamento. L'ordine parte su WhatsApp. Il sito è in spagnolo.
features:
  - title: Un catalogo con filtri per ogni tipo di dispositivo
    body: >-
      Ogni categoria ha i suoi filtri. Per i telefoni: marca, memoria, colore, prezzo e condizione.
      Nelle console la RAM non compare. Se ci sono offerte, un avviso in alto dice quante sono e
      permette di vedere solo quelle.
    desktop: ../../../assets/cases/celledig/celulares-desktop.webp
    mobile: ../../../assets/cases/celledig/celulares-mobile.webp
    alt: Elenco di telefoni con filtri e avviso delle offerte
  - title: Una scheda, tre prezzi
    body: >-
      Colore, memoria e RAM si scelgono nella stessa scheda. Sotto il prezzo in dollari ci sono il prezzo
      in contanti e quello con bonifico, in pesos al cambio del giorno. Per gli usati si vedono la
      batteria, la garanzia che resta e le foto del dispositivo vero.
    desktop: ../../../assets/cases/celledig/modelo-desktop.webp
    mobile: ../../../assets/cases/celledig/modelo-mobile.webp
    alt: Scheda dell'iPhone 17 Pro Max con varianti e prezzi in dollari e pesos
  - title: L'ordine arriva pronto su WhatsApp
    body: >-
      Non c'è pagamento online e non c'è carrello, ed è voluto. Il modulo chiede solo il necessario:
      nome, email, documento, consegna e, se vuole, come paga il cliente. Quando lo invii si apre
      WhatsApp con l'ordine già scritto, pronto per la risposta del negozio.
    desktop: ../../../assets/cases/celledig/comprar-desktop.webp
    mobile: ../../../assets/cases/celledig/comprar-mobile.webp
    alt: Modulo d'ordine con il riepilogo del dispositivo scelto
  - title: Una valutazione per dare indietro l'iPhone usato
    body: >-
      Chi vuole dare indietro il suo iPhone inserisce il modello e lo stato, e riceve un codice. Una
      persona del negozio gli dà un prezzo dal pannello e risponde su WhatsApp. Quel valore poi si sconta
      dall'acquisto.
    desktop: ../../../assets/cases/celledig/cotizador-desktop.webp
    mobile: ../../../assets/cases/celledig/cotizador-mobile.webp
    alt: Modulo di valutazione per iPhone usati
  - title: Aggiungere un dispositivo nuovo con un link
    body: >-
      Nel pannello incolli il link della pagina ufficiale o scrivi il nome del dispositivo. In un paio di
      minuti arriva una bozza con scheda tecnica, descrizione e foto di ogni colore. Ogni dato dice da
      quale pagina viene. Quello che non si è potuto confermare finisce in un riquadro «Da controllare»,
      e niente viene pubblicato senza che una persona lo guardi.
    desktop: ../../../assets/cases/celledig/ia-desktop.webp
    mobile: ../../../assets/cases/celledig/ia-mobile.webp
    alt: Bozza di un dispositivo creata dalla pagina del produttore, con note da controllare
  - title: Tanti prezzi in una sola tabella
    body: >-
      Per cambiare i prezzi in blocco: filtri per tipo di dispositivo, modifichi i valori nella tabella e
      li salvi tutti con un pulsante.
    desktop: ../../../assets/cases/celledig/precios-desktop.webp
    mobile: ../../../assets/cases/celledig/precios-mobile.webp
    alt: Tabella per modificare i prezzi di ogni variante
  - title: La vetrina sulla TV del negozio
    body: >-
      Una pagina che resta aperta su uno schermo del negozio. Fa girare i dispositivi con il prezzo del
      giorno e un QR per comprarli dal telefono. Si aggiorna da sola ogni dieci minuti.
    desktop: ../../../assets/cases/celledig/vidriera-desktop.webp
    alt: Schermo della vetrina con un iPhone, il suo prezzo in dollari e pesos e un QR
---

## Il problema

Celledig è un negozio di Viedma, in Argentina, che vende telefoni, portatili, console e fotocamere, nuovi e usati. Il listino prezzi era un Excel con circa 130 dispositivi. Quando qualcuno chiedeva su WhatsApp, gli mandavano l'Excel.

Ogni dispositivo aveva un prezzo in dollari, uno in pesos al cambio del giorno e un altro con bonifico. Quando il dollaro si muoveva, bisognava rifare il listino. Il foglio non diceva nemmeno quanta batteria restava a un usato o se aveva la scatola, quindi quelle domande arrivavano tutto il giorno.

Il titolare non voleva vendere online. Voleva continuare a chiudere le vendite in negozio o in chat.

## Cosa abbiamo fatto

Un sito dove la gente cerca il dispositivo dal telefono, guarda le foto e la scheda, e tocca Compra. Si apre un modulo corto, e quando lo invii l'ordine completo arriva sul WhatsApp del negozio.

Ogni modello, per esempio «iPhone 15 128GB», si inserisce una volta. Poi si aggiungono le unità che ci sono in negozio. Gli usati hanno le loro foto, la loro batteria e la loro garanzia. Quando si vende un'unità, lo stock scende.

Il titolare inserisce il dollaro del giorno e i prezzi in pesos si ricalcolano. Per non scrivere 130 dispositivi a mano, all'inizio abbiamo importato l'Excel. Inventario e vendite si possono di nuovo scaricare in Excel quando serve.

## Com'è oggi

Il sito è online su [celledigstore.com.ar](https://celledigstore.com.ar). Il negozio aggiunge dispositivi, prezzi e offerte dal suo pannello, al computer o dal telefono.
