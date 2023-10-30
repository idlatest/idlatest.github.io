import rss from "@astrojs/rss";
import { CollectionEntry, getCollection } from "astro:content";

export async function GET(context) {
  const posts: CollectionEntry<"posts">[] = await getCollection("posts");

  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
