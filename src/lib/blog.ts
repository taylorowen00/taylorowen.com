import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))

  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // gray-matter auto-parses YAML dates into JS Date objects (UTC midnight)
    // Convert to YYYY-MM-DD string to avoid timezone display issues
    const rawDate = data.date
    const dateStr = rawDate instanceof Date
      ? rawDate.toISOString().split('T')[0]
      : String(rawDate || '')

    return {
      slug,
      title: data.title || slug,
      date: dateStr,
      excerpt: data.excerpt || content.slice(0, 160) + '...',
      content,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const rawDate = data.date
  const dateStr = rawDate instanceof Date
    ? rawDate.toISOString().split('T')[0]
    : String(rawDate || '')

  return {
    slug,
    title: data.title || slug,
    date: dateStr,
    excerpt: data.excerpt || content.slice(0, 160) + '...',
    content,
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(markdown)
  return result.toString()
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}
