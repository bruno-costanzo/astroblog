// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://costanzo.blog",
  integrations: [
    icon(),
    // sitemap-index.xml for Google. Pages with the same content in other languages are linked.
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-AR", en: "en", it: "it" } },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "it"],
    routing: { prefixDefaultLocale: false },
  },
  redirects: {
    "/me": "/sobre-mi",
    "/contact": "/sobre-mi",
  },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
