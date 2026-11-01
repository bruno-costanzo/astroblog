export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  es: {
    "site.role": "Desarrollador Ruby on Rails",
    "site.description": "Software a medida para negocios, profesionales y comunidades. Sistemas de gestión, tiendas y apps que funcionan, a un precio justo.",
    "nav.blog": "Blog",
    "nav.projects": "Proyectos",
    "nav.opensource": "Open Source",
    "nav.about": "Sobre mí",
    "nav.theme": "Cambiar tema",
    "nav.switch": "English",
    "home.posts": "Artículos",
    "home.projects": "Proyectos",
    "home.opensource": "Open source",
    "home.all": "Ver todo",
    "home.email": "Email",
    "blog.title": "Blog",
    "blog.intro": "Artículos sobre Ruby y Rails.",
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
    "site.role": "Ruby on Rails developer",
    "site.description": "Custom software for businesses, professionals and communities. Management systems, shops and apps that work, at a fair price.",
    "nav.blog": "Blog",
    "nav.projects": "Projects",
    "nav.opensource": "Open Source",
    "nav.about": "About",
    "nav.theme": "Toggle theme",
    "nav.switch": "Español",
    "home.posts": "Articles",
    "home.projects": "Projects",
    "home.opensource": "Open source",
    "home.all": "See all",
    "home.email": "Email",
    "blog.title": "Blog",
    "blog.intro": "Articles about Ruby and Rails.",
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
} as const;

export function useTranslations(lang: Lang) {
  return (key: keyof (typeof ui)["es"]) => ui[lang][key];
}

// Spanish paths are the canonical keys. English pages live under /en/ with English slugs.
const englishSegments: Record<string, string> = {
  proyectos: "projects",
  "sobre-mi": "about",
};

// localizePath("/sobre-mi", "en") -> "/en/about"
export function localizePath(path: string, lang: Lang) {
  if (lang === "es") return path;
  const translated = path.replace(/^\/([^/]+)/, (match, segment) => `/${englishSegments[segment] ?? segment}`);
  return `/en${translated}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
