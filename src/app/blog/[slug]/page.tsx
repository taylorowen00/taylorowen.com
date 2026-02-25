import { getAllPostSlugs, getPostBySlug, markdownToHtml } from '@/lib/blog'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="page-enter container-narrow" style={{ padding: '60px 0' }}>
        <h1>Post not found</h1>
        <Link href="/blog">Back to blog</Link>
      </div>
    )
  }

  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <article className="container-narrow">
        <Link
          href="/blog"
          style={{
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            display: 'inline-block',
            marginBottom: '32px',
          }}
        >
          &larr; Back to blog
        </Link>

        <h1 style={{
          fontSize: 'clamp(28px, 3.5vw, 40px)',
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: '12px',
        }}>
          {post.title}
        </h1>

        <time style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          display: 'block',
          marginBottom: '48px',
        }}>
          {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>

        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          style={{
            fontSize: '17px',
            lineHeight: 1.85,
          }}
        />
      </article>

      <style>{`
        .container-narrow div > p { margin-bottom: 20px; }
        .container-narrow div > h2 { font-size: 24px; font-family: var(--font-heading); margin: 40px 0 16px; font-weight: 400; }
        .container-narrow div > h3 { font-size: 20px; font-family: var(--font-heading); margin: 32px 0 12px; font-weight: 400; }
        .container-narrow div > ul, .container-narrow div > ol { margin: 16px 0; padding-left: 24px; }
        .container-narrow div > blockquote { border-left: 3px solid var(--color-accent); padding-left: 20px; margin: 24px 0; color: var(--color-text-secondary); font-style: italic; }
        .container-narrow div > pre { background: var(--color-bg-alt); padding: 20px; border-radius: 6px; overflow-x: auto; margin: 24px 0; font-size: 14px; }
        .container-narrow div > hr { border: none; border-top: 1px solid var(--color-border); margin: 40px 0; }
        .youtube-embed { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 32px 0; border-radius: 8px; }
        .youtube-embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px; }
        .container-narrow div > a { color: var(--color-accent); text-decoration: underline; text-underline-offset: 2px; }
        .container-narrow div > a:hover { opacity: 0.8; }
      `}</style>
    </div>
  )
}
