import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        {posts.length === 0 ? (
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px' }}>
            Posts coming soon.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {posts.map((post) => {
              const date = new Date(post.date + 'T12:00:00')
              const month = date.toLocaleDateString('en-US', { month: 'short' })
              const day = date.getDate()
              const year = date.getFullYear()

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{
                    display: 'flex',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                  }}
                >
                  {/* Date column (desktop) */}
                  <div className="blog-date-col" style={{
                    width: '120px',
                    flexShrink: 0,
                    paddingRight: '24px',
                    textAlign: 'right',
                    paddingTop: '2px',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      color: 'var(--color-accent)',
                      display: 'block',
                      lineHeight: 1.4,
                    }}>
                      {month} {day}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      color: 'var(--color-accent)',
                      display: 'block',
                      lineHeight: 1.4,
                    }}>
                      {year}
                    </span>
                  </div>

                  {/* Vertical line (desktop) */}
                  <div className="blog-divider" style={{
                    width: '1px',
                    backgroundColor: 'var(--color-border-light)',
                    flexShrink: 0,
                  }} />

                  {/* Content column */}
                  <div className="blog-content-col" style={{ paddingLeft: '24px', flex: 1 }}>
                    {/* Mobile date (hidden on desktop) */}
                    <span className="blog-date-mobile" style={{
                      display: 'none',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      color: 'var(--color-accent)',
                      marginBottom: '4px',
                    }}>
                      {month} {day}, {year}
                    </span>
                    <h2
                      className="blog-title"
                      style={{
                        fontSize: '20px',
                        fontWeight: 400,
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '6px',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {post.title}
                    </h2>
                    <p style={{
                      fontSize: '15px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        .container a:hover .blog-title {
          color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  )
}
