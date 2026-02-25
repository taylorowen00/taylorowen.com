export default function PodcastsPage() {
  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        {/* Machines Like Us */}
        <section className="podcast-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '80px',
          paddingBottom: '80px',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 3vw, 36px)',
              color: 'var(--color-accent)',
              fontWeight: 400,
              marginBottom: '20px',
            }}>
              Machines Like Us
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 600,
              marginBottom: '16px',
              color: 'var(--color-text-secondary)',
            }}>
              A podcast with the Globe and Mail.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
              We are living in an age of breakthroughs propelled by advances in artificial intelligence. Technologies that were once the realm of science fiction will become our reality: robot best friends, bespoke gene editing, brain implants that make us smarter.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              I sit down with the people shaping this rapidly approaching future and speak with entrepreneurs building world-changing technologies, lawmakers trying to ensure they&rsquo;re safe, and journalists and scholars working to understand how they&rsquo;re transforming our lives.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { label: 'Apple Podcasts', href: '#' },
                { label: 'Spotify', href: '#' },
                { label: 'Web', href: '#' },
                { label: 'YouTube', href: '#' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    padding: '8px 16px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--color-bg-alt)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-border-light)',
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
          }}>
            {/* Replace with podcast artwork */}
            Machines Like Us artwork
          </div>
        </section>

        {/* Attention Control */}
        <section className="podcast-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(28px, 3vw, 36px)',
              color: 'var(--color-accent)',
              fontWeight: 400,
              marginBottom: '20px',
            }}>
              Attention Control
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
              Ever since the Cambridge Analytica scandal exposed the stunning scale of attempts to obtain voter data in an attempt to subvert the democratic process, countries around the world have been scrambling to figure out how to protect elections, and Canada is no different. That&rsquo;s why during the 2019 federal election campaign, &ldquo;Attention Control&rdquo; podcast will provide listeners with reliable, data-driven information to distinguish what&rsquo;s real from what&rsquo;s fake and reveal the impact of misinformation on our vote.
            </p>
            <div>
              <a
                href="#"
                style={{
                  fontSize: '14px',
                  padding: '8px 16px',
                  border: '1px solid var(--color-border)',
                  borderRadius: '6px',
                  color: 'var(--color-text)',
                  textDecoration: 'none',
                }}
              >
                Web
              </a>
            </div>
          </div>
          <div style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--color-bg-alt)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-border-light)',
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
          }}>
            {/* Replace with podcast artwork */}
            Attention Control artwork
          </div>
        </section>
      </div>
    </div>
  )
}
