---
name: Lacaniosa
summary: An online practice for the Lacaniosa community of psychologists. Schedule, patients, session notes, payments and expenses in one place, built for the ten minutes between one patient and the next.
client: Lacaniosa, a social media community of psychologists
year: 2026
role: Product, design and development
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, Kamal]
url: https://lacaniosa.com
order: 2
cover: ../../../assets/cases/lacaniosa/semana-desktop.webp
coverAlt: Lacaniosa's weekly schedule with each day's sessions
video:
  desktop: /cases/lacaniosa/demo-desktop.mp4
  mobile: /cases/lacaniosa/demo-mobile.mp4
  label: A working day. The schedule, the week, a patient's file, a session note and the month's summary. All patients are test data. The app is in Spanish.
features:
  - title: The schedule builds itself
    body: >-
      Each patient has a usual day and time, every week or every two weeks. The schedule creates the
      sessions. The day view shows the next session, a line at the current time and payments still due.
      The week and month views are for planning. Each patient gets an email reminder the day before.
    desktop: ../../../assets/cases/lacaniosa/semana-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/agenda-mobile.webp
    alt: Weekly schedule on a computer and the day's schedule on a phone
  - title: The whole patient on one screen
    body: >-
      Contact details, fee, a clinical history with the fields each professional needs, balance, recent
      payments, notes and sessions. Recording a payment takes one button.
    desktop: ../../../assets/cases/lacaniosa/paciente-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/paciente-mobile.webp
    alt: Patient file with clinical history, balance and payments
  - title: Session notes, typed or spoken
    body: >-
      The note opens from the session, right after it ends. Type it, or tap Record and speak. The audio
      is transcribed and the text is added to the note.
    desktop: ../../../assets/cases/lacaniosa/nota-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/nota-mobile.webp
    alt: Session note screen with the record button
  - title: The month's numbers, without a spreadsheet
    body: >-
      Income, expenses and the month's balance. Recurring costs, like supervision, show up as due items
      to confirm. Below are the patients who owe sessions and the ones with credit.
    desktop: ../../../assets/cases/lacaniosa/gestion-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/gestion-mobile.webp
    alt: Month summary with income, expenses, due items and patient balances
  - title: A card to share
    body: >-
      A professional card with name, photo and contact details, in several designs and colours. Share it
      with a public link or a QR code.
    desktop: ../../../assets/cases/lacaniosa/tarjeta-desktop.webp
    mobile: ../../../assets/cases/lacaniosa/tarjeta-mobile.webp
    alt: Professional card editor with designs and a preview
---

## The problem

Lacaniosa is a community of psychologists that started on social media. It wanted to give its members a tool for their daily work, not only content.

A psychologist in private practice runs it alone. There is no assistant. The information about the work was spread out: sessions in a paper diary, notes in a notebook, arrangements with patients in WhatsApp, money in a spreadsheet, and the rest in their head.

And the time to keep all of that in order is short. Between one patient and the next there are five or ten minutes, often standing up with a phone in hand. That is when the note gets written, the next patient checked, a session moved or a payment recorded. At the end of the week, at a computer, it is time to review the schedule and do the accounts.

There is one more condition: what gets written belongs to someone else. The notes are about patients who did not choose to be in the app. They have to be stored with care, and they must not show up on a screen someone glances at by chance.

## The solution

One app, in Spanish, that works the same on a phone and on a computer. On the phone, frequent tasks take one or two taps. On the computer there is room to see the full week and the month's balance.

- **Sessions created automatically** from each patient's usual time.
- **Text or voice notes**, kept with the session.
- **Clear accounts:** each patient has a balance, and the month shows income, expenses and debts.
- **A community space**, where colleagues can ask each other for advice without exposing themselves.
- **Private by default.** Notes, transcripts and clinical histories are stored encrypted. Only the person who recorded an audio note can play it. There is a backup every day.

The app is live at [lacaniosa.com](https://lacaniosa.com).
