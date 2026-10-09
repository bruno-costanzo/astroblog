import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/content";
import { site } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
  });
}
