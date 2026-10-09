import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts, postUrl } from "./content";
import { site } from "./site";
import { ui, type Lang } from "../i18n";

export async function feed(context: APIContext, lang: Lang) {
  const posts = await getPosts(lang);

  return rss({
    title: site.name,
    description: ui[lang]["site.description"],
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: postUrl(post),
    })),
  });
}
