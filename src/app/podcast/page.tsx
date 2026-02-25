export default function PodcastPage() {
  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '32px',
          color: 'var(--color-accent)',
          marginBottom: '8px',
          fontWeight: 400,
        }}>
          Machines Like Us
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          marginBottom: '24px',
          fontFamily: 'var(--font-body)',
          fontStyle: 'italic',
        }}>
          A podcast with the Globe and Mail.
        </p>
        <p style={{
          fontSize: '15px',
          lineHeight: 1.7,
          color: 'var(--color-text)',
          fontFamily: 'var(--font-body)',
          marginBottom: '24px',
          maxWidth: '720px',
        }}>
          We are living in an age of breakthroughs propelled by advances in artificial intelligence. Technologies that were once the realm of science fiction will become our reality: robot best friends, bespoke gene editing, brain implants that make us smarter. I sit down with the people shaping this rapidly approaching future and speak with entrepreneurs building world-changing technologies, lawmakers trying to ensure they{'\u2019'}re safe, and journalists and scholars working to understand how they{'\u2019'}re transforming our lives.
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          marginBottom: '48px',
        }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>Subscribe:</span>
          <a href="https://podcasts.apple.com/ca/podcast/machines-like-us/id1484910273" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Apple Podcasts</a>
          <span style={{ color: 'var(--color-text-secondary)' }}>|</span>
          <a href="https://open.spotify.com/show/3i7GpvRRKksv76DzCcB34J" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>Spotify</a>
          <span style={{ color: 'var(--color-text-secondary)' }}>|</span>
          <a href="https://www.youtube.com/@MachinesLikeUsPod" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>YouTube</a>
        </div>

        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{
            width: '100%',
            maxWidth: '720px',
            overflow: 'hidden',
            borderRadius: '10px',
            background: 'transparent',
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.podcasts.apple.com/ca/podcast/machines-like-us/id1484910273"
        />
      </div>
    </div>
  )
}
