import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export const dynamic = 'force-static'

const BASE_URL = 'https://www.taylorowen.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/writing', '/research', '/blog', '/podcasts', '/podcast', '/video', '/contact']
    .map(path => ({ url: `${BASE_URL}${path}` }))

  const posts = getAllPosts().map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  return [...pages, ...posts]
}
