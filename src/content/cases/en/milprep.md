---
name: Milprep
summary: Plans a household's meals for the week. Everyone eats the same dish, each in their own version and portion, and the shopping list writes itself.
client: Households where everyone eats differently
year: 2026
role: Own product. Design and development
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, RubyLLM, iOS and Android, Kamal]
url: https://milprep.club
order: 3
cover: ../../../assets/cases/milprep/semana-desktop.webp
coverAlt: Milprep's weekly plan with each person's portions
coverMobile: ../../../assets/cases/milprep/semana-mobile.webp
before: "Everyone eats differently, and deciding what to cook, how much and what to buy was a chore every Sunday."
video:
  desktop: /cases/milprep/demo-desktop.mp4
  mobile: /cases/milprep/demo-mobile.mp4
  label: Logging what was eaten in plain text, the week, a recipe and the shopping list. Test data. In the demo, the AI's answer is simulated. The app is in Spanish.
features:
  - title: One dish, several versions
    body: >-
      Everyone eats the same dish. A vegetarian gets the lentil or soy version of the same meal. You cook
      once and shop once.
    desktop: ../../../assets/cases/milprep/semana-desktop.webp
    mobile: ../../../assets/cases/milprep/semana-mobile.webp
    alt: Weekly plan with each person's version and portion
  - title: The right portion for each person
    body: >-
      Each person enters their age, weight, activity, goal and tastes once. That gives a daily target
      for calories, protein and vegetables, and portions adjust on their own. Nobody counts calories.
    desktop: ../../../assets/cases/milprep/casa-desktop.webp
    mobile: ../../../assets/cases/milprep/casa-mobile.webp
    alt: Household members with their diet, goal and daily targets
  - title: The shopping list comes from the plan
    body: >-
      The list adds up every recipe and version, rounds to units you can buy and groups items by aisle.
      Ticks are shared across the household, and the list can be sent on WhatsApp.
    desktop: ../../../assets/cases/milprep/super-desktop.webp
    mobile: ../../../assets/cases/milprep/super-mobile.webp
    alt: Shopping list grouped by aisle, with quantities and ticks
  - title: What was really eaten, in one sentence
    body: >-
      "Martín went out and had pizza." That is enough. The app marks who skipped the plan and logs what
      they ate, with an estimate of its nutrients.
    desktop: ../../../assets/cases/milprep/registro-desktop.webp
    mobile: ../../../assets/cases/milprep/registro-mobile.webp
    alt: Dinner logged in plain text instead of the planned dish
  - title: Today, for each person
    body: >-
      Each person sees what was planned and what they ate, as bars against their daily target.
    desktop: ../../../assets/cases/milprep/hoy-desktop.webp
    mobile: ../../../assets/cases/milprep/hoy-mobile.webp
    alt: Today screen with each person's targets and the day's meals
  - title: Recipes to cook step by step
    body: >-
      Each recipe has time, difficulty and nutrients per version. Cook mode shows one step per screen,
      with timers, and keeps the screen awake.
    desktop: ../../../assets/cases/milprep/receta-desktop.webp
    mobile: ../../../assets/cases/milprep/receta-mobile.webp
    alt: Recipe for grilled chicken with brown rice and broccoli
---

## The problem

In many households everyone eats differently. One person is vegetarian, another wants to lose weight, another trains and needs more protein. Working out what to cook for the week, how much and what to buy takes a good while every Sunday.

Diet apps are made for one person. Recipe apps don't know who eats at your table.

## What I built

Milprep plans the week's lunches and dinners for the whole household, with recipes the household already knows. Everyone eats the same dish, and each person gets their own version and portion.

The AI proposes the plan in a single call. Portions, nutrients and the shopping list are calculated with formulas, without AI.

If something changes, you write it in a sentence, like "I have no pasta" or "two friends are coming on Saturday", and the plan adjusts. It works on the web, on iPhone and on Android.

## Where it is today

It is live at [milprep.club](https://milprep.club). For now, access is by invitation or from the waitlist.
