'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid var(--color-border)',
    borderRadius: '6px',
    fontSize: '15px',
    fontFamily: 'var(--font-body)',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block' as const,
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '6px',
  }

  return (
    <div className="page-enter" style={{ padding: '60px 0' }}>
      <div className="container-narrow">
        <p style={{
          fontSize: '17px',
          color: 'var(--color-text-secondary)',
          marginBottom: '40px',
        }}>
          Contact me using the form below.
        </p>

        {submitted ? (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
          }}>
            <p style={{ fontSize: '18px', fontFamily: 'var(--font-heading)' }}>
              Thank you for your message.
            </p>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
              I&rsquo;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '560px' }}>
            <div className="contact-name-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '16px',
            }}>
              <div>
                <label style={labelStyle}>
                  First Name <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(required)</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>
                  Last Name <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(required)</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>
                Your Email <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(required)</span>
              </label>
              <input
                type="email"
                name="email"
                required
                style={inputStyle}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>
                Message <span style={{ color: 'var(--color-text-secondary)', fontWeight: 400 }}>(required)</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                style={{
                  ...inputStyle,
                  resize: 'vertical' as const,
                }}
              />
            </div>

            {error && (
              <p style={{
                color: '#c0392b',
                fontSize: '14px',
                marginBottom: '16px',
              }}>
                {error}
              </p>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '12px 32px',
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontFamily: 'var(--font-body)',
                  cursor: loading ? 'default' : 'pointer',
                  transition: 'background-color 0.2s',
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        )}

        {/* Speaking engagement CTA */}
        <div style={{
          marginTop: '64px',
          paddingTop: '0',
        }}>
          <p style={{
            fontSize: '17px',
            color: 'var(--color-text-secondary)',
            marginBottom: '20px',
          }}>
            To inquire about speaking engagements, kindly follow the link below.
          </p>
          <a
            href="https://www.speakers.ca/speakers/taylor-owen/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              backgroundColor: 'var(--color-accent)',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '15px',
              fontFamily: 'var(--font-body)',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}
