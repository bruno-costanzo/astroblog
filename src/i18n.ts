export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  es: {
    "site.role": "Desarrollador Ruby on Rails",
    "site.description": "Desarrollador Ruby on Rails en Zúrich. Escribo sobre Rails y desarrollo de software.",
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
    "projects.intro": "Gems y proyectos personales. Hay más en",
    "projects.code": "Código",
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
    "site.description": "Ruby on Rails developer in Zürich. I write about Rails and software development.",
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
    "projects.intro": "Gems and side projects. More on",
    "projects.code": "Code",
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
