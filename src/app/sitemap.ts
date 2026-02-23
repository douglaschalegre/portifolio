import { MetadataRoute } from 'next';
import { getAllBlogPostMeta } from '@/lib/blog/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPostMeta();

  return [
    {
      url: 'https://douglaschalegre.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://douglaschalegre.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://douglaschalegre.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: `https://douglaschalegre.com/blog/${post.year}/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
