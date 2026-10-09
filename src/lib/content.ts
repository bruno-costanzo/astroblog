import { getCollection } from "astro:content";

export async function getPosts() {
  return (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
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

export function formatDate(date: Date, month: "short" | "long" = "short") {
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month,
    year: "numeric",
  });
}

export function readingTime(body = "") {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min de lectura`;
}

export function groupBy<T, K>(items: T[], key: (item: T) => K) {
  const groups = new Map<K, T[]>();
  for (const item of items) {
    const k = key(item);
    groups.set(k, [...(groups.get(k) ?? []), item]);
  }
  return groups;
}
