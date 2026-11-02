---
name: UolDT
summary: Una nuova versione di UOL DT, il gioco argentino di manager di calcio che si giocava nel browser tra il 2003 e il 2006. Le partite si ascoltano in diretta, come alla radio.
client: Chi giocava a UOL DT e chi non l'ha mai conosciuto
year: 2026
role: Prodotto proprio. Design e sviluppo
stack: [Rust, Loco, PostgreSQL, htmx, WebAssembly, iOS e Android, Kamal]
order: 4
cover: ../../../assets/cases/uoldt/live-desktop.webp
coverAlt: Una partita in diretta di UolDT con il campo, il grafico del dominio e la radiocronaca
coverMobile: ../../../assets/cases/uoldt/live-mobile.webp
before: "UOL DT ha chiuso nel 2006. A marzo 2004 aveva già 26.000 squadre."
video:
  desktop: /cases/uoldt/demo-desktop.mp4
  mobile: /cases/uoldt/demo-mobile.mp4
  label: Dalla home del club alla partita in diretta, con il campo e la radiocronaca. Nella demo la partita va più veloce; nel gioco dura 15 minuti veri. Il gioco è in spagnolo.
features:
  - title: La partita, raccontata come alla radio
    body: >-
      Ogni partita si gioca in diretta per 15 minuti veri. Un radiocronista e un commentatore la
      raccontano azione per azione, con un campo disegnato e un grafico di chi domina. Chiunque può
      guardarla.
    desktop: ../../../assets/cases/uoldt/live-desktop.webp
    mobile: ../../../assets/cases/uoldt/live-mobile.webp
    alt: Partita in diretta con la cronaca minuto per minuto
  - title: Formazione e tattica
    body: >-
      Nove moduli e un ruolo per ogni posizione. L'allenatore sceglie stile, attacco, difesa, capitano e
      premio partita. «Miglior 11» fa la squadra con un tocco. La formazione si chiude 15 minuti prima
      del calcio d'inizio.
    desktop: ../../../assets/cases/uoldt/lineup-desktop.webp
    mobile: ../../../assets/cases/uoldt/lineup-mobile.webp
    alt: Scelta del modulo e campo con gli undici titolari
  - title: Pochi minuti al giorno
    body: >-
      La home mostra cosa c'è da fare oggi: la prossima partita, interviste, situazioni di spogliatoio,
      il giornale e la posizione in classifica. È pensato per giocarci pochi minuti al giorno.
    desktop: ../../../assets/cases/uoldt/dashboard-desktop.webp
    mobile: ../../../assets/cases/uoldt/dashboard-mobile.webp
    alt: Home del club con la prossima partita e le cose da fare nel giorno
  - title: Tornei a otto, con promozioni e retrocessioni
    body: >-
      Ogni torneo ha otto club e quattordici giornate. I primi due salgono di livello e gli ultimi due
      scendono. Ogni club ha il suo rivale per il derby.
    desktop: ../../../assets/cases/uoldt/league-desktop.webp
    mobile: ../../../assets/cases/uoldt/league-mobile.webp
    alt: Classifica di un torneo a otto club
  - title: Il giornale di ogni giornata
    body: >-
      «El Tablón» racconta ogni giornata con titoli, cronache e foto disegnate. Lo scrive un'IA con un
      budget giornaliero fisso. Se l'IA sbaglia o il budget finisce, lo scrivono dei modelli predefiniti.
    desktop: ../../../assets/cases/uoldt/diario-desktop.webp
    mobile: ../../../assets/cases/uoldt/diario-mobile.webp
    alt: Prima pagina di El Tablón con la cronaca di un derby
  - title: Il calciomercato
    body: >-
      Offerte, controfferte, scambi di giocatori, trattative con i procuratori e finestre di mercato.
    desktop: ../../../assets/cases/uoldt/market-desktop.webp
    mobile: ../../../assets/cases/uoldt/market-mobile.webp
    alt: Ricerca di giocatori nel calciomercato
---

## L'idea

UOL DT era un gioco argentino di manager di calcio che si giocava nel browser. È uscito nel 2003 e ha chiuso nel 2006. A marzo 2004 aveva 26.000 squadre.

UolDT è una versione nuova che sto facendo io. Non ha legami con UOL né con l'azienda originale. Ho raccolto quello che si sa delle regole del gioco originale e ho annotato, regola per regola, quale viene dall'originale e quale è nuova.

## Come funziona

Ogni allenatore ha un club con 13 giocatori e 5 giovani. Fa la formazione, allena, compra, vende e gioca i tornei. Un orologio sul server fa partire i tornei, gioca le partite e fa girare l'allenamento di ogni giorno.

Il motore delle partite è scritto in Rust e non dipende dal database né dall'orologio. Con le stesse formazioni e lo stesso seed, la partita viene sempre uguale. Così posso provarlo e regolarlo con migliaia di partite simulate.

Il gioco è in spagnolo argentino e in inglese, e funziona sul web, su iPhone e su Android.

## Com'è oggi

È in sviluppo e non ha ancora un indirizzo pubblico.
