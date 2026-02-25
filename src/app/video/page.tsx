'use client'

import { useState } from 'react'

const videos = [
  { id: 'QB7KrTbI-i4', title: 'Canadians Don\u2019t Trust AI. Here\u2019s How to Fix That.' },
  { id: 'nTtL7EdMRsg', title: 'The Future According to Gen Z (Ava Smithing and Sneha Revanur)' },
  { id: 'ARimWI_2AOM', title: 'Bonus: Inside the New Social Media Platform for AI Agents (Derek Ruths)' },
  { id: 'TQmqSjtzoCE', title: 'Four Predictions on How AI Will Transform Your World This Year' },
  { id: 'Q72flbyc2yQ', title: 'Could an Alternative AI Save Us From a Bubble? (Gary Marcus)' },
  { id: 'ORTbtScn6w8', title: 'AI Music is Everywhere. Is it Legal? (Ed Newton Rex)' },
  { id: 'hTXhkBLc1TQ', title: 'Jim Balsillie: \u2018Canada\u2019s Problem Isn\u2019t Trump. Canada\u2019s Problem Is Canada\u2019' },
  { id: 'enuvdNBK4ww', title: 'Taylor Owen from McGill\u2019s Centre for Media, Tech & Democracy | Get Fact' },
  { id: 'unXIcU_sqRU', title: 'Is China Winning the Technological Arms Race? (Keyu Jin)' },
  { id: '2IZkTnsFiVo', title: 'The Man Behind the World\u2019s Most Coveted Microchip (Stephen Witt)' },
  { id: 'g9EZ3mXFGzI', title: 'Can AI Lead Us to the Good Life? (Rutger Bregman)' },
  { id: '7gWHRbW-8xo', title: 'Geoffrey Hinton vs. The End of the World' },
  { id: 'm2HL0SlTNvs', title: 'How Disinformation is Threatening Canada\u2019s Democracy' },
  { id: 'saLx5fEccdA', title: 'How Can We Keep Kids Safe Online in the Age of AI?' },
  { id: 'LZcLEOCmmNE', title: 'Gary Marcus Makes the Strongest Case Yet That AI Is a Bubble' },
  { id: 'dy01VVCeBLw', title: 'Wikipedia Won Our Trust. Can We Use That Model Everywhere? (Jimmy Wales)' },
  { id: 'Obe22Rr29RE', title: 'How to Survive the \u201CBroligarchy\u201D (Carole Cadwalladr)' },
  { id: 'G2I7ynjiCAU', title: 'AI is Upending Higher Education. Is That a Bad Thing? (Niall Ferguson & Connor Grennan)' },
  { id: 'Ipe6udE0eEE', title: 'Are Canadian Voters Vulnerable to Online Disinformation? | The Agenda' },
  { id: 'zMgHfWGXzQc', title: 'Canada\u2019s (Dis)information Crisis: 3 Major Threats Going Into the 45th Federal Election' },
  { id: 'v1MuQP_ag2g', title: 'The Future of Digital Media with Douglas Rushkoff' },
  { id: '9dJlPReG9Xw', title: 'Evaluating the state of the Platform Governance agenda' },
  { id: 'MtldO1A0uI0', title: 'A New Era for Conspiracy Theories in Canada?' },
  { id: 'CXFBCrvz2lE', title: 'Is Facebook a threat to democracy?' },
  { id: 'UqGPW14RSBE', title: 'Governing Big Tech in Canada' },
  { id: 'jgEXxdUjdbA', title: 'Munk Debate Podcast on Big Tech' },
  { id: 'WHX9ainF4eQ', title: 'Think 2030: Social Media as a force for good' },
  { id: '0ZXtfFRpAzs', title: 'CPAC interview about Christchurch call' },
  { id: 'QCmYhHV1VmQ', title: 'Why is Everyone Mad at Tech\u2026and what to do about it' },
  { id: 'tFgLIOlb5u8', title: 'Why Fake News Matters For Democracy' },
  { id: 'VLVff8Y8dHo', title: 'Behind the screens: Who Decodes what I view online' },
  { id: 'wTQmuTZmDOc', title: 'Ungoverned Space: How Surveillance Capitalism and AI Undermine Democracy' },
]

function VideoCard({ video }: { video: typeof videos[number] }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
        <h3 style={{
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          color: 'var(--color-text)',
          marginTop: '12px',
          lineHeight: 1.4,
        }}>
          {video.title}
        </h3>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => setPlaying(true)}
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          background: '#000',
        }}
      >
        <img
          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
          alt={video.title}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </button>
      <h3 style={{
        fontSize: '14px',
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
        marginTop: '12px',
        lineHeight: 1.4,
      }}>
        {video.title}
      </h3>
    </div>
  )
}

export default function VideoPage() {
  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container">
        <div className="video-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '40px 24px',
        }}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
