---
name: Lacaniosa
summary: Lo studio digitale per la comunità di psicologi di Lacaniosa. Agenda, pazienti, note di seduta, incassi e spese in un solo posto, pensato per i dieci minuti tra un paziente e l'altro.
client: Lacaniosa, comunità di psicologi sui social
year: 2026
role: Prodotto, design e sviluppo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, Kamal]
url: https://lacaniosa.com
order: 2
cover: ../../../assets/cases/lacaniosa/semana-desktop.webp
coverAlt: Vista settimanale dell'agenda di Lacaniosa con gli appuntamenti di ogni giorno
coverMobile: ../../../assets/cases/lacaniosa/agenda-mobile.webp
before: "Appuntamenti su un'agenda di carta, note su un quaderno, incassi su un foglio di calcolo e accordi con i pazienti su WhatsApp."
video:
  desktop: /cases/lacaniosa/demo-desktop.mp4
  mobile: /cases/lacaniosa/demo-mobile.mp4
  label: Una giornata di lavoro. L'agenda, la settimana, la scheda di una paziente, una nota di seduta e il riepilogo del mese. Tutti i pazienti sono di prova. L'app è in spagnolo.
features:
  - title: L'agenda si compila da sola
    body: >-
      Ogni paziente ha il suo giorno e orario abituale, ogni settimana o ogni due. L'agenda crea gli
      appuntamenti. La vista del giorno mostra la prossima seduta, una linea all'ora attuale e gli
      incassi in sospeso. La settimana e il mese servono per pianificare. Ogni paziente riceve un
      promemoria via email il giorno prima.
    desktop: ../../../assets/cases/lacaniosa/semana-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/agenda-mobile.webp
    alt: Agenda settimanale al computer e agenda del giorno sul telefono
  - title: Tutto il paziente in una schermata
    body: >-
      Contatti, onorario, cartella clinica con i campi che servono a ogni professionista, saldo, ultimi
      pagamenti, note e sedute. Per registrare un pagamento basta un pulsante.
    desktop: ../../../assets/cases/lacaniosa/paciente-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/paciente-mobile.webp
    alt: Scheda di una paziente con cartella clinica, saldo e pagamenti
  - title: La nota di seduta, scritta o parlata
    body: >-
      La nota si apre dall'appuntamento, appena finisce la seduta. La scrivi, oppure tocchi Registra e
      parli. L'audio viene trascritto e il testo si aggiunge alla nota.
    desktop: ../../../assets/cases/lacaniosa/nota-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/nota-mobile.webp
    alt: Schermata della nota di seduta con il pulsante per registrare
  - title: I conti del mese, senza foglio di calcolo
    body: >-
      Entrate, uscite e saldo del mese. Le spese che si ripetono, come la supervisione, compaiono come
      scadenze da confermare. Sotto ci sono chi deve delle sedute e chi ha un credito.
    desktop: ../../../assets/cases/lacaniosa/gestion-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/gestion-mobile.webp
    alt: Riepilogo del mese con entrate, uscite, scadenze e saldi dei pazienti
  - title: Un biglietto da condividere
    body: >-
      Un biglietto da visita con nome, foto e contatti, in vari design e colori. Si condivide con un link
      pubblico o con un QR.
    desktop: ../../../assets/cases/lacaniosa/tarjeta-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/tarjeta-mobile.webp
    alt: Editor del biglietto da visita con i design e l'anteprima
---

## Il problema

Lacaniosa è una comunità di psicologi nata sui social. Volevano dare ai loro membri qualcosa di utile per il lavoro di tutti i giorni, oltre ai contenuti.

Uno psicologo con uno studio privato di solito non ha una segretaria. Gli appuntamenti erano su un'agenda di carta, le note su un quaderno, gli accordi con i pazienti su WhatsApp e i conti su un foglio di calcolo.

Tra un paziente e l'altro ci sono cinque o dieci minuti. In quel tempo devi scrivere cosa è successo nella seduta, vedere chi arriva o spostare un appuntamento, quasi sempre dal telefono. La settimana e i conti si guardano dopo, al computer.

Le note, poi, parlano di pazienti. Devono essere custodite bene e non possono restare sotto gli occhi di chiunque.

## Cosa abbiamo fatto

Un'app in spagnolo che funziona allo stesso modo sul telefono e sul computer. Sul telefono, quello che si fa spesso è a uno o due tocchi. Sul computer vedi tutta la settimana e il saldo del mese.

Gli appuntamenti si creano da soli a partire dall'orario di ogni paziente. Le note si scrivono o si registrano, e restano insieme alla seduta. Ogni paziente ha il suo saldo, e il mese mostra entrate, spese e debiti. C'è anche uno spazio dove i colleghi possono chiedersi consiglio.

Note, trascrizioni e cartelle cliniche sono salvate cifrate. Gli audio li può ascoltare solo chi li ha registrati. Ogni giorno si fa un backup.

## Com'è oggi

L'app è online su [lacaniosa.com](https://lacaniosa.com).
