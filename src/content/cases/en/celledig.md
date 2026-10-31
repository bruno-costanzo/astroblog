---
name: Celledig Store
summary: A web storefront for a tech shop in Viedma, Argentina. It replaces the Excel price list the shop sent over WhatsApp, without changing how the shop sells.
client: Celledig, a tech shop in Viedma
year: 2026
role: Design, development and operations, solo
stack: [Ruby on Rails 8, Hotwire, SQLite, Tailwind, Kamal]
url: https://celledigstore.com.ar
order: 1
cover: ../../../assets/cases/celledig/home-desktop.webp
coverAlt: The celledigstore.com.ar home page with featured devices
video:
  desktop: /cases/celledig/demo-desktop.mp4
  mobile: /cases/celledig/demo-mobile.mp4
  label: From the catalog to the order. Pick an iPhone, fill in your details, choose delivery and payment. The order goes out over WhatsApp. The site is in Spanish.
features:
  - title: A catalog with filters for each kind of device
    body: >-
      Each category has its own filters. For phones: brand, storage, colour, price and condition.
      Consoles do not show RAM. When there are offers, a notice at the top says how many and shows only
      those.
    desktop: ../../../assets/cases/celledig/celulares-desktop.webp
    mobile: ../../../assets/cases/celledig/celulares-mobile.webp
    alt: Phone listing with filters and an offers notice
  - title: One page, three prices
    body: >-
      Colour, storage and RAM are picked on the same page. Under the price in dollars are the cash and
      bank transfer prices in pesos, at today's exchange rate. Used devices show battery health, the
      warranty left and photos of the actual device.
    desktop: ../../../assets/cases/celledig/modelo-desktop.webp
    mobile: ../../../assets/cases/celledig/modelo-mobile.webp
    alt: iPhone 17 Pro Max page with variants and prices in dollars and pesos
  - title: The order arrives ready on WhatsApp
    body: >-
      There is no online payment and no cart, on purpose. The form asks only for what the shop needs:
      name, email, ID number, delivery and, optionally, how the customer will pay. Sending it opens
      WhatsApp with the order written out.
    desktop: ../../../assets/cases/celledig/comprar-desktop.webp
    mobile: ../../../assets/cases/celledig/comprar-mobile.webp
    alt: Order form with a summary of the chosen device
  - title: A trade-in quote for used iPhones
    body: >-
      A customer who wants to trade in an iPhone enters the model and its condition and gets a code.
      Someone at the shop prices it from the admin panel and answers on WhatsApp. That value is then
      taken off the purchase.
    desktop: ../../../assets/cases/celledig/cotizador-desktop.webp
    mobile: ../../../assets/cases/celledig/cotizador-mobile.webp
    alt: Trade-in quote form for used iPhones
  - title: Add a new device from a link
    body: >-
      In the admin panel, paste the link to the official product page or type the device name. In a
      minute or two a draft arrives with specs, description and photos for each colour. Every value says
      which page it came from. Anything that could not be confirmed goes into a "To review" box, and
      nothing is published until a person checks it.
    desktop: ../../../assets/cases/celledig/ia-desktop.webp
    mobile: ../../../assets/cases/celledig/ia-mobile.webp
    alt: Device draft built from the manufacturer's page, with notes to review
  - title: Many prices in one table
    body: >-
      To change prices in bulk: filter by kind of device, edit the values in the table and save them all
      with one button.
    desktop: ../../../assets/cases/celledig/precios-desktop.webp
    mobile: ../../../assets/cases/celledig/precios-mobile.webp
    alt: Price editing table by variant
  - title: The storefront on the shop's TV
    body: >-
      A page that stays open on a screen in the shop. It rotates devices with today's price and a QR
      code to buy from a phone. It refreshes itself every ten minutes.
    desktop: ../../../assets/cases/celledig/vidriera-desktop.webp
    alt: Storefront screen with an iPhone, its price in dollars and pesos, and a QR code
---

## The problem

Celledig sells phones, laptops, consoles and cameras, new and used, from a shop in the centre of Viedma. The price list lived in an Excel file with about 130 devices. When someone asked, the Excel file went out over WhatsApp.

That caused three problems:

- **Prices changed every day.** Each device has a price in dollars, one in pesos at the day's rate and one for bank transfers. When the dollar moved, the list had to be redone.
- **The same questions, all day.** How much battery is left? Does it come with the box? Is it scratched? None of that was in the Excel file.
- **Finding a device was hard.** A spreadsheet has no search and no filters, and it is hard to read on a phone.

The owner did not want to sell online. Sales close in the shop or in a chat, and that had to stay.

## The solution

A storefront, not a shop. People come in from their phone, filter, look at photos and specs, and tap **Buy**. A short form puts the whole order together and sends it over WhatsApp. The shop gets a message with everything it needs to answer.

Three decisions made the difference:

- **Models and units.** A model, for example "iPhone 15 128GB", is entered once. Then units are added: one per box if it is new, one per device if it is used, with its own battery health, real photos and warranty. When one sells, stock goes down by itself.
- **One exchange rate.** The owner enters the day's dollar rate and every price in pesos is recalculated.
- **The Excel file came in once.** We imported the spreadsheet so nobody had to type the devices in. Inventory and sales can still be exported to Excel when needed.

The site is live at [celledigstore.com.ar](https://celledigstore.com.ar). The shop manages devices, prices and offers from its own admin panel, on a computer or a phone.
