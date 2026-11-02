import { getCollection, type CollectionEntry } from "astro:content";
import { locales, localizePath, postsLang, type Lang } from "../i18n";

type Post = CollectionEntry<"blog">;

// English posts live in src/content/blog/en/, so their id starts with "en/".
export function postLang(post: Post): Lang {
  return post.id.startsWith("en/") ? "en" : "es";
}

export function postSlug(post: Post) {
  return post.id.replace(/^en\//, "");
}

export function postUrl(post: Post) {
  return localizePath(`/blog/${postSlug(post)}/`, postLang(post));
}

// The Italian site has no posts of its own, so it gets the Spanish ones.
export async function getPosts(lang: Lang) {
  return (await getCollection("blog", (post) => postLang(post) === postsLang(lang))).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function getTranslation(post: Post) {
  const key = post.data.translationKey;
  if (!key) return undefined;
  const posts = await getCollection("blog");
  return posts.find((other) => other.data.translationKey === key && postLang(other) !== postLang(post));
}

export async function getProjects() {
  return (await getCollection("projects")).sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.year - a.data.year ||
      a.data.name.localeCompare(b.data.name),
  );
}

type Case = CollectionEntry<"cases">;

// English and Italian cases live in src/content/cases/en/ and src/content/cases/it/.
export function caseLang(entry: Case): Lang {
  const prefix = entry.id.split("/")[0];
  return prefix === "en" || prefix === "it" ? prefix : "es";
}

export function caseSlug(entry: Case) {
  return entry.id.replace(/^(en|it)\//, "");
}

export function caseUrl(entry: Case) {
  return localizePath(`/proyectos/${caseSlug(entry)}/`, caseLang(entry));
}

export async function getCases(lang: Lang) {
  return (await getCollection("cases", (entry) => caseLang(entry) === lang)).sort((a, b) => a.data.order - b.data.order);
}

export async function getContributions() {
  return (await getCollection("opensource")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function formatDate(date: Date, lang: Lang, month: "short" | "long" = "short") {
  return date.toLocaleDateString(locales[lang], {
    day: "numeric",
    month,
    year: "numeric",
  });
}

export function readingMinutes(body = "") {
  return Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));
}

export function groupBy<T, K>(items: T[], key: (item: T) => K) {
  const groups = new Map<K, T[]>();
  for (const item of items) {
    const k = key(item);
    groups.set(k, [...(groups.get(k) ?? []), item]);
  }
  return groups;
}
