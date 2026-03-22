import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Vidath Imayuru's Blog",
    description: "Thoughts and writings on programming, technology, and more.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.preview,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  });
}
