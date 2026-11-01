---
name: UolDT
summary: A new version of UOL DT, the Argentine football-manager game played in the browser between 2003 and 2006. Matches play live, narrated like a radio broadcast.
client: People who played UOL DT, and people who never did
year: 2026
role: Own product. Design and development
stack: [Rust, Loco, PostgreSQL, htmx, WebAssembly, iOS and Android, Kamal]
order: 4
cover: ../../../assets/cases/uoldt/live-desktop.webp
coverAlt: A live UolDT match with the pitch, the momentum chart and the radio commentary
coverMobile: ../../../assets/cases/uoldt/live-mobile.webp
before: "UOL DT closed in 2006. By March 2004 it already had 26,000 teams."
video:
  desktop: /cases/uoldt/demo-desktop.mp4
  mobile: /cases/uoldt/demo-mobile.mp4
  label: From the club's home to a live match, with the pitch and the commentary. The demo match runs faster; in the game it lasts 15 real minutes. The game is in Spanish.
features:
  - title: The match, narrated like the radio
    body: >-
      Every match plays live over 15 real minutes. A play-by-play announcer and a commentator call it
      move by move, with a drawn pitch and a chart of who is on top. Anyone can watch.
    desktop: ../../../assets/cases/uoldt/live-desktop.webp
    mobile: ../../../assets/cases/uoldt/live-mobile.webp
    alt: Live match with minute-by-minute commentary
  - title: Lineup and tactics
    body: >-
      Nine formations and a role for each position. The manager picks style, attack, defence, captain
      and a win bonus. "Best XI" picks the team in one tap. The lineup locks 15 minutes before kick-off.
    desktop: ../../../assets/cases/uoldt/lineup-desktop.webp
    mobile: ../../../assets/cases/uoldt/lineup-mobile.webp
    alt: Formation picker and pitch with the starting eleven
  - title: A few minutes a day
    body: >-
      The home screen shows what to do today: the next match, interviews, dressing-room situations, the
      newspaper and the league position. It is designed to be played a few minutes a day.
    desktop: ../../../assets/cases/uoldt/dashboard-desktop.webp
    mobile: ../../../assets/cases/uoldt/dashboard-mobile.webp
    alt: Club home with the next match and the day's tasks
  - title: Eight-club leagues, with promotion and relegation
    body: >-
      Each league has eight clubs and fourteen matchdays. The top two go up a level and the bottom two
      go down. Every club has a derby rival.
    desktop: ../../../assets/cases/uoldt/league-desktop.webp
    mobile: ../../../assets/cases/uoldt/league-mobile.webp
    alt: League table with eight clubs
  - title: A newspaper for every matchday
    body: >-
      "El Tablón" covers each matchday with headlines, match reports and drawn photos. An AI writes it
      within a fixed daily budget. If the AI fails or the budget runs out, templates write it.
    desktop: ../../../assets/cases/uoldt/diario-desktop.webp
    mobile: ../../../assets/cases/uoldt/diario-mobile.webp
    alt: Front page of El Tablón with the report of a derby
  - title: The transfer market
    body: >-
      Offers, counter-offers, player swaps, negotiations with agents and transfer windows.
    desktop: ../../../assets/cases/uoldt/market-desktop.webp
    mobile: ../../../assets/cases/uoldt/market-mobile.webp
    alt: Player search in the transfer market
---

## The idea

UOL DT was an Argentine football-manager game played in the browser. It launched in 2003 and closed in 2006. By March 2004 it already had 26,000 teams.

UolDT builds it again, with no link to UOL or the original company. What is known about the original rules is documented, and every rule says whether it comes from the original or is new design.

## How it is built

Each manager runs a club: 13 players and 5 youth players. They set the lineup, train, buy and sell, and play leagues. A clock on the server starts leagues, plays matches and runs each day's training.

- **A predictable match engine.** The engine is written in Rust and does not depend on the database or the clock. The same lineups with the same seed always give the same match. That makes it possible to test and calibrate it with thousands of simulated matches.
- **All text in language files.** The game is in Argentine Spanish and in English. A test fails if a language is missing a text.
- **Web, iPhone and Android** from the same screens.

It is in development.
