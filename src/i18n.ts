export const languages = ["es", "en", "it"] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  es: {
    "site.role": "Desarrollador de software",
    "site.tagline": "Software a medida",
    "site.description": "Software a medida para negocios, profesionales y comunidades. Sistemas nuevos y arreglos de sistemas que ya existen.",
    "nav.blog": "Blog",
    "nav.projects": "Proyectos",
    "nav.opensource": "Open Source",
    "nav.about": "Sobre mí",
    "nav.work": "Trabajemos",
    "nav.theme": "Cambiar tema",
    "nav.switch": "English",
    "home.posts": "Artículos",
    "home.projects": "Proyectos",
    "home.opensource": "Open source",
    "home.all": "Ver todo",
    "home.email": "Email",
    "blog.title": "Blog",
    "blog.intro": "Artículos sobre software: para quien necesita un sistema y para quien lo programa.",
    "post.minutes": "min de lectura",
    "tag.count.one": "artículo",
    "tag.count.other": "artículos",
    "projects.title": "Proyectos",
    "projects.intro": "Productos que construí para clientes y productos propios. Más abajo, gems y proyectos chicos.",
    "projects.cases": "Casos",
    "projects.side": "Gems y proyectos personales",
    "projects.more": "Hay más en",
    "projects.code": "Código",
    "case.client": "Para",
    "case.year": "Año",
    "case.role": "Rol",
    "case.stack": "Stack",
    "case.demo": "En uso",
    "case.features": "Qué hace",
    "case.desktop": "Escritorio",
    "case.mobile": "Celular",
    "case.back": "Todos los proyectos",
    "opensource.title": "Open Source",
    "opensource.merged": "Mergeado",
    "opensource.open": "En revisión",
    "opensource.issue": "Issue",
    "opensource.issueOpen": "Abierto",
    "opensource.fixed": "Resuelto",
    "about.title": "Sobre mí",
    "about.experience": "Experiencia",
    "about.contact": "Contacto",
    "about.now": "hoy",
  },
  en: {
    "site.role": "Software developer",
    "site.tagline": "Custom software",
    "site.description": "Custom software for businesses, professionals and communities. New systems, and fixes for the ones you already have.",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.opensource": "Open Source",
    "nav.about": "About",
    "nav.work": "Work with me",
    "nav.theme": "Toggle theme",
    "nav.switch": "Español",
    "home.posts": "Articles",
    "home.projects": "Projects",
    "home.opensource": "Open source",
    "home.all": "See all",
    "home.email": "Email",
    "blog.title": "Blog",
    "blog.intro": "Articles about software: for people who need a system and for people who build one.",
    "post.minutes": "min read",
    "tag.count.one": "article",
    "tag.count.other": "articles",
    "projects.title": "Projects",
    "projects.intro": "Products I built for clients and products of my own. Further down, gems and small projects.",
    "projects.cases": "Case studies",
    "projects.side": "Gems and side projects",
    "projects.more": "More on",
    "projects.code": "Code",
    "case.client": "For",
    "case.year": "Year",
    "case.role": "Role",
    "case.stack": "Stack",
    "case.demo": "In use",
    "case.features": "What it does",
    "case.desktop": "Desktop",
    "case.mobile": "Phone",
    "case.back": "All projects",
    "opensource.title": "Open Source",
    "opensource.merged": "Merged",
    "opensource.open": "In review",
    "opensource.issue": "Issue",
    "opensource.issueOpen": "Open",
    "opensource.fixed": "Fixed",
    "about.title": "About",
    "about.experience": "Experience",
    "about.contact": "Contact",
    "about.now": "now",
  },
  it: {
    "site.role": "Sviluppatore software",
    "site.tagline": "Software su misura",
    "site.description": "Software su misura per attività, professionisti e comunità. Sistemi nuovi e sistemi esistenti da sistemare.",
    "nav.blog": "Blog",
    "nav.projects": "Progetti",
    "nav.opensource": "Open Source",
    "nav.about": "Chi sono",
    "nav.work": "Lavoriamo",
    "nav.theme": "Cambia tema",
    "nav.switch": "Italiano",
    "home.posts": "Articoli",
    "home.projects": "Progetti",
    "home.opensource": "Open source",
    "home.all": "Vedi tutto",
    "home.email": "Email",
    "blog.title": "Blog",
    "blog.intro": "Articoli sul software: per chi ha bisogno di un sistema e per chi lo costruisce. Per ora sono in spagnolo, e alcuni anche in inglese.",
    "post.minutes": "min di lettura",
    "tag.count.one": "articolo",
    "tag.count.other": "articoli",
    "projects.title": "Progetti",
    "projects.intro": "Prodotti che ho costruito per clienti e prodotti miei. Più in basso, gem e progetti piccoli.",
    "projects.cases": "Casi",
    "projects.side": "Gem e progetti personali",
    "projects.more": "Ce ne sono altri su",
    "projects.code": "Codice",
    "case.client": "Per",
    "case.year": "Anno",
    "case.role": "Ruolo",
    "case.stack": "Stack",
    "case.demo": "In uso",
    "case.features": "Cosa fa",
    "case.desktop": "Desktop",
    "case.mobile": "Telefono",
    "case.back": "Tutti i progetti",
    "opensource.title": "Open Source",
    "opensource.merged": "Integrata",
    "opensource.open": "In revisione",
    "opensource.issue": "Issue",
    "opensource.issueOpen": "Aperta",
    "opensource.fixed": "Risolta",
    "about.title": "Chi sono",
    "about.experience": "Esperienza",
    "about.contact": "Contatti",
    "about.now": "oggi",
  },
} as const;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)["es"]) => ui[lang][key];
}

// Spanish paths are the canonical keys. Other languages live under /en/ and /it/ with their own slugs.
const segments: Record<Exclude<Lang, "es">, Record<string, string>> = {
  en: { proyectos: "projects", "sobre-mi": "about", "trabajar-conmigo": "work-with-me" },
  it: { proyectos: "progetti", "sobre-mi": "chi-sono", "trabajar-conmigo": "lavora-con-me" },
};

// localizePath("/sobre-mi", "en") -> "/en/about"
export function localizePath(path: string, lang: Lang) {
  if (lang === "es") return path;
  const translated = path.replace(/^\/([^/]+)/, (match, segment) => `/${segments[lang][segment] ?? segment}`);
  return `/${lang}${translated}`;
}

// The same page in every language, for the language switch and hreflang links.
export function alternates(path: string) {
  return Object.fromEntries(languages.map((lang) => [lang, localizePath(path, lang)])) as Record<Lang, string>;
}

export const locales: Record<Lang, string> = { es: "es-ES", en: "en-GB", it: "it-IT" };

// Blog posts are written in Spanish and English only. The Italian site lists the Spanish ones.
export function postsLang(lang: Lang): Exclude<Lang, "it"> {
  return lang === "it" ? "es" : lang;
}
