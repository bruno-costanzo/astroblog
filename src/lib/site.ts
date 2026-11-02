export const site = {
  name: "Bruno Costanzo",
  photo: "/me.webp",
  email: "dev.bcostanzo@gmail.com",
  github: "https://github.com/bruno-costanzo",
  linkedin: "https://www.linkedin.com/in/brunocostanzo/",
  // Ways to start a project. A contact with an empty value is not shown.
  // whatsapp: international number, digits only (for example "5491155550000").
  whatsapp: "41768283299",
  // calendar: a booking link (Calendly, Cal.com or similar).
  calendar: "https://calendly.com/dev-bcostanzo/charla",
  // Where Bruno works today. Every mention of it links to his team page.
  employer: { name: "Renuo AG", url: "https://www.renuo.ch/en/team/bruno-costanzo" },
};

// Turns "{employer}" in a copy string into a link to the employer, as HTML.
export const withEmployer = (text: string, linkClass = "") =>
  text.replace("{employer}", `<a href="${site.employer.url}" class="${linkClass}">${site.employer.name}</a>`);
