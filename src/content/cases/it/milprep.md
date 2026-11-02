---
name: Milprep
summary: Pianifica i pasti della settimana di una casa. Tutti mangiano lo stesso piatto, ognuno nella sua versione e con la sua porzione, e la lista della spesa si fa da sola.
client: Case dove ognuno mangia in modo diverso
year: 2026
role: Prodotto proprio. Design e sviluppo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, iOS e Android, Kamal]
url: https://milprep.club
order: 3
cover: ../../../assets/cases/milprep/semana-desktop.webp
coverAlt: Piano settimanale di Milprep con le porzioni di ogni persona
coverMobile: ../../../assets/cases/milprep/semana-mobile.webp
before: "Ognuno mangia in modo diverso, e decidere cosa cucinare, quanto e cosa comprare era il compito di ogni domenica."
video:
  desktop: /cases/milprep/demo-desktop.mp4
  mobile: /cases/milprep/demo-mobile.mp4
  label: Scrivere cosa si è mangiato in testo libero, la settimana, una ricetta e la lista della spesa. Dati di prova. Nella demo, la risposta dell'IA è simulata. L'app è in spagnolo.
features:
  - title: Un piatto, più versioni
    body: >-
      Tutti mangiano lo stesso piatto. Chi è vegetariano mangia la versione con lenticchie o con soia
      dello stesso pasto. Si cucina una volta e si fa la spesa una volta.
    desktop: ../../../assets/cases/milprep/semana-desktop.webp
    mobile: ../../../assets/cases/milprep/semana-mobile.webp
    alt: Piano della settimana con la versione e la porzione di ogni persona
  - title: La porzione giusta per ognuno
    body: >-
      Ogni persona inserisce una volta età, peso, attività, obiettivo e gusti. Con questo ha un obiettivo
      giornaliero di calorie, proteine e verdure, e le porzioni si regolano da sole. Nessuno conta le
      calorie.
    desktop: ../../../assets/cases/milprep/casa-desktop.webp
    mobile: ../../../assets/cases/milprep/casa-mobile.webp
    alt: Membri della casa con la loro dieta, il loro obiettivo e i target giornalieri
  - title: La lista della spesa esce dal piano
    body: >-
      La lista somma tutte le ricette e le versioni, arrotonda a quantità che si possono comprare e
      raggruppa per reparto. Le spunte sono condivise in casa, e la lista si manda su WhatsApp.
    desktop: ../../../assets/cases/milprep/super-desktop.webp
    mobile: ../../../assets/cases/milprep/super-mobile.webp
    alt: Lista della spesa raggruppata per reparto, con quantità e spunte
  - title: Cosa si è mangiato davvero, in una frase
    body: >-
      «Martín è uscito e ha mangiato una pizza.» Basta questo. L'app segna chi non ha seguito il piano e
      registra cosa ha mangiato, con una stima dei nutrienti.
    desktop: ../../../assets/cases/milprep/registro-desktop.webp
    mobile: ../../../assets/cases/milprep/registro-mobile.webp
    alt: Cena registrata in testo libero al posto del piatto previsto
  - title: Oggi, per ognuno
    body: >-
      Ogni persona vede cosa era previsto e cosa ha mangiato, in barre rispetto al suo obiettivo del
      giorno.
    desktop: ../../../assets/cases/milprep/hoy-desktop.webp
    mobile: ../../../assets/cases/milprep/hoy-mobile.webp
    alt: Schermata Oggi con gli obiettivi di ogni persona e i pasti del giorno
  - title: Ricette da cucinare passo dopo passo
    body: >-
      Ogni ricetta ha tempo, difficoltà e nutrienti per versione. La modalità cucina mostra un passo per
      schermata, con i timer, e non lascia spegnere lo schermo.
    desktop: ../../../assets/cases/milprep/receta-desktop.webp
    mobile: ../../../assets/cases/milprep/receta-mobile.webp
    alt: Ricetta di pollo alla griglia con riso integrale e broccoli
---

## Il problema

In tante case ognuno mangia in modo diverso. Uno è vegetariano, un altro vuole dimagrire, un altro si allena e ha bisogno di più proteine. Pensare cosa cucinare nella settimana, quanto e cosa comprare porta via un bel po' di tempo ogni domenica.

Le app di dieta sono pensate per una persona sola. Quelle di ricette non sanno chi mangia a casa tua.

## Cosa ho fatto

Milprep prepara i pranzi e le cene della settimana per tutta la casa, con ricette che la casa conosce già. Tutti mangiano lo stesso piatto, e ognuno ha la sua versione e la sua porzione.

L'IA propone il piano con una sola chiamata. Porzioni, nutrienti e lista della spesa si calcolano con formule, senza IA.

Se qualcosa cambia, lo scrivi in una frase, tipo «non ho la pasta» o «sabato vengono due amici», e il piano si adatta. Funziona sul web, su iPhone e su Android.

## Com'è oggi

È online su [milprep.club](https://milprep.club). Per ora si entra con un invito o dalla lista d'attesa.
