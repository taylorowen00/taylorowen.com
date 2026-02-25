import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const posts = getAllPosts().slice(0, 5)

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero-section" style={{
        padding: '100px 0 80px',
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: 1.2,
            fontWeight: 400,
            marginBottom: '0',
          }}>
            Academic, author and podcaster exploring how digital technologies are reshaping democratic societies and how they should be governed.
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--color-text-secondary)',
            marginTop: '24px',
            lineHeight: 1.7,
          }}>
            Beaverbrook Chair in Media, Ethics and Communication at McGill University. Founding Director of the{' '}
            <a href="https://www.mediatechdemocracy.com/" target="_blank" rel="noopener noreferrer">
              Centre for Media, Technology and Democracy
            </a>
            . Host of{' '}
            <a href="https://www.theglobeandmail.com/podcasts/machines-like-us/" target="_blank" rel="noopener noreferrer">
              Machines Like Us
            </a>.
          </p>
        </div>
      </section>

      {/* Latest from the blog */}
      {posts.length > 0 && (
        <section style={{
          padding: '60px 0',
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '36px',
            }}>
              <h2 style={{ fontSize: '14px', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)' }}>
                Latest
              </h2>
              <Link href="/blog" style={{ fontSize: '14px' }}>
                View all &rarr;
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="post-row"
                  style={{
                    display: 'block',
                    padding: '20px 0',
                    borderTop: '1px solid var(--color-border-light)',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span className="home-post-title" style={{ fontSize: '17px' }}>{post.title}</span>
                    <span className="post-date" style={{ fontSize: '14px', color: 'var(--color-text-secondary)', flexShrink: 0, marginLeft: '24px' }}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  {post.excerpt && (
                    <p style={{
                      fontSize: '15px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginTop: '6px',
                    }}>
                      {post.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
