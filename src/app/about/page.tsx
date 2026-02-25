export default function AboutPage() {
  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '60px',
          alignItems: 'start',
        }}>
          <div>
            <h2 style={{
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
              marginBottom: '24px',
            }}>
              Short bio
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '48px' }}>
              Taylor Owen is the Beaverbrook Chair in Media, Ethics and Communications and the founding Director of{' '}
              <a href="https://www.mediatechdemocracy.com/" target="_blank" rel="noopener noreferrer">
                The Centre for Media, Technology and Democracy
              </a>{' '}
              at McGill University and the host of the Globe and Mail&rsquo;s{' '}
              <a href="https://www.theglobeandmail.com/podcasts/machines-like-us/" target="_blank" rel="noopener noreferrer">
                Machines Like Us
              </a>{' '}
              podcast.
            </p>

            <h2 style={{
              fontSize: '14px',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
              marginBottom: '24px',
            }}>
              Longer bio
            </h2>
            <div style={{ fontSize: '16px', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>
                Taylor Owen is the Beaverbrook Chair in Media, Ethics and Communications, the founding Director of{' '}
                <a href="https://www.mediatechdemocracy.com/" target="_blank" rel="noopener noreferrer">
                  The Centre for Media, Technology and Democracy
                </a>
                , the Principal Investigator of{' '}
                <a href="https://www.mediaecosystemobservatory.com/" target="_blank" rel="noopener noreferrer">
                  The Media Ecosystem Observatory
                </a>
                , and an Associate Professor at the Max Bell School of Public Policy at McGill University.
              </p>
              <p style={{ marginBottom: '16px' }}>
                He is the host of the Globe and Mail&rsquo;s{' '}
                <a href="https://www.theglobeandmail.com/podcasts/machines-like-us/" target="_blank" rel="noopener noreferrer">
                  Machines Like Us
                </a>{' '}
                podcast.
              </p>
              <p style={{ marginBottom: '16px' }}>
                He was previously an Assistant Professor of Digital Media and Global Affairs at the University of British Columbia and the Research Director of Tow Center for Digital Journalism at the Columbia School of Journalism. His Doctorate is from the University of Oxford and he has been a Trudeau and Banting scholar, an Action Canada Fellow and received the 2016 Public Policy Forum Emerging Leader award.
              </p>
              <p>
                He is the author of <em>Disruptive Power: The Crisis of the State in the Digital Age</em> (Oxford University Press, 2015) and the co-editor of <em>The World Won&rsquo;t Wait: Why Canada Needs to Rethink its Foreign Policies</em> (University of Toronto Press, 2015, with Roland Paris) and <em>Journalism After Snowden: The Future of the Free Press in the Surveillance State</em> (Columbia University Press, 2016, with Emily Bell).
              </p>
            </div>
          </div>

          <div className="about-photo" style={{
            position: 'sticky',
            top: '96px',
          }}>
            <img
              src="/images/headshot.jpg"
              alt="Taylor Owen"
              style={{
                width: '100%',
                borderRadius: '4px',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
