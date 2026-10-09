import { getCollection, type CollectionEntry } from "astro:content";
import { localizePath, type Lang } from "../i18n";

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

export async function getPosts(lang: Lang) {
  return (await getCollection("blog", (post) => postLang(post) === lang)).sort(
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

export async function getContributions() {
  return (await getCollection("opensource")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function formatDate(date: Date, lang: Lang, month: "short" | "long" = "short") {
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
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
