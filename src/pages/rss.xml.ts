import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
    const posts = await getCollection("blog");

    return rss({
        title: "Bruno Costanzo",
        description: "Escribo sobre Ruby, Rails y arquitectura de software.",
        site: context.site ?? "https://brunocostanzo.com",
        items: posts
            .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
            .map((post) => ({
                title: post.data.title,
                pubDate: post.data.pubDate,
                description: post.data.description,
                link: `/blog/${post.id}/`,
            })),
    });
}
