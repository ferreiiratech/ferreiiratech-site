import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ferreiiratech.com"

  // Para adicionar URLs dinâmicas
  // const posts = await fetchPosts(); // banco de dados

  //   export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const baseUrl = "https://ferreiiratech.com";

  //   const posts = await fetchPosts(); // banco, CMS, fs, etc.

  //   const postUrls = posts.map((post) => ({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: new Date(post.updatedAt),
  //     changeFrequency: "monthly",
  //     priority: 0.7,
  //   }));

  //   return [
  //     {
  //       url: `${baseUrl}/`,
  //       lastModified: new Date(),
  //       priority: 1.0,
  //     },
  //     ...postUrls,
  //   ];
  // }

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/site`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
